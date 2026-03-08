// ── fade-in on scroll ──
const obs = new IntersectionObserver(
  e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('vis'); }),
  { threshold: 0.08 }
);
document.querySelectorAll('.fi').forEach(el => obs.observe(el));

// ══════════════════════════════════════════════════════════
// DATA — panel de información generado desde el formulario
// ══════════════════════════════════════════════════════════
let currentTask   = 'apuntarme a inglés';
let currentExcuse = 'ya lo haré mañana, primero necesito organizarme';

function makeInfo(t, blockList, excuseList) {
  const tq = `"${t}"`;
  const blocks  = blockList.length  ? blockList.join(', ')  : 'lo desconocido, la posibilidad de fallar';
  const excuses = excuseList.length ? excuseList.join(', ') : 'ya lo haré mañana';

  return {
    dis: {
      fase: 'ENTRADA · solo ocurre una vez',
      title: 'El Disparador',
      code: `task_received(${tq})`,
      codeH: '→ la tarea aparece en tu cabeza',
      color: '#3b82f6',
      story: `El sistema recibe la señal: ${tq}. En este momento exacto la tarea no tiene carga emocional — es solo información nueva. Pero el evaluador automático del cerebro ya está activo. No analiza la tarea: analiza todo lo que podría salir mal si la ejecutas.\n\nAntes de que puedas pensarlo conscientemente, stress = 0.8 se asigna. No ha empezado el bucle todavía — pero ya tiene combustible. Este es el único nodo donde actuar no tiene ningún coste.`,
      storyH: `Aparece el pensamiento: "tengo que hacer ${tq}". Por ahora es solo un recordatorio. No es difícil todavía, nadie te juzga todavía.\n\nPero tu cerebro ya está evaluando. No la tarea en sí — sino todo lo que no controlas de ella. Qué pasará, cómo será, qué puede salir mal. La alarma no ha sonado aún, pero el dedo ya está en el botón. Este es el momento más barato para actuar — antes de que el bucle arranque.`,
      vars: [
        { name: 'task_pending', val: '= True', desc: 'El flag se activa. El sistema monitorizará esta tarea en cada ciclo hasta que se complete — o se evada indefinidamente. No hay timeout.' },
        { name: 'stress', val: '= 0.8', desc: `Se asigna desde el primer segundo. El sistema detecta: ${blocks}. Lo incierto siempre puntúa alto — es un mecanismo de protección que se dispara demasiado pronto.` },
        { name: 'difficulty', val: '= 1.0', desc: `La tarea ${tq} tiene su dificultad real aquí. No ha crecido todavía. Cada iteración la multiplicará por 1.2 — no porque la tarea cambie, sino por las historias que el sistema construye alrededor.` }
      ],
      varsH: [
        { name: 'Señal recibida', val: '→ tarea detectada', desc: 'Tu cabeza la ha registrado. El bucle aún no ha empezado. En este preciso punto, actuar tiene coste cero — la tarea no ha crecido, la culpa no ha llegado.' },
        { name: 'Nivel de alarma', val: 'alto desde el inicio', desc: `Tu cerebro detecta: ${blocks}. No ha pasado nada real, pero la alarma ya suena. Es automático — no lo puedes elegir. Solo puedes elegir qué hacer después.` },
        { name: 'Dificultad real', val: 'normal — todavía', desc: `La tarea ${tq} es exactamente igual de difícil que siempre. Si esperas, no cambiará la tarea — cambiará tu percepción de ella.` }
      ],
      note: 'Este nodo se ejecuta una sola vez. El disparador no se repite — lo que se repite es todo lo que viene después.'
    },

    ame: {
      fase: 'FASE 02 · inicio del bucle',
      title: 'La Amenaza',
      code: 'if stress > threshold  →  True',
      codeH: '→ tu cerebro activa la alarma',
      color: '#eab308',
      story: `El cerebro no evalúa si ${tq} es objetivamente difícil. Hace una sola pregunta: "¿el estrés que genera supera mi umbral?" Con stress=0.8 y THRESHOLD=0.5, la respuesta es sí.\n\nEl modo defensivo se activa automáticamente — como un interruptor de seguridad que salta antes de que el circuito se funda. El problema es que este interruptor se calibró para amenazas reales, no para tareas pendientes. Pero el cerebro no distingue: si el estrés supera el umbral, activa la evasión. Siempre. Sin consultarte.`,
      storyH: `Tu cerebro no evalúa si la tarea es difícil. Evalúa si el estrés que genera supera tu límite.\n\nY llegan las preguntas: qué voy a decir, qué me van a preguntar, cómo será, qué pasa si no sé algo. Ninguna tiene respuesta ahora mismo — y esa incertidumbre es exactamente lo que dispara la alarma. No es la tarea. Es no controlar lo que va a pasar. El modo defensivo se activa solo, antes de que lo decidas.`,
      vars: [
        { name: 'stress', val: '= 0.8', desc: `El sistema suma todo lo incierto de ${tq}: ${blocks}. No distingue entre amenaza real y percibida — dispara la alarma por si acaso.` },
        { name: 'THRESHOLD (umbral)', val: '= 0.50', desc: 'La línea de tolerancia. Empieza en 0.5, pero baja 0.05 con cada iteración porque la culpa erosiona la tolerancia. Con el tiempo, tareas pequeñas que antes no disparaban el bucle también lo hacen.' },
        { name: '0.8 > 0.50 → True', val: 'evasión activada', desc: 'La condición se cumple. El bloque if ejecuta la evasión. El bloque else —donde vive execute(task)— queda bloqueado. El Patch 1 reduce el input hasta que esta comparación falle.' }
      ],
      varsH: [
        { name: 'Estrés percibido', val: 'muy alto', desc: `Tu cerebro suma todo lo incierto: ${blocks}. No distingue entre peligro real e imaginado — activa la alarma por si acaso.` },
        { name: 'Tu límite de tolerancia', val: 'superado', desc: 'Piénsalo como un fusible. Cuando el estrés lo supera, salta y evitas de forma automática. Y ese fusible se hace más sensible con cada ciclo de culpa.' },
        { name: 'El resultado', val: 'modo evitar activado', desc: 'Sin haberlo decidido, tu cerebro ya eligió: evitar. La opción "hacer la tarea" queda bloqueada hasta que el estrés baje del umbral.' }
      ],
      note: 'El umbral no es fijo — es aprendido y cambia con cada ciclo. Eso es exactamente lo que lo hace parcheable.'
    },

    eva: {
      fase: 'FASE 03 · respuesta al estrés',
      title: 'La Evasión',
      code: `avoid(${tq})`,
      codeH: '→ la excusa llega sola, sin esfuerzo',
      color: '#ef4444',
      story: `avoid() genera la justificación. No es mentira — probablemente tiene algo de verdad. Pero eso es lo que la hace irrebatible. avoid() no busca la excusa perfecta; busca la excusa mínima que pase la validación interna y corte el estrés de ahora.\n\nEl sistema no piensa en mañana. Solo ejecuta la acción más eficiente para eliminar la tensión presente. Desde esa lógica, funciona perfectamente. El problema es que sus consecuencias viven en el futuro.`,
      storyH: `La excusa llega sin esfuerzo, sin deliberación. No es que seas débil — tu cerebro es extremadamente eficiente generando razones para no hacer lo que da miedo.\n\nSiempre encuentra una que no puedes rebatir: tiene algo de verdad, suena razonable, y promete que mañana será mejor momento. "Ya lo haré mañana." "Hoy tengo que hacer otras cosas." "Primero necesito organizarme." El cerebro no piensa en mañana — solo quiere eliminar la tensión de ahora. Y lo consigue.`,
      vars: [
        { name: 'avoid(task)', val: '→ excusa_válida', desc: `Output: "${excuses}". La función siempre devuelve algo creíble. No falla nunca. Pasa la validación interna y corta el estrés inmediatamente.` },
        { name: 'task.status', val: 'pending → deferred', desc: `La tarea ${tq} no desaparece — solo se pospone. task_pending sigue siendo True. El bucle continúa.` }
      ],
      varsH: [
        { name: 'La excusa', val: `"${excuses}"`, desc: 'Tiene algo de verdad. Eso la hace irrebatible. Pero su función real no es ayudarte — es eliminar el estrés de este momento.' },
        { name: 'La tarea', val: 'aplazada, no borrada', desc: 'No desaparece. Sigue en tu radar. Volverá en unas horas o mañana — con la misma presión más un poco más de culpa encima.' }
      ],
      note: 'avoid() no falla nunca. Es la función más optimizada del sistema. El problema no es ella — es que se ejecuta en situaciones que no son amenazas reales.'
    },

    ali: {
      fase: 'FASE 04 · el truco del cerebro',
      title: 'El Alivio',
      code: 'release_dopamine("evasión")',
      codeH: '→ liberación, quizá euforia',
      color: '#22c55e',
      story: `Has pospuesto ${tq} y sientes algo inesperado: alivio real. No solo alivio — liberación, quizá euforia. La fuente de estrés ha desaparecido del radar.\n\nEsta es la línea más perniciosa del código. La señal de alivio es idéntica a la de haber completado la tarea. release_dopamine("evasión") produce el mismo output que release_dopamine("logro"). El cerebro no distingue. Y acaba de registrar: avoid() → reward. Cada iteración refuerza esa asociación. El bucle no solo se mantiene — se fortalece.`,
      storyH: `Has decidido no hacerlo y sientes algo inesperado: liberación. Quizá hasta euforia. La presión desaparece. El foco del estrés ya ha pasado. Es un gran momento.\n\nY aquí está lo más perverso: esa sensación es idéntica a la que sentirías si hubieras completado la tarea. Tu cerebro no distingue entre "lo hice" y "conseguí no pensarlo por ahora". La misma liberación. La misma calma. Pero una viene con la tarea hecha y la otra con la tarea intacta y un poco de culpa que llegará en unas horas. Tu cerebro acaba de aprender que evitar = bienestar. La próxima vez, el impulso de evitar llegará antes y más fuerte.`,
      vars: [
        { name: 'dopamine_source', val: '"evasión"', desc: 'Aquí está el bug. La recompensa llega por evitar, no por ejecutar. El sistema refuerza el comportamiento equivocado en cada iteración.' },
        { name: 'feeling', val: '"liberado, quizá eufórico"', desc: `La sensación es real e idéntica a la de haber completado ${tq}. El cerebro no distingue entre "lo hice" y "conseguí no pensarlo". Ambas producen la misma señal química.` },
        { name: 'duración', val: 'minutos → horas', desc: 'El alivio dura hasta que la tarea vuelve al radar. Entonces empieza la Fase 05. No hay forma de mantenerlo sin ejecutar.' }
      ],
      varsH: [
        { name: 'La sensación', val: 'liberación real, casi euforia', desc: 'No es imaginado — lo sientes de verdad. El mal ya ha pasado. Por eso el patrón se repite: tu cerebro registra evitar como algo que funciona.' },
        { name: 'La paradoja', val: 'evitar y completar se sienten igual', desc: 'Es la misma sensación, pero una viene con el trabajo hecho y la otra sin él. Tu cerebro no distingue. Eso es exactamente el bug.' },
        { name: 'Cuánto dura', val: 'hasta que la tarea vuelve', desc: 'Horas, a veces un día. Hasta que el pensamiento regresa. Y cuando vuelve, trae un extra: la culpa de haber esperado.' }
      ],
      note: 'El alivio no es el problema — es una señal normal. El bug es que está conectado a la acción equivocada. El Patch 2 lo mueve al momento de ejecutar.'
    },

    cul: {
      fase: 'FASE 05 · daño colateral',
      title: 'La Culpa',
      code: 'guilt += 0.1  // por cada ciclo',
      codeH: '→ la culpa no motiva, paraliza',
      color: '#eab308',
      story: `El alivio se disuelve. El sistema genera el diagnóstico: "llevas días con ${tq} pendiente." Cada iteración suma 0.1 a guilt.\n\nEl problema no es que la culpa sea injusta — es que no sirve. No motiva a actuar. La investigación lo confirma: la culpa eleva el estrés percibido y baja el umbral de tolerancia. El siguiente ciclo de evasión es más probable, no menos. La culpa no es gasolina — es arena en el motor.`,
      storyH: `El alivio dura poco. Vuelve el pensamiento: "otra vez no lo he hecho." Te propusiste hacerlo. Quizá hasta te prometiste prepararte — estudiar un poco, buscar información, organizarte — y no hiciste nada. Cada día sabías que tenías que hacerlo, pero siempre apareció una excusa, y cuando la aceptaste te sentiste bien... hasta el siguiente reproche.\n\nLa culpa siente que debería motivarte. Pero funciona al revés: sube tu estrés, baja tu tolerancia. El próximo intento empieza más cargado. La tarea parece más grande. La culpa no es el freno del bucle — es el combustible.`,
      vars: [
        { name: 'guilt', val: '+= 0.1 por ciclo', desc: 'Día 1: 0.1. Día 3: 0.4. Semana 1: 0.9. Cada incremento eleva el stress percibido en la siguiente evaluación, haciendo más probable la evasión.' },
        { name: 'THRESHOLD', val: '-= 0.05 (en Rebote)', desc: 'La tolerancia baja con cada ciclo. Después de 7 iteraciones, tareas que antes no disparaban el bucle ahora también lo hacen.' },
        { name: 'narrativa generada', val: '"soy perezoso"', desc: 'El sistema genera una etiqueta de identidad. No es un diagnóstico — es una historia. El comportamiento tiene una causa mecánica y tiene solución.' }
      ],
      varsH: [
        { name: 'La culpa acumulada', val: 'crece cada día', desc: 'Día 1: poca. Día 7: mucha. No te ayuda a hacer la tarea — solo añade peso al siguiente intento.' },
        { name: 'Las promesas rotas', val: '"me propuse hacerlo y no lo hice"', desc: 'Sabías que tenías que hacerlo. Cada día. Pero siempre aparece una excusa, y cuando la aceptas te sientes bien... hasta el siguiente reproche. Ese ciclo de reproche es parte del bucle.' },
        { name: 'La historia que te cuentas', val: '"algo falla en mí"', desc: 'No es verdad. Es una etiqueta que el sistema genera para explicar el patrón. El patrón tiene una causa mecánica conocida, no es un defecto de carácter.' }
      ],
      note: 'La culpa no aporta información útil. Es ruido que amplifica el problema. Soltarla no es rendirse — es liberar recursos.'
    },

    reb: {
      fase: 'FASE 06 · el bug más cruel',
      title: 'El Rebote',
      code: 'difficulty *= 1.2  →  goto fase_02',
      codeH: '→ todo parece peor, el bucle se cierra',
      color: '#ef4444',
      story: `La tarea —${tq}— no ha cambiado. Pero cada iteración, el modelo mental de su dificultad se multiplica por 1.2. Después de 7 días: 1.0 × 1.2⁷ = 3.58×. La misma tarea se percibe tres veces y media más difícil.\n\nEl sistema construye narrativas para justificar esa percepción: "ya es tarde", "debería haberlo hecho antes", "ahora es peor". Ninguna es un hecho — son predicciones bajo estrés. El rebote devuelve el control a La Amenaza con todo empeorado: más dificultad percibida, más culpa, menos tolerancia.`,
      storyH: `La tarea no ha cambiado. Sigue siendo exactamente la misma que el día uno. Pero en tu cabeza se ha ido haciendo más grande, más cargada, más urgente.\n\nY lo peor: aunque des un paso, cada sub-paso siguiente dispara un bucle nuevo. Hiciste la llamada, bien. Ahora hay que ir en persona. Nuevo bucle. Fuiste, bien. Ahora hay que empezar de verdad. Nuevo bucle. Mismas excusas, mismo miedo, misma evasión. El patrón se repite dentro de cada fragmento de la tarea original. Vuelves al inicio con todo empeorado.`,
      vars: [
        { name: 'difficulty', val: '× 1.2 cada ciclo', desc: `Iter 1: 1.0 → Iter 3: 1.73 → Iter 7: 3.58. La tarea ${tq} no crece — crece el modelo mental. Y ese modelo determina el stress en la siguiente Fase 02.` },
        { name: 'narrativa generada', val: '"ahora es peor"', desc: 'El sistema genera justificaciones: "ya es tarde", "debería haberlo hecho antes", "ahora será más incómodo". Son predicciones, no hechos. El cerebro las trata con la misma urgencia que un peligro real.' },
        { name: 'goto fase_02', val: '→ bucle cerrado', desc: 'El rebote devuelve el control a La Amenaza con difficulty y guilt más altos, y THRESHOLD más bajo. La siguiente evasión es más probable.' }
      ],
      varsH: [
        { name: 'La tarea real', val: 'no ha cambiado', desc: `${t.charAt(0).toUpperCase() + t.slice(1)} el día 7 es exactamente igual que el día 1. Lo que cambió son las historias que has construido alrededor.` },
        { name: 'El bucle dentro del bucle', val: 'cada sub-paso dispara uno nuevo', desc: 'Cada vez que completas un fragmento, el siguiente fragmento activa el mismo ciclo. No es una tarea — son muchas tareas pequeñas, cada una con su propio bucle de evasión.' },
        { name: 'Siguiente paso', val: '→ vuelve a Fase 02', desc: 'Más estrés, más culpa, menos tolerancia. Cada vuelta es más difícil de salir. Sin intervención, no hay condición de parada.' }
      ],
      note: 'La tarea del día 7 es la misma que la del día 1. Lo único que ha crecido es lo que has construido alrededor.'
    },

    // PATCHES — texto fijo, ejemplos universales, sin interpolación
    p1: {
      fase: 'PATCH 1 · aplicado en La Amenaza',
      title: 'task.split()',
      code: 'micro = task.split(scope="2 min")',
      codeH: '→ hazlo tan pequeño que el cerebro lo deje pasar',
      color: '#22c55e',
      story: `La Amenaza existe porque el sistema no procesa la tarea como una acción — procesa la cadena completa de todo lo que podría pasar. Esa cadena genera stress=0.8, que supera THRESHOLD=0.5. Pero el primer paso solo genera 0.2.\n\nEl fix: task.split(). Separar la primera acción concreta de toda la proyección. Si el input es solo el paso 1, "if stress > THRESHOLD" falla. execute() puede correr por primera vez.\n\n<details class="patch-example-toggle"><summary class="patch-example-summary">// ejemplo práctico: te da miedo conducir <span class="toggle-hint">ver →</span></summary><div class="patch-example"><div class="patch-example-label">lo que el sistema procesa (cadena completa) → stress = 0.8</div><div class="patch-chain"><span>coger el coche</span><span>arrancar</span><span>salir a la calle</span><span>el tráfico</span><span>los otros coches</span><span>aparcar</span><span>que me piten</span><span>un accidente</span></div><div class="patch-example-label" style="margin-top:0.9rem">lo que task.split() procesa (solo el paso actual) → stress = 0.2</div><div class="patch-steps"><div class="patch-step"><span class="patch-step-n">01</span> Coger las llaves y bajar al coche. Solo eso.</div><div class="patch-step"><span class="patch-step-n">02</span> Sentarte, cinturón, arrancar. No irte — solo arrancar.</div><div class="patch-step"><span class="patch-step-n">03</span> Salir del garaje y volver a entrar. Ya has conducido.</div><div class="patch-step"><span class="patch-step-n">04</span> Mañana: vuelta a la manzana. El paso 03 ya no da miedo.</div></div><div class="patch-example-note">Cada paso es tan pequeño que no activa la alarma. Cuando quieres darte cuenta, ya estás en movimiento. Da igual que tu tarea sea otra — el mecanismo es el mismo: la cadena bloquea, el paso 1 solo no.</div></div></details>`,
      storyH: `El estrés no viene de la tarea — viene de todo lo que tu cerebro proyecta alrededor. No piensas en el primer paso: piensas en toda la cadena de cosas que vendrán después. Tu cerebro procesa todo eso junto y se bloquea.\n\nEl fix: trocear. Solo la primera acción concreta — algo tan pequeño que tu cerebro no lo detecte como amenaza.\n\n<details class="patch-example-toggle"><summary class="patch-example-summary">// ejemplo práctico: te da miedo conducir <span class="toggle-hint">ver →</span></summary><div class="patch-example"><div class="patch-example-label">lo que tu cerebro ve (todo de golpe):</div><div class="patch-chain"><span>coger el coche</span><span>arrancar</span><span>salir a la calle</span><span>el tráfico</span><span>los otros coches</span><span>aparcar</span><span>que me piten</span><span>un accidente</span></div><div class="patch-example-label" style="margin-top:0.9rem">lo que realmente tienes que hacer ahora:</div><div class="patch-steps"><div class="patch-step"><span class="patch-step-n">01</span> Coger las llaves y bajar al coche. Solo eso.</div><div class="patch-step"><span class="patch-step-n">02</span> Sentarte, cinturón, arrancar. No irte — solo arrancar.</div><div class="patch-step"><span class="patch-step-n">03</span> Salir del garaje y volver a entrar. Ya has conducido.</div><div class="patch-step"><span class="patch-step-n">04</span> Mañana: vuelta a la manzana. El paso 03 ya no da miedo.</div></div><div class="patch-example-note">Da igual cuál sea tu tarea — el principio es el mismo. Tu cerebro ve la cadena entera y se bloquea. Si le muestras solo el paso 1, no salta la alarma. Y una vez en movimiento, el paso 2 ya no da tanto miedo porque el 1 ya está hecho.</div></div></details>`,
      vars: [
        { name: 'cadena completa', val: 'stress = 0.8', desc: 'El sistema no procesa la tarea como una acción — procesa toda la cadena de cosas que podrían pasar. Todo junto supera el umbral.' },
        { name: 'solo el paso 1', val: 'stress = 0.2', desc: 'Si separas solo la primera acción concreta, el stress baja de 0.8 a 0.2. La condición "if stress > THRESHOLD" falla. La evasión no se activa.' },
        { name: 'implementation intent', val: 'si X → entonces Y', desc: '"Si son las 18:00, hago solo el paso 1." Ponerle hora y lugar concretos multiplica por 3 la probabilidad de hacerlo Específico = ejecutable. Vago = bucle.' }
      ],
      varsH: [
        { name: 'Lo que bloquea', val: 'la cadena, no el paso 1', desc: 'Tu cerebro no procesa la tarea como una acción — procesa toda la cadena de cosas que podrían pasar. Todo junto es demasiado. El paso 1 solo, no.' },
        { name: 'El primer paso', val: 'solo uno, el de ahora mismo', desc: 'Algo que dure 2 minutos o menos. Que puedas hacerlo ahora mismo sin que te dé miedo. Eso no activa la alarma. Y una vez hecho, el siguiente paso cuesta menos.' },
        { name: 'Cuándo y dónde', val: 'decide ahora los dos', desc: '"Si son las X y estoy en Y, haré Z." Ponerle hora y lugar concretos multiplica por 3 la probabilidad de hacerlo ' }
      ],
      note: 'No estás engañando al sistema. Estás usando la misma lógica con un input que no activa el mecanismo de defensa.'
    },

    p2: {
      fase: 'PATCH 2 · aplicado en La Evasión',
      title: 'execute(micro_task)',
      code: 'execute(micro)  →  release_dopamine("logro")',
      codeH: '→ mueve el alivio al inicio, no al final',
      color: '#22c55e',
      story: `El bug recompensa avoid(). El fix mueve la recompensa a execute(). Condición crítica: la recompensa tiene que ser inmediata y física, no mental ni diferida.\n\n"Cuando abra el documento, me preparo un café" funciona. "Me sentiré bien al terminar" no — el cerebro no conecta señales diferidas. Con repeticiones, ejecutar reemplaza a evitar como fuente de alivio.`,
      storyH: `El error: tu cerebro recibe recompensa por evitar. El fix: mover esa recompensa al momento de empezar.\n\nPero tiene que ser inmediata y concreta. "Cuando me siente a hacerlo, me pongo música." "Cuando abra el documento, me preparo un café." Tu cerebro aprende: empezar = algo bueno. No necesitas motivación — necesitas reconfigurar cuándo llega el alivio.`,
      vars: [
        { name: 'reward.timing', val: 'inmediato', desc: 'El cerebro solo conecta recompensas que llegan en los primeros segundos. "Me sentiré bien al terminar" llega demasiado tarde.' },
        { name: 'dopamine_source', val: '"logro"', desc: 'La misma señal que antes llegaba por evitar ahora llega por ejecutar. Solo cambia el trigger.' },
        { name: 'feedback_loop', val: 'execute → reward → repeat', desc: 'Cada micro-ejecución recompensada refuerza que ejecutar = alivio.' }
      ],
      varsH: [
        { name: 'La recompensa', val: 'inmediata y concreta', desc: '"Cuando empiece, me hago un café / pongo música / salgo después." Tu cerebro conecta esa sensación con el acto de empezar.' },
        { name: 'Qué pasa con el tiempo', desc: 'Cada vez que empiezas y hay algo agradable, el cerebro aprende. La excusa pierde poder poco a poco.' },
        { name: 'Lo que no funciona', val: '"me sentiré mejor al terminar"', desc: 'Demasiado lejos. El cerebro necesita algo ahora, en los primeros segundos.' }
      ],
      note: 'No necesitas motivación. Necesitas que el primer segundo de ejecución vaya seguido de algo que tu cerebro registre como bueno.'
    },

    p3: {
      fase: 'PATCH 3 · aplicado en La Culpa',
      title: 'gc.collect(self.guilt)',
      code: 'self.guilt = 0  // liberar memoria',
      codeH: '→ suelta la culpa, no es información útil',
      color: '#22c55e',
      story: `La culpa acumulada es memoria sin liberar: ocupa recursos, eleva el stress y erosiona el THRESHOLD. El bucle se hace más fácil de activar.\n\nLa autocompasión reduce la procrastinación más que la autocrítica — no porque no importe la tarea, sino porque sin culpa el próximo intento empieza desde una posición más favorable.`,
      storyH: `La culpa siente que debería motivarte. La investigación dice lo contrario: cuanta más culpa, más difícil es empezar la siguiente vez.\n\n"Ya es tarde", "debería haberlo hecho antes", "soy incapaz" — nada de eso es un hecho. Son predicciones que tu cerebro genera bajo presión. Soltar esa historia no significa que no te importa. Significa que vas a intentarlo sin el peso extra de los días anteriores. Tratarte bien ante el fallo mejora el rendimiento futuro No es blandura — es eficiencia del sistema.`,
      vars: [
        { name: 'self.guilt', val: 'acumulada → 0.0', desc: 'Días de "debería haberlo hecho" eliminados. No porque no sean válidos — sino porque ocupan recursos que el próximo intento necesita.' },
        { name: 'THRESHOLD', val: 'reset a 0.50', desc: 'Sin culpa erosionando la tolerancia, el sistema recupera su margen original.' },
        { name: 'self-compassion', val: 'bug ≠ identidad', desc: 'El bug está en el código, no en quien lo ejecuta. La procrastinación es un patrón con un fallo lógico conocido. No es pereza.' }
      ],
      varsH: [
        { name: 'Lo que sueltas', val: 'el peso de los días anteriores', desc: '"Ya es tarde", "debería haberlo hecho" — una predicción, no un hecho. No tiene que definir el próximo intento.' },
        { name: 'Lo que recuperas', val: 'tu margen de tolerancia', desc: 'Sin culpa acumulada, el próximo intento empieza desde cero — no desde abajo.' },
        { name: 'Lo que dice la ciencia', val: 'autocompasión > autocrítica', desc: 'Las personas con más autocompasión procrastinan menos. No porque les importe menos, sino porque el fallo no las bloquea.' }
      ],
      note: 'Cargar culpa por algo pendiente solo añade peso al próximo intento. No hay ningún beneficio en mantenerla.'
    }
  };
}

