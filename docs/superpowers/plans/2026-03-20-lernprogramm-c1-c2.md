# KOIN Lernprogramm C1 & C2 – Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ein interaktives Lernprogramm als lokale Web-App fuer die Lerneinheiten C1 (Schaltalgebra) und C2 (Binaerarithmetik & sequenzielle Logik).

**Architecture:** Vanilla HTML/CSS/JS ohne Framework oder Server. Einzelne index.html als Einstiegspunkt, modulare JS-Dateien fuer Navigation, Rendering, Uebungslogik und Lektionsinhalte. Fortschritt via localStorage.

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript (ES6+), SVG fuer Gatterschaltungen

**Spec:** `docs/superpowers/specs/2026-03-20-lernprogramm-c1-c2-design.md`

**Hinweis:** Da dies eine Vanilla-JS-App ohne Build-Tool oder Test-Framework ist, erfolgt die Verifikation durch manuelles Oeffnen im Browser. Jeder Task beschreibt, was sichtbar/pruefbar sein muss.

---

## File Map

```
app/
  index.html                    -- HTML-Shell mit Sidebar + Hauptbereich
  css/
    style.css                   -- Gesamtes Styling (Layout, Komponenten, Responsive)
  js/
    app.js                      -- Einstiegspunkt: Init, Routing, Event-Delegation
    progress.js                 -- localStorage lesen/schreiben, Fortschritt-Logik
    renderer.js                 -- DOM-Rendering: Lektionen, Phasen, Sidebar-Updates
    exercises.js                -- Uebungslogik: alle Uebungstypen, Validierung
    parser.js                   -- Boolescher Ausdruck-Parser + Wahrheitstabellen-Evaluator
    lessons-c1.js               -- Lektionsdaten 1-10 (Erklaerung, Beispiele, Uebungen)
    lessons-c2.js               -- Lektionsdaten 11-17 (Erklaerung, Beispiele, Uebungen)
  assets/
    gates.svg                   -- Alle IEC 60617-12 Gattersymbole als SVG-Symbole
```

---

## Task 1: Projekt-Scaffold und HTML-Shell

**Files:**
- Create: `app/index.html`
- Create: `app/css/style.css`
- Create: `app/js/app.js`

- [ ] **Step 1: Verzeichnisstruktur anlegen**

```bash
mkdir -p app/css app/js app/assets
```

- [ ] **Step 2: index.html erstellen**

Grundgeruest mit:
- `<aside id="sidebar">` – Sidebar mit Modulliste (hart kodierte Lektionsnamen als `<li>`)
- `<main id="content">` – Hauptbereich (erstmal leer, Platzhaltertext)
- `<script>`-Tags fuer alle JS-Dateien (als Module oder klassisch mit defer)
- Meta-Tags fuer Viewport und Charset

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KOIN Lernprogramm – Rechnerarchitektur</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <aside id="sidebar">
    <h2>Lektionen</h2>
    <div id="module-c1">
      <h3>C1 – Schaltalgebra</h3>
      <ul id="lesson-list-c1"></ul>
    </div>
    <div id="module-c2">
      <h3>C2 – Binaerarithmetik</h3>
      <ul id="lesson-list-c2"></ul>
    </div>
    <button id="reset-progress">Fortschritt zuruecksetzen</button>
  </aside>
  <main id="content">
    <div id="progress-bar-container">
      <div id="progress-bar"></div>
    </div>
    <div id="lesson-container"></div>
  </main>
  <script src="js/progress.js"></script>
  <script src="js/parser.js"></script>
  <script src="js/exercises.js"></script>
  <script src="js/renderer.js"></script>
  <script src="js/lessons-c1.js"></script>
  <script src="js/lessons-c2.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
```

- [ ] **Step 3: Basis-CSS erstellen**

Layout mit CSS Grid: Sidebar links (280px), Hauptbereich flexibel. Grundlegende Typografie, Farben (Blau #2563EB als Akzent), Weissraum.

```css
/* Variablen */
:root {
  --accent: #2563EB;
  --accent-light: #DBEAFE;
  --success: #16A34A;
  --error: #DC2626;
  --text: #1F2937;
  --text-light: #6B7280;
  --bg: #FFFFFF;
  --sidebar-bg: #F9FAFB;
  --border: #E5E7EB;
  --sidebar-width: 280px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--text);
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  min-height: 100vh;
}

#sidebar {
  background: var(--sidebar-bg);
  border-right: 1px solid var(--border);
  padding: 1.5rem;
  overflow-y: auto;
  position: sticky;
  top: 0;
  height: 100vh;
}

#content {
  padding: 2rem 3rem;
  max-width: 800px;
}

