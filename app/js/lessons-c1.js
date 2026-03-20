const LessonsC1 = [

  // ===== LEKTION 1: Was ist Rechnerarchitektur? =====
  {
    id: 1,
    title: 'Was ist Rechnerarchitektur?',
    explanation: {
      html:
        '<p>Jeder Computer kennt nur zwei Zustände: <strong>0</strong> und <strong>1</strong>. '
        + 'Stell dir das wie einen <strong>Lichtschalter</strong> vor – entweder <em>an</em> oder <em>aus</em>.</p>'
        + '<p>Konkret bedeutet das in der Hardware:</p>'
        + '<ul>'
        + '<li><strong>Strom an</strong> (1) oder <strong>Strom aus</strong> (0)</li>'
        + '<li><strong>Magnetisiert</strong> (1) oder <strong>nicht magnetisiert</strong> (0) – so funktionieren Festplatten</li>'
        + '</ul>'
        + '<p>In dieser Lerneinheit schauen wir uns an, wie man mit diesen zwei Zuständen '
        + 'Schaltungen in echter Hardware baut. Dafür gibt es <strong>drei Darstellungsformen</strong>, '
        + 'die wir Schritt für Schritt kennenlernen:</p>'
        + '<ol>'
        + '<li><strong>Wahrheitstabelle</strong> – eine Tabelle, die alle möglichen Kombinationen von Eingaben und Ausgaben zeigt</li>'
        + '<li><strong>Logischer Ausdruck</strong> – eine mathematische Formel (z.&thinsp;B. <code>a ∧ b</code>)</li>'
        + '<li><strong>Gatterschaltung</strong> – ein Schaltplan, der zeigt, wie die Logik in Hardware umgesetzt wird</li>'
        + '</ol>'
    },
    example: {
      title: 'Beispiel: Ein einfacher Stromkreis',
      steps: [
        {
          label: 'Batterie + Schalter + Lampe',
          html:
            '<p>Stell dir einen einfachen Stromkreis vor: Eine <strong>Batterie</strong> liefert Strom, '
            + 'ein <strong>Schalter (S)</strong> kann den Strom unterbrechen, und eine <strong>Lampe (L)</strong> '
            + 'zeigt an, ob Strom fließt.</p>'
        },
        {
          label: 'Schalter offen (S=0)',
          html:
            '<p>Wenn der Schalter <strong>offen</strong> ist, fließt kein Strom. '
            + 'Die Lampe ist <strong>aus</strong>.</p>'
            + '<p><code>S = 0 → L = 0</code></p>'
        },
        {
          label: 'Schalter geschlossen (S=1)',
          html:
            '<p>Wenn der Schalter <strong>geschlossen</strong> ist, fließt Strom. '
            + 'Die Lampe <strong>leuchtet</strong>.</p>'
            + '<p><code>S = 1 → L = 1</code></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie viele Zustände kennt ein Computer?',
        options: ['1', '2', '3', '10'],
        correct: 1,
        explanation: 'Ein Computer kennt genau zwei Zustände: 0 und 1 (Strom aus/an).'
      },
      {
        type: 'multiple-choice',
        question: 'Welche drei Darstellungsformen für logische Schaltungen gibt es?',
        options: [
          'Tabelle, Diagramm, Programmcode',
          'Wahrheitstabelle, logischer Ausdruck, Gatterschaltung',
          'Schaltplan, Stückliste, Bauanleitung',
          'Binärcode, Hexadezimal, Dezimal'
        ],
        correct: 1,
        explanation: 'Die drei Darstellungsformen sind: Wahrheitstabelle, logischer Ausdruck und Gatterschaltung.'
      }
    ]
  },

  // ===== LEKTION 2: Serien- & Parallelschaltung =====
  {
    id: 2,
    title: 'Serien- & Parallelschaltung',
    explanation: {
      html:
        '<h3>Parallelschaltung → ODER</h3>'
        + '<p>Zwei Schalter liegen <strong>nebeneinander</strong> (parallel). '
        + 'Die Lampe leuchtet, wenn <strong>mindestens einer</strong> der Schalter geschlossen ist.</p>'
        + '<p><strong>Analogie:</strong> Stell dir zwei Türen nebeneinander vor. '
        + 'Du kannst durch <em>Tür A</em> oder <em>Tür B</em> gehen – '
        + 'eine reicht, um durchzukommen. Das entspricht dem logischen <strong>ODER</strong>.</p>'

        + '<h3>Serienschaltung (Reihenschaltung) → UND</h3>'
        + '<p>Zwei Schalter liegen <strong>hintereinander</strong> (in Reihe/Serie). '
        + 'Die Lampe leuchtet nur, wenn <strong>beide</strong> Schalter geschlossen sind.</p>'
        + '<p><strong>Analogie:</strong> Zwei Türen hintereinander – '
        + '<em>beide</em> müssen offen sein, damit du durchkommst. '
        + 'Das entspricht dem logischen <strong>UND</strong>.</p>'
    },
    example: {
      title: 'Beispiel: Kombinierte Schaltung',
      steps: [
        {
          label: 'S2 und S3 parallel',
          html:
            '<p>Schalter <strong>S2</strong> und <strong>S3</strong> sind parallel geschaltet. '
            + 'Die Lampe leuchtet, wenn mindestens einer von beiden geschlossen ist.</p>'
            + '<p>Das entspricht: <code>S2 ∨ S3</code> (ODER)</p>'
        },
        {
          label: 'S1 seriell dazu',
          html:
            '<p>Schalter <strong>S1</strong> liegt in Reihe zu dem Parallelblock (S2 ∥ S3). '
            + 'Die Lampe leuchtet nur, wenn S1 geschlossen ist <strong>UND</strong> '
            + 'mindestens einer von S2/S3 geschlossen ist.</p>'
        },
        {
          label: 'Logischer Ausdruck',
          html:
            '<p>Der gesamte Schaltkreis lässt sich als logischer Ausdruck schreiben:</p>'
            + '<p><code>L = S1 ∧ (S2 ∨ S3)</code></p>'
            + '<p>Lies: „Lampe an, wenn S1 <strong>und</strong> (S2 <strong>oder</strong> S3)."</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Schaltungsart entspricht dem logischen ODER?',
        options: ['Serienschaltung', 'Parallelschaltung', 'Kreuzschaltung', 'Wechselschaltung'],
        correct: 1,
        explanation: 'Bei einer Parallelschaltung reicht es, wenn mindestens ein Schalter geschlossen ist – genau wie beim logischen ODER.'
      },
      {
        type: 'truth-table',
        question: 'Fülle die Wahrheitstabelle für eine Parallelschaltung (S1 ODER S2) aus:',
        variables: ['S1', 'S2'],
        resultColumns: ['L'],
        correctResults: [[0], [1], [1], [1]]
      }
    ]
  },

  // ===== LEKTION 3: Logische Operatoren: AND, OR, NOT =====
  {
    id: 3,
    title: 'Logische Operatoren: AND, OR, NOT',
    explanation: {
      html:
        '<h3>AND – Konjunktion (∧)</h3>'
        + '<p>Das Ergebnis ist nur <strong>1</strong> (wahr), wenn <strong>beide</strong> Eingaben 1 sind.</p>'
        + '<p><strong>Eselsbrücke:</strong> Das ∧-Zeichen sieht aus wie ein Strichmännchen, '
        + 'das auf <em>beiden</em> Beinen steht – beide müssen da sein!</p>'

        + '<h3>OR – Disjunktion (∨)</h3>'
        + '<p>Das Ergebnis ist <strong>1</strong> (wahr), wenn <strong>mindestens eine</strong> Eingabe 1 ist. '
        + 'Auch wenn <em>beide</em> wahr sind!</p>'
        + '<p><strong>Eselsbrücke:</strong> Das ∨-Zeichen kippt nach links <em>oder</em> rechts.</p>'
        + '<p><strong>Wichtig:</strong> OR ist <em>nicht</em> das Entweder-Oder aus dem Alltag! '
        + 'Wenn du sagst „Möchtest du Tee oder Kaffee?", meinst du meistens „eins von beiden, aber nicht beides." '
        + 'Das logische OR ist auch wahr, wenn beide zutreffen.</p>'

        + '<h3>NOT – Negation (¬)</h3>'
        + '<p>Kehrt den Wert um: Aus 0 wird 1, aus 1 wird 0. So einfach ist das.</p>'

        + '<h3>Schreibweise</h3>'
        + '<p>In diesem Kurs verwenden wir die Symbole <strong>∧</strong> (AND), '
        + '<strong>∨</strong> (OR) und <strong>¬</strong> (NOT). '
        + 'Nicht den Malpunkt (·) oder das Pluszeichen (+), die man manchmal in anderen Büchern sieht.</p>'
    },
    example: {
      title: 'Beispiel: Tim und Lea',
      steps: [
        {
          label: 'AND – Beide müssen zutreffen',
          html:
            '<p>„Tim geht zum See <strong>AND</strong> Lea fährt zum Park."</p>'
            + '<p>Diese Aussage ist nur wahr, wenn <em>beides</em> zutrifft: '
            + 'Tim geht zum See <strong>und</strong> Lea fährt zum Park.</p>'
        },
        {
          label: 'OR – Mindestens eins muss zutreffen',
          html:
            '<p>„Tim geht zum See <strong>OR</strong> Lea fährt zum Park."</p>'
            + '<p>Diese Aussage ist wahr, wenn <em>mindestens eins</em> zutrifft – '
            + 'also auch, wenn <em>beide</em> zutreffen!</p>'
        },
        {
          label: 'NOT – Umkehrung',
          html:
            '<p>„<strong>NOT</strong> Tim geht zum See."</p>'
            + '<p>Diese Aussage ist wahr, wenn Tim <em>nicht</em> zum See geht.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'truth-table',
        question: 'Fülle die Wahrheitstabelle für AND (a ∧ b) aus:',
        variables: ['a', 'b'],
        resultColumns: ['a ∧ b'],
        correctResults: [[0], [0], [0], [1]]
      },
      {
        type: 'truth-table',
        question: 'Fülle die Wahrheitstabelle für OR (a ∨ b) aus:',
        variables: ['a', 'b'],
        resultColumns: ['a ∨ b'],
        correctResults: [[0], [1], [1], [1]]
      },
      {
        type: 'truth-table',
        question: 'Fülle die Wahrheitstabelle für NOT (¬a) aus:',
        variables: ['a'],
        resultColumns: ['¬a'],
        correctResults: [[1], [0]]
      },
      {
        type: 'multiple-choice',
        question: 'Was ist der Unterschied zwischen dem logischen OR und dem Entweder-Oder aus dem Alltag?',
        options: [
          'Es gibt keinen Unterschied',
          'OR ist auch wahr, wenn nur ein Operand wahr ist',
          'Bei OR ist die Aussage auch wahr, wenn beide Operanden wahr sind',
          'OR gilt nur für Zahlen, Entweder-Oder für Texte'
        ],
        correct: 2,
        explanation: 'Beim logischen OR ist das Ergebnis auch dann wahr (1), wenn beide Operanden wahr sind. Das Entweder-Oder im Alltag schließt den Fall „beide wahr" aus – das wäre in der Logik XOR.'
      }
    ]
  },

  // ===== LEKTION 4: Weitere Operatoren: XOR, NAND, NOR, XNOR =====
  {
    id: 4,
    title: 'Weitere Operatoren: XOR, NAND, NOR, XNOR',
    explanation: {
      html:
        '<h3>XOR – Exklusiv-Oder (⊕)</h3>'
        + '<p>Das <strong>Entweder-Oder</strong> aus dem Alltag! '
        + 'Wahr, wenn <strong>genau einer</strong> der Operanden wahr ist. '
        + 'Wenn beide gleich sind (beide 0 oder beide 1), ist das Ergebnis 0.</p>'

        + '<h3>NAND – Negiertes AND (⊼)</h3>'
        + '<p>Erst AND berechnen, dann das Ergebnis umdrehen (NOT). '
        + 'Ergebnis ist nur <strong>0</strong>, wenn beide Eingaben 1 sind – '
        + 'in allen anderen Fällen ist es 1.</p>'

        + '<h3>NOR – Negiertes OR (⊽)</h3>'
        + '<p>Erst OR berechnen, dann das Ergebnis umdrehen (NOT). '
        + 'Ergebnis ist nur <strong>1</strong>, wenn beide Eingaben 0 sind.</p>'

        + '<h3>XNOR – Negiertes XOR (⊙)</h3>'
        + '<p>Das Ergebnis ist <strong>1</strong>, wenn beide Eingaben <strong>gleich</strong> sind '
        + '(beide 0 oder beide 1). Man kann es sich als „Gleichheits-Prüfer" vorstellen.</p>'

        + '<p><strong>Merke:</strong> Alle diese Operatoren lassen sich aus den drei Grundoperatoren '
        + 'AND, OR und NOT zusammensetzen!</p>'
    },
    example: {
      title: 'Beispiel: XOR im Alltag',
      steps: [
        {
          label: 'Tee oder Kaffee?',
          html:
            '<p>„Möchtest du <strong>Tee</strong> oder <strong>Kaffee</strong>?"</p>'
            + '<p>Im Alltag meinen wir: Entweder das eine oder das andere, aber nicht beides. '
            + 'Das ist genau XOR!</p>'
        },
        {
          label: 'XOR Wahrheitstabelle',
          html:
            '<p>Schauen wir uns die XOR-Wahrheitstabelle an:</p>'
            + '<table class="truth-table">'
            + '<thead><tr><th>a</th><th>b</th><th>a ⊕ b</th></tr></thead>'
            + '<tbody>'
            + '<tr><td>0</td><td>0</td><td>0</td></tr>'
            + '<tr><td>0</td><td>1</td><td>1</td></tr>'
            + '<tr><td>1</td><td>0</td><td>1</td></tr>'
            + '<tr><td>1</td><td>1</td><td>0</td></tr>'
            + '</tbody></table>'
            + '<p>Wenn beide Eingaben <em>gleich</em> sind → 0. Wenn sie <em>unterschiedlich</em> sind → 1.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'truth-table',
        question: 'Fülle die Wahrheitstabelle für XOR (a ⊕ b) aus:',
        variables: ['a', 'b'],
        resultColumns: ['a ⊕ b'],
        correctResults: [[0], [1], [1], [0]]
      },
      {
        type: 'truth-table',
        question: 'Fülle die Wahrheitstabelle für NAND (a ⊼ b) aus:',
        variables: ['a', 'b'],
        resultColumns: ['a ⊼ b'],
        correctResults: [[1], [1], [1], [0]]
      },
      {
        type: 'matching',
        question: 'Ordne die Operatornamen den richtigen Symbolen zu:',
        pairs: [
          { left: 'AND', right: '∧' },
          { left: 'OR', right: '∨' },
          { left: 'NOT', right: '¬' },
          { left: 'XOR', right: '⊕' },
          { left: 'NAND', right: '⊼' },
          { left: 'NOR', right: '⊽' }
        ]
      }
    ]
  },

  // ===== LEKTION 5: Wahrheitstabellen erstellen =====
  {
    id: 5,
    title: 'Wahrheitstabellen erstellen',
    explanation: {
      html:
        '<h3>Aufbau einer Wahrheitstabelle</h3>'
        + '<p>Eine Wahrheitstabelle ist wie eine <strong>vollständige Checkliste</strong>: '
        + 'Jede mögliche Kombination der Eingaben wird einmal durchprobiert.</p>'

        + '<h3>Wie viele Zeilen brauche ich?</h3>'
        + '<p>Die Anzahl der Zeilen hängt von der Anzahl der Variablen ab:</p>'
        + '<ul>'
        + '<li><strong>1 Variable</strong> → 2¹ = <strong>2 Zeilen</strong></li>'
        + '<li><strong>2 Variablen</strong> → 2² = <strong>4 Zeilen</strong></li>'
        + '<li><strong>3 Variablen</strong> → 2³ = <strong>8 Zeilen</strong></li>'
        + '<li><strong>4 Variablen</strong> → 2⁴ = <strong>16 Zeilen</strong></li>'
        + '</ul>'
        + '<p><strong>Formel:</strong> Anzahl Zeilen = 2<sup>n</sup> (n = Anzahl der Variablen)</p>'

        + '<h3>Wie fülle ich die Eingangsspalten?</h3>'
        + '<p>Binär aufsteigend zählen: 000, 001, 010, 011, 100, 101, 110, 111 …</p>'

        + '<h3>Tipp: Zwischenschritte nutzen</h3>'
        + '<p>Bei komplexen Ausdrücken wie <code>(a ∨ b) ∧ ¬b</code> lohnt es sich, '
        + '<strong>Zwischenschritte als eigene Spalten</strong> einzufügen. '
        + 'Berechne z.&thinsp;B. zuerst <code>¬b</code>, dann erst den Gesamtausdruck. '
        + 'So behältst du den Überblick.</p>'
    },
    example: {
      title: 'Beispiel: Wahrheitstabelle für a ∧ b ∧ c',
      steps: [
        {
          label: 'Anzahl Zeilen bestimmen',
          html:
            '<p>Wir haben <strong>3 Variablen</strong> (a, b, c).</p>'
            + '<p>Anzahl Zeilen = 2³ = <strong>8 Zeilen</strong>.</p>'
            + '<p>Die Eingangsspalten füllen wir binär aufsteigend: 000, 001, 010, …, 111.</p>'
        },
        {
          label: 'Jede Zeile auswerten',
          html:
            '<p>Für jede Zeile prüfen wir: Ist <code>a ∧ b ∧ c</code> wahr?</p>'
            + '<p>AND ergibt nur 1, wenn <strong>alle</strong> Eingaben 1 sind.</p>'
            + '<p>Also müssen a, b und c alle gleichzeitig 1 sein.</p>'
        },
        {
          label: 'Ergebnis',
          html:
            '<p>Nur die letzte Zeile (a=1, b=1, c=1) ergibt <strong>1</strong>. '
            + 'Alle anderen Zeilen ergeben 0.</p>'
            + '<table class="truth-table">'
            + '<thead><tr><th>a</th><th>b</th><th>c</th><th>a ∧ b ∧ c</th></tr></thead>'
            + '<tbody>'
            + '<tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>'
            + '<tr><td>0</td><td>0</td><td>1</td><td>0</td></tr>'
            + '<tr><td>0</td><td>1</td><td>0</td><td>0</td></tr>'
            + '<tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>'
            + '<tr><td>1</td><td>0</td><td>0</td><td>0</td></tr>'
            + '<tr><td>1</td><td>0</td><td>1</td><td>0</td></tr>'
            + '<tr><td>1</td><td>1</td><td>0</td><td>0</td></tr>'
            + '<tr><td>1</td><td>1</td><td>1</td><td><strong>1</strong></td></tr>'
            + '</tbody></table>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie viele Zeilen hat eine Wahrheitstabelle mit 4 Variablen?',
        options: ['4', '8', '16', '32'],
        correct: 2,
        explanation: 'Bei 4 Variablen gibt es 2⁴ = 16 mögliche Kombinationen, also 16 Zeilen.'
      },
      {
        type: 'truth-table',
        question: 'Erstelle die Wahrheitstabelle für (a ∨ b) ∧ ¬b – inklusive Zwischenschritt ¬b:',
        variables: ['a', 'b'],
        resultColumns: ['¬b', '(a ∨ b) ∧ ¬b'],
        correctResults: [[1, 0], [0, 0], [1, 1], [0, 0]]
      }
    ]
  },

  // ===== LEKTIONEN 6–10: Platzhalter =====
  {
    id: 6,
    title: 'Logische Ausdrücke & Operatorrangfolge',
    explanation: { html: '<p>Inhalt wird noch erstellt...</p>' },
    example: { title: 'Beispiel folgt', steps: [] },
    exercises: []
  },
  {
    id: 7,
    title: 'Gatterschaltungen lesen',
    explanation: { html: '<p>Inhalt wird noch erstellt...</p>' },
    example: { title: 'Beispiel folgt', steps: [] },
    exercises: []
  },
  {
    id: 8,
    title: 'Normalformen (DNF & KNF)',
    explanation: { html: '<p>Inhalt wird noch erstellt...</p>' },
    example: { title: 'Beispiel folgt', steps: [] },
    exercises: []
  },
  {
    id: 9,
    title: 'Vereinfachung mit Boolescher Algebra',
    explanation: { html: '<p>Inhalt wird noch erstellt...</p>' },
    example: { title: 'Beispiel folgt', steps: [] },
    exercises: []
  },
  {
    id: 10,
    title: 'KV-Diagramme',
    explanation: { html: '<p>Inhalt wird noch erstellt...</p>' },
    example: { title: 'Beispiel folgt', steps: [] },
    exercises: []
  }
];
