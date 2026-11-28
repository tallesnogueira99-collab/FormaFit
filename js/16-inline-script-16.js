(function(){
 'use strict';
 if(window.__formaNavRestoreSettingsReturnV1)return;
 window.__formaNavRestoreSettingsReturnV1=true;
 const KEY='forma:last-active-view:v1';
 const $=id=>document.getElementById(id);
 function safeGet(){try{return sessionStorage.getItem(KEY)||'';}catch(e){return '';}}
 function safeSet(value){try{if(value)sessionStorage.setItem(KEY,value);}catch(e){}}
 function safeRemove(){try{sessionStorage.removeItem(KEY);}catch(e){}}
 function currentView(){const active=document.querySelector('.view.active');return active&&active.id&&active.id!=='configuracoes'?active.id:'';}
 function persistCurrent(){const id=currentView();if(id)safeSet(id);}
 window.formaPersistActiveView=persistCurrent;
 const baseShowTab=window.showTab;
 if(typeof baseShowTab==='function'){
  window.showTab=function(tab){
   if(tab&&tab!=='configuracoes')safeSet(tab);
   return baseShowTab.apply(this,arguments);
  };
 }
 document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')persistCurrent();});
 window.addEventListener('pagehide',persistCurrent);
 window.addEventListener('beforeunload',persistCurrent);
 const saved=safeGet();
 if(saved){
  setTimeout(function(){
   const target=$(saved);
   if(target&&typeof window.showTab==='function')window.showTab(saved);
   safeRemove();
  },120);
 }
 // Child windows launched from Settings are layered over the hub, not instead of it.
 const settingsModal=$('formaSettingsModal');
 const filesPage=$('configuracoes');
 let filesFromSettings=false;
 const openFiles=window.formaOpenFilesWindow;
 if(typeof openFiles==='function'){
  window.formaOpenFilesWindow=function(){
   if(settingsModal&&settingsModal.classList.contains('open'))filesFromSettings=true;
   return openFiles.apply(this,arguments);
  };
 }
 if(filesPage&&typeof MutationObserver==='function'){
  const observer=new MutationObserver(function(){
   if(filesFromSettings&&!filesPage.classList.contains('active')){
    filesFromSettings=false;
    setTimeout(function(){
     if(settingsModal&&typeof window.formaOpenSettings==='function')window.formaOpenSettings();
    },0);
   }
  });
  observer.observe(filesPage,{attributes:true,attributeFilter:['class']});
 }
 const refresh=$('refreshPageBtn');
 if(refresh)refresh.addEventListener('click',persistCurrent,true);
})();