/* Weitere Basisstile: Ueberschriften, Links, Listen */
```

- [ ] **Step 4: Leere JS-Dateien als Platzhalter erstellen**

Jede Datei mit einem Kommentar-Header und leerem Grundgeruest:
- `app/js/app.js` – `// Einstiegspunkt`
- `app/js/progress.js` – `const Progress = {};`
- `app/js/parser.js` – `const Parser = {};`
- `app/js/exercises.js` – `const Exercises = {};`
- `app/js/renderer.js` – `const Renderer = {};`
- `app/js/lessons-c1.js` – `const LessonsC1 = [];`
- `app/js/lessons-c2.js` – `const LessonsC2 = [];`

- [ ] **Step 5: Im Browser pruefen**

`open app/index.html` – Sidebar links sichtbar, Hauptbereich rechts, Titel in Tab-Leiste.

- [ ] **Step 6: Commit**

```bash
git add app/
git commit -m "feat: project scaffold with HTML shell, base CSS, empty JS modules"
```

---

## Task 2: Fortschritt-System (localStorage)

**Files:**
- Modify: `app/js/progress.js`

- [ ] **Step 1: Progress-Modul implementieren**

```javascript
const Progress = {
  STORAGE_KEY: 'koin_lernprogramm_progress',
  VERSION: 1,

  // Standard-Zustand erzeugen
  createDefault() { /* ... */ },

  // Aus localStorage laden (mit Versions-Check)
  load() { /* ... */ },

  // In localStorage speichern
  save(data) { /* ... */ },

  // Lektionsstatus lesen
  getStatus(lessonId) { /* ... */ },

  // Lektionsstatus setzen
  setStatus(lessonId, status) { /* ... */ },

  // Letzte Lektion lesen/setzen
  getLastLesson() { /* ... */ },
  setLastLesson(lessonId) { /* ... */ },

  // Fortschritt zuruecksetzen
  reset() { /* ... */ },

  // Fortschritt in Prozent (fuer Fortschrittsbalken)
  getCompletionPercent(moduleStart, moduleEnd) { /* ... */ }
};
```

Drei Status-Werte: `not_started`, `in_progress`, `completed`.
Schema wie in Spec definiert mit `version`, `lessons`-Map, `lastLesson`.
Bei Version-Mismatch: localStorage loeschen und Default erzeugen.

- [ ] **Step 2: Im Browser pruefen**

Konsole oeffnen, `Progress.load()` ausfuehren, `localStorage` pruefen ob Daten geschrieben werden. `Progress.setStatus(1, 'completed')` testen, Seite neu laden, `Progress.getStatus(1)` muss `'completed'` zurueckgeben.

- [ ] **Step 3: Commit**

```bash
git add app/js/progress.js
git commit -m "feat: progress tracking module with localStorage persistence"
```

---

## Task 3: Navigation und Sidebar-Rendering

**Files:**
- Modify: `app/js/app.js`
- Modify: `app/js/renderer.js`
- Modify: `app/css/style.css`

- [ ] **Step 1: Lektionsliste als Konstante in app.js definieren**

Array mit `{ id, title, module }` fuer alle 17 Lektionen. Diese Liste wird spaeter auch von lessons-c1.js/c2.js genutzt, dient hier aber erstmal der Navigation.

```javascript
const LESSONS = [
  { id: 1, title: 'Was ist Rechnerarchitektur?', module: 'c1' },
  { id: 2, title: 'Serien- & Parallelschaltung', module: 'c1' },
  // ... alle 17
];
```

- [ ] **Step 2: Renderer.renderSidebar() implementieren**

Erzeugt `<li>`-Elemente fuer jede Lektion in der passenden `<ul>` (c1 oder c2). Jedes `<li>` bekommt:
- `data-lesson-id` Attribut
- CSS-Klasse je nach Status: `not-started`, `in-progress`, `completed`
- Haekchen-Symbol (✓) bei completed

- [ ] **Step 3: Klick-Navigation implementieren**

Event-Delegation auf Sidebar: Klick auf `<li>` ruft `navigateToLesson(id)` auf. Diese Funktion:
- Setzt `lastLesson` im Progress
- Ruft `Renderer.renderLesson(id)` auf (erstmal Platzhalter)
- Markiert aktives Element in Sidebar

- [ ] **Step 4: Fortschrittsbalken rendern**

`Renderer.renderProgressBar()` – berechnet Prozent ueber `Progress.getCompletionPercent()` und setzt Breite des Balkens.

- [ ] **Step 5: Auto-Navigation bei Start**

`app.js` – `DOMContentLoaded`: Sidebar rendern, dann zur `lastLesson` navigieren (oder Lektion 1 wenn neu).

