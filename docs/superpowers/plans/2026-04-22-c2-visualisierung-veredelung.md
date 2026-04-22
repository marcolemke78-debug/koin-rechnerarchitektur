# C2 Visualisierung & Erklärungs-Veredelung — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modul C2 (Lektionen 7–11) durch Einbindung bestehender Visualisierungen, Alltagsanalogien und Warum-Kontext so veredeln, dass es als Referenz-Qualität für C1/C5/C6 dient.

**Architecture:** Inhaltliche Erweiterung in `lessons-c2.js` nutzt bestehende Renderer in `visuals.js` über den bereits implementierten `renderer.js`-Dispatch. Zwei kleine Infrastruktur-Ergänzungen: neue Subtrahierer-Schaltungen in `circuits.js` und ein `mode: 'subtract'` in `renderBinaryAnimation`.

**Tech Stack:** Vanilla JavaScript, HTML, CSS, SVG. Kein Build-Tool, kein Framework, keine Tests. Verifikation per Browser-Test.

**Spec:** `docs/superpowers/specs/2026-04-22-c2-visualisierung-veredelung-design.md`

---

## File Structure

**Modifizierte Dateien:**

| Datei | Änderung |
|-------|----------|
| `app/js/circuits.js` | + `half-subtractor`, + `full-subtractor` (ca. 40 Zeilen) |
| `app/js/visuals.js` | Erweitern `renderBinaryAnimation` um `config.mode` ('add'\|'subtract'), Subtraktions-Logik + Borgen-Visualisierung (ca. 60 Zeilen zusätzlich) |
| `app/js/lessons-c2.js` | Komplette Neugestaltung der 5 Lektionen (L7–L11): erweiterte `explanation.html`, neu `explanation.visuals`, feinere `example.steps`, ggf. `example.visuals` |
| `app/css/style.css` | ggf. kleine Layout-Ergänzung für Side-by-Side-Darstellung von Schaltung + WTT |

**Nicht angefasst:**

- `renderer.js` (Dispatch funktioniert bereits)
- `exercises.js` (Übungen bleiben unverändert)
- Andere Lektionsmodule (C1, C5, C6 — separater Durchlauf nach Abnahme)

---

## Test-Strategie (angepasst)

Da das Projekt **kein Unit-Test-Framework** nutzt, läuft Verifikation nach folgendem Muster pro Task:

1. **Baseline-Check:** Vor der Änderung `app/index.html` öffnen und aktuellen Zustand der betroffenen Lektion kurz prüfen
2. **Änderung umsetzen**
3. **Browser-Test:** Nutzer öffnet `app/index.html`, navigiert zur Lektion, prüft Erklärung + Visual + Beispiel
4. **User-Review-Gate:** Nutzer gibt Feedback: "passt" oder "bitte X nachjustieren"
5. **Iteration bis Abnahme**
6. **Commit** erst nach Abnahme

Kein Task ist "fertig" ohne Abnahme durch den Nutzer.

---

## Task 1: Infrastruktur — Subtrahierer-Schaltungen in circuits.js

**Files:**
- Modify: `app/js/circuits.js` (nach Zeile 65, vor der schließenden `};` von CIRCUITS)

- [ ] **Step 1: `half-subtractor` hinzufügen**

Logik:
- D (Differenz) = A XOR B
- B_out (Borgen-Ausgang) = ¬A ∧ B

Einfügen nach der `sr-latch`-Definition, vor dem schließenden `};`:

```javascript
  'half-subtractor': {
    name: 'Halbsubtrahierer',
    inputs: ['A', 'B'],
    outputs: ['D', 'Bout'],
    gates: [
      { id: 'xor1', type: 'xor', inputs: ['A', 'B'], label: 'Differenz' },
      { id: 'not1', type: 'not', inputs: ['A'] },
      { id: 'and1', type: 'and', inputs: ['not1', 'B'], label: 'Borgen' }
    ],
    connections: [
      { from: 'xor1', to: 'D' },
      { from: 'and1', to: 'Bout' }
    ],
    layout: {
      inputs:  { A: { x: 0, y: 0.25 }, B: { x: 0, y: 0.75 } },
      gates:   {
        xor1: { x: 0.45, y: 0.2 },
        not1: { x: 0.25, y: 0.55 },
        and1: { x: 0.55, y: 0.7 }
      },
      outputs: { D: { x: 1, y: 0.25 }, Bout: { x: 1, y: 0.75 } }
    }
  },
```

- [ ] **Step 2: `full-subtractor` hinzufügen (nach `half-subtractor`)**

Logik (als 2 Halbsubtrahierer + OR, analog zum `full-adder`):
- HS1: D1 = A XOR B, Bout1 = ¬A ∧ B
- HS2: D = D1 XOR B_in, Bout2 = ¬D1 ∧ B_in
- Endgültig: B_out = Bout1 ∨ Bout2

```javascript
  'full-subtractor': {
    name: 'Vollsubtrahierer',
    inputs: ['A', 'B', 'Bin'],
    outputs: ['D', 'Bout'],
    gates: [
      { id: 'xor1', type: 'xor', inputs: ['A', 'B'] },
      { id: 'xor2', type: 'xor', inputs: ['xor1', 'Bin'], label: 'Differenz' },
      { id: 'not1', type: 'not', inputs: ['A'] },
      { id: 'and1', type: 'and', inputs: ['not1', 'B'] },
      { id: 'not2', type: 'not', inputs: ['xor1'] },
      { id: 'and2', type: 'and', inputs: ['not2', 'Bin'] },
      { id: 'or1',  type: 'or',  inputs: ['and1', 'and2'], label: 'Borgen' }
    ],
    connections: [
      { from: 'xor2', to: 'D' },
      { from: 'or1',  to: 'Bout' }
    ],
    layout: {
      inputs:  { A: { x: 0, y: 0.1 }, B: { x: 0, y: 0.35 }, Bin: { x: 0, y: 0.9 } },
      gates:   {
        xor1: { x: 0.25, y: 0.15 }, xor2: { x: 0.7, y: 0.25 },
        not1: { x: 0.2, y: 0.5 },   and1: { x: 0.45, y: 0.55 },
        not2: { x: 0.4, y: 0.75 },  and2: { x: 0.6, y: 0.8 },
        or1:  { x: 0.8, y: 0.75 }
      },
      outputs: { D: { x: 1, y: 0.25 }, Bout: { x: 1, y: 0.75 } }
    }
  },
```

