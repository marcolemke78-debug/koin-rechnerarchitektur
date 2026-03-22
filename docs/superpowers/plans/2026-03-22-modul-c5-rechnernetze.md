# Modul C5 Rechnernetze I – Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 8 new lessons (IDs 18-25) about computer networks, 4 visualization components, 3 exercise types, and sandbox extensions to the existing learning app.

**Architecture:** New lessons-c5.js file, extend existing visuals.js/exercises.js/sandbox.js/renderer.js/app.js/progress.js. Follow existing C1/C2 patterns exactly.

**Tech Stack:** Vanilla JS, CSS, SVG – no framework.

**Spec:** `docs/superpowers/specs/2026-03-22-modul-c5-rechnernetze-design.md`

---

## Task 1: CSS & Infrastructure

**Files:**
- Modify: `app/css/style.css` (add network-specific CSS at end)
- Modify: `app/js/progress.js` (lines 3-4: TOTAL_LESSONS 17→25, VERSION 1→2)
- Modify: `app/js/renderer.js` (lines 9-41: renderSidebar for c5; line 49: 17→25; lines 63-64: LessonsC5 lookup; lines 293-333: 4 new visual cases)
- Modify: `app/index.html` (sidebar C5 module, script tag for lessons-c5.js)
- Modify: `app/js/app.js` (lines 1-20: 8 new LESSONS entries)

**Commit:** `feat(c5): add infrastructure – CSS, progress, renderer, sidebar, app.js entries`

- [ ] **Step 1: Add network CSS classes to `app/css/style.css`**

Append the following CSS at the end of `style.css`. These cover all 4 new visual components:

```css
/* === C5: Netzwerk-Visualisierungen === */

/* IP-Converter */
.ip-converter {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: flex-start;
}

.ip-converter .octet-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.ip-converter .octet-separator {
  font-size: 2rem;
  font-weight: bold;
  color: var(--text-light);
  align-self: center;
  padding-top: 1.5rem;
}

.ip-converter .place-values {
  display: flex;
  gap: 2px;
}

.ip-converter .place-values span {
  width: 32px;
  text-align: center;
  font-size: 10px;
  color: var(--text-light);
}

.ip-converter .bit-row {
  display: flex;
  gap: 2px;
}

.ip-converter .bit-btn {
  width: 32px;
  height: 32px;
  border: 2px solid var(--border);
  border-radius: 4px;
  font-family: monospace;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
}

.ip-converter .bit-btn.high {
  background: var(--signal-high);
  color: white;
  border-color: var(--signal-high);
}

.ip-converter .bit-btn.low {
  background: var(--signal-low);
  color: white;
  border-color: var(--signal-low);
}

.ip-converter .octet-decimal input {
  width: 60px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 4px;
  border: 2px solid var(--border);
  border-radius: 4px;
  font-family: monospace;
}

.ip-converter .octet-decimal input:focus {
  border-color: var(--accent);
  outline: none;
}

.ip-converter .full-ip-display {
  width: 100%;
  text-align: center;
  font-family: monospace;
  font-size: 1.1rem;
  color: var(--text);
  margin-top: 0.5rem;
  padding: 8px;
  background: var(--sidebar-bg);
  border-radius: 6px;
}

/* Subnet-Calculator */
.subnet-calculator {
  max-width: 700px;
  margin: 0 auto;
}

.subnet-calculator .input-row {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.subnet-calculator .input-row label {
  font-weight: 600;
  min-width: 120px;
}

.subnet-calculator .octet-input {
  width: 55px;
  text-align: center;
  font-family: monospace;
  font-size: 1rem;
  padding: 6px 4px;
  border: 2px solid var(--border);
  border-radius: 4px;
}

.subnet-calculator .octet-input:focus {
  border-color: var(--accent);
  outline: none;
}

.subnet-calculator .octet-dot {
  font-weight: bold;
  font-size: 1.2rem;
}

.subnet-calculator .cidr-input {
  width: 50px;
  text-align: center;
  font-family: monospace;
  font-size: 1rem;
  padding: 6px 4px;
  border: 2px solid var(--border);
  border-radius: 4px;
}

.subnet-calculator .results {
  margin-top: 1rem;
}

.subnet-calculator .result-row {
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
  padding: 6px 0;
  border-bottom: 1px solid var(--border);
}

.subnet-calculator .result-row:last-child {
  border-bottom: none;
}

.subnet-calculator .result-label {
  font-weight: 600;
  min-width: 140px;
  color: var(--text);
}

.subnet-calculator .result-value {
  font-family: monospace;
  font-size: 1rem;
}

.subnet-calculator .binary-display {
  margin-top: 1rem;
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 1.8;
  background: var(--sidebar-bg);
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
}

.subnet-calculator .net-part {
  color: var(--signal-high);
  font-weight: bold;
}

.subnet-calculator .host-part {
  color: var(--accent);
  font-weight: bold;
}

/* Subnetting-Visualizer */
.subnetting-viz {
  max-width: 700px;
  margin: 0 auto;
}

.subnetting-viz .controls {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.subnetting-viz .controls label {
  font-weight: 600;
}

.subnetting-viz .controls select {
  padding: 6px 12px;
  font-size: 1rem;
  border: 2px solid var(--border);
  border-radius: 4px;
  min-width: 80px;
}

.subnetting-viz .address-bar {
  width: 100%;
  height: 40px;
  display: flex;
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid var(--border);
  margin-bottom: 1rem;
}

.subnetting-viz .subnet-segment {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  transition: flex 0.3s;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 4px;
}

.subnetting-viz .subnet-details {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.75rem;
}

.subnetting-viz .subnet-card {
  padding: 10px 14px;
  border-radius: 6px;
  border-left: 4px solid;
  background: var(--sidebar-bg);
  font-size: 0.85rem;
}

.subnetting-viz .subnet-card strong {
  display: block;
  margin-bottom: 4px;
}

.subnetting-viz .subnet-card code {
  font-family: monospace;
}

/* Network-Diagram */
.network-diagram {
  text-align: center;
}

.network-diagram svg {
  max-width: 100%;
  height: auto;
}

.network-diagram .device-label {
  font-size: 11px;
  fill: var(--text);
  text-anchor: middle;
  font-weight: 600;
}

.network-diagram .device-sublabel {
  font-size: 9px;
  fill: var(--text-light);
  text-anchor: middle;
}

.network-diagram .connection-line {
  stroke: var(--border);
  stroke-width: 2;
}

.network-diagram .device-icon {
  fill: white;
  stroke: var(--text);
  stroke-width: 1.5;
}

/* Network-Labeling Exercise */
.network-labeling .label-slot {
  cursor: pointer;
  fill: var(--accent-light);
  stroke: var(--accent);
  stroke-width: 1.5;
  rx: 4;
}

.network-labeling .label-slot:hover {
  fill: var(--accent);
  stroke: var(--accent);
}

.network-labeling .label-slot.assigned {
  fill: var(--accent);
}

.network-labeling .label-text {
  font-size: 10px;
  fill: var(--text);
  text-anchor: middle;
  pointer-events: none;
  font-weight: 600;
}

.network-labeling .label-text.assigned {
  fill: white;
}

.network-labeling .label-dropdown {
  position: absolute;
  background: white;
  border: 2px solid var(--accent);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 100;
  padding: 4px 0;
}

.network-labeling .label-dropdown div {
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  min-height: 44px;
  display: flex;
  align-items: center;
}

.network-labeling .label-dropdown div:hover {
  background: var(--accent-light);
}

/* Binary-Decimal Exercise */
.binary-decimal-exercise .round-display {
  text-align: center;
  margin: 1rem 0;
}

.binary-decimal-exercise .given-value {
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent);
  margin: 0.5rem 0;
}

.binary-decimal-exercise .direction-hint {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 0.5rem;
}

.binary-decimal-exercise input {
  font-family: monospace;
  font-size: 1.2rem;
  text-align: center;
  width: 180px;
  padding: 8px;
  border: 2px solid var(--border);
  border-radius: 6px;
}

.binary-decimal-exercise input:focus {
  border-color: var(--accent);
  outline: none;
}

.binary-decimal-exercise .round-counter {
  font-size: 0.85rem;
  color: var(--text-light);
  margin-bottom: 0.5rem;
}

/* Subnet Exercise */
.subnet-exercise .field-row {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 0.5rem 0;
  flex-wrap: wrap;
}

.subnet-exercise .field-row label {
  font-weight: 600;
  min-width: 140px;
}

.subnet-exercise .field-row input {
  font-family: monospace;
  font-size: 1rem;
  padding: 6px 8px;
  border: 2px solid var(--border);
  border-radius: 4px;
  width: 180px;
}

.subnet-exercise .field-row input:focus {
  border-color: var(--accent);
  outline: none;
}

.subnet-exercise .field-row .field-feedback {
  font-size: 0.85rem;
  font-weight: 600;
}

.subnet-exercise .field-row .field-feedback.correct {
  color: var(--success);
}

.subnet-exercise .field-row .field-feedback.wrong {
  color: var(--error);
}
```

