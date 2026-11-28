/* FORMA — estimativa complementar de gasto energético em sessões concluídas.
   Não substitui calorias informadas manualmente nem altera registros de treino. */
(function(){
 'use strict';
 if(window.__formaCaloriesEstimatesV1)return;
 window.__formaCaloriesEstimatesV1=true;
 const $=id=>document.getElementById(id);
 const VERSION=1;
 const fmt=n=>Math.round(Number(n)||0).toLocaleString('pt-BR');
 const dateLabel=value=>{
  if(!/^\d{4}-\d{2}-\d{2}$/.test(String(value||'')))return 'Data não informada';
  return new Date(value+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'});
 };
 function profileWeightAt(date){
  const entries=Array.isArray(state.progress)?state.progress.filter(x=>x&&Number(x.weight)>0&&Number.isFinite(Number(x.weight))&&/^\d{4}-\d{2}-\d{2}$/.test(String(x.date||''))):[];
  entries.sort((a,b)=>a.date.localeCompare(b.date));
  let selected=null;
  entries.forEach(x=>{if(x.date<=date)selected=x;});
  if(selected)return {kg:Number(selected.weight),source:'pesagem anterior ou do dia'};
  const profile=state.profileData&&Number(state.profileData.weight)>0?Number(state.profileData.weight):null;
  if(profile)return {kg:profile,source:'peso atual do perfil'};
  if(entries.length)return {kg:Number(entries[entries.length-1].weight),source:'última pesagem disponível'};
  return null;
 }
 function kcalFromMET(met,weightKg,minutes){
  const value=Number(met)*3.5*Number(weightKg)/200*Number(minutes);
  return Number.isFinite(value)&&value>0?Math.max(1,Math.round(value)):null;
 }
 function strengthDuration(session){
  const start=Date.parse(session.startedAt||''),end=Date.parse(session.finishedAt||'');
  if(Number.isFinite(start)&&Number.isFinite(end)&&end>start){
   const minutes=(end-start)/60000;
   if(minutes>=5&&minutes<=360)return minutes;
  }
  const explicit=Number(session.durationMinutes||session.duration);
  return Number.isFinite(explicit)&&explicit>=5&&explicit<=360?explicit:null;
 }
 function cardioMET(item){
  const type=String(item.type||'').toLocaleLowerCase('pt-BR');
  let met=4.0;
  if(type.includes('caminhada'))met=3.5;
  else if(type.includes('corrida'))met=8.3;
  else if(type.includes('esteira'))met=5.0;
  else if(type.includes('bicicleta ao ar livre'))met=7.5;
  else if(type.includes('bicicleta'))met=5.5;
  else if(type.includes('elíptico')||type.includes('eliptico'))met=5.0;
  else if(type.includes('escada'))met=6.5;
  else if(type.includes('remo'))met=6.0;
  else if(type.includes('natação')||type.includes('natacao'))met=6.0;
  else if(type.includes('corda'))met=9.0;
  else if(type.includes('hiit'))met=7.0;
  else if(type.includes('fitdance'))met=5.5;
  const effort=String(item.effort||'').toLocaleLowerCase('pt-BR');
  const rpe=Number((effort.match(/\d+(?:[.,]\d+)?/)||[])[0]?.replace(',','.'));
  if(/vigoroso|intenso|forte/.test(effort)||rpe>=7)met*=1.2;
  else if(/leve|light/.test(effort)|| (rpe>0&&rpe<=3))met*=0.82;
  return Math.min(11,Math.max(2.5,met));
 }
 function estimateStrength(session){
  const minutes=strengthDuration(session);
  const sets=Number(session.completedSets)||0,exercises=Number(session.completedExercises)||0;
  if(!minutes||(!sets&&!exercises))return null;
  const date=String(session.sessionDate||session.finishedAt||'').slice(0,10);
  const weight=profileWeightAt(date);
  if(!weight)return null;
  const met=3.5; // musculação geral, esforço moderado; não presume intensidade vigorosa.
  const kcal=kcalFromMET(met,weight.kg,minutes);
  if(!kcal)return null;
  return {kcal,met,weightKg:weight.kg,weightSource:weight.source,durationMin:Math.round(minutes*10)/10,method:'MET · musculação geral moderada',confidence:'estimativa aproximada',version:VERSION,calculatedAt:new Date().toISOString()};
 }
 function estimateCardio(item){
  const minutes=Number(item.duration);
  if(!Number.isFinite(minutes)||minutes<3||minutes>360)return null;
  const date=String(item.date||'').slice(0,10),weight=profileWeightAt(date);
  if(!weight)return null;
  const met=cardioMET(item),kcal=kcalFromMET(met,weight.kg,minutes);
  if(!kcal)return null;
  return {kcal,met,weightKg:weight.kg,weightSource:weight.source,durationMin:minutes,method:'MET · '+String(item.type||'cardio'),confidence:'estimativa aproximada',version:VERSION,calculatedAt:new Date().toISOString()};
 }
 function applyBackfill(){
  if(typeof state==='undefined'||typeof save!=='function')return false;
  state.sessionHistory=Array.isArray(state.sessionHistory)?state.sessionHistory:[];
  state.cardioSessions=Array.isArray(state.cardioSessions)?state.cardioSessions:[];
  let changed=false;
  state.sessionHistory.forEach(session=>{
   if(!session||!session.id||!session.finishedAt||session.calorieEstimate||session.estimatedCalories)return;
   const estimate=estimateStrength(session);
   if(estimate){session.calorieEstimate=estimate;changed=true;}
  });
  state.cardioSessions.forEach(item=>{
   if(!item||item.estimatedCalories||item.calorieEstimate)return;
   const manuallyEntered=item.calories!==null&&item.calories!==undefined&&item.calories!==''&&Number.isFinite(Number(item.calories))&&Number(item.calories)>0;
   if(manuallyEntered)return;
   const estimate=estimateCardio(item);
   if(estimate){item.calorieEstimate=estimate;changed=true;}
  });
  if(changed)save();
  return changed;
 }
 function allRows(){
  const rows=[];
  (Array.isArray(state.sessionHistory)?state.sessionHistory:[]).forEach(s=>{
   if(!s||!s.finishedAt)return;
   const date=String(s.sessionDate||s.finishedAt||'').slice(0,10);
   if(!/^\d{4}-\d{2}-\d{2}$/.test(date))return;
   const estimate=s.calorieEstimate||s.estimatedCalories;
   if(!estimate||!(Number(estimate.kcal)>0))return;
   rows.push({date,name:s.workoutName||s.day||'Musculação',kind:'Musculação',kcal:Number(estimate.kcal),status:'Estimada',detail:fmt(estimate.durationMin)+' min · '+estimate.method});
  });
  (Array.isArray(state.cardioSessions)?state.cardioSessions:[]).forEach(s=>{
   if(!s)return;
   const date=String(s.date||'').slice(0,10);
   if(!/^\d{4}-\d{2}-\d{2}$/.test(date))return;
   const estimate=s.calorieEstimate||s.estimatedCalories;
   const manual=s.calories!==null&&s.calories!==undefined&&s.calories!==''&&Number.isFinite(Number(s.calories))&&Number(s.calories)>0;
   if(manual)rows.push({date,name:s.type||'Cardio',kind:'Cardio',kcal:Number(s.calories),status:'Informada',detail:fmt(s.duration)+' min · valor registrado'});
   else if(estimate&&Number(estimate.kcal)>0)rows.push({date,name:s.type||'Cardio',kind:'Cardio',kcal:Number(estimate.kcal),status:'Estimada',detail:fmt(estimate.durationMin)+' min · '+estimate.method});
  });
  return rows.sort((a,b)=>b.date.localeCompare(a.date));
 }
 function renderCalories(){
  const root=$('progressTrainingView');
  if(!root)return;
  let card=$('formaCaloriesHistoryCard');
  if(!card){
   card=document.createElement('section');card.id='formaCaloriesHistoryCard';card.className='card progress-panel forma-calories-card';
   card.innerHTML='<div class="section-head"><div><h3>Gasto energético dos treinos</h3><p class="sub">Estimativas de musculação e cardio; valores informados manualmente permanecem identificados.</p></div><label class="forma-calorie-period" for="formaCaloriesPeriod">Período<select id="formaCaloriesPeriod"><option value="7">7 dias</option><option value="30" selected>30 dias</option><option value="90">90 dias</option><option value="all">Todo o histórico</option></select></label></div><div class="forma-calorie-stats" id="formaCaloriesStats"></div><div class="forma-calorie-list-head"><strong>Atividades registradas</strong><span id="formaCaloriesCount"></span></div><div id="formaCaloriesRows" class="forma-calorie-rows"></div><p class="forma-calorie-footnote">Estimativa pelo método MET, usando duração, modalidade e peso disponível no perfil. A musculação usa uma referência geral moderada. O resultado não é uma medição individual nem deve ser interpretado como valor exato. Registros sem dados suficientes ficam sem estimativa.</p>';
   const anchor=root.querySelector('.training-overview-card');
   if(anchor&&anchor.nextSibling)root.insertBefore(card,anchor.nextSibling);else root.appendChild(card);
   $('formaCaloriesPeriod').addEventListener('change',renderCalories);
  }
  const period=$('formaCaloriesPeriod')?.value||'30',rows=allRows();
  const cutoff=period==='all'?null:new Date(Date.now()-Number(period)*86400000);
  const filtered=rows.filter(x=>!cutoff||new Date(x.date+'T23:59:59')>=cutoff);
  const estimated=filtered.filter(x=>x.status==='Estimada').reduce((sum,x)=>sum+x.kcal,0);
  const informed=filtered.filter(x=>x.status==='Informada').reduce((sum,x)=>sum+x.kcal,0);
  const total=estimated+informed;
  $('formaCaloriesStats').innerHTML='<div class="forma-calorie-stat"><span>Gasto total contabilizado</span><strong>'+fmt(total)+' kcal</strong><small>Estimadas + informadas</small></div><div class="forma-calorie-stat"><span>Estimativas automáticas</span><strong>'+fmt(estimated)+' kcal</strong><small>'+filtered.filter(x=>x.status==='Estimada').length+' atividades</small></div><div class="forma-calorie-stat"><span>Valores informados</span><strong>'+fmt(informed)+' kcal</strong><small>'+filtered.filter(x=>x.status==='Informada').length+' atividades</small></div>';
  $('formaCaloriesCount').textContent=filtered.length+' atividade(s)';
  $('formaCaloriesRows').innerHTML=filtered.length?filtered.slice(0,20).map(x=>'<div class="forma-calorie-row"><div class="forma-calorie-copy"><strong>'+escapeHtml(x.name)+'</strong><small>'+dateLabel(x.date)+' · '+x.kind+' · '+x.detail+'</small></div><div class="forma-calorie-value"><strong>'+fmt(x.kcal)+' kcal</strong><small>'+x.status+'</small></div></div>').join(''):'<p class="muted">Ainda não há atividades com dados suficientes para calcular o gasto energético neste período.</p>';
 }
 function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
 function addStyles(){
  if($('formaCaloriesStyles'))return;
  const style=document.createElement('style');style.id='formaCaloriesStyles';
  style.textContent='.forma-calories-card{margin-top:14px}.forma-calorie-period{display:grid;gap:5px;font-size:12px;color:var(--muted,#8b93a5);min-width:125px}.forma-calorie-period select{background:var(--surface-2,#182337);color:var(--text,#fff);border:1px solid var(--line,#334155);border-radius:10px;padding:9px}.forma-calorie-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:12px 0 18px}.forma-calorie-stat{padding:14px;border:1px solid var(--line,#334155);border-radius:13px;background:var(--surface-2,rgba(255,255,255,.025));display:grid;gap:5px}.forma-calorie-stat span{font-size:12px;color:var(--muted,#8b93a5)}.forma-calorie-stat strong{font-size:clamp(17px,2vw,23px);font-variant-numeric:tabular-nums}.forma-calorie-stat small,.forma-calorie-copy small,.forma-calorie-value small{font-size:11px;color:var(--muted,#8b93a5)}.forma-calorie-list-head{display:flex;justify-content:space-between;gap:10px;align-items:center;margin:8px 0;color:var(--text,#fff);font-size:13px}.forma-calorie-list-head span{font-size:11px;color:var(--muted,#8b93a5)}.forma-calorie-rows{display:grid;gap:0}.forma-calorie-row{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:12px 2px;border-top:1px solid var(--line,rgba(255,255,255,.08))}.forma-calorie-copy,.forma-calorie-value{display:grid;gap:4px;min-width:0}.forma-calorie-copy strong{font-size:13px}.forma-calorie-copy small{overflow-wrap:anywhere}.forma-calorie-value{text-align:right;flex-shrink:0}.forma-calorie-value strong{font-size:14px;font-variant-numeric:tabular-nums}.forma-calorie-footnote{font-size:11px;line-height:1.55;color:var(--muted,#8b93a5);margin:14px 0 0}@media(max-width:620px){.forma-calorie-stats{grid-template-columns:1fr}.forma-calorie-stat{grid-template-columns:1fr auto;align-items:center}.forma-calorie-stat small{grid-column:1/-1}.forma-calorie-period{min-width:100px}.forma-calorie-row{align-items:flex-start}}';
  document.head.appendChild(style);
 }
 function refresh(){
  if(typeof state==='undefined')return;
  applyBackfill();addStyles();renderCalories();
 }
 // Keep automatic cardio calculations visible when its progress panel is refreshed.
 const cardioRender=window.renderFormaCardioProgress;
 if(typeof cardioRender==='function')window.renderFormaCardioProgress=function(){const result=cardioRender.apply(this,arguments);refresh();return result;};
 const cardioHistory=window.renderCardioHistory;
 if(typeof cardioHistory==='function')window.renderCardioHistory=function(){const result=cardioHistory.apply(this,arguments);refresh();return result;};
 // A completed strength session is persisted by the original handler; estimate it immediately after it finishes.
 document.addEventListener('click',function(event){
  if(event.target&&event.target.closest&&event.target.closest('#sessionFinish,#finishCardioSession'))setTimeout(refresh,0);
 },true);
 // Sync may restore a cloud profile after the initial page load. Recheck after successful saves.
 if(typeof window.save==='function'&&!window.__formaCaloriesSaveWrapped){
  const originalSave=window.save;
  window.save=function(){const result=originalSave.apply(this,arguments);if(result)setTimeout(refresh,0);return result;};
  window.__formaCaloriesSaveWrapped=true;
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh,{once:true});else refresh();
})();
