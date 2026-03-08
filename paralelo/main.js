// ══════════════════════════════════════════════════════════
// INFO DATA — fijo para el ejemplo de la academia de inglés
// ══════════════════════════════════════════════════════════
const INFO = {
  dis: {
    fase: 'Entrada',
    title: 'El Disparador',
    subtitle: 'La tarea aparece en tu cabeza',
    color: '#2ea3f2',
    colorSoft: 'rgba(46,163,242,0.1)',
    story: `Aparece el pensamiento: "tengo que apuntarme a la academia de inglés". Por ahora es solo un recordatorio. No es difícil todavía, nadie te juzga todavía.\n\nPero tu cerebro ya está evaluando. Lo que detecta: no controlo la situación, qué le voy a decir a la de recepción, qué me va a contar. La idea de hacer algo nuevo que no controlas te pone nervioso. La alarma no ha sonado aún, pero el dedo ya está en el botón. Este es el momento más barato para actuar — antes de que el bucle arranque.`,
    vars: [
      { name: 'Señal recibida', val: 'tarea detectada', desc: 'Tu cabeza la ha registrado. El bucle aún no ha empezado. En este preciso punto, actuar tiene coste cero — la tarea no ha crecido, la culpa no ha llegado.' },
      { name: 'Nivel de alarma', val: 'alto desde el inicio', desc: 'Tu cerebro detecta: no controlo la situación, qué le voy a decir, cómo será. No ha pasado nada real, pero la alarma ya suena. Es automático — no lo puedes elegir.' },
      { name: 'Dificultad real', val: 'normal — todavía', desc: 'Apuntarte a la academia es exactamente igual de difícil que siempre. Si esperas, no cambiará la tarea — cambiará tu percepción de ella.' }
    ],
    note: 'Este momento se ejecuta una sola vez. El disparador no se repite — lo que se repite es todo lo que viene después.'
  },

  ame: {
    fase: 'Fase 02 · Inicio del bucle',
    title: 'La Amenaza',
    subtitle: 'Tu cerebro activa la alarma',
    color: '#d4a843',
    colorSoft: 'rgba(212,168,67,0.1)',
    story: `Tu cerebro no evalúa si apuntarte a inglés es objetivamente difícil. Evalúa si el estrés que genera supera tu límite. La fuente: no controlo la situación, qué le voy a decir a la de recepción, qué me va a contar, qué horarios tendrá.\n\nY llegan las preguntas: qué voy a decir, qué me van a preguntar, cómo será, qué pasa si no sé algo. Ninguna tiene respuesta ahora mismo — y esa incertidumbre es exactamente lo que dispara la alarma. No es la tarea. Es no controlar lo que va a pasar. El modo defensivo se activa solo, antes de que lo decidas.`,
    vars: [
      { name: 'Estrés percibido', val: 'muy alto', desc: 'Tu cerebro suma todo lo incierto: qué le voy a decir, cómo será la prueba, con quién me pondrán. No distingue entre peligro real e imaginado — activa la alarma por si acaso.' },
      { name: 'Tu límite de tolerancia', val: 'superado', desc: 'Piénsalo como un fusible. Cuando el estrés lo supera, salta y evitas de forma automática. Y ese fusible se hace más sensible con cada ciclo de culpa.' },
      { name: 'El resultado', val: 'modo evitar activado', desc: 'Sin haberlo decidido, tu cerebro ya eligió: evitar. La opción "hacer la tarea" queda bloqueada hasta que el estrés baje del umbral.' }
    ],
    note: 'El umbral no es fijo — es aprendido y cambia con cada ciclo. Eso es exactamente lo que lo hace corregible.'
  },

  eva: {
    fase: 'Fase 03 · Respuesta al estrés',
    title: 'La Evasión',
    subtitle: 'La excusa llega sola, sin esfuerzo',
    color: '#e07a5f',
    colorSoft: 'rgba(224,122,95,0.1)',
    story: `"Ya iré mañana, que hoy tengo que hacer X cosas." La excusa llega sin esfuerzo, sin deliberación. No es que seas débil — tu cerebro es extremadamente eficiente generando razones para no hacer lo que da miedo.\n\nSiempre encuentra una que no puedes rebatir: tiene algo de verdad, suena razonable, y promete que mañana será mejor momento. "Ya iré mañana." "Hoy tengo que hacer otras cosas." "Primero necesito estudiar un poco." El cerebro no piensa en mañana — solo quiere eliminar la tensión de ahora. Y lo consigue.`,
    vars: [
      { name: 'La excusa', val: '"ya iré mañana, hoy tengo cosas"', desc: 'Tiene algo de verdad. Eso la hace irrebatible. Pero su función real no es ayudarte — es eliminar el estrés de este momento.' },
      { name: 'La tarea', val: 'aplazada, no borrada', desc: 'No desaparece. Sigue en tu radar. Volverá en unas horas o mañana — con la misma presión más un poco más de culpa encima.' }
    ],
    note: 'Tu cerebro nunca falla generando excusas. Es la función más optimizada del sistema. El problema no es ella — es que se ejecuta en situaciones que no son amenazas reales.'
  },

  ali: {
    fase: 'Fase 04 · El truco del cerebro',
    title: 'El Alivio',
    subtitle: 'Liberación, quizá euforia',
    color: '#6b9f78',
    colorSoft: 'rgba(107,159,120,0.1)',
    story: `Has decidido no hacerlo y sientes algo inesperado: liberación. Quizá hasta euforia. La presión desaparece. El foco del estrés ya ha pasado. Es un gran momento.\n\nY aquí está lo más perverso: esa sensación es idéntica a la que sentirías si hubieras completado la tarea. Tu cerebro no distingue entre "lo hice" y "conseguí no pensarlo por ahora". La misma liberación. La misma calma. Pero una viene con la tarea hecha y la otra con la tarea intacta y un poco de culpa que llegará en unas horas. Tu cerebro acaba de aprender que evitar = bienestar. La próxima vez, el impulso de evitar llegará antes y más fuerte.`,
    vars: [
      { name: 'La sensación', val: 'liberación real, casi euforia', desc: 'No es imaginado — lo sientes de verdad. El mal ya ha pasado. Por eso el patrón se repite: tu cerebro registra evitar como algo que funciona.' },
      { name: 'La paradoja', val: 'evitar y completar se sienten igual', desc: 'Es la misma sensación, pero una viene con el trabajo hecho y la otra sin él. Tu cerebro no distingue. Eso es exactamente el fallo.' },
      { name: '¿Cuánto dura?', val: 'hasta que la tarea vuelve', desc: 'Horas, a veces un día. Hasta que el pensamiento regresa. Y cuando vuelve, trae un extra: la culpa de haber esperado.' }
    ],
    note: 'El alivio no es el problema — es una señal normal. El fallo es que está conectado a la acción equivocada.'
  },

  cul: {
    fase: 'Fase 05 · Daño colateral',
    title: 'La Culpa',
    subtitle: 'La culpa no motiva, paraliza',
    color: '#d4a843',
    colorSoft: 'rgba(212,168,67,0.1)',
    story: `El alivio dura poco. Vuelve el pensamiento: "otra vez no lo he hecho." Te propusiste hacerlo. Quizá hasta te prometiste prepararte — estudiar un poco, buscar información, organizarte — y no hiciste nada. Cada día sabías que tenías que hacerlo, pero siempre apareció una excusa, y cuando la aceptaste te sentiste bien... hasta el siguiente reproche.\n\nLa culpa siente que debería motivarte. Pero funciona al revés: sube tu estrés, baja tu tolerancia. El próximo intento empieza más cargado. La tarea parece más grande. La culpa no es el freno del bucle — es el combustible.`,
    vars: [
      { name: 'La culpa acumulada', val: 'crece cada día', desc: 'Día 1: poca. Día 7: mucha. No te ayuda a hacer la tarea — solo añade peso al siguiente intento.' },
      { name: 'Las promesas rotas', val: '"me propuse hacerlo y no lo hice"', desc: 'Sabías que tenías que hacerlo. Cada día. Pero siempre aparece una excusa, y cuando la aceptas te sientes bien... hasta el siguiente reproche.' },
      { name: 'La historia que te cuentas', val: '"algo falla en mí"', desc: 'No es verdad. Es una etiqueta que el sistema genera para explicar el patrón. El patrón tiene una causa mecánica conocida, no es un defecto de carácter.' }
    ],
    note: 'La culpa no aporta información útil. Es ruido que amplifica el problema. Soltarla no es rendirse — es liberar recursos.'
  },

  reb: {
    fase: 'Fase 06 · El más cruel',
    title: 'El Rebote',
    subtitle: 'Todo parece peor, el bucle se cierra',
    color: '#e07a5f',
    colorSoft: 'rgba(224,122,95,0.1)',
    story: `La tarea no ha cambiado. Sigue siendo exactamente la misma que el día uno. Pero en tu cabeza se ha ido haciendo más grande, más cargada, más urgente.\n\nY lo peor: aunque des un paso — vayas a preguntar, hagas la llamada — cada sub-paso siguiente dispara un bucle nuevo. Fuiste a la academia, bien. Ahora hay que pedir cita para la prueba. Nuevo bucle. Mismas excusas. "No sé nada." "Me pondrán con gente mejor." "Debería haber estudiado." Y así, el mismo patrón se repite dentro de cada fragmento de la tarea original. Vuelves al inicio con todo empeorado.`,
    vars: [
      { name: 'La tarea real', val: 'no ha cambiado', desc: 'Apuntarte a la academia el día 7 es exactamente igual que el día 1. Lo que cambió son las historias que has construido alrededor.' },
      { name: 'El bucle dentro del bucle', val: 'cada sub-paso dispara uno nuevo', desc: 'Cada vez que completas un fragmento, el siguiente fragmento activa el mismo ciclo. No es una tarea — son muchas tareas pequeñas, cada una con su propio bucle de evasión.' },
      { name: 'Siguiente paso', val: 'vuelve a Fase 02', desc: 'Más estrés, más culpa, menos tolerancia. Cada vuelta es más difícil de salir. Sin intervención, no hay condición de parada.' }
    ],
    note: 'La tarea del día 7 es la misma que la del día 1. Lo único que ha crecido es lo que has construido alrededor.'
  },

  // SOLUCIONES
  p1: {
    fase: 'Solución 1',
    title: 'Separa la tarea real de la imaginada',
    subtitle: 'Hazlo tan pequeño que el cerebro lo deje pasar',
    color: '#6b9f78',
    colorSoft: 'rgba(107,159,120,0.1)',
    story: `El estrés no viene de la tarea — viene de todo lo que tu cerebro proyecta alrededor. Cuando piensas en "apuntarme a la academia", no piensas solo en eso: piensas en qué le voy a decir a la de recepción, cómo será la prueba, con quién me pondrán. Tu cerebro procesa todo eso junto y se bloquea.\n\nEl fix: no encarar todo eso de golpe. Solo la primera acción concreta, la que puedes hacer ahora mismo. No "apuntarme a inglés" completo — solo el primer paso real. "Buscar el teléfono." "Abrir la página web." Eso no da miedo. Tu cerebro lo deja pasar. Y una vez en movimiento, el siguiente paso tampoco da tanto miedo, porque ya no estás parado imaginando — estás haciendo.`,
    vars: [
      { name: 'Lo que bloquea', val: 'la tarea imaginada, no la real', desc: 'Tu cerebro no procesa "apuntarte" como una acción — procesa toda la cadena de cosas que podrían pasar. Todo junto es demasiado. La acción sola, no.' },
      { name: 'El primer paso concreto', val: 'solo uno, el de ahora mismo', desc: 'No "apuntarme a inglés" entero. Solo la primera acción que puedes hacer sin que te dé miedo. "Buscar el teléfono." "Abrir la web." Eso no activa la alarma.' },
      { name: '¿Cuándo y dónde?', val: 'decide ahora los dos', desc: '"Si son las X y estoy en Y, haré Z." Ponerle hora y lugar concretos multiplica por 3 la probabilidad de hacerlo (Gollwitzer, 1999).' }
    ],
    note: 'No estás engañando a tu cerebro. Estás usando la misma lógica con un input que no activa el mecanismo de defensa.'
  },

  p2: {
    fase: 'Solución 2',
    title: 'Mueve la recompensa',
    subtitle: 'Mueve el alivio al inicio, no al final',
    color: '#6b9f78',
    colorSoft: 'rgba(107,159,120,0.1)',
    story: `El error: tu cerebro recibe recompensa por evitar. El fix: mover esa recompensa al momento de empezar.\n\nPero tiene que ser inmediata y concreta. "Cuando abra el libro, me pongo la playlist." "Cuando me siente a hacerlo, me preparo un café." Tu cerebro aprende: empezar = algo bueno. No necesitas motivación — necesitas reconfigurar cuándo llega el alivio.`,
    vars: [
      { name: 'La recompensa', val: 'inmediata y concreta', desc: '"Cuando empiece, me hago un café / pongo música / salgo después." Tu cerebro conecta esa sensación con el acto de empezar.' },
      { name: 'Qué pasa con el tiempo', val: 'el patrón se debilita', desc: 'Cada vez que empiezas y hay algo agradable, el cerebro aprende. La excusa pierde poder poco a poco.' },
      { name: 'Lo que no funciona', val: '"me sentiré mejor al terminar"', desc: 'Demasiado lejos. El cerebro necesita algo ahora, en los primeros segundos.' }
    ],
    note: 'No necesitas motivación. Necesitas que el primer segundo de ejecución vaya seguido de algo que tu cerebro registre como bueno.'
  },

  p3: {
    fase: 'Solución 3',
    title: 'Suelta la culpa',
    subtitle: 'La culpa no es información útil',
    color: '#6b9f78',
    colorSoft: 'rgba(107,159,120,0.1)',
    story: `La culpa siente que debería motivarte. La investigación dice lo contrario: cuanta más culpa, más difícil es empezar la siguiente vez.\n\n"Me pondrán con gente más lista", "no sé nada", "debería haber estudiado" — eso no es lo que va a pasar. Es lo que tu cerebro predice bajo presión. Soltar esa historia no significa que no te importa. Significa que vas a intentarlo sin el peso extra de los días anteriores. Tratarte bien ante el fallo mejora el rendimiento futuro (Neff, 2012). No es blandura — es eficiencia.`,
    vars: [
      { name: 'Lo que sueltas', val: 'el peso de los días anteriores', desc: '"Me pondrán con gente mejor", "no sé nada" — una predicción, no un hecho. No tiene que definir el próximo intento.' },
      { name: 'Lo que recuperas', val: 'tu margen de tolerancia', desc: 'Sin culpa acumulada, el próximo intento empieza desde cero — no desde abajo.' },
      { name: 'Lo que dice la ciencia', val: 'autocompasión > autocrítica', desc: 'Las personas con más autocompasión procrastinan menos (Neff, 2012). No porque les importe menos, sino porque el fallo no las bloquea.' }
    ],
    note: 'Cargar culpa por algo pendiente solo añade peso al próximo intento. No hay ningún beneficio en mantenerla.'
  }
};

