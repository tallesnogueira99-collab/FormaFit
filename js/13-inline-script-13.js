(function(){
 'use strict';
 const $=id=>document.getElementById(id);
 const page=$('configuracoes'),home=page?.querySelector('.central-files-home'),routes=page?.querySelector('.central-files-routes');
 if(!page||!home||page.dataset.centralV2==='true')return;
 page.dataset.centralV2='true';page.classList.add('forma-central-v2');
 if(routes)routes.style.display='none';
 const title=page.querySelector('.settings-hero h2');if(title)title.textContent='Central de arquivos';
 const desc=page.querySelector('.settings-hero p');if(desc)desc.textContent='Importe, exporte e organize seus arquivos em PDF. O FORMA identifica automaticamente o conteúdo do arquivo.';
 const bodyClass=()=>document.body.classList.toggle('forma-files-mode',page.classList.contains('active'));
 const originalShowTab=window.showTab;
 if(typeof originalShowTab==='function'&&!window.__formaFilesV2TabHook){window.__formaFilesV2TabHook=true;window.showTab=function(tab){const out=originalShowTab.apply(this,arguments);document.body.classList.toggle('forma-files-mode',tab==='configuracoes');return out;};}
 bodyClass();
 const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const modal=document.createElement('div');modal.className='forma-files-modal';modal.id='formaFilesActionModal';modal.setAttribute('role','presentation');
 modal.innerHTML='<section class="forma-files-panel" role="dialog" aria-modal="true" aria-labelledby="formaFilesModalTitle"><header class="forma-files-modal-head"><span class="forma-files-modal-mark" id="formaFilesModalIcon" aria-hidden="true">⇧</span><div class="forma-files-modal-copy"><h3 id="formaFilesModalTitle">Importar PDF</h3><p id="formaFilesModalDescription"></p></div><button class="forma-files-close" type="button" aria-label="Fechar janela">×</button></header><div class="forma-files-modal-body" id="formaFilesModalBody"></div><footer class="forma-files-modal-foot" id="formaFilesModalFoot"></footer></section>';
 document.body.append(modal);
 const modalBody=$('formaFilesModalBody'),modalTitle=$('formaFilesModalTitle'),modalDesc=$('formaFilesModalDescription'),modalIcon=$('formaFilesModalIcon'),modalFoot=$('formaFilesModalFoot'),status=document.createElement('div');status.className='forma-files-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');modalBody.append(status);
 const pdfInput=document.createElement('input');pdfInput.type='file';pdfInput.accept='.pdf,application/pdf';pdfInput.hidden=true;pdfInput.id='formaUniversalPdfInput';page.append(pdfInput);
 const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');};
 modal.querySelector('.forma-files-close').addEventListener('click',close);
 modal.addEventListener('click',e=>{if(e.target===modal)close();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))close();});
 function showStatus(message,error){status.textContent=message;status.classList.add('visible');status.classList.toggle('error',!!error);}
 function openModal(kind){
  modalBody.replaceChildren(status);status.className='forma-files-status';status.textContent='';
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');
  const configs={
   importar:['Importar arquivo','Selecione um PDF. O FORMA vai analisar o conteúdo e identificar automaticamente a categoria, sem exigir que você escolha o tipo de dado.','↑','PDF · ATÉ 15 MB'],
   exportar:['Exportar dados','Escolha o conteúdo que deseja exportar. Todas as opções geram um documento PDF pronto para salvar ou compartilhar.','↓','SOMENTE PDF'],
   modelos:['Modelos em PDF','Escolha um modelo para preencher. Os modelos incluem estruturas reconhecidas pelo importador automático do FORMA.','▤','SOMENTE PDF']
  };
  const cfg=configs[kind]||configs.importar;modalTitle.textContent=cfg[0];modalDesc.textContent=cfg[1];modalIcon.textContent=cfg[2];modalFoot.textContent=kind==='importar'?'PDFs com texto selecionável são lidos automaticamente. PDFs escaneados como imagem precisam de OCR.':'O documento será aberto na janela de impressão do dispositivo. Escolha “Salvar como PDF” para guardar o arquivo.';
  if(kind==='importar'){
   const drop=document.createElement('div');drop.className='forma-files-drop';drop.innerHTML='<span class="forma-files-drop-icon" aria-hidden="true">⇧</span><strong>Escolha um arquivo PDF</strong><p>Não importa se é alimento, refeição, exercício, treino, plano nutricional, cronograma, bioimpedância ou backup. O FORMA analisa o conteúdo.</p><button class="btn" type="button">Selecionar PDF</button>';
   drop.querySelector('button').addEventListener('click',()=>pdfInput.click());
   modalBody.insertBefore(drop,status);showStatus('Aguardando a seleção do arquivo.',false);
  }else{
   const grid=document.createElement('div');grid.className='forma-files-choice-grid';
   const choices=kind==='exportar'?[
    ['foods','Alimentos','Biblioteca de alimentos personalizados','◉'],
    ['meals','Refeições salvas','Preparações e ingredientes','♨'],
    ['exercises','Exercícios','Biblioteca de exercícios personalizados','⌘'],
    ['workout','Plano de treino','Ficha de musculação ativa','↗'],
    ['nutrition','Plano nutricional','Plano nutricional atual do perfil','≋'],
    ['schedule','Cronograma alimentar','Refeições, horários e quantidades','▤'],
    ['training','Relatório de treinos','Relatório analítico de musculação e cardio','↗'],
    ['report','Relatório nutricional','Resumo do período e indicadores','▥'],
    ['body','Composição corporal','Histórico de peso e bioimpedância','◉']
   ]:[
    ['foods','Alimentos','Nome, unidade e valores nutricionais','◉'],
    ['meals','Refeições','Refeições e ingredientes','♨'],
    ['exercises','Exercícios','Ficha completa de exercícios','⌘'],
    ['workout','Plano de treino','Dias, exercícios, séries e descanso','↗'],
    ['nutrition','Plano nutricional','Refeições, porções e macronutrientes','≋'],
    ['schedule','Cronograma alimentar','Horários, alimentos e quantidades','▤'],
    ['bio','Bioimpedância','Modelo de laudo para reconhecimento','◉']
   ];
   choices.forEach(choice=>{
    const b=document.createElement('button');b.type='button';b.className='forma-files-choice';
    b.innerHTML='<span class="forma-files-choice-icon" aria-hidden="true">'+choice[3]+'</span><span class="forma-files-choice-copy"><strong>'+choice[1]+'</strong><small>'+choice[2]+'</small></span><span class="forma-files-format">PDF</span>';
    b.addEventListener('click',async()=>{b.disabled=true;try{const ok=await (kind==='exportar'?exportPdf(choice[0]):downloadPdfTemplate(choice[0]));if(ok!==false)close();}catch(err){console.error('FORMA central de arquivos',err);showStatus(err.message||'Não foi possível gerar o PDF.',true);}finally{b.disabled=false;}});
    grid.append(b);
   });
   modalBody.insertBefore(grid,status);
  }
  const first=modalBody.querySelector('button');first?.focus({preventScroll:true});
 }
 function setHome(){
  home.replaceChildren();
  const actions=[
   ['importar','Importar','Escolha um PDF e deixe o FORMA identificar o conteúdo.','⇧'],
   ['exportar','Exportar','Selecione os dados que deseja salvar em PDF.','⇩'],
   ['modelos','Modelos','Baixe modelos em PDF para preencher e importar.','▤'],
   ['backup','Backup completo','Gere uma cópia de segurança de todos os dados.','◇']
  ];
  actions.forEach(a=>{
   const b=document.createElement('button');b.type='button';b.className='central-home-card';
   b.innerHTML='<span class="central-home-icon" aria-hidden="true">'+a[3]+'</span><span class="central-home-copy"><strong>'+a[1]+'</strong><small>'+a[2]+'</small></span><span class="central-home-arrow" aria-hidden="true">›</span>';
   b.addEventListener('click',()=>{if(a[0]==='backup'){if(typeof window.exportFormaData==='function')window.exportFormaData();else if(typeof exportFormaData==='function')exportFormaData();else alert('O gerador de backup não está disponível. Atualize o FORMA e tente novamente.');}else openModal(a[0]);});
   home.append(b);
  });
 }

 async function loadFormaPdfLib(){if(window.PDFLib)return window.PDFLib;if(window.__formaPdfLibPromise)return window.__formaPdfLibPromise;window.__formaPdfLibPromise=new Promise((resolve,reject)=>{const x=document.createElement('script');x.src='https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js';x.onload=()=>resolve(window.PDFLib);x.onerror=()=>reject(new Error('Não foi possível carregar o gerador de PDF.'));document.head.appendChild(x);});return window.__formaPdfLibPromise;}
 function formaPdfSchema(o){const f=o?.format||'',out=[];const add=(section,items)=>out.push({section,items});if(f==='FORMA_LIBRARY_IMPORT'&&o.foods?.length&&o.meals?.length){
 const meal=o.meals[0];
 add('IDENTIFICAÇÃO DA REFEIÇÃO',[['meal_name','Nome da refeição'],['meal_category','Categoria'],['meal_description','Descrição'],['meal_servings','Número de porções'],['meal_yield','Rendimento total (g)'],['meal_prep_time','Tempo de preparo'],['meal_instructions','Modo de preparo'],['meal_notes','Observações']]);
 add('COMPOSIÇÃO · QUANTIDADES',(meal.items||[]).map((item,i)=>['meal_item_'+i+'_amount','Quantidade de '+(item.name||('ingrediente '+(i+1)))+' ('+(item.unit||'g')+')']));
 const foodFields=[['name','Nome do alimento'],['category','Categoria / subcategoria'],['description','Descrição'],['brand','Marca / fabricante'],['barcode','Código de barras (EAN/GTIN)'],['preparation','Estado / preparo / conservação'],['unit','Unidade-base (g ou ml)'],['kcal','Energia (kcal)'],['protein','Proteínas (g)'],['carbs','Carboidratos disponíveis (g)'],['fat','Gorduras totais (g)'],['saturated','Gorduras saturadas (g)'],['trans','Gorduras trans (g)'],['fiber','Fibras (g)'],['sugars','Açúcares totais (g)'],['added_sugars','Açúcares adicionados (g)'],['sodium','Sódio (mg)'],['cholesterol','Colesterol (mg)'],['calcium','Cálcio (mg)'],['iron','Ferro (mg)'],['magnesium','Magnésio (mg)'],['phosphorus','Fósforo (mg)'],['potassium','Potássio (mg)'],['zinc','Zinco (mg)'],['copper','Cobre (mg)'],['manganese','Manganês (mg)'],['selenium','Selênio (µg)'],['iodine','Iodo (µg)'],['vitamin_a','Vitamina A (µg RAE)'],['vitamin_d','Vitamina D (µg)'],['vitamin_e','Vitamina E (mg)'],['vitamin_k','Vitamina K (µg)'],['vitamin_c','Vitamina C (mg)'],['b1','Vitamina B1 · Tiamina (mg)'],['b2','Vitamina B2 · Riboflavina (mg)'],['b3','Vitamina B3 · Niacina (mg)'],['b5','Vitamina B5 · Ácido pantotênico (mg)'],['b6','Vitamina B6 (mg)'],['b7','Vitamina B7 · Biotina (µg)'],['b9','Vitamina B9 · Folato (µg)'],['b12','Vitamina B12 (µg)'],['source','Fonte dos valores'],['source_ref','Referência / edição / página / URL'],['source_type','Tipo de fonte'],['notes','Observações e limitações']];
 (o.foods||[]).forEach((food,i)=>add('ALIMENTO '+(i+1)+' · FICHA NUTRICIONAL COMPLETA',foodFields.map(([key,label])=>['food_'+i+'_'+key,label])));
 return out;
 }if(f==='FORMA_LIBRARY_IMPORT'){if(o.foods?.length&&!o.meals?.length){add('IDENTIFICAÇÃO DO ALIMENTO',[['food_name','Nome do alimento'],['food_category','Categoria / subcategoria'],['food_description','Descrição'],['food_brand','Marca / fabricante'],['food_barcode','Código de barras (EAN/GTIN)'],['food_preparation','Estado / preparo / conservação'],['food_portion','Base de referência (100 por padrão)'],['food_unit','Unidade-base (g ou ml)']]);add('ENERGIA E MACRONUTRIENTES',[['food_kcal','Valor energético (kcal)'],['food_protein','Proteínas (g)'],['food_carbs','Carboidratos disponíveis (g)'],['food_fat','Gorduras totais (g)'],['food_saturated','Gorduras saturadas (g)'],['food_trans','Gorduras trans (g)'],['food_fiber','Fibra alimentar (g)'],['food_sugars','Açúcares totais (g)'],['food_added_sugars','Açúcares adicionados (g)'],['food_sodium','Sódio (mg)']]);add('MICRONUTRIENTES · MINERAIS',[['food_calcium','Cálcio (mg)'],['food_iron','Ferro (mg)'],['food_magnesium','Magnésio (mg)'],['food_phosphorus','Fósforo (mg)'],['food_potassium','Potássio (mg)'],['food_zinc','Zinco (mg)'],['food_copper','Cobre (mg)'],['food_manganese','Manganês (mg)'],['food_selenium','Selênio (µg)'],['food_iodine','Iodo (µg)']]);add('MICRONUTRIENTES · VITAMINAS',[['food_vitamin_a','Vitamina A (µg RAE)'],['food_vitamin_d','Vitamina D (µg)'],['food_vitamin_e','Vitamina E (mg)'],['food_vitamin_k','Vitamina K (µg)'],['food_vitamin_c','Vitamina C (mg)'],['food_b1','Vitamina B1 · Tiamina (mg)'],['food_b2','Vitamina B2 · Riboflavina (mg)'],['food_b3','Vitamina B3 · Niacina (mg)'],['food_b5','Vitamina B5 · Ácido pantotênico (mg)'],['food_b6','Vitamina B6 (mg)'],['food_b7','Vitamina B7 · Biotina (µg)'],['food_b9','Vitamina B9 · Folato (µg)'],['food_b12','Vitamina B12 (µg)']]);add('ORIGEM E RASTREABILIDADE',[['food_source','Fonte dos valores (TBCA, TACO, rótulo, laboratório etc.)'],['food_source_ref','Referência / URL / edição / página'],['food_source_type','Tipo de fonte'],['food_notes','Observações e limitações']]);}if(o.meals?.length)add('IDENTIFICAÇÃO DA REFEIÇÃO',[['meal_name','Nome da refeição'],['meal_category','Categoria'],['meal_description','Descrição'],['meal_servings','Número de porções'],['meal_yield','Rendimento total (g)'],['meal_prep_time','Tempo de preparo'],['meal_items','Ingredientes e quantidades'],['meal_instructions','Modo de preparo'],['meal_notes','Observações e ressalvas nutricionais']]);}else if(f==='FORMA_EXERCISE_LIBRARY'){add('IDENTIFICAÇÃO E CLASSIFICAÇÃO',[['exercise_name','Nome do exercício'],['exercise_muscle','Grupo muscular principal'],['exercise_focus','Foco muscular específico'],['exercise_secondary','Grupos musculares secundários'],['exercise_equipment','Equipamento'],['exercise_type','Tipo de exercício'],['exercise_level','Nível'],['exercise_pattern','Padrão de movimento']]);add('PRESCRIÇÃO DE REFERÊNCIA',[['exercise_sets','Séries sugeridas'],['exercise_reps','Repetições sugeridas'],['exercise_rest','Descanso sugerido']]);add('ORIENTAÇÕES TÉCNICAS',[['exercise_tips','Orientações de execução'],['exercise_errors','Erros comuns'],['exercise_alternatives','Exercícios alternativos'],['exercise_notes','Observações']]);}else if(f==='FORMA_WORKOUT_PLAN'){
 const plan=o.plan||o;
 add('IDENTIFICAÇÃO DO PLANO',[['workout_name','Nome do plano'],['workout_objective','Objetivo principal'],['workout_description','Descrição e contexto'],['workout_level','Nível'],['workout_frequency','Frequência semanal'],['workout_duration','Duração prevista'],['workout_split','Divisão semanal'],['workout_methodology','Método e critérios gerais'],['workout_warmup','Aquecimento geral'],['workout_progression','Estratégia de progressão'],['workout_recovery','Recuperação e orientações'],['workout_notes','Observações gerais']]);
 (plan.days||[]).forEach((day,di)=>{
  add('SESSÃO '+(di+1)+' · ORGANIZAÇÃO',[['workout_day_'+di+'_day','Dia da semana / identificação'],['workout_day_'+di+'_title','Nome da sessão'],['workout_day_'+di+'_focus','Grupos musculares / foco'],['workout_day_'+di+'_duration','Duração estimada'],['workout_day_'+di+'_warmup','Aquecimento e mobilidade'],['workout_day_'+di+'_notes','Observações da sessão']]);
  (day.exercises||[]).forEach((ex,ei)=>add('SESSÃO '+(di+1)+' · EXERCÍCIO '+(ei+1),[['workout_ex_'+di+'_'+ei+'_name','Nome do exercício'],['workout_ex_'+di+'_'+ei+'_sets','Número de séries'],['workout_ex_'+di+'_'+ei+'_reps','Repetições / faixa'],['workout_ex_'+di+'_'+ei+'_load','Carga inicial / referência'],['workout_ex_'+di+'_'+ei+'_rest','Descanso entre séries'],['workout_ex_'+di+'_'+ei+'_cadence','Cadência / tempo'],['workout_ex_'+di+'_'+ei+'_rir','RIR / RPE alvo'],['workout_ex_'+di+'_'+ei+'_method','Método / técnica especial'],['workout_ex_'+di+'_'+ei+'_unilateral','Execução unilateral?'],['workout_ex_'+di+'_'+ei+'_warmup','Séries de aquecimento'],['workout_ex_'+di+'_'+ei+'_progression','Critério de progressão'],['workout_ex_'+di+'_'+ei+'_notes','Observações e instruções'],['workout_ex_'+di+'_'+ei+'_set_prescription','Prescrição individual por série (uma série por linha)']]));
 });
 (plan.exerciseLibrary||[]).forEach((ex,ei)=>add('BIBLIOTECA · CADASTRO COMPLETO '+(ei+1),[['workout_lib_'+ei+'_name','Nome do exercício'],['workout_lib_'+ei+'_muscle','Grupo muscular principal'],['workout_lib_'+ei+'_focus','Foco muscular específico'],['workout_lib_'+ei+'_secondary','Grupos secundários'],['workout_lib_'+ei+'_equipment','Equipamento'],['workout_lib_'+ei+'_type','Tipo de exercício'],['workout_lib_'+ei+'_level','Nível'],['workout_lib_'+ei+'_pattern','Padrão de movimento'],['workout_lib_'+ei+'_tips','Execução técnica'],['workout_lib_'+ei+'_errors','Erros comuns'],['workout_lib_'+ei+'_alternatives','Alternativas'],['workout_lib_'+ei+'_notes','Observações']]));
}else if(f==='FORMA_NUTRITION_PLAN')add('PLANEJAMENTO NUTRICIONAL',[['nutrition_name','Nome do plano'],['nutrition_objective','Objetivo'],['nutrition_kcal','Meta de energia (kcal)'],['nutrition_protein','Meta de proteínas (g)'],['nutrition_carbs','Meta de carboidratos (g)'],['nutrition_fat','Meta de gorduras (g)'],['nutrition_meals','Refeições e composição']]);else if(f==='FORMA_NUTRITION_SCHEDULE')add('CRONOGRAMA ALIMENTAR',[['schedule_name','Nome do cronograma'],['schedule_objective','Objetivo'],['schedule_kcal','Meta de energia (kcal)'],['schedule_protein','Meta de proteínas (g)'],['schedule_carbs','Meta de carboidratos (g)'],['schedule_fat','Meta de gorduras (g)'],['schedule_meals','Refeições, horários, alimentos e quantidades']]);else if(f==='FORMA_BIOIMPEDANCE')add('AVALIAÇÃO CORPORAL',[['bio_date','Data da avaliação'],['bio_weight','Peso (kg)'],['bio_waist','Cintura (cm)'],['bio_fat','Gordura corporal (%)'],['bio_muscle','Massa muscular (kg)'],['bio_water','Água corporal (%)'],['bio_notes','Observações']]);return out;}
 function formaPdfValues(o){if(o?.format==='FORMA_LIBRARY_IMPORT'&&o.foods?.length&&o.meals?.length){
 const meal=o.meals[0],v={meal_name:meal.name||'',meal_category:meal.category||'',meal_description:meal.description||'',meal_servings:meal.servings??'',meal_yield:meal.yieldAmount??'',meal_prep_time:meal.preparationTime||'',meal_instructions:meal.instructions||'',meal_notes:meal.notes||''};
 (meal.items||[]).forEach((item,i)=>v['meal_item_'+i+'_amount']=item.amount??'');
 const microMap={calcium:'calcium',iron:'iron',magnesium:'magnesium',phosphorus:'phosphorus',potassium:'potassium',zinc:'zinc',copper:'copper',manganese:'manganese',selenium:'selenium',iodine:'iodine',vitamin_a:'vitaminA',vitamin_d:'vitaminD',vitamin_e:'vitaminE',vitamin_k:'vitaminK',vitamin_c:'vitaminC',b1:'b1',b2:'b2',b3:'b3',b5:'b5',b6:'b6',b7:'b7',b9:'b9',b12:'b12'};
 (o.foods||[]).forEach((food,i)=>{const pre='food_'+i+'_';const map={name:'name',category:'category',description:'description',brand:'brand',barcode:'barcode',preparation:'preparation',portion:'basisAmount',unit:'unit',kcal:'k',protein:'p',carbs:'c',fat:'f',saturated:'saturated',trans:'trans',fiber:'fiber',sugars:'sugars',added_sugars:'addedSugars',sodium:'sodium',cholesterol:'cholesterol',source:'source',source_ref:'sourceRef',source_type:'sourceType',notes:'notes'};for(const [field,key] of Object.entries(map))v[pre+field]=food[key]??'';for(const [field,key] of Object.entries(microMap))v[pre+field]=food.micronutrients?.[key]??'';});
 return v;
 }const food=o.foods?.[0]||{},meal=o.meals?.[0]||{},ex=o.exercises?.[0]||{},p=o.plan||o.schedule||o,v={food_name:food.name||'',food_category:food.category||'',food_description:food.description||'',food_brand:food.brand||'',food_barcode:food.barcode||'',food_preparation:food.preparation||'',food_portion:food.basisAmount||100,food_unit:food.unit||'g',food_kcal:food.k??'',food_protein:food.p??'',food_carbs:food.c??'',food_fat:food.f??'',food_saturated:food.saturated??'',food_trans:food.trans??'',food_fiber:food.fiber??'',food_sugars:food.sugars??'',food_added_sugars:food.addedSugars??'',food_sodium:food.sodium??'',food_source:food.source||'',food_source_ref:food.sourceRef||'',food_source_type:food.sourceType||'',...Object.fromEntries(Object.entries({calcium:'calcium',iron:'iron',magnesium:'magnesium',phosphorus:'phosphorus',potassium:'potassium',zinc:'zinc',copper:'copper',manganese:'manganese',selenium:'selenium',iodine:'iodine',vitamin_a:'vitaminA',vitamin_d:'vitaminD',vitamin_e:'vitaminE',vitamin_k:'vitaminK',vitamin_c:'vitaminC',b1:'b1',b2:'b2',b3:'b3',b5:'b5',b6:'b6',b7:'b7',b9:'b9',b12:'b12'}).map(([field,key])=>['food_'+field,food.micronutrients?.[key]??''])),meal_name:meal.name||'',meal_category:meal.category||'',meal_description:meal.description||'',meal_servings:meal.servings??'',meal_yield:meal.yieldAmount??'',meal_prep_time:meal.preparationTime||'',meal_items:(meal.items||[]).map(x=>(x.name||x.key||'')+': '+(x.amount??x.g??'')+' '+(x.unit||'g')).join('\n'),meal_instructions:meal.instructions||'',meal_notes:meal.notes||'',exercise_name:ex.name||'',exercise_muscle:ex.muscle||'',exercise_focus:ex.focus||'',exercise_secondary:Array.isArray(ex.secondary)?ex.secondary.join(', '):(ex.secondary||''),exercise_equipment:ex.equipment||'',exercise_type:ex.type||'',exercise_level:ex.level||'',exercise_pattern:ex.pattern||'',exercise_tips:(ex.tips||[]).join('\\n'),exercise_errors:(ex.errors||[]).join('\\n'),exercise_alternatives:(ex.alternatives||[]).join('\\n'),exercise_sets:ex.sets||'',exercise_reps:ex.reps||'',exercise_rest:ex.rest||'',exercise_notes:ex.notes||'',workout_name:o.name||'',workout_objective:o.objective||'',workout_description:o.description||'',workout_level:o.level||'',workout_frequency:o.frequency??'',workout_duration:o.duration||'',workout_split:o.split||'',workout_methodology:o.methodology||'',workout_warmup:o.warmup||'',workout_progression:o.progression||'',workout_recovery:o.recovery||'',workout_notes:o.notes||'',...Object.fromEntries((o.days||[]).flatMap((d,di)=>[['workout_day_'+di+'_day',d.day||''],['workout_day_'+di+'_title',d.title||''],['workout_day_'+di+'_focus',d.focus||d.subtitle||''],['workout_day_'+di+'_duration',d.duration||''],['workout_day_'+di+'_warmup',d.warmup||''],['workout_day_'+di+'_notes',d.notes||d.subtitle||''],...(d.exercises||[]).flatMap((x,ei)=>[['workout_ex_'+di+'_'+ei+'_name',x.name||''],['workout_ex_'+di+'_'+ei+'_sets',Array.isArray(x.setPrescription)?x.setPrescription.length:(x.sets??'')],['workout_ex_'+di+'_'+ei+'_reps',x.reps??''],['workout_ex_'+di+'_'+ei+'_load',x.load??x.initialLoad??''],['workout_ex_'+di+'_'+ei+'_rest',x.rest??''],['workout_ex_'+di+'_'+ei+'_cadence',x.cadence??''],['workout_ex_'+di+'_'+ei+'_rir',x.rir??x.rpe??''],['workout_ex_'+di+'_'+ei+'_method',x.method??''],['workout_ex_'+di+'_'+ei+'_unilateral',x.unilateral?'Sim':'Não'],['workout_ex_'+di+'_'+ei+'_warmup',x.warmupSets??''],['workout_ex_'+di+'_'+ei+'_progression',x.progression??''],['workout_ex_'+di+'_'+ei+'_notes',x.notes??x.instructions??''],['workout_ex_'+di+'_'+ei+'_set_prescription',Array.isArray(x.setPrescription)?x.setPrescription.map(s=>'S'+s.set+': '+(s.reps??'')+' reps; carga: '+(s.load??'')+'; RIR: '+(s.rir??'')+'; tipo: '+(s.type??'efetiva')).join('\\n'):(x.setPrescriptionText||'')]])])),...Object.fromEntries((o.exerciseLibrary||[]).flatMap((x,i)=>[['workout_lib_'+i+'_name',x.name||''],['workout_lib_'+i+'_muscle',x.muscle||''],['workout_lib_'+i+'_focus',x.focus||''],['workout_lib_'+i+'_secondary',(x.secondary||[]).join('; ')],['workout_lib_'+i+'_equipment',x.equipment||''],['workout_lib_'+i+'_type',x.type||''],['workout_lib_'+i+'_level',x.level||''],['workout_lib_'+i+'_pattern',x.pattern||''],['workout_lib_'+i+'_tips',(x.tips||[]).join('\\n')],['workout_lib_'+i+'_errors',(x.errors||[]).join('\\n')],['workout_lib_'+i+'_alternatives',(x.alternatives||[]).join('\\n')],['workout_lib_'+i+'_notes',x.notes||'']])),workout_days:(o.days||[]).map(d=>d.day+' — '+d.title).join('\n'),workout_exercises:(o.days||[]).flatMap(d=>(d.exercises||[]).map(x=>x.name+': '+x.sets+' séries · '+x.reps+' · '+x.rest)).join('\n'),nutrition_name:p.name||'',nutrition_objective:p.objective||'',schedule_name:p.name||'',schedule_objective:p.objective||'',schedule_kcal:p.target?.kcal||'',schedule_protein:p.target?.protein||'',schedule_carbs:p.target?.carbs||'',schedule_fat:p.target?.fat||'',schedule_meals:(p.meals||[]).map(m=>m.name+' '+(m.time||'')).join('\n')};if(o.format==='FORMA_BIOIMPEDANCE')Object.assign(v,{bio_date:o.bioimpedance?.date||'',bio_weight:o.bioimpedance?.weight??'',bio_waist:o.bioimpedance?.waist??'',bio_fat:o.bioimpedance?.fat??'',bio_muscle:o.bioimpedance?.muscle??'',bio_water:o.bioimpedance?.water??'',bio_notes:o.bioimpedance?.notes||''});if(o.format==='FORMA_NUTRITION_PLAN'){const n=o.plan||o;Object.assign(v,{nutrition_kcal:n.target?.kcal??'',nutrition_protein:n.target?.protein??'',nutrition_carbs:n.target?.carbs??'',nutrition_fat:n.target?.fat??'',nutrition_meals:(n.meals||[]).map(m=>m.name).join('\n')});}return v;}
 async function openStructuredPdf(titleText,subtitle,summaryHtml,obj){
 try{
  const L=await loadFormaPdfLib(),{PDFDocument,StandardFonts,rgb}=L,d=await PDFDocument.create();
  const font=await d.embedFont(StandardFonts.Helvetica),bold=await d.embedFont(StandardFonts.HelveticaBold);
  const navy=rgb(.035,.07,.13),panel=rgb(.07,.11,.18),red=rgb(1,.32,.36),white=rgb(.91,.94,.98),muted=rgb(.66,.72,.81),line=rgb(.18,.25,.35);
  const wrap=(txt,max,size,f)=>{const words=String(txt??"").split(/\s+/),out=[];let row="";for(const word of words){const test=row?row+" "+word:word;if(f.widthOfTextAtSize(test,size)>max&&row){out.push(row);row=word;}else row=test;}if(row)out.push(row);return out;};
  if(obj?.format==="FORMA-backup"&&obj.profile){
   const p=obj.profile,data=p.data||{},W=595.28,H=841.89;
   const date=new Date(obj.exportedAt||Date.now()).toLocaleString("pt-BR",{dateStyle:"long",timeStyle:"short"});
   const safeCount=v=>Array.isArray(v)?v.length:(v&&typeof v==="object"?Object.keys(v).length:0);
   const stats=[["TREINAMENTO",safeCount(data.logs)+safeCount(data.sessionHistory),"Registros e sessões"],["ALIMENTAÇÃO",safeCount(data.foodEntries),"Registros alimentares"],["BIBLIOTECA",safeCount(data.customFoods)+safeCount(data.savedMeals)+safeCount(data.customWorkouts)+safeCount(data.customMeals),"Itens personalizados"],["EVOLUÇÃO",safeCount(data.progress)+safeCount(data.bioimpedance),"Avaliações e medidas"]];

   const drawWrapped=(pg,txt,x,yy,max,size,f,color,leading=size*1.45,limit=4)=>{wrap(txt,max,size,f).slice(0,limit).forEach((v,i)=>pg.drawText(v,{x,y:yy-i*leading,size,font:f,color}));};
   const bg=()=>{const pg=d.addPage([W,H]);pg.drawRectangle({x:0,y:0,width:W,height:H,color:navy});pg.drawRectangle({x:0,y:H-9,width:W,height:9,color:red});pg.drawText("FORMA  ·  SEU PLANO PESSOAL",{x:38,y:H-48,size:10,font:bold,color:white});pg.drawText("BACKUP DO APLICATIVO",{x:38,y:H-70,size:8,font:bold,color:red});return pg;};
   let pg=bg();pg.drawRectangle({x:30,y:490,width:535,height:300,color:panel});
   pg.drawText("CÓPIA DE SEGURANÇA",{x:52,y:755,size:9,font:bold,color:red});pg.drawText("Backup completo",{x:52,y:716,size:25,font:bold,color:white});pg.drawText("do aplicativo",{x:52,y:685,size:25,font:bold,color:white});pg.drawText("Cópia individual de todos os dados deste perfil",{x:52,y:656,size:10,font,color:muted});
   let avatarDrawn=false;const avatar=p.avatar;
   if(typeof avatar==="string"&&/^data:image\/jpeg;base64,/i.test(avatar)){try{const raw=avatar.split(",")[1],bin=atob(raw),bytes=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);const img=await d.embedJpg(bytes),scale=Math.min(92/img.width,92/img.height);pg.drawImage(img,{x:52+(92-img.width*scale)/2,y:535+(92-img.height*scale)/2,width:img.width*scale,height:img.height*scale});avatarDrawn=true;}catch(e){console.warn("FORMA: não foi possível incorporar a foto no PDF",e);}}
   if(!avatarDrawn){pg.drawRectangle({x:52,y:535,width:92,height:92,color:line});const initials=String(p.name||"F").trim().split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0]||"").join("").toUpperCase()||"F",sz=25,w=bold.widthOfTextAtSize(initials,sz);pg.drawText(initials,{x:98-w/2,y:535+(92-sz)/2+5,size:sz,font:bold,color:white});}
   pg.drawText(String(p.name||"Perfil FORMA").slice(0,38),{x:164,y:592,size:22,font:bold,color:white});pg.drawText("PERFIL INCLUÍDO",{x:164,y:570,size:8,font:bold,color:red});drawWrapped(pg,"Gerado em "+date,164,548,350,9,font,muted,13,2);pg.drawText("1 PERFIL",{x:52,y:510,size:9,font:bold,color:white});pg.drawText("ARQUIVO PDF COM DADOS PARA RESTAURAÇÃO",{x:164,y:510,size:8,font:bold,color:muted});pg.drawText("VISÃO GERAL DO SEU FORMA",{x:38,y:458,size:10,font:bold,color:red});
   stats.forEach((st,i)=>{const x=38+(i%2)*267,y=350-Math.floor(i/2)*102;pg.drawRectangle({x,y,width:250,height:88,color:panel,borderColor:line,borderWidth:.6});pg.drawText(st[0],{x:x+15,y:y+62,size:8,font:bold,color:red});pg.drawText(String(st[1]),{x:x+15,y:y+34,size:23,font:bold,color:white});pg.drawText(st[2],{x:x+15,y:y+15,size:8,font,color:muted});});
   pg.drawText("O QUE ESTA CÓPIA PROTEGE",{x:38,y:135,size:9,font:bold,color:red});drawWrapped(pg,"Treinos, sessões, alimentação, bibliotecas personalizadas, metas, planejamento, evolução corporal e configurações disponíveis neste perfil.",38,115,510,9,font,white,14,3);pg.drawText("Backup individual · Os demais perfis do dispositivo não são incluídos.",{x:38,y:48,size:8,font,color:muted});pg.drawText("FORMA  ·  DOCUMENTO DE BACKUP",{x:38,y:28,size:7,font,color:muted});
   pg=bg();pg.drawText("DETALHAMENTO DO BACKUP",{x:38,y:735,size:18,font:bold,color:white});pg.drawText("Resumo das informações armazenadas neste perfil",{x:38,y:713,size:9,font,color:muted});let yy=665;
   const sections=[["TREINAMENTO",[["Registros de treino",safeCount(data.logs)],["Sessões concluídas / histórico",safeCount(data.sessionHistory)],["Treinos personalizados",safeCount(data.customWorkouts)]]],["ALIMENTAÇÃO",[["Registros alimentares",safeCount(data.foodEntries)],["Alimentos personalizados",safeCount(data.customFoods)],["Refeições salvas",safeCount(data.savedMeals)],["Refeições personalizadas",safeCount(data.customMeals)]]],["EVOLUÇÃO CORPORAL",[["Registros de peso e medidas",safeCount(data.progress)],["Avaliações de bioimpedância",safeCount(data.bioimpedance)]]],["CONFIGURAÇÕES E PLANEJAMENTO",[["Metas nutricionais",data.targets&&Object.values(data.targets).some(v=>v!==null&&v!==undefined&&v!=="")?"Incluídas":"Não identificadas"],["Plano de treino",data.generatedWorkoutPlan||data.customWorkouts?"Incluído":"Conforme dados disponíveis"],["Planejamento alimentar",data.nutritionSchedule||data.nutritionPlanImported?"Incluído":"Conforme dados disponíveis"]]]];
   for(const [heading,rows] of sections){pg.drawText(heading,{x:38,y:yy,size:9,font:bold,color:red});yy-=22;for(const [label,val] of rows){pg.drawText(String(label).slice(0,48),{x:44,y:yy,size:9,font,color:white});pg.drawText(String(val),{x:495,y:yy,size:9,font:bold,color:muted});yy-=19;}yy-=12;}
   pg.drawRectangle({x:38,y:82,width:519,height:72,color:panel,borderColor:line,borderWidth:.6});pg.drawText("RESTAURAÇÃO PELO FORMA",{x:52,y:132,size:8,font:bold,color:red});drawWrapped(pg,"Para restaurar, importe este PDF pela área de Importação do aplicativo. O FORMA reconhecerá os dados internos e permitirá revisar a restauração antes de aplicá-la ao perfil aberto.",52,113,485,8,font,white,12,3);pg.drawText("Documento pessoal. Guarde em local seguro.",{x:38,y:48,size:8,font,color:muted});pg.drawText("FORMA  ·  DOCUMENTO DE BACKUP",{x:38,y:28,size:7,font,color:muted});
   await d.attach(new TextEncoder().encode(JSON.stringify({format:"FORMA_PDF_CONTAINER",version:1,payload:obj,fields:[]})),"forma-data.json",{mimeType:"application/json",description:"Dados internos para restauração do perfil no FORMA."});
   const bytes=await d.save(),url=URL.createObjectURL(new Blob([bytes],{type:"application/pdf"})),a=document.createElement("a");a.href=url;a.download="backup-completo-forma-"+String(p.name||"perfil").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()+".pdf";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);const statusEl=$("settingsExportStatus");if(statusEl){statusEl.hidden=false;statusEl.classList.remove("error");statusEl.textContent="Backup completo em PDF gerado com os dados internos anexados.";}return true;
  }
  const W=595.28,H=841.89,margin=38,contentW=W-margin*2;
  let page=d.addPage([W,H]),y=666,pageNo=1;
  const drawHeader=()=>{page.drawRectangle({x:0,y:0,width:W,height:H,color:navy});page.drawRectangle({x:0,y:700,width:W,height:141.89,color:panel});page.drawRectangle({x:0,y:696,width:W,height:4,color:red});page.drawRectangle({x:38,y:786,width:29,height:29,color:red});page.drawText("F",{x:47,y:794,size:17,font:bold,color:white});page.drawText("FORMA  ·  SEU PLANO PESSOAL",{x:78,y:798,size:10,font:bold,color:white});page.drawText("DOCUMENTO DO FORMA",{x:38,y:760,size:8,font:bold,color:red});page.drawText(String(titleText||"Documento FORMA").slice(0,72),{x:38,y:730,size:22,font:bold,color:white});page.drawText(String(subtitle||"Documento compatível com importação").slice(0,100),{x:38,y:711,size:9,font,color:muted});};
  drawHeader();
  const drawPageFooter=()=>{page.drawText("FORMA  ·  DOCUMENTO PARA CONSULTA E IMPORTAÇÃO",{x:margin,y:25,size:7,font,color:muted});page.drawText("PÁG. "+pageNo,{x:W-margin-42,y:25,size:7,font,color:muted});};
  const nextPage=()=>{drawPageFooter();pageNo++;page=d.addPage([W,H]);page.drawRectangle({x:0,y:0,width:W,height:H,color:navy});page.drawRectangle({x:0,y:H-7,width:W,height:7,color:red});page.drawText("FORMA  ·  "+String(titleText||"DOCUMENTO").toUpperCase().slice(0,52),{x:margin,y:H-34,size:8,font:bold,color:muted});y=H-58;};
  const ensure=(h)=>{if(y-h<58)nextPage();};
  const drawWrapped=(txt,x,top,max,size=8,color=white,f=font,leading=size*1.45)=>{const words=String(txt??"").replace(/\s+/g," ").trim().split(" "),rows=[];let row="";for(const word of words){const test=row?row+" "+word:word;if(f.widthOfTextAtSize(test,size)>max&&row){rows.push(row);row=word;}else row=test;}if(row)rows.push(row);ensure(Math.max(leading,rows.length*leading)+4);rows.forEach((v,i)=>page.drawText(v,{x,y:top-i*leading,size,font:f,color}));y=top-rows.length*leading-5;};
  const drawSectionTitle=(txt,level=2)=>{ensure(30);const size=level===1?13:10;page.drawText(String(txt).slice(0,100),{x:margin,y,size,font:bold,color:red});y-=size+9;};
  const drawTable=(table)=>{
   const rows=[...table.querySelectorAll("tr")].map(tr=>[...tr.children].map(td=>(td.innerText||td.textContent||"").trim()));
   if(!rows.length)return;
   const cols=Math.max(...rows.map(r=>r.length)),width=contentW/cols,cellPad=5,fs=7.2,leading=9.2;
   const prepare=row=>{
    const cells=Array.from({length:cols},(_,i)=>row[i]||"");
    const wrapped=cells.map(v=>{const words=String(v).split(/\s+/),out=[];let ln="";for(const word of words){const test=ln?ln+" "+word:word;if(font.widthOfTextAtSize(test,fs)>width-cellPad*2&&ln){out.push(ln);ln=word;}else ln=test;}if(ln)out.push(ln);return out.length?out:[""];});
    return {wrapped,height:Math.max(22,...wrapped.map(a=>a.length*leading+cellPad*2))};
   };
   const drawRow=(row,ri,prepared)=>{const {wrapped,height:rowH}=prepared;let x=margin;for(let c=0;c<cols;c++){page.drawRectangle({x,y:y-rowH+3,width,height:rowH,color:ri===0?panel:(ri%2?rgb(.055,.09,.15):navy),borderColor:line,borderWidth:.45});wrapped[c].forEach((ln,j)=>page.drawText(ln.slice(0,100),{x:x+cellPad,y:y-cellPad-fs-j*leading,size:fs,font:ri===0?bold:font,color:ri===0?red:white}));x+=width;}y-=rowH;};
   const header=prepare(rows[0]);ensure(header.height+4);drawRow(rows[0],0,header);
   for(let ri=1;ri<rows.length;ri++){const prepared=prepare(rows[ri]);if(y-prepared.height<58){nextPage();drawRow(rows[0],0,header);}drawRow(rows[ri],ri,prepared);}
   y-=10;
  };
  const renderNode=(node)=>{
   if(node.nodeType===3){const t=node.textContent.trim();if(t)drawWrapped(t,margin,y,contentW,8,white,font,11);return;}
   if(node.nodeType!==1)return;
   const tag=node.tagName.toLowerCase(),cls=String(node.className||"");
   if(tag==="table"){drawTable(node);return;}
   if(cls.split(/\\s+/).includes("stats")){
    const cards=[...node.querySelectorAll(":scope > .stat")];
    if(cards.length){
     const gap=12,cw=(contentW-gap)/2,ch=72;
     for(let i=0;i<cards.length;i+=2){
      ensure(ch+16);const top=y;
      for(let j=0;j<2&&i+j<cards.length;j++){
       const card=cards[i+j],x=margin+j*(cw+gap);
       const label=String(card.querySelector("span")?.innerText||"").trim();
       const value=String(card.querySelector("strong")?.innerText||"").trim();
       page.drawRectangle({x,y:top-ch,width:cw,height:ch,color:panel,borderColor:line,borderWidth:.7});
       const labelLines=wrap(label,cw-20,7,bold).slice(0,2);
       labelLines.forEach((lineText,k)=>page.drawText(lineText,{x:x+10,y:top-16-k*9,size:7,font:bold,color:red}));
       const valueLines=wrap(value,cw-20,11,bold).slice(0,2);
       valueLines.forEach((lineText,k)=>page.drawText(lineText,{x:x+10,y:top-47-k*13,size:11,font:bold,color:white}));
      }
      y-=ch+12;
     }
    }
    return;
   }if(tag==="h1"||tag==="h2"||tag==="h3"||tag==="h4"){ensure(72);drawSectionTitle(node.innerText||node.textContent,tag==="h1"?1:2);return;}
   if(tag==="p"){const t=(node.innerText||node.textContent||"").trim();if(t)drawWrapped(t,margin,y,contentW,8,cls.includes("muted")?muted:white,font,11);return;}
   if(tag==="div"&&node.children.length===0){const t=(node.innerText||node.textContent||"").trim();if(t)drawWrapped(t,margin,y,contentW,8,white,font,11);return;}
   for(const child of node.children)renderNode(child);
  };
  const summary=document.createElement("div");summary.innerHTML=summaryHtml||"";
  if(summary.children.length){for(const child of summary.children)renderNode(child);}else{const raw=(summary.innerText||summary.textContent||"").trim();if(raw)drawWrapped(raw,margin,y,contentW,8,white,font,11);}
  // Modelos: campos editáveis com rótulos e caixas visíveis no próprio PDF.
  const modelSchema=formaPdfSchema(obj);
  if(modelSchema.length){
   const schema=modelSchema,values=formaPdfValues(obj),form=d.getForm();
   const longKeys=new Set(["food_description","food_notes","meal_description","meal_items","meal_instructions","meal_notes","exercise_tips","exercise_errors","exercise_alternatives","workout_days","workout_exercises","nutrition_meals","schedule_meals","bio_notes"]);for(const sec of modelSchema)for(const pair of sec.items)if(/_(description|preparation|notes|source_ref|source)$/.test(pair[0]))longKeys.add(pair[0]);
   y-=18;
   for(const sec of schema){
    ensure(36);drawSectionTitle(sec.section,2);
    for(let k=0;k<sec.items.length;){
     const first=sec.items[k],second=sec.items[k+1],wide=longKeys.has(first[0])||!second||longKeys.has(second[0]);
     ensure(66);const entries=wide?[first]:[first,second];
     for(let col=0;col<entries.length;col++){
      const pair=entries[col],x=wide?margin:margin+col*((contentW-14)/2+14),w=wide?contentW:(contentW-14)/2;
      const label=String(pair[1]).slice(0,64),val=String(values[pair[0]]??"");
      page.drawText(label,{x,y:y-9,size:7.5,font:bold,color:muted});
      // Desenho estático garante rótulos e áreas visíveis mesmo em leitores que ocultam widgets AcroForm.
      page.drawRectangle({x,y:y-43,width:w,height:29,color:panel,borderColor:red,borderWidth:.8});
      if(val){
       const preview=wrap(val,w-12,7,font).slice(0,longKeys.has(pair[0])?3:1);
       preview.forEach((lineText,n)=>page.drawText(lineText,{x:x+6,y:y-25-n*8,size:7,font,color:white}));
      }else page.drawText("Preencha este campo",{x:x+6,y:y-25,size:7,font,color:muted});
      const field=form.createTextField(pair[0]);
      // PDF-lib exige /DA em cada campo antes de configurar fonte ou gerar aparências.
      field.acroField.setDefaultAppearance("/Helv 8 Tf 0 g");
      if(val)field.setText(val);
      if(longKeys.has(pair[0]))field.enableMultiline();
      field.addToPage(page,{x,y:y-43,width:w,height:29,borderColor:red,borderWidth:.8,backgroundColor:panel,textColor:white});
     }
     y-=58;k+=entries.length;
    }
    y-=10;
   }
   form.updateFieldAppearances(font);
  }
  drawPageFooter();
  const formatInstructions={
   FORMA_WORKOUT_PLAN:"CATEGORIA PLANO DE TREINO — format=FORMA_WORKOUT_PLAN, version=1. O payload deve conter plan (ou os campos no nível raiz), name, objective e days[]. Cada dia: day, short, title, subtitle e exercises[]. Cada exercício: name obrigatório; sets inteiro de 1 a 12; reps como inteiro/faixa ou {min,max}, entre 1 e 100; rest em segundos ou texto com s/min, entre 0 e 900. O foco muscular deve ser identificável: inclua focus quando o nome não permitir inferência segura. Campos adicionais aceitos: load, cadence, rir/rpe, method, unilateral, warmupSets, progression, notes e setPrescription[]. Limites: 1–7 dias, nomes de dias únicos, 1–25 exercícios por dia. Preserve a ordem original.",
   FORMA_NUTRITION_PLAN:"CATEGORIA PLANO NUTRICIONAL — format=FORMA_NUTRITION_PLAN, version=1. Use plan.name, plan.objective e plan.meals[]. Cada refeição exige name e items[] com 1–30 itens. Cada item exige name e amount (texto com unidade/porção); kcal, protein, carbs e fat devem ser números não negativos. Inclua time e notes quando disponíveis. Limite de 1–12 refeições. totals opcional com kcal, protein, carbs e fat; quando ausente, o FORMA soma os itens. Não confunda metas com valores efetivamente consumidos.",
   FORMA_NUTRITION_SCHEDULE:"CATEGORIA CRONOGRAMA ALIMENTAR — format=FORMA_NUTRITION_SCHEDULE, version=1. Use schedule.name, objective, target {kcal,protein,carbs,fat} e meals[]. Cada refeição deve conter name, time e items[]. Cada item utiliza key, g e snapshot; snapshot descreve name, unit, basisAmount, basisUnit, k, p, c, f, sourceType, source e, se houver, micronutrients. g é a quantidade utilizada; os nutrientes do snapshot são por basisAmount. Não invente códigos de alimentos nem fontes. Preserve horários, refeições e quantidades.",
   FORMA_LIBRARY_IMPORT:"CATEGORIA BIBLIOTECA DE ALIMENTOS/REFEIÇÕES — format=FORMA_LIBRARY_IMPORT, version=1. Estruture foods[] e/ou meals[]. Alimentos usam name, unit, basisAmount, k, p, c, f, category, preparation, sourceType, source, sourceRef e micronutrients. Refeições usam name e items[] com name, amount, unit e vínculo food_key quando conhecido; inclua notes. Não invente chaves internas: quando não houver vínculo confiável, use o nome do alimento e snapshot nutricional quando disponível. Mantenha a base nutricional e a unidade consistentes.",
   FORMA_EXERCISE_LIBRARY:"CATEGORIA BIBLIOTECA DE EXERCÍCIOS — format=FORMA_EXERCISE_LIBRARY, version=1. Use exercises[]; cada exercício deve conter name e, preferencialmente, muscle, focus, secondary[], equipment, type, level, pattern, tips[], errors[], alternatives[], sets, reps, rest e notes. Use nomes claros e classificação coerente. Não atribua grupo muscular ou equipamento por suposição quando não houver evidência.",
   FORMA_BIOIMPEDANCE:"CATEGORIA BIOIMPEDÂNCIA — format=FORMA_BIOIMPEDANCE, version=1. Use bioimpedance.date (AAAA-MM-DD), weight em kg, waist em cm, fat em %, muscle em kg, water em % e notes. Copie somente valores presentes no laudo; não estime, arredonde indevidamente ou converta unidades sem registrar a conversão. A data da avaliação é obrigatória para interpretação temporal."
  };
  const importInstructions=[
   "INSTRUÇÕES PARA IA — MODELO DE IMPORTAÇÃO FORMA (VERSÃO 3)",
   formatInstructions[obj?.format]||"Identifique a categoria pelo campo format e respeite integralmente o esquema e a versão do payload fornecido.",
   "Este arquivo é um modelo estruturado de importação para o aplicativo FORMA. Identifique a categoria pelo campo format do anexo forma-data.json e mantenha exatamente essa categoria e sua estrutura.",
   "REGRA PRINCIPAL: substitua integralmente todos os dados demonstrativos, exemplos, nomes fictícios e valores de amostra. Nunca reutilize um exemplo como se fosse dado real. Não misture categorias nem transforme um alimento em refeição, exercício ou plano.",
   "PREENCHIMENTO: use os campos editáveis visíveis do PDF como fonte principal. Atualize também o payload JSON do anexo forma-data.json para que cada campo preenchido no PDF corresponda ao mesmo campo no JSON. Preserve os nomes técnicos dos campos e a estrutura de arrays/objetos. Não crie propriedades incompatíveis.",
   "DADOS DESCONHECIDOS: não invente informações. Deixe o campo vazio ou null quando não houver dado confiável; não use zero para representar dado desconhecido. Respeite unidades e bases de referência indicadas no documento.",
   "ALIMENTOS: confira energia, macronutrientes e micronutrientes na mesma base (normalmente 100 g ou 100 ml), identifique preparo/estado do alimento e informe fonte e referência. Não misture valores de produtos ou preparações diferentes.",
   "REFEIÇÕES: mantenha ingredientes, quantidades, unidades, rendimento, porções e modo de preparo coerentes. Atualize as quantidades dos itens e os vínculos com os alimentos correspondentes.",
   "EXERCÍCIOS: preserve grupo muscular principal, foco, músculos secundários, equipamento, padrão de movimento, técnica, erros comuns e alternativas. Não invente prescrição clínica ou cargas individuais.",
   "PLANOS DE TREINO: preserve dias/sessões, ordem dos exercícios, séries, repetições, carga, descanso, cadência, RIR/RPE, unilateralidade e progressão. Não omita sessões ou exercícios existentes.",
   "PLANOS NUTRICIONAIS E CRONOGRAMAS: preserve metas, refeições, horários, alimentos, quantidades e distribuição. Confira se os totais e as unidades são coerentes.",
   "BIOIMPEDÂNCIA: preserve data, unidades e significado de cada medida. Não estime medidas ausentes.",
   "VALIDAÇÃO FINAL: antes de entregar, confira se não restou nenhum texto de exemplo, se todos os campos visíveis e o JSON estão sincronizados, se a categoria e os índices estão corretos e se o arquivo continua sendo um PDF com os campos preenchíveis. Não declare sucesso se não puder garantir essas verificações.",
   "FORMATO DE ENTREGA: devolva o próprio PDF editado, mantendo o anexo forma-data.json com format, version e payload. Não entregue somente texto, captura de tela, CSV ou um JSON separado. Não renomeie campos técnicos. Atualize no JSON todos os valores alterados no PDF; quando não puder editar AcroForm, atualize o JSON e mantenha o PDF legível. Nunca remova os anexos forma-data.json e FORMA-IA-INSTRUCOES.txt."
  ].join("\n");
  const fieldSnapshot=typeof formaPdfValues==="function"?formaPdfValues(obj):{};
  await d.attach(new TextEncoder().encode(JSON.stringify({format:"FORMA_PDF_CONTAINER",version:3,templateSchemaVersion:3,instructionVersion:3,payload:obj,fields:fieldSnapshot,fieldAuthority:"acroform",schema:{format:obj?.format||null,definition:formatInstructions[obj?.format]||"Preserve o formato e a estrutura do payload original.",fieldMap:formaPdfSchema(obj).map(section=>({section:section.section,fields:section.items.map(([key,label])=>({key,label}))}))},instructions:"FORMA-IA-INSTRUCOES.txt"})),"forma-data.json",{mimeType:"application/json",description:"Estrutura de importação e valores sincronizados do modelo FORMA."});
  await d.attach(new TextEncoder().encode(importInstructions),"FORMA-IA-INSTRUCOES.txt",{mimeType:"text/plain",description:"Instruções para preenchimento assistido por IA. Consulte antes de editar ou devolver este modelo."});
  // As instruções também ficam impressas como texto selecionável no próprio PDF; os anexos são uma cópia estruturada adicional.
  if(obj?.format!=="FORMA-backup"){
   const W=595.28,H=841.89,margin=42,contentWidth=W-margin*2;let instructionPage=null,instructionY=H-58;
   const newInstructionPage=()=>{instructionPage=d.addPage([W,H]);instructionPage.drawRectangle({x:0,y:0,width:W,height:H,color:navy});instructionPage.drawRectangle({x:0,y:H-8,width:W,height:8,color:red});instructionPage.drawText("FORMA · INSTRUÇÕES DE IMPORTAÇÃO",{x:margin,y:H-36,size:9,font:bold,color:red});instructionPage.drawText(String(titleText||"Modelo FORMA").slice(0,70),{x:margin,y:H-52,size:7.5,font,color:muted});instructionY=H-78;};
   newInstructionPage();
   for(const rawLine of importInstructions.split(/\r?\n/)){
    const isHeading=/^(INSTRUÇÕES PARA IA|CATEGORIA )/.test(rawLine),lines=wrap(rawLine,contentWidth,isHeading?8.2:7.5,isHeading?bold:font);const needed=lines.length*(isHeading?12:10)+5;
    if(instructionY-needed<52)newInstructionPage();
    for(const lineText of lines){instructionPage.drawText(lineText,{x:margin,y:instructionY,size:isHeading?8.2:7.5,font:isHeading?bold:font,color:isHeading?white:muted});instructionY-=isHeading?12:10;}
    instructionY-=5;
   }
   instructionPage.drawText("Leia estas regras antes de preencher o modelo. Preserve o payload e os nomes técnicos dos campos.",{x:margin,y:28,size:6.5,font,color:muted});
  }
  const bytes=await d.save(),url=URL.createObjectURL(new Blob([bytes],{type:"application/pdf"})),a=document.createElement("a");a.href=url;a.download=(String(titleText||"documento").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"documento")+".pdf";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);
  const statusEl=$("settingsExportStatus");if(statusEl){statusEl.hidden=false;statusEl.classList.remove("error");statusEl.textContent="PDF gerado com conteúdo visual organizado e dados internos anexados para importação.";}return true;
 }catch(e){console.error(e);showStatus("Falha ao gerar PDF: "+(e.message||"erro inesperado"),true);return false;}
}
 function table(headers,rows){return '<table class="table"><thead><tr>'+headers.map(h=>'<th>'+escapeHtml(h)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(v=>'<td>'+escapeHtml(v)+'</td>').join('')+'</tr>').join('')+'</tbody></table>';}
 function exportPdf(kind){
  const api=window.formaSettingsImportExport,lib=api?.getPdfData?.()||{foods:[],savedMeals:[],exercises:[]};
  const foods=lib.foods||[],savedMeals=lib.savedMeals||[],exercises=lib.exercises||[];
  if(kind==='foods'||kind==='meals'||kind==='all'){
   const includeFoods=kind!=='meals',includeMeals=kind!=='foods',payload={format:'FORMA_LIBRARY_IMPORT',version:1};
   if(includeFoods)payload.foods=foods.map(f=>({key:f.key,name:f.name,k:f.k,p:f.p,c:f.c,f:f.f,unit:f.unit||'g',basisAmount:f.basisAmount||100,sourceType:f.sourceType||'other',source:f.source||'Exportado pelo FORMA',sourceRef:f.sourceRef||'',preparation:f.preparation||'',category:f.category||'',description:f.description||'',brand:f.brand||'',fiber:f.fiber??null,sodium:f.sodium??null,micronutrients:(()=>{const m=f.micronutrients||{};if(typeof m==='string'){try{return JSON.parse(m);}catch{return {};}}return m;})()}));
   if(includeMeals)payload.meals=savedMeals.map(m=>({name:m.name,notes:m.notes||'',items:(m.items||[]).map(x=>({name:x.name||x.foodName||'',amount:x.amount??x.g??'',unit:x.unit||'g',food_key:x.foodKey||x.key||'',snapshot:x.snapshot||x.foodSnapshot||null,k:x.k,p:x.p,c:x.c,f:x.f}))}));
   const fmt=v=>v===null||v===undefined||v===''?'—':Number.isFinite(Number(v))?Number(v).toLocaleString('pt-BR',{maximumFractionDigits:1}):String(v);
   const foodRows=(payload.foods||[]).map(f=>[f.name,fmt(f.basisAmount)+' '+f.unit,fmt(f.k),fmt(f.p),fmt(f.c),fmt(f.f)]);
   const foodDetails=(payload.foods||[]).map(f=>{const extras=[f.brand?'Marca: '+f.brand:'',f.category?'Categoria: '+f.category:'',f.preparation?'Preparo: '+f.preparation:'',f.description?'Descrição: '+f.description:'',f.fiber!==null?'Fibras: '+fmt(f.fiber)+' g':'',f.sodium!==null?'Sódio: '+fmt(f.sodium)+' mg':'',Object.entries(f.micronutrients||{}).map(([key,raw])=>{const um=key.match(/_(g|mg|mcg|µg)$/i),unit=raw&&typeof raw==='object'?(raw.unit||raw.unidade||um?.[1]||''):(um?.[1]||''),value=raw&&typeof raw==='object'?(raw.value??raw.amount??raw.valor):raw;return value===null||value===undefined||value===''?'':key.replace(/_(g|mg|mcg|µg)$/i,'').replace(/_/g,' ')+': '+fmt(value)+(unit?' '+unit:'');}).filter(Boolean).join(' · ')?'Micronutrientes: '+Object.entries(f.micronutrients||{}).map(([key,raw])=>{const um=key.match(/_(g|mg|mcg|µg)$/i),unit=raw&&typeof raw==='object'?(raw.unit||raw.unidade||um?.[1]||''):(um?.[1]||''),value=raw&&typeof raw==='object'?(raw.value??raw.amount??raw.valor):raw;return value===null||value===undefined||value===''?'':key.replace(/_(g|mg|mcg|µg)$/i,'').replace(/_/g,' ')+': '+fmt(value)+(unit?' '+unit:'');}).filter(Boolean).join(' · '):'',f.source?'Fonte: '+f.source:'',f.sourceRef?'Referência: '+f.sourceRef:''].filter(Boolean);return '<p class="muted"><strong>'+escapeHtml(f.name||'Alimento')+'</strong> · Base '+fmt(f.basisAmount)+' '+escapeHtml(f.unit||'g')+' · '+fmt(f.k)+' kcal · P '+fmt(f.p)+' g · C '+fmt(f.c)+' g · G '+fmt(f.f)+' g'+(extras.length?' · '+escapeHtml(extras.join(' · ')):'')+'</p>';}).join('');
   const mealSections=(payload.meals||[]).map((m,i)=>{const rows=(m.items||[]).map(item=>{const snap=item.snapshot||item.foodSnapshot||{},amount=Number(item.amount??item.g??item.grams??0),base=Number(snap.basisAmount||100)||100,factor=Number.isFinite(amount)&&amount>0?amount/base:1,macro=k=>{const raw=item[k]??snap[k];return raw===null||raw===undefined||raw===''?'—':fmt(Number(raw)*factor);};return [item.name||item.foodName||snap.name||item.food_key||'Alimento',String(item.amount??item.g??item.grams??'')+(item.unit?' '+item.unit:''),macro('k'),macro('p'),macro('c'),macro('f')];});const itemLines=(m.items||[]).map(item=>{const snap=item.snapshot||item.foodSnapshot||{};return '<p class="muted">'+escapeHtml(item.name||item.foodName||snap.name||item.food_key||'Alimento')+' · '+escapeHtml(String(item.amount??item.g??item.grams??''))+' '+escapeHtml(item.unit||snap.unit||'g')+'</p>';}).join('');return '<section class="section"><h2>'+(i+1)+'. '+escapeHtml(m.name||'Refeição sem nome')+'</h2>'+table(['Alimento','Porção','kcal','P (g)','C (g)','G (g)'],rows)+itemLines+(m.notes?'<p class="muted">'+escapeHtml(m.notes)+'</p>':'')+'</section>';}).join('');
   const summary='<div class="stats"><div class="stat"><span>Alimentos exportados</span><strong>'+(payload.foods||[]).length+'</strong></div><div class="stat"><span>Refeições exportadas</span><strong>'+(payload.meals||[]).length+'</strong></div><div class="stat"><span>Perfil</span><strong>'+escapeHtml($('profileNameLabel')?.textContent||'Atual')+'</strong></div><div class="stat"><span>Formato</span><strong>PDF</strong></div></div>'+(includeFoods?'<section class="section"><h2>Biblioteca de alimentos ('+payload.foods.length+')</h2>'+table(['Alimento','Base','kcal','Proteína','Carboidratos','Gorduras'],foodRows)+foodDetails+'</section>':'')+(includeMeals?'<section class="section"><h2>Refeições salvas ('+payload.meals.length+')</h2>'+mealSections+'</section>':'');
   return openStructuredPdf('Biblioteca do FORMA','Exportação de '+(kind==='foods'?'alimentos':kind==='meals'?'refeições':'alimentos e refeições')+' · PDF',summary,payload);
  }
  if(kind==='exercises'){
   if(!exercises.length){showStatus('Não há exercícios personalizados para exportar neste perfil.',true);return false;}
   const payload={format:'FORMA_EXERCISE_LIBRARY',version:1,exercises:exercises.map(x=>({...x}))};
   const rows=exercises.map(x=>[x.name||'—',x.muscle||x.focus||'—',x.equipment||'—',x.type||'—',x.level||'—']);
   const details=exercises.map((x,i)=>{const lines=[['Execução',x.tips],['Erros comuns',x.errors],['Alternativas',x.alternatives],['Grupos secundários',x.secondary],['Padrão de movimento',x.pattern]].filter(([,v])=>Array.isArray(v)?v.length:v).map(([label,value])=>'<p class="muted"><strong>'+label+':</strong> '+escapeHtml(Array.isArray(value)?value.join(' · '):String(value))+'</p>').join('');return lines?'<section class="section"><h3>'+escapeHtml(x.name||'Exercício '+(i+1))+'</h3>'+lines+'</section>':'';}).join('');
   const summary='<div class="stats"><div class="stat"><span>Exercícios personalizados</span><strong>'+exercises.length+'</strong></div><div class="stat"><span>Perfil</span><strong>'+escapeHtml($('profileNameLabel')?.textContent||'Atual')+'</strong></div></div><section class="section"><h2>Biblioteca de exercícios</h2>'+table(['Exercício','Grupo principal','Equipamento','Tipo','Nível'],rows)+'</section>'+details;
   return openStructuredPdf('Biblioteca de exercícios','Biblioteca personalizada · PDF',summary,payload);
  }
  if(kind==='workout'){
   if(typeof workoutPlanFileObject!=='function'){showStatus('O plano de treino não está disponível para exportação.',true);return false;}
   const plan=workoutPlanFileObject(),summary='<section class="section"><h2>'+escapeHtml(plan.name)+'</h2><p class="muted">Objetivo: '+escapeHtml(plan.objective||'Não informado')+'</p>'+plan.days.map((d,i)=>'<section class="section"><h3>'+escapeHtml(d.day)+' · '+escapeHtml(d.title)+'</h3>'+table(['Exercício','Séries','Repetições','Descanso'],d.exercises.map(x=>[x.name,x.sets,x.reps,x.rest]))+'</section>').join('')+'</section>';
   return openStructuredPdf('Plano de treino',plan.objective||'Ficha ativa · PDF',summary,plan);
  }
  if(kind==='nutrition'){
   const imported=typeof state!=='undefined'?state.nutritionPlanImported:null;
   const schedule=typeof state!=='undefined'?state.nutritionSchedule:null;
   const generated=typeof state!=='undefined'?state.autoFoodPlan:null;
   const targets=typeof state!=='undefined'?(state.targets||{}):{};
   const profileName=$('profileNameLabel')?.textContent||'Perfil atual';
   const sourcePlan=(imported&&Array.isArray(imported.meals)&&imported.meals.length)?{kind:'imported',value:imported}:
    (schedule&&Array.isArray(schedule.meals)&&schedule.meals.length)?{kind:'schedule',value:schedule}:
    (generated&&Array.isArray(generated.meals)&&generated.meals.length)?{kind:'generated',value:generated}:null;
   if(!sourcePlan){showStatus('Este perfil ainda não possui um plano nutricional ou cronograma com refeições salvas para exportar.',true);return false;}
   const foodFor=key=>(typeof FOOD_DB!=='undefined'&&FOOD_DB?.[key])||state.customFoods?.[key]||null;
   const fmt=v=>v===null||v===undefined||v===''?'—':Number(v).toLocaleString('pt-BR',{maximumFractionDigits:1});
   const source=sourcePlan.kind,p=sourcePlan.value;
   const meals=(p.meals||[]).map((m,i)=>{
    const items=(m.items||[]).map(item=>{
     const snap=item.snapshot||item.foodSnapshot||foodFor(item.key||item.foodKey)||{};
     const amount=Number(item.g??item.grams??item.amount??0)||0;
     const basis=Number(snap.basisAmount||snap.basis_amount||100)||100;
     const macro=(a,b)=>{const direct=item[a]??item[{k:'kcal',p:'protein',c:'carbs',f:'fat'}[b]],v=direct??snap[b]??snap[a];if(v===undefined||v===null||v==='')return null;return Number(v)*(source==='schedule'&&direct===undefined?amount/basis:1);};
     const name=item.name||item.foodName||snap.name||item.key||'Alimento';
     const unit=item.unit||snap.unit||'g';
     const portion=item.g!==undefined?item.g+' '+unit:item.grams!==undefined?item.grams+' '+unit:item.amount??'';
     return {name,amount:String(portion),kcal:macro('k','kcal'),protein:macro('p','protein'),carbs:macro('c','carbs'),fat:macro('f','fat'),unit};
    });
    const sum=key=>{const vals=items.map(x=>x[key]).filter(v=>Number.isFinite(v));return vals.length?vals.reduce((a,b)=>a+b,0):null;};
    return {name:m.name||'Refeição '+(i+1),time:m.time||'',items,kcal:Number(m.kcal??sum('kcal')??0),protein:Number(m.protein??sum('protein')??0),carbs:Number(m.carbs??sum('carbs')??0),fat:Number(m.fat??sum('fat')??0),notes:m.notes||''};
   });
   const t=p.totals||p.target||p.goal||{};
   const totals={kcal:Number(t.kcal??t.k??targets.kcal??meals.reduce((n,m)=>n+m.kcal,0)),protein:Number(t.protein??t.p??targets.protein??meals.reduce((n,m)=>n+m.protein,0)),carbs:Number(t.carbs??t.c??targets.carbs??meals.reduce((n,m)=>n+m.carbs,0)),fat:Number(t.fat??t.f??targets.fat??meals.reduce((n,m)=>n+m.fat,0))};
   const payload={format:'FORMA_NUTRITION_PLAN',version:1,source:source==='imported'?'imported':'created_in_forma',plan:{name:p.name|| (source==='generated'?'Cardápio sugerido pelo FORMA':'Plano nutricional atual'),objective:p.objective||state.planObjective||'Planejamento nutricional do perfil',totals,meals}};
   const calculated={kcal:meals.reduce((n,m)=>n+m.kcal,0),protein:meals.reduce((n,m)=>n+m.protein,0),carbs:meals.reduce((n,m)=>n+m.carbs,0),fat:meals.reduce((n,m)=>n+m.fat,0)},summary='<section class="section"><h2>'+escapeHtml(payload.plan.name)+'</h2><p class="muted">Perfil: '+escapeHtml(profileName)+' · Origem: '+(source==='imported'?'Plano importado':'Planejamento criado no FORMA')+'</p><p class="muted">Objetivo: '+escapeHtml(payload.plan.objective)+'</p><h3>Comparação entre metas e refeições</h3>'+table(['Indicador','Meta diária','Soma das refeições','Diferença'],[['Energia',fmt(totals.kcal)+' kcal',fmt(calculated.kcal)+' kcal',fmt(totals.kcal-calculated.kcal)+' kcal'],['Proteínas',fmt(totals.protein)+' g',fmt(calculated.protein)+' g',fmt(totals.protein-calculated.protein)+' g'],['Carboidratos',fmt(totals.carbs)+' g',fmt(calculated.carbs)+' g',fmt(totals.carbs-calculated.carbs)+' g'],['Gorduras',fmt(totals.fat)+' g',fmt(calculated.fat)+' g',fmt(totals.fat-calculated.fat)+' g']])+'<p class="muted">Diferença = meta diária menos a soma das refeições descritas. Valores positivos indicam que o planejamento listado está abaixo da meta; valores negativos indicam que está acima. A comparação pressupõe que todas as refeições e porções do dia estejam incluídas.</p></section>'+meals.map((m,i)=>'<section class="section"><h2>'+(i+1)+'. '+escapeHtml(m.name)+(m.time?' · '+escapeHtml(m.time):'')+'</h2>'+table(['Alimento','Porção','kcal','Proteína','Carboidratos','Gorduras'],m.items.map(x=>[x.name,x.amount,fmt(x.kcal),fmt(x.protein),fmt(x.carbs),fmt(x.fat)]))+'<p class="muted">Total da refeição: '+fmt(m.kcal)+' kcal · P '+fmt(m.protein)+' g · C '+fmt(m.carbs)+' g · G '+fmt(m.fat)+' g</p>'+(m.notes?'<p>'+escapeHtml(m.notes)+'</p>':'')+'</section>').join('');
   return openStructuredPdf(payload.plan.name,'Plano nutricional atual · '+meals.length+' refeições · PDF',summary,payload);
  }
  if(kind==='schedule'){
   const p=typeof state!=='undefined'?state.nutritionSchedule:null;
   if(!p||!Array.isArray(p.meals)||!p.meals.length){showStatus('Não há cronograma alimentar salvo neste perfil.',true);return false;}
   const portable=JSON.parse(JSON.stringify(p));
   const catalog={...(typeof FOOD_DB!=='undefined'?FOOD_DB:{}),...(state.customFoods||{})};
   const resolveFood=x=>{
    const keys=[x.key,x.foodKey,x.food_key,x.id].filter(Boolean).map(String);
    const match=Object.entries(catalog).find(([key,value])=>keys.includes(key)||keys.includes(String(value?.key||''))||keys.includes(String(value?.id||''))||keys.some(q=>normalizeFoodText(key)===normalizeFoodText(q)||normalizeFoodText(value?.name)===normalizeFoodText(q)));
    const food=(typeof scheduleFood==='function'?scheduleFood(x):null)||match?.[1]||null;
    const snap=x.snapshot||x.foodSnapshot||{};
    if(food)x.snapshot={...snap,name:food.name||snap.name||x.name||'Alimento',unit:food.unit||snap.unit||'g',basisAmount:Number(food.basisAmount||snap.basisAmount)||100,basisUnit:food.unit||snap.basisUnit||'g',k:Number(food.k??food.kcal??snap.k)||0,p:Number(food.p??food.protein??snap.p)||0,c:Number(food.c??food.carbs??snap.c)||0,f:Number(food.f??food.fat??snap.f)||0,sourceType:food.sourceType||snap.sourceType||'custom',source:food.source||snap.source||'Exportado pelo FORMA'};
    else x.snapshot={...snap,name:snap.name||x.name||x.foodName||String(x.key||'Alimento').replace(/^custom_/,'').replace(/_/g,' ')};
   };
   portable.meals.forEach(m=>{(m.items||[]).forEach(resolveFood);(m.options||[]).forEach(o=>(o.items||[]).forEach(resolveFood));});
   const payload={format:'FORMA_NUTRITION_SCHEDULE',version:1,schedule:portable};
   const fmt=v=>v===null||v===undefined||v===''?'—':Number(v).toLocaleString('pt-BR',{maximumFractionDigits:1});
   const optionHtml=(option,index,selected)=>{const items=option.items||[],rows=items.map(x=>{
    const snap=x.snapshot||{},amount=Number(x.g??x.grams??x.amount??0)||0,base=Number(snap.basisAmount||snap.basis_amount||100)||100,factor=amount>0?amount/base:1;
    const value=(k,alias)=>{const direct=x[k]??x[alias],raw=direct??snap[k]??snap[alias];return raw===null||raw===undefined||raw===''?'—':fmt(Number(raw)*(direct===undefined?factor:1));};
    return [snap.name||x.name||x.foodName||x.key||'Alimento',String(x.g??x.grams??x.amount??'')+' '+(x.unit||snap.unit||'g'),value('k','kcal'),value('p','protein'),value('c','carbs'),value('f','fat')];
   });
   const totals=items.reduce((acc,x)=>{const snap=x.snapshot||{},amount=Number(x.g??x.grams??x.amount??0)||0,base=Number(snap.basisAmount||100)||100,factor=amount>0?amount/base:1;for(const k of ['k','p','c','f']){const raw=x[k]??x[{k:'kcal',p:'protein',c:'carbs',f:'fat'}[k]]??snap[k]??snap[{k:'kcal',p:'protein',c:'carbs',f:'fat'}[k]];if(raw!==null&&raw!==undefined&&raw!==''&&Number.isFinite(Number(raw)))acc[k]+=Number(raw)*(x[k]===undefined?factor:1);}return acc;},{k:0,p:0,c:0,f:0});
   return '<section class="section"><h4>'+escapeHtml(option.name||'Opção '+(index+1))+(selected?' · OPÇÃO PRINCIPAL':'')+'</h4>'+table(['Alimento','Porção','kcal','P (g)','C (g)','G (g)'],rows)+'<p class="muted">Total estimado da opção: '+fmt(totals.k)+' kcal · Proteínas '+fmt(totals.p)+' g · Carboidratos '+fmt(totals.c)+' g · Gorduras '+fmt(totals.f)+' g</p></section>';
   };
   const mealsHtml=portable.meals.map((m,i)=>{
    const options=Array.isArray(m.options)&&m.options.length?m.options:[{name:'Refeição planejada',items:m.items||[]}],selected=Number(m.selectedOption??0);
    return '<section class="section"><h2>'+(i+1)+'. '+escapeHtml(m.name||'Refeição '+(i+1))+(m.time?' · '+escapeHtml(m.time):'')+'</h2>'+options.map((o,j)=>optionHtml(o,j,j===selected)).join('')+(m.notes?'<p class="muted">'+escapeHtml(m.notes)+'</p>':'')+'</section>';
   }).join('');
   const targets=p.target||p.targets||{},profileName=$('profileNameLabel')?.textContent||'Perfil atual';
   const summary='<div class="stats"><div class="stat"><span>Refeições planejadas</span><strong>'+portable.meals.length+'</strong></div><div class="stat"><span>Opções alimentares</span><strong>'+portable.meals.reduce((n,m)=>n+(m.options?.length||1),0)+'</strong></div><div class="stat"><span>Meta de energia</span><strong>'+fmt(targets.kcal??state.targets?.kcal)+' kcal</strong></div><div class="stat"><span>Perfil</span><strong>'+escapeHtml(profileName)+'</strong></div></div><section class="section"><h2>'+escapeHtml(p.name||'Cronograma alimentar')+'</h2><p class="muted">O PDF apresenta a opção principal e as alternativas salvas para cada refeição. Os valores nutricionais são estimativas calculadas a partir das referências disponíveis nos alimentos.</p></section>'+mealsHtml;
   return openStructuredPdf('Cronograma alimentar','Refeições planejadas · PDF',summary,payload);
  }
  if(kind==='report'){
   if(typeof nutritionReportData!=='function'){showStatus('O relatório nutricional não está disponível.',true);return false;}
   const report=nutritionReportData(),fmt=v=>v===null||v===undefined?'—':Number(v).toLocaleString('pt-BR',{maximumFractionDigits:1});
   const dailyRows=(report.daily||[]).map(d=>[d.date,fmt(d.k),fmt(d.p),fmt(d.c),fmt(d.f),d.items]),weightRows=(report.weightHistory||[]).map(w=>[w.date,fmt(w.weight_kg)+' kg',w.waist_cm===null?'—':fmt(w.waist_cm)+' cm']),bodyRows=(report.bodyComposition||[]).map(b=>[b.date,b.bodyFatPercent===null?'—':fmt(b.bodyFatPercent)+'%',b.muscleMassKg===null?'—':fmt(b.muscleMassKg)+' kg',b.bodyWaterPercent===null?'—':fmt(b.bodyWaterPercent)+'%']),microRows=(report.micronutrients||[]).map(m=>[m.name,fmt(m.total),m.unit||'']),summary='<div class="stats"><div class="stat"><span>Dias com registro</span><strong>'+report.recordedDays+'</strong></div><div class="stat"><span>Média de energia</span><strong>'+fmt(report.averages.kcal)+' kcal</strong></div><div class="stat"><span>Média de proteína</span><strong>'+fmt(report.averages.protein_g)+' g</strong></div><div class="stat"><span>Período</span><strong>'+escapeHtml(report.period.start)+' a '+escapeHtml(report.period.end)+'</strong></div></div><section class="section"><h2>Médias e metas diárias</h2>'+table(['Indicador','Média diária','Meta'],[['Energia',fmt(report.averages.kcal)+' kcal',fmt(report.targets?.kcal)+' kcal'],['Proteínas',fmt(report.averages.protein_g)+' g',fmt(report.targets?.protein)+' g'],['Carboidratos',fmt(report.averages.carbohydrates_g)+' g',fmt(report.targets?.carbs)+' g'],['Gorduras',fmt(report.averages.fat_g)+' g',fmt(report.targets?.fat)+' g']])+'</section><section class="section"><h2>Registros diários ('+dailyRows.length+')</h2>'+(dailyRows.length?table(['Data','kcal','Proteína (g)','Carboidratos (g)','Gorduras (g)','Itens'],dailyRows):'<p class="muted">Não há registros alimentares válidos neste período.</p>')+'</section>'+(weightRows.length?'<section class="section"><h2>Histórico de peso e cintura</h2>'+table(['Data','Peso','Cintura'],weightRows)+'</section>':'')+(bodyRows.length?'<section class="section"><h2>Composição corporal</h2>'+table(['Data','Gordura','Massa muscular','Água'],bodyRows)+'</section>':'')+(microRows.length?'<section class="section"><h2>Micronutrientes disponíveis</h2>'+table(['Nutriente','Total','Unidade'],microRows)+'</section>':'')+'<section class="section"><h2>Notas de interpretação</h2>'+(report.notes||[]).map(n=>'<p class="muted">'+escapeHtml(n)+'</p>').join('')+'</section>';
   return openStructuredPdf('Relatório nutricional','Resumo do período selecionado · PDF',summary,{format:'FORMA_NUTRITION_REPORT',version:1,report:report});
  }
  if(kind==='body'){
   const progress=typeof state!=='undefined'?(state.progress||[]):[],bio=typeof state!=='undefined'?(state.bioimpedance||[]):[];
   if(!progress.length&&!bio.length){showStatus('Não há registros de peso ou bioimpedância neste perfil.',true);return false;}
   const fmt=v=>v===null||v===undefined||v===''?'—':Number(v).toLocaleString('pt-BR',{maximumFractionDigits:1}),pick=(obj,keys)=>{for(const key of keys){const value=obj?.[key];if(value!==null&&value!==undefined&&value!==''&&Number.isFinite(Number(value)))return Number(value);}return null;},orderedProgress=progress.filter(x=>x&&x.date).slice().sort((a,b)=>String(a.date).localeCompare(String(b.date))),orderedBio=bio.filter(x=>x&&x.date).slice().sort((a,b)=>String(a.date).localeCompare(String(b.date))),weightRows=orderedProgress.map(x=>[x.date,fmt(x.weight)+' kg',x.waist!==null&&x.waist!==undefined&&x.waist!==''?fmt(x.waist)+' cm':'—']),bioRows=orderedBio.map(x=>[x.date,pick(x,['fat','bodyFatPercent','body_fat_percent','fatPercent','bodyFat','body_fat','percentFat']),pick(x,['muscle','muscleMassKg','muscle_mass_kg','muscleMass','muscle_mass','skeletalMuscleMass']),pick(x,['water','bodyWaterPercent','body_water_percent','waterPercent','bodyWater','body_water'])].map((v,i)=>i===0?v:v===null?'—':fmt(v)+(i===2?' kg':'%'))),latest=orderedProgress.at(-1),first=orderedProgress[0],delta=latest&&first?Number(latest.weight)-Number(first.weight):null,stats='<div class="stats"><div class="stat"><span>Registros de peso</span><strong>'+orderedProgress.length+'</strong></div><div class="stat"><span>Último peso</span><strong>'+(latest?fmt(latest.weight)+' kg':'—')+'</strong></div><div class="stat"><span>Variação no histórico</span><strong>'+(delta===null?'—':(delta>0?'+':'')+fmt(delta)+' kg')+'</strong></div><div class="stat"><span>Avaliações de bioimpedância</span><strong>'+orderedBio.length+'</strong></div></div>',summary=stats+'<section class="section"><h2>Histórico de peso e medidas</h2>'+(weightRows.length?table(['Data','Peso','Cintura'],weightRows):'<p class="muted">Não há registros de peso e medidas neste perfil.</p>')+'</section><section class="section"><h2>Bioimpedância</h2>'+(bioRows.length?table(['Data','Gordura corporal','Massa muscular','Água corporal'],bioRows):table(['Situação'],[['Nenhuma avaliação de bioimpedância consta nos dados deste perfil. O histórico de peso e cintura é exibido separadamente.']]))+'</section>';
   return openStructuredPdf('Composição corporal','Histórico do perfil · PDF',summary,{format:'FORMA_BODY_COMPOSITION_REPORT',version:1,progress:progress,bioimpedance:bio});
  }

  if(kind==='training'){
   const now=new Date(),isoDate=value=>{const d=value instanceof Date?value:new Date(value);if(!Number.isFinite(d.getTime()))return '';return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');};
   const validDate=value=>/^\d{4}-\d{2}-\d{2}$/.test(String(value||''))?String(value):'';
   const safeClone=value=>{try{return JSON.parse(JSON.stringify(value??null));}catch(e){return null;}};
   const normalizeExerciseName=value=>String(value||'').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
   const setRows=[],sessionMap=new Map(),rawHistory=Array.isArray(state.sessionHistory)?state.sessionHistory:[];
   rawHistory.forEach(item=>{if(!item||!item.id)return;const id=String(item.id);sessionMap.set(id,{...item,id,date:validDate(sessionDateOf(item))||validDate(isoDate(item.finishedAt))||validDate(isoDate(item.startedAt)),source:'sessionHistory'});});
   Object.entries(state.logs||{}).forEach(([logKey,log])=>{
    if(!log||!Array.isArray(log.sets))return;
    log.sets.forEach((set,setIndex)=>{
     if(!set)return;
     const date=validDate(set.date)||validDate(log.date)||validDate((String(logKey).match(/\d{4}-\d{2}-\d{2}/)||[])[0]);
     const sessionId=String(set.sessionId||log.sessionId||('legacy-'+(date||'sem-data')+'-'+(log.sessionDayIndex??'x')));
     const exerciseName=String(set.exerciseName||log.exerciseName||'Exercício').trim()||'Exercício';
     if(set.completed===true&&set.savedAt&&date){
      const weightRaw=set.weight,repsRaw=set.reps,weight=Number(weightRaw),reps=Number(repsRaw);
      const hasWeight=weightRaw!==''&&weightRaw!==null&&weightRaw!==undefined&&Number.isFinite(weight)&&weight>=0;
      const hasReps=repsRaw!==''&&repsRaw!==null&&repsRaw!==undefined&&Number.isFinite(reps)&&reps>0;
      if(hasWeight&&hasReps){
       setRows.push({date,sessionId,exercise:exerciseName,weight,reps,volume:weight>0?weight*reps:0,restSeconds:Number.isFinite(Number(set.restSeconds))?Number(set.restSeconds):null,savedAt:set.savedAt,logKey,setIndex,workoutName:set.workoutName||log.workoutName||'',day:set.day||log.day||'',rpe:log.rpe??null});
       if(!sessionMap.has(sessionId))sessionMap.set(sessionId,{id:sessionId,date,sessionDate:date,workoutName:set.workoutName||log.workoutName||'',day:set.day||log.day||'',startedAt:log.sessionStartedAt||null,finishedAt:null,legacy:true,source:'completedSets'});
       else if(!sessionMap.get(sessionId).date)sessionMap.get(sessionId).date=date;
      }
     }
    });
   });
   const sessions=[...sessionMap.values()].filter(s=>s.date).sort((a,b)=>a.date.localeCompare(b.date)||String(a.startedAt||'').localeCompare(String(b.startedAt||'')));
   const cardioRows=(Array.isArray(state.cardioSessions)?state.cardioSessions:[]).filter(x=>x&&validDate(x.date)).map(x=>({...x,date:validDate(x.date)})).sort((a,b)=>a.date.localeCompare(b.date));
   const allDates=[...sessions.map(x=>x.date),...setRows.map(x=>x.date),...cardioRows.map(x=>x.date)].filter(Boolean).sort();
   const periodStart=allDates[0]||null,periodEnd=allDates[allDates.length-1]||null;
   const totalSets=setRows.length,totalReps=setRows.reduce((sum,x)=>sum+x.reps,0),totalVolume=setRows.reduce((sum,x)=>sum+x.volume,0);
   const weightedSets=setRows.filter(x=>x.weight>0),maxLoad=weightedSets.length?Math.max(...weightedSets.map(x=>x.weight)):null;
   const durationRecords=sessions.map(s=>{if(!s.startedAt||!s.finishedAt)return null;const start=new Date(s.startedAt),finish=new Date(s.finishedAt);if(!Number.isFinite(start.getTime())||!Number.isFinite(finish.getTime()))return null;return {session:s,minutes:(finish-start)/60000};}).filter(Boolean);
   const durationOutliers=durationRecords.filter(x=>x.minutes<0||x.minutes>180).map(x=>({sessionId:String(x.session.id),workoutName:x.session.workoutName||'Treino',date:x.session.date||null,durationMinutes:Number(x.minutes.toFixed(1)),reason:x.minutes<0?'Término anterior ao início':'Duração superior a 180 minutos'}));
   const durations=durationRecords.filter(x=>x.minutes>=0&&x.minutes<=180).map(x=>x.minutes);
   const strengthMinutes=durations.reduce((sum,x)=>sum+x,0),cardioMinutes=cardioRows.reduce((sum,x)=>sum+Math.max(0,Number(x.duration)||0),0);
   const weekKeyForDate=date=>{const d=new Date(date+'T12:00:00');d.setDate(d.getDate()-((d.getDay()+6)%7));return isoDate(d);};
   const activeWeeks=[...new Set([...sessions.map(x=>weekKeyForDate(x.date)),...cardioRows.map(x=>weekKeyForDate(x.date))])].sort();
   let longestStreak=0,currentStreak=0,previousWeek=null;
   activeWeeks.forEach(week=>{const time=new Date(week+'T12:00:00').getTime();if(previousWeek!==null&&time-previousWeek===7*86400000)currentStreak++;else currentStreak=1;longestStreak=Math.max(longestStreak,currentStreak);previousWeek=time;});
   const elapsedWeeks=periodStart&&periodEnd?Math.max(1,Math.ceil((new Date(periodEnd+'T12:00:00')-new Date(periodStart+'T12:00:00'))/(7*86400000))+1):0;
   const avgSessionsPerWeek=elapsedWeeks?(sessions.length+cardioRows.length)/elapsedWeeks:null;
   const fmt=value=>value===null||value===undefined||!Number.isFinite(Number(value))?'—':Number(value).toLocaleString('pt-BR',{maximumFractionDigits:1});
   const fmtInt=value=>Number(value||0).toLocaleString('pt-BR',{maximumFractionDigits:0});
   const dateLabel=value=>value?new Date(value+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'}):'—';
   const exerciseMeta=new Map();
   const addExerciseMeta=item=>{if(!item)return;const name=String(item.name||item.exerciseName||'').trim();if(!name)return;const key=normalizeExerciseName(name),previous=exerciseMeta.get(key)||{};exerciseMeta.set(key,{...previous,...item});};
   (Array.isArray(state.customExercises)?state.customExercises:[]).forEach(addExerciseMeta);
   Object.values(state.exerciseCatalogEdits||{}).forEach(addExerciseMeta);
   const exerciseStats=new Map(),muscleStats=new Map();
   setRows.forEach(row=>{
    const key=normalizeExerciseName(row.exercise),meta=exerciseMeta.get(key)||{};
    const inferred=typeof inferExercise==='function'?inferExercise(row.exercise):null;
    const group=String(meta.muscle||meta.primaryMuscle||meta.primary_muscle||inferred?.muscle||'Não classificado').trim()||'Não classificado';
    let ex=exerciseStats.get(key);if(!ex){ex={name:row.exercise,sets:0,reps:0,volume:0,sessions:new Set(),firstDate:row.date,lastDate:row.date,firstLoad:null,lastLoad:null,maxLoad:null,maxReps:0};exerciseStats.set(key,ex);}
    ex.sets++;ex.reps+=row.reps;ex.volume+=row.volume;ex.sessions.add(row.sessionId);if(row.date<ex.firstDate)ex.firstDate=row.date;if(row.date>ex.lastDate)ex.lastDate=row.date;
    if(row.weight>0){if(ex.firstLoad===null||row.date<ex.firstLoad.date)ex.firstLoad={date:row.date,value:row.weight};if(ex.lastLoad===null||row.date>ex.lastLoad.date||(row.date===ex.lastLoad.date&&String(row.savedAt)>String(ex.lastLoad.savedAt||'')))ex.lastLoad={date:row.date,value:row.weight,savedAt:row.savedAt};ex.maxLoad=ex.maxLoad===null?row.weight:Math.max(ex.maxLoad,row.weight);}
    ex.maxReps=Math.max(ex.maxReps,row.reps);
    let muscle=muscleStats.get(group);if(!muscle){muscle={name:group,sets:0,reps:0,volume:0,sessions:new Set(),exercises:new Set()};muscleStats.set(group,muscle);}
    muscle.sets++;muscle.reps+=row.reps;muscle.volume+=row.volume;muscle.sessions.add(row.sessionId);muscle.exercises.add(row.exercise);
   });
   const exerciseList=[...exerciseStats.values()].sort((a,b)=>b.volume-a.volume||b.sets-a.sets);
   const muscleList=[...muscleStats.values()].sort((a,b)=>b.sets-a.sets);
   const progressionList=exerciseList.filter(x=>x.firstLoad&&x.lastLoad).map(x=>({...x,delta:x.lastLoad.value-x.firstLoad.value,deltaPercent:x.firstLoad.value>0?(x.lastLoad.value/x.firstLoad.value-1)*100:null})).sort((a,b)=>Math.abs(b.delta)-Math.abs(a.delta)).slice(0,12);
   const monthMap=new Map(),yearMap=new Map();
   const ensureBucket=(map,key,label)=>{if(!map.has(key))map.set(key,{label,sessions:new Set(),cardio:0,sets:0,reps:0,volume:0,minutes:0});return map.get(key);};
   sessions.forEach(s=>{const month=s.date.slice(0,7),year=s.date.slice(0,4);ensureBucket(monthMap,month,month).sessions.add(String(s.id));ensureBucket(yearMap,year,year).sessions.add(String(s.id));});
   cardioRows.forEach(c=>{const month=c.date.slice(0,7),year=c.date.slice(0,4);ensureBucket(monthMap,month,month).cardio++;ensureBucket(yearMap,year,year).cardio++;ensureBucket(monthMap,month,month).minutes+=Math.max(0,Number(c.duration)||0);ensureBucket(yearMap,year,year).minutes+=Math.max(0,Number(c.duration)||0);});
   setRows.forEach(r=>{const month=r.date.slice(0,7),year=r.date.slice(0,4);const m=ensureBucket(monthMap,month,month),y=ensureBucket(yearMap,year,year);m.sets++;m.reps+=r.reps;m.volume+=r.volume;y.sets++;y.reps+=r.reps;y.volume+=r.volume;});
   const monthData=[...monthMap.entries()].sort((a,b)=>a[0].localeCompare(b[0])).map(([key,v])=>({period:key,...v}));
   const yearData=[...yearMap.entries()].sort((a,b)=>a[0].localeCompare(b[0])).map(([key,v])=>({period:key,...v}));
   const maxMonthVolume=Math.max(1,...monthData.map(x=>x.volume));
   const monthlyRows=monthData.map(x=>[x.period,fmtInt(x.sessions.size),fmtInt(x.cardio),fmtInt(x.sets),fmtInt(x.reps),fmtInt(x.volume)+' kg·reps',x.volume>0?'#'.repeat(Math.max(1,Math.round(x.volume/maxMonthVolume*12))):'—']);
   const yearlyRows=yearData.map(x=>[x.period,fmtInt(x.sessions.size),fmtInt(x.cardio),fmtInt(x.sets),fmtInt(x.reps),fmtInt(x.volume)+' kg·reps',fmtInt(x.minutes)+' min']);
   const muscleRows=muscleList.map(x=>[x.name,fmtInt(x.sessions.size),fmtInt(x.exercises.size),fmtInt(x.sets),fmtInt(x.reps),fmtInt(x.volume)+' kg·reps']);
   const exerciseRows=exerciseList.slice(0,25).map(x=>[x.name,fmtInt(x.sessions.size),fmtInt(x.sets),fmtInt(x.reps),x.maxLoad===null?'—':fmt(x.maxLoad)+' kg',fmtInt(x.volume)+' kg·reps']);
   const progressionRows=progressionList.map(x=>[x.name,dateLabel(x.firstLoad.date),fmt(x.firstLoad.value)+' kg',dateLabel(x.lastLoad.date),fmt(x.lastLoad.value)+' kg',(x.delta>0?'+':'')+fmt(x.delta)+' kg'+(x.deltaPercent===null?'':' ('+(x.deltaPercent>0?'+':'')+fmt(x.deltaPercent)+'%)')]);
   const sessionsWithoutSets=sessions.filter(s=>!setRows.some(r=>r.sessionId===String(s.id))).length;
   const unknownGroupSets=setRows.filter(r=>{const meta=exerciseMeta.get(normalizeExerciseName(r.exercise))||{},inferred=typeof inferExercise==='function'?inferExercise(r.exercise):null;return !(meta.muscle||meta.primaryMuscle||meta.primary_muscle||inferred?.muscle);}).length;
   const totalRawSetEntries=Object.values(state.logs||{}).reduce((sum,log)=>sum+(Array.isArray(log?.sets)?log.sets.length:0),0);
   const profileName=$('profileNameLabel')?.textContent?.trim()||'Perfil atual';
   const summaryHtml=
    '<div class="stats">'+
     '<div class="stat"><span>Sessões de musculação</span><strong>'+fmtInt(sessions.length)+'</strong></div>'+
     '<div class="stat"><span>Sessões cardiovasculares</span><strong>'+fmtInt(cardioRows.length)+'</strong></div>'+
     '<div class="stat"><span>Séries concluídas</span><strong>'+fmtInt(totalSets)+'</strong></div>'+
     '<div class="stat"><span>Volume externo acumulado</span><strong>'+fmtInt(totalVolume)+' kg·reps</strong></div>'+
     '<div class="stat"><span>Repetições concluídas</span><strong>'+fmtInt(totalReps)+'</strong></div>'+
     '<div class="stat"><span>Tempo de musculação cronometrado</span><strong>'+fmtInt(strengthMinutes)+' min</strong></div>'+
     '<div class="stat"><span>Tempo cardiovascular registrado</span><strong>'+fmtInt(cardioMinutes)+' min</strong></div>'+
     '<div class="stat"><span>Média de sessões por semana</span><strong>'+(avgSessionsPerWeek===null?'—':fmt(avgSessionsPerWeek))+'</strong></div>'+
    '</div>'+
    '<h2>Panorama da trajetória</h2>'+
    '<p class="muted">Perfil: '+escapeHtml(profileName)+'. Período com registros: '+escapeHtml(dateLabel(periodStart))+' a '+escapeHtml(dateLabel(periodEnd))+'. Foram identificadas '+fmtInt(activeWeeks.length)+' semanas com atividade e uma sequência máxima de '+fmtInt(longestStreak)+' semana(s) consecutiva(s). O cálculo de frequência considera musculação e cardio registrados; não presume atividade nos dias sem dados.</p>'+
    '<h2>Evolução mensal</h2><p class="muted">Cada linha representa um mês com pelo menos um registro. A barra em # representa, de forma relativa, o volume externo registrado naquele mês. Volume = carga × repetições; séries sem carga externa positiva não entram nesse cálculo.</p>'+
    (monthlyRows.length?table(['Mês','Musculação','Cardio','Séries','Reps','Volume','Escala'],monthlyRows):'<p class="muted">Não há sessões ou séries com datas válidas para análise mensal.</p>')+
    '<h2>Resumo anual</h2>'+
    (yearlyRows.length?table(['Ano','Musculação','Cardio','Séries','Reps','Volume','Min cardio'],yearlyRows):'<p class="muted">Não há registros anuais disponíveis.</p>')+
    '<h2>Distribuição por grupos musculares</h2><p class="muted">A classificação usa o grupo principal disponível na biblioteca ou no plano atual. Quando não há metadados confiáveis, o exercício permanece como não classificado; músculos secundários não são contabilizados como séries completas.</p>'+
    (muscleRows.length?table(['Grupo principal','Sessões','Exercícios','Séries','Reps','Volume'],muscleRows):'<p class="muted">Não há séries concluídas para distribuir por grupo muscular.</p>')+
    '<h2>Exercícios mais registrados</h2>'+
    (exerciseRows.length?table(['Exercício','Sessões','Séries','Reps','Maior carga','Volume'],exerciseRows):'<p class="muted">Ainda não há séries concluídas com dados válidos.</p>')+
    '<h2>Variação de carga registrada</h2><p class="muted">Compara a primeira e a última carga positiva registrada para o mesmo exercício. É uma descrição dos registros, não uma medida isolada de força ou de hipertrofia; técnica, amplitude e equipamento podem mudar.</p>'+
    (progressionRows.length?table(['Exercício','Primeiro registro','Carga inicial','Último registro','Carga final','Diferença'],progressionRows):'<p class="muted">Não há registros comparáveis de carga para identificar variações.</p>')+
    '<h2>Qualidade e limites dos dados</h2>'+
    '<p class="muted">Séries concluídas com dados válidos: '+fmtInt(totalSets)+' de '+fmtInt(totalRawSetEntries)+' entradas de série armazenadas. Sessões sem séries concluídas associadas: '+fmtInt(sessionsWithoutSets)+'. Séries sem classificação muscular identificável: '+fmtInt(unknownGroupSets)+'. Duração da musculação soma sessões com horários válidos de até 180 minutos; '+fmtInt(durationOutliers.length)+' sessão(ões) com duração negativa ou superior a 180 minutos foram excluídas deste indicador e permanecem no histórico bruto. O histórico bruto anexado preserva rascunhos, sessões pausadas e campos não preenchidos.</p>'+
    '<h2>Histórico cardiovascular</h2>'+
    (cardioRows.length?table(['Data','Atividade','Duração','Distância','Calorias','Observações'],cardioRows.map(x=>[dateLabel(x.date),x.type||'Cardio',fmtInt(x.duration)+' min',x.distance===null||x.distance===undefined?'—':String(x.distance),x.calories===null||x.calories===undefined?'—':String(x.calories),String(x.notes||'').slice(0,120)])):'<p class="muted">Não há sessões cardiovasculares registradas neste perfil.</p>');
   const payload={
    format:'FORMA_TRAINING_HISTORY_REPORT',version:1,generatedAt:now.toISOString(),profile:{name:profileName},
    period:{start:periodStart,end:periodEnd},summary:{strengthSessions:sessions.length,cardioSessions:cardioRows.length,completedSets:totalSets,repetitions:totalReps,externalVolumeKgReps:totalVolume,trackedStrengthMinutes:strengthMinutes,cardioMinutes,activeWeeks:activeWeeks.length,longestConsecutiveActiveWeeks:longestStreak,averageSessionsPerWeek:avgSessionsPerWeek},
    analysis:{monthly:monthData.map(x=>({period:x.period,strengthSessions:x.sessions.size,cardioSessions:x.cardio,sets:x.sets,repetitions:x.reps,externalVolumeKgReps:x.volume,cardioMinutes:x.minutes})),yearly:yearData.map(x=>({period:x.period,strengthSessions:x.sessions.size,cardioSessions:x.cardio,sets:x.sets,repetitions:x.reps,externalVolumeKgReps:x.volume,cardioMinutes:x.minutes})),muscleGroups:muscleList.map(x=>({name:x.name,sessions:x.sessions.size,exercises:[...x.exercises],sets:x.sets,repetitions:x.reps,externalVolumeKgReps:x.volume})),exercises:exerciseList.map(x=>({name:x.name,sessions:x.sessions.size,sets:x.sets,repetitions:x.reps,externalVolumeKgReps:x.volume,firstDate:x.firstDate,lastDate:x.lastDate,firstLoad:x.firstLoad,lastLoad:x.lastLoad,maximumLoad:x.maxLoad,maximumRepetitions:x.maxReps})),dataQuality:{rawSetEntries:totalRawSetEntries,validCompletedSets:totalSets,sessionsWithoutCompletedSets:sessionsWithoutSets,setsWithoutPrimaryMuscleClassification:unknownGroupSets,durationIncludedSessions:durations.length,durationExcludedSessions:durationOutliers.length,durationOutliers}},
    raw:{activeSession:{active:!!state.sessionActive,id:state.sessionId||null,dayIndex:state.sessionDay??null,startedAt:state.sessionStartedAt||null,sessionDate:state.sessionDate||null},sessionHistory:safeClone(state.sessionHistory||[]),logs:safeClone(state.logs||{}),cardioSessions:safeClone(state.cardioSessions||[]),workoutCycles:safeClone(state.workoutCycles||[]),workoutCycle:safeClone(state.workoutCycle||null),progressionDecisions:safeClone(state.progressionDecisions||[]),customExercises:safeClone(state.customExercises||[]),exerciseCatalogEdits:safeClone(state.exerciseCatalogEdits||{}),exerciseFocusOverrides:safeClone(state.exerciseFocusOverrides||{}),generatedWorkoutPlan:safeClone(state.generatedWorkoutPlan||[]),activeWorkoutPlan:safeClone(workouts||[])},
    dataDictionary:{sessionHistory:'Sessões de musculação finalizadas, com snapshots dos exercícios e horários quando disponíveis.',logs:'Registros individuais por exercício; cada item sets contém carga, repetições, descanso, data, savedAt, completed e demais campos originais. Inclui rascunhos e sessões pausadas.',cardioSessions:'Sessões cardiovasculares salvas no perfil.',workoutCycles:'Ciclos de treino registrados.',progressionDecisions:'Decisões e recomendações de progressão registradas pelo FORMA.',customExercises:'Biblioteca personalizada de exercícios e metadados disponíveis.',units:{weight:'kg',duration:'min',volume:'kg·reps',rest:'seconds'},calculationRules:{completedSet:'completed=true, savedAt presente, data válida, carga numérica maior ou igual a zero e repetições maiores que zero.',externalVolume:'Soma de carga × repetições somente quando a carga é maior que zero; não representa trabalho mecânico total nem hipertrofia.',frequency:'Sessões identificadas por semana do calendário; semanas sem registro não são tratadas como treino.',muscleGroups:'Apenas o grupo principal identificado é contabilizado; grupos secundários não são duplicados.'},limitations:['Ausência de registro não significa ausência de treino.','Duração é somada apenas quando início e término estão disponíveis.','Classificação muscular depende dos metadados existentes na biblioteca ou no plano atual.','Alterações de técnica, amplitude, equipamento e execução não podem ser inferidas apenas por carga e repetições.']}
   };
   return openStructuredPdf('Relatório de treinamento','Histórico completo · análise de desempenho e consistência · PDF',summaryHtml,payload);
  }
  showStatus('Opção de exportação não reconhecida.',true);return false;
 }
 function templateObject(kind){
  if(kind==='foods')return {format:'FORMA_LIBRARY_IMPORT',version:2,foods:[{name:'Exemplo: Iogurte natural integral sem açúcar',category:'Laticínios',description:'Exemplo didático — substitua por dados reais.',brand:'Marca ilustrativa',preparation:'Pronto para consumo',k:61,p:3.5,c:4.7,f:3.3,saturated:2.1,trans:0,fiber:0,sugars:4.7,addedSugars:0,sodium:46,unit:'g',basisAmount:100,sourceType:'label',source:'Exemplo didático — substitua por fonte verificada',sourceRef:'Fabricante, edição ou URL',micronutrients:{calcium:120,iron:0.1,magnesium:12,phosphorus:95,potassium:155,zinc:0.6,copper:0.01,manganese:0.01,selenium:3,vitaminA:27,vitaminD:0.1,vitaminE:0.1,vitaminK:0.2,vitaminC:0,b1:0.04,b2:0.14,b3:0.1,b5:0.4,b6:0.03,b9:7,b12:0.4},notes:'Valores ilustrativos; não utilizar como referência nutricional.'}]};
  if(kind==='meals')return {format:'FORMA_LIBRARY_IMPORT',version:3,foods:[{key:'meal_example_yogurt',name:'Iogurte natural integral',category:'Laticínios',description:'Iogurte natural integral sem açúcar.',preparation:'Pronto para consumo',unit:'g',basisAmount:100,basisUnit:'g',k:61,p:3.5,c:4.7,f:3.3,saturated:2.1,trans:0,fiber:0,sugars:4.7,addedSugars:0,sodium:46,cholesterol:13,micronutrients:{calcium:120,iron:0.1,magnesium:12,phosphorus:95,potassium:155,zinc:0.6,copper:0.01,manganese:0.01,selenium:3,iodine:null,vitaminA:27,vitaminD:0.1,vitaminE:0.1,vitaminK:0.2,vitaminC:0,b1:0.04,b2:0.14,b3:0.1,b5:0.4,b6:0.03,b7:null,b9:7,b12:0.4},sourceType:'reference',source:'Exemplo didático — substituir por fonte verificada',sourceRef:'Informar base, edição, página ou URL',notes:'Valores ilustrativos; não utilizar como referência nutricional.'},{key:'meal_example_banana',name:'Banana-prata crua',category:'Frutas',description:'Parte comestível, sem casca.',preparation:'Crua',unit:'g',basisAmount:100,basisUnit:'g',k:98,p:1.3,c:26,f:0.1,saturated:0,trans:0,fiber:2,sugars:17,addedSugars:0,sodium:0,cholesterol:0,micronutrients:{calcium:8,iron:0.4,magnesium:26,phosphorus:22,potassium:358,zinc:0.2,copper:0.08,manganese:0.3,selenium:1,iodine:null,vitaminA:8,vitaminD:null,vitaminE:0.1,vitaminK:0.5,vitaminC:21,b1:0.04,b2:0.07,b3:0.6,b5:0.3,b6:0.37,b7:null,b9:22,b12:null},sourceType:'reference',source:'Exemplo didático — substituir por fonte verificada',sourceRef:'Informar base, edição, página ou URL',notes:'Valores ilustrativos; não utilizar como referência nutricional.'},{key:'meal_example_oats',name:'Aveia em flocos',category:'Cereais',description:'Aveia em flocos, seca.',preparation:'Seca',unit:'g',basisAmount:100,basisUnit:'g',k:394,p:13.9,c:66.6,f:8.5,saturated:1.5,trans:0,fiber:9.1,sugars:1,addedSugars:0,sodium:5,cholesterol:0,micronutrients:{calcium:48,iron:4.4,magnesium:119,phosphorus:153,potassium:336,zinc:2.6,copper:0.4,manganese:3.6,selenium:34,iodine:null,vitaminA:null,vitaminD:null,vitaminE:0.4,vitaminK:2,vitaminC:0,b1:0.46,b2:0.16,b3:1.1,b5:1.1,b6:0.1,b7:null,b9:32,b12:null},sourceType:'reference',source:'Exemplo didático — substituir por fonte verificada',sourceRef:'Informar base, edição, página ou URL',notes:'Valores ilustrativos; não utilizar como referência nutricional.'}],meals:[{name:'Exemplo: Bowl de iogurte, banana e aveia',category:'Café da manhã',description:'Refeição demonstrativa com três ingredientes cadastrados individualmente.',servings:1,yieldAmount:220,preparationTime:'5 minutos',instructions:'Fatie a banana, coloque sobre o iogurte e finalize com a aveia.',notes:'Exemplo didático. Substitua todos os valores ilustrativos por dados de fontes confiáveis.',items:[{foodKey:'meal_example_yogurt',name:'Iogurte natural integral',amount:150,unit:'g'},{foodKey:'meal_example_banana',name:'Banana-prata crua',amount:50,unit:'g'},{foodKey:'meal_example_oats',name:'Aveia em flocos',amount:20,unit:'g'}]}]};
  if(kind==='all')return {format:'FORMA_LIBRARY_IMPORT',version:1,foods:[{name:'Exemplo: Iogurte natural',k:61,p:3.5,c:4.7,f:3.3,unit:'g',basisAmount:100,sourceType:'label',source:'Exemplo didático'}],meals:[{name:'Exemplo: Café da manhã',items:[{name:'Iogurte natural',amount:170,unit:'g',k:61,p:3.5,c:4.7,f:3.3,basisAmount:100}]}]};

  if(kind==='exercises')return {format:'FORMA_EXERCISE_LIBRARY',version:1,exercises:[{name:'Exemplo: Supino na máquina',muscle:'Peito',focus:'Peitoral maior',secondary:['Tríceps','Deltoide anterior'],equipment:'Máquina articulada',type:'Composto',level:'Iniciante',pattern:'Empurrar horizontal',tips:['Ajuste o banco para alinhar as manoplas à linha média do tórax.','Mantenha escápulas apoiadas e punhos alinhados.','Empurre sem travar bruscamente os cotovelos e retorne com controle.'],errors:['Elevar os ombros durante a execução.','Usar impulso ou encurtar excessivamente a amplitude.'],alternatives:['Supino com halteres','Supino reto com barra'],sets:'3',reps:'8–12',rest:'90–120 s',notes:'Exemplo didático. Revise a adequação à pessoa e ao equipamento disponível.'}]}
  if(kind==='workout')return {format:'FORMA_WORKOUT_PLAN',version:1,name:'Exemplo — plano personalizado',objective:'Ex.: hipertrofia com manutenção da técnica',description:'Modelo didático. Personalize conforme avaliação, experiência, disponibilidade e resposta individual.',level:'Intermediário',frequency:3,duration:'8 semanas',split:'A / B / C',methodology:'Priorize amplitude tolerável, controle da fase excêntrica e progressão gradual. Evite treinar até a falha em todas as séries.',warmup:'5–8 minutos de aquecimento geral e 1–3 séries progressivas no primeiro exercício de cada grupo.',progression:'Quando atingir o topo da faixa de repetições em todas as séries com técnica consistente e RIR previsto, aumente a carga pelo menor incremento disponível.',recovery:'Mantenha intervalos de recuperação adequados entre sessões do mesmo grupo muscular e ajuste o volume conforme recuperação.',notes:'Todos os dados são exemplos didáticos. Cargas devem ser individualizadas; campos não aplicáveis podem ficar em branco.',days:[{day:'Segunda-feira',short:'SEG',title:'Peito e tríceps',focus:'Peitoral e extensores do cotovelo',duration:'50–60 min',warmup:'Aquecimento geral + séries preparatórias do primeiro exercício.',notes:'Ênfase em movimentos estáveis.',exercises:[{name:'Supino inclinado na máquina',sets:3,reps:'8–12',load:'Carga ajustada para RIR 2–3',rest:'90–120 s',cadence:'2–0–2',rir:'2–3',method:'Séries tradicionais',unilateral:false,warmupSets:'2 progressivas',progression:'Aumentar carga ao completar 12 repetições em todas as séries com técnica e RIR previstos.',notes:'Manter escápulas apoiadas e amplitude confortável.',setPrescription:[{set:1,reps:12,load:'',rir:3,type:'efetiva'},{set:2,reps:10,load:'',rir:2,type:'efetiva'},{set:3,reps:8,load:'',rir:2,type:'efetiva'}]},{name:'Tríceps na polia com corda',sets:3,reps:'10–15',load:'Carga ajustada para RIR 2',rest:'60–90 s',cadence:'2–1–2',rir:'2',method:'Séries tradicionais',unilateral:false,warmupSets:'Não necessário após o exercício anterior, se aquecido.',progression:'Aumentar carga ao atingir 15 repetições nas três séries.',notes:'Evitar movimentar os ombros.'}]},{day:'Quarta-feira',short:'QUA',title:'Costas e bíceps',focus:'Dorsais, região escapular e flexores do cotovelo',duration:'50–60 min',warmup:'Mobilidade dinâmica e séries progressivas.',notes:'Controle o tronco e a fase de retorno.',exercises:[{name:'Puxada frontal com pegada neutra',sets:3,reps:'8–12',load:'Carga de referência a definir',rest:'90–120 s',cadence:'2–1–2',rir:'2',method:'Séries tradicionais',unilateral:false,warmupSets:'2 progressivas',progression:'Progredir repetições antes da carga.',notes:'Não usar impulso nem puxar atrás da nuca.'}]},{day:'Sexta-feira',short:'SEX',title:'Pernas e ombros',focus:'Membros inferiores e deltoides',duration:'45–60 min',warmup:'Aquecimento geral e séries leves preparatórias.',notes:'Ajustar exercícios e amplitude à condição individual.',exercises:[{name:'Cadeira extensora',sets:3,reps:'10–15',load:'Carga confortável',rest:'60–90 s',cadence:'2–1–2',rir:'2–3',method:'Séries tradicionais',unilateral:false,warmupSets:'1–2 progressivas',progression:'Progredir quando completar a faixa superior com controle.',notes:'Evitar impulso e desconforto articular.'}]}],exerciseLibrary:[{name:'Supino inclinado na máquina',muscle:'Peito',focus:'Peitoral maior — porção clavicular (ênfase relativa)',secondary:['Tríceps','Deltoide anterior'],equipment:'Máquina articulada',type:'Composto',level:'Intermediário',pattern:'Empurrar horizontal inclinado',tips:['Ajustar banco e pegada para uma trajetória confortável.','Manter escápulas apoiadas e punhos alinhados.','Descer com controle e empurrar sem impulso.'],errors:['Elevar os ombros.','Perder o controle na fase excêntrica.'],alternatives:['Supino inclinado com halteres','Chest press convergente'],notes:'Cadastro demonstrativo; validar equipamento e execução.'},{name:'Tríceps na polia com corda',muscle:'Tríceps',focus:'Tríceps braquial — ênfase compartilhada',secondary:['Ancôneo'],equipment:'Polia alta e corda',type:'Isolado',level:'Iniciante',pattern:'Extensão de cotovelo',tips:['Manter cotovelos estáveis ao lado do tronco.','Estender sem hiperextensão forçada.','Retornar lentamente.'],errors:['Balançar o tronco.','Abrir os cotovelos excessivamente.'],alternatives:['Tríceps barra na polia','Tríceps unilateral na polia'],notes:'Cadastro demonstrativo; adaptar à pessoa.'}]};
  if(kind==='nutrition')return typeof nutritionPlanTemplate==='function'?nutritionPlanTemplate():{format:'FORMA_NUTRITION_PLAN',version:1,plan:{name:'Exemplo — plano nutricional',objective:'Organização alimentar',meals:[{name:'Café da manhã',time:'07:00',items:[{name:'Iogurte natural',amount:'170 g',kcal:104,protein:6,carbs:8,fat:5}]}]}};
  if(kind==='schedule')return {format:'FORMA_NUTRITION_SCHEDULE',version:1,schedule:{name:'Exemplo — cronograma alimentar',objective:'Organização das refeições',target:{kcal:2000,protein:120,carbs:230,fat:65},meals:[{name:'Café da manhã',time:'07:00',items:[{key:'iogurte_natural',g:170,snapshot:{name:'Iogurte natural',unit:'g',basisAmount:100,basisUnit:'g',k:61,p:3.5,c:4.7,f:3.3,sourceType:'template',source:'Valores ilustrativos — substitua por referência verificada'}}]}]}};
  return null;
 }
 function buildMealTemplateSummary(obj){
 const meal=obj.meals?.[0]||{},foods=Array.isArray(obj.foods)?obj.foods:[],items=Array.isArray(meal.items)?meal.items:[];
 const byKey=new Map(foods.map(f=>[String(f.key||f.foodKey||''),f])),byName=new Map(foods.map(f=>[normalizeFoodText(f.name),f]));
 const fmt=(v,u='')=>v===null||v===undefined||v===''?'Não informado':(Number.isFinite(Number(v))?Number(v).toLocaleString('pt-BR',{maximumFractionDigits:2})+' '+u:String(v));
 const fields=[['Energia','k','kcal'],['Proteínas','p','g'],['Carboidratos disponíveis','c','g'],['Gorduras totais','f','g'],['Gorduras saturadas','saturated','g'],['Gorduras trans','trans','g'],['Fibras','fiber','g'],['Açúcares totais','sugars','g'],['Açúcares adicionados','addedSugars','g'],['Sódio','sodium','mg'],['Colesterol','cholesterol','mg']];
 const micros={calcium:['Cálcio','mg'],iron:['Ferro','mg'],magnesium:['Magnésio','mg'],phosphorus:['Fósforo','mg'],potassium:['Potássio','mg'],zinc:['Zinco','mg'],copper:['Cobre','mg'],manganese:['Manganês','mg'],selenium:['Selênio','µg'],iodine:['Iodo','µg'],vitaminA:['Vitamina A','µg RAE'],vitaminD:['Vitamina D','µg'],vitaminE:['Vitamina E','mg'],vitaminK:['Vitamina K','µg'],vitaminC:['Vitamina C','mg'],b1:['Vitamina B1 · Tiamina','mg'],b2:['Vitamina B2 · Riboflavina','mg'],b3:['Vitamina B3 · Niacina','mg'],b5:['Vitamina B5 · Ácido pantotênico','mg'],b6:['Vitamina B6','mg'],b7:['Vitamina B7 · Biotina','µg'],b9:['Vitamina B9 · Folato','µg'],b12:['Vitamina B12','µg']};
 const resolved=items.map(item=>({item,food:byKey.get(String(item.foodKey||item.food_key||''))||byName.get(normalizeFoodText(item.name||''))}));
 const rows=resolved.map(({item,food})=>[item.name||food?.name||'Ingrediente',fmt(item.amount,item.unit||'g'),food?'Cadastro completo incluído':'Cadastro ausente']);
 const aggregate=(key,microKey)=>{let sum=0,complete=resolved.length>0;for(const {item,food} of resolved){const value=microKey?(food?.micronutrients||{})[microKey]:food?.[key],amount=Number(item.amount),basis=Number(food?.basisAmount)||100;if(!food||value===null||value===undefined||value===''||!Number.isFinite(Number(value))||!Number.isFinite(amount)||amount<=0){complete=false;continue;}sum+=Number(value)*amount/basis;}return complete?sum:null;};
 const portions=Number(meal.servings)||0;
 const totalRows=fields.map(([label,key,unit])=>{const total=aggregate(key);return [label,fmt(total,unit),portions>0?fmt(total===null?null:total/portions,unit):'Porções não informadas'];});
 Object.entries(micros).forEach(([key,[label,unit]])=>{const total=aggregate(null,key);totalRows.push([label,fmt(total,unit),portions>0?fmt(total===null?null:total/portions,unit):'Porções não informadas']);});
 let html='<section class="section"><div class="eyebrow">BIBLIOTECA · NUTRIÇÃO</div><h2>'+escapeHtml(meal.name||'Modelo de refeição')+'</h2><p>'+escapeHtml(meal.description||'Modelo autossuficiente de refeição e alimentos.')+'</p><div class="stats"><div class="stat"><span>Porções</span><strong>'+escapeHtml(meal.servings??'—')+'</strong></div><div class="stat"><span>Rendimento</span><strong>'+escapeHtml(meal.yieldAmount?fmt(meal.yieldAmount,'g'):'—')+'</strong></div><div class="stat"><span>Ingredientes</span><strong>'+resolved.length+'</strong></div><div class="stat"><span>Cadastros incluídos</span><strong>'+resolved.filter(x=>x.food).length+'</strong></div></div><h3>Composição da refeição</h3>'+table(['Ingrediente','Quantidade','Cadastro'],rows)+'<h3>Consolidação nutricional</h3><p class="muted">Valores calculados automaticamente a partir das quantidades utilizadas e da base nutricional de cada ingrediente. Nutrientes incompletos permanecem como não informados.</p>'+table(['Nutriente','Total da preparação','Por porção'],totalRows);
 for(let i=0;i<resolved.length;i++){const {item,food}=resolved[i];if(!food)continue;html+='<h3>Alimento '+(i+1)+' · '+escapeHtml(food.name)+'</h3><p class="muted">Quantidade na refeição: '+escapeHtml(fmt(item.amount,item.unit||'g'))+' · Base nutricional: '+escapeHtml(fmt(food.basisAmount||100,food.basisUnit||food.unit||'g'))+'</p>';const data=fields.map(([label,key,unit])=>[label,fmt(food[key],unit)]);Object.entries(micros).forEach(([key,[label,unit]])=>data.push([label,fmt(food.micronutrients?.[key],unit)]));html+=table(['Nutriente','Valor por '+(food.basisAmount||100)+' '+(food.basisUnit||food.unit||'g')],data);html+='<p class="muted">Categoria: '+escapeHtml(food.category||'Não informada')+' · Preparo: '+escapeHtml(food.preparation||'Não informado')+' · Fonte: '+escapeHtml(food.source||'Não informada')+' · Referência: '+escapeHtml(food.sourceRef||'Não informada')+'</p>';}
 html+='<h3>Modo de preparo</h3><p>'+escapeHtml(meal.instructions||'Não informado')+'</p><p class="muted">'+escapeHtml(meal.notes||'')+'</p><div class="note">Os dados do exemplo são demonstrativos. Substitua-os por valores verificados. Campo vazio ou nulo significa “não informado”, nunca zero. Os campos editáveis nas páginas seguintes são os valores lidos pelo importador; para retirar um ingrediente de exemplo, deixe sua quantidade em branco. O FORMA recalcula os totais a partir dos cadastros individuais importados. O bloco estruturado incorporado ao PDF contém todos os alimentos e seus nutrientes para importação independente.</div></section>';return html;
}
function downloadPdfTemplate(kind){
  if(kind==='bio'){const obj={format:'FORMA_BIOIMPEDANCE',version:1,bioimpedance:{date:'2026-01-15',weight:72.5,waist:85,fat:20,muscle:30,water:55,notes:'EXEMPLO DIDÁTICO — substitua pelos dados reais do seu exame.'}};const summary='<section class="section"><h2>Modelo de bioimpedância</h2><p>Este PDF contém um exemplo estruturado para edição. Substitua os valores ilustrativos pelos dados reais do exame, preserve os nomes dos campos e mantenha o bloco estruturado completo para que o FORMA reconheça a importação.</p><div class="stats"><div class="stat"><span>Peso</span><strong>72,5 kg</strong></div><div class="stat"><span>Gordura corporal</span><strong>20%</strong></div><div class="stat"><span>Massa muscular</span><strong>30 kg</strong></div><div class="stat"><span>Água corporal</span><strong>55%</strong></div></div><p class="muted">Todos os valores acima são fictícios e servem apenas para demonstrar o preenchimento.</p></section>';return openStructuredPdf('Modelo de bioimpedância','Modelo editável e compatível com importação · PDF',summary,obj);}
  const obj=templateObject(kind);if(!obj){showStatus('Modelo não encontrado.',true);return false;}
  const names={foods:'Modelo de alimentos',meals:'Modelo de refeições',all:'Modelo de alimentos e refeições',exercises:'Modelo de exercícios',workout:'Modelo de plano de treino',nutrition:'Modelo de plano nutricional',schedule:'Modelo de cronograma alimentar'};
  const summary=kind==='workout'?'<section class="section"><div class="eyebrow">TREINAMENTO · PLANO ESTRUTURADO</div><h2>'+escapeHtml(obj.name)+'</h2><p>'+escapeHtml(obj.description)+'</p><div class="stats"><div class="stat"><span>Sessões</span><strong>'+obj.days.length+'</strong></div><div class="stat"><span>Exercícios</span><strong>'+obj.days.reduce((n,d)=>n+d.exercises.length,0)+'</strong></div><div class="stat"><span>Cadastros de biblioteca</span><strong>'+obj.exerciseLibrary.length+'</strong></div><div class="stat"><span>Frequência</span><strong>'+obj.frequency+' dias/semana</strong></div></div><p class="muted">Preencha os campos editáveis de cada sessão e exercício. A ficha técnica completa de cada exercício novo está incluída ao final do documento. Os valores do exemplo são ilustrativos.</p>'+obj.days.map((d,i)=>'<section class="section"><h3>'+escapeHtml(d.day)+' · '+escapeHtml(d.title)+'</h3><p class="muted">'+escapeHtml(d.focus)+' · '+escapeHtml(d.duration)+'</p>'+table(['Exercício','Séries','Repetições','Descanso','RIR'],d.exercises.map(x=>[x.name,x.sets,x.reps,x.rest,x.rir||'—']))+'</section>').join('')+'<h3>Cadastro de exercícios</h3>'+obj.exerciseLibrary.map(x=>'<p class="muted"><strong>'+escapeHtml(x.name)+'</strong> · '+escapeHtml(x.muscle)+' · '+escapeHtml(x.equipment)+' · '+escapeHtml(x.focus)+'</p>').join('')+'</section>':kind==='meals'?buildMealTemplateSummary(obj):kind==='foods'?'<section class="section"><div class="eyebrow">BIBLIOTECA · NUTRIÇÃO</div><h2>Ficha nutricional de alimento</h2><p>Modelo oficial para cadastrar alimentos na biblioteca do FORMA. Preencha os campos conhecidos, mantendo a mesma base de referência em toda a ficha.</p><div class="stats"><div class="stat"><span>Identificação</span><strong>8 campos</strong></div><div class="stat"><span>Composição</span><strong>10 campos</strong></div><div class="stat"><span>Micronutrientes</span><strong>23 campos</strong></div></div><h3>Como preencher corretamente</h3><ul><li><strong>Obrigatórios:</strong> nome, unidade-base, energia, proteínas, carboidratos e gorduras totais.</li><li><strong>Base:</strong> prefira 100 g para sólidos e 100 ml para líquidos. Se usar outra porção, informe a quantidade exata.</li><li><strong>Micronutrientes:</strong> informe somente valores sustentados pela fonte. Campo vazio significa não informado, nunca zero.</li><li><strong>Rastreabilidade:</strong> identifique TBCA, TACO, rótulo, laboratório ou outra fonte, incluindo edição, página ou URL.</li><li><strong>Preparo:</strong> diferencie cru, cozido, assado, drenado etc. Não misture estados diferentes.</li></ul><p class="muted">Os valores preenchidos no exemplo são ilustrativos e devem ser substituídos. O PDF mantém dados estruturados para importação automática; não remova o conteúdo interno.</p></section>':kind==='exercises'?'<section class="section"><h2>'+escapeHtml(names[kind])+'</h2><p>Preencha os campos editáveis deste modelo e substitua o exemplo didático pelos dados do exercício que deseja cadastrar. Mantenha o nome do exercício e o foco muscular específico; os demais campos podem ser ajustados conforme a execução e o equipamento.</p><div class="stats"><div class="stat"><span>Classificação</span><strong>8 campos</strong></div><div class="stat"><span>Prescrição</span><strong>3 campos</strong></div><div class="stat"><span>Orientações</span><strong>4 campos</strong></div></div><p class="muted"><strong>Como preencher listas:</strong> separe grupos secundários, orientações, erros e alternativas por ponto e vírgula ou coloque cada item em uma linha. Séries, repetições e descanso são referências iniciais, ajustáveis no plano de treino.</p><p class="muted">O PDF mantém os dados estruturados para importação automática na biblioteca de exercícios do FORMA. Não remova o conteúdo estruturado incorporado ao documento.</p></section>':'<section class="section"><h2>'+escapeHtml(names[kind])+'</h2><p>Este PDF contém um exemplo estruturado para edição. Substitua os dados ilustrativos pelos seus dados reais, preserve os nomes dos campos e mantenha o bloco estruturado completo para que o FORMA possa identificar a importação.</p></section>';
  return openStructuredPdf(names[kind],'Modelo editável e compatível com importação · PDF',summary,obj);
 }
 function dispatchFile(targetId,file){
  let input=targetId?$(targetId):null;
  // Compatibilidade com telas/versões em que a entrada unificada ainda não está montada.
  if(!input&&targetId==='unifiedImportFile')input=$('importFoodsFile');
  if(!input&&targetId==='importFoodsFile')input=$('unifiedImportFile');
  if(!input)throw new Error('O importador de alimentos não está disponível nesta tela. Abra a Central de arquivos e tente novamente.');
  input.accept='.pdf,application/pdf';
  if(typeof DataTransfer==='undefined')throw new Error('Este navegador não permite encaminhar o PDF automaticamente. Atualize o navegador e tente novamente.');
  const transfer=new DataTransfer();transfer.items.add(file);input.files=transfer.files;input.dispatchEvent(new Event('change',{bubbles:true}));
 }
 function classify(text){
  const t=String(text||'').trim(),low=t.toLocaleLowerCase('pt-BR');
  let obj=null;if(/^[\[{]/.test(t)){try{obj=JSON.parse(t);}catch(_){}}
  const format=String(obj?.format||'');
  if(format==='FORMA_BIOIMPEDANCE')return 'bio';
  if(format==='FORMA-backup'||/FORMA-backup/.test(t))return 'backup';
  if(format==='FORMA_WORKOUT_PLAN'||format==='FORMA_WORKOUT_PLAN_V1')return 'workout';
  if(format==='FORMA_NUTRITION_PLAN'||format==='FORMA_NUTRITION_PLAN_V1')return 'nutrition';
  if(format==='FORMA_NUTRITION_SCHEDULE')return 'schedule';
  if(format==='FORMA_EXERCISE_LIBRARY'||Array.isArray(obj?.exercises)||Array.isArray(obj?.exercicios))return 'exercises';
  if(format==='FORMA_LIBRARY_IMPORT'||Array.isArray(obj?.foods)||Array.isArray(obj?.alimentos)||Array.isArray(obj?.meals)||Array.isArray(obj?.refeicoes))return 'library';
  if(obj&&Array.isArray(obj.days)&&(Array.isArray(obj.exercises)||obj.days.some(d=>Array.isArray(d.exercises))))return 'workout';
  if(obj&&(Array.isArray(obj.meals)||Array.isArray(obj.refeicoes))&&(obj.plan||obj.objective||obj.totals))return 'nutrition';
  if(/(?:chave_alimento|quantidade_g_ou_ml|kcal_100g|proteina_100g)/i.test(t))return 'schedule';
  if(/(?:massa muscular|percentual de gordura|gordura corporal|bioimped[aâ]ncia|body fat|body water)/i.test(low)&&/(?:peso|weight|kg|%)/i.test(low))return 'bio';
  if(/(?:s[eé]ries\s*:|repeti[cç][oõ]es\s*:|descanso\s*:)/i.test(low)&&/(?:##\s|plano de treino|treino)/i.test(low))return 'workout';
  if(/(?:quantidade\s*:|por[cç][aã]o\s*:)/i.test(low)&&/(?:kcal\s*:|prote[ií]na\s*:|carboidratos\s*:)/i.test(low)&&/(?:café da manhã|almoço|jantar|refeição)/i.test(low))return 'nutrition';
  if(/(?:focus|foco muscular|grupo muscular|equipment|equipamento)/i.test(low)&&/(?:exerc[ií]cio|exercise|nome)/i.test(low))return 'exercises';
  if(/(?:alimento|food|refei[cç][aã]o|meal)/i.test(low)&&/(?:prote[ií]na|protein|kcal|calorias)/i.test(low))return 'library';
  if(/(?:nome|name|alimento|food)/i.test(low)&&/(?:prote[ií]na|protein|kcal|calorias|carboidratos)/i.test(low))return 'library';
  if(/(?:refei[cç][aã]o|meal)/i.test(low)&&/(?:alimento|ingrediente|food)/i.test(low)&&/(?:quantidade|por[cç][aã]o|amount)/i.test(low))return 'library';
  return 'unknown';
 }
 async function handleUniversalImport(file){
  if(!file)return;
  if(file.type!=='application/pdf'&&!/\.pdf$/i.test(file.name)){showStatus('Formato não aceito. Selecione somente um arquivo PDF.',true);return;}
  if(file.size>15*1024*1024){showStatus('O PDF ultrapassa o limite de 15 MB.',true);return;}
  showStatus('Analisando o PDF e identificando o tipo de conteúdo…',false);
  try{
   const text=await readFormaImportPdfText(file),kind=classify(text);
   const labels={backup:'backup completo',workout:'plano de treino',nutrition:'plano nutricional',schedule:'cronograma alimentar',exercises:'biblioteca de exercícios',library:'alimentos e/ou refeições',bio:'laudo de bioimpedância'};
   if(kind==='unknown')throw new Error('Consegui ler o texto, mas não identifiquei com segurança a categoria. Para facilitar, organize o documento em campos identificados (por exemplo, Nome, Equipamento, Séries ou Calorias) ou em uma tabela com cabeçalhos. Se o PDF for escaneado como imagem, será necessário OCR.');
   if(kind==='bio'){
    close();if(typeof window.showTab==='function')window.showTab('inicio');
    const input=$('overviewBioFile');if(!input)throw new Error('A leitura de bioimpedância não está disponível nesta tela.');
    requestAnimationFrame(()=>{try{dispatchFile('overviewBioFile',file);}catch(err){alert(err.message);}});return;
   }
   if(kind==='workout'||kind==='nutrition'){
    let card=$(kind==='workout'?'workoutImportCard':'nutritionImportCard');
    // A Central de arquivos pode estar aberta em outra área/aba. Reative a tela proprietária
    // antes de procurar o painel, para que o componente de prévia esteja montado no DOM.
    if(!card&&typeof window.showTab==='function'){
     window.showTab(kind==='workout'?'treino':'dieta');
     card=$(kind==='workout'?'workoutImportCard':'nutritionImportCard');
    }
    if(!card)throw new Error('Não foi possível localizar o painel de prévia. Abra Treinos e tente novamente; nenhum dado foi alterado.');
    modalBody.replaceChildren(status,card);modalTitle.textContent=kind==='workout'?'Prévia do plano de treino':'Prévia do plano nutricional';modalDesc.textContent='Confira os dados reconhecidos pelo FORMA. Nada será substituído até você confirmar a importação.';modal.classList.add('open');modal.setAttribute('aria-hidden','false');
    dispatchFile(kind==='workout'?'workoutImportFile':'nutritionImportFile',file);showStatus('PDF identificado como '+labels[kind]+'. Aguarde a leitura e revise a prévia.',false);return;
   }
   if(kind==='library'){
    const importStatus=$('settingsImportStatus'),preview=$('settingsImportPreview');
    modalBody.replaceChildren(status,importStatus,preview);modalTitle.textContent='Prévia da importação';modalDesc.textContent='Confira os alimentos e as refeições encontrados. Nenhum registro será salvo até sua confirmação.';modal.classList.add('open');modal.setAttribute('aria-hidden','false');
    dispatchFile('unifiedImportFile',file);showStatus('PDF identificado como alimentos e/ou refeições. Aguarde a leitura e revise a prévia.',false);return;
   }
   if(kind==='schedule'){
    const scheduleStatus=$('nutritionScheduleStatus');if(scheduleStatus)modalBody.replaceChildren(status,scheduleStatus);
    modalTitle.textContent='Importar cronograma alimentar';modalDesc.textContent='O FORMA validará as refeições, quantidades e referências nutricionais antes de substituir o cronograma atual.';modal.classList.add('open');modal.setAttribute('aria-hidden','false');
    if(typeof window.formaImportNutritionScheduleFile!=='function')throw new Error('O importador de cronograma não está disponível.');
    await window.formaImportNutritionScheduleFile(file);showStatus('PDF identificado como cronograma alimentar. Confira o resultado da validação.',false);return;
   }
   const targets={backup:'importBackupFile',exercises:'importExercisesFile'};
   dispatchFile(targets[kind],file);close();
   if(kind==='backup')showStatus('PDF identificado como backup completo. Confira a confirmação de restauração antes de substituir os dados atuais.',false);
   else showStatus('PDF identificado como biblioteca de exercícios. O FORMA validará os registros e informará o resultado.',false);
  }catch(err){console.error('FORMA importação universal',err);showStatus(err.message||'Não foi possível analisar o PDF.',true);}
 }
 pdfInput.addEventListener('change',()=>{const file=pdfInput.files?.[0];if(file)handleUniversalImport(file);pdfInput.value='';});
 function exportChoices(){openModal('exportar');}
 window.formaOpenUniversalImport=()=>openModal('importar');
 window.formaOpenFilesModal=exportChoices;
 // O acesso antigo à importação de cardápio e aos laudos passa pela central única.
 document.addEventListener('click',e=>{
  const button=e.target.closest('#nutritionImportAction,#nutritionScheduleImportBtn');
  const template=e.target.closest('#downloadNutritionMenuPdf');
  if(button||template){e.preventDefault();e.stopImmediatePropagation();if(typeof window.showTab==='function')window.showTab('configuracoes');openModal(template?'modelos':'importar');}
 },true);
 const bioLabel=$('overviewBioFile')?.closest('.bio-dropzone');
 if(bioLabel){bioLabel.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();if(typeof window.showTab==='function')window.showTab('configuracoes');openModal('importar');},true);const small=$('overviewBioFileLabel');if(small)small.textContent='Importação centralizada · selecione o PDF na Central de arquivos';}
 $('overviewBioFile')?.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();if(typeof window.showTab==='function')window.showTab('configuracoes');openModal('importar');},true);
 // Não deixar os antigos botões de importação por categoria contornarem o fluxo único.
 ['importBackupFile','importFoodsFile','importMealsFile','importExercisesFile','nutritionImportFile','workoutImportFile','nutritionScheduleFile','bioFile','overviewBioFile'].forEach(id=>{const input=$(id);if(input)input.accept='.pdf,application/pdf';});
 const bioFile=$('bioFile');if(bioFile){bioFile.closest('.field')?.classList.add('forma-bio-import-legacy');bioFile.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();if(typeof window.showTab==='function')window.showTab('configuracoes');openModal('importar');},true);}
 setHome();
 window.formaResetFilesHome=()=>{setHome();if(home)home.hidden=false;if(routes){routes.querySelectorAll('.central-files-route').forEach(route=>route.hidden=true);routes.style.display='none';}page.dataset.centralRoute='home';};
 // Expor as rotinas necessárias aos scripts legados e aos botões inline fora desta IIFE.
 window.openStructuredPdf=openStructuredPdf;
 window.downloadPdfTemplate=downloadPdfTemplate;
 window.exportPdf=exportPdf;
 if(typeof window.exportFormaData!=='function'&&typeof exportFormaData==='function')window.exportFormaData=exportFormaData;
})();
