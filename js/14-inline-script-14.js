(function(){
 'use strict';
 if(window.__formaFilesOverlayV1)return;
 const page=document.getElementById('configuracoes');
 if(!page)return;
 window.__formaFilesOverlayV1=true;
 const dialog=document.createElement('div');
 dialog.className='forma-files-dialog';
 dialog.setAttribute('role','dialog');
 dialog.setAttribute('aria-modal','true');
 dialog.setAttribute('aria-labelledby','settingsPageTitle');
 const nestedModal=page.querySelector('.forma-files-modal');
 const hiddenInputs=Array.from(page.querySelectorAll('input[type="file"][hidden]'));
 Array.from(page.childNodes).forEach(node=>{
  if(node===nestedModal||hiddenInputs.includes(node))return;
  dialog.appendChild(node);
 });
 page.appendChild(dialog);
 hiddenInputs.forEach(node=>page.appendChild(node));
 if(nestedModal)page.appendChild(nestedModal);
 const hero=dialog.querySelector('.settings-hero');
 const closeButton=document.createElement('button');
 closeButton.type='button';closeButton.className='forma-files-window-close';
 closeButton.setAttribute('aria-label','Fechar importação e exportação');
 closeButton.title='Fechar';closeButton.textContent='×';
 if(hero)hero.appendChild(closeButton);
 let previousOverflow='',previousFocus=null;
 const isOpen=()=>page.classList.contains('active');
 function open(){
  if(isOpen())return;
  previousFocus=document.activeElement;
  previousOverflow=document.body.style.overflow;
  window.formaResetFilesHome?.();
  page.classList.add('active');
  page.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  requestAnimationFrame(()=>closeButton.focus({preventScroll:true}));
 }
 function close(){
  if(!isOpen())return;
  const inner=document.querySelector('.forma-files-modal.open');if(inner){inner.classList.remove('open');inner.setAttribute('aria-hidden','true');}
  page.classList.remove('active');
  page.setAttribute('aria-hidden','true');
  document.body.style.overflow=previousOverflow;
  if(previousFocus&&typeof previousFocus.focus==='function')previousFocus.focus({preventScroll:true});
 }
 closeButton.addEventListener('click',close);
 dialog.querySelector('#settingsBackBtn')?.addEventListener('click',e=>{
  e.preventDefault();e.stopImmediatePropagation();close();
 },true);
 page.addEventListener('click',e=>{if(e.target===page)close();});
 document.addEventListener('keydown',e=>{
  if(e.key!=='Escape'||!isOpen())return;
  const inner=document.querySelector('.forma-files-modal.open');
  if(inner){inner.classList.remove('open');inner.setAttribute('aria-hidden','true');e.preventDefault();e.stopImmediatePropagation();}
  else close();
 },true);
 const original=window.showTab;
 if(typeof original==='function'){
  window.showTab=function(tab){
   if(tab==='configuracoes'){open();return;}
   if(isOpen())close();
   return original.apply(this,arguments);
  };
 }
 window.formaOpenFilesWindow=open;
 window.formaCloseFilesWindow=close;
 page.setAttribute('aria-hidden','true');
})();
