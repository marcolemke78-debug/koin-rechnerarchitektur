# Visuelle & Interaktive Elemente – Implementierungsplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 8 interaktive Visualisierungs-Komponenten, 3 neue Übungstypen und eine Sandbox-Seite ("Labor") zum bestehenden KOIN Lernprogramm hinzufügen.

**Architecture:** Schlankes Komponenten-System in `visuals.js` (analog zu `exercises.js`), Schaltungs-Definitionen in `circuits.js`, Sandbox-Logik in `sandbox.js`. Bestehende Dateien (`renderer.js`, `app.js`, `index.html`, `style.css`, `lessons-c1.js`, `lessons-c2.js`) werden erweitert. SVG-basiert, keine externen Abhängigkeiten.

**Tech Stack:** Vanilla JS, CSS, SVG – kein Framework. Bestehender `Parser` aus `parser.js` wird wiederverwendet.

**Spec:** `docs/superpowers/specs/2026-03-22-visuelle-elemente-design.md`

---

## Dateiübersicht

| Datei | Aktion | Verantwortung |
|-------|--------|---------------|
| `app/css/style.css` | Erweitern | 4 neue CSS-Variablen + Styles für Visualisierungen, Sandbox |
| `app/js/visuals.js` | Neu | Kern-Komponenten: GateSimulator, CircuitView, BinaryAnimation, TimingDiagram, ExpressionTree, DNFHighlighter, AdderSimulation, TruthTableLinked |
| `app/js/circuits.js` | Neu | Schaltungs-Definitionen: half-adder, full-adder, sr-latch |
| `app/js/sandbox.js` | Neu | Labor-Seite: rendert alle Komponenten im Freitext-Modus |
| `app/js/exercises.js` | Erweitern | 3 neue Übungstypen: circuit-exercise, circuit-matching, expression-tree-exercise |
| `app/js/renderer.js` | Erweitern | `renderVisuals()` für visuals-Feld in Lektionsdaten, Sandbox-Rendering |
| `app/js/app.js` | Erweitern | `navigateToSandbox()`, Labor-Sidebar-Eintrag |
| `app/index.html` | Erweitern | Neue Script-Tags, Labor-Eintrag in Sidebar |
| `app/js/lessons-c1.js` | Erweitern | visuals-Felder für Lektionen 3-10 |
| `app/js/lessons-c2.js` | Erweitern | visuals-Felder für Lektionen 12-17 |

---

## Task 1: CSS-Variablen & Basis-Styles für Visualisierungen

**Files:**
- Modify: `app/css/style.css:1-13` (CSS-Variablen in `:root`)
- Modify: `app/css/style.css` (neue Klassen am Ende anfügen)

- [ ] **Step 1: CSS-Variablen ergänzen**

In `app/css/style.css`, `:root`-Block (Zeile 2-13) um 4 Signal-Variablen erweitern:

```css
  --signal-high: #16A34A;
  --signal-low: #9CA3AF;
  --signal-carry: #F59E0B;
  --signal-active: #2563EB;
```

- [ ] **Step 2: Basis-CSS für Visualisierungen anfügen**

Am Ende von `style.css` folgende Klassen anfügen:

```css
/* === Visualisierungen === */
.visual-container {
  margin: 1.5rem 0;
  text-align: center;
}

.visual-container .visual-label {
  font-size: 0.85rem;
  color: var(--text-light);
  margin-bottom: 0.5rem;
  text-align: center;
}

.gate-sim {
  display: inline-block;
  cursor: default;
}

.gate-sim .gate-input {
  cursor: pointer;
  transition: fill 0.15s;
}

.gate-sim .gate-input:hover {
  filter: brightness(1.2);
}

.gate-sim .wire-high {
  stroke: var(--signal-high);
}

.gate-sim .wire-low {
  stroke: var(--signal-low);
}

.gate-sim .signal-dot-high {
  fill: var(--signal-high);
}

.gate-sim .signal-dot-low {
  fill: var(--signal-low);
}

/* Circuit View */
.circuit-view {
  display: block;
  width: 100%;
  max-width: 520px;
  margin: 1rem auto;
  background: #fafbfc;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
}

.circuit-view .gate-body {
  fill: white;
  stroke: var(--text);
  stroke-width: 2;
}

.circuit-view .gate-label {
  font-size: 10px;
  fill: var(--text-light);
  text-anchor: middle;
}

/* Verknüpfte Wahrheitstabelle */
.truth-table-linked {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.truth-table-linked .truth-table tr.highlighted {
  background: var(--accent-light);
  outline: 2px solid var(--accent);
  outline-offset: -1px;
}

.truth-table-linked .truth-table tr {
  cursor: pointer;
  transition: background 0.15s;
}

.truth-table-linked .truth-table tbody tr:hover {
  background: var(--accent-light);
}

/* Binäraddition Animation */
.binary-anim {
  font-family: 'Courier New', monospace;
  font-size: 1.3rem;
  line-height: 2;
  display: inline-block;
  text-align: right;
}

.binary-anim .carry-bit {
  color: var(--signal-carry);
  font-size: 0.9rem;
}

.binary-anim .active-col {
  background: var(--accent-light);
  padding: 2px 6px;
  border-radius: 3px;
  color: var(--accent);
  font-weight: bold;
}

.binary-anim .result-bit {
  color: var(--signal-high);
}

.binary-anim-controls {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 12px;
}

.binary-anim-controls button {
  padding: 6px 14px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--sidebar-bg);
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.15s;
}

.binary-anim-controls button:hover {
  background: var(--accent-light);
  border-color: var(--accent);
}

.binary-anim-controls .btn-primary {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.binary-anim-controls .btn-primary:hover {
  background: #1D4ED8;
}

.binary-anim-step-info {
  text-align: center;
  color: var(--accent);
  font-size: 0.85rem;
  margin-top: 8px;
}

/* Timing-Diagramm */
.timing-diagram {
  border-top: 1px solid var(--border);
  padding-top: 16px;
  margin-top: 16px;
}

.timing-diagram .timing-label {
  font-size: 12px;
  color: var(--text-light);
  font-weight: 600;
  margin-bottom: 8px;
}

/* Ausdrucksbaum */
.expression-tree-view {
  text-align: center;
  margin: 1rem 0;
}

.expression-tree-view .op-node {
  stroke-width: 2;
}

.expression-tree-view .op-not { fill: #FEF2F2; stroke: var(--error); }
.expression-tree-view .op-and { fill: #F0FDF4; stroke: var(--signal-high); }
.expression-tree-view .op-or  { fill: #EFF6FF; stroke: var(--accent); }
.expression-tree-view .op-text-not { fill: var(--error); }
.expression-tree-view .op-text-and { fill: var(--signal-high); }
.expression-tree-view .op-text-or  { fill: var(--accent); }

.expression-tree-view .op-hidden { fill: #FEF3C7; stroke: #F59E0B; stroke-dasharray: 4,3; }
.expression-tree-view .op-text-hidden { fill: #F59E0B; }

.expression-tree-view .var-node {
  fill: var(--sidebar-bg);
  stroke: var(--signal-low);
  stroke-width: 1.5;
}

.expression-tree-legend {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 8px;
  font-size: 0.8rem;
}

/* DNF Highlighter */
.dnf-view {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.dnf-view .dnf-formula {
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  line-height: 2.2;
}

.dnf-view .dnf-minterm {
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.dnf-view .dnf-rule {
  background: #FEF3C7;
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 0.8rem;
  color: #92400E;
  margin-top: 12px;
}

/* Adder Simulation */
.adder-sim {
  text-align: center;
}

.adder-sim .bit-toggle {
  width: 48px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  cursor: pointer;
  color: white;
  transition: all 0.15s;
  border: none;
  font-size: 1rem;
}

.adder-sim .bit-toggle.high {
  background: var(--signal-high);
}

.adder-sim .bit-toggle.low {
  background: var(--signal-low);
}

.adder-sim .bit-toggle:hover {
  filter: brightness(1.15);
}

.adder-sim .adder-result {
  color: var(--signal-high);
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 8px;
}

/* Sandbox / Labor */
.sandbox-section {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
}

.sandbox-section:last-child {
  border-bottom: none;
}

.sandbox-section h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--accent);
}

.sandbox-section p {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.sandbox-controls {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.sandbox-controls select,
.sandbox-controls input {
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 0.9rem;
}

/* Labor-Eintrag in Sidebar */
#sidebar .lab-entry {
  margin-top: 1rem;
  padding: 0.6rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--accent);
  font-weight: 600;
  border: 1px dashed var(--accent);
  text-align: center;
  transition: all 0.15s;
}

#sidebar .lab-entry:hover {
  background: var(--accent-light);
}

#sidebar .lab-entry.active {
  background: var(--accent-light);
  border-style: solid;
}
```

- [ ] **Step 3: Im Browser prüfen**

`app/index.html` im Browser öffnen. Bestehende Styles dürfen nicht kaputt sein. Die neuen CSS-Variablen sind definiert aber noch nirgends sichtbar – das ist korrekt.

- [ ] **Step 4: Commit**

```bash
git add app/css/style.css
git commit -m "feat: add CSS variables and styles for visual components"
```

---

## Task 2: GateSimulator-Komponente (`visuals.js`)

**Files:**
- Create: `app/js/visuals.js`

- [ ] **Step 1: Visuals-Objekt mit GateSimulator erstellen**

Erstelle `app/js/visuals.js` mit dem `Visuals`-Objekt und der `renderGateSim()`-Methode:

