/* ============ DATA ============ */
const TENSES = [
  {
    n:1, time:"present", aspect:"Simple",
    en:"Present Simple", es:"Presente Simple",
    tags:["Rutinas","Hechos","Hábitos"],
    use:[
      "Rutinas y hábitos: lo que haces regularmente.",
      "Hechos generales y verdades permanentes.",
      "Horarios fijos (trenes, clases, cines).",
      "Gustos, opiniones y estados con verbos de estado."
    ],
    f:{
      aff:"Sujeto + <b>verbo</b> (3ª pers. +s/es)",
      neg:"Sujeto + <b>don't / doesn't</b> + verbo",
      int:"<b>Do / Does</b> + sujeto + verbo + ?"
    },
    ex:[
      {t:"aff",en:"She works in a hospital.",tr:"Ella trabaja en un hospital."},
      {t:"neg",en:"They don't eat meat.",tr:"Ellos no comen carne."},
      {t:"int",en:"Do you speak English?",tr:"¿Hablas inglés?"}
    ],
    kw:["always","usually","often","sometimes","never","every day","on Mondays"]
  },
  {
    n:2, time:"present", aspect:"Continuo",
    en:"Present Continuous", es:"Presente Continuo / Progresivo",
    tags:["Ahora mismo","Temporal","Planes"],
    use:[
      "Acciones que ocurren en este preciso momento.",
      "Situaciones temporales (alrededor de ahora).",
      "Planes futuros ya acordados.",
      "Tendencias y cambios en desarrollo."
    ],
    f:{
      aff:"Sujeto + <b>am/is/are</b> + verbo<b>-ing</b>",
      neg:"Sujeto + <b>am/is/are + not</b> + verbo-ing",
      int:"<b>Am/Is/Are</b> + sujeto + verbo-ing + ?"
    },
    ex:[
      {t:"aff",en:"I am studying right now.",tr:"Estoy estudiando ahora mismo."},
      {t:"neg",en:"He isn't sleeping.",tr:"Él no está durmiendo."},
      {t:"int",en:"Are they coming to the party?",tr:"¿Vienen ellos a la fiesta?"}
    ],
    kw:["now","right now","at the moment","currently","today","Look!","Listen!"]
  },
  {
    n:3, time:"present", aspect:"Perfecto",
    en:"Present Perfect", es:"Presente Perfecto",
    tags:["Experiencia","Pasado→presente","Resultado"],
    use:[
      "Experiencias de vida sin decir cuándo.",
      "Acciones pasadas con resultado/relevancia en el presente.",
      "Acciones recientes (just, already, yet).",
      "Períodos de tiempo no terminados (since, for)."
    ],
    f:{
      aff:"Sujeto + <b>have/has</b> + participio",
      neg:"Sujeto + <b>haven't/hasn't</b> + participio",
      int:"<b>Have/Has</b> + sujeto + participio + ?"
    },
    ex:[
      {t:"aff",en:"I have visited Japan.",tr:"He visitado Japón."},
      {t:"neg",en:"She hasn't finished yet.",tr:"Ella no ha terminado todavía."},
      {t:"int",en:"Have you ever flown?",tr:"¿Has volado alguna vez?"}
    ],
    kw:["already","yet","just","ever","never","since","for","so far","recently"]
  },
  {
    n:4, time:"present", aspect:"Perfecto Continuo",
    en:"Present Perfect Continuous", es:"Presente Perfecto Continuo",
    tags:["Duración","Desde / durante","Continúa"],
    use:[
      "Acción que empezó en el pasado y sigue ahora.",
      "Énfasis en la DURACIÓN de la actividad.",
      "Acciones recientes cuyo efecto aún se nota."
    ],
    f:{
      aff:"Sujeto + <b>have/has been</b> + verbo<b>-ing</b>",
      neg:"Sujeto + <b>haven't/hasn't been</b> + verbo-ing",
      int:"<b>Have/Has</b> + sujeto + <b>been</b> + verbo-ing + ?"
    },
    ex:[
      {t:"aff",en:"I have been waiting for two hours.",tr:"Llevo dos horas esperando."},
      {t:"neg",en:"It hasn't been raining all day.",tr:"No ha estado lloviendo todo el día."},
      {t:"int",en:"How long have you been working here?",tr:"¿Cuánto tiempo llevas trabajando aquí?"}
    ],
    kw:["for","since","how long","all day","lately","recently"]
  },
  {
    n:5, time:"past", aspect:"Simple",
    en:"Past Simple", es:"Pasado Simple",
    tags:["Terminado","Cuándo conocido","Secuencia"],
    use:[
      "Acciones terminadas en un momento pasado definido.",
      "Secuencia de eventos en una historia.",
      "Hábitos del pasado (junto con 'used to').",
      "Hechos históricos."
    ],
    f:{
      aff:"Sujeto + <b>verbo-ed</b> / forma irregular",
      neg:"Sujeto + <b>didn't</b> + verbo (base)",
      int:"<b>Did</b> + sujeto + verbo (base) + ?"
    },
    ex:[
      {t:"aff",en:"We watched a movie yesterday.",tr:"Vimos una película ayer."},
      {t:"neg",en:"He didn't call me.",tr:"Él no me llamó."},
      {t:"int",en:"Did she arrive on time?",tr:"¿Llegó ella a tiempo?"}
    ],
    kw:["yesterday","last week/year","ago","in 2010","when","then"]
  },
  {
    n:6, time:"past", aspect:"Continuo",
    en:"Past Continuous", es:"Pasado Continuo / Progresivo",
    tags:["En progreso","Interrumpido","Simultáneo"],
    use:[
      "Acción en progreso en un momento del pasado.",
      "Acción larga interrumpida por una corta (con Past Simple).",
      "Dos acciones simultáneas en el pasado.",
      "Describir el ambiente de una escena."
    ],
    f:{
      aff:"Sujeto + <b>was/were</b> + verbo<b>-ing</b>",
      neg:"Sujeto + <b>wasn't/weren't</b> + verbo-ing",
      int:"<b>Was/Were</b> + sujeto + verbo-ing + ?"
    },
    ex:[
      {t:"aff",en:"I was sleeping at 10 p.m.",tr:"Yo estaba durmiendo a las 10 p.m."},
      {t:"neg",en:"They weren't listening.",tr:"Ellos no estaban escuchando."},
      {t:"int",en:"What were you doing then?",tr:"¿Qué estabas haciendo entonces?"}
    ],
    kw:["while","when","as","at that moment","all day yesterday"]
  },
  {
    n:7, time:"past", aspect:"Perfecto",
    en:"Past Perfect", es:"Pasado Perfecto / Pluscuamperfecto",
    tags:["El pasado del pasado","Anterioridad"],
    use:[
      "Una acción ocurrida ANTES de otra acción pasada.",
      "El 'pasado del pasado' para ordenar eventos.",
      "Con reported speech y condicionales tipo 3."
    ],
    f:{
      aff:"Sujeto + <b>had</b> + participio",
      neg:"Sujeto + <b>hadn't</b> + participio",
      int:"<b>Had</b> + sujeto + participio + ?"
    },
    ex:[
      {t:"aff",en:"She had left before I arrived.",tr:"Ella se había ido antes de que yo llegara."},
      {t:"neg",en:"We hadn't met before.",tr:"No nos habíamos conocido antes."},
      {t:"int",en:"Had you finished by then?",tr:"¿Habías terminado para entonces?"}
    ],
    kw:["before","after","already","by the time","when","never (before)"]
  },
  {
    n:8, time:"past", aspect:"Perfecto Continuo",
    en:"Past Perfect Continuous", es:"Pasado Perfecto Continuo",
    tags:["Duración previa","Causa de un resultado"],
    use:[
      "Duración de una acción ANTES de otro momento pasado.",
      "Explica la causa de una situación pasada.",
      "Énfasis en cuánto tiempo duró la acción previa."
    ],
    f:{
      aff:"Sujeto + <b>had been</b> + verbo<b>-ing</b>",
      neg:"Sujeto + <b>hadn't been</b> + verbo-ing",
      int:"<b>Had</b> + sujeto + <b>been</b> + verbo-ing + ?"
    },
    ex:[
      {t:"aff",en:"I had been studying for hours when she called.",tr:"Llevaba horas estudiando cuando ella llamó."},
      {t:"neg",en:"He hadn't been feeling well.",tr:"Él no se había estado sintiendo bien."},
      {t:"int",en:"How long had they been living there?",tr:"¿Cuánto tiempo llevaban viviendo ahí?"}
    ],
    kw:["for","since","before","how long","when"]
  },
  {
    n:9, time:"future", aspect:"Simple",
    en:"Future Simple (will)", es:"Futuro Simple",
    tags:["Predicción","Decisión espontánea","Promesa"],
    use:[
      "Predicciones sobre el futuro.",
      "Decisiones tomadas en el momento de hablar.",
      "Promesas, ofrecimientos y peticiones.",
      "Con 'be going to' → planes/intenciones y evidencia."
    ],
    f:{
      aff:"Sujeto + <b>will</b> + verbo (base)",
      neg:"Sujeto + <b>won't</b> + verbo (base)",
      int:"<b>Will</b> + sujeto + verbo (base) + ?"
    },
    ex:[
      {t:"aff",en:"I will help you.",tr:"Te ayudaré."},
      {t:"neg",en:"It won't rain tomorrow.",tr:"No lloverá mañana."},
      {t:"int",en:"Will they come?",tr:"¿Vendrán ellos?"}
    ],
    kw:["tomorrow","next week","soon","later","probably","I think","in the future"]
  },
  {
    n:10, time:"future", aspect:"Continuo",
    en:"Future Continuous", es:"Futuro Continuo",
    tags:["En progreso (futuro)","Momento concreto"],
    use:[
      "Acción que estará en progreso en un momento futuro.",
      "Acciones futuras previstas como parte de una rutina.",
      "Preguntar de forma cortés sobre planes."
    ],
    f:{
      aff:"Sujeto + <b>will be</b> + verbo<b>-ing</b>",
      neg:"Sujeto + <b>won't be</b> + verbo-ing",
      int:"<b>Will</b> + sujeto + <b>be</b> + verbo-ing + ?"
    },
    ex:[
      {t:"aff",en:"This time tomorrow I will be flying to Madrid.",tr:"Mañana a esta hora estaré volando a Madrid."},
      {t:"neg",en:"She won't be working on Sunday.",tr:"Ella no estará trabajando el domingo."},
      {t:"int",en:"Will you be using the car later?",tr:"¿Estarás usando el coche más tarde?"}
    ],
    kw:["this time tomorrow","at 8 o'clock","in the future","soon"]
  },
  {
    n:11, time:"future", aspect:"Perfecto",
    en:"Future Perfect", es:"Futuro Perfecto",
    tags:["Terminado antes de…","Plazo futuro"],
    use:[
      "Acción que estará completada ANTES de un momento futuro.",
      "Mirar hacia atrás desde un punto del futuro."
    ],
    f:{
      aff:"Sujeto + <b>will have</b> + participio",
      neg:"Sujeto + <b>won't have</b> + participio",
      int:"<b>Will</b> + sujeto + <b>have</b> + participio + ?"
    },
    ex:[
      {t:"aff",en:"By 2030 I will have graduated.",tr:"Para 2030 me habré graduado."},
      {t:"neg",en:"They won't have arrived by noon.",tr:"No habrán llegado para el mediodía."},
      {t:"int",en:"Will you have finished by then?",tr:"¿Habrás terminado para entonces?"}
    ],
    kw:["by","by then","by the time","before","in two years"]
  },
  {
    n:12, time:"future", aspect:"Perfecto Continuo",
    en:"Future Perfect Continuous", es:"Futuro Perfecto Continuo",
    tags:["Duración hasta el futuro"],
    use:[
      "Duración de una acción hasta un momento futuro.",
      "Énfasis en cuánto tiempo se habrá estado haciendo algo."
    ],
    f:{
      aff:"Sujeto + <b>will have been</b> + verbo<b>-ing</b>",
      neg:"Sujeto + <b>won't have been</b> + verbo-ing",
      int:"<b>Will</b> + sujeto + <b>have been</b> + verbo-ing + ?"
    },
    ex:[
      {t:"aff",en:"Next month I will have been working here for five years.",tr:"El mes que viene habré trabajado aquí cinco años."},
      {t:"neg",en:"She won't have been studying long.",tr:"Ella no habrá estado estudiando mucho tiempo."},
      {t:"int",en:"How long will you have been driving?",tr:"¿Cuánto tiempo habrás estado conduciendo?"}
    ],
    kw:["by","for","by then","by the time"]
  }
];

