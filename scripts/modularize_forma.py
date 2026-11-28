import json
import pathlib
import re

root = pathlib.Path(".")
index = root / "index.html"
html = index.read_text(encoding="utf-8")
counts = {"script": 0, "style": 0}

def extract(kind, match):
    attrs, body = match.group(1).strip(), match.group(2)
    if kind == "script" and "vercel.live/_next-live/feedback/feedback.js" in attrs:
        return ""
    counts[kind] += 1
    number = counts[kind]
    folder = "js" if kind == "script" else "styles"
    ext = "js" if kind == "script" else "css"
    filename = f"{number:02d}-inline-{kind}-{number:02d}.{ext}"
    directory = root / folder
    directory.mkdir(exist_ok=True)
    (directory / filename).write_text(body.strip() + "\n", encoding="utf-8")
    if kind == "script":
        return f'<script {attrs} src="./{folder}/{filename}"></script>' if attrs else f'<script src="./{folder}/{filename}"></script>'
    empty_style = f"<style {attrs}></style>" if attrs else ""
    return f'<link rel="stylesheet" href="./{folder}/{filename}">' + empty_style

# Scripts first: HTML-like strings inside JavaScript must not be treated as markup.
html = re.sub(r"<script\b([^>]*)>(.*?)</script\s*>",
              lambda m: extract("script", m), html, flags=re.I | re.S)
html = re.sub(r"<style\b([^>]*)>(.*?)</style\s*>",
              lambda m: extract("style", m), html, flags=re.I | re.S)

if counts != {"script": 16, "style": 16}:
    raise SystemExit(f"Unexpected inline block counts: {counts}")
index.write_text(html, encoding="utf-8")

sw = root / "sw.js"
service_worker = sw.read_text(encoding="utf-8").replace("forma-pwa-v132", "forma-pwa-v133")
assets = (
    [f"./styles/{i:02d}-inline-style-{i:02d}.css" for i in range(1, 17)]
    + [f"./js/{i:02d}-inline-script-{i:02d}.js" for i in range(1, 17)]
)
core = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg",
        "./icon-192.png", "./icon-512.png"] + assets
service_worker, replacements = re.subn(
    r"const CORE = .*?;",
    "const CORE = " + json.dumps(core) + ";",
    service_worker, count=1
)
if replacements != 1:
    raise SystemExit("Could not update the service worker CORE list")
sw.write_text(service_worker, encoding="utf-8")

(root / "MODULARIZACAO.md").write_text(
    "# Modularização do FORMA\n\n"
    "O index.html mantém sua estrutura e ordem originais, mas os 16 blocos CSS "
    "e 16 blocos JavaScript inline foram extraídos para styles/ e js/. Os scripts "
    "continuam clássicos e síncronos, sem async, defer ou módulos. Os elementos "
    "style com IDs foram mantidos vazios para compatibilidade com código que os "
    "consulta por ID. As três inclusões do feedback lateral do Vercel foram removidas.\n\n"
    "O service worker usa forma-pwa-v133 e pré-armazena todos os arquivos CSS/JS "
    "extraídos. Ao adicionar blocos inline no futuro, atualize os arquivos, a ordem "
    "das referências e a lista CORE do sw.js, incrementando a versão do cache.\n",
    encoding="utf-8"
)
print(f"Extracted {counts}; index.html={index.stat().st_size} bytes")
