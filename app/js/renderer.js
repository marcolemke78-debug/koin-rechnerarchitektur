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
   * Erstmal nur Platzhalter-Text, spaeter werden hier die
   * eigentlichen Lektionsinhalte aus LessonsC1/C2 geladen.
   */
  renderLesson(id) {
    const container = document.getElementById('lesson-container');
    // Lektion aus LESSONS finden (globale Konstante aus app.js)
    const lesson = LESSONS.find(l => l.id === id);
    const title = lesson ? lesson.title : 'Unbekannte Lektion';
    container.innerHTML = `<h1>Lektion ${id}: ${title}</h1><p>Inhalt folgt...</p>`;
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
