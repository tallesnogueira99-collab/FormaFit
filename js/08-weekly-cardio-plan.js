²×hº×.¶Ø^•«-ãM4¡ýwïoÊ×¬='function')applyPlan({...p,name:p.name,goal:'custom'});
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
 $('cardioAddCurrent')?.addEventListener('click',()=>{if(typeof getBuilder!=='function')return;const p=getBuilder();if(p.format!=='free'&&(!Number.isFinite(p.duration)||p.duration<5||p.duration>180)){alert('Escolha uma duraÃ§Ã£o entre 5 e 180 minutos no configurador antes de adicionar.');return;}p.id='cardioweek_'+Date.now().toString(36);p.name=p.name||p.type||'Treino cardiovascular';dayItems().push({...p});week().restDays=(week().restDays||[]).filter(d=>d!==selectedDay);safeSave();renderDays();});
 $('cardioRestDay')?.addEventListener('click',()=>{week().restDays=week().restDays||[];if(week().restDays.includes(selectedDay))week().restDays=week().restDays.filter(d=>d!==selectedDay);else week().restDays.push(selectedDay);safeSave();renderDays();});
 $('cardioDayPlan')?.addEventListener('click',e=>{
  const use=e.target.closest('[data-week-use]'),start=e.target.closest('[data-week-start]'),del=e.target.closest('[data-week-remove]');
  if(use){const p=dayItems()[Number(use.dataset.weekUse)];if(p)applyLibraryPlan(p);return;}
  if(start){const p=dayItems()[Number(start.dataset.weekStart)];if(p&&typeof startSession==='function'){startSession({...p});$('cardioWorkspace')?.scrollIntoView({behavior:'smooth',block:'start'});}return;}
  if(del){const i=Number(del.dataset.weekRemove);if(Number.isInteger(i)&&confirm('Remover este exercÃ­cio do plano semanal?')){dayItems().splice(i,1);safeSave();renderDays();}}
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
