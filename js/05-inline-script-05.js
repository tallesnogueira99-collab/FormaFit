(function(){
 function bootFormaFloatingTimer(){if(typeof initFloatingTimer==='function')initFloatingTimer();if(typeof syncFloatingTimerUI==='function')syncFloatingTimerUI();}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bootFormaFloatingTimer,{once:true});else bootFormaFloatingTimer();
})();
