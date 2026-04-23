const LessonsC1 = [

  // ===== LEKTION 1: Schaltkreise lesen & umwandeln =====
  {
    id: 1,
    title: 'Schaltkreise lesen & umwandeln',
    explanation: {
      html:
        '<h2>Schaltkreise lesen & umwandeln</h2>'
        + '<p>In dieser Lektion lernst du, wie ein <strong>physischer Stromkreis</strong> (mit Schaltern und einer Lampe) in einen <strong>logischen Ausdruck</strong> \u00FCbersetzt wird \u2013 und von dort in eine <strong>Gatterschaltung</strong>.</p>'
        + '<div class="analogy-box">'
        + '<strong>Grund-Idee:</strong> Ein Lichtschalter kennt nur zwei Zust\u00E4nde: <strong>geschlossen (1)</strong> oder <strong>offen (0)</strong> \u2013 entweder flie\u00DFt Strom oder nicht. Und die Lampe leuchtet (1) oder nicht (0). Damit hast du alles, was du brauchst, um jeden Schaltkreis mit 0 und 1 zu beschreiben. Es gibt genau zwei Arten, mehrere Schalter zu kombinieren:'
        + '</div>'
        + '<h3>Serienschaltung \u2192 AND (\u2227)</h3>'
        + '<p>Die Schalter liegen <strong>hintereinander</strong>. <em>Bild:</em> Zwei T\u00FCren, durch die man nacheinander hindurch muss. Wenn eine T\u00FCr zu ist, bleibt der Weg versperrt. Die Lampe leuchtet <strong>nur, wenn beide Schalter geschlossen sind</strong>.</p>'
        + '<p>Logische \u00DCbersetzung: <code>L = S1 \u2227 S2</code> (S1 und S2 m\u00FCssen 1 sein)</p>'
        + '<h3>Parallelschaltung \u2192 OR (\u2228)</h3>'
        + '<p>Die Schalter liegen <strong>nebeneinander</strong>. <em>Bild:</em> Zwei getrennte Wege zum Ziel. Wenn einer frei ist, kommt der Strom durch. Die Lampe leuchtet, <strong>wenn mindestens einer der Schalter geschlossen ist</strong>.</p>'
        + '<p>Logische \u00DCbersetzung: <code>L = S1 \u2228 S2</code> (S1 oder S2 (oder beide) m\u00FCssen 1 sein)</p>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Das ist der <em>Einstiegsschritt</em> der gesamten Schaltalgebra. Alle sp\u00E4teren Lektionen (Wahrheitstabellen, Normalformen, komplexe Gatterschaltungen) bauen auf dieser Grund-\u00DCbersetzung auf: physisch \u2192 logisch \u2192 Gatter. Wer diese drei Sichten flie\u00DFend ineinander umschalten kann, beherrscht den Kern der Logik-Klausur.'
        + '</div>'
        + '<h3>Klausur-Vorgehen (3 Schritte):</h3>'
        + '<ol>'
        + '<li><strong>Schaltkreis lesen</strong> \u2192 logischen Ausdruck aufschreiben (Serie=\u2227, Parallel=\u2228, verschachteln mit Klammern)</li>'
        + '<li><strong>Wahrheitstabelle erstellen</strong> \u2192 alle 2<sup>n</sup> Kombinationen, bin\u00E4r aufsteigend</li>'
        + '<li><strong>Gatterschaltung zeichnen</strong> \u2192 IEC-60617-12-Symbole (<code>&</code> f\u00FCr AND, <code>\u22651</code> f\u00FCr OR, <code>1\u00B0</code> f\u00FCr NOT)</li>'
        + '</ol>'
        + '<div class="reading-guide">'
        + '<strong>Probier\u2019s selbst:</strong> Unten siehst du die beiden Grund-Gatter als interaktive Simulation. Klicke die Eing\u00E4nge und beobachte den Ausgang. Halt dir dabei die \u00DCbersetzung vor Augen: AND verh\u00E4lt sich wie zwei T\u00FCren in Serie, OR wie zwei Wege parallel.'
        + '</div>'
        + '<div class="circuit-legend">'
        + '<span class="legend-item"><span class="legend-symbol">&</span>AND = Serie (\u2227)</span>'
        + '<span class="legend-item"><span class="legend-symbol">\u22651</span>OR = Parallel (\u2228)</span>'
        + '</div>',
      visuals: [
        { type: 'gate-sim', gate: 'and', label: 'AND-Gatter \u2013 Serienschaltung: beide Eing\u00E4nge m\u00FCssen 1 sein' },
        { type: 'gate-sim', gate: 'or',  label: 'OR-Gatter \u2013 Parallelschaltung: mindestens ein Eingang muss 1 sein' }
      ]
    },
    example: {
      title: 'Klausur-Beispiel: Schaltkreis mit S1, S2, S3',
      steps: [
        {
          label: 'Schritt 1 \u2013 Schaltkreis lesen',
          html:
            '<p>Gegebener Schaltkreis: <strong>S1 in Serie mit (S2 parallel S3)</strong>.</p>'
            + '<p>Wir lesen von innen nach au\u00DFen:</p>'
            + '<ul>'
            + '<li>S2 und S3 sind <strong>parallel</strong> \u2192 <code>S2 \u2228 S3</code>.</li>'
            + '<li>Dieser Parallel-Block liegt in <strong>Serie</strong> mit S1 \u2192 <code>L = S1 \u2227 (S2 \u2228 S3)</code>.</li>'
            + '</ul>'
            + '<p><em>Klammern nicht vergessen!</em> Ohne Klammern w\u00FCrde die Rangfolge (\u2227 vor \u2228) die Struktur verf\u00E4lschen.</p>'
        },
        {
          label: 'Schritt 2 \u2013 Gatterschaltung zeichnen',
          html:
            '<p>Unten siehst du genau diese Schaltung als interaktive Gatterschaltung. Klicke S1, S2, S3 durch und vergleiche den Ausgang <strong>L</strong> mit deiner Intuition (\u201Eleuchtet die Lampe?\u201C).</p>'
            + '<p>Zeichenregel: <strong>OR-Gatter zuerst</strong> (f\u00FCr S2\u2228S3), dann <strong>AND-Gatter</strong> (verbindet S1 mit dem OR-Ausgang).</p>',
          visuals: [
            { type: 'circuit', circuit: 'c1-l1-example', label: 'L = S1 \u2227 (S2 \u2228 S3) \u2013 klicke die Schalter' }
          ]
        },
        {
          label: 'Schritt 3 \u2013 Wahrheitstabelle (8 Zeilen, 3 Variablen)',
          html:
            '<p>Drei Variablen \u2192 2\u00B3 = 8 Kombinationen. Bin\u00E4r aufsteigend:</p>'
            + '<table style="border-collapse:collapse;margin:8px 0">'
            + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:6px 10px">S1</th><th style="border:1px solid #ccc;padding:6px 10px">S2</th><th style="border:1px solid #ccc;padding:6px 10px">S3</th><th style="border:1px solid #ccc;padding:6px 10px">S2 \u2228 S3</th><th style="border:1px solid #ccc;padding:6px 10px">L = S1 \u2227 (S2 \u2228 S3)</th></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">0</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td><td style="border:1px solid #ccc;padding:6px 10px">1</td></tr>'
            + '</table>'
            + '<p>Die Hilfsspalte <code>S2 \u2228 S3</code> ist Gold wert: Sie macht die letzte Spalte einfacher, weil du dann nur noch <code>S1 \u2227 (Hilfsspalte)</code> rechnest.</p>'
        },
        {
          label: 'Beobachtung \u2013 wann leuchtet die Lampe?',
          html:
            '<p>Die Lampe leuchtet (L=1) genau dann, wenn <strong>S1=1 UND mindestens einer von S2 oder S3</strong> geschlossen ist. Das sind 3 von 8 F\u00E4llen.</p>'
            + '<p>Vergleiche das mit der interaktiven Schaltung oben \u2013 dort siehst du dasselbe durch Klicken.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Zwei Schalter liegen hintereinander (in Serie). Welcher Operator beschreibt das?',
        options: [
          'AND (\u2227) \u2013 beide m\u00fcssen geschlossen sein',
          'OR (\u2228) \u2013 mindestens einer',
          'NOT (\u00ac) \u2013 Umkehrung',
          'XOR (\u2295) \u2013 genau einer'
        ],
        correct: 0,
        explanation: 'Serienschaltung = AND: Strom flie\u00dft nur wenn BEIDE Schalter geschlossen sind.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Schaltkreis: S1 in Serie mit (S2 parallel S3). Welcher Ausdruck ist korrekt?',
        options: [
          'S1 \u2228 (S2 \u2227 S3)',
          'S1 \u2227 (S2 \u2228 S3)',
          '(S1 \u2227 S2) \u2228 S3',
          'S1 \u2228 S2 \u2228 S3'
        ],
        correct: 1,
        explanation: 'Parallelblock S2\u2225S3 ergibt S2\u2228S3. In Serie mit S1: S1 \u2227 (S2 \u2228 S3).'
      },
      {
        type: 'truth-table',
        examRelevant: true,
        question: 'F\u00fclle die Wahrheitstabelle f\u00fcr L = S1 \u2227 (S2 \u2228 S3) aus:',
        variables: ['S1', 'S2', 'S3'],
        resultColumns: ['L'],
        correctResults: [[0],[0],[0],[0],[0],[1],[1],[1]]
      }
    ]
  },

  // ===== LEKTION 2: Logische Operatoren: AND, OR, NOT, XOR =====
  {
    id: 2,
    title: 'Logische Operatoren: AND, OR, NOT, XOR',
    explanation: {
      html:
        '<h2>Logische Operatoren</h2>'
        + '<p>Logische Operatoren verkn\u00FCpfen Wahrheitswerte (0 oder 1). Hier lernst du die <strong>vier Kern-Operatoren</strong> (AND, OR, NOT, XOR) sowie die drei h\u00E4ufig auftretenden Varianten NAND, NOR, XNOR.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Jeder Operator beschreibt eine Regel, wie du aus zwei Ja/Nein-Aussagen eine neue Ja/Nein-Aussage ableitest.'
        + '<ul style="margin:6px 0 0 0;padding-left:22px">'
        + '<li><strong>AND:</strong> \u201EIch gehe nur spazieren, wenn es <em>trocken</em> UND <em>hell</em> ist.\u201C \u2013 beide Bedingungen m\u00FCssen wahr sein.</li>'
        + '<li><strong>OR:</strong> \u201EIch nehme den Regenschirm mit, wenn es <em>regnet</em> ODER <em>windig</em> ist.\u201C \u2013 einer reicht.</li>'
        + '<li><strong>NOT:</strong> \u201EIch gehe <em>nicht</em> raus.\u201C \u2013 kehrt eine Aussage um.</li>'
        + '<li><strong>XOR:</strong> \u201EEntweder Tee <em>oder</em> Kaffee, aber <em>nicht beides</em>.\u201C \u2013 genau einer.</li>'
        + '</ul>'
        + '</div>'
        + '<h3>Die 7 wichtigsten Operatoren:</h3>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0">'
        + '<th style="border:1px solid #ccc;padding:6px">Symbol</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Name</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Bedeutung</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Merkhilfe</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><code>\u2227</code></td><td style="border:1px solid #ccc;padding:6px">AND</td><td style="border:1px solid #ccc;padding:6px">1 nur wenn beide 1</td><td style="border:1px solid #ccc;padding:6px">Beide T\u00FCren auf</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><code>\u2228</code></td><td style="border:1px solid #ccc;padding:6px">OR</td><td style="border:1px solid #ccc;padding:6px">1 wenn mind. einer 1</td><td style="border:1px solid #ccc;padding:6px">Eine T\u00FCr reicht</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><code>\u00AC</code></td><td style="border:1px solid #ccc;padding:6px">NOT</td><td style="border:1px solid #ccc;padding:6px">Kehrt Wert um</td><td style="border:1px solid #ccc;padding:6px">Lichtschalter umdrehen</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><code>\u2295</code></td><td style="border:1px solid #ccc;padding:6px">XOR</td><td style="border:1px solid #ccc;padding:6px">1 nur wenn genau einer 1</td><td style="border:1px solid #ccc;padding:6px">Entweder-oder (aber nicht beides)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">NAND</td><td style="border:1px solid #ccc;padding:6px">NAND</td><td style="border:1px solid #ccc;padding:6px">Gegenteil von AND</td><td style="border:1px solid #ccc;padding:6px">\u00AC(a \u2227 b)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">NOR</td><td style="border:1px solid #ccc;padding:6px">NOR</td><td style="border:1px solid #ccc;padding:6px">Gegenteil von OR</td><td style="border:1px solid #ccc;padding:6px">\u00AC(a \u2228 b)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">XNOR</td><td style="border:1px solid #ccc;padding:6px">XNOR</td><td style="border:1px solid #ccc;padding:6px">Gegenteil von XOR</td><td style="border:1px solid #ccc;padding:6px">1 wenn beide gleich</td></tr>'
        + '</table>'
        + '<div class="why-context">'
        + '<strong>Warum sieben Operatoren?</strong> Theoretisch gen\u00FCgen AND, OR, NOT \u2013 alles andere l\u00E4sst sich daraus bauen. XOR, NAND, NOR, XNOR sind aber in der Hardware <em>effizienter umsetzbar</em>. Deshalb lernst du sie als eigene Bausteine mit eigenen Gatter-Symbolen.'
        + '</div>'
        + '<h3>Operatorrangfolge (klausurrelevant!)</h3>'
        + '<p>Wie Punkt-vor-Strich in der Mathematik gibt es eine feste Reihenfolge:</p>'
        + '<p><strong>NOT</strong> (st\u00E4rkste Bindung) \u2192 <strong>AND</strong> \u2192 <strong>OR</strong> (schw\u00E4chste)</p>'
        + '<p>Beispiel: <code>\u00ACa \u2227 b \u2228 c</code> wird gelesen als <code>((\u00ACa) \u2227 b) \u2228 c</code>. Klammern \u00FCberschreiben die Rangfolge.</p>'
        + '<div class="reading-guide">'
        + '<strong>Probier\u2019s selbst:</strong> Unten findest du alle vier Kern-Gatter als interaktive Simulationen. Klicke die Eing\u00E4nge und pr\u00FCfe, ob das Verhalten zu deiner Alltagsintuition passt. Besonders interessant: Vergleiche OR und XOR bei Eingabe 1,1 \u2013 OR gibt 1, XOR gibt 0.'
        + '</div>',
      visuals: [
        { type: 'gate-sim', gate: 'and', label: 'AND \u2013 beide Eing\u00E4nge m\u00FCssen 1 sein' },
        { type: 'gate-sim', gate: 'or', label: 'OR \u2013 mindestens ein Eingang muss 1 sein' },
        { type: 'gate-sim', gate: 'not', label: 'NOT \u2013 kehrt den Eingang um' },
        { type: 'gate-sim', gate: 'xor', label: 'XOR \u2013 genau ein Eingang muss 1 sein (1\u22951=0, das ist der Clou!)' }
      ]
    },
    example: {
      title: 'Beispiel: XOR vs. OR',
      steps: [
        {
          label: 'OR (inklusives Oder)',
          html:
            '<p>&#8222;Ich m&ouml;chte Tee <strong>&#8744;</strong> Kaffee.&#8220; &ndash; Das ist auch wahr wenn ich beides m&ouml;chte! '
            + 'Das logische OR ist wahr, wenn mindestens einer wahr ist &ndash; auch wenn beide wahr sind.</p>'
            + '<p><code>1 &#8744; 1 = 1</code></p>'
        },
        {
          label: 'XOR (exklusives Oder)',
          html:
            '<p>&#8222;Entweder Tee <strong>&#8853;</strong> Kaffee (aber nicht beides).&#8220; &ndash; '
            + 'XOR ist nur wahr, wenn genau einer der Eing&auml;nge 1 ist.</p>'
            + '<p><code>1 &#8853; 1 = 0</code>, aber <code>1 &#8853; 0 = 1</code></p>'
        },
        {
          label: 'Operatorrangfolge',
          html:
            '<p>Ausdruck: <code>a &#8743; &#172;b &#8744; c</code></p>'
            + '<p>Auswertung: 1. <code>&#172;b</code>, 2. <code>a &#8743; &#172;b</code>, 3. <code>(a &#8743; &#172;b) &#8744; c</code></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welchen Wert ergibt 1 \u2295 1 (XOR)?',
        options: [
          '0 \u2013 beide sind gleich, XOR ist dann 0',
          '1 \u2013 mindestens einer ist 1',
          '2 \u2013 beide zusammen',
          'Ung\u00fcltig'
        ],
        correct: 0,
        explanation: 'XOR (Exklusiv-Oder) ergibt 1 nur wenn genau EINER der Eing\u00e4nge 1 ist. Bei 1\u22951 sind beide 1 \u2192 Ergebnis 0.'
      },
      {
        type: 'multiple-choice',
        question: 'In welcher Reihenfolge werden Operatoren ausgewertet?',
        options: [
          'OR vor AND vor NOT',
          'NOT vor AND vor OR (wie Punkt-vor-Strich)',
          'AND vor OR vor NOT',
          'Alle gleichwertig, von links nach rechts'
        ],
        correct: 1,
        explanation: 'Rangfolge: NOT bindet am st\u00e4rksten, dann AND, dann OR. \u00aca\u2227b\u2228c = ((\u00aca)\u2227b)\u2228c.'
      },
      {
        type: 'truth-table',
        question: 'F\u00fclle die Wahrheitstabelle f\u00fcr XOR (a \u2295 b) aus:',
        variables: ['a', 'b'],
        resultColumns: ['a \u2295 b'],
        correctResults: [[0],[1],[1],[0]]
      },
      {
        type: 'multiple-choice',
        question: 'Was ergibt \u00aca \u2227 b wenn a=1 und b=1?',
        options: [
          '0 \u2013 weil \u00ac1=0, und 0\u22271=0',
          '1 \u2013 weil beide 1',
          '1 \u2013 weil \u00ac(1\u22271)=0... warte, das ist NAND',
          '0 \u2013 weil \u00aca=\u00ac1=0'
        ],
        correct: 0,
        explanation: 'Erst NOT: \u00aca = \u00ac1 = 0. Dann AND: 0\u22271 = 0. Also \u00aca\u2227b = 0.'
      }
    ]
  },

  // ===== LEKTION 3: Wahrheitstabelle aus Ausdruck erstellen =====
  {
    id: 3,
    title: 'Wahrheitstabelle aus Ausdruck erstellen',
    explanation: {
      html:
        '<h2>Wahrheitstabelle aus Ausdruck erstellen</h2>'
        + '<p>Eine Wahrheitstabelle zeigt f\u00FCr <strong>alle m\u00F6glichen Eingaben</strong>, was der Ausdruck ergibt. Sie ist das wichtigste Werkzeug der Logik-Klausur.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie \u2013 Kochrezept:</strong> Ein komplexer logischer Ausdruck ist wie ein Kochrezept mit mehreren Zwischenschritten. Du kannst nicht in einem Schritt \u201EPfannkuchen\u201C aus Mehl/Milch/Eiern zaubern \u2013 du mischst erst den Teig (Hilfsspalte 1), backst ihn dann an (Hilfsspalte 2), servierst ihn mit Belag (Ergebnis). Genauso rechnest du jede Wahrheitstabelle: von innen nach au\u00DFen, mit Zwischenergebnissen als Hilfsspalten.'
        + '</div>'
        + '<h3>Vorgehen in 4 Schritten:</h3>'
        + '<ol>'
        + '<li><strong>Variablen z\u00E4hlen:</strong> n Variablen \u2192 2<sup>n</sup> Zeilen. (2 Var. = 4 Zeilen, 3 Var. = 8 Zeilen, 4 Var. = 16 Zeilen)</li>'
        + '<li><strong>Spalten anlegen:</strong> Eine Spalte pro Variable, dann eine pro Hilfsausdruck, zuletzt das Ergebnis.</li>'
        + '<li><strong>Bin\u00E4r aufsteigend z\u00E4hlen:</strong> Erste Zeile: alle 0. Letzte Zeile: alle 1. Die <em>linkste</em> Variable wechselt am <em>seltensten</em>.</li>'
        + '<li><strong>Teilausdr\u00FCcke berechnen:</strong> Von innen nach au\u00DFen \u2013 <em>Klammern zuerst</em>, dann NOT, dann AND, dann OR.</li>'
        + '</ol>'
        + '<div class="why-context">'
        + '<strong>Warum Hilfsspalten?</strong> Ohne Hilfsspalten machst du jede Rechnung im Kopf \u2013 und in der Klausur vergisst du unter Stress die Rangfolge oder eine Klammer. Mit Hilfsspalten baust du die WTT in kleinen, kontrollierbaren Bausteinen. In Pr\u00FCfungen ist es genau <em>ein Fehler weniger pro Zeile</em>, wenn du 5 Spalten statt 3 hast. Die paar Sekunden mehr zum Zeichnen lohnen sich.'
        + '</div>'
        + '<h3>Ausdruck als Baum visualisiert:</h3>'
        + '<p>Unten siehst du den Ausdruck aus dem Beispiel als <strong>Baumdiagramm</strong>. Die Baumstruktur zeigt dir die Rangfolge visuell: Die <em>unteren</em> Knoten werden zuerst berechnet, die <em>oberen</em> zuletzt. Eine gute Hilfe, um die Hilfsspalten in der richtigen Reihenfolge anzulegen.</p>',
      visuals: [
        { type: 'expression-tree', expression: '((a \u2228 b) \u2227 \u00acb) \u2227 (b \u2228 (a \u2227 \u00acb))', label: 'Beispiel-Ausdruck als Baum \u2013 unten rechnen, oben fertig' }
      ]
    },
    example: {
      title: 'Klausur-Beispiel: ((a \u2228 b) \u2227 \u00acb) \u2227 (b \u2228 (a \u2227 \u00acb))',
      steps: [
        {
          label: 'Schritt 1: Hilfsspalten planen',
          html:
            '<p>Ausdruck: <code>((a &#8744; b) &#8743; &#172;b) &#8743; (b &#8744; (a &#8743; &#172;b))</code><br>'
            + 'Hilfsspalten: &#172;b, a&#8744;b, (a&#8744;b)&#8743;&#172;b, a&#8743;&#172;b, b&#8744;(a&#8743;&#172;b), Ergebnis</p>'
        },
        {
          label: 'Schritt 2: Tabelle f&uuml;llen',
          html:
            '<table style="border-collapse:collapse;font-size:13px;margin:8px 0">'
            + '<tr style="background:#f0f0f0">'
            + '<th style="border:1px solid #ccc;padding:4px">a</th>'
            + '<th style="border:1px solid #ccc;padding:4px">b</th>'
            + '<th style="border:1px solid #ccc;padding:4px">&#172;b</th>'
            + '<th style="border:1px solid #ccc;padding:4px">a&#8744;b</th>'
            + '<th style="border:1px solid #ccc;padding:4px">(a&#8744;b)&#8743;&#172;b</th>'
            + '<th style="border:1px solid #ccc;padding:4px">a&#8743;&#172;b</th>'
            + '<th style="border:1px solid #ccc;padding:4px">b&#8744;(a&#8743;&#172;b)</th>'
            + '<th style="border:1px solid #ccc;padding:4px"><strong>Ergebnis</strong></th></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px"><strong>0</strong></td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px"><strong>0</strong></td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px"><strong>1</strong></td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px"><strong>0</strong></td></tr>'
            + '</table>'
        },
        {
          label: 'Ergebnis',
          html:
            '<p>Der Ausdruck ergibt nur f&uuml;r <strong>a=1, b=0</strong> den Wert 1. '
            + 'In allen anderen F&auml;llen ist er 0.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie viele Zeilen hat eine Wahrheitstabelle mit 3 Variablen?',
        options: ['3', '6', '8', '16'],
        correct: 2,
        explanation: '2\u00b3 = 8 Zeilen. Allgemein: n Variablen \u2192 2\u207f Zeilen.'
      },
      {
        type: 'truth-table',
        question: 'Erstelle die Wahrheitstabelle f\u00fcr den Ausdruck (a \u2227 b) \u2228 \u00aca:',
        variables: ['a', 'b'],
        resultColumns: ['(a\u2227b)\u2228\u00aca'],
        correctResults: [[1],[1],[0],[1]]
      },
      {
        type: 'truth-table',
        examRelevant: true,
        question: 'Klausur-Aufgabe: Erstelle die Wahrheitstabelle f\u00fcr ((a \u2228 b) \u2227 \u00acb) \u2227 (b \u2228 (a \u2227 \u00acb)):',
        variables: ['a', 'b'],
        resultColumns: ['Ergebnis'],
        correctResults: [[0],[0],[1],[0]]
      }
    ]
  },

  // ===== LEKTION 4: Disjunktive Normalform (DNF) ableiten =====
  {
    id: 4,
    title: 'Disjunktive Normalform (DNF) ableiten',
    explanation: {
      html:
        '<h2>Disjunktive Normalform (DNF) ableiten</h2>'
        + '<p>Die DNF ist eine <strong>standardisierte Form</strong> eines logischen Ausdrucks: Sie besteht aus <strong>OR-verkn\u00FCpften AND-Termen</strong> (sogenannten <em>Mintermen</em>).</p>'
        + '<div class="analogy-box">'
        + '<strong>Puzzle-Analogie:</strong> Stell dir vor, du beschreibst alle Situationen, in denen die Lampe an ist. Jede Zeile der Wahrheitstabelle mit Ergebnis=1 ist ein Puzzleteil. Ein Minterm sagt: \u201EIn dieser <em>exakten</em> Kombination leuchtet die Lampe.\u201C Die DNF setzt alle Puzzleteile mit ODER zusammen: \u201ELampe leuchtet, wenn Situation A ODER Situation B ODER Situation C vorliegt.\u201C'
        + '</div>'
        + '<h3>Minterm-Regel:</h3>'
        + '<p>F\u00FCr jede Zeile in der Wahrheitstabelle, wo das Ergebnis <strong>1</strong> ist, schreibst du einen Minterm:</p>'
        + '<ul>'
        + '<li>Variable mit Wert <strong>1</strong> in der Zeile \u2192 Variable <em>direkt</em> \u00FCbernehmen (z.B. <code>a</code>)</li>'
        + '<li>Variable mit Wert <strong>0</strong> in der Zeile \u2192 Variable <em>negieren</em> (z.B. <code>\u00ACb</code>)</li>'
        + '<li>Die Variablen mit AND (\u2227) verkn\u00FCpfen \u2192 fertiger Minterm</li>'
        + '</ul>'
        + '<p>Dann <strong>alle Minterme mit OR verbinden</strong> \u2192 fertige DNF!</p>'
        + '<div class="why-context">'
        + '<strong>Wozu die DNF?</strong> Die DNF ist eine \u201EStandardform\u201C, auf die man jeden logischen Ausdruck bringen kann. Sobald zwei Ausdr\u00FCcke in DNF sind, lassen sie sich leicht vergleichen. Au\u00DFerdem ist die DNF 1:1 in Gatter-Hardware umsetzbar: so viele AND-Gatter wie Minterme, dahinter ein gro\u00DFes OR-Gatter. Das ist einer der Gr\u00FCnde, warum Schaltwerke oft zun\u00E4chst als DNF formuliert werden.'
        + '</div>'
        + '<p>Unten siehst du die Beispiel-Wahrheitstabelle mit <strong>farbig markierten 1-Zeilen</strong> und der dazugeh\u00F6rigen DNF darunter. Jede farbige Zeile entspricht einem Minterm in der Formel.</p>',
      visuals: [
        { type: 'dnf-highlighter', variables: ['a', 'b', 'c'], results: [0, 1, 0, 0, 1, 0, 0, 0], label: 'WTT mit 2 Einsen \u2192 DNF mit 2 Mintermen' }
      ]
    },
    example: {
      title: 'Beispiel: DNF aus Wahrheitstabelle ableiten',
      steps: [
        {
          label: 'Gegebene Wahrheitstabelle',
          html:
            '<table style="border-collapse:collapse;margin:8px 0">'
            + '<tr style="background:#f0f0f0">'
            + '<th style="border:1px solid #ccc;padding:4px">a</th>'
            + '<th style="border:1px solid #ccc;padding:4px">b</th>'
            + '<th style="border:1px solid #ccc;padding:4px">c</th>'
            + '<th style="border:1px solid #ccc;padding:4px">f</th></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr style="background:#d4edda"><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px"><strong>1</strong></td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr style="background:#d4edda"><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px"><strong>1</strong></td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '</table>'
            + '<p>Zwei Zeilen mit f=1 (gr&uuml;n markiert).</p>'
        },
        {
          label: 'Minterme bilden',
          html:
            '<p><strong>Zeile 2 (a=0,b=0,c=1):</strong> a=0&rarr;&#172;a, b=0&rarr;&#172;b, c=1&rarr;c &rarr; Minterm: <code>&#172;a &#8743; &#172;b &#8743; c</code></p>'
            + '<p><strong>Zeile 5 (a=1,b=0,c=0):</strong> a=1&rarr;a, b=0&rarr;&#172;b, c=0&rarr;&#172;c &rarr; Minterm: <code>a &#8743; &#172;b &#8743; &#172;c</code></p>'
        },
        {
          label: 'DNF zusammensetzen',
          html:
            '<p>Beide Minterme mit OR verbinden:</p>'
            + '<p><code>f = (&#172;a &#8743; &#172;b &#8743; c) &#8744; (a &#8743; &#172;b &#8743; &#172;c)</code></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist ein Minterm in der DNF?',
        options: [
          'Ein AND-Term f\u00fcr eine Zeile, wo das Ergebnis 1 ist',
          'Ein OR-Term f\u00fcr alle Eingaben',
          'Eine Zeile wo das Ergebnis 0 ist',
          'Der Name f\u00fcr die Kurzform eines Ausdrucks'
        ],
        correct: 0,
        explanation: 'Ein Minterm ist ein AND-Term der genau eine Zeile der Wahrheitstabelle beschreibt, in der das Ergebnis 1 ist.'
      },
      {
        type: 'multiple-choice',
        question: 'WTT-Zeile: a=0, b=1. Welcher Minterm geh\u00f6rt dazu (wenn Ergebnis=1)?',
        options: [
          'a \u2227 b',
          '\u00aca \u2227 b',
          'a \u2227 \u00acb',
          '\u00aca \u2227 \u00acb'
        ],
        correct: 1,
        explanation: 'a=0 \u2192 negieren \u2192 \u00aca. b=1 \u2192 direkt \u2192 b. Minterm: \u00aca \u2227 b.'
      },
      {
        type: 'multiple-choice',
        question: 'Eine Wahrheitstabelle hat 3 Einsen. Wie viele Terme hat die DNF?',
        options: ['1', '2', '3', 'H\u00e4ngt vom Ausdruck ab'],
        correct: 2,
        explanation: 'Pro Zeile mit Ergebnis 1 entsteht genau ein Minterm. 3 Einsen \u2192 3 Terme in der DNF.'
      }
    ]
  },

  // ===== LEKTION 5: Äquivalenz mit Wahrheitstabellen beweisen =====
  {
    id: 5,
    title: '\u00c4quivalenz mit Wahrheitstabellen beweisen',
    explanation: {
      html:
        '<h2>\u00C4quivalenz mit Wahrheitstabellen beweisen</h2>'
        + '<p>Zwei logische Ausdr\u00FCcke sind <strong>\u00E4quivalent</strong>, wenn sie f\u00FCr <em>alle m\u00F6glichen Eingaben</em> <strong>dasselbe Ergebnis</strong> liefern. Das ist eines der wichtigsten Konzepte der Schaltalgebra \u2013 und gleichzeitig eine typische Klausur-Aufgabe.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie \u2013 zwei Wege zum gleichen Ziel:</strong> Zwei Ausdr\u00FCcke k\u00F6nnen syntaktisch <em>v\u00F6llig verschieden aussehen</em>, aber trotzdem genau dasselbe Verhalten haben. Wie zwei verschiedene Rezepte, die denselben Pfannkuchen ergeben. Um zu beweisen, dass sie \u00E4quivalent sind, zeigst du, dass sie unter jeder Bedingung dasselbe liefern \u2013 dazu nimmst du die Wahrheitstabelle.'
        + '</div>'
        + '<h3>Vorgehen:</h3>'
        + '<ol>'
        + '<li>Erstelle eine <strong>gemeinsame Wahrheitstabelle</strong> mit zwei Ergebnisspalten \u2013 eine pro Ausdruck.</li>'
        + '<li>F\u00FClle beide Spalten vollst\u00E4ndig aus (Hilfsspalten sind erlaubt!).</li>'
        + '<li>Vergleiche die Spalten: Sind sie <strong>zeilenweise identisch</strong>? \u2192 \u00C4quivalent!</li>'
        + '<li>Unterscheiden sie sich an <em>auch nur einer</em> Zeile? \u2192 <strong>Nicht</strong> \u00E4quivalent. Diese eine Zeile ist dann das Gegenbeispiel.</li>'
        + '</ol>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> \u00C4quivalenz-Beweise sind die Basis f\u00FCr <em>Schaltungsvereinfachung</em>. In der Praxis will man eine Schaltung mit weniger Gattern bauen \u2013 wenn der einfachere Ausdruck \u00E4quivalent zum komplizierten ist, darf man ihn verwenden. Das spart Chip-Fl\u00E4che und Stromverbrauch. De-Morgansches Gesetz, Distributivgesetz usw. sind alle \u00C4quivalenzen, die du mit WTT beweisen kannst.'
        + '</div>'
        + '<p><strong>Klausur-Merke:</strong> Es reicht <em>nicht</em>, zu sagen \u201Esehen gleich aus\u201C. Du musst die vollst\u00E4ndige Wahrheitstabelle aufschreiben und explizit sagen: \u201EBeide Spalten stimmen zeilenweise \u00FCberein \u2192 \u00E4quivalent.\u201C Das kostet 2 Minuten und gibt volle Punkte.</p>'
    },
    example: {
      title: 'Klausur-Beispiel: (a \u2228 b) \u2227 c = (a \u2227 c) \u2228 (b \u2227 c) ?',
      steps: [
        {
          label: 'Gemeinsame WTT aufstellen',
          html:
            '<table style="border-collapse:collapse;font-size:13px;margin:8px 0">'
            + '<tr style="background:#f0f0f0">'
            + '<th style="border:1px solid #ccc;padding:4px">a</th>'
            + '<th style="border:1px solid #ccc;padding:4px">b</th>'
            + '<th style="border:1px solid #ccc;padding:4px">c</th>'
            + '<th style="border:1px solid #ccc;padding:4px">(a&#8744;b)&#8743;c</th>'
            + '<th style="border:1px solid #ccc;padding:4px">(a&#8743;c)&#8744;(b&#8743;c)</th></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td></tr>'
            + '</table>'
        },
        {
          label: 'Vergleich',
          html:
            '<p>Beide Spalten stimmen in jeder Zeile &uuml;berein &rarr; Die Ausdr&uuml;cke sind <strong>&auml;quivalent</strong>! &#10003;</p>'
            + '<p>Diese Regel hei&szlig;t <em>Distributivgesetz</em>: <code>(a &#8744; b) &#8743; c = (a &#8743; c) &#8744; (b &#8743; c)</code></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie beweist man \u00c4quivalenz von zwei Ausdr\u00fccken in der Klausur?',
        options: [
          'Man zeigt algebraisch dass sie gleich sind',
          'Man erstellt eine gemeinsame WTT und vergleicht die Ergebnisspalten zeilenweise',
          'Man zeichnet beide Gatterschaltungen und vergleicht sie',
          'Es reicht ein Beispiel zu rechnen'
        ],
        correct: 1,
        explanation: 'In der Klausur: vollst\u00e4ndige Wahrheitstabelle mit beiden Ausdr\u00fccken als Spalten. Wenn alle Zeilen \u00fcbereinstimmen \u2192 \u00e4quivalent.'
      },
      {
        type: 'truth-table',
        examRelevant: true,
        question: 'Beweise die \u00c4quivalenz: F\u00fclle WTT f\u00fcr (a\u2228b)\u2227c und (a\u2227c)\u2228(b\u2227c) aus:',
        variables: ['a', 'b', 'c'],
        resultColumns: ['(a\u2228b)\u2227c', '(a\u2227c)\u2228(b\u2227c)'],
        correctResults: [[0,0],[0,0],[0,0],[1,1],[0,0],[1,1],[0,0],[1,1]]
      },
      {
        type: 'multiple-choice',
        question: 'Sind \u00ac(a \u2227 b) und (\u00aca \u2228 \u00acb) \u00e4quivalent? (de Morgan)',
        options: [
          'Ja \u2013 das ist das de Morgansche Gesetz, beide haben die gleiche WTT',
          'Nein \u2013 NOT verteilt sich nicht \u00fcber AND',
          'Nur wenn a=b',
          'Nur wenn beide 0 sind'
        ],
        correct: 0,
        explanation: 'De Morgansches Gesetz: \u00ac(a\u2227b) = \u00aca\u2228\u00acb. Pr\u00fcfbar durch WTT \u2013 beide liefern f\u00fcr alle Kombinationen dasselbe.'
      }
    ]
  },

  // ===== LEKTION 6: Gatterschaltungen zeichnen & lesen =====
  {
    id: 6,
    title: 'Gatterschaltungen zeichnen & lesen',
    explanation: {
      html:
        '<h2>Gatterschaltungen zeichnen & lesen</h2>'
        + '<p>Gatter sind die <strong>Hardware-Umsetzung</strong> logischer Operatoren. Auf einem Computer-Chip gibt es Millionen davon. In Deutschland und f\u00FCr diese Klausur verwenden wir die <strong>IEC 60617-12 Norm</strong> \u2013 rechteckige K\u00E4sten mit einem Symbol drin.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie \u2013 Lego-Bausteine:</strong> Jedes Gatter ist ein fester Baustein mit klar definierter Funktion. Du kannst sie zu beliebig gro\u00DFen Schaltungen zusammenstecken, solange du die Leserichtung einh\u00E4ltst (Eing\u00E4nge links, Ausgang rechts). Ein Chip ist \u201Enur\u201C eine riesige Lego-Burg aus solchen Bausteinen.'
        + '</div>'
        + '<h3>IEC 60617-12-Symbole:</h3>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0">'
        + '<th style="border:1px solid #ccc;padding:6px">Gatter</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Symbol im Kasten</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Bedeutung</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">AND</td><td style="border:1px solid #ccc;padding:6px"><code>&</code></td><td style="border:1px solid #ccc;padding:6px">Alle Eing\u00E4nge m\u00FCssen 1 sein</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">OR</td><td style="border:1px solid #ccc;padding:6px"><code>\u22651</code></td><td style="border:1px solid #ccc;padding:6px">Mindestens ein Eingang muss 1 sein</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">NOT</td><td style="border:1px solid #ccc;padding:6px"><code>1</code> mit Kringel am Ausgang</td><td style="border:1px solid #ccc;padding:6px">Negiert (0\u21921, 1\u21920)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">XOR</td><td style="border:1px solid #ccc;padding:6px"><code>=1</code></td><td style="border:1px solid #ccc;padding:6px">Genau einer muss 1 sein</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">NAND</td><td style="border:1px solid #ccc;padding:6px"><code>&</code> mit Kringel</td><td style="border:1px solid #ccc;padding:6px">AND negiert</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">NOR</td><td style="border:1px solid #ccc;padding:6px"><code>\u22651</code> mit Kringel</td><td style="border:1px solid #ccc;padding:6px">OR negiert</td></tr>'
        + '</table>'
        + '<p><strong>Merkregel: Kringel am Ausgang = Negation.</strong> Das funktioniert universell: jedes Gatter kann \u201Enegiert\u201C werden, indem du einen Kringel anh\u00E4ngst.</p>'
        + '<div class="why-context">'
        + '<strong>Warum IEC-Symbole (und nicht die geschwungenen US-Symbole)?</strong> In Deutschland standardisiert; kompakter; auf Karopapier gut zeichenbar; und eindeutig. Die US-Symbole (D-f\u00F6rmiges AND, nach-innen-gew\u00F6lbtes OR) wirken intuitiver, sind aber in deiner Klausur <em>falsch</em>. Nutze immer die Rechteck-Variante.'
        + '</div>'
        + '<h3>Drei Klausur-Skills:</h3>'
        + '<ol>'
        + '<li><strong>Ausdruck \u2192 Gatter zeichnen:</strong> Klammern von innen nach au\u00DFen als Gatter aufbauen. Beispiel <code>(a \u2228 b) \u2227 c</code>: zuerst OR-Gatter f\u00FCr (a\u2228b), dann AND-Gatter, das den OR-Ausgang und c verbindet.</li>'
        + '<li><strong>Gatter \u2192 Ausdruck lesen:</strong> Von rechts (Ausgang) nach links arbeiten. Letztes Gatter liefert den Haupt-Operator, dessen Eing\u00E4nge werden zu den Teil-Ausdr\u00FCcken.</li>'
        + '<li><strong>XOR aus AND/OR/NOT bauen:</strong> <code>a \u2295 b = (a \u2227 \u00acb) \u2228 (\u00aca \u2227 b)</code> \u2013 siehst du unten als interaktive Schaltung!</li>'
        + '</ol>'
        + '<div class="reading-guide">'
        + '<strong>So liest du die XOR-Konstruktion unten:</strong>'
        + '<ul style="margin:6px 0 0 0;padding-left:20px">'
        + '<li>Oberer Pfad: <code>a</code> direkt + <code>b</code> durch NOT \u2192 AND-Gatter \u2192 liefert <code>a \u2227 \u00acb</code></li>'
        + '<li>Unterer Pfad: <code>a</code> durch NOT + <code>b</code> direkt \u2192 AND-Gatter \u2192 liefert <code>\u00aca \u2227 b</code></li>'
        + '<li>OR-Gatter rechts kombiniert beide \u2192 <code>z = a \u2295 b</code></li>'
        + '<li>Klicke a und b durch alle 4 Kombinationen und pr\u00FCfe die XOR-Wahrheitstabelle.</li>'
        + '</ul>'
        + '</div>'
        + '<div class="circuit-legend">'
        + '<span class="legend-item"><span class="legend-symbol">&</span>AND</span>'
        + '<span class="legend-item"><span class="legend-symbol">\u22651</span>OR</span>'
        + '<span class="legend-item"><span class="legend-symbol">1\u00B0</span>NOT</span>'
        + '</div>',
      visuals: [
        { type: 'circuit', circuit: 'c1-l6-xor-construction', label: 'XOR aus AND/OR/NOT gebaut \u2013 klicke a und b' }
      ]
    },
    example: {
      title: 'Klausur-Beispiel: Gatterschaltungen',
      steps: [
        {
          label: 'XOR aus AND, OR, NOT',
          html:
            '<p>XOR-Wahrheitstabelle zeigt: <code>a&#8853;b = 1</code> genau wenn a&#8800;b.</p>'
            + '<p>Formel: <code>a &#8853; b = (a &#8743; &#172;b) &#8744; (&#172;a &#8743; b)</code></p>'
            + '<p>Schaltung: Zwei NOT-Gatter (f&uuml;r &#172;a und &#172;b), '
            + 'zwei AND-Gatter ((a&#8743;&#172;b) und (&#172;a&#8743;b)), '
            + 'ein OR-Gatter f&uuml;r das Ergebnis.</p>'
        },
        {
          label: 'Ausdruck: z = (a \u2227 (\u00aca \u2228 b)) \u2228 ((a \u2227 b) \u2228 \u00aca)',
          html:
            '<p>Von innen nach au&szlig;en:<br>'
            + '1. NOT-Gatter: &#172;a<br>'
            + '2. OR-Gatter: &#172;a &#8744; b<br>'
            + '3. AND-Gatter: a &#8743; (&#172;a &#8744; b)<br>'
            + '4. AND-Gatter: a &#8743; b<br>'
            + '5. OR-Gatter: (a&#8743;b) &#8744; &#172;a<br>'
            + '6. OR-Gatter: Ergebnis z</p>'
        },
        {
          label: 'Gatter \u2192 Ausdruck lesen',
          html:
            '<p>Am Ausgang beginnen und r&uuml;ckw&auml;rts lesen: '
            + 'Was sind die Eing&auml;nge des letzten Gatters? '
            + 'Was produzieren die Vorg&auml;nger-Gatter?</p>'
            + '<p>Kreis am Ausgang = Negation (NAND, NOR, XNOR)</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welches Symbol hat das AND-Gatter in der IEC 60617-12 Norm?',
        options: ['&', '\u22651', '=1', '>1'],
        correct: 0,
        explanation: 'AND-Gatter: "&" (alle Eing\u00e4nge m\u00fcssen 1 sein). OR-Gatter: "\u22651" (mindestens einer muss 1 sein).'
      },
      {
        type: 'multiple-choice',
        question: 'Wie baut man ein XOR-Gatter aus AND, OR und NOT Gattern?',
        options: [
          'a \u2295 b = (a \u2227 \u00acb) \u2228 (\u00aca \u2227 b) \u2013 zwei NOT, zwei AND, ein OR',
          'a \u2295 b = \u00aca \u2227 \u00acb \u2013 zwei NOT, ein AND',
          'a \u2295 b = a \u2228 b \u2013 ein OR reicht',
          'a \u2295 b = \u00ac(a \u2227 b) \u2013 ein NAND'
        ],
        correct: 0,
        explanation: 'XOR = (a\u2227\u00acb)\u2228(\u00aca\u2227b): Jeweils einer der Eing\u00e4nge ist 1, der andere 0. Ben\u00f6tigt 2 NOT-Gatter, 2 AND-Gatter, 1 OR-Gatter.'
      },
      {
        type: 'multiple-choice',
        question: 'Was bedeutet ein kleiner Kreis am Ausgang eines Gatters?',
        options: [
          'Negation \u2013 der Ausgang wird invertiert (NAND, NOR, XNOR)',
          'Der Ausgang ist optional',
          'Stromverst\u00e4rkung',
          'Verbindungspunkt'
        ],
        correct: 0,
        explanation: 'Ein Kreis am Gatter-Ausgang bedeutet Negation. AND + Kreis = NAND (not-AND). OR + Kreis = NOR.'
      },
      {
        type: 'truth-table',
        examRelevant: true,
        question: '\u00dcberpr\u00fcfe: a \u2295 b = (a \u2227 \u00acb) \u2228 (\u00aca \u2227 b). F\u00fclle WTT aus:',
        variables: ['a', 'b'],
        resultColumns: ['a\u2295b', '(a\u2227\u00acb)\u2228(\u00aca\u2227b)'],
        correctResults: [[0,0],[1,1],[1,1],[0,0]]
      }
    ]
  }

];
