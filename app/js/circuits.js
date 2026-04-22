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
  },

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
      inputs:  { A: { x: 0, y: 0.2 }, B: { x: 0, y: 0.8 } },
      gates:   {
        xor1: { x: 0.6, y: 0.15 },
        not1: { x: 0.25, y: 0.5 },
        and1: { x: 0.6, y: 0.8 }
      },
      outputs: { D: { x: 1, y: 0.2 }, Bout: { x: 1, y: 0.8 } }
    }
  },

  'full-subtractor-hs1': {
    name: 'HS1 (A − B → D1, Bout1)',
    inputs: ['A', 'B'],
    outputs: ['D1', 'Bout1'],
    gates: [
      { id: 'xor1', type: 'xor', inputs: ['A', 'B'], label: 'D1' },
      { id: 'not1', type: 'not', inputs: ['A'] },
      { id: 'and1', type: 'and', inputs: ['not1', 'B'], label: 'Bout1' }
    ],
    connections: [
      { from: 'xor1', to: 'D1' },
      { from: 'and1', to: 'Bout1' }
    ],
    layout: {
      inputs:  { A: { x: 0, y: 0.2 }, B: { x: 0, y: 0.8 } },
      gates:   {
        xor1: { x: 0.6, y: 0.15 },
        not1: { x: 0.25, y: 0.5 },
        and1: { x: 0.6, y: 0.8 }
      },
      outputs: { D1: { x: 1, y: 0.2 }, Bout1: { x: 1, y: 0.8 } }
    }
  },

  'full-subtractor-hs2': {
    name: 'HS2 (D1 − B_in → D, Bout2)',
    inputs: ['D1', 'Bin'],
    outputs: ['D', 'Bout2'],
    gates: [
      { id: 'xor1', type: 'xor', inputs: ['D1', 'Bin'], label: 'D' },
      { id: 'not1', type: 'not', inputs: ['D1'] },
      { id: 'and1', type: 'and', inputs: ['not1', 'Bin'], label: 'Bout2' }
    ],
    connections: [
      { from: 'xor1', to: 'D' },
      { from: 'and1', to: 'Bout2' }
    ],
    layout: {
      inputs:  { D1: { x: 0, y: 0.2 }, Bin: { x: 0, y: 0.8 } },
      gates:   {
        xor1: { x: 0.6, y: 0.15 },
        not1: { x: 0.25, y: 0.5 },
        and1: { x: 0.6, y: 0.8 }
      },
      outputs: { D: { x: 1, y: 0.2 }, Bout2: { x: 1, y: 0.8 } }
    }
  },

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
      inputs:  { A: { x: 0, y: 0.1 }, B: { x: 0, y: 0.38 }, Bin: { x: 0, y: 0.88 } },
      gates:   {
        xor1: { x: 0.22, y: 0.15 },
        not1: { x: 0.22, y: 0.42 },
        and1: { x: 0.48, y: 0.48 },
        not2: { x: 0.48, y: 0.72 },
        and2: { x: 0.68, y: 0.78 },
        xor2: { x: 0.72, y: 0.12 },
        or1:  { x: 0.88, y: 0.6 }
      },
      outputs: { D: { x: 1, y: 0.12 }, Bout: { x: 1, y: 0.6 } }
    }
  },

  'c1-l1-example': {
    name: 'S1 \u2227 (S2 \u2228 S3)',
    inputs: ['S1', 'S2', 'S3'],
    outputs: ['L'],
    gates: [
      { id: 'or1',  type: 'or',  inputs: ['S2', 'S3'], label: 'S2 \u2228 S3' },
      { id: 'and1', type: 'and', inputs: ['S1', 'or1'], label: 'L' }
    ],
    connections: [
      { from: 'and1', to: 'L' }
    ],
    layout: {
      inputs:  { S1: { x: 0, y: 0.15 }, S2: { x: 0, y: 0.55 }, S3: { x: 0, y: 0.85 } },
      gates:   {
        or1:  { x: 0.35, y: 0.7 },
        and1: { x: 0.7, y: 0.4 }
      },
      outputs: { L: { x: 1, y: 0.4 } }
    }
  },

  'c1-l6-xor-construction': {
    name: 'XOR aus AND/OR/NOT',
    inputs: ['a', 'b'],
    outputs: ['z'],
    gates: [
      { id: 'not1', type: 'not', inputs: ['a'] },
      { id: 'not2', type: 'not', inputs: ['b'] },
      { id: 'and1', type: 'and', inputs: ['a', 'not2'], label: 'a \u2227 \u00acb' },
      { id: 'and2', type: 'and', inputs: ['not1', 'b'], label: '\u00aca \u2227 b' },
      { id: 'or1',  type: 'or',  inputs: ['and1', 'and2'], label: 'z = a \u2295 b' }
    ],
    connections: [
      { from: 'or1', to: 'z' }
    ],
    layout: {
      inputs:  { a: { x: 0, y: 0.2 }, b: { x: 0, y: 0.8 } },
      gates:   {
        not1: { x: 0.22, y: 0.4 },
        not2: { x: 0.22, y: 0.6 },
        and1: { x: 0.55, y: 0.2 },
        and2: { x: 0.55, y: 0.8 },
        or1:  { x: 0.82, y: 0.5 }
      },
      outputs: { z: { x: 1, y: 0.5 } }
    }
  }
};

function evaluateCircuit(circuitId, inputValues, prevState) {
  const circuit = CIRCUITS[circuitId];
  if (!circuit) throw new Error('Unbekannte Schaltung: ' + circuitId);

  const values = Object.assign({}, inputValues);

  if (circuit.feedback && prevState) {
    circuit.gates.forEach(g => {
      if (prevState[g.id] !== undefined) {
        values[g.id] = prevState[g.id];
      }
    });
  }

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

  const outputs = {};
  circuit.connections.forEach(conn => {
    outputs[conn.to] = values[conn.from];
  });

  const gateOutputs = {};
  circuit.gates.forEach(g => {
    gateOutputs[g.id] = values[g.id];
  });

  return { gateOutputs, outputs, values };
}
