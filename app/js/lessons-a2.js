const LessonsA2 = [

  // ===== LEKTION 27: Binäre Addition =====
  {
    id: 27,
    title: 'Binäre Addition (schriftlich)',
    explanation: {
      html:
        '<h2>Binäre Addition</h2>'
        + '<p>Binärzahlen addierst du wie Dezimalzahlen – von rechts nach links, mit Übertrag. Nur dass der Übertrag <strong>schon bei 2</strong> kommt statt bei 10.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Tacho:</strong> Ein Kilometerzähler springt bei 999 auf 1000 – der Übertrag wandert. Im Binärsystem passiert das schon viel früher: 1+1 = 10 (Null mit Übertrag 1).'
        + '</div>'
        + '<h3>Die vier Regeln</h3>'
        + '<div class="info-card" style="padding:12px;font-family:monospace;font-size:1.1em;">'
        + '0 + 0 = 0<br>'
        + '0 + 1 = 1<br>'
        + '1 + 0 = 1<br>'
        + '1 + 1 = <strong>10</strong>   ← 0 mit Übertrag 1<br>'
        + '1 + 1 + 1 = <strong>11</strong> ← 1 mit Übertrag 1 (wenn Übertrag dazu kommt)'
        + '</div>'
        + '<div class="reading-guide">'
        + '<strong>Ablauf:</strong>'
        + '<ol style="margin:6px 0 0 20px;">'
        + '<li>Zahlen rechtsbündig untereinander schreiben</li>'
        + '<li>Von rechts nach links Stelle für Stelle addieren</li>'
        + '<li>Summe &gt; 1? → Übertrag in die nächste Stelle links</li>'
        + '<li>Übertrag bei der nächsten Stelle mit addieren</li>'
        + '</ol>'
        + '</div>'
        + '<div class="warning-box">'
        + '<strong>Überlauf:</strong> Bei fester Bit-Breite (z.B. 8 Bit) fällt der letzte Übertrag raus. Das ist kein Fehler – das führt zum Thema Zweierkomplement in der nächsten Lektion.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> In jedem Prozessor sitzt ein <em>Addierwerk</em> – eine Schaltung aus Halb- und Volladdierern (siehe C2), die genau diese Regeln in Hardware umsetzt. Jede Rechnung im Computer läuft letztlich so ab. Und noch wichtiger für dich: Das <strong>Zweierkomplement</strong> in der nächsten Lektion ist nichts anderes als eine verkappte binäre Addition. Wer hier die Grundregeln drauf hat, bekommt ZK fast geschenkt.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: 7 + 10 = ? (in Binär)',
      steps: [
        {
          label: 'Schritt 1 – In Binär umrechnen',
          html:
            '<p>7<sub>10</sub> = 0000 0111<sub>2</sub></p>'
            + '<p>10<sub>10</sub> = 0000 1010<sub>2</sub></p>'
        },
        {
          label: 'Schritt 2 – Stelle für Stelle addieren',
          html:
            '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + '     0000 0111\n'
            + '   + 0000 1010\n'
            + '   ----------\n'
            + '     0001 110     ← Überträge\n'
            + '   ----------\n'
            + '     0001 0001    ← Ergebnis = 17₁₀</pre>'
            + '<p>Probe: 7 + 10 = 17 ✓</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist 0011 + 0101 in Binär?',
        options: ['1000', '0110', '1010', '0111'],
        correct: 0,
        explanation: '3 + 5 = 8 = 1000. Kette: 1+1=0Ü1, 1+0+Ü=0Ü1, 0+1+Ü=0Ü1, 0+0+Ü=1.'
      },
      {
        type: 'multiple-choice',
        question: '1111 1111 + 0000 0001 in 8 Bit – was passiert?',
        options: [
          'Ergebnis ist 1 0000 0000 (9 Bits)',
          'Ergebnis ist 0000 0000 mit Überlauf',
          'Ergebnis ist 1111 1110',
          'Rechnung ungültig'
        ],
        correct: 1,
        explanation: '255 + 1 = 256, aber in 8 Bit bleiben nur die 0en – Überlauf.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist 1011 + 1101?',
        options: ['10100', '11000', '11001', '10001'],
        correct: 1,
        explanation: '11 + 13 = 24 = 11000.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum gibt es schon bei 1+1 einen Übertrag?',
        options: [
          'Weil Computer schneller rechnen wollen.',
          'Im Binärsystem gibt es keine Ziffer 2 – 2 wird zu 10.',
          'Weil der Übertrag immer bei 10 kommt.',
          'Weil Binärzahlen rückwärts gelesen werden.'
        ],
        correct: 1,
        explanation: 'Binär kennt nur 0 und 1. 2 wird zu "0 mit Übertrag 1".'
      }
    ]
  },

  // ===== LEKTION 28: Einerkomplement =====
  {
    id: 28,
    title: 'Einerkomplement',
    explanation: {
      html:
        '<h2>Einerkomplement (EK)</h2>'
        + '<p>Computer kennen kein Minuszeichen. Wie stellt man <strong>negative Zahlen</strong> dar? Die einfachste Idee: <em>Alle Bits umdrehen.</em></p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Lichtschalter:</strong> Stell dir vor, du willst den Zustand deines Hauses "umkehren" – aus jedem ON wird OFF, aus jedem OFF wird ON. Genau das ist Einerkomplement: jedes Bit kippt. Aus 0 wird 1, aus 1 wird 0.'
        + '</div>'
        + '<h3>So geht es</h3>'
        + '<ul>'
        + '<li><strong>Positive Zahl:</strong> ganz normal in Binär (führendes Bit 0)</li>'
        + '<li><strong>Negative Zahl:</strong> positive Zahl nehmen, <strong>alle Bits invertieren</strong></li>'
        + '</ul>'
        + '<p>Das führende Bit sagt dir dann das Vorzeichen:</p>'
        + '<ul><li>0 = positiv</li><li>1 = negativ</li></ul>'
        + '<p>Unten: +37 und -37 im Vergleich.</p>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> In der Praxis wird das Einerkomplement <em>nicht</em> verwendet – wegen dem Problem mit der doppelten Null. Warum lernen wir es trotzdem? Weil es die <strong>logische Vorstufe</strong> zum Zweierkomplement (nächste Lektion) ist. In der Klausur werden EK und ZK fast immer gemeinsam abgefragt. Wer EK verstanden hat, versteht automatisch, warum beim ZK "noch +1" dazu kommt – nämlich um die Doppel-Null loszuwerden.'
        + '</div>'
        + '<h3>Rechnen im EK: der Haken</h3>'
        + '<p>EK-Zahlen kann man wie normale Binärzahlen addieren – meistens. Aber es gibt einen <strong>Fallstrick</strong>: Wenn bei der Addition ein Übertrag <em>aus dem höchsten Bit herausläuft</em>, ist das Ergebnis direkt <strong>falsch</strong>. Die Korrektur heißt <em>End-Around-Carry</em>: den Übertrag unten wieder dazuaddieren.</p>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + '  0001 0111   (+23)\n'
        + '+ 1111 1000   (-7 im EK)\n'
        + '----------\n'
        + ' 1 0000 1111   ← Übertrag läuft raus!\n'
        + '            0000 1111 = 15  falsch (sollte 16 sein)\n'
        + '         +          1  ← End-Around-Carry\n'
        + '          = 0001 0000 = 16  korrekt</pre>'
        + '<div class="warning-box">'
        + '<strong>Klausur-Regel:</strong> Entsteht bei der Addition zweier EK-Zahlen ein <em>Übertrag aus dem 8. Bit</em>, klappt die <em>direkte</em> Addition nicht. Das ist die Schwäche des EK, die das Zweierkomplement (nächste Lektion) eliminiert.'
        + '</div>',
      visuals: [
        {
          type: 'bit-layout',
          bits: '00100101',
          groups: [{ start: 0, length: 1, color: '#DCFCE7', label: '+' }, { start: 1, length: 7, color: '#F3F4F6', label: '37' }],
          label: '+37 – führendes Bit = 0 (positiv)'
        },
        {
          type: 'bit-layout',
          bits: '11011010',
          groups: [{ start: 0, length: 1, color: '#FEE2E2', label: '−' }, { start: 1, length: 7, color: '#F3F4F6', label: 'invertiert' }],
          label: '-37 im EK – alle Bits gekippt, führendes Bit = 1 (negativ)'
        }
      ]
    },
    example: {
      title: 'Beispiel: -42 im 8-Bit EK',
      steps: [
        {
          label: 'Schritt 1 – +42 in Binär',
          html:
            '<p>32 + 8 + 2 = 42 → <code>0010 1010</code></p>'
        },
        {
          label: 'Schritt 2 – Alle Bits invertieren',
          html:
            '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + '+42:  0010 1010\n'
            + '        ↓ jedes Bit kippt\n'
            + '-42:  1101 0101 (EK)</pre>'
        },
        {
          label: 'Probe: EK zurückwandeln',
          html:
            '<p>Führende 1 → negativ. Bits invertieren: 0010 1010 = 42. Vorzeichen dazu: <strong>-42</strong> ✓</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: '-39 im 8-Bit EK – wie lautet das?',
        options: ['1101 1000', '1101 1001', '1101 0110', '0010 0111'],
        correct: 0,
        explanation: '+39 = 0010 0111. Invertieren: 1101 1000.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Dezimalzahl ist 1101 0111<sub>EK</sub>?',
        options: ['-40', '-39', '-41', '-23'],
        correct: 0,
        explanation: 'Führende 1 → negativ. Invertiert: 0010 1000 = 40. → -40.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist das Problem beim EK?',
        options: [
          'Kann keine negativen Zahlen.',
          'Hat zwei verschiedene Darstellungen der Null: 0000 0000 und 1111 1111.',
          'Braucht 16 Bit pro Zahl.',
          'Funktioniert nur bei Primzahlen.'
        ],
        correct: 1,
        explanation: '+0 und -0 sind beides "Null" – das führt zu Rechenfehlern. Darum nimmt man in der Praxis das Zweierkomplement (nächste Lektion).'
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Wertebereich bei 8-Bit EK?',
        options: [
          '0 bis +255',
          '-128 bis +127',
          '-127 bis +127',
          '-256 bis +256'
        ],
        correct: 2,
        explanation: '-127 bis +127 (die doppelte Null verschenkt einen Wert).'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: '<strong>Klappt das EK direkt?</strong> Rechnung: <code>23 + (-7)</code> im 8-Bit EK.',
        options: ['klappt', 'klappt nicht'],
        correct: 1,
        explanation: '+23 = 0001 0111, -7 im EK = 1111 1000. Summe = 1 0000 1111 – Übertrag aus dem 8. Bit! Direkt gelesen 0000 1111 = 15, richtig wäre 16. <strong>Klappt nicht</strong> (End-Around-Carry wäre nötig).'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: '<strong>Klappt das EK direkt?</strong> Rechnung: <code>31 + 12</code> im 8-Bit EK.',
        options: ['klappt', 'klappt nicht'],
        correct: 0,
        explanation: '31 = 0001 1111, 12 = 0000 1100. Summe = 0010 1011 = 43. Kein Übertrag, Ergebnis positiv und korrekt. <strong>Klappt.</strong>'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: '<strong>Klappt das EK direkt?</strong> Rechnung: <code>-25 + 21</code> im 8-Bit EK.',
        options: ['klappt', 'klappt nicht'],
        correct: 0,
        explanation: '-25 im EK = 1110 0110, +21 = 0001 0101. Summe = 1111 1011. Kein Übertrag. Führendes Bit 1 → negativ; invertiert: 0000 0100 = 4, also -4. Richtig. <strong>Klappt.</strong>'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: '<strong>Klappt das EK direkt?</strong> Rechnung: <code>-16 + (-9)</code> im 8-Bit EK.',
        options: ['klappt', 'klappt nicht'],
        correct: 1,
        explanation: '-16 im EK = 1110 1111, -9 im EK = 1111 0110. Summe = 1 1110 0101 – Übertrag! Direkt gelesen 1110 0101 → invertiert 0001 1010 = 26, also -26. Richtig wäre -25. <strong>Klappt nicht</strong> (End-Around-Carry wäre nötig).'
      }
    ]
  },

  // ===== LEKTION 29: Zweierkomplement =====
  {
    id: 29,
    title: 'Zweierkomplement & Rechnen',
    explanation: {
      html:
        '<h2>Zweierkomplement (ZK)</h2>'
        + '<p>Das Zweierkomplement ist der <strong>Standard</strong> für negative ganze Zahlen in fast allen Programmiersprachen (Java, C, Python …). Es löst das Doppel-Null-Problem des EK mit einem einfachen Trick: <strong>+1 drauf.</strong></p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Rückwärtstacho:</strong> Wenn ein 5-stelliger Zähler bei 00000 rückwärts gedreht wird, kommt nicht "-0" raus, sondern 99999 (der größte negative Wert). Genau so macht es das ZK: Der Zahlenkreis schließt sich sauber – die Null kommt nur einmal vor.'
        + '</div>'
        + '<div class="reading-guide">'
        + '<strong>Negative Zahl ins ZK wandeln – drei Schritte:</strong>'
        + '<ol style="margin:6px 0 0 20px;">'
        + '<li>Positive Zahl in Binär schreiben</li>'
        + '<li>Alle Bits invertieren (= Einerkomplement)</li>'
        + '<li><strong>+1</strong> addieren</li>'
        + '</ol>'
        + '</div>'
        + '<p>Beispiel -37:</p>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Wenn du in Java <code>int x = -5;</code> schreibst, liegt <em>genau diese</em> Bit-Folge im Speicher – ein ZK. Wenn ein Messwert überläuft und plötzlich negativ wird, ist das ZK-Verhalten. Wer ZK nicht versteht, versteht eine ganze Klasse von Bugs nicht. In der Klausur ist es eine sichere 3-Punkte-Aufgabe mit klarem Schema: positive Zahl → invertieren → +1. Fertig.'
        + '</div>',
      visuals: [
        {
          type: 'bit-layout',
          bits: '00100101',
          groups: [{ start: 0, length: 1, color: '#DCFCE7', label: 'V' }, { start: 1, length: 7, color: '#F3F4F6', label: '+37' }],
          label: 'Start: +37'
        },
        {
          type: 'bit-layout',
          bits: '11011010',
          groups: [{ start: 0, length: 1, color: '#FEE2E2', label: 'V' }, { start: 1, length: 7, color: '#F3F4F6', label: 'EK' }],
          label: 'Schritt 1: Alle Bits invertiert (= EK)'
        },
        {
          type: 'bit-layout',
          bits: '11011011',
          groups: [{ start: 0, length: 1, color: '#FEE2E2', label: 'V' }, { start: 1, length: 7, color: '#FEF3C7', label: 'ZK' }],
          label: 'Schritt 2: +1 → -37 im ZK'
        }
      ]
    },
    example: {
      title: 'Beispiel: 45 + (-37) = ? im 8-Bit ZK',
      steps: [
        {
          label: 'Schritt 1 – Beide Zahlen ins ZK',
          html:
            '<p>+45 ist positiv → direkt: <code>0010 1101</code></p>'
            + '<p>-37: +37 = 0010 0101 → invertieren: 1101 1010 → +1: <code>1101 1011</code></p>'
        },
        {
          label: 'Schritt 2 – Addieren (normal, ohne Fallunterscheidung!)',
          html:
            '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + '    0010 1101   (+45)\n'
            + '  + 1101 1011   (-37 im ZK)\n'
            + '  ----------\n'
            + '  1 1111 1      ← Überträge\n'
            + '  ----------\n'
            + ' (1)0000 1000   ← letzter Übertrag fliegt raus\n'
            + '    0000 1000   = +8</pre>'
            + '<p>Probe: 45 - 37 = 8 ✓</p>'
            + '<div class="tip-box"><strong>Das ist der große Vorteil:</strong> Subtraktion wird zur Addition – keine spezielle Minus-Schaltung nötig.</div>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: '-42 im 8-Bit ZK?',
        options: ['1101 0110', '1101 0101', '0010 1010', '1010 1101'],
        correct: 0,
        explanation: '+42 = 0010 1010 → invertieren = 1101 0101 → +1 = 1101 0110.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist 1110 1101<sub>ZK</sub> in Dezimal?',
        options: ['-18', '-19', '-20', '-17'],
        correct: 1,
        explanation: 'Rückwärts: -1 → 1110 1100, invertieren → 0001 0011 = 19. → -19.'
      },
      {
        type: 'multiple-choice',
        question: '29 + (-13) im 8-Bit ZK – Ergebnis?',
        options: ['+16', '+17', '+15', '-16'],
        correct: 0,
        explanation: '29 - 13 = 16 ✓'
      },
      {
        type: 'multiple-choice',
        question: 'Wertebereich 8-Bit ZK?',
        options: [
          '0 bis +255',
          '-127 bis +127',
          '-128 bis +127',
          '-128 bis +128'
        ],
        correct: 2,
        explanation: '-128 bis +127 (ein Wert mehr auf der negativen Seite, weil Null nur einmal vorkommt).'
      },
      {
        type: 'multiple-choice',
        question: 'Warum ist ZK wichtiger als EK?',
        options: [
          'Weil es einfacher ist.',
          'Nur eine Null + Addition/Subtraktion funktionieren ohne Sonderfall.',
          'Mehr darstellbare Zahlen.',
          'Weniger Speicher.'
        ],
        correct: 1,
        explanation: 'Einheitliche Rechenregeln + eine Null → ZK ist der Standard.'
      }
    ]
  },

  // ===== LEKTION 30: IEEE 754 =====
  {
    id: 30,
    title: 'IEEE 754 Gleitkommazahlen',
    explanation: {
      html:
        '<h2>IEEE 754 – Kommazahlen im Rechner</h2>'
        + '<p>ZK kann nur ganze Zahlen. Für Zahlen wie 3,14 oder 0,0001 gibt es einen anderen Standard: <strong>IEEE 754</strong>.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Wissenschaftliche Notation:</strong> In Physik schreibst du die Lichtgeschwindigkeit als 3·10⁸ m/s, nicht als 300.000.000. Du zerlegst: <em>Zahl × Potenz</em>. IEEE 754 macht genau das – aber mit Basis 2 und in Binär.'
        + '</div>'
        + '<h3>Aufbau – 32 Bit in 3 Teile</h3>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;width:100%;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Teil</th><th style="padding:6px;border:1px solid #ccc;">Bits</th><th style="padding:6px;border:1px solid #ccc;">Bedeutung</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>V</b> (Vorzeichen)</td><td style="padding:6px;border:1px solid #ccc;">1</td><td style="padding:6px;border:1px solid #ccc;">0 = positiv, 1 = negativ</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>E</b> (Exponent)</td><td style="padding:6px;border:1px solid #ccc;">8</td><td style="padding:6px;border:1px solid #ccc;">Exponent + 127 (Bias-Trick)</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>M</b> (Mantisse)</td><td style="padding:6px;border:1px solid #ccc;">23</td><td style="padding:6px;border:1px solid #ccc;">Die Stellen nach dem Komma</td></tr>'
        + '</table>'
        + '<p>So sind die 32 Bits farblich getrennt angeordnet (hier: +1,0):</p>'
        + '<h3>Die Formel</h3>'
        + '<div class="info-card" style="padding:12px;text-align:center;font-size:1.2em;background:#eff6ff;">'
        + 'Zahl = (-1)<sup>V</sup> · 1,M · 2<sup>(E - 127)</sup>'
        + '</div>'
        + '<p>Klingt kompliziert? Gar nicht: Du schreibst die Zahl als "1 Komma irgendwas mal 2 hoch irgendwas", und der Computer speichert nur das Vorzeichen, den Exponenten und die Nachkommastellen. Die führende 1 <em>ganz vorne</em> ist so fest eingeplant, dass sie nicht mal abgespeichert wird – sie ist immer da.</p>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Jeder <code>float</code> in Java, C, Python oder JavaScript ist IEEE 754. Wenn du mal hörst, dass <code>0.1 + 0.2 != 0.3</code> ergibt (berühmter Klassiker!), ist IEEE 754 dran schuld – 0,1 lässt sich nicht exakt in Binär darstellen. In der Klausur ist IEEE 754 die "große" Rechenaufgabe für 2,5 Punkte. Mit klarem Schema (Vorzeichen → Binär → normalisieren → Exponent +127 → Mantisse auffüllen) gut lösbar.'
        + '</div>',
      visuals: [
        {
          type: 'bit-layout',
          bits: '00111111100000000000000000000000',
          groups: [
            { start: 0, length: 1, color: '#FEF3C7', label: 'V' },
            { start: 1, length: 8, color: '#DBEAFE', label: 'Exponent' },
            { start: 9, length: 23, color: '#D1FAE5', label: 'Mantisse' }
          ],
          label: 'Beispiel +1,0 in IEEE 754'
        }
      ]
    },
    example: {
      title: 'Beispiel: -3,875 in IEEE 754',
      steps: [
        {
          label: 'Schritt 1 – Vorzeichen',
          html: '<p>-3,875 ist negativ → <strong>V = 1</strong></p>'
        },
        {
          label: 'Schritt 2 – Betrag in Binär',
          html:
            '<p>3 = 11<sub>2</sub>, 0,875 = 0,111<sub>2</sub> → zusammen: <code>11,111<sub>2</sub></code></p>'
        },
        {
          label: 'Schritt 3 – Normalisieren',
          html:
            '<p>Komma so verschieben, dass vorne nur eine 1 steht:</p>'
            + '<p><code>11,111 = 1,1111 · 2¹</code> → Exponent = 1</p>'
        },
        {
          label: 'Schritt 4 – Exponent mit Bias +127',
          html:
            '<p>E = 1 + 127 = 128 → <code>1000 0000<sub>2</sub></code></p>'
        },
        {
          label: 'Schritt 5 – Mantisse auf 23 Bit',
          html:
            '<p>Nach dem Komma: <strong>1111</strong> → auf 23 Bit auffüllen: <code>11110000000000000000000</code></p>'
        },
        {
          label: 'Schritt 6 – Alles zusammen',
          html:
            '<p>V = 1, E = 10000000, M = 1111 0000…</p>',
          visuals: [
            {
              type: 'bit-layout',
              bits: '11000000011110000000000000000000',
              groups: [
                { start: 0, length: 1, color: '#FEE2E2', label: 'V=1' },
                { start: 1, length: 8, color: '#DBEAFE', label: 'E=128' },
                { start: 9, length: 23, color: '#D1FAE5', label: 'M=1111...' }
              ],
              label: '-3,875 fertig – Hex: C0780000'
            }
          ]
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Zahl ist 0 01111110 11000000000000000000000<sub>IEEE754</sub>?',
        options: ['0,75', '0,875', '1,75', '1,875'],
        correct: 1,
        explanation: 'V=0, E=126, Exponent=-1, M=11 → 1,11·2⁻¹ = 0,111₂ = 0,875.'
      },
      {
        type: 'multiple-choice',
        question: 'V-Bit für +1,375?',
        options: ['0', '1', 'kommt auf Exponent an', 'kommt auf Mantisse an'],
        correct: 0,
        explanation: 'V = 0 für positive Zahlen.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie viele Bits hat die Mantisse bei 32-Bit IEEE 754?',
        options: ['8', '16', '23', '32'],
        correct: 2,
        explanation: '1 (V) + 8 (E) + 23 (M) = 32.'
      },
      {
        type: 'multiple-choice',
        question: 'Was macht der Bias +127 beim Exponenten?',
        options: [
          'Verdoppelt den Exponenten.',
          'Vermeidet Rundungsfehler.',
          'Erlaubt negative Exponenten ohne extra Vorzeichen.',
          'Wird für die Mantisse verwendet.'
        ],
        correct: 2,
        explanation: 'Der Bias verschiebt den Bereich, sodass 8 Bit Exponenten von -126 bis +127 als positive Zahl speichern können.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: '<strong>Peter korrigieren – Schritt 1 (Vorzeichen).</strong> Peter soll -3,875 in IEEE 754 umwandeln. Welche Notation fürs Vorzeichen ist korrekt?',
        options: [
          '(-1)<sup>1</sup> = -1, V = 1',
          '(-1)<sup>0</sup> = 1, V = 1',
          's = 0 positiv, V = 0'
        ],
        correct: 0,
        explanation: 'Negative Zahl → V = 1. Die Notation (-1)<sup>1</sup> = -1 liefert das negative Vorzeichen. Option 2 ist widersprüchlich, Option 3 wäre für eine positive Zahl.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: '<strong>Peter korrigieren – Schritt 2 (Binärzahl).</strong> Welches Bitmuster entspricht <code>3,875<sub>10</sub></code>?',
        options: ['1,111', '11,11', '11,111'],
        correct: 2,
        explanation: '3,875 = 2 + 1 + 0,5 + 0,25 + 0,125 = 11,111<sub>2</sub>. (2¹+2⁰ ,2⁻¹+2⁻²+2⁻³).'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: '<strong>Peter korrigieren – Schritt 3 (normalisieren).</strong> Wie lautet 11,111<sub>2</sub> in normalisierter Form (ein Bit vor dem Komma, Rest als Potenz von 2)?',
        options: [
          '1,111 · 2<sup>0</sup>',
          '1,1111 · 2<sup>1</sup>',
          '1,111 · 2<sup>1</sup>'
        ],
        correct: 1,
        explanation: 'Komma um 1 Stelle nach links → 1,1111 · 2<sup>1</sup>. Die Mantissen-Bits NACH dem Komma lauten 1111 – die 1 vor dem Komma wird in IEEE 754 nicht gespeichert (implizit).'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: '<strong>Peter korrigieren – Schritt 4 (Exponent).</strong> Der tatsächliche Exponent ist 1. Wie sieht der gespeicherte Exponent E (8-Bit, Bias 127) aus?',
        options: [
          '0 + 127 = 0111 1111',
          '1 + 127 = 0111 1111',
          '1 + 127 = 1000 0000'
        ],
        correct: 2,
        explanation: '1 + 127 = 128, und 128 in 8-Bit binär = 1000 0000. Option 2 rechnet rechts, aber 1+127 ≠ 127!'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: '<strong>Peter korrigieren – Finale.</strong> Wie lautet -3,875 vollständig in IEEE 754 (V | E | M)?',
        options: [
          '0 | 10000000 | 11110000000000000000000',
          '1 | 01111111 | 11110000000000000000000',
          '1 | 10000000 | 11110000000000000000000',
          '1 | 10000000 | 11100000000000000000000'
        ],
        correct: 2,
        explanation: 'V = 1 (negativ), E = 1000 0000 (128 = 1+127), M = 1111 aufgefüllt auf 23 Bit mit Nullen. Ergibt 1 | 10000000 | 11110000000000000000000.'
      }
    ]
  },

  // ===== LEKTION 31: ASCII =====
  {
    id: 31,
    title: 'ASCII-Codierung',
    explanation: {
      html:
        '<h2>ASCII – Buchstaben als Zahlen</h2>'
        + '<p>Bisher haben wir Zahlen codiert. Aber ein Computer speichert auch <strong>Texte</strong>. Jeder Buchstabe bekommt eine eindeutige Zahl – das ist <strong>ASCII</strong>.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Morsecode:</strong> Morsecode übersetzt Buchstaben in Punkte und Striche. ASCII macht genau dasselbe für Computer – jeder Buchstabe bekommt eine Zahl zwischen 0 und 127. Gespeichert wird nur die Zahl, angezeigt wird der Buchstabe.'
        + '</div>'
        + '<h3>Grundlagen</h3>'
        + '<ul>'
        + '<li>128 Zeichen insgesamt (7 Bit: 2⁷ = 128)</li>'
        + '<li>Typischerweise angegeben als Hex oder Dezimal</li>'
        + '<li>Gespeichert in 1 Byte (8 Bit) – höchstes Bit meist 0</li>'
        + '</ul>'
        + '<h3>Wichtige Bereiche der Tabelle</h3>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Hex</th><th style="padding:6px;border:1px solid #ccc;">Dez</th><th style="padding:6px;border:1px solid #ccc;">Zeichen</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">00–1F</td><td style="padding:6px;border:1px solid #ccc;">0–31</td><td style="padding:6px;border:1px solid #ccc;">Steuerzeichen (LF, CR, TAB …)</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">20</td><td style="padding:6px;border:1px solid #ccc;">32</td><td style="padding:6px;border:1px solid #ccc;">Leerzeichen</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">30–39</td><td style="padding:6px;border:1px solid #ccc;">48–57</td><td style="padding:6px;border:1px solid #ccc;"><b>Ziffern 0–9</b></td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">41–5A</td><td style="padding:6px;border:1px solid #ccc;">65–90</td><td style="padding:6px;border:1px solid #ccc;"><b>Großbuchstaben A–Z</b></td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">61–7A</td><td style="padding:6px;border:1px solid #ccc;">97–122</td><td style="padding:6px;border:1px solid #ccc;"><b>Kleinbuchstaben a–z</b></td></tr>'
        + '</table>'
        + '<div class="tip-box">'
        + '<strong>Eselsbrücken (unbedingt merken!):</strong>'
        + '<ul>'
        + '<li><code>"0"</code> = 30<sub>16</sub> = 48<sub>10</sub></li>'
        + '<li><code>"A"</code> = 41<sub>16</sub> = 65<sub>10</sub></li>'
        + '<li><code>"a"</code> = 61<sub>16</sub> = 97<sub>10</sub> (immer +32 zum Großbuchstaben!)</li>'
        + '</ul>'
        + '</div>'
        + '<h3>Grenzen von ASCII</h3>'
        + '<p>ASCII kann keine Umlaute (ä, ö, ü, ß), keine Emojis, kein Chinesisch. Nachfolger ist <strong>UTF-8</strong> – aber die ersten 128 Zeichen sind dort identisch mit ASCII.</p>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Jeder Text-String in einer Programmiersprache, jede Textdatei, jede Netzwerk-Nachricht: alles sind Bytes, die nach ASCII/UTF-8 interpretiert werden. Wenn beim Öffnen einer Datei "Zeichensalat" erscheint, ist die Codierung falsch gesetzt. In der Klausur ist ASCII oft eine 2-Punkte-Aufgabe: "Codiere das Wort X in Hex." – schnelle Punkte, wenn du die Tabelle lesen kannst.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: "BodenSee" in ASCII',
      steps: [
        {
          label: 'Jeden Buchstaben nachschlagen',
          html:
            '<table style="border-collapse:collapse;margin:8px 0;font-family:monospace;">'
            + '<tr style="background:#f0f0f0"><th style="padding:6px;border:1px solid #ccc;">Zeichen</th><th style="padding:6px;border:1px solid #ccc;">Hex</th><th style="padding:6px;border:1px solid #ccc;">Binär</th></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">B</td><td style="padding:6px;border:1px solid #ccc;">42</td><td style="padding:6px;border:1px solid #ccc;">0100 0010</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">o</td><td style="padding:6px;border:1px solid #ccc;">6F</td><td style="padding:6px;border:1px solid #ccc;">0110 1111</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">d</td><td style="padding:6px;border:1px solid #ccc;">64</td><td style="padding:6px;border:1px solid #ccc;">0110 0100</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">e</td><td style="padding:6px;border:1px solid #ccc;">65</td><td style="padding:6px;border:1px solid #ccc;">0110 0101</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">n</td><td style="padding:6px;border:1px solid #ccc;">6E</td><td style="padding:6px;border:1px solid #ccc;">0110 1110</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">S</td><td style="padding:6px;border:1px solid #ccc;">53</td><td style="padding:6px;border:1px solid #ccc;">0101 0011</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">e</td><td style="padding:6px;border:1px solid #ccc;">65</td><td style="padding:6px;border:1px solid #ccc;">0110 0101</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">e</td><td style="padding:6px;border:1px solid #ccc;">65</td><td style="padding:6px;border:1px solid #ccc;">0110 0101</td></tr>'
            + '</table>'
            + '<p>Hex-Sequenz: <code>42 6F 64 65 6E 53 65 65</code> – 8 Byte im Speicher.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'ASCII-Code für "A"?',
        options: ['40', '41', '61', '65'],
        correct: 1,
        explanation: '"A" = 41<sub>16</sub> = 65<sub>10</sub>.'
      },
      {
        type: 'multiple-choice',
        question: 'Welches Zeichen hat den Code 30<sub>16</sub>?',
        options: ['Leerzeichen', 'Ziffer 0', 'Buchstabe O', 'Zeichen @'],
        correct: 1,
        explanation: '30<sub>16</sub> = 48<sub>10</sub> = Ziffer "0".'
      },
      {
        type: 'multiple-choice',
        question: 'Abstand zwischen "A" und "a" im ASCII-Code?',
        options: ['1', '16', '32', '64'],
        correct: 2,
        explanation: '"A"=65, "a"=97. Unterschied: 32. Das ist Bit 5 (2⁵=32).'
      },
      {
        type: 'multiple-choice',
        question: 'Warum kann ASCII "ä" nicht darstellen?',
        options: [
          'Nur 128 Zeichen – für amerikanisches Englisch gemacht.',
          'Umlaute sind zwei Buchstaben.',
          'ASCII hat nur Großbuchstaben.',
          'Umlaute wurden erst mit Unicode erfunden.'
        ],
        correct: 0,
        explanation: 'ASCII ist 7-Bit → 128 Zeichen. Für Umlaute, Emojis etc. gibt es Unicode/UTF-8.'
      }
    ]
  }

];
