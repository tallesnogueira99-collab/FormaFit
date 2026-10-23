# FORMA v53 — Auditoria e correções em Progresso > Alimentação

## Diagnóstico

1. **Indicador de seção espremido:** `.progress-switch` divide o espaço em três colunas iguais, mas cada botão tinha padding horizontal de 14 px, ícone de 19 px, gap de 8 px e rótulo em linha. Em larguras estreitas, a soma ultrapassa a largura interna do botão, deixando o fundo ativo sem envolver adequadamente texto e ícone.
2. **Gráfico de calorias podia quebrar em várias linhas:** o gráfico usava sete colunas por padrão e só configurava colunas específicas quando havia mais de 14 dias. Períodos de 8 a 14 dias ficavam com um número de itens diferente do número de colunas, provocando quebra de linha e aparência de barras ausentes.
3. **Leitura de períodos longos:** as barras precisam manter largura mínima e rolagem horizontal, para que cada dia do período tenha uma coluna individual. Dias sem registro devem continuar visíveis como lacunas, não ser confundidos com consumo zero.

## Correções aplicadas

- O seletor mantém três botões independentes; em telas estreitas, ícone e texto passam para duas linhas dentro de cada botão. A regra é limitada ao seletor `.progress-switch` e não altera indicadores de outras seções.
- Os rótulos têm largura mínima controlada, alinhamento central e quebra segura, evitando que “Alimentação” ou o ícone escapem do fundo ativo.
- O gráfico define a quantidade de colunas conforme a quantidade real de dias: até 7 dias ocupa a largura disponível; acima de 7, cada dia recebe largura mínima de 38 px e o usuário pode rolar horizontalmente.
- Incluído rótulo acessível do gráfico explicando o período e a distinção entre dias registrados e sem registro.
- Mantidos os cálculos de dados, as metas, o diário, as contas de usuário e a integração Supabase. Nenhum dado real foi alterado.

## Validação

- Revisão estática das regras CSS e do renderizador do gráfico concluída.
- É necessário validar visualmente no Android e testar os períodos de 7, 8, 14, 30 e período personalizado após publicar em ambiente de teste.
- Não houve alteração dos registros do usuário nem publicação automática.