- [ ] **Step 2: Update `app/js/progress.js` – TOTAL_LESSONS and VERSION**

In `app/js/progress.js`:
- Line 3: Change `VERSION: 1,` → `VERSION: 2,`
- Line 4: Change `TOTAL_LESSONS: 17,` → `TOTAL_LESSONS: 25,`

The version bump ensures existing users get a fresh progress state that includes lessons 18-25. The `createDefault()` method (line 8-12) already uses `this.TOTAL_LESSONS` in its loop, so it will automatically create entries for IDs 1-25.

- [ ] **Step 3: Update `app/js/renderer.js` – renderSidebar for C5**

In `app/js/renderer.js`, `renderSidebar()` method:

**3a.** At line 9-10, add `listC5` reference:
```javascript
renderSidebar(lessons) {
    const listC1 = document.getElementById('lesson-list-c1');
    const listC2 = document.getElementById('lesson-list-c2');
    const listC5 = document.getElementById('lesson-list-c5');

    // Listen leeren, bevor wir neu rendern
    listC1.innerHTML = '';
    listC2.innerHTML = '';
    if (listC5) listC5.innerHTML = '';
```

**3b.** At lines 36-40, change the if/else to if/else-if/else:
```javascript
      // In die richtige Liste einfuegen
      if (lesson.module === 'c1') {
        listC1.appendChild(li);
      } else if (lesson.module === 'c5') {
        if (listC5) listC5.appendChild(li);
      } else {
        listC2.appendChild(li);
      }
```

- [ ] **Step 4: Update `app/js/renderer.js` – renderProgressBar range**

At line 49, change:
```javascript
const percent = Progress.getCompletionPercent(1, 17);
```
to:
```javascript
const percent = Progress.getCompletionPercent(1, 25);
```

- [ ] **Step 5: Update `app/js/renderer.js` – renderLesson to include LessonsC5**

At lines 63-64, add `LessonsC5` lookup:
```javascript
    const lessonData = LessonsC1.find(l => l.id === id)
      || LessonsC2.find(l => l.id === id)
      || LessonsC5.find(l => l.id === id);
```

- [ ] **Step 6: Update `app/js/renderer.js` – renderVisuals with 4 new cases**

In `Renderer.renderVisuals()` (line 285-335), add 4 new cases before the `default:` case (before line 331):

```javascript
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
```

- [ ] **Step 7: Update `app/index.html` – C5 sidebar module + script tag**

**7a.** After the `<div id="module-c2">...</div>` block (after line 20), add:
```html
    <div id="module-c5">
      <h3>C5 – Rechnernetze I</h3>
      <ul id="lesson-list-c5"></ul>
    </div>
```

**7b.** After the `<script src="js/lessons-c2.js"></script>` tag (after line 38), add:
```html
  <script src="js/lessons-c5.js"></script>
```

- [ ] **Step 8: Update `app/js/app.js` – 8 new LESSONS entries**

At line 19 (after the `{ id: 17, title: 'SR-Riegel', module: 'c2' }` entry), add 8 new entries:

```javascript
  { id: 18, title: 'Das Internet und Adressierung', module: 'c5' },
  { id: 19, title: 'Netztypen & Geräte', module: 'c5' },
  { id: 20, title: 'Technische Grundlagen', module: 'c5' },
  { id: 21, title: 'IP-Adressen: IPv4, IPv6, MAC', module: 'c5' },
  { id: 22, title: 'Subnetzmaske & Net-ID', module: 'c5' },
  { id: 23, title: 'Subnetze berechnen', module: 'c5' },
  { id: 24, title: 'Hands-on: ping', module: 'c5' },
  { id: 25, title: 'Lokale vs. globale IPs', module: 'c5' },
```

Also update the comment on line 1 from `// Alle 17 Lektionen` to `// Alle 25 Lektionen`.

---

## Task 2: IPConverter Component

**Files:**
- Modify: `app/js/visuals.js` (append new method at end, after line 1236)

**Commit:** `feat(c5): add IPConverter visualization component`

- [ ] **Step 1: Implement `Visuals.renderIPConverter()`**

Append to `app/js/visuals.js`:

```javascript
/**
 * Rendert einen interaktiven IP-Adresse Dezimal ↔ Binär Konverter.
 * 4 Oktette × 8 klickbare Bits mit bidirektionaler Konvertierung.
 *
 * @param {Object} config - { type: 'ip-converter' }
 * @param {HTMLElement} container
 */
Visuals.renderIPConverter = function(config, container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'visual-container ip-converter';

  const PLACE_VALUES = [128, 64, 32, 16, 8, 4, 2, 1];
  // State: 4 Oktette, je 8 Bits (default: 192.168.1.1)
  const state = {
    octets: [
      [1,1,0,0,0,0,0,0],  // 192
      [1,0,1,0,1,0,0,0],  // 168
      [0,0,0,0,0,0,0,1],  // 1
      [0,0,0,0,0,0,0,1]   // 1
    ]
  };

  const octetElements = []; // { bitBtns: [], decInput: HTMLInputElement }[]

  for (let o = 0; o < 4; o++) {
    // Separator-Punkt (außer vor dem ersten Oktett)
    if (o > 0) {
      const sep = document.createElement('span');
      sep.className = 'octet-separator';
      sep.textContent = '.';
      wrapper.appendChild(sep);
    }

    const group = document.createElement('div');
    group.className = 'octet-group';

    // Stellenwerte
    const placeRow = document.createElement('div');
    placeRow.className = 'place-values';
    PLACE_VALUES.forEach(pv => {
      const span = document.createElement('span');
      span.textContent = pv;
      placeRow.appendChild(span);
    });
    group.appendChild(placeRow);

    // Bit-Buttons
    const bitRow = document.createElement('div');
    bitRow.className = 'bit-row';
    const bitBtns = [];

    for (let b = 0; b < 8; b++) {
      const btn = document.createElement('button');
      btn.className = 'bit-btn';
      btn.dataset.octet = o;
      btn.dataset.bit = b;
      btn.addEventListener('click', () => {
        state.octets[o][b] = state.octets[o][b] === 0 ? 1 : 0;
        update();
      });
      bitBtns.push(btn);
      bitRow.appendChild(btn);
    }
    group.appendChild(bitRow);

    // Dezimal-Eingabe
    const decDiv = document.createElement('div');
    decDiv.className = 'octet-decimal';
    const decInput = document.createElement('input');
    decInput.type = 'number';
    decInput.min = 0;
    decInput.max = 255;
    decInput.dataset.octet = o;
    decInput.addEventListener('input', () => {
      let val = parseInt(decInput.value, 10);
      if (isNaN(val)) val = 0;
      if (val < 0) val = 0;
      if (val > 255) val = 255;
      // Dezimal → Bits umrechnen
      for (let b = 0; b < 8; b++) {
        state.octets[o][b] = (val >> (7 - b)) & 1;
      }
      update();
    });
    decDiv.appendChild(decInput);
    group.appendChild(decDiv);

    wrapper.appendChild(group);
    octetElements.push({ bitBtns, decInput });
  }

  // Vollständige IP-Anzeige
  const fullDisplay = document.createElement('div');
  fullDisplay.className = 'full-ip-display';
  wrapper.appendChild(fullDisplay);

  container.appendChild(wrapper);

  function bitsToDecimal(bits) {
    let val = 0;
    for (let i = 0; i < 8; i++) {
      val += bits[i] * PLACE_VALUES[i];
    }
    return val;
  }

  function update() {
    const decimals = [];
    const binaries = [];

    for (let o = 0; o < 4; o++) {
      const dec = bitsToDecimal(state.octets[o]);
      decimals.push(dec);
      binaries.push(state.octets[o].join(''));

      // Buttons aktualisieren
      for (let b = 0; b < 8; b++) {
        const btn = octetElements[o].bitBtns[b];
        btn.textContent = state.octets[o][b];
        btn.className = 'bit-btn ' + (state.octets[o][b] ? 'high' : 'low');
      }

      // Dezimal-Eingabe aktualisieren (nur wenn nicht fokussiert)
      if (document.activeElement !== octetElements[o].decInput) {
        octetElements[o].decInput.value = dec;
      }
    }

    fullDisplay.innerHTML =
      '<strong>Dezimal:</strong> ' + decimals.join('.') +
      ' &nbsp; | &nbsp; ' +
      '<strong>Binär:</strong> ' + binaries.join('.');
  }

  update();
};
```

---

## Task 3: SubnetCalculator Component

