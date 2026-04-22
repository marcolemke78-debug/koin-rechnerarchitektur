const LessonsA1 = [

  // ===== LEKTION 22: Stellenwertsysteme verstehen =====
  {
    id: 22,
    title: 'Stellenwertsysteme verstehen',
    explanation: {
      html:
        '<h2>Stellenwertsysteme verstehen</h2>'
        + '<p>Jedes Zahlensystem, das wir kennen, ist ein <strong>Stellenwertsystem</strong> – jede Ziffer hat einen Wert, der von ihrer <em>Position</em> abhängt.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Denk an Geldscheine. Ein 100€-Schein ist nicht 10× wertvoller als eine 10€-Münze, sondern genau <strong>100×</strong> wertvoller als ein 1€-Stück. Genauso funktioniert ein Zahlensystem: Jede Stelle hat einen fest definierten Wert, und die Ziffer sagt nur, <em>wie oft</em> dieser Wert in die Zahl einfließt. Im Dezimalsystem gehen die Werte in 10er-Schritten (1, 10, 100, 1000 …), im Binärsystem in 2er-Schritten (1, 2, 4, 8, 16 …).'
        + '</div>'
        + '<h3>Die Formel</h3>'
        + '<p>Eine Zahl zur Basis <em>b</em> setzt sich aus Ziffern an verschiedenen Stellen zusammen:</p>'
        + '<div class="info-card" style="font-family:monospace;padding:12px;background:#f9fafb;border-radius:6px;text-align:center;">'
        + 'Wert = z<sub>k</sub>·b<sup>k</sup> + … + z<sub>2</sub>·b² + z<sub>1</sub>·b¹ + z<sub>0</sub>·b⁰ + z<sub>-1</sub>·b⁻¹ + z<sub>-2</sub>·b⁻² + …'
        + '</div>'
        + '<h3>Übersichtstabelle</h3>'
        + '<table class="icon-table" style="width:100%;border-collapse:collapse;margin:8px 0;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">System</th><th style="padding:6px;border:1px solid #ccc;">Basis b</th><th style="padding:6px;border:1px solid #ccc;">Ziffern</th><th style="padding:6px;border:1px solid #ccc;">Beispiel-Stellenwert</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Dezimal</td><td style="padding:6px;border:1px solid #ccc;">10</td><td style="padding:6px;border:1px solid #ccc;">0–9</td><td style="padding:6px;border:1px solid #ccc;">10² = 100</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Binär</td><td style="padding:6px;border:1px solid #ccc;">2</td><td style="padding:6px;border:1px solid #ccc;">0, 1</td><td style="padding:6px;border:1px solid #ccc;">2² = 4</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Oktal</td><td style="padding:6px;border:1px solid #ccc;">8</td><td style="padding:6px;border:1px solid #ccc;">0–7</td><td style="padding:6px;border:1px solid #ccc;">8² = 64</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;">Hexadezimal</td><td style="padding:6px;border:1px solid #ccc;">16</td><td style="padding:6px;border:1px solid #ccc;">0–9, A–F</td><td style="padding:6px;border:1px solid #ccc;">16² = 256</td></tr>'
        + '</table>'
        + '<div class="tip-box">'
        + '<strong>Subskript beachten:</strong> <code>101<sub>2</sub></code> ist etwas anderes als <code>101<sub>10</sub></code>. Das Subskript sagt, in welchem System die Zahl geschrieben ist. In der Klausur immer mit angeben!'
        + '</div>'
        + '<h3>Nachkommastellen</h3>'
        + '<p>Auch nach dem Komma gilt das Prinzip – nur mit negativen Exponenten:</p>'
        + '<div class="info-card" style="font-family:monospace;padding:10px;background:#f9fafb;border-radius:6px;">'
        + '0,5<sub>10</sub> = 5·10⁻¹ = 0,5<br>'
        + '0,1<sub>2</sub> = 1·2⁻¹ = 0,5<sub>10</sub><br>'
        + '0,01<sub>2</sub> = 1·2⁻² = 0,25<sub>10</sub>'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Das ist die Grundlage für <em>alles</em>, was Computer tun. Intern speichert ein Rechner nur 0 und 1 – Binärzahlen. Jede Umrechnung (Farbe als Hex, Zeichen als Byte, Zahl als ZK …) beruht auf diesem einen Prinzip. Wer die Formel versteht, kann alle folgenden Lektionen mit System angehen statt auswendig lernen.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: 1011,01₂ in Dezimal umrechnen',
      steps: [
        {
          label: 'Schritt 1 – Stellen identifizieren',
          html:
            '<p>Wir schreiben die Zahl <code>1011,01<sub>2</sub></code> mit ihren Stellenwerten auf. Vorkommastellen werden von rechts durchnummeriert (2⁰, 2¹, 2², 2³), Nachkommastellen von links (2⁻¹, 2⁻²):</p>'
            + '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;">'
            + '  1    0    1    1  ,  0    1\n'
            + ' 2³   2²   2¹   2⁰    2⁻¹  2⁻²\n'
            + '  8    4    2    1   0,5  0,25'
            + '</pre>'
        },
        {
          label: 'Schritt 2 – Stellenwerte aufsummieren',
          html:
            '<p>Jede <strong>1</strong> zählt ihren Stellenwert, jede <strong>0</strong> zählt nichts:</p>'
            + '<p style="font-family:monospace;background:#f9fafb;padding:10px;">'
            + '1·8 + 0·4 + 1·2 + 1·1 + 0·0,5 + 1·0,25<br>'
            + '= 8 + 0 + 2 + 1 + 0 + 0,25<br>'
            + '= <strong>11,25<sub>10</sub></strong>'
            + '</p>'
        },
        {
          label: 'Schritt 3 – Klausurformat dokumentieren',
          html:
            '<p>In der Klausur <strong>immer</strong> die Summe als Rechenweg hinschreiben:</p>'
            + '<p style="font-family:monospace;">'
            + '1011,01<sub>2</sub> = 1·2³ + 0·2² + 1·2¹ + 1·2⁰ + 0·2⁻¹ + 1·2⁻²<br>'
            + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 8 + 2 + 1 + 0,25 = 11,25<sub>10</sub>'
            + '</p>'
            + '<p>Nur das Endergebnis reicht in der Klausur nicht – der Rechenweg ist Teil der Punkte!</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welchen Stellenwert hat die Ziffer an der Position 2⁵ im Binärsystem?',
        options: ['10', '16', '32', '64'],
        correct: 2,
        explanation: '2⁵ = 2·2·2·2·2 = 32. Merke: Die Zweierpotenzen bis 2¹⁰ = 1024 solltest du auswendig können.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Aussage über Stellenwertsysteme ist korrekt?',
        options: [
          'Im Binärsystem gibt es die Ziffern 0 bis 2.',
          'Im Hexadezimalsystem werden für 10–15 die Buchstaben A–F verwendet.',
          'Oktalzahlen haben die Basis 10.',
          'Nachkommastellen gibt es nur im Dezimalsystem.'
        ],
        correct: 1,
        explanation: 'Hexadezimal nutzt 0–9 und A–F (A=10, B=11, …, F=15). Binär hat nur 0 und 1 (nicht 2!), Oktal hat Basis 8, und Nachkommastellen gibt es in allen Stellenwertsystemen.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist der Dezimalwert von 100<sub>2</sub>?',
        options: ['2', '3', '4', '100'],
        correct: 2,
        explanation: '100<sub>2</sub> = 1·2² + 0·2¹ + 0·2⁰ = 4 + 0 + 0 = 4. Die führende 1 steht an der Position mit Wert 2² = 4.'
      },
      {
        type: 'multiple-choice',
        question: 'Welchen Wert hat die Nachkommastelle 0,1<sub>2</sub> im Dezimalsystem?',
        options: ['0,1', '0,2', '0,25', '0,5'],
        correct: 3,
        explanation: '0,1<sub>2</sub> = 1·2⁻¹ = 1/2 = 0,5. Die erste Nachkommastelle im Binärsystem entspricht dem Wert ½, die zweite ¼, die dritte ⅛ usw.'
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
        + '<p>Umrechnungen in <em>beide Richtungen</em> gehören zu den häufigsten Klausuraufgaben. Es gibt für jede Richtung ein festes Verfahren – einmal verstanden, nie mehr vergessen.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Eine Dezimalzahl in Binär umzurechnen ist wie Geld in kleine Münzen zu wechseln – du gibst immer die größte passende Münze und rechnest den Rest weiter runter. Der Trick: Die "Münzen" sind nicht 1€, 2€, 5€, sondern Zweierpotenzen (1, 2, 4, 8, 16, 32, 64, 128 …).'
        + '</div>'
        + '<h3>Richtung 1: Binär → Dezimal (einfach)</h3>'
        + '<p>Stellenwerte aufschreiben, bei jeder 1 addieren – das ist genau das Verfahren aus Lektion 22. Nachkommastellen nicht vergessen!</p>'
        + '<h3>Richtung 2: Dezimal → Binär (Algorithmus)</h3>'
        + '<p>Für Dezimalzahl <em>n</em> ≥ 0 gibt es einen festen Algorithmus (aus der Vorlesung):</p>'
        + '<div class="info-card" style="padding:12px;background:#f3f4f6;border-radius:6px;">'
        + '<strong>Algorithmus:</strong>'
        + '<ol style="margin:8px 0 0 20px;">'
        + '<li>k := 0</li>'
        + '<li>x<sub>k</sub> := n mod 2 (Rest bei Teilung durch 2)</li>'
        + '<li>n := ⌊n / 2⌋ (ganzzahlige Division durch 2)</li>'
        + '<li>k := k + 1</li>'
        + '<li>Falls n &gt; 0: zurück zu Schritt 2</li>'
        + '<li>Ausgabe: x<sub>k-1</sub> … x<sub>1</sub> x<sub>0</sub> (Reihenfolge von links nach rechts!)</li>'
        + '</ol>'
        + '</div>'
        + '<h3>Nachkommastellen Dezimal → Binär</h3>'
        + '<p>Für den Nachkomma-Anteil <em>n</em> (0 ≤ n &lt; 1) gibt es einen eigenen Algorithmus:</p>'
        + '<div class="info-card" style="padding:12px;background:#f3f4f6;border-radius:6px;">'
        + '<ol style="margin:8px 0 0 20px;">'
        + '<li>k := -1</li>'
        + '<li>x<sub>k</sub> := ⌊n · 2⌋ (Vorkomma von n·2)</li>'
        + '<li>n := n · 2 - x<sub>k</sub> (nur Nachkomma behalten)</li>'
        + '<li>k := k - 1</li>'
        + '<li>Falls n &gt; 0: zurück zu Schritt 2</li>'
        + '<li>Ausgabe: 0, x<sub>-1</sub> x<sub>-2</sub> x<sub>-3</sub> …</li>'
        + '</ol>'
        + '</div>'
        + '<div class="warning-box">'
        + '<strong>Achtung:</strong> Nicht jede Dezimalzahl lässt sich endlich binär darstellen. <code>0,1<sub>10</sub></code> wird z.B. zur periodischen Binärzahl <code>0,0001100110011…<sub>2</sub></code>. In der Klausur wird dir keine solche Zahl gegeben – aber gut zu wissen.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Ein Computer kennt nur Binär. Jede Eingabe (Tastatur, Datei, Netzwerk) muss in Binär übersetzt werden – und umgekehrt für die Anzeige. Wenn du ein Programm schreibst, das eine Zahl speichert oder eine Farbe darstellt, läuft diese Umrechnung im Hintergrund. Außerdem ist das <em>das</em> typische Klausur-Muster: 6 Punkte auf dem A1-Blatt, oft verdoppelt in der finalen Klausur.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: 21,75₁₀ → Binär',
      steps: [
        {
          label: 'Schritt 1 – Zahl aufteilen',
          html:
            '<p>Wir trennen Vor- und Nachkommateil:</p>'
            + '<ul><li>Vorkommateil: 21</li><li>Nachkommateil: 0,75</li></ul>'
            + '<p>Beide werden getrennt umgerechnet und am Ende zusammengesetzt.</p>'
        },
        {
          label: 'Schritt 2 – Vorkomma 21 nach Binär',
          html:
            '<p>Wiederholtes Teilen durch 2, Rest notieren:</p>'
            + '<table style="border-collapse:collapse;margin:8px 0;font-family:monospace;">'
            + '<tr style="background:#f0f0f0"><th style="padding:6px;border:1px solid #ccc;">k</th><th style="padding:6px;border:1px solid #ccc;">n</th><th style="padding:6px;border:1px solid #ccc;">x<sub>k</sub> = n mod 2</th><th style="padding:6px;border:1px solid #ccc;">n := ⌊n/2⌋</th></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">0</td><td style="padding:6px;border:1px solid #ccc;">21</td><td style="padding:6px;border:1px solid #ccc;"><b>1</b></td><td style="padding:6px;border:1px solid #ccc;">10</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">1</td><td style="padding:6px;border:1px solid #ccc;">10</td><td style="padding:6px;border:1px solid #ccc;"><b>0</b></td><td style="padding:6px;border:1px solid #ccc;">5</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">2</td><td style="padding:6px;border:1px solid #ccc;">5</td><td style="padding:6px;border:1px solid #ccc;"><b>1</b></td><td style="padding:6px;border:1px solid #ccc;">2</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">3</td><td style="padding:6px;border:1px solid #ccc;">2</td><td style="padding:6px;border:1px solid #ccc;"><b>0</b></td><td style="padding:6px;border:1px solid #ccc;">1</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">4</td><td style="padding:6px;border:1px solid #ccc;">1</td><td style="padding:6px;border:1px solid #ccc;"><b>1</b></td><td style="padding:6px;border:1px solid #ccc;">0</td></tr>'
            + '</table>'
            + '<p>Rückwärts lesen (von unten nach oben): <code>21<sub>10</sub> = 10101<sub>2</sub></code></p>'
        },
        {
          label: 'Schritt 3 – Nachkomma 0,75 nach Binär',
          html:
            '<p>Wiederholt mit 2 multiplizieren, Vorkomma als Binärziffer notieren:</p>'
            + '<table style="border-collapse:collapse;margin:8px 0;font-family:monospace;">'
            + '<tr style="background:#f0f0f0"><th style="padding:6px;border:1px solid #ccc;">k</th><th style="padding:6px;border:1px solid #ccc;">n</th><th style="padding:6px;border:1px solid #ccc;">n·2</th><th style="padding:6px;border:1px solid #ccc;">x<sub>k</sub> = ⌊n·2⌋</th><th style="padding:6px;border:1px solid #ccc;">n := n·2 - x<sub>k</sub></th></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">-1</td><td style="padding:6px;border:1px solid #ccc;">0,75</td><td style="padding:6px;border:1px solid #ccc;">1,5</td><td style="padding:6px;border:1px solid #ccc;"><b>1</b></td><td style="padding:6px;border:1px solid #ccc;">0,5</td></tr>'
            + '<tr><td style="padding:6px;border:1px solid #ccc;">-2</td><td style="padding:6px;border:1px solid #ccc;">0,5</td><td style="padding:6px;border:1px solid #ccc;">1,0</td><td style="padding:6px;border:1px solid #ccc;"><b>1</b></td><td style="padding:6px;border:1px solid #ccc;">0</td></tr>'
            + '</table>'
            + '<p>n = 0 → Schluss. Lesen von oben nach unten: <code>0,75<sub>10</sub> = 0,11<sub>2</sub></code></p>'
        },
        {
          label: 'Schritt 4 – Zusammensetzen',
          html:
            '<p style="font-size:1.1em;"><strong>21,75<sub>10</sub> = 10101,11<sub>2</sub></strong></p>'
            + '<p>Kontrolle: 16 + 4 + 1 + 0,5 + 0,25 = 21,75 ✓</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie lautet 101011<sub>2</sub> in Dezimal?',
        options: ['41', '42', '43', '51'],
        correct: 2,
        explanation: '1·32 + 0·16 + 1·8 + 0·4 + 1·2 + 1·1 = 32 + 8 + 2 + 1 = 43.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie lautet 0,101<sub>2</sub> in Dezimal?',
        options: ['0,101', '0,125', '0,5', '0,625'],
        correct: 3,
        explanation: '1·½ + 0·¼ + 1·⅛ = 0,5 + 0 + 0,125 = 0,625.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie lautet 26<sub>10</sub> als Binärzahl?',
        options: ['10110', '11010', '11100', '10011'],
        correct: 1,
        explanation: '26 = 16 + 8 + 2 = 2⁴ + 2³ + 2¹ → 11010<sub>2</sub>. Teilen durch 2 ergibt Reste 0,1,0,1,1 (rückwärts lesen).'
      },
      {
        type: 'multiple-choice',
        question: 'Wie lautet 0,375<sub>10</sub> als Binärzahl?',
        options: ['0,011', '0,101', '0,111', '0,0101'],
        correct: 0,
        explanation: '0,375·2 = 0,75 (Vorkomma 0) → 0,75·2 = 1,5 (Vorkomma 1) → 0,5·2 = 1,0 (Vorkomma 1). Ergebnis: 0,011<sub>2</sub>. Probe: ¼ + ⅛ = 0,375 ✓'
      },
      {
        type: 'multiple-choice',
        question: 'Welches Ergebnis ist richtig? 100101,011<sub>2</sub> = ?<sub>10</sub>',
        options: ['37,375', '37,625', '45,375', '45,625'],
        correct: 0,
        explanation: '32+4+1 = 37 (Vorkomma) plus 0·½ + 1·¼ + 1·⅛ = 0,375. Ergebnis: 37,375.'
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
        + '<p>Oktal (Basis 8) hat eine sehr praktische Eigenschaft: Jede Oktalziffer entspricht <strong>genau 3 Binärstellen</strong>. Das macht Umrechnungen blitzschnell – ohne Rechner, ohne Umweg über Dezimal.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Stell dir Oktal wie ein "komprimiertes Binär" vor. Statt 9 einzelner Bits schreibst du nur 3 Oktalziffern – das ist viel kürzer, aber mathematisch identisch. Genauso wie "1,5 kg" und "1500 g" dieselbe Masse in kompakterer bzw. ausführlicherer Schreibweise sind.'
        + '</div>'
        + '<h3>Warum 3 Bits pro Oktalziffer?</h3>'
        + '<p>Die Ziffern 0–7 sind genau die Zahlen, die mit 3 Bits darstellbar sind: 2³ = 8 Möglichkeiten.</p>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;">'
        + '<tr style="background:#eff6ff"><th style="padding:6px;border:1px solid #ccc;">Oktal</th><th style="padding:6px;border:1px solid #ccc;">Binär</th><th style="padding:6px;border:1px solid #ccc;">Oktal</th><th style="padding:6px;border:1px solid #ccc;">Binär</th></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>0</b></td><td style="padding:6px;border:1px solid #ccc;">000</td><td style="padding:6px;border:1px solid #ccc;"><b>4</b></td><td style="padding:6px;border:1px solid #ccc;">100</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>1</b></td><td style="padding:6px;border:1px solid #ccc;">001</td><td style="padding:6px;border:1px solid #ccc;"><b>5</b></td><td style="padding:6px;border:1px solid #ccc;">101</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>2</b></td><td style="padding:6px;border:1px solid #ccc;">010</td><td style="padding:6px;border:1px solid #ccc;"><b>6</b></td><td style="padding:6px;border:1px solid #ccc;">110</td></tr>'
        + '<tr><td style="padding:6px;border:1px solid #ccc;"><b>3</b></td><td style="padding:6px;border:1px solid #ccc;">011</td><td style="padding:6px;border:1px solid #ccc;"><b>7</b></td><td style="padding:6px;border:1px solid #ccc;">111</td></tr>'
        + '</table>'
        + '<div class="tip-box">'
        + '<strong>Tipp:</strong> Lerne diese 8 Paare auswendig! In der Klausur erspart dir das jede Rechnung.'
        + '</div>'
        + '<h3>Der Trick in beide Richtungen</h3>'
        + '<p><strong>Oktal → Binär:</strong> Jede Ziffer einzeln durch ihre 3-Bit-Darstellung ersetzen.</p>'
        + '<p><strong>Binär → Oktal:</strong> Binärzahl von rechts her in <em>Dreiergruppen</em> aufteilen, jede Gruppe in ihre Oktalziffer übersetzen.</p>'
        + '<div class="warning-box">'
        + '<strong>Gruppierung richtig:</strong> Vom <em>Komma aus</em> gruppieren – Vorkomma nach links, Nachkomma nach rechts. Fehlende Stellen am Anfang oder Ende mit 0 auffüllen.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Oktal wurde früher häufig für Speicher-Adressen verwendet, weil drei Bits gut in die 3er-Wortbreiten alter Rechner passten. Heute begegnet dir Oktal z.B. bei Linux-Dateirechten (<code>chmod 755</code>). Aber der wichtigste Grund: Es trainiert den <em>Gruppierungs-Trick</em>, den du gleich bei Hexadezimal wiedersiehst – dann mit Vierergruppen.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: Beide Richtungen rechnen',
      steps: [
        {
          label: 'Beispiel 1 – Oktal → Binär: 2345₈',
          html:
            '<p>Jede Ziffer einzeln in 3 Bits umwandeln:</p>'
            + '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;">'
            + '  2      3      4      5\n'
            + '  ↓      ↓      ↓      ↓\n'
            + ' 010    011    100    101'
            + '</pre>'
            + '<p>Zusammengeschrieben: <code>2345<sub>8</sub> = 010 011 100 101<sub>2</sub></code> (die führende 0 kann wegfallen → <code>10011100101<sub>2</sub></code>)</p>'
        },
        {
          label: 'Beispiel 2 – Binär → Oktal: 101100011111110001000₂',
          html:
            '<p>Von rechts(!) in Dreiergruppen teilen:</p>'
            + '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;">'
            + '101 100 011 111 110 001 000\n'
            + ' 5   4   3   7   6   1   0'
            + '</pre>'
            + '<p>Ergebnis: <code>5437610<sub>8</sub></code></p>'
            + '<div class="tip-box">Falls die Binärzahl nicht durch 3 teilbar ist: links mit 0 auffüllen. Beispiel: <code>11010<sub>2</sub></code> → <code>011 010<sub>2</sub></code> → <code>32<sub>8</sub></code>.</div>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie lautet 001110100011101010111<sub>2</sub> als Oktalzahl?',
        options: ['16435127', '1643527', '1643527<sub>8</sub>', '16435278'],
        correct: 2,
        explanation: 'Von rechts in Dreiergruppen: 001 110 100 011 101 010 111 → 1 6 4 3 5 2 7 → 1643527<sub>8</sub>.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie lautet 4501738<sub>8</sub> in Binär?',
        options: [
          '100 101 000 001 111 011 000<sub>2</sub>',
          '100 101 000 001 111 011<sub>2</sub> (ohne letzte Ziffer)',
          '100 101 000 001 111 101 000<sub>2</sub>',
          '100 101 000 001 111 011 000 kann nicht sein (Oktalziffer 8 existiert nicht)'
        ],
        correct: 3,
        explanation: 'Achtung Falle! Die Ziffer 8 existiert im Oktalsystem gar nicht – Oktal nutzt nur 0–7. Die gegebene Zahl ist also keine gültige Oktalzahl.'
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
        explanation: 'Ziffer für Ziffer: 5=101, 7=111, 0=000, 2=010, 3=011, 1=001 → 101111000010011001<sub>2</sub>.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum entspricht im Oktalsystem jede Ziffer genau 3 Binärstellen?',
        options: [
          'Weil 8 = 3·3 ist.',
          'Weil 2³ = 8, also lassen sich alle Oktalziffern 0–7 genau mit 3 Bits darstellen.',
          'Weil die Vorlesung es so festgelegt hat.',
          'Das ist eine reine Konvention, mathematisch ist es Zufall.'
        ],
        correct: 1,
        explanation: 'Die Beziehung 2³ = 8 ist der Schlüssel: Mit 3 Bits kannst du 2³ = 8 Werte darstellen – genau die 8 Oktalziffern 0 bis 7. Derselbe Grund erklärt, warum Hex 4 Bits braucht (2⁴ = 16).'
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
        + '<p>Hexadezimal (Basis 16) ist <em>das</em> wichtigste Zahlensystem in der Informatik nach Binär. Der Trick ist exakt wie bei Oktal – nur mit <strong>4 Bits pro Ziffer</strong>.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Wenn Binär die Muttersprache des Computers ist, ist Hex die praktische Kurzschrift für uns Menschen. Statt <code>11111111</code> (8 Zeichen) schreibst du <code>FF</code> (2 Zeichen) – identische Information, aber viel lesbarer. Genau wie bei SMS-Abkürzungen: "lg" statt "liebe Grüße". Darum verwenden Entwickler Hex überall dort, wo sie Binär eigentlich bräuchten – z.B. bei Farben im Web.'
        + '</div>'
        + '<h3>Die 16 Ziffern</h3>'
        + '<p>Da 10 Dezimalziffern nicht reichen, werden 10–15 durch <strong>Buchstaben A–F</strong> ersetzt:</p>'
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
        + '<strong>Merke auswendig:</strong> Diese Tabelle ist die wichtigste in ganz A1. Wenn du sie drauf hast, lösen sich Hex-Umrechnungen in Sekunden.'
        + '</div>'
        + '<h3>RGB-Farben als Hex</h3>'
        + '<p>Web-Farben schreibt man als <code>#RRGGBB</code> – je 2 Hexziffern für Rot, Grün, Blau (je 0–255 = 00–FF):</p>'
        + '<div class="info-card" style="padding:10px;">'
        + '<div style="display:flex;gap:10px;flex-wrap:wrap;">'
        + '<div style="background:#FF0000;color:white;padding:8px 14px;border-radius:4px;">#FF0000 = Rot</div>'
        + '<div style="background:#00FF00;color:black;padding:8px 14px;border-radius:4px;">#00FF00 = Grün</div>'
        + '<div style="background:#0000FF;color:white;padding:8px 14px;border-radius:4px;">#0000FF = Blau</div>'
        + '<div style="background:#FFFFFF;color:black;padding:8px 14px;border-radius:4px;border:1px solid #ccc;">#FFFFFF = Weiß</div>'
        + '<div style="background:#000000;color:white;padding:8px 14px;border-radius:4px;">#000000 = Schwarz</div>'
        + '</div>'
        + '<p style="margin-top:10px;">FF = 255 (Maximum), 00 = 0 (Minimum). Jede Farbe hat 3 Werte von 0–255 → 256³ ≈ 16,7 Millionen Farben.</p>'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> Hex ist <em>überall</em>: Web-Farben, MAC-Adressen, Speicher-Adressen, Hashes, Commit-IDs in Git. Wenn du eine Webseite stylst (<code>color: #2563EB</code>) oder eine Fehlermeldung <code>0x80070005</code> liest, brauchst du Hex. Und in der Klausur ist es eine sichere 3–4-Punkte-Aufgabe.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: Beide Richtungen + RGB-Farbe',
      steps: [
        {
          label: 'Beispiel 1 – Binär → Hex: 0111 0101 1110 1011₂',
          html:
            '<p>Von rechts in <strong>Vierergruppen</strong> (die Abstände helfen schon):</p>'
            + '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;">'
            + '0111   0101   1110   1011\n'
            + '  7      5      E      B'
            + '</pre>'
            + '<p>Ergebnis: <code>75EB<sub>16</sub></code></p>'
        },
        {
          label: 'Beispiel 2 – Hex → Binär: ABC₁₆',
          html:
            '<p>Jede Ziffer einzeln als 4 Bits:</p>'
            + '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;">'
            + '  A      B      C\n'
            + '  ↓      ↓      ↓\n'
            + '1010   1011   1100'
            + '</pre>'
            + '<p>Ergebnis: <code>ABC<sub>16</sub> = 1010 1011 1100<sub>2</sub></code></p>'
        },
        {
          label: 'Beispiel 3 – Farbe #2563EB analysieren',
          html:
            '<p>Die Akzentfarbe dieses Lernprogramms ist <code>#2563EB</code>. Was bedeutet das in RGB?</p>'
            + '<ul>'
            + '<li><strong>R</strong>ot: 25<sub>16</sub> = 2·16 + 5 = 37</li>'
            + '<li><strong>G</strong>rün: 63<sub>16</sub> = 6·16 + 3 = 99</li>'
            + '<li><strong>B</strong>lau: EB<sub>16</sub> = 14·16 + 11 = 235</li>'
            + '</ul>'
            + '<p>Also <code>rgb(37, 99, 235)</code> – wenig Rot, mittel Grün, viel Blau → ein kräftiges Blau. <span style="background:#2563EB;color:white;padding:4px 10px;border-radius:4px;">Das hier</span></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie lautet 0100 1111 1010 0011<sub>2</sub> in Hexadezimal?',
        options: ['4FA3', '4EA3', '5FA3', '4FB3'],
        correct: 0,
        explanation: '0100=4, 1111=F, 1010=A, 0011=3 → 4FA3<sub>16</sub>.'
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
        explanation: 'B=1011, D=1101, E=1110 → 101111011110<sub>2</sub>.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie viele Bits braucht man, um die Hex-Ziffer F darzustellen?',
        options: ['3', '4', '8', '16'],
        correct: 1,
        explanation: 'F<sub>16</sub> = 15<sub>10</sub> = 1111<sub>2</sub>. Das sind 4 Bits – genau die Wortbreite, die für jede Hex-Ziffer reicht (2⁴=16 Werte).'
      },
      {
        type: 'multiple-choice',
        question: 'Die Farbe #FFFF00 im RGB-Modell ist welche Farbe?',
        options: ['Rot', 'Grün', 'Gelb', 'Orange'],
        correct: 2,
        explanation: 'R=FF=255 (volles Rot), G=FF=255 (volles Grün), B=00 (kein Blau). Rot + Grün = Gelb (additive Farbmischung). <span style="background:#FFFF00;padding:2px 8px;">Gelb</span>'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Hex-Farbe entspricht einem mittleren Grau?',
        options: ['#FFFFFF', '#808080', '#000000', '#8F0000'],
        correct: 1,
        explanation: '#808080 = R:128, G:128, B:128 – alle drei Kanäle mittig → neutrales Mittelgrau. #FFFFFF ist Weiß, #000000 ist Schwarz, #8F0000 wäre Dunkelrot.'
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
        + '<p>BCD ist ein <strong>anderer Weg</strong>, eine Dezimalzahl binär zu speichern. Statt die ganze Zahl als Binärzahl umzurechnen, wird <em>jede Dezimalziffer einzeln</em> durch 4 Bits dargestellt.</p>'
        + '<div class="analogy-box">'
        + '<strong>Analogie aus dem Alltag:</strong> Stell dir eine digitale Uhr vor. Die muss nicht die Zahl <code>2359</code> (23:59 Uhr) als eine einzige Binärzahl speichern und dann wieder in vier Ziffern zerlegen. Sie speichert die Ziffern <em>einzeln</em> – jede Ziffer mit ihrem eigenen 4-Bit-Paket. Das ist BCD: "Wir codieren jede Ziffer für sich, damit die Anzeige einfach bleibt."'
        + '</div>'
        + '<h3>Das Prinzip</h3>'
        + '<p>Jede der 10 Dezimalziffern 0–9 bekommt ihren eigenen 4-Bit-Code:</p>'
        + '<table class="icon-table" style="border-collapse:collapse;margin:8px 0;">'
        + '<tr style="background:#eff6ff"><th style="padding:5px;border:1px solid #ccc;">Dez</th><th style="padding:5px;border:1px solid #ccc;">BCD</th><th style="padding:5px;border:1px solid #ccc;">Dez</th><th style="padding:5px;border:1px solid #ccc;">BCD</th></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">0</td><td style="padding:5px;border:1px solid #ccc;">0000</td><td style="padding:5px;border:1px solid #ccc;">5</td><td style="padding:5px;border:1px solid #ccc;">0101</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">1</td><td style="padding:5px;border:1px solid #ccc;">0001</td><td style="padding:5px;border:1px solid #ccc;">6</td><td style="padding:5px;border:1px solid #ccc;">0110</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">2</td><td style="padding:5px;border:1px solid #ccc;">0010</td><td style="padding:5px;border:1px solid #ccc;">7</td><td style="padding:5px;border:1px solid #ccc;">0111</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">3</td><td style="padding:5px;border:1px solid #ccc;">0011</td><td style="padding:5px;border:1px solid #ccc;">8</td><td style="padding:5px;border:1px solid #ccc;">1000</td></tr>'
        + '<tr><td style="padding:5px;border:1px solid #ccc;">4</td><td style="padding:5px;border:1px solid #ccc;">0100</td><td style="padding:5px;border:1px solid #ccc;">9</td><td style="padding:5px;border:1px solid #ccc;">1001</td></tr>'
        + '</table>'
        + '<p><strong>Wichtig:</strong> Die Codes 1010, 1011, …, 1111 (also 10–15 in Binär) sind <em>ungenutzt</em>. Daher der Nachteil: Speicherverschwendung – 6 von 16 möglichen Mustern pro Ziffer bleiben leer.</p>'
        + '<h3>Vor- und Nachteile</h3>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">'
        + '<div class="tip-box">'
        + '<strong>Vorteil:</strong> Exakte Darstellung aller Dezimalzahlen (auch 0,1 oder 0,3 ohne Rundungsfehler). Einfache Anzeige-Logik für Displays.'
        + '</div>'
        + '<div class="warning-box">'
        + '<strong>Nachteil:</strong> 6 von 16 Werten pro Nibble (4 Bits) bleiben ungenutzt. Rechenoperationen sind komplizierter als in normalem Binär.'
        + '</div>'
        + '</div>'
        + '<h3>Vergleich: Binär vs. BCD</h3>'
        + '<p>Dieselbe Dezimalzahl wird <em>unterschiedlich</em> codiert, je nachdem welchen Code du nutzt:</p>'
        + '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;">'
        + 'Dezimal:      13\n'
        + 'Binär:        0000 1101\n'
        + 'BCD:          0001 0011   (1 und 3 getrennt!)'
        + '</pre>'
        + '<div class="warning-box">'
        + '<strong>Nicht verwechseln:</strong> BCD ist <em>nicht dasselbe</em> wie "die Zahl als Binärzahl". Die BCD-Darstellung einer Zahl sieht immer genau wie die Ziffernfolge aus – nur jede Ziffer durch 4 Bits ersetzt.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das?</strong> BCD wird in Anzeigen (7-Segment-Displays, ältere Taschenrechner), Finanz-Anwendungen (wo 0,10 € exakt 0,10 € sein muss, keine Fließkomma-Rundung!) und bei Zeit-/Datumscodierung genutzt. In der Klausur ist es meistens eine kurze 1-Punkt-Aufgabe – schnelles Punkte-Sammeln, wenn du das Prinzip verstehst.'
        + '</div>'
    },
    example: {
      title: 'Beispiel: 291,42₁₀ als BCD',
      steps: [
        {
          label: 'Schritt 1 – Jede Ziffer einzeln',
          html:
            '<p>Wir gehen die Ziffern von links nach rechts durch, inklusive Komma:</p>'
            + '<pre style="background:#f3f4f6;padding:10px;border-radius:4px;">'
            + '  2      9      1   ,   4      2\n'
            + '  ↓      ↓      ↓       ↓      ↓\n'
            + '0010   1001   0001  , 0100   0010'
            + '</pre>'
        },
        {
          label: 'Schritt 2 – Zusammenschreiben',
          html:
            '<p><code>291,42<sub>10</sub> = 0010 1001 0001, 0100 0010<sub>BCD</sub></code></p>'
            + '<p>Hinweis: Das Komma bleibt an der gleichen Stelle wie in der Dezimalzahl – BCD behält die Ziffernstruktur bei.</p>'
        },
        {
          label: 'Vergleich mit "normalem" Binär',
          html:
            '<p>Nur zum Vergleich: Dieselbe Zahl als reine Binärzahl wäre:</p>'
            + '<p><code>291<sub>10</sub> = 100100011<sub>2</sub></code> (9 Bits)</p>'
            + '<p>BCD: <code>001010010001</code> (12 Bits) – BCD braucht mehr Speicher, ist aber ziffernweise lesbar.</p>'
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
        explanation: '5=0101, 6=0110, 2=0010, 7=0111, 9=1001 → 0101 0110 0010, 0111 1001<sub>BCD</sub>.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Aussage über BCD ist FALSCH?',
        options: [
          'Jede Dezimalziffer wird durch 4 Bits dargestellt.',
          'BCD ist identisch mit der Binärdarstellung einer Zahl.',
          'Die Codes 1010–1111 sind in BCD ungenutzt.',
          'BCD braucht mehr Speicher als reine Binärdarstellung.'
        ],
        correct: 1,
        explanation: 'BCD und Binär sind NICHT identisch! Beispiel: 13<sub>10</sub> als Binär = 1101<sub>2</sub> (8 Bits: 00001101). Als BCD = 0001 0011 (1 und 3 einzeln). Die anderen drei Aussagen stimmen.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum sind die Codes 1010–1111 in BCD ungenutzt?',
        options: [
          'Weil es nur 10 Dezimalziffern gibt (0–9) und diese 6 Codes keine Ziffer repräsentieren.',
          'Weil diese Codes für Vorzeichen reserviert sind.',
          'Weil BCD nur positive Zahlen darstellen kann.',
          'Weil der Arbeitsspeicher sie nicht lesen kann.'
        ],
        correct: 0,
        explanation: '4 Bits können 2⁴ = 16 Muster darstellen – wir brauchen aber nur 10 (Ziffern 0–9). Die restlichen 6 sind einfach ungenutzt. Genau das ist der Speicher-Nachteil von BCD.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist 0001 0111<sub>BCD</sub> als Dezimalzahl?',
        options: ['17', '23', '10111', '71'],
        correct: 0,
        explanation: '0001 = 1, 0111 = 7 → Zahl = 17. Nicht verwechseln mit 00010111<sub>2</sub> = 23, das wäre reine Binärdarstellung.'
      }
    ]
  }

];
