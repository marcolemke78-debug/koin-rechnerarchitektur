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
        + '<div class="reading-guide">'
        + '<strong>Die Rechenregel f\u00FCr jede Stelle:</strong>'
        + '<ol style="margin:6px 0 0 0;padding-left:22px">'
        + '<li>Rechne <code>(obere Ziffer) \u2212 (untere Ziffer) \u2212 (Borgen von rechts)</code>.</li>'
        + '<li>Ist das Ergebnis <strong>negativ</strong>? \u2192 Wir borgen eine <strong>2</strong>: Ergebnis-Bit = (Rechnung) + 2, Borgen-an-n\u00E4chste-Stelle = <strong>1</strong>.</li>'
        + '<li>Ist das Ergebnis <strong>\u2265 0</strong>? \u2192 Ergebnis-Bit = (Rechnung), Borgen = <strong>0</strong>.</li>'
        + '<li>Wiederhole von rechts nach links, bis alle Stellen durch sind.</li>'
        + '</ol>'
        + '</div>'
        + '<h3>Durchgerechnetes Beispiel: 1100\u2082 \u2212 0101\u2082 = ?</h3>'
        + '<p>Dezimal: 12 \u2212 5 = 7. Schauen wir, ob die Bin\u00E4rrechnung dasselbe liefert:</p>'
        + '<table style="border-collapse:collapse;margin:8px 0;width:100%;max-width:640px">'
        + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:6px 10px">Stelle</th><th style="border:1px solid #ccc;padding:6px 10px">Oben</th><th style="border:1px solid #ccc;padding:6px 10px">Unten</th><th style="border:1px solid #ccc;padding:6px 10px">Borgen von rechts</th><th style="border:1px solid #ccc;padding:6px 10px">Rechnung</th><th style="border:1px solid #ccc;padding:6px 10px">Ergebnis-Bit</th><th style="border:1px solid #ccc;padding:6px 10px">Borgen an n\u00E4chste</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>0</strong> (rechts)</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0\u22121\u22120 = \u22121 \u2192 borgen</td><td style="border:1px solid #ccc;padding:6px 10px"><strong>1</strong></td><td style="border:1px solid #ccc;padding:6px 10px"><strong>1</strong></td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>1</strong></td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0\u22120\u22121 = \u22121 \u2192 borgen</td><td style="border:1px solid #ccc;padding:6px 10px"><strong>1</strong></td><td style="border:1px solid #ccc;padding:6px 10px"><strong>1</strong></td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>2</strong></td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1\u22121\u22121 = \u22121 \u2192 borgen</td><td style="border:1px solid #ccc;padding:6px 10px"><strong>1</strong></td><td style="border:1px solid #ccc;padding:6px 10px"><strong>1</strong></td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>3</strong> (links)</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1\u22120\u22121 = 0 \u2192 kein Borgen</td><td style="border:1px solid #ccc;padding:6px 10px"><strong>0</strong></td><td style="border:1px solid #ccc;padding:6px 10px"><strong>0</strong></td></tr>'
        + '</table>'
        + '<p>Zusammengelesen von links nach rechts: <strong>0111\u2082</strong> = 0\u00B78 + 1\u00B74 + 1\u00B72 + 1\u00B71 = <strong>7\u2081\u2080</strong> \u2713</p>'
        + '<div class="analogy-box" style="background:#f0fdf4;border-left-color:#16a34a">'
        + '<strong>Der \u201ETrick\u201C bei diesem Beispiel:</strong> Das Borgen <em>wandert</em> durch drei Stellen hintereinander. Weil die oberen Ziffern an Stelle 0, 1 und 2 jeweils zu klein sind, reicht der Borgen-Impuls weiter. Erst an Stelle 3 (links) ist oben gen\u00FCgend da, um das Borgen \u201Eaufzufangen\u201C.</p><p style="margin:4px 0 0 0">Das ist exakt das gleiche Prinzip wie bei Dezimal-Rechnungen mit Borgen-Kette, z.B. <code>1000 \u2212 1 = 999</code> (3 Nullen werden zu 9ern durch wanderndes Borgen).'
        + '</div>'
        + '<p>Probier die Rechnung jetzt selbst nach: Unten siehst du eine <em>interaktive Animation</em>. Dr\u00FCcke <em>\u201EN\u00E4chster Schritt\u201C</em> und beobachte, wie Borgen-Ziffern erscheinen und das Ergebnis Stelle f\u00FCr Stelle berechnet wird. Gleiche die Zwischenergebnisse mit der Tabelle oben ab.</p>',
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
        examRelevant: true,
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
        + '<p>Der Vollsubtrahierer erweitert den Halbsubtrahierer um einen <strong>Borgen-Eingang B_in</strong> \u2013 das ist das Borgen, das von der Stelle rechts (niedrigerwertige Stelle) gekommen ist. Er hat also <strong>3 Eing\u00E4nge</strong>: A, B, B_in.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie \u2013 Halbsubtrahierer mit Ged\u00E4chtnis:</strong> Der Halbsubtrahierer aus L8 war wie eine Mini-Maschine ohne Erinnerung. Der Vollsubtrahierer bekommt zus\u00E4tzlich einen Eingang, der ihm sagt: \u201EPass auf \u2013 von der Stelle rechts wurde geborgt, das musst du ber\u00FCcksichtigen.\u201C Er hat also sein Ged\u00E4chtnis von der Nachbarstelle bekommen.'
        + '</div>'
        + '<h3>Aufbau aus zwei Halbsubtrahierern + OR:</h3>'
        + '<ol>'
        + '<li><strong>HS1 (Halbsubtrahierer 1):</strong> rechnet A \u2212 B \u2192 liefert Zwischen-Differenz D1 und Zwischen-Borgen B_out1</li>'
        + '<li><strong>HS2 (Halbsubtrahierer 2):</strong> rechnet D1 \u2212 B_in \u2192 liefert endg\u00FCltige Differenz D und zweites Zwischen-Borgen B_out2</li>'
        + '<li><strong>OR-Gatter:</strong> B_out = B_out1 \u2228 B_out2 (borgen, sobald eine der beiden Subtraktionen geborgt hat)</li>'
        + '</ol>'
        + '<h3>Vollst\u00E4ndige Wahrheitstabelle (8 Zeilen):</h3>'
        + '<table style="border-collapse:collapse;margin:8px 0">'
        + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:6px 10px">A</th><th style="border:1px solid #ccc;padding:6px 10px">B</th><th style="border:1px solid #ccc;padding:6px 10px">B_in</th><th style="border:1px solid #ccc;padding:6px 10px">D</th><th style="border:1px solid #ccc;padding:6px 10px">B_out</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td></tr>'
        + '</table>'
        + '<div class="why-context">'
        + '<strong>Warum brauchen wir den Vollsubtrahierer?</strong> Mit Halbsubtrahierern allein kannst du nur 1-Bit-Zahlen subtrahieren. Echte Zahlen haben aber mehrere Stellen \u2013 und jede Stelle muss wissen, ob von ihr geborgt wurde. Der Vollsubtrahierer ist der Baustein, den du in einer Reihe verkettest, um 4-Bit-, 8-Bit- oder 32-Bit-Zahlen zu subtrahieren. Das ist der Sprung von \u201ESpielzeug\u201C zu \u201Erichtiger Rechnung\u201C.'
        + '</div>'
        + '<div class="reading-guide">'
        + '<strong>Statt einer einzigen 7-Gatter-Schaltung zeigen wir den Vollsubtrahierer in drei Teilen:</strong>'
        + '<ol style="margin:6px 0 0 0;padding-left:22px">'
        + '<li><strong>HS1 (unten, Teil 1):</strong> kennst du aus L8 \u2013 rechnet A \u2212 B und liefert Zwischen-Differenz D1 und Zwischen-Borgen B_out1. Klicke A und B.</li>'
        + '<li><strong>HS2 (Teil 2):</strong> baugleich wie HS1, nur mit anderen Eingangs-Namen. Hier geht D1 (das Ergebnis von HS1) zusammen mit B_in rein. Ausg\u00E4nge: die endg\u00FCltige D und B_out2. Klicke D1 und B_in.</li>'
        + '<li><strong>OR-Gatter (Teil 3):</strong> kombiniert B_out1 und B_out2 zum endg\u00FCltigen B_out. Klicke die Eing\u00E4nge \u2013 sobald einer auf 1 steht, wird B_out = 1.</li>'
        + '</ol>'
        + '<p style="margin:10px 0 0 0">Die Klausur-Aufgabe wird meistens so aussehen: \u201EZeichne den Vollsubtrahierer aus zwei Halbsubtrahierern und einem OR-Gatter.\u201C Du zeichnest also genau das, was du hier als drei Teile siehst \u2013 nur eben als <em>eine</em> verbundene Schaltung.</p>'
        + '</div>'
        + '<div class="circuit-legend">'
        + '<span class="legend-item"><span class="legend-symbol">=1</span>XOR</span>'
        + '<span class="legend-item"><span class="legend-symbol">&</span>AND</span>'
        + '<span class="legend-item"><span class="legend-symbol">1\u00B0</span>NOT (Kringel = Invertierung)</span>'
        + '<span class="legend-item"><span class="legend-symbol">\u22651</span>OR</span>'
        + '</div>',
      visuals: [
        { type: 'circuit', circuit: 'full-subtractor-hs1', label: 'Teil 1 \u2013 HS1: A \u2212 B \u2192 D1, B_out1 (klicke A und B)' },
        { type: 'circuit', circuit: 'full-subtractor-hs2', label: 'Teil 2 \u2013 HS2: D1 \u2212 B_in \u2192 D, B_out2 (klicke D1 und B_in)' },
        { type: 'gate-sim', gate: 'or', label: 'Teil 3 \u2013 OR: B_out1 \u2228 B_out2 = B_out' }
      ]
    },
    example: {
      title: 'Beispiel: Signal-Trace durch die Schaltung (4 charakteristische F\u00E4lle)',
      steps: [
        {
          label: 'Fall 1 \u2013 A=1, B=1, B_in=0 \u2192 D=0, B_out=0',
          html: '<p><strong>Arithmetik:</strong> 1 \u2212 1 \u2212 0 = 0, kein Borgen n\u00F6tig.</p>'
          + '<p><strong>Signal-Trace (so rechnet die Schaltung):</strong></p>'
          + '<ul style="margin:6px 0 0 0;padding-left:22px">'
          + '<li><strong>HS1:</strong> A=1, B=1 \u2192 <code>XOR(1,1)=0</code>, also <strong>D1=0</strong>. Borgen dieses Teils: <code>\u00AC1 \u2227 1 = 0 \u2227 1 = 0</code>, also <strong>B_out1=0</strong>.</li>'
          + '<li><strong>HS2:</strong> D1=0, B_in=0 \u2192 <code>XOR(0,0)=0</code>, also <strong>D=0</strong>. Borgen dieses Teils: <code>\u00AC0 \u2227 0 = 1 \u2227 0 = 0</code>, also <strong>B_out2=0</strong>.</li>'
          + '<li><strong>OR:</strong> 0 \u2228 0 = <strong>B_out=0</strong>.</li>'
          + '</ul>'
          + '<p><em>Im Visual: Stell A=1, B=1, B_in=0. Du siehst, dass keine einzige Leitung gr\u00FCn aufleuchtet \u2013 alles bleibt im 0-Zustand.</em></p>'
        },
        {
          label: 'Fall 2 \u2013 A=1, B=1, B_in=1 \u2192 D=1, B_out=1 (B_in macht den Unterschied!)',
          html: '<p><strong>Arithmetik:</strong> 1 \u2212 1 \u2212 1 = \u22121 \u2192 borgen, Ergebnis 1.</p>'
          + '<p><strong>Signal-Trace:</strong></p>'
          + '<ul style="margin:6px 0 0 0;padding-left:22px">'
          + '<li><strong>HS1:</strong> <code>XOR(1,1)=0</code> \u2192 <strong>D1=0</strong>. <code>\u00AC1 \u2227 1 = 0</code> \u2192 <strong>B_out1=0</strong>.</li>'
          + '<li><strong>HS2:</strong> D1=0, B_in=1 \u2192 <code>XOR(0,1)=1</code> \u2192 <strong>D=1</strong>. <code>\u00AC0 \u2227 1 = 1 \u2227 1 = 1</code> \u2192 <strong>B_out2=1</strong>.</li>'
          + '<li><strong>OR:</strong> 0 \u2228 1 = <strong>B_out=1</strong>.</li>'
          + '</ul>'
          + '<p><em>Vergleiche Fall 1 und Fall 2: Gleiche A/B, nur B_in unterschiedlich \u2013 Ergebnis ist komplett anders. Genau daf\u00FCr ist B_in da.</em></p>'
        },
        {
          label: 'Fall 3 \u2013 A=0, B=1, B_in=1 \u2192 D=0, B_out=1 (beide Borgen-Pfade aktiv)',
          html: '<p><strong>Arithmetik:</strong> 0 \u2212 1 \u2212 1 = \u22122. Wir m\u00FCssen eine 2 borgen, Rest ist 0.</p>'
          + '<p><strong>Signal-Trace:</strong></p>'
          + '<ul style="margin:6px 0 0 0;padding-left:22px">'
          + '<li><strong>HS1:</strong> <code>XOR(0,1)=1</code> \u2192 <strong>D1=1</strong>. <code>\u00AC0 \u2227 1 = 1 \u2227 1 = 1</code> \u2192 <strong>B_out1=1</strong> (hier schon borgen!).</li>'
          + '<li><strong>HS2:</strong> D1=1, B_in=1 \u2192 <code>XOR(1,1)=0</code> \u2192 <strong>D=0</strong>. <code>\u00AC1 \u2227 1 = 0</code> \u2192 <strong>B_out2=0</strong>.</li>'
          + '<li><strong>OR:</strong> 1 \u2228 0 = <strong>B_out=1</strong>.</li>'
          + '</ul>'
          + '<p><em>Interessant: Nur der erste Halbsubtrahierer hat geborgt (B_out1=1), der zweite nicht (B_out2=0). Das OR-Gatter meldet aber trotzdem B_out=1 \u2013 genau deshalb brauchen wir es.</em></p>'
        },
        {
          label: 'Fall 4 \u2013 A=1, B=0, B_in=1 \u2192 D=0, B_out=0 (Borgen wird intern \u201Eaufgel\u00F6st\u201C)',
          html: '<p><strong>Arithmetik:</strong> 1 \u2212 0 \u2212 1 = 0. Kein Borgen nach au\u00DFen n\u00F6tig, weil A gro\u00DF genug ist.</p>'
          + '<p><strong>Signal-Trace:</strong></p>'
          + '<ul style="margin:6px 0 0 0;padding-left:22px">'
          + '<li><strong>HS1:</strong> <code>XOR(1,0)=1</code> \u2192 <strong>D1=1</strong>. <code>\u00AC1 \u2227 0 = 0</code> \u2192 <strong>B_out1=0</strong>.</li>'
          + '<li><strong>HS2:</strong> D1=1, B_in=1 \u2192 <code>XOR(1,1)=0</code> \u2192 <strong>D=0</strong>. <code>\u00AC1 \u2227 1 = 0</code> \u2192 <strong>B_out2=0</strong>.</li>'
          + '<li><strong>OR:</strong> 0 \u2228 0 = <strong>B_out=0</strong>.</li>'
          + '</ul>'
          + '<p><em>Lehrreich: Obwohl B_in=1 (von rechts wurde geborgt) \u2013 weil A=1 das kompensiert, muss an die n\u00E4chste Stelle nichts weitergereicht werden.</em></p>'
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
        examRelevant: true,
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
        + '<p>Ein 4-Bit-Addierwerk addiert zwei 4-Bit-Zahlen: <code>A\u2083A\u2082A\u2081A\u2080</code> und <code>B\u2083B\u2082B\u2081B\u2080</code>. Es setzt sich aus <strong>vier verketteten Bausteinen</strong> zusammen:</p>'
        + '<ul>'
        + '<li><strong>Stelle 0 (ganz rechts):</strong> Halbaddierer \u2013 kein Carry-Eingang, weil es keine niedrigere Stelle gibt</li>'
        + '<li><strong>Stellen 1, 2, 3:</strong> je ein <strong>Volladdierer</strong> mit Carry-Eingang C_in (kommt von der Stelle rechts)</li>'
        + '</ul>'
        + '<div class="analogy-box">'
        + '<strong>Staffellauf-Analogie:</strong> Stell dir vier L\u00E4ufer vor, die in einer Reihe stehen. Jeder hat seine zwei Zahlen (A und B dieser Stelle) zu addieren. Wenn bei der Rechnung ein \u00DCbertrag entsteht, reicht der L\u00E4ufer den <strong>Staffelstab (Carry)</strong> an den L\u00E4ufer links von ihm weiter. Der Staffelstab wandert also von rechts nach links durch die Stellen \u2013 genau wie beim schriftlichen Addieren in der Grundschule. Am Ende kann der linke L\u00E4ufer einen Stab ausgeben: das ist der <strong>Gesamt-\u00DCbertrag</strong> (der f\u00FCr 4-Bit bedeutet: die Summe passt nicht mehr in 4 Bit).'
        + '</div>'
        + '<h3>Volladdierer-Formeln (f\u00FCr die Klausur):</h3>'
        + '<p><code>S = A \u2295 B \u2295 C_in</code> (Summe \u2013 XOR aller drei Eing\u00E4nge)</p>'
        + '<p><code>C_out = (A\u2227B) \u2228 (A\u2227C_in) \u2228 (B\u2227C_in)</code> (\u00DCbertrag \u2013 wenn mindestens zwei der drei Eing\u00E4nge 1 sind)</p>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Hier siehst du zum ersten Mal, wie aus kleinen Bausteinen (Volladdierern) ein komplettes Rechenwerk entsteht. Reale CPUs nutzen genau dieses Prinzip \u2013 nur mit 32 oder 64 Bits statt 4. Wenn ein Computer 12345 + 67890 rechnet, tut er das mit so einem Addierwerk, nur eben viel breiter. Du bist jetzt bei einem Konzept angekommen, das in jedem Computer der Welt steckt.'
        + '</div>'
        + '<p>Unten siehst du ein <em>interaktives 4-Bit-Addierwerk</em>. Klicke die Bits von A und B an \u2013 das Ergebnis, die Zwischen-Carrys und der Gesamt-Carry werden automatisch berechnet und angezeigt.</p>',
      visuals: [
        { type: 'adder-sim', bits: 4, label: '4-Bit-Addierwerk \u2013 klicke die Bits von A und B, sieh zu wie der Carry wandert' }
      ]
    },
    example: {
      title: 'Beispiel: 0101\u2082 + 0011\u2082 = 1000\u2082 (5 + 3 = 8) \u2013 Carry wandert durch drei Stellen',
      steps: [
        {
          label: 'Stelle 0 (Halbaddierer): A\u2080=1, B\u2080=1 \u2192 S\u2080=0, C=1',
          html: '<p>Ganz rechts: 1 + 1 = 10\u2082. Das Summe-Bit ist 0, und der Carry (1) wird an die n\u00E4chste Stelle weitergereicht.</p><p><code>S\u2080 = 1 \u2295 1 = 0</code>, <code>C\u2080 = 1 \u2227 1 = 1</code> \u2192 <strong>Staffelstab \u00FCbergeben.</strong></p>'
        },
        {
          label: 'Stelle 1 (Volladdierer): A\u2081=0, B\u2081=1, C_in=1 \u2192 S\u2081=0, C=1',
          html: '<p>An Stelle 1: A=0, B=1, und der Carry von Stelle 0 ist ebenfalls 1. Rechnung: 0 + 1 + 1 = 10\u2082. Summe-Bit 0, Carry bleibt 1.</p><p><code>S\u2081 = 0 \u2295 1 \u2295 1 = 0</code>, <code>C\u2081 = 1</code> (weil 2 der 3 Eing\u00E4nge gleich 1 sind) \u2192 <strong>Staffelstab wandert weiter.</strong></p>'
        },
        {
          label: 'Stelle 2 (Volladdierer): A\u2082=1, B\u2082=0, C_in=1 \u2192 S\u2082=0, C=1',
          html: '<p>An Stelle 2: A=1, B=0, C_in=1. Rechnung: 1 + 0 + 1 = 10\u2082. Summe-Bit 0, Carry wieder 1.</p><p>Der Staffelstab wandert bereits durch die dritte Stelle!</p>'
        },
        {
          label: 'Stelle 3 (Volladdierer): A\u2083=0, B\u2083=0, C_in=1 \u2192 S\u2083=1, C_out=0',
          html: '<p>An Stelle 3: A=0, B=0, C_in=1. Rechnung: 0 + 0 + 1 = 1. Summe-Bit 1, kein Carry mehr.</p><p>Gesamtergebnis: <strong>S\u2083S\u2082S\u2081S\u2080 = 1000\u2082 = 8\u2081\u2080</strong> \u2713</p><p><em>Beachte: Der Staffelstab ist von Stelle 0 \u00FCber 1, 2, 3 gewandert und am Ende \u201Eaufgegangen\u201C im Ergebnis-Bit. Solche Ketten von Carrys sind der Grund, warum breite Addierer (64-Bit-CPU) intern trickreich optimiert werden \u2013 aber das Grundprinzip ist genau das, was du hier siehst.</em></p>'
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
        + '<p>Der SR-Riegel ist eine <strong>bistabile Kippstufe</strong> \u2013 er kann sich einen Zustand (0 oder 1) <em>merken</em>, auch wenn die Eing\u00E4nge wieder 0 werden. Alles, was du bisher gelernt hast, war \u201Ezustandslos\u201C (Ausgang h\u00E4ngt nur von den aktuellen Eing\u00E4ngen ab). Der SR-Riegel ist der erste Baustein mit <strong>Ged\u00E4chtnis</strong>.</p>'
        + '<div class="analogy-box">'
        + '<strong>Lichtschalter-Analogie:</strong> Stell dir einen Lichtschalter vor, den du einmal dr\u00FCckst \u2013 und das Licht bleibt an, auch wenn du den Finger wegnimmst. Erst wenn du einen zweiten, separaten Reset-Knopf dr\u00FCckst, geht das Licht wieder aus. Genau das macht der SR-Riegel: Einmal gesetzt (S=1), bleibt der Zustand gespeichert, bis er aktiv zur\u00FCckgesetzt wird (R=1).'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Der gro\u00DFe Sprung \u2013 aus Logik wird Speicher.</strong> Alles bisher (Gatter, Addierer, Subtrahierer) war zustandslos. Mit dem SR-Riegel kommt das erste Ged\u00E4chtnis dazu. Aus diesem Prinzip entstehen Flipflops, Register und schlie\u00DFlich RAM \u2013 also Arbeitsspeicher. Wenn dein Rechner 16 GB RAM hat, sind das im Prinzip Milliarden solcher Riegel-Bausteine.</p><p style="margin:6px 0 0 0">Damit das Ganze \u00FCberhaupt funktionieren kann, muss die Schaltung einen Trick haben: <strong>R\u00FCckkopplung</strong>. Der Ausgang eines Gatters flie\u00DFt wieder als Eingang in das andere Gatter zur\u00FCck. Dadurch h\u00E4lt sich die Schaltung ihren eigenen Zustand \u2013 wie zwei Kinder, die sich gegenseitig den Arm hochhalten.'
        + '</div>'
        + '<h3>Teil 1: Der asynchrone SR-Riegel (Kern-Prinzip, 2 NOR-Gatter)</h3>'
        + '<p>Die einfachste Variante: zwei NOR-Gatter, bei denen der Ausgang jedes Gatters wieder als Eingang ins andere geht. Kein Taktsignal, der Zustand \u00E4ndert sich sofort, wenn S oder R auf 1 geht.</p>'
        + '<div class="reading-guide">'
        + '<strong>So liest du die Schaltung unten:</strong>'
        + '<ul style="margin:6px 0 0 0;padding-left:20px">'
        + '<li><strong>S</strong> (Set) geht ins obere NOR-Gatter (<code>\u22651</code> mit Kringel = NOR). Dessen Ausgang ist <strong>Q</strong>.</li>'
        + '<li><strong>R</strong> (Reset) geht ins untere NOR-Gatter. Dessen Ausgang ist <strong>Q\u0305</strong> (Q-Quer = immer das Gegenteil von Q).</li>'
        + '<li>Das Besondere: Der Ausgang des oberen NOR geht als <em>zweiter Eingang</em> ins untere NOR \u2013 und umgekehrt. Das ist die <strong>R\u00FCckkopplung</strong>. Sie sorgt daf\u00FCr, dass die Schaltung ihren Zustand h\u00E4lt.</li>'
        + '<li>Klicke S auf 1 \u2192 Q wird 1 und bleibt 1, auch wenn du S wieder auf 0 klickst. Klicke R auf 1 \u2192 Q wird 0 und bleibt 0.</li>'
        + '</ul>'
        + '</div>'
        + '<div class="circuit-legend">'
        + '<span class="legend-item"><span class="legend-symbol">\u22651\u00B0</span>NOR (OR mit invertiertem Ausgang)</span>'
        + '</div>'
        + '<h4 style="margin-top:16px">Wahrheitstabelle (asynchroner SR-Riegel, ohne Takt):</h4>'
        + '<table style="border-collapse:collapse;margin:8px 0">'
        + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:6px 10px">S</th><th style="border:1px solid #ccc;padding:6px 10px">R</th><th style="border:1px solid #ccc;padding:6px 10px">Q (n\u00E4chster)</th><th style="border:1px solid #ccc;padding:6px 10px">Bedeutung</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">Q (h\u00E4lt)</td><td style="border:1px solid #ccc;padding:6px 10px">Speichern</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">Setzen</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">R\u00FCcksetzen</td></tr>'
        + '<tr style="background:#fff3cd"><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">\u26A0\uFE0F verboten</td><td style="border:1px solid #ccc;padding:6px 10px">Widerspruch \u2013 undefiniert</td></tr>'
        + '</table>'
        + '<p>Unter der Schaltung siehst du ein <strong>Timing-Diagramm</strong>, das sich automatisch mit deinen Klicks mit-aktualisiert. So siehst du, wie S, R und Q zeitlich zusammenh\u00E4ngen.</p>',
      visuals: [
        { type: 'circuit', circuit: 'sr-latch', label: 'Asynchroner SR-Riegel \u2013 klicke S oder R, sieh Q umschalten' },
        { type: 'timing-diagram', signals: ['C', 'S', 'R', 'Q', 'Q\u0304'], label: 'Timing-Diagramm \u2013 f\u00FCllt sich automatisch bei jedem Klick in der Schaltung' }
      ]
    },
    example: {
      title: 'Zustandsfolge im SR-Riegel \u2013 Phase f\u00FCr Phase',
      steps: [
        {
          label: 'Phase 1: S=0, R=0 (Halten, Startzustand Q=0)',
          html: '<p>Beide Eing\u00E4nge sind 0. Q beh\u00E4lt seinen aktuellen Wert. Der Riegel \u201Eschl\u00E4ft\u201C \u2013 er tut nichts, aber er vergisst auch nichts.</p>'
        },
        {
          label: 'Phase 2: S=1 (Setzen)',
          html: '<p>S wird 1. Das zwingt Q auf 1 (weil das obere NOR bei mindestens einem 1-Eingang immer 0 ausgibt \u2013 und durch die R\u00FCckkopplung kippt die gesamte Schaltung konsistent). Q=1, Q\u0305=0. Das ist wie \u201ELicht einschalten\u201C.</p>'
        },
        {
          label: 'Phase 3: S=0 zur\u00FCck auf 0 \u2013 aber Q bleibt 1!',
          html: '<p>S geht wieder auf 0. Aber Q bleibt bei 1. <strong>Das ist die eigentliche Speicher-Eigenschaft:</strong> Die R\u00FCckkopplung h\u00E4lt den Zustand. Selbst ohne aktives Set-Signal erinnert sich der Riegel.</p><p><em>Probier es im Visual: Klicke S auf 1 und dann wieder auf 0 \u2013 Q bleibt leuchtend gr\u00FCn.</em></p>'
        },
        {
          label: 'Phase 4: R=1 (R\u00FCcksetzen)',
          html: '<p>Jetzt wird R auf 1 geklickt. Das zwingt Q auf 0. Licht aus. Symmetrisch zum Setzen: Sobald R wieder auf 0 geht, bleibt Q bei 0, bis das n\u00E4chste Mal S gedr\u00FCckt wird.</p>'
        },
        {
          label: 'Teil 2: Getakteter SR-Riegel (wie in der Klausur)',
          html: '<p>In der Klausur wird h\u00E4ufig eine erweiterte Variante verwendet: der SR-Riegel mit <strong>Clock-Eingang (C)</strong>. Dabei werden S und R zus\u00E4tzlich durch ein UND mit C \u201Egefiltert\u201C: Nur wenn C=1, wirken S und R \u00FCberhaupt.</p>'
          + '<table style="border-collapse:collapse;margin:8px 0">'
          + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:6px 10px">C</th><th style="border:1px solid #ccc;padding:6px 10px">S</th><th style="border:1px solid #ccc;padding:6px 10px">R</th><th style="border:1px solid #ccc;padding:6px 10px">Q (n\u00E4chster)</th><th style="border:1px solid #ccc;padding:6px 10px">Bedeutung</th></tr>'
          + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">x</td><td style="border:1px solid #ccc;padding:6px 10px">x</td><td style="border:1px solid #ccc;padding:6px 10px">Q (h\u00E4lt)</td><td style="border:1px solid #ccc;padding:6px 10px">Keine \u00C4nderung (Takt=0)</td></tr>'
          + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">Q (h\u00E4lt)</td><td style="border:1px solid #ccc;padding:6px 10px">Speichern</td></tr>'
          + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">Setzen</td></tr>'
          + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">R\u00FCcksetzen</td></tr>'
          + '<tr style="background:#fff3cd"><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">\u26A0\uFE0F verboten</td><td style="border:1px solid #ccc;padding:6px 10px">Undefiniert</td></tr>'
          + '</table>'
          + '<p><strong>Klausur-Typ-Aufgabe:</strong> Du bekommst C, S, R als Impulsdiagramm vorgegeben und sollst Q (und Q\u0305) zeichnen. Regel: Bei C=0 bleibt Q unver\u00E4ndert. Bei C=1 gelten die Zeilen 2\u20135.</p>'
        },
        {
          label: 'Klausur-Beispiel: Takt-basiertes Timing',
          html: '<p>Start: Q=0<br><br>Takt 1: C=1, S=1, R=0 \u2192 <strong>Setzen</strong> \u2192 Q=1<br>Takt 2: C=1, S=0, R=0 \u2192 <strong>Halten</strong> \u2192 Q=1<br>Takt 3: C=0, S=1, R=0 \u2192 <strong>gesperrt!</strong> \u2192 Q=1 (keine \u00C4nderung trotz S=1, weil C=0)<br>Takt 4: C=1, S=0, R=1 \u2192 <strong>R\u00FCcksetzen</strong> \u2192 Q=0</p><p>Q\u0305 ist immer das Gegenteil von Q.</p><p><em>Der Unterschied zwischen asynchronem und getaktetem Riegel: Beim asynchronen reagiert die Schaltung sofort. Beim getakteten nur, wenn der Takt C=1 ist \u2013 das macht Schaltungen mit vielen Flipflops synchron und stabil (Prinzip einer CPU-Taktung).</em></p>'
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
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Start: Q=0. Eingangs-Sequenz f\u00FCr 3 Takte: <br>Takt 1: C=1, S=1, R=0 <br>Takt 2: C=0, S=0, R=1 <br>Takt 3: C=1, S=0, R=0 <br>Welche Q-Folge ergibt sich?',
        options: ['Q: 1 \u2192 0 \u2192 0', 'Q: 1 \u2192 1 \u2192 1', 'Q: 0 \u2192 1 \u2192 1', 'Q: 1 \u2192 1 \u2192 0'],
        correct: 1,
        explanation: 'Takt 1: C=1, S=1 \u2192 Setzen \u2192 Q=1. Takt 2: C=0 \u2192 gesperrt, Q bleibt 1 (R=1 wird ignoriert!). Takt 3: C=1, S=0, R=0 \u2192 Halten \u2192 Q bleibt 1.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Start: Q=1. Sequenz: <br>Takt 1: C=1, S=0, R=1 <br>Takt 2: C=1, S=0, R=0 <br>Takt 3: C=1, S=1, R=0 <br>Welche Q-Folge ergibt sich?',
        options: ['Q: 0 \u2192 0 \u2192 1', 'Q: 1 \u2192 1 \u2192 1', 'Q: 0 \u2192 1 \u2192 1', 'Q: 1 \u2192 0 \u2192 1'],
        correct: 0,
        explanation: 'Takt 1: C=1, R=1 \u2192 R\u00FCcksetzen \u2192 Q=0. Takt 2: C=1, S=0, R=0 \u2192 Halten \u2192 Q=0. Takt 3: C=1, S=1 \u2192 Setzen \u2192 Q=1.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Start: Q=0. Takt 1: C=0, S=1, R=0. Was ist Q nach Takt 1?',
        options: ['Q=1, weil S=1 setzt', 'Q=0, weil C=0 alles sperrt', 'Q=undefiniert', 'Q wechselt auf 1, dann sofort zur\u00FCck'],
        correct: 1,
        explanation: 'C=0 ist die Taktsperre. Egal welche Werte S und R haben \u2013 ohne C=1 passiert nichts. Q bleibt bei seinem alten Wert (hier 0).'
      }
    ]
  }

];