// ══════════════════════════════════════════════════════════
// INFO PANEL
// ══════════════════════════════════════════════════════════
const panel      = document.getElementById('info-panel');
const pFase      = document.getElementById('p-fase');
const pTitle     = document.getElementById('p-title');
const pSubtitle  = document.getElementById('p-subtitle');
const pStory     = document.getElementById('p-story');
const pVarsTitle = document.getElementById('p-vars-title');
const pVars      = document.getElementById('p-vars');
const pNote      = document.getElementById('p-note');
const panelClose = document.getElementById('panel-close');
let currentPanelNode = null;

// ══════════════════════════════════════════════════════════
// TOUR / PANEL NAVIGATION
// ══════════════════════════════════════════════════════════
const PHASE_ORDER = ['dis', 'ame', 'eva', 'ali', 'cul', 'reb'];
const PATCH_ORDER = ['p1', 'p2', 'p3'];
let tourActive = false;
let autoOpened = false;

function getNavOrder() {
  return PHASE_ORDER;
}

function getNavIndex(nodeId) {
  return getNavOrder().indexOf(nodeId);
}

function updatePanelNav(nodeId) {
  const prevBtn = document.getElementById('pnav-prev');
  const nextBtn = document.getElementById('pnav-next');
  const posEl   = document.getElementById('pnav-pos');
  const navEl   = document.getElementById('panel-nav');

  // Determine which list this node belongs to
  let order, idx;
  const phaseIdx = PHASE_ORDER.indexOf(nodeId);
  const patchIdx = PATCH_ORDER.indexOf(nodeId);

  if (phaseIdx !== -1) {
    order = PHASE_ORDER;
    idx = phaseIdx;
    posEl.textContent = `Fase ${idx + 1} / ${order.length}`;
  } else if (patchIdx !== -1) {
    order = PATCH_ORDER;
    idx = patchIdx;
    posEl.textContent = `Solución ${idx + 1} / ${order.length}`;
  } else {
    navEl.style.display = 'none';
    return;
  }

  navEl.style.display = 'flex';
  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx === order.length - 1;

  prevBtn.onclick = () => {
    if (idx > 0) openPanel(order[idx - 1]);
  };
  nextBtn.onclick = () => {
    if (idx < order.length - 1) openPanel(order[idx + 1]);
  };
}