- [ ] **Step 6: Reset-Button verdrahten**

Klick auf `#reset-progress` zeigt `confirm()`-Dialog, bei Ja: `Progress.reset()`, Sidebar neu rendern, zu Lektion 1 navigieren.

- [ ] **Step 7: Sidebar-CSS stylen**

Lektionsliste mit Status-Indikatoren, aktives Element hervorheben, Hover-Effekte, Fortschrittsbalken als farbiger Balken.

- [ ] **Step 8: Im Browser pruefen**

- Sidebar zeigt alle 17 Lektionen in zwei Modulen
- Klick auf Lektion markiert sie als aktiv
- Fortschrittsbalken zeigt 0%
- Reset-Button funktioniert

- [ ] **Step 9: Commit**

```bash
git add app/js/app.js app/js/renderer.js app/css/style.css
git commit -m "feat: sidebar navigation with progress indicators and auto-resume"
```

---

## Task 4: Lektion-Renderer (3 Phasen)

**Files:**
- Modify: `app/js/renderer.js`
- Modify: `app/css/style.css`

- [ ] **Step 1: Lektions-Datenformat definieren**

Jede Lektion in lessons-c1.js / lessons-c2.js folgt diesem Format:

```javascript
{
  id: 1,
  title: 'Was ist Rechnerarchitektur?',
  explanation: {
    html: '<p>Erklaerungs-HTML...</p>'
  },
  example: {
    title: 'Beispiel: ...',
    steps: [
      { label: 'Schritt 1', html: '<p>...</p>' },
      { label: 'Schritt 2', html: '<p>...</p>' }
    ]
  },
  exercises: [
    {
      type: 'multiple-choice',
      question: '...',
      options: ['A', 'B', 'C'],
      correct: 0,
      explanation: '...'
    }
  ]
}
```

- [ ] **Step 2: Renderer.renderLesson(id) implementieren**

Sucht Lektion in LessonsC1/LessonsC2 Arrays, erzeugt DOM:
1. `<h1>` mit Lektionstitel
2. `<section class="phase explanation">` – HTML aus `explanation.html`
3. `<section class="phase example">` – aufklappbare Schritte
4. `<section class="phase exercises">` – wird an Exercises-Modul delegiert

- [ ] **Step 3: Aufklappbare Beispiel-Schritte**

Jeder Schritt ist ein `<details><summary>` Element. Schritte sind initial geschlossen. Der erste Schritt ist offen. CSS fuer Schritte: nummeriert, visuell als Karten.

- [ ] **Step 4: Phasen-Navigation**

Drei Tabs/Buttons oben: "Erklaerung | Beispiel | Uebung". Klick zeigt die jeweilige Phase an, andere werden per CSS (`display: none`) versteckt. Nutzer kann frei zwischen Phasen wechseln.

- [ ] **Step 5: Test-Lektion als Platzhalter**

Eine Dummy-Lektion in `lessons-c1.js` einfuegen (Lektion 1 mit Platzhalter-Inhalt), damit der Renderer getestet werden kann.

- [ ] **Step 6: CSS fuer Lektions-Phasen**

Styling fuer: Phase-Tabs, Erklaerungstext, Beispiel-Schritte (Karten mit Nummer), Uebungsbereich.

- [ ] **Step 7: Im Browser pruefen**

- Lektion 1 anklicken zeigt Titel + Erklaerung
- Tab-Wechsel zwischen Phasen funktioniert
- Beispiel-Schritte sind aufklappbar

- [ ] **Step 8: Commit**

```bash
git add app/js/renderer.js app/js/lessons-c1.js app/css/style.css
git commit -m "feat: lesson renderer with 3-phase layout and collapsible example steps"
```

---

## Task 5: Uebungstyp – Multiple Choice

**Files:**
- Modify: `app/js/exercises.js`
- Modify: `app/css/style.css`

- [ ] **Step 1: Exercises.renderMultipleChoice() implementieren**

Erzeugt DOM fuer eine Multiple-Choice-Frage:
- Frage als `<p>`
- Optionen als `<button>`-Liste
- Klick auf Option: richtig → gruen + Erklaerung, falsch → rot + Hinweis
- Nach richtiger Antwort: "Weiter"-Button oder naechste Uebung

```javascript
Exercises.renderMultipleChoice = function(exercise, container, onComplete) {
  // DOM erzeugen
  // Event-Listener fuer Optionen
  // Feedback anzeigen
  // onComplete() aufrufen wenn richtig
};
```

- [ ] **Step 2: Exercises.render() als Dispatcher**

Zentrale Funktion die anhand von `exercise.type` die richtige Render-Funktion aufruft.