const GROUPS = [
  {time:"present", label:"Presente", color:"var(--teal)"},
  {time:"past", label:"Pasado", color:"var(--terra)"},
  {time:"future", label:"Futuro", color:"var(--gold)"}
];
const NUMCOLOR = {present:"var(--teal)", past:"var(--terra)", future:"var(--gold)"};

/* ============ RENDER CARDS ============ */
const app = document.getElementById('app');
function render(list){
  app.innerHTML = '';
  GROUPS.forEach(g=>{
    const items = list.filter(t=>t.time===g.time);
    if(!items.length) return;
    const gl = document.createElement('div');
    gl.className='group-label';
    gl.innerHTML = `<h2>${g.label}</h2><span class="pill" style="background:${g.color}">${items.length} tiempos</span><div class="ln"></div>`;
    app.appendChild(gl);
    items.forEach(t=>app.appendChild(cardEl(t)));
  });
  document.getElementById('noRes').style.display = list.length? 'none':'block';
}
function cardEl(t){
  const numStyle = `background:${NUMCOLOR[t.time]}${t.time==='future'?';color:var(--ink)':''}`;
  const tags = t.tags.map(x=>`<span class="tag">${x}</span>`).join('');
  const uses = t.use.map(u=>`<li>${u}</li>`).join('');
  const ex = t.ex.map(e=>{
    const map={aff:['b-aff','AFF'],neg:['b-neg','NEG'],int:['b-int','INT']};
    return `<div class="item"><span class="badge ${map[e.t][0]}">${map[e.t][1]}</span>
      <span><span class="en">${e.en}</span><span class="tr">${e.tr}</span></span></div>`;
  }).join('');
  const kw = t.kw.map(k=>`<span>${k}</span>`).join('');

  const el = document.createElement('article');
  el.className='card';
  el.dataset.time=t.time;
  el.dataset.search=(t.en+' '+t.es+' '+t.use.join(' ')+' '+t.kw.join(' ')+' '+t.tags.join(' ')).toLowerCase();
  el.innerHTML = `
    <div class="card-head">
      <div class="num" style="${numStyle}">${t.n}</div>
      <div class="meta">
        <h3>${t.en}</h3>
        <div class="es">${t.es}</div>
        <div class="tag-row">${tags}</div>
      </div>
      <div class="chev"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg></div>
    </div>
    <div class="card-body">
      <div class="use-box">
        <h4>¿Cuándo se usa?</h4>
        <ul>${uses}</ul>
      </div>
      <div class="blk-title">Fórmulas</div>
      <div class="formulas">
        <div class="frow aff"><div class="lab"><span class="dot"></span>Afirmativa</div><div class="formula">${t.f.aff}</div></div>
        <div class="frow neg"><div class="lab"><span class="dot"></span>Negativa</div><div class="formula">${t.f.neg}</div></div>
        <div class="frow int"><div class="lab"><span class="dot"></span>Interrogativa</div><div class="formula">${t.f.int}</div></div>
      </div>
      <div class="blk-title">Ejemplos</div>
      <div class="ex">${ex}</div>
      <div class="blk-title">Palabras clave / expresiones de tiempo</div>
      <div class="kw">${kw}</div>
    </div>`;
  el.querySelector('.card-head').addEventListener('click',()=>el.classList.toggle('open'));
  return el;
}

