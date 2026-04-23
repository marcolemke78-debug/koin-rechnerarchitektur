const LessonsA1 = [

  // ===== LEKTION 22: Stellenwertsysteme verstehen =====
  {
    id: 22,
    title: 'Stellenwertsysteme verstehen',
    explanation: {
      html:
        '<h2>Stellenwertsysteme verstehen</h2>'
        + '<p>Jedes Zahlensystem funktioniert gleich: <strong>Jede Stelle hat einen festen Wert</strong>, und die Ziffer sagt, wie oft dieser Wert zählt.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Geldbeutel:</strong> Im Dezimalsystem ist es wie mit Geldscheinen: 100er, 10er, 1er. Die Zahl 234 bedeutet 2·100 + 3·10 + 4·1. Im Binärsystem gibt es statt 100ern, 10ern, 1ern die Werte 1, 2, 4, 8, 16, 32 … – immer das Doppelte. Und statt 0–9 nur zwei Ziffern: 0 und 1.'
        + '</div>'
        + '<h3>Welche Systeme gibt es?</h3>'
        + '<table class="icon-table" style="width:100%;border-collapse:collapse;margin:8px 0;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">System</th><th style="padding:6px;border:1px solid #ccc;">Basis</th><th style="padding:6px;border:1px solid #ccc;">Ziffern</th><th style="padding:6px;border:1px solid #ccc;">Stellenwerte</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Dezimal</td><td style="padding:6px;border:1px solid #ccc;">10</td><td style="padding:6px;border:1px solid #ccc;">0–9</td><td style="padding:6px;border:1px solid #ccc;">1, 10, 100, 1000 …</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Binär</td><td style="padding:6px;border:1px solid #ccc;">2</td><td style="padding:6px;border:1px solid #ccc;">0, 1</td><td style="padding:6px;border:1px solid #ccc;">1, 2, 4, 8, 16 …</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Oktal</td><td style="padding:6px;border:1px solid #ccc;">8</td><td style="padding:6px;border:1px solid #ccc;">0–7</td><td style="padding:6px;border:1px solid #ccc;">1, 8, 64, 512 …</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Hex</td><td style="padding:6px;border:1px solid #ccc;">16</td><td style="padding:6px;border:1px solid #ccc;">0–9, A–F</td><td style="padding:6px;border:1px solid #ccc;">1, 16, 256, 4096 …</td></tr>'
        + '</table>'
        + '<div class="tip-box">'
        + '<strong>Wichtig:</strong> Damit klar ist, welches System gemeint ist, schreibt man die Basis als kleinen Index: <code>101<sub>2</sub></code> ist Binär, <code>101<sub>10</sub></code> ist Dezimal. Das ist was ganz anderes!'
        + '</div>'
        + '<h3>Probier es aus</h3>'
        + '<p>Klick die Bits unten an. Jede <strong>1</strong> zählt ihren Wert zur Summe dazu – jede <strong>0</strong> zählt nichts. So funktioniert das Binärsystem.</p>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Das Stellenwertprinzip ist die <em>Grundlage von allem</em>, was Computer tun. Ein Rechner speichert intern <em>nur</em> 0en und 1en – Strom an oder aus. Jede Farbe, jeder Buchstabe, jede Zahl, jedes Bild wird in Binärzahlen verwandelt und zurück. Wenn du dieses eine Prinzip verstehst, verstehst du automatisch die nächsten 10 Lektionen besser. Und in der Klausur sind 6 Punkte aus A1 fast garantiert, wenn du es drauf hast.'
        + '</div>',
      visuals: [
        {
          type: 'binary-interactive',
          bits: 8,
          initial: '00001011',
          label: 'Klick die Bits – sieh, was das in Dezimal ergibt'
        }
      ]
    },
    example: {
      title: 'Beispiel: 1011,01₂ in Dezimal',
      steps: [
        {
          label: 'Schritt 1 – Stellenwerte aufschreiben',
          html:
            '<p>Jede Stelle hat einen festen Wert. Vor dem Komma: 1, 2, 4, 8 (von rechts). Nach dem Komma: 0,5; 0,25; 0,125 (von links).</p>'
            + '<p>Jede <strong>1</strong> zählt mit – jede <strong>0</strong> nicht.</p>',
          visuals: [
            {
              type: 'stellenwert-viz',
              digits: ['1','0','1','1',',','0','1'],
              exponents: [3,2,1,0,null,-1,-2],
              values: [8,4,2,1,null,0.5,0.25],
              base: 2,
              result: 11.25,
              label: '1011,01₂ = 11,25₁₀'
            }
          ]
        },
        {
          label: 'Schritt 2 – Aufsummieren',
          html:
            '<p style="font-family:monospace;background:#f9fafb;padding:10px;">'
            + '8 + 2 + 1 + 0,25 = <strong>11,25<sub>10</sub></strong>'
            + '</p>'
        },
        {
          label: 'Klausur-Format',
          html:
            '<p>In der Klausur schreibst du den Rechenweg <strong>immer</strong> mit:</p>'
            + '<p style="font-family:monospace;">'
            + '1011,01<sub>2</sub> = 1·2³ + 0·2² + 1·2¹ + 1·2⁰ + 0·2⁻¹ + 1·2⁻²<br>'
            + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 8 + 2 + 1 + 0,25 = 11,25<sub>10</sub>'
            + '</p>'
            + '<p>Nur das Ergebnis reicht nicht – der Rechenweg bringt Punkte!</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welchen Wert hat die Stelle 2⁵ im Binärsystem?',
        options: ['10', '16', '32', '64'],
        correct: 2,
        explanation: '2⁵ = 32. Die Zweierpotenzen 1, 2, 4, 8, 16, 32, 64, 128 solltest du auswendig können.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Aussage ist korrekt?',
        options: [
          'Im Binärsystem gibt es die Ziffern 0, 1, 2.',
          'Hexadezimal nutzt 0–9 und A–F.',
          'Oktal hat Basis 10.',
          'Nachkommastellen gibt es nur bei Dezimalzahlen.'
        ],
        correct: 1,
        explanation: 'Hex: 0–9, A–F (A=10, …, F=15). Binär hat nur 0 und 1. Oktal hat Basis 8. Nachkommastellen gibt es in allen Systemen.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ergibt 100<sub>2</sub> in Dezimal?',
        options: ['2', '3', '4', '100'],
        correct: 2,
        explanation: '1·2² + 0·2¹ + 0·2⁰ = 4.'
      },
      {
        type: 'multiple-choice',
        question: 'Welchen Dezimalwert hat 0,1<sub>2</sub>?',
        options: ['0,1', '0,2', '0,25', '0,5'],
        correct: 3,
        explanation: '0,1<sub>2</sub> = 1·2⁻¹ = 0,5. Erste Nachkommastelle ist ½.'
      }
    ]
  },

  // ===== LEKTION 23: Binär ↔ Dezimal =====
  {
    id: 23,
    title: 'Binär ↔ Dezimal umrechnen',
    explanation: {
      html:
        '<h2>Binär ↔ Dezimal umrechnen</h2>'
        + '<p>Das Umrechnen zwischen beiden Systemen gehört zu den <strong>häufigsten Klausuraufgaben</strong>. Für jede Richtung gibt es ein festes Verfahren.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Wechselstube:</strong> Eine Dezimalzahl in Binär zu wandeln ist wie Geld in kleine Münzen zu wechseln. Du gibst immer die größte passende Münze und rechnest den Rest weiter. Die "Münzen" sind hier aber keine 1€/2€/5€, sondern 1, 2, 4, 8, 16, 32, 64, 128 – Zweierpotenzen.'
        + '</div>'
        + '<h3>Richtung 1: Binär → Dezimal (einfach!)</h3>'
        + '<p>Stellenwerte aufschreiben, bei jeder 1 addieren. Fertig.</p>'
        + '<p>Probier es direkt unten aus:</p>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Jede Zahl, die auf dem Bildschirm landet, lag vorher als Binärzahl im Speicher. Und umgekehrt: Alles, was du als Dezimalzahl eingibst (Passwort, Preis, Alter), muss in Binär umgerechnet werden, bevor es der Computer speichern kann. In der Klausur ist das <em>die</em> Standard-Aufgabe in Themenbereich A – oft für 6 Punkte. Wenn du die beiden Verfahren sicher beherrschst, sind das verlässliche Punkte.'
        + '</div>',
      visuals: [
        {
          type: 'binary-interactive',
          bits: 8,
          initial: '00101011',
          label: 'Klick die Bits und sieh die Dezimalzahl live'
        }
      ]
    },
    example: {
      title: 'Beispiel: 21,75₁₀ → Binär (mit Algorithmus)',
      steps: [
        {
          label: 'Schritt 1 – Zahl aufteilen',
          html:
            '<p>Vorkommateil: <strong>21</strong>. Nachkommateil: <strong>0,75</strong>.</p>'
            + '<p>Beide werden getrennt gerechnet und am Ende zusammengesetzt.</p>'
        },
        {
          label: 'Schritt 2 – Vorkomma: immer durch 2 teilen, Rest notieren',
          html:
            '<p>So funktioniert der Algorithmus aus der Vorlesung:</p>'
            + '<table style="border-collapse:collapse;margin:8px 0;font-family:monospace;">'
            + '<tr style="background:#f0f0f0"><th style="padding:6px;border:1px solid #ccc;">n</th><th style="padding:6px;border:1px solid #ccc;">n mod 2 (Rest)</th><th style="padding:6px;border:1px solid #ccc;">n := n/2</th></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">21</td><td style="padding:6px;border:1px solid #ccc;"><b>1</b></td><td style="padding:6px;border:1px solid #ccc;">10</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">10</td><td style="padding:6px;border:1px solid #ccc;"><b>0</b></td><td style="padding:6px;border:1px solid #ccc;">5</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">5</td><td style="padding:6px;border:1px solid #ccc;"><b>1</b></td><td style="padding:6px;border:1px solid #ccc;">2</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">2</td><td style="padding:6px;border:1px solid #ccc;"><b>0</b></td><td style="padding:6px;border:1px solid #ccc;">1</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">1</td><td style="padding:6px;border:1px solid #ccc;"><b>1</b></td><td style="padding:6px;border:1px solid #ccc;">0</td></tr>'
            + '</table>'
            + '<p>Reste <em>von unten nach oben</em> lesen: <strong>10101</strong>.</p>'
        },
        {
          label: 'Schritt 3 – Nachkomma: mit 2 multiplizieren, Vorkomma notieren',
          html:
            '<table style="border-collapse:collapse;margin:8px 0;font-family:monospace;">'
            + '<tr style="background:#f0f0f0"><th style="padding:6px;border:1px solid #ccc;">n</th><th style="padding:6px;border:1px solid #ccc;">n·2</th><th style="padding:6px;border:1px solid #ccc;">Vorkomma</th><th style="padding:6px;border:1px solid #ccc;">Rest</th></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">0,75</td><td style="padding:6px;border:1px solid #ccc;">1,5</td><td style="padding:6px;border:1px solid #ccc;"><b>1</b></td><td style="padding:6px;border:1px solid #ccc;">0,5</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">0,5</td><td style="padding:6px;border:1px solid #ccc;">1,0</td><td style="padding:6px;border:1px solid #ccc;"><b>1</b></td><td style="padding:6px;border:1px solid #ccc;">0</td></tr>'
            + '</table>'
            + '<p>Rest = 0 → Schluss. <em>Von oben nach unten</em> lesen: <strong>0,11</strong>.</p>'
        },
        {
          label: 'Schritt 4 – Zusammensetzen',
          html:
            '<p style="font-size:1.1em;"><strong>21,75<sub>10</sub> = 10101,11<sub>2</sub></strong></p>'
            + '<p>Probe: 16 + 4 + 1 + 0,5 + 0,25 = 21,75 ✓</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist 101011<sub>2</sub> in Dezimal?',
        options: ['41', '42', '43', '51'],
        correct: 2,
        explanation: '32 + 8 + 2 + 1 = 43.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist 0,101<sub>2</sub> in Dezimal?',
        options: ['0,101', '0,125', '0,5', '0,625'],
        correct: 3,
        explanation: '½ + 0 + ⅛ = 0,625.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie lautet 26<sub>10</sub> als Binärzahl?',
        options: ['10110', '11010', '11100', '10011'],
        correct: 1,
        explanation: '26 = 16 + 8 + 2 = 2⁴ + 2³ + 2¹ → 11010<sub>2</sub>.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie lautet 0,375<sub>10</sub> als Binärzahl?',
        options: ['0,011', '0,101', '0,111', '0,0101'],
        correct: 0,
        explanation: '0,375·2 = 0,75 (V 0), 0,75·2 = 1,5 (V 1), 0,5·2 = 1,0 (V 1) → 0,011. Probe: ¼ + ⅛ = 0,375 ✓'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Was ist 100101,011<sub>2</sub> in Dezimal?',
        options: ['37,375', '37,625', '45,375', '45,625'],
        correct: 0,
        explanation: '32+4+1 = 37 (Vorkomma) + ¼ + ⅛ = 0,375. Ergebnis: 37,375.'
      }
    ]
  },

  // ===== LEKTION 24: Oktal ↔ Binär =====
  {
    id: 24,
    title: 'Oktal ↔ Binär umrechnen',
    explanation: {
      html:
        '<h2>Oktal ↔ Binär umrechnen</h2>'
        + '<p>Bei Oktal (Basis 8) gibt es einen <strong>Blitz-Trick</strong>: Jede Oktalziffer = genau 3 Binärstellen. Keine Rechnung nötig – nur Tabelle merken.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Kurzschrift:</strong> Oktal ist wie eine Kurzschrift für Binär. Statt <code>101 110 011</code> schreibst du <code>563</code>. Identische Information, aber viel kürzer. So wie "lg" statt "liebe Grüße".'
        + '</div>'
        + '<h3>Warum 3 Bits pro Ziffer?</h3>'
        + '<p>Weil 2³ = 8. Mit 3 Bits kannst du genau die 8 Oktalziffern (0–7) darstellen.</p>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Oktal</th><th style="padding:6px;border:1px solid #ccc;">Binär</th><th style="padding:6px;border:1px solid #ccc;">Oktal</th><th style="padding:6px;border:1px solid #ccc;">Binär</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>0</b></td><td style="padding:6px;border:1px solid #ccc;">000</td><td style="padding:6px;border:1px solid #ccc;"><b>4</b></td><td style="padding:6px;border:1px solid #ccc;">100</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>1</b></td><td style="padding:6px;border:1px solid #ccc;">001</td><td style="padding:6px;border:1px solid #ccc;"><b>5</b></td><td style="padding:6px;border:1px solid #ccc;">101</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>2</b></td><td style="padding:6px;border:1px solid #ccc;">010</td><td style="padding:6px;border:1px solid #ccc;"><b>6</b></td><td style="padding:6px;border:1px solid #ccc;">110</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>3</b></td><td style="padding:6px;border:1px solid #ccc;">011</td><td style="padding:6px;border:1px solid #ccc;"><b>7</b></td><td style="padding:6px;border:1px solid #ccc;">111</td></tr>'
        + '</table>'
        + '<div class="reading-guide">'
        + '<strong>Der Trick:</strong>'
        + '<ul>'
        + '<li><strong>Oktal → Binär:</strong> Jede Ziffer einzeln in 3 Bits umschreiben</li>'
        + '<li><strong>Binär → Oktal:</strong> Binär von <em>rechts</em> in Dreiergruppen teilen, jede Gruppe → Ziffer</li>'
        + '</ul>'
        + '</div>'
        + '<div class="warning-box">'
        + '<strong>Achtung:</strong> Gruppiere immer vom Komma aus! Vorkomma nach links, Nachkomma nach rechts. Fehlende Stellen mit 0 auffüllen.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Oktal wird heute weniger genutzt als früher, aber du begegnest ihm immer noch: bei Dateirechten unter Linux (<code>chmod 755</code>) oder bei Speicheradressen in alten Systemen. Wichtiger für dich: Der <em>Gruppierungs-Trick</em> ist identisch bei Hexadezimal (nächste Lektion) – nur mit 4 statt 3 Bits pro Gruppe. Wer Oktal beherrscht, bekommt Hex fast geschenkt. In der Klausur: meist 3 Punkte.'
        + '</div>',
      visuals: [
        {
          type: 'bit-layout',
          bits: '010011100101',
          groups: [
            { start: 0, length: 3, color: '#DBEAFE', label: '010 = 2' },
            { start: 3, length: 3, color: '#FEF3C7', label: '011 = 3' },
            { start: 6, length: 3, color: '#D1FAE5', label: '100 = 4' },
            { start: 9, length: 3, color: '#FEE2E2', label: '101 = 5' }
          ],
          label: '2345₈ = 010 011 100 101₂ – jede Oktalziffer wird zu genau 3 Bits'
        }
      ]
    },
    example: {
      title: 'Beispiel: Beide Richtungen',
      steps: [
        {
          label: 'Beispiel 1 – Oktal → Binär: 2345₈',
          html:
            '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + '  2      3      4      5\n'
            + '  ↓      ↓      ↓      ↓\n'
            + ' 010    011    100    101</pre>'
            + '<p>Ergebnis: <code>10 011 100 101<sub>2</sub></code> (führende 0 kann weg).</p>'
        },
        {
          label: 'Beispiel 2 – Binär → Oktal',
          html:
            '<p>Zahl: 101 100 011 111 110 001 000<sub>2</sub></p>'
            + '<p>Von rechts in Dreiergruppen (sind schon gruppiert):</p>'
            + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + '101 100 011 111 110 001 000\n'
            + ' 5   4   3   7   6   1   0</pre>'
            + '<p>Ergebnis: <code>5437610<sub>8</sub></code></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie lautet 001110100011101010111<sub>2</sub> in Oktal?',
        options: ['16435127', '1643527', '1643527<sub>8</sub>', '16435278'],
        correct: 2,
        explanation: 'In Dreiergruppen (von rechts): 001 110 100 011 101 010 111 → 1 6 4 3 5 2 7.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie lautet 4501738<sub>8</sub> in Binär?',
        options: [
          '100 101 000 001 111 011 000<sub>2</sub>',
          'Existiert nicht – Oktal hat keine Ziffer 8',
          '100 101 000 001 111 101 000<sub>2</sub>',
          '100 101 000 001 111 011<sub>2</sub>'
        ],
        correct: 1,
        explanation: 'Falle! Oktal nutzt nur 0–7. Die Ziffer 8 kommt darin nicht vor. Die Zahl ist ungültig.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie lautet 570231<sub>8</sub> in Binär?',
        options: [
          '101 111 000 010 011 001<sub>2</sub>',
          '101 110 000 010 011 001<sub>2</sub>',
          '101 111 000 010 011 010<sub>2</sub>',
          '111 111 000 010 011 001<sub>2</sub>'
        ],
        correct: 0,
        explanation: '5=101, 7=111, 0=000, 2=010, 3=011, 1=001.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum genau 3 Bits pro Oktalziffer?',
        options: [
          'Weil 8 = 3·3 ist.',
          'Weil 2³ = 8 – genug für 8 verschiedene Werte.',
          'Reine Konvention.',
          'Weil das Oktalsystem nur 3-stellig ist.'
        ],
        correct: 1,
        explanation: 'Mit 3 Bits → 2³ = 8 Kombinationen. Genau passend für 0–7.'
      }
    ]
  },

  // ===== LEKTION 25: Hexadezimal ↔ Binär =====
  {
    id: 25,
    title: 'Hexadezimal ↔ Binär (RGB-Farben)',
    explanation: {
      html:
        '<h2>Hexadezimal ↔ Binär (RGB-Farben)</h2>'
        + '<p>Bei Hex funktioniert der Trick aus der letzten Lektion noch besser: <strong>Jede Hex-Ziffer = 4 Binärstellen</strong>.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Farb-Code:</strong> Webseiten schreiben Farben in Hex, zum Beispiel <code>#FF0000</code> für rot. 6 Zeichen statt 24 Bits – viel kürzer, aber genau dieselbe Information. Hex ist die Standard-Kurzschrift für alles, was in Vierergruppen läuft (Farben, MAC-Adressen, Hashes …).'
        + '</div>'
        + '<h3>Die 16 Ziffern</h3>'
        + '<p>0–9 wie üblich. Für 10–15 gibt es Buchstaben A–F:</p>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;">'
        + '<tr style="background:#eff6ff"><th style="padding:5px;border:1px solid #ccc;">Dez</th><th style="padding:5px;border:1px solid #ccc;">Hex</th><th style="padding:5px;border:1px solid #ccc;">Binär</th><th style="padding:5px;border:1px solid #ccc;">Dez</th><th style="padding:5px;border:1px solid #ccc;">Hex</th><th style="padding:5px;border:1px solid #ccc;">Binär</th></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">0</td><td style="padding:5px;border:1px solid #ccc;"><b>0</b></td><td style="padding:5px;border:1px solid #ccc;">0000</td><td style="padding:5px;border:1px solid #ccc;">8</td><td style="padding:5px;border:1px solid #ccc;"><b>8</b></td><td style="padding:5px;border:1px solid #ccc;">1000</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">1</td><td style="padding:5px;border:1px solid #ccc;"><b>1</b></td><td style="padding:5px;border:1px solid #ccc;">0001</td><td style="padding:5px;border:1px solid #ccc;">9</td><td style="padding:5px;border:1px solid #ccc;"><b>9</b></td><td style="padding:5px;border:1px solid #ccc;">1001</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">2</td><td style="padding:5px;border:1px solid #ccc;"><b>2</b></td><td style="padding:5px;border:1px solid #ccc;">0010</td><td style="padding:5px;border:1px solid #ccc;">10</td><td style="padding:5px;border:1px solid #ccc;"><b>A</b></td><td style="padding:5px;border:1px solid #ccc;">1010</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">3</td><td style="padding:5px;border:1px solid #ccc;"><b>3</b></td><td style="padding:5px;border:1px solid #ccc;">0011</td><td style="padding:5px;border:1px solid #ccc;">11</td><td style="padding:5px;border:1px solid #ccc;"><b>B</b></td><td style="padding:5px;border:1px solid #ccc;">1011</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">4</td><td style="padding:5px;border:1px solid #ccc;"><b>4</b></td><td style="padding:5px;border:1px solid #ccc;">0100</td><td style="padding:5px;border:1px solid #ccc;">12</td><td style="padding:5px;border:1px solid #ccc;"><b>C</b></td><td style="padding:5px;border:1px solid #ccc;">1100</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">5</td><td style="padding:5px;border:1px solid #ccc;"><b>5</b></td><td style="padding:5px;border:1px solid #ccc;">0101</td><td style="padding:5px;border:1px solid #ccc;">13</td><td style="padding:5px;border:1px solid #ccc;"><b>D</b></td><td style="padding:5px;border:1px solid #ccc;">1101</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">6</td><td style="padding:5px;border:1px solid #ccc;"><b>6</b></td><td style="padding:5px;border:1px solid #ccc;">0110</td><td style="padding:5px;border:1px solid #ccc;">14</td><td style="padding:5px;border:1px solid #ccc;"><b>E</b></td><td style="padding:5px;border:1px solid #ccc;">1110</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">7</td><td style="padding:5px;border:1px solid #ccc;"><b>7</b></td><td style="padding:5px;border:1px solid #ccc;">0111</td><td style="padding:5px;border:1px solid #ccc;">15</td><td style="padding:5px;border:1px solid #ccc;"><b>F</b></td><td style="padding:5px;border:1px solid #ccc;">1111</td></tr>'
        + '</table>'
        + '<div class="tip-box">'
        + '<strong>Auswendig lernen!</strong> Mit dieser Tabelle im Kopf lösen sich Hex-Aufgaben in Sekunden.'
        + '</div>'
        + '<h3>Farben im Web</h3>'
        + '<p>Web-Farben haben das Format <code>#RRGGBB</code> – je 2 Hex-Ziffern für Rot, Grün, Blau (0–255):</p>'
        + '<div style="display:flex;gap:10px;flex-wrap:wrap;padding:10px;">'
        + '<div style="background:#FF0000;color:white;padding:8px 14px;border-radius:4px;">#FF0000 Rot</div>'
        + '<div style="background:#00FF00;color:black;padding:8px 14px;border-radius:4px;">#00FF00 Grün</div>'
        + '<div style="background:#0000FF;color:white;padding:8px 14px;border-radius:4px;">#0000FF Blau</div>'
        + '<div style="background:#FFFF00;color:black;padding:8px 14px;border-radius:4px;">#FFFF00 Gelb</div>'
        + '<div style="background:#FFFFFF;color:black;padding:8px 14px;border-radius:4px;border:1px solid #ccc;">#FFFFFF Weiß</div>'
        + '</div>'
        + '<p>FF = 255 (Maximum), 00 = 0 (Minimum). Jede Farbe hat 3 Werte von 0–255 → 256³ ≈ 16,7 Millionen Farben sind möglich.</p>'
        + '<h3>Bonus-Trick: gerade oder ungerade?</h3>'
        + '<p>An einer Binärzahl erkennt man auf einen Blick, ob sie gerade oder ungerade ist – man muss sie <em>gar nicht umrechnen</em>:</p>'
        + '<ul>'
        + '<li>Endet auf <strong>0</strong> → <strong>gerade</strong> (z. B. 1010<sub>2</sub> = 10, 0110<sub>2</sub> = 6)</li>'
        + '<li>Endet auf <strong>1</strong> → <strong>ungerade</strong> (z. B. 1011<sub>2</sub> = 11, 0111<sub>2</sub> = 7)</li>'
        + '</ul>'
        + '<p>Warum? Die letzte Binärstelle hat den Wert 2<sup>0</sup> = 1. Alle anderen Stellen haben Werte 2, 4, 8, 16 … – die sind <em>alle</em> gerade. Also entscheidet allein das letzte Bit, ob die Gesamtsumme gerade oder ungerade ist.</p>'
        + '<div class="tip-box">'
        + '<strong>Klausur-Tipp:</strong> Fragt die Klausur "Ist 101011<sub>2</sub> gerade?", musst du nicht in Dezimal umrechnen. Letztes Bit ist <strong>1</strong> → ungerade. Fertig.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> Hex ist <em>überall</em>: Web-Farben (<code>#2563EB</code>), MAC-Adressen (<code>AA:BB:CC:DD:EE:FF</code>), Speicher-Adressen, Git-Commit-IDs, Fehler-Codes (<code>0x80070005</code>). Wenn du irgendwann mal eine Webseite gestaltest oder eine Fehlermeldung liest, brauchst du Hex. Und in der Klausur ist Hex zuverlässig für 4 Punkte drin – mit der Tabelle im Kopf rechnest du in Sekunden.'
        + '</div>',
      visuals: [
        {
          type: 'bit-layout',
          bits: '001001010110001111101011',
          groups: [
            { start: 0, length: 8, color: '#FEE2E2', label: 'R = 0x25 = 37' },
            { start: 8, length: 8, color: '#D1FAE5', label: 'G = 0x63 = 99' },
            { start: 16, length: 8, color: '#DBEAFE', label: 'B = 0xEB = 235' }
          ],
          label: 'Web-Farbe #2563EB zerlegt in 24 Bit – je 8 Bit für Rot/Grün/Blau'
        }
      ]
    },
    example: {
      title: 'Beispiel: Beide Richtungen',
      steps: [
        {
          label: 'Binär → Hex: 0111 0101 1110 1011₂',
          html:
            '<p>In Vierergruppen (sind schon gruppiert, sonst von rechts gruppieren):</p>'
            + '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + '0111   0101   1110   1011\n'
            + '  7      5      E      B</pre>'
            + '<p>Ergebnis: <code>75EB<sub>16</sub></code></p>'
        },
        {
          label: 'Hex → Binär: ABC₁₆',
          html:
            '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + '  A      B      C\n'
            + '1010   1011   1100</pre>'
            + '<p>Ergebnis: <code>1010 1011 1100<sub>2</sub></code></p>'
        },
        {
          label: 'Farbe #2563EB zerlegen',
          html:
            '<p>Das ist die Akzentfarbe dieses Lernprogramms:</p>'
            + '<ul>'
            + '<li>Rot: 25<sub>16</sub> = 2·16 + 5 = 37</li>'
            + '<li>Grün: 63<sub>16</sub> = 6·16 + 3 = 99</li>'
            + '<li>Blau: EB<sub>16</sub> = 14·16 + 11 = 235</li>'
            + '</ul>'
            + '<p><span style="background:#2563EB;color:white;padding:4px 10px;border-radius:4px;">rgb(37, 99, 235)</span> – wenig Rot, mittel Grün, viel Blau.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie lautet 0100 1111 1010 0011<sub>2</sub> in Hex?',
        options: ['4FA3', '4EA3', '5FA3', '4FB3'],
        correct: 0,
        explanation: '0100=4, 1111=F, 1010=A, 0011=3.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie lautet BDE<sub>16</sub> in Binär?',
        options: [
          '1011 1101 1110<sub>2</sub>',
          '1011 1011 1110<sub>2</sub>',
          '1101 1101 1110<sub>2</sub>',
          '1011 1111 1110<sub>2</sub>'
        ],
        correct: 0,
        explanation: 'B=1011, D=1101, E=1110.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie viele Bits brauchst du für die Hex-Ziffer F?',
        options: ['3', '4', '8', '16'],
        correct: 1,
        explanation: 'F = 15 = 1111<sub>2</sub> – 4 Bits. Das gilt für jede Hex-Ziffer (2⁴=16).'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Farbe ist #FFFF00?',
        options: ['Rot', 'Grün', 'Gelb', 'Orange'],
        correct: 2,
        explanation: 'FF Rot + FF Grün + 00 Blau = Gelb (additiv).'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Hex-Farbe ist ein mittleres Grau?',
        options: ['#FFFFFF', '#808080', '#000000', '#8F0000'],
        correct: 1,
        explanation: '#808080 = R:128, G:128, B:128 – alle gleich, mittig → Grau.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Ist <code>101011<sub>2</sub></code> gerade oder ungerade? (ohne umzurechnen!)',
        options: ['gerade', 'ungerade'],
        correct: 1,
        explanation: 'Letztes Bit = 1 → ungerade. (Probe: 101011<sub>2</sub> = 32+8+2+1 = 43, tatsächlich ungerade.)'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Welche der folgenden Binärzahlen ist <strong>gerade</strong>?',
        options: [
          '1111 0001<sub>2</sub>',
          '1010 1011<sub>2</sub>',
          '0011 1100<sub>2</sub>',
          '0000 0111<sub>2</sub>'
        ],
        correct: 2,
        explanation: 'Gerade = letztes Bit 0. Nur <code>0011 1100</code> endet auf 0. (Wert: 60, gerade.)'
      }
    ]
  },

  // ===== LEKTION 26: BCD =====
  {
    id: 26,
    title: 'BCD – Binary Coded Decimal',
    explanation: {
      html:
        '<h2>BCD – Binary Coded Decimal</h2>'
        + '<p>BCD ist ein <strong>anderer Weg</strong>, eine Dezimalzahl binär zu speichern. Statt die ganze Zahl in Binär umzuwandeln, wird <em>jede Ziffer einzeln</em> durch 4 Bits codiert.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie – Digitaluhr:</strong> Eine Digitaluhr zeigt 23:59. Intern speichert sie nicht die Zahl 2359 als eine Binärzahl, sondern jede Ziffer einzeln: <code>0010 0011 0101 1001</code>. So kann die Anzeige direkt jede Ziffer auf ihrem Segment anzeigen, ohne umzurechnen. Das ist BCD.'
        + '</div>'
        + '<h3>Das Prinzip</h3>'
        + '<p>Jede Ziffer 0–9 bekommt einen festen 4-Bit-Code:</p>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;">'
        + '<tr style="background:#eff6ff"><th style="padding:5px;border:1px solid #ccc;">Dez</th><th style="padding:5px;border:1px solid #ccc;">BCD</th><th style="padding:5px;border:1px solid #ccc;">Dez</th><th style="padding:5px;border:1px solid #ccc;">BCD</th></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">0</td><td style="padding:5px;border:1px solid #ccc;">0000</td><td style="padding:5px;border:1px solid #ccc;">5</td><td style="padding:5px;border:1px solid #ccc;">0101</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">1</td><td style="padding:5px;border:1px solid #ccc;">0001</td><td style="padding:5px;border:1px solid #ccc;">6</td><td style="padding:5px;border:1px solid #ccc;">0110</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">2</td><td style="padding:5px;border:1px solid #ccc;">0010</td><td style="padding:5px;border:1px solid #ccc;">7</td><td style="padding:5px;border:1px solid #ccc;">0111</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">3</td><td style="padding:5px;border:1px solid #ccc;">0011</td><td style="padding:5px;border:1px solid #ccc;">8</td><td style="padding:5px;border:1px solid #ccc;">1000</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">4</td><td style="padding:5px;border:1px solid #ccc;">0100</td><td style="padding:5px;border:1px solid #ccc;">9</td><td style="padding:5px;border:1px solid #ccc;">1001</td></tr>'
        + '</table>'
        + '<div class="warning-box">'
        + '<strong>Wichtig:</strong> BCD und normale Binärdarstellung sind <em>nicht dasselbe</em>!'
        + '<pre style="font-family:monospace;margin:6px 0;">'
        + 'Dezimal:  13\n'
        + 'Binär:    0000 1101\n'
        + 'BCD:      0001 0011  (1 und 3 einzeln!)</pre>'
        + '</div>'
        + '<h3>Vor- und Nachteile</h3>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">'
        + '<div class="tip-box"><strong>+</strong> Jede Dezimalziffer exakt dargestellt. Keine Rundungsfehler. Einfache Anzeige.</div>'
        + '<div class="warning-box"><strong>–</strong> Speicherverschwendung: Die 4-Bit-Codes 1010–1111 (das wären 10–15) sind ungenutzt.</div>'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> BCD wird überall dort genutzt, wo Ziffern <em>einzeln sichtbar</em> sein müssen: Digital-Anzeigen (Waagen, Uhren, Taschenrechner) oder wo <em>exakte Dezimaldarstellung</em> zählt – zum Beispiel in der Finanzbranche. 0,10 € muss exakt 0,10 € bleiben, keine Rundungsfehler wie bei Gleitkomma! In der Klausur meist eine kurze 1-Punkt-Aufgabe: schnell erledigt, wenn du das Prinzip verstehst.'
        + '</div>',
      visuals: [
        {
          type: 'bit-layout',
          bits: '0010001101011001',
          groups: [
            { start: 0, length: 4, color: '#DBEAFE', label: '0010 = 2' },
            { start: 4, length: 4, color: '#FEF3C7', label: '0011 = 3' },
            { start: 8, length: 4, color: '#D1FAE5', label: '0101 = 5' },
            { start: 12, length: 4, color: '#FEE2E2', label: '1001 = 9' }
          ],
          label: 'Uhrzeit 23:59 in BCD – jede Dezimalziffer belegt genau 4 Bits'
        }
      ]
    },
    example: {
      title: 'Beispiel: 291,42₁₀ als BCD',
      steps: [
        {
          label: 'Jede Ziffer einzeln',
          html:
            '<pre style="background:#f3f4f6;padding:10px;font-family:monospace;">'
            + '  2      9      1   ,   4      2\n'
            + '  ↓      ↓      ↓       ↓      ↓\n'
            + '0010   1001   0001  , 0100   0010</pre>'
        },
        {
          label: 'Zusammensetzen',
          html:
            '<p><code>291,42<sub>10</sub> = 0010 1001 0001, 0100 0010<sub>BCD</sub></code></p>'
            + '<p>Das Komma bleibt an derselben Stelle wie in der Dezimalzahl.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie lautet 562,79<sub>10</sub> in BCD?',
        options: [
          '0101 0110 0010, 0111 1001',
          '0101 0100 0010, 0111 1001',
          '0110 0110 0010, 0111 1001',
          '0101 0110 0010, 1000 1001'
        ],
        correct: 0,
        explanation: '5=0101, 6=0110, 2=0010, 7=0111, 9=1001.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Aussage ist FALSCH?',
        options: [
          'Jede Dezimalziffer wird mit 4 Bits codiert.',
          'BCD ist identisch mit der Binärdarstellung.',
          'Die 4-Bit-Codes 1010–1111 sind ungenutzt.',
          'BCD braucht mehr Speicher als Binär.'
        ],
        correct: 1,
        explanation: 'BCD ≠ Binär! 13 als Binär = 1101, als BCD = 0001 0011.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum sind 6 Codes (1010–1111) in BCD ungenutzt?',
        options: [
          'Es gibt nur 10 Dezimalziffern (0–9) – die anderen 6 Codes bleiben frei.',
          'Sie sind für Vorzeichen reserviert.',
          'BCD kann nur positive Zahlen.',
          'Fehler in der Definition.'
        ],
        correct: 0,
        explanation: '4 Bits → 16 Muster. 10 Ziffern → 6 übrig. Das ist BCDs Speicher-Nachteil.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist 0001 0111<sub>BCD</sub> in Dezimal?',
        options: ['17', '23', '10111', '71'],
        correct: 0,
        explanation: '0001=1, 0111=7 → 17. Nicht verwechseln mit Binär (0001 0111<sub>2</sub> = 23).'
      }
    ]
  }

];
