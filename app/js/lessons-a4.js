const LessonsA4 = [

  // ===== LEKTION 37: Algorithmus-Charakteristika =====
  {
    id: 37,
    title: 'Algorithmus-Charakteristika',
    explanation: {
      html:
        '<h2>Was macht einen Algorithmus aus?</h2>'
        + '<p>Ein Algorithmus ist mehr als nur eine "Anleitung" – er muss bestimmte <strong>formale Eigenschaften</strong> erfüllen. Diese Eigenschaften sind Pflichtstoff für die Klausur (oft als Multiple-Choice-Aufgaben zum Abhaken).</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Ein Kochrezept ist fast ein Algorithmus, aber eben nur "fast". Wenn da steht "Gewürze nach Geschmack hinzufügen", ist das zu ungenau (kein Determinismus). Wenn nicht klar ist, was bei "solange rühren, bis der Teig schön glatt ist" genau zu tun ist (nicht endlich definiert), fehlt die Finitheit. Ein echter Algorithmus muss jeden Schritt so eindeutig definieren, dass ein Computer ihn ohne Nachfrage ausführen kann.'
        + '</div>'
        + '<h3>Die 8 Charakteristika</h3>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;width:100%;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Eigenschaft</th><th style="padding:6px;border:1px solid #ccc;">Bedeutung</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Ein-/Ausgabespezifikation</b></td><td style="padding:6px;border:1px solid #ccc;">Klar definiert, WAS rein- und rausgeht.</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Parametrisierbarkeit</b></td><td style="padding:6px;border:1px solid #ccc;">Für verschiedene Eingaben nutzbar (nicht nur einen Einzelfall).</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Finitheit</b></td><td style="padding:6px;border:1px solid #ccc;">Endliche Beschreibung mit endlich vielen Anweisungen.</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Diskretheit</b></td><td style="padding:6px;border:1px solid #ccc;">Besteht aus einzelnen, klar abgegrenzten Schritten.</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Determinismus</b></td><td style="padding:6px;border:1px solid #ccc;">Gleicher Ablauf bei gleicher Eingabe.</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Determiniertheit</b></td><td style="padding:6px;border:1px solid #ccc;">Gleiche Ausgabe bei gleicher Eingabe.</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Korrektheit</b></td><td style="padding:6px;border:1px solid #ccc;">Liefert das richtige Ergebnis (partielle Korrektheit) und terminiert (hält an).</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>Komplexität</b></td><td style="padding:6px;border:1px solid #ccc;">Zeitbedarf (Schritte) und Speicherbedarf.</td></tr>'
        + '</table>'
        + '<h3>Determinismus vs. Determiniertheit – der feine Unterschied</h3>'
        + '<div class="warning-box">'
        + '<strong>Achtung Verwechslungsgefahr:</strong>'
        + '<ul>'
        + '<li><strong>Determinismus</strong> = gleicher <em>Weg</em> bei gleicher Eingabe (Zwischenschritte)</li>'
        + '<li><strong>Determiniertheit</strong> = gleiches <em>Ergebnis</em> bei gleicher Eingabe</li>'
        + '</ul>'
        + 'Ein Algorithmus kann determiniert (immer 42 als Antwort), aber nicht-deterministisch (auf verschiedenen Wegen dahin) sein. Umgekehrt eher theoretisch.'
        + '</div>'
        + '<h3>Partielle Korrektheit vs. Terminieren</h3>'
        + '<p><strong>Partielle Korrektheit:</strong> Falls der Algorithmus anhält, ist das Ergebnis richtig.</p>'
        + '<p><strong>Terminierung:</strong> Der Algorithmus hält bei korrekter Eingabe an (keine Endlosschleife).</p>'
        + '<p>Beides zusammen = <strong>totale Korrektheit</strong>.</p>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Diese Begriffe sind das gemeinsame Vokabular der Informatik. Wer in AlgoDat, Softwareengineering oder Compilerbau über Algorithmen spricht, nutzt genau diese Wörter. In der Klausur: typische Multiple-Choice-Aufgabe – Begriff zuordnen, Eigenschaften zuordnen.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: Ist das ein Algorithmus?',
      steps: [
        {
          label: 'Beispiel 1 – Kochrezept',
          html:
            '<p>"Nimm 200g Mehl, verrühre mit 2 Eiern, backe bei 180°C für 30 Minuten."</p>'
            + '<p><strong>Finitheit</strong>: ✓ (4 Anweisungen)</p>'
            + '<p><strong>Diskretheit</strong>: ✓ (einzelne Schritte)</p>'
            + '<p><strong>Determinismus</strong>: ✓ (eindeutige Reihenfolge)</p>'
            + '<p><strong>Determiniertheit</strong>: ? – das Backergebnis könnte abweichen (Eiergröße, Ofenabweichung). Formal problematisch.</p>'
        },
        {
          label: 'Beispiel 2 – "Würfle eine Zahl zwischen 1 und 10"',
          html:
            '<p><strong>Finitheit</strong>: ✓</p>'
            + '<p><strong>Determinismus</strong>: ✗ – der Würfelwurf ist zufällig!</p>'
            + '<p>→ Kein klassischer Algorithmus, sondern ein <em>randomisierter</em> (den gibt es auch, ist aber eine Sonderform).</p>'
        },
        {
          label: 'Beispiel 3 – Primzahlensieb des Eratosthenes',
          html:
            '<p>Ein klassischer Algorithmus (siehe Lektion 40) – erfüllt alle Eigenschaften perfekt: endlich definiert, diskret, deterministisch, determiniert, korrekt und terminiert.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Eigenschaft beschreibt, dass ein Algorithmus für gleiche Eingaben immer das gleiche Ergebnis liefert?',
        options: ['Determinismus', 'Determiniertheit', 'Finitheit', 'Diskretheit'],
        correct: 1,
        explanation: 'Determiniertheit = gleiche AUSGABE bei gleicher Eingabe. Determinismus hingegen betrifft den WEG (die Zwischenschritte).'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist der Unterschied zwischen partieller und totaler Korrektheit?',
        options: [
          'Partiell = teilweise richtig; total = komplett richtig',
          'Partiell = nur bei kleinen Eingaben; total = bei allen',
          'Partiell = richtige Ausgabe falls der Algorithmus anhält; total = zusätzlich, dass er wirklich anhält',
          'Partiell = nur für Schleifen; total = für jeden Code'
        ],
        correct: 2,
        explanation: 'Partielle Korrektheit garantiert: "Wenn der Algorithmus terminiert, ist das Ergebnis richtig." Totale Korrektheit fordert zusätzlich die Terminierung (kein unendliches Laufen).'
      },
      {
        type: 'multiple-choice',
        question: 'Was bedeutet Finitheit eines Algorithmus?',
        options: [
          'Er verarbeitet nur endlich viele Zahlen.',
          'Seine Beschreibung besteht aus endlich vielen Anweisungen.',
          'Er läuft endlich lange.',
          'Er nutzt endlich viel Speicher.'
        ],
        correct: 1,
        explanation: 'Finitheit bezieht sich auf die BESCHREIBUNG: endlich viele Anweisungen. Dass er endlich lange läuft, ist Terminierung – eine andere Eigenschaft.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Eigenschaft sorgt dafür, dass ein Algorithmus für unterschiedliche Eingaben einsetzbar ist?',
        options: ['Finitheit', 'Parametrisierbarkeit', 'Determiniertheit', 'Komplexität'],
        correct: 1,
        explanation: 'Parametrisierbarkeit (auch "Übertragbarkeit") = derselbe Algorithmus funktioniert für verschiedene Instanzen des Problems (nicht nur einen fest vorgegebenen Fall).'
      }
    ]
  },

  // ===== LEKTION 38: Darstellungen =====
  {
    id: 38,
    title: 'Pseudocode, Struktogramm, Flussdiagramm',
    explanation: {
      html:
        '<h2>Drei Wege, einen Algorithmus darzustellen</h2>'
        + '<p>Algorithmen werden in der Informatik auf verschiedene Arten aufgeschrieben – je nachdem, wer die Zielgruppe ist.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Dieselbe Wegbeschreibung kannst du als Text ("Fahre geradeaus, dann links, dann …"), als Google-Maps-Route (grafisch mit Pfeilen) oder als Navi-Ansage (Schritt für Schritt) darstellen. Alle drei meinen denselben Weg – nur die Form ist anders. Genauso mit Algorithmen.'
        + '</div>'
        + '<h3>1. Pseudocode</h3>'
        + '<p>Mischung aus natürlicher Sprache und Programmiersprache. Nicht direkt ausführbar, aber eindeutig lesbar:</p>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + 'Input: Array M, Zahl k\n'
        + 'Output: Kleinstes Element in M\n'
        + '\n'
        + '1  m := M[1]\n'
        + '2  for i := 2 to n do\n'
        + '3    if M[i] < m then\n'
        + '4      m := M[i]\n'
        + '5  print m</pre>'
        + '<p>→ Gut für <strong>komplexe Algorithmen</strong>, nahe an Programmiersprache.</p>'
        + '<h3>2. Struktogramm (Nassi-Shneiderman-Diagramm)</h3>'
        + '<p>Grafische Darstellung mit geschachtelten Blöcken. Strukturen werden durch Einrahmen verdeutlicht:</p>'
        + '<ul>'
        + '<li>Rechtecke = Anweisungen</li>'
        + '<li>Trapez = while-Schleife (Bedingung oben)</li>'
        + '<li>Umgekehrtes Trapez = do-while (Bedingung unten)</li>'
        + '<li>Dreieck = Verzweigung (Ja/Nein)</li>'
        + '</ul>'
        + '<p>→ Gut für <strong>Schulen und Didaktik</strong>, zwingt zu strukturiertem Aufbau (keine "goto"-Sprünge möglich!).</p>'
        + '<h3>3. Flussdiagramm (Programmablaufplan)</h3>'
        + '<p>Symbole nach DIN 66001, verbunden mit Pfeilen:</p>'
        + '<ul>'
        + '<li>Oval = Start / Stop</li>'
        + '<li>Parallelogramm = Ein-/Ausgabe</li>'
        + '<li>Rechteck = Operation</li>'
        + '<li>Raute = Verzweigung (Ja/Nein)</li>'
        + '<li>Pfeile = Ablauf</li>'
        + '</ul>'
        + '<p>→ Gut für <strong>einfache Abläufe</strong>; bei komplexen Verfahren schnell unübersichtlich.</p>'
        + '<h3>Wann was?</h3>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Darstellung</th><th style="padding:6px;border:1px solid #ccc;">Stärke</th><th style="padding:6px;border:1px solid #ccc;">Schwäche</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Pseudocode</td><td style="padding:6px;border:1px solid #ccc;">Präzise, auch bei komplexen Algorithmen</td><td style="padding:6px;border:1px solid #ccc;">Nicht visuell</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Struktogramm</td><td style="padding:6px;border:1px solid #ccc;">Visuell + strukturiert</td><td style="padding:6px;border:1px solid #ccc;">Wird bei Schachtelung eng</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Flussdiagramm</td><td style="padding:6px;border:1px solid #ccc;">Intuitiv für einfache Abläufe</td><td style="padding:6px;border:1px solid #ccc;">Bei komplexen Pfaden chaotisch</td></tr>'
        + '</table>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Als Lehrer wirst du diese Darstellungen im Unterricht einsetzen – Struktogramme sind fester Bestandteil der Informatik in Baden-Württemberg. In der Klausur werden oft Aufgaben gestellt wie "Führe das folgende Struktogramm aus" (siehe Lektion 40, Sieb des Eratosthenes).'
        + '</div>'
    },
    example: {
      title: 'Beispiel: Kleinstes Element finden – in allen drei Formen',
      steps: [
        {
          label: 'Aufgabenstellung',
          html:
            '<p>Gegeben: Array M mit n Zahlen. Gesucht: kleinste Zahl.</p>'
        },
        {
          label: 'Als Pseudocode',
          html:
            '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + 'Input: Array M of size n\n'
            + 'Output: min\n'
            + '\n'
            + 'min := M[1]\n'
            + 'for i := 2 to n do\n'
            + '  if M[i] < min then\n'
            + '    min := M[i]\n'
            + 'print min</pre>'
        },
        {
          label: 'Als Struktogramm',
          html:
            '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;line-height:1.2;">'
            + '+---------------------------------+\n'
            + '| min := M[1]                     |\n'
            + '+---------------------------------+\n'
            + '| solange i := 2 bis n            |\n'
            + '|  +----------------------------+ |\n'
            + '|  | M[i] < min ?               | |\n'
            + '|  +----ja--------|--nein-------+ |\n'
            + '|  | min := M[i] | (nichts tun) | |\n'
            + '|  +-------------+--------------+ |\n'
            + '+---------------------------------+\n'
            + '| Gib min aus                     |\n'
            + '+---------------------------------+</pre>'
        },
        {
          label: 'Als Flussdiagramm',
          html:
            '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;line-height:1.2;">'
            + '     ( Start )\n'
            + '        |\n'
            + '  [ min := M[1] ]\n'
            + '  [ i := 2 ]\n'
            + '        |\n'
            + '    <  i ≤ n ?  >---nein--→( Ausgabe min )\n'
            + '        |ja                      |\n'
            + '  < M[i] < min ? >--nein--+\n'
            + '        |ja               |\n'
            + '  [ min := M[i] ]        |\n'
            + '        |                 |\n'
            + '        +--→[ i := i+1 ]←+\n'
            + '             |\n'
            + '             └────────→ (zurück zur Bedingung)</pre>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Darstellungsform besteht aus geschachtelten Rechtecken, Trapezen und Dreiecken?',
        options: ['Pseudocode', 'Flussdiagramm', 'Struktogramm (Nassi-Shneiderman)', 'UML'],
        correct: 2,
        explanation: 'Struktogramm = Rechtecke (Anweisungen) + Trapeze (Schleifen) + Dreiecke (Verzweigungen). Alles geschachtelt – "keine gotos möglich".'
      },
      {
        type: 'multiple-choice',
        question: 'Welches Symbol steht in einem Flussdiagramm nach DIN 66001 für eine Verzweigung?',
        options: ['Oval', 'Raute', 'Rechteck', 'Parallelogramm'],
        correct: 1,
        explanation: 'Raute = bedingte Verzweigung (Ja/Nein). Oval = Start/Stop, Rechteck = Operation, Parallelogramm = Ein-/Ausgabe.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Darstellungsform ist am nähesten an einer Programmiersprache, aber nicht direkt ausführbar?',
        options: ['Flussdiagramm', 'Pseudocode', 'Struktogramm', 'Java-Quelltext'],
        correct: 1,
        explanation: 'Pseudocode nutzt Programmier-Syntax (Variablen, Schleifen, if), aber in freier, ungeprüfter Form – nicht ausführbar, aber eindeutig lesbar.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum sind Flussdiagramme bei komplexen Algorithmen problematisch?',
        options: [
          'Sie brauchen zu viel Papier.',
          'Komplexe Verzweigungen und Schleifen führen schnell zu unübersichtlichen Diagrammen.',
          'Flussdiagramme erlauben keine Verzweigungen.',
          'Sie sind nicht wissenschaftlich anerkannt.'
        ],
        correct: 1,
        explanation: 'Viele Pfeile kreuzen sich bei Verschachtelung – das Diagramm wird schnell zum "Spaghetti-Code-Bild". Struktogramme zwingen zu sauberer Struktur; Pseudocode bleibt auch komplex lesbar.'
      }
    ]
  },

  // ===== LEKTION 39: Arrays & Listen =====
  {
    id: 39,
    title: 'Arrays & Listen (einfach/doppelt/Ring)',
    explanation: {
      html:
        '<h2>Arrays und Listen – wann welche Struktur?</h2>'
        + '<p>Für die gleiche Aufgabe gibt es oft mehrere Datenstrukturen zur Auswahl. Wer die Unterschiede kennt, trifft die richtige Wahl für sein Problem.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Ein Array ist wie ein Parkhaus mit nummerierten Plätzen – du kommst zu jedem Platz sofort hin ("Platz 42"). Eine verkettete Liste ist wie eine Schnitzeljagd – du findest jeden Hinweis nur, indem du dem vorherigen folgst. Das Parkhaus ist schneller zum Zugriff, aber starr (neuen Platz zwischendrin einfügen heißt alle nach hinten verschieben). Die Schnitzeljagd ist flexibel (einen Hinweis umleiten ist einfach), aber langsam im Zugriff.'
        + '</div>'
        + '<h3>Array (Feld)</h3>'
        + '<ul>'
        + '<li>Feste Länge, zusammenhängender Speicher</li>'
        + '<li>Zugriff über Index: <code>a[5]</code> → sofort</li>'
        + '<li>In Java: <code>int[] a = new int[10];</code></li>'
        + '<li>Einfügen/Löschen in der Mitte: langsam (verschieben aller folgenden Elemente)</li>'
        + '</ul>'
        + '<h3>Einfach verkettete Liste (Linked List)</h3>'
        + '<ul>'
        + '<li>Jedes Element hat <strong>data</strong> + <strong>next</strong> (Zeiger auf nächstes Element)</li>'
        + '<li>Letzter Verweis = null</li>'
        + '<li>Dynamisch wachsend/schrumpfend</li>'
        + '<li>Kein direkter Zugriff auf Mitte – man muss immer von vorne durchlaufen</li>'
        + '</ul>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + 'head → [o1|•] → [o2|•] → [o3|null]</pre>'
        + '<h3>Doppelt verkettete Liste</h3>'
        + '<ul>'
        + '<li>Jedes Element hat zusätzlich <strong>prev</strong> (Zeiger auf vorheriges)</li>'
        + '<li>In beide Richtungen durchlaufbar</li>'
        + '<li>Beim Einfügen/Löschen muss man 2 Pointer (prev + next) anpassen</li>'
        + '</ul>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + 'null ← [•|o1|•] ↔ [•|o2|•] ↔ [•|o3|null]</pre>'
        + '<h3>Ringliste</h3>'
        + '<ul>'
        + '<li>Das letzte Element zeigt (per next) auf das erste zurück</li>'
        + '<li>Kein "Ende" – zyklische Struktur</li>'
        + '<li>Braucht keinen tail-Pointer</li>'
        + '</ul>'
        + '<h3>Vergleich: Wann welche Struktur?</h3>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;width:100%;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Aufgabe</th><th style="padding:6px;border:1px solid #ccc;">Beste Wahl</th><th style="padding:6px;border:1px solid #ccc;">Grund</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Direkter Zugriff auf Mitte</td><td style="padding:6px;border:1px solid #ccc;">Array</td><td style="padding:6px;border:1px solid #ccc;">O(1) per Index</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Viel Einfügen/Löschen zwischendrin</td><td style="padding:6px;border:1px solid #ccc;">Verkettete Liste</td><td style="padding:6px;border:1px solid #ccc;">Nur Pointer umbiegen</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Durchlauf in beide Richtungen</td><td style="padding:6px;border:1px solid #ccc;">Doppelt verkettet</td><td style="padding:6px;border:1px solid #ccc;">prev-Pointer</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Zyklisches Rotieren</td><td style="padding:6px;border:1px solid #ccc;">Ringliste</td><td style="padding:6px;border:1px solid #ccc;">Kein Ende</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Schnelle Suche</td><td style="padding:6px;border:1px solid #ccc;">Hashtabelle oder BST</td><td style="padding:6px;border:1px solid #ccc;">O(1) bzw. O(log n)</td></tr>'
        + '</table>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Fast jede Programmieraufgabe beginnt mit der Frage "Welche Datenstruktur?". Die falsche Wahl macht Programme langsam. In der Klausur ist das eine Standard-Aufgabe: "Gegeben Anwendung X, welche Struktur eignet sich?"'
        + '</div>'
    },
    example: {
      title: 'Beispiel: Datenstruktur für verschiedene Anwendungen',
      steps: [
        {
          label: 'Zugriff auf das mittlere Element',
          html:
            '<p><strong>Beste Wahl: Array</strong> – direkter Index-Zugriff in einem Schritt. Liste bräuchte n/2 Schritte bis zur Mitte.</p>'
        },
        {
          label: 'Einfügen an beliebiger Stelle',
          html:
            '<p><strong>Beste Wahl: einfach verkettete Liste</strong> – nur zwei Pointer ändern: Vorgänger.next = neu; neu.next = (ehemals Vorgänger.next). Bei Array müssten alle folgenden Elemente verschoben werden.</p>'
        },
        {
          label: 'Adressbuch (nach Namen suchen)',
          html:
            '<p><strong>Beste Wahl: Hashtabelle oder BST</strong> – Suchaufwand wenige Schritte statt n. Array oder Liste: muss jedes Element einzeln prüfen.</p>'
        },
        {
          label: 'Browser-Verlauf',
          html:
            '<p><strong>Beste Wahl: (doppelt) verkettete Liste</strong> – neue Seiten hinten anhängen, alte vorne löschen ist schnell. Array wäre möglich, aber Größe muss begrenzt werden.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Datenstruktur ist am besten, wenn man schnellen Zugriff auf das mittlere Element braucht?',
        options: ['Array', 'Einfach verkettete Liste', 'Doppelt verkettete Liste', 'Ringliste'],
        correct: 0,
        explanation: 'Array: direkter Zugriff per Index in einem Schritt. Listen müssten von vorn durchlaufen werden.'
      },
      {
        type: 'multiple-choice',
        question: 'Bei welcher Listenart zeigt der next-Pointer des letzten Elements auf das erste Element?',
        options: ['Einfach verkettete Liste', 'Doppelt verkettete Liste', 'Ringliste', 'Array'],
        correct: 2,
        explanation: 'Definition der Ringliste: Ende verweist zurück auf Anfang → zyklische Struktur.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Datenstruktur eignet sich am besten für eine Mitglieder-Datenbank mit eindeutiger ID, in der schnell nach ID gesucht wird?',
        options: ['Array', 'Einfach verkettete Liste', 'Hashtabelle', 'Ringliste'],
        correct: 2,
        explanation: 'Hashtabelle: Suche in O(1) durch direkten Zugriff per Hashwert. Für große Datenbanken die beste Wahl.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Aussage ist nur bei einer doppelt verketteten Liste zutreffend?',
        options: [
          'Man kann die Liste in beide Richtungen durchlaufen.',
          'Man kann Elemente einfügen und entfernen.',
          'Die Liste hat einen Head-Pointer.',
          'Die Liste kann beliebig lang werden.'
        ],
        correct: 0,
        explanation: 'Nur bei doppelt verketteten Listen gibt es prev-Pointer → Durchlauf in beide Richtungen. Die anderen Eigenschaften haben auch einfach verkettete Listen.'
      },
      {
        type: 'multiple-choice',
        question: 'Ein Browser-Verlauf soll chronologisch gespeichert und vor/zurück durchblättert werden. Welche Struktur ist ideal?',
        options: ['Array', 'Hashtabelle', 'Doppelt verkettete Liste', 'Binärer Suchbaum'],
        correct: 2,
        explanation: 'Doppelt verkettet: vor/zurück in beide Richtungen. Array wäre starr in der Größe; Hashtabelle und BST kennen keine chronologische Ordnung.'
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
        + '<p>Ein über 2000 Jahre alter Algorithmus, um alle Primzahlen bis zu einer Zahl n zu finden. Klassisches Beispiel in der Klausur für Algorithmus-Ausführung auf Struktogrammen.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Stell dir ein Sieb vor, durch das du Sand rieseln lässt – die großen Steine bleiben oben. Eratosthenes (ca. 200 v. Chr.) hatte eine ähnliche Idee für Primzahlen: Statt Primzahlen direkt zu suchen, streicht er <em>alle Nicht-Primzahlen</em> durch. Was übrig bleibt, sind die Primzahlen. Das ist überraschend einfach und effizient.'
        + '</div>'
        + '<h3>Die Idee</h3>'
        + '<ol>'
        + '<li>Schreibe alle Zahlen von 2 bis n auf</li>'
        + '<li>Streiche 1 (ist keine Primzahl)</li>'
        + '<li>Die erste nicht gestrichene Zahl ist prim: markiere sie, streiche alle ihre Vielfachen</li>'
        + '<li>Nimm die nächste nicht gestrichene Zahl, streiche deren Vielfache</li>'
        + '<li>Wiederhole bis zur Wurzel von n (alles größer hat schon einen kleineren Teiler)</li>'
        + '<li>Alle übrigen Zahlen sind Primzahlen</li>'
        + '</ol>'
        + '<h3>Warum nur bis √n?</h3>'
        + '<p>Jede zusammengesetzte Zahl n = a · b hat einen Teiler ≤ √n. Wenn du alle Vielfachen von Zahlen bis √n weggestrichen hast, sind alle zusammengesetzten Zahlen auch gestrichen.</p>'
        + '<div class="tip-box">'
        + '<strong>Beispiel:</strong> Für n = 20 reicht es, bis √20 ≈ 4,47 zu gehen – also i = 2, 3, 4. Alles, was bis dahin nicht gestrichen wurde, ist garantiert prim.'
        + '</div>'
        + '<h3>Als Struktogramm (Klausur-Aufgabe!)</h3>'
        + '<p>In der Klausur-A4 bekommst du das Sieb als Struktogramm vorgelegt – dein Job ist, es auszuführen und die Zwischenstände zu dokumentieren.</p>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;font-size:0.9em;">'
        + 'SIEB[1] := X   (Löschmarkierung für 1)\n'
        + 'i := 2\n'
        + 'MAX := √n\n'
        + 'solange i ≤ MAX:\n'
        + '  wenn SIEB[i] ≠ X:\n'
        + '    j := i + i\n'
        + '    solange j ≤ n:\n'
        + '      SIEB[j] := X\n'
        + '      j := j + i\n'
        + '  print i, SIEB\n'
        + '  i := i + 1\n'
        + 'P := []\n'
        + 'für i := 1 bis n:\n'
        + '  wenn SIEB[i] ≠ X:\n'
        + '    füge SIEB[i] ans Ende von P\n'
        + 'return P</pre>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Ein klassischer Algorithmus zum Trainieren der <em>Ausführung</em> eines Struktogramms. In der Klausur garantiert zu finden (3 Punkte in der Übung A4). Darüber hinaus: Primzahlen sind fundamental für Kryptographie – ohne effiziente Primzahl-Bestimmung keine sichere Verschlüsselung.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: Sieb für n=20',
      steps: [
        {
          label: 'Start: Alle Zahlen 1..20',
          html:
            '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + 'Index:  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20\n'
            + 'SIEB:   1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20</pre>'
            + '<p>SIEB[1] := X (1 ist keine Primzahl)</p>'
        },
        {
          label: 'i=2: Vielfache von 2 streichen',
          html:
            '<p>SIEB[2] = 2 (nicht X), also Vielfache streichen: 4, 6, 8, 10, 12, 14, 16, 18, 20</p>'
            + '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + 'SIEB:  X 2 3 X 5 X 7 X 9 X 11 X 13 X 15 X 17 X 19 X</pre>'
        },
        {
          label: 'i=3: Vielfache von 3 streichen',
          html:
            '<p>SIEB[3] = 3 (nicht X), Vielfache: 6, 9, 12, 15, 18 (einige schon X, egal)</p>'
            + '<pre style="font-family:monospace;background:#f3f4f6;padding:10px;">'
            + 'SIEB:  X 2 3 X 5 X 7 X X X 11 X 13 X X X 17 X 19 X</pre>'
        },
        {
          label: 'i=4: SIEB[4] ist X, überspringen',
          html:
            '<p>Da SIEB[4] bereits gestrichen (= X), macht die Schleife nichts. i wird zu 5.</p>'
            + '<p>MAX = √20 ≈ 4,47, also i=5 &gt; MAX → äußere Schleife endet.</p>'
        },
        {
          label: 'Ergebnis: Primzahlen sammeln',
          html:
            '<p>Alles, was nicht X ist, ist prim:</p>'
            + '<p><strong>P = [2, 3, 5, 7, 11, 13, 17, 19]</strong></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Nach welchem Prinzip arbeitet das Sieb des Eratosthenes?',
        options: [
          'Jede Zahl wird einzeln auf Primzahleigenschaft geprüft.',
          'Alle Vielfachen von Primzahlen werden gestrichen, übrig bleiben Primzahlen.',
          'Zufälliges Testen, bis eine Primzahl gefunden wird.',
          'Division durch alle kleineren Zahlen.'
        ],
        correct: 1,
        explanation: 'Das Sieb streicht systematisch alle Vielfachen. Was nicht gestrichen wird, ist prim.'
      },
      {
        type: 'multiple-choice',
        question: 'Bis zu welcher Zahl muss man i laufen lassen, um alle Primzahlen bis n zu finden?',
        options: ['n', 'n/2', '√n', 'log n'],
        correct: 2,
        explanation: 'Jede zusammengesetzte Zahl hat einen Teiler ≤ √n. Darum reicht es, Vielfache bis √n zu streichen – alle anderen zusammengesetzten Zahlen sind dann schon erfasst.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum ist SIEB[1] im Algorithmus gleich zu Beginn mit X markiert?',
        options: [
          'Weil 1 eine Primzahl ist und sie als erste gemerkt werden soll.',
          'Weil 1 keine Primzahl ist und daher nicht im Ergebnis erscheinen darf.',
          'Weil 1 gleichzeitig gerade und ungerade ist.',
          'Aus Versehen – das gehört eigentlich weggelassen.'
        ],
        correct: 1,
        explanation: '1 ist per Definition keine Primzahl. Darum wird sie direkt am Anfang als gelöscht markiert, damit sie nicht fälschlich in P landet.'
      },
      {
        type: 'multiple-choice',
        question: 'Das Sieb berechnet alle Primzahlen bis n=20. Welche Ausgabeliste entsteht?',
        options: [
          '[2, 3, 5, 7, 9, 11, 13, 17, 19]',
          '[2, 3, 5, 7, 11, 13, 17, 19]',
          '[1, 2, 3, 5, 7, 11, 13, 17, 19]',
          '[2, 3, 5, 7, 11, 13, 15, 17, 19]'
        ],
        correct: 1,
        explanation: 'Die Primzahlen bis 20: 2, 3, 5, 7, 11, 13, 17, 19. Die 9 und 15 sind Vielfache von 3, die 1 ist per Definition keine Primzahl.'
      }
    ]
  },

  // ===== LEKTION 41: ISBN Prüfziffern =====
  {
    id: 41,
    title: 'Prüfziffern – ISBN-13',
    explanation: {
      html:
        '<h2>Prüfziffern bei ISBN-13</h2>'
        + '<p>Wenn du eine Büchernummer abschreibst und eine Ziffer vertauschst, soll der Computer das merken. Lösung: eine <strong>Prüfziffer</strong>, die aus den anderen Ziffern berechnet wird.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Wie bei einer Rechenaufgabe, bei der du hinten die Querprobe machst – "passt die Endsumme?". Die Prüfziffer ist so eine eingebaute Querprobe. Bei einer Bestellung, Überweisung oder Buchbestellung merkt das System sofort, wenn du eine Ziffer verdreht hast, weil die Prüfziffer nicht mehr stimmt.'
        + '</div>'
        + '<h3>Das ISBN-13-Verfahren</h3>'
        + '<p>Eine ISBN-13 hat 13 Ziffern. Die 13. Ziffer ist die <strong>Prüfziffer</strong>. Berechnung:</p>'
        + '<ol>'
        + '<li>Die 12 Zifferns z₁ bis z₁₂ werden <strong>abwechselnd mit 1 und 3</strong> multipliziert (z₁·1, z₂·3, z₃·1, z₄·3, …)</li>'
        + '<li>Alle Produkte werden aufsummiert</li>'
        + '<li>Die Prüfziffer z₁₃ wird so gewählt, dass die Gesamtsumme durch 10 teilbar ist</li>'
        + '</ol>'
        + '<div class="info-card" style="padding:10px;text-align:center;">'
        + 'Σ (z<sub>i</sub> · Gewicht<sub>i</sub>) mod 10 = 0'
        + '</div>'
        + '<p>Wobei Gewicht = 1 für ungerade Position, 3 für gerade Position.</p>'
        + '<h3>Beispiel ISBN 978-3-8274-1926-2</h3>'
        + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
        + 'Ziffer:   9  7  8  3  8  2  7  4  1  9  2  6  | 2\n'
        + 'Gewicht:  1  3  1  3  1  3  1  3  1  3  1  3  |\n'
        + 'Produkt:  9 21  8  9  8  6  7 12  1 27  2 18  = 128\n'
        + '\n'
        + 'Summe (mit Prüfziffer): 128 + 2 = 130\n'
        + '130 mod 10 = 0 ✓ → ISBN gültig</pre>'
        + '<h3>Fehlende Ziffer berechnen</h3>'
        + '<p>Ist in einer ISBN genau eine Ziffer unleserlich, lässt sie sich rekonstruieren:</p>'
        + '<ol>'
        + '<li>Alle bekannten Ziffern mit ihren Gewichten multiplizieren und summieren</li>'
        + '<li>Die fehlende Ziffer sei x mit Gewicht g</li>'
        + '<li>(Summe + x·g) mod 10 = 0 → x·g ≡ -Summe (mod 10)</li>'
        + '<li>x berechnen (meist durch Ausprobieren von 0..9)</li>'
        + '</ol>'
        + '<div class="tip-box">'
        + '<strong>Praxis:</strong> Nimm die Summe, berechne (10 - (Summe mod 10)) mod 10 = was noch fehlt, um durch 10 teilbar zu werden. Wenn das Gewicht der fehlenden Ziffer 1 ist, ist das direkt x. Bei Gewicht 3 musst du eine Ziffer finden, deren Dreifaches diesen Rest ergibt.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> ISBN, IBAN, EAN-Codes, Personalausweis-Nummern – überall werden Prüfziffern genutzt, um Tippfehler und Übertragungsfehler zu erkennen. Die Mathematik dahinter ist einfach, die Anwendung allgegenwärtig. Klausurrelevant: 4,5 Punkte in der Übung A4.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: Fehlende Ziffer in 978-3-8362-84?7-1 finden',
      steps: [
        {
          label: 'Ziffern mit Gewichten aufschreiben',
          html:
            '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + 'Position: 1  2  3  4  5  6  7  8  9 10 11 12 | 13\n'
            + 'Ziffer:   9  7  8  3  8  3  6  2  8  4  ?  7 |  1\n'
            + 'Gewicht:  1  3  1  3  1  3  1  3  1  3  1  3 |  1</pre>'
        },
        {
          label: 'Bekannte Summe berechnen',
          html:
            '<pre style="font-family:monospace;">'
            + '9·1 + 7·3 + 8·1 + 3·3 + 8·1 + 3·3 + 6·1 + 2·3 + 8·1 + 4·3 + ?·1 + 7·3 + 1·1\n'
            + '= 9 + 21 + 8 + 9 + 8 + 9 + 6 + 6 + 8 + 12 + ? + 21 + 1\n'
            + '= 118 + ?</pre>'
        },
        {
          label: 'Bedingung aufstellen',
          html:
            '<p>(118 + x) mod 10 = 0 → x mod 10 = -118 mod 10 = 2 (weil 118 mod 10 = 8, also brauchen wir 10-8 = 2)</p>'
            + '<p>Gewicht der fehlenden Ziffer ist 1, also ist die fehlende Ziffer direkt <strong>2</strong>.</p>'
        },
        {
          label: 'Probe',
          html:
            '<p>Mit x = 2: 118 + 2 = 120. 120 mod 10 = 0 ✓</p>'
            + '<p>Die korrekte ISBN lautet: 978-3-8362-8427-1</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Gewichte werden bei der ISBN-13 Prüfziffer abwechselnd verwendet?',
        options: ['1 und 2', '1 und 3', '2 und 4', '3 und 5'],
        correct: 1,
        explanation: 'Bei ISBN-13 werden die Ziffern abwechselnd mit 1 und 3 multipliziert. Ungerade Position × 1, gerade Position × 3.'
      },
      {
        type: 'multiple-choice',
        question: 'Welches Kriterium muss die Summe aller gewichteten ISBN-Ziffern erfüllen?',
        options: [
          'Die Summe muss eine Primzahl sein.',
          'Die Summe muss durch 10 teilbar sein.',
          'Die Summe muss durch 13 teilbar sein.',
          'Die Summe muss genau 100 ergeben.'
        ],
        correct: 1,
        explanation: 'Die Prüfziffer wird so gewählt, dass die Gesamtsumme durch 10 teilbar ist. Das heißt: (Summe mod 10) = 0.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum nutzt man überhaupt Prüfziffern bei ISBN, IBAN & Co?',
        options: [
          'Damit die Nummern schöner aussehen.',
          'Um Tipp- und Übertragungsfehler beim Eingeben zu erkennen.',
          'Damit die Zahl durch 10 teilbar ist.',
          'Weil es so vorgeschrieben ist.'
        ],
        correct: 1,
        explanation: 'Prüfziffern sind eine einfache, sehr effektive Fehlererkennung: Ein Tippfehler in einer Ziffer ändert die Summe und wird sofort bemerkt.'
      },
      {
        type: 'multiple-choice',
        question: 'Die fehlende Ziffer in einer ISBN hat Gewicht 3 und die Rest-Summe der anderen Produkte ergibt (mod 10) = 4. Was muss die fehlende Ziffer sein?',
        options: ['2', '6', '3', '8'],
        correct: 0,
        explanation: 'Wir brauchen (4 + x·3) mod 10 = 0 → x·3 ≡ -4 ≡ 6 (mod 10). Teste: 2·3 = 6 ✓. Also x = 2.'
      }
    ]
  }

];
