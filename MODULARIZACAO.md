# Estrutura do FORMA

O FORMA continua sendo um aplicativo estático de HTML, CSS e JavaScript nativos. Não foi introduzido framework, bundler ou etapa de compilação.

## Como os arquivos estão organizados

- index.html: estrutura e marcação das telas.
- styles/: sete folhas de estilo organizadas por área.
- js/: dezesseis scripts extraídos na mesma sequência dos blocos originais.
- sw.js: service worker e pré-cache de todos os recursos essenciais.
- manifest.webmanifest e ícones: mantidos sem alterações.

## Regras para futuras alterações

1. Os scripts em js/ são scripts clássicos, não módulos ES. Preserve rigorosamente a ordem em que os elementos script aparecem no index.html.
2. Não adicione async ou defer aos scripts locais e não os reordene. O aplicativo usa funções globais, handlers inline e estado compartilhado.
3. Os estilos foram agrupados somente quando não havia script entre os blocos originais. Preserve a ordem das folhas no HTML.
4. Ao criar um novo arquivo essencial, adicione seu caminho à lista CORE em sw.js e incremente CACHE_NAME para atualizar o cache instalado.
5. Não limpe localStorage, perfis ou dados do Supabase em testes. Use um ambiente/conta de teste.
6. Esta separação não altera fórmulas, regras de negócio, textos, estrutura dos dados ou integrações do aplicativo.

## Folhas de estilo

- 01-app-shell.css — base visual, treino, sessão e áreas centrais.
- 02-cardio-planning.css — planejamento e biblioteca cardiovascular.
- 03-nutrition-planning.css — construtor e planejamento alimentar.
- 04-file-library.css — central de arquivos.
- 05-settings-layout.css — layout das configurações.
- 06-settings-help-tour.css — configurações, ajuda e tour.
- 07-settings-navigation.css — navegação das configurações.

## Scripts

Os nomes dos arquivos js/ indicam sua área principal. Alguns scripts são correções incrementais que precisam permanecer na posição original; não os consolidar apenas por semelhança de assunto.
