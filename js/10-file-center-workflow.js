
/* FORMA v104 — central de arquivos por tarefa, com navegação em etapas e controles originais preservados. */
(function(){
 'use strict';
 const $=id=>document.getElementById(id);
 const page=$('configuracoes');
 if(!page||page.dataset.centralV104==='true')return;
 const hero=page.querySelector('.settings-hero');
 if(!hero)return;
 page.dataset.centralV104='true';
 const oldSections=Array.from(page.querySelectorAll(':scope > .settings-section'));
 const importSection=oldSections[0], exportSection=oldSections[1], templateSection=oldSections[2];
 const originalPrivacy=page.querySelector(':scope > .settings-privacy-note');
 const workout=$('workoutImportCard'), nutrition=$('nutritionImportCard');
 const restoreBtn=$('restoreBackupSettingsBtn'), backupExportBtn=$('exportBackupSettingsBtn');
 const exportStatus=$('settingsExportStatus');
 let workoutTemplateBtnRef=null,workoutExportBtnRef=null,nutritionTemplateBtnRef=null,nutritionExportBtnRef=null;

 hero.querySelector('h2')?.replaceChildren(document.createTextNode('Central de arquivos'));
 const heroDesc=hero.querySelector('p');
 if(heroDesc)heroDesc.textContent='Importe e exporte seus dados, baixe modelos e mantenha uma cópia de segurança — tudo organizado em um só lugar.';
 const backApp=$('settingsBackBtn');
 if(backApp)backApp.textContent='← Voltar ao aplicativo';

 const shell=document.createElement('div');shell.className='central-files-shell';
 const home=document.createElement('div');home.className='central-files-home';home.setAttribute('aria-label','Ações da central de arquivos');
 const routesHost=document.createElement('div');routesHost.className='central-files-routes';
 hero.insertAdjacentElement('afterend',shell);shell.append(home,routesHost);
 const routeDefs=[
  {key:'importar',title:'Importar',desc:'Traga dados para o FORMA com validação e prévia antes de confirmar.',icon:'↓',hint:'Adicionar dados ao aplicativo'},
  {key:'exportar',title:'Exportar',desc:'Escolha os dados que deseja guardar ou utilizar em outro lugar.',icon:'↑',hint:'Salvar seus dados em arquivos'},
  {key:'modelos',title:'Modelos',desc:'Baixe arquivos de referência compatíveis com os importadores do FORMA.',icon:'▤',hint:'Preparar arquivos para preencher'},
  {key:'backup',title:'Backup completo',desc:'Crie uma cópia de segurança ou restaure um backup existente.',icon:'◇',hint:'Proteger e recuperar seus dados'}
 ];
 const routes={};
 function createRoute(def){
  const route=document.createElement('section');route.className='central-files-route';route.dataset.route=def.key;route.hidden=true;
  const head=document.createElement('div');head.className='central-route-heading';
  const back=document.createElement('button');back.type='button';back.className='central-route-back';back.innerHTML='<span aria-hidden="true">←</span> Central de arquivos';back.addEventListener('click',()=>showHome());
  const title=document.createElement('h3');title.textContent=def.title;
  const desc=document.createElement('p');desc.textContent=def.desc;
  const copy=document.createElement('div');copy.className='central-route-title-copy';copy.append(title,desc);
  head.append(back,copy);route.append(head);
  const body=document.createElement('div');body.className='central-route-body';route.append(body);
  const statusHost=document.createElement('div');statusHost.className='central-status-host';route.append(statusHost);
  routesHost.append(route);routes[def.key]={route,body,statusHost};
 }
 routeDefs.forEach(def=>{
  const card=document.createElement('button');card.type='button';card.className='central-home-card';card.dataset.openRoute=def.key;
  card.innerHTML='<span class="central-home-icon" aria-hidden="true">'+def.icon+'</span><span class="central-home-copy"><strong>'+def.title+'</strong><small>'+def.hint+'</small></span><span class="central-home-arrow" aria-hidden="true">›</span>';
  card.addEventListener('click',()=>showRoute(def.key));home.append(card);createRoute(def);
 });
 function makeCard(title,description){
  const card=document.createElement('section');card.className='central-content-card';
  const head=document.createElement('div');head.className='central-content-card-head';
  const h=document.createElement('h4');h.textContent=title;head.append(h);
  if(description){const p=document.createElement('p');p.textContent=description;head.append(p);}
  const body=document.createElement('div');body.className='central-content-card-body';card.append(head,body);return {card,body};
 }
 function hostExistingAction(button,host){if(!button)return;const action=button.closest('.settings-action')||button;host.append(action);}
 function styleExistingButton(button){if(!button)return;button.classList.add('central-existing-action');}
 function addNote(host,title,text){const note=document.createElement('div');note.className='settings-privacy-note central-note';note.innerHTML='<span aria-hidden="true">ⓘ</span><div><strong>'+title+'</strong> '+text+'</div>';host.append(note);return note;}
 function moveChildrenToRoute(nodes,routeKey){const target=routes[routeKey].body;nodes.filter(Boolean).forEach(n=>target.append(n));}

 // Importar: mantém os componentes, prévias, IDs e ouvintes já existentes.
 const foodImport=makeCard('Alimentos e refeições','Selecione um único arquivo. O FORMA identifica se ele contém alimentos, refeições ou ambos.');
 const unifiedAction=$('unifiedImportBtn')?.closest('.settings-action');
 if(unifiedAction)foodImport.body.append(unifiedAction);
 ['unifiedImportFile','settingsImportStatus','settingsImportPreview'].forEach(id=>{if($(id))foodImport.body.append($(id));});
 routes.importar.body.append(foodImport.card);
 if(workout){
  const meta=workout.querySelector('.workout-import-meta');
  const workoutActions=workout.querySelector('.workout-import-actions');
  const workoutTemplate=workoutTemplateBtnRef=$('downloadWorkoutTemplate'),workoutExport=workoutExportBtnRef=$('exportWorkoutPlan');
  if(meta){meta.classList.add('central-format-meta');workout.querySelector('.workout-import-head > div')?.append(meta);}
  workoutTemplate?.classList.add('central-existing-action');workoutExport?.classList.add('central-existing-action');
  if(workoutTemplate)workoutTemplate.dataset.centralMoved='template-workout';
  if(workoutExport)workoutExport.dataset.centralMoved='export-workout';
  workoutActions?.remove();
  routes.importar.body.append(workout);
 }
 if(nutrition){
  const meta=nutrition.querySelector('.workout-import-meta');
  const nutritionActions=nutrition.querySelector('.nutrition-import-actions');
  const nutritionTemplate=nutritionTemplateBtnRef=$('downloadNutritionTemplate'),nutritionExport=nutritionExportBtnRef=$('exportNutritionPlan');
  if(meta){meta.classList.add('central-format-meta');nutrition.querySelector('.nutrition-import-head > div')?.append(meta);}
  nutritionTemplate?.classList.add('central-existing-action');nutritionExport?.classList.add('central-existing-action');
  if(nutritionTemplate)nutritionTemplate.dataset.centralMoved='template-nutrition';
  if(nutritionExport)nutritionExport.dataset.centralMoved='export-nutrition';
  nutritionActions?.remove();
  routes.importar.body.append(nutrition);
 }
 const exerciseCard=makeCard('Biblioteca de exercícios','Importe exercícios personalizados para ampliar ou atualizar sua biblioteca. Os registros existentes são preservados quando não há correspondência para atualização.');
 const exerciseButton=document.createElement('button');exerciseButton.type='button';exerciseButton.className='btn secondary central-full-button';exerciseButton.innerHTML='<span aria-hidden="true">↑</span> Selecionar arquivo de exercícios';
 const exerciseFile=$('importExercisesFile');exerciseButton.addEventListener('click',()=>exerciseFile?.click());exerciseCard.body.append(exerciseButton);if(exerciseFile)document.body.append(exerciseFile);
 routes.importar.body.append(exerciseCard.card);
 const scheduleImportCard=makeCard('Cronograma alimentar','Importe um cronograma em PDF. O FORMA valida refeições, quantidades e dados nutricionais antes de pedir confirmação.');
 const scheduleImportButton=document.createElement('button');scheduleImportButton.type='button';scheduleImportButton.className='btn secondary central-full-button';scheduleImportButton.textContent='↑ Selecionar cronograma em PDF';
 const scheduleImportFile=document.createElement('input');scheduleImportFile.type='file';scheduleImportFile.accept='.pdf,application/pdf';scheduleImportFile.hidden=true;scheduleImportFile.setAttribute('aria-label','Selecionar cronograma em PDF');
 scheduleImportFile.addEventListener('change',()=>{const file=scheduleImportFile.files?.[0];if(file){if(typeof window.formaImportNutritionScheduleFile==='function')window.formaImportNutritionScheduleFile(file);else window.formaCentralScheduleFeedback?.('O importador de cronogramas ainda não está disponível. Recarregue o FORMA e tente novamente.',true);}scheduleImportFile.value='';});
 scheduleImportButton.addEventListener('click',()=>scheduleImportFile.click());scheduleImportCard.body.append(scheduleImportButton,scheduleImportFile);
 const scheduleImportFeedback=document.createElement('div');scheduleImportFeedback.className='food-note';scheduleImportFeedback.setAttribute('role','status');scheduleImportFeedback.setAttribute('aria-live','polite');scheduleImportFeedback.textContent='O cronograma importado substitui somente o cronograma atual. Diário, metas, biblioteca e histórico permanecem preservados.';scheduleImportCard.body.append(scheduleImportFeedback);
 window.formaCentralScheduleFeedback=(message,error=false)=>{scheduleImportFeedback.textContent=message;scheduleImportFeedback.style.color=error?'var(--danger)':'var(--muted)';scheduleImportFeedback.classList.toggle('error',!!error);};
 routes.importar.body.append(scheduleImportCard.card);
 const importNote=addNote(routes.importar.body,'Antes de confirmar:','revise a prévia e as mensagens do FORMA. Cancelar a seleção de um arquivo não modifica seus dados.');

 // Exportar: ações de alimentos, treino e plano nutricional ficam em um único lugar.
 const foodExport=makeCard('Alimentos e refeições','Escolha o formato e, em seguida, o conjunto de dados que deseja exportar.');
 const formatRow=exportSection?.querySelector('.settings-format-row');if(formatRow)foodExport.body.append(formatRow);
 const exportGrid=exportSection?.querySelector('.settings-action-grid');
 if(exportGrid){Array.from(exportGrid.querySelectorAll('[data-export-kind]')).forEach(btn=>hostExistingAction(btn,foodExport.body));}
 routes.exportar.body.append(foodExport.card);
 const workoutExportCard=makeCard('Plano de treino','Exporte o plano de musculação ativo do perfil atual em JSON.');
 const workoutExportBtn=workoutExportBtnRef;if(workoutExportBtn){styleExistingButton(workoutExportBtn);workoutExportCard.body.append(workoutExportBtn);}
 routes.exportar.body.append(workoutExportCard.card);
 const nutritionExportCard=makeCard('Plano nutricional','Exporte o plano nutricional ativo em formato estruturado ou em uma versão pronta para compartilhar.');
 const nutritionExportBtn=nutritionExportBtnRef;if(nutritionExportBtn){styleExistingButton(nutritionExportBtn);nutritionExportCard.body.append(nutritionExportBtn);}
 const nutritionPdfBtn=document.createElement('button');nutritionPdfBtn.type='button';nutritionPdfBtn.className='btn ghost central-existing-action';nutritionPdfBtn.textContent='▤ Imprimir / salvar plano em PDF';nutritionPdfBtn.addEventListener('click',()=>{exportNutritionPlanPdf();reflectActionStatus('nutritionImportStatus');});nutritionExportCard.body.append(nutritionPdfBtn);
 routes.exportar.body.append(nutritionExportCard.card);
 const workoutPdfBtn=document.createElement('button');workoutPdfBtn.type='button';workoutPdfBtn.className='btn ghost central-existing-action';workoutPdfBtn.textContent='▤ Imprimir / salvar plano em PDF';workoutPdfBtn.addEventListener('click',()=>{exportWorkoutPlanPdf();reflectActionStatus('workoutImportStatus');});workoutExportCard.body.append(workoutPdfBtn);
 const scheduleExportCard=makeCard('Cronograma alimentar','Guarde ou compartilhe o cronograma com refeições, horários, quantidades e valores nutricionais.');
 const reflectScheduleStatus=()=>setTimeout(()=>{const source=$('nutritionScheduleStatus');if(source?.textContent?.trim()&&exportStatus){exportStatus.textContent=source.textContent.trim();exportStatus.className='settings-status visible '+(source.classList.contains('error')?'error':'success');placeExportStatus('exportar');}},0);
 const mirrorAction=(label,sourceId)=>{const b=document.createElement('button');b.type='button';b.className='btn ghost central-existing-action';b.textContent=label;b.addEventListener('click',()=>{$(sourceId)?.click();reflectScheduleStatus();});scheduleExportCard.body.append(b);return b;};
 mirrorAction('↓ Exportar cronograma JSON','nutritionScheduleExport');mirrorAction('↓ Exportar planilha Excel','nutritionScheduleXlsx');mirrorAction('↓ Exportar CSV','nutritionScheduleCsv');
 const schedulePdfBtn=document.createElement('button');schedulePdfBtn.type='button';schedulePdfBtn.className='btn ghost central-existing-action';schedulePdfBtn.textContent='▤ Imprimir / salvar cronograma em PDF';schedulePdfBtn.addEventListener('click',()=>{window.formaPrintNutritionSchedule?.();reflectScheduleStatus();});scheduleExportCard.body.append(schedulePdfBtn);
 routes.exportar.body.append(scheduleExportCard.card);
 const nutritionReportExportCard=makeCard('Relatório nutricional','Exporte o resumo do período selecionado, incluindo médias, metas e registros disponíveis.');
 const reflectNutritionReportStatus=()=>setTimeout(()=>{const source=$('nutritionReportStatus');if(source?.textContent?.trim()&&exportStatus){exportStatus.textContent=source.textContent.trim();exportStatus.className='settings-status visible '+(source.classList.contains('error')?'error':'success');placeExportStatus('exportar');}},0);
 [['↓ Exportar relatório CSV','exportNutritionReportCsv'],['↓ Exportar relatório JSON','exportNutritionReportJson'],['▤ Imprimir / salvar relatório em PDF','exportNutritionReportPdf']].forEach(([label,id])=>{const b=document.createElement('button');b.type='button';b.className='btn ghost central-existing-action';b.textContent=label;b.addEventListener('click',()=>{if(id==='exportNutritionReportCsv')downloadNutritionReport('csv');else if(id==='exportNutritionReportJson')downloadNutritionReport('json');else printNutritionReport();reflectNutritionReportStatus();});nutritionReportExportCard.body.append(b);});
 routes.exportar.body.append(nutritionReportExportCard.card);

 const trainingHistoryExportCard=makeCard('Relatório analítico de treinamento','Histórico completo de musculação e cardio, evolução mensal e anual, distribuição muscular, exercícios e dados estruturados para análise por IA.');
 const trainingHistoryExportButton=document.createElement('button');trainingHistoryExportButton.type='button';trainingHistoryExportButton.className='btn ghost central-existing-action';trainingHistoryExportButton.textContent='▤ Gerar relatório completo em PDF';
 trainingHistoryExportButton.addEventListener('click',async()=>{trainingHistoryExportButton.disabled=true;trainingHistoryExportButton.textContent='Gerando relatório…';try{const result=await window.exportPdf('training');if(result!==false&&exportStatus){exportStatus.textContent='Relatório analítico de treinamento gerado. O PDF contém o histórico estruturado completo em um anexo JSON interno.';exportStatus.className='settings-status visible success';placeExportStatus('exportar');}}catch(error){console.error('FORMA relatório de treinamento',error);if(exportStatus){exportStatus.textContent='Não foi possível gerar o relatório: '+(error.message||'erro inesperado');exportStatus.className='settings-status visible error';placeExportStatus('exportar');}}finally{trainingHistoryExportButton.disabled=false;trainingHistoryExportButton.textContent='▤ Gerar relatório completo em PDF';}});
 trainingHistoryExportCard.body.append(trainingHistoryExportButton);
 routes.exportar.body.append(trainingHistoryExportCard.card);
 if(exportStatus)routes.exportar.statusHost.append(exportStatus);
 const exportNote=addNote(routes.exportar.body,'Exportar não altera seus registros:','os arquivos são gerados a partir dos dados disponíveis no perfil ativo.');

 // Modelos: só exibe opções que já têm gerador implementado no código.
 const foodTemplates=makeCard('Alimentos e refeições','Escolha um modelo simples ou um arquivo combinado.');
 const templateGrid=templateSection?.querySelector('.settings-action-grid');
 if(templateGrid){Array.from(templateGrid.querySelectorAll('[data-template-kind]')).forEach(btn=>hostExistingAction(btn,foodTemplates.body));}
 routes.modelos.body.append(foodTemplates.card);
 const workoutTemplateCard=makeCard('Plano de treino','Escolha entre um modelo legível para edição manual ou um JSON estruturado para automações e integrações.');
 const workoutTemplateBtn=workoutTemplateBtnRef;if(workoutTemplateBtn){styleExistingButton(workoutTemplateBtn);workoutTemplateCard.body.append(workoutTemplateBtn);}
 const workoutJsonTemplateBtn=document.createElement('button');workoutJsonTemplateBtn.type='button';workoutJsonTemplateBtn.className='btn ghost central-existing-action';workoutJsonTemplateBtn.textContent='↓ Baixar modelo JSON de treino';workoutJsonTemplateBtn.addEventListener('click',()=>{const sample={format:'FORMA_WORKOUT_PLAN',version:1,plan:{name:'Exemplo — plano personalizado',objective:'Ex.: hipertrofia',days:[{day:'Segunda-feira',short:'SEG',title:'Peito e tríceps',subtitle:'Ênfase em movimentos estáveis',exercises:[{name:'Supino inclinado na máquina',sets:3,reps:'8–12 reps',rest:'90–120 s'},{name:'Tríceps testa na polia',sets:3,reps:'10–12 reps',rest:'60–90 s'}]},{day:'Quarta-feira',short:'QUA',title:'Costas e bíceps',subtitle:'Puxadas e remadas',exercises:[{name:'Puxada frontal com pegada neutra',sets:3,reps:'8–12 reps',rest:'120 s'}]}]}};downloadWorkoutJson(sample,'modelo-plano-treino-forma.json');workoutImportInfo('Modelo JSON de treino baixado. Edite os dias e exercícios e importe para conferir a prévia.');reflectActionStatus('workoutImportStatus');});workoutTemplateCard.body.append(workoutJsonTemplateBtn);
 routes.modelos.body.append(workoutTemplateCard.card);
 const nutritionTemplateCard=makeCard('Plano nutricional','Baixe um modelo estruturado em JSON ou um modelo legível em Markdown. Ambos podem ser importados pelo FORMA.');
 const nutritionTemplateBtn=nutritionTemplateBtnRef;if(nutritionTemplateBtn){styleExistingButton(nutritionTemplateBtn);nutritionTemplateCard.body.append(nutritionTemplateBtn);}
 const nutritionMarkdownBtn=document.createElement('button');nutritionMarkdownBtn.type='button';nutritionMarkdownBtn.className='btn ghost central-existing-action';nutritionMarkdownBtn.textContent='↓ Baixar modelo legível Markdown';nutritionMarkdownBtn.addEventListener('click',()=>{const blob=new Blob([nutritionPlanMarkdownTemplate()],{type:'text/markdown;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='modelo-plano-nutricional-forma.md';a.rel='noopener';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);nutritionImportStatus('Modelo Markdown baixado. Edite refeições, quantidades e macros; depois importe para conferir a prévia.');reflectActionStatus('nutritionImportStatus');});nutritionTemplateCard.body.append(nutritionMarkdownBtn);
 routes.modelos.body.append(nutritionTemplateCard.card);
 const scheduleTemplateCard=makeCard('Cronograma alimentar','Modelos CSV e JSON com as colunas e estruturas exigidas. Os valores nutricionais de exemplo são ilustrativos: substitua-os por dados conferidos em rótulos ou fontes confiáveis.');
 const scheduleTemplateBtn=document.createElement('button');scheduleTemplateBtn.type='button';scheduleTemplateBtn.className='btn ghost central-existing-action';scheduleTemplateBtn.textContent='↓ Baixar modelo CSV de cronograma';scheduleTemplateBtn.addEventListener('click',()=>{$('nutritionScheduleTemplate')?.click();setTimeout(()=>{const source=$('nutritionScheduleStatus');if(source)window.formaCentralScheduleFeedback?.(source.textContent.trim(),source.classList.contains('error'));},0);});scheduleTemplateCard.body.append(scheduleTemplateBtn);
 const scheduleJsonTemplateBtn=document.createElement('button');scheduleJsonTemplateBtn.type='button';scheduleJsonTemplateBtn.className='btn ghost central-existing-action';scheduleJsonTemplateBtn.textContent='↓ Baixar modelo JSON de cronograma';scheduleJsonTemplateBtn.addEventListener('click',()=>{const sample={format:'FORMA_NUTRITION_SCHEDULE',version:1,schedule:{name:'Exemplo — cronograma alimentar',objective:'Organização das refeições',target:{kcal:2000,protein:120,carbs:230,fat:65},meals:[{name:'Café da manhã',time:'07:00',items:[{key:'aveia',g:40,snapshot:{name:'Aveia em flocos',unit:'g',basisAmount:100,basisUnit:'g',k:394,p:13.9,c:66.6,f:8.5,sourceType:'template',source:'Valores ilustrativos do modelo — substitua por referência verificada'}}],notes:''},{name:'Almoço',time:'12:30',items:[{key:'arroz_cozido',g:150,snapshot:{name:'Arroz cozido',unit:'g',basisAmount:100,basisUnit:'g',k:130,p:2.5,c:28.2,f:0.2,sourceType:'template',source:'Valores ilustrativos do modelo — substitua por referência verificada'}}],notes:''}]}};const blob=new Blob([JSON.stringify(sample,null,2)],{type:'application/json;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='modelo-cronograma-forma.json';a.rel='noopener';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);window.formaCentralScheduleFeedback?.('Modelo JSON de cronograma baixado. Edite refeições, horários e alimentos; importe para conferir a validação e a confirmação.',false);});scheduleTemplateCard.body.append(scheduleJsonTemplateBtn);
 routes.modelos.body.append(scheduleTemplateCard.card);
 if(exportStatus)routes.modelos.statusHost.append(exportStatus);
 const templateNote=addNote(routes.modelos.body,'Compatibilidade:','os modelos são editáveis e compatíveis com os importadores. Todas as importações do FORMA aceitam exclusivamente PDF com texto selecionável. PDFs escaneados exigem OCR antes de importar.');

 // Backup completo: aviso e botões originais de exportação/restauração.
 const backup=makeCard('Backup completo do FORMA','Inclui os dados de aplicativo suportados pelo backup completo. Guarde o arquivo em um local seguro.');
 const backupGrid=document.createElement('div');backupGrid.className='central-button-stack';
 hostExistingAction(restoreBtn,backupGrid);hostExistingAction(backupExportBtn,backupGrid);
 backup.body.append(backupGrid);const backupFile=$('importBackupFile');if(backupFile)backup.body.append(backupFile);routes.backup.body.append(backup.card);
 addNote(routes.backup.body,'Atenção:','restaurar um backup pode substituir os dados atuais. Confira o arquivo e leia a confirmação antes de prosseguir.');

 // As categorias são apresentadas primeiro; os controles detalhados só aparecem após a escolha.
 function setupCategoryDrilldown(routeKey,categories,note){
  const body=routes[routeKey].body;const list=document.createElement('div');list.className='central-category-list';
  const detail=document.createElement('div');detail.className='central-category-detail';detail.hidden=true;
  const detailHead=document.createElement('div');detailHead.className='central-category-detail-head';
  const detailBack=document.createElement('button');detailBack.type='button';detailBack.className='central-route-back';detailBack.innerHTML='<span aria-hidden="true">←</span> Todas as opções';
  const detailTitle=document.createElement('h4');detailTitle.textContent='';detailHead.append(detailBack,detailTitle);
  const detailContent=document.createElement('div');detailContent.className='central-category-detail-content';detail.append(detailHead,detailContent);
  detailBack.addEventListener('click',()=>{detail.hidden=true;list.hidden=false;list.querySelector('button')?.focus({preventScroll:true});});
  categories.forEach((category,index)=>{const button=document.createElement('button');button.type='button';button.className='central-category-card';button.innerHTML='<span class="central-category-icon" aria-hidden="true">'+category.icon+'</span><span class="central-category-copy"><strong>'+category.title+'</strong><small>'+category.description+'</small></span><span class="central-category-arrow" aria-hidden="true">›</span>';button.addEventListener('click',()=>{detailTitle.textContent=category.title;detailContent.replaceChildren(category.node);list.hidden=true;detail.hidden=false;detailBack.focus({preventScroll:true});});list.append(button);});
  if(note)list.append(note);body.replaceChildren(list,detail);
 }
 setupCategoryDrilldown('importar',[
  {title:'Alimentos e refeições',description:'Importe os dois tipos com um único arquivo.',icon:'＋',node:foodImport.card},
  {title:'Plano de treino',description:'Importe um treino e revise a prévia antes de substituir o plano ativo.',icon:'↻',node:workout},
  {title:'Plano nutricional',description:'Importe um plano nutricional compatível com o FORMA.',icon:'≋',node:nutrition},
  {title:'Cronograma alimentar',description:'Importe um cronograma em JSON ou CSV com validação e confirmação.',icon:'▦',node:scheduleImportCard.card},
  {title:'Exercícios',description:'Adicione ou atualize exercícios na biblioteca.',icon:'⌘',node:exerciseCard.card}
 ],importNote);
 setupCategoryDrilldown('exportar',[
  {title:'Alimentos e refeições',description:'Escolha Excel ou CSV e selecione os dados.',icon:'⇧',node:foodExport.card},
  {title:'Plano de treino',description:'Exporte o plano de musculação ativo.',icon:'↗',node:workoutExportCard.card},
  {title:'Plano nutricional',description:'Exporte o plano nutricional carregado.',icon:'≋',node:nutritionExportCard.card},
  {title:'Cronograma alimentar',description:'Exporte as refeições planejadas em JSON, Excel, CSV ou PDF.',icon:'▦',node:scheduleExportCard.card},
  {title:'Relatório nutricional',description:'Exporte médias, metas e registros em CSV, JSON ou PDF.',icon:'▤',node:nutritionReportExportCard.card}
 ],exportNote);
 setupCategoryDrilldown('modelos',[
  {title:'Alimentos e refeições',description:'Modelos individuais e arquivos combinados.',icon:'▤',node:foodTemplates.card},
  {title:'Plano de treino',description:'Baixe o modelo legível de treino.',icon:'↗',node:workoutTemplateCard.card},
  {title:'Plano nutricional',description:'Baixe modelos JSON ou Markdown.',icon:'≋',node:nutritionTemplateCard.card},
  {title:'Cronograma alimentar',description:'Baixe modelos CSV ou JSON compatíveis com a importação.',icon:'▦',node:scheduleTemplateCard.card}
 ],templateNote);

 // Remove os recipientes antigos vazios, sem excluir controles ou dados da aplicação.
 oldSections.forEach(section=>section.remove());if(originalPrivacy)originalPrivacy.remove();
 // Caso a rotina de exportação tenha movido o status, ele deve ficar no painel atualmente aberto.
 function placeExportStatus(key){if(!exportStatus)return;const host=routes[key]?.statusHost;if(host&&exportStatus.parentElement!==host)host.append(exportStatus);}
 function reflectActionStatus(sourceId){setTimeout(()=>{const source=$(sourceId);if(!source||!source.textContent.trim()||!exportStatus)return;exportStatus.textContent=source.textContent.trim();exportStatus.className='settings-status visible '+(source.classList.contains('error')?'error':'success');placeExportStatus(page.dataset.centralRoute);},0);}
 workoutExportBtnRef?.addEventListener('click',()=>reflectActionStatus('workoutImportStatus'));
 workoutTemplateBtnRef?.addEventListener('click',()=>reflectActionStatus('workoutImportStatus'));
 nutritionExportBtnRef?.addEventListener('click',()=>reflectActionStatus('nutritionImportStatus'));
 nutritionTemplateBtnRef?.addEventListener('click',()=>reflectActionStatus('nutritionImportStatus'));
 function showHome(){Object.values(routes).forEach(({route})=>route.hidden=true);home.hidden=false;page.dataset.centralRoute='home';if(backApp)backApp.hidden=false;}
 function showRoute(key){if(!routes[key])return;const previous=page.dataset.centralRoute;if(previous!==key&&exportStatus){exportStatus.textContent='';exportStatus.className='settings-status';}home.hidden=true;Object.entries(routes).forEach(([k,{route}])=>route.hidden=k!==key);page.dataset.centralRoute=key;if(backApp)backApp.hidden=false;if(key==='exportar'||key==='modelos')placeExportStatus(key);const heading=routes[key].route.querySelector('h3');heading?.setAttribute('tabindex','-1');heading?.focus({preventScroll:true});}
 page.addEventListener('keydown',e=>{if(e.key==='Escape'&&page.dataset.centralRoute&&page.dataset.centralRoute!=='home'){e.preventDefault();showHome();}});
 const oldShowTab=window.showTab;
 if(typeof oldShowTab==='function'&&!window.__forma104CentralHook){window.__forma104CentralHook=true;window.showTab=function(tab){oldShowTab.apply(this,arguments);if(tab==='configuracoes')showHome();};}
 showHome();
})();
