const eras = [
 {id:"origins",label:"Ранние идеи",range:"1849–1915",short:"Истоки",events:[
  {year:"1849",title:"Воздушные шары без экипажа",summary:"Ранний пример беспилотного воздушного средства",tag:"Предыстория",text:"Во время осады Венеции австрийские силы использовали воздушные шары с боевым зарядом. Это не был управляемый самолёт: запуск и траектория зависели от ветра. Тем не менее эпизод часто упоминают как ранний пример применения беспилотных воздушных средств.",impact:"Понятие беспилотного воздушного средства появилось задолго до появления современной авиационной электроники."},
  {year:"1898",title:"Радиоуправление Николы Теслы",summary:"Демонстрация дистанционного управления",tag:"Дистанционное управление",text:"Никола Тесла публично демонстрировал радиоуправляемую модель лодки. Это была не авиационная система, но эксперимент показал принцип управления машиной на расстоянии — идею, которая позднее стала важной для беспилотных летательных аппаратов.",impact:"Радиоуправление стало одним из фундаментальных направлений развития беспилотных систем."}
 ]},
 {id:"war",label:"Первые разработки",range:"1916–1930",short:"Ранние БПЛА",events:[
  {year:"1916",title:"Экспериментальные автоматические самолёты",summary:"Первые проекты беспилотных летательных аппаратов",tag:"Автоматизация",text:"Во время Первой мировой войны инженеры в США и Европе разрабатывали летательные аппараты, способные лететь без пилота. Среди известных проектов — экспериментальный Hewitt–Sperry Automatic Airplane и британский Aerial Target. Многие ранние разработки не стали массовыми, но заложили инженерные основы.",impact:"Автоматическое управление полётом стало предметом систематических исследований."},
  {year:"1918",title:"Kettering Bug",summary:"Экспериментальный воздушный торпедный аппарат",tag:"Военные эксперименты",text:"Американский Kettering Bug был разработан как экспериментальный беспилотный аппарат с заранее заданным режимом полёта. Он использовал механические средства управления и навигации, а не современные электронные датчики. Проект показал как потенциал, так и ограничения ранней автоматизации.",impact:"Проект стал важной вехой в истории автоматических летательных аппаратов, хотя в бою не применялся."}
 ]},
 {id:"radio",label:"Радиоуправление",range:"1930–1945",short:"Радиоуправление",events:[
  {year:"1935",title:"DH.82B Queen Bee",summary:"Радиоуправляемая воздушная мишень",tag:"Радиоуправление",text:"В Великобритании самолёт de Havilland Tiger Moth адаптировали в радиоуправляемую мишень Queen Bee. Он помогал проводить учебные стрельбы без риска для пилота. С этой разработкой часто связывают популяризацию слова «drone» применительно к беспилотным аппаратам.",impact:"Радиоуправляемые мишени стали практическим и повторяемым применением беспилотной авиации."},
  {year:"1940-е",title:"Массовые воздушные мишени",summary:"Расширение учебного применения",tag:"Обучение",text:"Во время Второй мировой войны радиоуправляемые самолёты-мишени получили более широкое применение для подготовки расчётов противовоздушной обороны и испытаний. Надёжность управления и повторяемость полёта стали важными инженерными задачами.",impact:"Беспилотники закрепились как специализированный инструмент обучения и испытаний."}
 ]},
 {id:"recon",label:"Разведка и наблюдение",range:"1946–1970-е",short:"Разведка",events:[
  {year:"1950–1960-е",title:"Развитие разведывательных БПЛА",summary:"Сбор данных без пилота на борту",tag:"Разведка",text:"В послевоенные десятилетия беспилотные аппараты развивались как платформы для разведки, наблюдения и испытаний. Развитие радиосвязи, миниатюризации оборудования и систем автоматического управления расширило спектр задач, которые можно было выполнять без экипажа.",impact:"Ценность БПЛА стала определяться не только полётом, но и качеством собранной информации."},
  {year:"1960–1970-е",title:"Телеметрия и дистанционное наблюдение",summary:"Передача данных с борта",tag:"Датчики и связь",text:"Совершенствование бортовых датчиков и каналов передачи данных позволило операторам получать информацию во время полёта. Ограничения по дальности связи, времени работы и надёжности электроники при этом оставались существенными.",impact:"Появилась основа для современных систем наблюдения и дистанционного сбора данных."}
 ]},
 {id:"digital",label:"Цифровая эпоха",range:"1980–2009",short:"Цифровизация",events:[
  {year:"1980–1990-е",title:"Миниатюризация электроники",summary:"Более лёгкие датчики и вычислители",tag:"Электроника",text:"Развитие микропроцессоров, цифровых систем связи и компактных сенсоров повысило возможности беспилотных аппаратов. Автопилоты стали точнее, а обработка данных — доступнее. Параллельно совершенствовались материалы, аккумуляторы и наземные станции управления.",impact:"Технологическая база для компактных и более доступных беспилотников постепенно сформировалась."},
  {year:"1990–2000-е",title:"Спутниковая навигация и цифровые карты",summary:"Более точное определение положения",tag:"Навигация",text:"Распространение спутниковой навигации и цифровых вычислительных систем упростило удержание маршрута и планирование миссий. Возможности конкретных аппаратов зависели от качества навигационных сигналов, сенсоров и условий эксплуатации.",impact:"Полёт по заданным точкам стал важной функцией многих беспилотных систем."}
 ]},
 {id:"civil",label:"Гражданская революция",range:"2010-е — сегодня",short:"Гражданские дроны",events:[
  {year:"2010-е",title:"Компактные мультикоптеры",summary:"Дроны становятся доступнее широкой аудитории",tag:"Гражданское применение",text:"Совершенствование бесколлекторных электродвигателей, литий-полимерных аккумуляторов, камер и стабилизаторов способствовало распространению компактных квадрокоптеров. Их используют для фото- и видеосъёмки, осмотра объектов, картографии и образовательных проектов.",impact:"Беспилотная авиация вышла за пределы специализированных организаций и стала доступна многим гражданским пользователям."},
  {year:"2020-е",title:"Автономность, компьютерное зрение и новые задачи",summary:"Больше автоматизации и анализа данных",tag:"Интеллектуальные системы",text:"Современные системы всё чаще объединяют спутниковую навигацию, инерциальные датчики, компьютерное зрение и автоматическое планирование маршрута. Растёт применение в сельском хозяйстве, инспекции инфраструктуры, экологическом мониторинге и поисково-спасательных работах. Безопасная эксплуатация требует учитывать местные правила и ограничения.",impact:"Развитие отрасли всё больше зависит от программного обеспечения, качества данных, безопасности и регулирования."}
 ]}
];
const models = [
 {name:"Kettering Bug",year:"1918",category:"Исторические",kind:"Автоматический аппарат",desc:"Экспериментальный американский беспилотный летательный аппарат периода Первой мировой войны, задуманный как воздушная торпеда.",tags:["Автоматизация","История"],type:"bug"},
 {name:"DH.82B Queen Bee",year:"1935",category:"Военные",kind:"Радиоуправляемая мишень",desc:"Британский радиоуправляемый самолёт-мишень, созданный на базе Tiger Moth для обучения и тренировок.",tags:["Радиоуправление","Обучение"],type:"plane"},
 {name:"Ryan Firebee",year:"1950-е",category:"Военные",kind:"Беспилотная мишень",desc:"Семейство реактивных беспилотных мишеней, получившее широкое применение в испытаниях и подготовке.",tags:["Реактивный","Испытания"],type:"jet"},
 {name:"IAI Scout",year:"1970-е",category:"Разведка",kind:"Разведывательный БПЛА",desc:"Израильский разведывательный беспилотник, отражающий переход к более регулярному воздушному наблюдению.",tags:["Разведка","Наблюдение"],type:"plane"},
 {name:"MQ-1 Predator",year:"1990-е",category:"Разведка",kind:"Дистанционно пилотируемый самолёт",desc:"Американская платформа, ставшая широко известным примером длительного дистанционно управляемого полёта и наблюдения.",tags:["Длительный полёт","Дистанционное управление"],type:"predator"},
 {name:"DJI Phantom",year:"2013",category:"Гражданские",kind:"Потребительский квадрокоптер",desc:"Линейка квадрокоптеров, помогшая популяризировать воздушную съёмку и доступные интегрированные системы управления.",tags:["Камера","Мультикоптер"],type:"quad"},
 {name:"eBee",year:"2009+",category:"Гражданские",kind:"Картографический самолёт",desc:"Семейство лёгких беспилотников самолётного типа, применяемых для картографирования и геопространственных работ.",tags:["Картография","Крыло"],type:"wing"},
 {name:"Современный промышленный мультикоптер",year:"2010-е — сегодня",category:"Гражданские",kind:"Платформа для инспекций",desc:"Класс аппаратов, используемых для осмотра инфраструктуры, мониторинга территорий и сбора визуальных данных.",tags:["Инспекция","Сенсоры"],type:"industrial"}
];
const glossary = [
 ["БПЛА","Беспилотный летательный аппарат — летательный аппарат без пилота на борту, управление которым может осуществляться дистанционно или автоматически."],
 ["БАК","Беспилотный авиационный комплекс: аппарат и связанные с ним средства управления, связи, запуска, обслуживания и обработки данных."],
 ["Автопилот","Бортовая система, которая использует датчики и управляющие алгоритмы для стабилизации аппарата и выполнения заданных режимов полёта."],
 ["GNSS","Глобальные навигационные спутниковые системы, включая GPS и Galileo, помогающие определять положение, скорость и время."],
 ["FPV","First Person View — управление с использованием видеоизображения с борта, обычно передаваемого оператору в реальном времени."],
 ["Полезная нагрузка","Оборудование, которое аппарат несёт для выполнения задачи: камера, тепловизор, лидар, измерительный прибор или иной датчик."],
 ["Мультикоптер","Летательный аппарат с несколькими несущими винтами; распространённый пример — квадрокоптер с четырьмя роторами."],
 ["Телеметрия","Передача измеряемых параметров аппарата и полёта на наземную станцию или другую систему мониторинга."]
];
const $ = s => document.querySelector(s);
let selectedEra = eras[0].id, selectedEvent = 0, activeCategory = "Все";
const eraTabs = $("#eraTabs"), eraFilter = $("#eraFilter"), timelineList = $("#timelineList"), eventDetail = $("#eventDetail");
function renderEraControls(){
 eras.forEach((era,i)=>{const b=document.createElement("button");b.className="era-tab";b.textContent=era.label;b.dataset.era=era.id;b.role="tab";b.setAttribute("aria-selected","false");b.addEventListener("click",()=>chooseEra(era.id));eraTabs.append(b);
 const o=document.createElement("option");o.value=era.id;o.textContent=era.range+" · "+era.label;eraFilter.append(o);});
 eraFilter.addEventListener("change",()=>{if(eraFilter.value==="all"){chooseEra(eras[0].id)}else chooseEra(eraFilter.value)});
}
function currentEra(){return eras.find(e=>e.id===selectedEra)||eras[0]}
function chooseEra(id){selectedEra=id;selectedEvent=0;eraFilter.value=id;renderTimeline();eraTabs.querySelectorAll("button").forEach(b=>{let active=b.dataset.era===id;b.classList.toggle("active",active);b.setAttribute("aria-selected",String(active));});}
function renderTimeline(){
 const era=currentEra();timelineList.innerHTML="";
 era.events.forEach((event,i)=>{const b=document.createElement("button");b.className="timeline-event"+(i===selectedEvent?" active":"");b.innerHTML=`<span class="event-dot"></span><span><span class="event-year">${event.year}</span><span class="event-title">${event.title}</span><span class="event-summary">${event.summary}</span></span>`;b.addEventListener("click",()=>{selectedEvent=i;renderTimeline()});timelineList.append(b)});
 const e=era.events[selectedEvent]||era.events[0];
 eventDetail.innerHTML=`<div><span class="detail-kicker">${era.range} / ${String(selectedEvent+1).padStart(2,"0")} — ${String(era.events.length).padStart(2,"0")}</span><h3>${e.title}</h3><p>${e.text}</p></div><div><p><strong style="color:#fff">Почему это важно</strong><br>${e.impact}</p><div class="detail-bottom"><span class="detail-tag">${e.tag.toUpperCase()}</span><span class="detail-counter">${e.year}</span></div></div>`;
}
const photoByType = {
 bug:"https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=900&q=85",
 plane:"https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=85",
 jet:"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85",
 predator:"https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=900&q=85",
 quad:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=85",
 wing:"https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=85",
 industrial:"https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=900&q=85"
};
const svgByType = {
 bug:`<svg viewBox="0 0 260 130" aria-hidden="true"><g fill="none" stroke="#a8c5d6" stroke-width="2"><path d="M40 66L220 66M130 45V88M78 52L48 34M182 52L212 34"/></g><path d="M30 66L110 57L190 66L110 75Z" fill="#d6e3ea"/><path d="M112 58L165 61L194 66L165 71L112 74Z" fill="#6da1bd"/><path d="M42 66L20 54L20 78Z" fill="#92b4c8"/><circle cx="78" cy="66" r="5" fill="#83d5ff"/><circle cx="182" cy="66" r="5" fill="#83d5ff"/></svg>`,
 plane:`<svg viewBox="0 0 260 130" aria-hidden="true"><path d="M18 67L103 57L128 18L144 18L142 57L226 65L242 72L142 76L145 103L132 103L103 77L18 73Z" fill="#dce8ef"/><path d="M103 57L142 57L226 65L142 68L103 77Z" fill="#74b5d5"/><path d="M31 65L12 55L12 80L31 73Z" fill="#86c7e8"/><path d="M110 59L138 63L110 70Z" fill="#193247"/></svg>`,
 jet:`<svg viewBox="0 0 260 130" aria-hidden="true"><path d="M12 65L100 58L143 18L157 20L143 60L231 64L249 70L143 76L158 108L144 110L100 78L12 72Z" fill="#bdced8"/><path d="M99 58L143 60L231 64L143 69L100 78Z" fill="#5e8ca7"/><path d="M18 66L5 58L5 78L18 72Z" fill="#83d5ff"/><path d="M183 65L213 68L183 72Z" fill="#243e52"/></svg>`,
 predator:`<svg viewBox="0 0 260 130" aria-hidden="true"><path d="M16 65L101 59L135 25L143 26L135 60L225 64L244 69L135 75L142 91L134 92L101 77L16 72Z" fill="#d2dfe6"/><path d="M100 59L135 60L225 64L135 69L101 77Z" fill="#7099af"/><path d="M27 64L10 52L10 82L27 73Z" fill="#91c7e1"/><path d="M114 61L135 64L114 70Z" fill="#172f42"/><path d="M218 62v15" stroke="#8bdcff" stroke-width="2"/></svg>`,
 quad:`<svg viewBox="0 0 260 130" aria-hidden="true"><g stroke="#a9c2d0" stroke-width="7" stroke-linecap="round"><path d="M118 59L67 30M142 59L193 30M118 71L67 100M142 71L193 100"/></g><g fill="#20394b" stroke="#a5c7d9" stroke-width="2"><circle cx="62" cy="27" r="17"/><circle cx="198" cy="27" r="17"/><circle cx="62" cy="103" r="17"/><circle cx="198" cy="103" r="17"/></g><g fill="none" stroke="#83d5ff" stroke-width="2"><ellipse cx="62" cy="27" rx="32" ry="5"/><ellipse cx="198" cy="27" rx="32" ry="5"/><ellipse cx="62" cy="103" rx="32" ry="5"/><ellipse cx="198" cy="103" rx="32" ry="5"/></g><rect x="108" y="48" width="44" height="34" rx="10" fill="#d8e7ee"/><circle cx="130" cy="67" r="11" fill="#20394b" stroke="#83d5ff" stroke-width="3"/><circle cx="130" cy="67" r="4" fill="#83d5ff"/></svg>`,
 wing:`<svg viewBox="0 0 260 130" aria-hidden="true"><path d="M15 65L113 55L165 28L181 30L160 60L239 65L248 70L160 76L181 102L165 104L113 77L15 73Z" fill="#d6e5ec"/><path d="M112 55L160 60L239 65L160 70L113 77Z" fill="#6ca9c7"/><path d="M26 64L8 55L8 80L26 73Z" fill="#8dd9ff"/><path d="M137 59L151 65L137 71Z" fill="#18364b"/></svg>`,
 industrial:`<svg viewBox="0 0 260 130" aria-hidden="true"><g stroke="#a7c2d1" stroke-width="8" stroke-linecap="round"><path d="M117 60L72 33M143 60L188 33M117 72L72 99M143 72L188 99"/></g><g fill="#213d50" stroke="#83d5ff" stroke-width="2"><circle cx="67" cy="29" r="18"/><circle cx="193" cy="29" r="18"/><circle cx="67" cy="103" r="18"/><circle cx="193" cy="103" r="18"/></g><path d="M109 50H151L160 67L151 83H109L100 67Z" fill="#d5e3ea"/><rect x="116" y="81" width="28" height="18" rx="4" fill="#6b8da3"/><circle cx="130" cy="70" r="10" fill="#152c3d" stroke="#83d5ff" stroke-width="3"/><path d="M120 98L112 113M140 98L148 113" stroke="#b9d0dc" stroke-width="3"/></svg>`
};
function renderModels(){
 const query=$("#modelSearch").value.trim().toLowerCase();
 const visible=models.filter(m=>(activeCategory==="Все"||m.category===activeCategory)&&(`${m.name} ${m.year} ${m.category} ${m.kind} ${m.desc} ${m.tags.join(" ")}`).toLowerCase().includes(query));
 $("#modelGrid").innerHTML=visible.map((m,i)=>`<article class="model-card"><div class="model-visual"><span class="model-index">ARCHIVE / ${String(models.indexOf(m)+1).padStart(2,"0")}</span><img class="model-photo" src="${photoByType[m.type]}" alt="Фотография беспилотного летательного аппарата: ${m.name}" loading="lazy" onerror="this.style.display='none'"> <span class="model-kind">${m.category.toUpperCase()}</span></div><div class="model-content"><span class="model-year">${m.year}</span><h3>${m.name}</h3><p>${m.desc}</p><div class="model-meta">${m.tags.map(t=>`<span>${t}</span>`).join("")}</div></div></article>`).join("");
 $("#modelEmpty").hidden=visible.length>0;
}
function renderModelFilters(){
 const cats=["Все",...new Set(models.map(m=>m.category))];
 cats.forEach(cat=>{const b=document.createElement("button");b.className="filter-chip"+(cat===activeCategory?" active":"");b.textContent=cat;b.addEventListener("click",()=>{activeCategory=cat;$("#modelFilters").querySelectorAll("button").forEach(x=>x.classList.toggle("active",x.textContent===cat));renderModels()});$("#modelFilters").append(b)});
}
function renderGlossary(){const list=$("#glossaryList");glossary.forEach(([term,def],i)=>{const item=document.createElement("article");item.className="glossary-item";const button=document.createElement("button");button.className="glossary-term";button.setAttribute("aria-expanded","false");button.innerHTML=`<strong>${term}</strong><span aria-hidden="true">＋</span>`;const panel=document.createElement("div");panel.className="glossary-definition";panel.hidden=true;panel.textContent=def;button.addEventListener("click",()=>{const open=item.classList.toggle("open");button.setAttribute("aria-expanded",String(open));panel.hidden=!open});item.append(button,panel);list.append(item)})}
function searchableItems(){return [
 ...eras.flatMap(era=>era.events.map(event=>({title:event.title,desc:`${event.year} · ${event.summary} ${event.text}`,href:"#timeline",type:"Историческое событие",era:era.id}))),
 ...models.map(m=>({title:m.name,desc:`${m.year} · ${m.kind}. ${m.desc}`,href:"#models",type:"Модель"})),
 ...glossary.map(([title,desc])=>({title,desc,href:"#glossary",type:"Термин"})),
 ...[{title:"Технологии на борту",desc:"Навигация, автопилот, полезная нагрузка, автономность и ИИ.",href:"#technology",type:"Раздел"},{title:"Гражданское применение",desc:"Картография, сельское хозяйство, экология и спасательные службы.",href:"#applications",type:"Раздел"}]
]}
function runSearch(value,target){
 const q=value.trim().toLowerCase();if(!q){target.innerHTML='<p class="muted">Введите название модели, эпоху или технологию.</p>';return}
 const results=searchableItems().filter(x=>(x.title+" "+x.desc+" "+x.type).toLowerCase().includes(q)).slice(0,12);
 target.innerHTML=results.length?results.map(r=>`<a class="search-result" href="${r.href}"><strong>${r.title}</strong><small>${r.type} · ${r.desc.slice(0,180)}${r.desc.length>180?"…":""}</small></a>`).join(""):'<p class="muted">Совпадений не найдено. Попробуйте другой запрос.</p>';
 target.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{if($("#searchDialog").open)$("#searchDialog").close()}));
}
const dialog=$("#searchDialog");
$("#searchOpen").addEventListener("click",()=>{if(typeof dialog.showModal==="function")dialog.showModal();else dialog.setAttribute("open","");$("#siteSearch").focus()});
$("#searchClose").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
$("#siteSearch").addEventListener("input",e=>runSearch(e.target.value,$("#searchResults")));
$("#modelSearch").addEventListener("input",renderModels);
$("#menuToggle").addEventListener("click",()=>{const nav=$("#mainNav"),open=nav.classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open));$("#menuToggle").setAttribute("aria-label",open?"Закрыть меню":"Открыть меню")});
$("#mainNav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{$("#mainNav").classList.remove("open");$("#menuToggle").setAttribute("aria-expanded","false")}));
$("#year").textContent=new Date().getFullYear();
renderEraControls();chooseEra(eras[0].id);renderModelFilters();renderModels();renderGlossary();
