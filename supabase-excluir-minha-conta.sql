-- FORMA v47 — exclusão autenticada da própria conta
-- Execute manualmente no Supabase SQL Editor antes de habilitar a exclusão na interface.
-- A função só permite apagar o usuário da sessão atual; nunca recebe um ID arbitrário.
create or replace function public.delete_own_account()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_user_id uuid := auth.uid();
begin
  if current_user_id is null then
    raise exception 'É necessário estar autenticado para excluir a conta.';
  end if;

  -- Remove dados do app associados ao usuário autenticado.
  delete from public.user_app_state where user_id = current_user_id;

  -- Remove a conta do Auth. Outras tabelas com dados do usuário devem usar
  -- ON DELETE CASCADE ou ser explicitamente limpas aqui antes da exclusão.
  delete from auth.users where id = current_user_id;
end;
$$;

revoke all on function public.delete_own_account() from public, anon;
grant execute on function public.delete_own_account() to authenticated;
