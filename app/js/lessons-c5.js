const LessonsC5 = [

  // ===== LEKTION 12: IP-Grundlagen & Multiple Choice =====
  {
    id: 12,
    title: 'IP-Grundlagen',
    explanation: {
      html:
        '<h2>IP-Grundlagen</h2>'
        + '<p>Eine <strong>IP-Adresse</strong> ist die eindeutige Kennung eines Ger\u00E4ts im Netzwerk. Ohne sie k\u00F6nnte kein Router ein Paket an die richtige Stelle schicken.</p>'
        + '<div class="analogy-box">'
        + '<strong>Postanschrift-Analogie:</strong> Eine IP-Adresse funktioniert wie eine Briefanschrift \u2013 sie besteht aus zwei Teilen:'
        + '<ul style="margin:6px 0 0 0;padding-left:22px">'
        + '<li><strong>Netz-ID = Postleitzahl:</strong> Sagt dem Router, in welches Netzwerk (= welche \u201EStadt\u201C) das Paket soll.</li>'
        + '<li><strong>Host-ID = Hausnummer:</strong> Identifiziert das konkrete Ger\u00E4t im Netz.</li>'
        + '</ul>'
        + 'Die <strong>Subnetzmaske</strong> ist wie eine Trennlinie, die beide Teile trennt.'
        + '</div>'
        + '<h3>IPv4 vs. IPv6:</h3>'
        + '<ul>'
        + '<li><strong>IPv4:</strong> 32-Bit-Adresse als 4 Dezimalzahlen (Oktette), getrennt durch Punkte. Jedes Oktett: 0\u2013255. <br>Beispiel: <code>192.168.10.1</code></li>'
        + '<li><strong>IPv6:</strong> 128-Bit-Adresse als 8 Hex-Gruppen, getrennt durch Doppelpunkte. <br>Beispiel: <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code></li>'
        + '</ul>'
        + '<div class="why-context">'
        + '<strong>Warum es gleich zwei IP-Versionen gibt:</strong> IPv4 bietet \u201Enur\u201C 2\u00B3\u00B2 = ca. 4,3 Milliarden Adressen. Das klingt viel, aber bei weltweit Milliarden von Ger\u00E4ten wird\u2019s knapp. IPv6 l\u00F6st das Problem mit 128 Bit \u2013 genug Adressen, um buchst\u00E4blich jeden Sandkorn auf der Erde zu adressieren. In der Praxis laufen beide Protokolle parallel.'
        + '</div>'
        + '<p><strong>Zum Selbst-Ausprobieren:</strong> Der interaktive IP-Konverter unten rechnet zwischen Dezimal und Bin\u00E4r um. Klick auf einzelne Bits oder tippe eine Dezimalzahl ein \u2013 und siehe, wie sich Bin\u00E4r- und Dezimal-Darstellung gegenseitig entsprechen. Besonders n\u00FCtzlich: Du siehst, dass jedes Oktett nur 8 Bits hat, also maximal 255 erreicht.</p>'
        + '<p><strong>Achtung:</strong> Die Netzwerkadresse (alle Host-Bits = 0) ist f\u00FCr das Netz reserviert. Der Hostanteil der Netzwerkadresse ist immer 0.</p>',
      visuals: [
        { type: 'ip-converter', label: 'IP-Konverter \u2013 Dezimal \u2194 Bin\u00E4r live umschalten' }
      ]
    },
    example: {
      title: 'Beispiel: IPv4 vs. IPv6 erkennen',
      steps: [
        {
          label: 'IPv4 erkennen',
          html:
            '<p>4 Dezimalzahlen getrennt durch Punkte \u2192 IPv4<br>Beispiel: <code>10.0.0.1</code>, <code>255.255.255.0</code></p>'
        },
        {
          label: 'IPv6 erkennen',
          html:
            '<p>Hexadezimalgruppen mit Doppelpunkten \u2192 IPv6<br>Beispiel: <code>fe80::1</code>, <code>2001:db8::1</code></p>'
        },
        {
          label: 'Hostanteil der Netzwerkadresse',
          html:
            '<p>Netzwerkadresse: alle Host-Bits = 0. Bei 192.168.1.0/24: Netz-ID=192.168.1, Host=0.<br>Der Hostanteil ist also <strong>0</strong>.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'IP-Adresse: 192.168.5.100 mit Subnetzmaske 255.255.255.0. Was ist der Hostanteil?',
        options: ['100', '192.168.5', '5.100', '0'],
        correct: 0,
        explanation: 'Maske /24 = die ersten 24 Bits = 3 Oktette sind Netz-ID. Das letzte Oktett (100) ist der Hostanteil.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie viele Bits hat eine Subnetzmaske bei IPv4?',
        options: ['8', '16', '24', '32'],
        correct: 3,
        explanation: 'Eine IPv4-Subnetzmaske ist immer 32 Bit lang \u2013 genauso wie eine IPv4-Adresse.'
      },
      {
        type: 'multiple-choice',
        question: 'Welches Format ist eine IPv6-Adresse?',
        options: [
          '4 Dezimalzahlen getrennt durch Punkte (z.B. 192.168.1.1)',
          '8 Hexadezimalgruppen getrennt durch Doppelpunkte (z.B. 2001:db8::1)',
          '6 Dezimalzahlen getrennt durch Kommas',
          '32 Bin\u00e4rziffern ohne Trennzeichen'
        ],
        correct: 1,
        explanation: 'IPv6: 128 Bit = 8 Gruppen \u00e0 16 Bit (4 Hex-Zeichen), getrennt durch Doppelpunkte.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist der Hostanteil der Netzwerkadresse 10.0.0.0/8?',
        options: ['0', '10', '255', '1'],
        correct: 0,
        explanation: 'Bei der Netzwerkadresse sind alle Host-Bits = 0. Der Hostanteil ist also 0.'
      }
    ]
  },

  // ===== LEKTION 13: IP-Adressen validieren =====
  {
    id: 13,
    title: 'IP-Adressen validieren',
    explanation: {
      html:
        '<h2>IP-Adressen validieren</h2>'
        + '<p>In der Klausur bekommst du oft eine Liste von IP-Adressen und musst erkennen, welche g\u00FCltig sind \u2013 und bei ung\u00FCltigen eine Begr\u00FCndung liefern.</p>'
        + '<div class="analogy-box">'
        + '<strong>Postleitzahl-Analogie:</strong> Genau wie eine Postleitzahl muss eine IP-Adresse einem festen Format folgen. Eine deutsche PLZ hat genau <em>5 Ziffern</em> im Bereich 01000\u201399999 \u2013 eine IPv4-Adresse hat genau <em>4 Oktette</em> im Bereich 0\u2013255. W\u00E4re das anders, k\u00F6nnte der Briefsortierer (Router) das Paket nicht zuordnen.'
        + '</div>'
        + '<h3>Drei Validierungsregeln:</h3>'
        + '<ol>'
        + '<li><strong>Genau 4 Oktette</strong> \u2013 durch Punkte getrennt; zu viele oder zu wenige \u2192 ung\u00FCltig.</li>'
        + '<li><strong>Jedes Oktett: 0\u2013255</strong> \u2013 denn 8 Bit = 2\u2078 = 256 m\u00F6gliche Werte, von 0 bis 255.</li>'
        + '<li><strong>Nur Dezimalzahlen</strong> \u2013 keine Buchstaben, keine negativen Zahlen, kein Hex-Zeichen.</li>'
        + '</ol>'
        + '<div class="why-context">'
        + '<strong>Warum es 0\u2013255 sein <em>muss</em>:</strong> Jedes Oktett ist <em>technisch</em> 8 Bit lang. 8 Bit k\u00F6nnen 2\u2078 = 256 verschiedene Zahlen kodieren, und zwar 0, 1, 2, \u2026, 255. Zahlen dar\u00FCber (256, 300\u2026) lassen sich in 8 Bit gar nicht darstellen. Das ist kein k\u00FCnstliches Limit, sondern pure Informatik-Mathematik.'
        + '</div>'
        + '<h3>Sonderf\u00E4lle (klausurrelevant!):</h3>'
        + '<ul>'
        + '<li><code>0.0.0.0</code> \u2192 <strong>g\u00FCltig</strong> (Sonderadresse: \u201Ekein Netz / alle Netze\u201C, oft als Default)</li>'
        + '<li><code>255.255.255.255</code> \u2192 <strong>g\u00FCltig</strong> (Broadcast: Paket an alle im lokalen Netz)</li>'
        + '<li><code>256.0.0.1</code> \u2192 <strong>ung\u00FCltig</strong> (256 > 255)</li>'
        + '<li><code>192.168.1</code> \u2192 <strong>ung\u00FCltig</strong> (nur 3 Oktette, eines fehlt)</li>'
        + '<li><code>192.168.1.1.1</code> \u2192 <strong>ung\u00FCltig</strong> (5 Oktette, eines zu viel)</li>'
        + '</ul>'
        + '<p><strong>Klausur-Tipp:</strong> Jedes Oktett <em>einzeln</em> pr\u00FCfen und bei Ung\u00FCltigkeit die konkrete Begr\u00FCndung schreiben (\u201E4. Oktett = 300 > 255\u201C). Nie einfach nur \u201Eung\u00FCltig\u201C ankreuzen.</p>'
        + '<p>Mit dem IP-Konverter unten kannst du Werte direkt ausprobieren: Tippe z.B. 256 in ein Oktett \u2013 der Konverter zeigt dir, dass das nicht geht.</p>',
      visuals: [
        { type: 'ip-converter', label: 'IP-Konverter \u2013 Probier g\u00FCltige und ung\u00FCltige Werte aus' }
      ]
    },
    example: {
      title: 'Beispiel: IP-Adressen aus der Klausur pr\u00fcfen',
      steps: [
        {
          label: 'G\u00fcltige Adressen',
          html:
            '<p><code>192.168.1.255</code> \u2192 g\u00fcltig (alle Oktette 0-255) \u2713<br><code>10.0.0.1</code> \u2192 g\u00fcltig \u2713<br><code>0.0.0.0</code> \u2192 g\u00fcltig \u2713</p>'
        },
        {
          label: 'Ung\u00fcltige Adressen mit Begr\u00fcndung',
          html:
            '<p><code>192.168.1.256</code> \u2192 ung\u00fcltig: 4. Oktett (256) > 255<br><code>300.168.1.1</code> \u2192 ung\u00fcltig: 1. Oktett (300) > 255<br><code>192.168.1</code> \u2192 ung\u00fcltig: nur 3 Oktette statt 4</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche IP-Adresse ist UNG\u00dcLTIG?',
        options: ['192.168.0.1', '10.255.255.255', '172.16.0.256', '0.0.0.0'],
        correct: 2,
        explanation: '172.16.0.256 ist ung\u00fcltig: Das letzte Oktett (256) ist gr\u00f6\u00dfer als 255. G\u00fcltig w\u00e4re 172.16.0.255.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum ist 192.168.300.1 ung\u00fcltig?',
        options: [
          'Das 3. Oktett (300) ist gr\u00f6\u00dfer als 255',
          'IPv4-Adressen d\u00fcrfen nicht mit 192 beginnen',
          'Es fehlt ein Oktett',
          'Die Adresse ist reserviert'
        ],
        correct: 0,
        explanation: 'Jedes Oktett einer IPv4-Adresse muss zwischen 0 und 255 liegen. 300 > 255 \u2192 ung\u00fcltig.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche der folgenden Adressen ist g\u00fcltig?',
        options: ['256.0.0.1', '192.168.1.1.1', '10.0.0.255', '192.168.1'],
        correct: 2,
        explanation: '10.0.0.255 ist g\u00fcltig: alle 4 Oktette vorhanden, alle im Bereich 0-255. Die anderen: 256>255, 5 Oktette, nur 3 Oktette.'
      }
    ]
  },

  // ===== LEKTION 14: Subnetzmasken & bin\u00e4re Schreibweise =====
  {
    id: 14,
    title: 'Subnetzmasken & bin\u00e4re Schreibweise',
    explanation: {
      html:
        '<h2>Subnetzmasken & bin\u00E4re Schreibweise</h2>'
        + '<p>Eine Subnetzmaske teilt die 32 Bits einer IP-Adresse in einen <strong>Netz-Teil</strong> (vorne, Einsen) und einen <strong>Host-Teil</strong> (hinten, Nullen).</p>'
        + '<div class="analogy-box">'
        + '<strong>Schablonen-Analogie:</strong> Stell dir die Maske als <em>Lochplatte</em> vor, die du \u00FCber die IP-Adresse legst. \u00DCberall wo die Maske eine <strong>1</strong> hat, siehst du den Netz-Teil. \u00DCberall wo sie eine <strong>0</strong> hat, liegt der Host-Teil darunter. Die Gr\u00F6\u00DFe des Netzes ergibt sich aus der Anzahl der 1en.'
        + '</div>'
        + '<h3>CIDR-Notation (Pr\u00E4fix-L\u00E4nge):</h3>'
        + '<p><code>/24</code> bedeutet: 24 f\u00FChrende Einsen \u2192 die ersten 24 Bits sind Netz, die restlichen 8 sind Host. Kurze Schreibweise f\u00FCr <code>255.255.255.0</code>.</p>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:6px 10px">CIDR</th><th style="border:1px solid #ccc;padding:6px 10px">Dezimal</th><th style="border:1px solid #ccc;padding:6px 10px">Bin\u00E4r (Dotted-Binary)</th><th style="border:1px solid #ccc;padding:6px 10px">Host-Bits</th><th style="border:1px solid #ccc;padding:6px 10px">Nutzbare Hosts</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">/8</td><td style="border:1px solid #ccc;padding:6px 10px">255.0.0.0</td><td style="border:1px solid #ccc;padding:6px 10px"><code>11111111.00000000.00000000.00000000</code></td><td style="border:1px solid #ccc;padding:6px 10px">24</td><td style="border:1px solid #ccc;padding:6px 10px">2\u00B2\u2074\u22122 \u2248 16,7 Mio</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">/16</td><td style="border:1px solid #ccc;padding:6px 10px">255.255.0.0</td><td style="border:1px solid #ccc;padding:6px 10px"><code>11111111.11111111.00000000.00000000</code></td><td style="border:1px solid #ccc;padding:6px 10px">16</td><td style="border:1px solid #ccc;padding:6px 10px">65534</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">/24</td><td style="border:1px solid #ccc;padding:6px 10px">255.255.255.0</td><td style="border:1px solid #ccc;padding:6px 10px"><code>11111111.11111111.11111111.00000000</code></td><td style="border:1px solid #ccc;padding:6px 10px">8</td><td style="border:1px solid #ccc;padding:6px 10px">254</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px">/27</td><td style="border:1px solid #ccc;padding:6px 10px">255.255.255.224</td><td style="border:1px solid #ccc;padding:6px 10px"><code>11111111.11111111.11111111.11100000</code></td><td style="border:1px solid #ccc;padding:6px 10px">5</td><td style="border:1px solid #ccc;padding:6px 10px">30</td></tr>'
        + '</table>'
        + '<div class="why-context">'
        + '<strong>Warum kennt die Klausur so viele Masken?</strong> Je kleiner ein Unternehmens-/Schulnetzwerk, desto sparsamer der IP-Verbrauch. Eine kleine Abteilung mit 10 Rechnern braucht kein /24 (das w\u00E4re Platz f\u00FCr 254 Ger\u00E4te \u2013 95\% unbenutzt). Mit /27 bekommen sie 30 Hosts \u2013 genau richtig. Subnetting ist deshalb zentrales IT-Wissen: Wer es beherrscht, spart Adressen und kann Netze sinnvoll strukturieren.'
        + '</div>'
        + '<h3>Rechenregel (vom CIDR zur Dezimalmaske):</h3>'
        + '<ol>'
        + '<li>CIDR = Anzahl f\u00FChrender Einsen. Rest sind Nullen bis 32 Bit.</li>'
        + '<li>Teile in 4 Oktette \u00E0 8 Bit.</li>'
        + '<li>Jedes Oktett von Bin\u00E4r nach Dezimal umrechnen (128\u00B7b\u2087 + 64\u00B7b\u2086 + \u2026 + 1\u00B7b\u2080).</li>'
        + '</ol>'
        + '<p><strong>Beispiel /27:</strong> 27 Einsen = 24 Einsen (ersten 3 Oktette 255) + 3 Einsen im 4. Oktett (<code>11100000</code> = 128+64+32 = <strong>224</strong>). Also /27 = 255.255.255.224.</p>'
        + '<p>Der IP-Konverter unten kann dir helfen: Setze die ersten Bits im letzten Oktett und sieh, welcher Dezimalwert sich ergibt.</p>',
      visuals: [
        { type: 'ip-converter', label: 'IP-Konverter \u2013 n\u00FCtzlich um Maskenwerte bin\u00E4r zu setzen' }
      ]
    },
    example: {
      title: 'Beispiel: /27 in Dotted-Binary-Notation',
      steps: [
        {
          label: '/27 in Bin\u00e4r umrechnen',
          html:
            '<p>/27 = 27 Einsen, dann Nullen bis 32 Bit:<br><code>11111111.11111111.11111111.11100000</code></p>'
        },
        {
          label: 'Letztes Oktett: 11100000\u2082 = ?\u2081\u2080',
          html:
            '<p>11100000\u2082 = 1\u00d7128 + 1\u00d764 + 1\u00d732 + 0+0+0+0+0 = 224\u2081\u2080<br>Also: 255.255.255.224</p>'
        },
        {
          label: 'Wie viele Hosts in /27?',
          html:
            '<p>32 - 27 = 5 Host-Bits \u2192 2\u2075 = 32 Adressen. Minus 2 (Netz+Broadcast) = <strong>30 nutzbare Hosts</strong>.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist die Dezimal-Darstellung der Subnetzmaske /24?',
        options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'],
        correct: 2,
        explanation: '/24 = 24 f\u00fchrende Einsen = 11111111.11111111.11111111.00000000 = 255.255.255.0'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Dotted-Binary-Notation hat die Subnetzmaske /27?',
        options: [
          '11111111.11111111.11111111.00000000',
          '11111111.11111111.11111111.11100000',
          '11111111.11111111.11111111.11110000',
          '11111111.11111111.11111110.00000000'
        ],
        correct: 1,
        explanation: '/27: 27 Einsen dann Nullen. Die ersten 24 Bits sind alle 1 (drei volle Oktette). Im 4. Oktett: 3 Einsen dann 5 Nullen = 11100000.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ergibt 255.255.255.224 als CIDR-Notation?',
        options: ['/24', '/25', '/27', '/28'],
        correct: 2,
        explanation: '224 = 11100000\u2082 \u2192 3 f\u00fchrende Einsen im 4. Oktett. Zusammen mit den ersten 24 Bit: 24+3 = /27.'
      }
    ]
  },

  // ===== LEKTION 15: Netzwerk-IDs berechnen =====
  {
    id: 15,
    title: 'Netzwerk-IDs berechnen',
    explanation: {
      html:
        '<h2>Netzwerk-IDs berechnen</h2>'
        + '<p>Die <strong>Netz-ID</strong> (= Netzwerkadresse) ist die \u201EAdresse\u201C des gesamten Netzwerks. Sie bekommt man durch <strong>bitweises AND</strong> von IP-Adresse und Subnetzmaske.</p>'
        + '<div class="analogy-box">'
        + '<strong>Schablonen-Analogie:</strong> Die Subnetzmaske ist eine Lochplatte \u00FCber deiner IP-Adresse. Dort wo die Maske eine <strong>1</strong> hat, <em>scheint die IP-Adresse durch</em>. Dort wo sie eine <strong>0</strong> hat, <em>wird die Zahl ausradiert</em> (AND mit 0 ergibt 0). Was \u00FCbrigbleibt, ist die Netz-ID \u2013 der Teil der IP, der das Netzwerk identifiziert.'
        + '</div>'
        + '<h3>Die Regel: Netz-ID = IP AND Maske</h3>'
        + '<p><strong>Bitweises AND:</strong> <code>1 \u2227 1 = 1</code>, <code>1 \u2227 0 = 0</code>, <code>0 \u2227 0 = 0</code>. Nur zwei Einsen ergeben eine 1, alle anderen F\u00E4lle eine 0.</p>'
        + '<h3>Vorgehen (sichere, langsame Methode):</h3>'
        + '<ol>'
        + '<li>IP-Adresse bin\u00E4r aufschreiben (4 Oktette \u00E0 8 Bit).</li>'
        + '<li>Subnetzmaske bin\u00E4r aufschreiben.</li>'
        + '<li>Bitweises AND anwenden (eine Zeile pro Bit-Paar).</li>'
        + '<li>Ergebnis zur\u00FCck in Dezimal \u2192 Netz-ID.</li>'
        + '</ol>'
        + '<h3>Kurzweg (bei \u201Eschlanken\u201C Masken wie /8, /16, /24):</h3>'
        + '<ul>'
        + '<li>Bei <strong>/24</strong> (255.255.255.0): Letztes Oktett auf 0 setzen \u2192 Netz-ID. <em>Beispiel:</em> 192.168.10.100/24 \u2192 Netz-ID 192.168.10.0.</li>'
        + '<li>Bei <strong>/16</strong> (255.255.0.0): Letzten 2 Oktette auf 0 setzen.</li>'
        + '<li>Bei <strong>/8</strong> (255.0.0.0): Letzten 3 Oktette auf 0 setzen.</li>'
        + '<li>Bei \u201Ekrummer\u201C Maske (z.B. /27, /25): <em>nur das letzte relevante Oktett</em> bin\u00E4r rechnen, die davor bleiben gleich.</li>'
        + '</ul>'
        + '<div class="why-context">'
        + '<strong>Warum macht der Router das AND?</strong> Wenn ein Router ein Paket empf\u00E4ngt, muss er entscheiden: \u201EIst das Ziel-Ger\u00E4t im lokalen Netz, oder muss ich das Paket weiterleiten?\u201C Er rechnet dazu Netz-ID(Ziel-IP) und Netz-ID(eigenes Netz) \u2013 wenn beide gleich sind, ist das Ziel im lokalen Netz. Diese Rechnung passiert millionenfach pro Sekunde in jedem Router der Welt.'
        + '</div>'
        + '<p>Der <strong>Subnet-Rechner</strong> unten macht genau das interaktiv: IP + Maske eintippen, und du siehst bin\u00E4r, welche Bits gesetzt sind, welcher Teil Netz und welcher Host ist, und die Netz-ID wird automatisch ausgerechnet.</p>',
      visuals: [
        { type: 'subnet-calculator', label: 'Subnet-Rechner \u2013 IP + Maske \u2192 Netz-ID automatisch' }
      ]
    },
    example: {
      title: 'Beispiel: Netz-ID von 192.168.10.100/27 berechnen',
      steps: [
        {
          label: 'IP und Maske in Bin\u00e4r',
          html:
            '<p>IP: <code>192.168.10.100</code><br>100\u2081\u2080 = 01100100\u2082<br>Maske /27 = letztes Oktett: 11100000\u2082</p>'
        },
        {
          label: 'Bitweises AND im letzten Oktett',
          html:
            '<p><code>01100100</code> (IP-Oktett 4)<br><code>\u2227 11100000</code> (Masken-Oktett 4)<br><code>= 01100000</code> = 96\u2081\u2080</p>'
        },
        {
          label: 'Netz-ID',
          html:
            '<p>Erste 3 Oktette bleiben gleich (Maske = 255.255.255.xxx).<br>Netz-ID: <strong>192.168.10.96</strong></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Operation berechnet die Netz-ID aus IP und Subnetzmaske?',
        options: ['Bitweises AND (\u2227)', 'Bitweises OR (\u2228)', 'Bitweises XOR (\u2295)', 'Bitweises NOT (\u00ac)'],
        correct: 0,
        explanation: 'Netz-ID = IP AND Maske (bitweise). Die Maske hat Einsen f\u00fcr Netz-Bits und Nullen f\u00fcr Host-Bits. AND mit 0 = 0 (Host-Teil wird gel\u00f6scht).'
      },
      {
        type: 'multiple-choice',
        question: 'IP: 10.20.30.40, Maske: 255.255.0.0 (/16). Welche Netz-ID ergibt das?',
        options: ['10.0.0.0', '10.20.0.0', '10.20.30.0', '10.20.30.40'],
        correct: 1,
        explanation: '/16 = erste 2 Oktette sind Netz-ID. Letzten 2 Oktette auf 0 \u2192 Netz-ID: 10.20.0.0'
      },
      {
        type: 'multiple-choice',
        question: 'IP: 192.168.5.130, Maske: 255.255.255.128 (/25). Was ist die Netz-ID?',
        options: ['192.168.5.0', '192.168.5.128', '192.168.5.130', '192.168.5.255'],
        correct: 1,
        explanation: '130\u2081\u2080 = 10000010\u2082. Maske /25 letztes Oktett = 10000000\u2082. AND: 10000010 \u2227 10000000 = 10000000 = 128. Netz-ID: 192.168.5.128'
      }
    ]
  },

  // ===== LEKTION 16: Subnetting Praxis (/27, Broadcast) =====
  {
    id: 16,
    title: 'Subnetting Praxis (/27, Broadcast)',
    explanation: {
      html:
        '<h2>Subnetting Praxis</h2>'
        + '<p>Jetzt wird es konkret: F\u00FCr ein gegebenes Netz sollst du die <strong>Netz-ID</strong>, die <strong>Broadcast-Adresse</strong> und die Range der <strong>nutzbaren Hosts</strong> berechnen. Das ist der Praxis-Teil jeder Netzwerk-Klausur.</p>'
        + '<div class="analogy-box">'
        + '<strong>H\u00E4userblock-Analogie:</strong> Ein Subnetz ist wie ein Wohnblock mit nummerierten Wohnungen. Die <em>erste Adresse</em> ist das Briefkasten-Gem\u00E4chte f\u00FCr den ganzen Block (Netz-ID). Die <em>letzte Adresse</em> ist der Hausmeister-Aushang f\u00FCr alle (Broadcast). Die Wohnungen dazwischen sind die nutzbaren Hosts \u2013 dort wohnen die Ger\u00E4te.'
        + '</div>'
        + '<p>Ein Subnetz mit der Maske <strong>/27</strong> hat <strong>32 Adressen</strong> (2\u2075 = 32 Host-Bits-Kombinationen):</p>'
        + '<ul>'
        + '<li><strong>Erste Adresse</strong> = Netzwerkadresse (nicht als Host nutzbar)</li>'
        + '<li><strong>Letzte Adresse</strong> = Broadcast-Adresse (nicht als Host nutzbar)</li>'
        + '<li><strong>Dazwischen</strong> = 30 nutzbare Host-Adressen</li>'
        + '</ul>'
        + '<div class="why-context">'
        + '<strong>Warum immer \u201Eminus 2\u201C?</strong> Die erste Adresse eines Subnetzes ist f\u00FCr die Netzwerk-Identifikation reserviert (Host-Bits alle 0). Die letzte Adresse ist f\u00FCr Broadcasts (Host-Bits alle 1). Das sind also <em>nicht</em> Hosts, sondern Spezialadressen. Deshalb musst du von 2\u207F Host-Adressen immer 2 abziehen, um die nutzbare Host-Anzahl zu bekommen.'
        + '</div>'
        + '<p>Das <strong>interaktive Subnetting-Tool</strong> unten \u00FCbernimmt die Arithmetik: Du gibst Netz und CIDR ein, es liefert Netz-ID, Broadcast, ersten/letzten Host, und die bin\u00E4re Aufschl\u00FCsselung.</p>',
      visuals: [
        { type: 'subnetting-viz', network: '192.168.10.96', cidr: 27, label: 'Subnetting-Viz: 192.168.10.96/27 \u2013 alle Werte auf einen Blick' }
      ]
    },
    example: {
      title: 'Klausur-Beispiel: /27-Subnetze berechnen',
      steps: [
        {
          label: 'Schritt 1: Netz-ID und Blockgr\u00f6\u00dfe',
          html:
            '<p>/27 = 32 Adressen pro Block. Startadresse: 192.168.10.96<br>N\u00e4chster Block beginnt bei 96+32 = 128</p>'
        },
        {
          label: 'Schritt 2: Broadcast berechnen',
          html:
            '<p>Broadcast = Netz-ID + 31 (letzte Adresse im Block)<br>Block 1: 96+31 = 127 \u2192 Broadcast: 192.168.10.127<br>Block 2: 128+31 = 159 \u2192 Broadcast: 192.168.10.159</p>'
        },
        {
          label: 'Schritt 3: Bin\u00e4rdarstellung',
          html:
            '<p>96\u2081\u2080 = 01100000\u2082<br>127\u2081\u2080 = 01111111\u2082<br>128\u2081\u2080 = 10000000\u2082<br>159\u2081\u2080 = 10011111\u2082</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie viele nutzbare Host-Adressen hat ein /27-Subnetz?',
        options: ['30', '32', '28', '62'],
        correct: 0,
        explanation: '/27: 2\u2075 = 32 Adressen. Minus Netzwerkadresse und Broadcast = 30 nutzbare Adressen.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist die Broadcast-Adresse von 192.168.10.96/27?',
        options: ['192.168.10.127', '192.168.10.128', '192.168.10.255', '192.168.10.126'],
        correct: 0,
        explanation: '/27 = 32er-Bl\u00f6cke. Block beginnt bei 96, endet bei 96+31=127. Broadcast = 192.168.10.127'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist 127\u2081\u2080 in 8-Bit-Bin\u00e4r?',
        options: ['11111111', '01111111', '10000000', '01100000'],
        correct: 1,
        explanation: '127\u2081\u2080 = 64+32+16+8+4+2+1 = 01111111\u2082 (7 Einsen, eine f\u00fchrende Null).'
      },
      {
        type: 'multiple-choice',
        question: 'Zweites /27-Subnetz nach 192.168.10.96/27. Was ist die Netz-ID?',
        options: ['192.168.10.127', '192.168.10.128', '192.168.10.160', '192.168.11.0'],
        correct: 1,
        explanation: 'Das erste /27 umfasst 192.168.10.96 bis .127 (32 Adressen). Das zweite beginnt bei .128.'
      }
    ]
  }

];