```javascript
Exercises.render = function(exercise, container, onComplete) {
  switch (exercise.type) {
    case 'multiple-choice':
      return Exercises.renderMultipleChoice(exercise, container, onComplete);
    // weitere Typen folgen
  }
};
```

- [ ] **Step 3: Lektion-Completion-Logik**

Wenn alle Uebungen einer Lektion bestanden: `Progress.setStatus(id, 'completed')`, Sidebar aktualisieren, Fortschrittsbalken aktualisieren.

- [ ] **Step 4: MC-Frage in Dummy-Lektion einfuegen und testen**

- [ ] **Step 5: CSS fuer MC-Buttons**

Optionen als Karten, Hover-Effekt, richtig/falsch-Feedback mit Farbe und Icon.

- [ ] **Step 6: Im Browser pruefen**

- MC-Frage wird angezeigt
- Falsche Antwort: rot, Hinweis erscheint
- Richtige Antwort: gruen, Lektion wird als completed markiert
- Haekchen erscheint in Sidebar

- [ ] **Step 7: Commit**

```bash
git add app/js/exercises.js app/js/renderer.js app/css/style.css
git commit -m "feat: multiple choice exercise type with feedback and completion tracking"
```

---

## Task 6: Uebungstyp – Wahrheitstabelle

**Files:**
- Modify: `app/js/exercises.js`
- Modify: `app/css/style.css`

- [ ] **Step 1: Datenformat fuer Wahrheitstabellen-Uebung definieren**

```javascript
{
  type: 'truth-table',
  question: 'Fuellen Sie die Wahrheitstabelle fuer a ∧ b aus.',
  variables: ['a', 'b'],
  resultColumns: ['a ∧ b'],
  // Eingabezeilen werden aus Variablen automatisch generiert (binaer zaehlen)
  // correctResults ist ein 2D-Array: [Zeile][Spalte]
  correctResults: [[0], [0], [0], [1]]
}
```

- [ ] **Step 2: Exercises.renderTruthTable() implementieren**

- Generiert Eingangsspalten automatisch (binaer aufsteigend zaehlen)
- Ergebnisspalten sind klickbare Zellen (initial leer oder "?")
- Klick toggled: leer → 0 → 1 → leer
- "Pruefen"-Button vergleicht mit correctResults
- Falsche Zellen werden rot markiert, richtige gruen

- [ ] **Step 3: Unterstuetzung fuer Zwischenschritte (Substitutionen)**

Manche Uebungen haben mehrere Ergebnisspalten (z.B. `¬b`, `a ∧ ¬b`, `Ergebnis`). Das Format `resultColumns` und `correctResults` unterstuetzt das bereits – jede Zeile hat so viele Werte wie Spalten.

- [ ] **Step 4: CSS fuer Wahrheitstabellen**

Tabelle mit klaren Grenzen, Eingangsspalten grau hinterlegt, klickbare Zellen mit Hover-Effekt, Feedback-Farben.

- [ ] **Step 5: Test-Uebung in Dummy-Lektion einfuegen und testen**

- [ ] **Step 6: Im Browser pruefen**

- Tabelle wird korrekt angezeigt
- Klick auf Zelle toggled Werte
- Pruefen-Button zeigt Feedback
- Alle richtig → Lektion completed

- [ ] **Step 7: Commit**

```bash
git add app/js/exercises.js app/css/style.css
git commit -m "feat: truth table exercise type with clickable cells and validation"
```

---

## Task 7: Boolescher Ausdruck-Parser

**Files:**
- Modify: `app/js/parser.js`

- [ ] **Step 1: Tokenizer implementieren**

Wandelt String in Token-Array um. Erkennt:
- Variablen: `a`-`z` (einzelne Kleinbuchstaben)
- Operatoren: `∧` `∨` `¬` `⊕` `⊼` `⊽` `⊙`
- Klammern: `(` `)`
- Ignoriert Leerzeichen

```javascript
Parser.tokenize = function(expression) { /* ... */ };
```

- [ ] **Step 2: Recursive-Descent-Parser implementieren**

Grammatik (Operatorrangfolge: NOT > AND > OR/XOR):

```
expr     → orExpr
orExpr   → andExpr (('∨' | '⊕' | '⊽' | '⊙') andExpr)*
andExpr  → notExpr (('∧' | '⊼') notExpr)*
notExpr  → '¬' notExpr | atom
atom     → variable | '(' expr ')'
```

Gibt einen AST (Abstract Syntax Tree) als verschachteltes Objekt zurueck:
```javascript
{ op: '∧', left: { variable: 'a' }, right: { variable: 'b' } }
```

```javascript
Parser.parse = function(expression) { /* ... */ };
```

- [ ] **Step 3: Evaluator implementieren**

