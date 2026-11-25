
/* FORMA v89 — plano semanal e biblioteca de cardio */
(function(){
 const $=id=>document.getElementById(id);
 const dayNames=['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'];
 const dayShort=['SEG','TER','QUA','QUI','SEX','SÁB','DOM'];
 const cardioCatalog=[
  {name:'Caminhada leve',type:'Caminhada',category:'steady',sub:'Contínuo · baixo impacto',duration:20,intensity:'Leve',effort:3,format:'continuous',impact:'Baixo impacto',desc:'Sessão confortável para movimentar o corpo em ritmo sustentável.'},
  {name:'Caminhada acelerada',type:'Caminhada',category:'outdoor',sub:'Contínuo · ao ar livre',duration:30,intensity:'Moderado',effort:5,format:'continuous',impact:'Baixo impacto',desc:'Aumente o ritmo mantendo a capacidade de conversar.'},
  {name:'Corrida contínua',type:'Corrida',category:'steady',sub:'Contínuo · corrida',duration:25,intensity:'Moderado',effort:5,format:'continuous',impact:'Alto impacto',desc:'Corrida em ritmo estável, ajustada ao seu condicionamento.'},
  {name:'Esteira intervalada',type:'Esteira',category:'interval',sub:'Intervalado · aparelho',duration:20,intensity:'Vigoroso',effort:7,format:'interval',workSeconds:60,recoverySeconds:90,impact:'Aparelhos',desc:'Alterne blocos de esforço e recuperação; ajuste a velocidade com segurança.'},
  {name:'Esteira contínua',type:'Esteira',category:'machine',sub:'Contínuo · aparelho',duration:25,intensity:'Moderado',effort:5,format:'continuous',impact:'Aparelhos',desc:'Ritmo constante com velocidade e inclinação ajustáveis.'},
  {name:'Bicicleta ergométrica',type:'Bicicleta ergométrica',category:'low',sub:'Contínuo · baixo impacto',duration:20,intensity:'Moderado',effort:5,format:'continuous',impact:'Baixo impacto',desc:'Pedale com resistência confortável e cadência controlada.'},
  {name:'Bicicleta intervalada',type:'Bicicleta ergométrica',category:'interval',sub:'Intervalado · aparelho',duration:20,intensity:'Vigoroso',effort:7,format:'interval',workSeconds:45,recoverySeconds:75,impact:'Aparelhos',desc:'Varie a resistência ou a cadência entre esforço e recuperação.'},
  {name:'Elíptico',type:'Elíptico',category:'low',sub:'Contínuo · baixo impacto',duration:20,intensity:'Moderado',effort:5,format:'continuous',impact:'Baixo impacto',desc:'Movimento contínuo com menor impacto articular.'},
  {name:'Escada',type:'Escada',category:'machine',sub:'Contínuo · aparelho',duration:12,intensity:'Moderado',effort:5,format:'continuous',impact:'Aparelhos',desc:'Mantenha postura estável e um ritmo que consiga sustentar.'},
  {name:'Remo ergométrico',type:'Remo',category:'machine',sub:'Contínuo · aparelho',duration:15,intensity:'Moderado',effort:5,format:'continuous',impact:'Aparelhos',desc:'Combine impulso das pernas e técnica controlada.'},
  {name:'Natação contínua',type:'Natação',category:'steady',sub:'Contínuo · aquático',duration:20,intensity:'Moderado',effort:5,format:'continuous',impact:'Baixo impacto',desc:'Nade em ritmo sustentável, respeitando sua técnica e segurança.'},
  {name:'Corda em intervalos',type:'Corda',category:'interval',sub:'Intervalado · alta intensidade',duration:12,intensity:'Vigoroso',effort:7,format:'interval',workSeconds:30,recoverySeconds:45,impact:'Alto impacto',desc:'Blocos curtos de corda alternados com recuperação.'},
  {name:'Pedalada ao ar livre',type:'Bicicleta ao ar livre',category:'outdoor',sub:'Contínuo · ao ar livre',duration:40,intensity:'Moderado',effort:5,format:'continuous',impact:'Baixo impacto',desc:'Planeje um percurso seguro e ajuste o ritmo às condições do trajeto.'},
  {name:'Corrida intervalada',type:'Corrida',category:'interval',sub:'Intervalado · corrida',duration:20,intensity:'Vigoroso',effort:7,format:'interval',workSeconds:60,recoverySeconds:90,impact:'Alto impacto',desc:'Alterne períodos de corrida mais intensa e recuperação leve.'}
 ];
 let selectedDay=0;
 if(!state.cardioWeeklyPlan||typeof state.cardioWeeklyPlan!=='object')state.cardioWeeklyPlan={days:{},restDays:[]};
 const week=()=>state.cardioWeeklyPlan;
 function safeSave(){try{if(typeof save==='function')save();}catch(e){console.warn('Não foi possível salvar o plano semanal cardiovascular.',e)}}
 function esc(v){return typeof cardioEsc==='function'?cardioEsc(String(v??'')):String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
 function dayItems(){week().days=week().days||{};week().days[selectedDay]=Array.isArray(week().days[selectedDay])?week().days[selectedDay]:[];return week().days[selectedDay]}
 function renderDays(){
  const root=$('cardioWeekdayTabs');if(!root)return;
  root.innerHTML=dayNames.map((name,i)=>{const count=(week().days?.[i]||[]).length,rest=(week().restDays||[]).includes(i);return `<button type="button" class="cardio-weekday-btn ${selectedDay===i?'active':''}" data-cardio-day="${i}" aria-pressed="${selectedDay===i}">${dayShort[i]}<small>${rest?'Descanso':count?count+' '+(count===1?'atividade':'ativ.'):'—'}</small></button>`}).join('');
  renderDayPlan();
 }
 function renderDayPlan(){
  const root=$('cardioDayPlan');if(!root)return;
  const items=dayItems(),rest=(week().restDays||[]).includes(selectedDay);
  if(!items.length){root.innerHTML=`<div class="cardio-empty">${rest?'Dia marcado como descanso. Você pode adicionar atividades mesmo assim.':'Nenhum exercício planejado para '+dayNames[selectedDay].toLowerCase()+'. Adicione uma configuração atual ou escolha um treino da biblioteca.'}</div>`;return;}
  root.innerHTML=items.map((p,i)=>`<article class="cardio-plan-exercise"><div><strong>${esc(p.name||p.type||'Treino cardiovascular')}</strong><small>${esc(p.type||'Cardio')} · ${p.format==='free'?'Livre':Math.round(Number(p.duration)||20)+' min'} · ${esc(p.intensity||'Moderado')} · ${esc(p.format==='interval'?'Intervalado':p.format==='free'?'Livre':'Contínuo')}</small></div><div class="cardio-plan-exercise-actions"><button class="btn secondary" type="button" data-week-use="${i}">Editar</button><button class="btn" type="button" data-week-start="${i}">▶ Iniciar</button><button class="btn ghost" type="button" data-week-remove="${i}" aria-label="Remover ${esc(p.name||p.type)}">Remover</button></div></article>`).join('');
 }
 function renderLibrary(){
  const root=$('cardioLibraryGrid');if(!root)return;
  const cat=$('cardioLibraryCategory')?.value||'all',q=($('cardioLibrarySearch')?.value||'').trim().toLocaleLowerCase('pt-BR');
  const items=cardioCatalog.filter(x=>(cat==='all'||x.category===cat)&&(!q||`${x.name} ${x.type} ${x.sub} ${x.desc}`.toLocaleLowerCase('pt-BR').includes(q)));
  root.innerHTML=items.length?items.map((p,i)=>`<article class="cardio-library-item"><div class="eyebrow">${esc(p.impact)}</div><h4>${esc(p.name)}</h4><p>${esc(p.desc)}</p><p><strong>${p.duration} min</strong> · ${esc(p.sub)}</p><div class="cardio-library-item-actions"><button class="btn secondary" type="button" data-library-use="${cardioCatalog.indexOf(p)}">Personalizar</button><button class="btn" type="button" data-library-add="${cardioCatalog.indexOf(p)}">＋ Plano semanal</button></div></article>`).join(''):'<div class="cardio-empty">Nenhum treino encontrado. Tente outro termo ou tipo.</div>';
 }
 function applyLibraryPlan(p){
  if(typeof applyPlan==='function')applyPlan({...p,name:p.name,goal:'custom'});
  $('cardioPlanName').value=p.name;
  $('cardioPlanType').value=p.type;
  $('cardioPlanFormat').value=p.format;
  $('cardioPlanDuration').value=p.duration;
  $('cardioPlanIntensity').value=p.intensity;
  $('cardioPlanEffort').value=String(p.effort||5);
  if(p.workSeconds)$('cardioWorkSeconds').value=p.workSeconds;
  if(p.recoverySeconds)$('cardioRecoverySeconds').value=p.recoverySeconds;
  if(typeof renderPreview==='function')renderPreview();
  $('cardioWorkspace')?.scrollIntoView({behavior:'smooth',block:'start'});
 }
 $('cardioWeekdayTabs')?.addEventListener('click',e=>{const b=e.target.closest('[data-cardio-day]');if(!b)return;selectedDay=Number(b.dataset.cardioDay);renderDays();});
 $('cardioAddCurrent')?.addEventListener('click',()=>{if(typeof getBuilder!=='function')return;const p=getBuilder();if(p.format!=='free'&&(!Number.isFinite(p.duration)||p.duration<5||p.duration>180)){alert('Escolha uma duração entre 5 e 180 minutos no configurador antes de adicionar.');return;}p.id='cardioweek_'+Date.now().toString(36);p.name=p.name||p.type||'Treino cardiovascular';dayItems().push({...p});week().restDays=(week().restDays||[]).filter(d=>d!==selectedDay);safeSave();renderDays();});
 $('cardioRestDay')?.addEventListener('click',()=>{week().restDays=week().restDays||[];if(week().restDays.includes(selectedDay))week().restDays=week().restDays.filter(d=>d!==selectedDay);else week().restDays.push(selectedDay);safeSave();renderDays();});
 $('cardioDayPlan')?.addEventListener('click',e=>{
  const use=e.target.closest('[data-week-use]'),start=e.target.closest('[data-week-start]'),del=e.target.closest('[data-week-remove]');
  if(use){const p=dayItems()[Number(use.dataset.weekUse)];if(p)applyLibraryPlan(p);return;}
  if(start){const p=dayItems()[Number(start.dataset.weekStart)];if(p&&typeof startSession==='function'){startSession({...p});$('cardioWorkspace')?.scrollIntoView({behavior:'smooth',block:'start'});}return;}
  if(del){const i=Number(del.dataset.weekRemove);if(Number.isInteger(i)&&confirm('Remover este exercício do plano semanal?')){dayItems().splice(i,1);safeSave();renderDays();}}
 });
 $('cardioLibraryGrid')?.addEventListener('click',e=>{
  const use=e.target.closest('[data-library-use]'),add=e.target.closest('[data-library-add]');
  if(use){const p=cardioCatalog[Number(use.dataset.libraryUse)];if(p)applyLibraryPlan(p);return;}
  if(add){const p=cardioCatalog[Number(add.dataset.libraryAdd)];if(!p)return;dayItems().push({...p,id:'cardioweek_'+Date.now().toString(36),name:p.name,goal:'custom'});week().restDays=(week().restDays||[]).filter(d=>d!==selectedDay);safeSave();renderDays();}
 });
 $('cardioLibraryCategory')?.addEventListener('change',renderLibrary);$('cardioLibrarySearch')?.addEventListener('input',renderLibrary);
 if(state.cardioActiveSession){showLive();renderLive();if(state.cardioActiveSession.running){ensureTicker();requestCardioWakeLock();}}
 renderDays();renderLibrary();
})();
