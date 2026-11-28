# Modularização do FORMA

O index.html mantém sua estrutura e ordem originais, mas os 16 blocos CSS e 16 blocos JavaScript inline foram extraídos para styles/ e js/. Os scripts continuam clássicos e síncronos, sem async, defer ou módulos. Os elementos style com IDs foram mantidos vazios para compatibilidade com código que os consulta por ID. As três inclusões do feedback lateral do Vercel foram removidas.

O service worker usa forma-pwa-v133 e pré-armazena todos os arquivos CSS/JS extraídos. Ao adicionar blocos inline no futuro, atualize os arquivos, a ordem das referências e a lista CORE do sw.js, incrementando a versão do cache.
