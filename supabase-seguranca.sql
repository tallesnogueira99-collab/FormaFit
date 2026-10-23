-- FORMA: isolamento dos dados por usuário autenticado.
-- Execute no Supabase SQL Editor após conferir que user_app_state é a tabela usada pelo app.
-- Este script remove políticas anteriores desta tabela para impedir que uma política permissiva
-- antiga (por exemplo, acesso geral a authenticated) anule as políticas por usuário abaixo.
-- A tabela deve ter user_id do tipo UUID e uma linha por usuário.

DO $$
DECLARE
  user_id_type text;
BEGIN
  SELECT data_type INTO user_id_type
  FROM information_schema.columns
  WHERE table_schema = 'public'
    AND table_name = 'user_app_state'
    AND column_name = 'user_id';

  IF user_id_type IS NULL THEN
    RAISE EXCEPTION 'Não encontrei public.user_app_state.user_id. Confira o nome da tabela/coluna antes de executar.';
  END IF;

  IF user_id_type <> 'uuid' THEN
    RAISE EXCEPTION 'public.user_app_state.user_id é %, mas deve ser UUID para comparar com auth.uid(). Nenhuma política foi alterada.', user_id_type;
  END IF;
END $$;

-- O FORMA usa upsert com onConflict=user_id; é necessária unicidade por conta.
-- Faça esta verificação antes de remover políticas existentes. Se houver duplicatas,
-- o índice falhará e as políticas atuais permanecerão intactas.
CREATE UNIQUE INDEX IF NOT EXISTS user_app_state_user_id_uidx
  ON public.user_app_state (user_id);

ALTER TABLE public.user_app_state ENABLE ROW LEVEL SECURITY;

-- Remove todas as políticas existentes nesta tabela. Revise o efeito antes de executar em produção.
DO $$
DECLARE p record;
BEGIN
  FOR p IN
    SELECT policyname
    FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'user_app_state'
  LOOP
    EXECUTE format('DROP POLICY %I ON public.user_app_state', p.policyname);
  END LOOP;
END $$;

CREATE POLICY "FORMA users read own state"
ON public.user_app_state FOR SELECT TO authenticated
USING ((SELECT auth.uid()) = user_id);

CREATE POLICY "FORMA users insert own state"
ON public.user_app_state FOR INSERT TO authenticated
WITH CHECK ((SELECT auth.uid()) = user_id);

CREATE POLICY "FORMA users update own state"
ON public.user_app_state FOR UPDATE TO authenticated
USING ((SELECT auth.uid()) = user_id)
WITH CHECK ((SELECT auth.uid()) = user_id);

CREATE POLICY "FORMA users delete own state"
ON public.user_app_state FOR DELETE TO authenticated
USING ((SELECT auth.uid()) = user_id);

-- Verificação pós-execução (resultado esperado: RLS habilitado e quatro políticas FORMA).
SELECT c.relname AS table_name,
       c.relrowsecurity AS rls_enabled,
       p.policyname,
       p.cmd,
       p.roles,
       p.qual,
       p.with_check
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
LEFT JOIN pg_policies p ON p.schemaname = n.nspname AND p.tablename = c.relname
WHERE n.nspname = 'public' AND c.relname = 'user_app_state'
ORDER BY p.policyname;
