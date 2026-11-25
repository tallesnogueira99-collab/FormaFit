²×hº×.¶Ø^•«-ãM4¡ýµß}›Ê×¬le.cssText='';
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
  $('formaTourNext').textContent=tourIndex===tourSteps.length-1?'Concluir':'PrÃ³ximo';
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
 window.addEventListener('appinstalled',function(){if(typeof installPrompt!=='undefined')installPrompt=null;if(settings.classList.contains('open'))showInstallHelp('<strong>FORMA instalado com sucesso.</strong><br>Agora vocÃª pode abrir o aplicativo pelo Ã­cone da tela inicial.');});
})();