let INFO = makeInfo(currentTask, [], []);

// ══════════════════════════════════════════════════════════
// TASK INPUT
// ══════════════════════════════════════════════════════════
const tfTask   = document.getElementById('tf-task');
const taskBtn  = document.getElementById('task-btn');
const tfFb     = document.getElementById('tf-fb');

// ── CHIPS ──
document.querySelectorAll('.chip:not(.chip-add)').forEach(chip => {
  chip.addEventListener('click', () => chip.classList.toggle('selected'));
});

// "+ otro" chip: show/hide custom input
document.querySelectorAll('.chip-add').forEach(btn => {
  const input = btn.nextElementSibling; // the .chip-custom-input
  btn.addEventListener('click', () => {
    const showing = input.style.display !== 'none';
    input.style.display = showing ? 'none' : 'inline-block';
    btn.classList.toggle('selected', !showing);
    if (!showing) input.focus();
  });
});

function getChipValues(containerId) {
  const selected = Array.from(document.querySelectorAll(`#${containerId} .chip.selected:not(.chip-add)`))
    .map(c => c.dataset.val);
  const custom = document.querySelector(`#${containerId} .chip-custom-input`);
  if (custom && custom.value.trim()) selected.push(custom.value.trim());
  return selected;
}

function applyTask() {
  const t       = (tfTask.value || '').trim() || 'apuntarme a inglés';
  const blocks  = getChipValues('chips-block');
  const excuses = getChipValues('chips-excuse');

  currentTask   = t;
  currentExcuse = excuses.join(', ') || 'ya lo haré mañana';
  INFO = makeInfo(t, blocks, excuses);

  const short = t.length > 16 ? t.slice(0, 14) + '…' : t;

  // Actualizar textos del SVG
  document.getElementById('t-dis').textContent = `task_received("${short}")`;
  document.getElementById('t-ame').textContent = `if stress("${short}") > 0.5`;
  document.getElementById('t-eva').textContent = `avoid("${short}")`;
  document.getElementById('t-ali').textContent = 'release_dopamine("evasión")';
  document.getElementById('t-cul').textContent = 'guilt += 0.1';
  document.getElementById('t-reb').textContent = 'difficulty *= 1.2';

  // Refrescar panel si está abierto
  if (currentPanelNode) renderPanel(currentPanelNode);

  const chipCount = blocks.length + excuses.length;
  tfFb.innerHTML = `bucle generado para: <strong style="color:var(--text)">"${t}"</strong>${chipCount ? ` · ${chipCount} variable${chipCount > 1 ? 's' : ''} seleccionada${chipCount > 1 ? 's' : ''}` : ' · selecciona chips para personalizar el análisis'}`;
  tfFb.className = 'tf-feedback ok';
}