- [ ] **Step 3: Browser-Test der Schaltungen (ohne Lektions-Einbindung)**

Temporär eine kleine HTML-Testseite oder Console-Snippet nutzen:

```javascript
// In Browser-Console auf app/index.html:
const testDiv = document.createElement('div');
document.body.appendChild(testDiv);
Visuals.renderCircuit({ circuit: 'half-subtractor' }, testDiv);
// Prüfen: 2 Eingänge A/B klickbar, 3 Gatter sichtbar, 2 Ausgänge D/Bout
// Testen: A=0, B=1 → D=1, Bout=1 ✓
// Testen: A=1, B=0 → D=1, Bout=0 ✓
// Testen: A=1, B=1 → D=0, Bout=0 ✓
// Testen: A=0, B=0 → D=0, Bout=0 ✓
```

Danach dasselbe für `full-subtractor` mit 8 Kombinationen.

- [ ] **Step 4: Nutzer-Review**

> "Die beiden Subtrahierer-Schaltungen sind in `circuits.js`. Schau sie dir im Browser an (siehe Step 3). Passen die Layouts und die Beschriftungen?"

Warten auf Abnahme.

- [ ] **Step 5: Commit nach Abnahme**

```bash
git add app/js/circuits.js
git commit -m "feat(circuits): half-subtractor und full-subtractor ergänzen

Neue Schaltungen für C2 L8 (Halbsubtrahierer) und L9 (Vollsubtrahierer).
Full-subtractor folgt dem Muster des full-adder (zwei HS + OR)."
```

---

## Task 2: Infrastruktur — Subtrahier-Modus in renderBinaryAnimation

**Files:**
- Modify: `app/js/visuals.js:484-635` (Funktion `renderBinaryAnimation`)

Aktuell hardcodiert auf Addition (Carry-Propagation). Erweitern um `config.mode: 'add' | 'subtract'`. Default bleibt `'add'` für Rückwärtskompatibilität.

- [ ] **Step 1: Parameter `mode` lesen**

In `Visuals.renderBinaryAnimation = function(config, container)` direkt nach dem Einlesen von `operandA` / `operandB`:

```javascript
const mode = config.mode || 'add';
```

- [ ] **Step 2: Berechnungsblock verzweigen**

Der aktuelle Block (Zeile ~491–500):

```javascript
// Addition berechnen
const carries = new Array(maxLen + 1).fill(0);
const result = new Array(maxLen).fill(0);

for (let i = maxLen - 1; i >= 0; i--) {
  const sum = parseInt(aPadded[i]) + parseInt(bPadded[i]) + carries[i + 1];
  result[i] = sum % 2;
  carries[i] = Math.floor(sum / 2);
}
const finalCarry = carries[0];
```

wird ersetzt durch:

```javascript
// Addition oder Subtraktion berechnen
// "carries" wird im Subtraktions-Modus als Borgen (borrow) interpretiert
const carries = new Array(maxLen + 1).fill(0);
const result = new Array(maxLen).fill(0);

for (let i = maxLen - 1; i >= 0; i--) {
  if (mode === 'subtract') {
    // a - b - borrow_in
    const diff = parseInt(aPadded[i]) - parseInt(bPadded[i]) - carries[i + 1];
    if (diff < 0) {
      result[i] = diff + 2;
      carries[i] = 1; // an nächst-höherwertige Stelle borgen
    } else {
      result[i] = diff;
      carries[i] = 0;
    }
  } else {
    const sum = parseInt(aPadded[i]) + parseInt(bPadded[i]) + carries[i + 1];
    result[i] = sum % 2;
    carries[i] = Math.floor(sum / 2);
  }
}
const finalCarry = carries[0];
```

- [ ] **Step 3: Operator-Zeichen und Beschriftung anpassen**

In der Funktion gibt es Rendering, das `+` als Operator zeigt (und ggf. "Übertrag" beschriftet). Anpassung:

- Operator-Zeichen: `mode === 'subtract' ? '−' : '+'`
- Carry-Label-Text: `mode === 'subtract' ? 'Borgen' : 'Übertrag'`

Dafür in der `render()`-Funktion die betreffenden Stellen suchen und einen Ternary einbauen. Falls die Beschriftung an einem zentralen Ort steht, als Konstante vor `render()` definieren:

```javascript
const opSymbol = mode === 'subtract' ? '−' : '+';  // −
const carryLabel = mode === 'subtract' ? 'Borgen' : 'Übertrag';
```

Und im HTML-Template `+` durch `${opSymbol}` und "Übertrag" durch `${carryLabel}` ersetzen.

- [ ] **Step 4: Browser-Test (Addition weiterhin korrekt)**

In der Browser-Console auf `app/index.html`:

```javascript
const d1 = document.createElement('div'); document.body.appendChild(d1);
Visuals.renderBinaryAnimation({ operandA: '101', operandB: '011' }, d1);
// Klick durch alle Schritte: 101+011 = 1000 ✓ (kein Regressionsfehler)
```

- [ ] **Step 5: Browser-Test (Subtraktion neu)**

```javascript
const d2 = document.createElement('div'); document.body.appendChild(d2);
Visuals.renderBinaryAnimation({ operandA: '1100', operandB: '0101', mode: 'subtract' }, d2);
// Erwartung: 12 - 5 = 7 = 0111
// Borgen-Stellen sichtbar markiert
```

