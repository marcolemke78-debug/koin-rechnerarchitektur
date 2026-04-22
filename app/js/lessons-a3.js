const LessonsA3 = [

  // ===== LEKTION 32: Binäre Suchbäume – Grundlagen =====
  {
    id: 32,
    title: 'Binäre Suchbäume – Grundlagen',
    explanation: {
      html:
        '<h2>Binäre Suchbäume – Grundlagen</h2>'
        + '<p>Ein binärer Suchbaum (BST = Binary Search Tree) ist eine <strong>Datenstruktur</strong>, die Zahlen so speichert, dass man sehr schnell suchen kann. Der Name kommt daher, dass jeder Knoten maximal <em>zwei</em> Kinder hat.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Stell dir die Suche in einem dicken Wörterbuch vor. Du schlägst in der Mitte auf – dein Wort steht links oder rechts. Du machst wieder die Mitte der richtigen Hälfte auf – wieder links oder rechts. Nach ~20 Schritten bist du am Ziel, auch bei 1 Million Einträgen. Genau das macht ein binärer Suchbaum: Jeder Knoten trifft eine Entscheidung, Hälfte des Suchraums fällt weg.'
        + '</div>'
        + '<h3>Fachbegriffe (Klausur!)</h3>'
        + '<ul>'
        + '<li><strong>Wurzel</strong>: Der oberste Knoten (keine Eltern)</li>'
        + '<li><strong>Kinder</strong>: Direkt darunter hängende Knoten (links &amp; rechts)</li>'
        + '<li><strong>Elternknoten</strong>: Der Knoten, von dem ein Kind hängt</li>'
        + '<li><strong>Blatt</strong> (Blattknoten): Knoten ohne Kinder</li>'
        + '<li><strong>Innerer Knoten</strong>: Knoten mit mindestens einem Kind (und nicht die Wurzel)</li>'
        + '<li><strong>Nullzeiger</strong>: Fehlender Kind-Verweis (intern "null")</li>'
        + '<li><strong>Teilbaum</strong>: Jeder Knoten mit seinen Nachfolgern bildet wieder einen BST</li>'
        + '</ul>'
        + '<h3>Die BST-Eigenschaft (Pflichtregel!)</h3>'
        + '<div class="info-card" style="padding:12px;background:#eff6ff;border-left:3px solid #2563EB;">'
        + '<strong>Für jeden Knoten K gilt:</strong>'
        + '<ul style="margin:8px 0 0 20px;">'
        + '<li>Alle Schlüssel im <em>linken Teilbaum</em> sind <strong>kleiner</strong> als K</li>'
        + '<li>Alle Schlüssel im <em>rechten Teilbaum</em> sind <strong>größer</strong> als K</li>'
        + '<li>Keine doppelten Schlüssel (im Kontaktstudium strikt!)</li>'
        + '</ul>'
        + '</div>'
        + '<div class="warning-box">'
        + '<strong>Achtung Klausurfalle:</strong> Die Regel gilt nicht nur für direkte Kinder, sondern für <em>alle</em> Knoten im jeweiligen Teilbaum. Ein Knoten mit Wert 10 im linken Teilbaum einer 15 ist ok – aber derselbe Knoten mit 10 weiter unten rechts von einer 12 wäre falsch.'
        + '</div>'
        + '<h3>Suche nach einem Schlüssel</h3>'
        + '<ol>'
        + '<li>Mit der Wurzel beginnen</li>'
        + '<li>Gesuchter Wert &lt; aktueller Knoten → links weiter</li>'
        + '<li>Gesuchter Wert &gt; aktueller Knoten → rechts weiter</li>'
        + '<li>Wert gleich → gefunden</li>'
        + '<li>Kein Kind mehr vorhanden → nicht enthalten ("key not found")</li>'
        + '</ol>'
        + '<h3>Vorteile &amp; Nachteile</h3>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">'
        + '<div class="tip-box">'
        + '<strong>Vorteil:</strong> Bei einem <em>balancierten</em> Baum ist die Suche in ⌈log₂ n⌉ Schritten fertig – bei 1 Mio. Einträgen sind das ~20 Schritte.'
        + '</div>'
        + '<div class="warning-box">'
        + '<strong>Nachteil:</strong> Bei ungünstiger Einfüge-Reihenfolge (z.B. sortiert) <em>entartet</em> der Baum zu einer Liste – Suche dauert dann n Schritte statt log n.'
        + '</div>'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> BSTs sind die Grundlage von Mengen-Datenstrukturen (Set, TreeMap in Java), Datenbank-Indizes, Dateisystemen. Wer BST versteht, versteht, warum sortiertes Speichern so schnell ist. In der Klausur zuverlässig gefragt: BST zeichnen, nach einer Reihe von insert-Operationen.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: Beispielbaum analysieren',
      steps: [
        {
          label: 'Gegebener Baum',
          html:
            '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;font-family:monospace;text-align:center;">'
            + '        10\n'
            + '       /  \\\n'
            + '      5    14\n'
            + '     / \\   / \\\n'
            + '    2   8 12  17\n'
            + '   / \\     \\\n'
            + '  1   3    13</pre>'
        },
        {
          label: 'Fachbegriffe zuordnen',
          html:
            '<ul>'
            + '<li><strong>Wurzel</strong>: 10</li>'
            + '<li><strong>Blätter</strong>: 1, 3, 8, 13, 17 (keine Kinder)</li>'
            + '<li><strong>Innere Knoten</strong>: 5, 2, 14, 12 (je mindestens 1 Kind)</li>'
            + '<li><strong>Elternknoten von 13</strong>: 12</li>'
            + '<li><strong>Linker Teilbaum der Wurzel</strong>: alles unter 5</li>'
            + '</ul>'
        },
        {
          label: 'Suche nach 13',
          html:
            '<ol>'
            + '<li>Start bei Wurzel 10. 13 &gt; 10 → rechts</li>'
            + '<li>Bei 14. 13 &lt; 14 → links</li>'
            + '<li>Bei 12. 13 &gt; 12 → rechts</li>'
            + '<li>Bei 13. Treffer!</li>'
            + '</ol>'
            + '<p>Nur 4 Schritte bei 9 Knoten – das ist die Stärke des BST.</p>'
        },
        {
          label: 'BST-Eigenschaft prüfen',
          html:
            '<p>Für jeden Knoten schauen: Alle links kleiner, alle rechts größer?</p>'
            + '<ul>'
            + '<li>Wurzel 10: links (5,2,1,3,8) alle &lt; 10 ✓ ; rechts (14,12,13,17) alle &gt; 10 ✓</li>'
            + '<li>Knoten 5: links (2,1,3) alle &lt; 5 ✓ ; rechts (8) &gt; 5 ✓</li>'
            + '<li>Knoten 14: links (12,13) alle &lt; 14 ✓ ; rechts (17) &gt; 14 ✓</li>'
            + '</ul>'
            + '<p>Alle Knoten erfüllen die Regel → gültiger binärer Suchbaum.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie nennt man einen Knoten ohne Kinder in einem Binärbaum?',
        options: ['Wurzel', 'Innerer Knoten', 'Blatt(knoten)', 'Nullzeiger'],
        correct: 2,
        explanation: 'Ein Blattknoten (oder kurz Blatt) hat keine Kinder. Intern hat er statt Kind-Verweisen zwei Nullzeiger.'
      },
      {
        type: 'multiple-choice',
        question: 'In einem BST gilt für jeden Knoten: Im linken Teilbaum stehen …',
        options: [
          'alle Schlüssel, die größer als der Knoten sind.',
          'alle Schlüssel, die kleiner als der Knoten sind.',
          'alle Schlüssel mit gleicher Stelligkeit.',
          'beliebige Schlüssel, solange es nicht mehr als zwei sind.'
        ],
        correct: 1,
        explanation: 'Links = kleiner, rechts = größer. Das ist die zentrale BST-Eigenschaft und muss für jeden Knoten im gesamten Teilbaum gelten, nicht nur für direkte Kinder.'
      },
      {
        type: 'multiple-choice',
        question: 'Bei einem idealen balancierten BST mit n Knoten – wie viele Schritte braucht eine Suche im schlimmsten Fall?',
        options: ['n', 'n/2', '⌈log₂ n⌉', '2^n'],
        correct: 2,
        explanation: 'Bei balanciertem Baum halbiert jeder Schritt den Suchraum → logarithmische Laufzeit. Bei entartetem Baum (Sonderfall) wäre es n.'
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Baum ist KEIN gültiger binärer Suchbaum?',
        options: [
          'Wurzel 10, links 5 (mit Kindern 2 und 8), rechts 14',
          'Wurzel 10, links 5, rechts 14 (mit Kindern 12 und 17)',
          'Wurzel 10, links 5 (mit Kind 15 rechts), rechts 14',
          'Wurzel 10, links 5, rechts 14'
        ],
        correct: 2,
        explanation: 'Der dritte Baum hat im linken Teilbaum der 10 eine 15 – aber 15 > 10, also verletzt sie die BST-Eigenschaft. Alles im linken Teilbaum der Wurzel muss kleiner als die Wurzel sein.'
      }
    ]
  },

  // ===== LEKTION 33: BST Einfügen =====
  {
    id: 33,
    title: 'BST – Einfügen',
    explanation: {
      html:
        '<h2>BST – Schlüssel einfügen</h2>'
        + '<p>Einfügen ist die einfachste Operation auf einem BST. Die Regel: Neue Knoten landen <strong>immer</strong> als Blätter – und zwar an der Stelle, an der die Suche nach ihrem Wert ins Leere läuft.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Stell dir vor, du ordnest Bücher in ein Regal nach Titel. Für ein neues Buch suchst du den richtigen Platz: immer vergleichen mit dem aktuellen Buch (kleiner → links weiter, größer → rechts weiter). Irgendwann findest du eine Lücke – genau dort stellst du es rein. So macht es der BST auch.'
        + '</div>'
        + '<h3>Das Verfahren</h3>'
        + '<ol>'
        + '<li>Wenn Baum leer: Der neue Knoten wird <strong>Wurzel</strong>. Fertig.</li>'
        + '<li>Sonst: Mit der Wurzel beginnen</li>'
        + '<li>Neuer Wert &lt; aktueller Knoten → links weitergehen</li>'
        + '<li>Neuer Wert &gt; aktueller Knoten → rechts weitergehen</li>'
        + '<li>Wenn das nächste Kind "null" ist: Neuen Knoten <em>dort</em> als Blatt einfügen</li>'
        + '</ol>'
        + '<div class="info-card" style="padding:10px;">'
        + '<strong>Kernregel:</strong> Beim Einfügen bewegst du dich exakt wie bei der Suche – solange, bis du "über das Blatt hinaus" gehen würdest. Dort wird der neue Knoten eingefügt.'
        + '</div>'
        + '<h3>Warum immer als Blatt?</h3>'
        + '<p>Würde man Knoten irgendwo mittendrin einfügen, müsste man Teilbäume umordnen – das wäre aufwändig und fehleranfällig. Die "immer als Blatt"-Regel garantiert, dass die BST-Eigenschaft automatisch erhalten bleibt.</p>'
        + '<div class="warning-box">'
        + '<strong>Reihenfolge zählt!</strong> Zwei Einfüge-Sequenzen mit denselben Zahlen in unterschiedlicher Reihenfolge ergeben <em>unterschiedliche</em> Bäume.<br>'
        + 'insert(10,5,15): ausgewogen, Wurzel = 10<br>'
        + 'insert(5,10,15): Liste nach rechts, Wurzel = 5'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Einfügen + Suchen sind die beiden Operationen, die man <em>immer</em> auf einem BST macht. In der Klausur wird fast immer verlangt: "Führe folgende insert-Operationen aus und zeichne den Baum." Wer das sicher zeichnet, sammelt zuverlässig Punkte.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: insert(24,20,18,12,28,25,120,22,19)',
      steps: [
        {
          label: 'insert(24)',
          html:
            '<p>Baum leer → 24 wird Wurzel.</p>'
            + '<pre style="font-family:monospace;">24</pre>'
        },
        {
          label: 'insert(20)',
          html:
            '<p>20 &lt; 24 → links, dort leer → einfügen.</p>'
            + '<pre style="font-family:monospace;">'
            + '  24\n'
            + '  /\n'
            + ' 20</pre>'
        },
        {
          label: 'insert(18)',
          html:
            '<p>18 &lt; 24 → links zu 20. 18 &lt; 20 → links, leer → einfügen.</p>'
            + '<pre style="font-family:monospace;">'
            + '    24\n'
            + '    /\n'
            + '  20\n'
            + '  /\n'
            + ' 18</pre>'
        },
        {
          label: 'insert(12,28,25,120,22,19) – Endergebnis',
          html:
            '<p>Alle weiteren Schritte analog. Nachverfolgen des Pfades für <strong>19</strong>:</p>'
            + '<ul>'
            + '<li>19 &lt; 24 → links zu 20</li>'
            + '<li>19 &lt; 20 → links zu 18</li>'
            + '<li>19 &gt; 18 → rechts zu 22 (22 war nach 20.rechts eingefügt worden)</li>'
            + '<li>19 &lt; 22 → links, dort leer → einfügen</li>'
            + '</ul>'
            + '<p>Endbaum:</p>'
            + '<pre style="font-family:monospace;line-height:1.4;">'
            + '            24\n'
            + '           /  \\\n'
            + '         20    28\n'
            + '         /\\    / \\\n'
            + '       18 22  25 120\n'
            + '       /  /\n'
            + '     12  19</pre>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wo wird ein neuer Schlüssel in einem binären Suchbaum eingefügt (wenn er noch nicht enthalten ist)?',
        options: [
          'Als neue Wurzel ganz oben.',
          'Immer als Blatt an der Stelle, an der die Suche ins Leere läuft.',
          'An einer zufällig gewählten Position.',
          'Als Kind der Wurzel, links oder rechts.'
        ],
        correct: 1,
        explanation: 'Neue Knoten werden IMMER als Blatt eingefügt – am Ende des Suchpfades. So bleibt die BST-Eigenschaft automatisch erhalten.'
      },
      {
        type: 'multiple-choice',
        question: 'Du fügst in einen leeren BST die Werte 15, 8, 20, 3, 12 in dieser Reihenfolge ein. Was ist die Wurzel?',
        options: ['3', '8', '12', '15'],
        correct: 3,
        explanation: 'Der zuerst eingefügte Wert wird immer die Wurzel. Hier: 15.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Einfüge-Reihenfolge führt zu einem entarteten (listenförmigen) Baum nach rechts?',
        options: [
          '5, 3, 8, 2, 4',
          '5, 8, 10, 15, 20',
          '10, 5, 15, 2, 7',
          '20, 10, 30, 5, 25'
        ],
        correct: 1,
        explanation: 'Wenn alle Werte aufsteigend eingefügt werden (5,8,10,15,20), hängt jeder neue Knoten rechts → Liste nach rechts, keine Verzweigung.'
      },
      {
        type: 'multiple-choice',
        question: 'Was passiert, wenn du einen Wert einfügst, der bereits im BST steht?',
        options: [
          'Er wird als zweiter Knoten eingefügt.',
          'Im KOIN-Kontaktstudium gilt: doppelte Schlüssel sind nicht erlaubt.',
          'Der alte Wert wird überschrieben.',
          'Der BST wird zurückgesetzt.'
        ],
        correct: 1,
        explanation: 'Im Kontaktstudium wird explizit festgelegt, dass keine doppelten Schlüssel erlaubt sind. In realen Implementierungen gibt es verschiedene Strategien (Zähler hochzählen, Liste bilden, ignorieren).'
      }
    ]
  },

  // ===== LEKTION 34: BST Löschen =====
  {
    id: 34,
    title: 'BST – Löschen (3 Fälle)',
    explanation: {
      html:
        '<h2>BST – Schlüssel löschen</h2>'
        + '<p>Löschen ist die <strong>kniffligste</strong> BST-Operation. Je nachdem, wo der zu löschende Knoten im Baum steht, gibt es drei Fälle – und dafür drei verschiedene Vorgehensweisen.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Stell dir eine Firmen-Hierarchie vor. Einen Chef ohne Mitarbeiter kannst du einfach entfernen. Einen Chef mit einer Stellvertretung kannst du durch die Stellvertretung ersetzen. Aber einen Chef mit zwei Abteilungsleitern darunter? Da musst du einen der Leiter als Nachfolger ernennen – und dessen alte Position wieder neu besetzen. Genau das macht der BST bei den drei Löschfällen.'
        + '</div>'
        + '<h3>Fall 1: Knoten hat keine Kinder (Blatt)</h3>'
        + '<p>Einfach: Den Verweis aus dem Elternknoten auf <code>null</code> setzen. Fertig.</p>'
        + '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
        + 'Vorher:      Nachher:\n'
        + '   5           5\n'
        + '  /             \n'
        + ' 3  ←löschen    null</pre>'
        + '<h3>Fall 2: Knoten hat genau ein Kind</h3>'
        + '<p>Den Elternknoten <em>überspringen</em>: Der Elternknoten zeigt jetzt direkt auf das einzige Kind.</p>'
        + '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
        + 'Vorher:         Nachher:\n'
        + '   10             10\n'
        + '    \\              \\\n'
        + '    14 ←löschen    13\n'
        + '   /\n'
        + '  13</pre>'
        + '<h3>Fall 3: Knoten hat zwei Kinder (der schwierigste Fall)</h3>'
        + '<p>Den Schlüssel des zu löschenden Knotens durch einen <strong>Ersatz-Schlüssel</strong> ersetzen. Zwei gültige Möglichkeiten:</p>'
        + '<ul>'
        + '<li>Der <strong>linkeste Knoten im rechten Teilbaum</strong> (kleinster Wert, der größer als der gelöschte ist)</li>'
        + '<li>Der <strong>rechteste Knoten im linken Teilbaum</strong> (größter Wert, der kleiner als der gelöschte ist)</li>'
        + '</ul>'
        + '<p>Diese Ersatz-Knoten haben garantiert höchstens 1 Kind – sie können per Fall 1 oder 2 wegbewegt werden.</p>'
        + '<div class="tip-box">'
        + '<strong>In Klausuren:</strong> Wenn die Aufgabe "remove" sagt und die Lösung "alle Möglichkeiten" verlangt, MUSST du beide Varianten zeichnen (linkeste rechts ODER rechteste links). Das ist eine häufige Falle.'
        + '</div>'
        + '<h3>Vorteile &amp; Nachteile des BST – Nachtrag</h3>'
        + '<p>Wie schon erwähnt: Bei ungünstiger Einfüge- und Löschreihenfolge kann der Baum entarten. Es gibt daher in der Praxis <em>balancierte Bäume</em> (AVL-Baum, Rot-Schwarz-Baum, B-Baum). Die sind nicht Klausurstoff in A3, werden aber in AlgoDat weitergeführt.</p>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Löschen ist der Unterschied zwischen "BST verstanden" und "BST verstanden und angewendet". In der Klausur kommen oft remove-Aufgaben mit 2 Kindern – genau der Fall, der die meisten Punkte bringt, weil er die meisten Teilschritte hat.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: remove(24) im BST',
      steps: [
        {
          label: 'Ausgangsbaum',
          html:
            '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + '          24\n'
            + '         /  \\\n'
            + '       20    28\n'
            + '       /\\\n'
            + '     18 22</pre>'
            + '<p>24 hat zwei Kinder (20 und 28) → Fall 3.</p>'
        },
        {
          label: 'Möglichkeit A: linkester im rechten Teilbaum',
          html:
            '<p>Rechter Teilbaum = nur 28. Linkester Knoten dort = 28 selbst (hat kein linkes Kind).</p>'
            + '<p>24 durch 28 ersetzen, alten 28-Knoten entfernen (Blatt, Fall 1):</p>'
            + '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + '          28\n'
            + '         /\n'
            + '       20\n'
            + '       /\\\n'
            + '     18 22</pre>'
        },
        {
          label: 'Möglichkeit B: rechtester im linken Teilbaum',
          html:
            '<p>Linker Teilbaum = 20 mit Kindern 18,22. Rechtester Knoten dort = 22.</p>'
            + '<p>24 durch 22 ersetzen, alten 22-Knoten entfernen (Blatt, Fall 1):</p>'
            + '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + '          22\n'
            + '         /  \\\n'
            + '       20    28\n'
            + '       /\n'
            + '     18</pre>'
            + '<p>Beide Lösungen sind gültig. In der Klausur: beide zeichnen!</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welcher ist der einfachste Löschfall in einem BST?',
        options: [
          'Knoten ist die Wurzel.',
          'Knoten hat genau ein Kind.',
          'Knoten hat keine Kinder (ist ein Blatt).',
          'Knoten hat zwei Kinder.'
        ],
        correct: 2,
        explanation: 'Blätter werden einfach entfernt – Elternknoten zeigt jetzt auf null. Keine Umordnung nötig.'
      },
      {
        type: 'multiple-choice',
        question: 'Ein Knoten mit zwei Kindern soll gelöscht werden. Welche Knoten sind als Ersatz geeignet?',
        options: [
          'Der linkeste Knoten im rechten Teilbaum.',
          'Der rechteste Knoten im linken Teilbaum.',
          'Die Wurzel des Baumes.',
          'Antworten 1 und 2 sind beide korrekt.'
        ],
        correct: 3,
        explanation: 'Beide Varianten sind gültig – welche man wählt, ist eine Designentscheidung. Wichtig: Diese Ersatzknoten haben immer höchstens 1 Kind, lassen sich also anschließend per Fall 1 oder 2 bewegen.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum hat der "linkeste Knoten im rechten Teilbaum" immer höchstens ein Kind?',
        options: [
          'Er ist immer ein Blatt.',
          'Er hat kein linkes Kind, weil sonst der "linkeste" noch linker läge.',
          'Weil der Baum sonst unbalanciert wäre.',
          'Das stimmt nicht, er kann zwei Kinder haben.'
        ],
        correct: 1,
        explanation: 'Definition "linkester": Folge so lange nach links, bis kein linkes Kind mehr da ist. Ein linkes Kind hat er also definitionsgemäß nicht. Ein rechtes Kind wäre aber erlaubt – darum "höchstens 1 Kind".'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist der klassische Nachteil eines (unbalancierten) BST?',
        options: [
          'Er kann keine Zahlen speichern.',
          'Bei ungünstiger Einfüge-Reihenfolge entartet er zu einer Liste → Suche dauert n statt log n.',
          'Er verbraucht zu viel Speicher.',
          'Er ist kompliziert zu zeichnen.'
        ],
        correct: 1,
        explanation: 'Der unbalancierte BST kann bei sortierter Eingabe zu einer Kette entarten. In der Praxis nimmt man darum balancierte Varianten (AVL-Baum, Rot-Schwarz-Baum).'
      }
    ]
  },

  // ===== LEKTION 35: Hashing =====
  {
    id: 35,
    title: 'Hashing & Divisions-Rest-Methode',
    explanation: {
      html:
        '<h2>Hashing – Streuspeicherung</h2>'
        + '<p>Hashing ist eine Technik, die <strong>beliebige Schlüssel</strong> (Zahlen, Namen, Buchtitel …) auf einen festen Bereich von Array-Indizes abbildet. Das Ziel: direkter Zugriff in <em>einem Schritt</em>, unabhängig von der Anzahl der Einträge.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Denk an die Postfächer in einer Universität. Jeder Student hat ein eigenes Fach – das Fach wird aus seiner Matrikelnummer berechnet (z.B. "letzte drei Ziffern"). Die Nachricht landet direkt im richtigen Fach, ohne dass der Pförtner die Liste aller 10.000 Studenten durchsucht. Hashing macht genau das für Daten: Schlüssel → Index → direktes Fach.'
        + '</div>'
        + '<h3>Das Problem: Platz sparen</h3>'
        + '<ul>'
        + '<li>6-stellige Matrikelnummern: 10⁶ = 1 Mio. mögliche Werte</li>'
        + '<li>Tatsächlich verwendet: ca. 10.000 Studenten</li>'
        + '<li>Ein Array mit 1 Mio. Einträgen wäre Speicherverschwendung → <strong>Streuspeicherung</strong></li>'
        + '</ul>'
        + '<h3>Die Hashfunktion h(k)</h3>'
        + '<p>Eine Hashfunktion bildet jeden Schlüssel k auf einen Index 0 ≤ h(k) ≤ m-1 ab, wobei m die Größe der Hashtabelle ist.</p>'
        + '<div class="info-card" style="padding:10px;">'
        + '<strong>Anforderungen an eine gute Hashfunktion:</strong>'
        + '<ul style="margin:8px 0 0 20px;">'
        + '<li>Schnell berechenbar</li>'
        + '<li>Möglichst gleichmäßige Verteilung auf die Plätze</li>'
        + '<li>Deterministisch (gleicher Schlüssel → gleicher Index, immer)</li>'
        + '</ul>'
        + '</div>'
        + '<h3>Divisions-Rest-Methode (Standard!)</h3>'
        + '<div class="info-card" style="padding:12px;text-align:center;font-size:1.1em;background:#eff6ff;">'
        + '<strong>h(k) = k mod m</strong>'
        + '</div>'
        + '<p>Einfach und erstaunlich effektiv. Aber: Die Wahl von m ist kritisch!</p>'
        + '<div class="tip-box">'
        + '<strong>Regeln für m:</strong>'
        + '<ul>'
        + '<li>Beste Wahl: <strong>Primzahlen</strong> (2, 3, 5, 7, 11, 13, …)</li>'
        + '<li>Schlechte Wahl: Potenzen der Basis (z.B. m=100 oder m=32), weil dann nur die untersten Ziffern den Hash bestimmen</li>'
        + '<li>Faustregel: m sollte ungefähr so groß sein wie die Anzahl erwarteter Einträge</li>'
        + '</ul>'
        + '</div>'
        + '<h3>Das Problem der Kollisionen</h3>'
        + '<p>Da es meist mehr mögliche Schlüssel gibt als Plätze, können zwei Schlüssel denselben Hashwert bekommen. Beispiel mit m=7:</p>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + 'h(15) = 15 mod 7 = 1\n'
        + 'h(43) = 43 mod 7 = 1   ← Kollision!</pre>'
        + '<p>Kollisionen sind unvermeidbar – die Frage ist: Wie behandeln wir sie? (Nächste Lektion!)</p>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Hashing steckt überall: Python-Dictionaries, Java HashMap, Datenbank-Indizes, Git (Commit-Hashes), Passwort-Speicherung, Cryptocurrency. Wer Hashing versteht, versteht einen großen Teil moderner Software-Architektur.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: Hashfunktion h(k) = k mod 7',
      steps: [
        {
          label: 'Schlüssel hashen',
          html:
            '<p>Gegeben Schlüssel: [2, 15, 12, 53, 5, 43, 19]</p>'
            + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + 'h(2)  = 2 mod 7  = 2\n'
            + 'h(15) = 15 mod 7 = 1\n'
            + 'h(12) = 12 mod 7 = 5\n'
            + 'h(53) = 53 mod 7 = 4\n'
            + 'h(5)  = 5 mod 7  = 5   ← Kollision mit 12!\n'
            + 'h(43) = 43 mod 7 = 1   ← Kollision mit 15!\n'
            + 'h(19) = 19 mod 7 = 5   ← Kollision mit 12 und 5!</pre>'
        },
        {
          label: 'Warum ist m=7 besser als m=10?',
          html:
            '<p>Mit m=10 würden alle Schlüssel auf Basis ihrer <em>letzten Ziffer</em> verteilt:</p>'
            + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + 'h(15) = 5, h(25) = 5, h(35) = 5, h(95) = 5 ...\n'
            + '→ alle Schlüssel mit "5" hinten kollidieren!</pre>'
            + '<p>Mit m=7 (Primzahl) wird die gesamte Zahl berücksichtigt → gleichmäßigere Verteilung.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Hashfunktion beschreibt die Divisions-Rest-Methode?',
        options: ['h(k) = k · m', 'h(k) = k / m', 'h(k) = k mod m', 'h(k) = m - k'],
        correct: 2,
        explanation: 'h(k) = k mod m gibt den Rest bei Teilung durch m. Das Ergebnis liegt automatisch im Bereich 0 bis m-1 – genau die gültigen Array-Indizes.'
      },
      {
        type: 'multiple-choice',
        question: 'Du nutzt eine Hashtabelle der Größe 11 mit h(k)=k mod p. Welches p ist die beste Wahl?',
        options: ['10', '11', '12', '15'],
        correct: 1,
        explanation: 'p = 11 – die Tabellengröße selbst, und zufällig auch eine Primzahl. Primzahlen sind die beste Wahl, weil sie Kollisionen minimieren.'
      },
      {
        type: 'multiple-choice',
        question: 'Berechne h(111) für eine Hashtabelle der Größe 11 (h(k) = k mod 11).',
        options: ['0', '1', '10', '11'],
        correct: 0,
        explanation: '111 = 11·10 + 1, also 111 mod 11 = 1. Der Schlüssel 111 landet an Position 1.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum sind Primzahlen als Divisor in der Divisions-Rest-Methode besser als andere Zahlen?',
        options: [
          'Weil sie schneller zu berechnen sind.',
          'Weil sie eine gleichmäßigere Verteilung der Schlüssel auf die Plätze bewirken.',
          'Weil sie keine Kollisionen zulassen.',
          'Weil sie immer ungerade sind.'
        ],
        correct: 1,
        explanation: 'Bei Potenzen der Basis (z.B. 10 oder 100) bestimmen nur die letzten Ziffern den Hash. Primzahlen streuen gleichmäßiger, weil sie keinen gemeinsamen Teiler mit typischen Schlüssel-Mustern haben.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist eine Hashkollision?',
        options: [
          'Ein Programmabsturz bei großen Hashtabellen.',
          'Wenn zwei verschiedene Schlüssel denselben Hashwert liefern.',
          'Wenn der Hashwert negativ wird.',
          'Wenn ein Schlüssel mehrfach eingefügt wird.'
        ],
        correct: 1,
        explanation: 'Kollision = zwei Schlüssel k₁ ≠ k₂, aber h(k₁) = h(k₂). Bei endlich vielen Plätzen und beliebig vielen Schlüsseln unvermeidbar – darum gibt es Kollisionsbehandlung (nächste Lektion).'
      }
    ]
  },

  // ===== LEKTION 36: Kollisionen durch Verkettung =====
  {
    id: 36,
    title: 'Kollisionen durch Verkettung',
    explanation: {
      html:
        '<h2>Kollisionsbehandlung durch Verkettung</h2>'
        + '<p>Wenn zwei Schlüssel auf denselben Hashwert abbilden, brauchen wir eine Strategie, wie beide gespeichert werden können. Die einfachste Methode: <strong>Verkettung</strong>.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Denk an die Post-Fächer im Wohnheim. Wenn zwei Studenten zufällig dasselbe Fach bekommen (z.B. weil ihr Nachname mit demselben Buchstaben anfängt), wird das Fach eben zu einem kleinen Papierstapel – jedes Stück Post darin gehört potenziell einem der beiden. Du suchst dann im Stapel nach deinem Namen. Genau das ist Verkettung: Jeder Hashtabellen-Platz ist eine kleine <em>Liste</em>, keine einzelne Zelle.'
        + '</div>'
        + '<h3>Das Prinzip</h3>'
        + '<ul>'
        + '<li>Jeder Platz der Hashtabelle speichert eine <strong>verkettete Liste</strong></li>'
        + '<li>Bei Kollision wird der neue Eintrag <em>hinten an die Liste angehängt</em></li>'
        + '<li>Bei der Suche: Erst Hashwert berechnen → Liste durchsuchen bis Schlüssel gefunden</li>'
        + '</ul>'
        + '<h3>Operationen</h3>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Operation</th><th style="padding:6px;border:1px solid #ccc;">Ablauf</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Suchen</b></td><td style="padding:6px;border:1px solid #ccc;">1. h(k) berechnen<br>2. Liste an Position h(k) durchgehen, bis k gefunden oder Ende</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Einfügen</b></td><td style="padding:6px;border:1px solid #ccc;">1. h(k) berechnen<br>2. Liste durchgehen (Duplikat-Prüfung optional)<br>3. Hinten anhängen</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Löschen</b></td><td style="padding:6px;border:1px solid #ccc;">1. h(k) berechnen<br>2. In der Liste suchen und entfernen</td></tr>'
        + '</table>'
        + '<div class="tip-box">'
        + '<strong>Vorteil der Verkettung:</strong> Die Hashtabelle selbst muss nicht vergrößert werden, auch wenn mehr Einträge als Plätze hinzukommen. Die Listen wachsen einfach.'
        + '</div>'
        + '<div class="warning-box">'
        + '<strong>Nachteil:</strong> Wenn viele Kollisionen auftreten, werden die Listen lang – die Suche wird langsam (wieder linear). Eine gute Hashfunktion minimiert das.'
        + '</div>'
        + '<h3>Klausur-Darstellung</h3>'
        + '<p>Hashtabellen zeichnest du als Tabelle mit Position links und verketteten Listen rechts. Die Einfügereihenfolge zählt – neue Einträge kommen ans Ende der Liste.</p>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + 'Pos | Liste\n'
        + '----+----------------------\n'
        + ' 0  | (leer)\n'
        + ' 1  | 15 → 43\n'
        + ' 2  | 2\n'
        + ' 3  | (leer)\n'
        + ' 4  | 53\n'
        + ' 5  | 12 → 5 → 19\n'
        + ' 6  | (leer)</pre>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Verkettung ist die einfachste und in der Praxis sehr gängige Kollisionsstrategie (z.B. in Java HashMap bis vor wenigen Versionen). Als Klausuraufgabe: "Fülle diese Hashtabelle mit folgenden Schlüsseln, Kollisionen durch Verkettung." – klares Rezept, sichere Punkte.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: Hashtabelle Größe 7 mit Verkettung',
      steps: [
        {
          label: 'Aufgabe',
          html:
            '<p>Füge [4, 21, 13, 24, 78, 39, 16] in eine leere Hashtabelle der Größe 7 ein (h(k) = k mod 7, Kollisionen durch Verkettung).</p>'
        },
        {
          label: 'Hashwerte berechnen',
          html:
            '<pre style="font-family:monospace;">'
            + 'h(4)  = 4 mod 7  = 4\n'
            + 'h(21) = 21 mod 7 = 0\n'
            + 'h(13) = 13 mod 7 = 6\n'
            + 'h(24) = 24 mod 7 = 3\n'
            + 'h(78) = 78 mod 7 = 1\n'
            + 'h(39) = 39 mod 7 = 4   ← Kollision mit 4\n'
            + 'h(16) = 16 mod 7 = 2</pre>'
        },
        {
          label: 'Tabelle Schritt für Schritt',
          html:
            '<p>Nach allen Einfügungen:</p>'
            + '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + 'Pos | Liste\n'
            + '----+----------------------\n'
            + ' 0  | 21\n'
            + ' 1  | 78\n'
            + ' 2  | 16\n'
            + ' 3  | 24\n'
            + ' 4  | 4 → 39\n'
            + ' 5  | (leer)\n'
            + ' 6  | 13</pre>'
            + '<p>Nur eine Kollision (4 und 39). 39 landet hinter 4 in der Liste an Position 4.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie werden Kollisionen beim Hashing durch Verkettung behandelt?',
        options: [
          'Der kollidierende Schlüssel wird auf den nächsten freien Platz gelegt.',
          'Jeder Platz der Hashtabelle enthält eine verkettete Liste; Kollisionen werden angehängt.',
          'Die Hashtabelle wird vergrößert und alle Schlüssel neu gehasht.',
          'Der ältere Schlüssel wird überschrieben.'
        ],
        correct: 1,
        explanation: 'Verkettung = Liste pro Platz. Neue kollidierende Einträge kommen ans Listenende. Andere Strategien wie "offene Adressierung" nutzen den nächsten freien Platz – das ist aber nicht Verkettung.'
      },
      {
        type: 'multiple-choice',
        question: 'Eine Hashtabelle der Größe 9 mit h(k) = k mod 9. Wohin wird der Schlüssel 29 eingefügt?',
        options: ['0', '2', '9', '29'],
        correct: 1,
        explanation: '29 mod 9 = 2 (weil 9·3 = 27, also 29 - 27 = 2). Schlüssel 29 landet an Position 2.'
      },
      {
        type: 'multiple-choice',
        question: 'Hashtabelle m=7 mit h(k) = k mod 7. Bereits enthalten: Position 3 hat Liste [10 → 17 → 24]. Wohin gehört 38 im nächsten insert?',
        options: ['Position 3 ans Ende anhängen', 'Position 3 vorne einfügen', 'Position 0', 'Position 4'],
        correct: 0,
        explanation: '38 mod 7 = 3 (weil 7·5 = 35, also 38 - 35 = 3). Liste an Position 3 wird [10 → 17 → 24 → 38]. Neue Einträge werden hinten angehängt.'
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Vorteil hat die Verkettung gegenüber der "offenen Adressierung" (Schlüssel auf nächsten freien Platz)?',
        options: [
          'Verkettung ist immer schneller.',
          'Die Hashtabelle muss nie vergrößert werden – mehr Einträge als Plätze sind möglich.',
          'Verkettung hat keine Kollisionen.',
          'Verkettung braucht weniger Speicher.'
        ],
        correct: 1,
        explanation: 'Verkettung erlaubt beliebig viele Einträge pro Platz – die Hashtabellen-Größe ist flexibel. Offene Adressierung braucht immer mehr Plätze als Einträge und wird bei Füllstand über ~70% sehr langsam.'
      }
    ]
  }

];