/* ============ FILTER + SEARCH ============ */
let curFilter='all';
function apply(){
  const q=document.getElementById('q').value.trim().toLowerCase();
  let list=TENSES.filter(t=>curFilter==='all'||t.time===curFilter);
  if(q) list=list.filter(t=>(t.en+' '+t.es+' '+t.use.join(' ')+' '+t.kw.join(' ')+' '+t.tags.join(' ')).toLowerCase().includes(q));
  render(list);
}
document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{
  document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));
  c.classList.add('active'); curFilter=c.dataset.f; apply();
}));
document.getElementById('q').addEventListener('input',apply);

/* ============ CONJUGATOR ============ */
// verb: {base, s (3rd sing), ing, past, pp}
const VERBS=[
  {label:"to work (trabajar) · regular", base:"work", s:"works", ing:"working", past:"worked", pp:"worked"},
  {label:"to study (estudiar) · regular", base:"study", s:"studies", ing:"studying", past:"studied", pp:"studied"},
  {label:"to play (jugar) · regular", base:"play", s:"plays", ing:"playing", past:"played", pp:"played"},
  {label:"to go (ir) · irregular", base:"go", s:"goes", ing:"going", past:"went", pp:"gone"},
  {label:"to eat (comer) · irregular", base:"eat", s:"eats", ing:"eating", past:"ate", pp:"eaten"},
  {label:"to write (escribir) · irregular", base:"write", s:"writes", ing:"writing", past:"wrote", pp:"written"},
  {label:"to see (ver) · irregular", base:"see", s:"sees", ing:"seeing", past:"saw", pp:"seen"},
  {label:"to be (ser/estar) · irregular", base:"be", s:"is", ing:"being", past:"was", pp:"been", isBe:true}
];
const SUBJECTS=[
  {label:"I", p:"I", num:"sing", first:true, beP:"am", beW:"was"},
  {label:"You", p:"You", num:"plur", beP:"are", beW:"were"},
  {label:"He", p:"He", num:"sing", beP:"is", beW:"was"},
  {label:"She", p:"She", num:"sing", beP:"is", beW:"was"},
  {label:"We", p:"We", num:"plur", beP:"are", beW:"were"},
  {label:"They", p:"They", num:"plur", beP:"are", beW:"were"}
];

