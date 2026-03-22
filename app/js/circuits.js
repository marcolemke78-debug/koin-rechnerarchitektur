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