Auch Grenzfälle prüfen: `1000 - 0001 = 0111` (Borgen wandert durch mehrere Stellen).

- [ ] **Step 6: Nutzer-Review**

> "Die Binär-Animation unterstützt jetzt Subtraktion mit Borgen. Schau dir das kurz im Browser an (Test-Snippet aus Step 5) — ist die Visualisierung verständlich?"

- [ ] **Step 7: Commit nach Abnahme**

```bash
git add app/js/visuals.js
git commit -m "feat(visuals): Subtraktionsmodus in renderBinaryAnimation

config.mode='subtract' aktiviert Subtraktion mit Borgen-Visualisierung.
Default 'add' bleibt für Rückwärtskompatibilität."
```

---

## Task 3: L8 Halbsubtrahierer (Pilot-Lektion)

**Files:**
- Modify: `app/js/lessons-c2.js` (Lektion `id: 8`, aktuell ca. ab Zeile 70)

Diese Lektion wird das **Referenz-Muster** für alle weiteren. Hier wird am gründlichsten iteriert.

- [ ] **Step 1: Aktuellen Zustand im Browser sichten (Baseline)**

Browser öffnen, zu "Halbsubtrahierer" navigieren, Erklärung + Beispiel + Übung kurz überfliegen. Screenshot oder mentale Notiz: "so sieht's vorher aus".

- [ ] **Step 2: `explanation.html` erweitern**

Struktur der neuen Erklärung:

1. **Einführungs-Absatz** (bleibt, evtl. geringfügig glätten)
2. **Alltagsanalogie** (NEU) — "Mini-Maschine mit zwei Knöpfen und zwei Lämpchen"
3. **Definition D und B_out** (bleibt)
4. **Warum-Kontext** (NEU) — "Kleinster Baustein der Subtraktions-Hardware…"
5. **Hinweis auf die interaktive Schaltung unten** (NEU, überleitender Satz)
6. **Wahrheitstabelle** (bleibt als Textversion oder wird durch das verlinkte Visual ersetzt — siehe Step 3)

Der HTML-Skeleton (Entwurf von Claude, Nutzer reviewt Analogie-Wording):

```html
<h2>Halbsubtrahierer</h2>

<p>Der Halbsubtrahierer subtrahiert <strong>2 Bits</strong> (A minus B) und liefert zwei Ausgänge:</p>

<ul>
  <li><strong>D (Differenz):</strong> Das Ergebnis von A − B</li>
  <li><strong>B_out (Borgen-Ausgang):</strong> Musste von der nächsten Stelle geborgt werden?</li>
</ul>

<div class="analogy-box">
  <strong>Stell dir eine Mini-Maschine vor:</strong> Zwei Knöpfe (A und B), zwei Lämpchen (D und B_out).
  Du drückst die Knöpfe in einer Kombination (z.B. A=0, B=1) und liest an den Lämpchen ab, was rauskommt.
  Der Halbsubtrahierer ist genau so eine Maschine — nur eben als elektronische Schaltung aus Gattern.
</div>

<p class="why-context">
  <strong>Warum lernen wir das?</strong> Der Halbsubtrahierer ist der kleinste Baustein, aus dem wir gleich
  den Vollsubtrahierer bauen — und aus mehreren Vollsubtrahierern ein komplettes Subtraktionswerk, das
  mehrstellige Binärzahlen verarbeitet. Wie Lego: Erst der einzelne Stein, dann das Modul, dann die ganze Maschine.
</p>

<p>Unten siehst du die Schaltung <em>interaktiv</em>: Klicke auf A und B, um Werte umzuschalten.
Die Wahrheitstabelle rechts (bzw. unten) zeigt dir die passende Zeile.</p>
```

**Hinweis:** Die Klassen `analogy-box` und `why-context` müssen ggf. in `style.css` gestyled werden (siehe Task 3.5 weiter unten) oder als inline-style eingefügt werden. Empfehlung: CSS-Klassen, damit sie in allen Lektionen wiederverwendbar sind.

- [ ] **Step 3: `explanation.visuals` neu befüllen**

Ans Ende der Lektionsdefinition (nach `html: ...`) das `visuals`-Array ergänzen:

```javascript
explanation: {
  html: '...', // der Text aus Step 2
  visuals: [
    {
      type: 'circuit',
      circuit: 'half-subtractor',
      label: 'Halbsubtrahierer — klicke A und B'
    },
    {
      type: 'truth-table-linked',
      question: 'Wahrheitstabelle (zeigt die aktuelle Eingangs-Kombination)',
      variables: ['A', 'B'],
      resultColumns: ['D', 'Bout'],
      // pre-berechnete Werte:
      correctResults: [
        [0, 0], // A=0,B=0
        [1, 1], // A=0,B=1
        [1, 0], // A=1,B=0
        [0, 0]  // A=1,B=1
      ],
      linkedCircuit: 'half-subtractor'
    }
  ]
},
```

**Wichtig — zu prüfen beim Implementieren:** Ob `renderTruthTableLinked` einen `linkedCircuit`-Parameter unterstützt, der die gezeigte Zeile mit der aktiven Eingangs-Kombination der Schaltung synchronisiert. Falls nicht, muss die Verlinkung im `renderer.js`-Dispatch hergestellt werden (letzte Circuit-Instanz → TruthTable-Hook). Ist das nicht out-of-the-box möglich, reduzieren wir auf zwei unabhängige Visuals nebeneinander und stellen die Synchronisation in einer späteren Iteration her. Das ist okay — dieser Plan bleibt dann funktional.

- [ ] **Step 4: `example.steps` feiner zerlegen**

Aktueller `example` hat ca. 2 Steps. Neu: 4 Steps, je eine Eingangs-Kombination, mit begleitendem Mini-Visual.