function conjugate(v,s){
  const third = s.num==='sing' && !s.first; // He/She get -s
  const haveP = third? "has":"have";
  const out=[];
  if(v.isBe){
    out.push(["Present Simple", `${s.p} <b>${s.beP}</b>`]);
    out.push(["Present Continuous", `${s.p} <b>${s.beP} being</b>`]);
    out.push(["Present Perfect", `${s.p} <b>${haveP} been</b>`]);
    out.push(["Present Perfect Cont.", `${s.p} <b>${haveP} been being</b>`]);
    out.push(["Past Simple", `${s.p} <b>${s.beW}</b>`]);
    out.push(["Past Continuous", `${s.p} <b>${s.beW} being</b>`]);
    out.push(["Past Perfect", `${s.p} <b>had been</b>`]);
    out.push(["Past Perfect Cont.", `${s.p} <b>had been being</b>`]);
    out.push(["Future Simple", `${s.p} <b>will be</b>`]);
    out.push(["Future Continuous", `${s.p} <b>will be being</b>`]);
    out.push(["Future Perfect", `${s.p} <b>will have been</b>`]);
    out.push(["Future Perfect Cont.", `${s.p} <b>will have been being</b>`]);
    return out;
  }
  out.push(["Present Simple", `${s.p} <b>${third?v.s:v.base}</b>`]);
  out.push(["Present Continuous", `${s.p} <b>${s.beP} ${v.ing}</b>`]);
  out.push(["Present Perfect", `${s.p} <b>${haveP} ${v.pp}</b>`]);
  out.push(["Present Perfect Cont.", `${s.p} <b>${haveP} been ${v.ing}</b>`]);
  out.push(["Past Simple", `${s.p} <b>${v.past}</b>`]);
  out.push(["Past Continuous", `${s.p} <b>${s.beW} ${v.ing}</b>`]);
  out.push(["Past Perfect", `${s.p} <b>had ${v.pp}</b>`]);
  out.push(["Past Perfect Cont.", `${s.p} <b>had been ${v.ing}</b>`]);
  out.push(["Future Simple", `${s.p} <b>will ${v.base}</b>`]);
  out.push(["Future Continuous", `${s.p} <b>will be ${v.ing}</b>`]);
  out.push(["Future Perfect", `${s.p} <b>will have ${v.pp}</b>`]);
  out.push(["Future Perfect Cont.", `${s.p} <b>will have been ${v.ing}</b>`]);
  return out;
}