```javascript
const Visuals = {};

/**
 * Gatter-Evaluierungsfunktionen.
 * Jedes Gatter nimmt ein Array von Eingangswerten (0/1) und gibt 0 oder 1 zurueck.
 */
Visuals.GATE_FUNCTIONS = {
  and:  (inputs) => inputs.every(v => v === 1) ? 1 : 0,
  or:   (inputs) => inputs.some(v => v === 1) ? 1 : 0,
  not:  (inputs) => inputs[0] === 1 ? 0 : 1,
  xor:  (inputs) => inputs.reduce((a, b) => a ^ b, 0),
  nand: (inputs) => inputs.every(v => v === 1) ? 0 : 1,
  nor:  (inputs) => inputs.some(v => v === 1) ? 0 : 1,
  xnor: (inputs) => inputs.reduce((a, b) => a ^ b, 0) === 0 ? 1 : 0
};

/**
 * IEC 60617-12 Gatter-Symbole (Text innerhalb des Rechtecks).
 */
Visuals.GATE_SYMBOLS = {
  and: '&', or: '\u22651', not: '1',
  xor: '=1', nand: '&', nor: '\u22651', xnor: '=1'
};

/**
 * Gatter mit Negationskreis am Ausgang.
 */
Visuals.NEGATED_GATES = new Set(['not', 'nand', 'nor', 'xnor']);

/**
 * Rendert einen interaktiven Gatter-Simulator.
 *
 * @param {Object} config - { gate: 'and'|'or'|..., label?: string }
 * @param {HTMLElement} container - DOM-Element fuer die Ausgabe
 * @param {Object} [options] - { interactive: true (default), width: 320, height: 140 }
 */
Visuals.renderGateSim = function(config, container, options = {}) {
  const gateType = config.gate;
  const label = config.label || '';
  const interactive = options.interactive !== false;
  const isNot = (gateType === 'not');
  const inputCount = isNot ? 1 : 2;

  // State: Eingangswerte
  const state = { inputs: new Array(inputCount).fill(0) };

  // Wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'visual-container';

  if (label) {
    const labelEl = document.createElement('div');
    labelEl.className = 'visual-label';
    labelEl.textContent = label;
    wrapper.appendChild(labelEl);
  }

  // SVG erstellen
  const svgNS = 'http://www.w3.org/2000/svg';
  const W = 320;
  const H = isNot ? 100 : 140;
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('width', W);
  svg.setAttribute('height', H);
  svg.classList.add('gate-sim');

  // Positionen berechnen
  const inputY = isNot ? [H / 2] : [H * 0.3, H * 0.7];
  const gateX = 110;
  const gateY = 15;
  const gateW = 80;
  const gateH = H - 30;
  const outY = H / 2;

  // Hilfsfunktion: Farbe je nach Wert
  function signalColor(val) {
    return val === 1 ? 'var(--signal-high)' : 'var(--signal-low)';
  }

  // Elemente erstellen
  const elements = { inputCircles: [], inputTexts: [], wires: [], outCircle: null, outText: null, outWire: null };

  // Eingaenge
  inputY.forEach((y, i) => {
    // Wire: Eingang → Gatter
    const wire = document.createElementNS(svgNS, 'line');
    wire.setAttribute('x1', 44); wire.setAttribute('y1', y);
    wire.setAttribute('x2', gateX); wire.setAttribute('y2', y);
    wire.setAttribute('stroke-width', 3);
    elements.wires.push(wire);
    svg.appendChild(wire);

    // Eingangskreis
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', 30); circle.setAttribute('cy', y);
    circle.setAttribute('r', 14);
    circle.setAttribute('stroke', '#1F2937'); circle.setAttribute('stroke-width', 2);
    circle.classList.add('gate-input');
    elements.inputCircles.push(circle);
    svg.appendChild(circle);

    // Eingangstext (0/1)
    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('x', 30); text.setAttribute('y', y + 5);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', 'white'); text.setAttribute('font-weight', 'bold');
    text.setAttribute('font-size', '16');
    text.style.pointerEvents = 'none';
    elements.inputTexts.push(text);
    svg.appendChild(text);

    // Label unter dem Eingang
    const inputLabel = document.createElementNS(svgNS, 'text');
    inputLabel.setAttribute('x', 30); inputLabel.setAttribute('y', y + 25);
    inputLabel.setAttribute('text-anchor', 'middle');
    inputLabel.setAttribute('fill', '#6B7280'); inputLabel.setAttribute('font-size', '11');
    inputLabel.textContent = isNot ? 'Eingang' : `Eingang ${String.fromCharCode(65 + i)}`;
    svg.appendChild(inputLabel);

    // Klick-Handler
    if (interactive) {
      circle.style.cursor = 'pointer';
      circle.addEventListener('click', () => {
        state.inputs[i] = state.inputs[i] === 0 ? 1 : 0;
        update();
      });
    }
  });

  // Gatter-Rechteck
  const gateRect = document.createElementNS(svgNS, 'rect');
  gateRect.setAttribute('x', gateX); gateRect.setAttribute('y', gateY);
  gateRect.setAttribute('width', gateW); gateRect.setAttribute('height', gateH);
  gateRect.setAttribute('rx', 4);
  gateRect.setAttribute('fill', 'white'); gateRect.setAttribute('stroke', '#1F2937');
  gateRect.setAttribute('stroke-width', 2);
  svg.appendChild(gateRect);

  // Gatter-Symbol
  const gateText = document.createElementNS(svgNS, 'text');
  gateText.setAttribute('x', gateX + gateW / 2);
  gateText.setAttribute('y', outY + 7);
  gateText.setAttribute('text-anchor', 'middle');
  gateText.setAttribute('fill', '#1F2937'); gateText.setAttribute('font-size', '22');
  gateText.setAttribute('font-weight', 'bold');
  gateText.textContent = Visuals.GATE_SYMBOLS[gateType];
  svg.appendChild(gateText);

  // Gatter-Typ-Label oben
  const typeLabel = document.createElementNS(svgNS, 'text');
  typeLabel.setAttribute('x', gateX + gateW / 2);
  typeLabel.setAttribute('y', gateY - 5);
  typeLabel.setAttribute('text-anchor', 'middle');
  typeLabel.setAttribute('fill', '#6B7280'); typeLabel.setAttribute('font-size', '11');
  typeLabel.textContent = gateType.toUpperCase();
  svg.appendChild(typeLabel);

  // Negationskreis (falls NAND, NOR, NOT, XNOR)
  let negCircleX = gateX + gateW;
  if (Visuals.NEGATED_GATES.has(gateType)) {
    const negCircle = document.createElementNS(svgNS, 'circle');
    negCircle.setAttribute('cx', gateX + gateW + 4);
    negCircle.setAttribute('cy', outY);
    negCircle.setAttribute('r', 4);
    negCircle.setAttribute('fill', 'white'); negCircle.setAttribute('stroke', '#1F2937');
    negCircle.setAttribute('stroke-width', 2);
    svg.appendChild(negCircle);
    negCircleX = gateX + gateW + 8;
  }

  // Ausgangs-Wire
  const outWire = document.createElementNS(svgNS, 'line');
  outWire.setAttribute('x1', negCircleX); outWire.setAttribute('y1', outY);
  outWire.setAttribute('x2', W - 50); outWire.setAttribute('y2', outY);
  outWire.setAttribute('stroke-width', 3);
  elements.outWire = outWire;
  svg.appendChild(outWire);

  // Ausgangskreis
  const outCircle = document.createElementNS(svgNS, 'circle');
  outCircle.setAttribute('cx', W - 35); outCircle.setAttribute('cy', outY);
  outCircle.setAttribute('r', 14);
  outCircle.setAttribute('stroke', '#1F2937'); outCircle.setAttribute('stroke-width', 2);
  elements.outCircle = outCircle;
  svg.appendChild(outCircle);

  // Ausgangstext
  const outText = document.createElementNS(svgNS, 'text');
  outText.setAttribute('x', W - 35); outText.setAttribute('y', outY + 5);
  outText.setAttribute('text-anchor', 'middle');
  outText.setAttribute('fill', 'white'); outText.setAttribute('font-weight', 'bold');
  outText.setAttribute('font-size', '16');
  outText.style.pointerEvents = 'none';
  elements.outText = outText;
  svg.appendChild(outText);

  // Ausgangslabel
  const outLabel = document.createElementNS(svgNS, 'text');
  outLabel.setAttribute('x', W - 35); outLabel.setAttribute('y', outY + 25);
  outLabel.setAttribute('text-anchor', 'middle');
  outLabel.setAttribute('fill', '#6B7280'); outLabel.setAttribute('font-size', '11');
  outLabel.textContent = 'Ausgang Y';
  svg.appendChild(outLabel);

  // Formel-Anzeige unter dem SVG
  const formulaEl = document.createElement('div');
  formulaEl.style.cssText = 'color:#6B7280;font-size:13px;margin-top:6px;font-family:monospace;';

  wrapper.appendChild(svg);
  wrapper.appendChild(formulaEl);
  container.appendChild(wrapper);

  // Update-Funktion: Farben und Werte aktualisieren
  function update() {
    const output = Visuals.GATE_FUNCTIONS[gateType](state.inputs);

    // Eingaenge aktualisieren
    state.inputs.forEach((val, i) => {
      elements.inputCircles[i].setAttribute('fill', signalColor(val));
      elements.inputTexts[i].textContent = val;
      elements.wires[i].setAttribute('stroke', signalColor(val));
    });

    // Ausgang aktualisieren
    elements.outCircle.setAttribute('fill', signalColor(output));
    elements.outText.textContent = output;
    elements.outWire.setAttribute('stroke', signalColor(output));

    // Formel aktualisieren
    formulaEl.textContent = Visuals.formatGateFormula(gateType, state.inputs, output);
  }

  // Initiales Rendering
  update();

  return { update, state };
};

/**
 * Formatiert die Formel-Anzeige unter dem Gatter.
 */
Visuals.formatGateFormula = function(gateType, inputs, output) {
  const ops = {
    and: '∧', or: '∨', xor: '⊕', nand: '⊼', nor: '⊽', xnor: '⊙'
  };
  if (gateType === 'not') {
    return `¬${inputs[0]} = ${output}`;
  }
  const op = ops[gateType] || '?';
  return `${inputs[0]} ${op} ${inputs[1]} = ${output}`;
};
```

- [ ] **Step 2: Im Browser testen**

Vorher in `app/index.html` das Script einfügen (Zeile 31, nach parser.js):
```html
<script src="js/visuals.js"></script>
```

Browser-Konsole öffnen, prüfen: `typeof Visuals.renderGateSim === 'function'` → `true`

- [ ] **Step 3: Commit**

```bash
git add app/js/visuals.js app/index.html
git commit -m "feat: add GateSimulator component in visuals.js"
```

---

## Task 3: circuits.js – Schaltungs-Definitionen

**Files:**
- Create: `app/js/circuits.js`

- [ ] **Step 1: Schaltungs-Definitionen erstellen**

Erstelle `app/js/circuits.js`:

```javascript
/**
 * Vordefinierte Schaltungen als deklarative Graphen.
 * Jede Schaltung definiert Eingaenge, Ausgaenge, Gatter und deren Verbindungen.
 * Layout-Koordinaten sind relativ (0-1) und werden von CircuitView skaliert.
 */
const CIRCUITS = {
  'half-adder': {
    name: 'Halbaddierer',
    inputs: ['A', 'B'],
    outputs: ['S', 'C'],
    gates: [
      { id: 'xor1', type: 'xor', inputs: ['A', 'B'], label: 'Summe' },
      { id: 'and1', type: 'and', inputs: ['A', 'B'], label: 'Carry' }
    ],
    connections: [
      { from: 'xor1', to: 'S' },
      { from: 'and1', to: 'C' }
    ],
    layout: {
      inputs:  { A: { x: 0, y: 0.25 }, B: { x: 0, y: 0.75 } },
      gates:   { xor1: { x: 0.45, y: 0.2 }, and1: { x: 0.45, y: 0.7 } },
      outputs: { S: { x: 1, y: 0.25 }, C: { x: 1, y: 0.75 } }
    }
  },

  'full-adder': {
    name: 'Volladdierer',
    inputs: ['A', 'B', 'Cin'],
    outputs: ['S', 'Cout'],
    gates: [
      { id: 'xor1', type: 'xor', inputs: ['A', 'B'] },
      { id: 'xor2', type: 'xor', inputs: ['xor1', 'Cin'], label: 'Summe' },
      { id: 'and1', type: 'and', inputs: ['A', 'B'] },
      { id: 'and2', type: 'and', inputs: ['xor1', 'Cin'] },
      { id: 'or1',  type: 'or',  inputs: ['and1', 'and2'], label: 'Carry' }
    ],
    connections: [
      { from: 'xor2', to: 'S' },
      { from: 'or1',  to: 'Cout' }
    ],
    layout: {
      inputs:  { A: { x: 0, y: 0.15 }, B: { x: 0, y: 0.45 }, Cin: { x: 0, y: 0.85 } },
      gates:   {
        xor1: { x: 0.3, y: 0.15 }, xor2: { x: 0.6, y: 0.25 },
        and1: { x: 0.3, y: 0.55 }, and2: { x: 0.6, y: 0.65 },
        or1:  { x: 0.75, y: 0.75 }
      },
      outputs: { S: { x: 1, y: 0.25 }, Cout: { x: 1, y: 0.75 } }
    }
  },

  'sr-latch': {
    name: 'SR-Latch (NOR)',
    inputs: ['S', 'R'],
    outputs: ['Q', 'Q\u0304'],
    gates: [
      { id: 'nor1', type: 'nor', inputs: ['S', 'nor2'], label: 'NOR 1' },
      { id: 'nor2', type: 'nor', inputs: ['R', 'nor1'], label: 'NOR 2' }
    ],
    connections: [
      { from: 'nor1', to: 'Q' },
      { from: 'nor2', to: 'Q\u0304' }
    ],
    feedback: true,
    layout: {
      inputs:  { S: { x: 0, y: 0.25 }, R: { x: 0, y: 0.75 } },
      gates:   { nor1: { x: 0.4, y: 0.2 }, nor2: { x: 0.4, y: 0.7 } },
      outputs: { Q: { x: 1, y: 0.25 }, 'Q\u0304': { x: 1, y: 0.75 } }
    }
  }
};

/**
 * Evaluiert eine Schaltung mit gegebenen Eingangswerten.
 * Topologische Auswertung; bei feedback: iterativ bis stabil (max 10 Runden).
 *
 * @param {string} circuitId - Schluessel in CIRCUITS
 * @param {Object} inputValues - z.B. { A: 1, B: 0 }
 * @param {Object} [prevState] - vorheriger Zustand (fuer SR-Latch)
 * @returns {Object} - { gateOutputs: { xor1: 0, ... }, outputs: { S: 0, C: 1 } }
 */
function evaluateCircuit(circuitId, inputValues, prevState) {
  const circuit = CIRCUITS[circuitId];
  if (!circuit) throw new Error('Unbekannte Schaltung: ' + circuitId);

  const values = Object.assign({}, inputValues);

  // Bei Rueckkopplung: vorherigen Zustand als Startwert nutzen
  if (circuit.feedback && prevState) {
    circuit.gates.forEach(g => {
      if (prevState[g.id] !== undefined) {
        values[g.id] = prevState[g.id];
      }
    });
  }

  // Iterativ auswerten (bei feedback: max 10 Runden bis stabil)
  const maxIterations = circuit.feedback ? 10 : 1;
  for (let iter = 0; iter < maxIterations; iter++) {
    let changed = false;

    circuit.gates.forEach(gate => {
      const gateInputs = gate.inputs.map(inp => values[inp] !== undefined ? values[inp] : 0);
      const result = Visuals.GATE_FUNCTIONS[gate.type](gateInputs);

      if (values[gate.id] !== result) {
        values[gate.id] = result;
        changed = true;
      }
    });

    if (!changed) break;
  }

  // Ausgaenge extrahieren
  const outputs = {};
  circuit.connections.forEach(conn => {
    outputs[conn.to] = values[conn.from];
  });

  // Gatter-Ausgaenge extrahieren
  const gateOutputs = {};
  circuit.gates.forEach(g => {
    gateOutputs[g.id] = values[g.id];
  });

  return { gateOutputs, outputs, values };
}
```

