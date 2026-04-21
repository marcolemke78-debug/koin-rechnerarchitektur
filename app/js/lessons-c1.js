const LessonsC1 = [

  // ===== LEKTION 1: Schaltkreise lesen & umwandeln =====
  {
    id: 1,
    title: 'Schaltkreise lesen & umwandeln',
    explanation: {
      html:
        '<h2>Schaltkreise lesen & umwandeln</h2>'
        + '<p>Stell dir einen <strong>Lichtschalter</strong> vor: Entweder flie&szlig;t Strom (1) oder nicht (0). '
        + 'Schaltkreise aus dem Alltag lassen sich in logische Ausdr&uuml;cke und Gatterschaltungen &uuml;bersetzen.</p>'
        + '<h3>Serienschaltung &rarr; AND (&#8743;)</h3>'
        + '<p>Die Schalter liegen <strong>hintereinander</strong> &ndash; wie zwei T&uuml;ren, durch die man nacheinander muss. '
        + 'Die Lampe leuchtet nur, wenn <strong>beide</strong> Schalter geschlossen sind.</p>'
        + '<h3>Parallelschaltung &rarr; OR (&#8744;)</h3>'
        + '<p>Die Schalter liegen <strong>nebeneinander</strong> &ndash; wie zwei Wege zum Ziel. '
        + 'Die Lampe leuchtet, wenn <strong>mindestens einer</strong> der Schalter geschlossen ist.</p>'
        + '<h3>Klausur-Vorgehen (3 Schritte):</h3>'
        + '<ol>'
        + '<li><strong>Schaltkreis lesen</strong> &rarr; logischen Ausdruck aufschreiben</li>'
        + '<li><strong>Wahrheitstabelle erstellen</strong> &rarr; alle 2<sup>n</sup> Kombinationen, bin&auml;r aufsteigend</li>'
        + '<li><strong>Gatterschaltung zeichnen</strong> &rarr; IEC-Symbole verwenden</li>'
        + '</ol>'
    },
    example: {
      title: 'Klausur-Beispiel: Schaltkreis S1, S2, S3',
      steps: [
        {
          label: 'Schaltkreis lesen',
          html:
            '<p>S2 und S3 sind parallel &rarr; <code>S2 &#8744; S3</code>. '
            + 'Dieser Block liegt in Serie mit S1 &rarr; <code>S1 &#8743; (S2 &#8744; S3)</code>.</p>'
        },
        {
          label: 'Wahrheitstabelle (8 Zeilen, 3 Variablen)',
          html:
            '<table style="border-collapse:collapse;margin:8px 0">'
            + '<tr><th style="border:1px solid #ccc;padding:4px">S1</th>'
            + '<th style="border:1px solid #ccc;padding:4px">S2</th>'
            + '<th style="border:1px solid #ccc;padding:4px">S3</th>'
            + '<th style="border:1px solid #ccc;padding:4px">L</th></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">0</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">0</td><td style="border:1px solid #ccc;padding:4px">1</td></tr>'
            + '<tr><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td><td style="border:1px solid #ccc;padding:4px">1</td></tr>'
            + '</table>'
        },
        {
          label: 'Gatterschaltung',
          html:
            '<p>Zwei Eing&auml;nge (S2, S3) in ein <strong>OR-Gatter</strong> (Symbol: &#8805;1). '
            + 'Der Ausgang des OR-Gatters und S1 gehen in ein <strong>AND-Gatter</strong> (Symbol: &amp;). '
            + 'Ausgang des AND-Gatters = L.</p>'
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
        + '<p>Logische Operatoren verkn&uuml;pfen Wahrheitswerte (0 oder 1). Hier sind die 7 wichtigsten:</p>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0">'
        + '<th style="border:1px solid #ccc;padding:6px">Symbol</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Name</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Bedeutung</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Merkhilfe</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><code>&#8743;</code></td><td style="border:1px solid #ccc;padding:6px">AND</td><td style="border:1px solid #ccc;padding:6px">1 nur wenn beide 1</td><td style="border:1px solid #ccc;padding:6px">Beide T&uuml;ren auf</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><code>&#8744;</code></td><td style="border:1px solid #ccc;padding:6px">OR</td><td style="border:1px solid #ccc;padding:6px">1 wenn mind. einer 1</td><td style="border:1px solid #ccc;padding:6px">Eine T&uuml;r reicht</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><code>&#172;</code></td><td style="border:1px solid #ccc;padding:6px">NOT</td><td style="border:1px solid #ccc;padding:6px">Kehrt Wert um</td><td style="border:1px solid #ccc;padding:6px">Lichtschalter umdrehen</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><code>&#8853;</code></td><td style="border:1px solid #ccc;padding:6px">XOR</td><td style="border:1px solid #ccc;padding:6px">1 nur wenn genau einer 1</td><td style="border:1px solid #ccc;padding:6px">Entweder-oder (aber nicht beides)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><code>&#8593;</code> oder NAND</td><td style="border:1px solid #ccc;padding:6px">NAND</td><td style="border:1px solid #ccc;padding:6px">Gegenteil von AND</td><td style="border:1px solid #ccc;padding:6px">NOT(a &#8743; b)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><code>&#8595;</code> oder NOR</td><td style="border:1px solid #ccc;padding:6px">NOR</td><td style="border:1px solid #ccc;padding:6px">Gegenteil von OR</td><td style="border:1px solid #ccc;padding:6px">NOT(a &#8744; b)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">XNOR</td><td style="border:1px solid #ccc;padding:6px">XNOR</td><td style="border:1px solid #ccc;padding:6px">Gegenteil von XOR</td><td style="border:1px solid #ccc;padding:6px">1 wenn beide gleich</td></tr>'
        + '</table>'
        + '<h3>Operatorrangfolge (wichtig f&uuml;r die Klausur!)</h3>'
        + '<p><strong>NOT bindet am st&auml;rksten</strong>, dann AND, dann OR. Wie Punkt-vor-Strich in der Mathematik:</p>'
        + '<p><code>&#172;a &#8743; b &#8744; c</code> wird gelesen als <code>((&#172;a) &#8743; b) &#8744; c</code></p>'
        + '<p>Klammern &uuml;berschreiben die Rangfolge &ndash; genauso wie in der Arithmetik.</p>',
      visuals: [
        { type: 'gate-sim', gate: 'and', label: 'AND-Gatter interaktiv' },
        { type: 'gate-sim', gate: 'or', label: 'OR-Gatter interaktiv' },
        { type: 'gate-sim', gate: 'not', label: 'NOT-Gatter interaktiv' },
        { type: 'gate-sim', gate: 'xor', label: 'XOR-Gatter interaktiv' }
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
        + '<p>Eine Wahrheitstabelle zeigt f&uuml;r <strong>alle m&ouml;glichen Eingaben</strong>, was der Ausdruck ergibt. '
        + 'So geht\'s Schritt f&uuml;r Schritt:</p>'
        + '<ol>'
        + '<li><strong>Variablen z&auml;hlen:</strong> n Variablen &rarr; 2<sup>n</sup> Zeilen. (2 Var. = 4 Zeilen, 3 Var. = 8 Zeilen)</li>'
        + '<li><strong>Spalten anlegen:</strong> Eine Spalte pro Variable, dann eine f&uuml;r jeden Teilausdruck, dann das Ergebnis.</li>'
        + '<li><strong>Bin&auml;r aufsteigend z&auml;hlen:</strong> Erste Zeile: alle 0. Letzte Zeile: alle 1. Linkste Variable wechselt am seltensten.</li>'
        + '<li><strong>Teilausdr&uuml;cke berechnen:</strong> Von innen nach au&szlig;en, Klammern zuerst, dann NOT, dann AND, dann OR.</li>'
        + '</ol>'
        + '<p><strong>Tipp f&uuml;r die Klausur:</strong> Schreibe Hilfsspalten auf! Lieber mehr Spalten als Rechenfehler.</p>'
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
        + '<p>Die DNF ist eine standardisierte Form eines logischen Ausdrucks. '
        + 'Sie besteht aus <strong>ODER-verkn&uuml;pften AND-Termen</strong>.</p>'
        + '<h3>Was ist ein Minterm?</h3>'
        + '<p>F&uuml;r jede Zeile in der Wahrheitstabelle, wo das Ergebnis <strong>1</strong> ist, schreibe einen AND-Term:</p>'
        + '<ul>'
        + '<li>Variable mit Wert 1 &rarr; direkt &uuml;bernehmen (z.B. <code>a</code>)</li>'
        + '<li>Variable mit Wert 0 &rarr; negieren (z.B. <code>&#172;b</code>)</li>'
        + '</ul>'
        + '<p>Dann alle diese AND-Terme mit OR verkn&uuml;pfen &rarr; fertige DNF!</p>'
        + '<h3>Analogie:</h3>'
        + '<p>Stell dir vor, du beschreibst alle Situationen, in denen die Lampe an ist. '
        + 'Jede Situation ist ein AND-Term (exakt diese Kombination), '
        + 'und du listest ALLE auf mit ODER dazwischen.</p>'
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
        '<h2>\u00c4quivalenz mit Wahrheitstabellen beweisen</h2>'
        + '<p>Zwei logische Ausdr&uuml;cke sind <strong>&auml;quivalent</strong>, '
        + 'wenn sie f&uuml;r alle m&ouml;glichen Eingaben <strong>dasselbe Ergebnis</strong> liefern.</p>'
        + '<h3>Vorgehen:</h3>'
        + '<ol>'
        + '<li>Erstelle eine gemeinsame Wahrheitstabelle mit <strong>zwei Ergebnisspalten</strong> &ndash; eine f&uuml;r jeden Ausdruck.</li>'
        + '<li>F&uuml;lle beide Spalten vollst&auml;ndig aus.</li>'
        + '<li>Vergleiche die Spalten: Sind sie <strong>zeilenweise identisch</strong>? &rarr; &Auml;quivalent!</li>'
        + '</ol>'
        + '<p><strong>Wichtig:</strong> In der Klausur reicht es nicht, zu sagen &#8222;sehen gleich aus&#8220;. '
        + 'Du musst die vollst&auml;ndige Wahrheitstabelle aufschreiben!</p>'
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
        + '<p>Gatter sind die Hardware-Umsetzung logischer Operatoren. '
        + 'In Deutschland verwenden wir die <strong>IEC 60617-12 Norm</strong>:</p>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0">'
        + '<th style="border:1px solid #ccc;padding:6px">Gatter</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Symbol</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Bedeutung</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">AND</td><td style="border:1px solid #ccc;padding:6px"><code>&amp;</code></td><td style="border:1px solid #ccc;padding:6px">Alle Eing&auml;nge m&uuml;ssen 1 sein</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">OR</td><td style="border:1px solid #ccc;padding:6px"><code>&#8805;1</code></td><td style="border:1px solid #ccc;padding:6px">Mindestens ein Eingang muss 1 sein</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">NOT</td><td style="border:1px solid #ccc;padding:6px">Dreieck mit Kreis</td><td style="border:1px solid #ccc;padding:6px">Negiert den Eingang</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">XOR</td><td style="border:1px solid #ccc;padding:6px"><code>=1</code></td><td style="border:1px solid #ccc;padding:6px">Genau ein Eingang muss 1 sein</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">NAND</td><td style="border:1px solid #ccc;padding:6px"><code>&amp;</code> mit Kreis</td><td style="border:1px solid #ccc;padding:6px">AND negiert</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px">NOR</td><td style="border:1px solid #ccc;padding:6px"><code>&#8805;1</code> mit Kreis</td><td style="border:1px solid #ccc;padding:6px">OR negiert</td></tr>'
        + '</table>'
        + '<p><strong>Leserichtung:</strong> Eing&auml;nge immer <strong>links</strong>, Ausgang immer <strong>rechts</strong>.</p>'
        + '<h3>Drei Klausur-Skills:</h3>'
        + '<ol>'
        + '<li><strong>Ausdruck &rarr; Gatter:</strong> Klammern von innen nach au&szlig;en als Gatter aufbauen</li>'
        + '<li><strong>Gatter &rarr; Ausdruck:</strong> Von rechts nach links lesen</li>'
        + '<li><strong>XOR aus AND/OR/NOT bauen:</strong> a&#8853;b = (a&#8743;&#172;b)&#8744;(&#172;a&#8743;b)</li>'
        + '</ol>'
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
        question: '\u00dcberpr\u00fcfe: a \u2295 b = (a \u2227 \u00acb) \u2228 (\u00aca \u2227 b). F\u00fclle WTT aus:',
        variables: ['a', 'b'],
        resultColumns: ['a\u2295b', '(a\u2227\u00acb)\u2228(\u00aca\u2227b)'],
        correctResults: [[0,0],[1,1],[1,1],[0,0]]
      }
    ]
  }

];
