(function(){
 'use strict';
 if(window.__formaSettingsHelpV2)return;
 window.__formaSettingsHelpV2=true;
 const $=function(id){return document.getElementById(id);};
 const settings=$('formaSettingsModal'),help=$('formaHelpModal'),profileEdit=$('formaProfileEditModal'),tour=$('formaTourOverlay');
 let previousOverflow='',helpOverflow='',editOverflow='';
 function lockBody(){previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';}
 function unlockBody(value){document.body.style.overflow=value||'';}
 function openOverlay(el){if(!el)return;lockBody();el.classList.add('open');el.setAttribute('aria-hidden','false');}
 function closeOverlay(el,restore){if(!el)return;el.classList.remove('open');el.setAttribute('aria-hidden','true');unlockBody(restore===undefined?previousOverflow:restore);}
 function openSettings(){closeTabMenu();if(settings.classList.contains('open'))return;openOverlay(settings);$('formaInstallHelp').hidden=true;}
 function closeSettings(){closeOverlay(settings);}
 function openHelp(){closeTabMenu();openOverlay(help);}
 function closeHelp(){closeOverlay(help);}
 function openProfileEdit(){
  const d=(typeof state!=='undefined'&&state.profileData&&typeof state.profileData==='object')?state.profileData:{};
  const latest=(typeof state!=='undefined'&&Array.isArray(state.progress)&&state.progress.length)?state.progress[state.progress.length-1]:null;
  $('formaEditAge').value=d.age||'';
  $('formaEditSex').value=d.sex||'male';
  $('formaEditHeight').value=d.height||'';
  $('formaEditWeight').value=latest&&latest.weight?latest.weight:(d.weight||'');
  $('formaEditGoal').value=d.goal||'fatloss';
  $('formaEditGoalWeight').value=(typeof state!=='undefined'&&state.goalWeight)||d.goalWeight||'';
  $('formaEditActivity').value=d.activity||'sedentary';
  $('formaEditDiet').value=d.diet||'other';
  $('formaEditExperience').value=d.experience||'beginner';
  $('formaEditDays').value=String(d.days||((typeof state!=='undefined'&&state.trainingDays)||5));
  editOverflow=document.body.style.overflow;
  openOverlay(profileEdit);
 }
 function closeProfileEdit(){closeOverlay(profileEdit,editOverflow);}
 function showInstallHelp(html){const el=$('formaInstallHelp');el.innerHTML=html;el.hidden=false;el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});}
 function isStandalone(){return (window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)||navigator.standalone===true;}
 function isIOS(){return /iphone|ipad|ipod/i.test(navigator.userAgent)||((navigator.platform||'')==='MacIntel'&&navigator.maxTouchPoints>1);}
 async function installForma(){
  if(isStandalone()){showInstallHelp('<strong>O FORMA já está instalado neste dispositivo.</strong><br>Abra-o pelo ícone na tela inicial ou na lista de aplicativos.');return;}
  try{
   if(typeof installPrompt!=='undefined'&&installPrompt){
    const promptEvent=installPrompt;
    installPrompt=null;
    const result=await promptEvent.prompt();
    const choice=result&&result.outcome?result.outcome:'unknown';
    if(choice==='accepted')showInstallHelp('<strong>Solicitação aceita.</strong><br>Conclua a instalação na janela do navegador. Depois, abra o FORMA pelo novo ícone.');
    else showInstallHelp('<strong>A instalação não foi concluída.</strong><br>Você pode tentar novamente quando o navegador disponibilizar o comando ou seguir as instruções manuais.');
    return;
   }
  }catch(err){console.warn('FORMA instalação',err);}
  if(isIOS()){
   showInstallHelp('<strong>Instalar no iPhone ou iPad</strong><ol><li>Abra o FORMA no <strong>Safari</strong>.</li><li>Toque em <strong>Compartilhar</strong> (ícone do quadrado com seta para cima).</li><li>Role a lista e escolha <strong>Adicionar à Tela de Início</strong>.</li><li>Confirme em <strong>Adicionar</strong>. O FORMA aparecerá junto aos seus aplicativos.</li></ol><small>O iOS não permite que um site abra essa confirmação de instalação automaticamente. Esta orientação leva você ao caminho oficial do sistema.</small>');
  }else if(/android/i.test(navigator.userAgent)){
   showInstallHelp('<strong>Instalar no Android</strong><p>O navegador ainda não liberou o aviso automático nesta visita. No Chrome, abra o menu <strong>⋮</strong> e escolha <strong>Instalar aplicativo</strong> ou <strong>Adicionar à tela inicial</strong>. Confirme quando o Chrome solicitar.</p>');
  }else{
   showInstallHelp('<strong>Instalar no computador</strong><p>No Chrome ou Edge, procure o ícone de instalação na barra de endereço ou abra o menu do navegador e escolha <strong>Instalar FORMA</strong>. Confirme na janela do navegador.</p>');
  }
 }
 function openProfileManager(){
  const modal=$('profilesModal');
  if(!modal)return;
  if(typeof renderProfiles==='function')renderProfiles();
  modal.style.setProperty('display','flex','important');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
 }
 function closeProfileManagerDisplay(){
  const modal=$('profilesModal');if(!modal)return;
  requestAnimationFrame(function(){if(!modal.classList.contains('open')){modal.style.setProperty('display','none','important');modal.setAttribute('aria-hidden','true');}});
 }
 function menuAction(action){
  closeTabMenu();
  if(action==='settingsHubBtn'){openSettings();return;}
  if(action==='settingsMenuBtn'){showTab('configuracoes');if(window.formaOpenFilesWindow)window.formaOpenFilesWindow();return;}
  if(action==='refreshPageBtn'){if(window.formaPersistActiveView)window.formaPersistActiveView();window.location.reload();return;}
  if(action==='helpMenuBtn'){openHelp();return;}
 }
 document.addEventListener('click',function(e){
  const button=e.target&&e.target.closest?e.target.closest('#toolsMenu button.menu-item'):null;
  if(!button)return;
  const action=button.id;
  if(['settingsHubBtn','settingsMenuBtn','refreshPageBtn','helpMenuBtn'].indexOf(action)<0)return;
  e.preventDefault();e.stopImmediatePropagation();menuAction(action);
 },true);
 $('formaSettingsClose').addEventListener('click',closeSettings);
 settings.addEventListener('click',function(e){if(e.target===settings)closeSettings();});
 $('formaHelpClose').addEventListener('click',closeHelp);
 help.addEventListener('click',function(e){if(e.target===help)closeHelp();});
 $('formaProfileEditClose').addEventListener('click',closeProfileEdit);
 $('formaProfileEditCancel').addEventListener('click',closeProfileEdit);
 profileEdit.addEventListener('click',function(e){if(e.target===profileEdit)closeProfileEdit();});
 $('formaProfileEditForm').addEventListener('submit',function(e){
  e.preventDefault();
  if(typeof state==='undefined'){alert('Não foi possível acessar os dados deste perfil.');return;}
  const age=$('formaEditAge').value.trim()?Number($('formaEditAge').value):null;
  const height=$('formaEditHeight').value.trim()?Number($('formaEditHeight').value):null;
  const weight=$('formaEditWeight').value.trim()?Number($('formaEditWeight').value):null;
  const goalWeight=$('formaEditGoalWeight').value.trim()?Number($('formaEditGoalWeight').value):null;
  if(age!==null&&(!Number.isFinite(age)||age<14||age>100)){alert('Confira a idade (14 a 100 anos).');return;}
  if(height!==null&&(!Number.isFinite(height)||height<120||height>230)){alert('Confira a altura (120 a 230 cm).');return;}
  if(weight!==null&&(!Number.isFinite(weight)||weight<30||weight>300)){alert('Confira o peso atual (30 a 300 kg).');return;}
  if(goalWeight!==null&&(!Number.isFinite(goalWeight)||goalWeight<30||goalWeight>300)){alert('Confira a meta de peso (30 a 300 kg).');return;}
  const d=Object.assign({},state.profileData||{});
  if(age!==null)d.age=age;
  d.sex=$('formaEditSex').value;
  if(height!==null)d.height=height;
  d.goal=$('formaEditGoal').value;
  d.goalWeight=goalWeight;
  d.activity=$('formaEditActivity').value;
  d.diet=$('formaEditDiet').value;
  d.experience=$('formaEditExperience').value;
  d.days=Number($('formaEditDays').value)||5;
  if(weight!==null){
   d.weight=weight;
   const today=(typeof dateKey==='function')?dateKey():new Date().toISOString().slice(0,10);
   state.progress=Array.isArray(state.progress)?state.progress:[];
   const existing=state.progress.find(function(p){return p.date===today;});
   if(existing)existing.weight=weight;
   else state.progress.push({id:'profile-weight-'+Date.now(),weight:weight,waist:null,date:today});
   state.progress.sort(function(a,b){return String(a.date).localeCompare(String(b.date));});
  }
  state.profileData=d;
  state.goalWeight=goalWeight;
  state.trainingDays=d.days;
  if(typeof save==='function')save();
  if(typeof renderProgress==='function')renderProgress();
  if(typeof updateDashboard==='function')updateDashboard();
  if(typeof refreshProfileLayout==='function')refreshProfileLayout();
  closeProfileEdit();
 });
 document.querySelectorAll('[data-settings-action]').forEach(function(button){
  button.addEventListener('click',function(){
   const action=button.getAttribute('data-settings-action');
   if(action==='customize'){if(typeof openCustom==='function')openCustom();}
   else if(action==='install'){installForma();}
   else if(action==='profile-manager'){openProfileManager();}
   else if(action==='profile-edit'){openProfileEdit();}
   else if(action==='account'){const badge=$('profileBadge');if(badge)badge.click();}
   else if(action==='files'){window.__formaFilesOpenedFromSettings=true;showTab('configuracoes');if(window.formaOpenFilesWindow)window.formaOpenFilesWindow();}
  });
 });
 $('formaStartTour').addEventListener('click',function(){closeHelp();startTour();});
 $('formaHelpGoOverview').addEventListener('click',function(){closeHelp();showTab('inicio');});
 document.querySelectorAll('[data-help-tab]').forEach(function(button){
  button.addEventListener('click',function(){const tab=button.getAttribute('data-help-tab');closeHelp();showTab(tab);});
 });
 $('profilesModal').addEventListener('click',function(e){if(e.target===$('profilesModal'))closeProfileManagerDisplay();});
 $('closeProfiles').addEventListener('click',closeProfileManagerDisplay);
 // Alguns comandos internos (trocar/excluir perfil) também fecham o modal sem clicar no X.
 if(typeof MutationObserver==='function'){
  const profileModalObserver=new MutationObserver(function(){if(!$('profilesModal').classList.contains('open'))closeProfileManagerDisplay();});
  profileModalObserver.observe($('profilesModal'),{attributes:true,attributeFilter:['class']});
 }
 function findTourTarget(step){
  if(step.selector){const explicit=document.querySelector(step.selector);if(explicit&&explicit.getClientRects().length)return explicit;}
  if(step.tab){
   const view=$(step.tab);
   if(view){
    const heading=view.querySelector('h1,h2,h3');
    if(heading)return heading.closest('.plan-intro,.plan-section-label,.food-goal-tab-heading,.nutrition-section-heading,.section-heading')||heading.parentElement||heading;
    return view.firstElementChild||view;
   }
  }
  return $('toolsTrigger')||document.querySelector('.app');
 }
 const tourSteps=[
  {selector:'.area-brand-trigger',title:'Escolha sua área',text:'Toque na marca FORMA para alternar entre Treinos e Nutrição. Cada área reúne ferramentas diferentes, sem misturar suas rotinas.'},
  {tab:'treino',selector:'#treino .plan-intro',title:'Organize seus treinos',text:'Aqui você consulta sua ficha, escolhe o dia, ajusta exercícios e inicia sessões para registrar cargas, repetições e descanso.'},
  {tab:'nutritionOverview',title:'Entenda sua alimentação',text:'A visão geral reúne indicadores e metas. Use o menu da área de Nutrição para abrir o diário, o planejamento e a biblioteca.'},
  {tab:'dieta',title:'Registre seu diário',text:'No diário, adicione os alimentos e as porções consumidas. Os totais ajudam a comparar o registro com suas metas.'},
  {tab:'nutritionPlanning',title:'Planeje suas refeições',text:'No planejamento, organize metas, refeições e cronogramas. Confira os dados antes de aplicar qualquer alteração.'},
  {tab:'progresso',title:'Acompanhe sua evolução',text:'Registre peso, medidas e outros dados disponíveis. Compare períodos e observe tendências, não apenas um resultado isolado.'},
  {tab:'biblioteca',title:'Consulte sua biblioteca',text:'A biblioteca reúne exercícios e recursos alimentares que podem ser reutilizados em suas fichas e refeições.'},
  {selector:'#profileBadge',title:'Acesse sua conta',text:'O botão de perfil abre a área de conta. Entre com Google ou e-mail para habilitar a sincronização e conferir o status dos dados.'},
  {selector:'#toolsTrigger',title:'Encontre ações e ajuda',text:'No menu de três pontos estão as configurações, a central de arquivos, a opção para recarregar e os guias de ajuda.'}
 ];
 let tourIndex=0;
 function endTour(){
  tour.classList.remove('open');tour.setAttribute('aria-hidden','true');
  $('formaTourTarget').style.display='none';
  $('formaTourTarget').style.cssText='';
  try{localStorage.setItem('formaTourCompletedV1','1');}catch(e){}
 }
 function updateTourStep(){
  const step=tourSteps[tourIndex];
  if(step.tab&&typeof showTab==='function')showTab(step.tab);
  $('formaTourStepLabel').textContent='ETAPA '+(tourIndex+1)+' DE '+tourSteps.length;
  $('formaTourTitle').textContent=step.title;
  $('formaTourText').textContent=step.text;
  $('formaTourPrev').disabled=tourIndex===0;
  $('formaTourPrev').style.opacity=tourIndex===0?'.35':'1';
  $('formaTourNext').textContent=tourIndex===tourSteps.length-1?'Concluir':'Próximo';
  $('formaTourProgressFill').style.width=((tourIndex+1)/tourSteps.length*100)+'%';
  requestAnimationFrame(function(){
   requestAnimationFrame(function(){
    let target=findTourTarget(step);
    if(target&&target.scrollIntoView){
     const rect=target.getBoundingClientRect();
     if(rect.top<8||rect.bottom>window.innerHeight-180)target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
    }
    setTimeout(function(){
     target=findTourTarget(step);
     const mark=$('formaTourTarget');
     if(!target){mark.style.display='none';return;}
     const rect=target.getBoundingClientRect();
     const pad=5;
     mark.style.display='block';
     mark.style.left=Math.max(5,rect.left-pad)+'px';
     mark.style.top=Math.max(5,rect.top-pad)+'px';
     mark.style.width=Math.min(window.innerWidth-10,Math.max(32,rect.width+pad*2))+'px';
     mark.style.height=Math.min(window.innerHeight-10,Math.max(32,rect.height+pad*2))+'px';
    },220);
   });
  });
 }
 function startTour(){
  tourIndex=0;tour.classList.add('open');tour.setAttribute('aria-hidden','false');
  updateTourStep();
 }
 $('formaTourNext').addEventListener('click',function(){if(tourIndex<tourSteps.length-1){tourIndex++;updateTourStep();}else endTour();});
 $('formaTourPrev').addEventListener('click',function(){if(tourIndex>0){tourIndex--;updateTourStep();}});
 $('formaTourExit').addEventListener('click',endTour);
 document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
   if(tour.classList.contains('open')){endTour();e.preventDefault();e.stopImmediatePropagation();}
   else if(help.classList.contains('open')){closeHelp();e.preventDefault();e.stopImmediatePropagation();}
   else if(profileEdit.classList.contains('open')){closeProfileEdit();e.preventDefault();e.stopImmediatePropagation();}
   else if(settings.classList.contains('open')){closeSettings();e.preventDefault();e.stopImmediatePropagation();}
  }
 },true);
 window.formaOpenSettings=openSettings;
 window.formaOpenHelp=openHelp;
 window.formaStartGuidedTour=startTour;
 window.formaInstallApp=installForma;
 window.addEventListener('appinstalled',function(){if(typeof installPrompt!=='undefined')installPrompt=null;if(settings.classList.contains('open'))showInstallHelp('<strong>FORMA instalado com sucesso.</strong><br>Agora você pode abrir o aplicativo pelo ícone da tela inicial.');});
})();
