// Gemeinsame Beispielbäume für A3 (zur Wiederverwendung)
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
        + '<p>Ein binärer Suchbaum (BST = Binary Search Tree) ist eine <strong>Datenstruktur</strong>, die Zahlen so speichert, dass man sehr schnell suchen kann. Der Name kommt daher, dass jeder Knoten maximal <em>zwei</em> Kinder hat.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Stell dir die Suche in einem dicken Wörterbuch vor. Du schlägst in der Mitte auf – dein Wort steht links oder rechts. Du machst wieder die Mitte der richtigen Hälfte auf – wieder links oder rechts. Nach ~20 Schritten bist du am Ziel, auch bei 1 Million Einträgen. Genau das macht ein binärer Suchbaum.'
        + '</div>'
        + '<h3>Fachbegriffe am Beispielbaum</h3>'
        + '<p>Der Baum unten ist unser Arbeits-Beispielbaum. Jeder Knoten ist eine Zahl. Die Verbindungslinien zeigen die Eltern-Kind-Beziehung.</p>',
      visuals: [
        { type: 'bst-viz', tree: A3_BEISPIELBAUM, label: 'Beispielbaum mit 9 Knoten' }
      ]
    },
    example: {
      title: 'Fachbegriffe + Suche nach 13',
      steps: [
        {
          label: 'Schritt 1 – Fachbegriffe zuordnen',
          html:
            '<ul>'
            + '<li><strong>Wurzel</strong>: 10 (ganz oben, keine Eltern)</li>'
            + '<li><strong>Blätter</strong>: 1, 3, 8, 13, 17 (haben keine Kinder → unten gelb markiert)</li>'
            + '<li><strong>Innere Knoten</strong>: 5, 2, 14, 12</li>'
            + '<li><strong>Elternknoten von 13</strong>: der Knoten 12</li>'
            + '<li><strong>Linker Teilbaum der Wurzel</strong>: alles unter 5</li>'
            + '</ul>',
          visuals: [
            { type: 'bst-viz', tree: A3_BEISPIELBAUM, highlight: [1,3,8,13,17], label: 'Blätter gelb markiert' }
          ]
        },
        {
          label: 'Schritt 2 – Suche nach 13',
          html:
            '<p>Der rote Pfad zeigt den Suchweg für die Zahl <strong>13</strong>:</p>'
            + '<ol>'
            + '<li>Start bei Wurzel 10. 13 &gt; 10 → rechts</li>'
            + '<li>Bei 14. 13 &lt; 14 → links</li>'
            + '<li>Bei 12. 13 &gt; 12 → rechts</li>'
            + '<li>Bei 13. Treffer!</li>'
            + '</ol>'
            + '<p>Nur 4 Schritte bei 9 Knoten – das ist die Stärke des BST.</p>',
          visuals: [
            { type: 'bst-viz', tree: A3_BEISPIELBAUM, highlightPath: [10,14,12,13], label: 'Suchpfad von 13 (rot)' }
          ]
        },
        {
          label: 'Schritt 3 – BST-Eigenschaft prüfen',
          html:
            '<div class="info-card" style="padding:12px;background:#eff6ff;border-left:3px solid #2563EB;">'
            + '<strong>Für jeden Knoten K gilt:</strong>'
            + '<ul style="margin:8px 0 0 20px;">'
            + '<li>Alle Schlüssel im <em>linken Teilbaum</em> sind <strong>kleiner</strong> als K</li>'
            + '<li>Alle Schlüssel im <em>rechten Teilbaum</em> sind <strong>größer</strong> als K</li>'
            + '<li>Keine doppelten Schlüssel (im Kontaktstudium strikt!)</li>'
            + '</ul>'
            + '</div>'
            + '<p>Kurzer Check am Baum:</p>'
            + '<ul>'
            + '<li>Wurzel 10: links (5,2,1,3,8) alle &lt; 10 ✓ ; rechts (14,12,13,17) alle &gt; 10 ✓</li>'
            + '<li>Knoten 5: links (2,1,3) alle &lt; 5 ✓ ; rechts (8) &gt; 5 ✓</li>'
            + '<li>Knoten 14: links (12,13) alle &lt; 14 ✓ ; rechts (17) &gt; 14 ✓</li>'
            + '</ul>'
            + '<p>Alle Knoten erfüllen die Regel → gültiger BST.</p>'
            + '<div class="warning-box">'
            + '<strong>Klausurfalle:</strong> Die Regel gilt nicht nur für direkte Kinder, sondern für <em>alle</em> Knoten im jeweiligen Teilbaum.'
            + '</div>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie nennt man einen Knoten ohne Kinder in einem Binärbaum?',
        options: ['Wurzel', 'Innerer Knoten', 'Blatt(knoten)', 'Nullzeiger'],
        correct: 2,
        explanation: 'Ein Blattknoten hat keine Kinder. Intern hat er statt Kind-Verweisen zwei Nullzeiger.'
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
        explanation: 'Bei balanciertem Baum halbiert jeder Schritt den Suchraum → logarithmische Laufzeit. Bei entartetem Baum wäre es n.'
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
        + '<strong>Analogie aus dem Alltag:</strong> Stell dir vor, du ordnest Bücher in ein Regal nach Titel. Für ein neues Buch suchst du den richtigen Platz: immer vergleichen (kleiner → links weiter, größer → rechts weiter). Irgendwann findest du eine Lücke – dort stellst du es rein. So macht es der BST auch.'
        + '</div>'
        + '<h3>Das Verfahren</h3>'
        + '<ol>'
        + '<li>Wenn Baum leer: Der neue Knoten wird <strong>Wurzel</strong></li>'
        + '<li>Sonst: Mit der Wurzel beginnen</li>'
        + '<li>Neuer Wert &lt; aktueller Knoten → links weitergehen</li>'
        + '<li>Neuer Wert &gt; aktueller Knoten → rechts weitergehen</li>'
        + '<li>Nächstes Kind "null" → Neuen Knoten <em>dort</em> als Blatt einfügen</li>'
        + '</ol>'
        + '<p>Unten siehst du einen Baum <em>vor</em> und <em>nach</em> dem insert(11). Der neue Knoten ist grün markiert.</p>',
      visuals: [
        {
          type: 'bst-viz',
          tree: A3_BEISPIELBAUM,
          label: 'Vorher: Baum ohne 11'
        },
        {
          type: 'bst-viz',
          tree: {
            value: 10,
            left: {
              value: 5,
              left: { value: 2, left: { value: 1 }, right: { value: 3 } },
              right: { value: 8 }
            },
            right: {
              value: 14,
              left: { value: 12, left: { value: 11 }, right: { value: 13 } },
              right: { value: 17 }
            }
          },
          newNode: 11,
          highlightPath: [10, 14, 12],
          label: 'Nachher: insert(11) – grün = neuer Knoten, rot = Suchpfad'
        }
      ]
    },
    example: {
      title: 'Beispiel: insert(24,20,18,12,28,25,120,22,19)',
      steps: [
        {
          label: 'Schritt 1 – insert(24): Baum war leer',
          html:
            '<p>Leerer Baum → 24 wird Wurzel.</p>',
          visuals: [
            { type: 'bst-viz', tree: { value: 24 }, newNode: 24 }
          ]
        },
        {
          label: 'Schritt 2 – insert(20, 18, 12)',
          html:
            '<p>20 &lt; 24 → links von 24. 18 &lt; 20 → links von 20. 12 &lt; 18 → links von 18.</p>',
          visuals: [
            { type: 'bst-viz', tree: {
              value: 24,
              left: {
                value: 20,
                left: {
                  value: 18,
                  left: { value: 12 }
                }
              }
            }, newNode: 12 }
          ]
        },
        {
          label: 'Schritt 3 – insert(28, 25, 120)',
          html:
            '<p>28 &gt; 24 → rechts von 24. 25 &lt; 28 → links von 28. 120 &gt; 28 → rechts von 28.</p>',
          visuals: [
            { type: 'bst-viz', tree: {
              value: 24,
              left: { value: 20, left: { value: 18, left: { value: 12 } } },
              right: { value: 28, left: { value: 25 }, right: { value: 120 } }
            }, newNode: 120 }
          ]
        },
        {
          label: 'Schritt 4 – insert(22, 19): Endbaum',
          html:
            '<p>22: &lt;24 links → &gt;20 rechts → einfügen. 19: &lt;24 links → &lt;20 links → &gt;18 rechts → ABER rechts von 18 gibt es jetzt 22 → weiter; 19 &lt; 22 → links von 22.</p>'
            + '<div class="warning-box"><strong>Achtung:</strong> Nach Einfügen von 22 ist 22 das rechte Kind von 20 (nicht von 18!). Auf dem Pfad zu 19 kommt man an 22 vorbei.</div>'
            + '<p><em>Moment</em> – das ist nicht ganz richtig. Wir schauen genau hin:</p>'
            + '<ul>'
            + '<li>insert(22): 22&lt;24 L, 22&gt;20 R → leer → einfügen (22 wird rechtes Kind von 20)</li>'
            + '<li>insert(19): 19&lt;24 L, 19&lt;20 L, 19&gt;18 R → leer → einfügen (19 wird rechtes Kind von 18)</li>'
            + '</ul>'
            + '<p>Der endgültige Baum:</p>',
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
        explanation: 'Im Kontaktstudium wird explizit festgelegt, dass keine doppelten Schlüssel erlaubt sind.'
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
        + '<p>Löschen ist die <strong>kniffligste</strong> BST-Operation. Je nachdem, wo der zu löschende Knoten steht, gibt es drei Fälle.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Stell dir eine Firmen-Hierarchie vor. Einen Chef ohne Mitarbeiter kannst du einfach entfernen. Einen Chef mit einer Stellvertretung kannst du durch die Stellvertretung ersetzen. Aber einen Chef mit zwei Abteilungsleitern? Da musst du einen als Nachfolger ernennen – und dessen Position wieder neu besetzen.'
        + '</div>'
        + '<h3>Fall 1: Blatt löschen (keine Kinder)</h3>'
        + '<p>Einfach den Verweis aus dem Elternknoten auf <code>null</code> setzen. Unten: remove(3).</p>',
      visuals: [
        {
          type: 'bst-viz',
          tree: A3_BEISPIELBAUM,
          highlight: [3],
          label: 'Vorher: der Knoten 3 (gelb) ist ein Blatt'
        },
        {
          type: 'bst-viz',
          tree: {
            value: 10,
            left: {
              value: 5,
              left: { value: 2, left: { value: 1 } },
              right: { value: 8 }
            },
            right: {
              value: 14,
              left: { value: 12, right: { value: 13 } },
              right: { value: 17 }
            }
          },
          label: 'Nachher: 3 ist verschwunden'
        }
      ]
    },
    example: {
      title: 'Fall 2 und Fall 3 durchspielen',
      steps: [
        {
          label: 'Fall 2: Knoten mit einem Kind – remove(12)',
          html:
            '<p>12 hat nur ein Kind (13). Der Elternknoten 14 überspringt 12 und zeigt direkt auf 13.</p>',
          visuals: [
            { type: 'bst-viz', tree: A3_BEISPIELBAUM, highlight: [12], label: 'Vorher: 12 soll gelöscht werden' },
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
          label: 'Fall 3: Knoten mit zwei Kindern – remove(10)',
          html:
            '<p>10 ist die Wurzel und hat zwei Kinder (5 und 14). Zwei gültige Ersatz-Strategien:</p>'
            + '<ul>'
            + '<li><strong>Linkester im rechten Teilbaum</strong> = 12 (ganz links im rechten Teilbaum)</li>'
            + '<li><strong>Rechtester im linken Teilbaum</strong> = 8 (ganz rechts im linken Teilbaum)</li>'
            + '</ul>'
            + '<p>Unten beide Möglichkeiten:</p>',
          visuals: [
            {
              type: 'bst-viz',
              tree: {
                value: 12,
                left: { value: 5, left: { value: 2, left:{value:1}, right:{value:3} }, right: { value: 8 } },
                right: { value: 14, left: { value: 13 }, right: { value: 17 } }
              },
              highlight: [12],
              label: 'Variante A: linkester im rechten Teilbaum (12) ersetzt Wurzel'
            },
            {
              type: 'bst-viz',
              tree: {
                value: 8,
                left: { value: 5, left: { value: 2, left:{value:1}, right:{value:3} } },
                right: { value: 14, left: { value: 12, right:{value:13} }, right: { value: 17 } }
              },
              highlight: [8],
              label: 'Variante B: rechtester im linken Teilbaum (8) ersetzt Wurzel'
            }
          ]
        },
        {
          label: 'Zusammenfassung',
          html:
            '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;">'
            + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Fall</th><th style="padding:6px;border:1px solid #ccc;">Vorgehen</th></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">1 – Blatt</td><td style="padding:6px;border:1px solid #ccc;">Eltern-Verweis auf null</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">2 – 1 Kind</td><td style="padding:6px;border:1px solid #ccc;">Knoten überspringen, Eltern zeigt auf Kind</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">3 – 2 Kinder</td><td style="padding:6px;border:1px solid #ccc;">Ersatz = linkester rechts ODER rechtester links</td></tr>'
            + '</table>'
            + '<div class="tip-box"><strong>Klausur:</strong> Bei remove mit 2 Kindern IMMER beide Möglichkeiten zeichnen, wenn die Aufgabe das verlangt!</div>'
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
        explanation: 'Beide Varianten sind gültig. Diese Ersatzknoten haben immer höchstens 1 Kind – sie lassen sich anschließend per Fall 1 oder 2 bewegen.'
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
        explanation: 'Definition "linkester": Folge so lange nach links, bis kein linkes Kind mehr da ist. Ein linkes Kind hat er also definitionsgemäß nicht.'
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
        explanation: 'Der unbalancierte BST kann bei sortierter Eingabe zu einer Kette entarten. Darum nimmt man in der Praxis balancierte Varianten.'
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
        + '<p>Hashing bildet beliebige Schlüssel (Zahlen, Namen …) auf Array-Indizes ab – Zugriff in <em>einem Schritt</em>, unabhängig von der Anzahl der Einträge.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Denk an die Postfächer an der Uni. Jeder Student bekommt ein Fach, das aus seiner Matrikelnummer berechnet wird (z.B. "letzte drei Ziffern"). Die Post landet direkt im richtigen Fach – ohne dass der Pförtner die Liste aller 10.000 Studenten durchsucht.'
        + '</div>'
        + '<h3>Die Divisions-Rest-Methode</h3>'
        + '<div class="info-card" style="padding:12px;text-align:center;font-size:1.1em;background:#eff6ff;">'
        + '<strong>h(k) = k mod m</strong>'
        + '</div>'
        + '<p>Einfach und effektiv. <strong>m</strong> ist die Größe der Hashtabelle. Die Wahl von m entscheidet über die Verteilung:</p>'
        + '<ul>'
        + '<li>Beste Wahl: <strong>Primzahlen</strong> (2, 3, 5, 7, 11, 13, …)</li>'
        + '<li>Schlechte Wahl: Potenzen der Basis (z.B. 100) – dann bestimmen nur die letzten Ziffern den Hash</li>'
        + '</ul>'
        + '<h3>Das Problem der Kollisionen</h3>'
        + '<p>Da es meist mehr mögliche Schlüssel gibt als Plätze, können zwei Schlüssel denselben Hashwert bekommen. Beispiel:</p>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + 'h(15) = 15 mod 7 = 1\n'
        + 'h(43) = 43 mod 7 = 1   ← Kollision!</pre>'
        + '<p>Unten siehst du eine Hashtabelle mit m=7 und einigen Schlüsseln. An Position 1 gibt es eine Kollision (15 und 43).</p>',
      visuals: [
        {
          type: 'hashtable-viz',
          size: 7,
          entries: [15, 2, 43, 53, 12],
          label: 'Hashtabelle m=7, h(k)=k mod 7'
        }
      ]
    },
    example: {
      title: 'Beispiel: h(k) = k mod 7',
      steps: [
        {
          label: 'Schritt 1 – Hashwerte berechnen',
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
          label: 'Schritt 2 – Tabelle aufbauen (Reihenfolge wichtig!)',
          html:
            '<p>Bei Kollisionen wird <em>hinten angehängt</em>:</p>',
          visuals: [
            {
              type: 'hashtable-viz',
              size: 7,
              entries: [2, 15, 12, 53, 5, 43, 19],
              label: 'Endzustand mit Verkettung'
            }
          ]
        },
        {
          label: 'Warum m=7 besser ist als m=10',
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
        correct: 1,
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
        explanation: 'Bei Potenzen der Basis bestimmen nur die letzten Ziffern den Hash. Primzahlen streuen gleichmäßiger.'
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
        explanation: 'Kollision = zwei Schlüssel k₁ ≠ k₂, aber h(k₁) = h(k₂). Bei endlich vielen Plätzen und beliebig vielen Schlüsseln unvermeidbar.'
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
        + '<p>Wenn zwei Schlüssel auf denselben Hashwert abbilden, brauchen wir eine Strategie. Die einfachste: <strong>Verkettung</strong>.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Denk an die Post-Fächer im Wohnheim. Wenn zwei Studenten dasselbe Fach bekommen (gleicher Nachname-Anfang), wird das Fach zu einem kleinen Papierstapel – du suchst im Stapel nach deinem Namen.'
        + '</div>'
        + '<h3>Das Prinzip</h3>'
        + '<ul>'
        + '<li>Jeder Platz der Hashtabelle speichert eine <strong>verkettete Liste</strong></li>'
        + '<li>Bei Kollision wird neuer Eintrag <em>hinten an die Liste angehängt</em></li>'
        + '<li>Suche: h(k) berechnen → Liste von vorne durchsuchen</li>'
        + '</ul>'
        + '<p>Unten ein Beispiel mit viel Kollision:</p>',
      visuals: [
        {
          type: 'hashtable-viz',
          size: 7,
          entries: [2, 15, 43, 9, 53, 12, 5, 19, 30],
          label: 'Hashtabelle m=7 mit Verkettung (mehrere Kollisionen)'
        }
      ]
    },
    example: {
      title: 'Beispiel: [4, 21, 13, 24, 78, 39, 16] in m=7',
      steps: [
        {
          label: 'Schritt 1 – Hashwerte berechnen',
          html:
            '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + 'h(4)  = 4 mod 7  = 4\n'
            + 'h(21) = 21 mod 7 = 0\n'
            + 'h(13) = 13 mod 7 = 6\n'
            + 'h(24) = 24 mod 7 = 3\n'
            + 'h(78) = 78 mod 7 = 1\n'
            + 'h(39) = 39 mod 7 = 4   ← Kollision mit 4\n'
            + 'h(16) = 16 mod 7 = 2</pre>'
        },
        {
          label: 'Schritt 2 – Endzustand der Tabelle',
          html:
            '<p>Nur eine Kollision (4 und 39). 39 landet hinter 4 in der Liste an Position 4.</p>',
          visuals: [
            {
              type: 'hashtable-viz',
              size: 7,
              entries: [4, 21, 13, 24, 78, 39, 16],
              label: 'Endzustand'
            }
          ]
        },
        {
          label: 'Klausur-Darstellung',
          html:
            '<p>So könntest du das in der Klausur auf Papier aufzeichnen:</p>'
            + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + 'Pos | Liste\n'
            + '----+----------------------\n'
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
        question: 'Wie werden Kollisionen beim Hashing durch Verkettung behandelt?',
        options: [
          'Der kollidierende Schlüssel wird auf den nächsten freien Platz gelegt.',
          'Jeder Platz enthält eine verkettete Liste; Kollisionen werden angehängt.',
          'Die Hashtabelle wird vergrößert und alle Schlüssel neu gehasht.',
          'Der ältere Schlüssel wird überschrieben.'
        ],
        correct: 1,
        explanation: 'Verkettung = Liste pro Platz. Neue kollidierende Einträge kommen ans Listenende.'
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
        question: 'Hashtabelle m=7. Bereits enthalten: Position 3 hat Liste [10 → 17 → 24]. Wohin gehört 38 im nächsten insert?',
        options: ['Position 3 ans Ende anhängen', 'Position 3 vorne einfügen', 'Position 0', 'Position 4'],
        correct: 0,
        explanation: '38 mod 7 = 3. Liste an Position 3 wird [10 → 17 → 24 → 38]. Neue Einträge werden hinten angehängt.'
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Vorteil hat die Verkettung gegenüber der "offenen Adressierung"?',
        options: [
          'Verkettung ist immer schneller.',
          'Die Hashtabelle muss nie vergrößert werden – mehr Einträge als Plätze sind möglich.',
          'Verkettung hat keine Kollisionen.',
          'Verkettung braucht weniger Speicher.'
        ],
        correct: 1,
        explanation: 'Verkettung erlaubt beliebig viele Einträge pro Platz. Offene Adressierung braucht immer mehr Plätze als Einträge.'
      }
    ]
  }

];