```javascript
example: {
  title: 'Beispiel: Alle 4 Eingangs-Kombinationen',
  steps: [
    {
      label: 'A=0, B=0 → D=0, B_out=0',
      html: '<p>Beide Eingänge sind 0. Nichts zu subtrahieren, kein Borgen nötig. Die XOR-Gatter-Ausgabe ist 0 (beide Eingänge gleich), das UND mit negiertem A ist auch 0.</p>',
      visuals: [
        { type: 'circuit', circuit: 'half-subtractor', presetInputs: { A: 0, B: 0 }, interactive: false }
      ]
    },
    {
      label: 'A=0, B=1 → D=1, B_out=1 (kritischer Fall!)',
      html: '<p>Hier zeigt sich das Borgen: 0 minus 1 geht nicht ohne Borgen. <strong>D=1</strong> (weil 10₂ − 1 = 1), <strong>B_out=1</strong> (wir borgen von der nächsten Stelle).</p>',
      visuals: [
        { type: 'circuit', circuit: 'half-subtractor', presetInputs: { A: 0, B: 1 }, interactive: false }
      ]
    },
    {
      label: 'A=1, B=0 → D=1, B_out=0',
      html: '<p>Einfachster Fall: 1 minus 0 ist 1. Kein Borgen nötig.</p>',
      visuals: [
        { type: 'circuit', circuit: 'half-subtractor', presetInputs: { A: 1, B: 0 }, interactive: false }
      ]
    },
    {
      label: 'A=1, B=1 → D=0, B_out=0',
      html: '<p>1 minus 1 ist 0. Kein Borgen nötig.</p>',
      visuals: [
        { type: 'circuit', circuit: 'half-subtractor', presetInputs: { A: 1, B: 1 }, interactive: false }
      ]
    }
  ]
}
```

**Wichtig — zu prüfen:** Ob `renderCircuit` einen `presetInputs`-Parameter unterstützt. Falls nicht: entweder als Feature in `visuals.js`/`renderer.js` ergänzen (kleine Änderung) oder die Eingangs-Werte statisch in den HTML-Text schreiben und auf das Step-Visual verzichten. Entscheidung beim Implementieren; bei Bedarf zusätzlicher Unter-Step "Extend renderCircuit mit presetInputs".

- [ ] **Step 5: CSS-Klassen für analogy-box und why-context (optional, falls Klassen verwendet)**

In `app/css/style.css` ergänzen:

```css
.analogy-box {
  background: #f0f7ff;
  border-left: 4px solid #2563EB;
  padding: 12px 16px;
  margin: 12px 0;
  border-radius: 4px;
}

.why-context {
  background: #fffbeb;
  border-left: 4px solid #f59e0b;
  padding: 12px 16px;
  margin: 12px 0;
  border-radius: 4px;
}
```

Farbcodierung: Blau = "Analogie/Bild", Gelb = "Warum/Motivation". Konsistent in allen Lektionen.

- [ ] **Step 6: Browser-Test L8**

`app/index.html` öffnen (evtl. mit Ctrl+Shift+R / Cmd+Shift+R Hard-Reload), zur Lektion "Halbsubtrahierer" navigieren.

Prüfen:
- Erklärung wird korrekt gerendert (inkl. analogy-box, why-context in Farbe)
- Schaltungs-Visual erscheint und ist klickbar
- Wahrheitstabelle erscheint
- Beispiel hat 4 Steps, jeder Step zeigt die richtige Eingangs-Konfiguration (falls `presetInputs` implementiert)
- Übungen funktionieren weiterhin unverändert

- [ ] **Step 7: Nutzer-Review — der wichtigste Gate im ganzen Plan**

Das ist die Pilot-Lektion. Hier entscheidet sich das Muster.

> "L8 Halbsubtrahierer ist fertig. Bitte im Browser anschauen und mir Feedback geben:
> 1. Liest sich die Analogie flüssig, oder klingt sie gekünstelt?
> 2. Passt der Warum-Kontext?
> 3. Ist die Kombination Schaltung + WTT + 4 Example-Steps übersichtlich oder zu voll?
> 4. Farbgebung analogy-box / why-context okay?"

Iterieren bis Abnahme ("passt, das wird unser Muster").

- [ ] **Step 8: Commit nach Abnahme**

```bash
git add app/js/lessons-c2.js app/css/style.css
git commit -m "feat(c2): L8 Halbsubtrahierer — Visuals, Analogie, Warum-Kontext

Pilot-Lektion für C2-Veredelung. Interaktive Schaltung + verlinkte WTT,
Alltagsanalogie (Mini-Maschine), Warum-Kontext (Lego-Prinzip),
Example in 4 feine Steps zerlegt (alle Eingangs-Kombinationen).
Referenz-Muster für L7/L9/L10/L11."
```

---

## Task 4: L7 Binärsystem & Subtraktion

**Files:**
- Modify: `app/js/lessons-c2.js` (Lektion `id: 7`, aktuell ab Zeile ~4)

Muster aus L8 anwenden. Haupt-Visual: `renderBinaryAnimation` mit `mode: 'subtract'` (jetzt verfügbar dank Task 2).

- [ ] **Step 1: Baseline im Browser**

Aktuelle Lektion "Binärsystem & Subtraktion" ansehen.

- [ ] **Step 2: `explanation.html` erweitern**

Struktur:

1. Einführung Binärsystem (bleibt, Stellenwert-Tabelle behalten)
2. **Alltagsanalogie Binärsystem** (NEU) — "Stell dir einen Zahlenschloss vor, wo jede Rolle nur 0 oder 1 zeigen kann. Mit 4 Rollen kannst du 16 Zustände darstellen."
3. **Warum-Kontext Binärsystem** (NEU) — "Computer kennen nur zwei Zustände: Strom an oder aus. Jede Zahl muss deshalb in dieses Schema übersetzt werden."
4. Binäre Subtraktion (bleibt)
5. **Alltagsanalogie Borgen** (NEU) — "Wie beim schriftlichen Subtrahieren im Dezimalsystem: Wenn die obere Ziffer zu klein ist, borgst du dir was vom Nachbarn."
6. **Hinweis auf die Animation unten** (NEU)