Wertet AST mit gegebener Variablenbelegung aus:

```javascript
Parser.evaluate = function(ast, assignment) {
  // assignment = { a: 0, b: 1, c: 0 }
  // Gibt 0 oder 1 zurueck
};
```

- [ ] **Step 4: Wahrheitstabellen-Vergleich implementieren**

Erzeugt alle Variablenbelegungen, evaluiert beide Ausdruecke, vergleicht Ergebnisse:

```javascript
Parser.areEquivalent = function(expr1, expr2, variables) {
  // Gibt true zurueck wenn fuer alle Belegungen gleiche Ergebnisse
};
```

- [ ] **Step 5: Variablen-Extraktion**

```javascript
Parser.extractVariables = function(ast) {
  // Gibt sortiertes Array aller Variablen im AST zurueck
};
```

- [ ] **Step 6: Im Browser testen (Konsole)**

```javascript
Parser.areEquivalent('a∧b', 'b∧a', ['a','b']) // true
Parser.areEquivalent('¬(a∧b)', '¬a∨¬b', ['a','b']) // true (De Morgan)
Parser.areEquivalent('a∧b', 'a∨b', ['a','b']) // false
```

- [ ] **Step 7: Commit**

```bash
git add app/js/parser.js
git commit -m "feat: boolean expression parser with equivalence checking via truth tables"
```

---

## Task 8: Uebungstyp – Ausdruck eingeben

**Files:**
- Modify: `app/js/exercises.js`
- Modify: `app/css/style.css`

- [ ] **Step 1: Datenformat definieren**

```javascript
{
  type: 'expression-input',
  question: 'Geben Sie den logischen Ausdruck fuer diese Wahrheitstabelle ein.',
  variables: ['a', 'b'],
  correctExpression: '¬a∧b∨a∧¬b',  // Muster-Ausdruck (Aequivalenz wird geprueft)
  hint: 'Tipp: Verwenden Sie die Disjunktive Normalform.'
}
```

- [ ] **Step 2: Exercises.renderExpressionInput() implementieren**

- Textfeld fuer Eingabe
- Sonderzeichen-Buttons: ∧ ∨ ¬ ⊕ (fuegen Symbol an Cursorposition ein)
- Pruefen-Button: parst Eingabe, vergleicht via `Parser.areEquivalent()`
- Fehlerbehandlung: ungueltige Syntax → "Ausdruck konnte nicht gelesen werden"

- [ ] **Step 3: CSS fuer Eingabefeld und Symbolbuttons**

Textfeld breit, Symbolbuttons als Reihe darunter, monospace Schrift im Textfeld.

- [ ] **Step 4: Im Browser pruefen**

- Symbolbuttons fuegen Zeichen ein
- Korrekte aequivalente Ausdruecke werden akzeptiert
- Syntaxfehler zeigen Fehlermeldung

- [ ] **Step 5: Commit**

```bash
git add app/js/exercises.js app/css/style.css
git commit -m "feat: expression input exercise with symbol buttons and semantic validation"
```

---

## Task 9: Uebungstyp – Zuordnung (Klick-basiert)

**Files:**
- Modify: `app/js/exercises.js`
- Modify: `app/css/style.css`

- [ ] **Step 1: Datenformat definieren**

```javascript
{
  type: 'matching',
  question: 'Ordnen Sie jedem Gattersymbol den passenden Operator zu.',
  pairs: [
    { left: '<svg>...</svg>', leftLabel: 'AND-Gatter', right: '∧' },
    { left: '<svg>...</svg>', leftLabel: 'OR-Gatter', right: '∨' },
    { left: '<svg>...</svg>', leftLabel: 'NOT-Gatter', right: '¬' }
  ]
}
```

- [ ] **Step 2: Exercises.renderMatching() implementieren**

Zwei Spalten: Links Gatterbilder, rechts Operatoren (gemischt). Nutzer klickt links ein Element (wird markiert), dann rechts das passende (wird verbunden). Visuelle Linie oder Farbcode zeigt Zuordnung. Pruefen-Button validiert.

- [ ] **Step 3: CSS fuer Zuordnung**

Zwei-Spalten-Layout, selektierte Elemente hervorgehoben, verbundene Paare farblich markiert.

- [ ] **Step 4: Im Browser pruefen**

- [ ] **Step 5: Commit**

```bash
git add app/js/exercises.js app/css/style.css
git commit -m "feat: click-based matching exercise type"
```

---

## Task 10: Uebungstypen – Binaerrechnung und Zustandstabelle

**Files:**
- Modify: `app/js/exercises.js`
- Modify: `app/css/style.css`

- [ ] **Step 1: Binaerrechnung-Datenformat definieren**