**Files:**
- Modify: `app/js/visuals.js` (append after IPConverter)

**Commit:** `feat(c5): add SubnetCalculator visualization component`

- [ ] **Step 1: Implement `Visuals.renderSubnetCalculator()`**

Append to `app/js/visuals.js`:

```javascript
/**
 * Rendert einen Subnetz-Rechner.
 * IP + Maske eingeben → Net-ID, Broadcast, Hostbereich, Hostanzahl.
 * Binärdarstellung mit farbigen Netz-/Hostanteilen.
 *
 * @param {Object} config - { type: 'subnet-calculator' }
 * @param {HTMLElement} container
 */
Visuals.renderSubnetCalculator = function(config, container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'visual-container subnet-calculator';

  // --- Eingabe: IP-Adresse ---
  const ipRow = document.createElement('div');
  ipRow.className = 'input-row';
  const ipLabel = document.createElement('label');
  ipLabel.textContent = 'IP-Adresse:';
  ipRow.appendChild(ipLabel);

  const ipInputs = [];
  for (let i = 0; i < 4; i++) {
    if (i > 0) {
      const dot = document.createElement('span');
      dot.className = 'octet-dot';
      dot.textContent = '.';
      ipRow.appendChild(dot);
    }
    const inp = document.createElement('input');
    inp.className = 'octet-input';
    inp.type = 'number'; inp.min = 0; inp.max = 255;
    inp.value = [192, 168, 20, 45][i];
    inp.addEventListener('input', calculate);
    ipInputs.push(inp);
    ipRow.appendChild(inp);
  }
  wrapper.appendChild(ipRow);

  // --- Eingabe: CIDR ---
  const cidrRow = document.createElement('div');
  cidrRow.className = 'input-row';
  const cidrLabel = document.createElement('label');
  cidrLabel.textContent = 'CIDR-Prefix:';
  cidrRow.appendChild(cidrLabel);

  const cidrSlash = document.createElement('span');
  cidrSlash.textContent = '/';
  cidrSlash.style.fontWeight = 'bold';
  cidrRow.appendChild(cidrSlash);

  const cidrInput = document.createElement('input');
  cidrInput.className = 'cidr-input';
  cidrInput.type = 'number'; cidrInput.min = 0; cidrInput.max = 32;
  cidrInput.value = 24;
  cidrInput.addEventListener('input', calculate);
  cidrRow.appendChild(cidrInput);
  wrapper.appendChild(cidrRow);

  // --- Berechnen-Button ---
  const calcBtn = document.createElement('button');
  calcBtn.className = 'exercise-check-btn';
  calcBtn.textContent = 'Berechnen';
  calcBtn.style.marginTop = '0.5rem';
  calcBtn.addEventListener('click', calculate);
  wrapper.appendChild(calcBtn);

  // --- Binär-Anzeige ---
  const binaryDiv = document.createElement('div');
  binaryDiv.className = 'binary-display';
  wrapper.appendChild(binaryDiv);

  // --- Ergebnis-Anzeige ---
  const resultsDiv = document.createElement('div');
  resultsDiv.className = 'results';
  wrapper.appendChild(resultsDiv);

  container.appendChild(wrapper);

  // --- Hilfsfunktionen ---
  function octetToBinary(val) {
    return val.toString(2).padStart(8, '0');
  }

  function ipToArray() {
    return ipInputs.map(inp => {
      let v = parseInt(inp.value, 10);
      if (isNaN(v) || v < 0) v = 0;
      if (v > 255) v = 255;
      return v;
    });
  }

  function calculate() {
    const ip = ipToArray();
    let cidr = parseInt(cidrInput.value, 10);
    if (isNaN(cidr) || cidr < 0) cidr = 0;
    if (cidr > 32) cidr = 32;

    // Subnetzmaske berechnen
    const maskBits = cidr;
    const mask = [];
    for (let i = 0; i < 4; i++) {
      const bitsInOctet = Math.min(Math.max(maskBits - i * 8, 0), 8);
      mask.push(256 - Math.pow(2, 8 - bitsInOctet));
    }

    // Net-ID = IP AND Maske
    const netId = ip.map((o, i) => o & mask[i]);

    // Broadcast = Net-ID OR invertierte Maske
    const broadcast = netId.map((o, i) => o | (255 - mask[i]));

    // Erster Host = Net-ID + 1 (letztes Oktett)
    const firstHost = [...netId];
    firstHost[3] += 1;

    // Letzter Host = Broadcast - 1 (letztes Oktett)
    const lastHost = [...broadcast];
    lastHost[3] -= 1;

    // Hostanzahl
    const hostBits = 32 - cidr;
    const hostCount = hostBits >= 2 ? Math.pow(2, hostBits) - 2 : 0;

    // --- Binär-Anzeige mit farbigen Anteilen ---
    const ipBin = ip.map(o => octetToBinary(o)).join('');
    const maskBin = mask.map(o => octetToBinary(o)).join('');

    let ipColoredHtml = '<strong>IP (binär):</strong> ';
    let maskColoredHtml = '<strong>Maske (binär):</strong> ';
    for (let i = 0; i < 32; i++) {
      const cssClass = i < cidr ? 'net-part' : 'host-part';
      ipColoredHtml += `<span class="${cssClass}">${ipBin[i]}</span>`;
      maskColoredHtml += `<span class="${cssClass}">${maskBin[i]}</span>`;
      if ((i + 1) % 8 === 0 && i < 31) {
        ipColoredHtml += '.';
        maskColoredHtml += '.';
      }
    }
    binaryDiv.innerHTML = ipColoredHtml + '<br>' + maskColoredHtml
      + '<br><br><span class="net-part">■ Netzanteil</span> &nbsp; '
      + '<span class="host-part">■ Hostanteil</span>';

    // --- Ergebnisse ---
    const fmt = arr => arr.join('.');
    resultsDiv.innerHTML = '';

    const fields = [
      ['Subnetzmaske', fmt(mask)],
      ['Net-ID', fmt(netId)],
      ['Broadcast', fmt(broadcast)],
      ['Erster Host', fmt(firstHost)],
      ['Letzter Host', fmt(lastHost)],
      ['Nutzbare Hosts', hostCount.toString()]
    ];

    fields.forEach(([label, value]) => {
      const row = document.createElement('div');
      row.className = 'result-row';
      row.innerHTML = `<span class="result-label">${label}:</span>`
        + `<span class="result-value">${value}</span>`;
      resultsDiv.appendChild(row);
    });
  }

  calculate();
};
```

---

## Task 4: SubnettingVisualizer Component

**Files:**
- Modify: `app/js/visuals.js` (append after SubnetCalculator)

**Commit:** `feat(c5): add SubnettingVisualizer component`

- [ ] **Step 1: Implement `Visuals.renderSubnettingViz()`**

Append to `app/js/visuals.js`:

```javascript
/**
 * Rendert eine Subnetting-Visualisierung.
 * Horizontaler Balken = Adressbereich, wird in farbige Subnet-Segmente aufgeteilt.
 *
 * @param {Object} config - { network: '192.168.10.0', cidr: 24 }
 * @param {HTMLElement} container
 */
Visuals.renderSubnettingViz = function(config, container) {
  const network = config.network || '192.168.10.0';
  const baseCidr = config.cidr || 24;

  const wrapper = document.createElement('div');
  wrapper.className = 'visual-container subnetting-viz';

  // Steuerung
  const controls = document.createElement('div');
  controls.className = 'controls';

  const netLabel = document.createElement('label');
  netLabel.textContent = `Netz: ${network}/${baseCidr}`;
  controls.appendChild(netLabel);

  const selectLabel = document.createElement('label');
  selectLabel.textContent = 'Aufteilen in:';
  controls.appendChild(selectLabel);

  const select = document.createElement('select');
  // Optionen: vom baseCidr+1 bis baseCidr+6 (max /30)
  const maxCidr = Math.min(baseCidr + 6, 30);
  for (let c = baseCidr + 1; c <= maxCidr; c++) {
    const numSubnets = Math.pow(2, c - baseCidr);
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = `/${c} (${numSubnets} Subnetze)`;
    select.appendChild(opt);
  }
  controls.appendChild(select);
  wrapper.appendChild(controls);

  // Farbbalken
  const bar = document.createElement('div');
  bar.className = 'address-bar';
  wrapper.appendChild(bar);

  // Detail-Karten
  const details = document.createElement('div');
  details.className = 'subnet-details';
  wrapper.appendChild(details);

  container.appendChild(wrapper);

  const COLORS = [
    '#2563EB', '#16A34A', '#D97706', '#DC2626',
    '#7C3AED', '#0891B2', '#BE185D', '#4F46E5',
    '#059669', '#CA8A04', '#E11D48', '#6D28D9',
    '#0D9488', '#B45309', '#9333EA', '#0284C7',
    '#65A30D', '#C026D3', '#EA580C', '#4338CA',
    '#15803D', '#A21CAF', '#DB2777', '#1D4ED8',
    '#84CC16', '#8B5CF6', '#F97316', '#06B6D4',
    '#E879F9', '#22D3EE', '#FB923C', '#A3E635',
    '#F472B6', '#34D399', '#FACC15', '#818CF8',
    '#F87171', '#2DD4BF', '#FCD34D', '#A78BFA',
    '#FB7185', '#5EEAD4', '#FDE047', '#C4B5FD',
    '#FDA4AF', '#99F6E4', '#FEF08A', '#DDD6FE',
    '#FECDD3', '#CCFBF1', '#FEF9C3', '#EDE9FE',
    '#FFE4E6', '#D1FAE5', '#FFFBEB', '#F5F3FF',
    '#FFF1F2', '#ECFDF5', '#FFFBEB', '#FAF5FF',
    '#FFF5F5', '#F0FDF4', '#FEFCE8', '#F5F3FF'
  ];

  function parseIP(str) {
    return str.split('.').map(Number);
  }

  function ipToNumber(octets) {
    return ((octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3]) >>> 0;
  }

  function numberToIP(num) {
    return [
      (num >>> 24) & 255,
      (num >>> 16) & 255,
      (num >>> 8) & 255,
      num & 255
    ].join('.');
  }

  function render() {
    const subnetCidr = parseInt(select.value, 10);
    const numSubnets = Math.pow(2, subnetCidr - baseCidr);
    const hostsPerSubnet = Math.pow(2, 32 - subnetCidr);

    const baseIP = ipToNumber(parseIP(network));

    bar.innerHTML = '';
    details.innerHTML = '';

    for (let i = 0; i < numSubnets; i++) {
      const subnetStart = baseIP + i * hostsPerSubnet;
      const subnetBroadcast = subnetStart + hostsPerSubnet - 1;
      const color = COLORS[i % COLORS.length];

      // Segment im Balken
      const seg = document.createElement('div');
      seg.className = 'subnet-segment';
      seg.style.flex = '1';
      seg.style.background = color;
      seg.textContent = `#${i + 1}`;
      seg.title = numberToIP(subnetStart) + '/' + subnetCidr;
      bar.appendChild(seg);

      // Detail-Karte
      const card = document.createElement('div');
      card.className = 'subnet-card';
      card.style.borderLeftColor = color;

      const hostCount = hostsPerSubnet >= 2 ? hostsPerSubnet - 2 : 0;
      card.innerHTML =
        `<strong style="color:${color}">Subnetz ${i + 1}</strong>`
        + `<code>Net-ID: ${numberToIP(subnetStart)}/${subnetCidr}</code><br>`
        + `<code>Broadcast: ${numberToIP(subnetBroadcast)}</code><br>`
        + `<code>Hosts: ${hostCount}</code>`;
      details.appendChild(card);
    }
  }

  select.addEventListener('change', render);
  render();
};
```

---

## Task 5: NetworkDiagram Component

**Files:**
- Modify: `app/js/visuals.js` (append after SubnettingVisualizer)

**Commit:** `feat(c5): add NetworkDiagram SVG component with 3 presets`

- [ ] **Step 1: Add device icon SVG generators**

Append to `app/js/visuals.js` – helper object for SVG device icons:

```javascript
/**
 * SVG-Geräteicons für Netzwerkdiagramme.
 * Jede Funktion gibt einen SVG-Group-String zurück (g-Element Inhalt).
 */
Visuals.NETWORK_ICONS = {
  // Router: Rechteck mit 2 Pfeilen
  router: function(x, y) {
    return `<g transform="translate(${x},${y})">
      <rect x="-20" y="-15" width="40" height="30" rx="4" class="device-icon" fill="#DBEAFE" stroke="#2563EB"/>
      <path d="M-8,-4 L8,-4 L4,-8 M8,-4 L4,0" stroke="#2563EB" stroke-width="1.5" fill="none"/>
      <path d="M8,4 L-8,4 L-4,0 M-8,4 L-4,8" stroke="#2563EB" stroke-width="1.5" fill="none"/>
    </g>`;
  },
  // Switch: Rechteck mit 4 Ports
  switch: function(x, y) {
    return `<g transform="translate(${x},${y})">
      <rect x="-22" y="-12" width="44" height="24" rx="3" class="device-icon" fill="#D1FAE5" stroke="#16A34A"/>
      <rect x="-16" y="-6" width="6" height="6" rx="1" fill="#16A34A"/>
      <rect x="-6" y="-6" width="6" height="6" rx="1" fill="#16A34A"/>
      <rect x="4" y="-6" width="6" height="6" rx="1" fill="#16A34A"/>
      <rect x="14" y="-6" width="6" height="6" rx="1" fill="#16A34A" opacity="0.4"/>
    </g>`;
  },
  // Host/PC: Monitor
  host: function(x, y) {
    return `<g transform="translate(${x},${y})">
      <rect x="-14" y="-14" width="28" height="20" rx="2" class="device-icon" fill="#F3F4F6" stroke="#6B7280"/>
      <rect x="-3" y="6" width="6" height="6" fill="#6B7280"/>
      <rect x="-8" y="12" width="16" height="2" rx="1" fill="#6B7280"/>
    </g>`;
  },
  // Modem: Rechteck mit Wellen
  modem: function(x, y) {
    return `<g transform="translate(${x},${y})">
      <rect x="-18" y="-10" width="36" height="20" rx="3" class="device-icon" fill="#FEF3C7" stroke="#D97706"/>
      <path d="M-6,-3 Q-3,-8 0,-3 Q3,2 6,-3" stroke="#D97706" stroke-width="1.5" fill="none"/>
    </g>`;
  },
  // Access Point: Dreieck/Antenne
  ap: function(x, y) {
    return `<g transform="translate(${x},${y})">
      <rect x="-14" y="-6" width="28" height="18" rx="3" class="device-icon" fill="#EDE9FE" stroke="#7C3AED"/>
      <line x1="0" y1="-6" x2="0" y2="-14" stroke="#7C3AED" stroke-width="2"/>
      <path d="M-6,-12 Q0,-18 6,-12" stroke="#7C3AED" stroke-width="1.5" fill="none"/>
      <path d="M-10,-10 Q0,-20 10,-10" stroke="#7C3AED" stroke-width="1" fill="none" opacity="0.5"/>
    </g>`;
  },
  // Cloud (Internet)
  cloud: function(x, y) {
    return `<g transform="translate(${x},${y})">
      <ellipse cx="0" cy="0" rx="28" ry="16" fill="#F0F9FF" stroke="#0EA5E9" stroke-width="1.5"/>
      <text x="0" y="4" text-anchor="middle" font-size="9" fill="#0EA5E9" font-weight="600">Internet</text>
    </g>`;
  },
  // Smartphone
  phone: function(x, y) {
    return `<g transform="translate(${x},${y})">
      <rect x="-8" y="-14" width="16" height="28" rx="3" class="device-icon" fill="#F3F4F6" stroke="#6B7280"/>
      <rect x="-5" y="-10" width="10" height="16" fill="#E5E7EB"/>
      <circle cx="0" cy="10" r="2" fill="#6B7280"/>
    </g>`;
  },
  // Tablet
  tablet: function(x, y) {
    return `<g transform="translate(${x},${y})">
      <rect x="-12" y="-14" width="24" height="28" rx="3" class="device-icon" fill="#F3F4F6" stroke="#6B7280"/>
      <rect x="-9" y="-10" width="18" height="18" fill="#E5E7EB"/>
      <circle cx="0" cy="11" r="1.5" fill="#6B7280"/>
    </g>`;
  }
};
```

- [ ] **Step 2: Add preset definitions and render method**

Append to `app/js/visuals.js`:

```javascript
/**
 * Netzwerkdiagramm-Presets.
 * Jedes Preset definiert nodes (Geräte) und edges (Verbindungen).
 */
