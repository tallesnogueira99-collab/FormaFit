
/* Conta FORMA: fallback independente para garantir que o toque no avatar abra o modal mesmo se outro trecho do app falhar. */
(function () {
  const badge = document.getElementById("profileBadge");
  const modal = document.getElementById("syncModal");
  const status = document.getElementById("syncStatus");
  const googleButton = document.getElementById("googleSignInBtn");
  const supabaseUrl = "https://mtxktospqnhdkvkjthwn.supabase.co";
  const supabaseKey = "sb_publishable_Qg5ZZcQEoRFydoNYpSmz-g_Uih4JtpX";
  let loginClient = null;
  const emailForm = document.getElementById("emailAuthForm");
  const emailInput = document.getElementById("accountEmail");
  const passwordInput = document.getElementById("accountPassword");
  const emailSignIn = document.getElementById("emailSignInBtn");
  const emailSignUp = document.getElementById("emailSignUpBtn");
  const emailReset = document.getElementById("emailResetBtn");
  function openAccount(event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    if (!modal) { console.error("FORMA: modal de conta não encontrado no HTML."); return; }
    modal.style.display = "flex";
    modal.style.pointerEvents = "auto";
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("open");
  }
  function onHttps() {
    if (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1") return true;
    if (status) status.textContent = "Para autenticar, abra o FORMA em um endereço HTTPS publicado. O arquivo HTML aberto diretamente permite visualizar a tela, mas não concluir o login.";
    return false;
  }
  async function getLoginClient() {
    if (!loginClient) {
      const { createClient } = await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm");
      loginClient = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "pkce" } });
    }
    return loginClient;
  }
  function setEmailBusy(busy) {
    [emailSignIn,emailSignUp,emailReset].forEach(button => { if (button) button.disabled = busy; });
  }
  function getCredentials() {
    const email = (emailInput?.value || "").trim();
    const password = passwordInput?.value || "";
    if (!email || !emailInput.checkValidity()) throw new Error("Digite um endereço de e-mail válido.");
    return { email, password };
  }
  if (badge) badge.addEventListener("click", openAccount, true);
  if (googleButton) googleButton.addEventListener("click", async function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (googleButton.dataset.loginBusy === "1") return;
    if (!onHttps()) return;
    googleButton.dataset.loginBusy = "1";
    googleButton.disabled = true;
    if (status) status.textContent = "Preparando login seguro com Google…";
    try {
      const client = await getLoginClient();
      if (status) status.textContent = "Abrindo a página segura do Google…";
      const { data, error } = await client.auth.signInWithOAuth({ provider: "google", options: { redirectTo: location.origin + location.pathname, queryParams: { prompt: "select_account" } } });
      if (error) throw error;
      if (data && data.url) location.assign(data.url);
      else throw new Error("O Supabase não retornou a URL do provedor. Confira a configuração OAuth.");
    } catch (error) {
      console.error("FORMA: login Google falhou", error);
      if (status) status.textContent = "Não foi possível iniciar o login: " + (error?.message || "erro inesperado") + ". Verifique a conexão e a configuração OAuth do Supabase.";
      googleButton.disabled = false;
      googleButton.dataset.loginBusy = "0";
    }
  }, true);
  if (emailForm) emailForm.addEventListener("submit", async function (event) {
    event.preventDefault(); event.stopImmediatePropagation();
    if (!onHttps()) return;
    let credentials;
    try { credentials = getCredentials(); if (!credentials.password) throw new Error("Digite sua senha."); }
    catch (error) { if (status) status.textContent = error.message; return; }
    setEmailBusy(true);
    if (status) status.textContent = "Entrando com seu e-mail…";
    try {
      const client = await getLoginClient();
      const { data, error } = await client.auth.signInWithPassword(credentials);
      if (error) throw error;
      if (!data?.session) throw new Error("Login não confirmado. Verifique seu e-mail ou tente novamente.");
      if (status) status.textContent = "Login concluído. Preparando a sincronização…";
      setTimeout(() => location.reload(), 700);
    } catch (error) {
      console.error("FORMA: login por e-mail falhou", error);
      if (status) status.textContent = error?.message || "Não foi possível entrar. Confira o e-mail e a senha.";
      setEmailBusy(false);
    }
  }, true);
  if (emailSignUp) emailSignUp.addEventListener("click", async function (event) {
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
