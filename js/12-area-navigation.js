²×hº×.¶Ø^•«-ãM4¡ý}ÛÝ›Ê×¬,function(event){
      if(event.key==="Enter"||event.key===" "){event.preventDefault();openPicker();}
    });
  }
  backdrop.addEventListener("click",function(event){
    if(event.target===backdrop){closePicker();return;}
    if(event.target.closest(".area-picker-close")){closePicker();return;}
    var choice=event.target.closest(".area-picker-choice[data-area-choice]");
    if(choice){switchArea(choice.dataset.areaChoice);closePicker();}
  });
  backdrop.addEventListener("keydown",function(event){
    if(event.key!=="Tab")return;
    var focusable=backdrop.querySelectorAll("button:not([disabled])");
    if(!focusable.length)return;
    var first=focusable[0],last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();focusSafely(last);}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();focusSafely(first);}
  });
  document.addEventListener("keydown",function(event){
    if(event.key==="Escape"&&!backdrop.hidden)closePicker();
  });

  if(menuSwitcher){
    var startX=0,startY=0,tracking=false,suppressClick=false,suppressTimer=null;
    menuSwitcher.addEventListener("pointerdown",function(event){
      if(event.button!==0)return;
      startX=event.clientX;startY=event.clientY;tracking=true;
    },{passive:true});
    document.addEventListener("pointerup",function(event){
      if(!tracking)return;
      tracking=false;
      var dx=event.clientX-startX,dy=event.clientY-startY;
      if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.25){
        suppressClick=true;
        if(suppressTimer)clearTimeout(suppressTimer);
        suppressTimer=setTimeout(function(){suppressClick=false;},450);
        switchArea(dx<0?"nutricao":"treinos");
      }
    });
    document.addEventListener("pointercancel",function(){tracking=false;});
    menuSwitcher.addEventListener("click",function(event){
      if(suppressClick){event.preventDefault();event.stopImmediatePropagation();suppressClick=false;}
    },true);
  }

  document.addEventListener("click",function(event){
    var choice=event.target.closest("#areaMenuSwitcher [data-area-choice]");
    if(choice)switchArea(choice.dataset.areaChoice);
  });

  var bodyView=document.getElementById("progressBodyView");
  var bodyStats=document.getElementById("bodyOverviewStats");
  var updatePanel=document.getElementById("updatePanel");
  var bioImport=document.getElementById("overviewBioImport");
  if(bodyView){
    var anchor=bodyStats||bodyView.querySelector(".body-progress-intro");
    if(anchor&&updatePanel)anchor.insertAdjacentElement("afterend",updatePanel);
    if(updatePanel&&bioImport)updatePanel.insertAdjacentElement("afterend",bioImport);
    else if(anchor&&bioImport)anchor.insertAdjacentElement("afterend",bioImport);
  }

  syncAreaUI();
  if(currentTab==="inicio"&&activeArea==="nutricao"&&typeof window.showTab==="function")window.showTab("nutritionOverview");
  else if(currentTab==="progresso")syncProgressTabs();
})();
