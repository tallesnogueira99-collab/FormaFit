≤◊h∫◊.∂ÿ^ï´-„M4°˛;„^õ ◊¨Array.isArray(obj.meals||obj.refeicoes)){
    rows=(obj.meals||obj.refeicoes).flatMap(m=>{const mealName=m.name||m.nome||m.meal_name||m.refeicao||'',items=Array.isArray(m.items)?m.items:Array.isArray(m.ingredientes)?m.ingredientes:[];return items.length?items.map(it=>Object.fromEntries(Object.entries({...it,meal_name:mealName}).map(([k,v])=>[norm(k),v]))):[{meal_name:mealName}];});
   }else rows=arr.map(r=>Object.fromEntries(Object.entries(r).map(([k,v])=>[norm(k),v])));
  }else{rows=parseFormaHumanPdfRows(content);if(!rows.length)rows=parseCsv(content);}
  const data=identifyRows(sheets,rows);
  if(!data.foods.length&&!data.mealRows.length&&!data.mealNames.length)throw new Error('N√£o consegui identificar alimentos ou refei√ß√µes. Use os modelos desta tela para conferir os cabe√ßalhos.');
  const info=previewData(data,file);showPreview(info);setStatus('settingsImportStatus','Arquivo analisado. Revise os n√∫meros e confirme somente se estiverem corretos.');
 }catch(err){console.error('FORMA an√°lise de importa√ß√£o',err);setStatus('settingsImportStatus',err.message||'N√£o foi poss√≠vel ler o arquivo.','error');}
 finally{$id('unifiedImportFile').value='';}
}
 $id('unifiedImportBtn').addEventListener('click',()=>$id('unifiedImportFile').click());$id('unifiedImportFile').addEventListener('change',e=>{const f=e.target.files?.[0];if(f)handleImport(f);});
 $id('settingsBackBtn').addEventListener('click',()=>showTab('inicio'));
 $id('restoreBackupSettingsBtn').addEventListener('click',()=>$id('importBackupFile').click());
 $id('exportBackupSettingsBtn').addEventListener('click',()=>exportFormaData());
 document.querySelectorAll('[data-export-format]').forEach(b=>b.addEventListener('click',()=>{exportFormat=b.dataset.exportFormat;document.querySelectorAll('[data-export-format]').forEach(x=>{const active=x===b;x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active));});setStatus('settingsExportStatus','Formato selecionado: '+(exportFormat==='xlsx'?'Excel (.xlsx)':'CSV (.csv)')+'.');}));
 document.querySelectorAll('[data-export-kind]').forEach(b=>b.addEventListener('click',()=>{try{if(exportFormat==='csv')downloadCsv(b.dataset.exportKind);else downloadXlsx(b.dataset.exportKind);}catch(err){console.error(err);setStatus('settingsExportStatus','N√£o foi poss√≠vel gerar o arquivo: '+err.message,'error');}}));
 document.querySelectorAll('[data-template-kind]').forEach(b=>b.addEventListener('click',()=>{try{downloadTemplate(b.dataset.templateKind);}catch(err){console.error(err);setStatus('settingsExportStatus','N√£o foi poss√≠vel gerar o modelo: '+err.message,'error');}}));
 // Expose for the settings route while preserving the existing tab navigation behavior.
 window.formaSettingsImportExport={downloadCsv,downloadXlsx,downloadTemplate,getPdfData(kind){return {foods:currentFoods(),mealRows:mealRows(),savedMeals:JSON.parse(JSON.stringify(state.savedMeals||[])),exercises:JSON.parse(JSON.stringify(state.customExercises||[]))};}};
})();
