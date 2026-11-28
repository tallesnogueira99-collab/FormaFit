(function(){
  function openCardioView(){
    if(typeof window.showTab==='function')window.showTab('progresso');
    setTimeout(function(){document.getElementById('progressCardioTab')?.click();},0);
    try{if(typeof renderCardioHistory==='function')renderCardioHistory()}catch(err){console.error('FORMA: não foi possível atualizar o histórico de cardio',err)}
  }
  document.addEventListener('click',function(event){
    var open=event.target.closest('#openCardioLog');
    if(open){event.preventDefault();openCardioView();return}
    var back=event.target.closest('#cardioBackToPlan');
    if(back){event.preventDefault();event.stopImmediatePropagation();if(typeof window.showTab==='function')window.showTab('treino');if(typeof window.setWorkoutMode==='function')window.setWorkoutMode('cardio')}
  },true);
})();
