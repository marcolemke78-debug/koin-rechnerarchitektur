const LessonsA4 = [

  // ===== LEKTION 37: Algorithmus-Charakteristika =====
  {
    id: 37,
    title: 'Algorithmus-Charakteristika',
    explanation: {
      html:
        '<h2>Was macht einen Algorithmus aus?</h2>'
        + '<p>Ein Algorithmus ist eine <strong>Anleitung</strong> zur Lösung eines Problems. Aber nicht jede Anleitung ist ein Algorithmus – es gibt <strong>formale Regeln</strong>, die erfüllt sein müssen. Diese Regeln kommen in der Klausur vor.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Kochrezept:</strong> Ein Kochrezept ist fast ein Algorithmus. Aber "Gewürze nach Geschmack" ist zu unscharf – das passt nicht. Ein echter Algorithmus muss jeden Schritt so eindeutig beschreiben, dass ein Computer ihn ohne Nachfrage ausführen kann.'
        + '</div>'
        + '<h3>Die wichtigsten Eigenschaften</h3>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;width:100%;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Eigenschaft</th><th style="padding:6px;border:1px solid #ccc;">Bedeutung</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Ein-/Ausgabespezifikation</b></td><td style="padding:6px;border:1px solid #ccc;">Klar: Was kommt rein, was kommt raus?</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Parametrisierbarkeit</b></td><td style="padding:6px;border:1px solid #ccc;">Für verschiedene Eingaben nutzbar (nicht nur einen Fall).</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Finitheit</b></td><td style="padding:6px;border:1px solid #ccc;">Endlich viele Anweisungen.</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Diskretheit</b></td><td style="padding:6px;border:1px solid #ccc;">Einzelne, klar abgegrenzte Schritte.</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Determinismus</b></td><td style="padding:6px;border:1px solid #ccc;">Gleicher <em>Weg</em> bei gleicher Eingabe.</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Determiniertheit</b></td><td style="padding:6px;border:1px solid #ccc;">Gleiches <em>Ergebnis</em> bei gleicher Eingabe.</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Korrektheit</b></td><td style="padding:6px;border:1px solid #ccc;">Richtiges Ergebnis + hält an.</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Komplexität</b></td><td style="padding:6px;border:1px solid #ccc;">Wie viele Schritte? Wie viel Speicher?</td></tr>'
        + '</table>'
        + '<div class="warning-box">'
        + '<strong>Verwechslungsgefahr – Determinismus vs. Determiniertheit:</strong>'
        + '<ul>'
        + '<li><strong>Determinismus</strong> = gleicher <em>Weg</em> (Zwischenschritte)</li>'
        + '<li><strong>Determiniertheit</strong> = gleiches <em>Ergebnis</em></li>'
        + '</ul>'
        + '</div>'
        + '<h3>Korrektheit genau</h3>'
        + '<p><strong>Partielle Korrektheit:</strong> "Wenn der Algorithmus anhält, ist das Ergebnis richtig."</p>'
        + '<p><strong>Terminierung:</strong> "Der Algorithmus hält an." (keine Endlosschleife)</p>'
        + '<p><strong>Totale Korrektheit = beides.</strong></p>'
    },
    example: {
      title: 'Ist das ein Algorithmus?',
      steps: [
        {
          label: 'Beispiel 1 – Kochrezept "Pfannkuchen"',
          html:
            '<p>"200g Mehl, 2 Eier, verrühren, 5 Min backen bei 180°C"</p>'
            + '<ul>'
            + '<li>Finitheit ✓ (4 Anweisungen)</li>'
            + '<li>Diskretheit ✓ (einzelne Schritte)</li>'
            + '<li>Determiniertheit <em>eher nicht</em> – Ergebnis hängt von Eigrößen, Ofen etc. ab</li>'
            + '</ul>'
        },
        {
          label: 'Beispiel 2 – "Würfle 1–6"',
          html:
            '<ul>'
            + '<li>Determinismus ✗ – Würfel ist zufällig!</li>'
            + '</ul>'
            + '<p>Kein klassischer Algorithmus, sondern ein <em>randomisierter</em>.</p>'
        },
        {
          label: 'Beispiel 3 – Sieb des Eratosthenes',
          html:
            '<p>Klassischer Algorithmus (siehe Lektion 40). Erfüllt alles perfekt: endlich, diskret, deterministisch, determiniert, korrekt, terminiert.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Gleiches Ergebnis bei gleicher Eingabe – welche Eigenschaft?',
        options: ['Determinismus', 'Determiniertheit', 'Finitheit', 'Diskretheit'],
        correct: 1,
        explanation: 'Determiniertheit = gleiches AUSGABE. Determinismus wäre gleicher WEG.'
      },
      {
        type: 'multiple-choice',
        question: 'Unterschied partielle vs. totale Korrektheit?',
        options: [
          'Teilweise vs. ganz richtig.',
          'Kleine vs. große Eingaben.',
          'Partiell = richtig FALLS er anhält; total = zusätzlich terminiert.',
          'Für Schleifen vs. allgemein.'
        ],
        correct: 2,
        explanation: 'Partielle Korrektheit allein reicht nicht – er muss auch anhalten.'
      },
      {
        type: 'multiple-choice',
        question: 'Was bedeutet Finitheit?',
        options: [
          'Nur endlich viele Zahlen.',
          'Endlich viele Anweisungen in der Beschreibung.',
          'Läuft endlich lange.',
          'Endlich viel Speicher.'
        ],
        correct: 1,
        explanation: 'Finitheit bezieht sich auf die Beschreibung. "Endlich lange laufen" ist Terminierung.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Eigenschaft sorgt dafür, dass der Algorithmus mit verschiedenen Eingaben funktioniert?',
        options: ['Finitheit', 'Parametrisierbarkeit', 'Determiniertheit', 'Komplexität'],
        correct: 1,
        explanation: 'Parametrisierbarkeit = verschiedene Instanzen eines Problems.'
      }
    ]
  },

  // ===== LEKTION 38: Darstellungen =====
  {
    id: 38,
    title: 'Pseudocode, Struktogramm, Flussdiagramm',
    explanation: {
      html:
        '<h2>Drei Arten, Algorithmen aufzuschreiben</h2>'
        + '<p>Derselbe Algorithmus kann auf <strong>drei Arten</strong> dargestellt werden – welche du wählst, hängt von der Situation ab.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Wegbeschreibung:</strong> Dieselbe Route kannst du als Text beschreiben ("200m geradeaus, dann links"), als Karte zeichnen oder als Navi-Ansage ausgeben. Alle drei meinen den gleichen Weg.'
        + '</div>'
        + '<h3>1. Pseudocode – textnah</h3>'
        + '<p>Wie Programmcode, aber nicht ausführbar. Mischung aus Programmiersprache und deutschem Text:</p>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + 'min := M[1]\n'
        + 'for i := 2 to n do\n'
        + '  if M[i] < min then\n'
        + '    min := M[i]\n'
        + 'print min</pre>'
        + '<p>→ Für komplexe Algorithmen.</p>'
        + '<h3>2. Struktogramm – grafisch, strukturiert</h3>'
        + '<p>Geschachtelte Rechtecke. Schleifen, Verzweigungen sind eingerahmt. Auch <em>Nassi-Shneiderman-Diagramm</em> genannt.</p>'
        + '<p>→ Häufig in Schule und Didaktik.</p>'
        + '<h3>3. Flussdiagramm – klassisch</h3>'
        + '<p>Symbole nach Norm (DIN 66001): Oval für Start/Stop, Raute für Verzweigung, Rechteck für Operation, Parallelogramm für Ein-/Ausgabe. Mit Pfeilen verbunden.</p>'
        + '<p>→ Gut für einfache Abläufe, bei komplexen unübersichtlich.</p>'
    },
    example: {
      title: 'Beispiel: Kleinstes Element finden – alle drei Arten',
      steps: [
        {
          label: 'Pseudocode',
          html:
            '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + 'Input: Array M der Länge n\n'
            + 'Output: min (kleinstes Element)\n'
            + '\n'
            + 'min := M[1]\n'
            + 'for i := 2 to n do\n'
            + '  if M[i] < min then\n'
            + '    min := M[i]\n'
            + 'print min</pre>'
        },
        {
          label: 'Struktogramm',
          html:
            '<p>Schleife blau, Verzweigung gelb. Alles ineinander verschachtelt:</p>',
          visuals: [
            {
              type: 'struktogramm',
              blocks: [
                { kind: 'stmt', text: 'min := M[1]' },
                { kind: 'loop', header: 'solange i := 2 bis n', body: [
                  { kind: 'if', cond: 'M[i] < min ?',
                    yes: [{ kind: 'stmt', text: 'min := M[i]' }],
                    no:  [{ kind: 'stmt', text: '(nichts tun)' }] }
                ]},
                { kind: 'stmt', text: 'gib min aus' }
              ]
            }
          ]
        },
        {
          label: 'Flussdiagramm',
          html:
            '<p>Symbole nach DIN 66001. Rauten = Entscheidungen, Rechtecke = Operationen:</p>',
          visuals: [
            {
              type: 'flussdiagramm',
              nodes: [
                { kind: 'start', text: 'Start' },
                { kind: 'op',    text: 'min := M[1]; i := 2' },
                { kind: 'decision', text: 'i ≤ n ?' },
                { kind: 'decision', text: 'M[i] < min ?' },
                { kind: 'op',    text: 'min := M[i]' },
                { kind: 'op',    text: 'i := i + 1' },
                { kind: 'io',    text: 'Gib min aus' },
                { kind: 'start', text: 'Stop' }
              ]
            }
          ]
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Darstellung besteht aus geschachtelten Rechtecken und Trapezen?',
        options: ['Pseudocode', 'Flussdiagramm', 'Struktogramm', 'UML'],
        correct: 2,
        explanation: 'Struktogramm = Nassi-Shneiderman, alles geschachtelt.'
      },
      {
        type: 'multiple-choice',
        question: 'Welches Symbol ist eine Verzweigung im Flussdiagramm?',
        options: ['Oval', 'Raute', 'Rechteck', 'Parallelogramm'],
        correct: 1,
        explanation: 'Raute = Verzweigung (Ja/Nein).'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Darstellung ist am nächsten an Programmiersprache?',
        options: ['Flussdiagramm', 'Pseudocode', 'Struktogramm', 'Java'],
        correct: 1,
        explanation: 'Pseudocode nutzt Programmier-Syntax, ist aber nicht ausführbar.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum werden Flussdiagramme bei komplexen Algorithmen problematisch?',
        options: [
          'Zu viel Papier.',
          'Viele Pfeile kreuzen sich → unübersichtlich.',
          'Keine Verzweigungen möglich.',
          'Nicht wissenschaftlich.'
        ],
        correct: 1,
        explanation: 'Bei vielen Schleifen/Verzweigungen wird das Diagramm ein Chaos. Struktogramm ist da übersichtlicher.'
      }
    ]
  },

  // ===== LEKTION 39: Arrays & Listen =====
  {
    id: 39,
    title: 'Arrays & Listen (einfach/doppelt/Ring)',
    explanation: {
      html:
        '<h2>Arrays und Listen – wann welche?</h2>'
        + '<p>Für verschiedene Aufgaben braucht man verschiedene Datenstrukturen. Die Wahl ist wichtig – sie entscheidet, wie schnell dein Programm läuft.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Parkhaus vs. Schnitzeljagd:</strong> Ein Array ist wie ein Parkhaus mit nummerierten Plätzen – du kommst zu Platz 42 sofort. Eine Liste ist wie eine Schnitzeljagd – du findest jeden Hinweis nur, indem du dem vorherigen folgst. Parkhaus = schneller Zugriff, aber starr. Schnitzeljagd = flexibel, aber langsamer.'
        + '</div>'
        + '<h3>Array (Feld)</h3>'
        + '<ul>'
        + '<li>Feste Länge, nummerierte Plätze (Index)</li>'
        + '<li>Zugriff über Index: <code>a[5]</code> sofort</li>'
        + '<li>Einfügen in der Mitte: langsam (alle weiteren verschieben)</li>'
        + '</ul>'
        + '<h3>Einfach verkettete Liste</h3>'
        + '<ul>'
        + '<li>Jedes Element hat <strong>Daten</strong> + <strong>Zeiger aufs nächste</strong></li>'
        + '<li>Letztes Element zeigt auf null</li>'
        + '<li>Dynamisch: wächst und schrumpft</li>'
        + '<li>Nur vorwärts durchlaufen</li>'
        + '</ul>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + 'head → [o1|•] → [o2|•] → [o3|null]</pre>'
        + '<h3>Doppelt verkettete Liste</h3>'
        + '<p>Jedes Element hat zusätzlich einen <strong>Zeiger aufs vorherige</strong>. In beide Richtungen durchlaufbar.</p>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + 'null ← [•|o1|•] ↔ [•|o2|•] ↔ [•|o3|null]</pre>'
        + '<h3>Ringliste</h3>'
        + '<p>Das letzte Element zeigt auf das erste zurück. Kein Ende, zyklisch.</p>'
        + '<h3>Wann welche?</h3>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;width:100%;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Aufgabe</th><th style="padding:6px;border:1px solid #ccc;">Beste Wahl</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Schneller Zugriff per Index</td><td style="padding:6px;border:1px solid #ccc;"><b>Array</b></td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Viel Einfügen/Löschen zwischendrin</td><td style="padding:6px;border:1px solid #ccc;"><b>Liste</b></td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Vorwärts + Rückwärts durchlaufen</td><td style="padding:6px;border:1px solid #ccc;"><b>Doppelt verkettet</b></td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Zyklisch rotieren</td><td style="padding:6px;border:1px solid #ccc;"><b>Ringliste</b></td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Schnell suchen</td><td style="padding:6px;border:1px solid #ccc;"><b>Hashtabelle / BST</b></td></tr>'
        + '</table>'
    },
    example: {
      title: 'Beispiel: Passende Datenstruktur wählen',
      steps: [
        {
          label: 'Mittleres Element finden',
          html:
            '<p><strong>Array</strong> – Index-Zugriff in einem Schritt.</p>'
        },
        {
          label: 'Einfügen an beliebiger Stelle',
          html:
            '<p><strong>Liste</strong> – nur zwei Zeiger ändern. Bei Array müsstest du alle folgenden verschieben.</p>'
        },
        {
          label: 'Adressbuch (suchen nach Name)',
          html:
            '<p><strong>Hashtabelle</strong> – direkter Zugriff. Oder BST.</p>'
        },
        {
          label: 'Browser-Verlauf (chronologisch, vor/zurück)',
          html:
            '<p><strong>Doppelt verkettete Liste</strong> – in beide Richtungen.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Schneller Zugriff auf mittleres Element?',
        options: ['Array', 'Einfach verkettete Liste', 'Doppelt verkettete Liste', 'Ringliste'],
        correct: 0,
        explanation: 'Array: direkter Index-Zugriff.'
      },
      {
        type: 'multiple-choice',
        question: 'Wo zeigt der next-Pointer des letzten Elements aufs erste?',
        options: ['Einfach', 'Doppelt', 'Ringliste', 'Array'],
        correct: 2,
        explanation: 'Ringliste = zyklisch.'
      },
      {
        type: 'multiple-choice',
        question: 'Mitglieder-Datenbank mit ID – schnelle Suche. Beste Wahl?',
        options: ['Array', 'Einfach verkettet', 'Hashtabelle', 'Ringliste'],
        correct: 2,
        explanation: 'Hashtabelle: direkte Zuordnung ID → Datensatz.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Eigenschaft gilt NUR bei doppelt verketteten Listen?',
        options: [
          'Durchlauf in beide Richtungen.',
          'Kann Elemente einfügen.',
          'Hat Head-Pointer.',
          'Beliebig lang.'
        ],
        correct: 0,
        explanation: 'Nur doppelt verkettet kennt den prev-Pointer.'
      },
      {
        type: 'multiple-choice',
        question: 'Browser-Verlauf – beste Struktur?',
        options: ['Array', 'Hashtabelle', 'Doppelt verkettete Liste', 'BST'],
        correct: 2,
        explanation: 'Chronologisch + vor/zurück → doppelt verkettet.'
      }
    ]
  },

  // ===== LEKTION 40: Sieb des Eratosthenes =====
  {
    id: 40,
    title: 'Sieb des Eratosthenes',
    explanation: {
      html:
        '<h2>Sieb des Eratosthenes</h2>'
        + '<p>Ein 2000 Jahre alter Algorithmus, der alle Primzahlen bis zu einer Zahl n findet. Klassische Klausuraufgabe: Struktogramm ausführen und Zwischenstände notieren.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Sieb mit Steinchen:</strong> Durch ein Sieb rieseln Sand und Steinchen. Was zu groß ist, bleibt oben liegen. Eratosthenes (ca. 200 v. Chr.) hatte dieselbe Idee für Primzahlen: Statt sie direkt zu suchen, streicht er alle Nicht-Primzahlen weg. Was übrig bleibt, muss prim sein.'
        + '</div>'
        + '<div class="reading-guide">'
        + '<strong>Die Idee:</strong>'
        + '<ol style="margin:6px 0 0 20px;">'
        + '<li>Alle Zahlen von 1 bis n aufschreiben</li>'
        + '<li>1 streichen (ist keine Primzahl)</li>'
        + '<li>Erste nicht gestrichene Zahl ist prim → alle ihre Vielfachen streichen</li>'
        + '<li>Nächste nicht gestrichene → deren Vielfache streichen</li>'
        + '<li>Weiter bis Wurzel von n</li>'
        + '<li>Fertig! Alle übrigen Zahlen sind Primzahlen.</li>'
        + '</ol>'
        + '</div>'
        + '<div class="tip-box">'
        + '<strong>Warum nur bis √n?</strong> Jede zusammengesetzte Zahl n = a · b hat einen Teiler ≤ √n. Wenn man alles bis √n gestrichen hat, sind alle Nicht-Primzahlen erfasst.'
        + '</div>'
        + '<h3>Das Struktogramm</h3>'
        + '<p>In der Klausur bekommst du dieses Struktogramm – deine Aufgabe ist, es auszuführen:</p>',
      visuals: [
        {
          type: 'struktogramm',
          blocks: [
            { kind: 'stmt', text: 'SIEB[1] := X   (1 streichen)' },
            { kind: 'stmt', text: 'i := 2; MAX := √n' },
            { kind: 'loop', header: 'solange i ≤ MAX', body: [
              { kind: 'if', cond: 'SIEB[i] ≠ X ?',
                yes: [
                  { kind: 'stmt', text: 'j := i + i' },
                  { kind: 'loop', header: 'solange j ≤ n', body: [
                    { kind: 'stmt', text: 'SIEB[j] := X' },
                    { kind: 'stmt', text: 'j := j + i' }
                  ]}
                ],
                no: [{ kind: 'stmt', text: '(nichts)' }]
              },
              { kind: 'stmt', text: 'print i, SIEB' },
              { kind: 'stmt', text: 'i := i + 1' }
            ]},
            { kind: 'stmt', text: 'P := []' },
            { kind: 'loop', header: 'für i := 1 bis n', body: [
              { kind: 'if', cond: 'SIEB[i] ≠ X ?',
                yes: [{ kind: 'stmt', text: 'füge SIEB[i] an P' }],
                no:  [{ kind: 'stmt', text: '(nichts)' }]
              }
            ]},
            { kind: 'stmt', text: 'return P' }
          ],
          label: 'Sieb-Struktogramm'
        }
      ]
    },
    example: {
      title: 'Beispiel: Sieb für n=20',
      steps: [
        {
          label: 'Start: Alle Zahlen 1..20',
          html:
            '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + '1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20</pre>'
            + '<p>SIEB[1] := X → 1 ist weg.</p>'
        },
        {
          label: 'i=2: Vielfache von 2 streichen',
          html:
            '<p>4, 6, 8, 10, 12, 14, 16, 18, 20 → alle werden X</p>'
            + '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + 'X  2  3  X  5  X  7  X  9  X  11  X  13  X  15  X  17  X  19  X</pre>'
        },
        {
          label: 'i=3: Vielfache von 3 streichen',
          html:
            '<p>9, 15 werden neu gestrichen (6, 12, 18 waren schon X)</p>'
            + '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + 'X  2  3  X  5  X  7  X  X  X  11  X  13  X  X  X  17  X  19  X</pre>'
        },
        {
          label: 'i=4: Schon X, überspringen → Ende',
          html:
            '<p>SIEB[4] ist X → nichts tun. i wird 5, aber √20 ≈ 4,47, also Schleife beendet.</p>'
        },
        {
          label: 'Ergebnis sammeln',
          html:
            '<p>Alles, was nicht X ist, ist prim:</p>'
            + '<p><strong>P = [2, 3, 5, 7, 11, 13, 17, 19]</strong></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Nach welchem Prinzip arbeitet das Sieb?',
        options: [
          'Jede Zahl einzeln auf Primzahl prüfen.',
          'Alle Vielfachen streichen – übrig bleiben Primzahlen.',
          'Zufällig testen.',
          'Division durch alle kleineren Zahlen.'
        ],
        correct: 1,
        explanation: 'Streichen statt Prüfen – einfach und effizient.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie weit muss i laufen?',
        options: ['n', 'n/2', '√n', 'log n'],
        correct: 2,
        explanation: 'Bis √n reicht. Alles größere hat einen kleineren Teiler, ist also schon gestrichen.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum SIEB[1] := X am Anfang?',
        options: [
          '1 ist die erste Primzahl.',
          '1 ist keine Primzahl → muss weg.',
          '1 ist gerade und ungerade.',
          'Aus Versehen.'
        ],
        correct: 1,
        explanation: '1 ist per Definition keine Primzahl.'
      },
      {
        type: 'multiple-choice',
        question: 'Ergebnisliste für n=20?',
        options: [
          '[2, 3, 5, 7, 9, 11, 13, 17, 19]',
          '[2, 3, 5, 7, 11, 13, 17, 19]',
          '[1, 2, 3, 5, 7, 11, 13, 17, 19]',
          '[2, 3, 5, 7, 11, 13, 15, 17, 19]'
        ],
        correct: 1,
        explanation: 'Primzahlen ≤ 20: 2,3,5,7,11,13,17,19. Kein 1, keine 9, keine 15.'
      }
    ]
  },

  // ===== LEKTION 41: ISBN Prüfziffern =====
  {
    id: 41,
    title: 'Prüfziffern – ISBN-13',
    explanation: {
      html:
        '<h2>ISBN-Prüfziffern</h2>'
        + '<p>Wenn du eine lange Nummer abschreibst, kann sich ein Fehler einschleichen. Damit der Computer das bemerkt, gibt es am Ende eine <strong>Prüfziffer</strong>, die aus den anderen Ziffern berechnet wird.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Querprobe in Mathe:</strong> In der Grundschule hast du gelernt: Nach einer schriftlichen Addition machst du die Querprobe. Wenn sie nicht stimmt, hast du einen Fehler gemacht. Eine Prüfziffer funktioniert genau so – sie ist eine eingebaute Querprobe für Zahlen.'
        + '</div>'
        + '<h3>Das ISBN-13 Verfahren</h3>'
        + '<p>Eine ISBN-13 hat 13 Ziffern. Die letzte ist die Prüfziffer. So wird sie berechnet:</p>'
        + '<div class="reading-guide">'
        + '<ol style="margin:6px 0 0 20px;">'
        + '<li>Die 13 Ziffern abwechselnd mit <strong>1 und 3</strong> multiplizieren (z₁·1, z₂·3, z₃·1, z₄·3, …)</li>'
        + '<li>Alle Produkte aufaddieren</li>'
        + '<li>Die Summe muss <strong>durch 10 teilbar</strong> sein – sonst ist die ISBN falsch!</li>'
        + '</ol>'
        + '</div>'
        + '<h3>Beispiel: 978-3-8274-1926-2</h3>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + 'Ziffer:   9  7  8  3  8  2  7  4  1  9  2  6  2\n'
        + 'Gewicht:  1  3  1  3  1  3  1  3  1  3  1  3  1\n'
        + 'Produkt:  9 21  8  9  8  6  7 12  1 27  2 18  2\n'
        + 'Summe = 130 → 130 mod 10 = 0 ✓ ISBN gültig!</pre>'
        + '<h3>Fehlende Ziffer finden</h3>'
        + '<p>Ist in einer ISBN eine Ziffer unleserlich, kann man sie rekonstruieren:</p>'
        + '<ul>'
        + '<li>Summe der bekannten Produkte ausrechnen</li>'
        + '<li>Fehlende Ziffer × ihr Gewicht muss die Gesamtsumme auf ein Vielfaches von 10 bringen</li>'
        + '</ul>'
    },
    example: {
      title: 'Beispiel: Fehlende Ziffer finden',
      steps: [
        {
          label: 'Aufgabe',
          html:
            '<p>ISBN: <strong>978-3-8362-84?7-1</strong> – eine Ziffer ist weg. Welche?</p>'
        },
        {
          label: 'Schritt 1 – Bekannte Summe',
          html:
            '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + 'Position: 1  2  3  4  5  6  7  8  9 10 11 12 13\n'
            + 'Ziffer:   9  7  8  3  8  3  6  2  8  4  ?  7  1\n'
            + 'Gewicht:  1  3  1  3  1  3  1  3  1  3  1  3  1\n'
            + '\n'
            + 'Bekannt: 9 + 21 + 8 + 9 + 8 + 9 + 6 + 6 + 8 + 12 + ?·1 + 21 + 1\n'
            + '       = 118 + ?</pre>'
        },
        {
          label: 'Schritt 2 – Bedingung',
          html:
            '<p>(118 + x) muss durch 10 teilbar sein. 118 mod 10 = 8, also brauchen wir x = 2.</p>'
            + '<p><strong>Fehlende Ziffer: 2</strong></p>'
            + '<p>Probe: 118 + 2 = 120 ✓ ISBN: 978-3-8362-8427-1</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Gewichte bei ISBN-13?',
        options: ['1 und 2', '1 und 3', '2 und 4', '3 und 5'],
        correct: 1,
        explanation: 'Abwechselnd 1 und 3.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Bedingung muss die Summe erfüllen?',
        options: [
          'Primzahl.',
          'Durch 10 teilbar.',
          'Durch 13 teilbar.',
          'Gleich 100.'
        ],
        correct: 1,
        explanation: 'Summe mod 10 = 0.'
      },
      {
        type: 'multiple-choice',
        question: 'Wozu Prüfziffern?',
        options: [
          'Schönere Zahlen.',
          'Tipp-Fehler erkennen.',
          'Teilbar durch 10 machen.',
          'Vorschrift.'
        ],
        correct: 1,
        explanation: 'Tipp-/Übertragungsfehler erkennen.'
      },
      {
        type: 'multiple-choice',
        question: 'Fehlende Ziffer hat Gewicht 3, bekannte Summe mod 10 = 4. Welche Ziffer?',
        options: ['2', '6', '3', '8'],
        correct: 0,
        explanation: '(4 + x·3) mod 10 = 0 → x·3 ≡ 6 → x = 2.'
      }
    ]
  }

];
