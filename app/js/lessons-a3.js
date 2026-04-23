// Gemeinsamer Beispielbaum
const A3_BEISPIELBAUM = {
  value: 10,
  left: {
    value: 5,
    left: { value: 2, left: { value: 1 }, right: { value: 3 } },
    right: { value: 8 }
  },
  right: {
    value: 14,
    left: { value: 12, right: { value: 13 } },
    right: { value: 17 }
  }
};

const LessonsA3 = [

  // ===== LEKTION 32: Binäre Suchbäume – Grundlagen =====
  {
    id: 32,
    title: 'Binäre Suchbäume – Grundlagen',
    explanation: {
      html:
        '<h2>Binäre Suchbäume – Grundlagen</h2>'
        + '<p>Ein <strong>binärer Suchbaum</strong> (kurz: BST) ist eine Datenstruktur, mit der man <strong>sehr schnell</strong> Zahlen finden kann. Jeder Knoten hat höchstens <em>zwei</em> Kinder – daher der Name "binär".</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Wörterbuch:</strong> Beim Wort-Suchen im Wörterbuch schlägst du in der Mitte auf. Dein Wort steht <em>links</em> oder <em>rechts</em> davon. Du schlägst die Mitte der richtigen Hälfte auf – wieder links oder rechts. Nach ~20 Schritten hast du dein Wort, auch bei 1 Million Einträgen. Der BST macht genau das: jedes Mal halbiert sich der Suchraum.'
        + '</div>'
        + '<h3>Die wichtigsten Begriffe</h3>'
        + '<p>Schau dir den Baum unten an – er begleitet uns durch die Lektion:</p>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Bäume sind eine der am häufigsten eingesetzten Datenstrukturen überhaupt. Sie stecken in Mengen und sortierten Maps (TreeMap in Java), in Datenbank-Indizes, in Dateisystemen, in Entscheidungsbäumen der KI. Wer BST versteht, versteht, warum sortiertes Speichern so schnell sein kann. In der Klausur wird fast immer verlangt: "Führe diese Operationen aus und zeichne den Baum." – mit dem hier gelernten Muster sichere Punkte.'
        + '</div>',
      visuals: [
        { type: 'bst-viz', tree: A3_BEISPIELBAUM, label: 'Unser Beispielbaum mit 9 Knoten' }
      ]
    },
    example: {
      title: 'Fachbegriffe + Suche nach 13',
      steps: [
        {
          label: 'Schritt 1 – Die Begriffe am Baum',
          html:
            '<ul>'
            + '<li><strong>Wurzel</strong>: 10 (ganz oben, hat keinen Elternknoten)</li>'
            + '<li><strong>Blätter</strong>: 1, 3, 8, 13, 17 (keine Kinder – gelb markiert)</li>'
            + '<li><strong>Innerer Knoten</strong>: hat mindestens 1 Kind und ist nicht Wurzel (hier: 5, 2, 14, 12)</li>'
            + '<li><strong>Elternknoten von 13</strong>: die 12</li>'
            + '<li><strong>Teilbaum</strong>: Jeder Knoten + seine Nachfahren bildet selbst wieder einen BST</li>'
            + '</ul>',
          visuals: [
            { type: 'bst-viz', tree: A3_BEISPIELBAUM, highlight: [1,3,8,13,17], label: 'Blätter (gelb)' }
          ]
        },
        {
          label: 'Schritt 2 – Die BST-Regel',
          html:
            '<div class="reading-guide">'
            + '<strong>Für jeden Knoten K gilt:</strong>'
            + '<ul style="margin:6px 0 0 20px;">'
            + '<li>Alle Werte <em>links</em> sind <strong>kleiner</strong> als K</li>'
            + '<li>Alle Werte <em>rechts</em> sind <strong>größer</strong> als K</li>'
            + '</ul>'
            + '</div>'
            + '<p>Check an der Wurzel 10:</p>'
            + '<ul>'
            + '<li>Links: 5, 2, 1, 3, 8 – alle &lt; 10 ✓</li>'
            + '<li>Rechts: 14, 12, 13, 17 – alle &gt; 10 ✓</li>'
            + '</ul>'
            + '<div class="warning-box"><strong>Klausurfalle:</strong> Die Regel gilt für <em>alle</em> Knoten im Teilbaum, nicht nur für direkte Kinder!</div>'
        },
        {
          label: 'Schritt 3 – Suche nach 13',
          html:
            '<p>Wir suchen die Zahl 13. Der rote Pfad zeigt den Weg:</p>'
            + '<ol>'
            + '<li>Start bei 10. 13 &gt; 10 → nach rechts</li>'
            + '<li>Bei 14. 13 &lt; 14 → nach links</li>'
            + '<li>Bei 12. 13 &gt; 12 → nach rechts</li>'
            + '<li>Bei 13. Treffer! 🎯</li>'
            + '</ol>'
            + '<p>4 Schritte bei 9 Knoten. Bei 1.000.000 Knoten wären es nur ~20 Schritte!</p>',
          visuals: [
            { type: 'bst-viz', tree: A3_BEISPIELBAUM, highlightPath: [10,14,12,13], label: 'Suchpfad nach 13 (rot)' }
          ]
        },
        {
          label: 'Jetzt du!',
          html:
            '<p>Bau dir einen eigenen Baum: Gib Zahlen ein und drück <em>Insert</em>. Probier auch <em>Suchen</em> und <em>Löschen</em>.</p>',
          visuals: [
            { type: 'bst-interactive', initial: [10, 5, 14, 2, 8, 12, 17, 1, 3, 13], label: 'Interaktiver BST – spiel damit rum' }
          ]
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie nennt man einen Knoten ohne Kinder?',
        options: ['Wurzel', 'Innerer Knoten', 'Blatt', 'Nullzeiger'],
        correct: 2,
        explanation: 'Ein Blatt hat keine Kinder.'
      },
      {
        type: 'multiple-choice',
        question: 'Im linken Teilbaum eines Knotens K stehen …',
        options: [
          'Werte größer als K',
          'Werte kleiner als K',
          'beliebige Werte',
          'genau zwei Werte'
        ],
        correct: 1,
        explanation: 'Links = kleiner, rechts = größer. Das ist die BST-Regel.'
      },
      {
        type: 'multiple-choice',
        question: 'Balancierter BST mit n Knoten – wie viele Schritte braucht die Suche maximal?',
        options: ['n', 'n/2', '⌈log₂ n⌉', '2^n'],
        correct: 2,
        explanation: 'Jeder Schritt halbiert den Suchraum → log₂ n.'
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Baum ist KEIN gültiger BST?',
        options: [
          'Wurzel 10, links 5, rechts 14',
          'Wurzel 10, links 5 (mit Kindern 2 und 8), rechts 14',
          'Wurzel 10, links 5 (mit Kind 15 rechts), rechts 14',
          'Wurzel 10, links 5, rechts 14 (mit Kindern 12 und 17)'
        ],
        correct: 2,
        explanation: 'Eine 15 links von der Wurzel 10 verletzt die Regel (alles links muss < 10 sein).'
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
        + '<p>Einfügen ist einfach: <strong>Neue Knoten landen immer als Blatt</strong> – genau dort, wo die Suche ins Leere läuft.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Buch einordnen:</strong> Du willst ein neues Buch ins Regal stellen. Du vergleichst den Titel mit dem aktuellen Buch: Kleiner? Gehe nach links. Größer? Gehe nach rechts. Irgendwann findest du eine Lücke – da stellst du es rein.'
        + '</div>'
        + '<div class="reading-guide">'
        + '<strong>Algorithmus:</strong>'
        + '<ol style="margin:6px 0 0 20px;">'
        + '<li>Ist der Baum leer? → Neuer Knoten wird Wurzel. Fertig.</li>'
        + '<li>Sonst: Start bei der Wurzel.</li>'
        + '<li>Neuer Wert &lt; aktueller Knoten? → Geh nach <strong>links</strong>.</li>'
        + '<li>Neuer Wert &gt; aktueller Knoten? → Geh nach <strong>rechts</strong>.</li>'
        + '<li>Kind ist null (leer)? → <strong>Einfügen!</strong></li>'
        + '</ol>'
        + '</div>'
        + '<h3>Probier es selbst!</h3>'
        + '<p>Leerer Baum unten. Gib eine Zahl ein, drück <em>Insert</em>, und beobachte, wie der Baum wächst. Der neu eingefügte Knoten wird grün hervorgehoben.</p>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Einfügen + Suchen sind die beiden Grundoperationen, die du auf einem BST fast immer brauchst. In jedem Programm, das Daten "nach Wert sortiert" speichert, läuft im Hintergrund genau dieser Einfüge-Algorithmus ab. In der Klausur fast garantiert: "Führe folgende insert-Operationen aus und zeichne den entstehenden Baum." Wer das sicher zeichnet, sammelt zuverlässig Punkte – und macht keine Folge-Fehler im Löschen-Teil.'
        + '</div>',
      visuals: [
        { type: 'bst-interactive', mode: 'insert-only', initial: [], label: 'Interaktiv: Baum aufbauen' }
      ]
    },
    example: {
      title: 'Beispiel: insert(24, 20, 18, 12, 28, 25, 120, 22, 19)',
      steps: [
        {
          label: 'Schritt 1 – insert(24): leerer Baum',
          html:
            '<p>Baum war leer → 24 wird die Wurzel.</p>',
          visuals: [
            { type: 'bst-viz', tree: { value: 24 }, newNode: 24 }
          ]
        },
        {
          label: 'Schritt 2 – insert(20, 18, 12)',
          html:
            '<p>20 &lt; 24 → links von 24. 18 &lt; 20 → links von 20. 12 &lt; 18 → links von 18. Baum wächst nach links.</p>',
          visuals: [
            { type: 'bst-viz', tree: {
              value: 24,
              left: { value: 20, left: { value: 18, left: { value: 12 } } }
            }, newNode: 12 }
          ]
        },
        {
          label: 'Schritt 3 – insert(28, 25, 120)',
          html:
            '<p>28 &gt; 24 → rechts. 25 &lt; 28 → links. 120 &gt; 28 → rechts.</p>',
          visuals: [
            { type: 'bst-viz', tree: {
              value: 24,
              left: { value: 20, left: { value: 18, left: { value: 12 } } },
              right: { value: 28, left: { value: 25 }, right: { value: 120 } }
            }, newNode: 120 }
          ]
        },
        {
          label: 'Schritt 4 – insert(22): knifflig!',
          html:
            '<p>Pfad für 22:</p>'
            + '<ul><li>22 &lt; 24 → links zu 20</li><li>22 &gt; 20 → rechts, dort leer → einfügen</li></ul>',
          visuals: [
            { type: 'bst-viz', tree: {
              value: 24,
              left: {
                value: 20,
                left: { value: 18, left: { value: 12 } },
                right: { value: 22 }
              },
              right: { value: 28, left: { value: 25 }, right: { value: 120 } }
            }, newNode: 22 }
          ]
        },
        {
          label: 'Schritt 5 – insert(19): Endbaum',
          html:
            '<p>Pfad für 19:</p>'
            + '<ul><li>19 &lt; 24 → links zu 20</li><li>19 &lt; 20 → links zu 18</li><li>19 &gt; 18 → rechts, dort leer → einfügen</li></ul>',
          visuals: [
            { type: 'bst-viz', tree: {
              value: 24,
              left: {
                value: 20,
                left: { value: 18, left: { value: 12 }, right: { value: 19 } },
                right: { value: 22 }
              },
              right: { value: 28, left: { value: 25 }, right: { value: 120 } }
            }, newNode: 19 }
          ]
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wo landet ein neuer Wert im BST?',
        options: [
          'Als neue Wurzel',
          'Immer als Blatt, wo die Suche ins Leere läuft',
          'An zufälliger Stelle',
          'In der Mitte'
        ],
        correct: 1,
        explanation: 'Neue Knoten werden IMMER als Blatt eingefügt – am Ende des Suchpfades.'
      },
      {
        type: 'multiple-choice',
        question: 'Leerer BST. Du fügst 15, 8, 20, 3, 12 ein. Was ist die Wurzel?',
        options: ['3', '8', '12', '15'],
        correct: 3,
        explanation: 'Der erste Wert wird immer die Wurzel.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Einfüge-Reihenfolge macht einen entarteten Baum (Liste nach rechts)?',
        options: [
          '5, 3, 8, 2, 4',
          '5, 8, 10, 15, 20',
          '10, 5, 15, 2, 7',
          '20, 10, 30, 5, 25'
        ],
        correct: 1,
        explanation: 'Aufsteigende Werte hängen jedes Mal rechts → Liste, keine Verzweigung.'
      },
      {
        type: 'multiple-choice',
        question: 'Was passiert, wenn du einen schon vorhandenen Wert einfügst?',
        options: [
          'Er wird als zweiter Knoten eingefügt.',
          'Im KOIN-Kontaktstudium: doppelte Schlüssel sind nicht erlaubt.',
          'Der alte Wert wird überschrieben.',
          'Fehler.'
        ],
        correct: 1,
        explanation: 'Im KOIN-Kontext: keine Duplikate.'
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
        + '<p>Löschen ist die <strong>kniffligste</strong> Operation. Es gibt drei Fälle – je nachdem, wie viele Kinder der zu löschende Knoten hat.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Chef entlassen:</strong> Einen Chef ohne Mitarbeiter: einfach weg. Einen Chef mit einer Stellvertretung: die Stellvertretung rückt nach. Einen Chef mit zwei Abteilungsleitern: einer wird Nachfolger – und dessen alte Position muss neu besetzt werden.'
        + '</div>'
        + '<h3>Die drei Fälle</h3>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;width:100%;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Fall</th><th style="padding:6px;border:1px solid #ccc;">Vorgehen</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>1. Blatt</b></td><td style="padding:6px;border:1px solid #ccc;">Einfach Eltern-Verweis auf null setzen. Weg.</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>2. Ein Kind</b></td><td style="padding:6px;border:1px solid #ccc;">Knoten überspringen: Eltern zeigt direkt auf das Kind.</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>3. Zwei Kinder</b></td><td style="padding:6px;border:1px solid #ccc;">Schlüssel ersetzen mit: linkestem im rechten Teilbaum <em>oder</em> rechtestem im linken Teilbaum.</td></tr>'
        + '</table>'
        + '<div class="tip-box">'
        + '<strong>Klausur-Tipp:</strong> Bei Fall 3 IMMER <em>beide</em> Möglichkeiten zeichnen, wenn die Aufgabe es verlangt!'
        + '</div>'
        + '<h3>Probier es selbst!</h3>'
        + '<p>Der Baum unten ist vorgeladen. Gib eine Zahl ein und drück <em>Löschen</em>. Alle drei Fälle kommen vor!</p>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Löschen ist der Unterschied zwischen "BST verstanden" und "BST angewendet". In der Klausur kommen häufig remove-Aufgaben mit 2 Kindern – genau der Fall, der die meisten Punkte bringt, weil er die meisten Teilschritte hat. Und ganz wichtig: Wenn in einer Aufgabe "alle Möglichkeiten" verlangt sind, <em>musst</em> du bei Fall 3 beide Varianten (linkester rechts, rechtester links) zeichnen. Das ist ein Standard-Fallstrick.'
        + '</div>',
      visuals: [
        { type: 'bst-interactive', initial: [24, 20, 28, 18, 22, 25, 120, 12, 19, 13], label: 'Interaktiv: probier Löschen in allen 3 Fällen' }
      ]
    },
    example: {
      title: 'Alle drei Fälle durchspielen',
      steps: [
        {
          label: 'Fall 1 – Blatt: remove(3)',
          html:
            '<p>3 hat keine Kinder. Einfach weg.</p>',
          visuals: [
            { type: 'bst-viz', tree: A3_BEISPIELBAUM, highlight: [3], label: 'Vorher' },
            {
              type: 'bst-viz',
              tree: {
                value: 10,
                left: { value: 5, left: { value: 2, left: { value: 1 } }, right: { value: 8 } },
                right: { value: 14, left: { value: 12, right: { value: 13 } }, right: { value: 17 } }
              },
              label: 'Nachher: 3 ist weg'
            }
          ]
        },
        {
          label: 'Fall 2 – Ein Kind: remove(12)',
          html:
            '<p>12 hat nur ein Kind (die 13). Die 13 rückt nach – Eltern 14 zeigt jetzt direkt auf 13.</p>',
          visuals: [
            { type: 'bst-viz', tree: A3_BEISPIELBAUM, highlight: [12], label: 'Vorher' },
            {
              type: 'bst-viz',
              tree: {
                value: 10,
                left: { value: 5, left: { value: 2, left:{value:1}, right:{value:3} }, right: { value: 8 } },
                right: { value: 14, left: { value: 13 }, right: { value: 17 } }
              },
              label: 'Nachher: 13 ist an die Stelle von 12 gerückt'
            }
          ]
        },
        {
          label: 'Fall 3 – Zwei Kinder: remove(10) – zwei Lösungen!',
          html:
            '<p>10 ist die Wurzel mit zwei Kindern (5 und 14). Zwei Möglichkeiten:</p>'
            + '<ul>'
            + '<li><strong>A:</strong> linkester im rechten Teilbaum = <strong>12</strong> ersetzt die Wurzel</li>'
            + '<li><strong>B:</strong> rechtester im linken Teilbaum = <strong>8</strong> ersetzt die Wurzel</li>'
            + '</ul>'
            + '<p>Beide Lösungen sind korrekt:</p>',
          visuals: [
            {
              type: 'bst-viz',
              tree: {
                value: 12,
                left: { value: 5, left: { value: 2, left:{value:1}, right:{value:3} }, right: { value: 8 } },
                right: { value: 14, left: { value: 13 }, right: { value: 17 } }
              },
              highlight: [12],
              label: 'Variante A: 12 neue Wurzel'
            },
            {
              type: 'bst-viz',
              tree: {
                value: 8,
                left: { value: 5, left: { value: 2, left:{value:1}, right:{value:3} } },
                right: { value: 14, left: { value: 12, right:{value:13} }, right: { value: 17 } }
              },
              highlight: [8],
              label: 'Variante B: 8 neue Wurzel'
            }
          ]
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welcher Löschfall ist am einfachsten?',
        options: [
          'Wurzel löschen',
          'Knoten mit einem Kind',
          'Blatt löschen',
          'Knoten mit zwei Kindern'
        ],
        correct: 2,
        explanation: 'Blatt: einfach weg, keine Umordnung.'
      },
      {
        type: 'multiple-choice',
        question: 'Knoten mit zwei Kindern löschen – welche Ersatz-Knoten sind gültig?',
        options: [
          'Linkester im rechten Teilbaum',
          'Rechtester im linken Teilbaum',
          'Die Wurzel',
          '1 und 2 sind beide gültig'
        ],
        correct: 3,
        explanation: 'Beide Varianten sind erlaubt.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum hat der "linkeste im rechten Teilbaum" höchstens 1 Kind?',
        options: [
          'Er ist immer ein Blatt.',
          'Er kann kein linkes Kind haben – sonst wäre der "linkeste" noch weiter links.',
          'Baum wäre sonst unbalanciert.',
          'Er kann auch zwei Kinder haben.'
        ],
        correct: 1,
        explanation: 'Definition: kein linkes Kind mehr. Rechtes Kind ist aber erlaubt.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist der Nachteil eines unbalancierten BST?',
        options: [
          'Er speichert keine Zahlen.',
          'Bei ungünstiger Reihenfolge entartet er zur Liste (Suche O(n) statt O(log n)).',
          'Braucht zu viel Speicher.',
          'Schwer zu zeichnen.'
        ],
        correct: 1,
        explanation: 'Entarteter Baum = Liste → Suche ist so schnell wie eine sequenzielle Suche.'
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
        + '<p>Hashing ist eine Methode, einen Wert <strong>direkt</strong> an einer bestimmten Stelle zu speichern – ohne Suche. Das geht schneller als BST oder Liste.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Postfächer:</strong> An der Uni bekommt jeder Student ein Postfach. Das Fach wird aus der Matrikelnummer berechnet: z.B. "letzte 3 Ziffern". Der Briefträger muss nicht suchen – er rechnet kurz und legt die Post direkt ins richtige Fach.'
        + '</div>'
        + '<h3>Die Hashfunktion</h3>'
        + '<p>Eine <strong>Hashfunktion</strong> h(k) rechnet aus einem Schlüssel k einen Index aus. Der Standard ist:</p>'
        + '<div class="info-card" style="padding:12px;text-align:center;font-size:1.3em;background:#eff6ff;">'
        + '<strong>h(k) = k mod m</strong>'
        + '</div>'
        + '<p><em>mod</em> ist der Rest bei der Division. <strong>m</strong> ist die Größe der Hashtabelle.</p>'
        + '<div class="tip-box">'
        + '<strong>Regel für m:</strong> Am besten eine <strong>Primzahl</strong> (2, 3, 5, 7, 11, 13 …). Primzahlen verteilen die Schlüssel am gleichmäßigsten.'
        + '</div>'
        + '<h3>Kollisionen – das Problem</h3>'
        + '<p>Wenn zwei Schlüssel denselben Hashwert bekommen, heißt das <strong>Kollision</strong>. Beispiel:</p>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + 'h(15) = 15 mod 7 = 1\n'
        + 'h(43) = 43 mod 7 = 1   ← gleicher Platz!</pre>'
        + '<p>Was tun? → Siehe nächste Lektion (Verkettung).</p>'
        + '<h3>Probier es selbst!</h3>'
        + '<p>Gib unten Zahlen ein und beobachte, wo sie landen. Die Formel steht dabei.</p>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Hashing steckt in fast jedem Programm: Python-Dictionaries, Java HashMap, Datenbank-Indizes, Passwort-Speicherung, Git-Commit-IDs, Blockchain. Wenn du jemals einen Namen in einer großen Liste "sofort" finden willst, ist Hashing die Antwort – viel schneller als BST. In der Klausur sind 4 Punkte zuverlässig drin: Hashtabelle füllen mit h(k)=k mod m. Wenn du die Rest-Rechnung kannst, ist der Rest einfaches Hinschreiben.'
        + '</div>',
      visuals: [
        {
          type: 'hashtable-interactive',
          size: 7,
          initial: [],
          label: 'Interaktive Hashtabelle m=7: Zahlen eingeben und einfügen'
        }
      ]
    },
    example: {
      title: 'Beispiel: h(k) = k mod 7',
      steps: [
        {
          label: 'Schritt 1 – Hashwerte ausrechnen',
          html:
            '<p>Schlüssel: [2, 15, 12, 53, 5, 43, 19]</p>'
            + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + 'h(2)  = 2 mod 7  = 2\n'
            + 'h(15) = 15 mod 7 = 1\n'
            + 'h(12) = 12 mod 7 = 5\n'
            + 'h(53) = 53 mod 7 = 4\n'
            + 'h(5)  = 5 mod 7  = 5   ← kollidiert mit 12\n'
            + 'h(43) = 43 mod 7 = 1   ← kollidiert mit 15\n'
            + 'h(19) = 19 mod 7 = 5   ← kollidiert auch bei 5</pre>'
        },
        {
          label: 'Schritt 2 – Tabelle aufbauen',
          html:
            '<p>Bei Kollisionen hängen wir hinten an:</p>',
          visuals: [
            { type: 'hashtable-viz', size: 7, entries: [2, 15, 12, 53, 5, 43, 19], label: 'Fertige Tabelle' }
          ]
        },
        {
          label: 'Warum m=7 besser als m=10?',
          html:
            '<p>Mit m=10 würden Schlüssel nach ihrer <em>letzten Ziffer</em> sortiert:</p>'
            + '<pre style="font-family:monospace;">h(15) = 5, h(25) = 5, h(35) = 5 ...</pre>'
            + '<p>Alle Zahlen mit "5" hinten kollidieren! Mit Primzahl 7 ist die Verteilung viel gleichmäßiger.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Hashfunktion ist die Divisions-Rest-Methode?',
        options: ['h(k) = k · m', 'h(k) = k / m', 'h(k) = k mod m', 'h(k) = m - k'],
        correct: 2,
        explanation: 'Rest bei Division durch m – liegt automatisch zwischen 0 und m-1.'
      },
      {
        type: 'multiple-choice',
        question: 'Hashtabelle der Größe 11. Welches p ist beste Wahl für h(k) = k mod p?',
        options: ['10', '11', '12', '15'],
        correct: 1,
        explanation: 'p = 11 – Tabellengröße selbst, und außerdem Primzahl.'
      },
      {
        type: 'multiple-choice',
        question: 'Berechne 111 mod 11.',
        options: ['0', '1', '10', '11'],
        correct: 1,
        explanation: '11·10 = 110, also 111 - 110 = 1.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum Primzahlen als Teiler?',
        options: [
          'Schneller zu rechnen.',
          'Gleichmäßigere Verteilung der Schlüssel.',
          'Keine Kollisionen.',
          'Immer ungerade.'
        ],
        correct: 1,
        explanation: 'Primzahlen haben keine gemeinsamen Teiler mit typischen Mustern → gleichmäßig.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist eine Hashkollision?',
        options: [
          'Programmabsturz.',
          'Zwei Schlüssel bekommen denselben Hashwert.',
          'Hashwert wird negativ.',
          'Ein Schlüssel wird doppelt eingefügt.'
        ],
        correct: 1,
        explanation: 'Kollision = zwei Schlüssel, gleicher Hash.'
      }
    ]
  },

  // ===== LEKTION 36: Kollisionen durch Verkettung =====
  {
    id: 36,
    title: 'Kollisionen durch Verkettung',
    explanation: {
      html:
        '<h2>Kollisionen durch Verkettung</h2>'
        + '<p>Wenn zwei Schlüssel denselben Hashwert haben: <strong>beide speichern!</strong> Dazu wird jeder Platz der Tabelle zu einer <em>kleinen Liste</em>.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Fach mit Stapel:</strong> Wenn zwei Studenten dasselbe Postfach bekommen, liegt da ein kleiner Stapel Post. Du siehst deinen Namen drauf, nimmst deinen Brief. Genauso funktioniert Verkettung: am selben Platz hängt eine Liste aller kollidierenden Schlüssel.'
        + '</div>'
        + '<h3>So geht es</h3>'
        + '<ul>'
        + '<li>Jeder Platz der Hashtabelle hat eine <strong>verkettete Liste</strong></li>'
        + '<li>Bei Kollision: neuen Eintrag <strong>hinten an die Liste</strong> anhängen</li>'
        + '<li>Suchen: h(k) ausrechnen → Liste an dem Platz durchgehen</li>'
        + '</ul>'
        + '<h3>Probier es mit vielen Kollisionen!</h3>'
        + '<p>Unten läuft die Hashtabelle m=7. Gib viele verschiedene Zahlen ein – mit etwas Glück (oder gezielter Auswahl) siehst du Kollisionen:</p>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Verkettung ist die einfachste und gebräuchlichste Strategie zur Kollisions-Behandlung – so war die Java HashMap lange Zeit aufgebaut. Wer das Prinzip verstanden hat, weiß: Hashing ist nicht "magisch schnell", sondern nur dann schnell, wenn die Hashfunktion die Schlüssel gut verteilt. In der Klausur ist das genau das Standard-Schema: "Fülle diese Tabelle mit folgenden Schlüsseln, Kollisionen durch Verkettung." Ein Rezept, das verlässlich Punkte bringt.'
        + '</div>',
      visuals: [
        {
          type: 'hashtable-interactive',
          size: 7,
          initial: [2, 15, 43, 9, 53, 12, 5],
          label: 'Interaktive Hashtabelle – probier Kollisionen (z.B. 2, 9, 16 alle → Platz 2)'
        }
      ]
    },
    example: {
      title: 'Beispiel: [4, 21, 13, 24, 78, 39, 16] in m=7',
      steps: [
        {
          label: 'Schritt 1 – Hashwerte',
          html:
            '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + 'h(4)  = 4 mod 7  = 4\n'
            + 'h(21) = 21 mod 7 = 0\n'
            + 'h(13) = 13 mod 7 = 6\n'
            + 'h(24) = 24 mod 7 = 3\n'
            + 'h(78) = 78 mod 7 = 1\n'
            + 'h(39) = 39 mod 7 = 4   ← kollidiert mit 4\n'
            + 'h(16) = 16 mod 7 = 2</pre>'
        },
        {
          label: 'Schritt 2 – Fertige Tabelle',
          html:
            '<p>Nur eine Kollision (4 und 39). 39 landet hinter 4:</p>',
          visuals: [
            { type: 'hashtable-viz', size: 7, entries: [4, 21, 13, 24, 78, 39, 16], label: 'Endzustand' }
          ]
        },
        {
          label: 'Klausur-Darstellung',
          html:
            '<p>So zeichnest du es auf Papier:</p>'
            + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + 'Pos | Liste\n'
            + '----+------\n'
            + ' 0  | 21\n'
            + ' 1  | 78\n'
            + ' 2  | 16\n'
            + ' 3  | 24\n'
            + ' 4  | 4 → 39\n'
            + ' 5  | (leer)\n'
            + ' 6  | 13</pre>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie werden Kollisionen durch Verkettung behandelt?',
        options: [
          'Neuer Schlüssel landet auf nächstem freien Platz.',
          'Jeder Platz hat eine Liste, Kollisionen werden angehängt.',
          'Tabelle wird vergrößert.',
          'Alter Schlüssel wird überschrieben.'
        ],
        correct: 1,
        explanation: 'Verkettung = Liste pro Platz, neue Einträge hinten anhängen.'
      },
      {
        type: 'multiple-choice',
        question: 'Hashtabelle m=9, h(k) = k mod 9. Wohin kommt 29?',
        options: ['0', '2', '9', '29'],
        correct: 1,
        explanation: '29 mod 9 = 2.'
      },
      {
        type: 'multiple-choice',
        question: 'Hashtabelle m=7, h(k) = k mod 7. Platz 3 enthält bereits [10 → 17 → 24]. Wohin mit 38?',
        options: ['Ans Ende von Platz 3 anhängen', 'Vorne in Platz 3 einfügen', 'Platz 0', 'Platz 4'],
        correct: 0,
        explanation: '38 mod 7 = 3. Hinten anhängen: [10 → 17 → 24 → 38].'
      },
      {
        type: 'multiple-choice',
        question: 'Vorteil der Verkettung gegenüber "offener Adressierung"?',
        options: [
          'Immer schneller.',
          'Tabelle muss nicht vergrößert werden – mehr Einträge als Plätze möglich.',
          'Keine Kollisionen.',
          'Weniger Speicher.'
        ],
        correct: 1,
        explanation: 'Verkettung: beliebig viele Einträge pro Platz.'
      }
    ]
  },

  // ===== LEKTION 42: Binäre Suche =====
  {
    id: 42,
    title: 'Binäre Suche',
    explanation: {
      html:
        '<h2>Binäre Suche</h2>'
        + '<p>Ein Computer kann eine Zahl in einer <em>sortierten</em> Liste extrem schnell finden – nicht durch Stumpf-Durchgehen, sondern durch <strong>Halbieren</strong>. Das ist die <strong>Binäre Suche</strong>.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Wörterbuch aufschlagen:</strong> Suchst du das Wort <em>Kolibri</em>, blätterst du nicht von Seite 1 an. Du schlägst in der Mitte auf, siehst "M…", und weißt: <em>Kolibri</em> ist davor. Du halbierst das vordere Viertel, schaust wieder, halbierst weiter. Nach 5–6 Sprüngen bist du da. Genau so arbeitet die binäre Suche auf einem sortierten Array.'
        + '</div>'
        + '<h3>Voraussetzung</h3>'
        + '<div class="warning-box">'
        + '<strong>Achtung:</strong> Die binäre Suche funktioniert <em>nur auf sortierten Daten</em>. Auf unsortiertem Array bleibt dir nur die lineare Suche (Wert für Wert durchgehen, max. n Vergleiche).'
        + '</div>'
        + '<h3>So viel schneller ist das</h3>'
        + '<p>Bei <code>n</code> Elementen braucht die lineare Suche im schlechtesten Fall <code>n</code> Vergleiche. Die binäre Suche halbiert jedes Mal – also nur <code>⌈log₂ n⌉</code> Vergleiche.</p>'
        + '<table style="border-collapse:collapse;margin:12px 0;width:100%;max-width:500px;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">n (Anzahl Einträge)</th><th style="padding:6px;border:1px solid #ccc;">Linear (max)</th><th style="padding:6px;border:1px solid #ccc;">Binär (max)</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">10</td><td style="padding:6px;border:1px solid #ccc;">10</td><td style="padding:6px;border:1px solid #ccc;"><strong>4</strong></td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">1 000</td><td style="padding:6px;border:1px solid #ccc;">1 000</td><td style="padding:6px;border:1px solid #ccc;"><strong>10</strong></td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">1 000 000</td><td style="padding:6px;border:1px solid #ccc;">1 Mio.</td><td style="padding:6px;border:1px solid #ccc;"><strong>20</strong></td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">1 000 000 000</td><td style="padding:6px;border:1px solid #ccc;">1 Mrd.</td><td style="padding:6px;border:1px solid #ccc;"><strong>30</strong></td></tr>'
        + '</table>'
        + '<div class="tip-box">'
        + '<strong>Klausur-Fakt:</strong> Bei <strong>1 Milliarde</strong> sortierten Einträgen braucht die binäre Suche maximal <strong>30 Vergleiche</strong> (<code>⌈log₂(10⁹)⌉ = 30</code>). Diese Faustregel ist eine klassische Klausur-Frage.'
        + '</div>'
        + '<h3>Der Algorithmus (Pseudocode)</h3>'
        + '<pre style="background:#f3f4f6;padding:12px;font-family:monospace;border-radius:4px;">'
        + 'Eingabe: sortiertes Array A, gesuchter Schlüssel S\n'
        + 'l := 0                   // linke Grenze\n'
        + 'r := n - 1               // rechte Grenze\n'
        + '\n'
        + 'solange l ≠ r:\n'
        + '  m := l + ⌊(r - l) / 2⌋   // Mittelindex\n'
        + '  M := A[m]                // Wert in der Mitte\n'
        + '  falls M &lt; S:   l := m   // weiter rechts suchen\n'
        + '  sonst:          r := m   // weiter links suchen\n'
        + '  falls M = S:    gib m aus und fertig</pre>'
        + '<div class="reading-guide">'
        + '<strong>Lese-Hilfe:</strong> <code>l</code> und <code>r</code> markieren den aktuellen Suchbereich. <code>m</code> ist dessen Mitte. Bei jedem Durchlauf schrumpft der Bereich auf die Hälfte – links oder rechts von <code>m</code>.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Binäre Suche steckt überall dort, wo du "sofort" etwas findest – Datenbank-Indizes, Git-Objekt-Lookup, Wörterbücher in Programmiersprachen (wenn sie sortiert arbeiten). Ohne diesen Algorithmus wären moderne Suchmaschinen und Datenbanken tausendfach langsamer. In der Klausur ist das eine zuverlässige 4-Punkte-Aufgabe: <em>max. Vergleiche</em> berechnen + <em>Algorithmus von Hand</em> durchspielen.'
        + '</div>',
      visuals: [
        {
          type: 'bit-layout',
          bits: '0000000000',
          groups: [
            { start: 0, length: 1, color: '#F3F4F6', label: '4' },
            { start: 1, length: 1, color: '#F3F4F6', label: '7' },
            { start: 2, length: 1, color: '#F3F4F6', label: '13' },
            { start: 3, length: 1, color: '#F3F4F6', label: '26' },
            { start: 4, length: 1, color: '#FEF3C7', label: '37' },
            { start: 5, length: 1, color: '#F3F4F6', label: '42' },
            { start: 6, length: 1, color: '#F3F4F6', label: '51' },
            { start: 7, length: 1, color: '#F3F4F6', label: '59' },
            { start: 8, length: 1, color: '#F3F4F6', label: '61' },
            { start: 9, length: 1, color: '#F3F4F6', label: '62' }
          ],
          label: 'Startzustand: Array mit 10 Elementen, Mittelindex m=4'
        }
      ]
    },
    example: {
      title: 'Beispiel: Suche nach 26 in [4, 7, 13, 26, 37, 42, 51, 59, 61, 62]',
      steps: [
        {
          label: 'Durchlauf 1 – M=37 ist zu groß',
          html:
            '<p>Start: <code>l=0</code>, <code>r=9</code>. Mitte: <code>m = 0 + ⌊9/2⌋ = 4</code>, also <code>M = A[4] = 37</code>.</p>'
            + '<p>37 &gt; 26 → der gesuchte Wert liegt links. Also <code>r := m = 4</code>.</p>'
            + '<table style="border-collapse:collapse;margin:10px 0;font-family:monospace;">'
            + '<tr><th style="padding:6px;border:1px solid #ccc;">Index</th><td style="padding:6px;border:1px solid #ccc;">0</td><td style="padding:6px;border:1px solid #ccc;">1</td><td style="padding:6px;border:1px solid #ccc;">2</td><td style="padding:6px;border:1px solid #ccc;">3</td><td style="padding:6px;border:1px solid #ccc;background:#FEF3C7;"><strong>4</strong></td><td style="padding:6px;border:1px solid #ccc;">5</td><td style="padding:6px;border:1px solid #ccc;">6</td><td style="padding:6px;border:1px solid #ccc;">7</td><td style="padding:6px;border:1px solid #ccc;">8</td><td style="padding:6px;border:1px solid #ccc;">9</td></tr>'
            + '<tr><th style="padding:6px;border:1px solid #ccc;">Wert</th><td style="padding:6px;border:1px solid #ccc;background:#DBEAFE;">4</td><td style="padding:6px;border:1px solid #ccc;background:#DBEAFE;">7</td><td style="padding:6px;border:1px solid #ccc;background:#DBEAFE;">13</td><td style="padding:6px;border:1px solid #ccc;background:#DBEAFE;">26</td><td style="padding:6px;border:1px solid #ccc;background:#FEF3C7;"><strong>37</strong></td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">42</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">51</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">59</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">61</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">62</td></tr>'
            + '</table>'
            + '<p style="font-family:monospace;">print(l=0, r=9, m=4, M=37)</p>'
        },
        {
          label: 'Durchlauf 2 – M=13 ist zu klein',
          html:
            '<p>Neuer Bereich: <code>l=0</code>, <code>r=4</code>. Mitte: <code>m = 0 + ⌊(4-0)/2⌋ = 2</code>, also <code>M = A[2] = 13</code>.</p>'
            + '<p>13 &lt; 26 → der gesuchte Wert liegt rechts. Also <code>l := m = 2</code>.</p>'
            + '<table style="border-collapse:collapse;margin:10px 0;font-family:monospace;">'
            + '<tr><th style="padding:6px;border:1px solid #ccc;">Index</th><td style="padding:6px;border:1px solid #ccc;">0</td><td style="padding:6px;border:1px solid #ccc;">1</td><td style="padding:6px;border:1px solid #ccc;background:#FEF3C7;"><strong>2</strong></td><td style="padding:6px;border:1px solid #ccc;">3</td><td style="padding:6px;border:1px solid #ccc;">4</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">5</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">6</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">7</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">8</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">9</td></tr>'
            + '<tr><th style="padding:6px;border:1px solid #ccc;">Wert</th><td style="padding:6px;border:1px solid #ccc;background:#DBEAFE;">4</td><td style="padding:6px;border:1px solid #ccc;background:#DBEAFE;">7</td><td style="padding:6px;border:1px solid #ccc;background:#FEF3C7;"><strong>13</strong></td><td style="padding:6px;border:1px solid #ccc;background:#DBEAFE;">26</td><td style="padding:6px;border:1px solid #ccc;background:#DBEAFE;">37</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">42</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">51</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">59</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">61</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">62</td></tr>'
            + '</table>'
            + '<p style="font-family:monospace;">print(l=0, r=4, m=2, M=13)</p>'
        },
        {
          label: 'Durchlauf 3 – M=26 gefunden!',
          html:
            '<p>Neuer Bereich: <code>l=2</code>, <code>r=4</code>. Mitte: <code>m = 2 + ⌊(4-2)/2⌋ = 3</code>, also <code>M = A[3] = 26</code>.</p>'
            + '<p>26 = 26 → <strong>gefunden bei Index 3</strong>!</p>'
            + '<table style="border-collapse:collapse;margin:10px 0;font-family:monospace;">'
            + '<tr><th style="padding:6px;border:1px solid #ccc;">Index</th><td style="padding:6px;border:1px solid #ccc;">0</td><td style="padding:6px;border:1px solid #ccc;">1</td><td style="padding:6px;border:1px solid #ccc;">2</td><td style="padding:6px;border:1px solid #ccc;background:#D1FAE5;"><strong>3</strong></td><td style="padding:6px;border:1px solid #ccc;">4</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">5</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">6</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">7</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">8</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">9</td></tr>'
            + '<tr><th style="padding:6px;border:1px solid #ccc;">Wert</th><td style="padding:6px;border:1px solid #ccc;background:#DBEAFE;">4</td><td style="padding:6px;border:1px solid #ccc;background:#DBEAFE;">7</td><td style="padding:6px;border:1px solid #ccc;background:#DBEAFE;">13</td><td style="padding:6px;border:1px solid #ccc;background:#D1FAE5;"><strong>26 ✓</strong></td><td style="padding:6px;border:1px solid #ccc;background:#DBEAFE;">37</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">42</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">51</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">59</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">61</td><td style="padding:6px;border:1px solid #ccc;color:#9ca3af;">62</td></tr>'
            + '</table>'
            + '<p style="font-family:monospace;">print(l=2, r=4, m=3, M=26) → <strong>return 3</strong></p>'
            + '<div class="tip-box">'
            + '<strong>Klausur-Format:</strong> In der Klausur sollst du diese Tabelle Durchlauf für Durchlauf ausfüllen (<code>l</code>, <code>r</code>, <code>m</code>, <code>M</code>). Dokumentiere jede <em>print</em>-Zeile, sonst gibt es keine Punkte – auch wenn das Endergebnis stimmt.'
            + '</div>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist die <strong>Voraussetzung</strong>, damit die binäre Suche funktioniert?',
        options: [
          'Das Array muss sortiert sein.',
          'Das Array darf keine Duplikate enthalten.',
          'Die Länge des Arrays muss eine Zweierpotenz sein.',
          'Das Array muss im Speicher zusammenhängend liegen.'
        ],
        correct: 0,
        explanation: 'Die binäre Suche entscheidet in jedem Schritt "links oder rechts weitermachen" anhand des Größenvergleichs – das geht nur bei sortierten Daten.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Wie viele Vergleiche braucht die binäre Suche <strong>maximal</strong> bei einer Zahlenreihe mit <strong>1.000.000.000</strong> (1 Milliarde) Einträgen?',
        options: ['10', '20', '30', '1 000 000 000'],
        correct: 2,
        explanation: '⌈log₂(10⁹)⌉ = ⌈29,9⌉ = 30. Nach 30 Halbierungen ist der Bereich auf 1 Element geschrumpft.'
      },
      {
        type: 'multiple-choice',
        question: 'Im Algorithmus: Im aktuellen Durchlauf gilt <code>M = 42</code> und du suchst <code>S = 51</code>. Was passiert?',
        options: [
          '<code>l := m</code> (weiter rechts suchen)',
          '<code>r := m</code> (weiter links suchen)',
          'Gib <code>m</code> aus und beende',
          'Erhöhe <code>m</code> um 1'
        ],
        correct: 0,
        explanation: 'M &lt; S → der gesuchte Wert liegt weiter rechts. Deshalb wird die linke Grenze <code>l</code> auf <code>m</code> gesetzt.'
      },
      {
        type: 'multiple-choice',
        question: 'Vergleich bei <strong>1 000 Elementen</strong> – wie viele Vergleiche im schlechtesten Fall?',
        options: [
          'Linear: 10, Binär: 1 000',
          'Linear: 1 000, Binär: 10',
          'Linear: 500, Binär: 50',
          'Beide gleich schnell'
        ],
        correct: 1,
        explanation: 'Linear = n = 1 000. Binär = ⌈log₂(1000)⌉ = 10. Faktor 100 schneller.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum steht im Algorithmus <code>m := l + ⌊(r-l)/2⌋</code> statt einfach <code>m := ⌊(l+r)/2⌋</code>?',
        options: [
          'Es ist schöner zu schreiben.',
          'Beide Varianten liefern das gleiche Ergebnis – für die Klausur ist es egal.',
          'Nur so funktioniert der Algorithmus überhaupt.',
          'Die Gaußklammer ⌊…⌋ muss links stehen.'
        ],
        correct: 1,
        explanation: 'Mathematisch liefern beide Varianten denselben Mittelindex. In echter Software vermeidet <code>l + ⌊(r-l)/2⌋</code> einen Integer-Überlauf bei sehr großen Grenzen – für die Klausur musst du die Form aber nicht auseinanderhalten, solange du richtig rechnest.'
      }
    ]
  }

];
