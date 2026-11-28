/* FORMA v88 — ciclo de cardio com atualização eficiente do cronômetro. Dados mantidos no perfil ativo. */
(function(){
 'use strict';
 const $c=id=>document.getElementById(id);
 const cardioEsc=value=>typeof esc==='function'?esc(String(value??'')):String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const pad=n=>String(Math.max(0,Math.floor(Number(n)||0)).toString()).padStart(2,'0');
 const clock=seconds=>`${pad((Math.max(0,seconds)||0)/60)}:${pad((Math.max(0,seconds)||0)%60)}`;
 const today=()=>typeof dateKey==='function'?dateKey():new Date().toISOString().slice(0,10);
 let tickHandle=null,cardioWakeLock=null,cardioWakeLockRequest=null,lastCardioMessage='',activePreset='quick',activeImpactFilter='all';
 // A sessão cardiovascular é apresentada numa camada de tela inteira, independente do layout do plano.
 const liveView=$c('cardioLiveView');
 let cardioSessionOverlay=$c('cardioSessionOverlay');
 if(liveView&&!cardioSessionOverlay){
  cardioSessionOverlay=document.createElement('section');cardioSessionOverlay.id='cardioSessionOverlay';cardioSessionOverlay.className='cardio-session-overlay';cardioSessionOverlay.hidden=true;cardioSessionOverlay.setAttribute('role','dialog');cardioSessionOverlay.setAttribute('aria-modal','true');cardioSessionOverlay.setAttribute('aria-label','Sessão cardiovascular em andamento');
  const overlayInner=document.createElement('div');overlayInner.className='cardio-session-overlay-inner';cardioSessionOverlay.appendChild(overlayInner);document.body.appendChild(cardioSessionOverlay);overlayInner.appendChild(liveView);
  const header=$c('cardioLiveTitle')?.closest('.cardio-live-top');
  if(header){const actions=document.createElement('div');actions.className='cardio-session-header-actions';const back=document.createElement('button');back.type='button';back.id='cardioSessionBackToPlan';back.className='btn secondary';back.textContent='← Voltar ao plano';back.setAttribute('aria-label','Voltar ao plano cardiovascular; a sessão continuará em andamento');actions.appendChild(back);header.appendChild(actions);back.addEventListener('click',()=>{showBuilder();});}
 }
 // Mantém a tela ligada durante uma sessão ativa quando o navegador oferece Screen Wake Lock.
 // É uma melhoria progressiva: a sessão continua baseada em timestamps mesmo sem suporte à API.
 async function requestCardioWakeLock(){
  if(!state.cardioActiveSession?.running||document.hidden||!('wakeLock' in navigator))return;
  if(cardioWakeLock&&!cardioWakeLock.released)return;
  // Eventos de retorno à aba e navegação podem disparar juntos. Compartilha uma única solicitação pendente.
  if(cardioWakeLockRequest)return cardioWakeLockRequest;
  const requestPromise=Promise.resolve().then(()=>navigator.wakeLock.request('screen')).then(async lock=>{
   // A sessão pode ter sido pausada/encerrada enquanto o navegador atendia a solicitação.
   if(!state.cardioActiveSession?.running||document.hidden){try{await lock.release();}catch(_){}return;}
   if(cardioWakeLock&&!cardioWakeLock.released){try{await lock.release();}catch(_){}return;}
   cardioWakeLock=lock;
   lock.addEventListener('release',()=>{if(cardioWakeLock===lock)cardioWakeLock=null;},{once:true});
  }).catch(()=>{cardioWakeLock=null;}).finally(()=>{
   if(cardioWakeLockRequest===requestPromise)cardioWakeLockRequest=null;
  });
  cardioWakeLockRequest=requestPromise;
  return requestPromise;
 }
 async function releaseCardioWakeLock(){
  const lock=cardioWakeLock;cardioWakeLock=null;
  if(lock&&!lock.released){try{await lock.release();}catch(_){/* O navegador pode já ter liberado o bloqueio. */}}
 }
 const modalityImpacts={
  'Caminhada':['low'],'Corrida':['high'],'Esteira':['low','high'],'Bicicleta ergométrica':['low'],'Bicicleta ao ar livre':['low'],'Elíptico':['low'],'Escada':['low','high'],'Remo':['low'],'Natação':['low'],'Corda':['high'],'HIIT':['high'],'FitDance':['low','high'],'Outra modalidade':[]
 };
 const modalityNames=Object.keys(modalityImpacts);
 const presetConfig={
  quick:{name:'Cardio rápido',format:'continuous',duration:15,intensity:'Moderado',effort:5,warmup:false,cooldown:false,type:'Caminhada'},
  zone2:{name:'Cardio Zona 2',format:'continuous',duration:30,intensity:'Leve',effort:4,warmup:true,cooldown:true,type:'Caminhada'},
  intervals:{name:'Cardio intervalado',format:'interval',duration:20,intensity:'Vigoroso',effort:7,workSeconds:60,recoverySeconds:90,warmup:true,cooldown:true,type:'Bicicleta ergométrica'},
  free:{name:'Sessão livre',format:'free',duration:30,intensity:'Moderado',effort:5,warmup:false,cooldown:false,type:'Caminhada'},
  liss:{name:'Cardio LISS',format:'continuous',duration:30,intensity:'Leve',effort:4,warmup:true,cooldown:true,type:'Elíptico'}
 };
 if(!Array.isArray(state.cardioSessions))state.cardioSessions=[];
 if(!Array.isArray(state.cardioPlans))state.cardioPlans=[];
 if(!('cardioActiveSession' in state))state.cardioActiveSession=null;
 function getBuilder(){
  const duration=Number($c('cardioPlanDuration')?.value)||30;
  return {id:'cardioplan_'+Date.now().toString(36),name:$c('cardioPlanName')?.value.trim()||'',type:$c('cardioPlanType')?.value||'Caminhada',format:$c('cardioPlanFormat')?.value||'continuous',goal:activePreset,impact:modalityImpacts[$c('cardioPlanType')?.value||'Caminhada']?.join('+')||'unknown',duration:Math.max(5,Math.min(180,duration)),intensity:$c('cardioPlanIntensity')?.value||'Moderado',effort:Number($c('cardioPlanEffort')?.value)||5,workSeconds:Math.max(15,Math.min(1800,Number($c('cardioWorkSeconds')?.value)||60)),recoverySeconds:Math.max(15,Math.min(1800,Number($c('cardioRecoverySeconds')?.value)||90)),warmup:$c('cardioWarmupToggle')?.checked!==false,cooldown:$c('cardioCooldownToggle')?.checked!==false,createdAt:Date.now()};
 }
 function makeSteps(plan){
  const durationMinutes=Math.max(5,Math.min(180,Math.floor(Number(plan.duration)||30))),total=durationMinutes*60,warm=plan.format!=='free'&&plan.warmup?Math.min(300,Math.max(0,total-60)):0,cool=plan.format!=='free'&&plan.cooldown?Math.min(300,Math.max(0,total-warm-60)):0,main=Math.max(30,total-warm-cool),steps=[];
  if(warm)steps.push({name:'Aquecimento gradual',duration:warm,hint:'Comece leve e aumente o ritmo aos poucos.'});
  if(plan.format==='interval'){
   // Normaliza intervalos para que planos antigos ou incompletos continuem avançando.
   const workDuration=Math.max(15,Math.min(1800,Math.floor(Number(plan.workSeconds)||60)));
   const recoveryDuration=Math.max(15,Math.min(1800,Math.floor(Number(plan.recoverySeconds)||90)));
   let remaining=main,cycle=1;
   // Sem limite arbitrário de ciclos: sessões longas com intervalos curtos preservam toda a duração planejada.
   while(remaining>0){
    const work=Math.min(workDuration,remaining);
    steps.push({name:`Intervalo forte · ${cycle}`,duration:work,hint:`Esforço-alvo: ${String(plan.intensity||'Moderado').toLowerCase()}. Controle a respiração e ajuste se necessário.`});
    remaining-=work;
    if(remaining>0){const rest=Math.min(recoveryDuration,remaining);steps.push({name:`Recuperação · ${cycle}`,duration:rest,hint:'Reduza o ritmo até recuperar o controle da respiração.'});remaining-=rest;}
    cycle++;
   }
  }else if(plan.format==='free')steps.push({name:'Sessão livre',duration:main,hint:'Controle seu ritmo e encerre antes se precisar.'});
  else steps.push({name:plan.goal==='zone2'?'Zona 2 · ritmo contínuo':'Ritmo contínuo',duration:main,hint:plan.goal==='zone2'?'Mantenha um esforço leve a moderado e consiga conversar em frases. Sem leitura de frequência cardíaca, esta orientação subjetiva não confirma sua zona fisiológica.':`Mantenha um esforço ${String(plan.intensity||'Moderado').toLowerCase()} e sustentável.`});
  if(cool)steps.push({name:'Desaquecimento gradual',duration:cool,hint:'Reduza progressivamente o ritmo antes de parar.'});
  if(!steps.length)steps.push({name:'Sessão cardiovascular',duration:total,hint:'Mantenha um ritmo confortável e ajuste conforme se sentir.'});
  return steps;
 }
 function planDuration(plan){return makeSteps(plan).reduce((sum,x)=>sum+x.duration,0)}
 function renderPreview(){
  const plan=getBuilder(),steps=makeSteps(plan),actual=steps.reduce((sum,x)=>sum+x.duration,0),intervals=steps.filter(x=>x.name.startsWith('Intervalo forte')).length;
  const preview=$c('cardioPlanPreview');if(!preview)return;
  const formatLabel=plan.format==='interval'?'Intervalado':plan.format==='free'?'Livre':'Contínuo';
  preview.innerHTML=`<div class="preview-stat"><span>${plan.format==='free'?'Duração':'Duração planejada'}</span><strong>${plan.format==='free'?'Sem limite':Math.round(actual/60)+' min'}</strong></div><div class="preview-stat"><span>Formato</span><strong>${formatLabel}</strong></div><div class="preview-stat"><span>Etapas</span><strong>${plan.format==='free'?'Livre':steps.length}</strong></div><div class="preview-steps"><strong>Estrutura:</strong> ${plan.format==='free'?'Cronômetro aberto. A sessão só termina quando você tocar em “Concluir sessão”.':steps.map(x=>`${cardioEsc(x.name)} (${Math.max(1,Math.round(x.duration/60))} min)`).join(' → ')}${intervals?`<br><strong>${intervals} intervalos de esforço</strong> com recuperação configurada.`:''}<br><span>Referência de esforço ${plan.effort}/10. Ajuste a intensidade conforme seu condicionamento e como se sentir.</span>${plan.goal==='zone2'?'<br><span>Zona 2 sem frequência cardíaca medida: use o teste da fala; o FORMA não confirma a zona fisiológica.</span>':''}</div>`;
  const interval=$c('cardioIntervalOptions');if(interval)interval.hidden=plan.format!=='interval';const durationField=$c('cardioDurationField');if(durationField)durationField.hidden=plan.format==='free';
 }
 function renderSavedPlans(){
  const wrap=$c('cardioSavedPlans'),list=$c('cardioSavedPlansList'),plans=Array.isArray(state.cardioPlans)?state.cardioPlans:[];if(!wrap||!list)return;wrap.hidden=!plans.length;if(!plans.length){list.innerHTML='';return;}
  list.innerHTML=plans.map(plan=>`<div class="cardio-saved-plan"><div><strong>${cardioEsc(plan.name||plan.type||'Plano cardiovascular')}</strong><small>${cardioEsc(plan.type)} · ${plan.format==='free'?'Sem limite':Math.round(planDuration(plan)/60)+' min'} · ${cardioEsc(plan.format==='interval'?'Intervalado':plan.format==='free'?'Livre':'Contínuo')} · ${cardioEsc(plan.intensity||'Moderado')}</small></div><div class="cardio-saved-plan-actions"><button class="btn secondary" type="button" data-cardio-load="${cardioEsc(plan.id)}">Usar plano</button><button class="btn ghost" type="button" data-cardio-start-saved="${cardioEsc(plan.id)}">▶ Iniciar</button><button class="btn ghost" type="button" data-cardio-delete-plan="${cardioEsc(plan.id)}" aria-label="Excluir plano">Excluir</button></div></div>`).join('');
 }
 function applyPlan(plan){if(!plan)return;activePreset=presetConfig[plan.goal]?plan.goal:'quick';syncPresetButtons();$c('cardioPlanName').value=plan.name||'';$c('cardioPlanType').value=plan.type||'Caminhada';$c('cardioPlanFormat').value=plan.format||'continuous';$c('cardioPlanDuration').value=plan.duration||30;$c('cardioPlanIntensity').value=plan.intensity||'Moderado';$c('cardioPlanEffort').value=String(plan.effort||5);$c('cardioWorkSeconds').value=plan.workSeconds||60;$c('cardioRecoverySeconds').value=plan.recoverySeconds||90;$c('cardioWarmupToggle').checked=plan.warmup!==false;$c('cardioCooldownToggle').checked=plan.cooldown!==false;renderPreview();}
 function syncPresetButtons(){document.querySelectorAll('[data-cardio-preset]').forEach(btn=>{const active=btn.dataset.cardioPreset===activePreset;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});}
 function renderModalitySuggestions(){const root=$c('cardioModalitySuggestions');if(!root)return;const selected=$c('cardioPlanType')?.value||'Caminhada';const options=modalityNames.filter(name=>activeImpactFilter==='all'||(modalityImpacts[name]||[]).includes(activeImpactFilter));root.innerHTML=options.map(name=>`<button type="button" class="cardio-modality-chip" data-cardio-modality="${cardioEsc(name)}" aria-pressed="${name===selected?'true':'false'}">${cardioEsc(name)}</button>`).join('');document.querySelectorAll('[data-cardio-impact-filter]').forEach(btn=>{const active=btn.dataset.cardioImpactFilter===activeImpactFilter;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});}
 function applyPreset(key){const config=presetConfig[key];if(!config)return;activePreset=key;syncPresetButtons();$c('cardioPlanName').value=config.name;$c('cardioPlanFormat').value=config.format;$c('cardioPlanDuration').value=config.duration;$c('cardioPlanIntensity').value=config.intensity;$c('cardioPlanEffort').value=String(config.effort);$c('cardioWorkSeconds').value=config.workSeconds||60;$c('cardioRecoverySeconds').value=config.recoverySeconds||90;$c('cardioWarmupToggle').checked=config.warmup;$c('cardioCooldownToggle').checked=config.cooldown;
  const current=$c('cardioPlanType')?.value;const currentImpact=modalityImpacts[current]||[];const suggested=config.type;if(key==='intervals'||!currentImpact.includes(activeImpactFilter)&&activeImpactFilter!=='all'||!current){$c('cardioPlanType').value=suggested;}else if(key==='liss'&&currentImpact.includes('high')){$c('cardioPlanType').value=suggested;}
  renderModalitySuggestions();renderPreview();}
 function showBuilder(){if($c('cardioBuilderView'))$c('cardioBuilderView').hidden=false;if($c('cardioLiveView'))$c('cardioLiveView').hidden=false;if(cardioSessionOverlay)cardioSessionOverlay.hidden=true;document.body.classList.remove('cardio-session-mode');}
 function showLive(){if($c('cardioBuilderView'))$c('cardioBuilderView').hidden=true;if($c('cardioLiveView'))$c('cardioLiveView').hidden=false;if(cardioSessionOverlay)cardioSessionOverlay.hidden=false;document.body.classList.add('cardio-session-mode');window.scrollTo({top:0,behavior:'auto'});} 
 function elapsedNow(session){return Math.max(0,Number(session.elapsedSeconds)||0)+(session.running&&session.resumeAt?Math.max(0,(Date.now()-session.resumeAt)/1000):0)}
 function saveSafe(){if(typeof save==='function')return save();return false;}
 function startSession(plan){
  const steps=makeSteps(plan);if(!steps.length)return;
  const openEnded=plan.format==='free';state.cardioActiveSession={id:'cardio_live_'+Date.now().toString(36),plan:{...plan},steps,currentStep:0,remainingSeconds:openEnded?0:steps[0].duration,running:true,openEnded,endsAt:openEnded?0:Date.now()+steps[0].duration*1000,resumeAt:Date.now(),elapsedSeconds:0,startedAt:Date.now(),effort:null};
  lastCardioMessage='';saveSafe();showLive();renderLive();ensureTicker();requestCardioWakeLock();
 }
 function finishSession(auto=false,elapsedOverride=null){
  const session=state.cardioActiveSession;if(!session)return;
  if(!auto&&!confirm('Concluir esta sessão cardiovascular agora? O tempo realizado será salvo no histórico.'))return;
  const hasElapsedOverride=elapsedOverride!==null&&elapsedOverride!==undefined&&Number.isFinite(Number(elapsedOverride));
  const elapsed=Math.max(0,Math.floor(hasElapsedOverride?Number(elapsedOverride):elapsedNow(session))),minutes=Math.max(1,Math.round(elapsed/60)),plan=session.plan||{};
  state.cardioSessions=Array.isArray(state.cardioSessions)?state.cardioSessions:[];
  state.cardioSessions.push({id:'cardio_'+Date.now().toString(36),date:today(),type:plan.type||'Cardio',duration:minutes,calories:null,steps:null,distance:null,avgHr:null,maxHr:null,pace:null,effort:$c('cardioLiveRpe')?.value?`${$c('cardioLiveRpe').value}/10`:String(plan.intensity||''),notes:`Sessão registrada pelo cronômetro do FORMA. Plano: ${plan.name||plan.format||'cardio'}. ${auto?'Sessão planejada concluída.':'Sessão encerrada manualmente.'}`,createdAt:Date.now(),source:'forma-cardio-live',plannedDuration:session.openEnded?null:planDuration(plan),plannedFormat:plan.format||'continuous',goal:plan.goal||'custom'});
  state.cardioActiveSession=null;saveSafe();releaseCardioWakeLock();if(tickHandle){clearInterval(tickHandle);tickHandle=null;}showBuilder();renderSavedPlans();renderCardioHistory();renderCardioProgress();lastCardioMessage=auto?'Treino concluído! A sessão foi salva no seu histórico.':'Sessão salva no histórico. Você pode revisar os dados ou planejar outra.';const preview=$c('cardioPlanPreview');if(preview)preview.innerHTML=`<div class="preview-steps" role="status"><strong>${cardioEsc(lastCardioMessage)}</strong> Foram registrados ${minutes} min de ${cardioEsc(plan.type||'cardio')}.</div>`;
 }
 function advanceStep(){const session=state.cardioActiveSession;if(!session||session.openEnded)return;const next=session.currentStep+1;if(next>=session.steps.length){finishSession(true);return;}session.currentStep=next;session.remainingSeconds=session.steps[next].duration;session.endsAt=Date.now()+session.remainingSeconds*1000;saveSafe();renderLive();}
 function tick(){
  const session=state.cardioActiveSession;if(!session||!session.running)return;
  if(session.openEnded){renderLive();return;}
  const now=Date.now();let guard=0,advanced=false;
  // A tela pode ficar suspensa por vários minutos. Recuperar as etapas vencidas em uma única passagem.
  while(session&&session.running&&session.endsAt&&now>=session.endsAt&&guard++<session.steps.length+1){
   const endedAt=session.endsAt,next=session.currentStep+1;
   if(next>=session.steps.length){
    // Registrar o tempo no instante lógico do fim, não o tempo extra até reabrir o PWA.
    const elapsedAtCompletion=Math.max(0,Number(session.elapsedSeconds)||0)+(session.resumeAt?Math.max(0,(endedAt-Number(session.resumeAt))/1000):0);
    finishSession(true,elapsedAtCompletion);return;
   }
   session.currentStep=next;session.remainingSeconds=session.steps[next].duration;session.endsAt=endedAt+session.remainingSeconds*1000;advanced=true;
  }
  if(session&&session.running){session.remainingSeconds=Math.max(0,Math.ceil((session.endsAt-now)/1000));renderLive();if(advanced)saveSafe();}
 }
 function ensureTicker(){if(tickHandle)clearInterval(tickHandle);tickHandle=setInterval(tick,1000);}
 function renderLive(){const session=state.cardioActiveSession;if(!session||!$c('cardioLiveView'))return;const step=session.steps[session.currentStep]||{name:'Sessão cardiovascular',duration:1,hint:''},next=session.steps[session.currentStep+1],elapsed=Math.floor(elapsedNow(session)),remaining=session.openEnded?elapsed:(session.running?Math.max(0,Math.ceil((session.endsAt-Date.now())/1000)):Math.max(0,session.remainingSeconds||0)),percent=session.openEnded?0:Math.max(0,Math.min(100,100-(remaining/Math.max(1,step.duration))*100));
  $c('cardioLiveTitle').textContent=session.plan?.name||session.plan?.type||'Treino cardiovascular';$c('cardioLiveSubtitle').textContent=session.openEnded?'Sessão livre: acompanhe o tempo e conclua quando quiser.':(step.hint||'Siga o ritmo planejado e ajuste conforme se sentir.');$c('cardioLivePhase').textContent=session.openEnded?'Sessão livre':step.name;$c('cardioLivePhaseLabel').textContent=session.running?'SESSÃO EM ANDAMENTO':'SESSÃO PAUSADA';$c('cardioLiveRemaining').textContent=clock(remaining);$c('cardioLiveStatus').textContent=session.running?'EM ANDAMENTO':'PAUSADO';$c('cardioLiveRemainingLabel').textContent=session.openEnded?'Tempo decorrido':'Tempo nesta etapa';$c('cardioLiveProgressFill').style.width=`${percent}%`;$c('cardioLiveProgress').setAttribute('aria-valuenow',String(Math.round(percent)));$c('cardioLiveNext').textContent=session.openEnded?'Encerre quando quiser':(next?next.name:'Última etapa');$c('cardioLiveNextDuration').textContent=session.openEnded?'Sem limite de duração':(next?`Duração: ${clock(next.duration)}`:'Conclua quando estiver pronto');$c('cardioLiveElapsed').textContent=clock(elapsed);$c('cardioLiveStepCount').textContent=session.openEnded?'Livre':`${session.currentStep+1} / ${session.steps.length}`;$c('cardioLivePlanned').textContent=session.openEnded?'Sem limite':`${Math.round(planDuration(session.plan)/60)} min`;$c('pauseCardioSession').textContent=session.running?'Ⅱ Pausar':'▶ Retomar';$c('skipCardioStep').hidden=!!session.openEnded;$c('skipCardioStep').disabled=!!session.openEnded||session.currentStep>=session.steps.length-1;
 }
 function renderCardioProgress(){
  const root=$c('progressCardioView');if(!root)return;const sessions=(Array.isArray(state.cardioSessions)?state.cardioSessions:[]).slice().sort((a,b)=>(b.date||'').localeCompare(a.date||'')||(b.createdAt||0)-(a.createdAt||0));const period=$c('cardioProgressPeriod')?.value||'30';const cutoff=period==='all'?null:new Date(Date.now()-Number(period)*86400000);const filtered=sessions.filter(x=>!cutoff||!x.date||new Date(`${x.date}T23:59:59`)>=cutoff);const minutes=filtered.reduce((sum,x)=>sum+(Number(x.duration)||0),0),distance=filtered.reduce((sum,x)=>sum+(Number(x.distance)||0),0),calories=filtered.reduce((sum,x)=>sum+(Number(x.calories)||0),0),avgValues=filtered.filter(x=>Number(x.avgHr)>0).map(x=>Number(x.avgHr)),avg=avgValues.length?Math.round(avgValues.reduce((a,b)=>a+b,0)/avgValues.length):null;
  const stats=$c('cardioProgressStats');if(stats)stats.innerHTML=[["Sessões",String(filtered.length),'atividades registradas'],['Tempo total',`${minutes} min`,'soma das sessões'],['Distância',`${distance.toLocaleString('pt-BR',{maximumFractionDigits:2})} km`,'quando informada'],['FC média',avg?`${avg} bpm`:'—',avg?'registros com frequência cardíaca':'sem dados suficientes']].map(([label,value,note])=>`<div class="cardio-progress-stat"><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`).join('');
  const chart=$c('cardioWeekChart');if(chart){const now=new Date();const days=[];for(let i=6;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth(),now.getDate()-i),key=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;days.push({key,label:d.toLocaleDateString('pt-BR',{weekday:'short'}).replace('.',''),minutes:sessions.filter(x=>x.date===key).reduce((sum,x)=>sum+(Number(x.duration)||0),0)});}const max=Math.max(30,...days.map(x=>x.minutes));chart.innerHTML=days.map(d=>`<div class="cardio-week-day"><strong>${d.minutes?d.minutes+'m':'—'}</strong><div class="cardio-week-track"><div class="cardio-week-fill" style="height:${d.minutes?Math.max(4,d.minutes/max*100):0}%"></div></div><small>${cardioEsc(d.label)}</small></div>`).join('');}
  const note=$c('cardioProgressNote');if(note)note.textContent=filtered.length?`Exibindo ${filtered.length} sessão(ões) no período selecionado. Calorias e frequência cardíaca dependem dos dados informados; valores ausentes não são estimados.`:'Ainda não há sessões no período. Inicie um cardio ou registre uma atividade para acompanhar sua evolução.';
  const recent=$c('cardioProgressRecent');if(recent){if(!filtered.length)recent.innerHTML='<div class="cardio-progress-empty">Nenhuma sessão encontrada neste período. Seus registros existentes serão preservados.</div>';else recent.innerHTML=filtered.slice(0,5).map(x=>`<div class="cardio-progress-recent-row"><div><strong>${cardioEsc(x.type||'Cardio')}</strong><small>${cardioEsc(typeof formatCardioDate==='function'?formatCardioDate(x.date):x.date||'Data não informada')}${x.effort?' · esforço '+cardioEsc(x.effort):''}</small></div><span class="recent-duration">${Number(x.duration)||0} min</span></div>`).join('');}
 }
 window.renderFormaCardioProgress=renderCardioProgress;
 // Modos separados: cardios prontos para iniciar ou configurador completo.
 const readyCardioPresets={
  walk:{name:'Caminhada',type:'Caminhada',format:'continuous',duration:20,intensity:'Moderado',effort:4,warmup:true,cooldown:true},
  run:{name:'Corrida',type:'Corrida',format:'continuous',duration:25,intensity:'Moderado',effort:5,warmup:true,cooldown:true},
  hiit:{name:'HIIT',type:'HIIT',format:'interval',duration:20,intensity:'Vigoroso',effort:7,workSeconds:45,recoverySeconds:75,warmup:true,cooldown:true},
  fitdance:{name:'FitDance',type:'FitDance',format:'continuous',duration:30,intensity:'Moderado',effort:5,warmup:true,cooldown:true},
  bike:{name:'Bicicleta',type:'Bicicleta ergométrica',format:'continuous',duration:25,intensity:'Moderado',effort:5,warmup:true,cooldown:true},
  rope:{name:'Corda',type:'Corda',format:'interval',duration:12,intensity:'Vigoroso',effort:7,workSeconds:30,recoverySeconds:45,warmup:true,cooldown:true},
  elliptical:{name:'Elíptico',type:'Elíptico',format:'continuous',duration:20,intensity:'Moderado',effort:5,warmup:true,cooldown:true},
  swim:{name:'Natação',type:'Natação',format:'continuous',duration:20,intensity:'Moderado',effort:5,warmup:true,cooldown:true}
 };
 let selectedReadyCardio='walk';
 function setCardioSetupMode(mode){const ready=mode!=='custom';const readySection=$c('cardioReadySection'),customSection=$c('cardioCustomizeSection');if(readySection)readySection.hidden=!ready;if(customSection)customSection.hidden=ready;document.querySelectorAll('[data-cardio-setup]').forEach(btn=>{const active=btn.dataset.cardioSetup===(ready?'ready':'custom');btn.classList.toggle('active',active);btn.setAttribute('aria-selected',String(active));});}
 function selectReadyCardio(key){const plan=readyCardioPresets[key];if(!plan)return;selectedReadyCardio=key;document.querySelectorAll('[data-cardio-ready]').forEach(btn=>{const active=btn.dataset.cardioReady===key;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});const summary=$c('cardioReadySummary');if(summary)summary.innerHTML=`<strong>${cardioEsc(plan.name)}</strong><span>${plan.format==='interval'?'Intervalado': 'Contínuo'} · ${plan.duration} min · intensidade ${plan.intensity.toLowerCase()}.</span>`;applyPlan({...plan,goal:'custom'});}
 document.querySelectorAll('[data-cardio-setup]').forEach(btn=>btn.addEventListener('click',()=>setCardioSetupMode(btn.dataset.cardioSetup)));
 document.querySelectorAll('[data-cardio-ready]').forEach(btn=>btn.addEventListener('click',()=>selectReadyCardio(btn.dataset.cardioReady)));
 $c('cardioReadyCustomize')?.addEventListener('click',()=>{selectReadyCardio(selectedReadyCardio);setCardioSetupMode('custom');});
 $c('startReadyCardio')?.addEventListener('click',()=>{const plan=readyCardioPresets[selectedReadyCardio];if(!plan)return;applyPlan({...plan,goal:'custom'});startSession(getBuilder());});
 selectReadyCardio('walk');setCardioSetupMode('ready');
 // Atalhos antigos são mantidos por compatibilidade com planos salvos já existentes.
 document.querySelectorAll('[data-cardio-preset]').forEach(btn=>btn.addEventListener('click',()=>applyPreset(btn.dataset.cardioPreset)));
 document.querySelectorAll('[data-cardio-impact-filter]').forEach(btn=>btn.addEventListener('click',()=>{activeImpactFilter=btn.dataset.cardioImpactFilter||'all';renderModalitySuggestions();}));
 $c('cardioModalitySuggestions')?.addEventListener('click',event=>{const button=event.target.closest('[data-cardio-modality]');if(!button)return;$c('cardioPlanType').value=button.dataset.cardioModality;renderModalitySuggestions();renderPreview();});
 $c('cardioPlanType')?.addEventListener('change',renderModalitySuggestions);
 // Update preview when configuration changes.
 ['cardioPlanName','cardioPlanType','cardioPlanFormat','cardioPlanDuration','cardioPlanIntensity','cardioPlanEffort','cardioWorkSeconds','cardioRecoverySeconds','cardioWarmupToggle','cardioCooldownToggle'].forEach(id=>{const el=$c(id);el?.addEventListener('input',renderPreview);el?.addEventListener('change',renderPreview);});
 $c('saveCardioPlan')?.addEventListener('click',()=>{const plan=getBuilder();if(!Number.isFinite(plan.duration)||plan.duration<5||plan.duration>180){alert('Escolha uma duração entre 5 e 180 minutos.');return;}if(plan.format==='interval'&&(!plan.workSeconds||!plan.recoverySeconds)){alert('Informe a duração do esforço e da recuperação.');return;}plan.id='cardioplan_'+Date.now().toString(36);state.cardioPlans=Array.isArray(state.cardioPlans)?state.cardioPlans:[];state.cardioPlans.unshift(plan);state.cardioPlans=state.cardioPlans.slice(0,30);saveSafe();renderSavedPlans();});
 $c('startCardioSession')?.addEventListener('click',()=>{const plan=getBuilder();if(plan.duration<5||plan.duration>180){alert('A duração precisa ficar entre 5 e 180 minutos.');return;}if(plan.format==='interval'&&(!plan.workSeconds||!plan.recoverySeconds)){alert('Confira os tempos de esforço e recuperação.');return;}startSession(plan);});
 $c('cardioSavedPlansList')?.addEventListener('click',e=>{const load=e.target.closest('[data-cardio-load]'),start=e.target.closest('[data-cardio-start-saved]'),del=e.target.closest('[data-cardio-delete-plan]');if(load){applyPlan(state.cardioPlans.find(x=>x.id===load.dataset.cardioLoad));return;}if(start){const plan=state.cardioPlans.find(x=>x.id===start.dataset.cardioStartSaved);if(plan){applyPlan(plan);startSession({...plan});}return;}if(del){if(!confirm('Excluir este plano salvo? O histórico de sessões não será alterado.'))return;state.cardioPlans=state.cardioPlans.filter(x=>x.id!==del.dataset.cardioDeletePlan);saveSafe();renderSavedPlans();}});
 $c('pauseCardioSession')?.addEventListener('click',()=>{const session=state.cardioActiveSession;if(!session)return;if(session.running){session.elapsedSeconds=elapsedNow(session);session.running=false;session.resumeAt=0;session.remainingSeconds=session.openEnded?0:Math.max(0,Math.ceil((session.endsAt-Date.now())/1000));session.endsAt=0;}else{session.running=true;session.resumeAt=Date.now();session.endsAt=session.openEnded?0:Date.now()+Math.max(1,session.remainingSeconds)*1000;}saveSafe();renderLive();if(session.running){ensureTicker();requestCardioWakeLock();}else releaseCardioWakeLock();});
 $c('skipCardioStep')?.addEventListener('click',()=>{if(!state.cardioActiveSession)return;advanceStep();});
 $c('finishCardioSession')?.addEventListener('click',()=>finishSession(false));
 $c('cardioProgressPeriod')?.addEventListener('change',renderCardioProgress);
 $c('progressCardioOpenPlan')?.addEventListener('click',()=>{if(typeof showTab==='function')showTab('treino');if(typeof setWorkoutMode==='function')setWorkoutMode('cardio');});
 $c('progressCardioViewHistory')?.addEventListener('click',()=>{renderCardioHistory();setTimeout(()=>{const el=$c('cardioHistoryList');el?.scrollIntoView({behavior:'smooth',block:'start'});},50);});
 document.addEventListener('visibilitychange',()=>{if(!document.hidden&&state.cardioActiveSession?.running){tick();requestCardioWakeLock();}else if(document.hidden)releaseCardioWakeLock();});
 window.addEventListener('pagehide',()=>{releaseCardioWakeLock();});
 // When the cardio workspace is opened, recover an active session if one was interrupted by navigation/reload.
 const originalShowTab=window.showTab;if(typeof originalShowTab==='function'){window.showTab=function(tab){if(tab==='cardioRegistro')tab='treino';const result=originalShowTab.apply(this,[tab]);if(tab==='treino'){if(state.cardioActiveSession){if(typeof setWorkoutMode==='function')setWorkoutMode('cardio');showLive();renderLive();if(state.cardioActiveSession.running){ensureTicker();requestCardioWakeLock();}}else{showBuilder();renderPreview();renderSavedPlans();}renderCardioHistory();}if(tab==='progresso'){renderCardioProgress();renderCardioHistory();}return result;};}
 syncPresetButtons();renderModalitySuggestions();renderPreview();renderSavedPlans();renderCardioProgress();
 if(state.cardioActiveSession){if(state.cardioActiveSession.running&&state.cardioActiveSession.endsAt<Date.now())tick();if(state.cardioActiveSession){showLive();renderLive();if(state.cardioActiveSession.running){ensureTicker();requestCardioWakeLock();}}}
})();
