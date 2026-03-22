// Alle 17 Lektionen mit ID, Titel und Modul-Zuordnung
const LESSONS = [
  { id: 1, title: 'Was ist Rechnerarchitektur?', module: 'c1' },
  { id: 2, title: 'Serien- & Parallelschaltung', module: 'c1' },
  { id: 3, title: 'Logische Operatoren: AND, OR, NOT', module: 'c1' },
  { id: 4, title: 'Weitere Operatoren: XOR, NAND, NOR, XNOR', module: 'c1' },
  { id: 5, title: 'Wahrheitstabellen erstellen', module: 'c1' },
  { id: 6, title: 'Logische Ausdrücke & Operatorrangfolge', module: 'c1' },
  { id: 7, title: 'Gleichung → Wahrheitstabelle', module: 'c1' },
  { id: 8, title: 'Wahrheitstabelle → Gleichung (DNF)', module: 'c1' },
  { id: 9, title: 'Äquivalenz zeigen', module: 'c1' },
  { id: 10, title: 'Gatterschaltungen & Axiomensystem', module: 'c1' },
  { id: 11, title: 'Binärsystem als Schalter', module: 'c2' },
  { id: 12, title: 'ALU und Binäraddition', module: 'c2' },
  { id: 13, title: 'Halbaddierer', module: 'c2' },
  { id: 14, title: 'Volladdierer', module: 'c2' },
  { id: 15, title: 'Addierwerk', module: 'c2' },
  { id: 16, title: 'Sequenzielle Logik & Flipflops', module: 'c2' },
  { id: 17, title: 'SR-Riegel', module: 'c2' }
];

/**
 * Navigiert zu einer bestimmten Lektion.
 * Setzt den Fortschritt, markiert die aktive Lektion in der Sidebar
 * und rendert den Lektionsinhalt.
 */
function navigateToLesson(id) {
  // Fortschrittsbalken wieder einblenden (falls vom Labor kommend)
  document.getElementById('progress-bar-container').style.display = '';

  // Labor-Eintrag deselektieren
  const labEntry = document.getElementById('lab-entry');
  if (labEntry) labEntry.classList.remove('active');

  // Sidebar schliessen (auf Tablet/Mobil)
  document.getElementById('sidebar').classList.remove('open');

  // Letzte Lektion merken
  Progress.setLastLesson(id);

  // Status auf 'in_progress' setzen, wenn noch nicht gestartet
  if (Progress.getStatus(id) === 'not_started') {
    Progress.setStatus(id, 'in_progress');
  }

  // Aktives Element in der Sidebar markieren:
  // Zuerst alle .active-Klassen entfernen, dann die neue setzen
  const allItems = document.querySelectorAll('#sidebar li');
  allItems.forEach(li => li.classList.remove('active'));

  const activeItem = document.querySelector(`#sidebar li[data-lesson-id="${id}"]`);
  if (activeItem) {
    activeItem.classList.add('active');
  }

  // Lektionsinhalt rendern
  Renderer.renderLesson(id);

  // Sidebar-Status und Fortschrittsbalken aktualisieren
  Renderer.renderSidebar(LESSONS);
  Renderer.renderProgressBar();

  // Aktives Element nach dem Neu-Rendern der Sidebar nochmal setzen,
  // weil renderSidebar die <li>-Elemente neu erstellt
  const newActiveItem = document.querySelector(`#sidebar li[data-lesson-id="${id}"]`);
  if (newActiveItem) {
    newActiveItem.classList.add('active');
  }
}

/**
 * Navigiert zur Labor-/Sandbox-Seite.
 * Blendet den Fortschrittsbalken aus und rendert die Sandbox.
 */
function navigateToSandbox() {
  // Sidebar schliessen
  document.getElementById('sidebar').classList.remove('open');

  // Aktive Lektion deselektieren
  const allItems = document.querySelectorAll('#sidebar li');
  allItems.forEach(li => li.classList.remove('active'));

  // Labor-Eintrag hervorheben
  const labEntry = document.getElementById('lab-entry');
  if (labEntry) labEntry.classList.add('active');

  // Fortschrittsbalken ausblenden
  document.getElementById('progress-bar-container').style.display = 'none';

  // Sandbox rendern
  const container = document.getElementById('lesson-container');
  Sandbox.render(container);
}

// === Initialisierung beim Laden der Seite ===
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar mit allen Lektionen aufbauen
  Renderer.renderSidebar(LESSONS);

  // Fortschrittsbalken anzeigen
  Renderer.renderProgressBar();

  // Zur zuletzt besuchten Lektion navigieren (oder Lektion 1 als Default)
  const lastLesson = Progress.getLastLesson();
  navigateToLesson(lastLesson);

  // Hamburger Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // Reset-Button: Fortschritt zuruecksetzen nach Bestaetigung
  document.getElementById('reset-progress').addEventListener('click', () => {
    if (confirm('Fortschritt wirklich zurücksetzen? Alle Lektionen werden auf "nicht gestartet" gesetzt.')) {
      Progress.reset();
      location.reload();
    }
  });

  // Labor-Klick-Handler
  const labEntry = document.getElementById('lab-entry');
  if (labEntry) {
    labEntry.addEventListener('click', () => {
      navigateToSandbox();
    });
  }
});