const verbSel=document.getElementById('verbSel');
const subjSel=document.getElementById('subjSel');
VERBS.forEach((v,i)=>verbSel.add(new Option(v.label,i)));
SUBJECTS.forEach((s,i)=>subjSel.add(new Option(s.label,i)));
function renderConj(){
  const v=VERBS[verbSel.value], s=SUBJECTS[subjSel.value];
  const grid=document.getElementById('conjGrid');
  grid.innerHTML=conjugate(v,s).map(([nm,sent])=>
    `<div class="cc"><div class="nm">${nm}</div><div class="sent">${sent}.</div></div>`).join('');
}
verbSel.addEventListener('change',renderConj);
subjSel.addEventListener('change',renderConj);

/* ============ CEFR LEVELS ============ */
const CEFR = [
  {
    code:"A1", name:"Principiante", color:"#3d9e5f",
    desc:"Puedes comprender y usar expresiones cotidianas y frases muy básicas. Puedes presentarte a ti mismo y presentar a otras personas.",
    grammar:[
      "Verbo to be (am / is / are) en presente",
      "Pronombres personales sujeto (I, you, he, she…)",
      "Artículos indefinidos y definidos (a, an, the)",
      "Presente Simple afirmativo (frases básicas)",
      "Have / has para expresar posesión",
      "Adjetivos básicos y su posición en la oración",
      "Números, fechas y horas",
      "Preguntas con What, Where, Who, How old",
      "There is / There are",
      "Plural regular de sustantivos"
    ],
    vocabulary:[
      "Saludos y despedidas",
      "La familia y las personas del entorno",
      "Colores, números y el alfabeto",
      "Objetos del aula y del hogar",
      "Comida y bebida básica",
      "Partes del cuerpo",
      "Días de la semana, meses y estaciones",
      "Países y nacionalidades básicas"
    ],
    skills:[
      "Presentarte: nombre, edad y procedencia",
      "Deletrear tu nombre",
      "Pedir y dar información personal básica",
      "Identificar y nombrar objetos cotidianos",
      "Entender instrucciones simples del aula"
    ]
  },
  {
    code:"A2", name:"Elemental", color:"#6aaa2a",
    desc:"Puedes comunicarte en situaciones sencillas y habituales. Describes con frases simples tu entorno inmediato y asuntos de necesidad inmediata.",
    grammar:[
      "Presente Simple completo (rutinas, hechos, gustos)",
      "Presente Continuo (acciones en este momento)",
      "Pasado Simple regular e irregular básico",
      "Going to (planes e intenciones futuras)",
      "Can / Can't (habilidad y permiso)",
      "Adverbios de frecuencia (always, often, never…)",
      "Comparativos y superlativos básicos (bigger, the best)",
      "Preposiciones de tiempo y lugar (at, in, on, next to)",
      "Pronombres objeto (me, him, her, them…)",
      "Cuantificadores (some, any, much, many, a lot of)"
    ],
    vocabulary:[
      "Rutinas diarias y actividades habituales",
      "Ropa, moda y descripción personal",
      "Transporte y viajes básicos",
      "Profesiones y lugares de trabajo",
      "Tiempo libre y deportes",
      "El cuerpo y la salud básica",
      "La ciudad: lugares y servicios",
      "Describir la casa y la habitación"
    ],
    skills:[
      "Describir tu rutina diaria",
      "Hablar de tu familia y tu entorno",
      "Pedir y dar direcciones sencillas",
      "Comprar en tiendas y pedir en restaurantes",
      "Hablar de planes próximos e intenciones"
    ]
  },
  {
    code:"B1", name:"Intermedio", color:"#1976d2",
    desc:"Puedes desenvolverte en la mayoría de situaciones cotidianas. Produces textos sencillos y coherentes sobre temas conocidos y describes experiencias y deseos.",
    grammar:[
      "Presente Perfecto (experiencias, noticias recientes, since / for)",
      "Used to (hábitos y estados pasados que ya no existen)",
      "Will y Going to (predicciones, planes, decisiones)",
      "Modales: should, must, might, could, need to",
      "Condicional 0 y 1 (situaciones reales y posibles)",
      "Oraciones relativas (who, which, that, where)",
      "Voz pasiva básica (is made / was built)",
      "Verbos + gerundio o infinitivo (enjoy doing / want to do)",
      "Reported speech básico (said, told, asked)",
      "Conectores avanzados (however, although, in spite of)"
    ],
    vocabulary:[
      "El mundo laboral y las profesiones",
      "Los medios de comunicación y la prensa",
      "Medio ambiente y naturaleza",
      "Viajes, turismo y transporte",
      "Tecnología cotidiana",
      "Salud y estilos de vida",
      "Noticias y eventos del mundo actual",
      "Emociones, sentimientos y relaciones"
    ],
    skills:[
      "Narrar experiencias pasadas con detalle",
      "Expresar y justificar opiniones propias",
      "Comprender textos escritos cotidianos",
      "Participar en conversaciones conocidas con fluidez básica",
      "Escribir emails, cartas y textos sencillos"
    ]
  },
  {
    code:"B2", name:"Intermedio Alto", color:"#1a4d9e",
    desc:"Puedes interactuar con fluidez y espontaneidad con hablantes nativos. Produces textos claros y detallados sobre una amplia variedad de temas, explicando ventajas e inconvenientes.",
    grammar:[
      "Presente Perfecto Continuo (duración hasta el presente)",
      "Pasado Perfecto Simple y Continuo",
      "Condicional 2 y 3 (hipotético y contrafactual)",
      "Voz pasiva avanzada y causativa (have/get something done)",
      "Reported speech completo (todos los tiempos)",
      "Modales de deducción (must/can't/might + have done)",
      "Oraciones de relativo especificativas y explicativas",
      "Inversión enfática (Never have I seen… / Rarely does she…)",
      "Phrasal verbs y verbos con preposición de uso frecuente",
      "Marcadores del discurso avanzados (nevertheless, whereas…)"
    ],
    vocabulary:[
      "Problemas sociales y debate de ideas",
      "Tecnología e innovación digital",
      "Arte, literatura y cultura contemporánea",
      "Economía y negocios básicos",
      "Política y ciudadanía",
      "Idioms y expresiones idiomáticas frecuentes",
      "Colocaciones léxicas comunes (make a decision, take a risk)",
      "Vocabulario académico básico (Academic Word List)"
    ],
    skills:[
      "Debatir y argumentar con matiz y precisión",
      "Comprender documentales, conferencias y entrevistas",
      "Escribir ensayos argumentativos y correos formales",
      "Entender el humor, la ironía y la implicatura",
      "Adaptar el registro según el contexto (formal / informal)"
    ]
  },
  {
    code:"C1", name:"Avanzado", color:"#7b1fa2",
    desc:"Puedes expresarte con fluidez, espontaneidad y precisión sobre temas complejos. Usas el idioma de forma flexible para fines sociales, académicos y profesionales.",
    grammar:[
      "Condicionales mixtos y todas sus variantes",
      "Cláusulas hendidas — cleft sentences (It was… that / What… is)",
      "Subjuntivo formal (I suggest that he be…)",
      "Voz pasiva con todos los tiempos y modales",
      "Inversión enfática avanzada (Had I known… / Were it not for…)",
      "Elipsis y sustitución gramatical",
      "Construcciones nominales y gerundivas avanzadas",
      "Verbos modales perfectos (should/could/would have done)",
      "Marcadores del discurso sofisticados (notwithstanding, thereby…)",
      "Reported speech: todas las estructuras y verbos de reporte"
    ],
    vocabulary:[
      "Vocabulario académico completo (AWL + OALD avanzado)",
      "Colocaciones y expresiones fijas avanzadas",
      "Idioms y frases hechas en contexto natural",
      "Lenguaje figurado, metáforas y recursos retóricos",
      "Vocabulario de especialidad (legal, médico, científico…)",
      "Registros lingüísticos y variación estilística",
      "Connotaciones y matices semánticos",
      "Neologismos y vocabulario contemporáneo"
    ],
    skills:[
      "Comunicarte con precisión y riqueza léxica",
      "Comprender textos académicos, literarios y técnicos",
      "Redactar con argumentación sofisticada y estructura clara",
      "Entender acentos y variedades regionales del inglés",
      "Participar en reuniones, debates y negociaciones profesionales"
    ]
  },
  {
    code:"C2", name:"Maestría", color:"#37474f",
    desc:"Dominas el idioma con la fluidez y precisión de un hablante nativo culto. Puedes integrar y reconstruir información de múltiples fuentes con total coherencia y naturalidad.",
    grammar:[
      "Dominio pleno y automático de toda la gramática",
      "Uso natural sin esfuerzo consciente de ninguna regla",
      "Creatividad lingüística: juego de palabras y ambigüedad",
      "Comprensión de dialectos, sociolectos y registro histórico",
      "Pragmática avanzada: implicatura y actos de habla implícitos",
      "Variación diacrónica (arcaísmos, Early Modern English)",
      "Corrección automática y autoevaluación metalingüística",
      "Dominio de todos los géneros textuales y registros"
    ],
    vocabulary:[
      "Vocabulario nativo activo en todas las áreas temáticas",
      "Argot, coloquialismos y jerga nativa en contexto",
      "Textos literarios y poéticos de cualquier registro",
      "Lenguaje especializado en múltiples dominios técnicos",
      "Humor, sarcasmo, ironía y subtexto cultural",
      "Fraseología avanzada, proverbios y expresiones fijas raras",
      "Etimología e historia de las palabras",
      "Vocabulario de nicho y tecnicismos de alta especialización"
    ],
    skills:[
      "Comunicarte de forma indistinguible a un hablante nativo",
      "Comprender cualquier texto escrito u oral sin dificultad",
      "Crear textos de alta complejidad técnica o literaria",
      "Mediar e interpretar entre registros y culturas",
      "Enseñar y evaluar el idioma a nivel profesional"
    ]
  }
];

