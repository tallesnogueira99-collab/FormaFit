
(function(){
  "use strict";
  if(window.__formaV118AreaNavigation)return;
  window.__formaV118AreaNavigation=true;

  var appRoot=document.querySelector(".app");
  var topNav=document.querySelector(".top-tabs");
  var tabMenu=document.getElementById("tabMenu");
  var brand=document.querySelector(".brand");
  var areaMap={inicio:"treinos",treino:"treinos",sessaoTreino:"treinos",cardioRegistro:"treinos",biblioteca:"treinos",nutritionOverview:"nutricao",dieta:"nutricao",nutritionPlanning:"nutricao",nutritionLibrary:"nutricao",progresso:"shared"};
  var primaryTabs={treinos:["inicio","treino","biblioteca"],nutricao:["nutritionOverview","dieta","nutritionPlanning","nutritionLibrary"]};
  var currentTab=(document.querySelector(".view.active")||{}).id||"inicio";
  var storagePrefix="forma.navigation.v117.";
  function validArea(value){return value==="treinos"||value==="nutricao";}
  function readStored(key){try{return window.localStorage.getItem(storagePrefix+key)}catch(error){return null}}
  function writeStored(key,value){try{window.localStorage.setItem(storagePrefix+key,value)}catch(error){}}
  var savedArea=readStored("area");
  var savedTraining=readStored("treinos");
  var savedNutrition=readStored("nutricao");
  var lastTabByArea={treinos:"inicio",nutricao:"nutritionOverview"};
  if(primaryTabs.treinos.indexOf(savedTraining)>=0)lastTabByArea.treinos=savedTraining;
  if(savedNutrition==="dieta")lastTabByArea.nutricao="nutritionOverview";
  else if(primaryTabs.nutricao.indexOf(savedNutrition)>=0)lastTabByArea.nutricao=savedNutrition;
  var explicitInitialTab=currentTab!=="inicio"&&currentTab!=="progresso";
  var activeArea=explicitInitialTab&&validArea(areaMap[currentTab])?areaMap[currentTab]:(validArea(savedArea)?savedArea:"treinos");
  if(primaryTabs.treinos.indexOf(currentTab)>=0)lastTabByArea.treinos=currentTab;
  if(currentTab==="dieta")lastTabByArea.nutricao="dieta";
  if(currentTab==="sessaoTreino"||currentTab==="cardioRegistro")lastTabByArea.treinos="treino";

  var menuSwitcher=document.getElementById("areaMenuSwitcher")||document.createElement("div");
  menuSwitcher.className="area-menu-switcher";
  menuSwitcher.id="areaMenuSwitcher";
  menuSwitcher.setAttribute("role","group");
  menuSwitcher.setAttribute("aria-label","Escolher área do aplicativo");
  menuSwitcher.innerHTML=
    '<button type="button" class="area-menu-choice" data-area-choice="treinos" aria-pressed="false">'+
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8v8M3.5 10v4M18 8v8m2.5-6v4M6 12h12"/></svg><span>Treinos</span></button>'+
    '<button type="button" class="area-menu-choice" data-area-choice="nutricao" aria-pressed="false">'+
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3v7M7 3v7M4 7h3M5.5 10v11M16 3c-2.2 2.1-3 4.5-3 7v2h5V3M15.5 12v9"/></svg><span>Nutrição</span></button>';
  if(tabMenu&&!document.getElementById("areaMenuSwitcher")){
    var firstCaption=tabMenu.querySelector(".menu-caption");
    if(firstCaption)firstCaption.insertAdjacentElement("afterend",menuSwitcher);
    else tabMenu.insertBefore(menuSwitcher,tabMenu.firstChild);
    var captions=tabMenu.querySelectorAll(".menu-caption");
    if(captions[0])captions[0].textContent="ÁREA DO APLICATIVO";
    if(captions[1]){
      captions[1].id="areaTabsCaption";
      captions[1].textContent="ABAS DE TREINOS";
    }else{
      var caption=document.createElement("div");
      caption.className="menu-caption";
      caption.id="areaTabsCaption";
      caption.textContent="ABAS DE TREINOS";
      menuSwitcher.insertAdjacentElement("afterend",caption);
    }
  }

  var backdrop=document.createElement("div");
  backdrop.className="area-picker-backdrop";
  backdrop.id="formaAreaPicker";
  backdrop.hidden=true;
  backdrop.innerHTML=
    '<section class="area-picker-dialog" role="dialog" aria-modal="true" aria-labelledby="formaAreaPickerTitle" tabindex="-1">'+
      '<div class="area-picker-heading"><div><div class="eyebrow">FORMA · ESCOLHA SEU AMBIENTE</div><h2 id="formaAreaPickerTitle">Onde você quer entrar?</h2><p>Dois espaços especializados, com seu progresso e seus dados corporais integrados.</p></div><button type="button" class="area-picker-close" aria-label="Fechar seletor">×</button></div>'+
      '<div class="area-picker-grid">'+
        '<button type="button" class="area-picker-choice" data-area-choice="treinos" aria-pressed="false">'+
          '<span class="area-picker-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8v8M3.5 10v4M18 8v8m2.5-6v4M6 12h12"/></svg></span>'+
          '<strong>Treinos</strong><small>Planejamento, execução, exercícios e desempenho físico.</small><span class="area-picker-enter">Entrar na área <span aria-hidden="true">→</span></span>'+
        '</button>'+
        '<button type="button" class="area-picker-choice" data-area-choice="nutricao" aria-pressed="false">'+
          '<span class="area-picker-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3v7M7 3v7M4 7h3M5.5 10v11M16 3c-2.2 2.1-3 4.5-3 7v2h5V3M15.5 12v9"/></svg></span>'+
          '<strong>Nutrição</strong><small>Visão geral, diário, planejamento, biblioteca e evolução alimentar.</small><span class="area-picker-enter">Entrar na área <span aria-hidden="true">→</span></span>'+
        '</button>'+
      '</div>'+
      '<p class="area-picker-footnote">Progresso, histórico e informações corporais continuam conectados às duas áreas.</p>'+
    '</section>';
  document.body.appendChild(backdrop);

  function setHidden(element,hidden){if(element)element.hidden=!!hidden;}
  function syncProgressTabs(){
    var trainingTab=document.getElementById("progressTrainingTab");
    var cardioTab=document.getElementById("progressCardioTab");
    var nutritionTab=document.getElementById("progressNutritionTab");
    var bodyTab=document.getElementById("progressBodyTab");
    var isTraining=activeArea==="treinos";
    setHidden(trainingTab,!isTraining);
    setHidden(cardioTab,!isTraining);
    setHidden(nutritionTab,isTraining);
    setHidden(bodyTab,false);
    var switcher=document.querySelector("#progresso .progress-switch");
    if(switcher){
      switcher.dataset.formaArea=activeArea;
      switcher.setAttribute("aria-label",isTraining?"Progresso de treinos e corpo":"Progresso de nutrição e corpo");
    }
    var selected=document.querySelector("#progresso .progress-switch-btn[aria-selected='true']");
    if(!selected||selected.hidden){
      var fallback=isTraining?trainingTab:nutritionTab;
      if(fallback)fallback.click();
    }
  }
  function syncAreaUI(){
    document.documentElement.setAttribute("data-forma-area",activeArea);
    if(appRoot)appRoot.setAttribute("data-forma-area",activeArea);
    if(topNav)topNav.setAttribute("aria-label",activeArea==="treinos"?"Navegação da área de Treinos":"Navegação da área de Nutrição");
    document.querySelectorAll(".top-tabs .top-tab[data-tab],#tabMenu .menu-item[data-tab]").forEach(function(button){
      var tab=button.dataset.tab;
      var area=areaMap[tab];
      setHidden(button,!(area==="shared"||area===activeArea));
    });
    var caption=document.getElementById("areaTabsCaption");
    if(caption)caption.textContent=activeArea==="treinos"?"ABAS DE TREINOS":"ABAS DE NUTRIÇÃO";
    document.querySelectorAll("[data-area-choice]").forEach(function(button){
      var active=button.dataset.areaChoice===activeArea;
      button.classList.toggle("active",active);
      button.setAttribute("aria-pressed",String(active));
      if(button.classList.contains("area-picker-choice")){
        var label=button.querySelector(".area-picker-enter");
        if(label)label.textContent=active?"Área atual":"Entrar na área →";
      }
    });
    var stats=document.querySelector(".stats");
    if(stats){
      stats.classList.add("forma-training-stats");
      ["kcalTargetStat","proteinTargetStat"].forEach(function(id){
        var value=document.getElementById(id);
        var card=value&&value.closest(".stat-card");
        if(card)card.hidden=true;
      });
    }
    syncProgressTabs();
    writeStored("area",activeArea);
    writeStored("treinos",lastTabByArea.treinos);
    writeStored("nutricao",lastTabByArea.nutricao);
  }

  var originalShowTab=window.showTab;
  if(typeof originalShowTab==="function"){
    window.showTab=function(tab){
      var requestedTab=tab,actualTab=(tab==="nutritionPlanning"||tab==="nutritionLibrary")?"dieta":tab;
      var area=areaMap[requestedTab]||areaMap[actualTab];
      if(area==="treinos"||area==="nutricao"){
        activeArea=area;
        if(primaryTabs[area].indexOf(requestedTab)>=0)lastTabByArea[area]=requestedTab;
        else if(area==="treinos")lastTabByArea.treinos="treino";
      }
      var result=originalShowTab.call(this,actualTab);currentTab=requestedTab;
      if(area==="nutricao"&&requestedTab!=="nutritionOverview"&&requestedTab!=="progresso"&&typeof window.setFoodAreaSection==="function")window.setFoodAreaSection(requestedTab==="nutritionPlanning"?"schedule":requestedTab==="nutritionLibrary"?"library":"diary");
      document.querySelectorAll(".top-tabs .top-tab[data-tab],#tabMenu .menu-item[data-tab]").forEach(function(button){button.classList.toggle("active",button.dataset.tab===requestedTab);});
      syncAreaUI();if(requestedTab==="nutritionOverview"&&typeof renderNutritionOverview==="function")renderNutritionOverview();return result;
    };
  }

  function switchArea(area){
    if(!validArea(area))return;
    var tabMenu=document.getElementById("tabMenu");
    var menuTrigger=document.getElementById("menuTrigger");
    var keepTabsOpen=!!(tabMenu&&tabMenu.classList.contains("open"));
    if(activeArea===area){syncAreaUI();return;}
    activeArea=area;
    syncAreaUI();
    if(currentTab!=="progresso"){
      var target=lastTabByArea[area]||(area==="treinos"?"inicio":"nutritionOverview");
      if(currentTab!==target&&typeof window.showTab==="function")window.showTab(target);
    }
    if(keepTabsOpen&&tabMenu){
      tabMenu.classList.add("open");
      if(menuTrigger)menuTrigger.setAttribute("aria-expanded","true");
    }
  }

  var previousFocus=null;
  function focusSafely(element){
    if(!element||typeof element.focus!=="function")return;
    try{element.focus({preventScroll:true})}catch(error){element.focus()}
  }
  function openPicker(){
    if(typeof window.closeTabMenu==="function")window.closeTabMenu();
    previousFocus=document.activeElement;
    backdrop.hidden=false;
    document.body.classList.add("forma-area-picker-open");
    if(brand)brand.setAttribute("aria-expanded","true");
    focusSafely(backdrop.querySelector('[data-area-choice="'+activeArea+'"]'));
  }
  function closePicker(){
    if(backdrop.hidden)return;
    backdrop.hidden=true;
    document.body.classList.remove("forma-area-picker-open");
    if(brand)brand.setAttribute("aria-expanded","false");
    focusSafely(previousFocus||brand);
  }
  if(brand){
    brand.classList.add("area-brand-trigger");
    brand.setAttribute("role","button");
    brand.setAttribute("tabindex","0");
    brand.setAttribute("aria-label","Escolher entre Treinos e Nutrição");
    brand.setAttribute("aria-haspopup","dialog");
    brand.setAttribute("aria-controls","formaAreaPicker");
    brand.setAttribute("aria-expanded","false");
    brand.setAttribute("title","Alternar entre Treinos e Nutrição");
    brand.addEventListener("click",openPicker);
    brand.addEventListener("keydown",function(event){
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
