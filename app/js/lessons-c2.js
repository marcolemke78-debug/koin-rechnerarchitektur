const LessonsC2 = [

  // ===== LEKTION 11: Binärsystem als Schalter =====
  {
    id: 11,
    title: 'Binärsystem als Schalter',
    explanation: {
      html:
        '<h3>Bits – die kleinste Einheit</h3>'
        + '<p>Ein <strong>Bit</strong> (Binary Digit = Binärziffer) ist die kleinste Informationseinheit '
        + 'in einem Computer. Es kennt nur zwei Werte: <strong>0</strong> oder <strong>1</strong>.</p>'
        + '<p><strong>Analogie:</strong> Stell dir einen Lichtschalter vor – er ist entweder '
        + '<em>aus</em> (0) oder <em>an</em> (1). Ein Bit ist genau so ein Schalter.</p>'

        + '<h3>Binärzahlen lesen</h3>'
        + '<p>Mehrere Bits nebeneinander bilden eine <strong>Binärzahl</strong>. '
        + 'Jede Stelle hat einen bestimmten Wert – ähnlich wie im Dezimalsystem:</p>'
        + '<table class="truth-table">'
        + '<thead><tr><th>Stelle</th><th>3</th><th>2</th><th>1</th><th>0</th></tr></thead>'
        + '<tbody><tr><td><strong>Stellenwert</strong></td><td>8</td><td>4</td><td>2</td><td>1</td></tr></tbody>'
        + '</table>'
        + '<p>Die Stellenwerte sind Zweierpotenzen: 2<sup>0</sup>=1, 2<sup>1</sup>=2, 2<sup>2</sup>=4, 2<sup>3</sup>=8, …</p>'

        + '<h3>Gerade oder ungerade?</h3>'
        + '<p>Ein einfacher Trick: Das <strong>letzte Bit</strong> (ganz rechts, Stelle 0) verrät, '
        + 'ob eine Zahl <strong>gerade</strong> oder <strong>ungerade</strong> ist:</p>'
        + '<ul>'
        + '<li>Letztes Bit = <strong>0</strong> → Zahl ist <strong>gerade</strong></li>'
        + '<li>Letztes Bit = <strong>1</strong> → Zahl ist <strong>ungerade</strong></li>'
        + '</ul>'
        + '<p>Das liegt daran, dass Stelle 0 den Wert 1 hat. Ist sie gesetzt, wird eine ungerade Zahl draufaddiert.</p>'
    },
    example: {
      title: 'Beispiel: Dezimal 5 im Binärsystem',
      steps: [
        {
          label: 'Stellenwerte aufschreiben',
          html:
            '<p>Wir wollen die Dezimalzahl <strong>5</strong> binär darstellen. '
            + 'Dazu prüfen wir, welche Zweierpotenzen in 5 „passen":</p>'
            + '<table class="truth-table">'
            + '<thead><tr><th>Stellenwert</th><th>4</th><th>2</th><th>1</th></tr></thead>'
            + '<tbody><tr><td><strong>Bit</strong></td><td>1</td><td>0</td><td>1</td></tr></tbody>'
            + '</table>'
        },
        {
          label: 'Berechnung',
          html:
            '<p><code>1·4 + 0·2 + 1·1 = 4 + 0 + 1 = 5</code></p>'
            + '<p>Also: Dezimal <strong>5</strong> = Binär <strong>101</strong></p>'
        },
        {
          label: 'Gerade oder ungerade?',
          html:
            '<p>Das letzte Bit von 101 ist <strong>1</strong>.</p>'
            + '<p>→ Die Zahl ist <strong>ungerade</strong>. ✓ (5 ist tatsächlich ungerade)</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist ein Bit?',
        options: [
          'Eine Zahl zwischen 0 und 9',
          'Die kleinste Informationseinheit mit den Werten 0 oder 1',
          'Eine Einheit für Speicherplatz (8 Byte)',
          'Ein elektrischer Widerstand'
        ],
        correct: 1,
        explanation: 'Ein Bit (Binary Digit) ist die kleinste Informationseinheit und kann nur 0 oder 1 sein – wie ein Schalter.'
      },
      {
        type: 'multiple-choice',
        question: 'Ist die Binärzahl 1010 gerade oder ungerade?',
        options: [
          'Ungerade',
          'Gerade',
          'Kann man nicht sagen',
          'Weder noch'
        ],
        correct: 1,
        explanation: 'Das letzte Bit (ganz rechts) ist 0, also ist die Zahl gerade. (1010₂ = 10₁₀)'
      }
    ]
  },

  // ===== LEKTION 12: ALU und Binäraddition =====
  {
    id: 12,
    title: 'ALU und Binäraddition',
    explanation: {
      html:
        '<h3>Die ALU – das Herzstück des Prozessors</h3>'
        + '<p>Die <strong>ALU</strong> (Arithmetic Logic Unit = Arithmetisch-Logische Einheit) ist der Teil '
        + 'des Prozessors, der rechnen kann. Sie führt arithmetische Operationen (Addition, Subtraktion) '
        + 'und logische Operationen (AND, OR, NOT) aus.</p>'
        + '<p><strong>Analogie:</strong> Die ALU ist wie das „Rechenwerk" in deinem Kopf – '
        + 'der Teil, der 3+4 zusammenzählt.</p>'

        + '<h3>Additionsregeln im Binärsystem</h3>'
        + '<p>Im Binärsystem gibt es nur vier mögliche Additionen:</p>'
        + '<table class="truth-table">'
        + '<thead><tr><th>Rechnung</th><th>Ergebnis</th><th>Erklärung</th></tr></thead>'
        + '<tbody>'
        + '<tr><td><code>0 + 0</code></td><td><code>0</code></td><td>Null plus Null</td></tr>'
        + '<tr><td><code>0 + 1</code></td><td><code>1</code></td><td>Wie im Dezimalsystem</td></tr>'
        + '<tr><td><code>1 + 0</code></td><td><code>1</code></td><td>Wie im Dezimalsystem</td></tr>'
        + '<tr><td><code>1 + 1</code></td><td><code>10</code></td><td>Summe 0, Übertrag 1</td></tr>'
        + '</tbody></table>'

        + '<h3>Übertrag (Carry)</h3>'
        + '<p>Bei <code>1 + 1</code> passiert dasselbe wie bei <code>5 + 5</code> im Dezimalsystem: '
        + 'Das Ergebnis „passt nicht mehr in eine Stelle" und wir bekommen einen <strong>Übertrag</strong> '
        + '(englisch: <em>carry</em>).</p>'
        + '<p>Ein Addierer braucht deshalb <strong>zwei Ausgänge</strong>:</p>'
        + '<ul>'
        + '<li><strong>s</strong> (Summe) – das Ergebnis an dieser Stelle</li>'
        + '<li><strong>c</strong> (Carry/Übertrag) – der Übertrag zur nächsten Stelle</li>'
        + '</ul>',
      visuals: [
        { type: 'binary-animation', operandA: '1011', operandB: '0110' }
      ]
    },
    example: {
      title: 'Beispiel: 1 + 1 im Binärsystem',
      steps: [
        {
          label: 'Die Rechnung',
          html:
            '<p>Wir rechnen <code>1 + 1</code> im Binärsystem.</p>'
            + '<p>Im Dezimalsystem wäre das einfach: 1 + 1 = 2. '
            + 'Aber im Binärsystem gibt es keine Ziffer „2"!</p>'
        },
        {
          label: 'Übertrag bilden',
          html:
            '<p>Genau wie bei 9 + 1 = 10 im Dezimalsystem (Übertrag!) gilt:</p>'
            + '<p><code>1 + 1 = 10₂</code></p>'
            + '<p>Das bedeutet: Summe = <strong>0</strong>, Übertrag = <strong>1</strong></p>'
            + '<p>Die „10" im Binärsystem ist die Dezimalzahl 2. ✓</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist das Ergebnis von 1 + 1 im Binärsystem?',
        options: [
          '2',
          '11',
          '10',
          '01'
        ],
        correct: 2,
        explanation: '1 + 1 = 10 im Binärsystem (Summe 0, Übertrag 1). Die Binärzahl 10 entspricht der Dezimalzahl 2.'
      },
      {
        type: 'binary-calculation',
        question: 'Berechne: 11 + 01 (binär). Trage Überträge und Ergebnis ein.',
        operand1: [1, 1],
        operand2: [0, 1],
        correctResult: [1, 0, 0],
        correctCarries: [1, 0],
        explanation: 'Stelle 0: 1+1 = 10 → s=0, c=1. Stelle 1: 1+0+1(Übertrag) = 10 → s=0, c=1. Übertrag wird höchstes Bit → 100.'
      }
    ]
  },

  // ===== LEKTION 13: Halbaddierer =====
  {
    id: 13,
    title: 'Halbaddierer',
    explanation: {
      html:
        '<h3>Was ist ein Halbaddierer?</h3>'
        + '<p>Ein <strong>Halbaddierer</strong> (englisch: <em>Half Adder</em>) ist eine Schaltung, '
        + 'die zwei einzelne Bits addiert. Er hat:</p>'
        + '<ul>'
        + '<li><strong>Zwei Eingänge:</strong> a und b (die beiden Bits, die addiert werden)</li>'
        + '<li><strong>Zwei Ausgänge:</strong> s (Summe) und c (Carry/Übertrag)</li>'
        + '</ul>'

        + '<h3>Die Logik dahinter</h3>'
        + '<p>Wenn wir die Additionsregeln aus der letzten Lektion betrachten, erkennen wir ein Muster:</p>'
        + '<ul>'
        + '<li><strong>Summe (s)</strong>: Ist genau dann 1, wenn a und b <em>unterschiedlich</em> sind '
        + '→ Das ist die <strong>XOR</strong>-Verknüpfung: <code>s = a ⊕ b</code></li>'
        + '<li><strong>Übertrag (c)</strong>: Ist genau dann 1, wenn <em>beide</em> Eingänge 1 sind '
        + '→ Das ist die <strong>AND</strong>-Verknüpfung: <code>c = a ∧ b</code></li>'
        + '</ul>'

        + '<p><strong>So sieht der Halbaddierer als Schaltung aus:</strong></p>'
        + '<svg viewBox="0 0 400 185" class="circuit-diagram" role="img" aria-label="Schaltplan Halbaddierer">'
        + '<text x="8" y="35" class="cd-label">a</text>'
        + '<text x="8" y="155" class="cd-label">b</text>'
        + '<rect x="170" y="15" width="60" height="50" class="cd-gate"/>'
        + '<text x="200" y="47" class="cd-gate-text">&amp;</text>'
        + '<rect x="170" y="115" width="60" height="50" class="cd-gate"/>'
        + '<text x="200" y="147" class="cd-gate-text">=1</text>'
        + '<line x1="25" y1="30" x2="170" y2="30" class="cd-wire"/>'
        + '<line x1="90" y1="30" x2="90" y2="130" class="cd-wire"/>'
        + '<line x1="90" y1="130" x2="170" y2="130" class="cd-wire"/>'
        + '<circle cx="90" cy="30" r="3.5" class="cd-junction"/>'
        + '<line x1="25" y1="150" x2="170" y2="150" class="cd-wire"/>'
        + '<line x1="110" y1="150" x2="110" y2="50" class="cd-wire"/>'
        + '<line x1="110" y1="50" x2="170" y2="50" class="cd-wire"/>'
        + '<circle cx="110" cy="150" r="3.5" class="cd-junction"/>'
        + '<line x1="230" y1="40" x2="310" y2="40" class="cd-wire"/>'
        + '<text x="318" y="45" class="cd-label">c (Übertrag)</text>'
        + '<line x1="230" y1="140" x2="310" y2="140" class="cd-wire"/>'
        + '<text x="318" y="145" class="cd-label">s (Summe)</text>'
        + '</svg>'

        + '<h3>Warum „halb"?</h3>'
        + '<p>Er heißt <strong>Halb</strong>addierer, weil er keinen <strong>eingehenden Übertrag</strong> '
        + 'von einer vorherigen Stelle berücksichtigt. Er kann also nur die erste (niederwertigste) Stelle '
        + 'einer mehrstelligen Addition berechnen.</p>'
        + '<p><strong>Analogie:</strong> Stell dir vor, du rechnest schriftlich 27 + 15. '
        + 'Beim Einer-Platz (7+5) brauchst du keinen Übertrag von vorher – das ist der „Halbaddierer". '
        + 'Beim Zehner-Platz musst du den Übertrag von den Einern berücksichtigen – '
        + 'dafür braucht man einen Volladdierer (kommt in der nächsten Lektion).</p>',
      visuals: [
        { type: 'gate-sim', gate: 'xor', label: 'XOR als Summenbit' },
        { type: 'gate-sim', gate: 'and', label: 'AND als Carry-Bit' }
      ]
    },
    example: {
      title: 'Beispiel: Halbaddierer mit a=1, b=1',
      visuals: [
        { type: 'circuit', circuit: 'half-adder', interactive: true }
      ],
      steps: [
        {
          label: 'Eingangswerte',
          html:
            '<p>Wir setzen <strong>a = 1</strong> und <strong>b = 1</strong>.</p>'
        },
        {
          label: 'Summe berechnen (XOR)',
          html:
            '<p>Die Summe ist <code>s = a ⊕ b = 1 ⊕ 1 = <strong>0</strong></code></p>'
            + '<p>XOR gibt 1 zurück, wenn die Eingänge <em>unterschiedlich</em> sind. '
            + 'Hier sind beide 1 (gleich), also ist das Ergebnis 0.</p>'
        },
        {
          label: 'Übertrag berechnen (AND)',
          html:
            '<p>Der Übertrag ist <code>c = a ∧ b = 1 ∧ 1 = <strong>1</strong></code></p>'
            + '<p>AND gibt 1 zurück, wenn <em>beide</em> Eingänge 1 sind. ✓</p>'
        },
        {
          label: 'Ergebnis',
          html:
            '<p>Übertrag c = <strong>1</strong>, Summe s = <strong>0</strong></p>'
            + '<p>Zusammen: <code>1 + 1 = 10₂</code> (dezimal: 2) ✓</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'state-table',
        question: 'Fülle die Ausgangsspalten des Halbaddierers aus (Klicke auf "?" um zwischen 0 und 1 zu wechseln):',
        inputColumns: ['a', 'b'],
        outputColumns: ['s (Summe)', 'c (Übertrag)'],
        inputs: [[0, 0], [0, 1], [1, 0], [1, 1]],
        correctOutputs: [[0, 0], [1, 0], [1, 0], [0, 1]],
        explanation: 'Summe s = a ⊕ b (XOR): unterschiedliche Eingänge → 1. Übertrag c = a ∧ b (AND): beide 1 → 1.'
      },
      {
        type: 'multiple-choice',
        question: 'Welches Gatter berechnet die Summe im Halbaddierer?',
        options: [
          'AND',
          'OR',
          'XOR',
          'NOT'
        ],
        correct: 2,
        explanation: 'Die Summe ist s = a ⊕ b (XOR). XOR gibt 1 aus, wenn genau ein Eingang 1 ist – genau das Muster der Addition ohne Übertrag.'
      }
    ]
  },

  // ===== LEKTION 14: Volladdierer =====
  {
    id: 14,
    title: 'Volladdierer',
    explanation: {
      html:
        '<h3>Vom Halbaddierer zum Volladdierer</h3>'
        + '<p>Der Halbaddierer kann nur zwei Bits addieren. Aber bei mehrstelligen Zahlen '
        + 'gibt es ab der zweiten Stelle einen <strong>eingehenden Übertrag</strong> von der vorherigen Stelle. '
        + 'Dafür brauchen wir den <strong>Volladdierer</strong> (englisch: <em>Full Adder</em>).</p>'

        + '<h3>Drei Eingänge, zwei Ausgänge</h3>'
        + '<ul>'
        + '<li><strong>Eingänge:</strong> a, b, c<sub>in</sub> (eingehender Übertrag)</li>'
        + '<li><strong>Ausgänge:</strong> s (Summe), c<sub>out</sub> (ausgehender Übertrag)</li>'
        + '</ul>'

        + '<h3>Aufbau aus zwei Halbaddierern</h3>'
        + '<p>Ein Volladdierer besteht intern aus <strong>zwei Halbaddierern</strong> und einem <strong>OR-Gatter</strong>:</p>'
        + '<ol>'
        + '<li>Halbaddierer 1: addiert a und b → Zwischensumme und Zwischenübertrag</li>'
        + '<li>Halbaddierer 2: addiert Zwischensumme und c<sub>in</sub> → endgültige Summe und zweiter Übertrag</li>'
        + '<li>OR-Gatter: verknüpft beide Überträge → c<sub>out</sub></li>'
        + '</ol>'

        + '<p><strong>Aufbau des Volladdierers aus Gattern (wie in den Folien):</strong></p>'
        + '<svg viewBox="0 0 560 260" class="circuit-diagram" role="img" aria-label="Schaltplan Volladdierer">'
        + '<rect x="130" y="0" width="105" height="155" rx="4" fill="none" stroke="#93C5FD" stroke-width="1.5" stroke-dasharray="4,2"/>'
        + '<text x="135" y="168" font-size="11" fill="#2563EB" font-style="italic" font-family="inherit">Halbaddierer</text>'
        + '<rect x="290" y="80" width="105" height="155" rx="4" fill="none" stroke="#93C5FD" stroke-width="1.5" stroke-dasharray="4,2"/>'
        + '<text x="295" y="248" font-size="11" fill="#2563EB" font-style="italic" font-family="inherit">Halbaddierer</text>'
        + '<rect x="155" y="10" width="60" height="50" class="cd-gate"/>'
        + '<text x="185" y="42" class="cd-gate-text">&amp;</text>'
        + '<rect x="155" y="90" width="60" height="50" class="cd-gate"/>'
        + '<text x="185" y="122" class="cd-gate-text">=1</text>'
        + '<rect x="315" y="90" width="60" height="50" class="cd-gate"/>'
        + '<text x="345" y="122" class="cd-gate-text">&amp;</text>'
        + '<rect x="315" y="175" width="60" height="50" class="cd-gate"/>'
        + '<text x="345" y="207" class="cd-gate-text">=1</text>'
        + '<rect x="445" y="20" width="60" height="50" class="cd-gate"/>'
        + '<text x="475" y="52" class="cd-gate-text">≥1</text>'
        + '<text x="8" y="30" class="cd-label">a</text>'
        + '<line x1="25" y1="25" x2="155" y2="25" class="cd-wire"/>'
        + '<circle cx="80" cy="25" r="3.5" class="cd-junction"/>'
        + '<line x1="80" y1="25" x2="80" y2="105" class="cd-wire"/>'
        + '<line x1="80" y1="105" x2="155" y2="105" class="cd-wire"/>'
        + '<text x="8" y="145" class="cd-label">b</text>'
        + '<line x1="25" y1="140" x2="100" y2="140" class="cd-wire"/>'
        + '<line x1="100" y1="140" x2="100" y2="45" class="cd-wire"/>'
        + '<line x1="100" y1="45" x2="155" y2="45" class="cd-wire"/>'
        + '<circle cx="100" cy="125" r="3.5" class="cd-junction"/>'
        + '<line x1="100" y1="125" x2="155" y2="125" class="cd-wire"/>'
        + '<text x="3" y="245" class="cd-label">c<tspan dy="3" font-size="10">in</tspan></text>'
        + '<line x1="38" y1="240" x2="275" y2="240" class="cd-wire"/>'
        + '<line x1="275" y1="240" x2="275" y2="125" class="cd-wire"/>'
        + '<line x1="275" y1="125" x2="315" y2="125" class="cd-wire"/>'
        + '<circle cx="275" cy="210" r="3.5" class="cd-junction"/>'
        + '<line x1="275" y1="210" x2="315" y2="210" class="cd-wire"/>'
        + '<line x1="215" y1="115" x2="250" y2="115" class="cd-wire"/>'
        + '<circle cx="250" cy="115" r="3.5" class="cd-junction"/>'
        + '<line x1="250" y1="115" x2="250" y2="105" class="cd-wire"/>'
        + '<line x1="250" y1="105" x2="315" y2="105" class="cd-wire"/>'
        + '<line x1="250" y1="115" x2="250" y2="190" class="cd-wire"/>'
        + '<line x1="250" y1="190" x2="315" y2="190" class="cd-wire"/>'
        + '<text x="225" y="108" class="cd-label-small">s₁</text>'
        + '<line x1="215" y1="35" x2="445" y2="35" class="cd-wire"/>'
        + '<text x="320" y="28" class="cd-label-small">c₁</text>'
        + '<line x1="375" y1="115" x2="415" y2="115" class="cd-wire"/>'
        + '<line x1="415" y1="115" x2="415" y2="55" class="cd-wire"/>'
        + '<line x1="415" y1="55" x2="445" y2="55" class="cd-wire"/>'
        + '<text x="395" y="85" class="cd-label-small">c₂</text>'
        + '<line x1="375" y1="200" x2="535" y2="200" class="cd-wire"/>'
        + '<text x="540" y="205" class="cd-label">s</text>'
        + '<line x1="505" y1="45" x2="535" y2="45" class="cd-wire"/>'
        + '<text x="510" y="38" class="cd-label">c<tspan dy="3" font-size="10">out</tspan></text>'
        + '</svg>'

        + '<h3>Formeln</h3>'
        + '<p><code>s = (a ⊕ b) ⊕ c<sub>in</sub></code></p>'
        + '<p><code>c<sub>out</sub> = (a ∧ b) ∨ ((a ⊕ b) ∧ c<sub>in</sub>)</code></p>'
        + '<p>In Worten: Es gibt einen ausgehenden Übertrag, wenn <em>beide</em> Originalbits 1 sind '
        + '<strong>oder</strong> wenn die Zwischensumme und der eingehende Übertrag beide 1 sind.</p>',
      visuals: [
        { type: 'circuit', circuit: 'full-adder', interactive: true }
      ]
    },
    example: {
      title: 'Beispiel: 4-Bit-Addition 1011 + 0111',
      steps: [
        {
          label: 'Stelle 0 (von rechts): 1 + 1, cin=0',
          html:
            '<p><code>a=1, b=1, c<sub>in</sub>=0</code></p>'
            + '<p>s = (1⊕1)⊕0 = 0⊕0 = <strong>0</strong></p>'
            + '<p>c<sub>out</sub> = (1∧1)∨(0∧0) = 1∨0 = <strong>1</strong></p>'
        },
        {
          label: 'Stelle 1: 1 + 1, cin=1',
          html:
            '<p><code>a=1, b=1, c<sub>in</sub>=1</code> (Übertrag von Stelle 0)</p>'
            + '<p>s = (1⊕1)⊕1 = 0⊕1 = <strong>1</strong></p>'
            + '<p>c<sub>out</sub> = (1∧1)∨(0∧1) = 1∨0 = <strong>1</strong></p>'
        },
        {
          label: 'Stelle 2: 0 + 1, cin=1',
          html:
            '<p><code>a=0, b=1, c<sub>in</sub>=1</code> (Übertrag von Stelle 1)</p>'
            + '<p>s = (0⊕1)⊕1 = 1⊕1 = <strong>0</strong></p>'
            + '<p>c<sub>out</sub> = (0∧1)∨(1∧1) = 0∨1 = <strong>1</strong></p>'
        },
        {
          label: 'Stelle 3: 1 + 0, cin=1',
          html:
            '<p><code>a=1, b=0, c<sub>in</sub>=1</code> (Übertrag von Stelle 2)</p>'
            + '<p>s = (1⊕0)⊕1 = 1⊕1 = <strong>0</strong></p>'
            + '<p>c<sub>out</sub> = (1∧0)∨(1∧1) = 0∨1 = <strong>1</strong></p>'
        },
        {
          label: 'Ergebnis zusammensetzen',
          html:
            '<p>Der letzte c<sub>out</sub> wird zum höchsten Bit:</p>'
            + '<p><code>1011 + 0111 = <strong>10010</strong></code></p>'
            + '<p>Dezimal: 11 + 7 = 18 ✓ (10010₂ = 16+2 = 18)</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'state-table',
        question: 'Fülle die Wahrheitstabelle des Volladdierers aus:',
        inputColumns: ['a', 'b', 'cin'],
        outputColumns: ['s', 'cout'],
        inputs: [[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]],
        correctOutputs: [[0,0],[1,0],[1,0],[0,1],[1,0],[0,1],[0,1],[1,1]],
        explanation: 's = (a ⊕ b) ⊕ cin, cout = (a ∧ b) ∨ ((a ⊕ b) ∧ cin). Bei 1+1+1: s=1, cout=1 (dezimal 3 = binär 11).'
      },
      {
        type: 'binary-calculation',
        question: 'Berechne: 101 + 111 (binär). Trage Überträge und Ergebnis ein.',
        operand1: [1, 0, 1],
        operand2: [1, 1, 1],
        correctResult: [1, 1, 0, 0],
        correctCarries: [1, 1, 1],
        explanation: 'Stelle 0: 1+1=10 (s=0,c=1). Stelle 1: 0+1+1=10 (s=0,c=1). Stelle 2: 1+1+1=11 (s=1,c=1). Ergebnis: 1100 (dezimal: 5+7=12).'
      }
    ]
  },

  // ===== LEKTION 15: Addierwerk für mehrstellige Binärzahlen =====
  {
    id: 15,
    title: 'Addierwerk für mehrstellige Binärzahlen',
    explanation: {
      html:
        '<h3>Vom Volladdierer zum Addierwerk</h3>'
        + '<p>Ein einzelner Volladdierer kann nur <em>eine</em> Stelle addieren. '
        + 'Um mehrstellige Binärzahlen zu addieren, werden mehrere Volladdierer '
        + '<strong>hintereinander geschaltet</strong> (verkettet).</p>'

        + '<h3>Das Prinzip: Übertragskette</h3>'
        + '<p>Der <strong>c<sub>out</sub></strong> eines Volladdierers wird zum '
        + '<strong>c<sub>in</sub></strong> des nächsten Volladdierers. So „wandert" '
        + 'der Übertrag von Stelle zu Stelle – genau wie beim schriftlichen Addieren.</p>'
        + '<p><strong>Analogie:</strong> Stell dir eine Reihe von Schülern vor. Jeder Schüler '
        + 'addiert zwei Ziffern und gibt den Übertrag an seinen Nachbarn weiter. '
        + 'Der erste Schüler hat keinen Übertrag (c<sub>in</sub>=0), der letzte gibt '
        + 'seinen Übertrag als höchstes Bit aus.</p>'

        + '<p><strong>So sieht ein 3-Bit-Addierwerk aus – drei verkettete Volladdierer:</strong></p>'
        + '<svg viewBox="0 0 530 200" class="circuit-diagram" role="img" aria-label="Blockschaltbild 3-Bit-Addierwerk">'
        + '<rect x="60" y="55" width="100" height="80" rx="4" class="cd-block"/>'
        + '<text x="110" y="100" class="cd-block-text">VA₀</text>'
        + '<rect x="220" y="55" width="100" height="80" rx="4" class="cd-block"/>'
        + '<text x="270" y="100" class="cd-block-text">VA₁</text>'
        + '<rect x="380" y="55" width="100" height="80" rx="4" class="cd-block"/>'
        + '<text x="430" y="100" class="cd-block-text">VA₂</text>'
        + '<line x1="90" y1="20" x2="90" y2="55" class="cd-wire"/>'
        + '<text x="83" y="15" class="cd-label-small">a₀</text>'
        + '<line x1="130" y1="20" x2="130" y2="55" class="cd-wire"/>'
        + '<text x="124" y="15" class="cd-label-small">b₀</text>'
        + '<line x1="250" y1="20" x2="250" y2="55" class="cd-wire"/>'
        + '<text x="243" y="15" class="cd-label-small">a₁</text>'
        + '<line x1="290" y1="20" x2="290" y2="55" class="cd-wire"/>'
        + '<text x="284" y="15" class="cd-label-small">b₁</text>'
        + '<line x1="410" y1="20" x2="410" y2="55" class="cd-wire"/>'
        + '<text x="403" y="15" class="cd-label-small">a₂</text>'
        + '<line x1="450" y1="20" x2="450" y2="55" class="cd-wire"/>'
        + '<text x="444" y="15" class="cd-label-small">b₂</text>'
        + '<line x1="30" y1="95" x2="60" y2="95" class="cd-wire"/>'
        + '<text x="18" y="100" class="cd-label">0</text>'
        + '<line x1="160" y1="95" x2="220" y2="95" class="cd-wire"/>'
        + '<text x="183" y="88" class="cd-label-small">c₀</text>'
        + '<line x1="320" y1="95" x2="380" y2="95" class="cd-wire"/>'
        + '<text x="343" y="88" class="cd-label-small">c₁</text>'
        + '<line x1="480" y1="95" x2="510" y2="95" class="cd-wire"/>'
        + '<line x1="110" y1="135" x2="110" y2="175" class="cd-wire"/>'
        + '<text x="103" y="190" class="cd-label">s₀</text>'
        + '<line x1="270" y1="135" x2="270" y2="175" class="cd-wire"/>'
        + '<text x="263" y="190" class="cd-label">s₁</text>'
        + '<line x1="430" y1="135" x2="430" y2="175" class="cd-wire"/>'
        + '<text x="423" y="190" class="cd-label">s₂</text>'
        + '<line x1="510" y1="95" x2="510" y2="175" class="cd-wire"/>'
        + '<text x="503" y="190" class="cd-label">s₃</text>'
        + '</svg>'

        + '<h3>Aufbau eines n-Bit-Addierwerks</h3>'
        + '<ul>'
        + '<li>Ein <strong>n-Bit-Addierwerk</strong> besteht aus <strong>n Volladdierern</strong></li>'
        + '<li>Der c<sub>in</sub> des ersten Volladdierers ist <strong>0</strong></li>'
        + '<li>Das Ergebnis hat <strong>n+1 Bits</strong> (n Summenbits + 1 Übertragsbit)</li>'
        + '</ul>',
      visuals: [
        { type: 'adder-sim', bits: 4 },
        { type: 'binary-animation', operandA: '1101', operandB: '1011' }
      ]
    },
    example: {
      title: 'Beispiel: 3-Bit-Addierwerk – 101 + 111 = 1100',
      steps: [
        {
          label: 'VA0: Stelle 0 (a₀=1, b₀=1, cin=0)',
          html:
            '<p>Der erste Volladdierer bekommt keinen eingehenden Übertrag (c<sub>in</sub>=0).</p>'
            + '<p><code>1 + 1 + 0 → s₀ = 0, c<sub>out</sub> = 1</code></p>'
        },
        {
          label: 'VA1: Stelle 1 (a₁=0, b₁=1, cin=1)',
          html:
            '<p>Der Übertrag von VA0 fließt hier ein.</p>'
            + '<p><code>0 + 1 + 1 → s₁ = 0, c<sub>out</sub> = 1</code></p>'
        },
        {
          label: 'VA2: Stelle 2 (a₂=1, b₂=1, cin=1)',
          html:
            '<p>Der Übertrag von VA1 fließt hier ein.</p>'
            + '<p><code>1 + 1 + 1 → s₂ = 1, c<sub>out</sub> = 1</code></p>'
        },
        {
          label: 'Ergebnis zusammensetzen',
          html:
            '<p>Der letzte c<sub>out</sub> wird zum höchsten Bit s₃:</p>'
            + '<p><code>s₃s₂s₁s₀ = <strong>1100</strong></code></p>'
            + '<p>Dezimal: 5 + 7 = 12 ✓ (1100₂ = 8+4 = 12)</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'binary-calculation',
        question: 'Berechne: 110 + 011 (binär). Trage Überträge und Ergebnis ein.',
        operand1: [1, 1, 0],
        operand2: [0, 1, 1],
        correctResult: [1, 0, 0, 1],
        correctCarries: [0, 1, 1],
        explanation: 'Stelle 0: 0+1=1 (s=1,c=0). Stelle 1: 1+1+0=10 (s=0,c=1). Stelle 2: 1+0+1=10 (s=0,c=1). Ergebnis: 1001 (dezimal: 6+3=9).'
      },
      {
        type: 'multiple-choice',
        question: 'Wie viele Volladdierer braucht man für ein 8-Bit-Addierwerk?',
        options: [
          '7',
          '8',
          '9',
          '16'
        ],
        correct: 1,
        explanation: 'Ein n-Bit-Addierwerk braucht genau n Volladdierer – also 8 Stück für 8 Bit. Das Ergebnis hat dann 9 Bit (8+1 Übertragsbit).'
      }
    ]
  },

  // ===== LEKTION 16: Sequenzielle Logik & Flipflops =====
  {
    id: 16,
    title: 'Sequenzielle Logik & Flipflops',
    explanation: {
      html:
        '<h3>Bisher: Schaltnetze (kombinatorische Logik)</h3>'
        + '<p>Alles, was wir bisher gebaut haben (Gatter, Addierer), sind <strong>Schaltnetze</strong>. '
        + 'Bei einem Schaltnetz hängt der Ausgang <strong>nur von den aktuellen Eingängen</strong> ab. '
        + 'Sobald sich die Eingänge ändern, ändert sich sofort der Ausgang.</p>'
        + '<p><strong>Analogie:</strong> Ein Taschenrechner, der nur die aktuelle Eingabe anzeigt – '
        + 'er „vergisst" sofort, was vorher war.</p>'

        + '<h3>Jetzt neu: Schaltwerke (sequenzielle Logik)</h3>'
        + '<p>Ein <strong>Schaltwerk</strong> ist anders: Sein Ausgang hängt nicht nur von den aktuellen '
        + 'Eingängen ab, sondern auch vom <strong>vorherigen Zustand</strong>. '
        + 'Es kann sich also „erinnern"!</p>'
        + '<p><strong>Analogie:</strong> Eine Stoppuhr – sie zeigt nicht nur die aktuelle Eingabe, '
        + 'sondern erinnert sich an die vergangene Zeit.</p>'

        + '<h3>Rückkopplung – das Geheimnis der Speicherung</h3>'
        + '<p>Der Trick bei Schaltwerken ist die <strong>Rückkopplung</strong>: '
        + 'Ausgänge werden wieder zu den Eingängen zurückgeführt. '
        + 'Dadurch kann die Schaltung einen Zustand „festhalten".</p>'

        + '<h3>Der Takt</h3>'
        + '<p>Der <strong>Takt</strong> (englisch: <em>clock</em>) gibt den zeitlichen Rhythmus vor. '
        + 'Er bestimmt, <em>wann</em> sich der Zustand ändern darf. '
        + 'Ohne Takt würde das Schaltwerk unkontrolliert „flattern".</p>'

        + '<h3>Flipflop / Bistabile Kippstufe</h3>'
        + '<p>Ein <strong>Flipflop</strong> (auch: bistabile Kippstufe) ist das einfachste Speicherelement. '
        + 'Es hat <strong>zwei stabile Zustände</strong> – wie eine Wippe auf dem Spielplatz: '
        + 'Sie kann links unten oder rechts unten sein und bleibt in dieser Position, '
        + 'bis jemand sie umkippt.</p>',
      visuals: [
        { type: 'circuit', circuit: 'sr-latch', interactive: false }
      ]
    },
    example: {
      title: 'Beispiel: Die Wippe als Analogie',
      steps: [
        {
          label: 'Zustand 1: Links unten',
          html:
            '<p>Die Wippe ist auf der <strong>linken Seite</strong> unten. '
            + 'Das entspricht dem Zustand <strong>Q = 0</strong>.</p>'
            + '<p>Sie bleibt stabil in dieser Position – niemand drückt.</p>'
        },
        {
          label: 'Umkippen',
          html:
            '<p>Jemand drückt die Wippe auf die andere Seite. '
            + 'Das ist wie ein <strong>Set-Signal</strong>.</p>'
        },
        {
          label: 'Zustand 2: Rechts unten',
          html:
            '<p>Die Wippe ist jetzt auf der <strong>rechten Seite</strong> unten. '
            + 'Das entspricht <strong>Q = 1</strong>.</p>'
            + '<p>Sie bleibt wieder stabil – auch wenn niemand mehr drückt. '
            + 'Das ist <strong>Speicherung</strong>!</p>'
        },
        {
          label: 'Übertragung auf die Technik',
          html:
            '<p>Genau so funktioniert ein Flipflop: Es hat zwei stabile Zustände (0 oder 1) '
            + 'und wechselt nur, wenn es ein Signal bekommt.</p>'
            + '<p>Ein einzelnes Flipflop speichert <strong>1 Bit</strong> Information.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist der Hauptunterschied zwischen einem Schaltnetz und einem Schaltwerk?',
        options: [
          'Ein Schaltwerk ist schneller',
          'Ein Schaltwerk kann Zustände speichern (Rückkopplung)',
          'Ein Schaltnetz hat mehr Gatter',
          'Ein Schaltnetz braucht keinen Strom'
        ],
        correct: 1,
        explanation: 'Der entscheidende Unterschied: Ein Schaltwerk hat eine Rückkopplung und kann dadurch Zustände speichern. Ein Schaltnetz reagiert nur auf aktuelle Eingänge.'
      },
      {
        type: 'multiple-choice',
        question: 'Was bedeutet „bistabil"?',
        options: [
          'Die Schaltung hat zwei Eingänge',
          'Die Schaltung hat zwei stabile Zustände',
          'Die Schaltung braucht zwei Takte',
          'Die Schaltung besteht aus zwei Gattern'
        ],
        correct: 1,
        explanation: '„Bi" = zwei, „stabil" = stabil. Ein bistabiles Element hat zwei stabile Zustände (0 und 1) – wie eine Wippe.'
      },
      {
        type: 'multiple-choice',
        question: 'Wozu dient der Takt in einem Schaltwerk?',
        options: [
          'Er liefert den Strom',
          'Er gibt den zeitlichen Rhythmus für Zustandsänderungen vor',
          'Er zählt die Anzahl der Gatter',
          'Er bestimmt die Farbe der LEDs'
        ],
        correct: 1,
        explanation: 'Der Takt (Clock) gibt den zeitlichen Rhythmus vor und bestimmt, wann sich Zustände ändern dürfen. Ohne Takt wären die Zustandsänderungen unkontrolliert.'
      }
    ]
  },

  // ===== LEKTION 17: SR-Riegel =====
  {
    id: 17,
    title: 'SR-Riegel (Set-Reset-Latch)',
    explanation: {
      html:
        '<h3>Der SR-Riegel – das einfachste Speicherelement</h3>'
        + '<p>Der <strong>SR-Riegel</strong> (auch: SR-Latch, Set-Reset-Latch) ist die einfachste '
        + 'Schaltung, die 1 Bit speichern kann. Er besteht aus <strong>zwei NOR-Gattern</strong>, '
        + 'die über Kreuz miteinander verbunden sind (Rückkopplung!).</p>'

        + '<p><strong>Schaltplan des SR-Riegels:</strong></p>'
        + '<svg viewBox="0 0 400 210" class="circuit-diagram" role="img" aria-label="Schaltplan SR-Riegel">'
        + '<rect x="155" y="20" width="60" height="50" class="cd-gate"/>'
        + '<text x="185" y="52" class="cd-gate-text">≥1</text>'
        + '<circle cx="219" cy="45" r="4" class="cd-neg"/>'
        + '<rect x="155" y="135" width="60" height="50" class="cd-gate"/>'
        + '<text x="185" y="167" class="cd-gate-text">≥1</text>'
        + '<circle cx="219" cy="160" r="4" class="cd-neg"/>'
        + '<text x="8" y="40" class="cd-label">S</text>'
        + '<line x1="25" y1="35" x2="155" y2="35" class="cd-wire"/>'
        + '<text x="8" y="175" class="cd-label">R</text>'
        + '<line x1="25" y1="170" x2="155" y2="170" class="cd-wire"/>'
        + '<line x1="223" y1="45" x2="370" y2="45" class="cd-wire"/>'
        + '<text x="375" y="50" class="cd-label">Q̅</text>'
        + '<line x1="223" y1="160" x2="370" y2="160" class="cd-wire"/>'
        + '<text x="375" y="165" class="cd-label">Q</text>'
        + '<circle cx="270" cy="45" r="3.5" class="cd-junction"/>'
        + '<line x1="270" y1="45" x2="270" y2="150" class="cd-feedback"/>'
        + '<line x1="270" y1="150" x2="155" y2="150" class="cd-feedback"/>'
        + '<circle cx="290" cy="160" r="3.5" class="cd-junction"/>'
        + '<line x1="290" y1="160" x2="290" y2="55" class="cd-feedback"/>'
        + '<line x1="290" y1="55" x2="276" y2="55" class="cd-feedback"/>'
        + '<path d="M 276,55 A 6,6 0 0,0 264,55" class="cd-feedback"/>'
        + '<line x1="264" y1="55" x2="155" y2="55" class="cd-feedback"/>'
        + '<text x="295" y="105" class="cd-label-small" fill="#2563EB">Rück-</text>'
        + '<text x="295" y="118" class="cd-label-small" fill="#2563EB">kopplung</text>'
        + '</svg>'

        + '<h3>Eingänge und Ausgänge</h3>'
        + '<ul>'
        + '<li><strong>S</strong> (Set) – setzt den Ausgang auf 1</li>'
        + '<li><strong>R</strong> (Reset) – setzt den Ausgang auf 0</li>'
        + '<li><strong>Q</strong> – der gespeicherte Wert</li>'
        + '<li><strong>Q̅</strong> (Q-quer) – das Gegenteil von Q (immer invertiert)</li>'
        + '</ul>'

        + '<h3>Die vier Zustände</h3>'
        + '<table class="truth-table">'
        + '<thead><tr><th>S</th><th>R</th><th>Q (nächster Zustand)</th><th>Bedeutung</th></tr></thead>'
        + '<tbody>'
        + '<tr><td>0</td><td>0</td><td>Q (bleibt)</td><td><strong>Speichern</strong> – Zustand wird gehalten</td></tr>'
        + '<tr><td>1</td><td>0</td><td>1</td><td><strong>Setzen</strong> – Q wird auf 1 gesetzt</td></tr>'
        + '<tr><td>0</td><td>1</td><td>0</td><td><strong>Rücksetzen</strong> – Q wird auf 0 gesetzt</td></tr>'
        + '<tr><td>1</td><td>1</td><td>?</td><td><strong>Verboten!</strong> Undefinierter Zustand</td></tr>'
        + '</tbody></table>'

        + '<h3>Warum ist S=1, R=1 verboten?</h3>'
        + '<p>Wenn man gleichzeitig „Setze auf 1" und „Setze auf 0" sagt, ist das ein Widerspruch. '
        + 'Die Schaltung kann nicht beides gleichzeitig – das Ergebnis ist nicht vorhersagbar.</p>'

        + '<p><strong>Analogie:</strong> Stell dir einen Lichtschalter mit zwei Knöpfen vor – '
        + 'einer zum <em>Einschalten</em> (Set) und einer zum <em>Ausschalten</em> (Reset). '
        + 'Drückt man keinen, bleibt das Licht wie es ist (Speichern). '
        + 'Drückt man beide gleichzeitig, weiß die Lampe nicht, was sie tun soll (verboten!).</p>',
      visuals: [
        { type: 'circuit', circuit: 'sr-latch', interactive: true },
        { type: 'timing-diagram', signals: ['S', 'R', 'Q', 'Q\u0304'] }
      ]
    },
    example: {
      title: 'Beispiel: Zustandsfolge eines SR-Riegels',
      steps: [
        {
          label: 'Startzustand: Q = 0',
          html:
            '<p>Der SR-Riegel startet mit <strong>Q = 0</strong> und <strong>Q̅ = 1</strong>.</p>'
            + '<p>Beide Eingänge sind 0 → der Zustand wird gespeichert.</p>'
        },
        {
          label: 'Setzen: S=1, R=0',
          html:
            '<p>Wir aktivieren den Set-Eingang: <strong>S = 1</strong>, R = 0.</p>'
            + '<p>→ Q wird auf <strong>1</strong> gesetzt, Q̅ wird <strong>0</strong>.</p>'
        },
        {
          label: 'Speichern: S=0, R=0',
          html:
            '<p>Wir nehmen Set wieder weg: S = 0, R = 0.</p>'
            + '<p>→ Q bleibt auf <strong>1</strong>! Der Wert wurde <strong>gespeichert</strong>.</p>'
            + '<p>Das ist der entscheidende Moment: Obwohl kein Eingang mehr aktiv ist, '
            + '„erinnert" sich die Schaltung an den vorherigen Zustand.</p>'
        },
        {
          label: 'Rücksetzen: S=0, R=1',
          html:
            '<p>Wir aktivieren den Reset-Eingang: S = 0, <strong>R = 1</strong>.</p>'
            + '<p>→ Q wird auf <strong>0</strong> zurückgesetzt, Q̅ wird <strong>1</strong>.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was passiert beim SR-Riegel, wenn S=1 und R=0?',
        options: [
          'Q wird auf 0 gesetzt',
          'Q wird auf 1 gesetzt',
          'Q bleibt unverändert',
          'Verbotener Zustand'
        ],
        correct: 1,
        explanation: 'S=1 (Set) und R=0 → Q wird auf 1 gesetzt. Das „S" steht für „Set" = Setzen auf 1.'
      },
      {
        type: 'multiple-choice',
        question: 'Was passiert, wenn S=1 und R=1 gleichzeitig?',
        options: [
          'Q wird auf 1 gesetzt',
          'Q wird auf 0 gesetzt',
          'Q bleibt unverändert',
          'Verbotener Zustand (undefiniert)'
        ],
        correct: 3,
        explanation: 'S=1 und R=1 ist der verbotene Zustand. Die Schaltung kann nicht gleichzeitig setzen und rücksetzen – das Ergebnis ist undefiniert.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie speichert der SR-Riegel seinen Zustand?',
        options: [
          'Durch eine Batterie',
          'Durch einen Kondensator',
          'Durch Rückkopplung (Ausgang wird wieder zum Eingang)',
          'Durch einen eingebauten Speicherchip'
        ],
        correct: 2,
        explanation: 'Die Rückkopplung ist das Geheimnis: Die Ausgänge der NOR-Gatter werden über Kreuz wieder zu Eingängen. So hält sich die Schaltung selbst in ihrem Zustand.'
      }
    ]
  }

];
