# FORMA v53 — correção do indicador Alimentação em Progresso

## Causa identificada
O seletor `.progress-switch` usa três colunas iguais. Todos os botões recebem `padding: 11px 14px`, ícone fixo de 19 px e `gap: 8px`. Em telas estreitas, o botão central “Alimentação” precisa acomodar um rótulo mais longo que “Treinos” e “Corpo”; o espaço interno disponível não é suficiente, deixando o indicador ativo visualmente apertado e sem envolver adequadamente ícone e texto.

## Solução aplicada
- Regra CSS limitada a `#progressNutritionTab` e somente em telas de até 480 px.
- Reduzidos espaçamento interno, intervalo entre ícone e rótulo e tamanho do ícone/fonte apenas nesse botão.
- Mantido `white-space: nowrap` para evitar quebra do rótulo.
- Os botões Treinos e Corpo, o layout geral e os estilos de estado ativo permanecem inalterados.
- Atualizado o cache do service worker para `forma-pwa-v53`.

## Verificações
- Os seis blocos JavaScript embutidos passaram em `node --check`.
- Alteração CSS restrita ao botão de Alimentação em telas estreitas.
- ZIP verificado após geração.

## Limitação
Não foi possível executar a versão dentro do Chrome Android nesta sessão. A correção foi validada por inspeção do CSS e sintaxe, e deve ser conferida visualmente no aparelho após a publicação/atualização do cache.
