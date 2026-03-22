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
    const section = Sandbox.createSection('Wahrheitstabelle \u2194 Schaltung',
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
      'Gib einen logischen Ausdruck ein und sieh den Baumaufbau. Nutze: a-z, \u2227 \u2228 \u00ac \u2295 ( )');

    const controls = document.createElement('div');
    controls.className = 'sandbox-controls';

    const input = document.createElement('input');
    input.type = 'text'; input.value = '\u00aca \u2227 b \u2228 c';
    input.style.cssText = 'flex:1;font-family:monospace;font-size:1.1rem;min-width:200px;';
    controls.appendChild(input);

    // Symbol-Buttons
    const symbols = ['\u2227', '\u2228', '\u00ac', '\u2295', '(', ')'];
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
