const Renderer = {

  /**
   * Sidebar mit Lektionsliste aufbauen.
   * Jede Lektion bekommt ein <li> mit data-lesson-id und einer
   * CSS-Klasse je nach Fortschrittsstatus.
   */
  renderSidebar(lessons) {
    const listC1 = document.getElementById('lesson-list-c1');
    const listC2 = document.getElementById('lesson-list-c2');

    // Listen leeren, bevor wir neu rendern
    listC1.innerHTML = '';
    listC2.innerHTML = '';

    lessons.forEach(lesson => {
      const li = document.createElement('li');
      li.dataset.lessonId = lesson.id;

      // Status aus dem Progress-Modul abfragen
      const status = Progress.getStatus(lesson.id);

      // CSS-Klasse je nach Status setzen
      if (status === 'completed') {
        li.classList.add('completed');
        li.textContent = `✓ ${lesson.title}`;
      } else if (status === 'in_progress') {
        li.classList.add('in-progress');
        li.textContent = lesson.title;
      } else {
        li.classList.add('not-started');
        li.textContent = lesson.title;
      }

      // In die richtige Liste einfuegen
      if (lesson.module === 'c1') {
        listC1.appendChild(li);
      } else {
        listC2.appendChild(li);
      }
    });
  },

  /**
   * Fortschrittsbalken aktualisieren.
   * Zeigt den Gesamtfortschritt ueber alle 17 Lektionen.
   */
  renderProgressBar() {
    const percent = Progress.getCompletionPercent(1, 17);
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
    const lessonData = LessonsC1.find(l => l.id === id)
      || LessonsC2.find(l => l.id === id);

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

    // Titel
    container.innerHTML = `<h1>Lektion ${id}: ${lessonData.title}</h1>`;

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

        exampleSection.appendChild(details);
      });
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