Visuals.NETWORK_PRESETS = {
  'internet-overview': {
    width: 500, height: 160,
    nodes: [
      { id: 'sender', type: 'host', x: 50, y: 80, label: 'Absender' },
      { id: 'router1', type: 'router', x: 150, y: 80, label: 'Router' },
      { id: 'internet', type: 'cloud', x: 250, y: 80, label: '' },
      { id: 'router2', type: 'router', x: 350, y: 80, label: 'Router' },
      { id: 'receiver', type: 'host', x: 450, y: 80, label: 'Empfänger' }
    ],
    edges: [
      ['sender', 'router1'],
      ['router1', 'internet'],
      ['internet', 'router2'],
      ['router2', 'receiver']
    ]
  },
  'school-network': {
    width: 520, height: 320,
    nodes: [
      { id: 'internet', type: 'cloud', x: 260, y: 40, label: '' },
      { id: 'modem', type: 'modem', x: 260, y: 100, label: 'Modem' },
      { id: 'router', type: 'router', x: 260, y: 160, label: 'Router' },
      { id: 'switch1', type: 'switch', x: 130, y: 220, label: 'Switch' },
      { id: 'ap', type: 'ap', x: 390, y: 220, label: 'Access Point' },
      { id: 'pc1', type: 'host', x: 60, y: 285, label: 'PC (Klasse)' },
      { id: 'pc2', type: 'host', x: 130, y: 285, label: 'PC (Lehrer)' },
      { id: 'pc3', type: 'host', x: 200, y: 285, label: 'PC (Raum)' },
      { id: 'phone', type: 'phone', x: 350, y: 285, label: 'Handy' },
      { id: 'tablet', type: 'tablet', x: 430, y: 285, label: 'Tablet' }
    ],
    edges: [
      ['internet', 'modem'],
      ['modem', 'router'],
      ['router', 'switch1'],
      ['router', 'ap'],
      ['switch1', 'pc1'],
      ['switch1', 'pc2'],
      ['switch1', 'pc3'],
      ['ap', 'phone'],
      ['ap', 'tablet']
    ]
  },
  'home-network': {
    width: 500, height: 300,
    nodes: [
      { id: 'internet', type: 'cloud', x: 250, y: 40, label: '' },
      { id: 'modem', type: 'modem', x: 250, y: 110, label: 'Modem/Router', sublabel: 'öffentl. IP' },
      { id: 'pc', type: 'host', x: 80, y: 230, label: 'PC', sublabel: '192.168.1.2' },
      { id: 'phone', type: 'phone', x: 200, y: 230, label: 'Handy', sublabel: '192.168.1.3' },
      { id: 'tablet', type: 'tablet', x: 320, y: 230, label: 'Tablet', sublabel: '192.168.1.4' },
      { id: 'laptop', type: 'host', x: 440, y: 230, label: 'Laptop', sublabel: '192.168.1.5' }
    ],
    edges: [
      ['internet', 'modem'],
      ['modem', 'pc'],
      ['modem', 'phone'],
      ['modem', 'tablet'],
      ['modem', 'laptop']
    ]
  }
};

/**
 * Rendert ein statisches Netzwerkdiagramm (SVG).
 *
 * @param {Object} config - { preset: 'internet-overview'|'school-network'|'home-network', mode: 'static' }
 * @param {HTMLElement} container
 */
