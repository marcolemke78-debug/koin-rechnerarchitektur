// Kleines Inline-SVG des Klemmbrett-Symbols aus den KOIN-Uebungs-PDFs
// ("Moegliche Klausuraufgabe"). Wird in Sidebar und Lektions-Header verwendet.
const EXAM_ICON_SVG =
  '<svg class="exam-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">'
  + '<rect x="5" y="3.5" width="10" height="15" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.4"/>'
  + '<rect x="8" y="2" width="4" height="2.5" rx="0.4" fill="currentColor"/>'
  + '<path d="M7.5 7h5M7.5 10h5M7.5 13h5" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>'
  + '<path d="M17.5 6.5l2.2 2.2-5.2 5.2-2.5.3.3-2.5z" fill="currentColor"/>'
  + '</svg>';

const Renderer = {

  /**
   * Sidebar mit Lektionsliste aufbauen.
   * Jede Lektion bekommt ein <li> mit data-lesson-id und einer
   * CSS-Klasse je nach Fortschrittsstatus.
   */
  renderSidebar(lessons) {
    const listA1 = document.getElementById('lesson-list-a1');
    const listA2 = document.getElementById('lesson-list-a2');
    const listA3 = document.getElementById('lesson-list-a3');
    const listA4 = document.getElementById('lesson-list-a4');
    const listC1 = document.getElementById('lesson-list-c1');
    const listC2 = document.getElementById('lesson-list-c2');
    const listC5 = document.getElementById('lesson-list-c5');
    const listC6 = document.getElementById('lesson-list-c6');

    if (listA1) listA1.innerHTML = '';
    if (listA2) listA2.innerHTML = '';
    if (listA3) listA3.innerHTML = '';
    if (listA4) listA4.innerHTML = '';
    listC1.innerHTML = '';
    listC2.innerHTML = '';
    if (listC5) listC5.innerHTML = '';
    if (listC6) listC6.innerHTML = '';

    lessons.forEach(lesson => {
      const li = document.createElement('li');
      li.dataset.lessonId = lesson.id;
      const status = Progress.getStatus(lesson.id);
      const prefix = (status === 'completed') ? '✓ ' : '';
      if (status === 'completed') li.classList.add('completed');
      else if (status === 'in_progress') li.classList.add('in-progress');
      else li.classList.add('not-started');

      // Icon fuer klausurrelevante Lektionen (vor dem Titel)
      if (lesson.examRelevant) {
        li.classList.add('exam-relevant');
        li.innerHTML = EXAM_ICON_SVG
          + '<span class="lesson-label">' + prefix + lesson.title + '</span>';
        li.title = 'Mögliche Klausuraufgabe';
      } else {
        li.textContent = prefix + lesson.title;
      }

      const moduleTargets = {
        a1: listA1, a2: listA2, a3: listA3, a4: listA4,
        c1: listC1, c2: listC2, c5: listC5, c6: listC6
      };
      const target = moduleTargets[lesson.module];
      if (target) target.appendChild(li);
    });
  },

  /**
   * Fortschrittsbalken aktualisieren.
   * Zeigt den Gesamtfortschritt ueber alle Lektionen (A1-A4 + C1/C2/C5/C6).
   */
  renderProgressBar() {
    const percent = Progress.getCompletionPercent(1, 41);
    const bar = document.getElementById('progress-bar');
    bar.style.width = percent + '%';
  },

  /**
   * Lektionsinhalt im #lesson-container rendern.
   * Sucht die Lektionsdaten in LessonsC1/C2 und baut das
   * 3-Phasen-Layout (Erklaerung, Beispiel, Uebung) auf.
   */
  renderLesson(id) {
    const container = document.getElementById('lesson-container');

    // Lektionsdaten aus den Content-Arrays suchen
    const lessonData = (typeof LessonsA1 !== 'undefined' && LessonsA1.find(l => l.id === id))
      || (typeof LessonsA2 !== 'undefined' && LessonsA2.find(l => l.id === id))
      || (typeof LessonsA3 !== 'undefined' && LessonsA3.find(l => l.id === id))
      || (typeof LessonsA4 !== 'undefined' && LessonsA4.find(l => l.id === id))
      || LessonsC1.find(l => l.id === id)
      || LessonsC2.find(l => l.id === id)
      || LessonsC5.find(l => l.id === id)
      || LessonsC6.find(l => l.id === id);

    // Titel aus der LESSONS-Liste (hat immer einen Eintrag)
    const lessonMeta = LESSONS.find(l => l.id === id);
    const title = lessonMeta ? lessonMeta.title : 'Unbekannte Lektion';

    // Wenn keine Lektionsdaten vorhanden: Platzhalter anzeigen
    if (!lessonData) {
      container.innerHTML = `<h1>Lektion ${id}: ${title}</h1>
        <p>Inhalt wird noch erstellt...</p>`;
      return;
    }

    // --- DOM aufbauen ---

    // Titel + ggf. Klausur-Badge
    const isExamRelevant = lessonMeta && lessonMeta.examRelevant;
    const badgeHtml = isExamRelevant
      ? `<div class="exam-badge" title="Diese Lektion deckt eine in den Übungs-PDFs als mögliche Klausuraufgabe markierte Aufgabe ab.">${EXAM_ICON_SVG}<span>Mögliche Klausuraufgabe</span></div>`
      : '';
    container.innerHTML = `<h1>Lektion ${id}: ${lessonData.title}</h1>${badgeHtml}`;

    // Phase-Tabs
    const tabsDiv = document.createElement('div');
    tabsDiv.className = 'phase-tabs';

    const phases = [
      { key: 'explanation', label: 'Erklärung' },
      { key: 'example', label: 'Beispiel' },
      { key: 'exercises', label: 'Übung' }
    ];

    phases.forEach((phase, i) => {
      const btn = document.createElement('button');
      btn.className = 'phase-tab' + (i === 0 ? ' active' : '');
      btn.dataset.phase = phase.key;
      btn.textContent = phase.label;
      tabsDiv.appendChild(btn);
    });

    container.appendChild(tabsDiv);

    // Phase: Erklaerung
    const explanationSection = document.createElement('section');
    explanationSection.className = 'phase explanation active';
    explanationSection.id = 'phase-explanation';
    explanationSection.innerHTML = lessonData.explanation.html;
    // Visuals in der Erklaerungsphase rendern
    if (lessonData.explanation.visuals) {
      Renderer.renderVisuals(lessonData.explanation.visuals, explanationSection);
    }
    container.appendChild(explanationSection);

    // Phase: Beispiel
    const exampleSection = document.createElement('section');
    exampleSection.className = 'phase example';
    exampleSection.id = 'phase-example';

    if (lessonData.example) {
      const h2 = document.createElement('h2');
      h2.textContent = lessonData.example.title;
      exampleSection.appendChild(h2);

      lessonData.example.steps.forEach((step, i) => {
        const details = document.createElement('details');
        details.className = 'example-step';
        // Nur den ersten Schritt offen anzeigen
        if (i === 0) details.open = true;

        const summary = document.createElement('summary');
        summary.textContent = `Schritt ${i + 1}: ${step.label}`;
        details.appendChild(summary);

        const content = document.createElement('div');
        content.className = 'step-content';
        content.innerHTML = step.html;
        details.appendChild(content);

        // Visuals pro Schritt rendern (z.B. eine Circuit-Simulation, die zu diesem Step passt)
        if (step.visuals) {
          Renderer.renderVisuals(step.visuals, content);
        }

        exampleSection.appendChild(details);
      });

      // Visuals in der Beispielphase rendern
      if (lessonData.example.visuals) {
        Renderer.renderVisuals(lessonData.example.visuals, exampleSection);
      }
    }

    container.appendChild(exampleSection);

    // Phase: Uebungen
    const exercisesSection = document.createElement('section');
    exercisesSection.className = 'phase exercises';
    exercisesSection.id = 'phase-exercises';
    container.appendChild(exercisesSection);

    // Uebungen rendern, falls vorhanden
    if (lessonData.exercises && lessonData.exercises.length > 0) {
      const totalExercises = lessonData.exercises.length;
      let completedCount = 0;

      lessonData.exercises.forEach(exercise => {
        Exercises.render(exercise, exercisesSection, () => {
          completedCount++;
          // Wenn alle Uebungen bestanden: Lektion als abgeschlossen markieren
          if (completedCount === totalExercises) {
            Progress.setStatus(id, 'completed');
            Renderer.renderSidebar(LESSONS);
            Renderer.renderProgressBar();
          }
        });
      });
    }

    // Tab-Klick-Logik: Phase wechseln
    tabsDiv.addEventListener('click', (e) => {
      const clickedTab = e.target.closest('.phase-tab');
      if (!clickedTab) return;

      const targetPhase = clickedTab.dataset.phase;

      // Alle Tabs und Sections deaktivieren
      tabsDiv.querySelectorAll('.phase-tab').forEach(t => t.classList.remove('active'));
      container.querySelectorAll('.phase').forEach(s => s.classList.remove('active'));

      // Geklickten Tab und zugehoerige Section aktivieren
      clickedTab.classList.add('active');
      document.getElementById('phase-' + targetPhase).classList.add('active');
    });
  }
};