Entwürfe für analogy-boxes (Nutzer justiert beim Review):

```html
<div class="analogy-box">
  <strong>Analogie Binärsystem:</strong> Stell dir ein Zahlenschloss vor, bei dem jede Rolle nur 0 oder 1 zeigen kann.
  Mit 4 Rollen gibt es 16 mögliche Kombinationen — genau wie mit 4 Bits. Jede Stelle verdoppelt die Möglichkeiten.
</div>

<p class="why-context">
  <strong>Warum binär?</strong> Computer kennen physikalisch nur zwei Zustände: Strom fließt oder nicht.
  Deshalb muss alles, was ein Computer verarbeitet — Zahlen, Buchstaben, Bilder, Musik — in diese zweiwertige Sprache übersetzt werden.
</p>

<div class="analogy-box">
  <strong>Analogie Borgen:</strong> Genau wie beim schriftlichen Subtrahieren in der Grundschule — wenn du
  "3 − 7" rechnest, borgst du dir eine 10 vom Nachbarn. Im Binärsystem ist es dieselbe Idee, nur mit 2 statt 10.
</div>
```

- [ ] **Step 3: `explanation.visuals` befüllen**

```javascript
visuals: [
  {
    type: 'binary-animation',
    operandA: '1100',
    operandB: '0101',
    mode: 'subtract',
    label: '12 − 5 = 7 im Binärsystem (klicke Schritt für Schritt durch)'
  }
]
```

Der `binary-animation`-Typ muss im `renderer.js`-Dispatch vorhanden sein — Check: wir sehen in `renderer.js` bereits `Visuals.renderBinaryAnimation(vis, container)` → vermutlich als `type: 'binary-animation'`. Beim Implementieren in `renderer.js` nachschauen und ggf. den String angleichen.

- [ ] **Step 4: `example.steps` feiner zerlegen**

Statt aktuell "5−3 in 3 Zeilen" → 4 Steps:

```javascript
example: {
  title: 'Beispiel: 1100₂ − 0101₂ = 0111₂ (12 − 5 = 7)',
  steps: [
    {
      label: 'Stelle 0 (ganz rechts): 0 − 1',
      html: '<p>0 − 1 geht nicht. Wir müssen <strong>borgen</strong>. Aus der nächsten Stelle holen wir uns eine 2 (also 10₂). Rechnung: 10₂ − 1 = 1. Ergebnis-Bit: <strong>1</strong>, Borgen: <strong>1</strong>.</p>'
    },
    {
      label: 'Stelle 1: 0 − 0 − 1 (Borgen) = 1? Nein: geborgt!',
      html: '<p>Die 0 an Stelle 1 wurde durch das Borgen zu einer −1. Das heißt: 0 − 0 − 1 = −1 — wieder borgen! Ergebnis-Bit: <strong>1</strong>, Borgen: <strong>1</strong>.</p>'
    },
    {
      label: 'Stelle 2: 1 − 1 − 1 (Borgen) = −1, wieder borgen',
      html: '<p>1 − 1 − 1 = −1. Wieder borgen. Ergebnis-Bit: <strong>1</strong>, Borgen: <strong>1</strong>.</p>'
    },
    {
      label: 'Stelle 3 (ganz links): 1 − 0 − 1 (Borgen) = 0',
      html: '<p>1 − 0 − 1 = 0. Kein Borgen mehr nötig. Ergebnis-Bit: <strong>0</strong>. Gesamtergebnis: 0111₂ = 7₁₀ ✓</p>'
    }
  ],
  visuals: [
    { type: 'binary-animation', operandA: '1100', operandB: '0101', mode: 'subtract' }
  ]
}
```

- [ ] **Step 5: Browser-Test L7**

Erklärung, Animation (klickbar durchsteppen), Example-Schritte prüfen.

- [ ] **Step 6: Nutzer-Review**

> "L7 Binärsystem & Subtraktion ist überarbeitet. Passt die Animation + Analogie + Example-Zerlegung?"

- [ ] **Step 7: Commit nach Abnahme**

```bash
git add app/js/lessons-c2.js
git commit -m "feat(c2): L7 Binärsystem & Subtraktion — Borgen-Animation + Analogien

renderBinaryAnimation mit mode:'subtract' zeigt 12-5=7 Schritt für Schritt.
Analogien (Zahlenschloss, Grundschul-Borgen), Warum-Kontext (Strom an/aus),
Example in 4 feine Stellen-Schritte zerlegt."
```

---

## Task 5: L9 Vollsubtrahierer

**Files:**
- Modify: `app/js/lessons-c2.js` (Lektion `id: 9`)

Muster aus L8, mit dem Unterschied dass hier 8 Eingangs-Kombinationen statt 4 gibt (3 Inputs: A, B, B_in).

- [ ] **Step 1: Baseline im Browser**

- [ ] **Step 2: `explanation.html` erweitern**

Zentrale inhaltliche Botschaften:

- **Analogie:** "Halbsubtrahierer mit Gedächtnis" — der Vollsubtrahierer merkt sich das Borgen von der vorigen Stelle
- **Warum-Kontext:** "Der entscheidende Sprung von 1-Bit auf mehrstellige Subtraktion — erst hier wird der Baustein 'skalierbar'"
- **Strukturelle Erklärung:** Zwei Halbsubtrahierer hintereinander + OR-Gatter für das Borgen

Entwurf:

```html
<div class="analogy-box">
  <strong>Vollsubtrahierer = Halbsubtrahierer mit Gedächtnis.</strong>
  Zusätzlich zum normalen A und B gibt es jetzt einen dritten Eingang: B_in (Borgen-Eingang von der Stelle rechts).
  Der Vollsubtrahierer verarbeitet also drei Bits statt zwei — genau das, was wir für mehrstellige Zahlen brauchen.
</div>

<p class="why-context">
  <strong>Warum Vollsubtrahierer?</strong> Mit Halbsubtrahierern allein kannst du nur 1-Bit-Zahlen subtrahieren.
  Sobald mehrere Stellen im Spiel sind, muss jede Stelle wissen, ob von ihr geborgt wurde. Der Vollsubtrahierer
  ist der Baustein, den du in einer Reihe verkettest, um echte Binärzahlen (4-Bit, 8-Bit, 32-Bit) zu subtrahieren.
</p>
```

Plus: kurze Erklärung, dass die Schaltung intern aus **zwei Halbsubtrahierern + einem OR-Gatter** besteht — Verbindung zu L8 herstellen.

- [ ] **Step 3: `explanation.visuals` befüllen**

```javascript
visuals: [
  { type: 'circuit', circuit: 'full-subtractor', label: 'Vollsubtrahierer — klicke A, B, B_in' },
  {
    type: 'truth-table-linked',
    question: 'Wahrheitstabelle (8 Kombinationen)',
    variables: ['A', 'B', 'Bin'],
    resultColumns: ['D', 'Bout'],
    correctResults: [
      // A=0,B=0,Bin=0  →  D=0, Bout=0
      [0, 0],
      // A=0,B=0,Bin=1  →  D=1, Bout=1
      [1, 1],
      // A=0,B=1,Bin=0  →  D=1, Bout=1
      [1, 1],
      // A=0,B=1,Bin=1  →  D=0, Bout=1
      [0, 1],
      // A=1,B=0,Bin=0  →  D=1, Bout=0
      [1, 0],
      // A=1,B=0,Bin=1  →  D=0, Bout=0
      [0, 0],
      // A=1,B=1,Bin=0  →  D=0, Bout=0
      [0, 0],
      // A=1,B=1,Bin=1  →  D=1, Bout=1
      [1, 1]
    ],
    linkedCircuit: 'full-subtractor'
  }
]
```

- [ ] **Step 4: `example.steps` zerlegen**

Statt 8 Steps (wäre zu viel) → 3-4 exemplarische Schritte mit Fokus auf die interessanten Fälle:

```javascript
example: {
  title: 'Beispiel: Ausgewählte Eingangs-Kombinationen',
  steps: [
    {
      label: 'A=1, B=1, B_in=0 → D=0, B_out=0',
      html: '<p>1 − 1 ohne Borgen von rechts = 0. Wie beim Halbsubtrahierer, B_in hat keinen Effekt.</p>'
    },
    {
      label: 'A=1, B=1, B_in=1 → D=1, B_out=1 (Borgen macht den Unterschied!)',
      html: '<p>1 − 1 wäre 0, aber da B_in=1, rechnen wir effektiv 1 − 1 − 1 = −1. Wir müssen borgen: D=1, B_out=1.</p>'
    },
    {
      label: 'A=0, B=1, B_in=1 → D=0, B_out=1',
      html: '<p>0 − 1 − 1 = −2. Wir borgen eine 2, also D = 0, B_out = 1. In Binär: 10₂ − 1 − 1 = 0.</p>'
    }
  ],
  visuals: [
    { type: 'circuit', circuit: 'full-subtractor', interactive: true, label: 'Probier selbst aus' }
  ]
}
```

- [ ] **Step 5: Browser-Test L9**

- [ ] **Step 6: Nutzer-Review**

> "L9 Vollsubtrahierer — passt die 'Halbsubtrahierer mit Gedächtnis'-Analogie? Reichen 3 Example-Steps oder sollen es mehr sein?"

- [ ] **Step 7: Commit nach Abnahme**

```bash
git add app/js/lessons-c2.js
git commit -m "feat(c2): L9 Vollsubtrahierer — Schaltung, WTT, Analogie

full-subtractor-Schaltung + verlinkte Wahrheitstabelle (8 Zeilen).
Analogie 'Halbsubtrahierer mit Gedächtnis', Warum-Kontext zur Mehrstelligkeit.
Example: 3 ausgewählte Schritte mit Fokus auf Borgen-Effekt."
```

---

## Task 6: L10 Addierwerk 4-Bit

**Files:**
- Modify: `app/js/lessons-c2.js` (Lektion `id: 10`)

Haupt-Visual: `renderAdderSim` (bereits vorhanden, nicht neu zu bauen).

- [ ] **Step 1: Baseline im Browser**

Zusätzlich: Kurz die Signatur von `Visuals.renderAdderSim` in `visuals.js:1119` lesen, um die korrekte `config`-Struktur zu kennen.

- [ ] **Step 2: `explanation.html` erweitern**

Zentrale Botschaften:

- **Analogie:** "Staffellauf — Carry wandert wie ein Stab von rechts nach links"
- **Warum-Kontext:** "Aus 4 (oder 8, 32, 64) Volladdierern wird ein komplettes Rechenwerk — der Kern jeder CPU. Du hast gerade Teile einer CPU kennengelernt."

Entwurf:

```html
<div class="analogy-box">
  <strong>Staffellauf-Bild:</strong> Stell dir vor, 4 Läufer stehen in einer Reihe. Jeder hat zwei Zahlen zu addieren
  und eventuell einen "Stab" (Carry) vom rechten Nachbarn erhalten. Er rechnet seine Stelle fertig und reicht den
  Stab ggf. nach links weiter. Der letzte Läufer kann einen Stab ausgeben — das ist der Übertrag aus der höchsten Stelle.
</div>

<p class="why-context">
  <strong>Warum 4-Bit-Addierwerk?</strong> Hier siehst du zum ersten Mal, wie aus kleinen Bausteinen (Volladdierern)
  ein komplettes Rechenwerk entsteht. Reale CPUs nutzen genau dieses Prinzip — nur mit 32 oder 64 Bits statt 4.
  Du bist jetzt bei einem Konzept angekommen, das in jedem Computer der Welt steckt.
</p>
```

