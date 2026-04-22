const LessonsA2 = [

  // ===== LEKTION 27: Binäre Addition =====
  {
    id: 27,
    title: 'Binäre Addition (schriftlich)',
    explanation: {
      html:
        '<h2>Binäre Addition (schriftlich)</h2>'
        + '<p>Zwei Binärzahlen werden genauso addiert wie Dezimalzahlen – nur dass der Übertrag schon bei der Summe 2 entsteht statt bei 10.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Denk an einen Kilometerzähler im Auto. Wenn der Zähler bei 999 steht und du 1 km weiter fährst, springt er auf 1000 – alle drei Stellen wechseln, weil die 9+1 eine 10 ergibt und nach links übergeht. Im Binärsystem passiert das schon viel früher: 1+1 ergibt 10. Das Prinzip Übertrag ist identisch, nur die Schwelle ist niedriger.'
        + '</div>'
        + '<h3>Die vier Grundregeln</h3>'
        + '<div class="info-card" style="padding:12px;font-family:monospace;font-size:1.1em;">'
        + '0 + 0 = 0<br>'
        + '0 + 1 = 1<br>'
        + '1 + 0 = 1<br>'
        + '1 + 1 = 10  &nbsp;&nbsp;← das ist eine 0 mit Übertrag 1<br>'
        + '1 + 1 + 1 = 11 ← eine 1 mit Übertrag 1 (wenn der Übertrag aus der vorherigen Stelle mitgerechnet wird)'
        + '</div>'
        + '<h3>Schriftliches Verfahren</h3>'
        + '<ol>'
        + '<li>Zahlen untereinander schreiben, rechtsbündig</li>'
        + '<li>Von rechts nach links Stelle für Stelle addieren</li>'
        + '<li>Bei Summe &gt; 1 den Übertrag in die nächste Stelle (links) notieren</li>'
        + '<li>Übertrag der nächsten Stelle immer mit addieren</li>'
        + '</ol>'
        + '<div class="warning-box">'
        + '<strong>Überlauf (Overflow):</strong> Wenn ganz links noch ein Übertrag entsteht und wir nur eine feste Bit-Breite haben (z.B. 8 Bit), geht dieser Übertrag verloren. Das ist kein Fehler in der Rechnung, sondern der Grund, warum wir später das Zweierkomplement brauchen.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Jeder Prozessor hat ein <em>Addierwerk</em> im Kern – eine Schaltung aus Halb- und Volladdierern (siehe C2), die genau diese Regeln in Hardware umsetzt. Wer die Addition im Kopf versteht, versteht auch das Rechenwerk. Und für die Klausur: Jede Aufgabe zum Zweierkomplement (nächste Lektionen) ist im Grunde eine verkappte binäre Addition.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: 7 + 10 in Binär',
      steps: [
        {
          label: 'Schritt 1 – Zahlen umrechnen',
          html:
            '<p>7<sub>10</sub> = 0000 0111<sub>2</sub></p>'
            + '<p>10<sub>10</sub> = 0000 1010<sub>2</sub></p>'
            + '<p>Beide als 8-Bit, damit das Format einheitlich ist.</p>'
        },
        {
          label: 'Schritt 2 – Schriftlich addieren',
          html:
            '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;font-family:monospace;">'
            + '    0000 0111\n'
            + '  + 0000 1010\n'
            + '  ---------\n'
            + '    0001 110        ← Übertrag\n'
            + '  ---------\n'
            + '    0001 0001       ← Ergebnis</pre>'
            + '<p>Stelle für Stelle:</p>'
            + '<ul>'
            + '<li>Stelle 2⁰: 1+0 = 1</li>'
            + '<li>Stelle 2¹: 1+1 = 0 Übertrag 1</li>'
            + '<li>Stelle 2²: 1+0+1(Ü) = 0 Übertrag 1</li>'
            + '<li>Stelle 2³: 0+1+1(Ü) = 0 Übertrag 1</li>'
            + '<li>Stelle 2⁴: 0+0+1(Ü) = 1</li>'
            + '<li>Rest: 0</li>'
            + '</ul>'
        },
        {
          label: 'Schritt 3 – Ergebnis prüfen',
          html:
            '<p>0001 0001<sub>2</sub> = 16 + 1 = 17<sub>10</sub>. Probe: 7 + 10 = 17 ✓</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie lautet 0011 + 0101 in Binär?',
        options: ['1000', '0110', '1010', '0111'],
        correct: 0,
        explanation: '0011 (=3) + 0101 (=5) = 1000 (=8). Rechts: 1+1=0 Übertrag 1, dann 1+0+1(Ü)=0 Übertrag 1, dann 0+1+1(Ü)=0 Übertrag 1, dann 0+0+1(Ü)=1. Ergebnis: 1000.'
      },
      {
        type: 'multiple-choice',
        question: 'Was passiert bei 1111 1111 + 0000 0001 in 8-Bit Darstellung?',
        options: [
          'Das Ergebnis ist 1 0000 0000 (9 Bits).',
          'Das Ergebnis ist 0000 0000 (8 Bits) mit Überlauf.',
          'Das Ergebnis ist 1111 1110.',
          'Die Rechnung ist ungültig.'
        ],
        correct: 1,
        explanation: 'In 8 Bit: Alle Bits werden zu 0, der letzte Übertrag fällt raus (Überlauf). Interpretiert als vorzeichenlos: 255 + 1 = 256, aber nur 8 Bit verfügbar, also Ergebnis 0. Das ist der klassische Überlauf.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Summe ist korrekt? 1011 + 1101 = ?',
        options: ['10100', '11000', '11001', '10001'],
        correct: 1,
        explanation: '1011 (=11) + 1101 (=13) = 11000 (=24). Rechts: 1+1=0+Ü, 1+0+Ü=0+Ü, 0+1+Ü=0+Ü, 1+1+Ü=1+Ü, Rest 1. Ergebnis: 11000.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum entsteht in der Binäraddition ein Übertrag schon bei 1+1?',
        options: [
          'Weil Computer schneller rechnen wollen.',
          'Weil es im Binärsystem keine Ziffer 2 gibt – 2 wird zu 10.',
          'Weil der Übertrag immer gleich ist wie im Dezimalsystem.',
          'Weil Binärzahlen rückwärts gelesen werden.'
        ],
        correct: 1,
        explanation: 'Im Binärsystem sind nur 0 und 1 erlaubt. Sobald eine Stelle den Wert 2 erreicht, wird sie zu einer 0 mit Übertrag 1 in die nächste Stelle – genau wie im Dezimalsystem die 10 zur 0 mit Übertrag wird.'
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
        + '<p>Computer speichern Zahlen nur als Bits – es gibt kein "Minuszeichen". Die Frage: Wie stellen wir <strong>negative Zahlen</strong> dar? Eine naive Idee wäre ein Vorzeichenbit – aber das bringt Probleme beim Rechnen. Das Einerkomplement ist die Vorstufe zur Lösung.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Stell dir einen Lichtschalter vor. Wenn alle Schalter in deinem Haus angeschaltet sind und du den Zustand "umkehren" willst (alles aus → alles an, und umgekehrt), machst du aus jedem ON ein OFF und umgekehrt. Genau das ist die Idee des Einerkomplements: aus 0 wird 1 und aus 1 wird 0 – jedes Bit wird <em>invertiert</em>.'
        + '</div>'
        + '<h3>Das Verfahren</h3>'
        + '<p><strong>Positive Zahlen</strong>: Ganz normal in Binär dargestellt (führendes Bit 0).</p>'
        + '<p><strong>Negative Zahlen</strong>: Erst die positive Zahl in Binär, dann <strong>alle Bits invertieren</strong>.</p>'
        + '<div class="info-card" style="padding:12px;font-family:monospace;">'
        + '+37 = 0010 0101 (8-Bit Binär)<br>'
        + '↓ invertieren<br>'
        + '-37 = 1101 1010 (Einerkomplement)'
        + '</div>'
        + '<div class="tip-box">'
        + '<strong>Erkennen:</strong> Das höchste (linke) Bit zeigt das Vorzeichen an. 0 = positiv, 1 = negativ. Das ist keine Konvention, sondern ergibt sich automatisch aus dem Invertieren.'
        + '</div>'
        + '<h3>Der große Nachteil: Zwei Nullen</h3>'
        + '<p>Das Einerkomplement hat ein Problem – es gibt zwei Darstellungen der Null:</p>'
        + '<div class="info-card" style="padding:10px;font-family:monospace;">'
        + '+0 = 0000 0000 (positive Null)<br>'
        + '-0 = 1111 1111 (negative Null – durch Invertieren von +0)'
        + '</div>'
        + '<p>In der Praxis führt das zu Fehlern bei bestimmten Rechnungen. Darum wird in fast allen modernen Programmiersprachen und Prozessoren das <strong>Zweierkomplement</strong> (nächste Lektion) verwendet, nicht das Einerkomplement.</p>'
        + '<h3>Wertebereich mit 8 Bits</h3>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Codierung</th><th style="padding:6px;border:1px solid #ccc;">Kleinste Zahl</th><th style="padding:6px;border:1px solid #ccc;">Größte Zahl</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Normal-Binär (unsigned)</td><td style="padding:6px;border:1px solid #ccc;">0</td><td style="padding:6px;border:1px solid #ccc;">255</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Einerkomplement</td><td style="padding:6px;border:1px solid #ccc;">-127</td><td style="padding:6px;border:1px solid #ccc;">+127</td></tr>'
        + '</table>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Obwohl das Einerkomplement in der Praxis nicht verwendet wird, ist es die logische Zwischenstufe zum Zweierkomplement – und in der Klausur wird es oft gemeinsam abgefragt. Wer EK versteht, versteht die Motivation für ZK automatisch: "Warum noch +1?" → "Um die doppelte Null zu eliminieren."'
        + '</div>',
      visuals: [
        {
          type: 'bit-layout',
          bits: '00100101',
          groups: [{ start: 0, length: 1, color: '#DCFCE7', label: '+' }, { start: 1, length: 7, color: '#F3F4F6', label: '37 binär' }],
          label: '+37 normal (führendes Bit = 0)'
        },
        {
          type: 'bit-layout',
          bits: '11011010',
          groups: [{ start: 0, length: 1, color: '#FEE2E2', label: '−' }, { start: 1, length: 7, color: '#F3F4F6', label: 'invertiert' }],
          label: '-37 im Einerkomplement (alle Bits gekippt)'
        }
      ]
    },
    example: {
      title: 'Beispiel: -42 im 8-Bit Einerkomplement',
      steps: [
        {
          label: 'Schritt 1 – Positive Zahl in Binär',
          html:
            '<p>+42<sub>10</sub> umrechnen: 32 + 8 + 2 = 42</p>'
            + '<p><code>+42<sub>10</sub> = 0010 1010<sub>2</sub></code> (8 Bit)</p>'
        },
        {
          label: 'Schritt 2 – Alle Bits invertieren',
          html:
            '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;font-family:monospace;">'
            + '+42:  0010 1010\n'
            + '        ↓ invertieren (0↔1)\n'
            + '-42:  1101 0101 (EK)</pre>'
            + '<p><code>-42<sub>10</sub> = 1101 0101<sub>EK</sub></code></p>'
        },
        {
          label: 'Probe: EK zurück in Dezimal',
          html:
            '<p>Gegeben ist eine EK-Zahl mit führender 1 (= negativ): Erst invertieren, dann als positive Binärzahl lesen, dann das Minuszeichen voranstellen.</p>'
            + '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;">'
            + '1101 0101  → invertieren →  0010 1010 = 42\n'
            + 'Vorzeichen war negativ  →  -42 ✓</pre>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie lautet -39<sub>10</sub> im 8-Bit Einerkomplement?',
        options: ['1101 1000', '1101 1001', '1101 0110', '0010 0111'],
        correct: 0,
        explanation: '+39 = 0010 0111. Invertieren: 1101 1000. Das ist das Einerkomplement von -39.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Dezimalzahl ist 1101 0111<sub>EK</sub>?',
        options: ['-40', '-39', '-41', '-23'],
        correct: 0,
        explanation: 'Führende 1 = negativ. Invertieren: 0010 1000 = 32+8 = 40. Also: -40<sub>10</sub>.'
      },
      {
        type: 'multiple-choice',
        question: 'Welches Problem hat das Einerkomplement?',
        options: [
          'Es kann keine negativen Zahlen darstellen.',
          'Es gibt zwei verschiedene Darstellungen der Null (+0 und -0).',
          'Es braucht 16 Bit pro Zahl.',
          'Es funktioniert nur bei Primzahlen.'
        ],
        correct: 1,
        explanation: 'Das zentrale Problem: 0000 0000 und 1111 1111 beide "Null" – einmal +0, einmal -0. Das führt zu Rechenfehlern, weshalb in der Praxis das Zweierkomplement verwendet wird.'
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Wertebereich ist mit 8-Bit Einerkomplement darstellbar?',
        options: [
          '0 bis +255',
          '-128 bis +127',
          '-127 bis +127',
          '-256 bis +256'
        ],
        correct: 2,
        explanation: '8 Bit → 2⁸ = 256 Werte. Davon ist 1 Bit das Vorzeichen, also 128 positive (0 bis +127) und 128 negative Werte (-0 bis -127). Durch die doppelte Null nur von -127 bis +127.'
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
        + '<p>Das Zweierkomplement ist <strong>die Standard-Darstellung</strong> für vorzeichenbehaftete Ganzzahlen in fast allen Programmiersprachen und Prozessoren. Es löst das "Zwei-Nullen-Problem" des Einerkomplements mit einem eleganten Trick: <em>+1 drauf</em>.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Denk an einen Tachometer, der rückwärts läuft. Wenn du bei 0 stehst und eine Umdrehung rückwärts drehst, kommt nicht -0 heraus, sondern der größte negative Wert (z.B. 99999 bei einem 5-stelligen Tacho). Genau das macht das Zweierkomplement mit Binärzahlen: Die "Uhr" wird elegant geschlossen, Null kommt nur einmal vor, und Addition/Subtraktion funktionieren ohne Sonderfälle.'
        + '</div>'
        + '<h3>Das Verfahren</h3>'
        + '<p><strong>Positive Zahlen</strong>: Wie immer, normales Binär (führendes Bit 0).</p>'
        + '<p><strong>Negative Zahlen</strong>: <em>Drei Schritte</em>:</p>'
        + '<ol>'
        + '<li>Positive Zahl in Binär schreiben</li>'
        + '<li>Alle Bits invertieren (= Einerkomplement)</li>'
        + '<li><strong>+1</strong> addieren</li>'
        + '</ol>'
        + '<div class="info-card" style="padding:12px;font-family:monospace;">'
        + '+37 = 0010 0101 (8-Bit Binär)<br>'
        + '↓ invertieren<br>'
        + '1101 1010 (Einerkomplement)<br>'
        + '↓ +1 addieren<br>'
        + '-37 = 1101 1011 (Zweierkomplement)'
        + '</div>'
        + '<h3>Warum löst das +1 das Problem?</h3>'
        + '<p>Im EK gab es -0 = 1111 1111. Addieren wir +1 drauf: 1111 1111 + 1 = 1 0000 0000. Das höchste Bit fällt weg (Überlauf), Ergebnis 0000 0000 = +0. Die doppelte Null ist eliminiert!</p>'
        + '<h3>Rechnen im Zweierkomplement</h3>'
        + '<p>Der riesige Vorteil: Subtraktion wird zur Addition. Statt <code>a - b</code> rechnest du <code>a + (-b)</code>, indem du -b im ZK darstellst und einfach addierst. Die Hardware braucht nur <em>einen</em> Addierer – keine separate Subtrahier-Schaltung.</p>'
        + '<div class="warning-box">'
        + '<strong>Übertrag ins Vorzeichen-Bit:</strong> Beim Rechnen im ZK ignorierst du den letzten Übertrag (9. Bit bei 8-Bit-Rechnung). Das ist kein Fehler – so funktioniert das Verfahren.'
        + '</div>'
        + '<h3>Wertebereich mit 8 Bits</h3>'
        + '<p>8-Bit ZK stellt Werte von <strong>-128 bis +127</strong> dar (eine mehr auf der Negativ-Seite, weil die Null nur einmal vorkommt).</p>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Wenn du in Java eine <code>int</code>-Variable nutzt, wird sie als 32-Bit ZK gespeichert. Wenn du in Python -5 tippst, liegt sie intern im ZK. Wenn ein Messwert überläuft und negativ wird, ist das ZK-Verhalten. Wer ZK nicht versteht, versteht eine riesige Klasse von Bugs nicht. In der Klausur ist es eine sichere 3-Punkte-Aufgabe mit klarem Schema.'
        + '</div>',
      visuals: [
        {
          type: 'bit-layout',
          bits: '00100101',
          groups: [{ start: 0, length: 1, color: '#DCFCE7', label: 'V' }, { start: 1, length: 7, color: '#F3F4F6', label: '+37' }],
          label: '+37 als 8-Bit ZK (führende 0 = positiv)'
        },
        {
          type: 'bit-layout',
          bits: '11011010',
          groups: [{ start: 0, length: 1, color: '#FEE2E2', label: 'V' }, { start: 1, length: 7, color: '#F3F4F6', label: 'EK' }],
          label: 'Schritt 1: Einerkomplement (alle Bits invertiert)'
        },
        {
          type: 'bit-layout',
          bits: '11011011',
          groups: [{ start: 0, length: 1, color: '#FEE2E2', label: 'V' }, { start: 1, length: 7, color: '#FEF3C7', label: 'ZK (+1)' }],
          label: 'Schritt 2: +1 addiert → -37 im Zweierkomplement'
        }
      ]
    },
    example: {
      title: 'Beispiel: 45 + (-37) im 8-Bit ZK',
      steps: [
        {
          label: 'Schritt 1 – Beide Zahlen in ZK',
          html:
            '<p>+45 = 0010 1101 (positiv, bleibt wie es ist)</p>'
            + '<p>-37 umwandeln:</p>'
            + '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;font-family:monospace;">'
            + '+37 = 0010 0101\n'
            + '    → invertieren: 1101 1010\n'
            + '    → +1:          1101 1011\n'
            + '-37 = 1101 1011 (ZK)</pre>'
        },
        {
          label: 'Schritt 2 – Addieren',
          html:
            '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;font-family:monospace;">'
            + '    0010 1101   (+45)\n'
            + '  + 1101 1011   (-37 im ZK)\n'
            + '  ----------\n'
            + '  1 1111 1     ← Übertrag\n'
            + '  ----------\n'
            + ' (1)0000 1000  ← letzter Übertrag wird ignoriert\n'
            + '     0000 1000 (ZK) = +8</pre>'
            + '<p>Probe: 45 - 37 = 8 ✓</p>'
        },
        {
          label: 'Schritt 3 – Ergebnis interpretieren',
          html:
            '<p>Das Ergebnis <code>0000 1000<sub>ZK</sub></code> hat eine führende 0 – also positiv. Direkt als Binär lesen: 8<sub>10</sub>.</p>'
            + '<div class="tip-box">Bei negativem Ergebnis (führende 1): Zuerst -1 abziehen, dann invertieren, dann als positive Zahl lesen und das Minuszeichen voranstellen.</div>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie lautet -42<sub>10</sub> im 8-Bit Zweierkomplement?',
        options: ['1101 0110', '1101 0101', '0010 1010', '1010 1101'],
        correct: 0,
        explanation: '+42 = 0010 1010. Invertieren: 1101 0101. +1: 1101 0110. Das ist das ZK von -42.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Dezimalzahl ist 1110 1101<sub>ZK</sub>?',
        options: ['-18', '-19', '-20', '-17'],
        correct: 1,
        explanation: 'Führende 1 = negativ. Umwandlung rückwärts: -1: 1110 1100. Invertieren: 0001 0011 = 16+2+1 = 19. Also -19<sub>10</sub>.'
      },
      {
        type: 'multiple-choice',
        question: 'Berechne 29 + (-13) im 8-Bit ZK. Was kommt heraus?',
        options: ['+16', '+17', '+15', '-16'],
        correct: 0,
        explanation: '+29 = 0001 1101. -13 im ZK: +13 = 0000 1101, invertieren = 1111 0010, +1 = 1111 0011. Addition: 0001 1101 + 1111 0011 = (1)0001 0000. Letzter Übertrag weg, Ergebnis 0001 0000 = +16. Probe: 29-13 = 16 ✓'
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Wertebereich ist mit 8-Bit Zweierkomplement darstellbar?',
        options: [
          '0 bis +255',
          '-127 bis +127',
          '-128 bis +127',
          '-128 bis +128'
        ],
        correct: 2,
        explanation: '8 Bit ZK: -128 bis +127. Weil die Null nur einmal vorkommt, "gewinnt" die negative Seite einen Wert (-128) gegenüber dem Einerkomplement.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum ist das Zweierkomplement in der Praxis wichtiger als das Einerkomplement?',
        options: [
          'Weil es einfacher zu berechnen ist.',
          'Weil es nur eine Darstellung der Null hat und Addition/Subtraktion ohne Sonderfälle funktionieren.',
          'Weil es mehr Zahlen darstellen kann.',
          'Weil es weniger Speicher braucht.'
        ],
        correct: 1,
        explanation: 'Genau: Nur eine Null + einheitliche Rechenregeln. Darum nutzen alle modernen Prozessoren und Sprachen ZK für Ganzzahlen.'
      }
    ]
  },

  // ===== LEKTION 30: IEEE 754 =====
  {
    id: 30,
    title: 'IEEE 754 Gleitkommazahlen',
    explanation: {
      html:
        '<h2>IEEE 754 – Gleitkommazahlen (32 Bit)</h2>'
        + '<p>Zweierkomplement kann nur Ganzzahlen. Wie speichert der Computer Zahlen wie 3,14 oder 0,0001? Die Antwort: <strong>IEEE 754</strong> – ein internationaler Standard für Gleitkomma-Zahlen (Floating Point).</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Wissenschaftliche Notation kennst du aus Physik: 3,1 · 10⁸ m/s (Lichtgeschwindigkeit) oder 1,6 · 10⁻¹⁹ C (Elementarladung). Du schreibst jede Zahl als <em>Mantisse × 10-Potenz</em>. IEEE 754 macht genau das – nur mit Basis 2 und in Binär. Eine Zahl = Vorzeichen × Mantisse × 2^Exponent.'
        + '</div>'
        + '<h3>Aufbau (32-Bit Float)</h3>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;width:100%;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Feld</th><th style="padding:6px;border:1px solid #ccc;">Bits</th><th style="padding:6px;border:1px solid #ccc;">Bedeutung</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>V</b> – Vorzeichen</td><td style="padding:6px;border:1px solid #ccc;">1 Bit</td><td style="padding:6px;border:1px solid #ccc;">0 = positiv, 1 = negativ</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>E</b> – Exponent</td><td style="padding:6px;border:1px solid #ccc;">8 Bits</td><td style="padding:6px;border:1px solid #ccc;">Exponent + 127 (Bias)</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>M</b> – Mantisse</td><td style="padding:6px;border:1px solid #ccc;">23 Bits</td><td style="padding:6px;border:1px solid #ccc;">Nachkomma (die 1, vor dem Komma ist implizit)</td></tr>'
        + '</table>'
        + '<p>So sind die 32 Bits angeordnet (als Beispiel die Zahl +1,0 dargestellt):</p>'
        + '<h3>Die Formel</h3>'
        + '<div class="info-card" style="padding:12px;text-align:center;font-size:1.1em;">'
        + 'Zahl = (-1)<sup>V</sup> · 1,M · 2<sup>(E - 127)</sup>'
        + '</div>'
        + '<p>Der "Bias" von 127 ist ein Trick: Der Exponent kann negativ sein, wird aber im Speicher als positive 8-Bit-Zahl abgelegt. E = 0 bedeutet Exponent -127, E = 255 bedeutet Exponent +128 (beide reserviert), dazwischen normal.</p>'
        + '<h3>Richtung 1: IEEE 754 → Dezimal</h3>'
        + '<ol>'
        + '<li>Bits aufteilen in V (1), E (8), M (23)</li>'
        + '<li>V ablesen → Vorzeichen</li>'
        + '<li>E-127 rechnen → Exponent</li>'
        + '<li>Mantisse mit impliziter 1 davor: 1,M</li>'
        + '<li>Zahl zusammensetzen und Komma verschieben</li>'
        + '</ol>'
        + '<h3>Richtung 2: Dezimal → IEEE 754</h3>'
        + '<ol>'
        + '<li>Vorzeichen bestimmen → V = 0 oder 1</li>'
        + '<li>Betrag in Binär umrechnen</li>'
        + '<li>Normalisieren: Komma so verschieben, dass vor dem Komma <em>genau eine 1</em> steht (1,xxx · 2^n)</li>'
        + '<li>Exponent ermitteln (Anzahl Verschiebungen), dann + 127 rechnen → E (8-Bit-Binär)</li>'
        + '<li>Mantisse: Stellen nach dem Komma, auf 23 Bit mit 0en auffüllen</li>'
        + '<li>V | E | M zusammensetzen (32 Bit)</li>'
        + '</ol>'
        + '<div class="warning-box">'
        + '<strong>Die implizite führende 1:</strong> Bei der normalisierten Form <code>1,M</code> <em>speichert</em> der Computer die führende 1 gar nicht – sie wird vorausgesetzt. Darum hat die Mantisse effektiv 24 Bit Genauigkeit.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Jedes <code>float</code> in Java/C/Python/JavaScript ist IEEE 754. Wenn 0,1 + 0,2 nicht exakt 0,3 ergibt (berühmter Bug-Klassiker!), liegt das an IEEE 754. In der Klausur ist das die "große" Rechenaufgabe für 2,5 Punkte – aber mit klarem Schema gut machbar.'
        + '</div>',
      visuals: [
        {
          type: 'bit-layout',
          bits: '00111111100000000000000000000000',
          groups: [
            { start: 0, length: 1, color: '#FEF3C7', label: 'V' },
            { start: 1, length: 8, color: '#DBEAFE', label: 'Exponent (E)' },
            { start: 9, length: 23, color: '#D1FAE5', label: 'Mantisse (M)' }
          ],
          label: 'IEEE 754: Darstellung von +1,0 (V=0, E=127, M=0)'
        }
      ]
    },
    example: {
      title: 'Beispiel: -3,875 in IEEE 754 (32 Bit)',
      steps: [
        {
          label: 'Schritt 1 – Vorzeichen',
          html:
            '<p>-3,875 ist negativ → <strong>V = 1</strong></p>'
        },
        {
          label: 'Schritt 2 – Betrag binär',
          html:
            '<p>3 = 11<sub>2</sub></p>'
            + '<p>0,875: 0,875·2 = 1,75 (Vorkomma 1); 0,75·2 = 1,5 (Vorkomma 1); 0,5·2 = 1,0 (Vorkomma 1) → 0,111<sub>2</sub></p>'
            + '<p>Zusammen: 3,875<sub>10</sub> = <code>11,111<sub>2</sub></code></p>'
        },
        {
          label: 'Schritt 3 – Normalisieren',
          html:
            '<p>Komma so verschieben, dass davor nur eine 1 steht:</p>'
            + '<p><code>11,111<sub>2</sub> = 1,1111 · 2¹</code></p>'
            + '<p>Exponent = 1</p>'
        },
        {
          label: 'Schritt 4 – Exponent mit Bias',
          html:
            '<p>E = Exponent + 127 = 1 + 127 = 128 = <code>1000 0000<sub>2</sub></code></p>'
        },
        {
          label: 'Schritt 5 – Mantisse',
          html:
            '<p>Nach dem Komma: 1111 → auf 23 Bit auffüllen:</p>'
            + '<p><code>M = 1111 0000 0000 0000 0000 000</code></p>'
        },
        {
          label: 'Schritt 6 – Zusammensetzen',
          html:
            '<p>V = 1, E = 10000000, M = 11110000… (auf 23 Bit aufgefüllt)</p>'
            + '<p>So sieht die fertige 32-Bit-Zahl aus:</p>',
          visuals: [
            {
              type: 'bit-layout',
              bits: '11000000011110000000000000000000',
              groups: [
                { start: 0, length: 1, color: '#FEE2E2', label: 'V=1' },
                { start: 1, length: 8, color: '#DBEAFE', label: 'E=128' },
                { start: 9, length: 23, color: '#D1FAE5', label: 'M=1111 0…' }
              ],
              label: '-3,875 als IEEE 754 – Hex: C07C0000'
            }
          ]
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Dezimalzahl entspricht 0 01111110 11000000000000000000000<sub>IEEE754</sub>?',
        options: ['0,75', '0,875', '1,75', '1,875'],
        correct: 1,
        explanation: 'V=0 (pos.). E=01111110=126, also Exponent=126-127=-1. M=11 → 1,11·2⁻¹ = 0,111<sub>2</sub> = ½+¼+⅛ = 0,875.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie lautet das Vorzeichen-Bit V für die Zahl +1,375?',
        options: ['0', '1', 'abhängig vom Exponenten', 'abhängig von der Mantisse'],
        correct: 0,
        explanation: 'V=0 für positive Zahlen, V=1 für negative. +1,375 ist positiv → V=0.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie viele Bits hat die Mantisse bei einer 32-Bit Gleitkommazahl nach IEEE 754?',
        options: ['8', '16', '23', '32'],
        correct: 2,
        explanation: '32 Bit total = 1 (V) + 8 (E) + 23 (M). Die implizite führende 1 der Mantisse wird nicht gespeichert, zählt aber zur effektiven Genauigkeit dazu.'
      },
      {
        type: 'multiple-choice',
        question: 'Was bewirkt der Bias von 127 beim Exponenten?',
        options: [
          'Er macht den Exponenten doppelt so groß.',
          'Er verhindert Rundungsfehler.',
          'Er erlaubt negative Exponenten, ohne extra Vorzeichen-Bit für E zu brauchen.',
          'Er wird für die Mantisse verwendet.'
        ],
        correct: 2,
        explanation: 'Der Bias verschiebt den Exponenten-Bereich, sodass die 8 Bit E Exponenten von -126 bis +127 abdecken können – alles als positive 8-Bit-Zahl speicherbar.'
      }
    ]
  },

  // ===== LEKTION 31: ASCII =====
  {
    id: 31,
    title: 'ASCII-Codierung',
    explanation: {
      html:
        '<h2>ASCII-Codierung</h2>'
        + '<p>Bisher haben wir Zahlen codiert. Aber ein Computer speichert auch <strong>Text</strong> – und Text ist intern auch nur eine Folge von Zahlen. Die Übersetzung "Buchstabe ↔ Zahl" regelt ASCII.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Morsecode übersetzt Buchstaben in Punkte und Striche, damit ein Telegraph sie übertragen kann. ASCII macht dasselbe für Computer – jeder Buchstabe, jede Ziffer und jedes Sonderzeichen bekommt eine eindeutige Zahl zwischen 0 und 127 (7 Bit). Der Computer speichert nur die Zahl, zeigt aber das Zeichen an.'
        + '</div>'
        + '<h3>Die Grundlagen</h3>'
        + '<ul>'
        + '<li><strong>ASCII</strong> = <em>American Standard Code for Information Interchange</em></li>'
        + '<li>Umfasst 128 Zeichen (7 Bit: 2⁷ = 128)</li>'
        + '<li>Üblicherweise als Hex oder Dezimal angegeben</li>'
        + '<li>Gespeichert wird in 8 Bit (1 Byte) – das höchste Bit ist meist 0</li>'
        + '</ul>'
        + '<h3>Wichtige Bereiche der Tabelle</h3>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Bereich (Hex)</th><th style="padding:6px;border:1px solid #ccc;">Bereich (Dez)</th><th style="padding:6px;border:1px solid #ccc;">Zeichen</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">00–1F</td><td style="padding:6px;border:1px solid #ccc;">0–31</td><td style="padding:6px;border:1px solid #ccc;">Steuerzeichen (z.B. LF, CR, TAB)</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">20</td><td style="padding:6px;border:1px solid #ccc;">32</td><td style="padding:6px;border:1px solid #ccc;">Leerzeichen</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">30–39</td><td style="padding:6px;border:1px solid #ccc;">48–57</td><td style="padding:6px;border:1px solid #ccc;">Ziffern 0–9</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">41–5A</td><td style="padding:6px;border:1px solid #ccc;">65–90</td><td style="padding:6px;border:1px solid #ccc;">Großbuchstaben A–Z</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">61–7A</td><td style="padding:6px;border:1px solid #ccc;">97–122</td><td style="padding:6px;border:1px solid #ccc;">Kleinbuchstaben a–z</td></tr>'
        + '</table>'
        + '<div class="tip-box">'
        + '<strong>Merksätze zum Rechnen ohne Tabelle:</strong>'
        + '<ul>'
        + '<li><code>"0"</code> = 30<sub>16</sub> = 48<sub>10</sub> (also <code>"5"</code> = 35<sub>16</sub>)</li>'
        + '<li><code>"A"</code> = 41<sub>16</sub> = 65<sub>10</sub> (also <code>"C"</code> = 43<sub>16</sub>)</li>'
        + '<li><code>"a"</code> = 61<sub>16</sub> = 97<sub>10</sub> (immer 32 mehr als Großbuchstabe)</li>'
        + '</ul>'
        + '</div>'
        + '<h3>Grenzen von ASCII</h3>'
        + '<p>ASCII kann keine Umlaute (ä, ö, ü, ß), keine Emojis, keine chinesischen Zeichen. Darum wurde es durch <strong>Unicode</strong> (UTF-8) ersetzt – aber die ersten 128 Unicode-Zeichen sind identisch mit ASCII, daher ist ASCII die Basis von allem.</p>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Jeder String in einer Programmiersprache, jede Datei, jede Netzwerk-Nachricht: alles Bytes, die per ASCII/UTF-8 interpretiert werden. Wenn beim Dateiöffnen "Zeichensalat" erscheint, ist die Codierung falsch. In der Klausur ist ASCII oft eine 2-Punkte-Aufgabe: "Codiere das Wort X in Hex."'
        + '</div>'
    },
    example: {
      title: 'Beispiel: "BodenSee" in ASCII',
      steps: [
        {
          label: 'Schritt 1 – Jeden Buchstaben nachschlagen',
          html:
            '<p>Aus der ASCII-Tabelle (zeilenweise, Spalte = letzte Hexziffer):</p>'
            + '<table style="border-collapse:collapse;margin:8px 0;font-family:monospace;">'
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
        },
        {
          label: 'Schritt 2 – Gesamt-String',
          html:
            '<p>Als Hex-Sequenz: <code>42 6F 64 65 6E 53 65 65</code></p>'
            + '<p>Das Wort "BodenSee" belegt 8 Byte im Speicher.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welcher Hex-Wert entspricht dem Buchstaben "A" in ASCII?',
        options: ['40', '41', '61', '65'],
        correct: 1,
        explanation: '"A" = 41<sub>16</sub> = 65<sub>10</sub>. Ein Klassiker – den solltest du auswendig können.'
      },
      {
        type: 'multiple-choice',
        question: 'Welches Zeichen hat den ASCII-Code 30<sub>16</sub>?',
        options: ['Leerzeichen', '"0" (Ziffer Null)', '"O" (Großbuchstabe)', '"@"'],
        correct: 1,
        explanation: '30<sub>16</sub> = 48<sub>10</sub> = Ziffer "0". Ziffern starten bei 30 (Null) und enden bei 39 (Neun).'
      },
      {
        type: 'multiple-choice',
        question: 'Wie groß ist der Abstand zwischen den ASCII-Codes von "A" und "a"?',
        options: ['1', '16', '32', '64'],
        correct: 2,
        explanation: '"A" = 41<sub>16</sub> = 65<sub>10</sub>, "a" = 61<sub>16</sub> = 97<sub>10</sub>. Abstand: 32. Das ist einfach ein gesetztes Bit 5 (2⁵=32) – darum lassen sich Groß/Klein umschalten, indem man Bit 5 kippt.'
        },
      {
        type: 'multiple-choice',
        question: 'Warum kann ASCII keine deutschen Umlaute wie "ä" darstellen?',
        options: [
          'Weil ASCII nur 128 Zeichen hat und für amerikanisches Englisch entworfen wurde.',
          'Weil Umlaute aus zwei Buchstaben bestehen.',
          'Weil ASCII nur Großbuchstaben enthält.',
          'Weil Umlaute eine Erfindung von Unicode sind.'
        ],
        correct: 0,
        explanation: 'ASCII mit 7 Bit hat nur 128 Codes. Da Umlaute, Akzente, Emojis usw. nicht reinpassen, wurde Unicode (UTF-8) entwickelt – mit mehr als 140.000 Zeichen.'
      }
    ]
  }

];
