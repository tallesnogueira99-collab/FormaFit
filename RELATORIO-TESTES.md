# FORMA v45 — evolução da seção Progresso > Corpo

## Alterações
- Adicionado resumo corporal no topo com peso mais recente, variação desde o primeiro registro, cintura, gordura corporal mais recente quando informada e distância até a meta quando configurada.
- Adicionado gráfico independente para a evolução da cintura, usando somente medições realmente registradas.
- Mantidos os históricos de peso e composição corporal, o seletor de indicador e as ações existentes de edição/exclusão.
- Os indicadores ausentes aparecem como “—”; nenhum valor de peso, cintura ou composição corporal é estimado para preencher lacunas.
- Atualizado o cache do service worker para v45.

## Verificações realizadas
- Sintaxe dos scripts JavaScript inline validada com `node --check`.
- HTML analisado estruturalmente e IDs duplicados verificados.
- ZIP testado quanto à integridade.

## Persistência e sincronização
- A alteração utiliza os registros já existentes em `state.progress`, `state.bioimpedance` e `state.goalWeight`, sem criar um novo formato de armazenamento.
- A sincronização real com Supabase, logout/login e restauração de dados não pode ser certificada por validação estática; deve ser testada no site publicado com uma conta de teste. Nenhum dado de usuário foi alterado por este pacote.

## Limitações
- Não foi possível confirmar a experiência com a conta real nem testar sincronização real com Supabase ou a interação completa em navegador.
- A gordura corporal aparece apenas quando já foi informada no histórico de bioimpedância.

## Publicação
Faça backup da versão atual, extraia o ZIP e publique os arquivos juntos no Netlify.


## Versão 46 — revisão visual
- Atualizado o cartão de importação de bioimpedância mantendo os IDs funcionais existentes.
- Adicionado espaçamento vertical entre cartões consecutivos da seção Corpo.
- Refinada a janela de conta sem alterar handlers de autenticação.
- Cache PWA atualizado para `forma-pwa-v46`.
- Validação estática a executar após edição; teste real de login/Supabase depende do ambiente publicado.
