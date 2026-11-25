²×hº×.¶Ø^•«-ãM4¡ýý×Ê×¬ption:'Exporte mÃ©dias, metas e registros em CSV, JSON ou PDF.',icon:'â–¤',node:nutritionReportExportCard.card}
 ],exportNote);
 setupCategoryDrilldown('modelos',[
  {title:'Alimentos e refeiÃ§Ãµes',description:'Modelos individuais e arquivos combinados.',icon:'â–¤',node:foodTemplates.card},
  {title:'Plano de treino',description:'Baixe o modelo legÃ­vel de treino.',icon:'â†—',node:workoutTemplateCard.card},
  {title:'Plano nutricional',description:'Baixe modelos JSON ou Markdown.',icon:'â‰‹',node:nutritionTemplateCard.card},
  {title:'Cronograma alimentar',description:'Baixe modelos CSV ou JSON compatÃ­veis com a importaÃ§Ã£o.',icon:'â–¦',node:scheduleTemplateCard.card}
 ],templateNote);

 // Remove os recipientes antigos vazios, sem excluir controles ou dados da aplicaÃ§Ã£o.
 oldSections.forEach(section=>section.remove());if(originalPrivacy)originalPrivacy.remove();
 // Caso a rotina de exportaÃ§Ã£o tenha movido o status, ele deve ficar no painel atualmente aberto.
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