taskBtn.addEventListener('click', applyTask);
tfTask.addEventListener('keydown', e => { if (e.key === 'Enter') applyTask(); });

// ══════════════════════════════════════════════════════════
// MODE TOGGLE
// ══════════════════════════════════════════════════════════
let techMode = true;
let currentPanelNode = null;

// ══════════════════════════════════════════════════════════
// TOUR / PANEL NAVIGATION
// ══════════════════════════════════════════════════════════
const PHASE_ORDER = ['dis', 'ame', 'eva', 'ali', 'cul', 'reb'];
const PATCH_ORDER = ['p1', 'p2', 'p3'];
let tourActive = false;
let autoOpened = false;

const btnTech  = document.getElementById('btn-tech');
const btnHuman = document.getElementById('btn-human');

function setMode(tech) {
  techMode = tech;
  btnTech.classList.toggle('ms-active', tech);
  btnHuman.classList.toggle('ms-active', !tech);
  if (currentPanelNode) renderPanel(currentPanelNode);
}
btnTech.addEventListener('click',  () => setMode(true));
btnHuman.addEventListener('click', () => setMode(false));

// ══════════════════════════════════════════════════════════
// INFO PANEL
// ══════════════════════════════════════════════════════════
const panel      = document.getElementById('info-panel');
const pFase      = document.getElementById('p-fase');
const pTitle     = document.getElementById('p-title');
const pCodeWrap  = document.getElementById('p-code-wrap');
const pStory     = document.getElementById('p-story');
const pVarsTitle = document.getElementById('p-vars-title');
const pVars      = document.getElementById('p-vars');
const pNote      = document.getElementById('p-note');
const panelClose = document.getElementById('panel-close');