- [ ] **Step 2: Script-Tag in index.html einfügen**

Nach `visuals.js` (Zeile 32 nach Step 2 von Task 2):
```html
<script src="js/circuits.js"></script>
```

- [ ] **Step 3: In Browser-Konsole testen**

```javascript
evaluateCircuit('half-adder', { A: 1, B: 1 })
// → { gateOutputs: { xor1: 0, and1: 1 }, outputs: { S: 0, C: 1 }, ... }
```

- [ ] **Step 4: Commit**

```bash
git add app/js/circuits.js app/index.html
git commit -m "feat: add circuit definitions and evaluator"
```

---

## Task 4: CircuitView-Komponente

**Files:**
- Modify: `app/js/visuals.js` (am Ende anfügen)

- [ ] **Step 1: CircuitView-Renderer implementieren**

Am Ende von `app/js/visuals.js` anfügen:

```javascript
/**
 * Rendert eine zusammengesetzte Schaltung als interaktives SVG.
 *
 * @param {Object} config - { circuit: 'half-adder', interactive: true|false }
 * @param {HTMLElement} container - DOM-Element fuer die Ausgabe
 * @param {Object} [options] - { width: 480, height: 240, onUpdate: fn }
 * @returns {Object} - { update, state, getOutputs }
 */
Visuals.renderCircuit = function(config, container, options = {}) {
  const circuitId = config.circuit;
  const circuit = CIRCUITS[circuitId];
  if (!circuit) {
    container.textContent = 'Unbekannte Schaltung: ' + circuitId;
    return;
  }

  const interactive = config.interactive !== false;
  const W = options.width || 480;
  const H = options.height || 240;
  const PAD = 40; // Padding innerhalb des SVG

  // State
  const state = {
    inputs: {},
    prevGateOutputs: {}
  };
  circuit.inputs.forEach(inp => { state.inputs[inp] = 0; });

  // Wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'visual-container';

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', H);
  svg.classList.add('circuit-view');

  // Layout: relative Koordinaten → absolute Pixel
  function toPixel(relX, relY) {
    return {
      x: PAD + relX * (W - 2 * PAD),
      y: PAD + relY * (H - 2 * PAD)
    };
  }

  // DOM-Referenzen fuer Updates
  const refs = { inputCircles: {}, inputTexts: {}, gateRects: {}, gateBodies: {},
                 outputCircles: {}, outputTexts: {}, wires: [] };

  function signalColor(val) {
    return val === 1 ? 'var(--signal-high)' : 'var(--signal-low)';
  }

  // Verbindungslinien zeichnen (als Polylines)
  function drawWire(x1, y1, x2, y2, id) {
    const midX = (x1 + x2) / 2;
    const line = document.createElementNS(svgNS, 'polyline');
    line.setAttribute('points', `${x1},${y1} ${midX},${y1} ${midX},${y2} ${x2},${y2}`);
    line.setAttribute('fill', 'none');
    line.setAttribute('stroke-width', 2.5);
    line.setAttribute('stroke', 'var(--signal-low)');
    line.dataset.wireId = id || '';
    refs.wires.push(line);
    svg.appendChild(line);
    return line;
  }

  // Eingaenge zeichnen
  circuit.inputs.forEach(inp => {
    const pos = toPixel(circuit.layout.inputs[inp].x, circuit.layout.inputs[inp].y);

    // Label links
    const label = document.createElementNS(svgNS, 'text');
    label.setAttribute('x', pos.x - 20); label.setAttribute('y', pos.y + 5);
    label.setAttribute('text-anchor', 'end');
    label.setAttribute('fill', '#1F2937'); label.setAttribute('font-weight', 'bold');
    label.setAttribute('font-size', '13');
    label.textContent = inp;
    svg.appendChild(label);

    // Kreis
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', pos.x); circle.setAttribute('cy', pos.y);
    circle.setAttribute('r', 12);
    circle.setAttribute('stroke', '#1F2937'); circle.setAttribute('stroke-width', 2);
    if (interactive) circle.style.cursor = 'pointer';
    refs.inputCircles[inp] = circle;
    svg.appendChild(circle);

    // Text
    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('x', pos.x); text.setAttribute('y', pos.y + 5);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', 'white'); text.setAttribute('font-weight', 'bold');
    text.setAttribute('font-size', '14');
    text.style.pointerEvents = 'none';
    refs.inputTexts[inp] = text;
    svg.appendChild(text);

    // Klick-Handler
    if (interactive) {
      circle.addEventListener('click', () => {
        state.inputs[inp] = state.inputs[inp] === 0 ? 1 : 0;
        update();
        if (options.onUpdate) options.onUpdate(getOutputs());
      });
    }
  });

  // Gatter zeichnen
  const gateW = 60;
  const gateH = 44;
  circuit.gates.forEach(gate => {
    const pos = toPixel(circuit.layout.gates[gate.id].x, circuit.layout.gates[gate.id].y);

    // Gatter-Rechteck
    const rect = document.createElementNS(svgNS, 'rect');
    rect.setAttribute('x', pos.x - gateW / 2); rect.setAttribute('y', pos.y - gateH / 2);
    rect.setAttribute('width', gateW); rect.setAttribute('height', gateH);
    rect.setAttribute('rx', 3);
    rect.classList.add('gate-body');
    refs.gateRects[gate.id] = rect;
    svg.appendChild(rect);

    // Gatter-Symbol
    const symbol = document.createElementNS(svgNS, 'text');
    symbol.setAttribute('x', pos.x); symbol.setAttribute('y', pos.y + 5);
    symbol.setAttribute('text-anchor', 'middle');
    symbol.setAttribute('fill', 'var(--text)');
    symbol.setAttribute('font-size', '14'); symbol.setAttribute('font-weight', 'bold');
    symbol.textContent = Visuals.GATE_SYMBOLS[gate.type];
    svg.appendChild(symbol);

    // Negationskreis
    if (Visuals.NEGATED_GATES.has(gate.type)) {
      const neg = document.createElementNS(svgNS, 'circle');
      neg.setAttribute('cx', pos.x + gateW / 2 + 4);
      neg.setAttribute('cy', pos.y);
      neg.setAttribute('r', 3.5);
      neg.setAttribute('fill', 'white'); neg.setAttribute('stroke', 'var(--text)');
      neg.setAttribute('stroke-width', 1.5);
      svg.appendChild(neg);
    }

    // Label ueber dem Gatter
    if (gate.label) {
      const gLabel = document.createElementNS(svgNS, 'text');
      gLabel.setAttribute('x', pos.x); gLabel.setAttribute('y', pos.y - gateH / 2 - 6);
      gLabel.setAttribute('text-anchor', 'middle');
      gLabel.setAttribute('fill', 'var(--text-light)'); gLabel.setAttribute('font-size', '10');
      gLabel.textContent = gate.label;
      svg.appendChild(gLabel);
    }

    // Eingangsleitungen zum Gatter
    gate.inputs.forEach((inp, idx) => {
      let fromPos;
      if (circuit.layout.inputs[inp]) {
        fromPos = toPixel(circuit.layout.inputs[inp].x, circuit.layout.inputs[inp].y);
        fromPos.x += 12; // nach dem Kreis
      } else if (circuit.layout.gates[inp]) {
        fromPos = toPixel(circuit.layout.gates[inp].x, circuit.layout.gates[inp].y);
        const isNeg = Visuals.NEGATED_GATES.has(circuit.gates.find(g => g.id === inp)?.type);
        fromPos.x += gateW / 2 + (isNeg ? 8 : 0);
      } else {
        return; // Feedback-Verbindung, wird separat gehandelt
      }

      const toX = pos.x - gateW / 2;
      const inputSpacing = gateH / (gate.inputs.length + 1);
      const toY = pos.y - gateH / 2 + inputSpacing * (idx + 1);

      drawWire(fromPos.x, fromPos.y, toX, toY, `${inp}->${gate.id}`);
    });
  });

  // Ausgangs-Verbindungen
  circuit.connections.forEach(conn => {
    const gatePos = toPixel(circuit.layout.gates[conn.from].x, circuit.layout.gates[conn.from].y);
    const outPos = toPixel(circuit.layout.outputs[conn.to].x, circuit.layout.outputs[conn.to].y);
    const gate = circuit.gates.find(g => g.id === conn.from);
    const isNeg = Visuals.NEGATED_GATES.has(gate?.type);
    const startX = gatePos.x + gateW / 2 + (isNeg ? 8 : 0);

    drawWire(startX, gatePos.y, outPos.x - 12, outPos.y, conn.from);
  });

  // Ausgaenge zeichnen
  circuit.outputs.forEach(out => {
    const pos = toPixel(circuit.layout.outputs[out].x, circuit.layout.outputs[out].y);

    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', pos.x); circle.setAttribute('cy', pos.y);
    circle.setAttribute('r', 12);
    circle.setAttribute('stroke', '#1F2937'); circle.setAttribute('stroke-width', 2);
    refs.outputCircles[out] = circle;
    svg.appendChild(circle);

    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('x', pos.x); text.setAttribute('y', pos.y + 5);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', 'white'); text.setAttribute('font-weight', 'bold');
    text.setAttribute('font-size', '14');
    text.style.pointerEvents = 'none';
    refs.outputTexts[out] = text;
    svg.appendChild(text);

    // Label rechts
    const label = document.createElementNS(svgNS, 'text');
    label.setAttribute('x', pos.x + 20); label.setAttribute('y', pos.y + 5);
    label.setAttribute('fill', '#1F2937'); label.setAttribute('font-weight', 'bold');
    label.setAttribute('font-size', '13');
    label.textContent = out;
    svg.appendChild(label);
  });

  // Status-Anzeige
  const statusEl = document.createElement('div');
  statusEl.style.cssText = 'text-align:center;font-size:13px;color:var(--signal-high);font-weight:600;margin-top:6px;';

  wrapper.appendChild(svg);
  wrapper.appendChild(statusEl);
  container.appendChild(wrapper);

  // Update-Funktion
  function update() {
    const result = evaluateCircuit(circuitId, state.inputs, state.prevGateOutputs);
    state.prevGateOutputs = result.gateOutputs;

    // Eingaenge faerben
    circuit.inputs.forEach(inp => {
      const val = state.inputs[inp];
      refs.inputCircles[inp].setAttribute('fill', signalColor(val));
      refs.inputTexts[inp].textContent = val;
    });

    // Ausgaenge faerben
    circuit.outputs.forEach(out => {
      const val = result.outputs[out];
      refs.outputCircles[out].setAttribute('fill', signalColor(val));
      refs.outputTexts[out].textContent = val !== undefined ? val : '?';
    });

    // Wires faerben
    refs.wires.forEach(wire => {
      const wireId = wire.dataset.wireId;
      if (!wireId) return;
      const sourceId = wireId.includes('->') ? wireId.split('->')[0] : wireId;
      const val = result.values[sourceId];
      wire.setAttribute('stroke', signalColor(val !== undefined ? val : 0));
    });

    // Status-Text
    const outParts = circuit.outputs.map(o => `${o}=${result.outputs[o]}`);
    statusEl.textContent = outParts.join(', ');
  }

  function getOutputs() {
    const result = evaluateCircuit(circuitId, state.inputs, state.prevGateOutputs);
    return result.outputs;
  }

  // Initiales Rendering
  update();

  return { update, state, getOutputs };
};
```

