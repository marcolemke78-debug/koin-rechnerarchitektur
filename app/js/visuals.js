const Visuals = {};

Visuals.GATE_FUNCTIONS = {
  and:  (inputs) => inputs.every(v => v === 1) ? 1 : 0,
  or:   (inputs) => inputs.some(v => v === 1) ? 1 : 0,
  not:  (inputs) => inputs[0] === 1 ? 0 : 1,
  xor:  (inputs) => inputs.reduce((a, b) => a ^ b, 0),
  nand: (inputs) => inputs.every(v => v === 1) ? 0 : 1,
  nor:  (inputs) => inputs.some(v => v === 1) ? 0 : 1,
  xnor: (inputs) => inputs.reduce((a, b) => a ^ b, 0) === 0 ? 1 : 0
};

Visuals.GATE_SYMBOLS = {
  and: '&', or: '\u22651', not: '1',
  xor: '=1', nand: '&', nor: '\u22651', xnor: '=1'
};

Visuals.NEGATED_GATES = new Set(['not', 'nand', 'nor', 'xnor']);

Visuals.renderGateSim = function(config, container, options = {}) {
  const gateType = config.gate;
  const label = config.label || '';
  const interactive = options.interactive !== false;
  const isNot = (gateType === 'not');
  const inputCount = isNot ? 1 : 2;

  const state = { inputs: new Array(inputCount).fill(0) };

  const wrapper = document.createElement('div');
  wrapper.className = 'visual-container';

  if (label) {
    const labelEl = document.createElement('div');
    labelEl.className = 'visual-label';
    labelEl.textContent = label;
    wrapper.appendChild(labelEl);
  }

  const svgNS = 'http://www.w3.org/2000/svg';
  const W = 320;
  const H = isNot ? 100 : 140;
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('width', W);
  svg.setAttribute('height', H);
  svg.classList.add('gate-sim');

  const inputY = isNot ? [H / 2] : [H * 0.3, H * 0.7];
  const gateX = 110;
  const gateY = 15;
  const gateW = 80;
  const gateH = H - 30;
  const outY = H / 2;

  function signalColor(val) {
    return val === 1 ? 'var(--signal-high)' : 'var(--signal-low)';
  }

  const elements = { inputCircles: [], inputTexts: [], wires: [], outCircle: null, outText: null, outWire: null };

  inputY.forEach((y, i) => {
    const wire = document.createElementNS(svgNS, 'line');
    wire.setAttribute('x1', 44); wire.setAttribute('y1', y);
    wire.setAttribute('x2', gateX); wire.setAttribute('y2', y);
    wire.setAttribute('stroke-width', 3);
    elements.wires.push(wire);
    svg.appendChild(wire);

    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', 30); circle.setAttribute('cy', y);
    circle.setAttribute('r', 14);
    circle.setAttribute('stroke', '#1F2937'); circle.setAttribute('stroke-width', 2);
    circle.classList.add('gate-input');
    elements.inputCircles.push(circle);
    svg.appendChild(circle);

    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('x', 30); text.setAttribute('y', y + 5);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', 'white'); text.setAttribute('font-weight', 'bold');
    text.setAttribute('font-size', '16');
    text.style.pointerEvents = 'none';
    elements.inputTexts.push(text);
    svg.appendChild(text);

    const inputLabel = document.createElementNS(svgNS, 'text');
    inputLabel.setAttribute('x', 30); inputLabel.setAttribute('y', y + 25);
    inputLabel.setAttribute('text-anchor', 'middle');
    inputLabel.setAttribute('fill', '#6B7280'); inputLabel.setAttribute('font-size', '11');
    inputLabel.textContent = isNot ? 'Eingang' : `Eingang ${String.fromCharCode(65 + i)}`;
    svg.appendChild(inputLabel);

    if (interactive) {
      circle.style.cursor = 'pointer';
      circle.addEventListener('click', () => {
        state.inputs[i] = state.inputs[i] === 0 ? 1 : 0;
        update();
      });
    }
  });

  const gateRect = document.createElementNS(svgNS, 'rect');
  gateRect.setAttribute('x', gateX); gateRect.setAttribute('y', gateY);
  gateRect.setAttribute('width', gateW); gateRect.setAttribute('height', gateH);
  gateRect.setAttribute('rx', 4);
  gateRect.setAttribute('fill', 'white'); gateRect.setAttribute('stroke', '#1F2937');
  gateRect.setAttribute('stroke-width', 2);
  svg.appendChild(gateRect);

  const gateText = document.createElementNS(svgNS, 'text');
  gateText.setAttribute('x', gateX + gateW / 2);
  gateText.setAttribute('y', outY + 7);
  gateText.setAttribute('text-anchor', 'middle');
  gateText.setAttribute('fill', '#1F2937'); gateText.setAttribute('font-size', '22');
  gateText.setAttribute('font-weight', 'bold');
  gateText.textContent = Visuals.GATE_SYMBOLS[gateType];
  svg.appendChild(gateText);

  const typeLabel = document.createElementNS(svgNS, 'text');
  typeLabel.setAttribute('x', gateX + gateW / 2);
  typeLabel.setAttribute('y', gateY - 5);
  typeLabel.setAttribute('text-anchor', 'middle');
  typeLabel.setAttribute('fill', '#6B7280'); typeLabel.setAttribute('font-size', '11');
  typeLabel.textContent = gateType.toUpperCase();
  svg.appendChild(typeLabel);

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

  const outWire = document.createElementNS(svgNS, 'line');
  outWire.setAttribute('x1', negCircleX); outWire.setAttribute('y1', outY);
  outWire.setAttribute('x2', W - 50); outWire.setAttribute('y2', outY);
  outWire.setAttribute('stroke-width', 3);
  elements.outWire = outWire;
  svg.appendChild(outWire);

  const outCircle = document.createElementNS(svgNS, 'circle');
  outCircle.setAttribute('cx', W - 35); outCircle.setAttribute('cy', outY);
  outCircle.setAttribute('r', 14);
  outCircle.setAttribute('stroke', '#1F2937'); outCircle.setAttribute('stroke-width', 2);
  elements.outCircle = outCircle;
  svg.appendChild(outCircle);

  const outText = document.createElementNS(svgNS, 'text');
  outText.setAttribute('x', W - 35); outText.setAttribute('y', outY + 5);
  outText.setAttribute('text-anchor', 'middle');
  outText.setAttribute('fill', 'white'); outText.setAttribute('font-weight', 'bold');
  outText.setAttribute('font-size', '16');
  outText.style.pointerEvents = 'none';
  elements.outText = outText;
  svg.appendChild(outText);

  const outLabel = document.createElementNS(svgNS, 'text');
  outLabel.setAttribute('x', W - 35); outLabel.setAttribute('y', outY + 25);
  outLabel.setAttribute('text-anchor', 'middle');
  outLabel.setAttribute('fill', '#6B7280'); outLabel.setAttribute('font-size', '11');
  outLabel.textContent = 'Ausgang Y';
  svg.appendChild(outLabel);

  const formulaEl = document.createElement('div');
  formulaEl.style.cssText = 'color:#6B7280;font-size:13px;margin-top:6px;font-family:monospace;';

  wrapper.appendChild(svg);
  wrapper.appendChild(formulaEl);
  container.appendChild(wrapper);

  function update() {
    const output = Visuals.GATE_FUNCTIONS[gateType](state.inputs);

    state.inputs.forEach((val, i) => {
      elements.inputCircles[i].setAttribute('fill', signalColor(val));
      elements.inputTexts[i].textContent = val;
      elements.wires[i].setAttribute('stroke', signalColor(val));
    });

    elements.outCircle.setAttribute('fill', signalColor(output));
    elements.outText.textContent = output;
    elements.outWire.setAttribute('stroke', signalColor(output));

    formulaEl.textContent = Visuals.formatGateFormula(gateType, state.inputs, output);
  }

  update();

  return { update, state };
};

Visuals.formatGateFormula = function(gateType, inputs, output) {
  const ops = {
    and: '\u2227', or: '\u2228', xor: '\u2295', nand: '\u22BC', nor: '\u22BD', xnor: '\u2299'
  };
  if (gateType === 'not') {
    return `\u00AC${inputs[0]} = ${output}`;
  }
  const op = ops[gateType] || '?';
  return `${inputs[0]} ${op} ${inputs[1]} = ${output}`;
};

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