function updatePanelNav(nodeId) {
  const prevBtn = document.getElementById('pnav-prev');
  const nextBtn = document.getElementById('pnav-next');
  const posEl   = document.getElementById('pnav-pos');
  const navEl   = document.getElementById('panel-nav');

  const phaseIdx = PHASE_ORDER.indexOf(nodeId);
  const patchIdx = PATCH_ORDER.indexOf(nodeId);
  let order, idx;

  if (phaseIdx !== -1) {
    order = PHASE_ORDER; idx = phaseIdx;
    posEl.textContent = `${idx + 1} / ${order.length}`;
  } else if (patchIdx !== -1) {
    order = PATCH_ORDER; idx = patchIdx;
    posEl.textContent = `patch ${idx + 1} / ${order.length}`;
  } else {
    navEl.style.display = 'none';
    return;
  }

  navEl.style.display = 'flex';
  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx === order.length - 1;
  prevBtn.onclick = () => { if (idx > 0) openPanel(order[idx - 1]); };
  nextBtn.onclick = () => { if (idx < order.length - 1) openPanel(order[idx + 1]); };
}

function highlightPatchNode(nodeId) {
  PATCH_ORDER.forEach(pid => {
    const g = document.querySelector(`#g-patches [data-node="${pid}"]`);
    if (!g) return;
    const circle = g.querySelector('circle');
    const on = pid === nodeId;
    circle.setAttribute('fill', on ? 'rgba(20,83,45,0.85)' : 'rgba(20,83,45,0.6)');
    circle.setAttribute('stroke-width', on ? '2.5' : '1.5');
    circle.setAttribute('r', on ? '13' : '11');
  });
}