Visuals.renderNetworkDiagram = function(config, container) {
  const preset = Visuals.NETWORK_PRESETS[config.preset];
  if (!preset) {
    console.warn('Unbekanntes Netzwerk-Preset:', config.preset);
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'visual-container network-diagram';

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${preset.width} ${preset.height}`);
  svg.setAttribute('width', '100%');

  // Lookup: Node-ID → Position
  const nodeMap = {};
  preset.nodes.forEach(n => { nodeMap[n.id] = n; });

  // Verbindungslinien zeichnen
  preset.edges.forEach(([fromId, toId]) => {
    const from = nodeMap[fromId];
    const to = nodeMap[toId];
    if (!from || !to) return;
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', from.x);
    line.setAttribute('y1', from.y);
    line.setAttribute('x2', to.x);
    line.setAttribute('y2', to.y);
    line.setAttribute('class', 'connection-line');
    svg.appendChild(line);
  });

  // Geräte-Icons und Labels zeichnen
  preset.nodes.forEach(node => {
    const iconFn = Visuals.NETWORK_ICONS[node.type];
    if (!iconFn) return;

    // Icon als SVG-Gruppe einfügen (innerHTML auf g)
    const iconSvg = iconFn(node.x, node.y);
    const g = document.createElementNS(svgNS, 'g');
    g.innerHTML = iconSvg;
    svg.appendChild(g);

    // Label unter dem Icon
    if (node.label) {
      const text = document.createElementNS(svgNS, 'text');
      text.setAttribute('x', node.x);
      text.setAttribute('y', node.y + 28);
      text.setAttribute('class', 'device-label');
      text.textContent = node.label;
      svg.appendChild(text);
    }

    // Sublabel (z.B. IP-Adresse)
    if (node.sublabel) {
      const sub = document.createElementNS(svgNS, 'text');
      sub.setAttribute('x', node.x);
      sub.setAttribute('y', node.y + 39);
      sub.setAttribute('class', 'device-sublabel');
      sub.textContent = node.sublabel;
      svg.appendChild(sub);
    }
  });

  wrapper.appendChild(svg);
  container.appendChild(wrapper);
};
```

---

## Task 6: New Exercise Types

**Files:**
- Modify: `app/js/exercises.js` (add 3 dispatcher cases + 3 render methods)

**Commit:** `feat(c5): add binary-decimal, subnet-exercise, network-labeling exercise types`

- [ ] **Step 1: Add 3 new cases to the dispatcher**

In `app/js/exercises.js`, in the `render()` method switch statement (lines 11-29), add 3 new cases before the `default:` (before line 30):

```javascript
      case 'binary-decimal':
        return Exercises.renderBinaryDecimal(exercise, container, onComplete);
      case 'subnet-exercise':
        return Exercises.renderSubnetExercise(exercise, container, onComplete);
      case 'network-labeling':
        return Exercises.renderNetworkLabeling(exercise, container, onComplete);
```

- [ ] **Step 2: Implement `Exercises.renderBinaryDecimal()`**

Append to `app/js/exercises.js`:

```javascript
/**
 * Oktett-Trainer: Binär ↔ Dezimal Umrechnung in mehreren Runden.
 * Bei dec2bin: 8 Bits erforderlich (z.B. '00000000'), bei bin2dec: numerischer Vergleich.
 *
 * @param {Object} exercise - { type, question, rounds: [{ given, direction, answer }] }
 * @param {HTMLElement} container
 * @param {Function} onComplete
 */
Exercises.renderBinaryDecimal = function(exercise, container, onComplete) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-block binary-decimal-exercise';

  const title = document.createElement('h3');
  title.textContent = exercise.question;
  wrapper.appendChild(title);

  const rounds = exercise.rounds;
  let currentRound = 0;
  let completed = false;

  const roundDisplay = document.createElement('div');
  roundDisplay.className = 'round-display';
  wrapper.appendChild(roundDisplay);

  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = 'exercise-feedback';
  wrapper.appendChild(feedbackDiv);

  container.appendChild(wrapper);

  function showRound() {
    if (currentRound >= rounds.length) {
      // Alle Runden geschafft
      roundDisplay.innerHTML = '<p style="color:var(--success);font-weight:bold;">Alle Runden bestanden!</p>';
      if (!completed) {
        completed = true;
        if (onComplete) onComplete();
      }
      return;
    }

    const round = rounds[currentRound];
    feedbackDiv.innerHTML = '';

    const counter = document.createElement('div');
    counter.className = 'round-counter';
    counter.textContent = `Runde ${currentRound + 1} von ${rounds.length}`;

    const dirHint = document.createElement('div');
    dirHint.className = 'direction-hint';
    dirHint.textContent = round.direction === 'bin2dec'
      ? 'Binär → Dezimal: Gib den Dezimalwert ein.'
      : 'Dezimal → Binär: Gib 8 Bits ein (z.B. 11001010).';

    const givenDiv = document.createElement('div');
    givenDiv.className = 'given-value';
    givenDiv.textContent = round.given;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = round.direction === 'bin2dec' ? 'Dezimalwert' : '8 Bits (z.B. 01010101)';
    if (round.direction === 'dec2bin') {
      input.maxLength = 8;
      input.pattern = '[01]{8}';
    }

    const checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    roundDisplay.innerHTML = '';
    roundDisplay.appendChild(counter);
    roundDisplay.appendChild(dirHint);
    roundDisplay.appendChild(givenDiv);
    roundDisplay.appendChild(input);
    roundDisplay.appendChild(checkBtn);

    checkBtn.addEventListener('click', () => {
      const userValue = input.value.trim();
      let correct = false;

      if (round.direction === 'bin2dec') {
        correct = parseInt(userValue, 10) === round.answer;
      } else {
        // dec2bin: exakter 8-Bit-String-Vergleich
        correct = userValue === round.answer;
      }

      feedbackDiv.innerHTML = '';
      if (correct) {
        feedbackDiv.innerHTML = '<p class="feedback correct">Richtig!</p>';
        currentRound++;
        setTimeout(showRound, 800);
      } else {
        let hint = `<p class="feedback wrong">Falsch.`;
        if (round.direction === 'dec2bin' && userValue.length !== 8) {
          hint += ' Bitte genau 8 Bits eingeben.';
        }
        hint += `</p>`;
        feedbackDiv.innerHTML = hint;
      }
    });

    // Enter-Taste
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') checkBtn.click();
    });

    input.focus();
  }

  showRound();
};
```

- [ ] **Step 3: Implement `Exercises.renderSubnetExercise()`**

Append to `app/js/exercises.js`:

```javascript
/**
 * Subnetz-Berechnung: IP + CIDR gegeben, Felder berechnen.
 *
 * @param {Object} exercise - { type, question, ip, cidr, fields, answers, explanation }
 * @param {HTMLElement} container
 * @param {Function} onComplete
 */
Exercises.renderSubnetExercise = function(exercise, container, onComplete) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-block subnet-exercise';

  const title = document.createElement('h3');
  title.textContent = exercise.question;
  wrapper.appendChild(title);

  const info = document.createElement('p');
  info.innerHTML = `<strong>IP:</strong> <code>${exercise.ip}</code> &nbsp; <strong>CIDR:</strong> <code>/${exercise.cidr}</code>`;
  wrapper.appendChild(info);

  const FIELD_LABELS = {
    netId: 'Net-ID',
    broadcast: 'Broadcast',
    firstHost: 'Erster Host',
    lastHost: 'Letzter Host',
    hostCount: 'Anzahl Hosts'
  };

  const inputs = {};
  const feedbackEls = {};

  exercise.fields.forEach(field => {
    const row = document.createElement('div');
    row.className = 'field-row';

    const label = document.createElement('label');
    label.textContent = FIELD_LABELS[field] || field;
    row.appendChild(label);

    const inp = document.createElement('input');
    inp.type = 'text';
    inp.placeholder = field === 'hostCount' ? 'Zahl' : 'z.B. 192.168.1.0';
    inputs[field] = inp;
    row.appendChild(inp);

    const fb = document.createElement('span');
    fb.className = 'field-feedback';
    feedbackEls[field] = fb;
    row.appendChild(fb);

    wrapper.appendChild(row);
  });

  const checkBtn = document.createElement('button');
  checkBtn.className = 'exercise-check-btn';
  checkBtn.textContent = 'Prüfen';
  wrapper.appendChild(checkBtn);

  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = 'exercise-feedback';
  wrapper.appendChild(feedbackDiv);

  container.appendChild(wrapper);

  let completed = false;

  checkBtn.addEventListener('click', () => {
    let allCorrect = true;

    exercise.fields.forEach(field => {
      const userVal = inputs[field].value.trim();
      const expected = String(exercise.answers[field]);
      const correct = userVal === expected;

      feedbackEls[field].textContent = correct ? '✓' : '✗';
      feedbackEls[field].className = 'field-feedback ' + (correct ? 'correct' : 'wrong');

      if (!correct) allCorrect = false;
    });

    feedbackDiv.innerHTML = '';
    if (allCorrect) {
      feedbackDiv.innerHTML = '<p class="feedback correct">Alle Felder richtig!</p>';
      if (exercise.explanation) {
        feedbackDiv.innerHTML += `<p class="feedback-explanation">${exercise.explanation}</p>`;
      }
      if (!completed) {
        completed = true;
        if (onComplete) onComplete();
      }
    } else {
      feedbackDiv.innerHTML = '<p class="feedback wrong">Nicht alle Felder sind korrekt. Versuche es nochmal.</p>';
    }
  });
};
```

- [ ] **Step 4: Implement `Exercises.renderNetworkLabeling()`**

Append to `app/js/exercises.js`:

```javascript
/**
 * Netzwerk-Beschriftungs-Übung: Geräte im Diagramm per Klick zuordnen.
 * Verwendet NetworkDiagram-Preset, Labels sind leer und werden per Dropdown zugewiesen.
 *
 * @param {Object} exercise - { type, question, preset, labels: { nodeId: 'Label' }, explanation }
 * @param {HTMLElement} container
 * @param {Function} onComplete
 */
Exercises.renderNetworkLabeling = function(exercise, container, onComplete) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-block network-labeling';

  const title = document.createElement('h3');
  title.textContent = exercise.question;
  wrapper.appendChild(title);

  // Preset laden
  const preset = Visuals.NETWORK_PRESETS[exercise.preset];
  if (!preset) {
    wrapper.innerHTML += '<p>Preset nicht gefunden.</p>';
    container.appendChild(wrapper);
    return;
  }

  // Diagramm-Container (relative Positionierung fuer Dropdown)
  const diagramDiv = document.createElement('div');
  diagramDiv.style.position = 'relative';
  diagramDiv.style.display = 'inline-block';

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${preset.width} ${preset.height}`);
  svg.setAttribute('width', '100%');

  // Lookup
  const nodeMap = {};
  preset.nodes.forEach(n => { nodeMap[n.id] = n; });

  // State: zugewiesene Labels
  const assignments = {};
  const labelPool = Object.values(exercise.labels);
  const targetNodeIds = Object.keys(exercise.labels);

  // Verbindungen
  preset.edges.forEach(([fromId, toId]) => {
    const from = nodeMap[fromId];
    const to = nodeMap[toId];
    if (!from || !to) return;
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', from.x); line.setAttribute('y1', from.y);
    line.setAttribute('x2', to.x); line.setAttribute('y2', to.y);
    line.setAttribute('class', 'connection-line');
    svg.appendChild(line);
  });

  // Icons und klickbare Label-Slots
  const slotElements = {};

  preset.nodes.forEach(node => {
    const iconFn = Visuals.NETWORK_ICONS[node.type];
    if (iconFn) {
      const g = document.createElementNS(svgNS, 'g');
      g.innerHTML = iconFn(node.x, node.y);
      svg.appendChild(g);
    }

    // Ist dieser Node ein Ziel-Node?
    if (targetNodeIds.includes(node.id)) {
      // Klickbarer Label-Slot unter dem Icon
      const rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('x', node.x - 35);
      rect.setAttribute('y', node.y + 18);
      rect.setAttribute('width', 70);
      rect.setAttribute('height', 20);
      rect.setAttribute('class', 'label-slot');
      rect.dataset.nodeId = node.id;

      const text = document.createElementNS(svgNS, 'text');
      text.setAttribute('x', node.x);
      text.setAttribute('y', node.y + 32);
      text.setAttribute('class', 'label-text');
      text.textContent = '?';

      slotElements[node.id] = { rect, text };

      // Klick-Handler
      rect.addEventListener('click', (e) => {
        e.stopPropagation();
        showDropdown(node.id, node.x, node.y + 40);
      });
      text.addEventListener('click', (e) => {
        e.stopPropagation();
        showDropdown(node.id, node.x, node.y + 40);
      });

      svg.appendChild(rect);
      svg.appendChild(text);
    } else {
      // Nicht-Ziel-Nodes: normales Label
      if (node.label) {
        const text = document.createElementNS(svgNS, 'text');
        text.setAttribute('x', node.x);
        text.setAttribute('y', node.y + 28);
        text.setAttribute('class', 'device-label');
        text.textContent = node.label;
        svg.appendChild(text);
      }
    }
  });

  diagramDiv.appendChild(svg);
  wrapper.appendChild(diagramDiv);

  // Dropdown
  let activeDropdown = null;

  function showDropdown(nodeId, svgX, svgY) {
    closeDropdown();

    const dd = document.createElement('div');
    dd.className = 'label-dropdown';

    // Verfügbare Labels (noch nicht zugewiesen oder diesem Node zugewiesen)
    const available = labelPool.filter(l =>
      !Object.values(assignments).includes(l) || assignments[nodeId] === l
    );

    // Leere Option (zurücksetzen)
    const emptyOpt = document.createElement('div');
    emptyOpt.textContent = '– auswählen –';
    emptyOpt.addEventListener('click', () => {
      delete assignments[nodeId];
      updateSlot(nodeId);
      closeDropdown();
    });
    dd.appendChild(emptyOpt);

    available.forEach(label => {
      const opt = document.createElement('div');
      opt.textContent = label;
      opt.addEventListener('click', () => {
        assignments[nodeId] = label;
        updateSlot(nodeId);
        closeDropdown();
      });
      dd.appendChild(opt);
    });

    // Positionierung relativ zum SVG
    const svgRect = svg.getBoundingClientRect();
    const scaleX = svgRect.width / preset.width;
    const scaleY = svgRect.height / preset.height;

    dd.style.left = (svgX * scaleX - 40) + 'px';
    dd.style.top = (svgY * scaleY) + 'px';

    diagramDiv.appendChild(dd);
    activeDropdown = dd;
  }

  function closeDropdown() {
    if (activeDropdown) {
      activeDropdown.remove();
      activeDropdown = null;
    }
  }

  function updateSlot(nodeId) {
    const el = slotElements[nodeId];
    if (!el) return;
    if (assignments[nodeId]) {
      el.text.textContent = assignments[nodeId];
      el.rect.classList.add('assigned');
      el.text.classList.add('assigned');
    } else {
      el.text.textContent = '?';
      el.rect.classList.remove('assigned');
      el.text.classList.remove('assigned');
    }
  }

  // Klick außerhalb schließt Dropdown
  document.addEventListener('click', closeDropdown);

  // Prüfen-Button
  const checkBtn = document.createElement('button');
  checkBtn.className = 'exercise-check-btn';
  checkBtn.textContent = 'Prüfen';
  wrapper.appendChild(checkBtn);

  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = 'exercise-feedback';
  wrapper.appendChild(feedbackDiv);

  container.appendChild(wrapper);

  let completed = false;

  checkBtn.addEventListener('click', () => {
    let allCorrect = true;
    targetNodeIds.forEach(nodeId => {
      const correct = assignments[nodeId] === exercise.labels[nodeId];
      const el = slotElements[nodeId];
      if (correct) {
        el.rect.style.fill = 'var(--success)';
        el.rect.style.stroke = 'var(--success)';
      } else {
        el.rect.style.fill = 'var(--error)';
        el.rect.style.stroke = 'var(--error)';
        allCorrect = false;
      }
    });

    feedbackDiv.innerHTML = '';
    if (allCorrect) {
      feedbackDiv.innerHTML = '<p class="feedback correct">Alle richtig zugeordnet!</p>';
      if (exercise.explanation) {
        feedbackDiv.innerHTML += `<p class="feedback-explanation">${exercise.explanation}</p>`;
      }
      if (!completed) {
        completed = true;
        if (onComplete) onComplete();
      }
    } else {
      feedbackDiv.innerHTML = '<p class="feedback wrong">Noch nicht alle richtig. Klicke auf die roten Felder und weise neu zu.</p>';
      // Falsche Zuweisungen nach kurzer Zeit zuruecksetzen (nur Farbe)
      setTimeout(() => {
        targetNodeIds.forEach(nodeId => {
          const el = slotElements[nodeId];
          if (assignments[nodeId] !== exercise.labels[nodeId]) {
            el.rect.style.fill = '';
            el.rect.style.stroke = '';
          }
        });
      }, 1500);
    }
  });
};
```

---

## Task 7: Sandbox Extension

**Files:**
- Modify: `app/js/sandbox.js` (add 3 new lab sections + extend render())

**Commit:** `feat(c5): add IP-Rechner, Subnetz-Kalkulator, Subnetting-Tool to sandbox`

- [ ] **Step 1: Extend `Sandbox.render()` with 3 new sections**

In `app/js/sandbox.js`, inside the `render()` method (after line 31, before the closing `}`), add:

```javascript
    // 8. IP-Rechner
    Sandbox.renderIPConverterLab(container);

    // 9. Subnetz-Kalkulator
    Sandbox.renderSubnetLab(container);

    // 10. Subnetting-Tool
    Sandbox.renderSubnettingLab(container);