// ── PATCH NODE HIGHLIGHT ──
function highlightPatchNode(nodeId) {
  PATCH_ORDER.forEach(pid => {
    const g = document.querySelector(`#g-patches [data-node="${pid}"]`);
    if (!g) return;
    const circle = g.querySelector('circle');
    const text = g.querySelector('text');
    const on = pid === nodeId;
    circle.setAttribute('fill',         on ? 'rgba(107,159,120,0.5)' : 'rgba(107,159,120,0.15)');
    circle.setAttribute('stroke-width', on ? '2.5' : '1.5');
    circle.setAttribute('r',            on ? '13'  : '11');
    text.setAttribute('font-size',      on ? '9'   : '8');
  });
}

function renderPanel(nodeId) {
  const d = INFO[nodeId];
  if (!d) return;

  pFase.textContent  = d.fase;
  pFase.style.color  = d.color;
  pTitle.textContent = d.title;

  pSubtitle.textContent      = d.subtitle;
  pSubtitle.style.color      = d.color;
  pSubtitle.style.background = d.colorSoft;

  pStory.innerHTML = d.story.replace(/\n\n/g, '</p><p style="margin-top:0.8rem">');
  pStory.style.borderLeftColor = d.color + '44';

  pVarsTitle.textContent = 'Qué está pasando';

  pVars.innerHTML = d.vars.map(v => `
    <div class="p-var" style="border-left-color:${d.color}55">
      <div class="p-var-top">
        <span class="p-var-name">${v.name}</span>
        ${v.val ? `<span class="p-var-val" style="color:${d.color}">${v.val}</span>` : ''}
      </div>
      <div class="p-var-desc">${v.desc}</div>
    </div>`).join('');

  pNote.textContent = d.note;
  panel.classList.add('open');
  updatePanelNav(nodeId);
}

