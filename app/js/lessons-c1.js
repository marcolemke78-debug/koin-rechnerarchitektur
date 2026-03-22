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
        + 'Nicht den Malpunkt (·) oder das Pluszeichen (+), die man manchmal in anderen Büchern sieht.</p>',
      visuals: [
        { type: 'gate-sim', gate: 'and', label: 'AND-Gatter: Probiere es aus!' },
        { type: 'gate-sim', gate: 'or', label: 'OR-Gatter' },
        { type: 'gate-sim', gate: 'not', label: 'NOT-Gatter' },
        { type: 'truth-table-linked', gate: 'and' }
      ]
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
        + 'AND, OR und NOT zusammensetzen!</p>',
      visuals: [
        { type: 'gate-sim', gate: 'xor', label: 'XOR-Gatter' },
        { type: 'gate-sim', gate: 'nand', label: 'NAND-Gatter' },
        { type: 'gate-sim', gate: 'nor', label: 'NOR-Gatter' },
        { type: 'gate-sim', gate: 'xnor', label: 'XNOR-Gatter' },
        { type: 'truth-table-linked', gate: 'xor' }
      ]
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
        + 'So behältst du den Überblick.</p>',
      visuals: [
        { type: 'truth-table-linked', gate: 'and' }
      ]
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

  // ===== LEKTION 6: Logische Ausdrücke & Operatorrangfolge =====
  {
    id: 6,
    title: 'Logische Ausdrücke & Operatorrangfolge',
    explanation: {
      html:
        '<h3>Mehrere Operatoren verknüpfen</h3>'
        + '<p>Logische Ausdrücke können mehrere Operatoren enthalten, z.&thinsp;B. '
        + '<code>a ∨ b ∧ c</code>. Aber Vorsicht: Nicht jede Kombination ist gültig! '
        + '<code>a ∨ ∧ b</code> ergibt keinen Sinn – zwei Operatoren dürfen nicht direkt hintereinander stehen.</p>'

        + '<h3>Operatorrangfolge – wie Punkt vor Strich!</h3>'
        + '<p>In der Mathematik gilt: <strong>Punkt vor Strich</strong> – also 2 + 3 · 4 = 14, nicht 20. '
        + 'In der Logik gibt es eine ganz ähnliche Regel:</p>'
        + '<ol>'
        + '<li><strong>NOT (¬)</strong> – bindet am stärksten (wie ein Vorzeichen)</li>'
        + '<li><strong>AND (∧)</strong> – mittlere Priorität (wie der Malpunkt ·)</li>'
        + '<li><strong>OR (∨)</strong> – bindet am schwächsten (wie das Plus +)</li>'
        + '</ol>'
        + '<p><strong>Merke:</strong> <em>NOT vor AND vor OR</em> – genau wie <em>Vorzeichen vor Punkt vor Strich</em>.</p>'

        + '<h3>Klammern ändern die Reihenfolge</h3>'
        + '<p>Genau wie in Mathe kann man mit <strong>Klammern</strong> die Auswertungsreihenfolge ändern. '
        + 'Was in Klammern steht, wird zuerst berechnet – von innen nach außen.</p>'
        + '<p><strong>Beispiel:</strong> <code>a ∨ ¬b ∧ c</code> bedeutet <code>a ∨ ((¬b) ∧ c)</code>.</p>'
        + '<p>Möchte man, dass OR zuerst ausgewertet wird, muss man Klammern setzen: '
        + '<code>(a ∨ b) ∧ c</code>.</p>',
      visuals: [
        { type: 'expression-tree', expression: '¬a ∧ b ∨ c' }
      ]
    },
    example: {
      title: 'Beispiel: a ∨ ¬b ∧ c Schritt für Schritt',
      steps: [
        {
          label: 'NOT zuerst',
          html:
            '<p>Der Ausdruck: <code>a ∨ ¬b ∧ c</code></p>'
            + '<p><strong>NOT</strong> bindet am stärksten, also wird <code>¬b</code> zuerst berechnet.</p>'
            + '<p>Zwischenergebnis: <code>a ∨ <mark>¬b</mark> ∧ c</code></p>'
        },
        {
          label: 'AND vor OR',
          html:
            '<p>Als nächstes kommt <strong>AND</strong> (stärker als OR).</p>'
            + '<p>Das Ergebnis von ¬b wird mit c verknüpft: <code><mark>(¬b) ∧ c</mark></code></p>'
            + '<p>Zwischenergebnis: <code>a ∨ <mark>((¬b) ∧ c)</mark></code></p>'
        },
        {
          label: 'OR zuletzt',
          html:
            '<p>Zum Schluss wird <strong>OR</strong> ausgewertet:</p>'
            + '<p><code><mark>a ∨ ((¬b) ∧ c)</mark></code></p>'
            + '<p>Der vollständig geklammerte Ausdruck lautet also: <code>a ∨ ((¬b) ∧ c)</code></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welcher Ausdruck entspricht a ∨ b ∧ c (ohne Klammern)?',
        options: [
          'a ∨ (b ∧ c)',
          '(a ∨ b) ∧ c',
          'a ∨ b ∨ c'
        ],
        correct: 0,
        explanation: 'AND bindet stärker als OR (wie Punkt vor Strich), also wird b ∧ c zuerst berechnet: a ∨ (b ∧ c).'
      },
      {
        type: 'multiple-choice',
        question: 'Was wird bei ¬a ∧ b zuerst ausgewertet?',
        options: [
          '¬a',
          'a ∧ b',
          '¬(a ∧ b)'
        ],
        correct: 0,
        explanation: 'NOT bindet am stärksten, also wird zuerst ¬a berechnet, dann das Ergebnis mit b per AND verknüpft.'
      },
      {
        type: 'expression-input',
        question: 'Setze Klammern so, dass OR vor AND ausgewertet wird: a ∨ b ∧ c → ?',
        variables: ['a', 'b', 'c'],
        correctExpression: '(a∨b)∧c',
        hint: 'Klammern erzwingen, dass OR zuerst ausgewertet wird: (a ∨ b) kommt in Klammern.'
      }
    ]
  },

  // ===== LEKTION 7: Gleichung → Wahrheitstabelle =====
  {
    id: 7,
    title: 'Gleichung → Wahrheitstabelle',
    explanation: {
      html:
        '<h3>Von der Gleichung zur Wahrheitstabelle</h3>'
        + '<p>Jeder logische Ausdruck lässt sich in eine Wahrheitstabelle umwandeln. '
        + 'Das ist besonders nützlich, um einen Ausdruck <strong>komplett zu verstehen</strong> – '
        + 'man sieht auf einen Blick, wann das Ergebnis 1 oder 0 ist.</p>'

        + '<h3>Vorgehen in 3 Schritten</h3>'
        + '<ol>'
        + '<li><strong>Variablen zählen:</strong> Wie viele verschiedene Variablen gibt es? → Das bestimmt die Zeilenzahl (2<sup>n</sup>).</li>'
        + '<li><strong>Eingangsspalten füllen:</strong> Binär aufsteigend zählen (00, 01, 10, 11 …).</li>'
        + '<li><strong>Teilausdrücke als Zwischenspalten:</strong> Von innen nach außen berechnen. '
        + 'Für jeden Teilausdruck eine eigene Spalte anlegen.</li>'
        + '</ol>'

        + '<h3>Tipp: Substitutionen nutzen</h3>'
        + '<p>Bei komplexen Ausdrücken hilft es, Teilausdrücke umzubenennen. '
        + 'Zum Beispiel: <code>z = a ∧ b</code>. So bleibt alles übersichtlich, '
        + 'und man kann die Zwischenergebnisse Schritt für Schritt berechnen.</p>'
        + '<p><strong>Immer von den innersten Klammern nach außen arbeiten!</strong></p>'
    },
    example: {
      title: 'Beispiel: (a ∨ b) ∧ ¬b Schritt für Schritt',
      visuals: [
        { type: 'expression-tree', expression: '(a ∨ b) ∧ ¬c' },
        { type: 'truth-table-linked', gate: 'and' }
      ],
      steps: [
        {
          label: 'Variablen & Zeilen',
          html:
            '<p>Der Ausdruck <code>(a ∨ b) ∧ ¬b</code> hat <strong>2 Variablen</strong> (a, b).</p>'
            + '<p>Anzahl Zeilen: 2² = <strong>4 Zeilen</strong>.</p>'
        },
        {
          label: 'Zwischenschritt z = a ∨ b',
          html:
            '<p>Zuerst berechnen wir den Teilausdruck in der Klammer:</p>'
            + '<table class="truth-table">'
            + '<thead><tr><th>a</th><th>b</th><th>z = a ∨ b</th></tr></thead>'
            + '<tbody>'
            + '<tr><td>0</td><td>0</td><td>0</td></tr>'
            + '<tr><td>0</td><td>1</td><td>1</td></tr>'
            + '<tr><td>1</td><td>0</td><td>1</td></tr>'
            + '<tr><td>1</td><td>1</td><td>1</td></tr>'
            + '</tbody></table>'
        },
        {
          label: 'Zwischenschritt y = ¬b',
          html:
            '<p>Dann berechnen wir die Negation von b:</p>'
            + '<table class="truth-table">'
            + '<thead><tr><th>b</th><th>y = ¬b</th></tr></thead>'
            + '<tbody>'
            + '<tr><td>0</td><td>1</td></tr>'
            + '<tr><td>1</td><td>0</td></tr>'
            + '</tbody></table>'
        },
        {
          label: 'Endergebnis: z ∧ y',
          html:
            '<p>Jetzt kombinieren wir die Zwischenergebnisse:</p>'
            + '<table class="truth-table">'
            + '<thead><tr><th>a</th><th>b</th><th>a ∨ b</th><th>¬b</th><th>(a ∨ b) ∧ ¬b</th></tr></thead>'
            + '<tbody>'
            + '<tr><td>0</td><td>0</td><td>0</td><td>1</td><td><strong>0</strong></td></tr>'
            + '<tr><td>0</td><td>1</td><td>1</td><td>0</td><td><strong>0</strong></td></tr>'
            + '<tr><td>1</td><td>0</td><td>1</td><td>1</td><td><strong>1</strong></td></tr>'
            + '<tr><td>1</td><td>1</td><td>1</td><td>0</td><td><strong>0</strong></td></tr>'
            + '</tbody></table>'
            + '<p>Nur wenn a=1 und b=0 ist das Ergebnis 1.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'truth-table',
        question: 'Fülle die Wahrheitstabelle für ¬a ∧ (a ∨ b) mit Zwischenschritten aus:',
        variables: ['a', 'b'],
        resultColumns: ['¬a', 'a ∨ b', '¬a ∧ (a ∨ b)'],
        correctResults: [[1, 0, 0], [1, 1, 1], [0, 1, 0], [0, 1, 0]]
      },
      {
        type: 'multiple-choice',
        question: 'Wie viele Zwischenschritte braucht man mindestens für (¬a ∧ b) ∨ (a ∧ ¬b)?',
        options: [
          '2 (eine Negation + das Endergebnis)',
          '3 (zwei Negationen + das Endergebnis)',
          '4 (¬a, ¬a∧b, ¬b, a∧¬b – plus Endergebnis)',
          '5 (jede Operation einzeln)'
        ],
        correct: 2,
        explanation: 'Man braucht 4 Zwischenschritte: ¬a, ¬a∧b, ¬b und a∧¬b. Dann werden die beiden Teile mit OR zum Endergebnis verknüpft.'
      }
    ]
  },

  // ===== LEKTION 8: Wahrheitstabelle → Gleichung (DNF) =====
  {
    id: 8,
    title: 'Wahrheitstabelle → Gleichung (DNF)',
    explanation: {
      html:
        '<h3>Von der Wahrheitstabelle zur Gleichung</h3>'
        + '<p>Bisher haben wir aus einer Gleichung die Wahrheitstabelle erstellt. '
        + 'Jetzt gehen wir den <strong>umgekehrten Weg</strong>: '
        + 'Aus einer fertigen Wahrheitstabelle eine logische Gleichung ableiten.</p>'
        + '<p>Das Verfahren heißt <strong>Disjunktive Normalform (DNF)</strong>.</p>'

        + '<h3>DNF-Verfahren in 3 Schritten</h3>'
        + '<ol>'
        + '<li><strong>Nur die Zeilen mit Ergebnis 1 betrachten</strong> – alle anderen ignorieren.</li>'
        + '<li><strong>Für jede 1er-Zeile eine Konjunktion bilden:</strong> Alle Variablen mit AND verknüpfen. '
        + 'Dabei gilt: Variable = 0 → negieren (¬), Variable = 1 → so lassen.</li>'
        + '<li><strong>Alle Konjunktionen mit OR verknüpfen</strong> → fertig ist die DNF!</li>'
        + '</ol>'

        + '<h3>Analogie</h3>'
        + '<p>Stell dir vor, du beschreibst einem Freund, wann eine Alarmanlage losgeht. '
        + 'Du zählst jeden einzelnen „Erfolgsfall" auf und sagst: '
        + '„<em>Einer dieser Fälle muss zutreffen, dann geht der Alarm los.</em>" '
        + 'Genau das macht die DNF – sie beschreibt jeden Fall einzeln (AND) und verknüpft sie mit OR.</p>',
      visuals: [
        { type: 'dnf-highlighter', variables: ['a', 'b', 'c'], results: [0, 1, 0, 0, 1, 0, 1, 0] }
      ]
    },
    example: {
      title: 'Beispiel: DNF aus einer 3-Variablen-Tabelle',
      steps: [
        {
          label: '1er-Zeilen finden',
          html:
            '<p>Gegeben: Variablen a, b, c mit Ergebnis [1, 0, 1, 0, 0, 0, 0, 1]</p>'
            + '<table class="truth-table">'
            + '<thead><tr><th>a</th><th>b</th><th>c</th><th>f</th></tr></thead>'
            + '<tbody>'
            + '<tr><td>0</td><td>0</td><td>0</td><td><strong>1</strong></td></tr>'
            + '<tr><td>0</td><td>0</td><td>1</td><td>0</td></tr>'
            + '<tr><td>0</td><td>1</td><td>0</td><td><strong>1</strong></td></tr>'
            + '<tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>'
            + '<tr><td>1</td><td>0</td><td>0</td><td>0</td></tr>'
            + '<tr><td>1</td><td>0</td><td>1</td><td>0</td></tr>'
            + '<tr><td>1</td><td>1</td><td>0</td><td>0</td></tr>'
            + '<tr><td>1</td><td>1</td><td>1</td><td><strong>1</strong></td></tr>'
            + '</tbody></table>'
            + '<p>Zeilen mit Ergebnis 1: <strong>Zeile 0</strong> (000), <strong>Zeile 2</strong> (010), <strong>Zeile 7</strong> (111).</p>'
        },
        {
          label: 'Konjunktionen bilden',
          html:
            '<p>Für jede 1er-Zeile bilden wir eine Konjunktion (AND-Verknüpfung):</p>'
            + '<ul>'
            + '<li><strong>Zeile 0 (a=0, b=0, c=0):</strong> Alle Variablen sind 0 → alle negieren: <code>¬a ∧ ¬b ∧ ¬c</code></li>'
            + '<li><strong>Zeile 2 (a=0, b=1, c=0):</strong> a und c negieren, b nicht: <code>¬a ∧ b ∧ ¬c</code></li>'
            + '<li><strong>Zeile 7 (a=1, b=1, c=1):</strong> Alle Variablen sind 1 → keine negieren: <code>a ∧ b ∧ c</code></li>'
            + '</ul>'
        },
        {
          label: 'DNF zusammensetzen',
          html:
            '<p>Alle Konjunktionen mit OR verknüpfen:</p>'
            + '<p><code>(¬a ∧ ¬b ∧ ¬c) ∨ (¬a ∧ b ∧ ¬c) ∨ (a ∧ b ∧ c)</code></p>'
            + '<p>Das ist die <strong>Disjunktive Normalform (DNF)</strong> der Wahrheitstabelle.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Bei der DNF werden die Zeilen mit welchem Ergebnis betrachtet?',
        options: [
          'Die Zeilen mit Ergebnis 0',
          'Die Zeilen mit Ergebnis 1',
          'Alle Zeilen',
          'Nur die erste und letzte Zeile'
        ],
        correct: 1,
        explanation: 'Bei der DNF betrachtet man nur die Zeilen, in denen das Ergebnis 1 ist. Für jede dieser Zeilen bildet man eine Konjunktion.'
      },
      {
        type: 'expression-input',
        question: 'Bilde die DNF für die Wahrheitstabelle: a,b → Ergebnis [0, 1, 1, 0]',
        variables: ['a', 'b'],
        correctExpression: '(¬a∧b)∨(a∧¬b)',
        hint: 'Zeilen 01 und 10 haben Ergebnis 1. Zeile 01: a=0→¬a, b=1→b. Zeile 10: a=1→a, b=0→¬b.'
      }
    ]
  },

  // ===== LEKTION 9: Äquivalenz mit Wahrheitstabellen zeigen =====
  {
    id: 9,
    title: 'Äquivalenz mit Wahrheitstabellen zeigen',
    explanation: {
      html:
        '<h3>Was bedeutet Äquivalenz?</h3>'
        + '<p>Zwei logische Ausdrücke sind <strong>äquivalent</strong>, wenn sie '
        + 'für <strong>alle möglichen Eingaben</strong> das gleiche Ergebnis liefern.</p>'
        + '<p><strong>Analogie:</strong> Stell dir zwei verschiedene Wegbeschreibungen zum selben Ziel vor. '
        + 'Egal wo du startest, du kommst immer am gleichen Ort an. '
        + 'Die Wege sehen anders aus, aber das Ergebnis ist identisch.</p>'

        + '<h3>Methode: Wahrheitstabellen vergleichen</h3>'
        + '<ol>'
        + '<li><strong>Beide Ausdrücke</strong> jeweils in eine Wahrheitstabelle umwandeln.</li>'
        + '<li><strong>Letzte Spalten vergleichen:</strong> Stimmen alle Zeilen überein?</li>'
        + '<li>Wenn <strong>alle Zeilen gleich</strong> sind → die Ausdrücke sind äquivalent!</li>'
        + '<li>Wenn <strong>auch nur eine Zeile</strong> abweicht → nicht äquivalent!</li>'
        + '</ol>'
        + '<p><strong>Wichtig:</strong> Man muss wirklich <em>beide</em> Seiten komplett durchrechnen. '
        + 'Ein einzelnes Gegenbeispiel reicht, um Nicht-Äquivalenz zu zeigen.</p>',
      visuals: [
        { type: 'expression-tree', expression: '¬(a ∧ b)' },
        { type: 'expression-tree', expression: '¬a ∨ ¬b' }
      ]
    },
    example: {
      title: 'Beispiel: Distributivgesetz beweisen',
      steps: [
        {
          label: 'Die Behauptung',
          html:
            '<p>Wir wollen zeigen, dass gilt:</p>'
            + '<p><code>a ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c)</code></p>'
            + '<p>Das ist das <strong>Distributivgesetz</strong> – OR verteilt sich über AND, '
            + 'ähnlich wie in Mathe die Multiplikation über die Addition.</p>'
        },
        {
          label: 'Linke Seite berechnen',
          html:
            '<p>Linke Seite: <code>a ∨ (b ∧ c)</code></p>'
            + '<p>Zwischenschritt: z = b ∧ c, dann a ∨ z</p>'
            + '<table class="truth-table">'
            + '<thead><tr><th>a</th><th>b</th><th>c</th><th>b∧c</th><th>a∨(b∧c)</th></tr></thead>'
            + '<tbody>'
            + '<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>'
            + '<tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>'
            + '<tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>'
            + '<tr><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>'
            + '<tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>'
            + '<tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>'
            + '<tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>'
            + '<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>'
            + '</tbody></table>'
        },
        {
          label: 'Rechte Seite berechnen',
          html:
            '<p>Rechte Seite: <code>(a ∨ b) ∧ (a ∨ c)</code></p>'
            + '<p>Zwischenschritte: x = a ∨ b, y = a ∨ c, dann x ∧ y</p>'
            + '<table class="truth-table">'
            + '<thead><tr><th>a</th><th>b</th><th>c</th><th>a∨b</th><th>a∨c</th><th>(a∨b)∧(a∨c)</th></tr></thead>'
            + '<tbody>'
            + '<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>'
            + '<tr><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>'
            + '<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>'
            + '<tr><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>'
            + '<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>'
            + '<tr><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>'
            + '<tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>'
            + '<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>'
            + '</tbody></table>'
        },
        {
          label: 'Vergleich',
          html:
            '<p>Ergebnisse der linken Seite: <code>[0, 0, 0, 1, 1, 1, 1, 1]</code></p>'
            + '<p>Ergebnisse der rechten Seite: <code>[0, 0, 0, 1, 1, 1, 1, 1]</code></p>'
            + '<p>Alle 8 Zeilen stimmen überein → <strong>die Ausdrücke sind äquivalent!</strong></p>'
            + '<p>Damit ist das Distributivgesetz bewiesen: <code>a ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c)</code></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wann sind zwei logische Ausdrücke äquivalent?',
        options: [
          'Wenn sie gleich aussehen',
          'Wenn sie für mindestens eine Eingabe das gleiche Ergebnis liefern',
          'Wenn sie für alle möglichen Eingaben das gleiche Ergebnis liefern',
          'Wenn sie die gleichen Variablen verwenden'
        ],
        correct: 2,
        explanation: 'Zwei Ausdrücke sind äquivalent, wenn sie für ALLE möglichen Eingabekombinationen das identische Ergebnis liefern.'
      },
      {
        type: 'truth-table',
        question: 'Berechne die Wahrheitstabelle für a ∧ (b ∨ c) – mit Zwischenschritt b ∨ c:',
        variables: ['a', 'b', 'c'],
        resultColumns: ['b ∨ c', 'a ∧ (b ∨ c)'],
        correctResults: [[0, 0], [1, 0], [1, 0], [1, 0], [0, 0], [1, 1], [1, 1], [1, 1]]
      }
    ]
  },

  // ===== LEKTION 10: Gatterschaltungen & Axiomensystem =====
  {
    id: 10,
    title: 'Gatterschaltungen & Axiomensystem',
    explanation: {
      html:
        '<h3>Was sind Gatter?</h3>'
        + '<p>Gatter sind die <strong>kleinsten Bausteine</strong> in digitalen Schaltungen. '
        + 'Jedes Gatter führt eine bestimmte logische Operation aus – AND, OR, NOT usw.</p>'
        + '<p><strong>Analogie:</strong> Stell dir Gatter wie Legosteine vor. '
        + 'Jeder Stein hat eine bestimmte Form und Funktion. '
        + 'Zusammengesteckt ergeben sie komplexe Bauwerke – also komplexe Schaltungen.</p>'

        + '<h3>Gattersymbole nach IEC 60617-12</h3>'
        + '<p>In Europa verwenden wir die <strong>Rechteck-Symbole</strong> nach IEC-Norm. '
        + 'Der Buchstabe oder das Zeichen im Rechteck zeigt die Funktion:</p>'
        + '<table class="truth-table">'
        + '<thead><tr><th>Gatter</th><th>Symbol</th><th>Zeichen</th><th>Operator</th></tr></thead>'
        + '<tbody>'
        + '<tr><td>AND</td><td><span style="display:inline-block;width:60px;">'
        + '<svg viewBox="0 0 80 60" class="gate-symbol" style="width:60px;height:45px;">'
        + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
        + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
        + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
        + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">&amp;</text>'
        + '<line x1="55" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
        + '</svg></span></td><td>&amp;</td><td>∧</td></tr>'
        + '<tr><td>OR</td><td><span style="display:inline-block;width:60px;">'
        + '<svg viewBox="0 0 80 60" class="gate-symbol" style="width:60px;height:45px;">'
        + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
        + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
        + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
        + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">\u22651</text>'
        + '<line x1="55" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
        + '</svg></span></td><td>≥1</td><td>∨</td></tr>'
        + '<tr><td>NOT</td><td><span style="display:inline-block;width:60px;">'
        + '<svg viewBox="0 0 80 60" class="gate-symbol" style="width:60px;height:45px;">'
        + '<line x1="0" y1="30" x2="15" y2="30" stroke="black" stroke-width="2"/>'
        + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
        + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">1</text>'
        + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
        + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
        + '</svg></span></td><td>1 + Kreis</td><td>¬</td></tr>'
        + '<tr><td>XOR</td><td><span style="display:inline-block;width:60px;">'
        + '<svg viewBox="0 0 80 60" class="gate-symbol" style="width:60px;height:45px;">'
        + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
        + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
        + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
        + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">=1</text>'
        + '<line x1="55" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
        + '</svg></span></td><td>=1</td><td>⊕</td></tr>'
        + '<tr><td>NAND</td><td><span style="display:inline-block;width:60px;">'
        + '<svg viewBox="0 0 80 60" class="gate-symbol" style="width:60px;height:45px;">'
        + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
        + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
        + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
        + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">&amp;</text>'
        + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
        + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
        + '</svg></span></td><td>&amp; + Kreis</td><td>⊼</td></tr>'
        + '<tr><td>NOR</td><td><span style="display:inline-block;width:60px;">'
        + '<svg viewBox="0 0 80 60" class="gate-symbol" style="width:60px;height:45px;">'
        + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
        + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
        + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
        + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">\u22651</text>'
        + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
        + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
        + '</svg></span></td><td>≥1 + Kreis</td><td>⊽</td></tr>'
        + '<tr><td>XNOR</td><td><span style="display:inline-block;width:60px;">'
        + '<svg viewBox="0 0 80 60" class="gate-symbol" style="width:60px;height:45px;">'
        + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
        + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
        + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
        + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">=1</text>'
        + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
        + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
        + '</svg></span></td><td>=1 + Kreis</td><td>⊙</td></tr>'
        + '</tbody></table>'
        + '<p><strong>Negationskreis:</strong> Ein kleiner Kreis am Ausgang bedeutet, dass das Ergebnis negiert (umgedreht) wird. '
        + 'So wird aus AND → NAND, aus OR → NOR, aus XOR → XNOR.</p>'

        + '<h3>Gatterschaltungen lesen & erstellen</h3>'
        + '<p><strong>Lesen:</strong> Von links (Eingänge) nach rechts (Ausgang) – wie beim Lesen eines Satzes.</p>'
        + '<p><strong>Erstellen:</strong> Von innen (innerster Teilausdruck) nach außen – '
        + 'zuerst den inneren Teil als Gatter zeichnen, dann die äußeren Operationen anhängen.</p>'

        + '<h3>Axiomensystem der Booleschen Algebra</h3>'
        + '<p>Die folgenden Gesetze gelten für alle logischen Ausdrücke und helfen beim Vereinfachen:</p>'
        + '<table class="truth-table">'
        + '<thead><tr><th>Gesetz</th><th>AND-Form</th><th>OR-Form</th></tr></thead>'
        + '<tbody>'
        + '<tr><td><strong>Kommutativität</strong></td><td>a ∧ b = b ∧ a</td><td>a ∨ b = b ∨ a</td></tr>'
        + '<tr><td><strong>Assoziativität</strong></td><td>(a∧b) ∧ c = a ∧ (b∧c)</td><td>(a∨b) ∨ c = a ∨ (b∨c)</td></tr>'
        + '<tr><td><strong>Idempotenz</strong></td><td>a ∧ a = a</td><td>a ∨ a = a</td></tr>'
        + '<tr><td><strong>Distributivität</strong></td><td>a ∧ (b∨c) = (a∧b) ∨ (a∧c)</td><td>a ∨ (b∧c) = (a∨b) ∧ (a∨c)</td></tr>'
        + '<tr><td><strong>Neutralität</strong></td><td>a ∧ 1 = a</td><td>a ∨ 0 = a</td></tr>'
        + '<tr><td><strong>Extremalität</strong></td><td>a ∧ 0 = 0</td><td>a ∨ 1 = 1</td></tr>'
        + '<tr><td><strong>Komplementarität</strong></td><td>a ∧ ¬a = 0</td><td>a ∨ ¬a = 1</td></tr>'
        + '<tr><td><strong>Involution</strong></td><td colspan="2">¬¬a = a</td></tr>'
        + '<tr><td><strong>De Morgan</strong></td><td>¬(a ∧ b) = ¬a ∨ ¬b</td><td>¬(a ∨ b) = ¬a ∧ ¬b</td></tr>'
        + '<tr><td><strong>Dualität</strong></td><td colspan="2">Vertauscht man ∧↔∨ und 0↔1, bleibt die Gültigkeit erhalten</td></tr>'
        + '<tr><td><strong>Absorption</strong></td><td>a ∧ (a ∨ b) = a</td><td>a ∨ (a ∧ b) = a</td></tr>'
        + '</tbody></table>',
      visuals: [
        { type: 'circuit', circuit: 'half-adder', interactive: true }
      ]
    },
    example: {
      title: 'Beispiel: Gatternetz lesen',
      steps: [
        {
          label: 'Eingänge identifizieren',
          html:
            '<p>Gegeben ist ein Gatternetz mit zwei Eingängen <strong>a</strong> und <strong>b</strong>.</p>'
            + '<p>Die Signale fließen von links nach rechts.</p>'
        },
        {
          label: 'AND-Gatter',
          html:
            '<p>Zuerst gehen a und b in ein <strong>AND-Gatter</strong> (&amp;):</p>'
            + '<div style="text-align:center;margin:10px 0;">'
            + '<svg viewBox="0 0 80 60" class="gate-symbol" style="width:80px;height:60px;">'
            + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
            + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
            + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
            + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">&amp;</text>'
            + '<line x1="55" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
            + '</svg></div>'
            + '<p>Zwischenergebnis: <code>z = a ∧ b</code></p>'
        },
        {
          label: 'NOT-Gatter',
          html:
            '<p>Das Ergebnis z geht dann in ein <strong>NOT-Gatter</strong> (1 mit Kreis):</p>'
            + '<div style="text-align:center;margin:10px 0;">'
            + '<svg viewBox="0 0 80 60" class="gate-symbol" style="width:80px;height:60px;">'
            + '<line x1="0" y1="30" x2="15" y2="30" stroke="black" stroke-width="2"/>'
            + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
            + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">1</text>'
            + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
            + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
            + '</svg></div>'
            + '<p>Ergebnis: <code>¬(a ∧ b)</code> → Das ist die <strong>NAND-Funktion</strong>!</p>'
        },
        {
          label: 'Erkenntnis',
          html:
            '<p>Ein AND-Gatter gefolgt von einem NOT-Gatter ergibt dieselbe Funktion '
            + 'wie ein einzelnes <strong>NAND-Gatter</strong>:</p>'
            + '<div style="text-align:center;margin:10px 0;">'
            + '<svg viewBox="0 0 80 60" class="gate-symbol" style="width:80px;height:60px;">'
            + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
            + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
            + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
            + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">&amp;</text>'
            + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
            + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
            + '</svg></div>'
            + '<p><code>¬(a ∧ b) = a ⊼ b</code></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'matching',
        question: 'Ordne die Gattersymbole den richtigen Operatoren zu:',
        pairs: [
          { left: '& (AND-Gatter)', right: '∧' },
          { left: '≥1 (OR-Gatter)', right: '∨' },
          { left: '1 + Kreis (NOT-Gatter)', right: '¬' },
          { left: '=1 (XOR-Gatter)', right: '⊕' }
        ]
      },
      {
        type: 'multiple-choice',
        question: 'Was besagt De Morgans Gesetz?',
        options: [
          '¬(a ∧ b) = ¬a ∧ ¬b',
          '¬(a ∧ b) = ¬a ∨ ¬b',
          '¬(a ∨ b) = ¬a ∨ ¬b',
          '¬a ∧ ¬b = a ∨ b'
        ],
        correct: 1,
        explanation: 'De Morgans Gesetz besagt: ¬(a ∧ b) = ¬a ∨ ¬b und ¬(a ∨ b) = ¬a ∧ ¬b. Die Negation „kippt" den Operator (AND↔OR) und negiert beide Operanden.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist das Ergebnis von a ∧ ¬a?',
        options: [
          '1',
          'a',
          '0',
          '¬a'
        ],
        correct: 2,
        explanation: 'Das ist die Komplementarität: a ∧ ¬a = 0. Eine Variable UND ihr Gegenteil können nie gleichzeitig wahr sein.'
      }
    ]
  }
];
