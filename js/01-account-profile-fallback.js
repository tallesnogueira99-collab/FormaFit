��h��.��^��-�M4��t瞛�׬ntListener("click", async function (event) {
    event.preventDefault(); event.stopImmediatePropagation();
    if (!onHttps()) return;
    let credentials;
    try { credentials = getCredentials(); if (credentials.password.length < 6) throw new Error("A senha precisa ter pelo menos 6 caracteres."); }
    catch (error) { if (status) status.textContent = error.message; return; }
    setEmailBusy(true);
    if (status) status.textContent = "Criando sua conta…";
    try {
      const client = await getLoginClient();
      const { data, error } = await client.auth.signUp({ email: credentials.email, password: credentials.password, options: { emailRedirectTo: location.origin + location.pathname } });
      if (error) throw error;
      if (data?.session) {
        if (status) status.textContent = "Conta criada! Preparando a sincronização…";
        setTimeout(() => location.reload(), 700);
      } else {
        if (status) status.textContent = "Se a confirmação por e-mail estiver ativada, confira sua caixa de entrada e confirme o endereço antes de entrar. Se não receber a mensagem, verifique spam e as configurações de e-mail do serviço.";
        setEmailBusy(false);
      }
    } catch (error) {
      console.error("FORMA: criação de conta falhou", error);
      if (status) status.textContent = error?.message || "Não foi possível criar a conta.";
      setEmailBusy(false);
    }
  }, true);
  if (emailReset) emailReset.addEventListener("click", async function (event) {
    event.preventDefault(); event.stopImmediatePropagation();
    if (!onHttps()) return;
    let email;
    try { email = getCredentials().email; }
    catch (error) { if (status) status.textContent = "Digite seu e-mail no campo acima para receber o link de redefinição."; return; }
    setEmailBusy(true);
    if (status) status.textContent = "Enviando o link de redefinição…";
    try {
      const client = await getLoginClient();
      const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
      if (error) throw error;
      if (status) status.textContent = "Se houver uma conta com esse e-mail, você receberá instruções para redefinir a senha. Confira também a caixa de spam.";
    } catch (error) {
      console.error("FORMA: redefinição de senha falhou", error);
      if (status) status.textContent = error?.message || "Não foi possível enviar o link de redefinição.";
    } finally { setEmailBusy(false); }
  }, true);
  const close = document.getElementById("closeSync");
  if (close) close.addEventListener("click", function () {
    if (!modal) return;
    modal.classList.remove("open"); modal.style.display = "none"; modal.setAttribute("aria-hidden", "true");
  }, true);
  if (modal) modal.addEventListener("click", function (event) {
    if (event.target === modal) { modal.classList.remove("open"); modal.style.display = "none"; modal.setAttribute("aria-hidden", "true"); }
  }, true);
})();
