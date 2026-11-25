# Estrutura do FORMA

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
