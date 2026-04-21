// Alle 21 Lektionen mit ID, Titel und Modul-Zuordnung
const LESSONS = [
  // C1 – Schaltalgebra
  { id: 1,  module: 'c1', title: 'Schaltkreise lesen & umwandeln' },
  { id: 2,  module: 'c1', title: 'Logische Operatoren: AND, OR, NOT, XOR' },
  { id: 3,  module: 'c1', title: 'Wahrheitstabelle aus Ausdruck erstellen' },
  { id: 4,  module: 'c1', title: 'Disjunktive Normalform (DNF) ableiten' },
  { id: 5,  module: 'c1', title: 'Äquivalenz mit Wahrheitstabellen beweisen' },
  { id: 6,  module: 'c1', title: 'Gatterschaltungen zeichnen & lesen' },
  // C2 – Binärarithmetik & Sequenzielle Logik
  { id: 7,  module: 'c2', title: 'Binärsystem & Subtraktion' },
  { id: 8,  module: 'c2', title: 'Halbsubtrahierer' },
  { id: 9,  module: 'c2', title: 'Vollsubtrahierer' },
  { id: 10, module: 'c2', title: 'Addierwerk 4-Bit' },
  { id: 11, module: 'c2', title: 'SR-Riegel & Timing-Diagramme' },
  // C5 – Rechnernetze I
  { id: 12, module: 'c5', title: 'IP-Grundlagen' },
  { id: 13, module: 'c5', title: 'IP-Adressen validieren' },
  { id: 14, module: 'c5', title: 'Subnetzmasken & binäre Schreibweise' },
  { id: 15, module: 'c5', title: 'Netzwerk-IDs berechnen' },
  { id: 16, module: 'c5', title: 'Subnetting Praxis (/27, Broadcast)' },
  // C6 – Rechnernetze II
  { id: 17, module: 'c6', title: 'DNS & IP im Internet finden' },
  { id: 18, module: 'c6', title: 'Netzwerkstruktur & Wahr/Falsch' },
  { id: 19, module: 'c6', title: 'IP-Adressen im Netz prüfen' },
  { id: 20, module: 'c6', title: 'Routing-Tabellen ausfüllen' },
  { id: 21, module: 'c6', title: 'Netzwerktopologien' },
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