- [ ] **Step 3: `explanation.visuals` befüllen**

```javascript
visuals: [
  {
    type: 'adder-sim',
    bits: 4,
    label: '4-Bit-Addierwerk — klicke die Eingänge, beobachte den Carry'
  }
]
```

**Zu prüfen beim Implementieren:** Die exakte `config`-Struktur von `renderAdderSim`. Falls Parameter-Namen anders heißen (z.B. `width` statt `bits`), anpassen.

- [ ] **Step 4: `example.steps` zerlegen**

Ziel: Eine konkrete Rechnung (z.B. 5 + 3 = 8 in 4 Bit = 0101 + 0011 = 1000) Stelle für Stelle visuell nachvollziehen.

```javascript
example: {
  title: 'Beispiel: 0101₂ + 0011₂ = 1000₂ (5 + 3 = 8)',
  steps: [
    {
      label: 'Stelle 0 (ganz rechts): 1 + 1 + 0 = 10₂ → Summe 0, Carry 1',
      html: '<p>Der rechte Volladdierer bekommt A=1, B=1, kein Carry von rechts. Rechnung: 1+1=10₂. Summe-Bit = 0, Carry an den nächsten Volladdierer = 1.</p>'
    },
    {
      label: 'Stelle 1: 0 + 1 + 1 (Carry) = 10₂ → Summe 0, Carry 1',
      html: '<p>A=0, B=1, plus der Carry von Stelle 0 (=1). Rechnung: 0+1+1=10₂. Summe-Bit = 0, Carry weiter = 1.</p>'
    },
    {
      label: 'Stelle 2: 1 + 0 + 1 (Carry) = 10₂ → Summe 0, Carry 1',
      html: '<p>A=1, B=0, plus Carry = 1. Rechnung: 1+0+1=10₂. Summe-Bit = 0, Carry weiter = 1.</p>'
    },
    {
      label: 'Stelle 3 (ganz links): 0 + 0 + 1 (Carry) = 1 → Summe 1, Carry 0',
      html: '<p>A=0, B=0, plus Carry = 1. Rechnung: 0+0+1=1. Summe-Bit = 1, kein Carry mehr. Gesamtergebnis: <strong>1000₂ = 8 ✓</strong></p>'
    }
  ]
}
```

- [ ] **Step 5: Browser-Test L10**

- [ ] **Step 6: Nutzer-Review**

> "L10 Addierwerk — Staffellauf-Analogie passt? Das 'du kennst jetzt Teile einer CPU'-Framing im Warum-Kontext zu viel oder gut motivierend?"

- [ ] **Step 7: Commit nach Abnahme**

```bash
git add app/js/lessons-c2.js
git commit -m "feat(c2): L10 Addierwerk 4-Bit — Carry-Propagation visualisiert

renderAdderSim als Haupt-Visual. Staffellauf-Analogie für Carry,
Warum-Kontext zum CPU-Bezug. Example: 5+3=8 stellenweise durchgerechnet."
```

---

## Task 7: L11 SR-Riegel & Timing

**Files:**
- Modify: `app/js/lessons-c2.js` (Lektion `id: 11`)

Zwei Visuals kombinieren: `renderCircuit('sr-latch')` (statisch) + `renderTimingDiagram` (geführt).

- [ ] **Step 1: Baseline im Browser**

Außerdem: `Visuals.renderTimingDiagram` in `visuals.js:923` kurz lesen, um die Config-Struktur zu verstehen.

- [ ] **Step 2: `explanation.html` erweitern**

Zentrale Botschaften:

- **Analogie:** "Lichtschalter-Prinzip" — einmal gedrückt bleibt der Zustand, bis bewusst zurückgesetzt wird
- **Warum-Kontext:** "Erster Schritt Richtung Speicher. Aus dieser einfachen Rückkopplung wird später RAM."
- **Besonderheit:** Rückkopplung — der Ausgang eines Gatters fließt wieder als Eingang ins andere Gatter zurück

Entwurf:

```html
<div class="analogy-box">
  <strong>Lichtschalter-Analogie:</strong> Stell dir einen Lichtschalter vor, den du einmal drückst — und das Licht
  bleibt an, auch wenn du den Finger wegnimmst. Erst wenn du den Reset-Knopf drückst, geht das Licht wieder aus.
  Genau das macht der SR-Riegel: Einmal gesetzt (S=1), bleibt der Zustand gespeichert, bis er aktiv zurückgesetzt wird (R=1).
</div>

<p class="why-context">
  <strong>Der große Sprung — Logik bekommt ein Gedächtnis.</strong> Alle Schaltungen bisher (Gatter, Subtrahierer, Addierer)
  waren "zustandslos": Ausgang hängt nur von den aktuellen Eingängen ab. Der SR-Riegel ist der erste Baustein, der sich etwas
  <em>merkt</em>. Aus diesem Prinzip entstehen Flipflops, Register und schließlich RAM — also Arbeitsspeicher.
</p>

<p><strong>Rückkopplung erklärt:</strong> Die Besonderheit ist, dass der Ausgang von NOR1 (= Q) nicht nur nach außen geht,
sondern auch zurück als Eingang in NOR2 — und umgekehrt. Dadurch kann die Schaltung ihren eigenen Zustand "halten".</p>
```

- [ ] **Step 3: `explanation.visuals` befüllen**

