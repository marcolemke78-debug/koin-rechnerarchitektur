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