```javascript
{
  type: 'binary-calculation',
  question: 'Berechnen Sie 101 + 111 im Binaersystem.',
  operand1: [1, 0, 1],
  operand2: [1, 1, 1],
  correctResult: [1, 1, 0, 0],
  correctCarries: [1, 1, 1]  // Uebertraege
}
```

- [ ] **Step 2: Exercises.renderBinaryCalculation() implementieren**

Darstellung wie schriftliche Addition: zwei Zeilen mit Binaerziffern, Uebertragszeile oben, Ergebniszeile unten. Nutzer fuellt Uebertraege und Ergebnis in Eingabefelder (je 1 Zeichen, 0 oder 1).

- [ ] **Step 3: Zustandstabelle-Datenformat definieren**

```javascript
{
  type: 'state-table',
  question: 'Fuellen Sie die Ein-/Ausgaenge des Halbaddierers aus.',
  inputColumns: ['a', 'b'],
  outputColumns: ['s', 'c'],
  inputs: [[0,0], [0,1], [1,0], [1,1]],
  correctOutputs: [[0,0], [1,0], [1,0], [0,1]]
}
```

- [ ] **Step 4: Exercises.renderStateTable() implementieren**

Aehnlich wie Wahrheitstabelle, aber mit beschrifteten Ein-/Ausgangsspalten. Eingangsspalten sind vorgegeben, Ausgangsspalten sind klickbar.

- [ ] **Step 5: CSS fuer Binaerrechnung und Zustandstabelle**

Binaerrechnung: Grid-Layout wie schriftliche Addition. Zustandstabelle: wie Wahrheitstabelle mit anderem Header.

- [ ] **Step 6: Im Browser pruefen**

- [ ] **Step 7: Commit**

```bash
git add app/js/exercises.js app/css/style.css
git commit -m "feat: binary calculation and state table exercise types"
```

---

## Task 11: SVG Gatter-Assets

**Files:**
- Create: `app/assets/gates.svg`

- [ ] **Step 1: SVG-Datei mit IEC 60617-12 Gattersymbolen erstellen**

Alle 7 Gatter als wiederverwendbare SVG-Symbole (`<symbol id="gate-and">` etc.):
- AND (Rechteck mit &)
- OR (Rechteck mit ≥1)
- NOT (Dreieck mit Kreis / Rechteck mit 1 und Negationskreis)
- XOR (Rechteck mit =1)
- NAND (AND + Negationskreis)
- NOR (OR + Negationskreis)
- XNOR (XOR + Negationskreis)

IEC 60617-12 Norm: Rechteckige Symbole mit Kennzeichnung im Inneren.

Zusaetzlich: Verbindungslinien-Stil, Eingangs-/Ausgangsmarkierungen.

- [ ] **Step 2: Helper-Funktion zum Einbetten**

In renderer.js eine Funktion die ein Gate-SVG per `<use href="assets/gates.svg#gate-and">` einbettet, mit konfigurierbarer Groesse.

- [ ] **Step 3: Im Browser pruefen**

Alle 7 Gatter korrekt dargestellt, skalierbar.

- [ ] **Step 4: Commit**

```bash
git add app/assets/gates.svg app/js/renderer.js
git commit -m "feat: IEC 60617-12 gate symbol SVGs"
```

---

## Task 12: Lektions-Inhalte C1 – Lektionen 1-5

**Files:**
- Modify: `app/js/lessons-c1.js`

Quelle: `LE_C1/LE_C1_.pdf` und `LE_C1/Uebungen_C1_Aufgaben.pdf`

- [ ] **Step 1: Lektion 1 – Was ist Rechnerarchitektur?**

Erklaerung: Hardware vs. Software, 0 und 1, Ueberblick ueber die drei Darstellungsformen (Wahrheitstabelle, logischer Ausdruck, Gatterschaltung).
Beispiel: Einfacher Schaltkreis mit Batterie, Schalter, Lampe.
Uebung: 2 MC-Fragen zum Verstaendnis.

- [ ] **Step 2: Lektion 2 – Serien- & Parallelschaltung**

Erklaerung: Serienschaltung = UND, Parallelschaltung = ODER, mit Schaltkreis-Bildern.
Beispiel: Schaltkreis mit S1, S2, S3 → Wahrheitstabelle ableiten.
Uebung: MC + Wahrheitstabelle (angelehnt an Aufgabe 1 Uebungsblatt).

- [ ] **Step 3: Lektion 3 – AND, OR, NOT**

Erklaerung: Die drei elementaren Operatoren mit Wahrheitstabellen, Eselsbruecken (Strichmaennchen fuer AND, kippendes v fuer OR).
Beispiel: Alltagsbeispiele (Tim und Lea).
Uebung: MC + Wahrheitstabelle fuer AND/OR/NOT ausfuellen + Zuordnung Operator ↔ Wahrheitstabelle.