function renderCEFR() {
  const tabsEl = document.getElementById('cefrTabs');
  const panelEl = document.getElementById('cefrPanel');
  let active = 0;

  function buildTabs() {
    tabsEl.innerHTML = CEFR.map((lvl, i) => {
      const isActive = i === active;
      return `<button class="cefr-tab${isActive?' active':''}" data-i="${i}"
        style="border-color:${lvl.color};color:${isActive?'#fff':lvl.color};background:${isActive?lvl.color:'#fff'}">
        <span class="tab-code">${lvl.code}</span>
        <span class="tab-name">${lvl.name}</span>
      </button>`;
    }).join('');
    tabsEl.querySelectorAll('.cefr-tab').forEach(btn => {
      btn.addEventListener('click', () => { active = +btn.dataset.i; buildTabs(); buildPanel(); });
    });
  }

  function buildPanel() {
    const lvl = CEFR[active];
    const li = arr => arr.map(x => `<li>${x}</li>`).join('');
    panelEl.innerHTML = `
      <div class="cefr-panel-wrap">
        <div class="cefr-panel-head">
          <div class="cefr-badge" style="background:${lvl.color}">${lvl.code}</div>
          <div class="cefr-head-text">
            <h3>${lvl.code} — ${lvl.name}</h3>
            <p>${lvl.desc}</p>
          </div>
        </div>
        <div class="cefr-body">
          <div class="cefr-col">
            <div class="cefr-col-title">Gramática</div>
            <ul class="cefr-list">${li(lvl.grammar)}</ul>
          </div>
          <div class="cefr-col">
            <div class="cefr-col-title">Vocabulario</div>
            <ul class="cefr-list">${li(lvl.vocabulary)}</ul>
          </div>
          <div class="cefr-col">
            <div class="cefr-col-title">Destrezas comunicativas</div>
            <ul class="cefr-list">${li(lvl.skills)}</ul>
          </div>
        </div>
      </div>`;
  }

  buildTabs();
  buildPanel();
}

/* ============ INIT ============ */
render(TENSES);
renderConj();
renderCEFR();