```

- [ ] **Step 2: Implement `Sandbox.renderIPConverterLab()`**

Append to `app/js/sandbox.js` (before the `createSection` helper at line 223):

```javascript
  renderIPConverterLab(container) {
    const section = Sandbox.createSection('IP-Rechner',
      'Klicke auf die Bits oder gib Dezimalwerte ein – die Umrechnung erfolgt sofort.');

    Visuals.renderIPConverter({}, section);

    container.appendChild(section);
  },

  renderSubnetLab(container) {
    const section = Sandbox.createSection('Subnetz-Kalkulator',
      'Gib eine IP-Adresse und CIDR-Prefix ein, um Net-ID, Broadcast und Hostbereich zu berechnen.');

    Visuals.renderSubnetCalculator({}, section);

    container.appendChild(section);
  },

  renderSubnettingLab(container) {
    const section = Sandbox.createSection('Subnetting-Tool',
      'Wähle eine Subnetzgröße und beobachte, wie der Adressbereich aufgeteilt wird.');

    // Eingabefelder für Netzwerk und CIDR
    const controls = document.createElement('div');
    controls.className = 'sandbox-controls';

    const netInput = document.createElement('input');
    netInput.type = 'text';
    netInput.value = '192.168.10.0';
    netInput.placeholder = 'Netzwerk (z.B. 192.168.10.0)';
    netInput.style.width = '160px';

    const cidrInput = document.createElement('input');
    cidrInput.type = 'number';
    cidrInput.value = 24;
    cidrInput.min = 8;
    cidrInput.max = 28;
    cidrInput.style.width = '60px';

    const goBtn = document.createElement('button');
    goBtn.className = 'exercise-check-btn';
    goBtn.textContent = 'Visualisieren';
    goBtn.style.marginTop = '0';

    controls.appendChild(netInput);
    const slash = document.createElement('span');
    slash.textContent = ' / ';
    slash.style.fontWeight = 'bold';
    controls.appendChild(slash);
    controls.appendChild(cidrInput);
    controls.appendChild(goBtn);
    section.appendChild(controls);

    const vizContainer = document.createElement('div');
    section.appendChild(vizContainer);

    function renderViz() {
      vizContainer.innerHTML = '';
      Visuals.renderSubnettingViz({
        network: netInput.value.trim() || '192.168.10.0',
        cidr: parseInt(cidrInput.value, 10) || 24
      }, vizContainer);
    }

    goBtn.addEventListener('click', renderViz);
    renderViz();

    container.appendChild(section);
  },
