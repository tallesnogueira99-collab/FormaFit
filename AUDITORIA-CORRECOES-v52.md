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
