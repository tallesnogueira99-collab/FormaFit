# FORMA v48 — Importação de bioimpedância compacta

## Alterações
- Reformulada a área de importação de bioimpedância na Visão geral para um cartão mais compacto, com identidade visual alinhada ao FORMA.
- Substituída a sequência visual de três etapas por uma área de seleção de arquivo mais clara, data de medição ao lado e orientações recolhíveis.
- Mostra nome e tamanho do arquivo selecionado antes da importação.
- Mantidos os IDs dos controles de importação e o fluxo existente de leitura, conferência, confirmação, limpeza e gravação dos dados.
- Cache do service worker atualizado para `forma-pwa-v48`.

## Verificações realizadas
- Os seis blocos de JavaScript embutidos passaram em `node --check`.
- O arquivo ZIP passou no teste de integridade.
- A análise estática de IDs aponta alguns duplicados que correspondem a expressões/templates dinâmicos preexistentes (`${x.id}` e `import_`), não a novos IDs adicionados pela reformulação.

## Limitações
- Não foi executado teste interativo em navegador nem teste real de importação de laudos.
- PDFs escaneados como imagem continuam sem OCR; o importador depende de texto selecionável.
- A leitura reconhece somente os rótulos e formatos cobertos pelo parser atual. Confira os valores apresentados antes de confirmar.
