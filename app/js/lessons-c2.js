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
        + '</ul>'
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

        + '<h3>Warum „halb"?</h3>'
        + '<p>Er heißt <strong>Halb</strong>addierer, weil er keinen <strong>eingehenden Übertrag</strong> '
        + 'von einer vorherigen Stelle berücksichtigt. Er kann also nur die erste (niederwertigste) Stelle '
        + 'einer mehrstelligen Addition berechnen.</p>'
        + '<p><strong>Analogie:</strong> Stell dir vor, du rechnest schriftlich 27 + 15. '
        + 'Beim Einer-Platz (7+5) brauchst du keinen Übertrag von vorher – das ist der „Halbaddierer". '
        + 'Beim Zehner-Platz musst du den Übertrag von den Einern berücksichtigen – '
        + 'dafür braucht man einen Volladdierer (kommt in der nächsten Lektion).</p>'
    },
    example: {
      title: 'Beispiel: Halbaddierer mit a=1, b=1',
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

        + '<h3>Formeln</h3>'
        + '<p><code>s = (a ⊕ b) ⊕ c<sub>in</sub></code></p>'
        + '<p><code>c<sub>out</sub> = (a ∧ b) ∨ ((a ⊕ b) ∧ c<sub>in</sub>)</code></p>'
        + '<p>In Worten: Es gibt einen ausgehenden Übertrag, wenn <em>beide</em> Originalbits 1 sind '
        + '<strong>oder</strong> wenn die Zwischensumme und der eingehende Übertrag beide 1 sind.</p>'
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

        + '<h3>Aufbau eines n-Bit-Addierwerks</h3>'
        + '<ul>'
        + '<li>Ein <strong>n-Bit-Addierwerk</strong> besteht aus <strong>n Volladdierern</strong></li>'
        + '<li>Der c<sub>in</sub> des ersten Volladdierers ist <strong>0</strong></li>'
        + '<li>Das Ergebnis hat <strong>n+1 Bits</strong> (n Summenbits + 1 Übertragsbit)</li>'
        + '</ul>'
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
        + 'bis jemand sie umkippt.</p>'
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
        + 'Drückt man beide gleichzeitig, weiß die Lampe nicht, was sie tun soll (verboten!).</p>'
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
