const LessonsC2 = [

  // ===== LEKTION 7: Binärsystem & Subtraktion =====
  {
    id: 7,
    title: 'Binärsystem & Subtraktion',
    explanation: {
      html:
        '<h2>Bin\u00E4rsystem & Subtraktion</h2>'
        + '<p>Im Bin\u00E4rsystem gibt es nur zwei Ziffern: <strong>0</strong> und <strong>1</strong>. Jede Stelle hat einen festen Wert \u2013 eine Zweierpotenz.</p>'
        + '<table style="border-collapse:collapse;margin:8px 0">'
        + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:6px 10px">Stelle</th><th style="border:1px solid #ccc;padding:6px 10px">2\u00B3</th><th style="border:1px solid #ccc;padding:6px 10px">2\u00B2</th><th style="border:1px solid #ccc;padding:6px 10px">2\u00B9</th><th style="border:1px solid #ccc;padding:6px 10px">2\u2070</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">Wert</td><td style="border:1px solid #ccc;padding:6px 10px">8</td><td style="border:1px solid #ccc;padding:6px 10px">4</td><td style="border:1px solid #ccc;padding:6px 10px">2</td><td style="border:1px solid #ccc;padding:6px 10px">1</td></tr>'
        + '</table>'
        + '<p>Beispiel: <code>1011\u2082 = 8+0+2+1 = 11\u2081\u2080</code></p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie \u2013 Zahlenschloss:</strong> Stell dir ein Zahlenschloss vor, bei dem jede Rolle nur zwei Zust\u00E4nde haben kann: 0 oder 1. Mit 4 Rollen hast du 2\u2074 = 16 m\u00F6gliche Kombinationen. Jede weitere Rolle verdoppelt die M\u00F6glichkeiten. Genau so funktioniert das Bin\u00E4rsystem: jede Stelle ist eine Rolle, jede Rolle ist eine Zweierpotenz.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum \u00FCberhaupt bin\u00E4r?</strong> Computer kennen physikalisch nur zwei Zust\u00E4nde: Strom flie\u00DFt (1) oder flie\u00DFt nicht (0). Deshalb muss alles, was ein Computer verarbeitet \u2013 Zahlen, Buchstaben, Bilder, Musik \u2013 in diese zweiwertige Sprache \u00FCbersetzt werden. Das Bin\u00E4rsystem ist keine abstrakte Spielerei, sondern die einzige Sprache, die Hardware direkt versteht.'
        + '</div>'
        + '<h3>Bin\u00E4re Subtraktion</h3>'
        + '<p>Genauso wie beim Dezimalsystem \u2013 mit <strong>Borgen</strong> (Borrow) statt \u00DCbertrag:</p>'
        + '<ul>'
        + '<li><code>0 \u2212 0 = 0</code></li>'
        + '<li><code>1 \u2212 0 = 1</code></li>'
        + '<li><code>1 \u2212 1 = 0</code></li>'
        + '<li><code>0 \u2212 1 = 1</code> mit Borgen (wie beim Dezimalsystem: 10\u2082 \u2212 1 = 1)</li>'
        + '</ul>'
        + '<div class="analogy-box">'
        + '<strong>Analogie \u2013 Borgen aus der Grundschule:</strong> Wenn du schriftlich 43 \u2212 17 rechnest, kannst du an der Einerstelle nicht einfach \u201E3 \u2212 7\u201C rechnen. Du borgst dir eine 10 vom Nachbarn und rechnest stattdessen 13 \u2212 7 = 6. Die Zehnerstelle wird um 1 kleiner. Im Bin\u00E4rsystem ist es genau dieselbe Idee \u2013 nur dass du eine <strong>2</strong> borgst (nicht eine 10), weil es die Basis des Zahlensystems ist.'
        + '</div>'
        + '<p>Unten siehst du eine interaktive Animation. Dr\u00FCcke <em>\u201EN\u00E4chster Schritt\u201C</em> und die Subtraktion <code>1100\u2082 \u2212 0101\u2082</code> wird Stelle f\u00FCr Stelle vor deinen Augen ausgef\u00FChrt \u2013 inklusive Borgen-Schritten, die visuell markiert werden.</p>',
      visuals: [
        { type: 'binary-animation', operandA: '1100', operandB: '0101', mode: 'subtract', label: '1100\u2082 \u2212 0101\u2082 = 0111\u2082 (12 \u2212 5 = 7)' }
      ]
    },
    example: {
      title: 'Beispiel: 1100\u2082 \u2212 0101\u2082 = 0111\u2082 (12 \u2212 5 = 7) \u2013 Stelle f\u00FCr Stelle',
      steps: [
        {
          label: 'Stelle 0 (ganz rechts): 0 \u2212 1 \u2192 Borgen!',
          html: '<p>Ganz rechts rechnen wir 0 \u2212 1 \u2013 das geht nicht ohne Hilfe. Wir <strong>borgen</strong> eine 2 von der n\u00E4chsten Stelle und rechnen: <code>10\u2082 \u2212 1 = 1</code>.</p><p>Ergebnis-Bit: <strong>1</strong>, Borgen an die n\u00E4chste Stelle: <strong>1</strong>.</p>'
        },
        {
          label: 'Stelle 1: 0 \u2212 0 \u2212 1 (Borgen) \u2192 wieder Borgen!',
          html: '<p>Eigentlich m\u00FCssten wir 0 \u2212 0 rechnen (das w\u00E4re 0). Aber die Stelle rechts hat sich ja eine 2 geborgt \u2013 diese \u201ESchuld\u201C m\u00FCssen wir hier abziehen. Also: <code>0 \u2212 0 \u2212 1 = \u22121</code>, und wieder borgen: <code>10\u2082 \u2212 0 \u2212 1 = 1</code>.</p><p>Ergebnis-Bit: <strong>1</strong>, Borgen an die n\u00E4chste Stelle: <strong>1</strong>.</p>'
        },
        {
          label: 'Stelle 2: 1 \u2212 1 \u2212 1 (Borgen) \u2192 erneut Borgen!',
          html: '<p>Hier haben wir 1 \u2212 1 = 0, aber wieder zieht das Borgen von rechts: <code>0 \u2212 1 = \u22121</code>. Wir borgen erneut eine 2: <code>10\u2082 \u2212 1 = 1</code>.</p><p>Ergebnis-Bit: <strong>1</strong>, Borgen an die n\u00E4chste Stelle: <strong>1</strong>.</p>'
        },
        {
          label: 'Stelle 3 (ganz links): 1 \u2212 0 \u2212 1 (Borgen) \u2192 fertig!',
          html: '<p>Jetzt rechnen wir 1 \u2212 0 = 1, aber das Borgen von rechts zieht eine 1 ab: <code>1 \u2212 0 \u2212 1 = 0</code>. Kein weiteres Borgen n\u00F6tig.</p><p>Ergebnis-Bit: <strong>0</strong>. Gesamtergebnis: <strong>0111\u2082 = 7\u2081\u2080</strong> \u2713</p><p><em>Probe: 12 \u2212 5 = 7. Alles konsistent.</em></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ergibt 1010\u2082 in Dezimal?',
        options: ['8', '10', '12', '5'],
        correct: 1,
        explanation: '1010\u2082 = 1\u00D78 + 0\u00D74 + 1\u00D72 + 0\u00D71 = 8+2 = 10\u2081\u2080'
      },
      {
        type: 'multiple-choice',
        question: 'Was bedeutet "Borgen" bei der bin\u00E4ren Subtraktion?',
        options: [
          'Man holt sich eine 2 von der n\u00E4chst-h\u00F6herwertigen Stelle, die dann um 1 kleiner wird',
          'Man addiert 1 zum Ergebnis',
          'Man negiert das Ergebnis',
          'Das Ergebnis wird 0'
        ],
        correct: 0,
        explanation: 'Borgen: Die n\u00E4chst-h\u00F6herwertige Stelle gibt eine 2 ab. Aus 0-1 wird 10\u2082-1=1, aber die Stelle links wird um 1 kleiner.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ergibt 1100\u2082 - 0101\u2082?',
        options: ['0111\u2082', '0011\u2082', '0110\u2082', '1001\u2082'],
        correct: 0,
        explanation: '12\u2081\u2080 - 5\u2081\u2080 = 7\u2081\u2080 = 0111\u2082. Probe: 0\u00D78+1\u00D74+1\u00D72+1\u00D71 = 7 \u2713'
      }
    ]
  },

  // ===== LEKTION 8: Halbsubtrahierer =====
  {
    id: 8,
    title: 'Halbsubtrahierer',
    explanation: {
      html:
        '<h2>Halbsubtrahierer</h2>'
        + '<p>Der Halbsubtrahierer ist eine Schaltung, die <strong>2 Bits subtrahiert</strong> (A minus B) und zwei Ausg\u00E4nge liefert:</p>'
        + '<ul>'
        + '<li><strong>D (Differenz):</strong> Das Ergebnis von A \u2212 B</li>'
        + '<li><strong>B_out (Borgen-Ausgang):</strong> Musste von der n\u00E4chsten Stelle geborgt werden?</li>'
        + '</ul>'
        + '<div class="analogy-box">'
        + '<strong>Stell dir eine Mini-Maschine vor:</strong> Zwei Kn\u00F6pfe (A und B) und zwei L\u00E4mpchen (D und B_out). Du dr\u00FCckst die Kn\u00F6pfe in einer Kombination \u2013 etwa A=0, B=1 \u2013 und liest an den L\u00E4mpchen ab, was herauskommt. Genau so funktioniert der Halbsubtrahierer: nur eben als elektronische Schaltung aus Gattern.'
        + '</div>'
        + '<h3>Formeln:</h3>'
        + '<p><code>D = A \u2295 B</code> (XOR \u2013 die Differenz ohne Borgen-Ber\u00FCcksichtigung)</p>'
        + '<p><code>B_out = \u00ACA \u2227 B</code> (Borgen ist nur n\u00F6tig, wenn A=0 und B=1)</p>'
        + '<h3>Wahrheitstabelle:</h3>'
        + '<table style="border-collapse:collapse;margin:8px 0">'
        + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:6px 10px">A</th><th style="border:1px solid #ccc;padding:6px 10px">B</th><th style="border:1px solid #ccc;padding:6px 10px">D</th><th style="border:1px solid #ccc;padding:6px 10px">B_out</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td></tr>'
        + '</table>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Der Halbsubtrahierer ist der kleinste Baustein, aus dem wir gleich den Vollsubtrahierer bauen \u2013 und aus mehreren Vollsubtrahierern sp\u00E4ter ein komplettes Subtraktionswerk, das mehrstellige Bin\u00E4rzahlen verarbeitet. Wie beim Lego-Prinzip: erst der einzelne Stein, dann das Modul, dann die ganze Maschine.'
        + '</div>'
        + '<div class="reading-guide">'
        + '<strong>So liest du die Schaltung unten:</strong>'
        + '<ul style="margin:6px 0 0 0;padding-left:20px">'
        + '<li>Links kommen die <strong>Eingangssignale</strong> rein: <strong>A</strong> (oben) und <strong>B</strong> (unten). Klick auf die Kreise schaltet zwischen 0 und 1.</li>'
        + '<li><strong>Obere Spur:</strong> A und B gehen in das <strong>XOR-Gatter</strong> (<code>=1</code>). Dessen Ausgang ist <strong>D</strong> (die Differenz).</li>'
        + '<li><strong>Untere Spur:</strong> A geht zuerst durchs <strong>NOT-Gatter</strong> (<code>1</code> mit Kringel am Ausgang \u2013 das invertiert A zu \u00ACA). Dann gehen \u00ACA und B ins <strong>AND-Gatter</strong> (<code>&</code>). Dessen Ausgang ist <strong>B_out</strong> (Borgen).</li>'
        + '<li>Wenn ein Signal auf 1 ist, leuchtet die Leitung <strong>farbig</strong>; bei 0 bleibt sie gedeckt. So siehst du, wo gerade \u201EStrom flie\u00DFt\u201C.</li>'
        + '</ul>'
        + '</div>'
        + '<div class="circuit-legend">'
        + '<span class="legend-item"><span class="legend-symbol">=1</span>XOR</span>'
        + '<span class="legend-item"><span class="legend-symbol">&</span>AND</span>'
        + '<span class="legend-item"><span class="legend-symbol">1\u00B0</span>NOT (Kringel = Invertierung)</span>'
        + '<span class="legend-item"><span class="legend-symbol">\u22651</span>OR</span>'
        + '</div>',
      visuals: [
        { type: 'circuit', circuit: 'half-subtractor', label: 'Halbsubtrahierer \u2013 klicke A und B' }
      ]
    },
    example: {
      title: 'Beispiel: Alle 4 Eingangs-Kombinationen',
      steps: [
        {
          label: 'A=0, B=0 \u2192 D=0, B_out=0',
          html: '<p>Beide Eing\u00E4nge sind 0. Es gibt nichts zu subtrahieren, kein Borgen n\u00F6tig. <code>XOR(0,0)=0</code>, <code>\u00AC0 \u2227 0 = 1 \u2227 0 = 0</code>.</p><p><em>Tipp: Pr\u00FCfe das oben in der Schaltung \u2013 beide Eing\u00E4nge auf 0 lassen, beide Ausg\u00E4nge bleiben dunkel.</em></p>'
        },
        {
          label: 'A=0, B=1 \u2192 D=1, B_out=1 (der kritische Fall: Borgen!)',
          html: '<p>Hier zeigt sich, was das Borgen eigentlich ist: 0 minus 1 geht nicht ohne Hilfe. Wir borgen eine 2 von der n\u00E4chsten Stelle, sodass aus 0\u22121 die Rechnung 10\u2082\u22121=1 wird. Also <strong>D=1</strong>. Gleichzeitig muss B_out=1 signalisieren, dass wir geborgt haben.</p><p><code>XOR(0,1)=1</code>, <code>\u00AC0 \u2227 1 = 1 \u2227 1 = 1</code>.</p><p><em>Im Visual oben: Klicke B auf 1 \u2013 beide Ausg\u00E4nge leuchten auf.</em></p>'
        },
        {
          label: 'A=1, B=0 \u2192 D=1, B_out=0',
          html: '<p>Der einfachste Fall: 1 minus 0 = 1. Kein Borgen n\u00F6tig. <code>XOR(1,0)=1</code>, <code>\u00AC1 \u2227 0 = 0 \u2227 0 = 0</code>.</p>'
        },
        {
          label: 'A=1, B=1 \u2192 D=0, B_out=0',
          html: '<p>1 minus 1 = 0. Kein Borgen n\u00F6tig, denn A ist mindestens so gro\u00DF wie B. <code>XOR(1,1)=0</code>, <code>\u00AC1 \u2227 1 = 0 \u2227 1 = 0</code>.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'truth-table',
        question: 'Klausur-Aufgabe: F\u00FClle die WTT f\u00FCr den Halbsubtrahierer aus (D=Differenz, B_out=Borgen):',
        variables: ['A', 'B'],
        resultColumns: ['D', 'B_out'],
        correctResults: [[0,0],[1,1],[1,0],[0,0]]
      },
      {
        type: 'multiple-choice',
        question: 'Welche Formel gilt f\u00FCr den Borgen-Ausgang B_out des Halbsubtrahierers?',
        options: ['\u00ACA \u2227 B', 'A \u2227 B', 'A \u2295 B', 'A \u2228 \u00ACB'],
        correct: 0,
        explanation: 'B_out = \u00ACA \u2227 B: Borgen n\u00F6tig wenn A=0 (\u00ACA=1) UND B=1. Nur dann ist 0-1 nicht ohne Borgen l\u00F6sbar.'
      },
      {
        type: 'multiple-choice',
        question: 'Welches Gatter berechnet die Differenz D im Halbsubtrahierer?',
        options: ['XOR (\u2295)', 'AND (\u2227)', 'OR (\u2228)', 'NAND'],
        correct: 0,
        explanation: 'D = A \u2295 B (XOR): Differenz ist 1 wenn genau einer der Eing\u00E4nge 1 ist \u2013 genau wie beim 1-Bit-Subtraktionsergebnis ohne Borgen.'
      }
    ]
  },

  // ===== LEKTION 9: Vollsubtrahierer =====
  {
    id: 9,
    title: 'Vollsubtrahierer',
    explanation: {
      html:
        '<h2>Vollsubtrahierer</h2>'
        + '<p>Der Vollsubtrahierer erweitert den Halbsubtrahierer um einen <strong>Borgen-Eingang B_in</strong> (von der niedrigerwertigen Stelle). Er hat also 3 Eing\u00E4nge: A, B, B_in.</p>'
        + '<h3>Aufbau aus zwei Halbsubtrahierern:</h3>'
        + '<ol>'
        + '<li><strong>Halbsubtrahierer 1 (HS1):</strong> Subtrahiert A - B \u2192 D1, B_out1</li>'
        + '<li><strong>Halbsubtrahierer 2 (HS2):</strong> Subtrahiert D1 - B_in \u2192 D, B_out2</li>'
        + '<li><strong>OR-Gatter:</strong> Gesamt-Borgen = B_out1 \u2228 B_out2</li>'
        + '</ol>'
        + '<h3>Ausg\u00E4nge:</h3>'
        + '<ul>'
        + '<li><strong>D:</strong> Endg\u00FCltige Differenz</li>'
        + '<li><strong>B_out:</strong> Borgen an n\u00E4chste Stelle = B_out1 \u2228 B_out2</li>'
        + '</ul>'
    },
    example: {
      title: 'Beispiel: Vollsubtrahierer Schaltung & WTT (Auszug)',
      steps: [
        {
          label: 'Aufbau der Schaltung (Klausur-Zeichnung)',
          html: '<p>Eing\u00E4nge: A, B, B_in<br>HS1: A und B \u2192 D1, B_out1<br>HS2: D1 und B_in \u2192 D, B_out2<br>OR-Gatter: B_out1 \u2228 B_out2 \u2192 B_out<br>Ausg\u00E4nge: D, B_out</p>'
        },
        {
          label: 'Ausgew\u00E4hlte WTT-Zeilen',
          html: '<table style="border-collapse:collapse;font-size:13px;margin:8px 0"><tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:4px">A</th><th style="border:1px solid #ccc;padding:4px">B</th><th style="border:1px solid #ccc;padding:4px">B_in</th><th style="border:1px solid #ccc;padding:4px">D</th><th style="border:1px solid #ccc;padding:4px">B_out</th></tr><tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td></tr><tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td></tr><tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td></tr><tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td></tr><tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td></tr></table>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie viele Eing\u00E4nge hat ein Vollsubtrahierer?',
        options: ['2 (A, B)', '3 (A, B, B_in)', '4 (A, B, B_in, Takt)', '2 (Differenz, Borgen)'],
        correct: 1,
        explanation: 'Vollsubtrahierer hat 3 Eing\u00E4nge: A (Minuend), B (Subtrahend), B_in (Borgen-Eingang von der niedrigerwertigen Stelle).'
      },
      {
        type: 'truth-table',
        question: 'Klausur-Aufgabe: Vollsubtrahierer WTT. F\u00FClle D (Differenz) und B_out (Borgen-Ausgang) aus:',
        variables: ['A', 'B', 'B_in'],
        resultColumns: ['D', 'B_out'],
        correctResults: [[0,0],[1,1],[1,1],[0,1],[1,0],[0,0],[0,0],[1,1]]
      },
      {
        type: 'multiple-choice',
        question: 'Aus welchen Bausteinen besteht ein Vollsubtrahierer?',
        options: [
          '2 Halbsubtrahierer + 1 OR-Gatter',
          '1 Halbsubtrahierer + 1 AND-Gatter',
          '2 Halbaddierer + 1 XOR-Gatter',
          '3 AND-Gatter + 1 OR-Gatter'
        ],
        correct: 0,
        explanation: 'Vollsubtrahierer = HS1 (subtrahiert A-B) + HS2 (subtrahiert D1-B_in) + OR-Gatter (kombiniert beide Borgen-Ausg\u00E4nge).'
      }
    ]
  },

  // ===== LEKTION 10: Addierwerk 4-Bit =====
  {
    id: 10,
    title: 'Addierwerk 4-Bit',
    explanation: {
      html:
        '<h2>Addierwerk 4-Bit</h2>'
        + '<p>Ein 4-Bit-Addierwerk addiert zwei 4-Bit-Zahlen (A\u2083A\u2082A\u2081A\u2080 + B\u2083B\u2082B\u2081B\u2080). Es besteht aus:</p>'
        + '<ul>'
        + '<li><strong>Stelle 0:</strong> Halbaddierer (kein Carry-Eingang)</li>'
        + '<li><strong>Stellen 1-3:</strong> je ein Volladdierer (mit Carry-Eingang C_in vom Vorg\u00E4nger)</li>'
        + '</ul>'
        + '<h3>Volladdierer-Formeln:</h3>'
        + '<p><code>S = A \u2295 B \u2295 C_in</code> (Summe)</p>'
        + '<p><code>C_out = (A\u2227B) \u2228 (A\u2227C_in) \u2228 (B\u2227C_in)</code> (\u00DCbertrag)</p>'
        + '<h3>In der Klausur (Aufgabe mit Farbmarkierung):</h3>'
        + '<p>Die Eingabebits werden nach Farbe beschriftet (z.B. gr\u00FCn=A, rot=B, gelb=Carry). Du musst nachvollziehen, wie der Carry von Stelle zu Stelle propagiert.</p>'
    },
    example: {
      title: 'Beispiel: 0101\u2082 + 0110\u2082 = 1011\u2082',
      steps: [
        {
          label: 'Stelle 0 (Halbaddierer): A\u2080=1, B\u2080=0',
          html: '<p>S\u2080 = 1\u22950 = 1, C\u2080 = 1\u22270 = 0</p>'
        },
        {
          label: 'Stelle 1 (Volladdierer): A\u2081=0, B\u2081=1, C_in=0',
          html: '<p>S\u2081 = 0\u22951\u22950 = 1, C\u2081 = (0\u22271)\u2228(0\u22270)\u2228(1\u22270) = 0</p>'
        },
        {
          label: 'Stelle 2 (Volladdierer): A\u2082=1, B\u2082=1, C_in=0',
          html: '<p>S\u2082 = 1\u22951\u22950 = 0, C\u2082 = (1\u22271)\u2228(1\u22270)\u2228(1\u22270) = 1</p>'
        },
        {
          label: 'Stelle 3 (Volladdierer): A\u2083=0, B\u2083=0, C_in=1',
          html: '<p>S\u2083 = 0\u22950\u22951 = 1, C\u2083 = 0 (kein \u00DCberlauf)</p><p>Ergebnis: S\u2083S\u2082S\u2081S\u2080 = <strong>1011\u2082 = 11\u2081\u2080</strong> = 5+6 \u2713</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Warum verwendet Stelle 0 einen Halbaddierer, alle anderen einen Volladdierer?',
        options: [
          'Stelle 0 hat keinen Carry-Eingang \u2013 es gibt keine niedrigere Stelle die einen Carry liefern k\u00F6nnte',
          'Stelle 0 ist immer 0',
          'Der Halbaddierer ist schneller',
          'Stelle 0 addiert keine Bits'
        ],
        correct: 0,
        explanation: 'Stelle 0 ist die niedrigstwertige Stelle. Sie hat keinen Vorg\u00E4nger, daher keinen Carry-Eingang. Alle anderen Stellen k\u00F6nnen einen Carry von der niedrigeren Stelle erhalten \u2192 Volladdierer.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ergibt 0011\u2082 + 0101\u2082 im 4-Bit-Addierwerk?',
        options: ['1000\u2082', '0111\u2082', '1001\u2082', '0110\u2082'],
        correct: 0,
        explanation: '3\u2081\u2080 + 5\u2081\u2080 = 8\u2081\u2080 = 1000\u2082. Stelle 0: 1+1=0, C=1. Stelle 1: 1+0+1=0, C=1. Stelle 2: 0+1+1=0, C=1. Stelle 3: 0+0+1=1, C=0.'
      },
      {
        type: 'multiple-choice',
        question: 'Volladdierer: A=1, B=1, C_in=1. Welche Summe S und welchen Carry C_out ergibt das?',
        options: ['S=1, C_out=1', 'S=0, C_out=0', 'S=1, C_out=0', 'S=0, C_out=1'],
        correct: 0,
        explanation: 'S = 1\u22951\u22951 = 1. C_out = (1\u22271)\u2228(1\u22271)\u2228(1\u22271) = 1. Also S=1, C_out=1. Probe: 1+1+1=3\u2081\u2080=11\u2082 \u2192 S=1, C=1 \u2713'
      }
    ]
  },

  // ===== LEKTION 11: SR-Riegel & Timing-Diagramme =====
  {
    id: 11,
    title: 'SR-Riegel & Timing-Diagramme',
    explanation: {
      html:
        '<h2>SR-Riegel & Timing-Diagramme</h2>'
        + '<p>Der SR-Riegel ist eine <strong>bistabile Kippstufe</strong> \u2013 er kann sich einen Zustand merken (0 oder 1), auch wenn die Eing\u00E4nge wieder 0 werden.</p>'
        + '<h3>Eing\u00E4nge & Ausg\u00E4nge:</h3>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:6px">Eingang</th><th style="border:1px solid #ccc;padding:6px">Bedeutung</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><strong>S (Set)</strong></td><td style="border:1px solid #ccc;padding:6px">Ausgang Q auf 1 setzen</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><strong>R (Reset)</strong></td><td style="border:1px solid #ccc;padding:6px">Ausgang Q auf 0 zur\u00FCcksetzen</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><strong>C (Clock/Takt)</strong></td><td style="border:1px solid #ccc;padding:6px">Zustands\u00E4nderung nur wenn C=1</td></tr>'
        + '</table>'
        + '<h3>Zustands\u00FCbergangstabelle:</h3>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:6px">C</th><th style="border:1px solid #ccc;padding:6px">S</th><th style="border:1px solid #ccc;padding:6px">R</th><th style="border:1px solid #ccc;padding:6px">Q (n\u00E4chster)</th><th style="border:1px solid #ccc;padding:6px">Bedeutung</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">0</td><td style="border:1px solid #ccc;padding:6px">x</td><td style="border:1px solid #ccc;padding:6px">x</td><td style="border:1px solid #ccc;padding:6px">Q (h\u00E4lt)</td><td style="border:1px solid #ccc;padding:6px">Keine \u00C4nderung (Takt=0)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">1</td><td style="border:1px solid #ccc;padding:6px">0</td><td style="border:1px solid #ccc;padding:6px">0</td><td style="border:1px solid #ccc;padding:6px">Q (h\u00E4lt)</td><td style="border:1px solid #ccc;padding:6px">Speichern</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">1</td><td style="border:1px solid #ccc;padding:6px">1</td><td style="border:1px solid #ccc;padding:6px">0</td><td style="border:1px solid #ccc;padding:6px">1</td><td style="border:1px solid #ccc;padding:6px">Setzen</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">1</td><td style="border:1px solid #ccc;padding:6px">0</td><td style="border:1px solid #ccc;padding:6px">1</td><td style="border:1px solid #ccc;padding:6px">0</td><td style="border:1px solid #ccc;padding:6px">R\u00FCcksetzen</td></tr>'
        + '<tr style="background:#fff3cd"><td style="border:1px solid #ccc;padding:6px">1</td><td style="border:1px solid #ccc;padding:6px">1</td><td style="border:1px solid #ccc;padding:6px">1</td><td style="border:1px solid #ccc;padding:6px">\u26A0\uFE0F verboten</td><td style="border:1px solid #ccc;padding:6px">Undefiniert!</td></tr>'
        + '</table>'
        + '<p><strong>Analogie:</strong> Wie ein Lichtschalter mit Ged\u00E4chtnis: S dr\u00FCcken = Licht an (bleibt an!). R dr\u00FCcken = Licht aus (bleibt aus!). C=0 = Schalter gesperrt.</p>'
        + '<p><strong>Q\u0305 (Q-Quer):</strong> Immer das Gegenteil von Q.</p>'
    },
    example: {
      title: 'Klausur-Beispiel: Timing-Diagramm ausf\u00FCllen',
      steps: [
        {
          label: 'Gegeben: C, S, R \u2013 Gesucht: Q und Q\u0305',
          html: '<p>Startbedingung: Q=0<br><br>Takt 1: C=1, S=1, R=0 \u2192 <strong>Setzen</strong> \u2192 Q wird 1<br>Takt 2: C=1, S=0, R=0 \u2192 <strong>Halten</strong> \u2192 Q bleibt 1<br>Takt 3: C=0, S=1, R=0 \u2192 <strong>gesperrt</strong> \u2192 Q bleibt 1<br>Takt 4: C=1, S=0, R=1 \u2192 <strong>R\u00FCcksetzen</strong> \u2192 Q wird 0</p>'
        },
        {
          label: 'Wichtige Regel',
          html: '<p><strong>Nur bei C=1 kann sich Q \u00E4ndern!</strong> Selbst wenn S=1 und R=0 ist, passiert nichts solange C=0. Das ist der Sinn des Taktsignals: Es kontrolliert, wann der Riegel reagiert.</p><p>Q\u0305 ist immer das Gegenteil von Q. Wenn Q=1, dann Q\u0305=0 und umgekehrt.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'SR-Riegel: C=1, S=1, R=0. Was passiert mit Q?',
        options: ['Q wird 1 (Setzen)', 'Q wird 0 (R\u00FCcksetzen)', 'Q h\u00E4lt seinen Wert', 'Undefiniert'],
        correct: 0,
        explanation: 'Bei C=1, S=1, R=0 wird der Riegel gesetzt: Q \u2192 1. Das S-Signal "setzt" Q auf 1.'
      },
      {
        type: 'multiple-choice',
        question: 'SR-Riegel: C=0, S=1, R=0. Was passiert mit Q (aktuell Q=0)?',
        options: ['Q bleibt 0 \u2013 Takt=0, keine \u00C4nderung', 'Q wird 1 wegen S=1', 'Q wird undefiniert', 'Q wechselt auf 1'],
        correct: 0,
        explanation: 'Bei C=0 ist der Riegel gesperrt. Egal was S und R sind \u2013 Q \u00E4ndert sich NICHT. Q bleibt bei 0.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum ist der Zustand S=1, R=1 beim SR-Riegel verboten?',
        options: [
          'Weil gleichzeitiges Setzen und R\u00FCcksetzen widerspr\u00FCchlich ist und zu undefiniertem Verhalten f\u00FChrt',
          'Weil dann C ignoriert wird',
          'Weil dann Q=0 erzwungen wird',
          'Weil dann Q\u0305=Q w\u00E4re, was einen Kurzschluss bedeutet'
        ],
        correct: 0,
        explanation: 'S=1 bedeutet "setze Q auf 1", R=1 bedeutet "setze Q auf 0" \u2013 beides gleichzeitig ist ein Widerspruch. Der Ausgangszustand w\u00E4re undefiniert.'
      },
      {
        type: 'multiple-choice',
        question: 'Q=1. Was ist Q\u0305?',
        options: ['0', '1', 'Undefiniert', 'H\u00E4ngt von S und R ab'],
        correct: 0,
        explanation: 'Q\u0305 (Q-Quer) ist immer die Negation von Q. Q=1 \u2192 Q\u0305=0. Q=0 \u2192 Q\u0305=1.'
      }
    ]
  }

];