function openPanel(nodeId) {
  currentPanelNode = nodeId;
  renderPanel(nodeId);
  // Highlight patch node if applicable, clear otherwise
  highlightPatchNode(PATCH_ORDER.includes(nodeId) ? nodeId : null);
}

panelClose.addEventListener('click', () => {
  panel.classList.remove('open');
  currentPanelNode = null;
  autoOpened = true; // don't re-auto-open after manual close
});
document.querySelectorAll('#diag [data-node]').forEach(g => {
  g.addEventListener('click', () => openPanel(g.dataset.node));
  g.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openPanel(g.dataset.node);
    }
  });
});

// ══════════════════════════════════════════════════════════
// LIVE COUNTERS
// ══════════════════════════════════════════════════════════
let cDiff = 1.0, cGuilt = 0.0, cThresh = 0.50, cDays = 0;

const cvDiff   = document.getElementById('cv-diff');
const cvGuilt  = document.getElementById('cv-guilt');
const cvThresh = document.getElementById('cv-thresh');
const cvDays   = document.getElementById('cv-days');

function updateCounters() {
  cvDiff.textContent   = cDiff.toFixed(2) + 'x';
  cvGuilt.textContent  = cGuilt.toFixed(1);
  cvThresh.textContent = cThresh.toFixed(2);
  cvDays.textContent   = cDays;
  cvDiff.style.color   = cDiff > 2 ? '#c53030' : '#e07a5f';
  cvThresh.style.color = cThresh < 0.3 ? '#c53030' : cThresh < 0.4 ? '#d4a843' : 'var(--muted)';
}

