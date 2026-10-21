# FORMA v44 — revisão adicional de Progresso > Treinos e ícone Alimentação

## Alterações
- Refinado o ícone SVG de Alimentação para o desenho linear de talheres, com traço e junções consistentes com os outros ícones da navegação de Progresso. Não utiliza emoji.
- Os gráficos individuais de evolução passam a priorizar apenas sessões com séries concluídas quando existem dados concluídos. Registros ainda não concluídos só aparecem como provisórios enquanto não houver séries concluídas para aquele exercício.
- O resumo de volume por grupo muscular agora usa apenas séries concluídas no período de 7 dias quando existirem; caso contrário, usa registros salvos explicitamente como provisórios. Isso evita misturar séries concluídas e incompletas no mesmo total.
- Atualizado o cache do service worker para v44.

## Verificações realizadas
- Sintaxe dos scripts JavaScript inline validada com `node --check`.
- HTML analisado estruturalmente e IDs duplicados verificados.
- Confirmada a presença do ícone SVG de Alimentação e ausência de emoji nesse controle.
- ZIP testado quanto à integridade.

## Persistência e sincronização
- Inspecionado o fluxo de salvamento: `save()` grava o estado local e os dados dos perfis em `localStorage`, faz tentativa de rollback se o salvamento falhar e agenda a sincronização em nuvem quando há sessão autenticada.
- A sincronização real com Supabase, logout/login e restauração de dados não pode ser certificada por validação estática; deve ser testada no site publicado com uma conta de teste. Nenhum dado de usuário foi alterado por este pacote.

## Limitações
- Não foi possível confirmar a experiência com a conta real nem testar sincronização real com Supabase.
- O volume por grupo muscular depende da classificação disponível para cada exercício.

## Publicação
Faça backup da versão atual, extraia o ZIP e publique os arquivos juntos no Netlify.