/**
 * SVG-Strings fuer alle 7 Logikgatter nach IEC 60617-12 (Rechteckform).
 * Als JS-Strings gespeichert, damit sie auch bei file:// funktionieren
 * (externe SVG-Referenzen via <use href> gehen dort nicht).
 */
Renderer.GATE_SVGS = {
  'and': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
    + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">&amp;</text>'
    + '<line x1="55" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>',

  'or': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
    + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">\u22651</text>'
    + '<line x1="55" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>',

  'not': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="30" x2="15" y2="30" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">1</text>'
    + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
    + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>',

  'xor': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
    + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">=1</text>'
    + '<line x1="55" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>',

  'nand': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
    + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">&amp;</text>'
    + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
    + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>',

  'nor': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
    + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">\u22651</text>'
    + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
    + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>',

  'xnor': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
    + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">=1</text>'
    + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
    + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>'
};

/**
 * Erzeugt ein SVG-DOM-Element fuer ein Logikgatter.
 * @param {string} type - Gattertyp: 'and', 'or', 'not', 'xor', 'nand', 'nor', 'xnor'
 * @param {number} [width] - Breite in px (default 80)
 * @param {number} [height] - Hoehe in px (default 60)
 * @returns {SVGElement} Das fertige SVG-Element
 */
Renderer.renderGate = function(type, width, height) {
  const svgString = Renderer.GATE_SVGS[type];
  if (!svgString) {
    console.warn('Unbekannter Gattertyp:', type);
    return document.createElement('span');
  }
  const container = document.createElement('div');
  container.innerHTML = svgString;
  const svg = container.firstElementChild;
  if (width) svg.setAttribute('width', width);
  if (height) svg.setAttribute('height', height);
  return svg;
};