- [ ] **Step 4: Lektion 4 – XOR, NAND, NOR, XNOR**

Erklaerung: Jeder Operator mit Wahrheitstabelle und Bezug zu elementaren Operatoren.
Beispiel: XOR als Entweder-Oder, NAND als NOT+AND.
Uebung: Wahrheitstabellen ausfuellen + Zuordnung.

- [ ] **Step 5: Lektion 5 – Wahrheitstabellen erstellen**

Erklaerung: Anzahl Spalten, Anzahl Zeilen (2^n), binaer zaehlen, Substitutionen.
Beispiel: Wahrheitstabelle fuer a ∧ b ∧ c Schritt fuer Schritt.
Uebung: Wahrheitstabelle fuer gegebenen Ausdruck ausfuellen (angelehnt an Aufgabe 2a Uebungsblatt).

- [ ] **Step 6: Im Browser alle 5 Lektionen durchklicken und pruefen**

- [ ] **Step 7: Commit**

```bash
git add app/js/lessons-c1.js
git commit -m "feat: C1 lesson content for lessons 1-5 (operators and truth tables)"
```

---

## Task 13: Lektions-Inhalte C1 – Lektionen 6-10

**Files:**
- Modify: `app/js/lessons-c1.js`

- [ ] **Step 1: Lektion 6 – Logische Ausdruecke & Operatorrangfolge**

Erklaerung: Operatorrangfolge (NOT > AND > OR), Klammern, Analogie zu Punkt-vor-Strich.
Beispiel: a ∨ ¬b ∧ c → mit Klammern: a ∨ ((¬b) ∧ c).
Uebung: MC (welcher Ausdruck ist aequivalent?) + Ausdruck eingeben.

- [ ] **Step 2: Lektion 7 – Gleichung → Wahrheitstabelle**

Erklaerung: Schritt-fuer-Schritt Prozess (Variablen zaehlen, Zeilen, Spalten fuer Teilausdruecke, von innen nach aussen).
Beispiel: (¬(a ∧ b) ∧ ¬(a ∨ c)) ∧ (¬b ∨ b) komplett durchgerechnet.
Uebung: Wahrheitstabelle mit Zwischenschritten ausfuellen (angelehnt an Aufgabe 2a).

- [ ] **Step 3: Lektion 8 – Disjunktive Normalform**

Erklaerung: Nur Zeilen mit Ergebnis 1, Konjunktionen bilden, Disjunktion der Konjunktionen.
Beispiel: DNF aus bekannter Wahrheitstabelle ableiten.
Uebung: DNF als Ausdruck eingeben (angelehnt an Aufgabe 2b).

- [ ] **Step 4: Lektion 9 – Aequivalenz zeigen**

Erklaerung: Beide Seiten in Wahrheitstabelle umwandeln, letzte Spalten vergleichen.
Beispiel: a ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c) (Distributivitaet).
Uebung: Wahrheitstabellen beider Seiten ausfuellen + MC ob aequivalent.

- [ ] **Step 5: Lektion 10 – Gatterschaltungen & Axiomensystem**

Erklaerung: IEC 60617-12 Gattersymbole, elementare vs. zusammengesetzte Gatter, Gatternetz lesen (von links nach rechts), Axiomensystem-Tabelle (Kommutativitaet, De Morgan etc.).
Beispiel: Gatternetz → logischen Ausdruck ablesen.
Uebung: Zuordnung Gatter ↔ Operator + MC zu Axiomen + Ausdruck aus Gatternetz ablesen (angelehnt an Aufgabe 3).

- [ ] **Step 6: Im Browser alle Lektionen 6-10 durchklicken und pruefen**

- [ ] **Step 7: Commit**

```bash
git add app/js/lessons-c1.js
git commit -m "feat: C1 lesson content for lessons 6-10 (expressions, DNF, gates, axioms)"
```

---

## Task 14: Lektions-Inhalte C2 – Lektionen 11-17

**Files:**
- Modify: `app/js/lessons-c2.js`

Quelle: `LE_C2/Folien Le_C2 Informatik 11.pdf` und `LE_C2/Uebungen_C2_Aufgaben.pdf`

- [ ] **Step 1: Lektion 11 – Binaersystem als Schalter**

Erklaerung: Binaerziffern als Schalter (0=offen, 1=geschlossen), Bit, einfache Berechnungen.
Beispiel: Gerade/ungerade pruefen ueber geringstwertiges Bit.
Uebung: MC-Fragen.

- [ ] **Step 2: Lektion 12 – ALU und Binaeraddition**