```javascript
visuals: [
  {
    type: 'circuit',
    circuit: 'sr-latch',
    label: 'SR-Riegel — S setzt Q=1, R setzt Q=0, S=R=0 hält den Zustand'
  },
  {
    type: 'timing-diagram',
    signals: ['S', 'R', 'Q'],
    sequence: [
      // { t: 0, S: 0, R: 0, Q: 0 },  // Anfangszustand
      { S: 0, R: 0, Q: 0 },
      { S: 1, R: 0, Q: 1 },  // Setzen
      { S: 0, R: 0, Q: 1 },  // Halten
      { S: 0, R: 1, Q: 0 },  // Zurücksetzen
      { S: 0, R: 0, Q: 0 },  // Halten
      { S: 1, R: 0, Q: 1 }   // Erneut setzen
    ],
    label: 'Timing-Diagramm — S und R als Eingänge, Q als Ausgang'
  }
]
```

**Zu prüfen beim Implementieren:** Die exakte `config`-Struktur von `renderTimingDiagram` in `visuals.js:923`. Evtl. erwartet sie ein anderes Format für die Signal-Sequenz (z.B. separate Arrays pro Signal statt ein Array von Zuständen).

- [ ] **Step 4: `example.steps` zerlegen**

Phasenweise durch das Timing-Diagramm:

```javascript
example: {
  title: 'Zustandsfolge im SR-Riegel',
  steps: [
    {
      label: 'Phase 1: S=0, R=0 — Halten (Anfang)',
      html: '<p>Beide Eingänge 0. Q behält seinen aktuellen Wert (hier: 0). Der Riegel "schläft".</p>'
    },
    {
      label: 'Phase 2: S=1 — Setzen',
      html: '<p>S=1 zwingt Q auf 1. Das ist wie das Licht einschalten.</p>'
    },
    {
      label: 'Phase 3: S=0, R=0 — Halten (jetzt Q=1 gespeichert)',
      html: '<p>Obwohl S wieder 0 ist, <strong>bleibt Q=1</strong>. Das ist die eigentliche Speicher-Eigenschaft: Die Schaltung erinnert sich.</p>'
    },
    {
      label: 'Phase 4: R=1 — Zurücksetzen',
      html: '<p>R=1 zwingt Q auf 0. Licht aus.</p>'
    },
    {
      label: 'Phase 5: S=0, R=0 — Halten (jetzt Q=0 gespeichert)',
      html: '<p>R wieder 0, aber Q bleibt 0. Symmetrisch zum "Setzen"-Fall.</p>'
    },
    {
      label: 'Verbotener Zustand: S=R=1',
      html: '<p>Wenn beide 1 sind, gibt es einen undefinierten Zustand (beide Ausgänge 0, widersprüchlich). Dieser Fall ist <em>verboten</em> und wird in realen Schaltungen durch zusätzliche Logik verhindert (→ führt zum D-Flipflop, kommt ggf. später im Studium).</p>'
    }
  ]
}
```

- [ ] **Step 5: Browser-Test L11**

- [ ] **Step 6: Nutzer-Review**

> "L11 SR-Riegel — Lichtschalter-Analogie verständlich? Timing-Diagramm-Sequenz sinnvoll gewählt? Verbotener-Zustand-Hinweis angemessen oder zu viel?"

- [ ] **Step 7: Commit nach Abnahme**

```bash
git add app/js/lessons-c2.js
git commit -m "feat(c2): L11 SR-Riegel & Timing — Speicher-Prinzip erklärt

SR-Latch-Schaltung + Timing-Diagramm mit 5 Phasen.
Lichtschalter-Analogie, Warum-Kontext zum Gedächtnis/RAM.
Example: Zustandsfolge phasenweise + verbotener Zustand."
```

---

## Task 8: Final Regression & Abnahme ganzes Modul C2

**Files:**
- Keine neuen Änderungen; nur Durchlauf-Prüfung

- [ ] **Step 1: Kompletter Durchlauf C2 im Browser**

`app/index.html` öffnen, Fortschritt ggf. zurücksetzen (oder neuer Tab), alle 5 Lektionen L7–L11 der Reihe nach durchgehen:

- Erklärung lesen
- Alle Visuals ausprobieren (klickbar, animiert, etc.)
- Beispiel durchklicken
- Übungen lösen (müssen unverändert funktionieren)

- [ ] **Step 2: Regression-Check C1, C5, C6**

Auch in die **anderen** Module kurz reinschauen — es wurden nur `circuits.js`, `visuals.js`, `lessons-c2.js` und ggf. `style.css` angefasst. Aber: `style.css`-Änderungen und `renderBinaryAnimation`-Änderungen könnten andere Module beeinflussen.

Prüfen in C1 (LE 6 Gatterschaltungen zeichnen), C5 (IP-Konverter), C6 (Netzwerk-Diagramm): Visuals rendern wie vorher.

- [ ] **Step 3: Nutzer-Abnahme C2 als Ganzes**

> "C2 ist durch. Läuft alles, und ist das Modul jetzt in der Qualität, die du als Referenz für C1/C5/C6 sehen möchtest?"

- [ ] **Step 4: Abschluss-Commit oder -Merge (optional, je nach Branch-Strategie)**

Da im main-Branch direkt gearbeitet wurde (kein Worktree): kein Merge nötig. Alle Lektions-Commits sind bereits durch.

Optional: ein zusammenfassender Tag oder Release-Notes-Commit:

```bash
git tag -a c2-veredelung-v1 -m "C2 (L7-L11) visuell veredelt — Referenz für C1/C5/C6"
```

---

## Nach C2 — nächster Schritt

Wenn Nutzer in Task 8 abnimmt, folgt ein **separater Plan** für C1/C5/C6. Dort gilt:

- Architektur steht (CSS-Klassen, Muster-Struktur pro Lektion sind etabliert)
- Ablauf analog: pro Lektion Erklärung + Visuals + Example-Zerlegung + Review
- Analogien & Warum-Kontext pro Lektion sind neu, aber das Muster ist klar

Dieser zweite Plan wird nach Abnahme dieses hier geschrieben (separate Brainstorming-light-Phase: nur Analogien pro Lektion festlegen, dann Plan).