```

**Important:** These 3 methods must be added as properties of the `Sandbox` object. Insert them before the `createSection` helper method. The syntax is `renderIPConverterLab(container) { ... },` (comma-separated object methods).

---

## Task 8: Lessons 18-25 Content

**Files:**
- Create: `app/js/lessons-c5.js`

**Commit:** `feat(c5): add lessons 18-25 content (Rechnernetze I)`

**CRITICAL INSTRUCTION:** Before writing lesson content, the implementer MUST read:
1. `/Users/marcolemke/Desktop/LE_C_Claude_Code/LE_C5/lerneinheit-c-5-rechnernetze-i-grundlagen-der-kommunikation-und-adressierung-9q-18Cxd.pdf` – Hauptskript (alle 67 Seiten)
2. `/Users/marcolemke/Desktop/LE_C_Claude_Code/LE_C5/Uebungen_C5_Aufgaben.pdf` – Übungsblatt (Aufgaben 1-3)

The PDF content is the authoritative source. Do NOT invent technical details – extract them from the PDFs.

- [ ] **Step 1: Create `app/js/lessons-c5.js` with the correct data structure**

Each lesson follows this exact structure (matching `lessons-c1.js` and `lessons-c2.js`):

```javascript
const LessonsC5 = [

  // ===== LEKTION 18: Das Internet und Adressierung =====
  {
    id: 18,
    title: 'Das Internet und Adressierung',
    explanation: {
      html: '...', // Deutscher HTML-String mit Analogien und Erklärungen aus dem PDF
      visuals: [
        { type: 'network-diagram', mode: 'static', preset: 'internet-overview' }
      ]
    },
    example: {
      title: 'Beispiel: Wie kommt eine Nachricht von A nach B?',
      steps: [
        { label: 'Schritt-Label', html: '...' },
        // weitere Schritte
      ]
    },
    exercises: [
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' },
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' }
    ]
  },

  // ===== LEKTION 19: Netztypen & Geräte =====
  {
    id: 19,
    title: 'Netztypen & Geräte',
    explanation: {
      html: '...', // LAN vs WAN, Geräte-Beschreibungen
      visuals: [
        { type: 'network-diagram', mode: 'static', preset: 'school-network' }
      ]
    },
    example: {
      title: 'Beispiel: Ein Schulnetzwerk',
      steps: [...]
    },
    exercises: [
      {
        type: 'network-labeling',
        question: 'Ordne die Geräte im Schulnetzwerk richtig zu.',
        preset: 'school-network',
        labels: {
          'router': 'Router',
          'switch1': 'Switch',
          'ap': 'Access Point',
          'modem': 'Modem',
          'pc1': 'Host'
        },
        explanation: 'Der Router verbindet Netze, der Switch verteilt im LAN, der AP ermöglicht WLAN.'
      },
      {
        type: 'matching',
        question: 'Ordne die Geräte ihren Funktionen zu.',
        pairs: [
          { left: 'Router', right: 'Verbindet verschiedene Netze' },
          { left: 'Switch', right: 'Verteilt Daten im lokalen Netz' },
          { left: 'Modem', right: 'Wandelt Signale um (digital ↔ analog)' },
          { left: 'Access Point', right: 'Ermöglicht WLAN-Verbindung' }
        ]
      },
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' }
    ]
  },

  // ===== LEKTION 20: Technische Grundlagen =====
  {
    id: 20,
    title: 'Technische Grundlagen',
    explanation: {
      html: '...' // Kabeltypen, DSL, WLAN, Mobilfunk – aus dem PDF
      // Kein visuals-Feld (rein textuelles Thema)
    },
    example: {
      title: 'Beispiel: Welche Technologie passt?',
      steps: [...]
    },
    exercises: [
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' },
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' }
    ]
  },

  // ===== LEKTION 21: IP-Adressen (IPv4, IPv6, MAC) =====
  {
    id: 21,
    title: 'IP-Adressen: IPv4, IPv6, MAC',
    explanation: {
      html: '...',  // IPv4 Dotted Decimal, Binärdarstellung, IPv6, MAC
      visuals: [
        { type: 'ip-converter' }
      ]
    },
    example: {
      title: 'Beispiel: 192.168.1.1 in Binär umrechnen',
      steps: [
        { label: 'Erstes Oktett: 192', html: '...' },
        { label: 'Zweites Oktett: 168', html: '...' },
        { label: 'Drittes Oktett: 1', html: '...' },
        { label: 'Viertes Oktett: 1', html: '...' }
      ]
    },
    exercises: [
      {
        type: 'binary-decimal',
        question: 'Rechne die folgenden Oktette um.',
        rounds: [
          { given: '11000000', direction: 'bin2dec', answer: 192 },
          { given: '168', direction: 'dec2bin', answer: '10101000' },
          { given: '11111111', direction: 'bin2dec', answer: 255 },
          { given: '0', direction: 'dec2bin', answer: '00000000' }
        ]
      },
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' },
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' }
    ]
  },

  // ===== LEKTION 22: Subnetzmaske & Net-ID =====
  {
    id: 22,
    title: 'Subnetzmaske & Net-ID',
    explanation: {
      html: '...',  // Netz- vs. Hostanteil, AND-Verknüpfung
      visuals: [
        { type: 'subnet-calculator' },
        { type: 'ip-converter' }
      ]
    },
    example: {
      title: 'Beispiel: Net-ID aus 192.168.20.45/24 berechnen',
      steps: [
        { label: 'IP und Maske binär aufschreiben', html: '...' },
        { label: 'AND-Verknüpfung durchführen', html: '...' },
        { label: 'Ergebnis: Net-ID', html: '...' }
      ]
    },
    exercises: [
      {
        type: 'subnet-exercise',
        question: 'Berechne die Netzwerk-Kenngrößen für 192.168.20.45/24.',
        ip: '192.168.20.45',
        cidr: 24,
        fields: ['netId', 'broadcast', 'firstHost', 'lastHost', 'hostCount'],
        answers: {
          netId: '192.168.20.0',
          broadcast: '192.168.20.255',
          firstHost: '192.168.20.1',
          lastHost: '192.168.20.254',
          hostCount: '254'
        },
        explanation: 'Bei /24 sind die ersten 3 Oktette der Netzanteil. Der Hostanteil ist das 4. Oktett.'
      },
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' }
    ]
  },

  // ===== LEKTION 23: Subnetze berechnen =====
  {
    id: 23,
    title: 'Subnetze berechnen',
    explanation: {
      html: '...',  // Netz in Subnetze aufteilen, CIDR
      visuals: [
        { type: 'subnetting-viz', network: '192.168.10.0', cidr: 24 }
      ]
    },
    example: {
      title: 'Beispiel: 192.168.10.0/24 in 4 Subnetze aufteilen',
      steps: [
        { label: 'Wie viele Bits brauchen wir?', html: '...' },
        { label: 'Neue Subnetzmaske bestimmen', html: '...' },
        { label: 'Die 4 Subnetze auflisten', html: '...' }
      ]
    },
    exercises: [
      {
        type: 'subnet-exercise',
        question: 'Berechne das erste Subnetz von 192.168.10.0/26.',
        ip: '192.168.10.0',
        cidr: 26,
        fields: ['netId', 'broadcast', 'firstHost', 'lastHost', 'hostCount'],
        answers: {
          netId: '192.168.10.0',
          broadcast: '192.168.10.63',
          firstHost: '192.168.10.1',
          lastHost: '192.168.10.62',
          hostCount: '62'
        },
        explanation: 'Bei /26 hat der Hostanteil 6 Bits → 2^6 - 2 = 62 nutzbare Hosts pro Subnetz.'
      },
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' }
    ]
  },

  // ===== LEKTION 24: Hands-on: ping =====
  {
    id: 24,
    title: 'Hands-on: ping',
    explanation: {
      html: '...'  // ping-Befehl, Netzwerkdiagnose – aus dem PDF
      // Kein visuals-Feld
    },
    example: {
      title: 'Beispiel: ping ausführen und interpretieren',
      steps: [...]
    },
    exercises: [
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' },
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' }
    ]
  },

  // ===== LEKTION 25: Lokale vs. globale IPs =====
  {
    id: 25,
    title: 'Lokale vs. globale IPs',
    explanation: {
      html: '...',  // Heimnetz als Subnetz, 192.168.x.x, DHCP, Gateway
      visuals: [
        { type: 'network-diagram', mode: 'static', preset: 'home-network' }
      ]
    },
    example: {
      title: 'Beispiel: Das Heimnetzwerk verstehen',
      steps: [...]
    },
    exercises: [
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' },
      { type: 'multiple-choice', question: '...', options: [...], correct: 0, explanation: '...' }
    ]
  }

];
```

**Content guidelines for the implementer:**
- Read the PDFs thoroughly before writing any content
- `explanation.html` must be detailed German HTML with analogies (Briefpost, Straßenadressen, etc.)
- Use `<h3>`, `<p>`, `<ul>`, `<ol>`, `<table class="truth-table">`, `<code>`, `<strong>`, `<em>` tags
- All `...` placeholders must be replaced with actual content from the PDFs
- Binary representations must use Dotted Binary Notation (e.g. `11000000.10101000.00000001.00000001`)
- Exercise MC options format: `options: ['Option A', 'Option B', 'Option C', 'Option D']` with `correct: 0` (0-indexed)
- Matching format: `pairs: [{ left: '...', right: '...' }, ...]`
- The `binary-decimal` and `subnet-exercise` formats are defined above – follow them exactly
- Visuals arrays use the exact config objects specified in the spec

---

## Task 9: Final Testing

**Files:** All modified/created files

**Commit:** (no commit – verification only)

- [ ] **Step 1: Syntax check all JS files**

Run in terminal:
```bash
cd /Users/marcolemke/Desktop/LE_C_Claude_Code
node --check app/js/lessons-c5.js
node --check app/js/visuals.js
node --check app/js/exercises.js
node --check app/js/sandbox.js
node --check app/js/renderer.js
node --check app/js/progress.js
node --check app/js/app.js
```

- [ ] **Step 2: Verify file references**

Check that:
- `app/index.html` has `<script src="js/lessons-c5.js"></script>` before `app.js`
- `app/index.html` has `<div id="module-c5">` in sidebar
- `app/js/app.js` LESSONS array has exactly 25 entries
- `app/js/progress.js` has `TOTAL_LESSONS: 25` and `VERSION: 2`
- `app/js/renderer.js` `renderLesson` references `LessonsC5`
- `app/js/renderer.js` `renderProgressBar` uses `(1, 25)`
- `app/js/renderer.js` `renderSidebar` handles `module === 'c5'`
- `app/js/renderer.js` `renderVisuals` has 4 new cases

- [ ] **Step 3: Browser test**

Open `app/index.html` in browser and verify:
1. Sidebar shows C5 module with 8 lessons
2. Progress bar reflects 25 total lessons
3. Each lesson 18-25 renders with explanation, example, exercises
4. IP-Converter: bits toggle, decimal updates bidirectionally
5. Subnet-Calculator: calculates correct Net-ID, broadcast, hosts
6. Subnetting-Viz: bar segments split correctly, details show per-subnet info
7. Network diagrams: all 3 presets render with icons and labels
8. Binary-decimal exercise: rounds advance correctly, 8-bit validation works
9. Subnet-exercise: field-by-field validation works
10. Network-labeling: dropdown assignment and verification works
11. Sandbox: all 3 new sections render and are interactive
12. Completing all exercises in a lesson marks it as completed

---

## File Summary

| File | Action | Task |
|------|--------|------|
| `app/css/style.css` | Modify | 1 |
| `app/js/progress.js` | Modify | 1 |
| `app/js/renderer.js` | Modify | 1 |
| `app/index.html` | Modify | 1 |
| `app/js/app.js` | Modify | 1 |
| `app/js/visuals.js` | Modify | 2, 3, 4, 5 |
| `app/js/exercises.js` | Modify | 6 |
| `app/js/sandbox.js` | Modify | 7 |
| `app/js/lessons-c5.js` | Create | 8 |
