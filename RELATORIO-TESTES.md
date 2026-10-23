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


## v50 — ícones da janela de conta
- Ícones de sincronização, gerenciamento, sair e exclusão substituídos por SVGs vetoriais de traço consistente.
- Setas de navegação alinhadas e estilos dimensionados para telas móveis.
- Cache PWA atualizado para forma-pwa-v50.
- Validação de sintaxe JavaScript e integridade do ZIP executada; testes reais de login/Supabase não executados.


## v51 — auditoria e correções de Progresso > Alimentação
- Corrigida a seleção visual do gráfico: todas as datas do período são renderizadas; períodos longos usam rolagem horizontal em vez de omitir datas.
- Criado critério compartilhado para validar registros alimentares e agregar valores por dia.
- Contagem de dias, médias, gráfico, indicadores de constância e relatórios usam a mesma agregação diária.
- Períodos personalizados acima de 366 dias são limitados de forma explícita ao trecho final de 366 dias, mantendo o mesmo intervalo entre tela e exportação.
- Exportação inclui registros de peso/cintura e composição corporal disponíveis no período.
- Micronutrientes e resumo de composição corporal usam o intervalo normalizado da tela.
- Validação executada: todos os scripts JavaScript embutidos passaram em `node --check`; integridade do ZIP verificada após empacotamento.
- Limitação: não foi executado teste interativo no navegador nem validação com os dados reais da conta Supabase.


# FORMA v52 — proteção de rascunhos na execução do treino

## Correção aplicada
- Antes de navegar para outra série ou exercício, o aplicativo força a gravação dos valores atualmente visíveis (carga, repetições e descanso).
- Se a gravação local falhar, a navegação é interrompida para evitar trocar a tela e descartar a edição que ainda está visível.
- A função de salvamento do rascunho retorna um resultado explícito; a falha não provoca uma reconstrução imediata da tela que poderia interromper a edição e fechar o teclado.
- Atualizada a versão do cache do service worker para `forma-pwa-v52`, para que a versão nova não fique presa no cache anterior.

## Testes executados
- Validação de sintaxe dos scripts JavaScript embutidos.
- Verificação de integridade do ZIP final.
- Revisão estática dos caminhos de navegação entre séries e exercícios.

## Limitações
- Não foi possível executar testes reais no navegador Android nem confirmar sincronização com a conta Supabase do usuário nesta sessão.
- A correção reduz o risco de perda de rascunhos durante a navegação; não comprova que todos os episódios dos vídeos tenham uma única causa.
