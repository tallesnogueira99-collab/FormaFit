const workouts=[
 {day:"Segunda",short:"SEG",title:"Peitoral e tríceps",sub:"Peitoral superior, peito e tríceps",ex:[
  ["Supino inclinado na máquina","3 séries","8–12 reps","2–3 min"],["Supino reto na máquina","3 séries","8–12 reps","2–3 min"],["Peck-deck / crucifixo","2 séries","12–15 reps","60–120 s"],["Tríceps na polia com corda","3 séries","10–15 reps","60–120 s"],["Tríceps na polia com barra","2 séries","10–15 reps","60–120 s"]]},
 {day:"Terça",short:"TER",title:"Costas e bíceps",sub:"Largura dorsal e braços sem deixar a pegada limitar tudo",ex:[
  ["Puxada frontal com pegada neutra","3 séries","8–12 reps","2–3 min"],["Remada com apoio para o peito","3 séries","8–12 reps","2–3 min"],["Pullover na polia","2 séries","10–15 reps","60–120 s"],["Crucifixo inverso na máquina","2 séries","12–15 reps","60–120 s"],["Rosca bíceps na polia ou máquina","3 séries","10–15 reps","60–120 s"],["Rosca martelo com halteres","2 séries","10–15 reps","60–120 s"]]},
 {day:"Quarta",short:"QUA",title:"Pernas e glúteos",sub:"Treino adaptado às suas preferências",ex:[
  ["Cadeira extensora","3 séries","10–15 reps","60–120 s"],["Cadeira flexora","3 séries","10–15 reps","60–120 s"],["Mesa flexora","2 séries","10–15 reps","60–120 s"],["Elevação pélvica na máquina","3 séries","8–12 reps","2 min"],["Cadeira abdutora","2 séries","12–20 reps","60–120 s"],["Panturrilha sentada (se tolerada)","3 séries","12–20 reps","60–120 s"]]},
 {day:"Quinta",short:"QUI",title:"Ombros e abdômen",sub:"Ênfase nos deltoides laterais e posteriores",ex:[
  ["Desenvolvimento na máquina","3 séries","8–12 reps","2 min"],["Elevação lateral na máquina ou polia","4 séries","12–20 reps","60–120 s"],["Crucifixo inverso na máquina","3 séries","12–15 reps","60–120 s"],["Face pull na polia","2 séries","12–15 reps","60–120 s"],["Elevação de pernas (variante confortável)","3 séries","10–15 reps","60–120 s"],["Abdominal na máquina","3 séries","10–15 reps","60–120 s"]]},
 {day:"Sexta",short:"SEX",title:"Superiores — volume moderado",sub:"Segundo estímulo para peitoral, costas, ombros e braços",ex:[
  ["Supino inclinado na máquina","2 séries","10–12 reps","2 min"],["Remada com apoio para o peito","2 séries","10–12 reps","2 min"],["Puxada frontal","2 séries","10–12 reps","2 min"],["Elevação lateral","3 séries","12–20 reps","60–120 s"],["Rosca bíceps na polia","2 séries","10–15 reps","60–120 s"],["Tríceps na polia","2 séries","10–15 reps","60–120 s"]]}
];
const meals=[
 {icon:"☀",name:"Café da manhã",kcal:"470 kcal*",items:[["Ovos inteiros","150 g (3 un.)"],["Pão francês","50 g"],["Muçarela","20 g"],["Mamão","100 g"]],macro:"~27 g proteína · 42 g carboidratos · 21 g gorduras"},
 {icon:"◒",name:"Lanche da manhã",kcal:"245 kcal*",items:[["Iogurte natural desnatado","170 g"],["Aveia","20 g"],["Banana","100 g"]],macro:"~10 g proteína · 43 g carboidratos · 4 g gorduras"},
 {icon:"◈",name:"Almoço / marmita",kcal:"490 kcal*",items:[["PTS hidratada e refogada","150 g"],["Arroz cozido","150 g"],["Feijão cozido","100 g"],["Salada e legumes","150 g"],["Azeite","5 g"]],macro:"~31 g proteína · 70 g carboidratos · 9 g gorduras"},
 {icon:"↗",name:"Lanche / pré-treino",kcal:"255 kcal*",items:[["Leite desnatado","250 ml"],["Banana","100 g"],["Aveia","15 g"]],macro:"~11 g proteína · 46 g carboidratos · 3 g gorduras"},
 {icon:"☾",name:"Jantar",kcal:"400 kcal*",items:[["Ovos inteiros","100 g (2 un.)"],["Claras","100 g"],["Batata cozida","150 g"],["Cottage","50 g"],["Legumes","100 g"],["Azeite","5 g"]],macro:"~33 g proteína · 34 g carboidratos · 15 g gorduras"}
];
const STORE="formaAppV1", PROFILE_STORE="formaProfilesV1", ACTIVE_PROFILE_STORE="formaActiveProfileV1";
const freshState=()=>({selected:0,logs:{},completed:{},progress:[],startWeight:null,goalWeight:null,eaten:{},foodEntries:[],foodFavorites:[],savedMeals:[],customFoods:{},foodOverrides:{},foodDataVersion:2,foodSources:{},targets:{kcal:null,protein:null,carbs:null,fat:null},accent:"#ff555d",accent2:"#d93440",palette:"red",cardRadius:"soft",density:"comfortable",planTitle:"",planObjective:"",customWorkouts:{},workoutDefaults:{},exerciseFavorites:[],libraryDraft:[],customMeals:{},generatedWorkoutPlan:null,autoFoodPlan:null,foodStyle:null,foodMealsCount:null,foodBudget:null,nutritionAssessment:null,nutritionSchedule:null,restTimer:{endsAt:0,duration:0,label:"",running:false},guidedMode:false,guidedExercise:0,sessionActive:false,sessionDay:0,sessionExercise:0,sessionSet:0,sessionStartedAt:null,sessionDate:null,sessionId:null,sessionFinishedAt:null,sessionHistory:[],sessionExerciseReplacements:{},workoutCycle:null,workoutCycles:[],progressionDecisions:[],cardioSessions:[],selectedExerciseTrend:"",exerciseTrendMetric:"volume",exerciseTrendMode:"exercise",exerciseTrendMuscle:"",exerciseTrendScale:"week",exerciseFocusOverrides:{},exerciseCatalogEdits:{},deletedExerciseIds:[],onboarded:false,profileData:null,bioimpedance:[]});
let state=freshState(), profiles={}, activeProfileId="default";
let restInterval=null,restEndsAt=0,restButtonOriginal=null;
let progressEditingId=null;
state.restTimer=state.restTimer||{endsAt:0,duration:0,label:"Descanso",running:false};
try {
 const legacy=JSON.parse(localStorage.getItem(STORE)||"null"); if(legacy) state={...freshState(),...legacy,targets:{...freshState().targets,...(legacy.targets||{})}};
 profiles=JSON.parse(localStorage.getItem(PROFILE_STORE)||"null")||{};
 activeProfileId=localStorage.getItem(ACTIVE_PROFILE_STORE)||"default";
 if(!Object.keys(profiles).length){profiles.default={id:"default",name:"Meu perfil",data:JSON.parse(JSON.stringify(state))};localStorage.setItem(PROFILE_STORE,JSON.stringify(profiles));localStorage.setItem(ACTIVE_PROFILE_STORE,activeProfileId);}
 if(!profiles[activeProfileId]) activeProfileId=Object.keys(profiles)[0];
 state={...freshState(),...(profiles[activeProfileId].data||{}),targets:{...freshState().targets,...((profiles[activeProfileId].data||{}).targets||{})}};
} catch(e) { profiles={default:{id:"default",name:"Meu perfil",data:freshState()}}; activeProfileId="default"; state=freshState(); }
state.foodEntries=Array.isArray(state.foodEntries)?state.foodEntries:[];
state.foodFavorites=Array.isArray(state.foodFavorites)?state.foodFavorites:[];
state.savedMeals=Array.isArray(state.savedMeals)?state.savedMeals:[];
state.customFoods=state.customFoods&&typeof state.customFoods==="object"?state.customFoods:{};
// Preserve built-in defaults and apply the active profile's edits.
const DEFAULT_WORKOUTS=workouts.map(w=>({...w,ex:w.ex.map(x=>x.slice())}));
const DEFAULT_MEALS=JSON.parse(JSON.stringify(meals));
function applyProfileEdits(){
 const personalPlan=Array.isArray(state.generatedWorkoutPlan)&&state.generatedWorkoutPlan.length?state.generatedWorkoutPlan:null;
 const blankPlan=!state.onboarded&&!personalPlan;
 const planToShow=personalPlan?JSON.parse(JSON.stringify(personalPlan)):blankPlan?[{day:"Meu treino",short:"—",title:"Nenhum plano criado",sub:"Comece para montar seu plano personalizado.",ex:[]}]:JSON.parse(JSON.stringify(DEFAULT_WORKOUTS));
 workouts.splice(0,workouts.length,...planToShow);
 meals.forEach((m,i)=>meals[i]=JSON.parse(JSON.stringify(DEFAULT_MEALS[i])));
 Object.entries(state.customWorkouts||{}).sort((a,b)=>{const [aw,ae]=a[0].split("-").map(Number),[bw,be]=b[0].split("-").map(Number);return aw-bw||ae-be}).forEach(([key,exercise])=>{const [wi,ei]=key.split("-").map(Number);if(!workouts[wi])return;if(ei<workouts[wi].ex.length)workouts[wi].ex[ei]=exercise.slice();else if(ei===workouts[wi].ex.length)workouts[wi].ex.push(exercise.slice())});
 Object.entries(state.customMeals||{}).forEach(([key,meal])=>{if(meals[+key])meals[+key]=JSON.parse(JSON.stringify(meal))});
}
applyProfileEdits();
state.workoutDefaults=state.workoutDefaults&&typeof state.workoutDefaults==="object"?state.workoutDefaults:{};
// Migração segura: usa o primeiro exercício como referência inicial de cada ficha,
// sem modificar os valores já gravados nos exercícios existentes.
workouts.forEach((w,wi)=>{if(!state.workoutDefaults[wi]&&w.ex&&w.ex.length){state.workoutDefaults[wi]={sets:String(w.ex[0][1]||"3 séries"),reps:String(w.ex[0][2]||"8–12 reps"),rest:String(w.ex[0][3]||"90 s")};}});
state.restTimer=state.restTimer||{endsAt:0,duration:0,label:"",running:false};
state.selected=Math.max(0,Math.min(workouts.length-1,Number(state.selected)||0));
const $=id=>document.getElementById(id);
let saveWarningShown=false;
let formaAuthUser=null,autoSyncTimer=null,autoSyncBusy=false,autoSyncPending=false,autoSyncReloading=false;
function save(){
 const storageKeys=[STORE,PROFILE_STORE,ACTIVE_PROFILE_STORE,"formaLastLocalSaveV1"],before={};
 let previousProfileData=null,profileWasPresent=!!profiles[activeProfileId];
 try{
  storageKeys.forEach(k=>before[k]=localStorage.getItem(k));
  if(profileWasPresent)previousProfileData=profiles[activeProfileId].data;
  const snapshot=JSON.stringify(state);
  if(profileWasPresent)profiles[activeProfileId].data=JSON.parse(snapshot);
  localStorage.setItem(STORE,snapshot);
  localStorage.setItem(PROFILE_STORE,JSON.stringify(profiles));
  localStorage.setItem(ACTIVE_PROFILE_STORE,activeProfileId);
  localStorage.setItem("formaLastLocalSaveV1",String(Date.now()));
  saveWarningShown=false;scheduleAutoSync();return true;
 }catch(e){
  console.error("Falha ao salvar dados do FORMA",e);
  if(profileWasPresent)profiles[activeProfileId].data=previousProfileData;
  // Best-effort rollback: avoid leaving the app's three core keys from different save attempts.
  try{storageKeys.forEach(k=>localStorage.removeItem(k));storageKeys.forEach(k=>{if(before[k]!==null&&before[k]!==undefined)localStorage.setItem(k,before[k]);});}catch(rollbackError){console.error("Falha ao restaurar armazenamento anterior",rollbackError);}
  if(!saveWarningShown){saveWarningShown=true;alert("Não foi possível salvar os dados neste dispositivo. Os dados anteriores foram preservados quando possível. Exporte um backup e verifique o espaço disponível no navegador.");}
  return false;
 }
}
function showTab(tab){if(tab!=="sessaoTreino")document.body.classList.remove("session-mode");const appRoot=document.querySelector(".app");if(appRoot)appRoot.classList.toggle("overview-active",tab==="inicio");document.querySelectorAll(".tab,.top-tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));document.querySelectorAll(".menu-item[data-tab]").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===tab));if(tab==="progresso")renderProgress();if(tab==="treino")renderWorkout();if(tab==="sessaoTreino")document.body.classList.add("session-mode");if(typeof syncFloatingTimerUI==="function")requestAnimationFrame(syncFloatingTimerUI);window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}
function setWorkoutMode(mode){const cardio=mode==='cardio';const musclePanel=document.getElementById('workoutMusclePanel'),cardioPanel=document.getElementById('workoutCardioPanel');if(musclePanel)musclePanel.hidden=cardio;if(cardioPanel)cardioPanel.hidden=!cardio;document.querySelectorAll('[data-workout-mode]').forEach(btn=>{const active=btn.dataset.workoutMode===(cardio?'cardio':'musculacao');btn.classList.toggle('active',active);btn.setAttribute('aria-selected',String(active));});const startButton=document.getElementById('startWorkoutSession');if(startButton){const cardioActive=!!(window.formaCardioSessionActive);startButton.textContent=cardio?'▶ Iniciar sessão cardiovascular':'▶ Iniciar sessão de musculação';startButton.setAttribute('aria-label',cardio?'Iniciar sessão cardiovascular':'Iniciar sessão de musculação');}if(cardio){if(typeof renderCardioHistory==='function')renderCardioHistory();if(typeof window.renderFormaCardioProgress==='function')window.renderFormaCardioProgress();}}
window.setWorkoutMode=setWorkoutMode;document.querySelectorAll('[data-workout-mode]').forEach(btn=>btn.addEventListener('click',()=>setWorkoutMode(btn.dataset.workoutMode)));
function closeTabMenu(){const m=$("tabMenu"),t=$("menuTrigger"),tm=$("toolsMenu"),tt=$("toolsTrigger");if(m)m.classList.remove("open");if(t)t.setAttribute("aria-expanded","false");if(tm)tm.classList.remove("open");if(tt)tt.setAttribute("aria-expanded","false")}
function toggleTabMenu(){const m=$("tabMenu"),t=$("menuTrigger"),open=!m.classList.contains("open");$("toolsMenu").classList.remove("open");$("toolsTrigger").setAttribute("aria-expanded","false");m.classList.toggle("open",open);t.setAttribute("aria-expanded",String(open))}
function toggleToolsMenu(){const m=$("toolsMenu"),t=$("toolsTrigger"),open=!m.classList.contains("open");$("tabMenu").classList.remove("open");$("menuTrigger").setAttribute("aria-expanded","false");m.classList.toggle("open",open);t.setAttribute("aria-expanded",String(open))}
$("menuTrigger").addEventListener("click",e=>{e.stopPropagation();toggleTabMenu()});
$("toolsTrigger").addEventListener("click",e=>{e.stopPropagation();toggleToolsMenu()});
document.querySelectorAll("[data-tab]").forEach(b=>b.addEventListener("click",()=>{showTab(b.dataset.tab);document.querySelectorAll(".menu-item[data-tab]").forEach(x=>x.classList.toggle("active",x.dataset.tab===b.dataset.tab));closeTabMenu()}));
document.addEventListener("click",e=>{if(!e.target.closest(".menu-wrap")&&!e.target.closest(".header-tools-wrap"))closeTabMenu()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeTabMenu()});

$("importBackupFile").addEventListener("change",async()=>{const file=$("importBackupFile").files?.[0];if(!file)return;try{const data=JSON.parse(await readFormaImportPdfText(file));let restoredProfile=null;if(data?.format==="FORMA-backup"&&data.version>=4&&data.profile&&data.profile.data&&typeof data.profile.data==="object"){restoredProfile=data.profile;}else if(data?.format==="FORMA-backup"&&data.profiles&&typeof data.profiles==="object"){const legacy=data.profiles[data.activeProfileId]||Object.values(data.profiles).find(p=>p&&p.data&&typeof p.data==="object");if(!legacy)throw new Error("O backup antigo não contém um perfil válido.");restoredProfile={id:data.activeProfileId||legacy.id||activeProfileId,name:legacy.name||"Perfil restaurado",data:legacy.data};}else if(data&&typeof data==="object"&&("logs" in data||"progress" in data)){restoredProfile={id:activeProfileId,name:profiles[activeProfileId]?.name||"Perfil restaurado",data};}else{alert("Este arquivo não parece ser um backup válido do FORMA.");return;}const currentName=profiles[activeProfileId]?.name||"perfil atual";if(!confirm("Restaurar somente os dados do perfil '"+String(restoredProfile.name||currentName)+"' sobre o perfil atualmente aberto '"+currentName+"'? Os demais perfis deste dispositivo serão preservados."))return;const base=freshState();const merged={...base,...restoredProfile.data,targets:{...base.targets,...(restoredProfile.data.targets||{})}};const restoredData=migrateFoodStateObject(merged);const targetId=activeProfileId||restoredProfile.id||("restored_"+Date.now().toString(36));const targetName=profiles[targetId]?.name||restoredProfile.name||"Perfil restaurado";profiles[targetId]={...(profiles[targetId]||{}),...(typeof restoredProfile.avatar==="string"&&/^data:image\/(?:jpeg|png|webp);base64,/i.test(restoredProfile.avatar)?{avatar:restoredProfile.avatar}:{}),id:targetId,name:targetName,data:restoredData};activeProfileId=targetId;state={...freshState(),...restoredData,targets:{...freshState().targets,...(restoredData.targets||{})}};localStorage.setItem(PROFILE_STORE,JSON.stringify(profiles));localStorage.setItem(ACTIVE_PROFILE_STORE,activeProfileId);if(!save())throw new Error("Não foi possível salvar o perfil restaurado.");applyProfileEdits();window.reloadFormaNutritionAssessment?.();window.renderFormaNutritionSchedule?.();applyCustomAppearance();loadCustomFoodsIntoDB();populateFoodPicker();if($("foodDiaryDate")&&!$("foodDiaryDate").value)$("foodDiaryDate").value=dateKey();renderMeals();renderAutoFoodPlan();renderWeekButtons();renderWorkout();updateDashboard();renderProgress();refreshProfileLayout();renderProfiles();alert("Backup restaurado somente no perfil '"+targetName+"'. Os demais perfis foram preservados.");}catch(err){console.error(err);alert("Não consegui restaurar esse PDF: "+(err.message||"arquivo inválido ou incompatível."));}finally{$("importBackupFile").value="";}});
function dateKey(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function sessionDateOf(session){const value=String(session?.sessionDate||session?.finishedAt||"").slice(0,10);return /^\d{4}-\d{2}-\d{2}$/.test(value)?value:""}
function weekdayDateLabel(date){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(date||"")))return "Data não informada";const d=new Date(date+"T12:00:00");return d.toLocaleDateString("pt-BR",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"})}
function weekKey(){const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()+3-((d.getDay()+6)%7));const thursday=new Date(d.getFullYear(),0,4);const week=1+Math.round(((d-thursday)/86400000-3+((thursday.getDay()+6)%7))/7);return d.getFullYear()+"-W"+String(week).padStart(2,"0")}
function dayFromDate(){const d=new Date().getDay();if(d===0&&workouts.length===7)return 6;return d>=1&&d<=workouts.length?d-1:Math.max(0,Math.min(workouts.length-1,Number(state.selected)||0))}
function doneCount(){return workouts.filter((_,i)=>state.completed[weekKey()+"-"+i]).length}

function hasUnfinishedWorkoutSession(dayIndex){
 const finishedIds=new Set((Array.isArray(state.sessionHistory)?state.sessionHistory:[]).filter(x=>x&&x.finishedAt&&x.id).map(x=>String(x.id)));
 if(state.sessionId&&Number(state.sessionDay)===Number(dayIndex)&&!state.sessionFinishedAt&&!finishedIds.has(String(state.sessionId)))return true;
 return Object.values(state.logs||{}).some(log=>log&&log.sessionId&&!finishedIds.has(String(log.sessionId))&&Number(log.sessionDayIndex)===Number(dayIndex)&&(!log.sessionWeekKey||log.sessionWeekKey===weekKey()));
}
function guardWorkoutPlanEdit(){
 if(!hasUnfinishedWorkoutSession(state.selected))return true;
 alert("Esta ficha tem uma sessão em andamento ou pausada. Retome e finalize essa sessão antes de editar os exercícios, para manter cada série ligada ao exercício correto.");
 return false;
}

function renderWeekButtons(){
 const container=$("weekButtons");if(!container)return;
 container.innerHTML=workouts.map((w,i)=>{const isDone=!!state.completed[weekKey()+"-"+i],locked=state.sessionActive&&Number(state.sessionDay)!==i;return `<button class="day-select ${state.selected===i?"active":""} ${isDone?"done":""}" data-day="${i}" type="button" ${locked?"aria-disabled=\"true\" title=\"Finalize ou pause a sessão antes de trocar de dia\"":""}><span class="dayname">${esc(w.short)}</span><strong>${esc(getWorkoutMuscleTitle(w))}</strong><span class="day-state">${isDone?"✓ Concluído":(w.ex?.length||0)+" exercícios"}</span></button>`}).join("");
 document.querySelectorAll("[data-day]").forEach(b=>b.onclick=()=>{const next=Number(b.dataset.day);if(state.sessionActive&&next!==Number(state.sessionDay)){alert("Você está em uma sessão de treino. Volte para a sessão e finalize ou pause antes de trocar de dia.");return;}const previous=state.selected;state.selected=next;if(!save()){state.selected=previous;renderWeekButtons();return;}renderWorkout();});
}
function previousSetForExercise(name, currentId, setIndex){
 const found=[];
 Object.entries(state.logs||{}).forEach(([id,log])=>{if(id===currentId||!log||!Array.isArray(log.sets))return;log.sets.forEach((st,si)=>{if(st&&st.savedAt&&(st.exerciseName||log.exerciseName)===name&&si===setIndex)found.push(st);});});
 found.sort((a,b)=>String(b.savedAt).localeCompare(String(a.savedAt)));return found[0]||null;
}
function getPlanLogForExercise(dayIndex,exerciseIndex,exerciseName){
 const active=!!state.sessionId&&Number(state.sessionDay)===Number(dayIndex)&&!state.sessionFinishedAt;
 if(active){const log=state.logs[`${state.sessionId}-${exerciseIndex}`]||{};return {log,source:"active",sessionId:state.sessionId,index:exerciseIndex};}
 const sessions=(Array.isArray(state.sessionHistory)?state.sessionHistory:[]).filter(x=>x&&x.id&&x.finishedAt&&Number(x.dayIndex)===Number(dayIndex)).sort((a,b)=>sessionDateOf(b).localeCompare(sessionDateOf(a))||String(b.finishedAt).localeCompare(String(a.finishedAt)));
 for(const session of sessions){
  let sourceIndex=exerciseIndex;
  if(Array.isArray(session.exerciseSnapshot)){
   const targetName=String(exerciseName||"").trim().toLocaleLowerCase();
   const sameIndexName=String(session.exerciseSnapshot[exerciseIndex]?.name||"").trim().toLocaleLowerCase();
   sourceIndex=sameIndexName===targetName?exerciseIndex:session.exerciseSnapshot.findIndex(ex=>String(ex?.name||"").trim().toLocaleLowerCase()===targetName);
   if(sourceIndex<0)continue;
  }
  const log=state.logs[`${session.id}-${sourceIndex}`];if(log)return {log,source:"history",sessionId:session.id,index:sourceIndex,session};
 }
 const legacy=state.logs[weekKey()+"-"+dayIndex+"-"+exerciseIndex];if(legacy)return {log:legacy,source:"legacy",index:exerciseIndex};
 return null;
}
function getPlanExerciseProgress(dayIndex,exerciseIndex,exercise){
 const planned=Math.max(1,Math.min(12,parseInt(String(exercise?.[1]||"3").match(/\d+/)?.[0]||"3",10)||3));
 const found=getPlanLogForExercise(dayIndex,exerciseIndex,exercise?.[0]);
 if(found){const sets=Array.isArray(found.log.sets)?found.log.sets:[];return {label:found.source==="active"?"Nesta sessão":found.source==="history"?"Última sessão":"Registros da semana",done:sets.filter(st=>st?.completed).length,planned,active:found.source==="active"};}
 return {label:"Ainda sem registro",done:0,planned,active:false};
}
function getWorkoutMuscles(w){
 const groups=[];
 (w?.ex||[]).forEach(ex=>{const info=typeof window.inferExercise==='function'?window.inferExercise(ex?.[0]):null;const muscle=String(info?.muscle||'').trim();if(muscle&&!groups.includes(muscle))groups.push(muscle);});
 return groups;
}
function joinMuscleNames(groups){if(!groups.length)return 'Grupos não identificados';if(groups.length===1)return groups[0];if(groups.length===2)return groups[0]+' e '+groups[1];return groups.slice(0,-1).join(', ')+' e '+groups[groups.length-1];}
function getWorkoutMuscleTitle(w){const groups=getWorkoutMuscles(w);return groups.length?joinMuscleNames(groups):String(w?.title||'Treino personalizado');}
function formatTimer(n){return String(Math.floor(Math.max(0,n)/60)).padStart(2,'0')+':'+String(Math.max(0,n)%60).padStart(2,'0')}
function syncFloatingTimerUI(){
 const btn=document.getElementById('floatingTimerTrigger'),panel=document.getElementById('restTimerCard');if(!btn||!panel)return;
 const active=!!state.sessionActive&&document.body.classList.contains('session-mode')&&!!document.querySelector('#sessaoTreino.view.active');
 if(btn.parentElement!==document.body)document.body.appendChild(btn);
 btn.classList.toggle('visible',active);btn.style.setProperty('position','fixed','important');btn.style.setProperty('z-index','9999','important');
 const timer=state.restTimer||{},left=timer.running?Math.max(0,Math.ceil(((timer.endsAt||restEndsAt)-Date.now())/1000)):Math.max(0,Number(timer.duration)||90);btn.classList.toggle('is-running',!!timer.running);
 const display=document.getElementById('floatingTimerTime');if(display)display.textContent=formatTimer(left);btn.setAttribute('aria-label',(timer.running?'Cronômetro em andamento, ':'Abrir cronômetro de descanso, ')+formatTimer(left));
 if(!active){panel.classList.remove('open');btn.setAttribute('aria-expanded','false');}
}
function initFloatingTimer(){
 const panel=document.getElementById('restTimerCard'),btn=document.getElementById('floatingTimerTrigger');if(!panel||!btn||panel.dataset.floatingReady)return;
 panel.dataset.floatingReady='true';panel.classList.add('floating-timer-panel');document.body.appendChild(panel);document.body.appendChild(btn);
 const close=document.createElement('button');close.type='button';close.className='floating-timer-close';close.id='restTimerClose';close.setAttribute('aria-label','Fechar cronômetro');close.textContent='×';panel.appendChild(close);
 const posKey='forma.timerBubblePosition.v74';let dragging=false,moved=false,startX=0,startY=0,originX=0,originY=0,pointerId=null,dragFrame=0,suppressClick=false;
 const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
 const setPosition=(x,y,persist=false)=>{const w=btn.offsetWidth||76,h=btn.offsetHeight||76,maxX=Math.max(8,innerWidth-w-8),maxY=Math.max(8,innerHeight-h-8);x=clamp(x,8,maxX);y=clamp(y,8,maxY);btn.style.setProperty('left',x+'px','important');btn.style.setProperty('top',y+'px','important');btn.style.setProperty('right','auto','important');btn.style.setProperty('bottom','auto','important');btn.dataset.floatX=String(x);btn.dataset.floatY=String(y);if(persist){try{localStorage.setItem(posKey,JSON.stringify({x,y}));}catch(_){}}};
 const placeDefault=()=>{let saved=null;try{saved=JSON.parse(localStorage.getItem(posKey)||'null')}catch(_){};if(saved&&Number.isFinite(saved.x)&&Number.isFinite(saved.y))setPosition(saved.x,saved.y);else setPosition(innerWidth-(btn.offsetWidth||76)-18,Math.max(12,innerHeight-(btn.offsetHeight||76)-150));};
 const placePanel=()=>{const r=btn.getBoundingClientRect(),pw=Math.min(390,innerWidth-20),ph=Math.min(panel.scrollHeight||420,innerHeight-24);let left=clamp(r.left+r.width-pw,10,innerWidth-pw-10),top=r.top-ph-12;if(top<10)top=r.bottom+12;if(top+ph>innerHeight-10)top=clamp(r.top-ph-12,10,innerHeight-ph-10);panel.style.setProperty('left',left+'px','important');panel.style.setProperty('top',top+'px','important');panel.style.setProperty('right','auto','important');panel.style.setProperty('bottom','auto','important');};
 const toggle=()=>{if(suppressClick){suppressClick=false;return;}const opening=!panel.classList.contains('open');panel.classList.toggle('open',opening);btn.setAttribute('aria-expanded',String(opening));if(opening){syncFloatingTimerUI();requestAnimationFrame(placePanel);}};
 btn.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;dragging=true;moved=false;pointerId=e.pointerId;startX=e.clientX;startY=e.clientY;const r=btn.getBoundingClientRect();originX=r.left;originY=r.top;btn.classList.add('is-dragging');try{btn.setPointerCapture(pointerId)}catch(_){};});
 btn.addEventListener('pointermove',e=>{if(!dragging||e.pointerId!==pointerId)return;const dx=e.clientX-startX,dy=e.clientY-startY;if(!moved&&Math.hypot(dx,dy)<5)return;if(!moved){moved=true;panel.classList.remove('open');btn.setAttribute('aria-expanded','false');}e.preventDefault();if(dragFrame)cancelAnimationFrame(dragFrame);dragFrame=requestAnimationFrame(()=>setPosition(originX+dx,originY+dy));});
 const endDrag=e=>{if(!dragging||e.pointerId!==pointerId)return;dragging=false;pointerId=null;btn.classList.remove('is-dragging');if(dragFrame){cancelAnimationFrame(dragFrame);dragFrame=0;}if(moved){setPosition(Number(btn.dataset.floatX||originX),Number(btn.dataset.floatY||originY),true);suppressClick=true;setTimeout(()=>{suppressClick=false},250);} };
 btn.addEventListener('pointerup',endDrag);btn.addEventListener('pointercancel',endDrag);btn.addEventListener('lostpointercapture',e=>{if(dragging)endDrag(e)});btn.addEventListener('click',toggle);
 close.addEventListener('click',()=>{panel.classList.remove('open');btn.setAttribute('aria-expanded','false');});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&panel.classList.contains('open')){panel.classList.remove('open');btn.setAttribute('aria-expanded','false');}});
 const observer=new MutationObserver(syncFloatingTimerUI);document.querySelectorAll('.view').forEach(v=>observer.observe(v,{attributes:true,attributeFilter:['class']}));
 const bodyObserver=new MutationObserver(syncFloatingTimerUI);bodyObserver.observe(document.body,{attributes:true,attributeFilter:['class']});
 window.addEventListener('resize',()=>{setPosition(Number(btn.dataset.floatX||innerWidth-90),Number(btn.dataset.floatY||innerHeight-170));if(panel.classList.contains('open'))placePanel();},{passive:true});
 placeDefault();syncFloatingTimerUI();
}
function renderWorkout(){
 const w=workouts[state.selected],key=weekKey()+"-"+state.selected;
 if(!w||!Array.isArray(w.ex)||!w.ex.length){
  const title=$("workoutTitle"),sub=$("workoutSub"),list=$("exerciseList"),start=$("startWorkoutSession");
  if(title)title.textContent="Nenhum plano de treino";
  if(sub)sub.textContent="Este aplicativo ainda não tem uma ficha atribuída a este perfil.";
  if(list)list.innerHTML='<div class="card" style="padding:20px"><h3>Seu treino começa aqui</h3><p class="sub">Crie seu perfil pelo botão “Começar meu treino” na Visão geral ou importe uma ficha na biblioteca. Seus exercícios e seu progresso serão associados à conta conectada.</p><button class="btn" type="button" id="emptyPlanStart">Começar meu treino</button></div>';
  $("emptyPlanStart")?.addEventListener("click",()=>openOnboarding());
  if(start){start.disabled=true;start.textContent="Crie um plano para começar";}
  const defaultsPanel=$("workoutDefaultsPanel");if(defaultsPanel)defaultsPanel.hidden=true;
  return;
 }
 const startBefore=$("startWorkoutSession");if(startBefore)startBefore.disabled=false;
 const muscles=getWorkoutMuscles(w);
 const defaults=state.workoutDefaults[state.selected]||(state.workoutDefaults[state.selected]={sets:String(w.ex[0]?.[1]||"3 séries"),reps:String(w.ex[0]?.[2]||"8–12 reps"),rest:String(w.ex[0]?.[3]||"90 s")});
 const defaultsPanel=$("workoutDefaultsPanel"),defaultsTrigger=$("toggleWorkoutDefaults");
 if(defaultsPanel&&defaultsTrigger){
  const closeDefaults=()=>{defaultsPanel.hidden=true;defaultsTrigger.setAttribute("aria-expanded","false");};
  const numericValue=(value)=>{const raw=String(value??"").trim();if(/min(?:uto)?s?/i.test(raw)){const n=Number(raw.match(/\d+(?:[.,]\d+)?/)?.[0]?.replace(",","."));return Number.isFinite(n)?String(Math.round(n*60)):"";}const n=raw.match(/\d+(?:[.,]\d+)?/)?.[0];return n?String(Number(n.replace(",","."))):"";};
  defaultsTrigger.onclick=()=>{if(!guardWorkoutPlanEdit())return;const opening=defaultsPanel.hidden;defaultsPanel.hidden=!opening;defaultsTrigger.setAttribute("aria-expanded",String(opening));if(opening){$("defaultWorkoutSets").value=numericValue(defaults.sets);$("defaultWorkoutReps").value=numericValue(defaults.reps);$("defaultWorkoutRest").value=numericValue(defaults.rest);$("defaultWorkoutSets").focus();}};
  $("cancelWorkoutDefaults").onclick=closeDefaults;
  $("saveWorkoutDefaults").onclick=()=>{
   if(!guardWorkoutPlanEdit())return;
   const applySets=$("applyDefaultSets").checked,applyReps=$("applyDefaultReps").checked,applyRest=$("applyDefaultRest").checked;
   if(!applySets&&!applyReps&&!applyRest){alert("Selecione pelo menos uma característica para alterar.");return;}
   const setValue=Number($("defaultWorkoutSets").value),repValue=Number($("defaultWorkoutReps").value),restValue=Number($("defaultWorkoutRest").value);
   if((applySets&&(!Number.isInteger(setValue)||setValue<1||setValue>12))||
      (applyReps&&(!Number.isInteger(repValue)||repValue<1||repValue>100))||
      (applyRest&&(!Number.isInteger(restValue)||restValue<0||restValue>900))){
    alert("Confira os valores dos campos selecionados: 1–12 séries, 1–100 repetições e 0–900 segundos de descanso.");return;
   }
   const next={...defaults};
   if(applySets)next.sets=`${setValue} ${setValue===1?"série":"séries"}`;
   if(applyReps)next.reps=`${repValue} reps`;
   if(applyRest)next.rest=`${restValue} s`;
   const changedLabels=[applySets?"séries":null,applyReps?"repetições":null,applyRest?"descanso":null].filter(Boolean).join(", ");
   const previousExercises=w.ex.map(ex=>ex.slice()),previousCustom=JSON.parse(JSON.stringify(state.customWorkouts||{})),previousDefaults=JSON.parse(JSON.stringify(state.workoutDefaults||{}));
   const builtInNames=new Set((DEFAULT_WORKOUTS[state.selected]?.ex||[]).map(ex=>normalizeText(ex[0])));
   const customLibraryNames=new Set((Array.isArray(state.customExercises)?state.customExercises:[]).map(ex=>normalizeText(ex?.name||"")));
   const personalized=w.ex.filter(ex=>!builtInNames.has(normalizeText(ex[0]))||customLibraryNames.has(normalizeText(ex[0])));
   if(personalized.length){
    const shown=personalized.slice(0,5).map(ex=>"• "+ex[0]).join("\n"),more=personalized.length>5?`\n… e mais ${personalized.length-5}.`:"";
    if(!confirm(`A alteração de ${changedLabels} será aplicada a todos os exercícios deste dia, inclusive os personalizados.\n\nOs demais parâmetros serão preservados.\n\n${shown}${more}\n\nDeseja continuar?`))return;
   }
   try{
    state.customWorkouts=state.customWorkouts&&typeof state.customWorkouts==="object"?state.customWorkouts:{};
    w.ex.forEach((ex,i)=>{
     if(applySets)ex[1]=next.sets;
     if(applyReps)ex[2]=next.reps;
     if(applyRest)ex[3]=next.rest;
     state.customWorkouts[state.selected+"-"+i]=ex.slice();
    });
    state.workoutDefaults[state.selected]=next;
    if(!save()){
     w.ex.splice(0,w.ex.length,...previousExercises);state.customWorkouts=previousCustom;state.workoutDefaults=previousDefaults;return;
    }
    renderWorkout();
    const panel=$("workoutDefaultsPanel");if(panel)panel.hidden=true;
    const trigger=$("toggleWorkoutDefaults");if(trigger)trigger.setAttribute("aria-expanded","false");
    alert(`Padrão atualizado: ${changedLabels} alterado(s) em ${w.ex.length} exercício(s).`);
   }catch(error){
    console.error("Falha ao aplicar personalização geral do treino",error);
    w.ex.splice(0,w.ex.length,...previousExercises);state.customWorkouts=previousCustom;state.workoutDefaults=previousDefaults;
    alert("Não foi possível aplicar as alterações. Os valores anteriores foram preservados.");
   }
  };
 }
 $("workoutTitle").textContent=w.day+" — "+getWorkoutMuscleTitle(w);$("workoutSub").textContent=muscles.length?`Foco: ${joinMuscleNames(muscles)}.`:"Adicione exercícios reconhecidos para identificar os grupos musculares.";
 const muscleNote=$("workoutMuscleNote");if(muscleNote)muscleNote.textContent="Os grupos e o título se atualizam automaticamente conforme você altera os exercícios.";
 $("exerciseList").innerHTML=w.ex.map((e,i)=>{const progress=getPlanExerciseProgress(state.selected,i,e);const progressText=progress.active?`${progress.done} de ${progress.planned} séries concluídas nesta sessão`:progress.done?`${progress.done} de ${progress.planned} séries na última sessão`:`${progress.label} · meta de ${progress.planned} séries`;const exerciseMeta=(typeof window.inferExercise==='function'?window.inferExercise(e[0]):null),muscle=exerciseMeta?.muscle||'',focus=typeof getExerciseFocus==='function'?getExerciseFocus(e[0],exerciseMeta):'Foco específico pendente de confirmação';return `<div class="exercise-swipe-shell" data-swipe-shell="${i}"><button class="exercise-swipe-delete" data-delete-ex="${i}" type="button" aria-label="Excluir ${esc(e[0])}">Excluir</button><div class="exercise" data-exercise-card="${i}"><div class="ex-top"><div><div class="ex-name">${i+1}. ${esc(e[0])}</div><div class="muscle-tags">${muscle?`<span class="muscle-tag">${esc(muscle)}</span>`:''}<span class="muscle-tag muscle-focus-tag">Foco: ${esc(focus)}</span></div><div class="ex-meta">${esc(e[1])} · ${esc(e[2])} · descanso ${esc(e[3])}</div><div class="saved-sets">${esc(progressText)}</div></div><div class="exercise-card-actions"><div class="exercise-order-actions" aria-label="Alterar ordem do exercício"><button class="exercise-order-btn" data-move-ex="${i}" data-move-dir="-1" type="button" aria-label="Mover ${esc(e[0])} para cima" ${i===0?"disabled":""}>↑</button><button class="exercise-order-btn" data-move-ex="${i}" data-move-dir="1" type="button" aria-label="Mover ${esc(e[0])} para baixo" ${i===w.ex.length-1?"disabled":""}>↓</button></div><button class="edit-btn" data-edit-ex="${i}" type="button" aria-expanded="false">✎ Editar</button></div></div></div></div>`}).join("");
 const startBtn=$("startWorkoutSession");if(startBtn){const resume=!!state.sessionId&&Number(state.sessionDay)===Number(state.selected)&&!state.sessionFinishedAt;const cardioSelected=document.getElementById("workoutModeCardio")?.classList.contains("active");startBtn.textContent=cardioSelected?"▶ Iniciar sessão cardiovascular":(resume?"▶ Retomar sessão de musculação":"▶ Iniciar sessão de musculação");startBtn.setAttribute("aria-label",cardioSelected?"Iniciar sessão cardiovascular":"Iniciar sessão de musculação");startBtn.onclick=()=>{if(document.getElementById("workoutModeCardio")?.classList.contains("active")){if(state.cardioActiveSession){showLive();renderLive();}else{$("startCardioSession")?.click();}}else{openWorkoutSession();}};}
 const addPanel=$("addExercisePanel");
 $("toggleAddExercise").onclick=()=>{if(!guardWorkoutPlanEdit())return;addPanel.classList.toggle("open");if(addPanel.classList.contains("open")){const d=state.workoutDefaults[state.selected]||{sets:"3 séries",reps:"10–12 reps",rest:"90 s"};[["newExerciseSets",d.sets],["newExerciseReps",d.reps],["newExerciseRest",d.rest]].forEach(([id,value])=>{const select=$(id);if(!Array.from(select.options).some(option=>option.value===value)){const option=document.createElement("option");option.value=value;option.textContent=value+" · padrão";select.appendChild(option);}select.value=value;});$("newExerciseName").focus()}};
 $("cancelNewExercise").onclick=()=>{addPanel.classList.remove("open")};
 $("saveNewExercise").onclick=()=>{if(!guardWorkoutPlanEdit())return;const name=$("newExerciseName").value.trim();if(!name){alert("Digite o nome do exercício.");$("newExerciseName").focus();return;}const d=state.workoutDefaults[state.selected]||{sets:"3 séries",reps:"10–12 reps",rest:"90 s"};const exercise=[name,$("newExerciseSets").value.trim()||d.sets,$("newExerciseReps").value.trim()||d.reps,$("newExerciseRest").value.trim()||d.rest];const i=w.ex.length;w.ex.push(exercise);state.customWorkouts=state.customWorkouts&&typeof state.customWorkouts==="object"?state.customWorkouts:{};state.customWorkouts[state.selected+"-"+i]=exercise.slice();if(!save()){w.ex.pop();delete state.customWorkouts[state.selected+"-"+i];return;}renderWorkout();addPanel.classList.add("open");$("newExerciseName").value="";$("newExerciseSets").value=d.sets;$("newExerciseReps").value=d.reps;$("newExerciseRest").value=d.rest;$("newExerciseName").focus();};

 // Excluir exercício com confirmação, mantendo uma alternativa acessível ao gesto de deslizar.
 const deleteExercise=(i)=>{
  if(!guardWorkoutPlanEdit())return;const exercise=w.ex[i];if(!exercise)return;if(!confirm(`Excluir “${exercise[0]}” desta ficha? Os registros históricos não serão apagados.`))return;
  const before=JSON.parse(JSON.stringify(state));
  w.ex.splice(i,1);const nextCustom={};Object.entries(state.customWorkouts||{}).forEach(([k,v])=>{const parts=k.split("-").map(Number);if(parts[0]!==state.selected)return;if(parts[1]<i)nextCustom[k]=v;else if(parts[1]>i)nextCustom[`${state.selected}-${parts[1]-1}`]=v;});Object.entries(state.customWorkouts||{}).forEach(([k,v])=>{if(Number(k.split("-")[0])!==Number(state.selected))nextCustom[k]=v;});state.customWorkouts=nextCustom;w.ex.forEach((ex,index)=>{state.customWorkouts[`${state.selected}-${index}`]=ex.slice();});
  if(!save()){state=before;renderWorkout();alert("Não foi possível salvar a exclusão. A ficha anterior foi restaurada.");return;}renderWorkout();
 };
 document.querySelectorAll("[data-delete-ex]").forEach(b=>b.onclick=()=>deleteExercise(Number(b.dataset.deleteEx)));
 // A ordem do plano é independente dos snapshots históricos. Durante uma sessão ativa, a reordenação é bloqueada para não deslocar índices de séries em andamento.
 document.querySelectorAll("[data-move-ex]").forEach(button=>button.onclick=()=>{
  if(!guardWorkoutPlanEdit())return;const from=Number(button.dataset.moveEx),to=from+Number(button.dataset.moveDir);if(!Number.isInteger(from)||to<0||to>=w.ex.length||from<0)return;
  if(state.sessionActive&&Number(state.sessionDay)===Number(state.selected)){alert("Finalize ou pause a sessão atual antes de alterar a ordem dos exercícios desta ficha.");return;}
  const before=JSON.parse(JSON.stringify(state)),previousExercises=w.ex.map(ex=>ex.slice()),currentWeek=weekKey(),legacyA=`${currentWeek}-${state.selected}-${from}`,legacyB=`${currentWeek}-${state.selected}-${to}`,hadA=Object.prototype.hasOwnProperty.call(state.logs||{},legacyA),hadB=Object.prototype.hasOwnProperty.call(state.logs||{},legacyB),logA=state.logs?.[legacyA],logB=state.logs?.[legacyB];
  [w.ex[from],w.ex[to]]=[w.ex[to],w.ex[from]];
  state.customWorkouts=state.customWorkouts&&typeof state.customWorkouts==="object"?state.customWorkouts:{};
  Object.keys(state.customWorkouts).forEach(k=>{if(Number(k.split("-")[0])===Number(state.selected))delete state.customWorkouts[k];});
  w.ex.forEach((ex,index)=>{state.customWorkouts[`${state.selected}-${index}`]=ex.slice();});
  if(hadA)state.logs[legacyB]=logA;else delete state.logs[legacyB];if(hadB)state.logs[legacyA]=logB;else delete state.logs[legacyA];
  if(!save()){w.ex.splice(0,w.ex.length,...previousExercises);state=before;renderWorkout();return;}
  renderWorkout();updateDashboard();
 });
 document.querySelectorAll("[data-swipe-shell]").forEach(shell=>{let sx=0,sy=0;const card=shell.querySelector(".exercise");shell.addEventListener("touchstart",e=>{if(!e.touches[0])return;sx=e.touches[0].clientX;sy=e.touches[0].clientY;},{passive:true});shell.addEventListener("touchend",e=>{if(!e.changedTouches[0])return;const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.25){if(dx<0){document.querySelectorAll("[data-swipe-shell]").forEach(x=>x.classList.remove("swipe-revealed"));shell.classList.add("swipe-revealed");}else shell.classList.remove("swipe-revealed");}},{passive:true});shell.addEventListener("click",e=>{if(!e.target.closest("button"))document.querySelectorAll("[data-swipe-shell]").forEach(x=>{if(x!==shell)x.classList.remove("swipe-revealed")});});});
 document.querySelectorAll("[data-edit-ex]").forEach(b=>b.onclick=()=>{
 if(!guardWorkoutPlanEdit())return;
 const i=Number(b.dataset.editEx),e=w.ex[i],card=document.querySelector(`[data-exercise-card="${i}"]`);if(!card)return;
 const existing=card.querySelector(".exercise-editor");if(existing){existing.remove();b.textContent="✎ Ajustar";b.setAttribute("aria-expanded","false");return;}
 document.querySelectorAll(".exercise-editor").forEach(el=>el.remove());document.querySelectorAll("[data-edit-ex]").forEach(btn=>{btn.textContent="✎ Ajustar";btn.setAttribute("aria-expanded","false")});
 const nums=(v)=>String(v||"").match(/\d+/g)||[];
 const setNums=nums(e[1]),repNums=nums(e[2]),restNums=nums(e[3]);
 const restFactor=/min/i.test(e[3]||"")?60:1;
 const editor=document.createElement("div");editor.className="exercise-editor";
 editor.innerHTML=`<div class="exercise-editor-heading"><div><strong>Ajustar exercício</strong><p>Edite o nome e os números. O foco muscular específico é configurado exclusivamente na Biblioteca.</p></div></div>
 <div class="exercise-editor-grid">
 <div class="editor-name editor-field"><label>Nome do exercício</label><input data-editor="name" maxlength="90" value="${esc(e[0])}" aria-label="Nome do exercício" placeholder="Ex.: Tríceps na polia"></div>
 <div class="editor-field"><label>Séries</label><div class="fixed-unit-input"><input data-editor="sets" type="number" inputmode="numeric" min="1" max="12" step="1" value="${setNums[0]||3}" aria-label="Quantidade de séries"><span>séries</span></div></div>
 <div class="editor-field"><label>Repetições</label><div class="fixed-range-input"><input data-editor="repsMin" type="number" inputmode="numeric" min="1" max="100" value="${repNums[0]||8}" aria-label="Repetições mínimas"><span>–</span><input data-editor="repsMax" type="number" inputmode="numeric" min="1" max="100" value="${repNums[1]||repNums[0]||12}" aria-label="Repetições máximas"><span>reps</span></div></div>
 <div class="editor-field"><label>Descanso</label><div class="fixed-range-input"><input data-editor="restMin" type="number" inputmode="numeric" min="0" max="900" step="5" value="${restNums.length?Number(restNums[0])*restFactor:90}" aria-label="Descanso mínimo em segundos"><span>–</span><input data-editor="restMax" type="number" inputmode="numeric" min="0" max="900" step="5" value="${restNums.length>1?Number(restNums[1])*restFactor:(restNums.length?Number(restNums[0])*restFactor:90)}" aria-label="Descanso máximo em segundos"><span>s</span></div></div>
 </div><p class="editor-hint">Use um único valor ou uma faixa de repetições/descanso. Os descansos são editados em segundos. Deslize o cartão para a esquerda para excluir.</p><div class="exercise-editor-actions"><button class="btn" type="button" data-editor-save>✓ Salvar alterações</button><button class="btn ghost" type="button" data-editor-cancel>Cancelar</button></div>`;
 card.appendChild(editor);b.textContent="Fechar ajuste";b.setAttribute("aria-expanded","true");
 editor.querySelector("[data-editor-cancel]").onclick=()=>{editor.remove();b.textContent="✎ Ajustar";b.setAttribute("aria-expanded","false")};
 editor.querySelector("[data-editor-save]").onclick=()=>{
 if(!guardWorkoutPlanEdit())return;
 const name=editor.querySelector('[data-editor="name"]').value.trim();
 const sets=Number(editor.querySelector('[data-editor="sets"]').value),rmin=Number(editor.querySelector('[data-editor="repsMin"]').value),rmax=Number(editor.querySelector('[data-editor="repsMax"]').value),tmin=Number(editor.querySelector('[data-editor="restMin"]').value),tmax=Number(editor.querySelector('[data-editor="restMax"]').value);
 if(!name){alert("Informe o nome do exercício.");return;}
 if(!Number.isInteger(sets)||sets<1||sets>12){alert("Informe de 1 a 12 séries.");return;}
 if(!Number.isInteger(rmin)||!Number.isInteger(rmax)||rmin<1||rmax>100||rmin>rmax){alert("Confira a faixa de repetições (1 a 100), do menor para o maior valor.");return;}
 if(!Number.isInteger(tmin)||!Number.isInteger(tmax)||tmin<0||tmax>900||tmin>tmax){alert("Confira o descanso em segundos (0 a 900), do menor para o maior valor.");return;}
 const range=(a,z,suffix)=>`${a}${a===z?"":"–"+(z===a?"":z)} ${suffix}`.replace("–",a===z?"":"–");
 const repsText=rmin===rmax?`${rmin} reps`:`${rmin}–${rmax} reps`;
 const restText=tmin===tmax?`${tmin} s`:`${tmin}–${tmax} s`;
 const next=[name,`${sets} ${sets===1?"série":"séries"}`,repsText,restText];
 const previousExercise=w.ex[i].slice(),previousCustom=state.customWorkouts?.[state.selected+"-"+i]?.slice();w.ex[i]=next;state.customWorkouts=state.customWorkouts&&typeof state.customWorkouts==="object"?state.customWorkouts:{};state.customWorkouts[state.selected+"-"+i]=next.slice();if(!save()){w.ex[i]=previousExercise;if(previousCustom)state.customWorkouts[state.selected+"-"+i]=previousCustom;else delete state.customWorkouts[state.selected+"-"+i];return;}renderWorkout();
 };
 editor.querySelector('[data-editor="name"]').focus();
 });
 $("finishWorkout").style.display="none";
 $("resetSession").onclick=()=>{if(!guardWorkoutPlanEdit())return;if(!confirm("Limpar as marcações de exercícios deste dia? As cargas, repetições e séries registradas serão preservadas."))return;
  const before=JSON.parse(JSON.stringify(state));
  const activeSession=!!state.sessionId&&Number(state.sessionDay)===Number(state.selected)&&!state.sessionFinishedAt;
  w.ex.forEach((_,i)=>{const id=activeSession?`${state.sessionId}-${i}`:`${key}-${i}`;if(state.logs[id])state.logs[id].done=false;});
  delete state.completed[key];
  if(!save()){state=before;renderWorkout();renderWeekButtons();updateDashboard();return;}
  renderWorkout();renderWeekButtons();updateDashboard();
 };
 renderWeekButtons();updateRings();renderSessionStats();updateRestTimerUI();
}
function getSessionKey(){return state.sessionId||weekKey()+"-"+state.sessionDay;}
function getSessionExerciseId(index){return getSessionKey()+"-"+index;}
function sessionWorkoutForDay(dayIndex){const base=workouts[dayIndex];if(!base)return null;const copy={...base,ex:base.ex.map((ex,index)=>ex.slice())};const replacements=state.sessionExerciseReplacements&&typeof state.sessionExerciseReplacements==='object'?state.sessionExerciseReplacements:{};copy.ex=copy.ex.map((ex,index)=>{const replacement=replacements[`${state.sessionId}-${index}`];return replacement&&Number(state.sessionDay)===Number(dayIndex)?[replacement.name,ex[1],ex[2],ex[3]]:ex;});return copy;}
function makeSessionId(){return "session-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,8);}
function sessionSetCount(exercise){return Math.max(1,Math.min(12,parseInt(exercise?.[1],10)||3));}
function plannedRestSeconds(value){const text=String(value||"");const minute=text.match(/(\d+(?:[.,]\d+)?)\s*min/i);if(minute)return Math.max(0,Math.min(900,Math.round(Number(minute[1].replace(",","."))*60)));const nums=[...text.matchAll(/\d+/g)].map(m=>Number(m[0])).filter(Number.isFinite);if(!nums.length)return 90;const seconds=nums.length>1?(nums[0]+nums[1])/2:nums[0];return Math.max(0,Math.min(900,Math.round(seconds)));}
function openWorkoutSession(){
 if(!workouts[state.selected]?.ex?.length){alert("Este treino ainda não tem exercícios. Adicione pelo menos um exercício antes de iniciar.");return;}
 if(state.sessionActive&&Number(state.sessionDay)!==Number(state.selected)){if(!confirm("Há outro treino em andamento. Deseja abrir este treino? Os registros já salvos serão mantidos."))return;}
 const before=JSON.parse(JSON.stringify(state));
 const finishedIds=new Set((Array.isArray(state.sessionHistory)?state.sessionHistory:[]).filter(x=>x&&x.finishedAt).map(x=>x.id));
 const pausedLog=Object.values(state.logs||{}).filter(log=>log&&log.sessionId&&!finishedIds.has(log.sessionId)&&Number(log.sessionDayIndex)===Number(state.selected)&&log.sessionWeekKey===weekKey()).sort((a,b)=>String(b.sessionStartedAt||b.sets?.[0]?.savedAt||"").localeCompare(String(a.sessionStartedAt||a.sets?.[0]?.savedAt||"")))[0]||null;
 if(pausedLog&&(!state.sessionId||Number(state.sessionDay)!==Number(state.selected)||state.sessionFinishedAt)){state.sessionId=pausedLog.sessionId;state.sessionStartedAt=pausedLog.sessionStartedAt||state.sessionStartedAt;state.sessionFinishedAt=null;}
 const continuing=!!state.sessionId&&Number(state.sessionDay)===Number(state.selected)&&!state.sessionFinishedAt;
 state.sessionDay=state.selected;
 if(!continuing){state.sessionId=makeSessionId();state.sessionFinishedAt=null;state.sessionStartedAt=new Date().toISOString();state.sessionDate=dateKey();}
 state.sessionActive=true;state.sessionStartedAt=state.sessionStartedAt||new Date().toISOString();state.sessionDate=state.sessionDate||dateKey();
 if(!continuing){const w=workouts[state.selected],key=getSessionKey();const first=w.ex.findIndex((_,i)=>{const log=state.logs[key+"-"+i];return !log?.done;});state.sessionExercise=first>=0?first:0;const initialLog=state.logs[getSessionKey()+"-"+state.sessionExercise]||{};const initialSets=initialLog.sets||[];const initialCount=sessionSetCount(w.ex[state.sessionExercise]);const nextSet=Array.from({length:initialCount},(_,si)=>si).find(si=>!initialSets[si]?.completed);state.sessionSet=nextSet===undefined?0:nextSet;}
 state.sessionExercise=Math.max(0,Math.min(workouts[state.sessionDay].ex.length-1,Number(state.sessionExercise)||0));
 if(!save()){state=before;document.body.classList.remove("session-mode");showTab("treino");renderWorkout();return;}
 showTab("sessaoTreino");renderWorkoutSession();
}
function closeWorkoutSession(){if(!confirm("Voltar ao plano? As séries e alterações salvas serão mantidas. Você poderá retomar este treino depois."))return;const before=JSON.parse(JSON.stringify(state));state.sessionActive=false;if(!save()){state=before;renderWorkoutSession();return;}document.body.classList.remove("session-mode");showTab("treino");renderWorkout();}
function saveSessionDraft(exIndex,setIndex){
 const id=getSessionExerciseId(exIndex),row=document.querySelector(`[data-session-set="${setIndex}"]`);if(!row)return;
 const before=state.logs[id]?JSON.parse(JSON.stringify(state.logs[id])):null;
 const weight=row.querySelector('[data-session-field="weight"]')?.value??"",reps=row.querySelector('[data-session-field="reps"]')?.value??"",rest=row.querySelector('[data-session-field="restSeconds"]')?.value??"90";
 state.logs[id]=state.logs[id]||{};const log=state.logs[id];if(!Array.isArray(log.sets))log.sets=[];const old=log.sets[setIndex]||{};
 log.sessionId=state.sessionId;log.sessionDayIndex=state.sessionDay;log.sessionWeekKey=weekKey();log.sessionStartedAt=state.sessionStartedAt;
 const sessionWorkout=sessionWorkoutForDay(state.sessionDay);log.sets[setIndex]={...old,sessionId:state.sessionId,weight:weight===""?"":Number(weight),reps:reps===""?"":Number(reps),restSeconds:Math.max(0,Math.min(900,Number(rest)||0)),draftUpdatedAt:new Date().toISOString(),date:old.date||dateKey(),exerciseName:sessionWorkout.ex[exIndex][0],workoutName:sessionWorkout.title,day:sessionWorkout.day};
 if(!save()){if(before)state.logs[id]=before;else delete state.logs[id];return false;}
 return true;
}
function flushVisibleSessionDraft(){
 const row=document.querySelector('[data-session-set]');
 if(!row||!state.sessionActive)return true;
 const setIndex=Number(row.dataset.sessionSet);
 return saveSessionDraft(Number(state.sessionExercise)||0,setIndex)!==false;
}
function saveSessionSet(exIndex,setIndex,complete=false){
 const row=document.querySelector(`[data-session-set="${setIndex}"]`);if(!row)return false;
 const weightRaw=row.querySelector('[data-session-field="weight"]')?.value??"",repsRaw=row.querySelector('[data-session-field="reps"]')?.value??"",restRaw=row.querySelector('[data-session-field="restSeconds"]')?.value??"90";
 if(weightRaw.trim()===""||repsRaw.trim()===""||!Number.isFinite(Number(weightRaw))||Number(weightRaw)<0||!Number.isInteger(Number(repsRaw))||Number(repsRaw)<1){alert("Informe a carga (zero ou mais kg) e as repetições (número inteiro maior que zero) antes de salvar a série.");return false;}
 const id=getSessionExerciseId(exIndex),w=sessionWorkoutForDay(state.sessionDay),seconds=Math.max(0,Math.min(900,Number(restRaw)||0)),beforeLog=state.logs[id]?JSON.parse(JSON.stringify(state.logs[id])):null,beforeSet=state.sessionSet;state.logs[id]=state.logs[id]||{};const log=state.logs[id];if(!Array.isArray(log.sets))log.sets=[];const old=log.sets[setIndex]||{};
 log.sessionId=state.sessionId;log.sessionDayIndex=state.sessionDay;log.sessionWeekKey=weekKey();log.sessionStartedAt=state.sessionStartedAt;
 log.sets[setIndex]={...old,sessionId:state.sessionId,weight:Number(weightRaw),reps:Number(repsRaw),restSeconds:seconds,savedAt:new Date().toISOString(),date:dateKey(),exerciseName:w.ex[exIndex][0],workoutName:w.title,day:w.day,completed:complete?true:!!old.completed};log.weight=Number(weightRaw);log.reps=Number(repsRaw);log.date=dateKey();log.exerciseName=w.ex[exIndex][0];
 const total=sessionSetCount(w.ex[exIndex]),allDone=Array.from({length:total},(_,i)=>log.sets[i]?.completed===true).every(Boolean);if(allDone)log.done=true;
 if(complete){const total=sessionSetCount(w.ex[exIndex]);state.sessionSet=setIndex<total-1?setIndex+1:setIndex;}else{state.sessionSet=setIndex;}
 if(!save()){if(beforeLog)state.logs[id]=beforeLog;else delete state.logs[id];state.sessionSet=beforeSet;renderWorkoutSession();renderWorkout();return false;}
 renderWorkoutSession();renderExerciseProgress();
 if(complete)startRest(seconds,null,`${w.ex[exIndex][0]} · série ${setIndex+1}`);
 return true;
}
function normalizeProgressionExercise(value){return String(value||"").toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g," ").trim();}
function getExerciseSessionRecord(session,name){
 if(!session||!session.id)return null;
 const target=normalizeProgressionExercise(name),snapshot=Array.isArray(session.exerciseSnapshot)?session.exerciseSnapshot:[];
 let index=snapshot.findIndex(ex=>normalizeProgressionExercise(ex?.name)===target);
 if(index<0){
  const found=Object.entries(state.logs||{}).find(([key,log])=>log&&String(log.sessionId||key.split("-")[0])===String(session.id)&&normalizeProgressionExercise(log.exerciseName)===target);
  if(found){const match=String(found[0]).match(/-(\d+)$/);index=match?Number(match[1]):-1;}
 }
 if(index<0)return null;
 const log=state.logs?.[`${session.id}-${index}`]||Object.values(state.logs||{}).find(item=>item&&String(item.sessionId||"")===String(session.id)&&normalizeProgressionExercise(item.exerciseName)===target);
 if(!log)return null;
 const sets=(Array.isArray(log.sets)?log.sets:[]).filter(st=>st&&st.completed&&st.weight!==""&&st.weight!==null&&st.weight!==undefined&&st.reps!==""&&st.reps!==null&&st.reps!==undefined&&Number.isFinite(Number(st.weight))&&Number(st.weight)>=0&&Number.isFinite(Number(st.reps))&&Number(st.reps)>0);
 if(!sets.length)return null;
 return {session,log,sets,rpe:Number.isFinite(Number(log.rpe))&&log.rpe!==null&&log.rpe!==""?Number(log.rpe):null,date:sessionDateOf(session)};
}
function getProgressionAdvice(exercise,dayIndex){
 const name=String(exercise?.[0]||"").trim();if(!name)return {kind:"none",title:"Sem recomendação",reason:"Não foi possível identificar o exercício."};
 let range={min:8,max:12};try{range=parseWorkoutReps(exercise?.[2]||"8–12 reps");}catch(e){}
 range.min=Math.max(1,Number(range.min)||8);range.max=Math.max(range.min,Number(range.max)||range.min);
 const sessions=(Array.isArray(state.sessionHistory)?state.sessionHistory:[]).filter(x=>x&&x.id&&x.finishedAt&&Number(x.dayIndex)===Number(dayIndex)).sort((a,b)=>sessionDateOf(a).localeCompare(sessionDateOf(b))||String(a.finishedAt).localeCompare(String(b.finishedAt)));
 const records=sessions.map(session=>getExerciseSessionRecord(session,name)).filter(Boolean).slice(-3);
 if(records.length<2)return {kind:"none",title:"Construindo sua referência",reason:"Ainda preciso de pelo menos duas sessões registradas deste exercício para sugerir uma progressão com mais segurança.",records:records.length};
 const latest=records[records.length-1],previous=records[records.length-2];
 const uncomfortable=records.slice(-2).some(r=>/dor|desconfort|inc[oô]modo|les[aã]o/i.test(String(r.log.notes||"")));
 const latestAllAtTop=latest.sets.length>=Math.max(1,parseInt(String(exercise?.[1]||"3").match(/\d+/)?.[0]||"3",10))&&latest.sets.every(st=>Number(st.reps)>=range.max);
 const previousAllAtTop=previous.sets.length>=Math.max(1,parseInt(String(exercise?.[1]||"3").match(/\d+/)?.[0]||"3",10))&&previous.sets.every(st=>Number(st.reps)>=range.max);
 const latestAvgRpe=latest.rpe, previousAvgRpe=previous.rpe;
 const maxLoad=Math.max(...latest.sets.map(st=>Number(st.weight)));
 const minLoad=Math.min(...latest.sets.map(st=>Number(st.weight)));
 if(uncomfortable)return {kind:"hold",title:"Priorize conforto e técnica",reason:"Há uma observação recente sobre dor ou desconforto. Não vou sugerir aumento de carga; reveja execução, amplitude e ajuste do exercício antes de progredir.",records:records.length};
 if(latestAvgRpe!==null&&latestAvgRpe>=9)return {kind:"hold",title:"Mantenha a carga por enquanto",reason:`O esforço percebido mais recente foi ${latestAvgRpe}/10. Repita com técnica controlada e reavalie antes de aumentar.`,records:records.length};
 if(records.length>=3){const recent=records.slice(-3),maxLoads=recent.map(r=>Math.max(...r.sets.map(st=>Number(st.weight)))),topReps=recent.map(r=>Math.max(...r.sets.map(st=>Number(st.reps)))),sameLoad=maxLoads.every(v=>Math.abs(v-maxLoads[0])<0.001),noRepProgress=topReps[2]<=topReps[1]&&topReps[1]<=topReps[0];if(sameLoad&&noRepProgress&&topReps[2]<range.max){let alternatives=[];try{const catalog=typeof window!=="undefined"&&typeof window.getExerciseCatalog==="function"?window.getExerciseCatalog():[],current=catalog.find(item=>normalizeProgressionExercise(item.name)===normalizeProgressionExercise(name));alternatives=(current?.alternatives||[]).map(id=>catalog.find(item=>String(item.id)===String(id))?.name).filter(Boolean).slice(0,3);}catch(e){}return {kind:"plateau",title:"Possível estagnação: revise a estratégia",reason:`Em três sessões, a carga máxima (${maxLoads[2].toLocaleString("pt-BR",{maximumFractionDigits:1})} kg) e as repetições máximas (${topReps[2]}) não avançaram. Isso não confirma um platô: confira técnica, descanso, recuperação e se os registros estão completos. Considere uma variação equivalente apenas se fizer sentido para seu objetivo e conforto.`,alternatives,records:records.length};}}
 if(latestAllAtTop&&previousAllAtTop&&latestAvgRpe!==null&&previousAvgRpe!==null&&latestAvgRpe<=8&&previousAvgRpe<=8&&maxLoad>0){
  const increment=Math.max(0.5,Math.round(maxLoad*0.025*2)/2),suggested=Math.round((maxLoad+increment)*2)/2;
  return {kind:"load",title:`Próxima meta: testar ${suggested.toLocaleString("pt-BR",{maximumFractionDigits:1})} kg`,reason:`Você alcançou ${range.max} repetições nas séries registradas em duas sessões, com esforço de ${previousAvgRpe}/10 e ${latestAvgRpe}/10. Sugestão conservadora de +${(suggested-maxLoad).toLocaleString("pt-BR",{maximumFractionDigits:1})} kg; ajuste ao menor incremento disponível e mantenha a técnica.`,weight:suggested,reps:range.max,records:records.length};
 }
 if(latestAllAtTop&&latestAvgRpe===null)return {kind:"hold",title:"Registre o esforço antes de subir a carga",reason:`Você atingiu ${range.max} repetições, mas ainda não há RPE recente suficiente para calibrar o aumento. Informe o esforço percebido no fim do exercício.`,records:records.length};
 const latestReps=Math.max(0,...latest.sets.map(st=>Number(st.reps))),latestLoad=Math.max(0,...latest.sets.map(st=>Number(st.weight)));
 if(latestAvgRpe!==null&&latestAvgRpe>=8.5)return {kind:"hold",title:"Consolide o desempenho",reason:`Esforço percebido ${latestAvgRpe}/10. Mantenha carga e faixa de repetições nesta exposição, sem forçar um aumento.`,records:records.length};
 if(latestReps<range.max){const target=Math.min(range.max,latestReps+1);return {kind:"reps",title:`Próxima meta: buscar até ${target} repetições`,reason:`Mantenha a carga atual (${latestLoad.toLocaleString("pt-BR",{maximumFractionDigits:1})} kg) e tente somar uma repetição por série sem perder a técnica. ${latestAvgRpe===null?"Registre também o esforço percebido para calibrar futuras sugestões.":`Último esforço percebido: ${latestAvgRpe}/10.`}`,weight:latestLoad,reps:target,records:records.length};}
 return {kind:"hold",title:"Mantenha e reavalie na próxima sessão",reason:"Os registros ainda não mostram uma condição clara para aumentar a carga com segurança. Compare repetições, esforço e qualidade da execução na próxima exposição.",records:records.length};
}
function renderWorkoutCyclePanel(){
 const host=$("workoutCyclePanel");if(!host)return;
 const cycle=state.workoutCycle&&typeof state.workoutCycle==="object"?state.workoutCycle:null;
 const now=Date.now(),started=cycle?.startedAt?new Date(cycle.startedAt).getTime():0,days=started?Math.max(0,Math.floor((now-started)/86400000)):0,weeks=days/7;
 const linked=cycle?(state.sessionHistory||[]).filter(s=>s&&s.cycleId===cycle.id&&s.finishedAt).length:0;
 if(!cycle){const archived=Array.isArray(state.workoutCycles)?state.workoutCycles:[];host.innerHTML=`<div class="section-head"><h4>Ciclo de treino · evolução de médio prazo</h4><span class="pill">${archived.length} ciclo(s) no histórico</span></div><p>Organize a ficha em blocos de 4–6 semanas. O FORMA acompanha duração e sessões concluídas; a troca de exercícios continua sob seu controle.</p><div class="workout-cycle-actions"><button class="btn" id="startWorkoutCycle" type="button">Iniciar ciclo de 6 semanas</button></div>${archived.length?`<p>Último ciclo: ${esc(archived[archived.length-1].title||"Ciclo de treino")} · ${esc(archived[archived.length-1].startedAt?formatDate(String(archived[archived.length-1].startedAt).slice(0,10)):"data não informada")} · ${Number(archived[archived.length-1].sessions||0)} sessão(ões).</p>`:""}`;
  $("startWorkoutCycle").onclick=()=>{const before=JSON.parse(JSON.stringify(state));state.workoutCycle={id:"cycle-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7),title:state.planTitle||"Ciclo atual",startedAt:new Date().toISOString(),plannedWeeks:6,status:"active",sessionIds:[],planSnapshot:workouts.map(w=>({day:w.day,title:w.title,ex:(w.ex||[]).map(ex=>ex.slice())})),review:null};if(!save()){state=before;renderWorkoutCyclePanel();return;}renderWorkoutCyclePanel();};return;
 }
 const ready=weeks>=4,overdue=weeks>=6;
 host.innerHTML=`<div class="section-head"><h4>${esc(cycle.title||"Ciclo atual")}</h4><span class="pill">${Math.floor(weeks)} semana(s) · ${linked} sessão(ões)</span></div><p>Início: ${esc(formatDate(String(cycle.startedAt||"").slice(0,10)))}. Meta planejada: ${Number(cycle.plannedWeeks)||6} semanas. ${ready?"Já é um bom momento para revisar a evolução e decidir se mantém, ajusta ou inicia outro ciclo.":`Faltam cerca de ${Math.max(0,28-days)} dia(s) para a primeira revisão sugerida.`}</p>${overdue?'<div class="insight-alert">O ciclo chegou a 6 semanas. Revise resultados, esforço, recuperação e motivação antes de planejar o próximo bloco.</div>':ready?'<div class="insight-alert insight-good">Revisão de ciclo disponível. A data é um lembrete, não uma obrigação de trocar a ficha ou fazer deload.</div>':''}<div class="workout-cycle-actions"><button class="btn" id="reviewWorkoutCycle" type="button">${ready?"Concluir e revisar ciclo":"Encerrar ciclo e revisar"}</button></div>`;
 $("reviewWorkoutCycle").onclick=()=>{const completed=(state.sessionHistory||[]).filter(s=>s&&s.finishedAt&&s.cycleId===cycle.id),summary={sessions:completed.length,completedSets:completed.reduce((sum,s)=>sum+(Number(s.completedSets)||0),0),startedAt:cycle.startedAt,finishedAt:new Date().toISOString(),durationDays:days,planTitle:cycle.title||state.planTitle||"Ciclo de treino"};const review=prompt(`Revisão do ciclo (${days} dias)\nSessões concluídas: ${summary.sessions}\nSéries concluídas: ${summary.completedSets}\n\nO que melhorou? O que ficou difícil? Algum exercício merece ajuste?`,"");if(review===null)return;const before=JSON.parse(JSON.stringify(state));state.workoutCycles=Array.isArray(state.workoutCycles)?state.workoutCycles:[];state.workoutCycles.push({...cycle,status:"completed",finishedAt:summary.finishedAt,sessions:summary.sessions,completedSets:summary.completedSets,durationDays:days,review:String(review).trim().slice(0,1000)});state.workoutCycle=null;if(!save()){state=before;renderWorkoutCyclePanel();return;}renderWorkoutCyclePanel();alert("Ciclo arquivado com a revisão. A ficha e o histórico de treinos foram preservados. Para iniciar outro bloco, use o botão de novo ciclo.");};
}
function applyProgressionAdvice(advice){
 if(!state.sessionActive||!workouts[state.sessionDay])return;
 const index=Math.max(0,Math.min(workouts[state.sessionDay].ex.length-1,Number(state.sessionExercise)||0)),id=getSessionExerciseId(index),exercise=workouts[state.sessionDay].ex[index];if(!advice||!["load","reps"].includes(advice.kind))return;
 const before=JSON.parse(JSON.stringify(state)),log=state.logs[id]||(state.logs[id]={}),sets=Array.isArray(log.sets)?log.sets:[];log.sets=sets;
 for(let si=0;si<sessionSetCount(exercise);si++){const old=log.sets[si]||{};if(old.completed)continue;log.sets[si]={...old,weight:advice.weight,reps:advice.reps,exerciseName:exercise[0],sessionId:state.sessionId,suggestionApplied:true};}
 state.progressionDecisions=Array.isArray(state.progressionDecisions)?state.progressionDecisions:[];state.progressionDecisions.push({at:new Date().toISOString(),sessionId:state.sessionId,exerciseName:exercise[0],kind:advice.kind,weight:advice.weight,reps:advice.reps,decision:"applied"});
 if(!save()){state=before;renderWorkoutSession();return;}renderWorkoutSession();
}
function renderWorkoutSession(){
 if(!state.sessionActive||!workouts[state.sessionDay])return;const w=sessionWorkoutForDay(state.sessionDay);if(!w.ex.length){$("sessionExercisePanel").innerHTML='<p>Este treino não tem exercícios. Volte ao plano e adicione um.</p>';return;}
 const exIndex=Math.max(0,Math.min(w.ex.length-1,Number(state.sessionExercise)||0));state.sessionExercise=exIndex;const e=w.ex[exIndex],id=getSessionExerciseId(exIndex),log=state.logs[id]||{},sets=Array.isArray(log.sets)?log.sets:[],n=sessionSetCount(e);
 $("sessionWorkoutTitle").textContent=w.day+" — "+getWorkoutMuscleTitle(w);$("sessionWorkoutSub").textContent="Iniciado "+(state.sessionStartedAt?new Date(state.sessionStartedAt).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):"agora")+" · seus registros são salvos automaticamente";
 let totalSets=0,doneSets=0;w.ex.forEach((ex,i)=>{const setList=state.logs[getSessionExerciseId(i)]?.sets||[];const planned=sessionSetCount(ex);totalSets+=planned;doneSets+=setList.filter(st=>st?.completed).length;});const pct=Math.round(doneSets/Math.max(1,totalSets)*100);$("sessionProgressFill").style.width=pct+"%";$("sessionProgressBar").setAttribute("aria-valuenow",String(pct));
 $("sessionExerciseNav").innerHTML=w.ex.map((ex,i)=>{const sl=state.logs[getSessionExerciseId(i)]?.sets||[],planned=sessionSetCount(ex),finished=sl.filter(st=>st?.completed).length,isDone=!!state.logs[getSessionExerciseId(i)]?.done,focus=getExerciseFocus(ex[0],typeof window.inferExercise==="function"?window.inferExercise(ex[0]):null);return `<button type="button" class="session-nav-item ${i===exIndex?"active":""} ${isDone?"done":""}" data-session-nav="${i}" aria-current="${i===exIndex?"step":"false"}"><span class="session-nav-num">${isDone?"✓":i+1}</span><span><span class="session-nav-name">${esc(ex[0])}</span><span class="session-nav-focus">Foco: ${esc(focus)}</span><span class="session-nav-count">${finished}/${planned} séries</span></span></button>`}).join("");
 const setIndex=Math.max(0,Math.min(n-1,Number(state.sessionSet)||0));state.sessionSet=setIndex;const st=sets[setIndex]||{},prev=previousSetForExercise(e[0],id,setIndex),weight=st.weight??(prev?prev.weight:""),reps=st.reps??(prev?prev.reps:"");const defaultRest=st.restSeconds??plannedRestSeconds(e[3]);const completedCount=sets.filter(x=>x?.completed).length;
 const setNav=Array.from({length:n},(_,si)=>{const item=sets[si]||{};return `<button type="button" class="set-step-btn ${si===setIndex?"active":""} ${item.completed?"done":""}" data-set-nav="${si}" aria-current="${si===setIndex?"step":"false"}">${item.completed?"✓ ":""}${si+1}</button>`}).join("");
 const setCard=`<div class="current-set-card" data-session-set="${setIndex}"><div class="current-set-top"><span class="current-set-badge">SÉRIE ${setIndex+1} DE ${n}</span><span class="sub" style="margin:0">${st.completed?"Série concluída":"Série em andamento"}</span></div><div class="current-set-fields"><div class="field"><label for="sessionWeight-${setIndex}">Carga (kg)</label><input id="sessionWeight-${setIndex}" type="number" inputmode="decimal" min="0" step="0.5" value="${esc(weight)}" placeholder="${prev?"Última: "+prev.weight:"Ex.: 40"}" data-session-field="weight" aria-label="Carga da série ${setIndex+1}"></div><div class="field"><label for="sessionReps-${setIndex}">Repetições</label><input id="sessionReps-${setIndex}" type="number" inputmode="numeric" min="1" step="1" value="${esc(reps)}" placeholder="Ex.: 12" data-session-field="reps" aria-label="Repetições da série ${setIndex+1}"></div></div><div class="current-set-rest"><label for="sessionRest-${setIndex}" class="sub" style="margin:0">Descanso (s)</label><input id="sessionRest-${setIndex}" type="number" inputmode="numeric" min="0" max="900" step="5" value="${esc(defaultRest)}" data-session-field="restSeconds" aria-label="Descanso após a série"></div><div class="current-set-actions"><button type="button" class="btn ${st.completed?"secondary":""}" id="sessionCompleteCurrent">${st.completed?"✓ Série concluída — salvar alterações":"✓ Salvar e concluir série"}</button><button type="button" class="btn ghost" id="sessionSaveCurrent">Salvar sem concluir</button></div><div class="set-nav-controls"><button type="button" class="btn secondary" id="sessionPrevSet" ${setIndex===0?"disabled":""}>← Série anterior</button><button type="button" class="btn secondary" id="sessionNextSet" ${setIndex>=n-1?"disabled":""}>Próxima série →</button></div></div>`;
 const sessionFocus=getExerciseFocus(e[0],typeof window.inferExercise==="function"?window.inferExercise(e[0]):null);$("sessionExercisePanel").innerHTML=`<div class="eyebrow">EXERCÍCIO ${exIndex+1} DE ${w.ex.length}</div><h3 class="session-exercise-title">${esc(e[0])}</h3><p class="session-exercise-focus">Foco específico: ${esc(sessionFocus)}</p><p class="session-exercise-meta">Planejado: ${esc(e[1])} · ${esc(e[2])} · descanso ${esc(e[3])}</p>${(()=>{const advice=getProgressionAdvice(e,state.sessionDay);return `<div class="progression-advice"><div class="advice-title">SUGESTÃO INTELIGENTE · PRÓXIMA META</div><strong>${esc(advice.title)}</strong><p>${esc(advice.reason)}</p>${advice.alternatives?.length?`<p><strong>Variações relacionadas no catálogo:</strong> ${advice.alternatives.map(esc).join(" · ")}. Confira o foco e o equipamento antes de substituir.</p>`:""}${["load","reps"].includes(advice.kind)?`<button type="button" class="btn secondary" id="applyProgressionAdvice">Usar como meta nas séries pendentes</button>`:""}</div>`})()}<div class="set-title">PROGRESSO DAS SÉRIES · ${completedCount}/${n} CONCLUÍDAS</div><div class="set-stepper" aria-label="Escolher série">${setNav}</div>${setCard}<div class="session-tools"><button class="btn ghost" id="sessionMarkExercise" type="button">${log.done?"✓ Exercício concluído":"Marcar exercício concluído"}</button></div><div class="session-notes"><div><label for="sessionNotes">Observações (opcional)</label><textarea id="sessionNotes" maxlength="500" placeholder="Técnica, ajuste do equipamento, desconforto…">${esc(log.notes||"")}</textarea></div><div><label for="sessionRpe">Esforço percebido (1–10)</label><select id="sessionRpe"><option value="">Não informado</option>${Array.from({length:10},(_,r)=>`<option value="${r+1}" ${Number(log.rpe)===r+1?"selected":""}>${r+1}</option>`).join("")}</select></div></div>`;
 const adviceForCurrent=getProgressionAdvice(e,state.sessionDay),applyAdviceButton=$("applyProgressionAdvice");if(applyAdviceButton)applyAdviceButton.onclick=()=>{if(!confirm("Aplicar esta meta apenas às séries ainda não concluídas? Séries já concluídas não serão alteradas."))return;applyProgressionAdvice(adviceForCurrent);};
 const moveToExercise=index=>{if(!flushVisibleSessionDraft())return false;const beforeExercise=state.sessionExercise,beforeSet=state.sessionSet;state.sessionExercise=Math.max(0,Math.min(w.ex.length-1,Number(index)||0));const sl=state.logs[getSessionExerciseId(state.sessionExercise)]?.sets||[],planned=sessionSetCount(w.ex[state.sessionExercise]),pending=Array.from({length:planned},(_,si)=>si).find(si=>!sl[si]?.completed);state.sessionSet=pending===undefined?0:pending;if(!save()){state.sessionExercise=beforeExercise;state.sessionSet=beforeSet;renderWorkoutSession();return false;}renderWorkoutSession();window.scrollTo({top:0,behavior:"smooth"});return true;};
 document.querySelectorAll("[data-session-nav]").forEach(b=>b.onclick=()=>moveToExercise(Number(b.dataset.sessionNav)));
 const replaceButton=$("sessionReplaceExercise");if(replaceButton)replaceButton.onclick=()=>openSessionReplacement(exIndex);
 document.querySelectorAll("[data-session-set]").forEach(row=>row.querySelectorAll("input").forEach(input=>input.addEventListener("input",()=>saveSessionDraft(exIndex,Number(row.dataset.sessionSet)))));
 const moveToSet=index=>{if(!flushVisibleSessionDraft())return false;const beforeSet=state.sessionSet;state.sessionSet=Math.max(0,Math.min(n-1,Number(index)||0));if(!save()){state.sessionSet=beforeSet;renderWorkoutSession();return false;}renderWorkoutSession();return true;};
 document.querySelectorAll("[data-set-nav]").forEach(b=>b.onclick=()=>moveToSet(Number(b.dataset.setNav)));
 $("sessionPrevSet").onclick=()=>moveToSet(setIndex-1);
 $("sessionNextSet").onclick=()=>moveToSet(setIndex+1);
 $("sessionSaveCurrent").onclick=()=>saveSessionSet(exIndex,setIndex,false);
 $("sessionCompleteCurrent").onclick=()=>saveSessionSet(exIndex,setIndex,true);
 $("sessionNotes").addEventListener("input",()=>{const before=state.logs[id]?JSON.parse(JSON.stringify(state.logs[id])):null;state.logs[id]=state.logs[id]||{};state.logs[id].notes=$("sessionNotes").value;state.logs[id].notesUpdatedAt=new Date().toISOString();if(!save()){if(before)state.logs[id]=before;else delete state.logs[id];renderWorkoutSession();}});
 $("sessionRpe").addEventListener("change",()=>{const before=state.logs[id]?JSON.parse(JSON.stringify(state.logs[id])):null;state.logs[id]=state.logs[id]||{};state.logs[id].rpe=$("sessionRpe").value===""?null:Number($("sessionRpe").value);if(!save()){if(before)state.logs[id]=before;else delete state.logs[id];renderWorkoutSession();return;}renderExerciseProgress();});
 $("sessionMarkExercise").onclick=()=>{const before=state.logs[id]?JSON.parse(JSON.stringify(state.logs[id])):null;state.logs[id]=state.logs[id]||{};state.logs[id].done=!state.logs[id].done;if(!save()){if(before)state.logs[id]=before;else delete state.logs[id];renderWorkoutSession();renderWorkout();return;}renderWorkoutSession();renderWorkout();};
 $("sessionPrevExercise").disabled=exIndex===0;$("sessionPrevExercise").onclick=()=>moveToExercise(exIndex-1);$("sessionNextExercise").textContent=exIndex>=w.ex.length-1?"Voltar ao primeiro ↺":"Próximo exercício →";$("sessionNextExercise").onclick=()=>moveToExercise(exIndex>=w.ex.length-1?0:exIndex+1);
 $("sessionBackToPlan").onclick=closeWorkoutSession;
 $("sessionFinish").onclick=finishWorkoutSession;
 updateRestTimerUI();if(state.restTimer?.running){if(restInterval)clearInterval(restInterval);restInterval=setInterval(tickRestTimer,250);}
}
function finishWorkoutSession(){
 const w=sessionWorkoutForDay(state.sessionDay),key=getSessionKey(),sessionId=state.sessionId;
 if(!w||!sessionId){alert("Não encontrei uma sessão válida para finalizar.");return;}
 if(!confirm("Finalizar esta sessão de treino? Os registros salvos serão mantidos."))return;
 const before=JSON.parse(JSON.stringify(state));
 let completedSets=0,volume=0,completedExercises=0;
 w.ex.forEach((_,i)=>{const log=state.logs[key+"-"+i]||{};if(log.done)completedExercises++;(log.sets||[]).forEach(st=>{if(st?.completed){completedSets++;const hasWeight=st.weight!==null&&st.weight!==undefined&&String(st.weight)!=="",hasReps=st.reps!==null&&st.reps!==undefined&&String(st.reps)!=="";if(hasWeight&&hasReps&&Number.isFinite(Number(st.weight))&&Number.isFinite(Number(st.reps)))volume+=Number(st.weight)*Number(st.reps);}})});
 const finishedAt=new Date().toISOString();state.completed[weekKey()+"-"+state.sessionDay]=true;state.sessionActive=false;state.sessionFinishedAt=finishedAt;state.sessionHistory=Array.isArray(state.sessionHistory)?state.sessionHistory:[];state.sessionHistory=state.sessionHistory.filter(x=>x?.id!==sessionId);
 state.sessionHistory.push({id:sessionId,cycleId:state.workoutCycle?.id||null,weekKey:weekKey(),dayIndex:state.sessionDay,day:w.day,workoutName:w.title,sessionDate:state.sessionDate||dateKey(),startedAt:state.sessionStartedAt,finishedAt,completedSets,completedExercises,exerciseCount:w.ex.length,volume,exerciseSnapshot:w.ex.map((ex,index)=>({index,name:state.logs[`${sessionId}-${index}`]?.exerciseName||ex[0],plannedName:state.sessionExerciseReplacements?.[`${sessionId}-${index}`]?.originalName||ex[0],replacement:state.sessionExerciseReplacements?.[`${sessionId}-${index}`]?.name||null,sets:ex[1],reps:ex[2],rest:ex[3]})),replacements:Object.entries(state.sessionExerciseReplacements||{}).filter(([key])=>key.startsWith(sessionId+"-")).map(([key,value])=>({exerciseIndex:Number(key.slice(sessionId.length+1)),...value}))});if(state.workoutCycle){state.workoutCycle.sessionIds=Array.isArray(state.workoutCycle.sessionIds)?state.workoutCycle.sessionIds:[];if(!state.workoutCycle.sessionIds.includes(sessionId))state.workoutCycle.sessionIds.push(sessionId);}
 Object.keys(state.sessionExerciseReplacements||{}).forEach(replacementKey=>{if(replacementKey.startsWith(sessionId+"-"))delete state.sessionExerciseReplacements[replacementKey];});
 if(!save()){state=before;renderWorkoutSession();renderWorkout();renderWeekButtons();updateDashboard();return;}
 document.body.classList.remove("session-mode");showTab("treino");renderWorkout();renderWeekButtons();updateDashboard();renderProgress();alert(`Treino finalizado!\n\n${w.day} — ${w.title}\nExercícios marcados: ${completedExercises}/${w.ex.length}\nSéries concluídas: ${completedSets}\nVolume registrado: ${Math.round(volume).toLocaleString("pt-BR")} kg·reps\n\nVocê pode consultar o histórico em Progresso.`);
}

function updateRings(){
 const w=workouts[state.selected];let count=w.ex.filter((e,i)=>getPlanLogForExercise(state.selected,i,e[0])?.log?.done).length;let pct=Math.round(count/Math.max(1,w.ex.length)*100);
 $("sessionRing").style.setProperty("--progress",pct+"%");$("sessionRingText").textContent=pct+"%";$("sessionCount").textContent=count+" de "+w.ex.length+" exercícios marcados";renderSessionStats();
}
function updateDashboard(){
 const hasPlan=workouts.length>0&&Array.isArray(workouts[0]?.ex)&&workouts.some(x=>x.ex.length);const count=doneCount(),total=hasPlan?workouts.length:0;$("weeklyStat").textContent=hasPlan?count+"/"+total:"—";$("ringText").textContent=hasPlan?count+"/"+total:"—";$("weekRing").style.setProperty("--progress",(count/Math.max(1,total)*100)+"%");
 $("weekMessage").textContent=!hasPlan?"Crie seu plano para acompanhar os treinos.":count===total?"Semana completa. Excelente consistência!":count===0?"Sua próxima sessão começa com uma decisão.":`Você concluiu ${count} de ${total} sessões. Continue no seu ritmo.`;
 const idx=dayFromDate(),w=workouts[idx];$("todayWorkoutTitle").textContent=!hasPlan?"Nenhum treino planejado":w.day+" — "+getWorkoutMuscleTitle(w);$("todayWorkoutSub").textContent=!hasPlan?"Comece pela criação do seu plano.":w.sub;
 $("todaySummary").innerHTML=hasPlan?w.ex.map((e,i)=>`<div style="display:flex;justify-content:space-between;gap:8px;border-top:1px solid var(--line);padding:9px 0;font-size:12px"><span>${esc(e[0])}</span><span class="muted">${esc(e[1].replace(" séries","×"))} · ${esc(e[2])}</span></div>`).join(""):'<p class="sub">Nenhum exercício cadastrado.</p>';
 const last=state.progress.length?state.progress[state.progress.length-1].weight:state.startWeight;
 $("weightStat").textContent=last==null?"—":Number(last).toLocaleString("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:1})+" kg";$("heroWeight").textContent=last==null?"—":Number(last).toLocaleString("pt-BR")+" kg";$("goalWeight").textContent=state.goalWeight==null?"—":state.goalWeight;
}
const FOOD_DB={
 ovo:{name:"Ovo inteiro, cozido",unit:"g",k:146,p:13.3,c:0.6,f:9.5,group:"protein",cost:2,source:"TACO/NEPA 2011 — ovo de galinha, inteiro, cozido"},
 clara:{name:"Clara de ovo",unit:"g",k:52,p:10.9,c:0.7,f:0.2,group:"protein",cost:2,source:"TBCA — valor de referência; conferir forma de preparo"},
 leite:{name:"Leite de vaca desnatado",unit:"ml",k:35,p:3.4,c:5,f:0.1,group:"protein",cost:1,source:"TBCA — leite desnatado; valor por 100 g aproximado para ml"},
 iogurte:{name:"Iogurte natural desnatado",unit:"g",k:56,p:4.1,c:7.5,f:0.5,group:"protein",cost:1,source:"TBCA — referência genérica; marcas variam"},
 cottage:{name:"Queijo cottage",unit:"g",k:98,p:11.1,c:3.4,f:4.3,group:"protein",cost:3,source:"TBCA — referência genérica; marcas variam"},
 pts:{name:"Proteína texturizada de soja hidratada",unit:"g",k:120,p:16,c:8,f:1,group:"protein",cost:1,source:"Estimativa para PTS hidratada; depende da marca e da água absorvida. Use o rótulo para precisão"},
 tofu:{name:"Tofu",unit:"g",k:76,p:8.1,c:1.9,f:4.8,group:"protein",cost:2,source:"TBCA — referência genérica; produto e teor de água variam"},
 frango:{name:"Peito de frango, sem pele, cozido",unit:"g",k:163,p:31.5,c:0,f:3.2,group:"protein",cost:3,source:"TACO/NEPA 2011 — frango, peito, sem pele, cozido"},
 feijao:{name:"Feijão carioca cozido",unit:"g",k:76,p:4.8,c:13.6,f:0.5,group:"carbprotein",cost:1,source:"TACO/NEPA 2011 — feijão, carioca, cozido"},
 arroz:{name:"Arroz tipo 1 cozido",unit:"g",k:128,p:2.5,c:28.1,f:0.2,group:"carb",cost:1,source:"TACO/NEPA 2011 — arroz, tipo 1, cozido"},
 aveia:{name:"Aveia em flocos, seca",unit:"g",k:394,p:13.9,c:66.6,f:8.5,group:"carbprotein",cost:1,source:"TACO/NEPA 2011 — aveia, flocos, crua"},
 pao:{name:"Pão francês",unit:"g",k:300,p:8,c:58,f:3.1,group:"carb",cost:1,source:"TACO/NEPA 2011 — pão, francês"},
 batata:{name:"Batata inglesa cozida",unit:"g",k:52,p:1.2,c:11.9,f:0.1,group:"carb",cost:1,source:"TACO/NEPA 2011 — batata, inglesa, cozida"},
 banana:{name:"Banana-prata crua",unit:"g",k:98,p:1.3,c:26,f:0.1,group:"carb",cost:1,source:"TACO/NEPA 2011 — banana, prata, crua"},
 mamao:{name:"Mamão papaia cru",unit:"g",k:40,p:0.5,c:10.4,f:0.1,group:"carb",cost:1,source:"TACO/NEPA 2011 — mamão, papaia, cru"},
 legumes:{name:"Legumes variados cozidos (estimativa)",unit:"g",k:35,p:2,c:6,f:0.4,group:"veg",cost:1,source:"Estimativa de mistura; não representa um alimento específico da TACO/TBCA. Para maior precisão, selecione cada vegetal individualmente"},
 azeite:{name:"Azeite de oliva",unit:"g",k:884,p:0,c:0,f:100,group:"fat",cost:3,source:"TACO/NEPA 2011 — azeite de oliva"},
 amendoim:{name:"Amendoim torrado",unit:"g",k:606,p:22.5,c:18.7,f:54,group:"fatprotein",cost:1,source:"TACO/NEPA 2011 — amendoim, torrado, salgado (valores podem variar)"},
 queijo:{name:"Queijo muçarela",unit:"g",k:300,p:22.6,c:2.2,f:22.4,group:"fatprotein",cost:3,source:"TACO/NEPA 2011 — queijo, mozzarella"},
 soja:{name:"Soja cozida",unit:"g",k:151,p:12.5,c:12.8,f:7.1,group:"carbprotein",cost:1,source:"TACO/NEPA 2011 — soja, cozida"},
 macarrao:{name:"Macarrão cozido",unit:"g",k:157,p:5.8,c:30.9,f:0.9,group:"carb",cost:1,source:"TACO/NEPA 2011 — macarrão, trigo, cozido"},
 brocolis:{name:"Brócolis cozido",unit:"g",k:25,p:2.1,c:4.4,f:0.5,group:"veg",cost:2,source:"TACO/NEPA 2011 — brócolis, cozido"},
 cenoura:{name:"Cenoura cozida",unit:"g",k:30,p:0.8,c:6.7,f:0.2,group:"veg",cost:1,source:"TACO/NEPA 2011 — cenoura, cozida"},
 tomate:{name:"Tomate cru",unit:"g",k:15,p:1.1,c:3.1,f:0.2,group:"veg",cost:1,source:"TACO/NEPA 2011 — tomate, cru"},
 alface:{name:"Alface crespa crua",unit:"g",k:11,p:1.3,c:1.7,f:0.2,group:"veg",cost:1,source:"TACO/NEPA 2011 — alface, crespa, crua"}
};
const FOOD_BASE_KEYS=new Set(Object.keys(FOOD_DB));
const FOOD_BASE_DEFAULTS=JSON.parse(JSON.stringify(FOOD_DB));
// Fase 1 — modelo nutricional versionado, compatível com dados antigos.
const FOOD_SCHEMA_VERSION=2;
function normalizeFoodRecord(key, raw, isCustom=false){
 if(!raw||typeof raw.name!=='string')return null;
 const nums=[raw.k,raw.p,raw.c,raw.f].map(Number);
 if(nums.some(v=>!Number.isFinite(v)||v<0)||nums[0]>1000||nums.slice(1).some(v=>v>100)||nums[1]+nums[2]+nums[3]>100.01)return null;
 const unit=raw.unit==='ml'?'ml':'g';
 return {...raw,id:String(raw.id||key),key:String(key),name:raw.name.trim(),unit,k:nums[0],p:nums[1],c:nums[2],f:nums[3],basisAmount:100,basisUnit:unit,group:raw.group|| (isCustom?'custom':'other'),sourceType:raw.sourceType|| (isCustom?'user':'reference'),source:raw.source|| (isCustom?'Informado manualmente pelo usuário':'Fonte de referência não especificada'),sourceRef:raw.sourceRef||'',preparation:raw.preparation||'',dataVersion:FOOD_SCHEMA_VERSION,updatedAt:raw.updatedAt||null,archived:!!raw.archived};
}
function validateFoodRecord(food){
 if(!food||typeof food.name!=='string'||!food.name.trim())return {ok:false,error:'Informe o nome do alimento.'};
 const values=[food.k,food.p,food.c,food.f].map(Number);
 if(values.some(v=>!Number.isFinite(v)||v<0))return {ok:false,error:'Os valores nutricionais devem ser números válidos e não negativos.'};
 if(values[0]>1000||values.slice(1).some(v=>v>100))return {ok:false,error:'Use kcal entre 0 e 1.000 e cada macronutriente entre 0 e 100 g por 100 g/ml.'};
 if(values[1]+values[2]+values[3]>100.01)return {ok:false,error:'A soma de proteínas, carboidratos e gorduras não pode ultrapassar 100 g por 100 g/ml.'};
 if(!['g','ml'].includes(food.unit))return {ok:false,error:'Escolha uma unidade-base válida (g ou ml).'};
 return {ok:true,warning:Math.abs(values[0]-(values[1]*4+values[2]*4+values[3]*9))>Math.max(50,values[0]*0.2)?'A energia não coincide exatamente com a estimativa 4/4/9 dos macronutrientes. Isso pode ocorrer por fibras, outros componentes ou arredondamentos; confira a fonte.':null};
}
// Conversões domésticas explícitas. São estimativas de massa com variação natural; alimentos sem equivalência cadastrada permanecem em g/ml.
const FOOD_PORTION_MEASURES={
 ovo:[{value:"un",label:"unidade(s)",baseAmount:50,baseUnit:"g",note:"1 ovo médio ≈ 50 g de parte comestível; tamanho varia."}],
 pao:[{value:"un",label:"unidade(s)",baseAmount:50,baseUnit:"g",note:"1 pão francês ≈ 50 g; o peso real varia por padaria."}],
 banana:[{value:"un",label:"unidade(s)",baseAmount:70,baseUnit:"g",note:"1 banana-prata média ≈ 70 g de parte comestível; tamanho varia."}]
};
function foodMeasureOptions(key,food){const base=food?.unit||'g';const measures=[...(FOOD_PORTION_MEASURES[key]||[])];const foodName=normalizeFoodText(String(food?.name||key||''));if(base==='g'&&foodName.includes('bolo de rolo')&&!measures.some(m=>m.value==='fatia'))measures.push({value:'fatia',label:'fatia(s)',baseAmount:30,baseUnit:'g',note:'Estimativa operacional: 1 fatia ≈ 30 g. O tamanho varia; para maior precisão, pese a fatia e registre em gramas.'});return [{value:'base',label:base==='ml'?'Mililitros (ml)':'Gramas (g)',baseAmount:1,baseUnit:base,note:''},...measures.filter(m=>m.baseUnit===base)];}
function selectedFoodMeasure(){const key=$('foodSelected')?.value||'',food=FOOD_DB[key],value=$('foodAmountUnitSelect')?.value||'base';return foodMeasureOptions(key,food).find(m=>m.value===value)||foodMeasureOptions(key,food)[0];}
function updateFoodMeasurePicker(key,preferred){const sel=$('foodAmountUnitSelect');if(!sel)return;const food=FOOD_DB[key];const options=foodMeasureOptions(key,food);sel.innerHTML=options.map(m=>`<option value="${m.value}">${m.label}</option>`).join('');sel.value=options.some(m=>m.value===preferred)?preferred:'base';const measure=selectedFoodMeasure();$('foodAmountUnit').textContent=measure.value==='base'?(food?.unit||'g'):measure.label;$('foodAmount').placeholder=measure.value==='base'?`Quantidade em ${food?.unit||'g'}`:`Quantidade em ${measure.label}`;if(measure.note)$('foodAmountHelp').textContent=measure.note;else $('foodAmountHelp').textContent=`Referência nutricional por 100 ${food?.unit||'g'}. Informe a quantidade consumida.`;}
function calculateFoodAmount(food, amount){
 const qty=Number(amount);if(!food||!Number.isFinite(qty)||qty<0)return null;
 const factor=qty/(Number(food.basisAmount)||100);
 return {amount:qty,unit:food.unit||'g',kcal:Number(food.k)*factor,protein:Number(food.p)*factor,carbs:Number(food.c)*factor,fat:Number(food.f)*factor,calculationVersion:FOOD_SCHEMA_VERSION};
}
function foodSnapshot(food){return {name:food.name,unit:food.unit||'g',basisAmount:Number(food.basisAmount)||100,basisUnit:food.basisUnit||food.unit||'g',k:Number(food.k),p:Number(food.p),c:Number(food.c),f:Number(food.f),saturated:food.saturated??null,trans:food.trans??null,fiber:food.fiber??null,sugars:food.sugars??null,addedSugars:food.addedSugars??null,sodium:food.sodium??null,cholesterol:food.cholesterol??null,micronutrients:food.micronutrients||food.micros||{},category:food.category||'',description:food.description||'',brand:food.brand||'',barcode:food.barcode||'',preparation:food.preparation||'',notes:food.notes||'',sourceType:food.sourceType||'reference',source:food.source||'Fonte não especificada',sourceRef:food.sourceRef||'',dataVersion:food.dataVersion||FOOD_SCHEMA_VERSION};}
// Custom foods are normalized into one shared source used by the diary and simulator.
function loadCustomFoodsIntoDB(){
 const custom=state.customFoods&&typeof state.customFoods==='object'?state.customFoods:{};
 const overrides=state.foodOverrides&&typeof state.foodOverrides==='object'?state.foodOverrides:{};
 FOOD_BASE_KEYS.forEach(key=>{FOOD_DB[key]=JSON.parse(JSON.stringify(FOOD_BASE_DEFAULTS[key]));});
 Object.keys(FOOD_DB).filter(k=>k.startsWith('custom_')||k.startsWith('history_')).forEach(k=>delete FOOD_DB[k]);
 Object.keys(custom).forEach(key=>{const f=normalizeFoodRecord(key,custom[key],true);if(f)FOOD_DB[key]=f;});
 // Personalizações da Base FORMA são aplicadas apenas na cópia em memória do perfil.
 Object.keys(overrides).forEach(key=>{if(!FOOD_BASE_KEYS.has(key))return;const f=normalizeFoodRecord(key,overrides[key],true);if(f)FOOD_DB[key]=f;});
 state.foodDataVersion=FOOD_SCHEMA_VERSION;
}
function migrateFoodStateObject(rawState){
 const data=rawState&&typeof rawState==='object'?{...rawState}:{};
 data.customFoods=data.customFoods&&typeof data.customFoods==='object'&&!Array.isArray(data.customFoods)?data.customFoods:{};
 data.foodOverrides=data.foodOverrides&&typeof data.foodOverrides==='object'&&!Array.isArray(data.foodOverrides)?data.foodOverrides:{};
 for(const [key,food] of Object.entries(data.customFoods)){
  if(!food||typeof food!=='object'||Array.isArray(food)){delete data.customFoods[key];continue;}
  data.customFoods[key]={...food,sourceType:food.sourceType||'user',source:food.source||'Informado manualmente pelo usuário',sourceRef:food.sourceRef||'',preparation:food.preparation||'',basisAmount:100,basisUnit:food.unit==='ml'?'ml':'g',dataVersion:FOOD_SCHEMA_VERSION,updatedAt:food.updatedAt||null};
 }
 data.foodEntries=Array.isArray(data.foodEntries)?data.foodEntries.filter(e=>e&&typeof e==='object'&&!Array.isArray(e)).map(e=>({...e,calculationVersion:e.calculationVersion||1,foodSnapshot:e.foodSnapshot||{name:e.name||'Alimento registrado',unit:e.unit||'g',basisAmount:100,basisUnit:e.unit||'g',k:null,p:null,c:null,f:null,sourceType:'legacy',source:'Registro histórico anterior à versão 2',sourceRef:'',preparation:'',dataVersion:1}})):[];
 data.foodFavorites=Array.isArray(data.foodFavorites)?[...new Set(data.foodFavorites.filter(k=>typeof k==='string'))]:[];
 data.savedMeals=Array.isArray(data.savedMeals)?data.savedMeals.filter(m=>m&&typeof m==='object'&&!Array.isArray(m)&&typeof m.name==='string'&&Array.isArray(m.items)).map(m=>({...m,id:String(m.id||('meal_'+Date.now().toString(36))),name:m.name.trim().slice(0,90),items:m.items.filter(x=>x&&typeof x==='object'&&typeof x.foodKey==='string'&&Number.isFinite(Number(x.amount))&&Number(x.amount)>0).map(x=>({...x,amount:Number(x.amount)}))})).filter(m=>m.name&&m.items.length):[];
 data.foodDataVersion=FOOD_SCHEMA_VERSION;
 return data;
}
function migrateFoodData(){Object.assign(state,migrateFoodStateObject(state));}
// Rebuild an ephemeral record from the snapshot when a custom food was deleted or renamed.
// This preserves the ability to edit/repeat historical entries without changing their stored totals.
function ensureFoodForEntry(entry){
 if(!entry)return null;
 if(entry.foodKey&&FOOD_DB[entry.foodKey])return entry.foodKey;
 const snap=entry.foodSnapshot;
 if(!snap||![snap.k,snap.p,snap.c,snap.f].every(v=>v!==null&&v!==''&&Number.isFinite(Number(v))&&Number(v)>=0))return null;
 const key='history_'+String(entry.id||Date.now()).replace(/[^a-zA-Z0-9_-]/g,'_');
 FOOD_DB[key]={id:key,key,name:entry.name||snap.name||'Alimento histórico',unit:snap.unit==='ml'?'ml':'g',k:Number(snap.k),p:Number(snap.p),c:Number(snap.c),f:Number(snap.f),basisAmount:Number(snap.basisAmount)||100,basisUnit:snap.basisUnit||snap.unit||'g',sourceType:snap.sourceType||'legacy',source:snap.source||'Snapshot do registro histórico',sourceRef:snap.sourceRef||'',preparation:snap.preparation||'',dataVersion:snap.dataVersion||1,group:'history'};
 return key;
}
migrateFoodData();
function renderFoodLibrary(){
 const host=$('foodLibraryList');if(!host)return;
 const q=normalizeFoodText($('foodLibrarySearch')?.value||'');
 const group=$('foodLibraryGroup')?.value||'all';
 const favoritesOnly=!!$('foodLibraryFavoritesOnly')?.checked;
 const favorites=Array.isArray(state.foodFavorites)?state.foodFavorites:[];
 const custom=state.customFoods&&typeof state.customFoods==='object'?state.customFoods:{};
 const overrides=state.foodOverrides&&typeof state.foodOverrides==='object'?state.foodOverrides:{};
 const rows=Object.entries(FOOD_DB).filter(([k,f])=>!k.startsWith('history_')&&f&&normalizeFoodText(f.name).includes(q)&&(!favoritesOnly||favorites.includes(k))&&(group==='all'||(group==='other'?(!f.group||f.group==='other'||f.group==='history'):f.group===group))).sort((a,b)=>a[1].name.localeCompare(b[1].name,'pt-BR'));
 const customCount=Object.keys(custom).length;
 $('foodLibraryCount').textContent=`${rows.length} ${rows.length===1?'alimento':'alimentos'}${q||group!=='all'||favoritesOnly?' encontrados':` · ${customCount} personalizado${customCount===1?'':'s'}`}`;
 host.innerHTML=rows.length?rows.map(([k,f])=>{const isCustom=Object.prototype.hasOwnProperty.call(custom,k);const isBaseOverride=FOOD_BASE_KEYS.has(k)&&Object.prototype.hasOwnProperty.call(overrides,k);const canEdit=isCustom||FOOD_BASE_KEYS.has(k);const source=f.source|| (isCustom?'Fonte não informada':'Base de referência do FORMA');const prep=f.preparation||f.state||'';const originLabel=isCustom?'Meu alimento':isBaseOverride?'Base FORMA · Personalizado':'Base FORMA';return `<div class="food-library-item"><div class="food-library-item-copy"><div class="food-library-name-line"><strong>${esc(f.name)}</strong><span class="food-origin-tag ${isCustom||isBaseOverride?'custom':'reference'}">${originLabel}</span>${favorites.includes(k)?'<span class="food-origin-tag custom">★ Favorito</span>':''}</div><small>Por 100 ${esc(f.unit||'g')} · ${foodFmt(f.k)} kcal · P ${foodFmt(f.p,1)} g · C ${foodFmt(f.c,1)} g · G ${foodFmt(f.f,1)} g</small><small>${esc(source)}${prep?' · '+esc(prep):''}</small></div><div class="food-library-actions">${canEdit?`<button type="button" data-library-edit="${esc(k)}">Editar</button>`:''}${isCustom?`<button type="button" data-library-delete="${esc(k)}" aria-label="Excluir ${esc(f.name)}">Excluir</button>`:`<button type="button" data-library-use="${esc(k)}">Usar no diário</button>`}</div></div>`}).join(''):'<div class="food-empty">Nenhum alimento encontrado. Tente outro termo ou cadastre um alimento personalizado acima.</div>';
 host.querySelectorAll('[data-library-use]').forEach(b=>b.onclick=()=>{setupFoodAreaNavToDiary();chooseFood(b.dataset.libraryUse);});
 host.querySelectorAll('[data-library-edit]').forEach(b=>b.onclick=()=>{const k=b.dataset.libraryEdit,f=custom[k]||overrides[k]||FOOD_DB[k];if(!f)return;$('foodLibraryKey').value=k;$('foodLibraryName').value=f.name;$('foodLibraryUnit').value=f.unit||'g';$('foodLibraryKcal').value=f.k;$('foodLibraryP').value=f.p;$('foodLibraryC').value=f.c;$('foodLibraryF').value=f.f;$('foodLibrarySourceType').value=f.sourceType||'user';$('foodLibrarySource').value=f.sourceRef||((f.source&&f.source!=='Informado manualmente pelo usuário')?f.source:'');$('foodLibraryPreparation').value=f.preparation||'';$('foodLibrarySave').textContent='Salvar alterações';$('foodLibraryCancel').hidden=false;$('foodLibraryEditor').open=true;$('foodLibraryName').focus();});
 host.querySelectorAll('[data-library-delete]').forEach(b=>b.onclick=()=>{const k=b.dataset.libraryDelete,f=custom[k];if(!f||!confirm(`Excluir “${f.name}” da sua lista? Registros antigos mantêm seus valores, mas esse alimento deixará de estar disponível para novos registros.`))return;const backup={...state.customFoods};const favoritesBackup=[...(state.foodFavorites||[])];delete state.customFoods[k];delete FOOD_DB[k];state.foodFavorites=(state.foodFavorites||[]).filter(x=>x!==k);const ok=save();if(!ok){state.customFoods=backup;state.foodFavorites=favoritesBackup;loadCustomFoodsIntoDB();populateFoodPicker();const status=$('foodLibraryStatus');if(status)status.textContent='Não foi possível excluir porque a alteração não foi salva. O alimento foi restaurado.';return;}populateFoodPicker();initMealTester();renderFoodLibrary();renderFoodShortcuts();const status=$('foodLibraryStatus');if(status)status.textContent=`${f.name} foi removido da lista. Os registros anteriores permanecem no diário.`;});
}
function foodSuggestionTemplates(){return [
 {id:'breakfast-bread-egg',name:'Pão com ovos e queijo',emoji:'🍳',hint:'Café da manhã · clássico',items:[['pao',50],['ovo',100],['queijo',20]]},
 {id:'banana-oats-yogurt',name:'Bowl de banana e aveia',emoji:'🍌',hint:'Café da manhã ou lanche',items:[['banana',80],['aveia',30],['iogurte',170]]},
 {id:'rice-beans-chicken',name:'Prato de arroz, feijão e frango',emoji:'🍛',hint:'Almoço ou jantar',items:[['arroz',150],['feijao',100],['frango',120],['legumes',100]]}
 ];}
function renderFoodLibraryMeals(){
 const suggestionsHost=$('foodMealSuggestions'),savedHost=$('foodLibrarySavedMeals');if(!suggestionsHost||!savedHost)return;
 const templates=foodSuggestionTemplates().map(t=>({...t,items:t.items.filter(([key])=>!!FOOD_DB[key]).map(([foodKey,amount])=>{const f=FOOD_DB[foodKey];return {foodKey,name:f.name,amount,unit:f.unit||'g',snapshot:foodSnapshot(f)};})})).filter(t=>t.items.length>=2);
 const existing=new Set((state.savedMeals||[]).map(m=>normalizeFoodText(m.name)));
 const available=templates.filter(t=>!existing.has(normalizeFoodText(t.name)));
 suggestionsHost.innerHTML=available.length?available.map(t=>{const totals=savedMealTotals(t.items);return `<article class="food-meal-suggestion-card"><span class="suggestion-emoji" aria-hidden="true">${t.emoji}</span><div><h4>${esc(t.name)}</h4><p>${esc(t.hint)}<br>${t.items.map(x=>`${esc(x.name)} · ${foodFmt(x.amount,0)} ${esc(x.unit)}`).join(' · ')}</p></div><div class="suggestion-macros"><strong>${foodFmt(totals.k)} kcal</strong><br><span class="food-note">P ${foodFmt(totals.p,1)} g · C ${foodFmt(totals.c,1)} g · G ${foodFmt(totals.f,1)} g</span></div><button type="button" class="btn" data-save-food-suggestion="${esc(t.id)}">＋ Salvar refeição</button></article>`;}).join(''):'<div class="food-empty" style="grid-column:1/-1">Você já salvou todas as sugestões disponíveis. Crie uma refeição personalizada ou continue usando suas favoritas.</div>';
 suggestionsHost.querySelectorAll('[data-save-food-suggestion]').forEach(b=>b.onclick=()=>{const t=templates.find(x=>x.id===b.dataset.saveFoodSuggestion);if(!t)return;if((state.savedMeals||[]).some(m=>normalizeFoodText(m.name)===normalizeFoodText(t.name))){renderFoodLibraryMeals();return;}const now=new Date().toISOString(),record={id:'meal_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7),name:t.name,items:snapshotSavedMealItems(t.items),createdAt:now,updatedAt:now,source:'suggestion'};const before=(state.savedMeals||[]).slice();state.savedMeals=[...(state.savedMeals||[]),record];if(!save()){state.savedMeals=before;return;}renderSavedMealsList();renderFoodLibraryMeals();const status=$('foodLibraryStatus');if(status)status.textContent=`✓ ${record.name} foi salva em Minhas refeições e já pode ser registrada no diário.`;});
 const list=Array.isArray(state.savedMeals)?state.savedMeals:[];
 savedHost.innerHTML=list.length?list.slice().sort((a,b)=>Number(!!b.favorite)-Number(!!a.favorite)||String(a.name).localeCompare(String(b.name),'pt-BR')).map(m=>{const items=snapshotSavedMealItems(m.items),t=savedMealTotals(items);return `<article class="food-saved-meal-card"><h4>${m.favorite?'★ ':''}${esc(m.name)}</h4><p>${items.map(x=>`${esc(x.name)} · ${foodFmt(x.amount,0)} ${esc(x.unit)}`).join(' · ')}</p><p><strong>${foodFmt(t.k)} kcal</strong> · P ${foodFmt(t.p,1)} g · C ${foodFmt(t.c,1)} g · G ${foodFmt(t.f,1)} g</p><button type="button" class="btn secondary" data-library-register-meal="${esc(m.id)}">Conferir e registrar</button></article>`;}).join(''):'<div class="food-empty" style="grid-column:1/-1">Ainda não há refeições salvas. Escolha uma sugestão acima ou crie sua própria combinação.</div>';
 savedHost.querySelectorAll('[data-library-register-meal]').forEach(b=>b.onclick=()=>{openSavedMeals();registerSavedMeal(b.dataset.libraryRegisterMeal,'grouped');});
}
function resetFoodLibraryForm(){ $('foodLibraryForm').reset();$('foodLibraryKey').value='';if($('foodLibrarySourceType'))$('foodLibrarySourceType').value='user';$('foodLibrarySave').textContent='Salvar alimento na lista';$('foodLibraryCancel').hidden=true; }
function initFoodLibrary(){loadCustomFoodsIntoDB();populateFoodPicker();initMealTester();renderFoodLibrary();$('foodLibraryForm')?.addEventListener('submit',e=>{e.preventDefault();const name=$('foodLibraryName').value.trim(),unit=$('foodLibraryUnit').value;const nums=['foodLibraryKcal','foodLibraryP','foodLibraryC','foodLibraryF'].map(id=>Number(String($(id).value).trim().replace(',','.')));const record={name,unit,k:nums[0],p:nums[1],c:nums[2],f:nums[3]};const validation=validateFoodRecord(record);if(!validation.ok){alert(validation.error);return;}const sourceType=$('foodLibrarySourceType')?.value||'user',sourceRef=$('foodLibrarySource')?.value.trim()||'',preparation=$('foodLibraryPreparation')?.value.trim()||'';const sourceLabels={user:'Informado manualmente pelo usuário',label:'Rótulo do fabricante',tbca:'TBCA/USP',taco:'TACO/NEPA-UNICAMP',other:'Outra referência'};const oldKey=$('foodLibraryKey').value;const key=oldKey||('custom_'+normalizeFoodText(name).replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'')+'_'+Date.now().toString(36));const previous=state.customFoods&&typeof state.customFoods==='object'?JSON.parse(JSON.stringify(state.customFoods)):{};const previousOverrides=state.foodOverrides&&typeof state.foodOverrides==='object'?JSON.parse(JSON.stringify(state.foodOverrides)):{};const isBaseOverride=!!oldKey&&FOOD_BASE_KEYS.has(oldKey)&&!Object.prototype.hasOwnProperty.call(previous,oldKey);const target=isBaseOverride?'foodOverrides':'customFoods';state[target]=state[target]||{};state[target][key]={...(state[target][key]||{}),id:key,name,unit,k:nums[0],p:nums[1],c:nums[2],f:nums[3],basisAmount:100,basisUnit:unit,sourceType,source:sourceRef||sourceLabels[sourceType]||sourceLabels.user,sourceRef,preparation,dataVersion:FOOD_SCHEMA_VERSION,updatedAt:new Date().toISOString()};loadCustomFoodsIntoDB();if(!save()){state.customFoods=previous;state.foodOverrides=previousOverrides;loadCustomFoodsIntoDB();const status=$('foodLibraryStatus');if(status)status.textContent='Não foi possível salvar. Os dados anteriores foram restaurados; verifique o armazenamento do navegador e tente novamente.';return;}resetFoodLibraryForm();populateFoodPicker();initMealTester();renderFoodLibrary();renderFoodLibraryMeals();renderFoodShortcuts();const status=$('foodLibraryStatus');if(status)status.textContent=`✓ ${name} salvo com fonte e base nutricional registradas. Já pode ser usado no diário e no simulador.${validation.warning?' Atenção: '+validation.warning:''}`;});$('foodLibraryCancel')?.addEventListener('click',resetFoodLibraryForm);$('foodLibrarySearch')?.addEventListener('input',renderFoodLibrary);$('foodLibraryGroup')?.addEventListener('change',renderFoodLibrary);$('foodLibraryFavoritesOnly')?.addEventListener('change',renderFoodLibrary);}
function buildAutoFoodPlan(options={}){
 const style=$('foodStyle').value||state.foodStyle||'ovo',count=Math.max(3,Math.min(6,Number($('foodMealsCount').value||state.foodMealsCount||5))),budget=$('foodBudget').checked;
 state.foodBudget=budget;
 const targets=state.targets||{kcal:1900,protein:130,carbs:210,fat:60};
 const slots=[
  {name:'Café da manhã',icon:'☀',items:style==='plant'?[['aveia',40],['banana',100],['amendoim',10],['soja',80]]:[['aveia',35],['leite',200],['banana',90],['ovo',50]]},
  {name:'Lanche da manhã',icon:'◒',items:style==='plant'?[['soja',100],['mamao',120],['aveia',15]]:[['iogurte',170],['mamao',120],['aveia',15]]},
  {name:'Almoço',icon:'◈',items:[[style==='mixed'?'frango':style==='plant'?'soja':'pts',100],['arroz',130],['feijao',100],['legumes',150],['azeite',4]]},
  {name:'Lanche / pré-treino',icon:'↗',items:style==='plant'?[['banana',100],['amendoim',12],['aveia',20]]:[['banana',100],['leite',200],['amendoim',8]]},
  {name:'Jantar',icon:'☾',items:[[style==='mixed'?'frango':style==='plant'?'soja':'ovo',100],['batata',160],['feijao',70],['legumes',150],['azeite',3]]},
  {name:'Ceia opcional',icon:'☆',items:style==='plant'?[['soja',80],['mamao',100]]:[['iogurte',100],['mamao',100]]}
 ];
 // Escolhe refeições distribuídas ao longo do dia, preservando sempre almoço e jantar.
 const mealIndexes={3:[0,2,4],4:[0,2,3,4],5:[0,1,2,3,4],6:[0,1,2,3,4,5]}[count]||[0,1,2,3,4];
 const selectedSlots=mealIndexes.map(i=>slots[i]);
 slots.length=0;slots.push(...selectedSlots);
 // Adjust energy and macros through bounded coordinate descent on each food quantity.
 let items=slots.flatMap((m,mi)=>m.items.map(([key,g],ii)=>({mi,ii,key,g,base:g}))).filter(x=>FOOD_DB[x.key]);
 const calc=()=>items.reduce((a,x)=>{const f=FOOD_DB[x.key],q=x.g/100;a.k+=f.k*q;a.p+=f.p*q;a.c+=f.c*q;a.f+=f.f*q;return a},{k:0,p:0,c:0,f:0});
 const goal={k:Math.max(1200,Number(targets.kcal)||1900),p:Math.max(30,Number(targets.protein)||130),c:Math.max(30,Number(targets.carbs)||210),f:Math.max(20,Number(targets.fat)||60)};
 // Portion controls preserve vegetables and make the algorithm stable; priority goes to protein and calories.
 for(let pass=0;pass<16;pass++){
  let t=calc();
  for(const x of items){const f=FOOD_DB[x.key];let benefit=0,weight=0;
   if(f.p>4){benefit+=((goal.p-t.p)/goal.p)*(f.p/100);weight+=Math.pow(f.p/100,2)}
   if(f.group.includes('carb')||f.group==='carb'){benefit+=((goal.c-t.c)/goal.c)*(f.c/100)*.45;weight+=Math.pow(f.c/100,2)*.45}
   if(f.f>4){benefit+=((goal.f-t.f)/goal.f)*(f.f/100)*.3;weight+=Math.pow(f.f/100,2)*.3}
   benefit+=((goal.k-t.k)/goal.k)*(f.k/100)*.35;weight+=Math.pow(f.k/100,2)*.35;
   if(weight>0){let delta=(benefit/weight)*18;if(budget && f.cost>=3)delta*=0.72;let max= x.key==='azeite'?15:x.key==='legumes'?250: x.key==='frango'||x.key==='pts'||x.key==='tofu'?220:300;let min=x.key==='azeite'?0:x.key==='legumes'?80:0;x.g=Math.max(min,Math.min(max,x.g+delta));}
   t=calc();
  }
 }
 const totals=calc();
 const result=slots.map((slot,mi)=>{const entries=items.filter(x=>x.mi===mi).map(x=>{const f=FOOD_DB[x.key],g=Math.max(0,Math.round(x.g/5)*5),q=g/100;return {key:x.key,name:f.name,amount:g+(f.unit==='ml'?' ml':' g'),g,k:f.k*q,p:f.p*q,c:f.c*q,f:f.f*q}});const sum=entries.reduce((a,x)=>({k:a.k+x.k,p:a.p+x.p,c:a.c+x.c,f:a.f+x.f}),{k:0,p:0,c:0,f:0});return {name:slot.name,icon:slot.icon,items:entries,kcal:Math.round(sum.k),protein:Math.round(sum.p),carbs:Math.round(sum.c),fat:Math.round(sum.f)};});
 const roundedTotals=result.reduce((a,m)=>m.items.reduce((b,x)=>({k:b.k+x.k,p:b.p+x.p,c:b.c+x.c,f:b.f+x.f}),a),{k:0,p:0,c:0,f:0});roundedTotals.k=Math.round(roundedTotals.k);roundedTotals.p=Math.round(roundedTotals.p);roundedTotals.c=Math.round(roundedTotals.c);roundedTotals.f=Math.round(roundedTotals.f);state.autoFoodPlan={style,count,goal,totals:roundedTotals,meals:result,createdAt:new Date().toISOString()};state.foodStyle=style;state.foodMealsCount=count;if(options.persist!==false){save();renderAutoFoodPlan();}
}
function renderAutoFoodPlan(){const el=$('autoFoodFeedback');if(!el)return;if($('foodStyle'))$('foodStyle').value=state.foodStyle||'ovo';if($('foodMealsCount'))$('foodMealsCount').value=String(state.foodMealsCount||5);if($('foodBudget'))$('foodBudget').checked=state.foodBudget!==false;const plan=state.autoFoodPlan;if(!plan){el.style.display='none';return;}const finiteKeys=(obj,keys)=>!!obj&&keys.every(k=>Number.isFinite(Number(obj[k])));const validPlan=Array.isArray(plan.meals)&&plan.meals.length>0&&plan.meals.every(m=>m&&typeof m.name==='string'&&Array.isArray(m.items)&&finiteKeys(m,['kcal','protein','carbs','fat'])&&m.items.every(x=>x&&typeof x.key==='string'&&!!FOOD_DB[x.key]&&typeof x.name==='string'&&Number.isFinite(Number(x.g))))&&finiteKeys(plan.totals,['k','p','c','f'])&&finiteKeys(plan.goal,['k','p','c','f']);if(!validPlan){el.style.display='block';el.textContent='O plano salvo está incompleto ou inválido. Gere novamente o cardápio para corrigir os dados.';return;}el.style.display='block';const t=plan.totals,g=plan.goal;const fmt=n=>Math.round(n).toLocaleString('pt-BR');const diff=(a,b)=>{const d=Math.round(a-b);return (d>0?"+":"")+d.toLocaleString("pt-BR")};el.innerHTML=`<strong>Cardápio calculado para este perfil</strong><div class="today-food-summary" style="margin:10px 0 0"><div class="food-stat"><span>Energia</span><strong>${fmt(t.k)} kcal</strong><small>meta ${fmt(g.k)} · diferença ${diff(t.k,g.k)}</small></div><div class="food-stat"><span>Proteína</span><strong>${fmt(t.p)} g</strong><small>meta ${fmt(g.p)} g · diferença ${diff(t.p,g.p)} g</small></div><div class="food-stat"><span>Carboidratos</span><strong>${fmt(t.c)} g</strong><small>meta ${fmt(g.c)} g · diferença ${diff(t.c,g.c)} g</small></div><div class="food-stat"><span>Gorduras</span><strong>${fmt(t.f)} g</strong><small>meta ${fmt(g.f)} g · diferença ${diff(t.f,g.f)} g</small></div></div><div style="margin-top:12px">${plan.meals.map(m=>`<div style="padding:10px 0;border-top:1px solid var(--line)"><b>${esc(m.name)} · ${fmt(m.kcal)} kcal</b><div style="font-size:12px;margin-top:5px">${m.items.map(x=>`${esc(x.name)}: ${x.g} ${FOOD_DB[x.key].unit}`).join(' · ')}</div><div style="font-size:11px;color:var(--muted);margin-top:4px">P ${fmt(m.protein)} g · C ${fmt(m.carbs)} g · G ${fmt(m.fat)} g</div></div>`).join('')}</div><details style="margin-top:12px"><summary>Fontes e limitações dos alimentos</summary><div style="font-size:11px;line-height:1.5;margin-top:8px">${[...new Set(plan.meals.flatMap(m=>m.items.map(x=>FOOD_DB[x.key].source)))].map(x=>`<p>${esc(x)}</p>`).join('')}<p>Referências oficiais: <a href="https://nepa.unicamp.br/wp-content/uploads/sites/27/2023/10/taco_4_edicao_ampliada_e_revisada.pdf" target="_blank" rel="noopener">TACO, 4ª edição, NEPA/UNICAMP (2011)</a> · <a href="https://www.tbca.net.br/" target="_blank" rel="noopener">TBCA/USP</a>.</p><p>Os valores apresentados são uma seleção de referência, não a base integral da TBCA ou da TACO. Preparações, marcas e hidratação alteram a composição. A mistura de legumes e a PTS hidratada são estimativas e devem ser substituídas por dados do rótulo ou por alimentos especificados quando for necessária maior precisão.</p></div></details><div style="font-size:11px;color:var(--muted);margin-top:8px">Estimativas por 100 g/ml, arredondadas. O algoritmo tenta aproximar as metas, mas não garante correspondência exata nem adequação clínica. Confira os rótulos e o estado de pesagem.</div>`;}
$('generateFoodPlan')?.addEventListener('click',buildAutoFoodPlan);
$('foodStyle')?.addEventListener('change',()=>{state.foodStyle=$('foodStyle').value;save();if(state.autoFoodPlan)buildAutoFoodPlan()});
$('foodMealsCount')?.addEventListener('change',()=>{state.foodMealsCount=Number($('foodMealsCount').value);save();if(state.autoFoodPlan)buildAutoFoodPlan()});
$('foodBudget')?.addEventListener('change',()=>{state.foodBudget=$('foodBudget').checked;save();if(state.autoFoodPlan)buildAutoFoodPlan()});
let foodAddFormOpen=false;
let foodLibraryView='foods';
function setupFoodAreaNavToDiary(){const diary=document.querySelector('[data-food-area="diary"]');if(diary)diary.click();foodAddFormOpen=true;const add=$('foodAddCard');if(add){add.hidden=false;add.style.display='';add.scrollIntoView({behavior:'smooth',block:'start'});}}
function setFoodLibraryView(view){foodLibraryView=view==='meals'?'meals':'foods';const foods=$('foodLibraryFoodsPanel'),meals=$('foodLibraryMealsPanel');if(foods)foods.hidden=foodLibraryView!=='foods';if(meals)meals.hidden=foodLibraryView!=='meals';document.querySelectorAll('[data-food-library-view]').forEach(b=>{const active=b.dataset.foodLibraryView===foodLibraryView;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});if(foodLibraryView==='meals')renderFoodLibraryMeals();}
function setupFoodAreaNav(){
 const buttons=[...document.querySelectorAll('[data-food-area]')];
 const groups={diary:['.food-day-controls','.food-kcal-card','#foodDiaryMacros','.food-week-card','#foodEntryChoice','#foodAddCard','#foodDiaryCard','#foodPlanningDetails'],schedule:['#nutritionSchedulePanel','#mealTester'],library:['#foodLibrary']};
 const all=[...new Set(Object.values(groups).flat())];
 function show(area){
  const selected=groups[area]?area:'diary';
  if(selected!=='diary')foodAddFormOpen=false;
  buttons.forEach(b=>{const active=b.dataset.foodArea===selected;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
  all.forEach(sel=>document.querySelectorAll(sel).forEach(el=>{const visible=groups[selected].includes(sel)&&!(sel==='#foodAddCard'&&!foodAddFormOpen);el.hidden=!visible;el.style.display=visible?'':'none';}));
  const heading=$('dietHeading');if(heading)heading.textContent=selected==='library'?'Biblioteca alimentar':selected==='schedule'?'Planejamento nutricional':'Diário alimentar';
  const desc=document.querySelector('#dieta > .section-head p');if(desc)desc.textContent=selected==='library'?'Alimentos e refeições salvas em um só lugar.':selected==='schedule'?'Organize seu cronograma, revise metas e importe planos sem alterar o diário.':'Registre o que você consumiu e acompanhe calorias e macronutrientes.';if(selected==='schedule')window.renderFormaNutritionSchedule?.();
 }
 window.setFoodAreaSection=show;
 buttons.forEach(b=>b.addEventListener('click',()=>show(b.dataset.foodArea)));
 document.querySelectorAll('[data-food-library-view]').forEach(b=>b.addEventListener('click',()=>setFoodLibraryView(b.dataset.foodLibraryView)));
 $('chooseRegisterFood')?.addEventListener('click',()=>{foodAddFormOpen=true;const add=$('foodAddCard');if(add){add.hidden=false;add.style.display='';add.scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>$('foodSearch')?.focus({preventScroll:true}),180);}});
 $('chooseRegisterMeal')?.addEventListener('click',()=>{foodAddFormOpen=false;const add=$('foodAddCard');if(add){add.hidden=true;add.style.display='none';}openSavedMeals();});
 $('closeFoodEntryForm')?.addEventListener('click',()=>{foodAddFormOpen=false;const add=$('foodAddCard');if(add){add.hidden=true;add.style.display='none';}$('foodEntryChoice')?.scrollIntoView({behavior:'smooth',block:'start'});});
 $('createSavedMealFromLibrary')?.addEventListener('click',()=>{openSavedMeals();$('savedMealName')?.focus({preventScroll:true});$('savedMealName')?.scrollIntoView({behavior:'smooth',block:'center'});});
 show('diary');setFoodLibraryView('foods');
}
let editingFoodEntryId=null;
function getFoodDiaryDate(){return $('foodDiaryDate')?.value||dateKey();}
function foodFmt(n,d=0){return Number(n||0).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});}
function foodEntryTotals(entries){return entries.reduce((a,e)=>{a.k+=Number(e.kcal)||0;a.p+=Number(e.protein)||0;a.c+=Number(e.carbs)||0;a.f+=Number(e.fat)||0;return a;},{k:0,p:0,c:0,f:0});}
function normalizeFoodText(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR').trim();}
function chooseFood(key,preferredMeasure){if(!FOOD_DB[key])return;const picker=$('foodSelected');if(picker&&!Array.from(picker.options).some(o=>o.value===key)){const opt=document.createElement('option');opt.value=key;opt.textContent=FOOD_DB[key].name+' · por 100 '+(FOOD_DB[key].unit||'g');picker.appendChild(opt);}if(picker)picker.value=key;$('foodSearch').value=FOOD_DB[key].name;updateFoodMeasurePicker(key,preferredMeasure);$('foodSearchStatus').textContent=`✓ ${FOOD_DB[key].name} selecionado. Informe a quantidade e toque em “Registrar alimento”.`;$('foodSearchResults').hidden=true;$('foodSearchResults').innerHTML='';const favorites=Array.isArray(state.foodFavorites)?state.foodFavorites:[];$('foodFavoriteToggle').textContent=favorites.includes(key)?'★ Remover dos favoritos':'☆ Salvar como favorito';$('foodAmount').focus();}
function populateFoodPicker(){const select=$('foodSelected');if(!select)return;const current=select.value;const keys=Object.keys(FOOD_DB).filter(k=>!k.startsWith('history_')).sort((a,b)=>FOOD_DB[a].name.localeCompare(FOOD_DB[b].name,'pt-BR'));select.innerHTML='<option value="">Selecione um alimento…</option>'+keys.map(k=>`<option value="${esc(k)}">${esc(FOOD_DB[k].name)} · por 100 ${esc(FOOD_DB[k].unit||'g')}</option>`).join('');if(current&&FOOD_DB[current])select.value=current;}
function renderFoodSearchResults(query){const host=$('foodSearchResults'),status=$('foodSearchStatus');if(!host||!status)return;const raw=String(query||'').trim(),q=normalizeFoodText(raw),all=Object.entries(FOOD_DB).filter(([k])=>!k.startsWith('history_')).sort((a,b)=>a[1].name.localeCompare(b[1].name,'pt-BR'));const matches=q?all.filter(([k,f])=>normalizeFoodText(f.name).includes(q)||normalizeFoodText(k).includes(q)):all;if(!matches.length){host.innerHTML='';host.hidden=true;status.textContent='Nenhum alimento encontrado. Tente outro termo ou use a lista completa abaixo.';return;}const selected=$('foodSelected').value;host.innerHTML=matches.slice(0,8).map(([k,f])=>`<button type="button" role="option" aria-selected="${selected===k?'true':'false'}" data-food-search-pick="${esc(k)}">${esc(f.name)} <span style="opacity:.7">· por 100 ${esc(f.unit||'g')}</span></button>`).join('');host.hidden=false;status.textContent=q?`${matches.length} resultado(s)${matches.length>8?' — mostrando os 8 primeiros':''}. Toque no alimento correto para selecioná-lo.`:`${all.length} alimentos disponíveis. Digite para filtrar ou toque em um dos primeiros resultados.`;host.querySelectorAll('[data-food-search-pick]').forEach(b=>b.addEventListener('click',()=>chooseFood(b.dataset.foodSearchPick)));}
function renderFoodShortcuts(){const fav=$('foodFavoritesList'),recent=$('foodRecentList');if(!fav||!recent)return;const favorites=Array.isArray(state.foodFavorites)?state.foodFavorites:[];const make=(keys,empty)=>keys.length?keys.map(k=>`<button type="button" class="food-chip" data-food-pick="${esc(k)}">${favorites.includes(k)?'★ ':''}${esc(FOOD_DB[k]?.name||k)}</button>`).join(''):`<span class="food-note">${empty}</span>`;fav.innerHTML=make(state.foodFavorites.filter(k=>FOOD_DB[k]),'Nenhum favorito salvo ainda.');const recentKeys=[];for(const e of [...(Array.isArray(state.foodEntries)?state.foodEntries:[])].sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||''))){if(FOOD_DB[e.foodKey]&&!recentKeys.includes(e.foodKey))recentKeys.push(e.foodKey);if(recentKeys.length>=8)break;}recent.innerHTML=make(recentKeys,'Seus alimentos recentes aparecerão aqui.');document.querySelectorAll('[data-food-pick]').forEach(b=>b.onclick=()=>{if(editingFoodEntryId){editingFoodEntryId=null;$('foodLogForm').querySelector('button[type=submit]').textContent='＋ Registrar alimento';$('cancelFoodEdit').hidden=true;}chooseFood(b.dataset.foodPick);});}
function renderFoodWeekStrip(){
 const host=$('foodWeekStrip');if(!host)return;
 const selected=getFoodDiaryDate(),anchor=new Date(selected+'T12:00:00');
 const days=Array.from({length:7},(_,i)=>{const d=new Date(anchor);d.setDate(anchor.getDate()-(6-i));const key=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;const entries=(state.foodEntries||[]).filter(e=>e.date===key);const total=foodEntryTotals(entries);return {key,date:d,entries,total};});
 const weekday=['dom','seg','ter','qua','qui','sex','sáb'];
 host.innerHTML=days.map(day=>`<button type="button" class="food-week-day" data-food-week-date="${day.key}" ${day.key===selected?'aria-current="date"':''} aria-label="${day.date.toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'})}: ${day.entries.length} itens, ${foodFmt(day.total.k)} kcal"><strong>${weekday[day.date.getDay()]}</strong><span>${String(day.date.getDate()).padStart(2,'0')}/${String(day.date.getMonth()+1).padStart(2,'0')}</span><small>${day.entries.length?foodFmt(day.total.k)+' kcal':'—'}</small></button>`).join('');
 host.querySelectorAll('[data-food-week-date]').forEach(b=>b.addEventListener('click',()=>{const input=$('foodDiaryDate');if(input)input.value=b.dataset.foodWeekDate;renderFoodDiary();}));
}
function renderNextMealRecommendation(entries,totals){
 const host=$('nextMealRecommendation');if(!host)return;
 const schedule=state.nutritionSchedule&&Array.isArray(state.nutritionSchedule.meals)?state.nutritionSchedule.meals:[];
 const recorded=new Set(entries.map(e=>String(e.meal||'Outro').trim()||'Outro'));
 const order=['Café da manhã','Lanche da manhã','Almoço','Lanche / pré-treino','Jantar','Ceia opcional'];
 const plannedNext=schedule.find(m=>!recorded.has(String(m.name||'').trim()));
 const nextName=plannedNext?.name||order.find(name=>!recorded.has(name))||'Próxima refeição';
 const goal={k:Number(state.targets?.kcal)||1900,p:Number(state.targets?.protein)||130,c:Number(state.targets?.carbs)||210,f:Number(state.targets?.fat)||60};
 const remaining={k:Math.max(0,goal.k-totals.k),p:Math.max(0,goal.p-totals.p),c:Math.max(0,goal.c-totals.c),f:Math.max(0,goal.f-totals.f)};
 const weights={'Café da manhã':.22,'Lanche da manhã':.10,'Almoço':.30,'Lanche / pré-treino':.10,'Jantar':.25,'Ceia opcional':.03,'Lanche da tarde':.10,'Ceia':.03};
 
 let target=null,source='';
 if(plannedNext){try{const x=typeof scheduleTotals==='function'?scheduleTotals(plannedNext):null;if(x&&['k','p','c','f'].every(k=>Number.isFinite(Number(x[k])))){target={k:Number(x.k),p:Number(x.p),c:Number(x.c),f:Number(x.f)};source='Calculada a partir da refeição planejada';}}catch(_){}}
 if(!target){const share=weights[nextName]||.10;target={k:Math.min(remaining.k,goal.k*share),p:Math.min(remaining.p,goal.p*share),c:Math.min(remaining.c,goal.c*share),f:Math.min(remaining.f,goal.f*share)};source='Distribuição proporcional ao papel da refeição no dia, considerando o saldo e as refeições pendentes';}
 target={k:Math.min(remaining.k,target.k),p:Math.min(remaining.p,target.p),c:Math.min(remaining.c,target.c),f:Math.min(remaining.f,target.f)};
 const fmt=(v,d=0)=>foodFmt(Math.max(0,v),d);
 const planItems=Array.isArray(plannedNext?.items)?plannedNext.items.map(x=>{const key=x.key||x.foodKey;return FOOD_DB[key]?.name?`${FOOD_DB[key].name} (${foodFmt(x.g??x.amount,0)} g)`:''}).filter(Boolean):[];
 host.innerHTML=`<h3 style="margin:0 0 5px;font-size:13px">Próxima refeição sugerida: ${esc(nextName)}</h3><p class="food-note" style="margin:0 0 9px">${esc(source)}. O almoço e o jantar recebem uma parcela maior; lanches e ceia, uma menor. A sugestão respeita o que já foi consumido e não ultrapassa o saldo diário.</p><div class="today-food-summary" style="gap:7px;margin:0"><div class="food-stat"><span>Energia</span><strong>${fmt(target.k)} kcal</strong><small>Saldo diário: ${fmt(remaining.k)} kcal</small></div><div class="food-stat"><span>Proteínas</span><strong>${fmt(target.p,1)} g</strong><small>Saldo: ${fmt(remaining.p,1)} g</small></div><div class="food-stat"><span>Carboidratos</span><strong>${fmt(target.c,1)} g</strong><small>Saldo: ${fmt(remaining.c,1)} g</small></div><div class="food-stat"><span>Gorduras</span><strong>${fmt(target.f,1)} g</strong><small>Saldo: ${fmt(remaining.f,1)} g</small></div></div>${planItems.length?`<p style="font-size:12px;margin:9px 0 0"><strong>Itens previstos no cronograma:</strong> ${planItems.map(esc).join(' · ')}</p>`:`<p style="font-size:12px;margin:9px 0 0">Use esta faixa como referência para montar a refeição, priorizando uma fonte proteica, vegetais e acompanhamentos coerentes com suas metas.</p>`}`;
}
function renderFoodDiary(){const date=getFoodDiaryDate(),entries=(state.foodEntries||[]).filter(e=>e.date===date),tot=foodEntryTotals(entries),goal=Number(state.targets?.kcal)||1900,pct=goal>0?Math.min(100,tot.k/goal*100):0;const kc=$('foodKcalConsumed');if(!kc)return;kc.textContent=foodFmt(tot.k);$('foodKcalGoal').textContent=foodFmt(goal);const remain=goal-tot.k;$('foodKcalRemaining').textContent=remain>=0?`${foodFmt(remain)} kcal restantes`:`${foodFmt(Math.abs(remain))} kcal acima da meta`;$('foodKcalProgress').style.width=pct+'%';$('foodKcalCaption').textContent=entries.length?`${entries.length} alimento(s) registrado(s) neste dia.`:'Adicione sua primeira refeição para começar o acompanhamento.';
 const macros=[['Proteínas',tot.p,state.targets?.protein||130,'var(--lime)'],['Carboidratos',tot.c,state.targets?.carbs||210,'var(--orange)'],['Gorduras',tot.f,state.targets?.fat||60,'var(--blue)']];$('foodDiaryMacros').innerHTML=macros.map(([label,val,target,color])=>{const remaining=Number(target)-Number(val);const remainingText=remaining>=0?`Faltam ${foodFmt(remaining,1)} g`:`${foodFmt(Math.abs(remaining),1)} g acima`;return `<div class="food-macro-card"><div class="macro-top"><span>${label}</span><span>${Math.round(target>0?val/target*100:0)}%</span></div><strong>${foodFmt(val,1)} g</strong><small>Meta: ${foodFmt(target)} g · ${remainingText}</small><div class="macrobar"><i style="width:${Math.min(100,target>0?val/target*100:0)}%;background:${color}"></i></div></div>`}).join('');
 $('foodEntryCount').textContent=`${entries.length} ${entries.length===1?'ITEM':'ITENS'}`;const host=$('foodDiaryMeals');const standardMealNames=['Café da manhã','Lanche da manhã','Almoço','Lanche da tarde','Jantar','Ceia','Outro'];const mealNames=[...standardMealNames,...Array.from(new Set(entries.map(e=>String(e.meal||'Outro').trim()||'Outro')).values()).filter(name=>!standardMealNames.includes(name))];if(!entries.length){host.innerHTML='<div class="food-empty">Ainda não há alimentos registrados neste dia.<br>Adicione o primeiro alimento acima ou use “Repetir ontem”.</div>';}else{host.innerHTML=mealNames.map(meal=>{const rows=entries.filter(e=>(String(e.meal||'Outro').trim()||'Outro')===meal);if(!rows.length)return '';const mt=foodEntryTotals(rows);return `<div class="food-meal-group"><div class="food-meal-title"><strong>${esc(meal)}</strong><span class="muted" style="font-size:12px;text-align:right">${foodFmt(mt.k)} kcal<br><span style="font-size:10px">P ${foodFmt(mt.p,1)} g · C ${foodFmt(mt.c,1)} g · G ${foodFmt(mt.f,1)} g</span></span></div>${rows.map(e=>`<div class="food-entry-row ${e.entryType==='savedMeal'?'is-saved-meal':''}"><div class="food-entry-main"><strong>${esc(e.name)}</strong><small>${e.entryType==='savedMeal'?`${foodFmt(e.servings||1,2)} porção(ões)`: `${foodFmt(e.amount,1)} ${esc(e.unit||'g')}`} · ${foodFmt(e.kcal)} kcal · P ${foodFmt(e.protein,1)} g · C ${foodFmt(e.carbs,1)} g · G ${foodFmt(e.fat,1)} g</small>${e.entryType==='savedMeal'?`<button type="button" class="food-entry-expand" data-food-expand="${esc(e.id)}" aria-expanded="false">Ver ingredientes</button><div class="food-entry-components" data-food-components="${esc(e.id)}" hidden>${(Array.isArray(e.components)?e.components:[]).map(c=>`<div>${esc(c.name)} — ${foodFmt((Number(c.amount)||0)*(Number(e.servings)||1),1)} ${esc(c.unit||'g')}</div>`).join('')}</div>`:''}</div><div class="food-entry-actions"><button type="button" title="Editar registro" aria-label="Editar ${esc(e.name)}" data-food-edit="${esc(e.id)}">✎</button><button type="button" title="Usar este alimento novamente" aria-label="Usar ${esc(e.name)} novamente" data-food-repeat="${esc(e.id)}">↶</button><button type="button" title="Excluir registro" aria-label="Excluir ${esc(e.name)}" data-food-delete="${esc(e.id)}">×</button></div></div>`).join('')}</div>`}).join('');}
 document.querySelectorAll('[data-food-expand]').forEach(b=>b.onclick=()=>{const box=document.querySelector(`[data-food-components="${CSS.escape(b.dataset.foodExpand)}"]`);if(!box)return;box.hidden=!box.hidden;b.setAttribute('aria-expanded',String(!box.hidden));b.textContent=box.hidden?'Ver ingredientes':'Ocultar ingredientes';});
 document.querySelectorAll('[data-food-delete]').forEach(b=>b.onclick=()=>{const target=state.foodEntries.find(e=>String(e.id)===b.dataset.foodDelete);if(!target)return;if(!confirm(`Excluir o registro de “${target.name}” (${foodFmt(target.amount,1)} ${target.unit||'g'}) deste dia? Esta ação não pode ser desfeita.`))return;const before=state.foodEntries.map(e=>({...e}));state.foodEntries=state.foodEntries.filter(e=>String(e.id)!==b.dataset.foodDelete);if(!save()){state.foodEntries=before;renderFoodDiary();const status=$('foodSearchStatus');if(status)status.textContent='Não foi possível excluir: o registro foi restaurado porque o salvamento falhou.';return;}renderFoodDiary();renderFoodShortcuts();const status=$('foodSearchStatus');if(status)status.textContent=`Registro de ${target.name} excluído do diário.`;});document.querySelectorAll('[data-food-edit]').forEach(b=>b.onclick=()=>{const e=state.foodEntries.find(x=>String(x.id)===b.dataset.foodEdit);if(e?.entryType==='savedMeal'){const next=prompt('Quantidade de porções para este registro',String(e.servings||1));if(next===null)return;const servings=Number(String(next).trim().replace(',','.'));if(!Number.isFinite(servings)||servings<=0||servings>100){alert('Informe um número de porções maior que zero e até 100.');return;}const before=state.foodEntries.map(x=>({...x}));const factor=servings/(Number(e.servings)||1);const idx=state.foodEntries.findIndex(x=>String(x.id)===String(e.id));state.foodEntries[idx]={...e,servings,amount:servings,unit:'porção(ões)',kcal:e.kcal*factor,protein:e.protein*factor,carbs:e.carbs*factor,fat:e.fat*factor,updatedAt:new Date().toISOString()};if(!save()){state.foodEntries=before;renderFoodDiary();return;}renderFoodDiary();return;}const key=ensureFoodForEntry(e);if(!e||!key){alert('Este registro antigo não contém dados nutricionais suficientes para reconstruir o alimento. Os valores históricos foram preservados; registre novamente usando a lista atual se precisar editá-lo.');return;}editingFoodEntryId=e.id;chooseFood(key,e.measureKey||'base');$('foodAmount').value=String(e.amount).replace('.',',');$('foodMealType').value=e.meal||'Outro';$('foodLogForm').querySelector('button[type=submit]').textContent='✓ Salvar alterações';$('cancelFoodEdit').hidden=false;$('foodSearchStatus').textContent='Editando registro existente. Os valores serão recalculados com o snapshot salvo desse alimento.';$('foodLogForm').scrollIntoView({behavior:'smooth',block:'center'});});
 document.querySelectorAll('[data-food-repeat]').forEach(b=>b.onclick=()=>{const e=state.foodEntries.find(x=>String(x.id)===b.dataset.foodRepeat);if(e?.entryType==='savedMeal'){const date=getFoodDiaryDate();if(date>dateKey()&&!confirm('Você está registrando uma refeição em uma data futura. Deseja continuar?'))return;const copy={...e,id:'food_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7),date,createdAt:new Date().toISOString()};state.foodEntries.push(copy);if(!save()){state.foodEntries.pop();return;}renderFoodDiary();renderFoodShortcuts();return;}const key=ensureFoodForEntry(e);if(!e||!key){alert('Este registro antigo não tem um snapshot nutricional completo para repetir com segurança.');return;}editingFoodEntryId=null;$('foodLogForm').querySelector('button[type=submit]').textContent='＋ Registrar alimento';$('cancelFoodEdit').hidden=true;chooseFood(key,e.measureKey||'base');$('foodAmount').value=e.amount;$('foodMealType').value=e.meal||'Outro';$('foodLogForm').scrollIntoView({behavior:'smooth',block:'center'});});renderNextMealRecommendation(entries,tot);renderFoodShortcuts();renderFoodSummary();renderFoodWeekStrip();if(typeof renderNutritionOverview==='function')renderNutritionOverview();}
let mealTestEntries=[];
let mealTestCustomFood=null;
let mealTestUsingCustom=false;
function initMealTester(){
 const sel=$('mealTestFood');if(!sel)return;
 const keys=Object.keys(FOOD_DB||{}).filter(k=>!k.startsWith('history_')&&FOOD_DB[k]&&FOOD_DB[k].name).sort((a,b)=>FOOD_DB[a].name.localeCompare(FOOD_DB[b].name,'pt-BR'));
 sel.innerHTML='<option value="">Selecione um alimento da lista…</option>'+keys.map(k=>`<option value="${esc(k)}">${esc(FOOD_DB[k].name)} · por 100 ${esc(FOOD_DB[k].unit||'g')}</option>`).join('');
 $('mealTestUnit').textContent=FOOD_DB[sel.value]?.unit||'g';
 sel.onchange=()=>{mealTestUsingCustom=false;$('mealTestUnit').textContent=FOOD_DB[sel.value]?.unit||'g';const status=$('mealTestSelectionStatus');if(status)status.textContent=sel.value?`Selecionado: ${FOOD_DB[sel.value].name}`:'Escolha um alimento da lista ou preencha os dados manualmente.';};
 const customBtn=$('mealTestUseCustom');if(customBtn)customBtn.onclick=()=>{
  const name=$('mealTestCustomName').value.trim();
  const rawIds=['mealTestCustomKcal','mealTestCustomP','mealTestCustomC','mealTestCustomF'];
  const vals=rawIds.map(id=>Number(String($(id).value).trim().replace(',','.')));
  if(!name||rawIds.some(id=>String($(id).value).trim()==='')||vals.some(v=>!Number.isFinite(v)||v<0)||vals[0]>1000||vals.slice(1).some(v=>v>100)){alert('Preencha o nome e os quatro valores nutricionais por 100 g/ml.');return;}
  mealTestCustomFood={key:'custom',name,unit:$('mealTestCustomUnit').value,k:vals[0],p:vals[1],c:vals[2],f:vals[3]};mealTestUsingCustom=true;sel.value='';$('mealTestUnit').textContent=mealTestCustomFood.unit;
  const status=$('mealTestSelectionStatus');if(status)status.textContent=`✓ Alimento personalizado selecionado: ${name}. Informe a quantidade e toque em “Adicionar à simulação”.`;
  if(!String($('mealTestAmount').value).trim())$('mealTestAmount').value='100';
 };
 const addBtn=$('mealTestAdd');if(addBtn)addBtn.onclick=()=>{
  const key=sel.value;let f=mealTestUsingCustom?mealTestCustomFood:FOOD_DB[key];
  const raw=String($('mealTestAmount').value||'').trim().replace(/\s/g,'').replace(',','.');const amount=Number(raw);
  if(!f){const status=$('mealTestSelectionStatus');if(status)status.textContent='Selecione um alimento da lista ou confirme os dados do alimento personalizado antes de adicionar.';alert('Selecione um alimento da lista ou toque em “Usar alimento digitado” depois de preencher os dados.');return;}
  if(!raw||!Number.isFinite(amount)||amount<=0||amount>10000){alert('Informe uma quantidade válida, maior que zero e até 10.000 '+(f.unit||'g')+'.');$('mealTestAmount').focus();return;}
  const calculated=calculateFoodAmount(f,amount);if(!calculated){alert('Não foi possível calcular esse alimento. Confira os valores cadastrados.');return;}mealTestEntries.push({key:f.key||key,name:f.name,amount,unit:f.unit||'g',kcal:calculated.kcal,protein:calculated.protein,carbs:calculated.carbs,fat:calculated.fat,foodSnapshot:foodSnapshot(f)});mealTestUsingCustom=false;mealTestCustomFood=null;sel.value='';$('mealTestSelectionStatus').textContent='Alimento adicionado. Escolha outro para continuar.';renderMealTester();$('mealTestAmount').value='100';
 };
 const clearBtn=$('mealTestClear');if(clearBtn)clearBtn.onclick=()=>{mealTestEntries=[];mealTestCustomFood=null;mealTestUsingCustom=false;sel.value='';$('mealTestSelectionStatus').textContent='Simulação limpa. Escolha um alimento para começar.';renderMealTester();};
 const status=$('mealTestSelectionStatus');if(status)status.textContent=`${keys.length} alimentos disponíveis. Escolha na lista ou informe os macros manualmente.`;
 renderMealTester();
}
function renderMealTester(){const list=$('mealTestItems'),out=$('mealTestResults'),register=$('mealTestRegister');if(!list||!out)return;if(register)register.disabled=!mealTestEntries.length;if(!mealTestEntries.length){list.innerHTML='<p class="food-note">Nenhum alimento adicionado ainda. Selecione um alimento acima e toque em “Adicionar à simulação”.</p>';out.innerHTML='<p class="food-note">O total de calorias, proteínas, carboidratos e gorduras aparecerá aqui.</p>';return;}list.innerHTML=mealTestEntries.map((e,i)=>`<div class="meal-test-item"><div class="meal-test-item-main"><strong>${esc(e.name)}</strong><div class="food-note">${foodFmt(e.amount,1)} ${esc(e.unit)} · ${foodFmt(e.kcal)} kcal · P ${foodFmt(e.protein,1)} g · C ${foodFmt(e.carbs,1)} g · G ${foodFmt(e.fat,1)} g</div><div class="meal-test-edit-amount"><label for="mealTestEditAmount${i}">Ajustar quantidade (${esc(e.unit)})</label><input id="mealTestEditAmount${i}" type="text" inputmode="decimal" value="${String(e.amount).replace(/&/g,'&amp;').replace(/"/g,'&quot;')}" data-mealtest-amount="${i}" aria-label="Nova quantidade de ${esc(e.name)}"><button type="button" class="btn secondary" data-mealtest-update="${i}">Atualizar</button></div></div><button type="button" class="btn ghost" data-mealtest-remove="${i}" aria-label="Remover ${esc(e.name)}">Remover</button></div>`).join('');list.querySelectorAll('[data-mealtest-remove]').forEach(b=>b.addEventListener('click',()=>{mealTestEntries.splice(Number(b.dataset.mealtestRemove),1);renderMealTester();}));list.querySelectorAll('[data-mealtest-update]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.mealtestUpdate),e=mealTestEntries[i],field=list.querySelector(`[data-mealtest-amount="${i}"]`),raw=String(field?.value||'').trim().replace(/\s/g,'').replace(',','.');const amount=Number(raw);if(!e||!raw||!Number.isFinite(amount)||amount<=0||amount>10000){alert('Informe uma quantidade válida, maior que zero e até 10.000 '+(e?.unit||'g')+'.');field?.focus();return;}const factor=amount/e.amount;e.amount=amount;e.kcal*=factor;e.protein*=factor;e.carbs*=factor;e.fat*=factor;renderMealTester();}));const t=mealTestEntries.reduce((a,e)=>({k:a.k+e.kcal,p:a.p+e.protein,c:a.c+e.carbs,f:a.f+e.fat}),{k:0,p:0,c:0,f:0});const goals=state.targets||{kcal:1900,protein:130,carbs:200,fat:60};const meal=$('mealTestType')?.value||'Refeição';const pct=(v,g)=>g>0?Math.round(v/g*100):0;const mealFactor={'Café da manhã':.25,'Lanche da manhã':.1,'Almoço':.3,'Lanche da tarde':.1,'Jantar':.25,'Ceia':.1,'Outro':.2}[meal]||.2;const kcalBudget=(Number(goals.kcal)||1900)*mealFactor;const macroLine=(label,v,g)=>`${label}: ${foodFmt(v,1)} g (${pct(v,g)}% da meta diária)`;const energyFromMacros=t.p*4+t.c*4+t.f*9;const delta=Math.abs(energyFromMacros-t.k);const verdict=t.k<=kcalBudget*1.15?`As calorias estão dentro da referência ilustrativa de ${Math.round(mealFactor*100)}% da meta diária.`:`As calorias ultrapassam a referência ilustrativa de ${Math.round(mealFactor*100)}% da meta diária. Isso não significa, por si só, que a refeição esteja errada.`;out.innerHTML=`<h4 style="margin:0 0 10px">Resultado — ${esc(meal)}</h4><div class="meal-test-results"><div class="meal-test-stat"><span>Energia</span><strong>${foodFmt(t.k)} kcal</strong><span>${pct(t.k,Number(goals.kcal)||1900)}% da meta diária</span></div><div class="meal-test-stat"><span>Proteínas</span><strong>${foodFmt(t.p,1)} g</strong><span>${pct(t.p,Number(goals.protein)||130)}% da meta diária</span></div><div class="meal-test-stat"><span>Carboidratos</span><strong>${foodFmt(t.c,1)} g</strong><span>${pct(t.c,Number(goals.carbs)||200)}% da meta diária</span></div><div class="meal-test-stat"><span>Gorduras</span><strong>${foodFmt(t.f,1)} g</strong><span>${pct(t.f,Number(goals.fat)||60)}% da meta diária</span></div></div><div class="meal-test-compare"><strong>Comparação com seu planejamento</strong><p style="margin:6px 0">${esc(verdict)}</p><p style="margin:6px 0">Referência de energia: cerca de ${foodFmt(kcalBudget)} kcal. A distribuição é ajustável; o mais importante é o conjunto do dia.</p><div class="food-note">${macroLine('Proteínas',t.p,Number(goals.protein)||130)} · ${macroLine('Carboidratos',t.c,Number(goals.carbs)||200)} · ${macroLine('Gorduras',t.f,Number(goals.fat)||60)}.</div><p class="food-note">Conferência dos dados: os macros equivalem aproximadamente a ${foodFmt(energyFromMacros)} kcal${delta>Math.max(50,t.k*.2)?`; diferença de ${foodFmt(delta)} kcal em relação às calorias informadas — confira a fonte nutricional.`:'.'}</p></div>`;}
$('mealTestType')?.addEventListener('change',renderMealTester);
$('mealTestRegister')?.addEventListener('click',()=>{
 if(!mealTestEntries.length){alert('Adicione pelo menos um alimento à simulação antes de registrar.');return;}
 const unavailable=mealTestEntries.filter(e=>!e.key||!FOOD_DB[e.key]);
 if(unavailable.length){alert('A simulação contém alimento(s) digitado(s) apenas para teste: '+unavailable.map(e=>'“'+e.name+'”').join(', ')+'. Cadastre esse(s) alimento(s) na aba Alimentos e refaça a simulação para manter o vínculo com a biblioteca.');return;}
 const date=getFoodDiaryDate();if(date>dateKey()&&!confirm('A data selecionada é futura. Deseja registrar esta refeição nessa data?'))return;
 const existing=Array.isArray(state.foodEntries)?state.foodEntries:[];const additions=mealTestEntries.map(e=>{const f=FOOD_DB[e.key];return {id:'food_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,8),date,createdAt:new Date().toISOString(),foodKey:e.key,name:f.name,amount:e.amount,unit:f.unit||e.unit||'g',kcal:e.kcal,protein:e.protein,carbs:e.carbs,fat:e.fat,meal:$('mealTestType')?.value||'Outro',calculationVersion:FOOD_SCHEMA_VERSION,foodSnapshot:e.foodSnapshot||foodSnapshot(f)};});
 state.foodEntries=[...existing,...additions];if(!save()){state.foodEntries=existing;renderFoodDiary();return;}
 renderFoodDiary();renderFoodShortcuts();document.querySelector('[data-food-area="diary"]')?.click();$('foodDiaryMeals')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});const status=$('foodSearchStatus');if(status)status.textContent=`✓ Refeição registrada: ${additions.length} alimento(s) em ${date}. Confira os totais no Diário.`;
});
let savedMealDraftItems=[];
function savedMealTotals(items){return (items||[]).reduce((t,item)=>{const f=FOOD_DB[item.foodKey]||snapshotFoodRecord(item.snapshot,item.foodKey,item.name,item.unit);const n=f?calculateFoodAmount(f,Number(item.amount)||0):null;if(n){t.k+=n.kcal;t.p+=n.protein;t.c+=n.carbs;t.f+=n.fat;}return t;},{k:0,p:0,c:0,f:0});}
function snapshotFoodRecord(snapshot,key,name,unit){if(!snapshot||![snapshot.k,snapshot.p,snapshot.c,snapshot.f].every(v=>v!==null&&v!==''&&Number.isFinite(Number(v))))return null;return {id:key||'saved_meal_food',key:key||'saved_meal_food',name:name||snapshot.name||'Alimento',unit:unit||snapshot.unit||'g',basisAmount:Number(snapshot.basisAmount)||100,basisUnit:snapshot.basisUnit||snapshot.unit||unit||'g',k:Number(snapshot.k),p:Number(snapshot.p),c:Number(snapshot.c),f:Number(snapshot.f),source:snapshot.source||'Snapshot nutricional',sourceType:snapshot.sourceType||'legacy'};}
function snapshotSavedMealItems(items){return (items||[]).map(item=>{const f=FOOD_DB[item.foodKey]||snapshotFoodRecord(item.snapshot,item.foodKey,item.name,item.unit);return {foodKey:String(item.foodKey||''),name:String(item.name||f?.name||'Alimento'),amount:Number(item.amount)||0,unit:item.unit||f?.unit||'g',snapshot:item.snapshot|| (f?foodSnapshot(f):null)};}).filter(x=>x.name&&x.amount>0&&x.snapshot);}
function clearSavedMealForm(){savedMealDraftItems=[];$('savedMealId').value='';$('savedMealName').value='';$('savedMealAmount').value='';$('savedMealFood').value='';$('savedMealUnit').textContent=FOOD_DB[$('savedMealFood').value]?.unit||'g';$('savedMealFormTitle').textContent='Criar refeição';$('savedMealSave').textContent='Salvar refeição';$('savedMealCancelEdit').hidden=true;renderSavedMealDraft();}
function renderSavedMealDraft(){const host=$('savedMealComposition');if(!host)return;if(!savedMealDraftItems.length)host.innerHTML='<p class="food-note">Adicione ingredientes usando a biblioteca alimentar abaixo.</p>';else host.innerHTML=savedMealDraftItems.map((item,i)=>`<div class="saved-meal-component"><span style="flex:1;min-width:100px"><strong>${esc(item.name)}</strong><br><small>Quantidade (${esc(item.unit)})</small></span><div class="saved-meal-amount-edit"><input type="text" inputmode="decimal" value="${String(item.amount).replace(/&/g,'&amp;').replace(/"/g,'&quot;')}" data-saved-draft-amount="${i}" aria-label="Quantidade de ${esc(item.name)}"><button type="button" class="btn ghost" data-saved-draft-update="${i}">Atualizar</button></div><button type="button" class="saved-meal-remove" data-saved-draft-remove="${i}" aria-label="Remover ${esc(item.name)}">×</button></div>`).join('');host.querySelectorAll('[data-saved-draft-remove]').forEach(b=>b.onclick=()=>{savedMealDraftItems.splice(Number(b.dataset.savedDraftRemove),1);renderSavedMealDraft();});host.querySelectorAll('[data-saved-draft-update]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.savedDraftUpdate),item=savedMealDraftItems[i],field=host.querySelector(`[data-saved-draft-amount="${i}"]`),raw=String(field?.value||'').trim().replace(/\s/g,'').replace(',','.');const amount=Number(raw);if(!item||!raw||!Number.isFinite(amount)||amount<=0||amount>10000){alert('Informe uma quantidade válida, maior que zero e até 10.000 '+(item?.unit||'g')+'.');field?.focus();return;}item.amount=amount;renderSavedMealDraft();});const t=savedMealTotals(savedMealDraftItems);$('savedMealTotal').innerHTML=`<strong>Por receita completa</strong><br>${foodFmt(t.k)} kcal · Proteínas ${foodFmt(t.p,1)} g · Carboidratos ${foodFmt(t.c,1)} g · Gorduras ${foodFmt(t.f,1)} g`+(savedMealDraftItems.length?`<div class="saved-meal-details">${savedMealDraftItems.map(x=>`${esc(x.name)}: ${foodFmt(x.amount,1)} ${esc(x.unit)}`).join(' · ')}</div>`:'');}
function savedMealUsage(meal){const entries=Array.isArray(state.foodEntries)?state.foodEntries:[];const matches=entries.filter(e=>(String(e.savedMealId||'')===String(meal.id))||(e.entryType==='savedMeal'&&!e.savedMealId&&String(e.name||'')===String(meal.name)));const sessions=new Map();matches.forEach(e=>{const key=String(e.savedMealRegistrationId||e.id||((e.date||'')+'_'+(e.createdAt||'')));const current=sessions.get(key)||{date:String(e.date||'')};if(String(e.date||'')>current.date)current.date=String(e.date||'');sessions.set(key,current);});return {count:sessions.size,last:Array.from(sessions.values()).reduce((latest,e)=>e.date>latest?e.date:latest,'')};}
function renderSavedMealsList(){const host=$('savedMealsList');renderFoodLibraryMeals();if(!host)return;const list=Array.isArray(state.savedMeals)?state.savedMeals:[];const ranked=list.map(meal=>({...meal,_usage:savedMealUsage(meal)})).sort((a,b)=>Number(!!b.favorite)-Number(!!a.favorite)||b._usage.count-a._usage.count||String(b._usage.last).localeCompare(String(a._usage.last))||a.name.localeCompare(b.name,'pt-BR'));const frequent=ranked.filter(m=>m._usage.count>0).sort((a,b)=>b._usage.count-a._usage.count||String(b._usage.last).localeCompare(String(a._usage.last))).slice(0,3);let html='';if(frequent.length){html+=`<section class="saved-meal-suggestions"><h3>⚡ Suas refeições frequentes</h3>${frequent.map(m=>`<div class="saved-meal-suggestion"><div><strong>${esc(m.name)}</strong><small>${m._usage.count} registro(s)${m._usage.last?' · último uso '+esc(m._usage.last):''}</small></div><button type="button" class="btn secondary" data-saved-meal-quick="${esc(m.id)}">Conferir e registrar</button></div>`).join('')}</section>`;}if(!ranked.length){html+='<div class="food-empty">Você ainda não salvou refeições. Use o formulário abaixo para montar a primeira.</div>';host.innerHTML=html;return;}html+=ranked.map(meal=>{const items=snapshotSavedMealItems(meal.items),t=savedMealTotals(items);return `<article class="saved-meal-card"><div class="saved-meal-card-head"><div><h4>${meal.favorite?'★ ':''}${esc(meal.name)}</h4><p>${items.map(x=>`${esc(x.name)} · ${foodFmt(x.amount,1)} ${esc(x.unit)}`).join(' · ')}</p><p><strong>${foodFmt(t.k)} kcal</strong> · P ${foodFmt(t.p,1)} g · C ${foodFmt(t.c,1)} g · G ${foodFmt(t.f,1)} g por receita${meal._usage.count?` · ${meal._usage.count} uso(s)`:''}</p></div></div><div class="saved-meal-actions"><button class="btn" type="button" data-saved-meal-register="${esc(meal.id)}" data-register-mode="separate">Registrar ingredientes</button><button class="btn secondary" type="button" data-saved-meal-register="${esc(meal.id)}" data-register-mode="grouped">Registrar como um item</button><button class="btn ghost ${meal.favorite?'saved-meal-favorite':''}" type="button" data-saved-meal-favorite="${esc(meal.id)}">${meal.favorite?'★ Favorita':'☆ Favoritar'}</button><button class="btn ghost" type="button" data-saved-meal-duplicate="${esc(meal.id)}">Duplicar</button><button class="btn ghost" type="button" data-saved-meal-edit="${esc(meal.id)}">Editar</button><button class="btn ghost" type="button" data-saved-meal-delete="${esc(meal.id)}">Excluir</button></div></article>`;}).join('');host.innerHTML=html;host.querySelectorAll('[data-saved-meal-register]').forEach(b=>b.onclick=()=>registerSavedMeal(b.dataset.savedMealRegister,b.dataset.registerMode));host.querySelectorAll('[data-saved-meal-quick]').forEach(b=>b.onclick=()=>registerSavedMeal(b.dataset.savedMealQuick,'grouped'));host.querySelectorAll('[data-saved-meal-favorite]').forEach(b=>b.onclick=()=>{const m=state.savedMeals.find(x=>String(x.id)===b.dataset.savedMealFavorite);if(!m)return;const before=state.savedMeals.map(x=>({...x}));m.favorite=!m.favorite;if(!save()){state.savedMeals=before;return;}renderSavedMealsList();});host.querySelectorAll('[data-saved-meal-duplicate]').forEach(b=>b.onclick=()=>{const m=state.savedMeals.find(x=>String(x.id)===b.dataset.savedMealDuplicate);if(!m)return;const copy={...m,id:'meal_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7),name:(m.name+' (cópia)').slice(0,90),items:snapshotSavedMealItems(m.items).map(x=>({...x,snapshot:x.snapshot?({...x.snapshot}):null})),favorite:false,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};const before=state.savedMeals.slice();state.savedMeals=[...state.savedMeals,copy];if(!save()){state.savedMeals=before;return;}renderSavedMealsList();});host.querySelectorAll('[data-saved-meal-edit]').forEach(b=>b.onclick=()=>{const m=state.savedMeals.find(x=>String(x.id)===b.dataset.savedMealEdit);if(!m)return;cancelSavedMealRegistration();$('savedMealId').value=m.id;$('savedMealName').value=m.name;savedMealDraftItems=snapshotSavedMealItems(m.items);$('savedMealFormTitle').textContent='Editar refeição';$('savedMealSave').textContent='Salvar alterações';$('savedMealCancelEdit').hidden=false;renderSavedMealDraft();$('savedMealName').scrollIntoView({behavior:'smooth',block:'center'});});host.querySelectorAll('[data-saved-meal-delete]').forEach(b=>b.onclick=()=>{const m=state.savedMeals.find(x=>String(x.id)===b.dataset.savedMealDelete);if(!m||!confirm(`Excluir a refeição salva “${m.name}”? Os registros já feitos no diário não serão apagados.`))return;const before=state.savedMeals.slice();state.savedMeals=state.savedMeals.filter(x=>String(x.id)!==String(m.id));if(!save()){state.savedMeals=before;return;}renderSavedMealsList();});}
let savedMealRegistrationDraft=null;
function cancelSavedMealRegistration(){savedMealRegistrationDraft=null;const panel=$('savedMealRegistration');if(panel){panel.hidden=true;panel.innerHTML='';}}
function renderSavedMealRegistration(){const panel=$('savedMealRegistration'),draft=savedMealRegistrationDraft;if(!panel||!draft)return;const totals=savedMealTotals(draft.items);panel.hidden=false;panel.innerHTML=`<h3>Conferir antes de registrar: ${esc(draft.name)}</h3><p class="food-note">Ajuste as quantidades dos ingredientes para este registro. Isso não altera a receita salva.</p><div class="saved-meal-composition">${draft.items.map((item,i)=>`<div class="saved-meal-component"><span style="flex:1;min-width:90px"><strong>${esc(item.name)}</strong><small style="display:block;color:var(--muted)">${esc(item.unit)}</small></span><input type="text" inputmode="decimal" value="${String(item.amount).replace(/&/g,'&amp;').replace(/"/g,'&quot;')}" data-saved-register-amount="${i}" aria-label="Quantidade de ${esc(item.name)}"><button type="button" class="btn ghost" data-saved-register-update="${i}">Atualizar</button><button type="button" class="saved-meal-remove" data-saved-register-remove="${i}" aria-label="Remover ${esc(item.name)}">×</button></div>`).join('')}</div><div class="field" style="margin-top:10px"><label for="savedMealRegisterServings">Porções desta quantidade ajustada</label><input id="savedMealRegisterServings" type="text" inputmode="decimal" value="1" aria-describedby="savedMealRegisterTotals" style="max-width:180px"></div><div class="saved-meal-total" id="savedMealRegisterTotals"><strong>Totais de 1 porção</strong><br>${foodFmt(totals.k)} kcal · Proteínas ${foodFmt(totals.p,1)} g · Carboidratos ${foodFmt(totals.c,1)} g · Gorduras ${foodFmt(totals.f,1)} g</div><div class="saved-meal-registration-actions"><button type="button" class="btn" data-saved-register-commit="separate">Registrar ingredientes separados</button><button type="button" class="btn secondary" data-saved-register-commit="grouped">Registrar agrupada</button><button type="button" class="btn ghost" data-saved-register-cancel>Cancelar</button></div>`;panel.querySelectorAll('[data-saved-register-update]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.savedRegisterUpdate),item=draft.items[i],field=panel.querySelector(`[data-saved-register-amount="${i}"]`),raw=String(field?.value||'').trim().replace(/\s/g,'').replace(',','.');const amount=Number(raw);if(!item||!raw||!Number.isFinite(amount)||amount<=0||amount>10000){alert('Informe uma quantidade válida, maior que zero e até 10.000 '+(item?.unit||'g')+'.');field?.focus();return;}item.amount=amount;renderSavedMealRegistration();});panel.querySelectorAll('[data-saved-register-remove]').forEach(b=>b.onclick=()=>{draft.items.splice(Number(b.dataset.savedRegisterRemove),1);if(!draft.items.length){cancelSavedMealRegistration();return;}renderSavedMealRegistration();});panel.querySelector('[data-saved-register-cancel]').onclick=cancelSavedMealRegistration;panel.querySelectorAll('[data-saved-register-commit]').forEach(b=>b.onclick=()=>commitSavedMealRegistration(b.dataset.savedRegisterCommit));panel.querySelector('#savedMealRegisterServings').addEventListener('input',()=>{const raw=String(panel.querySelector('#savedMealRegisterServings').value||'').trim().replace(',','.');const servings=Number(raw);const t=savedMealTotals(draft.items);const totalsEl=panel.querySelector('#savedMealRegisterTotals');if(Number.isFinite(servings)&&servings>0&&servings<=100){totalsEl.innerHTML=`<strong>Totais do registro (${foodFmt(servings,2)} porção(ões))</strong><br>${foodFmt(t.k*servings)} kcal · Proteínas ${foodFmt(t.p*servings,1)} g · Carboidratos ${foodFmt(t.c*servings,1)} g · Gorduras ${foodFmt(t.f*servings,1)} g`;}else totalsEl.textContent='Informe de 0,01 a 100 porções.';});}
function registerSavedMeal(id,mode){const meal=state.savedMeals.find(m=>String(m.id)===String(id));if(!meal)return;const items=snapshotSavedMealItems(meal.items);if(!items.length){alert('Esta refeição não tem ingredientes válidos. Edite-a e adicione os alimentos novamente.');return;}cancelSavedMealRegistration();savedMealRegistrationDraft={mealId:meal.id,name:meal.name,items:items.map(x=>({...x})),mode:mode||'grouped'};renderSavedMealRegistration();$('savedMealRegistration').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});}
function commitSavedMealRegistration(mode){const draft=savedMealRegistrationDraft,panel=$('savedMealRegistration');if(!draft||!panel)return;for(const field of panel.querySelectorAll('[data-saved-register-amount]')){const i=Number(field.dataset.savedRegisterAmount),item=draft.items[i],raw=String(field.value||'').trim().replace(/\s/g,'').replace(',','.');const amount=Number(raw);if(!item||!raw||!Number.isFinite(amount)||amount<=0||amount>10000){alert('Confira as quantidades dos ingredientes: cada uma deve ser maior que zero e até 10.000.');field.focus();return;}item.amount=amount;}const servingsField=panel.querySelector('#savedMealRegisterServings'),servings=Number(String(servingsField?.value||'').trim().replace(',','.'));if(!Number.isFinite(servings)||servings<=0||servings>100){alert('Informe um número de porções maior que zero e até 100.');servingsField?.focus();return;}const items=snapshotSavedMealItems(draft.items);if(!items.length){alert('Adicione pelo menos um ingrediente válido antes de registrar.');return;}const date=getFoodDiaryDate();if(date>dateKey()&&!confirm('Você está registrando uma alimentação em uma data futura. Deseja continuar?'))return;const mealType=$('savedMealMealType')?.value||$('foodMealType')?.value||'Outro',now=new Date().toISOString(),registrationId='mealreg_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7),before=state.foodEntries.slice();if(mode==='separate'){const additions=items.map(item=>{const f=FOOD_DB[item.foodKey]||snapshotFoodRecord(item.snapshot,item.foodKey,item.name,item.unit),calc=calculateFoodAmount(f,item.amount*servings);return {id:'food_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,8),date,createdAt:now,meal:mealType,foodKey:FOOD_DB[item.foodKey]?item.foodKey:'',name:item.name,amount:item.amount*servings,unit:item.unit||'g',kcal:calc.kcal,protein:calc.protein,carbs:calc.carbs,fat:calc.fat,savedMealId:draft.mealId,savedMealName:draft.name,savedMealRegistrationId:registrationId,calculationVersion:FOOD_SCHEMA_VERSION,foodSnapshot:item.snapshot};});state.foodEntries=[...state.foodEntries,...additions];}else{const t=savedMealTotals(items),components=items.map(x=>({...x}));state.foodEntries.push({id:'food_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,8),date,createdAt:now,meal:mealType,entryType:'savedMeal',savedMealId:draft.mealId,savedMealRegistrationId:registrationId,name:draft.name,amount:servings,unit:'porção(ões)',servings,kcal:t.k*servings,protein:t.p*servings,carbs:t.c*servings,fat:t.f*servings,components,recipeSnapshot:{name:draft.name,items:components},calculationVersion:FOOD_SCHEMA_VERSION});}if(!save()){state.foodEntries=before;renderFoodDiary();return;}const mealName=draft.name;cancelSavedMealRegistration();renderFoodDiary();renderFoodShortcuts();renderSavedMealsList();closeSavedMeals();const status=$('foodSearchStatus');if(status)status.textContent=`✓ ${mealName} registrada (${servings} porção(ões)) no diário de ${date}.`; }
function openSavedMeals(){loadCustomFoodsIntoDB();if($('savedMealMealType')&&$('foodMealType'))$('savedMealMealType').value=$('foodMealType').value;renderFoodLibraryMeals();const select=$('savedMealFood');const current=select.value;select.innerHTML='<option value="">Selecione um alimento…</option>'+Object.keys(FOOD_DB).filter(k=>!k.startsWith('history_')).sort((a,b)=>FOOD_DB[a].name.localeCompare(FOOD_DB[b].name,'pt-BR')).map(k=>`<option value="${esc(k)}">${esc(FOOD_DB[k].name)} · por 100 ${esc(FOOD_DB[k].unit||'g')}</option>`).join('');if(current&&FOOD_DB[current])select.value=current;renderSavedMealsList();renderSavedMealDraft();const modal=$('savedMealsModal');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeSavedMeals(){const modal=$('savedMealsModal');if(!modal)return;cancelSavedMealRegistration();if($('savedMealMealType')&&$('foodMealType'))$('foodMealType').value=$('savedMealMealType').value;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';$('openSavedMeals')?.focus({preventScroll:true});}
function saveCurrentFoodCombination(){const date=getFoodDiaryDate(),entries=(state.foodEntries||[]).filter(e=>e.date===date&&e.entryType!=='savedMeal'&&e.foodSnapshot&&Number(e.amount)>0);if(!entries.length){alert('Não há ingredientes individuais com dados nutricionais suficientes neste dia. Registre os alimentos primeiro ou crie a refeição manualmente.');return;}const name=prompt('Nome para esta combinação', 'Minha refeição');if(name===null)return;const items=entries.map(e=>({foodKey:FOOD_DB[e.foodKey]?e.foodKey:'',name:e.name,amount:Number(e.amount),unit:e.unit||'g',snapshot:e.foodSnapshot}));const valid=snapshotSavedMealItems(items);if(!name.trim()||!valid.length){alert('Informe um nome e confira os ingredientes da combinação.');return;}const before=state.savedMeals.slice();state.savedMeals=[...state.savedMeals,{id:'meal_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7),name:name.trim().slice(0,90),items:valid,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}];if(!save()){state.savedMeals=before;return;}openSavedMeals();}
$('openSavedMeals')?.addEventListener('click',openSavedMeals);$('closeSavedMeals')?.addEventListener('click',closeSavedMeals);$('savedMealsModal')?.addEventListener('click',e=>{if(e.target===$('savedMealsModal'))closeSavedMeals();});$('savedMealFood')?.addEventListener('change',()=>{$('savedMealUnit').textContent=FOOD_DB[$('savedMealFood').value]?.unit||'g';});$('savedMealAddFood')?.addEventListener('click',()=>{const key=$('savedMealFood').value,f=FOOD_DB[key],raw=String($('savedMealAmount').value||'').trim().replace(',','.');const amount=Number(raw);if(!f){alert('Selecione um alimento da biblioteca.');return;}if(!raw||!Number.isFinite(amount)||amount<=0||amount>10000){alert('Informe uma quantidade maior que zero e até 10.000 '+(f.unit||'g')+'.');return;}savedMealDraftItems.push({foodKey:key,name:f.name,amount,unit:f.unit||'g',snapshot:foodSnapshot(f)});$('savedMealAmount').value='';renderSavedMealDraft();});$('savedMealForm')?.addEventListener('submit',e=>{e.preventDefault();const name=$('savedMealName').value.trim();if(!name){alert('Informe o nome da refeição.');return;}if(!savedMealDraftItems.length){alert('Adicione pelo menos um ingrediente.');return;}const id=$('savedMealId').value||('meal_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7));const before=state.savedMeals.slice(),record={...(state.savedMeals.find(m=>String(m.id)===String(id))||{}),id,name:name.slice(0,90),items:snapshotSavedMealItems(savedMealDraftItems),updatedAt:new Date().toISOString()};if(!record.items.length){alert('Não foi possível validar os ingredientes. Confira a biblioteca alimentar.');return;}const idx=state.savedMeals.findIndex(m=>String(m.id)===String(id));if(idx>=0)state.savedMeals[idx]=record;else state.savedMeals.push({...record,createdAt:record.updatedAt});if(!save()){state.savedMeals=before;return;}clearSavedMealForm();renderSavedMealsList();});$('savedMealClearForm')?.addEventListener('click',clearSavedMealForm);$('savedMealCancelEdit')?.addEventListener('click',clearSavedMealForm);$('saveCurrentFoodCombination')?.addEventListener('click',saveCurrentFoodCombination);
function renderMeals(){loadCustomFoodsIntoDB();populateFoodPicker();initMealTester();renderFoodLibrary();renderFoodLibraryMeals();if($('foodDiaryDate')&&!$('foodDiaryDate').value)$('foodDiaryDate').value=dateKey();renderFoodSearchResults($('foodSearch')?.value||'');renderFoodDiary();const today=state.eaten[dateKey()]||{};$('mealCards').innerHTML=meals.map((m,i)=>`<div class="card meal"><div style="display:flex;justify-content:flex-end;margin-bottom:6px"><button class="edit-btn" data-edit-meal="${i}">EDITAR REFEIÇÃO</button></div><div class="meal-head"><div class="meal-icon">${esc(m.icon)}</div><div><h3>${esc(m.name)}</h3><small>${esc(m.kcal)}</small></div></div><ul class="food-list">${m.items.map(it=>`<li><span>${esc(it[0])}</span><span>${esc(it[1])}</span></li>`).join('')}</ul><div class="meal-bottom">${esc(m.macro)}</div></div>`).join('');document.querySelectorAll('[data-edit-meal]').forEach(b=>b.onclick=()=>{const i=+b.dataset.editMeal,m=meals[i];const name=prompt('Nome da refeição',m.name);if(name===null)return;const kcal=prompt('Calorias estimadas (ex.: 470 kcal*)',m.kcal);if(kcal===null)return;const itemsText=prompt('Alimentos, um por linha, no formato Nome | quantidade',m.items.map(x=>x.join(' | ')).join('\n'));if(itemsText===null)return;const macro=prompt('Resumo de macros',m.macro);if(macro===null)return;const items=itemsText.split('\n').map(line=>line.split('|').map(x=>x.trim())).filter(x=>x[0]);if(!items.length){alert('Inclua pelo menos um alimento.');return;}meals[i]={...m,name:name.trim()||m.name,kcal:kcal.trim()||m.kcal,items,macro:macro.trim()||m.macro};state.customMeals[i]=meals[i];save();renderMeals();});}
function renderFoodSummary(){const date=getFoodDiaryDate(),entries=(state.foodEntries||[]).filter(e=>e.date===date),tot=foodEntryTotals(entries);const host=$('foodSummary');if(host)host.innerHTML=`<div class="food-stat"><span>Alimentos registrados</span><strong>${entries.length}</strong></div><div class="food-stat"><span>Calorias consumidas</span><strong>${foodFmt(tot.k)} kcal</strong></div><div class="food-stat"><span>Meta diária</span><strong>${foodFmt(state.targets.kcal)} kcal</strong></div><div class="food-stat"><span>Proteína</span><strong>${foodFmt(tot.p,1)} g</strong></div>`;}
function addFoodEntry(event){event.preventDefault();let key=$('foodSelected')?.value||'';if(!FOOD_DB[key]){const typed=normalizeFoodText($('foodSearch')?.value||'');const exact=Object.entries(FOOD_DB).find(([k,f])=>normalizeFoodText(f.name)===typed||normalizeFoodText(k)===typed);if(exact){key=exact[0];chooseFood(key);}else{const first=$('foodSearchResults')?.querySelector('[data-food-search-pick]');if(first){key=first.dataset.foodSearchPick;chooseFood(key);}}}const rawAmount=String($('foodAmount')?.value||'').trim().replace(/\s/g,'').replace(',','.'),amount=Number(rawAmount),meal=$('foodMealType')?.value||'Outro',food=FOOD_DB[key];if(!food){$('foodSearchStatus').textContent='Não consegui identificar esse alimento. Toque em um resultado ou escolha uma opção na lista completa.';alert('Selecione um alimento da lista antes de registrar.');$('foodSearch')?.focus();return;}if(!rawAmount||!Number.isFinite(amount)||amount<=0||amount>10000){alert('Informe uma quantidade válida, maior que zero e até 10.000 '+(food.unit||'g')+'. Você pode usar vírgula ou ponto decimal.');$('foodAmount').focus();return;}const measure=selectedFoodMeasure();const baseAmount=measure.value==='base'?amount:amount*Number(measure.baseAmount);if(!Number.isFinite(baseAmount)||baseAmount<=0){alert('Não foi possível converter essa medida com segurança. Use gramas ou ml.');return;}const calculated=calculateFoodAmount(food,baseAmount);if(!calculated){alert('Não foi possível calcular este alimento. Confira os dados nutricionais cadastrados.');return;}const date=getFoodDiaryDate();if(date>dateKey()){if(!confirm('Você está registrando uma alimentação em uma data futura. Deseja continuar?'))return;}state.foodEntries=Array.isArray(state.foodEntries)?state.foodEntries:[];const previousEntries=state.foodEntries.map(e=>({...e}));const previousEditingId=editingFoodEntryId;const existingEntry=editingFoodEntryId?state.foodEntries.find(e=>String(e.id)===String(editingFoodEntryId)):null;const nowIso=new Date().toISOString();const updated={id:editingFoodEntryId||('food_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7)),date,createdAt:existingEntry?.createdAt||nowIso,...(existingEntry?{updatedAt:nowIso}:{}),meal,foodKey:key,name:food.name,amount,unit:measure.value==='base'?(food.unit||'g'):measure.label,baseAmount,baseUnit:food.unit||'g',measureKey:measure.value,kcal:calculated.kcal,protein:calculated.protein,carbs:calculated.carbs,fat:calculated.fat,calculationVersion:FOOD_SCHEMA_VERSION,foodSnapshot:foodSnapshot(food)};if(editingFoodEntryId){const idx=state.foodEntries.findIndex(e=>String(e.id)===String(editingFoodEntryId));if(idx>=0)state.foodEntries[idx]=updated;else state.foodEntries.push(updated);}else state.foodEntries.push(updated);const wasEditing=!!editingFoodEntryId;const saved=save();if(!saved){state.foodEntries=previousEntries;editingFoodEntryId=previousEditingId;renderFoodDiary();$('foodSearchStatus').textContent='Falha ao salvar. Seus campos foram mantidos; tente novamente ou exporte um backup.';return;}editingFoodEntryId=null;$('foodSearch').value='';$('foodSelected').value='';$('foodAmount').value='';$('foodAmountUnitSelect').innerHTML='<option value="base">Gramas ou ml</option>';$('foodAmountUnit').textContent='g';$('foodAmountHelp').textContent='Use gramas ou ml conforme a unidade indicada.';$('foodSearchStatus').textContent=saved?(wasEditing?'✓ Registro atualizado.':'✓ Alimento registrado! Você já pode adicionar outro.'):'O alimento entrou na tela, mas o navegador não confirmou o salvamento local. Verifique o armazenamento do navegador.';$('foodFavoriteToggle').textContent='☆ Salvar como favorito';$('foodLogForm').querySelector('button[type=submit]').textContent='＋ Registrar alimento';$('cancelFoodEdit').hidden=true;renderFoodDiary();renderFoodShortcuts();$('foodSearch').focus();}
$('foodLogForm')?.addEventListener('submit',addFoodEntry);
$('cancelFoodEdit')?.addEventListener('click',()=>{editingFoodEntryId=null;$('foodSearch').value='';$('foodSelected').value='';$('foodAmount').value='';$('foodAmountUnitSelect').innerHTML='<option value="base">Gramas ou ml</option>';$('foodAmountUnit').textContent='g';$('foodLogForm').querySelector('button[type=submit]').textContent='＋ Registrar alimento';$('cancelFoodEdit').hidden=true;$('foodSearchStatus').textContent='Edição cancelada.';$('foodFavoriteToggle').textContent='☆ Salvar como favorito';});
$('foodSelected')?.addEventListener('change',()=>{const key=$('foodSelected').value;if(key){chooseFood(key);renderFoodSearchResults('');}else{$('foodSearch').value='';$('foodSearchResults').hidden=true;$('foodAmountUnit').textContent='g';$('foodAmountHelp').textContent='Use gramas ou ml conforme a unidade indicada.';$('foodFavoriteToggle').textContent='☆ Salvar como favorito';}});
$('foodAmountUnitSelect')?.addEventListener('change',()=>{const measure=selectedFoodMeasure(),food=FOOD_DB[$('foodSelected')?.value||''];$('foodAmountUnit').textContent=measure.value==='base'?(food?.unit||'g'):measure.label;$('foodAmountHelp').textContent=measure.note||`Informe a quantidade em ${measure.label}. Os nutrientes são calculados pela equivalência cadastrada.`;$('foodAmount').placeholder=measure.value==='base'?`Quantidade em ${food?.unit||'g'}`:`Quantidade em ${measure.label}`;});
$('foodSearch')?.addEventListener('input',()=>{const raw=$('foodSearch').value.trim(),val=raw.toLocaleLowerCase('pt-BR');const exact=Object.entries(FOOD_DB).find(([k,f])=>f.name.toLocaleLowerCase('pt-BR')===val);if(exact){chooseFood(exact[0]);renderFoodSearchResults(exact[1].name);return;}$('foodSelected').value='';$('foodAmountUnit').textContent='g';$('foodFavoriteToggle').textContent='☆ Salvar como favorito';renderFoodSearchResults(raw);});
// No celular, Enter na busca seleciona o primeiro resultado em vez de tentar enviar um formulário incompleto.
$('foodSearch')?.addEventListener('keydown',e=>{if(e.key!=='Enter')return;const selected=$('foodSelected').value;if(selected&&FOOD_DB[selected]){e.preventDefault();$('foodAmount').focus();return;}const first=$('foodSearchResults')?.querySelector('[data-food-search-pick]');if(first){e.preventDefault();chooseFood(first.dataset.foodSearchPick);}});
$('foodFavoriteToggle')?.addEventListener('click',()=>{const key=$('foodSelected').value;if(!FOOD_DB[key]){alert('Selecione primeiro um alimento para salvá-lo como favorito.');return;}state.foodFavorites=Array.isArray(state.foodFavorites)?state.foodFavorites:[];if(state.foodFavorites.includes(key))state.foodFavorites=state.foodFavorites.filter(k=>k!==key);else state.foodFavorites.push(key);save();renderFoodShortcuts();$('foodFavoriteToggle').textContent=state.foodFavorites.includes(key)?'★ Remover dos favoritos':'☆ Salvar como favorito';});
$('foodDiaryDate')?.addEventListener('change',renderFoodDiary);
$('nutritionOverviewDate')?.addEventListener('change',()=>{const input=$('foodDiaryDate');if(input)input.value=$('nutritionOverviewDate').value||dateKey();renderFoodDiary();});
function shiftFoodDate(days){const input=$('foodDiaryDate');const d=new Date((input?.value||dateKey())+'T12:00:00');d.setDate(d.getDate()+days);input.value=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;renderFoodDiary();}
$('foodDayPrev')?.addEventListener('click',()=>shiftFoodDate(-1));$('foodDayNext')?.addEventListener('click',()=>shiftFoodDate(1));$('foodTodayBtn')?.addEventListener('click',()=>{$('foodDiaryDate').value=dateKey();renderFoodDiary();});
$('repeatYesterdayFood')?.addEventListener('click',()=>{const target=getFoodDiaryDate(),d=new Date(target+'T12:00:00');d.setDate(d.getDate()-1);const prev=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`,source=state.foodEntries.filter(e=>e.date===prev);if(!source.length){alert('Não há alimentos registrados no dia anterior para repetir.');return;}if(state.foodEntries.some(e=>e.date===target)&&!confirm('Este dia já tem registros. Deseja acrescentar uma cópia dos alimentos de ontem?'))return;const before=state.foodEntries.map(e=>({...e}));source.forEach(e=>state.foodEntries.push({...e,id:'food_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7),date:target,createdAt:new Date().toISOString()}));if(!save()){state.foodEntries=before;renderFoodDiary();return;}renderFoodDiary();renderFoodShortcuts();});
function startRest(seconds,button,label="Descanso"){
 seconds=Math.max(0,Math.min(900,Math.floor(Number(seconds)||0)));if(restInterval)clearInterval(restInterval);
 restEndsAt=Date.now()+seconds*1000;state.restTimer={endsAt:restEndsAt,duration:seconds,label,running:true};save();updateRestTimerUI();
 if(seconds===0){state.restTimer.running=false;save();updateRestTimerUI();return;}
 restInterval=setInterval(tickRestTimer,250);
}
function tickRestTimer(){const timer=state.restTimer||{},left=Math.max(0,Math.ceil(((timer.endsAt||restEndsAt)-Date.now())/1000));if(!left&&timer.running){state.restTimer={...timer,endsAt:0,running:false};if(restInterval)clearInterval(restInterval);restInterval=null;save();updateRestTimerUI(true);return;}updateRestTimerUI();}
function updateRestTimerUI(finished=false){const timer=state.restTimer||{},left=timer.running?Math.max(0,Math.ceil(((timer.endsAt||restEndsAt)-Date.now())/1000)):0;const display=$("restTimerDisplay"),label=$("restTimerLabel"),button=$("restStartPause"),durationInput=$("restDurationInput");if(!display||!label||!button)return;display.textContent=formatTimer(left);if(typeof syncFloatingTimerUI==='function')syncFloatingTimerUI();label.textContent=finished?"✓ Descanso concluído — quando estiver pronto, siga para a próxima série.":(timer.running?(timer.label||"Descanso em andamento"):(timer.label&&timer.duration?`${timer.label} · pronto para iniciar` :"Defina o tempo e inicie o descanso"));button.textContent=timer.running?"Ⅱ Pausar":"▶ Iniciar "+(timer.duration||90)+" s";if(durationInput&&document.activeElement!==durationInput)durationInput.value=String(timer.running?left:(timer.duration||90));}
$("restStartPause").addEventListener("click",()=>{const timer=state.restTimer||{};if(timer.running){const left=Math.max(0,Math.ceil((timer.endsAt-Date.now())/1000));if(restInterval)clearInterval(restInterval);restInterval=null;state.restTimer={...timer,endsAt:0,duration:left,running:false};save();updateRestTimerUI();}else startRest(timer.duration||90,null,timer.label||"Descanso manual");});
$("restAdd15").addEventListener("click",()=>{const timer=state.restTimer||{},left=timer.running?Math.max(0,Math.ceil((timer.endsAt-Date.now())/1000)):Math.max(0,Number(timer.duration)||0);startRest(Math.min(900,left+15),null,timer.label||"Descanso");});
$("restReset").addEventListener("click",()=>{if(restInterval)clearInterval(restInterval);restInterval=null;state.restTimer={endsAt:0,duration:0,label:"",running:false};save();updateRestTimerUI();});
$("restApplyDuration").addEventListener("click",()=>{const raw=$("restDurationInput").value,seconds=Number(raw);if(raw.trim()===""||!Number.isInteger(seconds)||seconds<0||seconds>900){alert("Escolha um descanso entre 0 e 900 segundos.");return;}if(restInterval)clearInterval(restInterval);restInterval=null;state.restTimer={endsAt:0,duration:seconds,label:"Descanso personalizado",running:false};save();updateRestTimerUI();});
document.querySelectorAll("[data-rest-preset]").forEach(b=>b.addEventListener("click",()=>{const seconds=Number(b.dataset.restPreset);$("restDurationInput").value=String(seconds);if(restInterval)clearInterval(restInterval);restInterval=null;state.restTimer={endsAt:0,duration:seconds,label:"Descanso personalizado",running:false};save();updateRestTimerUI();}));
document.addEventListener("visibilitychange",()=>{if(!document.hidden&&state.restTimer?.running)tickRestTimer();});
function renderSessionStats(){
 const w=workouts[state.selected];let sets=0,volume=0,hasVolume=false;
 const active=!!state.sessionId&&Number(state.sessionDay)===Number(state.selected)&&!state.sessionFinishedAt;
 const latest=active?null:(Array.isArray(state.sessionHistory)?state.sessionHistory:[]).filter(x=>x&&x.id&&x.finishedAt&&Number(x.dayIndex)===Number(state.selected)).sort((a,b)=>sessionDateOf(b).localeCompare(sessionDateOf(a))||String(b.finishedAt).localeCompare(String(a.finishedAt)))[0]||null;
 const count=active?w.ex.length:(latest&&Array.isArray(latest.exerciseSnapshot)?latest.exerciseSnapshot.length:w.ex.length);
 for(let i=0;i<count;i++){
  const id=active?`${state.sessionId}-${i}`:latest?`${latest.id}-${i}`:`${weekKey()}-${state.selected}-${i}`;
  const log=state.logs[id];(log?.sets||[]).forEach(st=>{if(st?.completed){sets++;const hasWeight=st.weight!==null&&st.weight!==undefined&&String(st.weight)!=="",hasReps=st.reps!==null&&st.reps!==undefined&&String(st.reps)!=="";if(hasWeight&&hasReps&&Number.isFinite(Number(st.weight))&&Number.isFinite(Number(st.reps))){volume+=Number(st.weight)*Number(st.reps);hasVolume=true;}}});
 }
 const el=$("sessionExtra");if(el)el.textContent=`${sets} séries concluídas · ${hasVolume?"volume registrado: "+Math.round(volume).toLocaleString("pt-BR")+" kg·reps":"volume será calculado quando as séries concluídas tiverem carga e repetições"}`;
}

function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function nutritionProgressRange(){
 const period=$('nutritionProgressPeriod')?.value||'30',today=dateKey();let end=period==='custom'?($('nutritionProgressEnd')?.value||today):today,start;
 if(period==='custom')start=$('nutritionProgressStart')?.value||end;else{const d=new Date(today+'T12:00:00');d.setDate(d.getDate()-(Math.max(1,Number(period)||30)-1));start=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
 if(start>end){const t=start;start=end;end=t;}
 const startDate=new Date(start+'T12:00:00'),endDate=new Date(end+'T12:00:00');
 if(!Number.isFinite(startDate.getTime())||!Number.isFinite(endDate.getTime()))return {start:today,end:today,dateList:[today],period};
 const span=Math.floor((endDate-startDate)/86400000)+1;
 // Keep the range identical across chart, indicators and exports; cap custom ranges at 366 days.
 if(span>366){startDate.setDate(startDate.getDate()+(span-366));start=`${startDate.getFullYear()}-${String(startDate.getMonth()+1).padStart(2,'0')}-${String(startDate.getDate()).padStart(2,'0')}`;if($('nutritionProgressStart')&&period==='custom')$('nutritionProgressStart').value=start;}
 const dateList=[];for(let d=new Date(start+'T12:00:00');d<=new Date(end+'T12:00:00');d.setDate(d.getDate()+1))dateList.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`);
 return {start,end,dateList,period};
}
function isValidNutritionEntry(e){
 if(!e||typeof e!=='object'||typeof e.date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(e.date))return false;
 return ['kcal','protein','carbs','fat'].some(key=>e[key]!==null&&e[key]!==undefined&&String(e[key]).trim()!==''&&Number.isFinite(Number(e[key]))&&Number(e[key])>=0);
}
function getNutritionDailyData(start,end){
 const entries=Array.isArray(state.foodEntries)?state.foodEntries:[],byDate=new Map();
 entries.filter(e=>isValidNutritionEntry(e)&&e.date>=start&&e.date<=end).forEach(e=>{
  if(!byDate.has(e.date))byDate.set(e.date,{date:e.date,items:0,k:0,p:0,c:0,f:0});
  const d=byDate.get(e.date);d.items++;
  const num=key=>e[key]!==null&&e[key]!==undefined&&String(e[key]).trim()!==''&&Number.isFinite(Number(e[key]))&&Number(e[key])>=0?Number(e[key]):0;
  d.k+=num('kcal');d.p+=num('protein');d.c+=num('carbs');d.f+=num('fat');
 });
 return [...byDate.values()].sort((a,b)=>a.date.localeCompare(b.date));
}

function renderNutritionOverview(){
 const date=getFoodDiaryDate(),dateInput=$('nutritionOverviewDate');if(dateInput&&dateInput.value!==date)dateInput.value=date;
 const entries=(Array.isArray(state.foodEntries)?state.foodEntries:[]).filter(e=>e.date===date),totals=foodEntryTotals(entries),targets=state.targets||{};
 const goal={k:Number(targets.kcal)||1900,p:Number(targets.protein)||130,c:Number(targets.carbs)||210,f:Number(targets.fat)||60};
 const consumed=$('nutritionOverviewKcal'),goalEl=$('nutritionOverviewKcalGoal'),bar=$('nutritionOverviewKcalBar'),note=$('nutritionOverviewKcalNote'),balance=$('nutritionOverviewKcalBalance');
 if(consumed)consumed.textContent=foodFmt(totals.k);if(goalEl)goalEl.textContent=foodFmt(goal.k);if(bar)bar.style.width=Math.min(100,goal.k>0?totals.k/goal.k*100:0)+'%';
 if(note)note.textContent=entries.length?entries.length+' registro(s) no dia selecionado.':'Sem registros neste dia. Isso não significa consumo zero.';
 if(balance){const diff=goal.k-totals.k;balance.textContent=diff>=0?foodFmt(diff)+' kcal restantes':foodFmt(Math.abs(diff))+' kcal acima da meta';}
 const macros=[{label:'Proteínas',key:'p',target:goal.p,color:'var(--lime)'},{label:'Carboidratos',key:'c',target:goal.c,color:'var(--orange)'},{label:'Gorduras',key:'f',target:goal.f,color:'var(--blue)'}],macroHost=$('nutritionOverviewMacros');
 if(macroHost)macroHost.innerHTML=macros.map(m=>{const value=totals[m.key],pct=m.target>0?Math.round(value/m.target*100):0,remaining=m.target-value;return '<div class="nutrition-overview-macro"><div class="nutrition-overview-macro-top"><span>'+m.label+'</span><strong>'+foodFmt(value,1)+' g</strong></div><div class="nutrition-overview-track"><i style="width:'+Math.min(100,pct)+'%;background:'+m.color+'"></i></div><small>Meta: '+foodFmt(m.target,1)+' g · '+(remaining>=0?'faltam '+foodFmt(remaining,1)+' g':foodFmt(Math.abs(remaining),1)+' g acima')+'</small></div>';}).join('');
 if(typeof renderNextMealRecommendation==='function')renderNextMealRecommendation(entries,totals);
 const source=$('nextMealRecommendation'),destination=$('nutritionOverviewNextMeal');if(destination)destination.innerHTML=source&&source.innerHTML?source.innerHTML:'<p class="food-note">Registre suas refeições para receber uma sugestão contextualizada.</p>';
 const mealHost=$('nutritionOverviewMeals');
 if(mealHost){if(!entries.length)mealHost.innerHTML='<div class="nutrition-overview-empty">Nenhuma refeição registrada neste dia.<br><span>Use os atalhos para adicionar alimentos ou uma refeição salva.</span></div>';else{
  const order=['Café da manhã','Lanche da manhã','Almoço','Lanche da tarde','Jantar','Ceia','Outro'],names=[...order,...Array.from(new Set(entries.map(e=>String(e.meal||'Outro').trim()||'Outro'))).filter(n=>!order.includes(n))];
  mealHost.innerHTML=names.map(name=>{const rows=entries.filter(e=>(String(e.meal||'Outro').trim()||'Outro')===name);if(!rows.length)return '';const t=foodEntryTotals(rows);return '<div class="nutrition-overview-meal-row"><div><strong>'+esc(name)+'</strong><small>'+rows.length+' item(ns)</small></div><div><strong>'+foodFmt(t.k)+' kcal</strong><small>P '+foodFmt(t.p,1)+' · C '+foodFmt(t.c,1)+' · G '+foodFmt(t.f,1)+' g</small></div></div>';}).join('');
 }}
 const schedule=state.nutritionSchedule&&Array.isArray(state.nutritionSchedule.meals)?state.nutritionSchedule.meals:[],planHost=$('nutritionOverviewPlanStatus');
 if(planHost)planHost.innerHTML='<div class="nutrition-overview-plan-copy nutrition-overview-schedule-copy"><h3>Cronograma alimentar</h3><p class="sub">Visualize suas refeições planejadas e os respectivos valores nutricionais.</p></div>'+(schedule.length?'<div class="nutrition-overview-meal-plan-grid">'+schedule.map((meal,index)=>{const t=typeof window.formaNutritionScheduleMealTotals==='function'?window.formaNutritionScheduleMealTotals(meal):{k:0,p:0,c:0,f:0};return '<div class="nutrition-overview-meal-plan-card"><strong>'+esc(String(meal.name||'Refeição '+(index+1)))+'</strong><span class="meal-plan-kcal">'+foodFmt(t.k)+' kcal</span><small class="meal-plan-macros">P '+foodFmt(t.p,1)+' g · C '+foodFmt(t.c,1)+' g · G '+foodFmt(t.f,1)+' g</small></div>';}).join('')+'</div>':'<div class="nutrition-overview-empty">Nenhum cronograma alimentar configurado.<br><span>Monte ou importe um planejamento para visualizar suas refeições aqui.</span></div>');
 const weekHost=$('nutritionOverviewWeek');
 if(weekHost){const anchor=new Date(date+'T12:00:00'),days=[];for(let i=6;i>=0;i--){const d=new Date(anchor);d.setDate(anchor.getDate()-i);const key=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'),count=(state.foodEntries||[]).filter(e=>e.date===key).length;days.push({date:d,count});}
  const active=days.filter(d=>d.count>0).length;weekHost.innerHTML='<div class="nutrition-overview-week-number"><strong>'+active+'<small>/7</small></strong><span>dias com registros</span></div><div class="nutrition-overview-week-dots">'+days.map(d=>'<span class="'+(d.count?'has-record':'')+'" title="'+d.date.toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'2-digit'})+': '+(d.count?d.count+' registro(s)':'sem registro')+'"></span>').join('')+'</div><p class="food-note">Dias sem registro permanecem como ausência de informação, não como zero consumo.</p>';
 }}

function renderNutritionProgress(){
 const host=$('progressNutritionView');if(!host)return;
 const periodEl=$('nutritionProgressPeriod'),startEl=$('nutritionProgressStart'),endEl=$('nutritionProgressEnd'),controls=$('nutritionProgressPeriod')?.closest('.nutrition-progress-controls');
 const today=dateKey();if(endEl&&!endEl.value)endEl.value=today;
 if(startEl&&!startEl.value){const d=new Date(today+'T12:00:00');d.setDate(d.getDate()-29);startEl.value=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
 const custom=periodEl?.value==='custom';controls?.classList.toggle('custom-period',!!custom);
 const range=nutritionProgressRange(),start=range.start,end=range.end,dateList=range.dateList;
 const recordedDaily=getNutritionDailyData(start,end),daily=dateList.map(date=>recordedDaily.find(d=>d.date===date)||{date,items:0,k:0,p:0,c:0,f:0});
 const recorded=daily.filter(d=>d.items>0),days=recorded.length,avg=key=>days?recorded.reduce((a,d)=>a+d[key],0)/days:0;
 const goals=state.targets||{},goalK=Number(goals.kcal)>0?Number(goals.kcal):null,goalP=Number(goals.protein)>0?Number(goals.protein):null,goalC=Number(goals.carbs)>0?Number(goals.carbs):null,goalF=Number(goals.fat)>0?Number(goals.fat):null;
 const fmt=(n,d=0)=>Number(n).toLocaleString('pt-BR',{maximumFractionDigits:d}),pct=(v,g)=>g?Math.round(v/g*100):null;
 const stat=(label,value,note)=>`<div class="nutrition-progress-stat"><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`;
 const stats=$('nutritionProgressStats');if(stats)stats.innerHTML=[stat('Média de calorias',days?fmt(avg('k'))+' kcal':'—',goalK?`Meta: ${fmt(goalK)} kcal/dia`:'Configure sua meta calórica'),stat('Proteína média',days?fmt(avg('p'),1)+' g':'—',goalP?`Meta: ${fmt(goalP)} g/dia`:'Configure sua meta de proteína'),stat('Carboidratos médios',days?fmt(avg('c'),1)+' g':'—',goalC?`Meta: ${fmt(goalC)} g/dia`:'Configure sua meta de carboidratos'),stat('Gorduras médias',days?fmt(avg('f'),1)+' g':'—',goalF?`Meta: ${fmt(goalF)} g/dia`:'Configure sua meta de gorduras')].join('');
 const notice=$('nutritionProgressNotice');if(notice)notice.textContent=`${formatDate(start)} a ${formatDate(end)} · ${days} de ${dateList.length} dias com registros alimentares. As médias consideram apenas dias com registros, não dias vazios.`;
 const kgLabel=$('nutritionKcalGoalLabel');if(kgLabel)kgLabel.textContent=goalK?`META ${fmt(goalK)} KCAL`:'META NÃO CONFIGURADA';
 const chart=$('nutritionKcalChart');if(chart){const visible=daily;chart.style.removeProperty('grid-template-columns');chart.style.setProperty('--nutrition-day-count',String(Math.max(visible.length,1)));chart.classList.toggle('nutrition-bars-long',visible.length>14);chart.classList.toggle('nutrition-bars-dense',visible.length>14);const max=Math.max(goalK||0,...visible.filter(d=>d.items).map(d=>d.k),1);chart.innerHTML=visible.map(d=>{const h=d.items?Math.max(3,Math.min(100,d.k/max*100)):0;const label=d.date.slice(8,10)+'/'+d.date.slice(5,7);return `<div class="nutrition-bar-day ${d.items?'':'no-data'}" title="${formatDate(d.date)}: ${d.items?fmt(d.k)+' kcal':'sem registro'}"><strong>${d.items?fmt(d.k):'—'}</strong><div class="nutrition-bar-track"><i class="nutrition-bar-fill" style="height:${h}%;opacity:.9"></i></div><small>${label}</small></div>`;}).join('');}
 const kcalSummary=$('nutritionKcalSummary');if(kcalSummary)kcalSummary.innerHTML=days?`Média nos dias registrados: <strong>${fmt(avg('k'))} kcal/dia</strong>${goalK?` · ${avg('k')>goalK?fmt(avg('k')-goalK):fmt(goalK-avg('k'))} kcal ${avg('k')>goalK?'acima':'abaixo'} da meta em média.`:''}<div class="progress-section-note">Barras sem registro não significam consumo zero.</div>`:'Ainda não há registros alimentares neste período.';
 const macroHost=$('nutritionMacroStats');if(macroHost){const macros=[['Proteínas','p',goalP],['Carboidratos','c',goalC],['Gorduras','f',goalF]];macroHost.innerHTML=macros.map(([label,key,goal])=>{const value=avg(key),progress=goal?Math.min(100,value/goal*100):0;return `<div class="nutrition-macro-item"><span>${label}</span><strong>${days?fmt(value,1)+' g':'—'}</strong><small>${goal?`${pct(value,goal)}% da meta de ${fmt(goal)} g`:'Meta não configurada'}</small><div class="nutrition-macro-track"><i style="width:${progress}%"></i></div></div>`;}).join('');}
 const macroChart=$('nutritionMacroChart');if(macroChart){const kcalP=avg('p')*4,kcalC=avg('c')*4,kcalF=avg('f')*9,total=kcalP+kcalC+kcalF;macroChart.innerHTML=total>0?`<div class="nutrition-macro-track" style="height:12px;display:flex"><i style="width:${kcalP/total*100}%;background:var(--accent);border-radius:0"></i><i style="width:${kcalC/total*100}%;background:#82b7ff;border-radius:0"></i><i style="width:${kcalF/total*100}%;background:#ffbd75;border-radius:0"></i></div><div class="chart-legend"><span><i style="background:var(--accent)"></i>Proteína ${Math.round(kcalP/total*100)}%</span><span><i style="background:#82b7ff"></i>Carboidratos ${Math.round(kcalC/total*100)}%</span><span><i style="background:#ffbd75"></i>Gorduras ${Math.round(kcalF/total*100)}%</span></div><div class="progress-section-note">Distribuição estimada a partir dos macros registrados (4 kcal/g para proteínas e carboidratos; 9 kcal/g para gorduras).</div>`:'A distribuição aparecerá quando houver macros registrados.';}
 const consistency=$('nutritionConsistency');if(consistency){const within=goalK?recorded.filter(d=>d.k>=goalK*.9&&d.k<=goalK*1.1).length:null,proteinDays=goalP?recorded.filter(d=>d.p>=goalP).length:null;consistency.innerHTML=`<div class="nutrition-consistency-item"><strong>${days}/${dateList.length}</strong><span>Dias com registro alimentar</span></div><div class="nutrition-consistency-item"><strong>${proteinDays===null?'—':proteinDays+'/'+days}</strong><span>${goalP?'Dias registrados que atingiram a meta de proteína':'Configure a meta de proteína'}</span></div><div class="nutrition-consistency-item"><strong>${within===null?'—':within+'/'+days}</strong><span>${goalK?'Dias registrados entre 90% e 110% da meta calórica':'Configure a meta calórica'}</span></div>`;}
 const insights=[];if(!days)insights.push(['info','Comece pelo diário','Ainda não há registros alimentares suficientes neste período. Registre suas refeições para acompanhar médias e tendências.']);else{if(days<Math.min(4,dateList.length))insights.push(['info','Poucos dias registrados',`Há registros em ${days} dia(s). As médias podem não representar toda a sua alimentação; tente registrar com mais regularidade.`]);if(goalK){const delta=avg('k')-goalK;if(Math.abs(delta)>goalK*.1)insights.push(['attention','Consumo calórico versus meta',`A média dos dias registrados ficou ${fmt(Math.abs(delta))} kcal ${delta>0?'acima':'abaixo'} da meta. Considere contexto, fome, treino e qualidade dos registros antes de mudar o plano.`]);else insights.push(['good','Calorias próximas da meta','A média dos dias registrados está dentro de aproximadamente 10% da meta configurada.']);}if(goalP){const n=recorded.filter(d=>d.p>=goalP).length;if(n<days)insights.push(['attention','Meta de proteína',`A meta foi atingida em ${n} de ${days} dia(s) com registro. Confira se todos os alimentos e quantidades foram registrados.`]);else insights.push(['good','Meta de proteína atingida','A meta foi atingida em todos os dias com registros deste período.']);}}
 const insightHost=$('nutritionInsights');if(insightHost)insightHost.innerHTML=insights.map(([type,title,body])=>`<div class="nutrition-insight ${type}"><strong>${title}</strong>${body}</div>`).join('');
 renderNutritionExtended();
}
function nutritionReportData(){
 const range=nutritionProgressRange(),start=range.start,end=range.end;
 const recorded=getNutritionDailyData(start,end);const avg=k=>recorded.length?recorded.reduce((a,d)=>a+d[k],0)/recorded.length:null;
 const weight=(state.progress||[]).filter(x=>x&&x.date>=start&&x.date<=end&&Number.isFinite(Number(x.weight))).sort((a,b)=>a.date.localeCompare(b.date));
 const body=(state.bioimpedance||[]).filter(x=>x&&x.date>=start&&x.date<=end).sort((a,b)=>String(a.date).localeCompare(String(b.date)));
 const micronutrients={};(state.foodEntries||[]).filter(e=>isValidNutritionEntry(e)&&e.date>=start&&e.date<=end).forEach(e=>{const snap=e.foodSnapshot||FOOD_DB[e.foodKey]||state.customFoods?.[e.foodKey]||{},base=Number(snap.basisAmount)||100,amount=Number(e.amount),micros=snap.micronutrients||snap.micros||{};if(!Number.isFinite(amount)||base<=0)return;Object.entries(micros).forEach(([key,raw])=>{let value,unit='';if(typeof raw==='number')value=raw;else if(raw&&typeof raw==='object'){value=Number(raw.value??raw.amount??raw.valor);unit=String(raw.unit??raw.unidade??'');}else return;if(!Number.isFinite(value)||value<0)return;const id=key.toLocaleLowerCase('pt-BR');if(!micronutrients[id])micronutrients[id]={name:key,total:0,unit};if(unit&&micronutrients[id].unit&&unit!==micronutrients[id].unit)return;micronutrients[id].total+=value*amount/base;});});const weightHistory=weight.map(x=>({date:x.date,weight_kg:Number(x.weight),waist_cm:x.waist!==null&&x.waist!==undefined&&x.waist!==''&&Number.isFinite(Number(x.waist))?Number(x.waist):null}));const bodyComposition=body.map(x=>({date:x.date,bodyFatPercent:x.fat!==null&&x.fat!==undefined&&x.fat!==''&&Number.isFinite(Number(x.fat))?Number(x.fat):null,muscleMassKg:x.muscle!==null&&x.muscle!==undefined&&x.muscle!==''&&Number.isFinite(Number(x.muscle))?Number(x.muscle):null,bodyWaterPercent:x.water!==null&&x.water!==undefined&&x.water!==''&&Number.isFinite(Number(x.water))?Number(x.water):null,fileName:x.fileName||'',notes:x.notes||''}));return {app:'FORMA',report:'Progresso da alimentação',generatedAt:new Date().toISOString(),period:{start,end},recordedDays:recorded.length,daily:recorded,averages:{kcal:avg('k'),protein_g:avg('p'),carbohydrates_g:avg('c'),fat_g:avg('f')},targets:{...(state.targets||{})},micronutrients:Object.values(micronutrients),weightHistory,bodyComposition,notes:['Médias consideram apenas dias com registros alimentares válidos.','Ausência de registro não significa consumo zero.','A tela e os relatórios usam os mesmos critérios de validação e período.','Micronutrientes só são somados quando existem valores e unidades cadastrados.']};
}
function renderNutritionExtended(){
 const range=nutritionProgressRange(),start=range.start,end=range.end;
 const microTotals={},microSources=new Set();let microEntries=0;
 (state.foodEntries||[]).filter(e=>isValidNutritionEntry(e)&&e.date>=start&&e.date<=end).forEach(e=>{const snap=e.foodSnapshot||FOOD_DB[e.foodKey]||state.customFoods?.[e.foodKey]||{};const micros=snap.micronutrients||snap.micros||{};const basis=Number(snap.basisAmount)||100,amount=Number(e.amount);if(!Number.isFinite(amount)||basis<=0)return;let any=false;Object.entries(micros).forEach(([key,raw])=>{let value,unit='';if(typeof raw==='number'){value=raw;}else if(raw&&typeof raw==='object'){value=Number(raw.value??raw.amount??raw.valor);unit=String(raw.unit??raw.unidade??'');}else return;if(!Number.isFinite(value)||value<0)return;const factor=amount/basis;const id=key.toLocaleLowerCase('pt-BR');if(!microTotals[id])microTotals[id]={name:key,unit,count:0,total:0};if(unit&&microTotals[id].unit&&unit!==microTotals[id].unit)return;if(unit)microTotals[id].unit=unit;microTotals[id].total+=value*factor;microTotals[id].count++;any=true;});if(any){microEntries++;if(snap.source)microSources.add(snap.source);}});
 const microHost=$('nutritionMicronutrients'),microStatus=$('nutritionMicroStatus');if(microHost){const vals=Object.values(microTotals).sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));microHost.innerHTML=vals.length?vals.map(m=>`<div class="nutrition-micro-item"><span>${esc(m.name)}</span><strong>${m.total.toLocaleString('pt-BR',{maximumFractionDigits:2})} ${esc(m.unit)}</strong><small>Somatório dos alimentos com dados disponíveis</small></div>`).join(''):'<div class="progress-section-note">Não há dados de micronutrientes disponíveis para os alimentos registrados neste período. Importe ou cadastre alimentos com micronutrientes e unidades explícitas para habilitar este acompanhamento.</div>';if(microStatus)microStatus.textContent=vals.length?`${vals.length} NUTRIENTES`:'SEM DADOS';}
 const microNote=$('nutritionMicroNote');if(microNote&&Object.keys(microTotals).length)microNote.textContent=`Valores somados de ${microEntries} registro(s) alimentar(es) com micronutrientes disponíveis. Fontes encontradas: ${[...microSources].slice(0,3).join('; ')||'não informadas'}. Não são comparados a recomendações diárias, pois estas variam conforme idade, sexo e contexto individual.`;
 const comps=(state.bioimpedance||[]).filter(x=>x&&x.date>=start&&x.date<=end).sort((a,b)=>String(a.date).localeCompare(String(b.date)));const compHost=$('nutritionBodyCompSummary'),compHistory=$('nutritionBodyCompHistory'),compStatus=$('nutritionBodyCompStatus');
 if(compHost){const latest=comps.at(-1);const metrics=[['Gordura corporal',latest?.fat,'%'],['Massa muscular',latest?.muscle,'kg'],['Água corporal',latest?.water,'%']];compHost.innerHTML=latest?metrics.map(([label,val,unit])=>`<div class="nutrition-micro-item"><span>${label}</span><strong>${val!==null&&val!==undefined&&val!==''&&Number.isFinite(Number(val))?Number(val).toLocaleString('pt-BR',{maximumFractionDigits:1})+' '+unit:'—'}</strong><small>Última medição · ${formatDate(latest.date)}</small></div>`).join(''):'<div class="progress-section-note">Nenhum registro de composição corporal neste período. Importe um laudo de bioimpedância na Visão geral.</div>';}
 if(compHistory)compHistory.innerHTML=comps.length?comps.slice().reverse().map(x=>`<div class="history-row"><b>${formatDate(x.date)}</b><span>Gordura: ${x.fat!=null&&x.fat!==''?esc(String(x.fat))+'%':'—'}</span><span>Músculo: ${x.muscle!=null&&x.muscle!==''?esc(String(x.muscle))+' kg':'—'}</span><span>Água: ${x.water!=null&&x.water!==''?esc(String(x.water))+'%':'—'}</span></div>`).join(''):'<p class="muted" style="font-size:12px">Os registros de composição corporal aparecerão aqui.</p>';
 if(compStatus)compStatus.textContent=comps.length?`${comps.length} REGISTRO(S)`:'SEM DADOS';
}
function downloadNutritionReport(kind){const report=nutritionReportData();let content,type,ext;if(kind==='json'){content=JSON.stringify(report,null,2);type='application/json;charset=utf-8';ext='json';}else{const rows=[['Campo','Valor'],['Relatório',report.report],['Gerado em',report.generatedAt],['Início',report.period.start],['Fim',report.period.end],['Dias com registros',report.recordedDays],['Média kcal/dia',report.averages.kcal??''],['Média proteína g/dia',report.averages.protein_g??''],['Média carboidratos g/dia',report.averages.carbohydrates_g??''],['Média gorduras g/dia',report.averages.fat_g??''],['Meta kcal',report.targets.kcal??''],['Meta proteína g',report.targets.protein??''],['Meta carboidratos g',report.targets.carbs??''],['Meta gorduras g',report.targets.fat??''],...report.daily.map(d=>[`Dia ${d.date}`,`kcal=${d.k}; proteína=${d.p}g; carboidratos=${d.c}g; gorduras=${d.f}g; registros=${d.items}`]),...report.weightHistory.map(w=>[`Peso ${w.date}`,`${w.weight_kg} kg${w.waist_cm?'; cintura '+w.waist_cm+' cm':''}`]),...report.bodyComposition.map(b=>[`Composição ${b.date}`,`gordura=${b.bodyFatPercent??'—'}%; músculo=${b.muscleMassKg??'—'} kg; água=${b.bodyWaterPercent??'—'}%`]),...report.micronutrients.map(m=>[`Micronutriente ${m.name}`,`${m.total} ${m.unit}`]),...report.notes.map((n,i)=>[`Nota ${i+1}`,n])];const csvCell=v=>`"${String(v??'').replace(/"/g,'""')}"`;content='\ufeff'+rows.map(r=>r.map(csvCell).join(';')).join('\r\n');type='text/csv;charset=utf-8';ext='csv';}
 const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`forma-relatorio-alimentacao-${report.period.start}-${report.period.end}.${ext}`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);const status=$('nutritionReportStatus');if(status)status.textContent=`Relatório ${ext.toUpperCase()} preparado para ${report.period.start} a ${report.period.end}. Inclui apenas dados disponíveis no perfil ativo.`;
}
function printNutritionReport(){if(typeof window.exportPdf==="function")return window.exportPdf("report");const status=$("nutritionReportStatus");if(status){status.hidden=false;status.classList.add("error");status.textContent="O gerador de PDF não está disponível. Atualize o FORMA e tente novamente.";}return false;}
let trainingProgressPeriod=30,trainingProgressMetric="volume";
function trainingProgressData(allHistory=false){
 const now=new Date();now.setHours(0,0,0,0);
 const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
 const end=iso(now),startDate=new Date(now);startDate.setDate(startDate.getDate()-Number(trainingProgressPeriod)+1);const start=iso(startDate);
 const rows=[],seen=new Set();
 Object.entries(state.logs||{}).forEach(([key,log])=>{
  if(!log||!Array.isArray(log.sets))return;
  log.sets.forEach((st,index)=>{
   if(!st||!st.completed||!st.savedAt)return;
   const date=typeof st.date==="string"?st.date:(log.date||(key.match(/\d{4}-\d{2}-\d{2}/)||[])[0]||"");
   if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||date>end||(!allHistory&&date<start))return;
   const weight=Number(st.weight),reps=Number(st.reps);
   if(!Number.isFinite(weight)||weight<0||!Number.isFinite(reps)||reps<=0)return;
   const sessionId=String(st.sessionId||log.sessionId||("legacy-"+date+"-"+(log.sessionDayIndex??"x")));
   const exercise=String(st.exerciseName||log.exerciseName||"Exercício").trim()||"Exercício";
   const dedupe=`${sessionId}|${key}|${index}|${date}`;if(seen.has(dedupe))return;seen.add(dedupe);
   rows.push({date,sessionId,exercise,weight,reps,volume:weight>0?weight*reps:0});
  });
 });
 const byDate={};rows.forEach(r=>(byDate[r.date]||(byDate[r.date]=[])).push(r));
 const sessions=Array.isArray(state.sessionHistory)?state.sessionHistory.filter(s=>{const date=sessionDateOf(s);return s&&s.id&&s.finishedAt&&date>=start&&date<=end;}):[];
 const sessionIds=new Set(sessions.map(s=>String(s.id)));
 // When finished-session metadata is available, count only completed sessions. Fall back to
 // unique session IDs from completed sets for older records without a sessionHistory entry.
 const fallbackIds=new Set(rows.map(r=>r.sessionId));
 const sessionCount=new Set([...sessionIds,...fallbackIds]).size;
 const durations=sessions.map(s=>s.startedAt?Math.max(0,(new Date(s.finishedAt)-new Date(s.startedAt))/60000):null).filter(v=>v!==null&&Number.isFinite(v));
 const exerciseCount=new Set(rows.map(r=>r.exercise)).size;
 const dates=Object.keys(byDate).sort();
 const points=dates.map(date=>{const day=byDate[date];return {date,volume:day.reduce((sum,r)=>sum+r.volume,0),load:day.length?day.reduce((sum,r)=>sum+r.weight,0)/day.length:null,reps:day.reduce((sum,r)=>sum+r.reps,0),sets:day.length};});
 return {start,end,rows,byDate,points,sessionCount,duration:durations.length?durations.reduce((a,b)=>a+b,0):null,exerciseCount};
}
function trainingBucket(date,scale){
 const [year,month,day]=date.split('-').map(Number);
 const d=new Date(year,month-1,day);d.setHours(0,0,0,0);
 if(scale==='year')return {key:String(year),date:`${year}-01-01`,label:String(year),shortLabel:String(year)};
 if(scale==='month')return {key:`${year}-${String(month).padStart(2,'0')}`,date:`${year}-${String(month).padStart(2,'0')}-01`,label:d.toLocaleDateString('pt-BR',{month:'long',year:'numeric'}),shortLabel:d.toLocaleDateString('pt-BR',{month:'short',year:'2-digit'}).replace('.','')};
 const weekday=(d.getDay()+6)%7;d.setDate(d.getDate()-weekday);
 const iso=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
 return {key:iso,date:iso,label:`Semana de ${d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'})}`,shortLabel:d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})};
}
function aggregateTrainingHistory(rows,scale){
 const buckets=new Map();
 rows.forEach(r=>{
  const b=trainingBucket(r.date,scale);let item=buckets.get(b.key);
  if(!item){item={...b,volume:0,volumeCount:0,reps:0,loadTotal:0,loadCount:0,sets:0};buckets.set(b.key,item);}
  if(r.weight>0){item.volume+=r.volume;item.volumeCount++;}item.reps+=r.reps;item.loadTotal+=r.weight;item.loadCount++;item.sets++;
 });
 return [...buckets.values()].sort((a,b)=>a.date.localeCompare(b.date)).map(b=>({...b,volume:b.volumeCount?b.volume:null,load:b.loadCount?b.loadTotal/b.loadCount:null}));
}
function renderTrainingOverview(){
 const stats=$("trainingOverviewStats"),summary=$("trainingPerformanceSummary"),chart=$("trainingPerformanceChart"),note=$("trainingPerformanceNote");if(!stats||!chart)return;
 const d=trainingProgressData(),all=trainingProgressData(true),fmt=n=>Number(n).toLocaleString("pt-BR",{maximumFractionDigits:1}),fmtInt=n=>Math.round(n).toLocaleString("pt-BR");
 const hasRows=d.rows.length>0,volume=d.rows.reduce((sum,r)=>sum+r.volume,0),duration=d.duration;
 stats.innerHTML=[
  ["Treinos realizados",d.sessionCount, d.sessionCount===1?"sessão concluída":"sessões concluídas"],
  ["Tempo de treino",duration===null?"—":fmtInt(duration)+" min",duration===null?"Duração indisponível nos registros":"Soma das durações disponíveis"],
  ["Volume movimentado",hasRows&&volume>0?fmtInt(volume)+" kg·reps":(hasRows?"0 kg·reps":"—"),hasRows?"Séries concluídas com carga e repetições válidas":"Sem séries válidas no período"],
  ["Exercícios registrados",hasRows?d.exerciseCount:"—",hasRows?"Exercícios distintos com séries concluídas":"Sem registros suficientes"]
 ].map(([label,value,detail])=>`<div class="training-overview-stat"><span>${label}</span><strong>${value}</strong><small>${detail}</small></div>`).join("");
 const metric=$("trainingProgressMetric"),scaleSelect=$("trainingProgressScale");
 if(metric)trainingProgressMetric=["volume","load","reps"].includes(metric.value)?metric.value:trainingProgressMetric;
 const scale=["week","month","year"].includes(scaleSelect?.value)?scaleSelect.value:"week";
 const key=trainingProgressMetric,metricLabel={volume:"Volume movimentado",load:"Carga média por série",reps:"Repetições concluídas"},metricUnit={volume:"kg·reps",load:"kg",reps:"repetições"};
 const grouped=aggregateTrainingHistory(all.rows,scale),values=grouped.map(p=>({date:p.date,label:p.label,shortLabel:p.shortLabel,value:p[key],sets:p.sets})).filter(p=>Number.isFinite(p.value));
 const scaleLabel={week:"semanal",month:"mensal",year:"anual"}[scale];
 if(summary){if(values.length){const first=values[0],last=values[values.length-1];summary.textContent=`Histórico: ${first.label} – ${last.label} · ${values.length} período(s) com registros · ${metricLabel[key]} (${metricUnit[key]}) · visão ${scaleLabel}.`;}else summary.textContent="Ainda não há séries concluídas suficientes para mostrar a evolução.";}
 if(note)note.textContent=key==="load"?"Carga média por série concluída em cada período. Como exercícios diferentes têm cargas incomparáveis entre si, este indicador descreve o treino e não mede diretamente força. Períodos sem registros ficam ausentes, não são tratados como zero.":key==="volume"?"Volume calculado pela soma de carga × repetições de séries concluídas, por período. Séries sem carga externa válida não contribuem para o volume. Períodos sem registros ficam ausentes, não são tratados como zero.":"Soma das repetições registradas em séries concluídas por período. Períodos sem registros ficam ausentes, não são tratados como zero.";
 if(!values.length){chart.innerHTML='<text x="300" y="118" text-anchor="middle">Sem histórico suficiente para mostrar a evolução</text>';return;}
 const vals=values.map(p=>p.value),min=Math.min(0,...vals),max=Math.max(...vals),range=Math.max(1,max-min),left=48,right=580,top=35,bottom=190;
 const times=values.map(p=>new Date(p.date+'T12:00:00').getTime()),firstTime=times[0],lastTime=times[times.length-1],span=Math.max(1,lastTime-firstTime);
 const pts=values.map((p,i)=>({x:left+(values.length===1?(right-left)/2:(times[i]-firstTime)/span*(right-left)),y:bottom-(p.value-min)/range*(bottom-top),...p}));
 let svg="";for(let i=0;i<4;i++){const y=top+i*(bottom-top)/3,v=max-i*(max-min)/3;svg+=`<line class="training-chart-grid" x1="${left}" y1="${y}" x2="${right}" y2="${y}"/><text x="${left-8}" y="${y+3}" text-anchor="end">${fmt(v)}</text>`;}
 if(pts.length>1)svg+=`<polyline class="training-chart-line" points="${pts.map(p=>p.x+","+p.y).join(" ")}"/>`;
 const maxLabels=6,labelIndexes=new Set([0,pts.length-1]);if(pts.length<=maxLabels)pts.forEach((_,i)=>labelIndexes.add(i));else for(let i=1;i<maxLabels-1;i++)labelIndexes.add(Math.round(i*(pts.length-1)/(maxLabels-1)));
 pts.forEach((p,i)=>{svg+=`<circle class="training-chart-dot" cx="${p.x}" cy="${p.y}" r="${pts.length>45?2.5:4}"/><title>${p.label}: ${fmt(p.value)} ${metricUnit[key]} · ${p.sets} série(s)</title>`;if(pts.length<=8)svg+=`<text class="training-chart-value" x="${p.x}" y="${Math.max(18,p.y-10)}" text-anchor="middle">${fmt(p.value)}</text>`;if(labelIndexes.has(i))svg+=`<text x="${p.x}" y="213" text-anchor="${i===0?'start':i===pts.length-1?'end':'middle'}">${p.shortLabel}</text>`;});
 chart.innerHTML=svg;
}
function initTrainingProgressControls(){
 const period=$("trainingProgressPeriod"),metric=$("trainingProgressMetric"),scale=$("trainingProgressScale");
 if(period){period.value=String(trainingProgressPeriod);period.onchange=()=>{trainingProgressPeriod=[7,30,90].includes(Number(period.value))?Number(period.value):30;renderTrainingOverview();};}
 if(metric){metric.value=trainingProgressMetric;metric.onchange=()=>{trainingProgressMetric=["volume","load","reps"].includes(metric.value)?metric.value:"volume";renderTrainingOverview();};}
 if(scale){scale.value=["week","month","year"].includes(scale.value)?scale.value:"week";scale.onchange=()=>renderTrainingOverview();}
}
function setProgressMode(mode){const nutrition=mode==='alimentacao',body=mode==='corpo',cardio=mode==='cardio',training=!nutrition&&!body&&!cardio;$('progressTrainingView').hidden=!training;$('progressCardioView').hidden=!cardio;$('progressNutritionView').hidden=!nutrition;$('progressBodyView').hidden=!body;[['progressTrainingTab',training],['progressCardioTab',cardio],['progressNutritionTab',nutrition],['progressBodyTab',body]].forEach(([id,on])=>{const el=$(id);el.classList.toggle('active',on);el.setAttribute('aria-selected',String(on));});if(nutrition)renderNutritionProgress();if(body)renderProgress();if(cardio&&typeof renderCardioProgress==='function')renderCardioProgress();}
initTrainingProgressControls();renderTrainingOverview();
$('progressTrainingTab')?.addEventListener('click',()=>setProgressMode('treinos'));$('progressCardioTab')?.addEventListener('click',()=>setProgressMode('cardio'));$('progressNutritionTab')?.addEventListener('click',()=>setProgressMode('alimentacao'));$('progressBodyTab')?.addEventListener('click',()=>setProgressMode('corpo'));['nutritionProgressPeriod','nutritionProgressStart','nutritionProgressEnd'].forEach(id=>$(id)?.addEventListener('change',renderNutritionProgress));
function renderProgress(){
 renderTrainingOverview();
 const dateInput=$("dateInput");if(dateInput&&!dateInput.value)dateInput.value=dateKey();
 const entries=[...(state.progress||[])].filter(p=>p&&p.date&&Number.isFinite(Number(p.weight))).sort((a,b)=>a.date.localeCompare(b.date));
 const latest=entries.at(-1)||null,first=entries[0]||null,goal=Number(state.goalWeight)||null;
 const weightDelta=latest&&first?Number(latest.weight)-Number(first.weight):null;
 const remaining=latest&&goal!==null?Number(latest.weight)-goal:null;
 const waistEntries=entries.filter(p=>Number.isFinite(Number(p.waist))&&Number(p.waist)>0),lastWaist=waistEntries.at(-1)||null,firstWaist=waistEntries[0]||null;
 const waistDelta=lastWaist&&firstWaist?Number(lastWaist.waist)-Number(firstWaist.waist):null;
 const now=new Date();now.setHours(0,0,0,0);const cutoff=new Date(now);cutoff.setDate(cutoff.getDate()-6);const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;const cutoffISO=iso(cutoff),todayISO=iso(now);
 const trainingDates=new Set();Object.entries(state.logs||{}).forEach(([key,log])=>{if(!log||typeof log!=='object')return;const sets=Array.isArray(log.sets)?log.sets:[];if(!sets.some(st=>st&&st.completed))return;const d=log.date||(sets.find(st=>st&&st.date)?.date)||((key.match(/\d{4}-\d{2}-\d{2}/)||[])[0]);if(d&&d>=cutoffISO&&d<=todayISO)trainingDates.add(d);});
 const history=$("progressHistory");if(history){history.innerHTML=entries.length?entries.slice().reverse().map(p=>`<div class="history-row"><b>${formatDate(p.date)}</b><span>${Number(p.weight).toLocaleString('pt-BR',{maximumFractionDigits:1})} kg</span><span>${p.waist?Number(p.waist).toLocaleString('pt-BR',{maximumFractionDigits:1})+' cm':'—'}</span><div class="progress-history-actions"><button class="mini-btn" type="button" data-edit-progress="${esc(p.id)}" aria-label="Editar registro de ${formatDate(p.date)}">Editar</button><button class="mini-btn" type="button" data-delete-progress="${esc(p.id)}" aria-label="Excluir registro de ${formatDate(p.date)}">Excluir</button></div></div>`).join(''):'<p class="muted" style="font-size:12px">Ainda não há registros. Faça um check-in para começar a acompanhar sua tendência.</p>';}
 document.querySelectorAll('[data-delete-progress]').forEach(b=>b.onclick=()=>{if(!confirm('Excluir este registro de peso e cintura?'))return;state.progress=state.progress.filter(p=>String(p.id)!==b.dataset.deleteProgress);if(progressEditingId===b.dataset.deleteProgress)cancelProgressEdit();save();renderProgress();updateDashboard();});
 document.querySelectorAll('[data-edit-progress]').forEach(b=>b.onclick=()=>{const p=state.progress.find(x=>String(x.id)===b.dataset.editProgress);if(!p)return;progressEditingId=String(p.id);$('weightInput').value=p.weight;$('waistInput').value=p.waist||'';$('dateInput').value=p.date;$('progressFormTitle').textContent='Editar registro';$('saveProgressBtn').textContent='Salvar alterações';$('cancelProgressEdit').hidden=false;$('progressCheckinCard').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});$('weightInput').focus({preventScroll:true});});
 const svg=$("weightChart"),summary=$("weightTrendSummary"),pill=$("weightTrendPill");
 if(!entries.length){if(svg)svg.innerHTML='<text x="300" y="105" text-anchor="middle">Seus registros aparecerão aqui</text>';if(summary)summary.textContent='Registre o peso semanalmente, em condições semelhantes. Com pelo menos três registros, a tendência fica mais informativa.';if(pill)pill.textContent='SEM DADOS';}
 else{const vals=entries.map(p=>Number(p.weight));const min=Math.min(...vals)-0.8,max=Math.max(...vals)+0.8,range=Math.max(1,max-min);const pts=vals.map((v,i)=>({x:40+(entries.length===1?260:i/(entries.length-1)*520),y:175-(v-min)/range*135,v,date:entries[i].date}));const smooth=vals.map((_,i)=>{const slice=vals.slice(Math.max(0,i-2),i+1);return slice.reduce((a,b)=>a+b,0)/slice.length});const trendPts=smooth.map((v,i)=>({x:pts[i].x,y:175-(v-min)/range*135,v}));let markup='<line x1="35" y1="175" x2="570" y2="175" stroke="#34465c"/><line x1="35" y1="40" x2="570" y2="40" stroke="#263750" stroke-dasharray="3 5"/>';markup+=`<polyline points="${pts.map(p=>p.x+','+p.y).join(' ')}" fill="none" stroke="var(--accent)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;if(entries.length>=3)markup+=`<polyline points="${trendPts.map(p=>p.x+','+p.y).join(' ')}" fill="none" stroke="#82b7ff" stroke-width="2.6" stroke-dasharray="6 5" stroke-linecap="round"/>`;pts.forEach((p,i)=>{markup+=`<circle cx="${p.x}" cy="${p.y}" r="4" fill="var(--accent)"/><text x="${p.x}" y="${p.y-10}" text-anchor="middle">${p.v.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text><text x="${p.x}" y="198" text-anchor="middle">${formatShort(p.date)}</text>`});markup+=`<text x="7" y="43">${max.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text><text x="7" y="178">${min.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text>`;svg.innerHTML=markup;if(summary)summary.innerHTML=`${entries.length} registro(s) · ${first&&latest?`variação desde o primeiro: <strong>${weightDelta>0?'+':''}${weightDelta.toLocaleString('pt-BR',{maximumFractionDigits:1})} kg</strong>`:'Registre novamente para comparar.'}${lastWaist?` · última cintura: <strong>${Number(lastWaist.waist).toLocaleString('pt-BR',{maximumFractionDigits:1})} cm</strong>${waistDelta===null?'':` (${waistDelta>0?'+':''}${waistDelta.toLocaleString('pt-BR',{maximumFractionDigits:1})} cm desde o primeiro registro de cintura)`}`:''}<div class="chart-legend"><span><i></i>Peso registrado</span>${entries.length>=3?'<span><i style="background:#82b7ff"></i>Tendência média dos últimos 3 registros</span>':''}</div>`;if(pill)pill.textContent=entries.length>=3?'TENDÊNCIA DISPONÍVEL':entries.length+' REGISTRO(S)';}
 renderBodyOverview();renderWaistTrend();renderBodyComposition();renderExerciseProgress();renderRecentSessions();renderNutritionProgress();renderWorkoutCyclePanel();
}
function renderRecentSessions(){
 const host=$("progressSessionHistory"),count=$("sessionHistoryCount");if(!host)return;
 const rows=(Array.isArray(state.sessionHistory)?state.sessionHistory:[]).filter(x=>x&&x.id&&x.finishedAt).sort((a,b)=>sessionDateOf(b).localeCompare(sessionDateOf(a))||String(b.finishedAt).localeCompare(String(a.finishedAt)));
 if(count)count.textContent=`${rows.length} ${rows.length===1?"SESSÃO":"SESSÕES"}`;
 if(!rows.length){host.innerHTML='<p class="muted" style="font-size:12px">Ainda não há sessões finalizadas com identificador próprio. Finalize um treino para começar este histórico.</p>';return;}
 host.innerHTML=rows.map(r=>{
  const date=sessionDateOf(r),duration=r.startedAt?Math.max(0,Math.round((new Date(r.finishedAt)-new Date(r.startedAt))/60000)):null;
  const snapshot=Array.isArray(r.exerciseSnapshot)?r.exerciseSnapshot:[];
  const detail=snapshot.map((ex,index)=>{
   const log=state.logs?.[`${r.id}-${index}`],sets=Array.isArray(log?.sets)?log.sets:[];
   const rowsHtml=sets.filter(st=>st&&st.savedAt).map((st,si)=>`<div class="history-row"><b>Série ${si+1}</b><span>${Number(st.weight)||0} kg × ${Number(st.reps)||0} reps</span><span>${st.completed?'<span class="record-badge">Concluída</span>':'Salva'}</span></div>`).join("");
   const exerciseName=String(ex.name||"Exercício"),focus=getExerciseFocus(exerciseName,typeof window.inferExercise==="function"?window.inferExercise(exerciseName):null),plannedName=String(ex.plannedName||""),wasReplaced=plannedName&&normalizeProgressionExercise(plannedName)!==normalizeProgressionExercise(exerciseName);return `<div class="session-detail-exercise"><strong>${esc(exerciseName)}</strong>${wasReplaced?`<p class="exercise-focus">Substituiu: ${esc(plannedName)} · nesta sessão</p>`:""}<p class="exercise-focus">Foco: ${esc(focus)}</p>${rowsHtml||'<p class="muted" style="font-size:12px">Detalhes das séries indisponíveis para este exercício.</p>'}</div>`;
  }).join("");
  const editExercises=snapshot.map((ex,index)=>{const log=state.logs?.[`${r.id}-${index}`]||{},sets=Array.isArray(log.sets)?log.sets:[];const editRows=Array.from({length:sets.length},(_,setIndex)=>{const st=sets[setIndex];if(!st)return '';return `<div class="session-edit-set"><span>Série ${setIndex+1}</span><label>Carga (kg)<input type="number" min="0" step="0.1" data-session-edit-weight="${esc(r.id)}-${index}-${setIndex}" value="${st.weight===null||st.weight===undefined?'':esc(String(st.weight))}"></label><label>Repetições<input type="number" min="1" step="1" data-session-edit-reps="${esc(r.id)}-${index}-${setIndex}" value="${st.reps===null||st.reps===undefined?'':esc(String(st.reps))}"></label><label class="session-edit-check"><input type="checkbox" data-session-edit-completed="${esc(r.id)}-${index}-${setIndex}" ${st.completed?'checked':''}> Concluída</label></div>`;}).join('');return `<fieldset class="session-edit-exercise"><legend>Exercício ${index+1}</legend><label>Nome do exercício<input type="text" maxlength="120" data-session-edit-exercise="${esc(r.id)}-${index}" value="${esc(String(ex.name||log.exerciseName||''))}" required></label>${editRows||'<p class="muted" style="font-size:12px">Nenhuma série salva para editar.</p>'}</fieldset>`;}).join('');
  return `<div class="history-row recent-session-row"><b>${esc(weekdayDateLabel(date))}</b><span>${esc(r.workoutName||"Sessão de treino")} <small>· ${esc(r.day||"Treino planejado")}</small></span><span>${Number(r.exerciseCount??snapshot.length)||0} exercícios · ${Number(r.completedSets)||0} séries · ${Math.round(Number(r.volume)||0).toLocaleString("pt-BR")} kg·reps</span><span>${duration===null?"":duration+" min"}</span><div class="session-history-actions"><button type="button" class="mini-btn" data-edit-session="${esc(r.id)}">Editar</button><button type="button" class="mini-btn" data-delete-session="${esc(r.id)}">Excluir</button><button type="button" class="mini-btn" data-session-detail="${esc(r.id)}" aria-expanded="false">Ver detalhes</button></div><div class="session-content-editor" data-session-content-editor="${esc(r.id)}" hidden><label>Data real da sessão<input type="date" data-session-edit-date="${esc(r.id)}" value="${esc(date)}" max="${dateKey()}" required></label><label>Nome do treino<input type="text" maxlength="120" data-session-edit-workout="${esc(r.id)}" value="${esc(String(r.workoutName||'Sessão de treino'))}" required></label>${editExercises}<button type="button" class="mini-btn" data-save-session-content="${esc(r.id)}">Salvar alterações</button><button type="button" class="mini-btn" data-cancel-session-content="${esc(r.id)}">Cancelar</button></div><div class="session-detail-panel" data-session-detail-panel="${esc(r.id)}" hidden>${detail||'<p class="muted" style="font-size:12px">Os detalhes dos exercícios não estão disponíveis nesta sessão.</p>'}</div></div>`;
 }).join("");
 host.querySelectorAll("[data-edit-session]").forEach(button=>{button.onclick=()=>{const editor=host.querySelector(`[data-session-content-editor="${CSS.escape(button.dataset.editSession)}"]`);if(editor)editor.hidden=!editor.hidden;};});
 host.querySelectorAll("[data-cancel-session-content]").forEach(button=>{button.onclick=()=>{const editor=host.querySelector(`[data-session-content-editor="${CSS.escape(button.dataset.cancelSessionContent)}"]`);if(editor)editor.hidden=true;};});
 host.querySelectorAll("[data-save-session-content]").forEach(button=>{button.onclick=()=>{const id=button.dataset.saveSessionContent,editor=host.querySelector(`[data-session-content-editor="${CSS.escape(id)}"]`),session=(state.sessionHistory||[]).find(item=>String(item?.id)===id);if(!session||!editor)return;const workoutInput=editor.querySelector(`[data-session-edit-workout="${CSS.escape(id)}"]`),workoutName=workoutInput?.value.trim()||"";if(!workoutName){alert("Informe o nome do treino.");workoutInput?.focus();return;}const dateInput=editor.querySelector(`[data-session-edit-date="${CSS.escape(id)}"]`),nextDate=dateInput?.value||"";if(!/^\d{4}-\d{2}-\d{2}$/.test(nextDate)){alert("Escolha uma data válida para esta sessão.");dateInput?.focus();return;}if(nextDate>dateKey()){alert("A data da sessão não pode estar no futuro.");dateInput?.focus();return;}const snapshot=Array.isArray(session.exerciseSnapshot)?session.exerciseSnapshot:[];const changes=[];for(let index=0;index<snapshot.length;index++){const nameInput=editor.querySelector(`[data-session-edit-exercise="${CSS.escape(id+"-"+index)}"]`),name=nameInput?.value.trim()||"";if(!name){alert(`Informe o nome do exercício ${index+1}.`);nameInput?.focus();return;}const log=state.logs?.[`${id}-${index}`],sets=Array.isArray(log?.sets)?log.sets:[],nextSets=[];for(let setIndex=0;setIndex<sets.length;setIndex++){const st=sets[setIndex];if(!st){nextSets[setIndex]=st;continue;}const key=id+"-"+index+"-"+setIndex,weightInput=editor.querySelector(`[data-session-edit-weight="${CSS.escape(key)}"]`),repsInput=editor.querySelector(`[data-session-edit-reps="${CSS.escape(key)}"]`),doneInput=editor.querySelector(`[data-session-edit-completed="${CSS.escape(key)}"]`);const weightRaw=weightInput?.value??(st.weight??""),repsRaw=repsInput?.value??(st.reps??"");const completed=doneInput?doneInput.checked:!!st.completed,hasValues=String(weightRaw).trim()!==""||String(repsRaw).trim()!==""||completed||!!st.savedAt;if(hasValues&&(String(weightRaw).trim()===""||!Number.isFinite(Number(weightRaw))||Number(weightRaw)<0)){alert(`Informe uma carga válida (zero ou mais kg) para o exercício ${index+1}, série ${setIndex+1}.`);weightInput?.focus();return;}if(hasValues&&(String(repsRaw).trim()===""||!Number.isInteger(Number(repsRaw))||Number(repsRaw)<1)){alert(`Informe repetições inteiras maiores que zero para o exercício ${index+1}, série ${setIndex+1}.`);repsInput?.focus();return;}nextSets[setIndex]={...st,weight:hasValues?Number(weightRaw):"",reps:hasValues?Number(repsRaw):"",completed,exerciseName:name,workoutName};}changes.push({index,name,sets:nextSets,log});}const before=JSON.parse(JSON.stringify(state));session.sessionDate=nextDate;session.workoutName=workoutName;session.exerciseCount=snapshot.length;Object.entries(state.logs||{}).forEach(([key,log])=>{if(!log||typeof log!=="object")return;const matches=String(log.sessionId||"")===id||key.startsWith(id+"-")||(Array.isArray(log.sets)&&log.sets.some(st=>String(st?.sessionId||"")===id));if(!matches)return;log.date=nextDate;(log.sets||[]).forEach(st=>{if(st&&(String(st.sessionId||id)===id))st.date=nextDate;});});let completedSets=0,completedExercises=0,volume=0;snapshot.forEach((ex,index)=>{const change=changes[index];ex.name=change.name;const log=change.log;if(log){log.exerciseName=change.name;log.workoutName=workoutName;log.sets=change.sets;const last=change.sets.filter(Boolean).at(-1);if(last){log.weight=last.weight;log.reps=last.reps;}if(log.done)completedExercises++;change.sets.forEach(st=>{if(st?.completed){completedSets++;if(Number.isFinite(Number(st.weight))&&Number.isFinite(Number(st.reps)))volume+=Number(st.weight)*Number(st.reps);}});}});session.completedSets=completedSets;session.completedExercises=completedExercises;session.volume=volume;if(!save()){state=before;renderProgress();return;}renderProgress();updateDashboard();renderWorkout();};});
 host.querySelectorAll("[data-delete-session]").forEach(button=>{button.onclick=()=>{const id=button.dataset.deleteSession,session=(state.sessionHistory||[]).find(item=>String(item?.id)===id);if(!session)return;if(!confirm(`Excluir a sessão “${session.workoutName||session.day||"Treino"}” de ${formatDate(sessionDateOf(session))}? Os registros de séries vinculados exclusivamente a esta sessão também serão removidos. Esta ação não pode ser desfeita; exporte um backup antes se tiver dúvida.`))return;const before=JSON.parse(JSON.stringify(state));state.sessionHistory=(state.sessionHistory||[]).filter(item=>String(item?.id)!==id);Object.entries(state.logs||{}).forEach(([key,log])=>{if(!log||typeof log!=="object")return;const matches=String(log.sessionId||"")===id||key.startsWith(id+"-")||(Array.isArray(log.sets)&&log.sets.some(st=>String(st?.sessionId||"")===id));if(matches)delete state.logs[key];});if(!save()){state=before;renderProgress();return;}renderProgress();updateDashboard();renderWorkout();};});
 host.querySelectorAll("[data-session-detail]").forEach(button=>{button.onclick=()=>{const id=button.dataset.sessionDetail,panel=host.querySelector(`[data-session-detail-panel="${CSS.escape(id)}"]`);if(!panel)return;const opening=panel.hidden;panel.hidden=!opening;button.setAttribute("aria-expanded",String(opening));button.textContent=opening?"Ocultar detalhes":"Ver detalhes";};});
}
function renderBodyOverview(){
 const host=$("bodyOverviewStats");if(!host)return;
 const entries=[...(state.progress||[])].filter(p=>p&&p.date&&Number.isFinite(Number(p.weight))).sort((a,b)=>a.date.localeCompare(b.date));
 const latest=entries.at(-1),first=entries[0],goal=Number(state.goalWeight),waists=entries.filter(p=>Number.isFinite(Number(p.waist))&&Number(p.waist)>0),lastWaist=waists.at(-1),firstWaist=waists[0];
 const bio=[...(state.bioimpedance||[])].filter(r=>r&&r.date).sort((a,b)=>a.date.localeCompare(b.date));const lastBio=bio.at(-1);const fmt=(v,s='')=>Number(v).toLocaleString('pt-BR',{maximumFractionDigits:1})+s;
 const stat=(label,value,detail)=>`<div class="progress-stat"><span>${label}</span><strong>${value}</strong><small>${detail}</small></div>`;
 const cards=[];
 cards.push(stat('PESO MAIS RECENTE',latest?fmt(latest.weight,' kg'):'—',latest?`Registrado em ${formatDate(latest.date)}`:'Faça um check-in para começar'));
 cards.push(stat('VARIAÇÃO DE PESO',latest&&first&&entries.length>1?`${Number(latest.weight)-Number(first.weight)>0?'+':''}${fmt(Number(latest.weight)-Number(first.weight),' kg')}`:'—',entries.length>1?`Desde ${formatDate(first.date)}`:'Precisa de ao menos 2 registros'));
 cards.push(stat('CINTURA',lastWaist?fmt(lastWaist.waist,' cm'):'—',lastWaist?`Último registro: ${formatDate(lastWaist.date)}`:'Medida opcional no check-in'));
 cards.push(stat('GORDURA CORPORAL',lastBio&&lastBio.fat!==null&&lastBio.fat!==undefined&&lastBio.fat!==''&&Number.isFinite(Number(lastBio.fat))?fmt(lastBio.fat,'%'):'—',lastBio&&lastBio.fat!==null&&lastBio.fat!==undefined&&lastBio.fat!==''?`Avaliação de ${formatDate(lastBio.date)}`:'Disponível quando informado na bioimpedância'));
 if(latest&&Number.isFinite(goal)&&goal>0)cards.push(stat('DISTÂNCIA ATÉ A META',`${fmt(Math.abs(Number(latest.weight)-goal),' kg')}`,Math.abs(Number(latest.weight)-goal)<0.05?'Meta de peso atingida':Number(latest.weight)>goal?'Peso atual acima da meta':'Peso atual abaixo da meta'));
 host.innerHTML=cards.join('');
}
function renderWaistTrend(){
 const svg=$("waistChart"),summary=$("waistTrendSummary"),pill=$("waistTrendPill");if(!svg)return;
 const rows=[...(state.progress||[])].filter(p=>p&&p.date&&Number.isFinite(Number(p.waist))&&Number(p.waist)>0).sort((a,b)=>a.date.localeCompare(b.date));
 if(!rows.length){svg.innerHTML='<text x="300" y="105" text-anchor="middle">Registre a cintura para ver a evolução</text>';if(summary)summary.textContent='A cintura é opcional. Tente medir em condições semelhantes e registrar novamente periodicamente.';if(pill)pill.textContent='SEM DADOS';return;}
 const vals=rows.map(r=>Number(r.waist)),lo=Math.min(...vals),hi=Math.max(...vals),pad=Math.max(.5,(hi-lo)*.15),min=lo-pad,max=hi+pad,range=Math.max(1,max-min),pts=vals.map((v,i)=>({x:45+(rows.length===1?260:i/(rows.length-1)*510),y:175-(v-min)/range*125,v,date:rows[i].date}));
 let markup='<line x1="38" y1="178" x2="570" y2="178" stroke="#34465c"/><line x1="38" y1="53" x2="570" y2="53" stroke="#263750" stroke-dasharray="3 5"/>';markup+=`<polyline points="${pts.map(p=>p.x+','+p.y).join(' ')}" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;pts.forEach(p=>{markup+=`<circle cx="${p.x}" cy="${p.y}" r="4.5" fill="var(--accent)"/><text x="${p.x}" y="${p.y-10}" text-anchor="middle">${p.v.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text><text x="${p.x}" y="202" text-anchor="middle">${formatShort(p.date)}</text>`});markup+=`<text x="5" y="56">${max.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text><text x="5" y="181">${min.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text>`;svg.innerHTML=markup;
 const delta=vals.at(-1)-vals[0];if(summary)summary.innerHTML=`${rows.length} registro(s) · última medida: <strong>${fmtWaist(vals.at(-1))} cm</strong> (${formatDate(rows.at(-1).date)})${rows.length>1?` · variação desde o primeiro: <strong>${delta>0?'+':''}${delta.toLocaleString('pt-BR',{maximumFractionDigits:1})} cm</strong>`:''}`;if(pill)pill.textContent=rows.length>1?'HISTÓRICO DISPONÍVEL':'1 REGISTRO';
 function fmtWaist(v){return Number(v).toLocaleString('pt-BR',{maximumFractionDigits:1})}
}
function renderBodyComposition(){
 const select=$("bodyCompMetric"),metric=select?.value||'fat',host=$("bodyCompHistory"),svg=$("bodyCompChart"),summary=$("bodyCompSummary");
 const meta={fat:{label:'Gordura corporal',unit:'%',suffix:'%'},muscle:{label:'Massa muscular',unit:'kg',suffix:' kg'},water:{label:'Água corporal',unit:'%',suffix:'%'}}[metric]||{label:'Gordura corporal',unit:'%',suffix:'%'};
 const records=(state.bioimpedance||[]).map((r,i)=>({...r,_index:i})).filter(r=>r.date&&r[metric]!==null&&r[metric]!==undefined&&r[metric]!==''&&Number.isFinite(Number(r[metric]))).sort((a,b)=>a.date.localeCompare(b.date));
 if(!records.length){if(svg)svg.innerHTML='<text x="300" y="105" text-anchor="middle">Ainda sem registros deste indicador</text>';if(summary)summary.textContent=`Registre ${meta.label.toLowerCase()} no botão “Atualizar medidas” para acompanhar a evolução aqui.`;if(host)host.innerHTML='<p class="progress-section-note">Os valores aparecem aqui quando forem adicionados no check-in de medidas. Não é necessário preencher todos os indicadores.</p>';return;}
 const values=records.map(r=>Number(r[metric])),first=records[0],last=records.at(-1),delta=Number(last[metric])-Number(first[metric]);if(summary)summary.innerHTML=`${records.length} medição(ões) · último valor: <strong>${Number(last[metric]).toLocaleString('pt-BR',{maximumFractionDigits:1})}${meta.suffix}</strong> (${formatDate(last.date)}) · variação desde o primeiro: <strong>${delta>0?'+':''}${delta.toLocaleString('pt-BR',{maximumFractionDigits:1})}${meta.suffix}</strong>. <span class="progress-section-note">A bioimpedância é uma estimativa sensível à hidratação e às condições da medição.</span>`;
 const min=Math.min(...values)-Math.max(.5,(Math.max(...values)-Math.min(...values))*.12),max=Math.max(...values)+Math.max(.5,(Math.max(...values)-Math.min(...values))*.12),range=Math.max(.5,max-min),pts=values.map((v,i)=>({x:45+(records.length===1?260:i/(records.length-1)*510),y:175-(v-min)/range*125,v,date:records[i].date}));let markup='<line x1="38" y1="178" x2="570" y2="178" stroke="#34465c"/><line x1="38" y1="53" x2="570" y2="53" stroke="#263750" stroke-dasharray="3 5"/>';markup+=`<polyline points="${pts.map(p=>p.x+','+p.y).join(' ')}" fill="none" stroke="var(--lime)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;pts.forEach(p=>{markup+=`<circle cx="${p.x}" cy="${p.y}" r="4.5" fill="var(--lime)"/><text x="${p.x}" y="${p.y-10}" text-anchor="middle">${p.v.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text><text x="${p.x}" y="202" text-anchor="middle">${formatShort(p.date)}</text>`});markup+=`<text x="5" y="56">${max.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text><text x="5" y="181">${min.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text>`;if(svg)svg.innerHTML=markup;
 if(host)host.innerHTML=records.slice().reverse().map(r=>`<div class="history-row"><b>${formatDate(r.date)}</b><span>${Number(r[metric]).toLocaleString('pt-BR',{maximumFractionDigits:1})}${meta.suffix}</span><span>${r.notes?esc(r.notes):esc(r.fileName||'—')}</span><button class="mini-btn" type="button" data-delete-bio="${r._index}">Excluir</button></div>`).join('');document.querySelectorAll('[data-delete-bio]').forEach(b=>b.onclick=()=>{if(!confirm('Excluir este registro de composição corporal?'))return;const idx=Number(b.dataset.deleteBio);state.bioimpedance.splice(idx,1);save();renderBodyOverview();renderBodyComposition();});
}
function cancelProgressEdit(){progressEditingId=null;$('progressFormTitle').textContent='Registrar medidas';$('saveProgressBtn').textContent='Salvar registro';$('cancelProgressEdit').hidden=true;$('weightInput').value='';$('waistInput').value='';$('dateInput').value=dateKey();}

function collectExerciseHistory(){
 const grouped={};
 Object.entries(state.logs||{}).forEach(([key,log])=>{
  if(!log||!Array.isArray(log.sets))return;
  log.sets.forEach((st,si)=>{
   if(!st||!st.savedAt)return;
   const name=String(st.exerciseName||log.exerciseName||"Exercício").trim()||"Exercício";
   const date=st.date||log.date||(key.match(/\d{4}-\d{2}-\d{2}/)||[])[0]||"";
   if(!date)return;
   (grouped[name]||(grouped[name]=[])).push({...st,sessionId:st.sessionId||log.sessionId||null,sessionDayIndex:log.sessionDayIndex,sessionWeekKey:log.sessionWeekKey,exerciseName:name,workoutName:st.workoutName||log.workoutName||"Treino",date,setNumber:si+1,weight:Number(st.weight)||0,reps:Number(st.reps)||0,completed:!!st.completed});
  });
 });
 Object.values(grouped).forEach(arr=>arr.sort((a,b)=>(a.date+(a.sessionId||"")+(a.savedAt||"")).localeCompare(b.date+(b.sessionId||"")+(b.savedAt||""))));
 return grouped;
}
function normalizeTrendMuscle(value){return String(value||'').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();}
function trendMuscleForExercise(name){
 let meta=null;try{meta=typeof window.inferExercise==='function'?window.inferExercise(name):null;}catch(e){}
 const raw=normalizeTrendMuscle(meta?.muscle||meta?.primaryMuscle||meta?.grupoMuscular||'');
 if(!raw||/nao identificado|unknown|outro|indefinido/.test(raw))return null;
 if(/peitoral|peito/.test(raw))return 'Peito';
 if(/costas|dorsal|trap[eé]zio|romboide|lombar/.test(raw))return 'Costas';
 if(/ombro|deltoide/.test(raw))return 'Ombro';
 if(/b[ií]ceps/.test(raw))return 'Bíceps';
 if(/tr[ií]ceps/.test(raw))return 'Tríceps';
 if(/antebraco/.test(raw))return 'Antebraço';
 if(/quadriceps|posterior de coxa|isquiotibiais|gluteos|panturrilha|adutores|abdutores|pernas/.test(raw))return 'Pernas';
 return null;
}
function trendTimeBucket(date,scale){
 const [y,m,d]=String(date).split('-').map(Number);if(!y||!m||!d)return null;
 const dt=new Date(y,m-1,d);dt.setHours(12,0,0,0);
 if(scale==='year')return {key:String(y),date:`${y}-01-01`,label:String(y),shortLabel:String(y)};
 if(scale==='month')return {key:`${y}-${String(m).padStart(2,'0')}`,date:`${y}-${String(m).padStart(2,'0')}-01`,label:dt.toLocaleDateString('pt-BR',{month:'long',year:'numeric'}),shortLabel:dt.toLocaleDateString('pt-BR',{month:'short',year:'2-digit'}).replace('.','')};
 const offset=(dt.getDay()+6)%7;dt.setDate(dt.getDate()-offset);const iso=`${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
 return {key:iso,date:iso,label:`Semana de ${dt.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'})}`,shortLabel:dt.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})};
}
function renderMuscleTrend(grouped,scale,metric,summary,chart,records,host){
 const chosen=$('exerciseTrendMuscle')?.value||state.exerciseTrendMuscle||'';state.exerciseTrendMuscle=chosen;
 const rows=[];let unclassified=0;const seen=new Set();
 Object.entries(grouped).forEach(([name,sets])=>{const muscle=trendMuscleForExercise(name);if(!muscle){unclassified++;return;}if(muscle!==chosen)return;sets.forEach(st=>{if(!st.completed)return;const signature=[st.sessionId||('legacy-'+st.date),name,st.setNumber||'',st.date||'',st.savedAt||''].join('|');if(seen.has(signature))return;seen.add(signature);rows.push({...st,_trendName:name});});});
 if(records)records.innerHTML='';
 if(!chosen){if(summary)summary.textContent='Selecione um grupo muscular para ver sua evolução.';if(chart)chart.innerHTML='<text x="300" y="110" text-anchor="middle">Selecione um grupo muscular</text>';if(host)host.innerHTML='<p class="progress-section-note">O grupo principal é obtido pelo cadastro do exercício. Exercícios sem classificação confiável ficam fora do agrupamento, sem atribuição arbitrária.</p>';return;}
 if(!rows.length){if(summary)summary.textContent=`Não há séries concluídas classificadas como ${chosen} no histórico registrado.`;if(chart)chart.innerHTML='<text x="300" y="110" text-anchor="middle">Sem registros concluídos deste grupo</text>';if(host)host.innerHTML=`<p class="progress-section-note">Registre e conclua séries de exercícios cujo grupo principal seja ${chosen}. ${unclassified?`${unclassified} exercício(s) sem classificação confiável foram excluídos do agrupamento.`:''}</p>`;return;}
 const buckets=new Map();rows.forEach(st=>{const weight=Number(st.weight)||0,reps=Number(st.reps)||0;if((metric==='volume'||metric==='load')&&weight<=0)return;const b=trendTimeBucket(st.date,scale);if(!b)return;let x=buckets.get(b.key);if(!x){x={...b,volume:0,reps:0,loadTotal:0,loadCount:0,sets:0,exercises:new Set()};buckets.set(b.key,x);}x.volume+=weight>0?weight*reps:0;x.reps+=reps;if(weight>0){x.loadTotal+=weight;x.loadCount++;}x.sets++;x.exercises.add(st._trendName);});
 const points=[...buckets.values()].sort((a,b)=>a.date.localeCompare(b.date)).map(x=>({...x,value:metric==='volume'?x.volume:metric==='reps'?x.reps:(x.loadCount?x.loadTotal/x.loadCount:null)})).filter(x=>Number.isFinite(x.value));
 const metricMeta={volume:{label:'Volume movimentado',unit:'kg·reps'},load:{label:'Carga média por série',unit:'kg'},reps:{label:'Repetições concluídas',unit:'repetições'}}[metric];
 if(summary)summary.textContent=`${chosen} · ${rows.length} séries concluídas · ${points.length} período(s) com dados · ${metricMeta.label} · ${scale==='week'?'semanal':scale==='month'?'mensal':'anual'}. ${unclassified?`${unclassified} exercício(s) sem classificação confiável não foram incluídos.`:''}`;
 if(chart){if(!points.length){chart.innerHTML='<text x="300" y="110" text-anchor="middle">Sem dados válidos para esta métrica</text>';}else{const vals=points.map(x=>x.value),min=Math.min(0,...vals),max=Math.max(...vals),range=Math.max(1,max-min),left=45,right=570,top=40,bottom=178,ts=points.map(x=>new Date(x.date+'T12:00:00').getTime()),span=Math.max(1,ts.at(-1)-ts[0]);const pts=points.map((x,i)=>({x:left+(points.length===1?(right-left)/2:(ts[i]-ts[0])/span*(right-left)),y:bottom-(x.value-min)/range*(bottom-top),...x}));let out='';for(let i=0;i<4;i++){const y=top+i*(bottom-top)/3,v=max-i*(max-min)/3;out+=`<line x1="${left}" y1="${y}" x2="${right}" y2="${y}" stroke="var(--line)" stroke-dasharray="3 5"/><text x="${left-7}" y="${y+3}" text-anchor="end">${v.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text>`;}if(pts.length>1)out+=`<polyline points="${pts.map(x=>x.x+','+x.y).join(' ')}" fill="none" stroke="var(--lime)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;const labelIdx=new Set([0,pts.length-1]);if(pts.length<=6)pts.forEach((x,i)=>labelIdx.add(i));else for(let i=1;i<5;i++)labelIdx.add(Math.round(i*(pts.length-1)/5));pts.forEach((x,i)=>{out+=`<circle cx="${x.x}" cy="${x.y}" r="4" fill="var(--lime)"><title>${esc(x.label)}: ${x.value.toLocaleString('pt-BR',{maximumFractionDigits:1})} ${metricMeta.unit}; ${x.sets} séries; ${x.exercises.size} exercícios</title></circle>`;if(pts.length<=8)out+=`<text x="${x.x}" y="${Math.max(20,x.y-10)}" text-anchor="middle">${x.value.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text>`;if(labelIdx.has(i))out+=`<text x="${x.x}" y="202" text-anchor="${i===0?'start':i===pts.length-1?'end':'middle'}">${esc(x.shortLabel)}</text>`;});chart.innerHTML=out;}}
 if(host)host.innerHTML=`<div class="progress-section-note">O gráfico agrega apenas o grupo principal cadastrado de cada exercício, sem contar músculos secundários e sem duplicar séries. A carga é uma média entre séries do grupo e não deve ser interpretada como comparação direta de força entre exercícios. ${metric==='volume'?'Séries sem carga externa válida não contribuem para o volume.':''}</div><div class="history">${rows.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,12).map(st=>`<div class="history-row"><b>${formatDate(st.date)}</b><span>${esc(st._trendName)}</span><span>${Number(st.weight)||0} kg × ${Number(st.reps)||0} reps</span></div>`).join('')}</div>`;
}
function renderExerciseProgress(){
 renderTrainingInsights();
 const host=$("exerciseProgress");if(!host)return;
 const grouped=collectExerciseHistory(),names=Object.keys(grouped).sort((a,b)=>a.localeCompare(b,"pt-BR"));
 const selector=$("exerciseTrendSelect"),metricSelect=$("exerciseTrendMetric"),scaleSelect=$("exerciseTrendScale"),modeSelect=$("exerciseTrendMode"),muscleSelect=$("exerciseTrendMuscle"),muscleWrap=$("exerciseTrendMuscleWrap"),exerciseWrap=$("exerciseTrendExerciseWrap"),summary=$("exerciseTrendSummary"),chart=$("exerciseTrendChart"),records=$("exerciseRecords");
 const mode=["exercise","muscle"].includes(modeSelect?.value||state.exerciseTrendMode)?(modeSelect?.value||state.exerciseTrendMode):"exercise";state.exerciseTrendMode=mode;
 if(modeSelect)modeSelect.value=mode;if(muscleWrap)muscleWrap.hidden=mode!=="muscle";if(exerciseWrap)exerciseWrap.hidden=mode!=="exercise";
 if(selector){const wanted=state.selectedExerciseTrend;selector.innerHTML='<option value="">Selecione um exercício</option>'+names.map(n=>`<option value="${esc(n)}" ${n===wanted?'selected':''}>${esc(n)}</option>`).join("");if(!names.includes(wanted)&&names.length){state.selectedExerciseTrend=names[0];selector.value=names[0];}}
 if(metricSelect){const metricValue=state.exerciseTrendMetric==="weight"?"load":state.exerciseTrendMetric;metricSelect.value=["load","reps","volume"].includes(metricValue)?metricValue:"volume";state.exerciseTrendMetric=metricSelect.value;}
 const scale=["week","month","year"].includes(scaleSelect?.value||state.exerciseTrendScale)?(scaleSelect?.value||state.exerciseTrendScale):"week";state.exerciseTrendScale=scale;if(scaleSelect)scaleSelect.value=scale;
 if(!names.length){host.innerHTML='<p class="muted" style="font-size:12px">Salve suas séries durante os treinos para começar a acompanhar a evolução.</p>';if(summary)summary.textContent="Seus indicadores e recordes aparecerão depois dos primeiros registros.";if(chart)chart.innerHTML='<text x="300" y="110" text-anchor="middle">Ainda sem dados suficientes</text>';if(records)records.innerHTML="";return;}
 if(mode==="muscle"){renderMuscleTrend(grouped,scale,metricSelect?.value||"volume",summary,chart,records,host);return;}
 const chosen=selector?.value||state.selectedExerciseTrend||names[0],allExerciseRows=grouped[chosen]||[];
 const arr=allExerciseRows.slice().sort((a,b)=>(a.date+(a.savedAt||"")).localeCompare(b.date+(b.savedAt||"")));
 if(!arr.length){if(summary)summary.textContent=`Nenhum registro de ${chosen} no histórico salvo.`;if(chart)chart.innerHTML='<text x="300" y="110" text-anchor="middle">Sem registros deste exercício no período</text>';if(records)records.innerHTML="";host.innerHTML=`<p class="muted" style="font-size:12px">O exercício ainda não tem registros salvos no histórico.</p>`;return;}
 const bySession={};arr.forEach(st=>{const id=st.sessionId||("legacy-date-"+st.date);(bySession[id]||(bySession[id]=[])).push(st)});
 const allSets=arr.filter(x=>x.completed);const hasCompletedSets=allSets.length>0;
 // Quando já existem séries concluídas, não misturar sessões apenas salvas/incompletas nos gráficos de evolução.
 // Se ainda não houver nenhuma série concluída, mostrar os registros como provisórios.
 const sessionsAll=Object.keys(bySession).sort((a,b)=>{const aa=bySession[a][0],bb=bySession[b][0];return (aa.date+(aa.savedAt||"")+(aa.sessionId||"")).localeCompare(bb.date+(bb.savedAt||"")+(bb.sessionId||""));}).map(id=>{const sets=bySession[id],completed=sets.filter(x=>x.completed),basis=hasCompletedSets?completed:sets;return {id,date:sets.map(x=>x.date).sort().at(-1)||sets[0].date,sets:basis,load:Math.max(0,...basis.map(x=>x.weight)),reps:Math.max(0,...basis.map(x=>x.reps)),volume:basis.reduce((sum,x)=>sum+x.weight*x.reps,0),count:basis.length,completed:completed.length};});
 const sessions=sessionsAll.filter(x=>x.sets.length>0);
 const prPool=hasCompletedSets?allSets:arr;
 const maxWeight=Math.max(0,...prPool.map(x=>x.weight)),maxReps=Math.max(0,...prPool.map(x=>x.reps)),maxSetVolume=Math.max(0,...prPool.map(x=>x.weight*x.reps));
 const bestSessionVolume=Math.max(0,...(arr.some(x=>x.completed)?sessions.filter(x=>x.completed>0):sessions).map(x=>x.volume));
 const metric=metricSelect?.value||state.exerciseTrendMetric||"volume";state.exerciseTrendMetric=metric;
 const metricMeta={load:{label:"Maior carga",unit:"kg",value:s=>s.load},reps:{label:"Mais repetições",unit:"reps",value:s=>s.reps},volume:{label:"Volume da sessão",unit:"kg·reps",value:s=>s.volume}}[metric]||{label:"Volume da sessão",unit:"kg·reps",value:s=>s.volume};
 if(summary){const last=sessions[sessions.length-1],prev=sessions.length>1?sessions[sessions.length-2]:null,delta=prev?metricMeta.value(last)-metricMeta.value(prev):null,lastPool=allSets.filter(x=>(x.sessionId||("legacy-date-"+x.date))===last.id),priorIds=new Set(sessions.filter(x=>x.id!==last.id).map(x=>x.id)),priorPool=allSets.filter(x=>priorIds.has(x.sessionId||("legacy-date-"+x.date))),latestLoad=Math.max(0,...lastPool.map(x=>x.weight)),latestReps=Math.max(0,...lastPool.map(x=>x.reps)),latestSetVolume=Math.max(0,...lastPool.map(x=>x.weight*x.reps)),priorLoad=Math.max(0,...priorPool.map(x=>x.weight)),priorReps=Math.max(0,...priorPool.map(x=>x.reps)),priorSetVolume=Math.max(0,...priorPool.map(x=>x.weight*x.reps));const badges=[];if(lastPool.length&&priorPool.length){if(latestLoad>priorLoad)badges.push({label:"Novo recorde de carga",icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v4a4 4 0 0 1-8 0V4ZM8 6H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 0v5m-4 3h8m-6-3h4"/></svg>'});if(latestReps>priorReps)badges.push({label:"Novo recorde de repetições",icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 14.8 8.7 21 9.6l-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>'});if(latestSetVolume>priorSetVolume)badges.push({label:"Novo recorde de volume por série",icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5m0 14h16M8 15l4-4 3 2 5-6"/></svg>'});}else if(!allSets.length)badges.push({label:"Registros ainda provisórios",icon:''});else if(!priorPool.length&&lastPool.length)badges.push({label:"Primeiro registro concluído",icon:''});summary.innerHTML=`${sessions.length} sessão(ões) registrada(s) · ${arr.length} séries salvas · último registro: ${formatDate(last.date)}${delta===null?"":" · variação frente à sessão anterior: "+(delta>0?"+":"")+Number(delta.toFixed(1)).toLocaleString("pt-BR")+" "+metricMeta.unit}. <span style="display:block;margin-top:5px">${badges.map(x=>`<span class="record-badge">${x.icon}${esc(x.label)}</span>`).join(" ")||"Nenhum recorde novo confirmado nesta sessão."}</span><span style="display:block;margin-top:4px">Recordes consideram somente séries concluídas. ${hasCompletedSets?"Séries salvas, mas não concluídas, não entram nos recordes.":"Ainda não há séries concluídas; os valores abaixo são apenas registros provisórios."} Compare execuções em condições semelhantes.</span>`;}
 if(records){const labelPrefix=hasCompletedSets?"Recorde":"Maior registro provisório";records.innerHTML=`<div class="record-card"><span>${labelPrefix} de carga</span><strong>${maxWeight.toLocaleString("pt-BR")} kg</strong><small>${prPool.find(x=>x.weight===maxWeight)?.date?formatDate(prPool.find(x=>x.weight===maxWeight).date):"—"}${hasCompletedSets?"":" · série não concluída"}</small></div><div class="record-card"><span>${labelPrefix} de repetições</span><strong>${maxReps} reps</strong><small>Maior número em uma série</small></div><div class="record-card"><span>${hasCompletedSets?"Maior volume por série":"Volume provisório por série"}</span><strong>${Math.round(maxSetVolume).toLocaleString("pt-BR")}</strong><small>kg·reps</small></div><div class="record-card"><span>${hasCompletedSets?"Maior volume em sessão":"Volume provisório em sessão"}</span><strong>${Math.round(bestSessionVolume).toLocaleString("pt-BR")}</strong><small>kg·reps</small></div>`;}
 if(chart){const bucketMap=new Map();sessions.forEach(session=>{const b=trendTimeBucket(session.date,scale);if(!b)return;let item=bucketMap.get(b.key);if(!item){item={...b,load:0,volume:0,reps:0,sessions:0};bucketMap.set(b.key,item);}item.load=Math.max(item.load,session.load);item.volume+=session.volume;item.reps+=session.reps;item.sessions++;});const trendPoints=[...bucketMap.values()].sort((a,b)=>a.date.localeCompare(b.date)).map(x=>({...x,value:metric==='load'?x.load:metric==='reps'?x.reps:x.volume}));if(!trendPoints.length){chart.innerHTML='<text x="300" y="110" text-anchor="middle">Ainda sem sessões registradas</text>';}else{const values=trendPoints.map(x=>x.value),min=Math.min(0,...values),max=Math.max(...values),range=Math.max(1,max-min),left=45,right=570,top=40,bottom=178,times=trendPoints.map(x=>new Date(x.date+'T12:00:00').getTime()),span=Math.max(1,times.at(-1)-times[0]),pts=trendPoints.map((x,i)=>({x:left+(trendPoints.length===1?(right-left)/2:(times[i]-times[0])/span*(right-left)),y:bottom-(x.value-min)/range*(bottom-top),...x}));let out='';for(let i=0;i<4;i++){const y=top+i*(bottom-top)/3,v=max-i*(max-min)/3;out+=`<line x1="${left}" y1="${y}" x2="${right}" y2="${y}" stroke="var(--line)" stroke-dasharray="3 5"/><text x="${left-7}" y="${y+3}" text-anchor="end">${v.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text>`;}if(pts.length>1)out+=`<polyline points="${pts.map(p=>p.x+','+p.y).join(' ')}" fill="none" stroke="var(--lime)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;const labelIdx=new Set([0,pts.length-1]);if(pts.length<=6)pts.forEach((x,i)=>labelIdx.add(i));else for(let i=1;i<5;i++)labelIdx.add(Math.round(i*(pts.length-1)/5));pts.forEach((p,i)=>{out+=`<circle cx="${p.x}" cy="${p.y}" r="4" fill="var(--lime)"><title>${esc(p.label)}: ${p.value.toLocaleString('pt-BR',{maximumFractionDigits:1})} ${metricMeta.unit}; ${p.sessions} sessão(ões)</title></circle>`;if(pts.length<=8)out+=`<text x="${p.x}" y="${Math.max(20,p.y-10)}" text-anchor="middle">${p.value.toLocaleString('pt-BR',{maximumFractionDigits:1})}</text>`;if(labelIdx.has(i))out+=`<text x="${p.x}" y="202" text-anchor="${i===0?'start':i===pts.length-1?'end':'middle'}">${esc(p.shortLabel)}</text>`;});chart.innerHTML=out;}}
 if(summary)summary.innerHTML+=`<span style="display:block;margin-top:5px">Visão do gráfico: ${scale==='week'?'semanal':scale==='month'?'mensal':'anual'}.</span>`;
 const recent=arr.slice().reverse().slice(0,Math.min(arr.length,12));
 host.innerHTML=`<h4 style="margin:16px 0 8px">${esc(chosen)} · histórico recente</h4><div class="history">${recent.map(st=>`<div class="history-row"><b>${formatDate(st.date)}</b><span>${st.weight} kg × ${st.reps} reps</span><span>${st.completed?'<span class="record-badge">Concluída</span>':'Salva'}</span></div>`).join("")}</div>`;
}
function normalizeMuscleText(value){return String(value||'').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();}
function inferMuscleFocus(name,meta=null){
 const n=normalizeMuscleText(name),m=String(meta?.muscle||meta?.primaryMuscle||meta?.grupoMuscular||'').trim();
 const supplied=String(meta?.focus||meta?.muscleFocus||meta?.focoMuscular||'').trim();
 if(supplied&&!/^(foco nao identificado|a definir|nao especificado|pendente)$/i.test(normalizeMuscleText(supplied)))return supplied;
 // Ombros antes de crucifixo/voador, pois crucifixo inverso é deltoide posterior, não peito.
 if(/crucifixo inverso|posterior de ombro|reverse fly/.test(n))return'Deltoide posterior';
 if(/face pull/.test(n))return'Deltoide posterior (com participação dos rotadores externos e trapézio médio/inferior)';
 if(/rotacao externa/.test(n))return'Manguito rotador — rotadores externos (infraespinal e redondo menor)';
 if(/elevacao lateral|abducao de ombro|remada alta/.test(n))return'Deltoide lateral';
 if(/elevacao frontal|desenvolvimento|arnold press|shoulder press/.test(n))return'Deltoide anterior (com participação do lateral)';
 // Peitoral: o ângulo e a trajetória orientam a ênfase regional; não representam isolamento.
 if(/supino .*inclinado|inclinado .*supino|press inclinado|crucifixo inclinado|crossover (de )?baixo para cima|baixo para cima/.test(n))return'Peitoral superior (porção clavicular; ênfase relativa)';
 if(/supino .*declinado|declinado .*supino|crucifixo declinado|crossover (de )?cima para baixo|paralelas|mergulho.*peitoral|dips/.test(n))return'Peitoral inferior (ênfase relativa)';
 if(/supino|peck deck|crucifixo|crossover|flexao de bracos|flexao inclinada|chest press|voador|press de peito/.test(n)||m==='Peitoral')return'Peitoral médio (porção esternocostal; ênfase geral)';
 // Bíceps: ambas as cabeças participam; posição do ombro sugere apenas tendência de ênfase.
 if(/rosca inclinada|rosca bayesiana|bayesian curl|braço atras do tronco/.test(n))return'Bíceps — cabeça longa (ênfase relativa com ombro em extensão)';
 if(/rosca scott|scott|preacher|rosca concentrada|concentrada/.test(n))return'Bíceps — cabeça curta (ênfase relativa; ambas participam)';
 if(/rosca martelo|hammer curl|rosca neutra/.test(n))return'Flexores do cotovelo — braquial e braquiorradial (pegada neutra)';
 if(/rosca|curl|flexao de cotovelo/.test(n)||m==='Bíceps')return'Bíceps — cabeças longa e curta (ênfase compartilhada)';
 // Tríceps: a posição elevada do braço aumenta a demanda de extensão do ombro sobre a cabeça longa.
 if(/acima da cabeca|frances|testa|skull crusher|extensao de triceps deitado/.test(n))return'Tríceps — cabeça longa (ênfase relativa com braço elevado)';
 if(/corda|coice de triceps|kickback/.test(n))return'Tríceps — cabeça lateral (ênfase relativa; as três cabeças participam)';
 if(/mergulho de triceps|triceps|pushdown/.test(n)||m==='Tríceps')return'Tríceps — cabeça medial (participa em toda extensão; não é isolada seletivamente)';
 // Deltoide e cintura escapular.
 if(m==='Ombros')return'Deltoide lateral (foco a confirmar pela variação)';
 // Costas: trajetórias verticais favorecem dorsal; remadas dependem da posição dos cotovelos.
 if(/encolhimento|shrug/.test(n)||m==='Trapézio')return'Trapézio superior (elevação escapular)';
 if(/extensao lombar|hiperextensao|lombar/.test(n)||m==='Lombar')return'Lombar — eretores da coluna (extensão/estabilização)';
 if(/remada alta|cotovelos abertos|t bar|t-bar|remada cavalinho|remada com apoio para o peito|remada peito/.test(n))return'Romboides e trapézio médio (retração escapular)';
 if(/puxada|pulldown|barra fixa|pull up|chin up|pullover|dorsal|braços retos/.test(n))return'Dorsal (latíssimo do dorso; adução/extensão do ombro)';
 if(/remada/.test(n))return'Dorsal e romboides (ênfase conforme a trajetória dos cotovelos)';
 if(m==='Costas')return'Dorsal (latíssimo do dorso; foco principal a confirmar)';
 // Antebraço: movimentos diretos do punho e pegada.
 if(/extensao de punho|extensores de punho|extensao punho/.test(n))return'Antebraços — extensores do punho';
 if(/flexao de punho|flexores de punho|flexao punho|caminhada do fazendeiro|farmer|pegada/.test(n)||m==='Antebraços')return'Antebraços — flexores do punho e força de preensão';
 // Pernas.
 if(/panturrilha/.test(n))return/panturrilha sentada|panturrilha no leg press|sentado/.test(n)?'Panturrilha — sóleo (ênfase relativa com joelho flexionado)':'Panturrilha — gastrocnêmio e sóleo (ênfase com joelho estendido)';
 if(/adutora|aducao de quadril|agachamento sumo|sumo/.test(n)||m==='Adutores')return'Adutores do quadril';
 if(/abdutora|abducao de quadril|abducao elastico|abducao deitado/.test(n))return'Glúteos — glúteo médio e mínimo (abdução do quadril)';
 if(/flexora|mesa flexora|stiff|romeno|good morning|bom dia|posterior de coxa/.test(n)||m==='Posterior de coxa')return'Posterior de coxa — isquiotibiais (flexão do joelho/extensão do quadril)';
 if(/hip thrust|elevacao pelvica|ponte de gluteos|ponte gluteos|coice de gluteo|gluteo|extensao de quadril|pull through|extensao quadril/.test(n)||m==='Glúteos')return'Glúteos — glúteo máximo (extensão do quadril)';
 if(/extensora|leg press|agachamento|afundo|passada|step up|subida em plataforma|hack squat|sentar e levantar/.test(n)||m==='Quadríceps')return'Quadríceps (extensão do joelho; participação varia com a técnica)';
 // Abdômen: não existe isolamento perfeito das regiões do reto abdominal.
 if(/woodchop|rotacao de tronco|prancha lateral|obliquo|russian twist/.test(n))return'Abdômen — oblíquos (rotação/anti-rotação)';
 if(/elevacao de joelhos|elevacao de pernas|reverse crunch|infra|joelhos na cadeira/.test(n))return'Abdômen — reto abdominal, ênfase inferior relativa (retroversão pélvica)';
 if(/prancha|dead bug|bird dog|estabilidade|respiracao|vacu/.test(n))return'Abdômen — transverso e estabilizadores profundos (anti-extensão/estabilidade)';
 if(/crunch|abdominal|flexao de tronco/.test(n))return'Abdômen — reto abdominal, ênfase supra relativa';
 if(m==='Abdômen')return'Abdômen — transverso e estabilizadores profundos (foco de estabilidade)';
 // Movimentos de condicionamento ou mobilidade sem um alvo único recebem a ênfase muscular mais defensável pelo nome.
 if(/caminhada|corrida|stepper|bicicleta|subir escada/.test(n))return'Pernas — quadríceps e glúteos (locomoção; ênfase geral)';
 if(/mobilidade/.test(n))return'Mobilidade multiarticular — sem foco muscular único';
 if(/alongamento/.test(n))return'Músculos da região alongada — depende da área indicada';
 const defaults={'Peitoral':'Peitoral médio (ênfase geral)','Peito':'Peitoral médio (ênfase geral)','Bíceps':'Bíceps — cabeças longa e curta (ênfase compartilhada)','Tríceps':'Tríceps — cabeças lateral e medial (ênfase conjunta)','Ombros':'Deltoide lateral (foco a confirmar pela variação)','Costas':'Dorsal (latíssimo do dorso; foco principal a confirmar)','Trapézio':'Trapézio superior (elevação escapular)','Lombar':'Lombar — eretores da coluna (extensão/estabilização)','Antebraços':'Antebraços — flexores do punho e força de preensão','Quadríceps':'Quadríceps (extensão do joelho)','Posterior de coxa':'Posterior de coxa — isquiotibiais','Glúteos':'Glúteos — glúteo máximo (extensão do quadril)','Adutores':'Adutores do quadril','Panturrilhas':'Panturrilha — gastrocnêmio e sóleo','Abdômen':'Abdômen — transverso e estabilizadores profundos'};
 return defaults[m]||'Foco específico pendente de confirmação';
}
function getExerciseFocus(name,meta=null){const key=normalizeMuscleText(name);const override=state?.exerciseFocusOverrides?.[key];if(override)return override;return inferMuscleFocus(name,meta);}
window.inferMuscleFocus=inferMuscleFocus;window.getExerciseFocus=getExerciseFocus;
function renderTrainingInsights(){
 const host=$("trainingInsights");if(!host)return;
 const today=new Date();today.setHours(0,0,0,0);
 const isoDay=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
 const dayOffset=(date,n)=>{const d=new Date(date);d.setDate(d.getDate()+n);return d;};
 const todayISO=isoDay(today),start7=isoDay(dayOffset(today,-6)),prev7=isoDay(dayOffset(today,-13)),start30=isoDay(dayOffset(today,-29)),prev30=isoDay(dayOffset(today,-59));
 const byDate={},exerciseSessions={},efforts=[];
 Object.entries(state.logs||{}).forEach(([key,log])=>{
  if(!log||typeof log!=="object")return;
  const logDate=typeof log.date==="string"?log.date:"";
  if(log.rpe!==null&&log.rpe!==undefined&&log.rpe!==""&&Number.isFinite(Number(log.rpe))&&logDate){if(logDate>=start30&&logDate<=todayISO)efforts.push({date:logDate,value:Number(log.rpe)});}
  const sets=Array.isArray(log.sets)?log.sets:[];
  sets.forEach(st=>{
   if(!st||!st.savedAt)return;
   const date=typeof st.date==="string"?st.date:(logDate||(key.match(/\d{4}-\d{2}-\d{2}/)||[])[0]||"");
   if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||date>todayISO)return;
   const weight=Number(st.weight),reps=Number(st.reps);
   if(!Number.isFinite(weight)||weight<0||!Number.isFinite(reps)||reps<0)return;
   const row={date,weight,reps,completed:!!st.completed,volume:weight*reps,name:String(st.exerciseName||log.exerciseName||"Exercício").trim()||"Exercício"};
   (byDate[date]||(byDate[date]=[])).push(row);
   const group=exerciseSessions[row.name]||(exerciseSessions[row.name]={});const sessionKey=st.sessionId||log.sessionId||("legacy-date-"+date);
   (group[sessionKey]||(group[sessionKey]=[])).push({...row,sessionId:sessionKey});
  });
 });
 const sessionSets=date=>{const rows=byDate[date]||[],done=rows.filter(x=>x.completed);return done.length?done:rows;};
 const volumeIn=(from,to)=>Object.keys(byDate).filter(d=>d>=from&&d<=to).reduce((sum,d)=>sum+sessionSets(d).reduce((v,x)=>v+x.volume,0),0);
 const dates=Object.keys(byDate).filter(d=>byDate[d].some(x=>x.completed)||byDate[d].length).sort();
 const freq7=dates.filter(d=>d>=start7&&d<=todayISO).length,freqPrev7=dates.filter(d=>d>=prev7&&d<start7).length;
 const vol7=volumeIn(start7,todayISO),volPrev7=volumeIn(prev7,dayOffset(today,-7).toISOString().slice(0,10));
 const vol30=volumeIn(start30,todayISO),volPrev30=volumeIn(prev30,dayOffset(today,-30).toISOString().slice(0,10));
 const change=(a,b)=>b>0?((a-b)/b*100):null;
 const fmtVol=v=>Math.round(v).toLocaleString("pt-BR");
 const fmtChange=v=>v===null?"sem base anterior":`${v>0?"+":""}${Math.round(v)}% vs. período anterior`;
 const avgRpe=efforts.length?efforts.reduce((sum,x)=>sum+x.value,0)/efforts.length:null;
 const plateau=[];
 Object.entries(exerciseSessions).forEach(([name,byDay])=>{
  const sessions=Object.keys(byDay).map(id=>{const rows=byDay[id],done=rows.filter(x=>x.completed),pool=done.length?done:rows;return {id,date:pool.map(x=>x.date).sort().at(-1)||rows[0].date,load:Math.max(0,...pool.map(x=>x.weight)),reps:Math.max(0,...pool.map(x=>x.reps)),sets:pool.length};}).filter(x=>x.date>=start30&&x.date<=todayISO).sort((a,b)=>(a.date+a.id).localeCompare(b.date+b.id));
  if(sessions.length>=3){const last=sessions.slice(-3),sameLoad=last.every(x=>Math.abs(x.load-last[0].load)<0.001),sameOrLowerReps=last.every(x=>x.reps<=last[0].reps);if(sameLoad&&sameOrLowerReps)plateau.push({name,sessions:last.length,load:last[last.length-1].load,reps:last[last.length-1].reps});}
 });
 if(!dates.length){host.innerHTML='<p class="muted" style="font-size:12px">Registre e conclua algumas séries para acompanhar sua consistência e volume. Os indicadores usam apenas os dados salvos neste perfil.</p>';renderWorkoutCyclePanel();return;}
 const vol7Delta=change(vol7,volPrev7),vol30Delta=change(vol30,volPrev30),freqDelta=freq7-freqPrev7;
 const alerts=[];
 if(freq7===0)alerts.push('Nenhuma sessão com séries registradas nos últimos 7 dias. Se você treinou, confira se salvou as séries.');
 else if(freq7<2)alerts.push('Poucos dias de treino registrados nesta semana. Compare com sua rotina planejada antes de tirar conclusões.');
 if(vol7Delta!==null&&vol7Delta>=25)alerts.push(`O volume registrado nos últimos 7 dias aumentou ${Math.round(vol7Delta)}% em relação aos 7 dias anteriores. Confira recuperação, técnica e se os registros estão completos.`);
 if(vol7Delta!==null&&vol7Delta<=-30)alerts.push(`O volume registrado caiu ${Math.abs(Math.round(vol7Delta))}% frente aos 7 dias anteriores. Pode refletir descanso, mudança de plano ou registros incompletos.`);
 if(plateau.length)alerts.push(`Possível estagnação a investigar: ${plateau.slice(0,3).map(x=>`${x.name} (${x.load} kg, até ${x.reps} reps)`).join('; ')}. São três sessões recentes sem aumento da carga máxima nem das repetições máximas — não é um diagnóstico automático.`);
 const periodLabel=`${formatDate(start7)} a ${formatDate(todayISO)}`;
 const muscleVolumes={},focusVolumes={};const recentMuscleRows=Object.entries(byDate).filter(([d])=>d>=start7&&d<=todayISO).flatMap(([,rows])=>rows);const hasRecentCompleted=recentMuscleRows.some(x=>x.completed);Object.entries(byDate).filter(([d])=>d>=start7&&d<=todayISO).forEach(([,rows])=>{const basis=hasRecentCompleted?rows.filter(x=>x.completed):rows;basis.forEach(row=>{let muscle='Grupo não identificado',focus='Foco não identificado';try{const meta=typeof window.inferExercise==='function'?window.inferExercise(row.name):null;muscle=String(meta?.muscle||meta?.primaryMuscle||muscle).trim()||muscle;focus=getExerciseFocus(row.name,meta);}catch(e){}muscleVolumes[muscle]=(muscleVolumes[muscle]||0)+row.volume;const k=muscle+'||'+focus;focusVolumes[k]=(focusVolumes[k]||0)+row.volume;});});const muscleNames=Object.keys(muscleVolumes).filter(n=>muscleVolumes[n]>0).sort((a,b)=>muscleVolumes[b]-muscleVolumes[a]);const selectedMuscle=muscleNames.includes(state.trainingMuscleFilter)?state.trainingMuscleFilter:'';state.trainingMuscleFilter=selectedMuscle;const visibleMuscles=selectedMuscle?[selectedMuscle]:muscleNames.slice(0,6);const muscleMax=Math.max(1,...visibleMuscles.map(n=>muscleVolumes[n]||0));const muscleMarkup=muscleNames.length?`<div class="muscle-volume-panel"><div class="section-head muscle-volume-heading"><h4>Volume por grupo muscular · últimos 7 dias</h4><label class="muscle-filter-wrap ${selectedMuscle?'is-active':''}"><svg class="muscle-filter-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16l-6.2 7.1v5.2l-3.6 1.8v-7z"/></svg><select id="trainingMuscleFilter" aria-label="Filtrar volume por grupo muscular"><option value="">Principais grupos</option>${muscleNames.map(n=>`<option value="${esc(n)}" ${n===selectedMuscle?'selected':''}>${esc(n)}</option>`).join('')}</select><svg class="muscle-filter-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></label></div>${visibleMuscles.map(name=>{const value=muscleVolumes[name],focusRows=Object.entries(focusVolumes).filter(([k,v])=>k.startsWith(name+'||')&&v>0).sort((a,b)=>b[1]-a[1]);return `<div class="muscle-volume-row"><div><span>${esc(name)}</span><strong>${fmtVol(value)} kg·reps</strong></div><div class="muscle-volume-track"><i style="width:${Math.max(2,Math.round(value/muscleMax*100))}%"></i></div>${focusRows.length?`<small style="display:block;color:var(--muted);margin-top:4px">${focusRows.map(([k,v])=>`${esc(k.split('||')[1])}: ${fmtVol(v)} kg·reps`).join(' · ')}</small>`:''}</div>`}).join('')}<p class="insight-note">O grupo principal é classificado pelo cadastro e pelo nome do exercício. O foco representa a ênfase biomecânica estimada, não isolamento de uma cabeça/região. Em exercícios personalizados, confirme ou selecione o foco no cadastro.</p></div>`:'';
 host.innerHTML=`<div class="training-insights-grid"><div class="insight-metric"><span>DIAS COM TREINO · 7 DIAS</span><strong>${freq7}</strong><small>${freqDelta===0?'igual à semana anterior':`${freqDelta>0?'+':''}${freqDelta} dia(s) vs. semana anterior`}<br>${periodLabel}</small></div><div class="insight-metric"><span>VOLUME · 7 DIAS</span><strong>${fmtVol(vol7)}</strong><small>kg·reps · ${esc(fmtChange(vol7Delta))}</small></div><div class="insight-metric"><span>VOLUME · 30 DIAS</span><strong>${fmtVol(vol30)}</strong><small>kg·reps · ${esc(fmtChange(vol30Delta))}</small></div><div class="insight-metric"><span>ESFORÇO MÉDIO · 30 DIAS</span><strong>${avgRpe===null?'—':avgRpe.toLocaleString('pt-BR',{maximumFractionDigits:1})+'/10'}</strong><small>${efforts.length?`${efforts.length} avaliação(ões) de esforço`:'Registre esforço nos exercícios'}</small></div></div>${muscleMarkup}<div class="insight-note">O volume é a soma de carga × repetições das séries registradas. Quando há séries concluídas no período, o painel considera apenas essas séries; se ainda não houver nenhuma, usa os registros salvos como provisórios. Compare períodos com o mesmo plano e equipamentos, pois volume maior não significa automaticamente treino melhor.</div>${alerts.length?alerts.map((msg,i)=>`<div class="insight-alert ${i===0&&freq7>=2?'insight-good':''}">${esc(msg)}</div>`).join(''):'<div class="insight-alert insight-good">Nenhum sinal automático importante com os dados disponíveis. Continue registrando as séries e o esforço percebido.</div>'}`;
}

if($("exerciseTrendSelect"))$("exerciseTrendSelect").addEventListener("change",()=>{state.selectedExerciseTrend=$("exerciseTrendSelect").value;save();renderExerciseProgress();});
if($("exerciseTrendMetric"))$("exerciseTrendMetric").addEventListener("change",()=>{state.exerciseTrendMetric=$("exerciseTrendMetric").value;save();renderExerciseProgress();});
if($("exerciseTrendMode"))$("exerciseTrendMode").addEventListener("change",()=>{state.exerciseTrendMode=$("exerciseTrendMode").value;save();renderExerciseProgress();});
if($("exerciseTrendMuscle"))$("exerciseTrendMuscle").addEventListener("change",()=>{state.exerciseTrendMuscle=$("exerciseTrendMuscle").value;save();renderExerciseProgress();});
if($("exerciseTrendScale"))$("exerciseTrendScale").addEventListener("change",()=>{state.exerciseTrendScale=$("exerciseTrendScale").value;save();renderExerciseProgress();});
if($("trainingInsights"))$("trainingInsights").addEventListener("change",e=>{if(e.target?.id==="trainingMuscleFilter"){state.trainingMuscleFilter=e.target.value;renderTrainingInsights();}});

function formatDate(s){return new Date(s+"T12:00:00").toLocaleDateString("pt-BR")}
function formatShort(s){return new Date(s+"T12:00:00").toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}
$("progressForm").addEventListener("submit",e=>{e.preventDefault();const weight=parseFloat($("weightInput").value.replace(",",".")),waist=$("waistInput").value?parseFloat($("waistInput").value.replace(",",".")):null,date=$("dateInput").value;if(!Number.isFinite(weight)||weight<30||weight>300||!date){alert("Confira o peso e a data do registro.");return;}if(date>dateKey()){alert("A data do registro não pode estar no futuro.");return;}const editId=progressEditingId;state.progress=state.progress.filter(p=>p.date!==date&&(!editId||String(p.id)!==editId));state.progress.push({id:editId||Date.now().toString(),weight,waist,date});state.progress.sort((a,b)=>a.date.localeCompare(b.date));cancelProgressEdit();save();renderProgress();updateDashboard()});
$("cancelProgressEdit").addEventListener("click",cancelProgressEdit);
$("progressQuickCheckin").addEventListener("click",()=>{setProgressMode("corpo");$("progressCheckinCard").scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});setTimeout(()=>$("weightInput").focus({preventScroll:true}),0)});
$("bodyCompMetric").addEventListener("change",renderBodyComposition);
$("clearProgress")?.addEventListener("click",()=>{if(confirm("Apagar todo o histórico de peso e cintura?")){state.progress=[];cancelProgressEdit();save();renderProgress();updateDashboard()}});
function refreshProfileLayout(){const done=!!state.onboarded;document.body.classList.toggle("onboarded",done);$("startPlanBtn").textContent="Começar meu treino →";$("updatePanel").style.display=done?"flex":"none";$("onboardingCard").style.display=done?"none":"block";$("goalCardSub").textContent=done?"Meta inicial do seu plano":"Defina seus dados para criar um plano";$("focusLabel").textContent=({fatloss:"perda de gordura",recomp:"recomposição",muscle:"hipertrofia",strength:"força",conditioning:"condicionamento"}[state.profileData?.goal]||"definição natural");document.querySelector(".hero-main h2").innerHTML=done?"Seu plano, ajustado<br>à sua rotina.":"Construa um corpo forte.<br>Sem complicar sua rotina.";document.querySelector(".hero-main p").textContent=done?"Seu perfil está pronto. Atualize as medidas para acompanhar a evolução e revisar as metas.":"Responda a algumas perguntas para montar um plano de treino e alimentação adequado aos seus objetivos.";}
let onboardingStep=0;
const onboardingStepNames=["Perfil e objetivo","Rotina de treino","Preferências e cuidados","Revisão final"];
function getSelectedFocusGroups(){return Array.from(document.querySelectorAll('input[name="qFocusGroup"]:checked')).map(el=>el.value)}
function setSelectedFocusGroups(groups){const selected=new Set(Array.isArray(groups)?groups:[]);document.querySelectorAll('input[name="qFocusGroup"]').forEach(el=>{el.checked=selected.has(el.value)});updateFocusSelectionLabel()}
function updateFocusSelectionLabel(){const chosen=getSelectedFocusGroups(),labels={chest:'Peito',back:'Costas',shoulders:'Ombros',arms:'Braços',legs:'Pernas e glúteos',core:'Abdômen e core'},out=$('qFocusSelection');if(!out)return;out.textContent=chosen.length?`Focos selecionados: ${chosen.map(k=>labels[k]||k).join(' · ')}.`:'Nenhum foco extra selecionado · desenvolvimento equilibrado';out.classList.toggle('has-selection',chosen.length>0);document.querySelectorAll('input[name="qFocusGroup"]').forEach(el=>{const label=el.closest('.forma-focus-option');if(label)label.setAttribute('aria-checked',String(el.checked));});}
function openOnboarding(){closeTabMenu();const d=state.profileData||{};const vals={qAge:d.age||"",qHeight:d.height||"",qWeight:(state.progress.length?state.progress[state.progress.length-1].weight:state.startWeight)||"",qGoalWeight:state.goalWeight||d.goalWeight||"",qSex:d.sex||"male",qGoal:d.goal||"fatloss",qExperience:d.experience||"beginner",qDays:d.days||5,qEquipment:d.equipment||"gym",qDuration:d.duration||60,qActivity:d.activity||"sedentary",qDiet:d.diet||"vegetarian",qLimitations:d.limitations||"",qPreferences:d.preferences||"",qSplit:d.split||"auto",qTrainingStyle:d.trainingStyle||"balanced"};Object.entries(vals).forEach(([id,v])=>{if($(id))$(id).value=v});setSelectedFocusGroups(Array.isArray(d.focusGroups)?d.focusGroups:(d.focus&&d.focus!=='balanced'?[d.focus]:[]));onboardingStep=0;renderOnboardingStep();$('onboardingModal').classList.add('open');}
function closeOnboarding(){$("onboardingModal").classList.remove("open")}
function renderOnboardingStep(){document.querySelectorAll("[data-onboarding-step]").forEach((el,i)=>el.classList.toggle("active",i===onboardingStep));document.querySelectorAll("[data-step-dot]").forEach((el,i)=>{el.classList.toggle("active",i===onboardingStep);el.classList.toggle("done",i<onboardingStep);el.setAttribute("aria-current",i===onboardingStep?"step":"false")});$("onboardingProgressFill").style.width=((onboardingStep+1)/4*100)+"%";$("onboardingStepLabel").textContent=`Etapa ${onboardingStep+1} de 4`;$ ("onboardingStepHint").textContent=onboardingStepNames[onboardingStep];$("onboardingBack").hidden=onboardingStep===0;$("onboardingNext").hidden=onboardingStep===3;$("onboardingSubmit").hidden=onboardingStep!==3;if(onboardingStep===3)renderOnboardingReview();const box=document.querySelector(".forma-onboarding-box");if(box)box.scrollTop=0;}
function validateOnboardingStep(){const current=document.querySelector(`[data-onboarding-step="${onboardingStep}"]`);if(!current)return true;for(const el of current.querySelectorAll("input[required],select[required],textarea[required]")){if(!el.checkValidity()){el.reportValidity();el.focus();return false;}}if(onboardingStep===0){const age=Number($("qAge").value),height=Number($("qHeight").value),weight=Number($("qWeight").value);if(age<14||age>100||height<120||height>230||weight<30||weight>300){alert("Confira idade, altura e peso antes de continuar.");return false;}const gw=$("qGoalWeight").value?Number($("qGoalWeight").value):weight;if($("qGoalWeight").value&&(gw<30||gw>300)){alert("A meta de peso precisa estar entre 30 e 300 kg.");return false;}}return true;}
function renderOnboardingReview(){const val=id=>$(id)?.selectedOptions?.[0]?.textContent||"—";const raw=id=>$(id)?.value||"";const chosen=getSelectedFocusGroups(),labels={chest:'Peito',back:'Costas',shoulders:'Ombros',arms:'Braços',legs:'Pernas e glúteos',core:'Abdômen e core'};const rows=[["Objetivo",val("qGoal")],["Perfil",`${raw("qAge")} anos · ${raw("qHeight")} cm · ${raw("qWeight")} kg`],["Meta de peso",raw("qGoalWeight")?raw("qGoalWeight")+" kg":"Sem meta definida"],["Rotina",`${val("qDays")} · ${val("qDuration")}`],["Experiência",val("qExperience")],["Local",val("qEquipment")],["Divisão",val("qSplit")],["Estilo",val("qTrainingStyle")],["Focos prioritários",chosen.length?chosen.map(k=>labels[k]||k).join(', '):"Desenvolvimento equilibrado"],["Cuidados",raw("qLimitations")||"Não informado"],["Preferências de treino",raw("qPreferences")||"Não informado"],["Alimentação",val("qDiet")]];$('onboardingReview').innerHTML=rows.map(([k,v])=>`<article class="forma-review-item"><span>${k}</span><strong>${String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}</strong></article>`).join('');}
document.querySelectorAll('input[name="qFocusGroup"]').forEach(el=>el.addEventListener("change",updateFocusSelectionLabel));
$("onboardingNext").addEventListener("click",()=>{if(!validateOnboardingStep())return;if(onboardingStep<3){onboardingStep++;renderOnboardingStep();}});$("onboardingBack").addEventListener("click",()=>{if(onboardingStep>0){onboardingStep--;renderOnboardingStep();}});
function buildLocalWorkoutPlan(d){
 const days=Math.max(3,Math.min(6,Number(d.days)||5)),experience=d.experience||'beginner',beginner=experience==='beginner',advanced=experience==='advanced',duration=Number(d.duration)||60,home=d.equipment==='home',basic=d.equipment==='basic';
 const focusGroups=Array.isArray(d.focusGroups)?d.focusGroups.filter(Boolean):(d.focus&&d.focus!=='balanced'?[d.focus]:[]);
 const groupMap={chest:['Peitoral'],back:['Costas'],shoulders:['Ombros'],arms:['Bíceps','Tríceps'],legs:['Quadríceps','Posterior de coxa','Glúteos','Panturrilhas'],core:['Abdômen']};
 const priorityMuscles=new Set(focusGroups.flatMap(k=>groupMap[k]||[]));
 const allMuscles=['Peitoral','Costas','Ombros','Bíceps','Tríceps','Quadríceps','Posterior de coxa','Glúteos','Panturrilhas','Abdômen'];
 const splitMode=d.split||'auto';
 let schedule;
 const upper=['Peitoral','Costas','Ombros','Bíceps','Tríceps'];
 const lower=['Quadríceps','Posterior de coxa','Glúteos','Panturrilhas','Abdômen'];
 const ppl=[['Peitoral','Ombros','Tríceps'],['Costas','Bíceps','Abdômen'],['Quadríceps','Posterior de coxa','Glúteos','Panturrilhas']];
 if(splitMode==='full'||(splitMode==='auto'&&days===3)) schedule=Array.from({length:days},(_,i)=>({title:['Corpo inteiro A','Corpo inteiro B','Corpo inteiro C','Corpo inteiro D','Corpo inteiro E','Corpo inteiro F'][i],muscles:i%2===0?['Quadríceps','Peitoral','Costas','Glúteos','Ombros','Abdômen']:['Posterior de coxa','Costas','Peitoral','Bíceps','Tríceps','Panturrilhas']}));
 else if(splitMode==='upperlower'||(splitMode==='auto'&&days===4)) schedule=Array.from({length:days},(_,i)=>({title:i%2===0?`Superiores ${i<2?'A':'B'}`:`Inferiores ${i<2?'A':'B'}`,muscles:i%2===0?upper.slice():lower.slice()}));
 else if(splitMode==='ppl'||(splitMode==='auto'&&days===6)) schedule=Array.from({length:days},(_,i)=>({title:['Empurrar A','Puxar A','Pernas A','Empurrar B','Puxar B','Pernas B'][i],muscles:ppl[i%3].slice()}));
 else if(splitMode==='bodypart') schedule=Array.from({length:days},(_,i)=>{const groups=[['Peitoral','Tríceps'],['Costas','Bíceps'],['Quadríceps','Posterior de coxa','Glúteos','Panturrilhas'],['Ombros','Abdômen'],['Peitoral','Costas','Ombros'],['Posterior de coxa','Glúteos','Abdômen']];return {title:['Peito e tríceps','Costas e bíceps','Pernas e glúteos','Ombros e core','Superiores — complemento','Inferiores — complemento'][i],muscles:groups[i]||upper.slice()};});
 else if(days===5) schedule=[{title:'Superiores A',muscles:upper.slice()},{title:'Inferiores A',muscles:lower.slice()},{title:'Empurrar — peito, ombros e tríceps',muscles:ppl[0].slice()},{title:'Puxar — costas e bíceps',muscles:ppl[1].slice()},{title:'Inferiores B',muscles:lower.slice()}];
 else schedule=Array.from({length:days},(_,i)=>({title:['Superiores A','Inferiores A','Superiores B','Inferiores B','Superiores C','Inferiores C'][i],muscles:i%2===0?upper.slice():lower.slice()}));
 const rawCatalog=typeof window.getExerciseCatalog==='function'?window.getExerciseCatalog():[];
 const normalize=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const limits=normalize(d.limitations||''),preferences=normalize(d.preferences||'');
 const avoidKnee=/joelho|patela|agachamento|leg press|extensora/.test(limits),avoidHip=/quadril|lombar|coluna|hernia/.test(limits),avoidShoulder=/ombro|manguito/.test(limits),avoidWrist=/punho|pulso/.test(limits);
 const avoidTerms=(String(d.preferences||'').split(/[,;\n]+/).map(x=>normalize(x.trim())).filter(x=>x.length>2));
 const avoidableExercises=['supino','agachamento','leg press','levantamento terra','crucifixo','flexao de bracos','rosca direta','rosca martelo','desenvolvimento','elevacao lateral','puxada frontal','remada','cadeira extensora','cadeira flexora','prancha'];
 for(const term of avoidableExercises){const escaped=term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');if(new RegExp('(?:nao gosto de|nao curto|evitar|evite|nao quero|sem|nao fazer|nao incluir).{0,35}\\b'+escaped+'\\b').test(preferences)&&!avoidTerms.includes(term))avoidTerms.push(term);} 
 const pool=rawCatalog.filter(x=>x&&x.name&&x.muscle).filter(x=>{
  const text=normalize([x.name,x.muscle,...(x.secondary||[]),x.pattern].join(' '));
  if(avoidTerms.some(term=>text.includes(term)))return false;
  if(avoidKnee&&/agach|extensora|leg press|subida unilateral/.test(text))return false;
  if(avoidHip&&/levantamento terra|remada curvada|hiperextens|agachamento profundo/.test(text))return false;
  if(avoidShoulder&&/desenvolvimento|elevacao lateral|supino|flexao de bracos|crucifixo/.test(text))return false;
  if(avoidWrist&&/flexao de bracos|rosca direta|extensao de punho/.test(text))return false;
  const equipment=normalize(x.equipment||'');
  if(home&&!/peso corporal|halteres|elastico|banco/.test(equipment))return false;
  if(basic&&/maquina especializada/.test(equipment))return false;
  if(d.trainingStyle==='machines'&&!home&&!/maquina|polia/.test(equipment))return false;
  if(d.trainingStyle==='freeweights'&&!home&&!/halteres|barra|peso corporal|banco/.test(equipment))return false;
  if(d.trainingStyle==='functional'&&!/peso corporal|elastico|halteres|banco/.test(equipment))return false;
  return true;
 });
 const preferredLevel=x=>{const level=normalize(x.level);if(beginner)return level.includes('iniciante')?0:level.includes('intermediario')?2:4;if(advanced)return level.includes('avancado')?0:level.includes('intermediario')?1:2;return level.includes('intermediario')?0:level.includes('iniciante')?1:2;};
 const patternRank=(x,target,usedPatterns)=>{const p=normalize(x.pattern||'');let rank=0;if(usedPatterns.has(p))rank+=5;if(target==='Peitoral'&&/empurrar horizontal|aducao horizontal/.test(p))rank-=2;if(target==='Costas'&&/remada horizontal|puxada vertical/.test(p))rank-=2;if(target==='Quadríceps'&&/agachar|extensao de joelho|empurrar com pernas/.test(p))rank-=2;if(target==='Posterior de coxa'&&/flexao de joelho|extensao de quadril/.test(p))rank-=2;if(target==='Glúteos'&&/extensao de quadril|abducao de quadril|agachar/.test(p))rank-=2;if(target==='Ombros'&&/empurrar vertical|abducao de ombro|rotacao externa/.test(p))rank-=2;if(target==='Bíceps'&&/flexao de cotovelo/.test(p))rank-=2;if(target==='Tríceps'&&/extensao de cotovelo/.test(p))rank-=2;if(target==='Abdômen'&&/estabilidade do tronco|flexao de tronco/.test(p))rank-=2;if(target==='Panturrilhas'&&/flexao plantar/.test(p))rank-=2;return rank;};
 const selectedWeek=new Set(),weeklySets={};
 const maxExercises=duration<=30?4:duration<=45?5:duration<=60?7:8;
 const baseSets=beginner?2:advanced?4:3;
 const repRange=d.goal==='strength'?'4–8 reps':d.goal==='conditioning'?'10–15 reps':d.goal==='fatloss'?'8–15 reps':d.goal==='recomp'?'8–12 reps':'8–12 reps';
 const rest=d.goal==='strength'?'2–3 min': '90–120 s';
 const output=schedule.map((day,dayIndex)=>{
  let targets=[...new Set(day.muscles)];
  // Em dias de corpo inteiro, alterna ênfases sem deixar grupos fundamentais de fora ao longo da semana.
  if(day.title.startsWith('Corpo inteiro')){
   const rotate=dayIndex%3;
   if(rotate===0)targets=['Quadríceps','Peitoral','Costas','Glúteos','Ombros','Abdômen'];
   if(rotate===1)targets=['Posterior de coxa','Costas','Peitoral','Bíceps','Tríceps','Panturrilhas'];
   if(rotate===2)targets=['Glúteos','Quadríceps','Costas','Ombros','Bíceps','Abdômen'];
  }
  // Inclui prioritários no dia quando isso cabe na estrutura, sem transformar todo treino em isolamentos do mesmo grupo.
  const priorityToday=targets.filter(m=>priorityMuscles.has(m));
  if(priorityMuscles.size&&splitMode!=='bodypart'){const titleForType=normalize(day.title);const isFullDay=/corpo inteiro/.test(titleForType);const isLowerDay=/inferior|pernas|gluteos/.test(titleForType);const isUpperDay=/superior|empurrar|puxar|peito|costas|ombros/.test(titleForType);for(const p of priorityMuscles){const isLowerMuscle=lower.includes(p),isUpperMuscle=upper.includes(p);const compatible=isFullDay||(!isLowerDay&&!isUpperDay)||(isLowerDay&&isLowerMuscle)||(isUpperDay&&isUpperMuscle)||p==='Abdômen';if(compatible&&!targets.includes(p)&&targets.length<maxExercises)targets.push(p);}}
  const ex=[],usedMuscles=new Set(),usedPatterns=new Set();
  const desiredCount=Math.min(maxExercises,Math.max(duration<=30?4:5,targets.length));
  const orderedTargets=[...targets].sort((a,b)=>Number(priorityMuscles.has(b))-Number(priorityMuscles.has(a)));
  for(const target of orderedTargets){
   if(ex.length>=desiredCount)break;
   const candidates=pool.filter(x=>x.muscle===target&&!selectedWeek.has(x.id)&&!ex.some(e=>e[0]===x.name)).sort((a,b)=>{
    const score=x=>preferredLevel(x)+patternRank(x,target,usedPatterns)+(normalize(x.type)==='composto'?-1:0)+(priorityMuscles.has(target)?-0.5:0);
    return score(a)-score(b);
   });
   let choice=candidates[0];
   if(!choice&&(home||basic)){const secondaryCandidates=pool.filter(x=>(x.secondary||[]).includes(target)&&!selectedWeek.has(x.id)&&!ex.some(e=>e[0]===x.name)).sort((a,b)=>preferredLevel(a)-preferredLevel(b));choice=secondaryCandidates[0];}
   if(!choice)choice=pool.filter(x=>x.muscle===target&&!ex.some(e=>e[0]===x.name)).sort((a,b)=>preferredLevel(a)-preferredLevel(b))[dayIndex%Math.max(1,pool.filter(x=>x.muscle===target).length)];
   if(!choice)continue;
   selectedWeek.add(choice.id);usedMuscles.add(target);usedPatterns.add(normalize(choice.pattern));
   let sets=baseSets;
   if(priorityMuscles.has(target))sets=Math.min(beginner?3:advanced?5:4,baseSets+1);
   if(duration<=30)sets=Math.min(sets,2);
   if(d.goal==='strength'&&normalize(choice.type)==='composto')sets=Math.min(sets,beginner?3:4);
   ex.push([choice.name,`${sets} ${sets===1?'série':'séries'}`,repRange,rest]);weeklySets[target]=(weeklySets[target]||0)+sets;
  }
  // Complementa com antagonistas/acessórios e padrões ainda ausentes, sem repetir movimentos idênticos na mesma sessão.
  const secondaryTargets=targets.filter(m=>!usedMuscles.has(m));
  for(const target of secondaryTargets){if(ex.length>=desiredCount)break;const choice=pool.filter(x=>x.muscle===target&&!selectedWeek.has(x.id)&&!ex.some(e=>e[0]===x.name)).sort((a,b)=>preferredLevel(a)-preferredLevel(b))[0]||((home||basic)?pool.filter(x=>(x.secondary||[]).includes(target)&&!selectedWeek.has(x.id)&&!ex.some(e=>e[0]===x.name)).sort((a,b)=>preferredLevel(a)-preferredLevel(b))[0]:null);if(!choice)continue;selectedWeek.add(choice.id);usedPatterns.add(normalize(choice.pattern));const sets=duration<=30?2:baseSets;ex.push([choice.name,`${sets} séries`,repRange,rest]);weeklySets[target]=(weeklySets[target]||0)+sets;}
  // Prioridade adicional é distribuída por exercícios distintos e limitada para não exagerar o volume.
  for(const target of priorityMuscles){if(ex.length>=desiredCount)break;if(!targets.includes(target))continue;const count=ex.filter(item=>{const meta=pool.find(x=>x.name===item[0]);return meta?.muscle===target||(meta?.secondary||[]).includes(target)}).length;if(count>=2)continue;const choice=pool.filter(x=>x.muscle===target&&!selectedWeek.has(x.id)&&!ex.some(e=>e[0]===x.name)).sort((a,b)=>preferredLevel(a)-preferredLevel(b))[0];if(!choice)continue;selectedWeek.add(choice.id);const sets=duration<=30?2:Math.min(baseSets,beginner?2:3);ex.push([choice.name,`${sets} séries`,repRange,rest]);weeklySets[target]=(weeklySets[target]||0)+sets;}
  // Em sessões mais longas, adiciona um segundo padrão para os grandes grupos presentes no dia.
  for(const target of targets){if(ex.length>=desiredCount)break;const count=ex.filter(item=>{const meta=pool.find(x=>x.name===item[0]);return meta?.muscle===target}).length;if(count>=2)continue;const candidates=pool.filter(x=>x.muscle===target&&!selectedWeek.has(x.id)&&!ex.some(e=>e[0]===x.name)&&!usedPatterns.has(normalize(x.pattern))).sort((a,b)=>preferredLevel(a)-preferredLevel(b));const choice=candidates[0]||pool.filter(x=>x.muscle===target&&!ex.some(e=>e[0]===x.name)).sort((a,b)=>preferredLevel(a)-preferredLevel(b))[0];if(!choice)continue;selectedWeek.add(choice.id);usedPatterns.add(normalize(choice.pattern));const sets=duration<=30?2:Math.min(baseSets,beginner?2:3);ex.push([choice.name,`${sets} séries`,repRange,rest]);weeklySets[target]=(weeklySets[target]||0)+sets;}
  const clean=ex.slice(0,desiredCount);
  const label=focusGroups.length?focusGroups.map(k=>({chest:'peito',back:'costas',shoulders:'ombros',arms:'braços',legs:'pernas e glúteos',core:'abdômen e core'}[k]||k)).join(', '):'desenvolvimento equilibrado';
  return {day:['Segunda','Terça','Quarta','Quinta','Sexta','Sábado'][dayIndex]||`Dia ${dayIndex+1}`,short:['SEG','TER','QUA','QUI','SEX','SÁB'][dayIndex]||`D${dayIndex+1}`,title:day.title,sub:`Musculação · ${beginner?'volume inicial':advanced?'volume avançado':'volume intermediário'} · ${duration} min · ${focusGroups.length?'prioridade: '+label:'foco equilibrado'}`,ex:clean};
 });
 // Metadados ficam no perfil para permitir auditoria e ajustes posteriores; cardio não é inserido na musculação.
 d.workoutGenerationMeta={version:2,focusGroups:[...focusGroups],weeklySets,generatedAt:new Date().toISOString(),catalogBased:rawCatalog.length>0};
 return output;
}
function createPersonalPlan(d){
 const weight=d.weight,height=d.height,age=d.age;
 let bmr=10*weight+6.25*height-5*age+(d.sex==="female"?-161:d.sex==="male"?5:-78);
 const mult={sedentary:1.2,light:1.35,moderate:1.5,high:1.7}[d.activity]||1.35;let tdee=bmr*mult;
 let kcal=d.goal==="muscle"?tdee+150:d.goal==="strength"?tdee:d.goal==="fatloss"?tdee-400:d.goal==="recomp"?tdee-200:tdee-150;
 kcal=Math.round(Math.max(1200,Math.min(4500,kcal))/50)*50;
 let protein=Math.round(weight*(d.goal==="muscle"||d.goal==="strength"?1.8:1.6)/5)*5;protein=Math.max(70,Math.min(220,protein));
 let fat=Math.round(weight*.7/5)*5;fat=Math.max(40,Math.min(110,fat));let carbs=Math.max(50,Math.round((kcal-protein*4-fat*9)/4/5)*5);
 state.targets={kcal,protein,carbs,fat};state.startWeight=weight;state.goalWeight=d.goalWeight;
 state.planTitle=({fatloss:"Plano de definição",recomp:"Plano de recomposição",muscle:"Plano de hipertrofia",strength:"Plano de força",conditioning:"Plano de condicionamento"}[d.goal]||"Plano personalizado");
 state.profileData=d;state.onboarded=true;state.trainingDays=Number(d.days)||5;
 state.generatedWorkoutPlan=buildLocalWorkoutPlan(d);state.planTitle="";state.planObjective="";state.customWorkouts={};state.selected=0;
 save();applyProfileEdits();applyCustomAppearance();renderMeals();renderWeekButtons();renderWorkout();updateDashboard();renderProgress();refreshProfileLayout();closeOnboarding();
 alert("Plano individual criado neste dispositivo. O treino foi montado conforme os dados do perfil, dias disponíveis, experiência, equipamento, tempo e preferências. As metas nutricionais são estimativas iniciais; o cardápio ainda usa a base alimentar do FORMA e precisa ser revisado para refletir integralmente suas preferências e macros.");
}
$("startPlanBtn").addEventListener("click",openOnboarding);$("closeOnboarding").addEventListener("click",closeOnboarding);$("cancelOnboarding").addEventListener("click",closeOnboarding);$("onboardingModal").addEventListener("click",e=>{if(e.target.id==="onboardingModal")closeOnboarding()});
$("onboardingForm").addEventListener("submit",e=>{e.preventDefault();if(onboardingStep!==3){if(validateOnboardingStep()){onboardingStep=3;renderOnboardingStep();}return;}const n=id=>Number($(id).value);const weight=n("qWeight");const focusGroups=getSelectedFocusGroups();const d={age:n("qAge"),height:n("qHeight"),weight,goalWeight:$("qGoalWeight").value?n("qGoalWeight"):weight,sex:$("qSex").value,goal:$("qGoal").value,experience:$("qExperience").value,days:Number($("qDays").value),equipment:$("qEquipment").value,duration:Number($("qDuration").value),activity:$("qActivity").value,diet:$("qDiet").value,limitations:$("qLimitations").value.trim(),preferences:$("qPreferences").value.trim(),split:$("qSplit").value,trainingStyle:$("qTrainingStyle").value,focusGroups,focus:focusGroups[0]||"balanced"};if(!validateOnboardingStep())return;if(d.goalWeight<=0||d.weight<=0||d.height<=0){alert("Confira peso e altura.");return;}createPersonalPlan(d);});
function openUpdate(){closeTabMenu();$("uDate").value=dateKey();const last=state.progress[state.progress.length-1];$("uWeight").value=last?.weight||state.startWeight;$("uWaist").value=last?.waist||"";$("uFat").value="";$("uMuscle").value="";$("uWater").value="";$("uNotes").value="";$("bioFile").value="";$("bioFileInfo").style.display="none";$("updateFeedback").style.display="none";$("updateModal").classList.add("open");}
function closeUpdate(){$("updateModal").classList.remove("open")}
$("updateDataBtn").addEventListener("click",openUpdate);$("closeUpdate").addEventListener("click",closeUpdate);$("cancelUpdate").addEventListener("click",closeUpdate);$("updateModal").addEventListener("click",e=>{if(e.target.id==="updateModal")closeUpdate()});
async function loadPdfJs(){if(window.pdfjsLib)return window.pdfjsLib;await new Promise((resolve,reject)=>{const sc=document.createElement("script");sc.src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";sc.onload=resolve;sc.onerror=reject;document.head.appendChild(sc)});if(window.pdfjsLib)window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";return window.pdfjsLib;}
async function decodeFormaPdfAttachment(content){
 const bytes=content instanceof Uint8Array?content:new Uint8Array(content||[]);
 const decode=value=>new TextDecoder("utf-8",{fatal:true}).decode(value);
 try{return decode(bytes);}catch(_){}
 if(typeof DecompressionStream==="function"){
  for(const format of ["deflate","deflate-raw","gzip"]){
   try{
    const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream(format));
    return await new Response(stream).text();
   }catch(_){}
  }
 }
 throw new Error("O anexo estruturado do PDF está compactado em um formato não reconhecido.");
}
async function readFormaImportPdfText(file){
 if(!file||(!/\.pdf$/i.test(file.name)&&file.type!=="application/pdf"))throw new Error("O FORMA aceita somente arquivos PDF para importação.");
 if(file.size>15*1024*1024)throw new Error("O PDF ultrapassa o limite de 15 MB.");
 const lib=await loadPdfJs();if(!lib)throw new Error("O leitor de PDF não foi carregado. Verifique a conexão e tente novamente.");
 const pdf=await lib.getDocument({data:await file.arrayBuffer()}).promise;
 const attachments=await pdf.getAttachments?.();
 if(attachments){
  for(const item of Object.values(attachments)){
   if(!item||!(/forma-data\.json$/i.test(item.filename||"")))continue;
   try{
    const container=JSON.parse(await decodeFormaPdfAttachment(item.content));
    if(container.format!=="FORMA_PDF_CONTAINER"||!container.payload)continue;
    const fields=await pdf.getFieldObjects?.(),values={};
    if(fields)for(const [name,group] of Object.entries(fields)){const value=group?.[0]?.fieldValue;if(value!==undefined&&value!==null&&(String(value).trim()||name.startsWith("food_")||name.startsWith("meal_item_")))values[name]=String(value);}
    const payload=container.payload;
    for(const [key,value] of Object.entries(values)){
     if(key.startsWith("food_")&&payload.foods?.[0]){
      const map={food_name:"name",food_category:"category",food_description:"description",food_brand:"brand",food_barcode:"barcode",food_preparation:"preparation",food_portion:"basisAmount",food_unit:"unit",food_kcal:"k",food_protein:"p",food_carbs:"c",food_fat:"f",food_saturated:"saturated",food_trans:"trans",food_fiber:"fiber",food_sugars:"sugars",food_added_sugars:"addedSugars",food_sodium:"sodium",food_source:"source",food_source_ref:"sourceRef",food_source_type:"sourceType",food_notes:"notes"};const microMap={food_calcium:"calcium",food_iron:"iron",food_magnesium:"magnesium",food_phosphorus:"phosphorus",food_potassium:"potassium",food_zinc:"zinc",food_copper:"copper",food_manganese:"manganese",food_selenium:"selenium",food_iodine:"iodine",food_vitamin_a:"vitaminA",food_vitamin_d:"vitaminD",food_vitamin_e:"vitaminE",food_vitamin_k:"vitaminK",food_vitamin_c:"vitaminC",food_b1:"b1",food_b2:"b2",food_b3:"b3",food_b5:"b5",food_b6:"b6",food_b7:"b7",food_b9:"b9",food_b12:"b12"};const target=map[key];if(target)payload.foods[0][target]=["food_portion","food_kcal","food_protein","food_carbs","food_fat","food_saturated","food_trans","food_fiber","food_sugars","food_added_sugars","food_sodium"].includes(key)?(String(value).trim()===''?null:(Number(value)||0)):value;if(microMap[key]){payload.foods[0].micronutrients=payload.foods[0].micronutrients||{};payload.foods[0].micronutrients[microMap[key]]=String(value).trim()===''?null:(Number(value)||0);}
     }else if(key.startsWith("meal_")&&payload.meals?.[0]){
      if(key==="meal_name")payload.meals[0].name=value;
      else if(key==="meal_category")payload.meals[0].category=value;
      else if(key==="meal_description")payload.meals[0].description=value;
      else if(key==="meal_servings")payload.meals[0].servings=Number(value)||null;
      else if(key==="meal_yield")payload.meals[0].yieldAmount=Number(value)||null;
      else if(key==="meal_prep_time")payload.meals[0].preparationTime=value;
      else if(key==="meal_instructions")payload.meals[0].instructions=value;
      else if(key==="meal_notes")payload.meals[0].notes=value;
      else if(key==="meal_items")payload.meals[0].items=String(value).split(/\n+/).map(line=>{const m=line.match(/^\s*(.+?)\s*:\s*(\d+(?:[.,]\d+)?)\s*(g|ml|un)?\s*$/i);return m?{name:m[1].trim(),amount:Number(m[2].replace(",",".")),unit:(m[3]||"g").toLowerCase()}:null;}).filter(Boolean);
     }else if(key.startsWith("exercise_")&&payload.exercises?.[0]){
      const map={exercise_name:"name",exercise_muscle:"muscle",exercise_focus:"focus",exercise_secondary:"secondary",exercise_equipment:"equipment",exercise_type:"type",exercise_level:"level",exercise_pattern:"pattern",exercise_tips:"tips",exercise_errors:"errors",exercise_alternatives:"alternatives",exercise_sets:"sets",exercise_reps:"reps",exercise_rest:"rest",exercise_notes:"notes"};const target=map[key];if(target){const listFields=["exercise_secondary","exercise_tips","exercise_errors","exercise_alternatives"];payload.exercises[0][target]=listFields.includes(key)?String(value).split(/\\n|\r?\n|[;,|]+/).map(x=>x.trim()).filter(Boolean):value;}
     }else if(key.startsWith("workout_day_")&&payload.days){const m=key.match(/^workout_day_(\d+)_(day|title|focus|duration|warmup|notes)$/);if(m&&payload.days[Number(m[1])]){const d=payload.days[Number(m[1])],field=m[2];if(field==="day")d.day=value;else if(field==="title")d.title=value;else if(field==="focus")d.focus=value;else if(field==="duration")d.duration=value;else if(field==="warmup")d.warmup=value;else d.notes=value;}}
     else if(key.startsWith("workout_ex_")&&payload.days){const m=key.match(/^workout_ex_(\d+)_(\d+)_(name|sets|reps|load|rest|cadence|rir|method|unilateral|warmup|progression|notes|set_prescription)$/);if(m){const ex=payload.days[Number(m[1])]?.exercises?.[Number(m[2])];if(ex){const field=m[3],map={name:"name",sets:"sets",reps:"reps",load:"load",rest:"rest",cadence:"cadence",rir:"rir",method:"method",unilateral:"unilateral",warmup:"warmupSets",progression:"progression",notes:"notes"};if(field==="set_prescription")ex.setPrescriptionText=value;else if(field==="unilateral")ex.unilateral=/^(sim|yes|true|1)$/i.test(String(value).trim());else if(field==="sets")ex.sets=Number(String(value).match(/\d+/)?.[0])||ex.sets;else ex[map[field]]=value;}}}
     else if(key.startsWith("workout_lib_")&&payload.exerciseLibrary){const m=key.match(/^workout_lib_(\d+)_(name|muscle|focus|secondary|equipment|type|level|pattern|tips|errors|alternatives|notes)$/);if(m){const ex=payload.exerciseLibrary[Number(m[1])];if(ex){const field=m[2];if(["secondary","tips","errors","alternatives"].includes(field))ex[field]=String(value).split(/\\n|\r?\n|[;,|]+/).map(x=>x.trim()).filter(Boolean);else ex[field]=value;}}}
     else if(key==="workout_name")payload.name=value;
     else if(key==="workout_objective")payload.objective=value;
     else if(key==="schedule_name"&&payload.schedule)payload.schedule.name=value;
     else if(key==="schedule_objective"&&payload.schedule)payload.schedule.objective=value;
     else if(key.startsWith("schedule_")&&payload.schedule?.target){const map={schedule_kcal:"kcal",schedule_protein:"protein",schedule_carbs:"carbs",schedule_fat:"fat"};const target=map[key];if(target)payload.schedule.target[target]=Number(value)||0;}
     else if(key==="nutrition_name")(payload.plan||payload).name=value;
     else if(key==="nutrition_objective")(payload.plan||payload).objective=value;
     else if(key.startsWith("bio_")&&payload.bioimpedance){const map={bio_date:"date",bio_weight:"weight",bio_waist:"waist",bio_fat:"fat",bio_muscle:"muscle",bio_water:"water",bio_notes:"notes"};const target=map[key];if(target)payload.bioimpedance[target]=["bio_weight","bio_waist","bio_fat","bio_muscle","bio_water"].includes(key)?(Number(value)||0):value;}
    }
    const foodFields={name:'name',category:'category',description:'description',brand:'brand',barcode:'barcode',preparation:'preparation',portion:'basisAmount',unit:'unit',kcal:'k',protein:'p',carbs:'c',fat:'f',saturated:'saturated',trans:'trans',fiber:'fiber',sugars:'sugars',added_sugars:'addedSugars',sodium:'sodium',cholesterol:'cholesterol',source:'source',source_ref:'sourceRef',source_type:'sourceType',notes:'notes'};
    const microFields={calcium:'calcium',iron:'iron',magnesium:'magnesium',phosphorus:'phosphorus',potassium:'potassium',zinc:'zinc',copper:'copper',manganese:'manganese',selenium:'selenium',iodine:'iodine',vitamin_a:'vitaminA',vitamin_d:'vitaminD',vitamin_e:'vitaminE',vitamin_k:'vitaminK',vitamin_c:'vitaminC',b1:'b1',b2:'b2',b3:'b3',b5:'b5',b6:'b6',b7:'b7',b9:'b9',b12:'b12'};
    const numericFoodFields=new Set(['portion','kcal','protein','carbs','fat','saturated','trans','fiber','sugars','added_sugars','sodium','cholesterol']);
    for(const [key,value] of Object.entries(values)){
     const fm=key.match(/^food_(\d+)_(.+)$/);
     if(fm){const food=payload.foods?.[Number(fm[1])],field=fm[2];if(food&&foodFields[field])food[foodFields[field]]=numericFoodFields.has(field)?(String(value).trim()===''?null:(Number(String(value).replace(',','.'))||0)):value;else if(food&&microFields[field]){food.micronutrients=food.micronutrients||{};food.micronutrients[microFields[field]]=String(value).trim()===''?null:(Number(String(value).replace(',','.'))||0);}}
     const im=key.match(/^meal_item_(\d+)_amount$/);if(im){const item=payload.meals?.[0]?.items?.[Number(im[1])];if(item)item.amount=String(value).trim()===''?null:(Number(String(value).replace(',','.'))||0);}
    }
    if(payload.format==='FORMA_LIBRARY_IMPORT'&&payload.foods?.length&&payload.meals?.[0]){
     const meal=payload.meals[0],byKey=new Map(payload.foods.map(food=>[String(food.key??food.foodKey??food.food_key??''),food]));
     meal.items=(meal.items||[]).map(item=>{const food=byKey.get(String(item.foodKey??item.food_key??''));return food?{...item,name:food.name||'',unit:food.unit||item.unit||'g',snapshot:{...food}}:item;}).filter(item=>Number(item.amount)>0);const usedKeys=new Set(meal.items.map(item=>String(item.foodKey??item.food_key??'')));payload.foods=payload.foods.filter(food=>usedKeys.has(String(food.key??food.foodKey??food.food_key??'')));
    }
    const samplePattern=/(?:^|\\b)(?:exemplo(?:\\s+did[aá]tico)?|marca\\s+ilustrativa|preencha\\s+este\\s+campo|substitua\\s+por\\s+(?:dados\\s+)?reais|dados\\s+reais|fonte\\s+verificada|fabricante,?\\s*edi[cç][aã]o\\s+ou\\s+url|nome\\s+do\\s+(?:alimento|exerc[ií]cio|plano))(?:\\b|$)/i;
    const samplePaths=[];
    const scanSampleValues=(value,path="payload")=>{
     if(typeof value==="string"){if(samplePattern.test(value))samplePaths.push(path);return;}
     if(Array.isArray(value)){value.forEach((item,index)=>scanSampleValues(item,path+"["+index+"]"));return;}
     if(value&&typeof value==="object")for(const [key,item] of Object.entries(value))scanSampleValues(item,path+"."+key);
    };
    scanSampleValues(payload);
    if(samplePaths.length)throw new Error("Este PDF ainda contém textos demonstrativos ou campos de preenchimento pendentes ("+samplePaths.slice(0,5).join(", ")+"). Substitua esses conteúdos por dados reais ou deixe os campos opcionais vazios e salve o PDF antes de importar. O FORMA bloqueou a importação para evitar cadastrar exemplos.");
    return JSON.stringify(payload);
   }catch(err){if(/PDF ainda contém textos demonstrativos ou campos de preenchimento pendentes/.test(String(err?.message||err)))throw err;console.warn("FORMA: não foi possível ler o anexo interno do PDF",err);}
  }
 }
 // Campos AcroForm devem ser lidos independentemente da existência do anexo forma-data.json.
 // O PDF preenchível pode conter os valores no próprio formulário, sem arquivo anexado.
 try{
  const fieldObjects=await pdf.getFieldObjects?.();
  if(fieldObjects){
   const values={};
   for(const [fieldName,group] of Object.entries(fieldObjects)){
    const value=group?.[0]?.fieldValue;
    if(value!==undefined&&value!==null&&String(value).trim())values[fieldName]=String(value).trim();
   }
   const foodMap={food_name:"name",food_category:"category",food_description:"description",food_brand:"brand",food_barcode:"barcode",food_preparation:"preparation",food_portion:"basisAmount",food_unit:"unit",food_kcal:"k",food_protein:"p",food_carbs:"c",food_fat:"f",food_saturated:"saturated",food_trans:"trans",food_fiber:"fiber",food_sugars:"sugars",food_added_sugars:"addedSugars",food_sodium:"sodium",food_source:"source",food_source_ref:"sourceRef",food_source_type:"sourceType",food_notes:"notes"};const food={};for(const [field,target] of Object.entries(foodMap)){if(values[field]!==undefined)food[target]=values[field];}const microFields={food_calcium:"calcium",food_iron:"iron",food_magnesium:"magnesium",food_phosphorus:"phosphorus",food_potassium:"potassium",food_zinc:"zinc",food_copper:"copper",food_manganese:"manganese",food_selenium:"selenium",food_iodine:"iodine",food_vitamin_a:"vitaminA",food_vitamin_d:"vitaminD",food_vitamin_e:"vitaminE",food_vitamin_k:"vitaminK",food_vitamin_c:"vitaminC",food_b1:"b1",food_b2:"b2",food_b3:"b3",food_b5:"b5",food_b6:"b6",food_b7:"b7",food_b9:"b9",food_b12:"b12"};food.micronutrients={};for(const [field,key] of Object.entries(microFields))if(values[field]!==undefined)food.micronutrients[key]=Number(values[field])||0;if(food.name&&food.k!==undefined&&food.p!==undefined&&food.c!==undefined&&food.f!==undefined)return JSON.stringify({foods:[food]});const exerciseMap={exercise_name:"name",exercise_muscle:"muscle",exercise_focus:"focus",exercise_secondary:"secondary",exercise_equipment:"equipment",exercise_type:"type",exercise_level:"level",exercise_pattern:"pattern",exercise_tips:"tips",exercise_errors:"errors",exercise_alternatives:"alternatives",exercise_sets:"sets",exercise_reps:"reps",exercise_rest:"rest",exercise_notes:"notes"};
   const exercise={};
   for(const [field,target] of Object.entries(exerciseMap)){
    if(values[field]===undefined)continue;
    const value=values[field];
    exercise[target]=["secondary","tips","errors","alternatives"].includes(target)
     ?value.split(/\\n|\r?\n|[;|]+/).map(x=>x.trim()).filter(Boolean)
     :value;
   }
   if(exercise.name&&exercise.focus){
    return JSON.stringify({exercises:[exercise]});
   }
  }
 }catch(err){console.warn("FORMA: não foi possível ler os campos preenchíveis do PDF",err);}
 const pages=[];
 for(let n=1;n<=Math.min(pdf.numPages,1000);n++){
  const page=await pdf.getPage(n),content=await page.getTextContent(),rows=new Map();
  for(const item of content.items){if(!item.str||!item.str.trim())continue;const y=Math.round((item.transform?.[5]||0)/2)*2;const line=rows.get(y)||[];line.push({x:item.transform?.[4]||0,width:item.width||0,text:item.str});rows.set(y,line);}
  const ordered=[...rows.entries()].sort((a,b)=>b[0]-a[0]).map(([,items])=>{const sorted=items.sort((a,b)=>a.x-b.x);let line='',end=null;for(const item of sorted){if(end!==null){const gap=item.x-end;line+=gap>24?'\t':gap>3?' ':'';}line+=item.text;end=item.x+(Number(item.width)||String(item.text||'').length*4);}return line;});
  pages.push(ordered.join("\n"));
 }
 const extracted=pages.join("\n\n").trim();
 if(!extracted)throw new Error("O PDF não contém texto selecionável. PDFs escaneados como imagem precisam de OCR antes da importação.");
 const b0=extracted.indexOf("FORMA_BACKUP_BASE64_BEGIN"),b1=extracted.indexOf("FORMA_BACKUP_BASE64_END");
 if(b0>=0&&b1>b0){const encoded=extracted.slice(b0+"FORMA_BACKUP_BASE64_BEGIN".length,b1).replace(/\s+/g,"");try{const binary=atob(encoded),bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));return new TextDecoder().decode(bytes);}catch(error){throw new Error("O bloco de backup do PDF está corrompido. Gere um novo backup completo.");}}
 const firstObject=extracted.indexOf("{"),lastObject=extracted.lastIndexOf("}");
 if(firstObject>=0&&lastObject>firstObject){const candidate=extracted.slice(firstObject,lastObject+1);try{JSON.parse(candidate);return candidate;}catch(error){}}
 return extracted;
}

function applyExtractedBioText(txt){let structured=null;try{structured=JSON.parse(String(txt||""));}catch(_){}if(structured?.format==="FORMA_BIOIMPEDANCE"){const d=structured.bioimpedance||structured.measurement||structured;const assign=(id,value)=>{const el=$(id);if(el&&value!==undefined&&value!==null&&value!=="")el.value=String(value);};assign("uDate",d.date);assign("uWeight",d.weight);assign("uWaist",d.waist);assign("uFat",d.fat);assign("uMuscle",d.muscle);assign("uWater",d.water);if(d.notes){const note=$("uNotes");if(note)note.value=(note.value+"\n"+String(d.notes)).trim();}return;}const notes=$("uNotes");notes.value=(notes.value+"\n"+txt.slice(0,7000)).trim();const find=(patterns)=>{for(const pat of patterns){const m=txt.match(pat);if(m){const v=Number(m[1].replace(/\./g,"").replace(",","."));if(Number.isFinite(v))return v}}return null};const fat=find([/(?:gordura corporal|percentual de gordura|body fat)[^\d]{0,30}(\d{1,2}(?:[.,]\d+)?)/i,/(\d{1,2}(?:[.,]\d+)?)\s*%[^\n]{0,25}(?:gordura|body fat)/i]);const muscle=find([/(?:massa muscular|muscle mass)[^\d]{0,30}(\d{1,3}(?:[.,]\d+)?)/i]);const water=find([/(?:água corporal|agua corporal|body water)[^\d]{0,30}(\d{1,2}(?:[.,]\d+)?)/i]);if(fat&&fat>=2&&fat<=70&&!$("uFat").value)$("uFat").value=fat;if(muscle&&muscle>=1&&muscle<=150&&!$("uMuscle").value)$("uMuscle").value=muscle;if(water&&water>=10&&water<=90&&!$("uWater").value)$("uWater").value=water;}
$("bioFile").addEventListener("change",async()=>{const f=$("bioFile").files[0];if(!f)return;const out=$("bioFileInfo");out.style.display="block";out.textContent="Arquivo selecionado: "+f.name+" ("+Math.round(f.size/1024)+" KB).";try{if(/\.(txt|csv)$/i.test(f.name)){const txt=await f.text();applyExtractedBioText(txt);out.textContent+="\n\nTexto lido. Confira os valores preenchidos antes de salvar.";}else if(/\.pdf$/i.test(f.name)){out.textContent+="\nTentando extrair o texto do PDF…";const lib=await loadPdfJs(),buf=await f.arrayBuffer(),pdf=await lib.getDocument({data:buf}).promise;let txt="";for(let i=1;i<=Math.min(pdf.numPages,20);i++){const page=await pdf.getPage(i),content=await page.getTextContent();txt+=content.items.map(x=>x.str).join(" ")+"\n";}if(txt.trim()){applyExtractedBioText(txt);out.textContent="Texto extraído de "+pdf.numPages+" página(s). Confira os campos sugeridos e as observações antes de salvar. PDFs escaneados sem camada de texto precisam de OCR.";}else out.textContent="Não encontrei texto selecionável no PDF. Se for um escaneamento, preencha os campos manualmente.";}else{out.textContent+="\nEste formato não permite extração automática de texto neste app.";}}catch(err){out.textContent+="\nNão consegui extrair o PDF agora (a leitura requer internet para carregar o leitor de PDF). Copie os resultados para as observações ou preencha os campos manualmente.";}});
$("updateForm").addEventListener("submit",e=>{e.preventDefault();const weight=$("uWeight").value?Number($("uWeight").value):null,date=$("uDate").value||dateKey(),waist=$("uWaist").value?Number($("uWaist").value):null;if(date>dateKey()){alert("A data da medição não pode estar no futuro.");return;}if(weight!==null&&(!Number.isFinite(weight)||weight<30||weight>300)){alert("Informe um peso entre 30 e 300 kg.");return;}if(waist!==null&&(!Number.isFinite(waist)||waist<30||waist>250)){alert("Informe uma cintura entre 30 e 250 cm.");return;}const fatValue=$("uFat").value?Number($("uFat").value):null,muscleValue=$("uMuscle").value?Number($("uMuscle").value):null,waterValue=$("uWater").value?Number($("uWater").value):null;if(fatValue!==null&&(!Number.isFinite(fatValue)||fatValue<2||fatValue>70)){alert("Confira o percentual de gordura (2 a 70%).");return;}if(muscleValue!==null&&(!Number.isFinite(muscleValue)||muscleValue<1||muscleValue>150)){alert("Confira a massa muscular (1 a 150 kg).");return;}if(waterValue!==null&&(!Number.isFinite(waterValue)||waterValue<10||waterValue>90)){alert("Confira a água corporal (10 a 90%).");return;}if(weight!==null){state.progress=state.progress.filter(p=>p.date!==date);state.progress.push({id:Date.now().toString(),weight,waist,date});state.progress.sort((a,b)=>a.date.localeCompare(b.date));state.startWeight=state.startWeight||weight;}const bio={date,fileName:$("bioFile").files[0]?.name||"",fat:fatValue,muscle:muscleValue,water:waterValue,notes:$("uNotes").value.trim()};if(bio.fat||bio.muscle||bio.water||bio.notes||bio.fileName){state.bioimpedance=state.bioimpedance||[];const existingIndex=state.bioimpedance.findIndex(x=>x.date===date);if(existingIndex>=0){const prior=state.bioimpedance[existingIndex];state.bioimpedance[existingIndex]={...prior,...Object.fromEntries(Object.entries(bio).filter(([k,v])=>v!==null&&v!=='')),date};}else state.bioimpedance.push(bio);}const msgs=[];if(weight)msgs.push("Peso registrado: "+weight.toLocaleString("pt-BR")+" kg.");if(bio.fat)msgs.push("Gordura corporal informada: "+bio.fat+"%.");if(bio.muscle)msgs.push("Massa muscular informada: "+bio.muscle+" kg.");if(bio.water)msgs.push("Água corporal informada: "+bio.water+"%.");const lastThree=state.progress.slice(-3);if(lastThree.length>=2){const delta=lastThree[lastThree.length-1].weight-lastThree[0].weight;if(Math.abs(delta)>=0.8)msgs.push("Variação de "+delta.toLocaleString("pt-BR",{maximumFractionDigits:1})+" kg entre os registros recentes. Confirme se as pesagens foram feitas em condições semelhantes antes de alterar as calorias.");}if(state.progress.length>=2){const a=state.progress[state.progress.length-2],b=state.progress[state.progress.length-1],daysApart=(new Date(b.date+"T12:00:00")-new Date(a.date+"T12:00:00"))/86400000;if(daysApart>=10&&Math.abs(b.weight-a.weight)<0.3)msgs.push("O peso ficou praticamente estável entre duas medições separadas por pelo menos 10 dias. Antes de reduzir calorias, confira a média semanal, porções, passos, sono e adesão por mais 1–2 semanas.");}if(bio.fat&&state.profileData?.goal==="fatloss")msgs.push("Para perda de gordura, acompanhe a tendência de cintura, peso e força; não altere o plano apenas por uma leitura isolada de bioimpedância.");if(!msgs.length)msgs.push("Dados salvos. Para sugerir ajustes mais úteis, registre peso e, se disponível, cintura e resultados de composição corporal.");save();renderProgress();updateDashboard();refreshProfileLayout();const fb=$("updateFeedback");fb.textContent=msgs.join(" ")+" O app não interpreta laudos médicos nem muda calorias automaticamente com base em uma única medição.";fb.style.display="block";});
function profileInitials(name){const parts=String(name||"Meu perfil").trim().split(/\s+/).filter(Boolean);return (parts.length>1?parts[0][0]+parts[parts.length-1][0]:parts[0]?.slice(0,2)||"MP").toUpperCase();}
function paintAvatar(el,profile){if(!el)return;const name=profile?.name||"Meu perfil",src=profile?.avatar;if(typeof src==="string"&&/^data:image\/(?:jpeg|png|webp|gif);base64,/i.test(src)){el.replaceChildren();const img=document.createElement("img");img.alt="";img.src=src;el.appendChild(img);}else{el.textContent=profileInitials(name);}}
function renderProfiles(){const sel=$("profileSelect");if(sel)sel.innerHTML=Object.values(profiles).map(p=>`<option value="${esc(p.id)}" ${p.id===activeProfileId?"selected":""}>${esc(p.name)}</option>`).join("");const p=profiles[activeProfileId]||{name:"Meu perfil"};paintAvatar($("profileModalAvatar"),p);const modalName=$("profileModalName");if(modalName)modalName.textContent=p.name;updateAccountBadge(formaAuthUser);}
function openProfiles(){closeTabMenu();renderProfiles();$("profilesModal").classList.add("open");}
function closeProfiles(){$("profilesModal").classList.remove("open");}
function switchProfile(id){if(!profiles[id])return;if(id===activeProfileId){closeProfiles();return;}if(restInterval){clearInterval(restInterval);restInterval=null;}save();activeProfileId=id;localStorage.setItem(ACTIVE_PROFILE_STORE,id);state={...freshState(),...(profiles[id].data||{}),targets:{...freshState().targets,...((profiles[id].data||{}).targets||{})}};applyProfileEdits();save();

applyCustomAppearance();if($("foodDiaryDate")&&!$("foodDiaryDate").value)$("foodDiaryDate").value=dateKey();renderMeals();renderAutoFoodPlan();renderWeekButtons();renderWorkout();updateDashboard();renderProgress();refreshProfileLayout();if(document.querySelector('[data-food-area=\"plan\"].active'))window.renderFormaNutritionPlan?.();if(document.querySelector('[data-food-area=\"schedule\"].active'))window.renderFormaNutritionSchedule?.();closeProfiles();}
$("profileBadge").addEventListener("click",e=>{e.preventDefault();e.stopPropagation();if(openSync()){syncStatus("Verificando sua conta…");initFormaAuth().then(client=>{if(!client)syncStatus("Não foi possível iniciar o login. Verifique a conexão e tente novamente.");}).catch(err=>{console.error("FORMA: falha ao iniciar conta",err);syncStatus("Erro ao iniciar a conta: "+(err?.message||"falha inesperada"));});}});$("closeProfiles").addEventListener("click",closeProfiles);$("profilesModal").addEventListener("click",e=>{if(e.target.id==="profilesModal")closeProfiles()});
$("profilePhotoBtn").addEventListener("click",()=>$("profilePhotoInput").click());
$("profilePhotoInput").addEventListener("change",async()=>{const file=$("profilePhotoInput").files?.[0];if(!file)return;if(!file.type.startsWith("image/")){alert("Escolha um arquivo de imagem.");return;}if(file.size>12*1024*1024){alert("A imagem deve ter até 12 MB.");$("profilePhotoInput").value="";return;}try{const dataUrl=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=()=>reject(new Error("Não foi possível ler a imagem."));reader.onload=()=>{const img=new Image();img.onerror=()=>reject(new Error("Arquivo de imagem inválido."));img.onload=()=>{const canvas=document.createElement("canvas"),max=256,scale=Math.min(1,max/Math.max(img.width,img.height));canvas.width=Math.max(1,Math.round(img.width*scale));canvas.height=Math.max(1,Math.round(img.height*scale));const ctx=canvas.getContext("2d");ctx.drawImage(img,0,0,canvas.width,canvas.height);resolve(canvas.toDataURL("image/jpeg",.82));};img.src=reader.result;};reader.readAsDataURL(file);});profiles[activeProfileId].avatar=dataUrl;save();renderProfiles();}catch(err){console.error(err);alert("Não foi possível usar essa imagem. Tente outro arquivo.");}finally{$("profilePhotoInput").value="";}});
$("removeProfilePhotoBtn").addEventListener("click",()=>{if(profiles[activeProfileId])delete profiles[activeProfileId].avatar;save();renderProfiles();});
$("switchProfileBtn").addEventListener("click",()=>switchProfile($("profileSelect").value));
$("newProfileBtn").addEventListener("click",()=>{const name=prompt("Nome para o novo perfil (ex.: Ana, João)");if(name===null)return;const clean=name.trim();if(!clean){alert("Digite um nome para o perfil.");return;}if(Object.values(profiles).some(p=>p.name.toLowerCase()===clean.toLowerCase())){alert("Já existe um perfil com esse nome.");return;}save();const id="p_"+Date.now().toString(36);profiles[id]={id,name:clean,data:freshState()};localStorage.setItem(PROFILE_STORE,JSON.stringify(profiles));switchProfile(id);renderProfiles();openOnboarding();});
$("renameProfileBtn").addEventListener("click",()=>{const p=profiles[activeProfileId];const name=prompt("Novo nome do perfil",p.name);if(name===null)return;const clean=name.trim();if(!clean)return;if(Object.values(profiles).some(x=>x.id!==activeProfileId&&x.name.toLowerCase()===clean.toLowerCase())){alert("Já existe um perfil com esse nome.");return;}p.name=clean;save();applyCustomAppearance();renderProfiles();});
$("deleteProfileBtn").addEventListener("click",()=>{if(Object.keys(profiles).length<2){alert("É necessário manter pelo menos um perfil.");return;}if(restInterval){clearInterval(restInterval);restInterval=null;}const p=profiles[activeProfileId];if(!confirm(`Excluir o perfil “${p.name}” e seus dados deste navegador?`))return;delete profiles[activeProfileId];activeProfileId=Object.keys(profiles)[0];localStorage.setItem(PROFILE_STORE,JSON.stringify(profiles));localStorage.setItem(ACTIVE_PROFILE_STORE,activeProfileId);state={...freshState(),...(profiles[activeProfileId].data||{}),targets:{...freshState().targets,...((profiles[activeProfileId].data||{}).targets||{})}};applyProfileEdits();save();

applyCustomAppearance();if($("foodDiaryDate")&&!$("foodDiaryDate").value)$("foodDiaryDate").value=dateKey();renderMeals();renderAutoFoodPlan();renderWeekButtons();renderWorkout();updateDashboard();renderProgress();refreshProfileLayout();renderProfiles();});
function setFoodGoalsTab(tab){const valid=['current','calculate','manual','import'];if(!valid.includes(tab))tab='current';document.querySelectorAll('[role="tab"][data-food-goals-tab]').forEach(button=>{const active=button.dataset.foodGoalsTab===tab;button.classList.toggle('active',active);button.setAttribute('aria-selected',active?'true':'false');});valid.forEach(name=>{const panel=$('foodGoalTab'+name[0].toUpperCase()+name.slice(1));if(panel)panel.hidden=name!==tab;});}
function renderFoodGoalsCurrent(){const t=state.targets||{},a=state.nutritionAssessment||{},c=a.calculation||null;const fmtGoal=value=>Number(value||0).toLocaleString('pt-BR',{maximumFractionDigits:1});const values=[['Energia',fmtGoal(t.kcal)+' <small>kcal/dia</small>'],['Proteínas',fmtGoal(t.protein)+' <small>g/dia</small>'],['Carboidratos',fmtGoal(t.carbs)+' <small>g/dia</small>'],['Gorduras',fmtGoal(t.fat)+' <small>g/dia</small>']];const applied=!!c&&['kcal','protein','carbs','fat'].every(key=>Math.abs(Number(c[key]||0)-Number(t[key]||0))<0.51);const note=applied?'Os valores correspondem à última avaliação calculada e aplicada.':c?'As metas atuais são diferentes do último cálculo salvo.':'Estas são as metas atualmente configuradas para o diário.';const cards=values.map(item=>'<div class="food-goal-current-stat"><span>'+item[0]+'</span><strong>'+item[1]+'</strong></div>').join('');const host=$('foodGoalsCurrentSummary');if(host)host.innerHTML='<div class="food-goals-current-grid">'+cards+'</div><p class="food-goals-current-note">'+note+'</p>';const overview=$('nutritionCurrentTargetsSummary');if(overview)overview.innerHTML='<div class="nutrition-overview-targets-grid">'+values.map(item=>'<div><span>'+item[0]+'</span><strong>'+item[1]+'</strong></div>').join('')+'</div>';}
renderFoodGoalsCurrent();
function openFoodGoals(){closeTabMenu();const modal=$('foodGoalsModal');if(!modal)return;$('foodGoalKcal').value=state.targets?.kcal||1900;$('foodGoalProtein').value=state.targets?.protein||130;$('foodGoalCarbs').value=state.targets?.carbs||210;$('foodGoalFat').value=state.targets?.fat||60;updateFoodGoalPreview();renderFoodGoalsCurrent();const panel=$('nutritionPlanPanel'),importCard=$('nutritionImportCard'),calculateMount=$('foodGoalCalculateMount'),importMount=$('foodGoalImportMount');if(panel&&calculateMount){panel.hidden=false;if(panel.parentElement!==calculateMount)calculateMount.append(panel);}if(importCard&&importMount){importCard.hidden=false;if(importCard.parentElement!==importMount)importMount.append(importCard);}window.renderFormaNutritionPlan?.();window.renderFormaNutritionImportedPlan?.();setFoodGoalsTab('current');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>{$('foodGoalsTabCurrent')?.focus({preventScroll:true});},0)}
function closeFoodGoals(){const modal=$('foodGoalsModal');if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';$('foodGoalsBtn')?.focus({preventScroll:true})}
document.querySelectorAll('[data-food-goals-tab]').forEach(button=>button.addEventListener('click',()=>setFoodGoalsTab(button.dataset.foodGoalsTab)));
function updateFoodGoalPreview(){const k=Number($('foodGoalProtein')?.value||0)*4+Number($('foodGoalCarbs')?.value||0)*4+Number($('foodGoalFat')?.value||0)*9;if($('foodGoalMacroKcal'))$('foodGoalMacroKcal').textContent=Number.isFinite(k)?Math.round(k).toLocaleString('pt-BR')+' kcal':'— kcal'}
['foodGoalProtein','foodGoalCarbs','foodGoalFat'].forEach(id=>$(id)?.addEventListener('input',updateFoodGoalPreview));
$('closeFoodGoals')?.addEventListener('click',closeFoodGoals);$('cancelFoodGoals')?.addEventListener('click',closeFoodGoals);$('foodGoalsModal')?.addEventListener('click',e=>{if(e.target===$('foodGoalsModal'))closeFoodGoals()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('foodGoalsModal')?.classList.contains('open'))closeFoodGoals()});document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{if($('foodGoalsModal')?.classList.contains('open'))closeFoodGoals()}));
$('saveFoodGoals')?.addEventListener('click',()=>{const fields=[['foodGoalKcal',1000,6000,'calorias'],['foodGoalProtein',30,300,'proteínas'],['foodGoalCarbs',30,700,'carboidratos'],['foodGoalFat',20,250,'gorduras']];for(const [id,min,max,label] of fields){const raw=$(id).value,n=Number(raw);if(!raw.trim()||!Number.isFinite(n)||n<min||n>max){alert(`Confira a meta de ${label}: informe um valor entre ${min} e ${max}.`);$(id).focus();return;}}const previous={...state.targets};state.targets={...state.targets,kcal:Number($('foodGoalKcal').value),protein:Number($('foodGoalProtein').value),carbs:Number($('foodGoalCarbs').value),fat:Number($('foodGoalFat').value)};if(!save()){state.targets=previous;alert('Não foi possível salvar as metas. Os valores anteriores foram restaurados.');return;}applyCustomAppearance();updateDashboard();renderFoodSummary();renderFoodDiary();if(state.autoFoodPlan)buildAutoFoodPlan();renderFoodGoalsCurrent();closeFoodGoals();});
const APPEARANCE_PALETTES={red:["#ff555d","#d93440"],blue:["#62a9ff","#3678db"],purple:["#b58aff","#8054d6"],green:["#55d6a0","#239b70"],orange:["#ffb45f","#e47a28"]};
function applyAppearanceSettings(){const root=document.documentElement;const selectedPalette=Object.prototype.hasOwnProperty.call(APPEARANCE_PALETTES,state.palette)?state.palette:"red";state.palette=selectedPalette;const [a,a2]=APPEARANCE_PALETTES[selectedPalette];state.accent=a;state.accent2=a2;root.style.setProperty("--accent",a);root.style.setProperty("--primary",a);root.style.setProperty("--lime",a);root.style.setProperty("--red",a);root.style.setProperty("--coral",a);root.style.setProperty("--accent2",a2);root.style.setProperty("--accent-soft",`color-mix(in srgb, ${a} 16%, transparent)`);root.style.setProperty("--accent-border",`color-mix(in srgb, ${a} 48%, #34445a)`);root.style.setProperty("--accent-panel",`color-mix(in srgb, ${a} 22%, #111827)`);root.style.setProperty("--accent-panel-strong",`color-mix(in srgb, ${a} 34%, #111827)`);root.style.setProperty("--accent-tint",`color-mix(in srgb, ${a} 58%, white)`);/* Mantém a barra superior do sistema neutra; a paleta personalizada afeta apenas a interface do app. */const themeMeta=document.querySelector('meta[name="theme-color"]');if(themeMeta)themeMeta.setAttribute("content","#121d30");root.classList.toggle("radius-sharp",state.cardRadius==="sharp");root.classList.toggle("density-compact",state.density==="compact");root.classList.toggle("density-comfortable",state.density!=="compact");document.querySelectorAll(".app").forEach(app=>{app.classList.toggle("radius-sharp",state.cardRadius==="sharp");app.classList.toggle("density-compact",state.density==="compact");});}
function syncAppearanceChoices(){document.querySelectorAll("[data-palette]").forEach(b=>b.classList.toggle("selected",(state.palette||"red")===b.dataset.palette));document.querySelectorAll("[data-radius]").forEach(b=>b.classList.toggle("selected",(state.cardRadius||"soft")===b.dataset.radius));document.querySelectorAll("[data-density]").forEach(b=>b.classList.toggle("selected",(state.density||"comfortable")===b.dataset.density));}
function openCustom(){closeTabMenu();syncAppearanceChoices();$("customModal").classList.add("open")}
function closeCustom(){$("customModal").classList.remove("open")}
$("closeCustom").addEventListener("click",closeCustom);$("customModal").addEventListener("click",e=>{if(e.target.id==="customModal")closeCustom()});
document.querySelectorAll("[data-palette]").forEach(b=>b.addEventListener("click",()=>{state.palette=b.dataset.palette;[state.accent,state.accent2]=APPEARANCE_PALETTES[state.palette];applyAppearanceSettings();syncAppearanceChoices()}));
document.querySelectorAll("[data-radius]").forEach(b=>b.addEventListener("click",()=>{state.cardRadius=b.dataset.radius;applyAppearanceSettings();syncAppearanceChoices()}));
document.querySelectorAll("[data-density]").forEach(b=>b.addEventListener("click",()=>{state.density=b.dataset.density;applyAppearanceSettings();syncAppearanceChoices()}));
$("saveCustom").addEventListener("click",()=>{save();applyAppearanceSettings();closeCustom()});
$("resetCustom").addEventListener("click",()=>{if(!confirm("Restaurar as cores e o visual padrão? Seus treinos, refeições, metas e registros serão mantidos."))return;state.accent="#ff555d";state.accent2="#d93440";state.palette="red";state.cardRadius="soft";state.density="comfortable";save();applyAppearanceSettings();syncAppearanceChoices()});
function applyCustomAppearance(){renderProfiles();applyAppearanceSettings();$("goalWeight").textContent=state.goalWeight==null?"—":state.goalWeight;$("kcalTargetStat").textContent=state.targets.kcal==null?"—":Number(state.targets.kcal).toLocaleString("pt-BR");$("proteinTargetStat").textContent=state.targets.protein==null?"—":state.targets.protein+" g";if($("dietProteinTarget"))$("dietProteinTarget").textContent=state.targets.protein==null?"—":state.targets.protein+" g";if($("dietCarbsTarget"))$("dietCarbsTarget").textContent=state.targets.carbs==null?"—":state.targets.carbs+" g";if($("dietFatTarget"))$("dietFatTarget").textContent=state.targets.fat==null?"—":state.targets.fat+" g";if(state.planTitle){$("dietHeading").textContent=state.planTitle;document.querySelector(".hero-main .eyebrow").textContent=state.planTitle}else{$("dietHeading").textContent="Alimentação prática";document.querySelector(".hero-main .eyebrow").textContent="Projeto físico atlético"}}
async function exportFormaData(){try{if(!save())throw new Error("Não foi possível salvar os dados locais antes da exportação.");const active=profiles[activeProfileId];if(!active||!activeProfileId)throw new Error("Não foi possível identificar o perfil atualmente aberto.");let avatar=typeof active.avatar==="string"&&/^data:image\/(?:jpeg|png|webp);base64,/i.test(active.avatar)?active.avatar:"";const authMeta=formaAuthUser?.user_metadata||{};const googlePhoto=authMeta.avatar_url||authMeta.picture||"";if(!avatar&&googlePhoto){try{const response=await fetch(googlePhoto,{mode:"cors",credentials:"omit",cache:"no-store"});if(!response.ok)throw new Error("Imagem de perfil indisponível");const blob=await response.blob(),bitmap=await createImageBitmap(blob),canvas=document.createElement("canvas"),max=256,scale=Math.min(1,max/Math.max(bitmap.width,bitmap.height));canvas.width=Math.max(1,Math.round(bitmap.width*scale));canvas.height=Math.max(1,Math.round(bitmap.height*scale));const ctx=canvas.getContext("2d");ctx.drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close?.();avatar=canvas.toDataURL("image/jpeg",.86);}catch(photoError){console.warn("FORMA: não foi possível incorporar a foto do Google ao backup; será usado o avatar alternativo.",photoError);}}const profile={id:activeProfileId,name:String(active.name||"Perfil"),...(avatar?{avatar}:{}),data:migrateFoodStateObject(JSON.parse(JSON.stringify(state)))};profiles[activeProfileId]={...active,data:JSON.parse(JSON.stringify(profile.data))};localStorage.setItem(PROFILE_STORE,JSON.stringify(profiles));const backup={format:"FORMA-backup",version:4,exportedAt:new Date().toISOString(),profile};const safeName=String(profile.name).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));const summary='<section class="section"><h2>Backup individual do FORMA</h2><p>Esta cópia contém exclusivamente os dados do perfil selecionado no momento da exportação. Os demais perfis deste dispositivo não são incluídos nem serão alterados durante a restauração.</p><div class="stats"><div class="stat"><span>Perfil incluído</span><strong>'+safeName+'</strong></div><div class="stat"><span>Perfis no backup</span><strong>1</strong></div><div class="stat"><span>Formato</span><strong>PDF</strong></div></div></section>';return window.openStructuredPdf("Backup do perfil — "+profile.name,"Cópia de segurança individual · PDF",summary,backup);}catch(err){console.error("FORMA export",err);alert("Não foi possível preparar o backup em PDF: "+(err.message||"erro inesperado"));}}
$("todayLabel").textContent=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"2-digit",month:"short"});
let installPrompt=null;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installPrompt=e;const installButton=$("installAppBtn");if(installButton)installButton.textContent="＋ Instalar aplicativo";});

// Delegação robusta para o menu Ferramentas: funciona com toque e clique, sem depender de listeners dispersos.
const toolsMenuElement=$("toolsMenu");
if(toolsMenuElement){
 toolsMenuElement.addEventListener("click",async e=>{
  const button=e.target.closest("button.menu-item");
  if(!button)return;
  e.preventDefault();e.stopPropagation();
  const action=button.id;
  if(action==="refreshPageBtn"){
   closeTabMenu();
   window.location.reload();
  }else if(action==="helpMenuBtn"){
   closeTabMenu();
   alert("Dicas rápidas do FORMA\n\n• Use a aba Treinos para consultar e registrar exercícios.\n• Use Alimentação para organizar suas refeições.\n• Em Progresso, registre medidas e acompanhe sua evolução.\n• Acesse Importar e exportar para gerenciar arquivos, modelos e backups.\n• Para entrar na conta e sincronizar, toque no avatar do perfil.");
  }else if(action==="customizeBtn"){
   openCustom();
  }else if(action==="settingsMenuBtn"){
   closeTabMenu();
   showTab("configuracoes");
  }else if(action==="exportMenuBtn"){
   closeTabMenu();showTab("configuracoes");window.formaOpenFilesModal?.("exportar");
  }else if(action==="importMenuBtn"||action==="importFoodsMenuBtn"||action==="importMealsMenuBtn"||action==="importExercisesMenuBtn"){
   closeTabMenu();showTab("configuracoes");window.formaOpenUniversalImport?.();
  }else if(action==="installAppBtn"){
   closeTabMenu();
   if(installPrompt){installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;}
   else if(window.matchMedia("(display-mode: standalone)").matches){alert("O FORMA já está instalado neste dispositivo.");}
   else{alert("Para instalar: abra esta versão em um endereço HTTPS no Chrome, toque no menu do navegador e escolha ‘Instalar app’ ou ‘Adicionar à tela inicial’. Se a opção não aparecer, confirme que o site está hospedado com os arquivos manifest.webmanifest, sw.js e icon.svg.");}
  }
 },true);
}
// Registro de cardio (dados manuais do Galaxy Watch 7)
function cardioNumber(id){const raw=$(id).value.trim().replace(",",".");if(!raw)return null;const n=Number(raw);return Number.isFinite(n)?n:null}
function formatCardioDate(date){if(!date)return "Data não informada";const parts=date.split("-").map(Number);return new Date(parts[0],parts[1]-1,parts[2]).toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit",month:"short",year:"numeric"})}
function renderCardioHistory(){
 const sessions=Array.isArray(state.cardioSessions)?state.cardioSessions:[];sessions.sort((a,b)=>(b.date||"").localeCompare(a.date||"")||(b.createdAt||0)-(a.createdAt||0));
 const totalMinutes=sessions.reduce((sum,x)=>sum+(Number(x.duration)||0),0),totalCalories=sessions.reduce((sum,x)=>sum+(Number(x.calories)||0),0),totalKm=sessions.reduce((sum,x)=>sum+(Number(x.distance)||0),0);
 const avgHrValues=sessions.filter(x=>Number(x.avgHr)>0).map(x=>Number(x.avgHr));const avgHr=avgHrValues.length?Math.round(avgHrValues.reduce((a,b)=>a+b,0)/avgHrValues.length):null;
 const quick=$("cardioQuickStats");if(quick)quick.innerHTML=`<span>${sessions.length} ${sessions.length===1?"sessão registrada":"sessões registradas"}</span><span>${totalMinutes} min acumulados</span>`;
 const pill=$("cardioCountPill");if(pill)pill.textContent=`${sessions.length} ${sessions.length===1?"SESSÃO":"SESSÕES"}`;
 const summary=$("cardioHistorySummary");if(summary)summary.innerHTML=[ ["Tempo total",`${totalMinutes} min`],["Calorias registradas",`${Math.round(totalCalories)} kcal`],["Distância",`${totalKm.toLocaleString("pt-BR",{maximumFractionDigits:2})} km`],["FC média registrada",avgHr?`${avgHr} bpm`:"—"] ].map(([label,value])=>`<div class="cardio-summary-tile"><span>${label}</span><strong>${value}</strong></div>`).join("");
 const list=$("cardioHistoryList");if(!list)return;if(!sessions.length){list.innerHTML='<p class="muted" style="font-size:12px">Nenhuma sessão registrada ainda. Salve seu primeiro cardio acima.</p>';return;}
 list.innerHTML=sessions.map(x=>`<article class="cardio-history-item"><div class="cardio-history-top"><div><h4>${esc(x.type||"Cardio")} · ${Number(x.duration)||0} min</h4><p>${esc(formatCardioDate(x.date))}${x.effort?` · Esforço ${esc(x.effort.toLowerCase())}`:""}</p></div><button type="button" class="cardio-delete-btn" data-delete-cardio="${esc(String(x.id))}" aria-label="Excluir sessão de cardio">Excluir</button></div><div class="cardio-history-metrics">${x.calories!==null&&x.calories!==undefined?`<span class="cardio-metric-chip">🔥 ${Math.round(Number(x.calories))} kcal</span>`:""}${x.steps!==null&&x.steps!==undefined?`<span class="cardio-metric-chip">👣 ${Number(x.steps).toLocaleString("pt-BR")} passos</span>`:""}${x.distance!==null&&x.distance!==undefined?`<span class="cardio-metric-chip">↔ ${Number(x.distance).toLocaleString("pt-BR")} km</span>`:""}${x.pace?`<span class="cardio-metric-chip">⌁ ${esc(x.pace)} min/km</span>`:""}${x.avgHr!==null&&x.avgHr!==undefined?`<span class="cardio-metric-chip">♥ ${Number(x.avgHr)} bpm média</span>`:""}${x.maxHr!==null&&x.maxHr!==undefined?`<span class="cardio-metric-chip">↗ ${Number(x.maxHr)} bpm máxima</span>`:""}</div>${x.notes?`<p class="cardio-history-notes">${esc(x.notes)}</p>`:""}</article>`).join("");
 list.querySelectorAll("[data-delete-cardio]").forEach(btn=>btn.addEventListener("click",()=>{const id=btn.dataset.deleteCardio;const item=sessions.find(x=>String(x.id)===id);if(!item||!confirm(`Excluir o registro de ${item.type||"cardio"} de ${formatCardioDate(item.date)}?`))return;state.cardioSessions=sessions.filter(x=>String(x.id)!==id);save();renderCardioHistory();if(typeof window.renderFormaCardioProgress==='function')window.renderFormaCardioProgress()}));
}
function clearCardioFields(){["cardioDuration","cardioCalories","cardioSteps","cardioDistance","cardioAvgHr","cardioMaxHr","cardioPace","cardioNotes"].forEach(id=>$(id).value="");$("cardioDate").value=dateKey();$("cardioType").value="Caminhada";$("cardioEffort").value="";}
$("cardioBackToPlan").addEventListener("click",()=>showTab("treino"));
$("clearCardioForm").addEventListener("click",clearCardioFields);
$("cardioDate").value=dateKey();
$("cardioForm").addEventListener("submit",e=>{e.preventDefault();const date=$("cardioDate").value,duration=cardioNumber("cardioDuration");if(!date||date>dateKey()){alert("Escolha uma data válida, que não esteja no futuro.");return;}if(!duration||duration<1||duration>1440){alert("Informe a duração do cardio em minutos (de 1 a 1440).");$("cardioDuration").focus();return;}const fields={calories:["cardioCalories",0,10000],steps:["cardioSteps",0,200000],distance:["cardioDistance",0,1000],avgHr:["cardioAvgHr",30,250],maxHr:["cardioMaxHr",30,250]};const values={};for(const [key,[id,min,max]] of Object.entries(fields)){const n=cardioNumber(id);if(n!==null&&(n<min||n>max)){alert(`Confira o campo ${$(id).previousElementSibling.textContent}: valor fora do intervalo esperado.`);$(id).focus();return;}values[key]=n;}if(values.avgHr!==null&&values.maxHr!==null&&values.maxHr<values.avgHr){alert("A frequência cardíaca máxima não pode ser menor que a média.");$("cardioMaxHr").focus();return;}const pace=$("cardioPace").value.trim();if(pace&&!/^\d{1,2}:[0-5]\d$/.test(pace)){alert("Informe o ritmo no formato minutos:segundos por km, por exemplo 6:45.");$("cardioPace").focus();return;}state.cardioSessions=Array.isArray(state.cardioSessions)?state.cardioSessions:[];state.cardioSessions.push({id:"cardio_"+Date.now().toString(36),date,type:$("cardioType").value,duration,...values,pace:pace||null,effort:$("cardioEffort").value,notes:$("cardioNotes").value.trim(),createdAt:Date.now()});save();renderCardioHistory();if(typeof window.renderFormaCardioProgress==='function')window.renderFormaCardioProgress();clearCardioFields();alert("Sessão de cardio salva!");});
renderCardioHistory();

if("serviceWorker" in navigator && (location.protocol==="https:"||location.hostname==="localhost")){window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));}

// Conta Google e sincronização automática via Supabase.
const FORMA_SUPABASE_URL = "https://mtxktospqnhdkvkjthwn.supabase.co";
const FORMA_SUPABASE_KEY = "sb_publishable_Qg5ZZcQEoRFydoNYpSmz-g_Uih4JtpX";
let formaSupabase = null;
let formaAuthPromise = null;
function syncStatus(msg){const el=$("syncStatus");if(el)el.textContent=msg||"";}
function updateAccountBadge(user){
 const label=$("profileNameLabel"),avatar=$("profileAvatar"),badge=$("profileBadge");
 const meta=user?.user_metadata||{};
 const displayName=user?(meta.full_name||meta.name||user.email?.split("@")[0]||"Minha conta"):"Entrar";
 if(label)label.textContent=displayName;
 if(avatar){const photo=meta.avatar_url||meta.picture||"";if(user&&photo){avatar.replaceChildren();const img=document.createElement("img");img.alt="";img.referrerPolicy="no-referrer";img.src=photo;img.onerror=()=>{avatar.textContent=profileInitials(displayName);};avatar.appendChild(img);}else if(user){avatar.textContent=profileInitials(displayName);}else{avatar.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"></circle><path d="M5 20c.6-3.6 3.2-5.5 7-5.5s6.4 1.9 7 5.5"></path></svg>';}}
 if(badge)badge.setAttribute("aria-label",user?"Conta conectada: "+displayName+". Abrir conta":"Entrar na sua conta FORMA");
}
function showSyncUser(user){formaAuthUser=user||null;const yes=!!user;$("syncSignedOut").style.display=yes?"none":"block";$("syncSignedIn").style.display=yes?"block":"none";if(yes){const meta=user.user_metadata||{},name=meta.full_name||meta.name||user.email?.split("@")[0]||"Minha conta",email=user.email||"Conta conectada",photo=meta.avatar_url||meta.picture||"";$("syncAccountName").textContent=name;$("syncAccountEmail").textContent=email;const avatar=$("syncAccountAvatar");if(avatar){avatar.replaceChildren();if(photo){const img=document.createElement("img");img.alt="Foto de perfil";img.referrerPolicy="no-referrer";img.src=photo;img.onerror=()=>{avatar.textContent=profileInitials(name);};avatar.appendChild(img);}else avatar.textContent=profileInitials(name);} }updateAccountBadge(user);}
function openSync(){
 const modal=$("syncModal");
 if(!modal){console.error("FORMA: janela da conta não encontrada");return false;}
 try{closeTabMenu();}catch(e){console.warn("FORMA: não foi possível fechar o menu",e);}
 modal.style.display="flex";modal.style.pointerEvents="auto";modal.setAttribute("aria-hidden","false");modal.classList.add("open");
 return true;
}
function closeSync(){const modal=$("syncModal");if(!modal)return;modal.classList.remove("open");modal.style.display="none";modal.setAttribute("aria-hidden","true");}
function initFormaAuth(){
 if(formaAuthPromise)return formaAuthPromise;
 formaAuthPromise=(async()=>{try{
  const {createClient}=await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm");
  formaSupabase=createClient(FORMA_SUPABASE_URL,FORMA_SUPABASE_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:"pkce"}});
  const {data,error}=await formaSupabase.auth.getSession();if(error)throw error;
  showSyncUser(data.session?.user||null);
  // Sem sessão autenticada, o aparelho deve exibir apenas um estado limpo.
  // A cópia da conta permanece na nuvem e no cache isolado por usuário.
  if(!data.session?.user){resetLocalForSignedOut("initial-session");}
  formaSupabase.auth.onAuthStateChange((event,session)=>{
   showSyncUser(session?.user||null);
   if(session?.user){syncStatus("Conta conectada. Verificando sincronização automática…");setTimeout(()=>syncWithCloud("auth:"+event),0);}
   else {syncStatus("Você saiu da conta. Este aparelho foi preparado para um novo usuário.");resetLocalForSignedOut(event);}
  });
  if(data.session?.user)setTimeout(()=>syncWithCloud("initial-session"),0);
  return formaSupabase;
 }catch(e){console.error("Supabase auth",e);syncStatus("Não foi possível iniciar a conta. Confira a conexão e tente novamente.");formaAuthPromise=null;return null;}})();
 return formaAuthPromise;
}
$("closeSync").addEventListener("click",closeSync);$("syncModal").addEventListener("click",e=>{if(e.target.id==="syncModal")closeSync();});
$("googleSignInBtn").addEventListener("click",async e=>{e.preventDefault();e.stopPropagation();const btn=$("googleSignInBtn");btn.disabled=true;try{syncStatus("Preparando login com Google…");if(!formaSupabase)await initFormaAuth();if(!formaSupabase)throw new Error("Não foi possível carregar o serviço de autenticação. Verifique a conexão ou bloqueadores de conteúdo.");syncStatus("Abrindo a página segura do Google…");const {data,error}=await formaSupabase.auth.signInWithOAuth({provider:"google",options:{redirectTo:location.origin+location.pathname,queryParams:{prompt:"select_account"}}});if(error)throw error;if(data?.url){location.assign(data.url);}else{syncStatus("O provedor não retornou o endereço de login. Confira a configuração OAuth do Supabase.");}}catch(err){console.error("FORMA Google login",err);syncStatus("Não foi possível iniciar o login: "+(err?.message||"erro inesperado")+". Seus dados locais continuam salvos.");}finally{btn.disabled=false;}});
$("manageAccountBtn").addEventListener("click",()=>{const user=formaAuthUser;if(!user)return;const meta=user.user_metadata||{};alert("Conta FORMA\n\nNome: "+(meta.full_name||meta.name||"Não informado")+"\nE-mail: "+(user.email||"Não informado")+"\n\nA autenticação é gerenciada pelo provedor conectado.");});
$("deleteAccountBtn").addEventListener("click",async()=>{if(!formaSupabase||!formaAuthUser?.id){syncStatus("Entre na conta que deseja excluir e tente novamente.");return;}const user=formaAuthUser;const label=user.email||user.user_metadata?.full_name||"esta conta";if(!confirm("Excluir permanentemente a conta "+label+"?\n\nEsta ação não pode ser desfeita. Os registros vinculados serão removidos conforme as regras configuradas no Supabase. Se você não tem certeza, escolha Cancelar."))return;if(!confirm("Confirma mais uma vez a exclusão permanente? Seus dados não poderão ser recuperados."))return;const btn=$("deleteAccountBtn");btn.disabled=true;syncStatus("Solicitando exclusão segura da conta…");try{const {error}=await formaSupabase.rpc("delete_own_account");if(error)throw error;await formaSupabase.auth.signOut({scope:"local"});resetLocalForSignedOut("account-deleted");showSyncUser(null);syncStatus("A solicitação de exclusão foi concluída.");closeSync();alert("A conta foi excluída. Se algum dado da aplicação não estiver coberto pelas regras de exclusão do banco, ele deverá ser removido separadamente pelo administrador do projeto.");}catch(err){console.error("FORMA: exclusão de conta falhou",err);syncStatus("Não foi possível excluir a conta. Confirme que a função segura delete_own_account foi instalada no Supabase. Nenhuma exclusão foi confirmada.");}finally{btn.disabled=false;}});
$("signOutBtn").addEventListener("click",async()=>{
 if(!formaSupabase)return;
 const btn=$("signOutBtn"),user=formaAuthUser;
 if(btn)btn.disabled=true;
 let synced=false,maySignOut=true;
 try{
  // Preserve os bytes locais antes de qualquer tentativa; também cobre payload inválido/incompleto.
  try{localStorage.setItem("formaSignedOutBackupV1",JSON.stringify({reason:"manual-signout",createdAt:new Date().toISOString(),data:Object.fromEntries(FORMA_SYNC_KEYS.map(k=>[k,localStorage.getItem(k)]))}));}catch(e){console.warn("FORMA: não foi possível criar backup de saída",e);}
  if(user?.id&&localStorage.getItem(FORMA_ACCOUNT_OWNER_KEY)===user.id){
   const syncLatest=async()=>{
    if(autoSyncTimer){clearTimeout(autoSyncTimer);autoSyncTimer=null;}
    let waits=0;while(autoSyncBusy&&waits<80){await new Promise(resolve=>setTimeout(resolve,100));waits++;}
    if(autoSyncBusy)throw new Error("A sincronização anterior ainda está em andamento.");
    const latest=collectFormaLocal();
    if(!validFormaPayload(latest))throw new Error("Os dados locais estão incompletos ou inválidos.");
    await writeCloud(user,latest);
    storeUserLocalCache(user.id,latest);
   };
   try{await syncLatest();synced=true;}
   catch(syncErr){
    console.error("FORMA: sincronização antes do logout falhou",syncErr);
    const retry=confirm("Não foi possível sincronizar as alterações desta conta: "+(syncErr?.message||"erro de rede")+".\n\nOK = tentar sincronizar novamente. Cancelar = escolher se deseja sair sem sincronizar.");
    if(retry){try{await syncLatest();synced=true;}catch(retryErr){
      console.error("FORMA: nova tentativa de sincronização falhou",retryErr);
      maySignOut=confirm("A sincronização continua indisponível: "+(retryErr?.message||"erro inesperado")+".\n\nSuas alterações locais foram preservadas em um backup neste aparelho, mas podem não estar na nuvem. Deseja sair mesmo assim?");
    }}else{
      maySignOut=confirm("Deseja sair sem sincronizar? As alterações ainda não enviadas podem não estar disponíveis em outros dispositivos. Uma cópia local de segurança foi tentada neste aparelho.");
    }
   }
  }
  if(!maySignOut){syncStatus("Saída cancelada. Sua sessão continua ativa; tente sincronizar novamente quando a conexão estiver disponível.");return;}
  const {error}=await formaSupabase.auth.signOut();
  if(error)throw error;
  showSyncUser(null);
  resetLocalForSignedOut(synced?"manual-signout":"manual-signout-unsynced");
  syncStatus(synced?"Você saiu da conta. As alterações foram sincronizadas; os dados permanecem salvos na nuvem.":"Você saiu da conta sem sincronizar tudo. O backup local foi preservado quando possível; alterações pendentes podem não estar na nuvem.");
 }catch(err){
  console.error("FORMA: falha ao encerrar a sessão",err);
  syncStatus("Não foi possível encerrar a sessão: "+(err?.message||"erro inesperado")+". Os dados locais foram preservados; tente novamente.");
 }finally{if(btn)btn.disabled=false;}
});
function collectFormaLocal(){const keys=["formaAppV1","formaProfilesV1","formaActiveProfileV1"];const data={};for(const k of keys){const v=localStorage.getItem(k);if(v===null||v==="")throw new Error("Dados locais incompletos ("+k+").");data[k]=v;}try{JSON.parse(data.formaAppV1);JSON.parse(data.formaProfilesV1);}catch(e){throw new Error("Os dados locais estão inválidos. Exporte um backup antes de continuar.");}if(typeof data.formaActiveProfileV1!=="string"||!data.formaActiveProfileV1.trim())throw new Error("O perfil local ativo não está definido.");return data;}
function localPayloadEqualsCloud(local,cloud){return !!cloud&&["formaAppV1","formaProfilesV1","formaActiveProfileV1"].every(k=>JSON.stringify(cloud[k]??null)===JSON.stringify(local[k]??null));}
async function writeCloud(user,payload){
 if(!user?.id||localStorage.getItem(FORMA_ACCOUNT_OWNER_KEY)!==user.id)throw new Error("Envio bloqueado: os dados locais não estão vinculados à conta autenticada. Atualize a página e confirme a conta antes de sincronizar.");
 const {data:{user:verifiedUser},error:authError}=await formaSupabase.auth.getUser();if(authError)throw authError;if(!verifiedUser||verifiedUser.id!==user.id)throw new Error("Envio bloqueado porque a conta autenticada mudou durante a sincronização.");
 if(!validFormaPayload(payload))throw new Error("Envio bloqueado: os dados locais não passaram na validação.");
 // A autenticação é assíncrona: nunca envie um snapshot que tenha ficado antigo enquanto ela era verificada.
 if(!localPayloadEqualsCloud(payload,collectFormaLocal())){autoSyncPending=true;return false;}
 const updatedAt=new Date().toISOString();const {error}=await formaSupabase.from("user_app_state").upsert({user_id:user.id,state_json:payload,updated_at:updatedAt},{onConflict:"user_id"});if(error)throw error;
 // O usuário pode continuar digitando enquanto o upsert está em andamento. Se isso ocorrer,
 // marque a cópia local como mais recente e faça outra rodada, sem carimbar o snapshot antigo como atual.
 if(!localPayloadEqualsCloud(payload,collectFormaLocal())){localStorage.setItem("formaLastLocalSaveV1",String(Math.max(Date.now(),Date.parse(updatedAt)+1)));autoSyncPending=true;return false;}
 localStorage.setItem("formaLastLocalSaveV1",String(Date.parse(updatedAt)));return true;
}
async function restoreCloudPayload(payload,cloudUpdatedAt){
 const keys=["formaAppV1","formaProfilesV1","formaActiveProfileV1"],previous={};
 if(!payload||typeof payload!=="object"||Array.isArray(payload))throw new Error("Formato de dados da nuvem inválido.");
 for(const k of keys)if(typeof payload[k]!=="string")throw new Error("A cópia da nuvem está incompleta; nada foi alterado.");
 const st=JSON.parse(payload.formaAppV1),ps=JSON.parse(payload.formaProfilesV1),active=payload.formaActiveProfileV1;
 if(!st||typeof st!=="object"||Array.isArray(st)||!ps||typeof ps!=="object"||Array.isArray(ps)||!Object.keys(ps).length||typeof active!=="string"||!ps[active]||!ps[active].data)throw new Error("Os dados da nuvem não passaram na validação; nada foi alterado.");
 for(const k of keys)previous[k]=localStorage.getItem(k);
 localStorage.setItem("formaPreRestoreBackupV1",JSON.stringify({createdAt:new Date().toISOString(),data:previous}));
 try{for(const k of keys)localStorage.setItem(k,payload[k]);localStorage.setItem("formaLastLocalSaveV1",String(Date.parse(cloudUpdatedAt||"")||Date.now()));}
 catch(e){for(const k of keys){if(previous[k]===null)localStorage.removeItem(k);else localStorage.setItem(k,previous[k]);}throw e;}
}
const FORMA_ACCOUNT_OWNER_KEY="formaAccountOwnerV1",FORMA_ACCOUNT_BOUND_KEY="formaAccountBoundV1",FORMA_USER_CACHE_PREFIX="formaUserCacheV1:";
const FORMA_SYNC_KEYS=["formaAppV1","formaProfilesV1","formaActiveProfileV1"];
function snapshotFormaLocal(){const payload={};for(const k of FORMA_SYNC_KEYS){const v=localStorage.getItem(k);if(v===null||v==="")return null;payload[k]=v;}return payload;}
function validFormaPayload(payload){
 try{
  if(!payload||typeof payload!=="object"||Array.isArray(payload)||!FORMA_SYNC_KEYS.every(k=>typeof payload[k]==="string"&&payload[k].length>0))return false;
  const app=JSON.parse(payload.formaAppV1),profiles=JSON.parse(payload.formaProfilesV1),active=payload.formaActiveProfileV1;
  // O perfil ativo é um identificador textual (ex.: "default"), não JSON.
  return !!app&&typeof app==="object"&&!Array.isArray(app)&&!!profiles&&typeof profiles==="object"&&!Array.isArray(profiles)&&Object.keys(profiles).length>0&&typeof active==="string"&&!!active.trim()&&!!profiles[active]&&typeof profiles[active]==="object"&&!!profiles[active].data&&typeof profiles[active].data==="object"&&!Array.isArray(profiles[active].data);
 }catch(_){return false;}
}
function freshFormaPayload(){const fresh=freshState();const freshProfiles={default:{id:"default",name:"Meu perfil",data:JSON.parse(JSON.stringify(fresh))}};return {formaAppV1:JSON.stringify(fresh),formaProfilesV1:JSON.stringify(freshProfiles),formaActiveProfileV1:"default"};}
function storeUserLocalCache(userId,payload){if(userId&&validFormaPayload(payload)){try{localStorage.setItem(FORMA_USER_CACHE_PREFIX+userId,JSON.stringify({savedAt:new Date().toISOString(),payload}));}catch(e){console.warn("FORMA: não foi possível guardar o cache local da conta",e);}}}
function resetLocalForSignedOut(reason="signed-out"){
 try{
  const current=snapshotFormaLocal();
  const owner=localStorage.getItem(FORMA_ACCOUNT_OWNER_KEY);
  if(owner&&current)storeUserLocalCache(owner,current);
  const clean=freshFormaPayload();
  const alreadyClean=FORMA_SYNC_KEYS.every(k=>localStorage.getItem(k)===clean[k])&&!localStorage.getItem(FORMA_ACCOUNT_OWNER_KEY);
  if(alreadyClean)return false;
  // Backup local de segurança, nunca restaurado automaticamente para outra conta.
  if(current){try{localStorage.setItem("formaSignedOutBackupV1",JSON.stringify({reason,createdAt:new Date().toISOString(),data:current}));}catch(_){}}
  for(const k of FORMA_SYNC_KEYS)localStorage.setItem(k,clean[k]);
  localStorage.removeItem("formaLastLocalSaveV1");
  localStorage.removeItem(FORMA_ACCOUNT_OWNER_KEY);
  localStorage.removeItem(FORMA_ACCOUNT_BOUND_KEY);
  autoSyncReloading=true;
  location.reload();
  return true;
 }catch(e){console.error("FORMA: não foi possível limpar o estado local após sair",e);syncStatus("Não consegui limpar os dados exibidos neste aparelho. Feche e abra o aplicativo novamente; os dados da nuvem não foram apagados.");return false;}
}
function readUserLocalCache(userId){try{const parsed=JSON.parse(localStorage.getItem(FORMA_USER_CACHE_PREFIX+userId)||"null");return validFormaPayload(parsed?.payload)?parsed.payload:null;}catch(_){return null;}}
async function activateFormaAccount(user){
 const nextId=user?.id;if(!nextId) return false;
 const owner=localStorage.getItem(FORMA_ACCOUNT_OWNER_KEY);
 if(owner===nextId)return false;
 const current=snapshotFormaLocal();
 // Guarda o conjunto que pertencia à conta anterior antes de mudar qualquer chave global.
 if(owner&&current)storeUserLocalCache(owner,current);
 const wasEverBound=localStorage.getItem(FORMA_ACCOUNT_BOUND_KEY)==="1";
 syncStatus("Separando os dados desta conta e recuperando o perfil correto…");
 const {data:row,error}=await formaSupabase.from("user_app_state").select("state_json,updated_at").eq("user_id",nextId).maybeSingle();
 if(error)throw error;
 if(row&&!validFormaPayload(row.state_json))throw new Error("A cópia salva na nuvem desta conta está inválida. Mantive os dados locais sem trocá-los; exporte um backup antes de continuar.");
 // Migração única e explícita: nunca vincular silenciosamente dados locais preexistentes a uma conta nova.
 if(!owner&&!wasEverBound&&!row){
  const cleanBefore=freshFormaPayload();
  const currentIsClean=!!current&&FORMA_SYNC_KEYS.every(k=>current[k]===cleanBefore[k]);
  const migrate=!currentIsClean&&!!current&&confirm("O FORMA encontrou dados já salvos neste aparelho, mas ainda não identificados como pertencentes a uma conta.\n\nDeseja associar esses dados à conta que acabou de conectar?\n\nOK = manter e sincronizar os dados atuais nesta conta.\nCancelar = iniciar esta conta com um perfil limpo; os dados antigos ficarão preservados apenas neste aparelho como backup local.");
  if(migrate){
   localStorage.setItem(FORMA_ACCOUNT_OWNER_KEY,nextId);localStorage.setItem(FORMA_ACCOUNT_BOUND_KEY,"1");storeUserLocalCache(nextId,current);return false;
  }
  if(current){try{localStorage.setItem("formaUnboundLocalBackupV1",JSON.stringify({createdAt:new Date().toISOString(),data:current}));}catch(_){} }
  const clean=freshFormaPayload();
  for(const k of FORMA_SYNC_KEYS)localStorage.setItem(k,clean[k]);
  localStorage.setItem("formaLastLocalSaveV1",String(Date.now()));
  localStorage.setItem(FORMA_ACCOUNT_OWNER_KEY,nextId);localStorage.setItem(FORMA_ACCOUNT_BOUND_KEY,"1");
  autoSyncReloading=true;syncStatus("Conta nova preparada com perfil limpo. Abrindo o FORMA…");location.reload();return true;
 }
 let chosen=null,cloudTime=null;
 if(row){chosen=row.state_json;cloudTime=row.updated_at;}
 if(!chosen)chosen=readUserLocalCache(nextId);
 if(!chosen)chosen=freshFormaPayload();
 // O backup de segurança fica separado e nunca é usado como fonte automática de outra conta.
 if(current&&(owner||row)){try{localStorage.setItem("formaPreAccountSwitchBackupV1",JSON.stringify({fromUserId:owner||null,toUserId:nextId,createdAt:new Date().toISOString(),data:current}));}catch(_){}}
 const previous={};for(const k of [...FORMA_SYNC_KEYS,"formaLastLocalSaveV1",FORMA_ACCOUNT_OWNER_KEY,FORMA_ACCOUNT_BOUND_KEY])previous[k]=localStorage.getItem(k);
 try{
  for(const k of FORMA_SYNC_KEYS)localStorage.setItem(k,chosen[k]);
  localStorage.setItem("formaLastLocalSaveV1",String(Date.parse(cloudTime||"")||Date.now()));
  localStorage.setItem(FORMA_ACCOUNT_OWNER_KEY,nextId);localStorage.setItem(FORMA_ACCOUNT_BOUND_KEY,"1");
 }catch(storageError){for(const k of Object.keys(previous)){try{if(previous[k]===null)localStorage.removeItem(k);else localStorage.setItem(k,previous[k]);}catch(rollbackError){console.error("FORMA: falha ao restaurar dados após troca de conta",rollbackError);}}throw new Error("O navegador não conseguiu concluir a troca de conta por falta de espaço. Os dados anteriores foram restaurados quando possível.");}
 autoSyncReloading=true;syncStatus("Conta isolada com segurança. Abrindo os dados correspondentes…");location.reload();return true;
}
async function syncWithCloud(reason="local-change"){
 if(!formaSupabase||!formaAuthUser||autoSyncBusy||autoSyncReloading)return;
 autoSyncBusy=true;
 try{
  const {data:{user},error:authError}=await formaSupabase.auth.getUser();if(authError)throw authError;if(!user){showSyncUser(null);return;}
  if(await activateFormaAccount(user))return;
  if(localStorage.getItem(FORMA_ACCOUNT_OWNER_KEY)!==user.id)throw new Error("Sincronização bloqueada: a conta autenticada não corresponde à proprietária dos dados locais.");
  const local=collectFormaLocal(),localRevision=Number(localStorage.getItem("formaLastLocalSaveV1")||0);
  const {data:row,error}=await formaSupabase.from("user_app_state").select("state_json,updated_at").eq("user_id",user.id).maybeSingle();if(error)throw error;
  // Não tome decisões usando um snapshot anterior a uma edição feita enquanto a consulta estava em andamento.
  const latestLocal=collectFormaLocal(),latestRevision=Number(localStorage.getItem("formaLastLocalSaveV1")||0);
  if(!localPayloadEqualsCloud(local,latestLocal)||localRevision!==latestRevision){autoSyncPending=true;syncStatus("Há alterações recentes neste dispositivo. Vou sincronizar a versão mais atualizada.");return;}
  if(!row){syncStatus("Sincronizando os dados desta conta pela primeira vez…");if(!await writeCloud(user,latestLocal)){syncStatus("Há alterações recentes. A sincronização continuará com a versão mais atualizada.");return;}storeUserLocalCache(user.id,latestLocal);syncStatus("Sincronização automática ativa. Os dados desta conta estão na nuvem.");return;}
  if(!validFormaPayload(row.state_json))throw new Error("A cópia da nuvem está incompleta ou inválida. Nenhum dado foi substituído.");
  if(localPayloadEqualsCloud(latestLocal,row.state_json)){if(row.updated_at)localStorage.setItem("formaLastLocalSaveV1",String(Date.parse(row.updated_at)||Date.now()));storeUserLocalCache(user.id,latestLocal);syncStatus("Tudo sincronizado.");return;}
  const localTime=latestRevision,cloudTime=Date.parse(row.updated_at||"")||0;
  if(localTime>cloudTime){syncStatus("Enviando as alterações mais recentes desta conta…");if(!await writeCloud(user,latestLocal)){syncStatus("Há alterações recentes. A sincronização continuará com a versão mais atualizada.");return;}storeUserLocalCache(user.id,latestLocal);syncStatus("Tudo sincronizado automaticamente.");return;}
  // Durante uma sessão ativa, a nuvem nunca pode substituir o estado local nem recarregar a tela.
  // A sessão é preservada; ao salvar/finalizar, uma nova gravação local volta a prevalecer.
  if(state.sessionActive||document.body.classList.contains("session-mode")){syncStatus("Sessão de treino em andamento. Seus registros locais foram preservados; a atualização remota ficará para depois do treino.");return;}
  // Última barreira antes da restauração: se houve edição desde a leitura, adie em vez de recarregar.
  const beforeRestore=collectFormaLocal(),revisionBeforeRestore=Number(localStorage.getItem("formaLastLocalSaveV1")||0);
  if(!localPayloadEqualsCloud(latestLocal,beforeRestore)||revisionBeforeRestore!==latestRevision){autoSyncPending=true;syncStatus("Detectei uma alteração local recente. Mantive seus dados e adiarei a atualização remota.");return;}
  syncStatus("Atualizando este dispositivo com a cópia mais recente…");await restoreCloudPayload(row.state_json,row.updated_at);localStorage.setItem(FORMA_ACCOUNT_OWNER_KEY,user.id);localStorage.setItem(FORMA_ACCOUNT_BOUND_KEY,"1");storeUserLocalCache(user.id,row.state_json);autoSyncReloading=true;syncStatus("Dados atualizados. Reabrindo o FORMA…");location.reload();
 }catch(e){console.error("FORMA auto sync",reason,e);syncStatus("A sincronização automática não foi concluída: "+(e.message||"erro de conexão")+". Os dados locais continuam salvos; tentaremos novamente na próxima alteração.");}
 finally{autoSyncBusy=false;if(autoSyncPending&&!autoSyncReloading){autoSyncPending=false;scheduleAutoSync();}}
}
function scheduleAutoSync(){if(!formaSupabase||!formaAuthUser||autoSyncReloading)return;if(autoSyncTimer)clearTimeout(autoSyncTimer);autoSyncTimer=setTimeout(()=>{if(autoSyncBusy){autoSyncPending=true;return;}syncWithCloud("local-change");},1400);}
initFormaAuth();
// Importação/exportação de planos FORMA em JSON — valida antes de alterar qualquer dado.
let pendingWorkoutImport=null;
function openFormaPrintDocument(title,subtitle,contentHtml,statusElement){
 let printWindow=null;try{printWindow=window.open('','_blank');}catch(error){printWindow=null;}
 if(!printWindow){if(statusElement){statusElement.hidden=false;statusElement.textContent='O navegador bloqueou a janela de impressão. Permita pop-ups para o FORMA e tente novamente.';statusElement.classList.add('error');}return false;}
 const safeTitle=esc(title),safeSubtitle=esc(subtitle||'');
 const html='<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+safeTitle+'</title><style>@page{size:A4;margin:13mm}*{box-sizing:border-box}html{background:#0b1220}body{margin:0;background:#0b1220;color:#e8edf6;font:12px/1.55 Arial,Helvetica,sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact}.sheet{max-width:900px;margin:24px auto;background:#101b2e;box-shadow:0 10px 38px #0008}.brand{padding:28px 32px 25px;background:linear-gradient(135deg,#080e19,#18283f);color:#fff;border-bottom:4px solid #ff555d}.brand-line{display:flex;align-items:center;gap:10px;font-size:11px;letter-spacing:2px;font-weight:800;color:#dbe4f1}.brand-mark{display:grid;place-items:center;width:31px;height:31px;border-radius:10px;background:#ff555d;color:#fff;font-size:18px;font-weight:900}.eyebrow{margin:20px 0 5px;color:#ff777d;font-size:9px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase}.brand h1{margin:0;font-size:25px;line-height:1.2;letter-spacing:-.5px}.brand p{margin:8px 0 0;color:#cad5e5;font-size:11px}.content{padding:25px 32px 32px;color:#e8edf6}.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;margin:0 0 20px}.stat{padding:11px 12px;border:1px solid #2a3c58;border-radius:10px;background:#17263d}.stat span{display:block;color:#a9b8ce;font-size:9px}.stat strong{display:block;margin-top:4px;font-size:16px;color:#fff}.section{margin:18px 0 0;break-inside:avoid}.section h2{margin:0 0 8px;padding-bottom:7px;border-bottom:1px solid #2c3e58;color:#fff;font-size:15px}.section h3{margin:12px 0 5px;color:#dce6f4;font-size:12px}.section p{margin:5px 0}.muted{color:#aab8cb}.pill{display:inline-block;padding:3px 7px;border-radius:20px;background:#48252e;color:#ff9aa0;font-size:9px;font-weight:700}.table{width:100%;border-collapse:collapse;margin:8px 0 14px;font-size:10px}.table th{padding:8px 7px;background:#22334c;color:#fff;text-align:left;font-weight:700}.table td{padding:7px;border-bottom:1px solid #2a3b54;color:#e5ecf6;vertical-align:top}.table tbody tr:nth-child(even){background:#14233a}.table tfoot th{background:#1b2b43;color:#fff}.table tr{break-inside:avoid}.table th:first-child{border-radius:5px 0 0 0}.table th:last-child{border-radius:0 5px 0 0}.note{padding:10px 12px;border-left:3px solid #ff555d;background:#17263d;color:#c7d2e2;font-size:10px}.footer{margin-top:25px;padding-top:10px;border-top:1px solid #2a3c58;color:#91a1b8;font-size:9px}.empty{padding:13px;border:1px dashed #435671;border-radius:9px;color:#b2bfd1}@media(max-width:600px){.sheet{margin:0}.brand{padding:22px}.content{padding:20px}.stats{grid-template-columns:repeat(2,minmax(0,1fr))}}@media print{html,body{background:#0b1220!important;color:#e8edf6!important}.sheet{max-width:none;margin:0;box-shadow:none;background:#101b2e!important}.brand{break-inside:avoid}.content{padding:20px 18px 24px}.section{break-inside:auto}.table thead{display:table-header-group}.footer{break-inside:avoid}}</style></head><body><main class="sheet"><header class="brand"><div class="brand-line"><span class="brand-mark">F</span> FORMA <span style="font-weight:500;letter-spacing:.8px;color:#aebbd0">· SEU PLANO PESSOAL</span></div><div class="eyebrow">DOCUMENTO DO FORMA</div><h1>'+safeTitle+'</h1><p>'+safeSubtitle+'</p></header><div class="content">'+contentHtml+'<div class="footer">Gerado pelo FORMA em '+new Date().toLocaleString('pt-BR')+'. Confira os dados antes de compartilhar ou utilizar como referência.</div></div></main><script>window.addEventListener("load",function(){setTimeout(function(){window.focus();window.print();},450);});<\/script></body></html>';
 try{printWindow.opener=null;printWindow.document.open();printWindow.document.write(html);printWindow.document.close();if(statusElement){statusElement.hidden=false;statusElement.classList.remove('error');statusElement.textContent='Documento aberto para impressão. Na tela de impressão, escolha “Salvar como PDF” para guardar uma cópia.';}return true;}catch(error){try{printWindow.close();}catch(_){}if(statusElement){statusElement.hidden=false;statusElement.classList.add('error');statusElement.textContent='Não foi possível preparar o documento para impressão neste navegador.';}return false;}
}
function exportWorkoutPlanPdf(){const plan=workoutPlanFileObject(),fmt=v=>esc(String(v??'—'));const days=plan.days.map((day,index)=>{const rows=day.exercises.map((ex,i)=>`<tr><td>${i+1}</td><td><strong>${fmt(ex.name)}</strong></td><td>${fmt(ex.sets)}</td><td>${fmt(ex.reps)}</td><td>${fmt(ex.rest)}</td></tr>`).join('');return `<section class="section"><h2>${index+1}. ${fmt(day.day)} — ${fmt(day.title)}</h2>${day.subtitle?`<p class="muted">${fmt(day.subtitle)}</p>`:''}<table class="table"><thead><tr><th>#</th><th>Exercício</th><th>Séries</th><th>Repetições</th><th>Descanso</th></tr></thead><tbody>${rows||'<tr><td colspan="5">Nenhum exercício cadastrado.</td></tr>'}</tbody></table></section>`;}).join('');const content=`<div class="stats"><div class="stat"><span>Dias planejados</span><strong>${plan.days.length}</strong></div><div class="stat"><span>Total de exercícios</span><strong>${plan.days.reduce((n,d)=>n+d.exercises.length,0)}</strong></div><div class="stat"><span>Objetivo</span><strong style="font-size:11px">${fmt(plan.objective||'Não informado')}</strong></div><div class="stat"><span>Formato de origem</span><strong style="font-size:11px">Plano ativo</strong></div></div>${days}`;return openFormaPrintDocument(plan.name,'Ficha de musculação · '+(plan.objective||'Plano atual'),content,$('workoutImportStatus'));}
function workoutPlanFileObject(){return {format:"FORMA_WORKOUT_PLAN",version:1,name:String(state.planTitle||"").trim()||"Plano atual do FORMA",objective:String(state.planObjective||state.profileData?.goal||"").trim(),days:workouts.map(w=>({day:String(w.day||"Treino"),short:String(w.short||String(w.day||"TRE").slice(0,3).toUpperCase()),title:String(w.title||"Treino personalizado"),subtitle:String(w.sub||""),exercises:(w.ex||[]).map(ex=>({name:String(ex[0]||""),sets:Math.max(1,Math.min(12,parseInt(String(ex[1]||"3").match(/\d+/)?.[0]||"3",10))),reps:String(ex[2]||"8–12 reps"),rest:String(ex[3]||"90 s")}))}))};}
function downloadWorkoutJson(obj,filename){const blob=new Blob([JSON.stringify(obj,null,2)],{type:"application/json;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=filename;a.style.display="none";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);}
function workoutImportError(message){const s=$("workoutImportStatus");s.hidden=false;s.classList.add("error");s.textContent=message;}
function workoutImportInfo(message){const s=$("workoutImportStatus");s.hidden=false;s.classList.remove("error");s.textContent=message;}
function parseWorkoutReps(value){if(value&&typeof value==="object"){const min=Number(value.min??value.minimum),max=Number(value.max??value.maximum??min);return {min,max};}if(typeof value==="number")return {min:value,max:value};const nums=String(value??"").match(/\d+/g)||[];if(!nums.length)throw new Error("Informe as repetições como número ou faixa, por exemplo 8–12 reps.");return {min:Number(nums[0]),max:Number(nums[1]??nums[0])};}
function parseWorkoutRest(value,secondsValue){if(secondsValue!==undefined){if(secondsValue&&typeof secondsValue==="object")return {min:Number(secondsValue.min??secondsValue.minimum),max:Number(secondsValue.max??secondsValue.maximum??secondsValue.min??secondsValue.minimum)};return {min:Number(secondsValue),max:Number(secondsValue)};}if(value&&typeof value==="object")return {min:Number(value.min??value.minimum),max:Number(value.max??value.maximum??value.min??value.minimum)};if(typeof value==="number")return {min:value,max:value};const raw=String(value??"").trim(),nums=raw.match(/\d+(?:[.,]\d+)?/g)||[];if(!nums.length)throw new Error("Informe o descanso em segundos, por exemplo 90 s ou 120–180 s.");const factor=/\bmin(?:uto)?s?\b/i.test(raw)?60:1;return {min:Math.round(Number(nums[0].replace(",","."))*factor),max:Math.round(Number((nums[1]??nums[0]).replace(",","."))*factor)};}
function formatImportedRange(min,max,suffix){return min===max?`${min} ${suffix}`:`${min}–${max} ${suffix}`;}
function normalizeWorkoutImport(raw){if(!raw||typeof raw!=="object"||Array.isArray(raw))throw new Error("O PDF precisa conter um plano de treino estruturado ou legível.");if(raw.format!==undefined&&! ["FORMA_WORKOUT_PLAN","FORMA_WORKOUT_PLAN_V1"].includes(String(raw.format)))throw new Error("O campo “format” não corresponde a um plano de treino FORMA.");if(raw.version!==undefined&&Number(raw.version)!==1)throw new Error("Esta versão do FORMA importa arquivos de plano na versão 1.");const source=raw.plan&&typeof raw.plan==="object"&&!Array.isArray(raw.plan)?raw.plan:raw,rawDays=source.days||source.workouts;if(!Array.isArray(rawDays)||rawDays.length<1||rawDays.length>7)throw new Error("O plano precisa conter de 1 a 7 dias de treino.");const name=String(source.name||source.title||raw.name||raw.title||"Plano personalizado").trim().slice(0,100),objective=String(source.objective||source.goal||raw.objective||raw.goal||"").trim().slice(0,180),seenDays=new Set(),days=[],focusOverrides={};let totalExercises=0;rawDays.forEach((day,index)=>{if(!day||typeof day!=="object"||Array.isArray(day))throw new Error(`O dia ${index+1} precisa ser um objeto com nome e exercícios.`);const dayName=String(day.day||day.dayName||day.label||day.name||`Dia ${index+1}`).trim().slice(0,50);if(!dayName)throw new Error(`Informe o nome do dia ${index+1}.`);const dayKey=dayName.toLocaleLowerCase("pt-BR");if(seenDays.has(dayKey))throw new Error(`O dia “${dayName}” está duplicado. Cada dia precisa ter um nome diferente.`);seenDays.add(dayKey);const title=String(day.title||day.focus||day.name||`Treino ${index+1}`).trim().slice(0,90)||`Treino ${index+1}`,subtitle=String(day.subtitle||day.sub||day.notes||"").trim().slice(0,180),rawExercises=day.exercises||day.ex;if(!Array.isArray(rawExercises)||rawExercises.length<1||rawExercises.length>25)throw new Error(`${dayName}: inclua de 1 a 25 exercícios.`);const exercises=rawExercises.map((exercise,ei)=>{if(!exercise||typeof exercise!=="object"||Array.isArray(exercise))throw new Error(`${dayName}, exercício ${ei+1}: formato inválido.`);const exerciseName=String(exercise.name||exercise.exercise||exercise.exerciseName||"").trim().slice(0,90);if(!exerciseName)throw new Error(`${dayName}, exercício ${ei+1}: falta o nome.`);const setsRaw=exercise.sets??exercise.series??3,sets=typeof setsRaw==="number"?setsRaw:Number(String(setsRaw).match(/\d+/)?.[0]);if(!Number.isInteger(sets)||sets<1||sets>12)throw new Error(`${dayName}, ${exerciseName}: séries devem ser um número inteiro de 1 a 12.`);const reps=parseWorkoutReps(exercise.reps??exercise.repetitions);if(!Number.isInteger(reps.min)||!Number.isInteger(reps.max)||reps.min<1||reps.max>100||reps.min>reps.max)throw new Error(`${dayName}, ${exerciseName}: repetições devem estar entre 1 e 100 e em ordem crescente.`);const rest=parseWorkoutRest(exercise.rest,exercise.restSeconds??exercise.rest_seconds);if(!Number.isInteger(rest.min)||!Number.isInteger(rest.max)||rest.min<0||rest.max>900||rest.min>rest.max)throw new Error(`${dayName}, ${exerciseName}: descanso deve estar entre 0 e 900 segundos e em ordem crescente.`);totalExercises++;const suppliedFocus=String(exercise.focus??exercise.foco??exercise.muscleFocus??exercise.foco_muscular??"").trim();const inferredFocus=suppliedFocus||(typeof window.getExerciseFocus==="function"?window.getExerciseFocus(exerciseName,typeof window.inferExercise==="function"?window.inferExercise(exerciseName):null):"");if(!suppliedFocus&&/pendente de confirmacao/i.test(normalizeMuscleText(inferredFocus)))throw new Error(`${dayName}, ${exerciseName}: o foco muscular não pôde ser inferido com segurança. Informe o campo focus/foco no objeto do exercício.`);if(inferredFocus)focusOverrides[normalizeMuscleText(exerciseName)]=inferredFocus;return [exerciseName,`${sets} ${sets===1?"série":"séries"}`,formatImportedRange(reps.min,reps.max,"reps"),formatImportedRange(rest.min,rest.max,"s")];});const short=String(day.short||day.dayShort||dayName.replace(/-feira$/i,"").slice(0,3).toUpperCase()).trim().slice(0,8)||`D${index+1}`;days.push({day:dayName,short,title,sub:subtitle||`Plano personalizado · ${title}`,ex:exercises});});return {name,objective,days,totalExercises,focusOverrides,metadata:{description:String(source.description||''),level:String(source.level||''),frequency:source.frequency??'',duration:String(source.duration||''),split:String(source.split||''),methodology:String(source.methodology||''),warmup:String(source.warmup||''),progression:String(source.progression||''),recovery:String(source.recovery||''),notes:String(source.notes||''),days:(source.days||source.workouts||[]).map(d=>({...d,exercises:(d.exercises||d.ex||[]).map(ex=>({...ex}))})),exerciseLibrary:Array.isArray(source.exerciseLibrary)?source.exerciseLibrary.map(x=>({...x})):[]}};}
function closeWorkoutImportPreview(){pendingWorkoutImport=null;$("workoutImportPreview").hidden=true;$("workoutImportFile").value="";}
function renderWorkoutImportCurrent(){if($("workoutImportCurrentPlan"))$("workoutImportCurrentPlan").textContent="Plano ativo: "+(String(state.planTitle||"").trim()||"Plano padrão do FORMA");if($("weekPlanCount"))$("weekPlanCount").textContent=`${workouts.length} dia${workouts.length===1?"":"s"}`;}
function showWorkoutImportPreview(parsed,fileName){pendingWorkoutImport=parsed;$("workoutImportFileName").textContent=fileName;$("workoutImportSummary").innerHTML=`<div class="workout-import-summary"><div class="workout-import-stat"><span>Plano</span><strong>${esc(parsed.name)}</strong></div><div class="workout-import-stat"><span>Dias de treino</span><strong>${parsed.days.length}</strong></div><div class="workout-import-stat"><span>Exercícios</span><strong>${parsed.totalExercises}</strong></div></div>${parsed.objective?`<p class="sub" style="margin:0 0 8px">Objetivo: ${esc(parsed.objective)}</p>`:""}`;$("workoutImportDays").innerHTML=parsed.days.map((day,index)=>`<div class="workout-import-day"><strong>${index+1}. ${esc(day.day)} — ${esc(day.title)}</strong><p>${day.ex.map(ex=>`${esc(ex[0])} · ${esc(ex[1])} · ${esc(ex[2])} · descanso ${esc(ex[3])}`).slice(0,8).join("<br>")}${day.ex.length>8?`<br>+ ${day.ex.length-8} exercício(s)`:""}</p></div>`).join("");$("workoutImportPreview").hidden=false;workoutImportInfo("Arquivo lido e validado. Confira a prévia antes de importar.");}
function importWorkoutPlan(){if(!pendingWorkoutImport)return;if(state.sessionActive){alert("Finalize ou saia da sessão de treino em andamento antes de importar outro plano. Seus registros atuais não serão alterados.");return;}const plan=pendingWorkoutImport,previousState=JSON.parse(JSON.stringify(state));if(!confirm(`Importar “${plan.name}” e substituir o plano ativo deste perfil?\n\n${plan.days.length} dias · ${plan.totalExercises} exercícios.\n\nO histórico de sessões, cargas e progresso será preservado. As marcações de conclusão da semana serão reiniciadas.`))return;state.generatedWorkoutPlan=plan.days.map(day=>({day:day.day,short:day.short,title:day.title,sub:day.sub,ex:day.ex.map(ex=>ex.slice())}));state.workoutPlanMetadata=plan.metadata||null;const incomingLibrary=Array.isArray(plan.metadata?.exerciseLibrary)?plan.metadata.exerciseLibrary:[];state.customExercises=Array.isArray(state.customExercises)?state.customExercises:[];const existingCatalogNames=new Set((typeof window.getExerciseCatalog==='function'?window.getExerciseCatalog():[]).map(x=>normalizeText(x.name)));for(const raw of incomingLibrary){const name=String(raw.name||'').trim();if(!name)continue;const id='import_'+name.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');if(state.customExercises.some(x=>x.id===id||normalizeText(x.name)===normalizeText(name))||existingCatalogNames.has(normalizeText(name)))continue;const focus=String(raw.focus||'').trim()||inferMuscleFocus(name,raw);if(/pendente de confirmacao/i.test(normalizeMuscleText(focus)))continue;state.customExercises.push({id,name,muscle:String(raw.muscle||'Não especificado'),focus,secondary:Array.isArray(raw.secondary)?raw.secondary:String(raw.secondary||'').split(/[;,|]/).map(x=>x.trim()).filter(Boolean),equipment:String(raw.equipment||'Não especificado'),type:String(raw.type||'Isolado'),level:String(raw.level||'Não especificado'),pattern:String(raw.pattern||'Não especificado'),tips:Array.isArray(raw.tips)?raw.tips:String(raw.tips||'').split(/[\n;|]/).map(x=>x.trim()).filter(Boolean),errors:Array.isArray(raw.errors)?raw.errors:String(raw.errors||'').split(/[\n;|]/).map(x=>x.trim()).filter(Boolean),alternatives:Array.isArray(raw.alternatives)?raw.alternatives:String(raw.alternatives||'').split(/[;,|]/).map(x=>x.trim()).filter(Boolean),sets:String(raw.sets||'3'),reps:String(raw.reps||'8–12'),rest:String(raw.rest||'90 s'),notes:String(raw.notes||'')});}if(typeof window.applyImportedExercises==='function'){const customs=state.customExercises.map(x=>({...x,focus:String(x.focus||'').trim()||inferMuscleFocus(x.name,x),secondary:Array.isArray(x.secondary)?x.secondary:[],tips:Array.isArray(x.tips)?x.tips:[],errors:Array.isArray(x.errors)?x.errors:[],alternatives:Array.isArray(x.alternatives)?x.alternatives:[]}));window.applyImportedExercises(customs);}state.exerciseFocusOverrides={...(state.exerciseFocusOverrides||{}),...(plan.focusOverrides||{})};state.planTitle=plan.name;state.planObjective=plan.objective;state.customWorkouts={};state.workoutDefaults={};state.selected=0;state.completed={};state.sessionActive=false;state.sessionId=null;state.sessionStartedAt=null;state.sessionFinishedAt=null;state.sessionDay=0;state.sessionExercise=0;state.sessionSet=0;state.guidedMode=false;state.guidedExercise=0;applyProfileEdits();workouts.forEach((w,wi)=>{if(w.ex?.length)state.workoutDefaults[wi]={sets:String(w.ex[0][1]),reps:String(w.ex[0][2]),rest:String(w.ex[0][3])};});if(!save()){state=previousState;applyProfileEdits();renderWeekButtons();renderWorkout();renderWorkoutImportCurrent();return;}renderWeekButtons();renderWorkout();updateDashboard();renderProgress();renderWorkoutImportCurrent();closeWorkoutImportPreview();workoutImportInfo(`✓ Plano “${plan.name}” importado. ${plan.days.length} dias e ${plan.totalExercises} exercícios foram carregados.`);$("workoutImportCard").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"nearest"});}
function parseWorkoutTablePdfText(source){
 const raw=String(source||"").replace(/\u00a0/g," ").replace(/\r/g,"");
 if(!/^\s*SESS[ÃA]O\s+\d+\s*[—–-]\s*ORGANIZAÇÃO\b/im.test(raw))return null;
 const lines=raw.split(/\n+/).map(x=>x.replace(/\s+$/,"").trim()).filter(Boolean);
 const clean=x=>String(x||"").replace(/\s+/g," ").trim();
 const fieldValue=(block,label)=>{
  const escaped=label.replace(/[.*+?^{}()|[\]\\]/g,"\\$&");
  const re=new RegExp("^"+escaped+"(?:\\s*:\\s*|\\s+)(.*)$","i");
  for(let i=0;i<block.length;i++){
   const line=clean(block[i]),m=line.match(re);
   if(m&&m[1].trim())return clean(m[1]);
   if(new RegExp("^"+escaped+"$","i").test(line)){
    for(let j=i+1;j<block.length;j++){const next=clean(block[j]);if(next)return next;}
   }
  }
  return "";
 };
 const libraryAt=lines.findIndex(x=>/^BIBLIOTECA\s*[—–-]\s*CADASTRO COMPLETO DE EXERCÍCIOS/i.test(x));
 const libraryLines=libraryAt>=0?lines.slice(libraryAt):[];
 const library=[];
 const libraryStarts=[];
 for(let i=0;i<libraryLines.length;i++){
  const m=libraryLines[i].match(/^Biblioteca\s*[•·]\s*Cadastro Completo\s*\d+\s*[—–-]\s*(.+)$/i);
  if(m)libraryStarts.push({index:i,name:clean(m[1])});
 }
 for(let i=0;i<libraryStarts.length;i++){
  const item=libraryStarts[i],block=libraryLines.slice(item.index+1,libraryStarts[i+1]?.index??libraryLines.length);
  const muscle=fieldValue(block,"Grupo muscular principal");
  const focus=fieldValue(block,"Foco muscular específico");
  if(!item.name||!focus)continue;
  library.push({
   name:item.name,muscle:muscle||"Não especificado",focus,
   secondary:fieldValue(block,"Grupos secundários").split(/[;,|]/).map(x=>clean(x)).filter(Boolean),
   equipment:fieldValue(block,"Equipamento"),type:fieldValue(block,"Tipo de exercício"),
   level:fieldValue(block,"Nível"),pattern:fieldValue(block,"Padrão de movimento"),
   tips:fieldValue(block,"Execução técnica"),errors:fieldValue(block,"Erros comuns"),
   alternatives:fieldValue(block,"Alternativas"),notes:fieldValue(block,"Observações")
  });
 }
 const sessionStarts=[];
 for(let i=0;i<lines.length;i++){
  const m=lines[i].match(/^SESS[ÃA]O\s+(\d+)\s*[—–-]\s*ORGANIZAÇÃO\s*\(([^)]+)\)/i);
  if(m)sessionStarts.push({index:i,number:Number(m[1]),day:clean(m[2]).replace(/\s*[—–-]\s*SESSÃO BÔNUS.*$/i,"").replace(/\s*\(.*$/,"")});
 }
 if(!sessionStarts.length)throw new Error("O PDF contém detalhes de treino, mas não encontrei cabeçalhos de sessão reconhecíveis.");
 const planTitleMatch=raw.match(/Plano de Treino\s*:\s*([^\n]+)/i);
 const objectiveMatch=raw.match(/Objetivo principal\s*(?:\t+|\s{2,}|\n)\s*([^\n]+)/i);
 const durationMatch=raw.match(/Duração prevista\s*(?:\t+|\s{2,}|\n)\s*([^\n]+)/i);
 const frequencyMatch=raw.match(/Frequência semanal\s*(?:\t+|\s{2,}|\n)\s*([^\n]+)/i);
 const splitMatch=raw.match(/Divisão semanal\s*(?:\t+|\s{2,}|\n)\s*([^\n]+)/i);
 const days=[];
 for(let si=0;si<sessionStarts.length;si++){
  const session=sessionStarts[si],end=sessionStarts[si+1]?.index??(libraryAt>=0?libraryAt:lines.length);
  const block=lines.slice(session.index,end);
  const title=fieldValue(block,"Nome da sessão")||"Treino "+(si+1);
  const focus=fieldValue(block,"Grupos musculares / foco");
  const warmup=fieldValue(block,"Aquecimento e mobilidade");
  const duration=fieldValue(block,"Duração estimada");
  const notes=fieldValue(block,"Observações da sessão");
  const exerciseStarts=[];
  for(let i=0;i<block.length;i++){
   const m=block[i].match(/^Sessão\s+\d+\s*[•·]\s*Exercício\s+\d+\s*[—–-]\s*(.+)$/i);
   if(m)exerciseStarts.push({index:i,name:clean(m[1])});
  }
  if(!exerciseStarts.length)throw new Error("A sessão “"+session.day+"” foi encontrada, mas seus exercícios não foram reconhecidos.");
  const exercises=[];
  for(let ei=0;ei<exerciseStarts.length;ei++){
   const item=exerciseStarts[ei],exerciseBlock=block.slice(item.index+1,exerciseStarts[ei+1]?.index??block.length);
   const name=fieldValue(exerciseBlock,"Nome do exercício")||item.name;
   const setsText=fieldValue(exerciseBlock,"Número de séries");
   const repsText=fieldValue(exerciseBlock,"Repetições / faixa");
   const restText=fieldValue(exerciseBlock,"Descanso entre séries");
   const sets=Number((setsText.match(/\d{1,2}/)||[])[0]);
   if(!Number.isInteger(sets)||sets<1||sets>12)throw new Error(session.day+", "+name+": não consegui ler o número de séries no campo “Número de séries”.");
   if(!repsText)throw new Error(session.day+", "+name+": não encontrei “Repetições / faixa”.");
   if(!restText)throw new Error(session.day+", "+name+": não encontrei “Descanso entre séries”.");
   const reps=repsText.replace(/\s+/g,"").replace(/[–—]/g,"-");
   const lib=library.find(x=>normalizeText(x.name)===normalizeText(name));
   const suppliedFocus=lib?.focus||lib?.muscle||"";
   exercises.push({name,sets,reps,rest:restText,focus:suppliedFocus});
  }
  const dayName=session.day.replace(/\s+/g," ").trim();
  days.push({day:dayName,short:dayName.replace(/-feira$/i,"").slice(0,3).toUpperCase(),title,subtitle:[focus,duration,warmup,notes].filter(Boolean).join(" · "),exercises});
 }
 const normalized=normalizeWorkoutImport({
  format:"FORMA_WORKOUT_PLAN",version:1,
  name:planTitleMatch?clean(planTitleMatch[1]).slice(0,100):"Plano personalizado",
  objective:objectiveMatch?clean(objectiveMatch[1]).slice(0,180):"",
  duration:durationMatch?clean(durationMatch[1]):"",
  frequency:frequencyMatch?clean(frequencyMatch[1]):"",
  split:splitMatch?clean(splitMatch[1]):"",
  days:days.map(d=>({day:d.day,title:d.title,subtitle:d.subtitle,exercises:d.exercises})),
  exerciseLibrary:library
 });
 normalized.metadata={...(normalized.metadata||{}),description:"Plano importado de PDF estruturado em sessões e fichas de exercícios.",duration:durationMatch?clean(durationMatch[1]):"",frequency:frequencyMatch?clean(frequencyMatch[1]):"",split:splitMatch?clean(splitMatch[1]):"",days:days.map(d=>({day:d.day,title:d.title,subtitle:d.subtitle,exercises:d.exercises.map(x=>({name:x.name,sets:x.sets,reps:x.reps,rest:x.rest,focus:x.focus}))})),exerciseLibrary:library};
 return normalized;
}
function parseWorkoutPlainPdfText(source){
 const text=String(source||"").replace(/\u00a0/g," ").replace(/\r/g,"");
 if(!/PLANO\s+DE\s+TREINO/i.test(text))return null;
 const lines=text.split(/\n+/).map(x=>x.replace(/\s+/g," ").trim()).filter(Boolean);
 const heading=/^(.+?)\s*[—–-]\s*(Membros superiores|Membros inferiores|Corpo inteiro(?:\s*[—–-]\s*(?:complemento\s*)?opcional)?)(?:\s+Foco:.*)?$/i;
 const starts=[];
 for(let i=0;i<lines.length;i++){const m=lines[i].match(heading);if(m)starts.push({index:i,day:m[1].trim(),title:m[2].trim()});}
 if(!starts.length)return null;
 const libraryAt=lines.findIndex((x,i)=>i>starts[starts.length-1].index&&/^Biblioteca de exercícios$/i.test(x));
 const end=libraryAt>=0?libraryAt:lines.length,days=[];
 for(let di=0;di<starts.length;di++){
  const start=starts[di],stop=Math.min(starts[di+1]?.index??end,end),block=lines.slice(start.index+1,stop);
  let subtitle="",pending=null;const exercises=[];
  const flush=()=>{if(!pending)return;const detail=pending.details.join(" ");const sets=detail.match(/\bSéries\s*:\s*(\d{1,2})/i);const reps=detail.match(/\bRepetições\s*:\s*(\d{1,2}\s*[–—-]\s*\d{1,2}|\d{1,2})/i);const rest=detail.match(/\b(?:Descanso|Intervalo)\s*:\s*(\d{1,3}(?:\s*[–—-]\s*\d{1,3})?\s*(?:s|segundos?|min(?:utos?)?)?)/i);if(!sets||!reps||!rest)throw new Error("Não consegui ler séries, repetições e descanso de "+pending.name+" na sessão "+start.day+".");exercises.push({name:pending.name,sets:Number(sets[1]),reps:reps[1].replace(/\s+/g,""),rest:rest[1].trim(),focus:""});pending=null;};
  for(const line of block){if(/^Foco\s*:/i.test(line)){subtitle=line.replace(/^Foco\s*:\s*/i,"");continue;}const ex=line.match(/^\d{1,2}\.\s+(.+)$/);if(ex){flush();pending={name:ex[1].trim(),details:[]};continue;}if(pending&&/\b(?:Séries|Repetições|Descanso|Intervalo)\s*:/i.test(line))pending.details.push(line);}
  flush();if(!exercises.length)throw new Error("A sessão "+start.day+" foi identificada, mas nenhum exercício foi encontrado.");
  days.push({day:start.day,short:start.day.replace(/-feira$/i,"").slice(0,3).toUpperCase(),title:start.title,subtitle,exercises});
 }
 const library=[];
 if(libraryAt>=0){const tail=lines.slice(libraryAt+1);for(let i=0;i<tail.length;i++){const name=tail[i];const group=tail[i+1]?.match(/^Grupo principal\s*:\s*(.+?)\s+Foco\s*:\s*(.+)$/i);if(group){library.push({name,muscle:group[1].trim(),focus:group[2].trim()});i++;}}}
 const libMap=new Map(library.map(x=>[normalizeText(x.name),x]));
 for(const day of days)for(const ex of day.exercises){const item=libMap.get(normalizeText(ex.name));if(item)ex.focus=item.focus||item.muscle;}
 const name=(lines.find(x=>/^Plano\s*:/i.test(x))||"Plano: Plano personalizado").replace(/^Plano\s*:\s*/i,"").trim();
 const objective=(lines.find(x=>/^Objetivo\s*:/i.test(x))||"").replace(/^Objetivo\s*:\s*/i,"").trim();
 return normalizeWorkoutImport({format:"FORMA_WORKOUT_PLAN",version:1,name,objective,days:days.map(d=>({day:d.day,title:d.title,subtitle:d.subtitle,exercises:d.exercises})),exerciseLibrary:library});
}
function parseWorkoutPdfText(source){
 const tableParsed=parseWorkoutTablePdfText(source);
 if(tableParsed)return tableParsed;
 const plainParsed=parseWorkoutPlainPdfText(source);
 if(plainParsed)return plainParsed;
 const text=String(source||"").replace(/\u00a0/g," ").replace(/\r/g,"");
 const start=text.search(/^\s*PLANO DE TREINO\s*$/im);
 if(start<0)return null;
 const body=text.slice(start);
 const libraryAt=body.search(/^\s*Biblioteca de exercícios\s*$/im);
 const planText=(libraryAt>=0?body.slice(0,libraryAt):body).trim();
 const lines=planText.split(/\n+/).map(x=>x.replace(/\s+/g," ").trim()).filter(Boolean);
 const heading=/^(.+?)\s*[—–-]\s*(Membros superiores|Membros inferiores|Corpo inteiro(?:\s*[—–-]\s*(?:complemento\s*)?opcional)?)(?:\s+Foco:.*)?$/i;
 const days=[];
 let current=null,pending=null;
 const flushExercise=()=>{
  if(!pending)return;
  const sets=pending.details.match(/\bSéries\s*:\s*(\d{1,2})/i);
  const reps=pending.details.match(/\bRepetições\s*:\s*(\d{1,2}\s*[–—-]\s*\d{1,2}|\d{1,2})/i);
  const rest=pending.details.match(/\b(?:Intervalo|Descanso)\s*:\s*(\d{1,3}(?:\s*[–—-]\s*\d{1,3})?\s*(?:s|segundos?|min(?:utos?)?)?)/i);
  if(!sets||!reps||!rest)throw new Error("Não consegui identificar séries, repetições e intervalo do exercício “"+pending.name+"”. Confira se o PDF foi preenchido e salvo corretamente.");
  pending.day.exercises.push({name:pending.name,sets:Number(sets[1]),reps:reps[1].replace(/\s+/g,""),rest:rest[1].trim(),focus:""});
  pending=null;
 };
 const flushDay=()=>{flushExercise();if(current){if(!current.exercises.length)throw new Error("A sessão “"+current.day+"” foi encontrada, mas nenhum exercício pôde ser lido.");days.push(current);current=null;}};
 for(let i=0;i<lines.length;i++){
  const line=lines[i];
  if(/^Biblioteca de exercícios$/i.test(line))break;
  const hm=line.match(heading);
  if(hm){flushDay();const dayName=hm[1].trim();current={day:dayName,short:dayName.replace(/-feira$/i,"").slice(0,3).toUpperCase(),title:hm[2].trim(),subtitle:"",exercises:[]};continue;}
  if(!current)continue;
  if(/^Foco\s*:/i.test(line)){current.subtitle=line.replace(/^Foco\s*:\s*/i,"");continue;}
  const ex=line.match(/^\d{1,2}\.\s+(.+)$/);
  if(ex){flushExercise();pending={name:ex[1].trim(),details:"",day:current};continue;}
  if(pending&&/\bSéries\s*:/i.test(line)){pending.details+=" "+line;continue;}
  if(pending&&/^(?:Carga|Execução|Preparação|Progressão)\s*:/i.test(line))continue;
  if(pending&&pending.details&&!/\b(?:Intervalo|Descanso)\s*:/i.test(pending.details))pending.details+=" "+line;
 }
 flushDay();
 if(!days.length)throw new Error("Encontrei a seção “PLANO DE TREINO”, mas não consegui reconhecer as sessões. Use o modelo atualizado do FORMA.");
 const total=days.reduce((n,d)=>n+d.exercises.length,0);
 if(total<1)throw new Error("Não foram encontrados exercícios no plano.");
 const libraryText=libraryAt>=0?body.slice(libraryAt):"";
 const library=[];
 const libRe=/([^\n]+)\n\s*Grupo principal:\s*([^\n]+?)\s+Foco:\s*([^\n]+?)(?:\s+Secundários:|$)/g;
 let lm;
 while((lm=libRe.exec(libraryText))){library.push({name:lm[1].trim(),muscle:lm[2].trim(),focus:lm[3].trim()});}
 const libMap=new Map(library.map(x=>[normalizeText(x.name),x]));
 for(const day of days)for(const ex of day.exercises){const item=libMap.get(normalizeText(ex.name));if(item)ex.focus=item.focus||item.muscle;}
 const objectiveMatch=planText.match(/Objetivo:\s*([^\n]+)/i);
 return normalizeWorkoutImport({format:"FORMA_WORKOUT_PLAN",version:1,name:"Plano personalizado",objective:objectiveMatch?objectiveMatch[1].trim():"",days:days.map(d=>({day:d.day,title:d.title,subtitle:d.subtitle,exercises:d.exercises})),exerciseLibrary:library});
}

function parseReadableWorkoutPlan(source){
 const lines=String(source||"").replace(/^\uFEFF/,"").split(/\r?\n/);
 let name="Plano personalizado",objective="",currentDay=null,days=[],currentExerciseCount=0;
 const flushDay=()=>{if(currentDay){if(!currentDay.exercises.length)throw new Error(`O dia “${currentDay.day}” não tem exercícios. Adicione ao menos um exercício ou remova esse dia.`);days.push(currentDay);currentDay=null;}};
 for(let i=0;i<lines.length;i++){
  const line=lines[i].trim(); if(!line||line.startsWith("<!--")||/^```/.test(line)||/^---+$/.test(line))continue;
  let m;
  if((m=line.match(/^#\s+(?:Plano\s*:\s*)?(.+)$/i))){name=m[1].replace(/^Plano\s*:\s*/i,"").trim()||name;continue;}
  if((m=line.match(/^(?:Objetivo|Meta)\s*:\s*(.+)$/i))){objective=m[1].trim();continue;}
  if((m=line.match(/^##\s+(.+)$/))){flushDay();let header=m[1].trim();let parts=header.split(/\s+[|—–-]\s+/);let day=parts[0].replace(/^Dia\s*:\s*/i,"").trim();let title=(parts.slice(1).join(" — ")||day).trim();let short=day.replace(/-feira$/i,"").slice(0,3).toUpperCase();currentDay={day,short,title,subtitle:"",exercises:[]};continue;}
  if((m=line.match(/^(?:Observações|Observacao|Notas)\s*:\s*(.+)$/i))&&currentDay){currentDay.subtitle=m[1].trim();continue;}
  if(line.startsWith("- ")||line.startsWith("* ")){
   if(!currentDay)throw new Error(`Linha ${i+1}: coloque o exercício abaixo de um título de dia iniciado por “##”.`);
   const content=line.slice(2).trim();
   // Forma preferida: Nome | séries: 3 | repetições: 8-12 | descanso: 90 s
   const pieces=content.split("|").map(x=>x.trim());
   if(pieces.length<4)throw new Error(`Linha ${i+1}: use o formato “Nome do exercício | séries: 3 | repetições: 8-12 | descanso: 90 s”.`);
   const get=(re,label)=>{const found=pieces.slice(1).map(x=>x.match(re)).find(Boolean);if(!found)throw new Error(`Linha ${i+1}: falta “${label}”.`);return found[1].trim();};
   const sets=get(/^(?:s[eé]ries|series)\s*:\s*(\d+)$/i,"séries: número");
   const reps=get(/^(?:repeti[cç][õo]es|reps?)\s*:\s*(\d+(?:\s*[-–—]\s*\d+)?)$/i,"repetições: 8-12");
   const rest=get(/^descanso\s*:\s*(\d+(?:\s*[-–—]\s*\d+)?\s*(?:s|segundos?|min(?:utos?)?)?)$/i,"descanso: 90 s");const focusPiece=pieces.slice(1).map(x=>x.match(/^(?:foco|focus)\s*:\s*(.+)$/i)).find(Boolean);
   currentDay.exercises.push({name:pieces[0],sets:Number(sets),reps:reps.replace(/\s+/g," "),rest:rest.replace(/\s+/g," "),focus:focusPiece?focusPiece[1].trim():""});
  }
 }
 flushDay();
 if(!days.length)throw new Error("Não encontrei dias de treino. Use títulos como “## Segunda-feira | Peito e tríceps” e liste os exercícios abaixo.");
 return normalizeWorkoutImport({format:"FORMA_WORKOUT_PLAN",version:1,name,objective,days});
}

let pendingNutritionImport=null;
function nutritionImportStatus(message,isError=false){const el=$("nutritionImportStatus");if(!el)return;el.hidden=!message;el.textContent=message||"";el.classList.toggle("error",!!isError);}
function normalizeNutritionImport(raw){
 if(!raw||typeof raw!=="object"||Array.isArray(raw))throw new Error("O arquivo precisa conter um objeto JSON de plano nutricional.");
 if(raw.format!==undefined&&!["FORMA_NUTRITION_PLAN","FORMA_NUTRITION_PLAN_V1"].includes(String(raw.format)))throw new Error("O campo “format” não corresponde a um plano nutricional FORMA.");
 if(raw.version!==undefined&&Number(raw.version)!==1)throw new Error("Esta versão do FORMA importa planos nutricionais na versão 1.");
 const src=raw.plan&&typeof raw.plan==="object"&&!Array.isArray(raw.plan)?raw.plan:raw;
 const name=String(src.name||src.title||raw.name||raw.title||"Plano nutricional personalizado").trim().slice(0,100);
 const objective=String(src.objective||src.goal||raw.objective||raw.goal||"").trim().slice(0,180);
 const mealsRaw=src.meals||src.refeicoes||src.mealPlan;
 if(!Array.isArray(mealsRaw)||mealsRaw.length<1||mealsRaw.length>12)throw new Error("O plano precisa conter de 1 a 12 refeições.");
 const number=(v,label,max=100000)=>{if(v===undefined||v===null||v==="")return 0;const n=Number(String(v).replace(",","."));if(!Number.isFinite(n)||n<0||n>max)throw new Error(`${label}: informe um número válido entre 0 e ${max}.`);return Math.round(n*10)/10;};
 const meals=mealsRaw.map((m,i)=>{
  if(!m||typeof m!=="object"||Array.isArray(m))throw new Error(`A refeição ${i+1} está em formato inválido.`);
  const mealName=String(m.name||m.meal||m.refeicao||`Refeição ${i+1}`).trim().slice(0,80);
  const itemsRaw=m.items||m.foods||m.alimentos;
  if(!Array.isArray(itemsRaw)||itemsRaw.length<1||itemsRaw.length>30)throw new Error(`${mealName}: inclua de 1 a 30 alimentos.`);
  const items=itemsRaw.map((x,j)=>{
   if(!x||typeof x!=="object"||Array.isArray(x))throw new Error(`${mealName}, alimento ${j+1}: formato inválido.`);
   const itemName=String(x.name||x.food||x.alimento||"").trim().slice(0,100);
   if(!itemName)throw new Error(`${mealName}, alimento ${j+1}: falta o nome.`);
   const amount=String(x.amount||x.quantity||x.quantidade||"").trim().slice(0,80);
   if(!amount)throw new Error(`${mealName}, ${itemName}: informe a porção/quantidade (ex.: 100 g).`);
   return {name:itemName,amount,kcal:number(x.kcal??x.calories,`${itemName} — kcal`),protein:number(x.protein??x.proteina??x.p,`${itemName} — proteína`,1000),carbs:number(x.carbs??x.carboidratos??x.c,`${itemName} — carboidratos`,1000),fat:number(x.fat??x.gorduras??x.g,`${itemName} — gorduras`,1000)};
  });
  const sum={kcal:0,protein:0,carbs:0,fat:0};items.forEach(x=>{sum.kcal+=x.kcal;sum.protein+=x.protein;sum.carbs+=x.carbs;sum.fat+=x.fat;});
  return {name:mealName,time:String(m.time||m.horario||"").trim().slice(0,30),notes:String(m.notes||m.observacoes||"").trim().slice(0,250),items,kcal:number(m.kcal??sum.kcal,`${mealName} — kcal`),protein:number(m.protein??m.proteina??sum.protein,`${mealName} — proteína`,10000),carbs:number(m.carbs??m.carboidratos??sum.carbs,`${mealName} — carboidratos`,10000),fat:number(m.fat??m.gorduras??sum.fat,`${mealName} — gorduras`,10000)};
 });
 const totals=meals.reduce((a,m)=>({kcal:a.kcal+m.kcal,protein:a.protein+m.protein,carbs:a.carbs+m.carbs,fat:a.fat+m.fat}),{kcal:0,protein:0,carbs:0,fat:0});
 const explicit=src.totals||raw.totals||{};
 ["kcal","protein","carbs","fat"].forEach(k=>{if(explicit[k]!==undefined)totals[k]=number(explicit[k],`Total — ${k}`,100000);});
 return {name,objective,meals,totals,createdAt:new Date().toISOString()};
}
function parseReadableNutritionPlan(source){
 const lines=String(source||"").replace(/^\uFEFF/,"").split(/\r?\n/);let name="Plano nutricional personalizado",objective="",meals=[],current=null;
 const flush=()=>{if(current){if(!current.items.length)throw new Error(`A refeição “${current.name}” não tem alimentos.`);meals.push(current);current=null;}};
 for(let i=0;i<lines.length;i++){const line=lines[i].trim();if(!line||/^```/.test(line)||/^---+$/.test(line))continue;let m;
  if((m=line.match(/^#\s+(?:Plano\s*:\s*)?(.+)$/i))){name=m[1].replace(/^Plano\s*:\s*/i,"").trim()||name;continue;}
  if((m=line.match(/^(?:Objetivo|Meta)\s*:\s*(.+)$/i))){objective=m[1].trim();continue;}
  if((m=line.match(/^##\s+(.+)$/))){flush();const parts=m[1].split(/\s+[|—–-]\s+/);current={name:parts[0].trim(),time:"",notes:"",items:[]};if(parts[1])current.time=parts.slice(1).join(" — ").trim();continue;}
  if(line.startsWith("- ")){if(!current)throw new Error(`Linha ${i+1}: coloque o alimento abaixo de um título de refeição iniciado por “##”.`);
   const parts=line.slice(2).split("|").map(x=>x.trim());if(parts.length<2)throw new Error(`Linha ${i+1}: use “Alimento | quantidade: 100 g | kcal: 150 | proteína: 5 | carboidratos: 20 | gorduras: 4”.`);
   const get=(keys)=>{for(const p of parts.slice(1)){const mm=p.match(new RegExp("^(?:"+keys+")\\s*:\\s*(.+)$","i"));if(mm)return mm[1].trim();}return "";};
   const amount=get("quantidade|por[cç][aã]o|amount");if(!amount)throw new Error(`Linha ${i+1}: informe a quantidade.`);
   current.items.push({name:parts[0],amount,kcal:get("kcal|calorias"),protein:get("prote[ií]na|prote[ií]nas|protein"),carbs:get("carboidratos|carbs"),fat:get("gorduras|fat")});
  }
 }
 flush();if(!meals.length)throw new Error("Não encontrei refeições. Use títulos como “## Café da manhã | 7h” e liste os alimentos abaixo.");
 return normalizeNutritionImport({format:"FORMA_NUTRITION_PLAN",version:1,name,objective,meals});
}
function nutritionPlanTemplate(){return {format:"FORMA_NUTRITION_PLAN",version:1,plan:{name:"Exemplo — plano nutricional",objective:"Ex.: organização alimentar",totals:{kcal:1900,protein:130,carbs:210,fat:60},meals:[{name:"Café da manhã",time:"7h",items:[{name:"Pão integral",amount:"2 fatias (60 g)",kcal:150,protein:6,carbs:28,fat:2},{name:"Ovos",amount:"2 unidades",kcal:140,protein:12,carbs:1,fat:10}]},{name:"Almoço",time:"12h30",items:[{name:"Arroz cozido",amount:"150 g",kcal:195,protein:4,carbs:42,fat:1},{name:"Feijão cozido",amount:"100 g",kcal:76,protein:5,carbs:14,fat:1}]}]}};}
function nutritionPlanJsonFile(){const p=state.nutritionPlanImported;if(!p)return nutritionPlanTemplate();return {format:"FORMA_NUTRITION_PLAN",version:1,plan:{name:p.name,objective:p.objective,totals:p.totals,meals:p.meals}};}
function nutritionPlanMarkdownTemplate(){return `# Plano: Exemplo — plano nutricional\nObjetivo: Organização alimentar e distribuição das refeições\n\n## Café da manhã | 7h\n- Pão integral | quantidade: 2 fatias (60 g) | kcal: 150 | proteína: 6 | carboidratos: 28 | gorduras: 2\n- Ovos | quantidade: 2 unidades | kcal: 140 | proteína: 12 | carboidratos: 1 | gorduras: 10\n\n## Almoço | 12h30\n- Arroz cozido | quantidade: 150 g | kcal: 195 | proteína: 4 | carboidratos: 42 | gorduras: 1\n- Feijão cozido | quantidade: 100 g | kcal: 76 | proteína: 5 | carboidratos: 14 | gorduras: 1\n`;}
function exportNutritionPlanPdf(){if(typeof window.exportPdf==='function')return window.exportPdf('nutrition');nutritionImportStatus('O exportador de PDF ainda não está disponível. Atualize o FORMA e tente novamente.',true);return false;}

function renderNutritionImportedPlan(){
 const current=$("nutritionImportCurrent"),active=$("nutritionImportedPlan"),p=state.nutritionPlanImported;
 if(current)current.textContent=p?`Plano ativo: ${p.name} · ${p.meals.length} refeições`:"Nenhum plano nutricional importado neste perfil.";
 if(!active)return;
 if(!p){active.hidden=true;active.innerHTML="";return;}
 const fmt=n=>Number(n||0).toLocaleString("pt-BR",{maximumFractionDigits:1});
 active.hidden=false;
 active.innerHTML=`<div class="section-head"><div><h4>🥗 ${esc(p.name)}</h4><p class="sub">${esc(p.objective||"Plano nutricional importado para este perfil")}</p></div><button class="btn ghost" type="button" id="removeNutritionPlan">Remover plano</button></div><div class="nutrition-import-summary">${[["Energia",fmt(p.totals.kcal)+" kcal"],["Proteínas",fmt(p.totals.protein)+" g"],["Carboidratos",fmt(p.totals.carbs)+" g"],["Gorduras",fmt(p.totals.fat)+" g"]].map(x=>`<div class="nutrition-import-stat"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join("")}</div><div class="nutrition-import-meals">${p.meals.map(m=>`<div class="nutrition-import-meal"><h4>${esc(m.name)}${m.time?" · "+esc(m.time):""} <span style="color:var(--muted);font-weight:500">— ${fmt(m.kcal)} kcal</span></h4><p>${m.items.map(x=>`${esc(x.name)} — ${esc(x.amount)}`).join(" · ")}</p><p>P ${fmt(m.protein)} g · C ${fmt(m.carbs)} g · G ${fmt(m.fat)} g</p>${m.notes?`<p>${esc(m.notes)}</p>`:""}</div>`).join("")}</div><p class="food-note">Os valores nutricionais são os informados no arquivo. Confira porções, rótulos e fontes; importar um plano não registra automaticamente os alimentos no diário nem substitui avaliação individual de nutricionista.</p>`;
 $("removeNutritionPlan")?.addEventListener("click",()=>{if(!confirm("Remover apenas o plano nutricional importado? Seu diário, alimentos e metas serão preservados."))return;state.nutritionPlanImported=null;save();renderNutritionImportedPlan();nutritionImportStatus("Plano importado removido. O restante dos seus dados foi preservado.");});
}
function showNutritionImportPreview(plan,fileName){
 pendingNutritionImport=plan;$("nutritionImportFileName").textContent=fileName;
 const fmt=n=>Number(n||0).toLocaleString("pt-BR",{maximumFractionDigits:1});
 $("nutritionImportSummary").innerHTML=`<div class="nutrition-import-summary"><div class="nutrition-import-stat"><span>Plano</span><strong>${esc(plan.name)}</strong></div><div class="nutrition-import-stat"><span>Refeições</span><strong>${plan.meals.length}</strong></div><div class="nutrition-import-stat"><span>Energia</span><strong>${fmt(plan.totals.kcal)} kcal</strong></div><div class="nutrition-import-stat"><span>Proteína</span><strong>${fmt(plan.totals.protein)} g</strong></div></div>${plan.objective?`<p class="sub">Objetivo: ${esc(plan.objective)}</p>`:""}`;
 $("nutritionImportMeals").innerHTML=plan.meals.map((m,i)=>`<div class="nutrition-import-meal"><h4>${i+1}. ${esc(m.name)}${m.time?" · "+esc(m.time):""} — ${fmt(m.kcal)} kcal</h4><p>${m.items.map(x=>`${esc(x.name)} — ${esc(x.amount)}`).join(" · ")}</p><p>P ${fmt(m.protein)} g · C ${fmt(m.carbs)} g · G ${fmt(m.fat)} g</p></div>`).join("");
 $("nutritionImportPreview").hidden=false;nutritionImportStatus("Arquivo lido e validado. Confira a prévia antes de importar.");
}
function initNutritionImport(){
 if(!$("chooseNutritionImport"))return;
 $("chooseNutritionImport").addEventListener("click",()=>$("nutritionImportFile").click());
 $("nutritionImportAction")?.addEventListener("click",()=>$("chooseNutritionImport")?.click());
 $("downloadNutritionMenuPdf")?.addEventListener("click",()=>{const meals=["Café da manhã","Lanche da manhã","Almoço","Lanche da tarde","Jantar","Ceia"];const sections=meals.map((name,index)=>`<section class="section"><h2>${index+1}. ${name}</h2><table class="table"><thead><tr><th>Alimento / preparação</th><th>Quantidade</th><th>kcal</th><th>Proteína (g)</th><th>Carboidrato (g)</th><th>Gordura (g)</th></tr></thead><tbody>${Array.from({length:3},()=>"<tr><td style=\"height:25px\"></td><td></td><td></td><td></td><td></td><td></td></tr>").join("")}</tbody></table></section>`).join("");const content=`<div class="section"><h2>Identificação</h2><p>Nome do cardápio: ____________________________________________________</p><p>Data: ____ / ____ / ______ &nbsp;&nbsp; Objetivo: __________________________________________</p><p class="muted">Preencha uma linha para cada alimento ou preparação, com quantidade e valores nutricionais quando disponíveis.</p></div>${sections}<div class="section"><h2>Resumo diário</h2><p>Calorias: __________ kcal &nbsp; Proteínas: __________ g &nbsp; Carboidratos: __________ g &nbsp; Gorduras: __________ g</p><p>Horários / observações: ____________________________________________________________________</p></div><div class="note">Este PDF é um modelo para planejamento e preenchimento. Para importar no FORMA, utilize um arquivo JSON, Markdown ou TXT compatível.</div>`;openFormaPrintDocument("Modelo de cardápio","Ficha em branco para organizar refeições, porções e valores nutricionais",content,$("nutritionImportStatus"));});
 $("nutritionImportFile").addEventListener("change",async()=>{const file=$("nutritionImportFile").files?.[0];if(!file)return;$("nutritionImportPreview").hidden=true;pendingNutritionImport=null;
  if(file.size>15*1024*1024){nutritionImportStatus("O PDF ultrapassa o limite de 15 MB.",true);$("nutritionImportFile").value="";return;}
  try{const content=await readFormaImportPdfText(file);const parsed=/^\s*[\[{]/.test(content)?normalizeNutritionImport(JSON.parse(content)):parseReadableNutritionPlan(content);showNutritionImportPreview(parsed,file.name);}
  catch(error){nutritionImportStatus(error?.message||"Não foi possível ler o plano. Confira o modelo e os campos obrigatórios.",true);}
  finally{$("nutritionImportFile").value="";}
 });
 $("applyNutritionImport").addEventListener("click",()=>{if(!pendingNutritionImport)return;const p=pendingNutritionImport;if(!confirm(`Importar “${p.name}” e substituir o plano nutricional importado deste perfil?\n\n${p.meals.length} refeições · ${Math.round(p.totals.kcal)} kcal informadas.\n\nO diário alimentar, a lista de alimentos, as metas e o histórico serão preservados.`))return;const previous=state.nutritionPlanImported;state.nutritionPlanImported=p;if(!save()){state.nutritionPlanImported=previous;return;}pendingNutritionImport=null;$("nutritionImportPreview").hidden=true;renderNutritionImportedPlan();nutritionImportStatus(`✓ Plano “${p.name}” importado e salvo neste perfil.`);});
 $("cancelNutritionImport").addEventListener("click",()=>{pendingNutritionImport=null;$("nutritionImportPreview").hidden=true;nutritionImportStatus("Importação cancelada. O plano ativo não foi alterado.");});
 $("downloadNutritionTemplate").addEventListener("click",()=>{window.downloadPdfTemplate("nutrition");nutritionImportStatus("Modelo PDF de plano nutricional gerado com campos editáveis, estrutura compatível e instruções específicas para IA.");return;const blob=new Blob([JSON.stringify(nutritionPlanTemplate(),null,2)],{type:"application/json;charset=utf-8"});const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="modelo-plano-nutricional-forma.json";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);nutritionImportStatus("Modelo JSON baixado. Edite nome, objetivo, refeições, porções e valores nutricionais e depois importe o arquivo.");});
 $("exportNutritionPlan").addEventListener("click",()=>{if(!state.nutritionPlanImported){nutritionImportStatus("Ainda não há um plano importado para exportar.",true);return;}const blob=new Blob([JSON.stringify(nutritionPlanJsonFile(),null,2)],{type:"application/json;charset=utf-8"});const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="plano-nutricional-forma.json";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);nutritionImportStatus("Plano nutricional exportado em JSON.");});
 renderNutritionImportedPlan();
}

function initWorkoutImport(){$("chooseWorkoutImport").addEventListener("click",()=>{if(state.sessionActive){alert("Finalize a sessão em andamento antes de importar outro plano.");return;}$("workoutImportFile").click();});$("workoutImportFile").addEventListener("change",async()=>{const file=$("workoutImportFile").files?.[0];if(!file)return;$("workoutImportPreview").hidden=true;pendingWorkoutImport=null;workoutImportInfo("Arquivo recebido: "+file.name+". Iniciando leitura…");try{if(file.size>15*1024*1024)throw new Error("O arquivo ultrapassa o limite de 15 MB.");const isPdf=/\.pdf$/i.test(file.name)||file.type==="application/pdf";const isJson=/\.json$/i.test(file.name)||file.type==="application/json";const content=isPdf?await readFormaImportPdfText(file):await file.text();workoutImportInfo("Arquivo lido. Validando estrutura do plano…");let parsed;if(isJson||/^\s*[\[{]/.test(content)){parsed=normalizeWorkoutImport(JSON.parse(content));}else{parsed=parseWorkoutPdfText(content)||parseReadableWorkoutPlan(content);}if(!parsed||!Array.isArray(parsed.days)||!parsed.days.length)throw new Error("O arquivo foi lido, mas não foi possível identificar dias e exercícios. Nenhum dado foi alterado.");showWorkoutImportPreview(parsed,file.name);$("workoutImportPreview").scrollIntoView({behavior:"smooth",block:"nearest"});}catch(error){console.error("FORMA: falha na importação do plano de treino",error);workoutImportError("Falha na importação: "+(error?.message||"não foi possível interpretar o arquivo")+". Seu plano atual não foi alterado.");$("workoutImportStatus").scrollIntoView({behavior:"smooth",block:"nearest"});}finally{$("workoutImportFile").value="";}});$("applyWorkoutImport").addEventListener("click",importWorkoutPlan);$("cancelWorkoutImport").addEventListener("click",()=>{closeWorkoutImportPreview();workoutImportInfo("Importação cancelada. O plano atual não foi alterado.");});$("downloadWorkoutTemplate").addEventListener("click",()=>{window.downloadPdfTemplate("workout");workoutImportInfo("Modelo PDF de plano de treino gerado. O documento contém campos editáveis, estrutura FORMA e instruções específicas para a IA. Revise a prévia ao importar.");return;
  const readable=`# Plano: Exemplo — plano personalizado
Objetivo: Hipertrofia e condicionamento

Para exercícios personalizados que não possam ser classificados pelo nome, acrescente um campo “foco: descrição específica” ao final da linha.

## Segunda-feira | Peito e tríceps
Observações: Ênfase em movimentos estáveis
- Supino inclinado na máquina | séries: 3 | repetições: 8-12 | descanso: 120-180 s | foco: Peitoral superior (porção clavicular; ênfase relativa)
- Tríceps testa na polia | séries: 3 | repetições: 10-12 | descanso: 60-90 s

## Quarta-feira | Costas e bíceps
Observações: Puxadas e remadas
- Puxada frontal com pegada neutra | séries: 3 | repetições: 8-12 | descanso: 120 s
- Rosca bíceps na polia | séries: 3 | repetições: 10-15 | descanso: 60-90 s

## Sexta-feira | Pernas e ombros
Observações: Volume moderado
- Cadeira extensora | séries: 3 | repetições: 10-15 | descanso: 60-90 s
- Elevação lateral na máquina | séries: 3 | repetições: 12-20 | descanso: 60-90 s
`;
  const blob=new Blob([readable],{type:"text/markdown;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="modelo-plano-forma.md";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);
  workoutImportInfo("Modelo legível baixado. Edite nomes, dias, séries, repetições e descansos; para exercícios não reconhecidos, inclua “foco: descrição específica” na linha e depois importe-o aqui.");
 });$("exportWorkoutPlan").addEventListener("click",()=>{downloadWorkoutJson(workoutPlanFileObject(),"plano-atual-forma.json");workoutImportInfo("Plano atual exportado em JSON. Esse arquivo também pode servir de referência para a IA.");});renderWorkoutImportCurrent();}

initWorkoutImport();
applyCustomAppearance();initFoodLibrary();initNutritionImport();setupFoodAreaNav();if($("foodDiaryDate")&&!$("foodDiaryDate").value)$("foodDiaryDate").value=dateKey();renderMeals();renderAutoFoodPlan();renderWeekButtons();renderWorkout();updateDashboard();renderProgress();refreshProfileLayout();if(state.sessionActive&&workouts[state.sessionDay]?.ex?.length){showTab("sessaoTreino");document.body.classList.add("session-mode");renderWorkoutSession();}
// Importação em lote das bibliotecas (JSON ou CSV), sem substituir registros existentes.

/* FORMA PDF IMPORT V2 — interpreta tabelas e documentos com campos legíveis. */
function formaImportKey(value){return String(value??'').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');}
function formaImportCanonicalKey(value){
 const k=formaImportKey(value),map={
  nome:'name',name:'name',alimento:'name',food:'name',exercicio:'name',exercise:'name',nome_do_alimento:'name',nome_do_exercicio:'name',
  exercise_name:'name',exercise_muscle:'muscle',exercise_focus:'focus',exercise_secondary:'secondary',exercise_equipment:'equipment',exercise_type:'type',exercise_level:'level',exercise_pattern:'pattern',exercise_tips:'tips',exercise_errors:'errors',exercise_alternatives:'alternatives',exercise_sets:'sets',exercise_reps:'reps',exercise_rest:'rest',exercise_notes:'notes',
  nome_da_refeicao:'meal_name',refeicao:'meal_name',meal:'meal_name',meal_name:'meal_name',
  ingrediente:'food_name',alimento_utilizado:'food_name',nome_do_ingrediente:'food_name',food_name:'food_name',ingredient:'food_name',
  kcal:'k',caloria:'k',calorias:'k',energia:'k',energia_kcal:'k',calories:'k',calorias_kcal:'k',kcal_100g:'k',kcal_por_100g:'k',energia_kcal_100g:'k',
  proteina:'p',proteinas:'p',proteina_g:'p',proteinas_g:'p',proteina_100g:'p',proteinas_100g:'p',protein:'p',
  carboidrato:'c',carboidratos:'c',carboidrato_g:'c',carboidratos_g:'c',carboidratos_100g:'c',carbs:'c',carbohydrates:'c',
  gordura:'f',gorduras:'f',gordura_total:'f',gorduras_totais:'f',gordura_g:'f',gorduras_g:'f',gorduras_totais_g:'f',gorduras_100g:'f',fat:'f',
  fibra:'fiber',fibras:'fiber',fibras_g:'fiber',fiber:'fiber',sodio:'sodium',sodio_mg:'sodium',sodium:'sodium',
  porcao:'basisAmount',porcao_de_referencia:'basisAmount',base_g:'basisAmount',base_ml:'basisAmount',basis_amount:'basisAmount',
  unidade:'unit',unit:'unit',grupo_muscular:'muscle',grupo_muscular_principal:'muscle',musculo:'muscle',muscle:'muscle',
  musculos_secundarios:'secondary',grupo_muscular_secundario:'secondary',secondary:'secondary',
  equipamento:'equipment',equipment:'equipment',tipo:'type',type:'type',nivel:'level',level:'level',
  foco:'focus',foco_muscular:'focus',focus:'focus',execucao:'tips',instrucoes:'tips',instrucoes_de_execucao:'tips',orientacoes_de_execucao:'tips',tips:'tips',
  erros_comuns:'errors',erros:'errors',errors:'errors',alternativas:'alternatives',alternatives:'alternatives',
  series:'sets',sets:'sets',repeticoes:'reps',reps:'reps',descanso:'rest',descanso_s:'rest',rest:'rest',
  quantidade:'amount',quantidade_g:'amount',quantidade_ml:'amount',porcao_consumida:'amount',amount:'amount',
  descricao:'description',description:'description',categoria:'category',category:'category',marca:'brand',brand:'brand',
  codigo_de_barras:'barcode',barcode:'barcode',preparo:'preparation',preparacao:'preparation',estado:'preparation',preparation:'preparation',
  fonte:'source',referencia:'sourceRef',observacoes:'notes',observacao:'notes',notes:'notes'
 };return map[k]||k;
}
function parseFormaHumanPdfRows(source){
 const text=String(source||'').replace(/^\uFEFF/,'').trim();if(!text||/^\s*[\[{]/.test(text))return [];
 // PDFs preenchíveis do FORMA expõem os valores dos campos como metadados [FORM FIELD].
 // Esses campos são a fonte estruturada e devem prevalecer sobre o texto visual do modelo.
 const formLines=text.split(/\r?\n/).map(x=>x.trim()).filter(x=>/^\[FORM FIELD\]\s*/i.test(x));
 if(formLines.length){const record={};for(const line of formLines){const m=line.replace(/^\[FORM FIELD\]\s*/i,'').match(/^([^:：]+)\s*[:：]\s*(.*)$/);if(!m)continue;const key=formaImportCanonicalKey(m[1]);if(key)record[key]=m[2].replace(/\\n/g,'\n').trim();}if(record.name||record.meal_name||record.food_name)return [record];}
 const lines=text.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
 const splitCells=line=>{if(line.includes('|'))return line.split('|').map(x=>x.trim()).filter((x,i,a)=>!(i===0&&!x)&&!(i===a.length-1&&!x));if(line.includes('\t'))return line.split(/\t+/).map(x=>x.trim());if(/\s{2,}/.test(line))return line.split(/\s{2,}/).map(x=>x.trim());return [];};
 for(let h=0;h<Math.min(lines.length,30);h++){
  const cells=splitCells(lines[h]);if(cells.length<3)continue;const headers=cells.map(formaImportCanonicalKey);
  if(!headers.some(x=>['name','meal_name','food_name'].includes(x))||!headers.some(x=>['k','p','c','f','equipment','muscle','amount','sets','reps'].includes(x)))continue;
  const rows=[];for(let j=h+1;j<lines.length;j++){const vals=splitCells(lines[j]);if(vals.length<2)continue;const row={};headers.forEach((key,i)=>{if(key&&vals[i]!==undefined)row[key]=vals[i];});if(Object.values(row).some(v=>String(v).trim()))rows.push(row);}if(rows.length)return rows;
 }
 let records=[],current={},lastKey='';const hasContent=o=>Object.keys(o).some(k=>String(o[k]??'').trim());const flush=()=>{if(hasContent(current))records.push(current);current={};lastKey='';};
 for(const raw of lines){
  if(/^---+$/.test(raw)){flush();continue;}
  if(/^#{1,3}\s+/.test(raw)){const heading=raw.replace(/^#{1,3}\s+/,'').trim();if(current.name||current.meal_name)flush();if(heading)current.name=heading.replace(/^(alimento|exercicio|exercício|refeicao|refeição)\s*[:\-]\s*/i,'').trim();lastKey='name';continue;}
  const m=raw.match(/^(?:[-*•]\s*)?([^:：]{2,75})\s*[:：]\s*(.*)$/);
  if(!m){if(lastKey&&current[lastKey]!==undefined)current[lastKey]+='\n'+raw;continue;}
  const key=formaImportCanonicalKey(m[1]);if(!key)continue;
  if((key==='name'||key==='meal_name')&&current[key]&&hasContent(current)&&Object.keys(current).some(k=>['k','p','c','f','equipment','muscle','tips','amount','food_name'].includes(k)))flush();
  const value=m[2].trim();if(current[key]!==undefined&&value)current[key]=String(current[key])+'\n'+value;else current[key]=value;lastKey=key;
 }
 flush();return records.filter(r=>r.name||r.meal_name||r.food_name);
}

function parseLibraryFileText(text, fileName){
 const trimmed=text.trim(); if(!trimmed) throw new Error('O arquivo está vazio.');
 if(fileName.toLowerCase().endsWith('.json') || trimmed.startsWith('{') || trimmed.startsWith('[')){
  const data=JSON.parse(trimmed); return Array.isArray(data)?data:(Array.isArray(data.foods)?data.foods:Array.isArray(data.alimentos)?data.alimentos:Array.isArray(data.exercises)?data.exercises:Array.isArray(data.exercicios)?data.exercicios:Array.isArray(data.meals)?data.meals:Array.isArray(data.refeicoes)?data.refeicoes:Array.isArray(data.items)?data.items:[]);
 }
 const humanRows=parseFormaHumanPdfRows(trimmed);if(humanRows.length)return humanRows;
 const lines=trimmed.split(/\r?\n/).filter(x=>x.trim()); const delimiter=(lines[0].match(/;/g)||[]).length>(lines[0].match(/,/g)||[]).length?';':',';
 const parseLine=line=>{const out=[];let cur='',quoted=false;for(let i=0;i<line.length;i++){const c=line[i];if(c==='"'&&line[i+1]==='"'&&quoted){cur+='"';i++;}else if(c==='"')quoted=!quoted;else if(c===delimiter&&!quoted){out.push(cur.trim());cur='';}else cur+=c;}out.push(cur.trim());return out;};
 const headers=parseLine(lines.shift()).map(h=>h.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,''));
 return lines.map(line=>Object.fromEntries(parseLine(line).map((v,i)=>[headers[i]||('campo_'+i),v])));
}
function importNumeric(v){if(v===undefined||v===null||v==='')return null;const n=Number(String(v).replace(',','.'));return Number.isFinite(n)?n:null;}
async function importLibraryFile(input, kind){const file=input.files&&input.files[0];if(!file)return;try{const rows=parseLibraryFileText(await readFormaImportPdfText(file),file.name);if(!rows.length)throw new Error('Não encontrei uma lista de registros. Use um PDF com tabela ou dados estruturados.');let added=0,updated=0,skipped=0,unclassified=[];
 if(kind==='food'){
  state.customFoods=state.customFoods&&typeof state.customFoods==='object'?state.customFoods:{};
state.foodOverrides=state.foodOverrides&&typeof state.foodOverrides==='object'?state.foodOverrides:{};
  for(const r of rows){const name=String(r.name??r.nome??r.alimento??'').trim();const k=importNumeric(r.k??r.kcal??r.calorias??r.energia_kcal),p=importNumeric(r.p??r.protein??r.proteina??r.proteinas),c=importNumeric(r.c??r.carbs??r.carboidrato??r.carboidratos),f=importNumeric(r.f??r.fat??r.gordura??r.gorduras);if(!name||[k,p,c,f].some(x=>x===null||x<0)){skipped++;continue;}const key='custom_'+name.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');const old=state.customFoods[key];const micronutrients=r.micronutrients??r.micronutrientes??r.micros??{};state.customFoods[key]={...(old||{}),name,k,p,c,f,unit:String(r.unit??r.unidade??r.basis_unit??'g').toLowerCase()==='ml'?'ml':'g',basisAmount:importNumeric(r.basisAmount??r.base_g??r.base_ml)??100,sourceType:String(r.sourceType??r.fonte_tipo??'other'),source:String(r.source??r.fonte??'Importado por arquivo'),sourceRef:String(r.sourceRef??r.referencia??''),preparation:String(r.preparation??r.preparo??''),category:String(r.category??r.categoria??old?.category??''),description:String(r.description??r.descricao??old?.description??''),brand:String(r.brand??r.marca??old?.brand??''),barcode:String(r.barcode??r.codigo_de_barras??old?.barcode??''),fiber:importNumeric(r.fiber??r.fibra??r.fibras)??old?.fiber??null,sodium:importNumeric(r.sodium??r.sodio)??old?.sodium??null,saturated:importNumeric(r.saturated??r.gordura_saturada??r.gorduras_saturadas)??old?.saturated??null,trans:importNumeric(r.trans??r.gordura_trans??r.gorduras_trans)??old?.trans??null,sugars:importNumeric(r.sugars??r.acucares_totais)??old?.sugars??null,addedSugars:importNumeric(r.addedSugars??r.acucares_adicionados)??old?.addedSugars??null,micronutrients:typeof micronutrients==='string'?(()=>{try{return JSON.parse(micronutrients)}catch{return {observacao:micronutrients}}})():micronutrients,updatedAt:new Date().toISOString()};old?updated++:added++;}
  loadCustomFoodsIntoDB();populateFoodPicker();renderFoodLibrary();renderMeals();renderAutoFoodPlan();save();
 }else{
  state.customExercises=Array.isArray(state.customExercises)?state.customExercises:[];
  for(const r of rows){const name=String(r.name??r.nome??r.exercicio??r.exercício??'').trim();if(!name){skipped++;continue;}const id='import_'+name.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');const muscle=String(r.muscle??r.musculo??r.grupo_muscular??'Não especificado'),suppliedFocus=String(r.focus??r.foco??r.muscleFocus??r.foco_muscular??'').trim(),focus=suppliedFocus||inferMuscleFocus(name,{muscle});if(/pendente de confirmacao/i.test(normalizeMuscleText(focus))){unclassified.push(name);skipped++;continue;}const item={id,name,muscle,focus,secondary:Array.isArray(r.secondary)?r.secondary:String(r.secondary??r.musculos_secundarios??'').split(/[;,|]/).map(x=>x.trim()).filter(Boolean),equipment:String(r.equipment??r.equipamento??'Não especificado'),type:String(r.type??r.tipo??'Isolado'),level:String(r.level??r.nivel??'Não especificado'),pattern:String(r.pattern??r.padrao_movimento??'Não especificado'),tips:Array.isArray(r.tips)?r.tips:String(r.tips??r.instrucoes??r.execucao??'').split(/[\n;|]/).map(x=>x.trim()).filter(Boolean),errors:Array.isArray(r.errors)?r.errors:String(r.errors??r.erros_comuns??'').split(/[\n;|]/).map(x=>x.trim()).filter(Boolean),alternatives:Array.isArray(r.alternatives)?r.alternatives:String(r.alternatives??r.alternativas??'').split(/[;,|]/).map(x=>x.trim()).filter(Boolean),sets:String(r.sets??r.series??'3'),reps:String(r.reps??r.repeticoes??'10–12'),rest:String(r.rest??r.descanso??'90 s'),notes:String(r.notes??r.observacoes??'')};const ix=state.customExercises.findIndex(x=>x.id===id);ix>=0?(skipped++):(state.customExercises.push(item),added++);}
  // A biblioteca visual passa a incluir os exercícios importados, com ficha detalhada.
  const customs=state.customExercises.map(x=>({...x,focus:String(x.focus||'').trim()||inferMuscleFocus(x.name,x),secondary:Array.isArray(x.secondary)?x.secondary:[],tips:Array.isArray(x.tips)?x.tips:[],errors:Array.isArray(x.errors)?x.errors:[],alternatives:Array.isArray(x.alternatives)?x.alternatives:[]}));if(typeof window.applyImportedExercises==='function')window.applyImportedExercises(customs);save();
 }
 alert(`Importação concluída.\n\nNovos registros: ${added}\nAtualizados: ${updated}\nIgnorados por dados inválidos ou sem foco: ${skipped}${unclassified.length?`\n\nNão importados por falta de foco específico: ${unclassified.join(', ')}. Inclua o campo focus/foco no arquivo e importe novamente.`:''}\n\nOs dados classificados foram adicionados à biblioteca sem apagar os demais registros.`);
 }catch(err){console.error(err);alert('Não foi possível importar o arquivo. Confira se o PDF contém os campos obrigatórios e texto selecionável.\n\nDetalhe: '+err.message);}finally{input.value='';}}
async function importSavedMealsFile(input){
 const suppliedPayload=input&&input.format==='FORMA_LIBRARY_IMPORT'?input:null,file=suppliedPayload?null:input?.files?.[0];if(!file&&!suppliedPayload)return;const beforeMeals=(state.savedMeals||[]).slice(),beforeCustomFoods={...(state.customFoods||{})};
 try{
  const rawText=suppliedPayload?JSON.stringify(suppliedPayload):await readFormaImportPdfText(file);let payload=null;try{payload=JSON.parse(rawText)}catch(_){}
  const structured=payload&&payload.format==='FORMA_LIBRARY_IMPORT'&&Array.isArray(payload.meals);let meals=structured?payload.meals:null,foodRecords=structured&&Array.isArray(payload.foods)?payload.foods:[];
  if(!meals){const rows=parseLibraryFileText(rawText,file.name);if(!rows.length)throw new Error('Não encontrei refeições. Use o modelo PDF completo de refeições do FORMA.');const grouped=new Map();for(const row of rows){const mealName=String(row.meal_name??row.mealName??row.refeicao??row.nome_refeicao??row.name??row.nome??'').trim();if(!mealName)continue;let items=row.items??row.ingredientes??row.foods??null;if(typeof items==='string'){try{items=JSON.parse(items)}catch{items=null}}if(Array.isArray(items)){const list=grouped.get(mealName)||[];list.push(...items);grouped.set(mealName,list)}else{const foodName=String(row.food??row.food_name??row.alimento??row.ingredient??row.ingrediente??'').trim();if(!foodName)continue;const list=grouped.get(mealName)||[];list.push({...row,name:foodName});grouped.set(mealName,list)}}meals=Array.from(grouped,([name,items])=>({name,items}));}
  if(!Array.isArray(meals)||!meals.length)throw new Error('O PDF não contém nenhuma refeição válida.');
  loadCustomFoodsIntoDB();const nextCustomFoods={...(state.customFoods||{})},existingFoodByName=new Map(Object.entries(FOOD_DB).map(([key,food])=>[normalizeFoodText(food.name),{key,food}])),importedFoodByKey=new Map(),importedFoodByName=new Map();
  const validFood=f=>f&&String(f.name||'').trim()&&[f.k,f.p,f.c,f.f].every(v=>v!==null&&v!==''&&Number.isFinite(Number(v))&&Number(v)>=0);
  const normalizeRecord=raw=>{let micro=raw.micronutrients??raw.micros??raw.micronutrientes??{};if(typeof micro==='string'){try{micro=JSON.parse(micro)}catch{micro={}}}return {name:String(raw.name??raw.nome??raw.food_name??'').trim(),k:Number(raw.k??raw.kcal??raw.calorias),p:Number(raw.p??raw.protein??raw.proteina),c:Number(raw.c??raw.carbs??raw.carboidratos),f:Number(raw.f??raw.fat??raw.gorduras),unit:String(raw.unit??raw.unidade??'g').toLowerCase()==='ml'?'ml':'g',basisAmount:Number(raw.basisAmount??raw.basis_amount??raw.food_portion??100)||100,basisUnit:String(raw.basisUnit??raw.basis_unit??raw.unit??'g'),saturated:importNumeric(raw.saturated??raw.gorduras_saturadas??raw.gordura_saturada),trans:importNumeric(raw.trans??raw.gorduras_trans??raw.gordura_trans),fiber:importNumeric(raw.fiber??raw.fibra??raw.fibras),sugars:importNumeric(raw.sugars??raw.acucares_totais),addedSugars:importNumeric(raw.addedSugars??raw.added_sugars??raw.acucares_adicionados),sodium:importNumeric(raw.sodium??raw.sodio),cholesterol:importNumeric(raw.cholesterol??raw.colesterol),micronutrients:micro,category:String(raw.category??raw.categoria??''),description:String(raw.description??raw.descricao??''),brand:String(raw.brand??raw.marca??''),barcode:String(raw.barcode??raw.codigo_de_barras??''),preparation:String(raw.preparation??raw.preparo??raw.preparacao??''),notes:String(raw.notes??raw.observacoes??''),sourceType:String(raw.sourceType??raw.source_type??raw.fonte_tipo??'other'),source:String(raw.source??raw.fonte??'Importado com a refeição'),sourceRef:String(raw.sourceRef??raw.source_ref??raw.referencia??''),dataVersion:FOOD_SCHEMA_VERSION,updatedAt:new Date().toISOString()}};
  let foodsAdded=0,foodsReused=0,skipped=0,missingFoods=[];
  for(const raw of foodRecords){const food=normalizeRecord(raw||{});if(!validFood(food))continue;const sourceKey=String(raw.key??raw.foodKey??raw.food_key??''),nameKey=normalizeFoodText(food.name),existing=existingFoodByName.get(nameKey);if(existing){importedFoodByName.set(nameKey,existing);if(sourceKey)importedFoodByKey.set(sourceKey,existing);foodsReused++;continue;}const key='custom_'+formaImportKey(food.name),old=nextCustomFoods[key];if(old){const entry={key,food:FOOD_DB[key]||old};importedFoodByName.set(nameKey,entry);if(sourceKey)importedFoodByKey.set(sourceKey,entry);foodsReused++;continue;}nextCustomFoods[key]=food;const entry={key,food};importedFoodByName.set(nameKey,entry);if(sourceKey)importedFoodByKey.set(sourceKey,entry);existingFoodByName.set(nameKey,entry);foodsAdded++;}
  const nextMeals=beforeMeals.slice(),existingMeals=new Set(nextMeals.map(m=>normalizeFoodText(m.name))),createdAt=new Date().toISOString();
  for(const meal of meals){const name=String(meal.name??meal.meal_name??meal.mealName??'').trim();if(!name){skipped++;continue;}if(existingMeals.has(normalizeFoodText(name))){skipped++;continue;}let rawItems=meal.items??meal.ingredients??meal.ingredientes??[];if(typeof rawItems==='string'){try{rawItems=JSON.parse(rawItems)}catch{rawItems=[]}}if(!Array.isArray(rawItems)||!rawItems.length){skipped++;continue;}const items=[];for(const rawItem of rawItems){const raw=rawItem||{},foodName=String(raw.name??raw.foodName??raw.food_name??raw.food??raw.alimento??raw.ingredient??raw.ingrediente??'').trim(),amount=importNumeric(raw.amount??raw.quantity??raw.quantidade??raw.grams??raw.gramas??raw.g);if(!foodName||amount===null||amount<=0||amount>10000){missingFoods.push(foodName||'Ingrediente sem nome/quantidade');continue;}let resolved=null;const explicitKey=String(raw.foodKey??raw.food_key??raw.key??'');if(explicitKey)resolved=importedFoodByKey.get(explicitKey)||null;if(!resolved&&Number.isInteger(Number(raw.foodIndex))&&foodRecords[Number(raw.foodIndex)])resolved=importedFoodByName.get(normalizeFoodText(foodRecords[Number(raw.foodIndex)].name||''))||null;if(!resolved)resolved=importedFoodByName.get(normalizeFoodText(foodName))||existingFoodByName.get(normalizeFoodText(foodName))||null;let food=resolved?.food||null,key=resolved?.key||'',forceSnapshot=false;let snapshot=raw.snapshot??raw.foodSnapshot??raw.food_snapshot??null;if(typeof snapshot==='string'){try{snapshot=JSON.parse(snapshot)}catch{snapshot=null}}const embeddedRaw=foodRecords.find(candidate=>String(candidate.key??candidate.foodKey??candidate.food_key??'')===explicitKey)||foodRecords.find(candidate=>normalizeFoodText(candidate.name||'')===normalizeFoodText(foodName));if(embeddedRaw&&food){const embedded=normalizeRecord(embeddedRaw);const signature=x=>JSON.stringify([x.k,x.p,x.c,x.f,x.unit,x.basisAmount,x.saturated,x.trans,x.fiber,x.sugars,x.addedSugars,x.sodium,x.cholesterol,x.micronutrients,x.category,x.description,x.brand,x.barcode,x.preparation,x.sourceType,x.source,x.sourceRef,x.notes]);if(signature(embedded)!==signature(food)){food=embedded;key='';forceSnapshot=true;}}if(!food&&snapshot&&validFood({name:foodName,k:snapshot.k,p:snapshot.p,c:snapshot.c,f:snapshot.f})){food={...normalizeRecord({...snapshot,name:foodName}),...snapshot,name:foodName};key='custom_'+formaImportKey(foodName);if(!nextCustomFoods[key]){nextCustomFoods[key]=food;foodsAdded++}}if(!food){missingFoods.push(foodName);continue;}const rawUnit=String(raw.unit??raw.unidade??food.unit??'g').toLowerCase(),itemUnit=rawUnit==='ml'?'ml':rawUnit==='g'?'g':null;if(!itemUnit||itemUnit!==String(food.unit||'g').toLowerCase()||String(food.basisUnit||food.unit||'g').toLowerCase()!==String(food.unit||'g').toLowerCase()){missingFoods.push(foodName+' (unidade/base incompatível)');continue;}items.push({foodKey:forceSnapshot?'':(key||String(raw.foodKey||'')),name:foodName,amount,unit:itemUnit,snapshot:foodSnapshot(food)});}
   if(items.length!==rawItems.length||!items.length){skipped++;continue;}const valid=snapshotSavedMealItems(items);if(valid.length!==items.length){skipped++;continue;}nextMeals.push({id:'meal_import_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7),name:name.slice(0,90),items:valid,notes:String(meal.notes??meal.observations??meal.observacoes??''),category:String(meal.category??meal.categoria??''),description:String(meal.description??meal.descricao??''),servings:importNumeric(meal.servings??meal.portions??meal.porcoes),yieldAmount:importNumeric(meal.yieldAmount??meal.yield??meal.rendimento_g),preparationTime:String(meal.preparationTime??meal.prepTime??meal.tempo_preparo??''),instructions:String(meal.instructions??meal.preparation??meal.modo_preparo??''),createdAt,updatedAt:createdAt,source:'file-import'});existingMeals.add(normalizeFoodText(name));}
  const added=nextMeals.length-beforeMeals.length;if(!added)throw new Error('Nenhuma refeição completa foi importada. Confira se todos os ingredientes têm quantidade e cadastro nutricional completo, incluído no próprio PDF ou já existente na biblioteca.');
  state.customFoods=nextCustomFoods;state.savedMeals=nextMeals;loadCustomFoodsIntoDB();if(!save()){state.customFoods=beforeCustomFoods;state.savedMeals=beforeMeals;loadCustomFoodsIntoDB();throw new Error('Não foi possível confirmar o salvamento. Os dados anteriores foram restaurados e preservados.');}
  renderSavedMealsList();renderFoodLibraryMeals();renderFoodLibrary();if(typeof populateFoodPicker==='function')populateFoodPicker();
  const extra=missingFoods.length?'\nIngredientes não resolvidos (a refeição correspondente foi ignorada): '+[...new Set(missingFoods)].filter(Boolean).slice(0,12).join(', ')+(missingFoods.length>12?'…':''):'';
  alert('Importação de refeições concluída.\n\nRefeições adicionadas: '+added+'\nAlimentos novos cadastrados: '+foodsAdded+'\nAlimentos existentes reutilizados: '+foodsReused+'\nRefeições duplicadas/incompletas ignoradas: '+skipped+extra+'\n\nOs registros anteriores foram preservados; nenhum alimento existente foi sobrescrito.');return true;
 }catch(err){console.error(err);alert('Não foi possível importar as refeições. Confira o modelo PDF completo e os campos obrigatórios.\n\nDetalhe: '+err.message);return false;}finally{if(input&&input.value!==undefined)input.value='';}
}
$('importFoodsFile')?.addEventListener('change',e=>importLibraryFile(e.target,'food'));
$('importExercisesFile')?.addEventListener('change',e=>importLibraryFile(e.target,'exercise'));
$('importMealsFile')?.addEventListener('change',e=>importSavedMealsFile(e.target));