function pulseCounter(el) {
  el.classList.remove('pulse');
  void el.offsetWidth;
  el.classList.add('pulse');
}

// ══════════════════════════════════════════════════════════
// DIAGRAM ANIMATION
// ══════════════════════════════════════════════════════════
(function () {
  const tok    = document.getElementById('tok');
  const gLb    = document.getElementById('g-lb');
  const gBrk   = document.getElementById('g-brk');
  const gPatch = document.getElementById('g-patches');
  const dDot   = document.getElementById('d-dot');
  const dTxt   = document.getElementById('d-txt');
  const btnBug   = document.getElementById('btn-bug');
  const btnPause = document.getElementById('btn-pause');
  const btnFix   = document.getElementById('btn-fix');

  const BX = {
    ame: { el: document.getElementById('bx-ame'), col: '#d4a843', bg: 'rgba(212,168,67,0.08)' },
    eva: { el: document.getElementById('bx-eva'), col: '#e07a5f', bg: 'rgba(224,122,95,0.08)' },
    ali: { el: document.getElementById('bx-ali'), col: '#6b9f78', bg: 'rgba(107,159,120,0.08)' },
    cul: { el: document.getElementById('bx-cul'), col: '#d4a843', bg: 'rgba(212,168,67,0.08)' },
    reb: { el: document.getElementById('bx-reb'), col: '#e07a5f', bg: 'rgba(224,122,95,0.08)' },
  };

  const WPS = [
    [155, 163, 'ame', 800],
    [155, 261, 'eva', 800],
    [155, 361, 'ali', 800],
    [155, 449, 'cul', 800],
    [155, 537, 'reb', 800],
    [ 30, 566, null,  200],
    [ 30, 163, null,  380],
    [155, 163, null,  120],
  ];

  let wpIdx = 0, iterN = 1, isBug = true, isPaused = false, tid = null, rid = null;
  let cx = 155, cy = 163, tx = 155, ty = 163;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function rafLoop() {
    cx = lerp(cx, tx, 0.13);
    cy = lerp(cy, ty, 0.13);
    tok.setAttribute('cx', cx.toFixed(2));
    tok.setAttribute('cy', cy.toFixed(2));
    rid = requestAnimationFrame(rafLoop);
  }

  function highlight(id) {
    Object.keys(BX).forEach(k => {
      const on = k === id;
      BX[k].el.setAttribute('stroke',       on ? BX[k].col : '#e2e8f0');
      BX[k].el.setAttribute('stroke-width', on ? '2.5'     : '1.5');
      BX[k].el.setAttribute('fill',         on ? BX[k].bg  : '#ffffff');
    });
  }

  function advance() {
    if (!isBug || isPaused) return;
    wpIdx = (wpIdx + 1) % WPS.length;
    const [x, y, id, hold] = WPS[wpIdx];
    tx = x; ty = y;
    highlight(id);

    if (id === 'cul') {
      cGuilt = Math.min(cGuilt + 0.1, 9.9);
      pulseCounter(cvGuilt);
    }
    if (id === 'reb') {
      cDiff   = Math.min(cDiff * 1.2, 99);
      cThresh = Math.max(cThresh - 0.05, 0.05);
      pulseCounter(cvDiff);
      pulseCounter(cvThresh);
    }
    if (wpIdx === 0) {
      iterN++;
      cDays++;
      const dIter = document.getElementById('d-iter');
      if (dIter) dIter.textContent = iterN;
      pulseCounter(cvDays);
    }
    updateCounters();
    tid = setTimeout(advance, hold);
  }

  function animateReset(cb) {
    const startDiff   = cDiff;
    const startGuilt  = cGuilt;
    const startThresh = cThresh;
    const startDays   = cDays;
    const steps = 30;
    let s = 0;
    const iv = setInterval(() => {
      s++;
      const t = s / steps;
      const ease = 1 - Math.pow(1 - t, 3);
      cDiff   = lerp(startDiff,   1.0,  ease);
      cGuilt  = lerp(startGuilt,  0.0,  ease);
      cThresh = lerp(startThresh, 0.50, ease);
      cDays   = Math.round(lerp(startDays, 0, ease));
      updateCounters();
      if (s >= steps) {
        clearInterval(iv);
        cDiff = 1.0; cGuilt = 0.0; cThresh = 0.50; cDays = 0;
        updateCounters();
        cvDiff.style.color   = '#6b9f78';
        cvGuilt.style.color  = '#6b9f78';
        cvDays.style.color   = '#6b9f78';
        cvThresh.style.color = '#6b9f78';
        setTimeout(() => {
          cvDiff.style.color   = '#e07a5f';
          cvGuilt.style.color  = '#d4a843';
          cvDays.style.color   = '#e07a5f';
          cvThresh.style.color = 'var(--muted)';
        }, 1400);
        if (cb) cb();
      }
    }, 40);
  }

  function pauseLoop() {
    if (!isBug) return;
    if (!isPaused) {
      isPaused = true;
      if (tid) clearTimeout(tid);
      cancelAnimationFrame(rid);
      btnPause.textContent = 'Reanudar';
      btnPause.classList.add('btn-paused');
    } else {
      isPaused = false;
      btnPause.textContent = 'Pausar';
      btnPause.classList.remove('btn-paused');
      rid = requestAnimationFrame(rafLoop);
      tid = setTimeout(advance, 600);
    }
  }

  function startBug() {
    isBug = true; isPaused = false;
    btnPause.textContent = 'Pausar';
    btnPause.classList.remove('btn-paused');
    wpIdx = 0; iterN = 1; tx = 155; ty = 163; cx = 155; cy = 163;
    cDiff = 1.0; cGuilt = 0.0; cThresh = 0.50; cDays = 0;
    updateCounters();
    const dIter = document.getElementById('d-iter');
    if (dIter) dIter.textContent = 1;
    tok.setAttribute('opacity', '0.9');
    gLb.style.opacity    = '1';
    gBrk.style.opacity   = '0';
    gPatch.style.opacity = '0';
    gPatch.classList.remove('visible');
    dDot.style.background = '#e07a5f';
    dDot.style.animation  = 'pulse-dot 1.2s ease-in-out infinite';
    dTxt.innerHTML = 'El bucle está activo &middot; iteración <span id="d-iter">1</span>';
    highlight('ame');
    if (rid) cancelAnimationFrame(rid);
    rid = requestAnimationFrame(rafLoop);
    if (tid) clearTimeout(tid);
    tid = setTimeout(advance, 900);
    btnBug.classList.add('btn-stress');
    btnFix.classList.remove('btn-fix');
    Object.keys(BX).forEach(k => {
      BX[k].el.setAttribute('stroke', '#e2e8f0');
      BX[k].el.setAttribute('fill', '#ffffff');
    });
  }

  function breakLoop() {
    isBug = false; isPaused = false;
    btnPause.textContent = 'Pausar';
    btnPause.classList.remove('btn-paused');
    if (tid) clearTimeout(tid);

    gLb.classList.add('breaking');
    setTimeout(() => { gLb.style.opacity = '0'; gLb.classList.remove('breaking'); }, 500);

    tok.setAttribute('opacity', '0');
    gBrk.style.opacity   = '1';
    gPatch.style.opacity = '1';
    gPatch.classList.add('visible');
    dDot.style.background = '#6b9f78';
    dDot.style.animation  = 'none';
    dTxt.innerHTML = '<span style="color:#6b9f78">Bucle roto &middot; soluciones aplicadas</span>';
    highlight(null);

    animateReset(() => {
      ['ame', 'eva', 'cul'].forEach(k => {
        BX[k].el.setAttribute('stroke',       '#6b9f78');
        BX[k].el.setAttribute('stroke-width', '2');
        BX[k].el.setAttribute('fill',         'rgba(107,159,120,0.06)');
      });
      // Auto-open P1 so the user knows what to do next
      setTimeout(() => openPanel('p1'), 400);
    });

    btnFix.classList.add('btn-fix');
    btnBug.classList.remove('btn-stress');
  }

  btnBug.addEventListener('click', () => { endTour(); startBug(); });
  btnPause.addEventListener('click', pauseLoop);
  btnFix.addEventListener('click', () => { endTour(); breakLoop(); });

  // ── TOUR ──
  const btnTour = document.getElementById('btn-tour');

  function startTour() {
    tourActive = true;
    btnTour.classList.add('touring');
    btnTour.textContent = 'Salir del tour';
    // Pause animation
    if (isBug && !isPaused) {
      isPaused = true;
      if (tid) clearTimeout(tid);
      cancelAnimationFrame(rid);
      btnPause.textContent = 'Reanudar';
      btnPause.classList.add('btn-paused');
    }
    openPanel('dis');
  }

  function endTour() {
    if (!tourActive) return;
    tourActive = false;
    btnTour.classList.remove('touring');
    btnTour.textContent = 'Paso a paso →';
  }

  btnTour.addEventListener('click', () => {
    if (tourActive) {
      endTour();
      // Resume animation
      if (isBug && isPaused) pauseLoop();
    } else {
      startTour();
    }
  });

  // ── AUTO-OPEN first node when diagram enters viewport (once) ──
  const diagWrap = document.getElementById('diag-wrap');
  const diagObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !autoOpened && !currentPanelNode) {
        autoOpened = true;
        diagObs.disconnect();
        setTimeout(() => openPanel('dis'), 600);
      }
    });
  }, { threshold: 0.3 });
  diagObs.observe(diagWrap);

  rid = requestAnimationFrame(rafLoop);
  tid = setTimeout(advance, 900);
  updateCounters();
})();