- [ ] **Step 2: Im Browser testen**

In Browser-Konsole:
```javascript
const div = document.createElement('div');
document.body.appendChild(div);
Visuals.renderCircuit({ circuit: 'half-adder', interactive: true }, div);
```
→ Halbaddierer-Schaltung sollte erscheinen, Eingänge klickbar.

- [ ] **Step 3: Commit**

```bash
git add app/js/visuals.js
git commit -m "feat: add CircuitView component for composite circuits"
```

---

## Task 5: BinaryAnimation-Komponente

**Files:**
- Modify: `app/js/visuals.js` (am Ende anfügen)

- [ ] **Step 1: BinaryAnimation implementieren**

Am Ende von `app/js/visuals.js` anfügen:

```javascript
/**
 * Rendert eine Schritt-fuer-Schritt Animation der Binaeraddition.
 *
 * @param {Object} config - { operandA: '1011', operandB: '0110' }
 * @param {HTMLElement} container
 */
Visuals.renderBinaryAnimation = function(config, container) {
  const a = config.operandA;
  const b = config.operandB;
  const maxLen = Math.max(a.length, b.length);
  const aPadded = a.padStart(maxLen, '0');
  const bPadded = b.padStart(maxLen, '0');

  // Addition berechnen
  const carries = new Array(maxLen + 1).fill(0);
  const result = new Array(maxLen).fill(0);

  for (let i = maxLen - 1; i >= 0; i--) {
    const sum = parseInt(aPadded[i]) + parseInt(bPadded[i]) + carries[i + 1];
    result[i] = sum % 2;
    carries[i] = Math.floor(sum / 2);
  }
  const finalCarry = carries[0];

  // State
  let currentStep = -1; // -1 = noch nicht gestartet
  const totalSteps = maxLen;

  const wrapper = document.createElement('div');
  wrapper.className = 'visual-container';

  const calcDiv = document.createElement('div');
  calcDiv.className = 'binary-anim';

  const controlsDiv = document.createElement('div');
  controlsDiv.className = 'binary-anim-controls';

  const stepInfo = document.createElement('div');
  stepInfo.className = 'binary-anim-step-info';

  // Buttons
  const btnReset = document.createElement('button');
  btnReset.textContent = '\u23EE';
  btnReset.title = 'Zurück zum Anfang';

  const btnNext = document.createElement('button');
  btnNext.textContent = '\u25B6 Nächster Schritt';
  btnNext.className = 'btn-primary';

  const btnAll = document.createElement('button');
  btnAll.textContent = '\u23ED';
  btnAll.title = 'Alle Schritte zeigen';

  controlsDiv.appendChild(btnReset);
  controlsDiv.appendChild(btnNext);
  controlsDiv.appendChild(btnAll);

  wrapper.appendChild(calcDiv);
  wrapper.appendChild(controlsDiv);
  wrapper.appendChild(stepInfo);
  container.appendChild(wrapper);

  btnNext.addEventListener('click', () => {
    if (currentStep < totalSteps - 1) {
      currentStep++;
      render();
    }
  });

  btnReset.addEventListener('click', () => {
    currentStep = -1;
    render();
  });

  btnAll.addEventListener('click', () => {
    currentStep = totalSteps - 1;
    render();
  });

  function render() {
    // Uebertraege
    let carryHtml = '<div class="binary-row" style="font-size:0.85em;">';
    carryHtml += '<span class="binary-cell" style="width:1.5rem;"></span>'; // Platz fuer Operator
    for (let i = 0; i < maxLen; i++) {
      const colIndex = maxLen - 1 - i; // von rechts
      const shown = colIndex <= currentStep + 1 && carries[i + 1] === 1 && currentStep >= 0;
      const isActive = (maxLen - 1 - currentStep) === i + 1;
      if (shown) {
        carryHtml += `<span class="binary-cell carry-bit${isActive ? ' active-col' : ''}">${carries[i + 1]}</span>`;
      } else {
        carryHtml += '<span class="binary-cell">&nbsp;</span>';
      }
    }
    carryHtml += '</div>';

    // Operand A
    let aHtml = '<div class="binary-row"><span class="binary-cell" style="width:1.5rem;"></span>';
    for (let i = 0; i < maxLen; i++) {
      const isActive = (maxLen - 1 - currentStep) === i;
      aHtml += `<span class="binary-cell${isActive ? ' active-col' : ''}">${aPadded[i]}</span>`;
    }
    aHtml += '</div>';

    // Operand B
    let bHtml = '<div class="binary-row"><span class="binary-cell" style="width:1.5rem;color:var(--text);">+</span>';
    for (let i = 0; i < maxLen; i++) {
      const isActive = (maxLen - 1 - currentStep) === i;
      bHtml += `<span class="binary-cell${isActive ? ' active-col' : ''}">${bPadded[i]}</span>`;
    }
    bHtml += '</div>';

    // Trennlinie
    let dividerHtml = '<div class="binary-row" style="border-top:2px solid var(--text);padding-top:4px;">';
    dividerHtml += '<span class="binary-cell" style="width:1.5rem;"></span>';

    // Final Carry
    if (currentStep === totalSteps - 1 && finalCarry) {
      dividerHtml += `<span class="binary-cell result-bit">${finalCarry}</span>`;
    } else if (finalCarry) {
      dividerHtml += '<span class="binary-cell">&nbsp;</span>';
    }

    // Ergebnis-Bits
    for (let i = 0; i < maxLen; i++) {
      const colIndex = maxLen - 1 - i;
      if (colIndex <= currentStep) {
        dividerHtml += `<span class="binary-cell result-bit">${result[i]}</span>`;
      } else {
        dividerHtml += '<span class="binary-cell">?</span>';
      }
    }
    dividerHtml += '</div>';

    calcDiv.innerHTML = carryHtml + aHtml + bHtml + dividerHtml;

    // Step-Info
    if (currentStep === -1) {
      stepInfo.textContent = 'Klicke "Nächster Schritt" um zu beginnen.';
    } else {
      const col = maxLen - 1 - currentStep;
      const aVal = parseInt(aPadded[col]);
      const bVal = parseInt(bPadded[col]);
      const cVal = carries[col + 1];
      const sum = aVal + bVal + cVal;
      stepInfo.textContent = `Schritt ${currentStep + 1}/${totalSteps}: Stelle ${currentStep} → ${aVal}+${bVal}${cVal ? `+${cVal}(Carry)` : ''} = ${sum % 2}${Math.floor(sum / 2) ? ', Übertrag 1' : ''}`;
    }

    // Buttons aktualisieren
    btnNext.disabled = currentStep >= totalSteps - 1;
    btnReset.disabled = currentStep === -1;
  }

  render();
};
```

- [ ] **Step 2: Commit**

```bash
git add app/js/visuals.js
git commit -m "feat: add BinaryAnimation component"
```

---

## Task 6: ExpressionTree-Komponente

**Files:**
- Modify: `app/js/visuals.js` (am Ende anfügen)

- [ ] **Step 1: ExpressionTree implementieren**

Am Ende von `app/js/visuals.js` anfügen:

```javascript
/**
 * Rendert einen logischen Ausdruck als Baumdiagramm.
 * Nutzt Parser.parse() fuer den AST.
 * Farbcodierung: NOT=rot, AND=gruen, OR=blau.
 *
 * @param {Object} config - { expression: '¬a ∧ b ∨ c', hiddenNodes?: ['and','or'] }
 * @param {HTMLElement} container
 */
Visuals.renderExpressionTree = function(config, container) {
  const hiddenNodeTypes = config.hiddenNodes || [];
  let hiddenIndex = 0;
  const wrapper = document.createElement('div');
  wrapper.className = 'visual-container expression-tree-view';

  let ast;
  try {
    ast = Parser.parse(config.expression);
  } catch (e) {
    wrapper.innerHTML = `<p style="color:var(--error);">Parsing-Fehler: ${e.message}</p>`;
    container.appendChild(wrapper);
    return;
  }

  // Baum-Layout berechnen: Breite und Tiefe bestimmen
  function treeSize(node) {
    if (node.variable !== undefined) return { w: 1, h: 1 };
    if (node.op === '¬') {
      const child = treeSize(node.operand);
      return { w: Math.max(child.w, 1), h: child.h + 1 };
    }
    const left = treeSize(node.left);
    const right = treeSize(node.right);
    return { w: left.w + right.w, h: Math.max(left.h, right.h) + 1 };
  }

  const size = treeSize(ast);
  const nodeW = 60;
  const nodeH = 50;
  const W = Math.max(320, size.w * nodeW + 40);
  const H = size.h * nodeH + 40;

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', H);

  // Operator → CSS-Klasse und Anzeige-Symbol
  const opInfo = {
    '¬': { cls: 'not', display: '¬', group: 'NOT' },
    '∧': { cls: 'and', display: '∧', group: 'AND' },
    '⊼': { cls: 'and', display: '⊼', group: 'AND' },
    '∨': { cls: 'or', display: '∨', group: 'OR' },
    '⊕': { cls: 'or', display: '⊕', group: 'OR' },
    '⊽': { cls: 'or', display: '⊽', group: 'OR' },
    '⊙': { cls: 'or', display: '⊙', group: 'OR' }
  };

  // Rekursiv zeichnen
  function drawNode(node, cx, cy, availW) {
    if (node.variable !== undefined) {
      // Blattknoten: Variable
      const rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('x', cx - 18); rect.setAttribute('y', cy - 14);
      rect.setAttribute('width', 36); rect.setAttribute('height', 28);
      rect.setAttribute('rx', 5);
      rect.classList.add('var-node');
      svg.appendChild(rect);

      const text = document.createElementNS(svgNS, 'text');
      text.setAttribute('x', cx); text.setAttribute('y', cy + 5);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', 'var(--text)');
      text.setAttribute('font-size', '16'); text.setAttribute('font-weight', 'bold');
      text.textContent = node.variable;
      svg.appendChild(text);
      return;
    }

    const info = opInfo[node.op] || { cls: 'or', display: node.op, group: '?' };

    // Pruefen ob dieser Knoten versteckt werden soll
    const opGroup = info.group.toLowerCase(); // 'not', 'and', 'or'
    const isHidden = hiddenNodeTypes.length > hiddenIndex
      && hiddenNodeTypes[hiddenIndex] === opGroup;
    if (isHidden) hiddenIndex++;

    // Operator-Knoten zeichnen
    const rect = document.createElementNS(svgNS, 'rect');
    rect.setAttribute('x', cx - 24); rect.setAttribute('y', cy - 16);
    rect.setAttribute('width', 48); rect.setAttribute('height', 32);
    rect.setAttribute('rx', 16);
    rect.classList.add('op-node', isHidden ? 'op-hidden' : `op-${info.cls}`);
    svg.appendChild(rect);

    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('x', cx); text.setAttribute('y', cy + 6);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-size', '18'); text.setAttribute('font-weight', 'bold');
    text.classList.add(isHidden ? 'op-text-hidden' : `op-text-${info.cls}`);
    text.textContent = isHidden ? '?' : info.display;
    svg.appendChild(text);

    // Kinder zeichnen
    const childY = cy + nodeH;

    if (node.op === '¬') {
      // NOT: ein Kind, direkt darunter
      const line = document.createElementNS(svgNS, 'line');
      line.setAttribute('x1', cx); line.setAttribute('y1', cy + 16);
      line.setAttribute('x2', cx); line.setAttribute('y2', childY - 14);
      line.setAttribute('stroke', '#6B7280'); line.setAttribute('stroke-width', 1.5);
      svg.appendChild(line);
      drawNode(node.operand, cx, childY, availW);
    } else {
      // Binaer: links und rechts
      const leftSize = treeSize(node.left);
      const rightSize = treeSize(node.right);
      const totalW = leftSize.w + rightSize.w;
      const leftCx = cx - (rightSize.w / totalW) * availW / 2;
      const rightCx = cx + (leftSize.w / totalW) * availW / 2;

      // Linien zu Kindern
      [leftCx, rightCx].forEach(childCx => {
        const line = document.createElementNS(svgNS, 'line');
        line.setAttribute('x1', cx); line.setAttribute('y1', cy + 16);
        line.setAttribute('x2', childCx); line.setAttribute('y2', childY - 14);
        line.setAttribute('stroke', '#6B7280'); line.setAttribute('stroke-width', 1.5);
        svg.appendChild(line);
      });

      drawNode(node.left, leftCx, childY, availW * leftSize.w / totalW);
      drawNode(node.right, rightCx, childY, availW * rightSize.w / totalW);
    }
  }

  drawNode(ast, W / 2, 30, W - 40);
  wrapper.appendChild(svg);

  // Legende
  const legend = document.createElement('div');
  legend.className = 'expression-tree-legend';
  legend.innerHTML = '<span><span style="color:var(--error);font-weight:bold;">¬ NOT</span> = stärkste Bindung</span>'
    + '<span><span style="color:var(--signal-high);font-weight:bold;">∧ AND</span> = mittel</span>'
    + '<span><span style="color:var(--accent);font-weight:bold;">∨ OR</span> = schwächste</span>';
  wrapper.appendChild(legend);

  container.appendChild(wrapper);
};
```

- [ ] **Step 2: Commit**

```bash
git add app/js/visuals.js
git commit -m "feat: add ExpressionTree component"
```

---

## Task 7: DNFHighlighter-Komponente

**Files:**
- Modify: `app/js/visuals.js` (am Ende anfügen)

- [ ] **Step 1: DNFHighlighter implementieren**

Am Ende von `app/js/visuals.js` anfügen:

```javascript
/**
 * Rendert eine Wahrheitstabelle mit farbig markierten 1-Zeilen und generiert die DNF-Formel.
 *
 * @param {Object} config - { variables: ['a','b','c'], results: [0,1,0,0,1,0,1,0] }
 * @param {HTMLElement} container
 */
Visuals.renderDNFHighlighter = function(config, container) {
  const vars = config.variables;
  const results = config.results;
  const n = vars.length;
  const totalRows = 1 << n;

  // Farben fuer die 1-Zeilen (bis zu 8 verschiedene)
  const colors = [
    { bg: '#DBEAFE', border: '#93C5FD', text: '#2563EB' },
    { bg: '#FCE7F3', border: '#F9A8D4', text: '#DB2777' },
    { bg: '#DCFCE7', border: '#86EFAC', text: '#16A34A' },
    { bg: '#FEF3C7', border: '#FDE68A', text: '#D97706' },
    { bg: '#EDE9FE', border: '#C4B5FD', text: '#7C3AED' },
    { bg: '#FFE4E6', border: '#FDA4AF', text: '#E11D48' },
    { bg: '#CCFBF1', border: '#5EEAD4', text: '#0D9488' },
    { bg: '#E0E7FF', border: '#A5B4FC', text: '#4338CA' }
  ];

  const wrapper = document.createElement('div');
  wrapper.className = 'visual-container dnf-view';

  // Wahrheitstabelle
  const tableDiv = document.createElement('div');
  const table = document.createElement('table');
  table.className = 'truth-table';

  // Header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  vars.forEach(v => {
    const th = document.createElement('th');
    th.textContent = v;
    headerRow.appendChild(th);
  });
  const thResult = document.createElement('th');
  thResult.textContent = 'f';
  headerRow.appendChild(thResult);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Body
  const tbody = document.createElement('tbody');
  let colorIndex = 0;
  const minterms = []; // { assignment, color }

  for (let i = 0; i < totalRows; i++) {
    const tr = document.createElement('tr');
    const assignment = {};

    vars.forEach((v, vi) => {
      const val = (i >> (n - 1 - vi)) & 1;
      assignment[v] = val;
      const td = document.createElement('td');
      td.textContent = val;
      if (results[i] === 1) {
        td.style.fontWeight = 'bold';
      }
      tr.appendChild(td);
    });

    const tdResult = document.createElement('td');
    tdResult.textContent = results[i];

    if (results[i] === 1) {
      const color = colors[colorIndex % colors.length];
      tr.style.background = color.bg;
      tdResult.style.fontWeight = 'bold';
      tdResult.style.color = color.text;
      minterms.push({ assignment, color });
      colorIndex++;
    } else {
      tdResult.style.color = 'var(--signal-low)';
    }

    tr.appendChild(tdResult);
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  tableDiv.appendChild(table);
  wrapper.appendChild(tableDiv);

  // DNF Formel
  const formulaDiv = document.createElement('div');
  formulaDiv.style.flex = '1';

  const hint = document.createElement('p');
  hint.style.cssText = 'font-size:13px;color:var(--text-light);margin-bottom:12px;';
  hint.innerHTML = 'Nur die <strong>1-Zeilen</strong> zählen:';
  formulaDiv.appendChild(hint);

  const formulaEl = document.createElement('div');
  formulaEl.className = 'dnf-formula';

  minterms.forEach((mt, idx) => {
    const parts = [];
    vars.forEach(v => {
      parts.push(mt.assignment[v] === 1 ? v : `¬${v}`);
    });
    const term = parts.join(' ∧ ');

    const div = document.createElement('div');
    const prefix = idx === 0 ? 'f = ' : '\u00A0\u00A0\u00A0∨ ';
    const span = document.createElement('span');
    span.className = 'dnf-minterm';
    span.style.background = mt.color.bg;
    span.style.color = mt.color.text;
    span.textContent = term;

    div.textContent = prefix;
    div.appendChild(span);
    formulaEl.appendChild(div);
  });

  formulaDiv.appendChild(formulaEl);

  // Regel-Box
  const ruleBox = document.createElement('div');
  ruleBox.className = 'dnf-rule';
  ruleBox.innerHTML = '<strong>Regel:</strong> Variable=1 → Variable direkt, Variable=0 → ¬Variable';
  formulaDiv.appendChild(ruleBox);

  wrapper.appendChild(formulaDiv);
  container.appendChild(wrapper);
};
```

- [ ] **Step 2: Commit**

```bash
git add app/js/visuals.js
git commit -m "feat: add DNFHighlighter component"
```

---

## Task 8: TimingDiagram & TruthTableLinked & AdderSimulation

**Files:**
- Modify: `app/js/visuals.js` (am Ende anfügen)

- [ ] **Step 1: TimingDiagram implementieren**

Am Ende von `app/js/visuals.js` anfügen:

```javascript
/**
 * Rendert ein Timing-Diagramm das sich live aufbaut.
 * Wird an einen CircuitView gekoppelt (SR-Latch).
 *
 * @param {Object} config - { signals: ['S', 'R', 'Q', 'Q̄'] }
 * @param {HTMLElement} container
 * @returns {Object} - { addEvent(signalValues) }
 */
Visuals.renderTimingDiagram = function(config, container) {
  const signals = config.signals;
  const maxEvents = 20;
  const events = []; // Array von { S: 0, R: 0, Q: 0, 'Q̄': 1 }

  const wrapper = document.createElement('div');
  wrapper.className = 'timing-diagram';

  const label = document.createElement('div');
  label.className = 'timing-label';
  label.textContent = 'Timing-Diagramm (baut sich live auf):';
  wrapper.appendChild(label);

  const svgNS = 'http://www.w3.org/2000/svg';
  const W = 400;
  const signalH = 30;
  const H = signals.length * signalH + 20;
  const labelW = 30;
  const plotW = W - labelW - 10;

  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', H);

  // Signal-Labels
  signals.forEach((sig, i) => {
    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('x', 5);
    text.setAttribute('y', 10 + i * signalH + signalH / 2 + 4);
    text.setAttribute('fill', i >= 2 ? 'var(--accent)' : 'var(--text)');
    text.setAttribute('font-size', '12'); text.setAttribute('font-weight', 'bold');
    text.textContent = sig;
    svg.appendChild(text);
  });

  // Polylines fuer jeden Signal
  const polylines = {};
  signals.forEach((sig, i) => {
    const poly = document.createElementNS(svgNS, 'polyline');
    poly.setAttribute('fill', 'none');
    poly.setAttribute('stroke', i >= 2 ? 'var(--accent)' : 'var(--text)');
    poly.setAttribute('stroke-width', 2);
    if (i >= 2 && i % 2 === 1) poly.setAttribute('stroke-dasharray', '6,3');
    polylines[sig] = poly;
    svg.appendChild(poly);
  });

  wrapper.appendChild(svg);
  container.appendChild(wrapper);

  function render() {
    if (events.length === 0) return;

    const stepW = plotW / Math.max(events.length, 1);

    signals.forEach((sig, si) => {
      const baseY = 10 + si * signalH;
      const highY = baseY + 4;
      const lowY = baseY + signalH - 4;
      let points = '';

      events.forEach((ev, ei) => {
        const x = labelW + ei * stepW;
        const y = ev[sig] === 1 ? highY : lowY;
        if (ei === 0) {
          points += `${x},${y}`;
        } else {
          // Vorheriger Wert
          const prevY = events[ei - 1][sig] === 1 ? highY : lowY;
          if (prevY !== y) {
            points += ` ${x},${prevY} ${x},${y}`;
          } else {
            points += ` ${x},${y}`;
          }
        }
        // Linie bis zum naechsten Schritt
        const endX = labelW + (ei + 1) * stepW;
        points += ` ${endX},${y}`;
      });

      polylines[sig].setAttribute('points', points);
    });
  }

  function addEvent(signalValues) {
    if (events.length >= maxEvents) events.shift();
    events.push(Object.assign({}, signalValues));
    render();
  }

  return { addEvent };
};

/**
 * Rendert eine Wahrheitstabelle verknuepft mit einem Gatter/Schaltung.
 * Klick auf Tabellenzeile → Gatter/Schaltung zeigt die Belegung.
 *
 * @param {Object} config - { gate: 'and'|..., circuit?: 'half-adder' }
 * @param {HTMLElement} container
 */
Visuals.renderTruthTableLinked = function(config, container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'visual-container truth-table-linked';

  const gateType = config.gate;
  const isNot = (gateType === 'not');
  const vars = isNot ? ['a'] : ['a', 'b'];
  const n = vars.length;
  const totalRows = 1 << n;

  // Tabelle erstellen
  const tableDiv = document.createElement('div');
  const table = document.createElement('table');
  table.className = 'truth-table';

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  vars.forEach(v => {
    const th = document.createElement('th');
    th.textContent = v.toUpperCase();
    headerRow.appendChild(th);
  });
  const thY = document.createElement('th');
  thY.textContent = 'Y';
  headerRow.appendChild(thY);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  const rows = [];

  for (let i = 0; i < totalRows; i++) {
    const tr = document.createElement('tr');
    const inputVals = [];

    vars.forEach((v, vi) => {
      const val = (i >> (n - 1 - vi)) & 1;
      inputVals.push(val);
      const td = document.createElement('td');
      td.textContent = val;
      tr.appendChild(td);
    });

    const output = Visuals.GATE_FUNCTIONS[gateType](inputVals);
    const tdY = document.createElement('td');
    tdY.textContent = output;
    tdY.style.fontWeight = '600';
    tdY.style.color = output === 1 ? 'var(--signal-high)' : 'var(--signal-low)';
    tr.appendChild(tdY);

    tr.style.cursor = 'pointer';
    tr.dataset.rowIndex = i;
    rows.push({ tr, inputs: inputVals });
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  tableDiv.appendChild(table);
  wrapper.appendChild(tableDiv);

  // Gatter-Simulator daneben
  const gateDiv = document.createElement('div');
  const gateSim = Visuals.renderGateSim({ gate: gateType }, gateDiv, { interactive: false });

  wrapper.appendChild(gateDiv);
  container.appendChild(wrapper);

  // Klick auf Tabellenzeile → Gatter aktualisieren
  tbody.addEventListener('click', (e) => {
    const tr = e.target.closest('tr');
    if (!tr) return;

    // Highlight
    rows.forEach(r => r.tr.classList.remove('highlighted'));
    tr.classList.add('highlighted');

    // Gatter-State aktualisieren
    const idx = parseInt(tr.dataset.rowIndex);
    const row = rows[idx];
    row.inputs.forEach((val, i) => { gateSim.state.inputs[i] = val; });
    gateSim.update();
  });

  // Erste Zeile standardmaessig auswaehlen
  if (rows.length > 0) {
    rows[0].tr.classList.add('highlighted');
  }
};

/**
 * Rendert eine interaktive Addierwerk-Simulation (4-Bit).
 *
 * @param {Object} config - { bits: 4 }
 * @param {HTMLElement} container
 */
Visuals.renderAdderSim = function(config, container) {
  const bits = config.bits || 4;

  const wrapper = document.createElement('div');
  wrapper.className = 'visual-container adder-sim';

  // State
  const state = { a: new Array(bits).fill(0), b: new Array(bits).fill(0) };

  // Input-Reihe A
  const labelA = document.createElement('div');
  labelA.style.cssText = 'font-size:12px;color:var(--text-light);margin-bottom:4px;';
  labelA.textContent = 'A:';
  wrapper.appendChild(labelA);

  const rowA = document.createElement('div');
  rowA.style.cssText = 'display:flex;gap:4px;justify-content:center;margin-bottom:4px;';
  const btnsA = [];

  for (let i = 0; i < bits; i++) {
    const btn = document.createElement('button');
    btn.className = 'bit-toggle low';
    btn.textContent = '0';
    btn.addEventListener('click', () => {
      state.a[i] = state.a[i] === 0 ? 1 : 0;
      update();
    });
    btnsA.push(btn);
    rowA.appendChild(btn);
  }
  wrapper.appendChild(rowA);

  // Input-Reihe B
  const labelB = document.createElement('div');
  labelB.style.cssText = 'font-size:12px;color:var(--text-light);margin-bottom:4px;';
  labelB.textContent = 'B:';
  wrapper.appendChild(labelB);

  const rowB = document.createElement('div');
  rowB.style.cssText = 'display:flex;gap:4px;justify-content:center;margin-bottom:12px;';
  const btnsB = [];

  for (let i = 0; i < bits; i++) {
    const btn = document.createElement('button');
    btn.className = 'bit-toggle low';
    btn.textContent = '0';
    btn.addEventListener('click', () => {
      state.b[i] = state.b[i] === 0 ? 1 : 0;
      update();
    });
    btnsB.push(btn);
    rowB.appendChild(btn);
  }
  wrapper.appendChild(rowB);

  // Ergebnis
  const resultDiv = document.createElement('div');
  resultDiv.style.cssText = 'display:flex;gap:4px;justify-content:center;margin-top:8px;';
  wrapper.appendChild(resultDiv);

  const resultText = document.createElement('div');
  resultText.className = 'adder-result';
  wrapper.appendChild(resultText);

  container.appendChild(wrapper);

  function update() {
    // Buttons faerben
    for (let i = 0; i < bits; i++) {
      btnsA[i].textContent = state.a[i];
      btnsA[i].className = 'bit-toggle ' + (state.a[i] ? 'high' : 'low');
      btnsB[i].textContent = state.b[i];
      btnsB[i].className = 'bit-toggle ' + (state.b[i] ? 'high' : 'low');
    }

    // Addition
    const result = [];
    let carry = 0;
    for (let i = bits - 1; i >= 0; i--) {
      const sum = state.a[i] + state.b[i] + carry;
      result.unshift(sum % 2);
      carry = Math.floor(sum / 2);
    }

    // Ergebnis anzeigen
    resultDiv.innerHTML = '';

    const labelS = document.createElement('span');
    labelS.style.cssText = 'font-size:12px;color:var(--text-light);margin-right:4px;';
    labelS.textContent = 'Σ:';
    resultDiv.appendChild(labelS);

    if (carry) {
      const carryBtn = document.createElement('span');
      carryBtn.className = 'bit-toggle';
      carryBtn.style.cssText = 'background:var(--signal-carry);font-size:0.8rem;width:42px;height:28px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;color:white;font-weight:bold;';
      carryBtn.textContent = 'C=' + carry;
      resultDiv.appendChild(carryBtn);
    }

    result.forEach(bit => {
      const span = document.createElement('span');
      span.className = 'bit-toggle ' + (bit ? 'high' : 'low');
      span.style.cursor = 'default';
      span.textContent = bit;
      resultDiv.appendChild(span);
    });

    // Textuelle Zusammenfassung
    const aStr = state.a.join('');
    const bStr = state.b.join('');
    const rStr = (carry ? carry : '') + result.join('');
    resultText.textContent = `${aStr} + ${bStr} = ${rStr}`;
  }

  update();
};
```

- [ ] **Step 2: Commit**

```bash
git add app/js/visuals.js
git commit -m "feat: add TimingDiagram, TruthTableLinked, AdderSimulation components"
```

---

## Task 9: Renderer erweitern – renderVisuals()

**Files:**
- Modify: `app/js/renderer.js:102-107` (Erklärungsphase)
- Modify: `app/js/renderer.js:110-136` (Beispielphase)

- [ ] **Step 1: renderVisuals-Methode hinzufügen**

Am Ende von `renderer.js` (vor dem Event-Delegation-Block ab Zeile 269) einfügen:

```javascript
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
      default:
        console.warn('Unbekannter Visual-Typ:', vis.type);
    }
  });
};
```

- [ ] **Step 2: renderLesson() erweitern – Erklärungsphase**

In `renderer.js`, nach Zeile 106 (`explanationSection.innerHTML = lessonData.explanation.html;`), einfügen:

```javascript
    // Visuals in der Erklaerungsphase rendern
    if (lessonData.explanation.visuals) {
      Renderer.renderVisuals(lessonData.explanation.visuals, explanationSection);
    }
```

- [ ] **Step 3: renderLesson() erweitern – Beispielphase**

In `renderer.js`, nach Zeile 136 (Ende des `if (lessonData.example)` Blocks, vor `container.appendChild(exampleSection);`), einfügen:

```javascript
      // Visuals in der Beispielphase rendern
      if (lessonData.example.visuals) {
        Renderer.renderVisuals(lessonData.example.visuals, exampleSection);
      }
```

- [ ] **Step 4: Commit**

```bash
git add app/js/renderer.js
git commit -m "feat: add renderVisuals() to renderer, integrate into lesson phases"
```

---

## Task 10: Neue Übungstypen in exercises.js

**Files:**
- Modify: `app/js/exercises.js:10-28` (render-Dispatcher)
- Modify: `app/js/exercises.js` (am Ende neue Render-Methoden)

- [ ] **Step 1: Dispatcher erweitern**

In `app/js/exercises.js`, im `switch`-Block der `render()`-Methode (Zeile 11-28), vor dem `default`-Case (Zeile 24) die neuen Typen einfügen:

```javascript
      case 'circuit-exercise':
        return Exercises.renderCircuitExercise(exercise, container, onComplete);
      case 'circuit-matching':
        return Exercises.renderCircuitMatching(exercise, container, onComplete);
      case 'expression-tree-exercise':
        return Exercises.renderExpressionTreeExercise(exercise, container, onComplete);
```

- [ ] **Step 2: circuit-exercise implementieren**

Am Ende von `exercises.js` anfügen:

```javascript
/**
 * Rendert eine Schaltungs-Uebung: Eingaenge setzen, um gewuenschten Ausgang zu erreichen.
 *
 * @param {Object} exercise - { type, question, circuit, targetOutputs, explanation }
 */
Exercises.renderCircuitExercise = function(exercise, container, onComplete) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-circuit';

  const questionEl = document.createElement('p');
  questionEl.className = 'exercise-question';
  questionEl.textContent = exercise.question;
  wrapper.appendChild(questionEl);

  // Schaltung rendern
  const circuitDiv = document.createElement('div');
  const circuitInstance = Visuals.renderCircuit(
    { circuit: exercise.circuit, interactive: true },
    circuitDiv,
    { onUpdate: checkAnswer }
  );
  wrapper.appendChild(circuitDiv);

  // Check-Button
  const checkBtn = document.createElement('button');
  checkBtn.className = 'exercise-check-btn';
  checkBtn.textContent = 'Prüfen';
  wrapper.appendChild(checkBtn);

  const feedbackEl = document.createElement('div');
  feedbackEl.className = 'exercise-feedback';
  feedbackEl.style.display = 'none';
  wrapper.appendChild(feedbackEl);

  container.appendChild(wrapper);

  let solved = false;

  checkBtn.addEventListener('click', () => {
    const outputs = circuitInstance.getOutputs();
    const correct = Object.keys(exercise.targetOutputs).every(
      key => outputs[key] === exercise.targetOutputs[key]
    );

    if (correct && !solved) {
      solved = true;
      feedbackEl.className = 'exercise-feedback correct';
      feedbackEl.innerHTML = exercise.explanation
        ? `Richtig! ${exercise.explanation}`
        : 'Richtig – gut gemacht!';
      feedbackEl.style.display = 'block';
      checkBtn.disabled = true;
      onComplete();
    } else if (!correct) {
      feedbackEl.className = 'exercise-feedback incorrect';
      feedbackEl.textContent = 'Noch nicht richtig – versuche andere Eingangswerte.';
      feedbackEl.style.display = 'block';
    }
  });

  function checkAnswer(outputs) {
    // Auto-Check bei jedem Toggle (optionales sofortiges Feedback)
  }
};
```

- [ ] **Step 3: circuit-matching implementieren**

Am Ende von `exercises.js` anfügen:

```javascript
/**
 * Rendert eine Schaltungs-Zuordnung: Schaltbild ↔ Ausdruck zuordnen.
 *
 * @param {Object} exercise - { type, question, pairs: [{ circuit, expression }] }
 */
Exercises.renderCircuitMatching = function(exercise, container, onComplete) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-circuit-matching';

  const questionEl = document.createElement('p');
  questionEl.className = 'exercise-question';
  questionEl.textContent = exercise.question;
  wrapper.appendChild(questionEl);

  const matchArea = document.createElement('div');
  matchArea.className = 'matching-area';

  // Linke Spalte: Gatter-Symbole
  const leftCol = document.createElement('div');
  // Rechte Spalte: Ausdrücke (gemischt)
  const rightCol = document.createElement('div');

  const shuffled = [...exercise.pairs].sort(() => Math.random() - 0.5);
  const matchColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

  let selectedLeft = null;
  let selectedRight = null;
  let matchCount = 0;
  const matches = new Map(); // leftIndex → rightIndex

  // Linke Items: Mini-Gatter
  exercise.pairs.forEach((pair, idx) => {
    const item = document.createElement('div');
    item.className = 'match-item';
    item.dataset.matchIndex = idx;
    item.dataset.side = 'left';
    item.dataset.circuit = pair.circuit;

    // Mini-Gatter-SVG
    const gateSvg = Renderer.renderGate(pair.circuit, 60, 40);
    item.appendChild(gateSvg);
    leftCol.appendChild(item);
  });

  // Rechte Items: Ausdrücke
  shuffled.forEach((pair, idx) => {
    const item = document.createElement('div');
    item.className = 'match-item';
    item.dataset.side = 'right';
    item.dataset.expression = pair.expression;
    item.dataset.circuit = pair.circuit;
    item.textContent = pair.expression;
    item.style.fontFamily = "'Courier New', monospace";
    item.style.fontSize = '1.1rem';
    rightCol.appendChild(item);
  });

  matchArea.appendChild(leftCol);
  matchArea.appendChild(rightCol);
  wrapper.appendChild(matchArea);

  const feedbackEl = document.createElement('div');
  feedbackEl.className = 'exercise-feedback';
  feedbackEl.style.display = 'none';
  wrapper.appendChild(feedbackEl);

  container.appendChild(wrapper);

  // Matching-Logik
  matchArea.addEventListener('click', (e) => {
    const item = e.target.closest('.match-item');
    if (!item || item.classList.contains('matched')) return;

    if (item.dataset.side === 'left') {
      if (selectedLeft) selectedLeft.classList.remove('selected');
      selectedLeft = item;
      item.classList.add('selected');
    } else {
      if (selectedRight) selectedRight.classList.remove('selected');
      selectedRight = item;
      item.classList.add('selected');
    }

    // Wenn beide ausgewaehlt: pruefen
    if (selectedLeft && selectedRight) {
      const leftCircuit = selectedLeft.dataset.circuit;
      const rightCircuit = selectedRight.dataset.circuit;

      if (leftCircuit === rightCircuit) {
        // Match!
        const color = matchColors[matchCount % matchColors.length];
        selectedLeft.classList.add('matched');
        selectedLeft.classList.remove('selected');
        selectedLeft.style.background = color;
        selectedLeft.style.borderColor = color;

        selectedRight.classList.add('matched');
        selectedRight.classList.remove('selected');
        selectedRight.style.background = color;
        selectedRight.style.borderColor = color;
        selectedRight.style.color = 'white';

        matchCount++;
        selectedLeft = null;
        selectedRight = null;

        if (matchCount === exercise.pairs.length) {
          feedbackEl.className = 'exercise-feedback correct';
          feedbackEl.textContent = 'Alle Zuordnungen richtig – super!';
          feedbackEl.style.display = 'block';
          onComplete();
        }
      } else {
        // Kein Match
        selectedLeft.classList.remove('selected');
        selectedRight.classList.remove('selected');
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.textContent = 'Diese Zuordnung passt nicht. Versuch es nochmal.';
        feedbackEl.style.display = 'block';
        selectedLeft = null;
        selectedRight = null;
      }
    }
  });
};
```

- [ ] **Step 4: expression-tree-exercise implementieren**

Am Ende von `exercises.js` anfügen:

```javascript
/**
 * Rendert eine Ausdrucksbaum-Uebung: fehlende Operatoren einsetzen.
 *
 * @param {Object} exercise - { type, question, expression, hiddenNodes, explanation }
 */
Exercises.renderExpressionTreeExercise = function(exercise, container, onComplete) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-expression-tree';

  const questionEl = document.createElement('p');
  questionEl.className = 'exercise-question';
  questionEl.textContent = exercise.question;
  wrapper.appendChild(questionEl);

  // Baum anzeigen MIT versteckten Knoten (als "?" dargestellt)
  Visuals.renderExpressionTree({
    expression: exercise.expression,
    hiddenNodes: exercise.hiddenNodes
  }, wrapper);

  // Dropdown-Auswahl fuer versteckte Operatoren
  const formDiv = document.createElement('div');
  formDiv.style.cssText = 'margin:1rem 0;';

  const operatorOptions = ['∧', '∨', '¬', '⊕', '⊼', '⊽', '⊙'];
  const selects = [];

  exercise.hiddenNodes.forEach((nodeType, idx) => {
    const label = document.createElement('label');
    label.style.cssText = 'margin-right:1rem;font-size:0.95rem;';
    label.textContent = `Operator ${idx + 1}: `;

    const select = document.createElement('select');
    select.style.cssText = 'padding:4px 8px;font-size:1rem;font-family:monospace;';
    const defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = '?';
    select.appendChild(defaultOpt);

    operatorOptions.forEach(op => {
      const opt = document.createElement('option');
      opt.value = op;
      opt.textContent = op;
      select.appendChild(opt);
    });

    selects.push({ select, correctOp: nodeType });
    label.appendChild(select);
    formDiv.appendChild(label);
  });

  wrapper.appendChild(formDiv);

  // Check-Button
  const checkBtn = document.createElement('button');
  checkBtn.className = 'exercise-check-btn';
  checkBtn.textContent = 'Prüfen';
  wrapper.appendChild(checkBtn);

  const feedbackEl = document.createElement('div');
  feedbackEl.className = 'exercise-feedback';
  feedbackEl.style.display = 'none';
  wrapper.appendChild(feedbackEl);

  container.appendChild(wrapper);

  // Mapping: nodeType → korrekte Operatoren
  const correctOps = {
    'and': '∧', 'or': '∨', 'not': '¬',
    'xor': '⊕', 'nand': '⊼', 'nor': '⊽', 'xnor': '⊙'
  };

  checkBtn.addEventListener('click', () => {
    const allCorrect = selects.every(s => {
      const expected = correctOps[s.correctOp] || s.correctOp;
      return s.select.value === expected;
    });

    if (allCorrect) {
      feedbackEl.className = 'exercise-feedback correct';
      feedbackEl.innerHTML = exercise.explanation
        ? `Richtig! ${exercise.explanation}`
        : 'Richtig – gut gemacht!';
      feedbackEl.style.display = 'block';
      checkBtn.disabled = true;
      selects.forEach(s => s.select.disabled = true);
      onComplete();
    } else {
      feedbackEl.className = 'exercise-feedback incorrect';
      feedbackEl.textContent = 'Nicht ganz richtig – überprüfe die Operatorrangfolge.';
      feedbackEl.style.display = 'block';
    }
  });
};
```

- [ ] **Step 5: Commit**

```bash
git add app/js/exercises.js
git commit -m "feat: add circuit-exercise, circuit-matching, expression-tree-exercise types"
```

---

## Task 11: Sandbox/Labor-Seite

**Files:**
- Create: `app/js/sandbox.js`
- Modify: `app/index.html` (Script-Tag + Sidebar-Eintrag)
- Modify: `app/js/app.js` (navigateToSandbox)

- [ ] **Step 1: sandbox.js erstellen**

```javascript
/**
 * Labor-Seite: Alle Visualisierungen im freien Experimentier-Modus.
 * Kein Fortschritt, keine Bewertung.
 */
const Sandbox = {

  render(container) {
    container.innerHTML = '<h1>Labor – Frei experimentieren</h1>'
      + '<p style="color:var(--text-light);margin-bottom:2rem;">'
      + 'Hier kannst du alle interaktiven Komponenten ausprobieren – ohne Aufgaben oder Bewertung.</p>';

    // 1. Gatter-Labor
    Sandbox.renderGateLab(container);

    // 2. Schaltungs-Labor
    Sandbox.renderCircuitLab(container);

    // 3. Wahrheitstabelle verknuepft
    Sandbox.renderTruthTableLab(container);

    // 4. Binaerrechner
    Sandbox.renderBinaryLab(container);

    // 5. SR-Latch
    Sandbox.renderSRLatchLab(container);

    // 6. Ausdrucksbaum
    Sandbox.renderExpressionTreeLab(container);

    // 7. DNF-Generator
    Sandbox.renderDNFLab(container);
  },

  renderGateLab(container) {
    const section = Sandbox.createSection('Gatter-Labor',
      'Klicke auf die Eingänge (Kreise), um zwischen 0 und 1 zu wechseln.');

    const gates = ['and', 'or', 'not', 'xor', 'nand', 'nor', 'xnor'];
    gates.forEach(g => {
      Visuals.renderGateSim({ gate: g, label: g.toUpperCase() }, section);
    });

    container.appendChild(section);
  },

  renderCircuitLab(container) {
    const section = Sandbox.createSection('Schaltungs-Labor',
      'Klicke auf die Eingänge, um die Schaltung zu testen.');

    ['half-adder', 'full-adder'].forEach(id => {
      const title = document.createElement('h3');
      title.textContent = CIRCUITS[id].name;
      title.style.cssText = 'font-size:1rem;margin:1rem 0 0.5rem;';
      section.appendChild(title);
      Visuals.renderCircuit({ circuit: id, interactive: true }, section);
    });

    container.appendChild(section);
  },

  renderTruthTableLab(container) {
    const section = Sandbox.createSection('Wahrheitstabelle ↔ Schaltung',
      'Wähle einen Gattertyp und klicke auf Tabellenzeilen.');

    // Dropdown
    const controls = document.createElement('div');
    controls.className = 'sandbox-controls';

    const select = document.createElement('select');
    ['and', 'or', 'not', 'xor', 'nand', 'nor', 'xnor'].forEach(g => {
      const opt = document.createElement('option');
      opt.value = g;
      opt.textContent = g.toUpperCase();
      select.appendChild(opt);
    });
    controls.appendChild(select);
    section.appendChild(controls);

    const ttContainer = document.createElement('div');
    section.appendChild(ttContainer);

    function renderForGate(gate) {
      ttContainer.innerHTML = '';
      Visuals.renderTruthTableLinked({ gate: gate }, ttContainer);
    }

    select.addEventListener('change', () => renderForGate(select.value));
    renderForGate('and');

    container.appendChild(section);
  },

  renderBinaryLab(container) {
    const section = Sandbox.createSection('Binärrechner',
      'Gib zwei Binärzahlen ein und beobachte die Addition Schritt für Schritt.');

    // Eingabefelder
    const controls = document.createElement('div');
    controls.className = 'sandbox-controls';

    const inputA = document.createElement('input');
    inputA.type = 'text'; inputA.value = '1011';
    inputA.placeholder = 'Operand A';
    inputA.maxLength = 8;

    const inputB = document.createElement('input');
    inputB.type = 'text'; inputB.value = '0110';
    inputB.placeholder = 'Operand B';
    inputB.maxLength = 8;

    const goBtn = document.createElement('button');
    goBtn.className = 'exercise-check-btn';
    goBtn.textContent = 'Animation starten';
    goBtn.style.marginTop = '0';

    controls.appendChild(inputA);
    controls.appendChild(inputB);
    controls.appendChild(goBtn);
    section.appendChild(controls);

    const animContainer = document.createElement('div');
    section.appendChild(animContainer);

    function startAnim() {
      const a = inputA.value.replace(/[^01]/g, '') || '0';
      const b = inputB.value.replace(/[^01]/g, '') || '0';
      animContainer.innerHTML = '';
      Visuals.renderBinaryAnimation({ operandA: a, operandB: b }, animContainer);
    }

    goBtn.addEventListener('click', startAnim);
    startAnim();

    container.appendChild(section);
  },

  renderSRLatchLab(container) {
    const section = Sandbox.createSection('SR-Latch Simulator',
      'Klicke S und R, beobachte die Ausgänge und das Timing-Diagramm.');

    // SR-Latch Schaltung
    const circuitDiv = document.createElement('div');
    const latch = Visuals.renderCircuit(
      { circuit: 'sr-latch', interactive: true },
      circuitDiv,
      { onUpdate: (outputs) => {
        const vals = Object.assign({}, latch.state.inputs, outputs);
        timing.addEvent(vals);
      }}
    );
    section.appendChild(circuitDiv);

    // Timing-Diagramm
    const timingDiv = document.createElement('div');
    const timing = Visuals.renderTimingDiagram({ signals: ['S', 'R', 'Q', 'Q\u0304'] }, timingDiv);
    section.appendChild(timingDiv);

    // Initial-Event
    const initOutputs = latch.getOutputs();
    timing.addEvent(Object.assign({}, latch.state.inputs, initOutputs));

    container.appendChild(section);
  },

  renderExpressionTreeLab(container) {
    const section = Sandbox.createSection('Ausdrucksbaum',
      'Gib einen logischen Ausdruck ein und sieh den Baumaufbau. Nutze: a-z, ∧ ∨ ¬ ⊕ ( )');

    const controls = document.createElement('div');
    controls.className = 'sandbox-controls';

    const input = document.createElement('input');
    input.type = 'text'; input.value = '¬a ∧ b ∨ c';
    input.style.cssText = 'flex:1;font-family:monospace;font-size:1.1rem;min-width:200px;';
    controls.appendChild(input);

    // Symbol-Buttons
    const symbols = ['∧', '∨', '¬', '⊕', '(', ')'];
    symbols.forEach(sym => {
      const btn = document.createElement('button');
      btn.className = 'symbol-btn';
      btn.textContent = sym;
      btn.addEventListener('click', () => {
        input.value += sym;
        input.focus();
        renderTree();
      });
      controls.appendChild(btn);
    });

    section.appendChild(controls);

    const treeContainer = document.createElement('div');
    section.appendChild(treeContainer);

    function renderTree() {
      treeContainer.innerHTML = '';
      if (input.value.trim()) {
        Visuals.renderExpressionTree({ expression: input.value.trim() }, treeContainer);
      }
    }

    input.addEventListener('input', renderTree);
    renderTree();

    container.appendChild(section);
  },

  renderDNFLab(container) {
    const section = Sandbox.createSection('DNF-Generator',
      'Klicke auf die Ergebnis-Spalte, um 1/0 zu setzen. Die DNF wird automatisch generiert.');

    // Vordefiniertes Beispiel
    Visuals.renderDNFHighlighter({
      variables: ['a', 'b', 'c'],
      results: [0, 1, 0, 0, 1, 0, 1, 0]
    }, section);

    container.appendChild(section);
  },

  // Hilfsfunktion: Section erstellen
  createSection(title, description) {
    const section = document.createElement('div');
    section.className = 'sandbox-section';

    const h2 = document.createElement('h2');
    h2.textContent = title;
    section.appendChild(h2);

    if (description) {
      const p = document.createElement('p');
      p.textContent = description;
      section.appendChild(p);
    }

    return section;
  }
};
```