function renderPanel(nodeId) {
  const d = INFO[nodeId];
  if (!d) return;
  const isHuman = !techMode;

  pFase.textContent  = d.fase;
  pFase.style.color  = d.color;
  pTitle.textContent = d.title;
  pTitle.style.color = d.color;

  if (isHuman && d.codeH) {
    pCodeWrap.innerHTML = `<div class="panel-code-h">${d.codeH}</div>`;
  } else {
    pCodeWrap.innerHTML = `<div class="panel-code">${d.code}</div>`;
  }

  const story = isHuman && d.storyH ? d.storyH : d.story;
  pStory.innerHTML = story.replace(/\n\n/g, '</p><p style="margin-top:0.8rem">');

  pVarsTitle.textContent = isHuman ? 'qué está pasando' : 'variables · estado del sistema';

  const vars = isHuman && d.varsH ? d.varsH : d.vars;
  pVars.innerHTML = vars.map(v => `
    <div class="p-var" style="border-left-color:${d.color}55">
      <div class="p-var-top">
        <span class="p-var-name">${v.name}</span>
        ${v.val ? `<span class="p-var-val">${v.val}</span>` : ''}
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
  highlightPatchNode(PATCH_ORDER.includes(nodeId) ? nodeId : null);
}

panelClose.addEventListener('click', () => {
  panel.classList.remove('open');
  currentPanelNode = null;
  autoOpened = true;
});
document.querySelectorAll('#diag [data-node]').forEach(g => {
  g.addEventListener('click', () => openPanel(g.dataset.node));
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
  cvDiff.textContent   = cDiff.toFixed(2) + '×';
  cvGuilt.textContent  = cGuilt.toFixed(1);
  cvThresh.textContent = cThresh.toFixed(2);
  cvDays.textContent   = cDays;
  cvDiff.style.color   = cDiff > 2 ? '#ef4444' : cDiff > 1.5 ? '#f87171' : '#fca5a5';
  cvThresh.style.color = cThresh < 0.3 ? '#ef4444' : cThresh < 0.4 ? '#fbbf24' : 'var(--muted)';
}

function pulseCounter(el) {
  el.classList.remove('pulse');
  void el.offsetWidth;
  el.classList.add('pulse');
}

// ══════════════════════════════════════════════════════════
// CONSOLE LOG
// ══════════════════════════════════════════════════════════
function logEntry(text, color) {
  const body = document.getElementById('console-body');
  if (!body) return;
  const line = document.createElement('div');
  line.className = 'log-line';
  line.innerHTML = `<span style="color:${color || 'var(--muted)'}">&gt; ${text}</span>`;
  body.appendChild(line);
  while (body.children.length > 8) body.removeChild(body.firstChild);
  body.scrollTop = body.scrollHeight;
}

function clearLog() {
  const body = document.getElementById('console-body');
  if (!body) return;
  body.innerHTML = '<div class="log-line"><span class="log-muted">proceso iniciado · esperando iteraciones...</span></div>';
}

// ══════════════════════════════════════════════════════════
// DIAGRAM ANIMATION
// ══════════════════════════════════════════════════════════
(function () {
  const tok    = document.getElementById('tok');
  const gLb    = document.getElementById('g-lb');
  const gBrk   = document.getElementById('g-brk');
  const gPatch = document.getElementById('g-patches');
  const dIter  = document.getElementById('d-iter');
  const dDot   = document.getElementById('d-dot');
  const dTxt   = document.getElementById('d-txt');
  const btnBug   = document.getElementById('btn-bug');
  const btnPause = document.getElementById('btn-pause');
  const btnFix   = document.getElementById('btn-fix');

  const BX = {
    ame: { el: document.getElementById('bx-ame'), col: '#eab308' },
    eva: { el: document.getElementById('bx-eva'), col: '#ef4444' },
    ali: { el: document.getElementById('bx-ali'), col: '#22c55e' },
    cul: { el: document.getElementById('bx-cul'), col: '#eab308' },
    reb: { el: document.getElementById('bx-reb'), col: '#ef4444' },
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
      BX[k].el.setAttribute('stroke',       on ? BX[k].col : '#536b83');
      BX[k].el.setAttribute('stroke-width', on ? '2.5'     : '1.5');
      BX[k].el.setAttribute('fill',         on ? 'rgba(30,46,70,0.85)' : '#0b1525');
    });
  }

  function advance() {
    if (!isBug || isPaused) return;
    wpIdx = (wpIdx + 1) % WPS.length;
    const [x, y, id, hold] = WPS[wpIdx];
    tx = x; ty = y;
    highlight(id);

    const short = currentTask.length > 20 ? currentTask.slice(0, 18) + '…' : currentTask;

    if (id === 'ame') logEntry(`if stress(0.8) > threshold(${cThresh.toFixed(2)}) → True`, 'var(--yellow)');
    if (id === 'eva') logEntry(`avoid("${short}") → "${currentExcuse || 'ya lo haré mañana'}"`, 'var(--red)');
    if (id === 'ali') logEntry(`release_dopamine("evasión") · evitar = bienestar`, 'var(--green)');

    if (id === 'cul') {
      cGuilt = Math.min(cGuilt + 0.1, 9.9);
      pulseCounter(cvGuilt);
      logEntry(`guilt += 0.1 → ${cGuilt.toFixed(1)}`, 'var(--yellow)');
    }
    if (id === 'reb') {
      cDiff   = Math.min(cDiff * 1.2, 99);
      cThresh = Math.max(cThresh - 0.05, 0.05);
      pulseCounter(cvDiff);
      pulseCounter(cvThresh);
      logEntry(`difficulty *= 1.2 → ${cDiff.toFixed(2)}× · goto fase_02`, 'var(--red)');
    }
    if (wpIdx === 0) {
      iterN++;
      cDays++;
      if (dIter) dIter.textContent = iterN;
      pulseCounter(cvDays);
      logEntry(`── iteración ${iterN} · "${short}" sin cambios ──`, 'var(--muted)');
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
        [cvDiff, cvGuilt, cvThresh, cvDays].forEach(el => { el.style.color = ''; });
        cvDiff.style.color   = '#4ade80';
        cvGuilt.style.color  = '#4ade80';
        cvDays.style.color   = '#4ade80';
        cvThresh.style.color = '#4ade80';
        setTimeout(() => {
          cvDiff.style.color   = '#f87171';
          cvGuilt.style.color  = '#fbbf24';
          cvDays.style.color   = '#f87171';
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
      btnPause.textContent = '▶ reanudar';
      btnPause.classList.add('d-paused');
    } else {
      isPaused = false;
      btnPause.textContent = '⏸ pausar';
      btnPause.classList.remove('d-paused');
      rid = requestAnimationFrame(rafLoop);
      tid = setTimeout(advance, 600);
    }
  }

  function startBug() {
    isBug = true; isPaused = false;
    btnPause.textContent = '⏸ pausar';
    btnPause.classList.remove('d-paused');
    wpIdx = 0; iterN = 1; tx = 155; ty = 163; cx = 155; cy = 163;
    cDiff = 1.0; cGuilt = 0.0; cThresh = 0.50; cDays = 0;
    updateCounters();
    if (dIter) dIter.textContent = 1;
    tok.setAttribute('opacity', '0.95');
    gLb.style.opacity    = '1';
    gBrk.style.opacity   = '0';
    gPatch.style.opacity = '0';
    gPatch.classList.remove('visible');
    dDot.style.background = 'var(--red)';
    dDot.style.animation  = 'pulse-dot 1.2s ease-in-out infinite';
    dTxt.innerHTML = 'procrastination_loop.py &nbsp;·&nbsp; <span style="color:var(--red)">running · iteración <span id="d-iter">1</span></span>';
    highlight('ame');
    clearLog();
    if (rid) cancelAnimationFrame(rid);
    rid = requestAnimationFrame(rafLoop);
    if (tid) clearTimeout(tid);
    tid = setTimeout(advance, 900);
    btnBug.classList.add('d-bug');
    btnFix.classList.remove('d-fix');
    Object.keys(BX).forEach(k => {
      BX[k].el.setAttribute('stroke', '#536b83');
      BX[k].el.setAttribute('fill', '#0b1525');
    });
  }

  function breakLoop() {
    isBug = false; isPaused = false;
    btnPause.textContent = '⏸ pausar';
    btnPause.classList.remove('d-paused');
    if (tid) clearTimeout(tid);

    gLb.classList.add('breaking');
    setTimeout(() => { gLb.style.opacity = '0'; gLb.classList.remove('breaking'); }, 500);

    tok.setAttribute('opacity', '0');
    gBrk.style.opacity   = '1';
    gPatch.style.opacity = '1';
    gPatch.classList.add('visible');
    dDot.style.background = 'var(--green)';
    dDot.style.animation  = 'none';
    dTxt.innerHTML = '<span style="color:var(--green)">loop broken · aplicando patches…</span>';
    highlight(null);

    // Log the fix sequence
    const body = document.getElementById('console-body');
    if (body) body.innerHTML = '';
    logEntry('aplicando patches...', 'var(--green)');
    setTimeout(() => logEntry('task.split() → solo el primer paso concreto → stress = 0.2', 'var(--green)'), 300);
    setTimeout(() => logEntry('0.2 < threshold(0.50) → False · alarma desactivada', 'var(--green)'), 600);
    setTimeout(() => logEntry('release_dopamine("logro") · recompensa reubicada', 'var(--green)'), 900);
    setTimeout(() => logEntry('gc.collect(guilt) → 0.0 · memoria liberada', 'var(--green)'), 1200);
    setTimeout(() => logEntry('── bucle roto · iteraciones ahorradas: ∞ ──', 'var(--green)'), 1600);

    animateReset(() => {
      dTxt.innerHTML = '<span style="color:var(--green)">loop broken · patches applied · iterations saved: ∞</span>';
      ['ame', 'eva', 'cul'].forEach(k => {
        BX[k].el.setAttribute('stroke',       '#34d399');
        BX[k].el.setAttribute('stroke-width', '2');
        BX[k].el.setAttribute('fill',         'rgba(20,83,45,0.2)');
      });
      setTimeout(() => openPanel('p1'), 400);
    });

    btnFix.classList.add('d-fix');
    btnBug.classList.remove('d-bug');
  }

  // ── TOUR ──
  const btnTour = document.getElementById('btn-tour');

  function startTour() {
    tourActive = true;
    btnTour.classList.add('touring');
    btnTour.textContent = 'Salir del tour';
    if (isBug && !isPaused) {
      isPaused = true;
      if (tid) clearTimeout(tid);
      cancelAnimationFrame(rid);
      btnPause.textContent = '▶ reanudar';
      btnPause.classList.add('d-paused');
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
      if (isBug && isPaused) pauseLoop();
    } else {
      startTour();
    }
  });

  btnBug.addEventListener('click', () => { endTour(); startBug(); });
  btnPause.addEventListener('click', pauseLoop);
  btnFix.addEventListener('click', () => { endTour(); breakLoop(); });

  // ── AUTO-OPEN on viewport ──
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