Erklaerung: Was ist eine ALU, Additionsregeln fuer Bits, Summe und Uebertrag.
Beispiel: Binaere Addition 1+1=10 erklaert.
Uebung: Binaerrechnung (einfache 1-Bit Additionen).

- [ ] **Step 3: Lektion 13 – Halbaddierer**

Erklaerung: Zwei Eingaenge (a, b), zwei Ausgaenge (s, c), XOR fuer Summe, AND fuer Uebertrag.
Beispiel: Halbaddierer-Wahrheitstabelle + Gatterschaltung.
Uebung: Zustandstabelle ausfuellen + MC zum Halbsubtrahierer (Aufgabe 1).

- [ ] **Step 4: Lektion 14 – Volladdierer**

Erklaerung: Dritter Eingang cin, aus zwei Halbaddierern zusammengesetzt.
Beispiel: Binaere 4-Bit-Addition 1011 + 0111 durchgerechnet.
Uebung: Zustandstabelle Volladdierer + Binaerrechnung (Aufgabe 3).

- [ ] **Step 5: Lektion 15 – Addierwerk fuer mehrstellige Binaerzahlen**

Erklaerung: Mehrere Volladdierer verkettet, Uebertrag wird weitergegeben, Ergebnis hat n+1 Bits.
Beispiel: 3-Bit Addierwerk: 101 + 111 = 1100, mit Annotation aller Zwischen-Werte.
Uebung: Binaerrechnung 3-Bit + MC zu Addierwerk-Struktur (Aufgabe 3).

- [ ] **Step 6: Lektion 16 – Sequenzielle Logik & Flipflops**

Erklaerung: Schaltnetze vs. Schaltwerke, Rueckkopplung, Takt, bistabile Kippstufe als Wippe.
Beispiel: Zwei stabile Zustaende erklaert.
Uebung: MC-Fragen (Unterschiede Schaltnetz/Schaltwerk, was ist Rueckkopplung).

- [ ] **Step 7: Lektion 17 – SR-Riegel**

Erklaerung: NOR-basierter SR-Riegel, Set/Reset/Speichern/verbotener Zustand, Timing-Diagramme.
Beispiel: Zustandsfolge bei gegebenen S/R-Eingaengen.
Uebung: MC zu Q/Q-quer Verlaeufen (Timing-Zuordnung, angelehnt an Aufgabe 4).

- [ ] **Step 8: Im Browser alle Lektionen 11-17 durchklicken und pruefen**

- [ ] **Step 9: Commit**

```bash
git add app/js/lessons-c2.js
git commit -m "feat: C2 lesson content for lessons 11-17 (adders, sequential logic, SR-latch)"
```

---

## Task 15: Feinschliff und Integration

**Files:**
- Modify: `app/css/style.css`
- Modify: `app/js/app.js`
- Modify: `app/index.html`

- [ ] **Step 1: Responsive CSS fuer Tablet**

Media Query fuer Screens < 1024px: Sidebar wird zum ausklappbaren Hamburger-Menue, Hauptbereich nutzt volle Breite.

- [ ] **Step 2: Alle Lektionen komplett durchspielen**

Jeden Uebungstyp in jeder Lektion testen: MC, Wahrheitstabelle, Ausdruck-Eingabe, Zuordnung, Binaerrechnung, Zustandstabelle, Timing.

- [ ] **Step 3: Fortschritts-Flow testen**

- Neue Session: startet bei Lektion 1
- Lektion abschliessen → Haekchen in Sidebar
- Browser schliessen und oeffnen → Resume bei letzter Lektion
- Reset → alles zurueck

- [ ] **Step 4: Visuelles Polish**

- Uebergangsanimationen (fade) fuer Phasenwechsel
- Konsistente Abstaende und Schriftgroessen
- Print-Stylesheet (optional, falls Nutzer Erklaerungen drucken will)

- [ ] **Step 5: Commit**

```bash
git add app/
git commit -m "feat: responsive layout, visual polish, integration testing complete"
```

---

## Ausfuehrungsreihenfolge

Tasks 1-11 sind infrastrukturell und muessen sequenziell gebaut werden.
Tasks 12, 13, 14 (Lektions-Inhalte) koennten parallel bearbeitet werden, setzen aber Tasks 1-11 voraus.
Task 15 (Feinschliff) kommt zum Schluss.

```
Task 1 → Task 2 → Task 3 → Task 4 → Task 5 → Task 6 → Task 7 → Task 8 → Task 9 → Task 10 → Task 11
                                                                                                    ↓
                                                                                          Task 12 + 13 + 14 (parallel moeglich)
                                                                                                    ↓
                                                                                                 Task 15
```