/**
 * Rendert Visualisierungen in einen Container.
 * Liest das visuals-Array aus den Lektionsdaten und dispatcht an Visuals-Methoden.
 *
 * @param {Array} visuals - Array von Visual-Config-Objekten
 * @param {HTMLElement} container - Ziel-Container
 */
Renderer.renderVisuals = function(visuals, container) {
  if (!visuals || !Array.isArray(visuals) || visuals.length === 0) return;

  // Instances merken fuer Kopplung (z.B. CircuitView + TimingDiagram)
  let lastCircuitInstance = null;
  let lastTimingInstance = null;

  visuals.forEach(vis => {
    switch (vis.type) {
      case 'gate-sim':
        Visuals.renderGateSim(vis, container);
        break;
      case 'circuit':
        lastCircuitInstance = Visuals.renderCircuit(vis, container, {
          width: vis.width,
          height: vis.height,
          onUpdate: (outputs) => {
            // Automatische Kopplung mit Timing-Diagramm
            if (lastTimingInstance && lastCircuitInstance) {
              const vals = Object.assign({}, lastCircuitInstance.state.inputs, outputs);
              lastTimingInstance.addEvent(vals);
            }
          }
        });
        break;
      case 'truth-table-linked':
        Visuals.renderTruthTableLinked(vis, container);
        break;
      case 'binary-animation':
        Visuals.renderBinaryAnimation(vis, container);
        break;
      case 'expression-tree':
        Visuals.renderExpressionTree(vis, container);
        break;
      case 'dnf-highlighter':
        Visuals.renderDNFHighlighter(vis, container);
        break;
      case 'timing-diagram':
        lastTimingInstance = Visuals.renderTimingDiagram(vis, container);
        // Initiales Event vom gekoppelten Circuit
        if (lastCircuitInstance) {
          const outputs = lastCircuitInstance.getOutputs();
          lastTimingInstance.addEvent(Object.assign({}, lastCircuitInstance.state.inputs, outputs));
        }
        break;
      case 'adder-sim':
        Visuals.renderAdderSim(vis, container);
        break;
      case 'ip-converter':
        Visuals.renderIPConverter(vis, container);
        break;
      case 'subnet-calculator':
        Visuals.renderSubnetCalculator(vis, container);
        break;
      case 'subnetting-viz':
        Visuals.renderSubnettingViz(vis, container);
        break;
      case 'network-diagram':
        Visuals.renderNetworkDiagram(vis, container);
        break;
      case 'bst-viz':
        Visuals.renderBstViz(vis, container);
        break;
      case 'hashtable-viz':
        Visuals.renderHashtableViz(vis, container);
        break;
      case 'bit-layout':
        Visuals.renderBitLayout(vis, container);
        break;
      case 'stellenwert-viz':
        Visuals.renderStellenwertViz(vis, container);
        break;
      case 'struktogramm':
        Visuals.renderStruktogramm(vis, container);
        break;
      case 'flussdiagramm':
        Visuals.renderFlussdiagramm(vis, container);
        break;
      case 'binary-interactive':
        Visuals.renderBinaryInteractive(vis, container);
        break;
      case 'bst-interactive':
        Visuals.renderBstInteractive(vis, container);
        break;
      case 'hashtable-interactive':
        Visuals.renderHashtableInteractive(vis, container);
        break;
      default:
        console.warn('Unbekannter Visual-Typ:', vis.type);
    }
  });
};

// Event-Delegation: Klicks auf Sidebar-<li>-Elemente abfangen
// Wird einmal registriert und bleibt auch nach Sidebar-Neurendern aktiv
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sidebar').addEventListener('click', (e) => {
    // Naechstes <li> im DOM-Baum finden (falls auf ein Kind-Element geklickt wurde)
    const li = e.target.closest('li[data-lesson-id]');
    if (li) {
      const lessonId = parseInt(li.dataset.lessonId, 10);
      navigateToLesson(lessonId);
    }
  });
});