- [ ] **Step 2: index.html erweitern – Script-Tags und Sidebar**

In `app/index.html`:

1. Labor-Eintrag in Sidebar (nach Zeile 20, vor dem Reset-Button):
```html
    <div id="lab-entry" class="lab-entry">🔬 Labor</div>
```

2. Script-Tags aktualisieren (Zeile 29-35 ersetzen):
```html
  <script src="js/progress.js"></script>
  <script src="js/parser.js"></script>
  <script src="js/visuals.js"></script>
  <script src="js/circuits.js"></script>
  <script src="js/exercises.js"></script>
  <script src="js/renderer.js"></script>
  <script src="js/sandbox.js"></script>
  <script src="js/lessons-c1.js"></script>
  <script src="js/lessons-c2.js"></script>
  <script src="js/app.js"></script>
```

- [ ] **Step 3: app.js erweitern – navigateToSandbox()**

Am Ende von `app.js`, vor dem `DOMContentLoaded`-Event-Listener (vor Zeile 64), einfügen:

```javascript
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
```

Im `DOMContentLoaded`-Block (innerhalb des bestehenden Event-Listeners), nach dem Reset-Button-Handler (nach Zeile 91), einfügen:

```javascript
  // Labor-Klick-Handler
  const labEntry = document.getElementById('lab-entry');
  if (labEntry) {
    labEntry.addEventListener('click', () => {
      navigateToSandbox();
    });
  }
```

Und in `navigateToLesson()` (Zeile 27), am Anfang der Funktion einfügen:

```javascript
  // Fortschrittsbalken wieder einblenden (falls vom Labor kommend)
  document.getElementById('progress-bar-container').style.display = '';

  // Labor-Eintrag deselektieren
  const labEntry = document.getElementById('lab-entry');
  if (labEntry) labEntry.classList.remove('active');
```

- [ ] **Step 4: Im Browser testen**

App öffnen → "Labor" in der Sidebar klicken → Alle 7 Bereiche sollten erscheinen und interaktiv sein.

- [ ] **Step 5: Commit**

```bash
git add app/js/sandbox.js app/index.html app/js/app.js
git commit -m "feat: add sandbox/lab page with all interactive components"
```

---

## Task 12: Visuals in C1-Lektionen integrieren (Lektionen 3-10)

**Files:**
- Modify: `app/js/lessons-c1.js`

- [ ] **Step 1: Visuals-Felder zu Lektionen 3-10 hinzufügen**

In `lessons-c1.js`, jede relevante Lektion um `visuals`-Arrays in den `explanation`- und `example`-Objekten erweitern:

**Lektion 3** (AND, OR, NOT): Zum `explanation`-Objekt hinzufügen:
```javascript
visuals: [
  { type: 'gate-sim', gate: 'and', label: 'AND-Gatter: Probiere es aus!' },
  { type: 'gate-sim', gate: 'or', label: 'OR-Gatter' },
  { type: 'gate-sim', gate: 'not', label: 'NOT-Gatter' },
  { type: 'truth-table-linked', gate: 'and' }
]
```

**Lektion 4** (XOR, NAND, NOR, XNOR): Zum `explanation`-Objekt:
```javascript
visuals: [
  { type: 'gate-sim', gate: 'xor', label: 'XOR-Gatter' },
  { type: 'gate-sim', gate: 'nand', label: 'NAND-Gatter' },
  { type: 'gate-sim', gate: 'nor', label: 'NOR-Gatter' },
  { type: 'gate-sim', gate: 'xnor', label: 'XNOR-Gatter' },
  { type: 'truth-table-linked', gate: 'xor' }
]
```

**Lektion 5** (Wahrheitstabellen): Zum `explanation`-Objekt:
```javascript
visuals: [
  { type: 'truth-table-linked', gate: 'and' }
]
```

**Lektion 6** (Operatorrangfolge): Zum `explanation`-Objekt:
```javascript
visuals: [
  { type: 'expression-tree', expression: '¬a ∧ b ∨ c' }
]
```

**Lektion 7** (Gleichung → Wahrheitstabelle): Zum `example`-Objekt:
```javascript
visuals: [
  { type: 'expression-tree', expression: '(a ∨ b) ∧ ¬c' },
  { type: 'truth-table-linked', gate: 'and' }
]
```

**Lektion 8** (DNF): Zum `explanation`-Objekt:
```javascript
visuals: [
  { type: 'dnf-highlighter', variables: ['a', 'b', 'c'], results: [0, 1, 0, 0, 1, 0, 1, 0] }
]
```

**Lektion 9** (Äquivalenz): Zum `explanation`-Objekt:
```javascript
visuals: [
  { type: 'expression-tree', expression: '¬(a ∧ b)' },
  { type: 'expression-tree', expression: '¬a ∨ ¬b' }
]
```

**Lektion 10** (Gatterschaltungen): Zum `explanation`-Objekt:
```javascript
visuals: [
  { type: 'circuit', circuit: 'half-adder', interactive: true }
]
```

- [ ] **Step 2: Im Browser testen**

Lektionen 3-10 durchklicken, Visuals in der Erklärungsphase prüfen.

- [ ] **Step 3: Commit**

```bash
git add app/js/lessons-c1.js
git commit -m "feat: add visual elements to C1 lessons 3-10"
```

---

## Task 13: Visuals in C2-Lektionen integrieren (Lektionen 12-17)

**Files:**
- Modify: `app/js/lessons-c2.js`

- [ ] **Step 1: Visuals-Felder zu Lektionen 12-17 hinzufügen**

**Lektion 12** (Binäraddition): Zum `explanation`-Objekt:
```javascript
visuals: [
  { type: 'binary-animation', operandA: '1011', operandB: '0110' }
]
```

**Lektion 13** (Halbaddierer): Zum `explanation`-Objekt:
```javascript
visuals: [
  { type: 'gate-sim', gate: 'xor', label: 'XOR als Summenbit' },
  { type: 'gate-sim', gate: 'and', label: 'AND als Carry-Bit' }
]
```
Zum `example`-Objekt:
```javascript
visuals: [
  { type: 'circuit', circuit: 'half-adder', interactive: true }
]
```

**Lektion 14** (Volladdierer): Zum `explanation`-Objekt:
```javascript
visuals: [
  { type: 'circuit', circuit: 'full-adder', interactive: true }
]
```

**Lektion 15** (Addierwerk): Zum `explanation`-Objekt:
```javascript
visuals: [
  { type: 'adder-sim', bits: 4 },
  { type: 'binary-animation', operandA: '1101', operandB: '1011' }
]
```

**Lektion 16** (Sequenzielle Logik): Zum `explanation`-Objekt:
```javascript
visuals: [
  { type: 'circuit', circuit: 'sr-latch', interactive: false }
]
```
Hier bewusst `interactive: false` – die Rückkopplung wird nur als statisches Diagramm gezeigt, das Konzept wird erklärt. Die interaktive Version kommt in Lektion 17.

**Lektion 17** (SR-Riegel): Zum `explanation`-Objekt:
```javascript
visuals: [
  { type: 'circuit', circuit: 'sr-latch', interactive: true },
  { type: 'timing-diagram', signals: ['S', 'R', 'Q', 'Q\u0304'] }
]
```

- [ ] **Step 2: Im Browser testen**

Lektionen 12-17 durchklicken, Visuals prüfen.

- [ ] **Step 3: Commit**

```bash
git add app/js/lessons-c2.js
git commit -m "feat: add visual elements to C2 lessons 12-17"
```

---

## Task 14: Abschluss-Test & Polishing

**Files:**
- Alle geänderten Dateien

- [ ] **Step 1: Vollständiger Durchlauf**

App im Browser öffnen und systematisch prüfen:
1. Sidebar: Labor-Eintrag vorhanden
2. Lektionen 3-10: Visuals in Erklärungsphase
3. Lektionen 12-17: Visuals in Erklärungsphase, Circuits in Beispielphase
4. Labor: Alle 7 Bereiche funktional
5. Mobile: Hamburger-Menu, responsive Layouts
6. Keine Konsolen-Fehler

- [ ] **Step 2: Eventuelle Fixes**

Bugs beheben, die beim Durchlauf auffallen.

- [ ] **Step 3: Finaler Commit**

```bash
git add -A
git commit -m "fix: polish visual components and fix integration issues"
```
