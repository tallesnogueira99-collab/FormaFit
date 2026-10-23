# FORMA v51 — auditoria e correções

## Correções
1. O gráfico de calorias não omite mais dias do período: todos são representados, com rolagem horizontal quando necessário.
2. Contagem, médias, gráfico e exportações usam uma função comum de validação e agregação diária.
3. Valores ausentes (`null`, `undefined` ou texto vazio) não são interpretados como zero para validar a existência de dados. Um zero numérico explícito continua sendo válido.
4. Tela e relatórios compartilham o mesmo intervalo de datas. Períodos personalizados maiores que 366 dias são limitados ao trecho final de 366 dias e o início é atualizado na interface.
5. CSV/JSON passam a incluir histórico de peso/cintura e composição corporal existente no período.
6. O resumo de micronutrientes e a área de composição corporal usam o intervalo normalizado.
7. Service worker atualizado para `forma-pwa-v51`, para renovar o cache da PWA.

## Verificações realizadas
- Sintaxe dos scripts JavaScript embutidos: aprovada via `node --check`.
- A correção foi aplicada ao código do projeto extraído do ZIP enviado.

## Limitações
- Não foi realizado teste de interface real em navegador.
- Não foi acessada nem alterada a conta Supabase ou qualquer dado alimentar real.
- Após publicar, confira os períodos de 7/30/90 dias e o período personalizado, além das exportações CSV/JSON.
