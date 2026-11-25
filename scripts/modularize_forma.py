from html.parser import HTMLParser
from pathlib import Path
import re

def normalize_trailing_whitespace(value):
    value = re.sub(r"[ \t]+(?=\r?$)", "", value, flags=re.M)
    return value.rstrip("\r\n") + "\n"

src = Path("index.html").read_text(encoding="utf-8")
lines = src.splitlines(True)
starts = [0]
for line in lines:
    starts.append(starts[-1] + len(line))

class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.cur = None
        self.items = []

    def get_offset(self):
        line, col = self.getpos()
        return starts[line - 1] + col

    def handle_starttag(self, tag, attrs):
        if tag in ("style", "script"):
            self.cur = {"tag": tag, "start": self.get_offset(), "attrs": dict(attrs), "body": ""}

    def handle_data(self, data):
        if self.cur is not None:
            self.cur["body"] += data

    def handle_endtag(self, tag):
        if self.cur is not None and tag == self.cur["tag"]:
            offset = self.get_offset()
            self.cur["end"] = src.find(">", offset) + 1
            self.items.append(self.cur)
            self.cur = None

parser = Parser()
parser.feed(src)
styles = [x for x in parser.items if x["tag"] == "style"]
scripts = [x for x in parser.items if x["tag"] == "script" and x["body"].strip()]
assert len(styles) == 16, f"Esperados 16 blocos CSS; encontrados {len(styles)}"
assert len(scripts) == 16, f"Esperados 16 blocos JS; encontrados {len(scripts)}"

style_names = [
    "01-app-shell.css", "02-cardio-planning.css", "03-nutrition-planning.css",
    "04-file-library.css", "05-settings-layout.css", "06-settings-help-tour.css",
    "07-settings-navigation.css"
]
js_names = [
    "01-account-profile-fallback.js", "02-app-core.js", "03-training-progress.js",
    "04-cardio-progress-navigation.js", "05-floating-timer.js",
    "06-bioimpedance-import-preview.js", "07-cardio-session-engine.js",
    "08-weekly-cardio-plan.js", "09-import-export-center.js",
    "10-file-center-workflow.js", "11-data-workflows.js", "12-area-navigation.js",
    "13-nutrition-planning.js", "14-file-overlay-compatibility.js",
    "15-settings-help-tour.js", "16-settings-return-navigation.js"
]
Path("styles").mkdir(exist_ok=True)
Path("js").mkdir(exist_ok=True)

groups = []
group = []
for item in parser.items:
    if item["tag"] == "script":
        if group:
            groups.append(group)
            group = []
    elif item["tag"] == "style":
        group.append(item)
if group:
    groups.append(group)
assert len(groups) == 7, f"Esperados 7 grupos CSS; encontrados {len(groups)}"

replacements = []
for group_index, group_items in enumerate(groups):
    name = style_names[group_index]
    css_content = "\n".join(x["body"] for x in group_items)
    if name == "03-nutrition-planning.css":
        css_content = normalize_trailing_whitespace(css_content)
    Path("styles", name).write_text(css_content, encoding="utf-8")
    for item_index, item in enumerate(group_items):
        ident = item["attrs"].get("id")
        if item_index == 0:
            value = f'<link rel="stylesheet" href="./styles/{name}">'
            if ident:
                value += f'<style id="{ident}"></style>'
        else:
            value = f'<style id="{ident}"></style>' if ident else ""
        replacements.append((item["start"], item["end"], value))

for index, item in enumerate(scripts):
    name = js_names[index]
    js_content = item["body"]
    if name in {"02-app-core.js", "07-cardio-session-engine.js"}:
        js_content = normalize_trailing_whitespace(js_content)
    Path("js", name).write_text(js_content, encoding="utf-8")
    ident = item["attrs"].get("id")
    value = "<script" + (f' id="{ident}"' if ident else "") + f' src="./js/{name}"></script>'
    replacements.append((item["start"], item["end"], value))

for start, end, value in sorted(replacements, reverse=True):
    src = src[:start] + value + src[end:]

feedback_pattern = r'<script\b(?=[^>]*src=["\']https://vercel\.live/_next-live/feedback/feedback\.js["\'])[^>]*>\s*</script>'
src, feedback_removed = re.subn(feedback_pattern, "", src, flags=re.I)
assert feedback_removed == 3, f"Esperadas 3 inclusões do Vercel Feedback; removidas {feedback_removed}"
Path("index.html").write_text(src, encoding="utf-8")

sw_path = Path("sw.js")
sw_original = sw_path.read_text(encoding="utf-8")
assert sw_original.count("forma-pwa-v131") == 1, "Cache do service worker mudou; revisão manual necessária"
sw = sw_original.replace("forma-pwa-v131", "forma-pwa-v132")
assets = [f"./styles/{name}" for name in style_names] + [f"./js/{name}" for name in js_names]
core = 'const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png",\n  '
core += ",\n  ".join('"' + asset + '"' for asset in assets) + "];"
sw, core_replacements = re.subn(r"const CORE = \[[^;]*\];", core, sw, count=1, flags=re.S)
assert core_replacements == 1, "Não foi possível atualizar o precache do service worker"
assert all(asset in sw for asset in assets), "Faltou recurso no precache"
sw_path.write_text(sw, encoding="utf-8")

Path("MODULARIZACAO.md").write_text("""# Estrutura do FORMA

A aplicação continua sendo HTML, CSS e JavaScript nativos, sem framework ou etapa de compilação.

- index.html: estrutura e marcação das telas.
- styles/: sete folhas de estilo organizadas por área.
- js/: dezesseis scripts clássicos, na mesma ordem dos blocos originais.
- sw.js: cache atualizado com os novos recursos essenciais.

## Cuidados para manutenção

1. Preserve a ordem dos scripts em index.html; eles continuam clássicos e síncronos.
2. Não adicione async, defer ou type=module aos scripts locais.
3. Preserve a ordem das folhas de estilo no HTML.
4. Inclua novos recursos essenciais no array CORE do service worker e incremente CACHE_NAME.
5. Não limpe localStorage, perfis nem dados do Supabase em testes.
6. Esta separação não altera fórmulas, regras de negócio, textos, estrutura de dados ou integrações.
""", encoding="utf-8")

print("Extração concluída: 7 CSS, 16 JS; 3 scripts de feedback removidos.")
