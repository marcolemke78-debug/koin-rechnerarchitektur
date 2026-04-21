const LessonsC5 = [

  // ===== LEKTION 12: IP-Grundlagen & Multiple Choice =====
  {
    id: 12,
    title: 'IP-Grundlagen',
    explanation: {
      html:
        '<h2>IP-Grundlagen</h2>'
        + '<p><strong>IPv4:</strong> 32-Bit-Adresse, dargestellt als 4 Dezimalzahlen (Oktette), getrennt durch Punkte. Jedes Oktett: 0\u2013255.</p>'
        + '<p>Beispiel: <code>192.168.10.1</code> \u2192 4 Oktette: 192 | 168 | 10 | 1</p>'
        + '<p><strong>IPv6:</strong> 128-Bit-Adresse, dargestellt als 8 Gruppen \u00e0 4 Hexadezimalziffern.</p>'
        + '<p>Beispiel: <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code></p>'
        + '<h3>Netz-ID und Host-ID</h3>'
        + '<p>Eine IP-Adresse besteht aus zwei Teilen:</p>'
        + '<ul>'
        + '<li><strong>Netz-ID:</strong> Identifiziert das Netzwerk (wie die Postleitzahl)</li>'
        + '<li><strong>Host-ID:</strong> Identifiziert das Ger\u00e4t im Netzwerk (wie die Hausnummer)</li>'
        + '</ul>'
        + '<p>Die <strong>Subnetzmaske</strong> legt fest, welche Bits zur Netz-ID und welche zur Host-ID geh\u00f6ren.</p>'
        + '<p><strong>Wichtig:</strong> Die Netzwerkadresse (alle Host-Bits = 0) ist f\u00fcr das Netz reserviert. Der Hostanteil der Netzwerkadresse ist immer 0.</p>'
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
        + '<p>Eine g\u00fcltige IPv4-Adresse hat <strong>genau 4 Oktette</strong>, jedes zwischen 0 und 255.</p>'
        + '<h3>Validierungsregeln:</h3>'
        + '<ol>'
        + '<li><strong>Genau 4 Oktette</strong> \u2013 getrennt durch Punkte, kein Oktett darf fehlen</li>'
        + '<li><strong>Jedes Oktett: 0\u2013255</strong> \u2013 Wert 256 oder h\u00f6her ist ung\u00fcltig</li>'
        + '<li><strong>Nur Zahlen</strong> \u2013 keine Buchstaben, keine Sonderzeichen</li>'
        + '</ol>'
        + '<h3>Sonderf\u00e4lle (die du kennen solltest):</h3>'
        + '<ul>'
        + '<li><code>0.0.0.0</code> \u2013 g\u00fcltig (Sonderadresse: kein Netz)</li>'
        + '<li><code>255.255.255.255</code> \u2013 g\u00fcltig (Broadcast an alle)</li>'
        + '<li><code>256.0.0.1</code> \u2013 <strong>ung\u00fcltig!</strong> (256 > 255)</li>'
        + '<li><code>192.168.1</code> \u2013 <strong>ung\u00fcltig!</strong> (nur 3 Oktette)</li>'
        + '</ul>'
        + '<p><strong>Tipp f\u00fcr die Klausur:</strong> Jedes Oktett einzeln pr\u00fcfen. Begr\u00fcndung immer angeben!</p>'
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
        '<h2>Subnetzmasken & bin\u00e4re Schreibweise</h2>'
        + '<p>Eine Subnetzmaske besteht aus f\u00fchrenden Einsen (Netz-Bits) gefolgt von Nullen (Host-Bits).</p>'
        + '<h3>CIDR-Notation (Pr\u00e4fix-L\u00e4nge):</h3>'
        + '<p><code>/24</code> bedeutet: 24 f\u00fchrende Einsen \u2192 8 Host-Bits (Nullen)</p>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:4px">CIDR</th><th style="border:1px solid #ccc;padding:4px">Dezimal</th><th style="border:1px solid #ccc;padding:4px">Bin\u00e4r (Dotted-Binary)</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:4px">/8</td><td style="border:1px solid #ccc;padding:4px">255.0.0.0</td><td style="border:1px solid #ccc;padding:4px">11111111.00000000.00000000.00000000</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:4px">/16</td><td style="border:1px solid #ccc;padding:4px">255.255.0.0</td><td style="border:1px solid #ccc;padding:4px">11111111.11111111.00000000.00000000</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:4px">/24</td><td style="border:1px solid #ccc;padding:4px">255.255.255.0</td><td style="border:1px solid #ccc;padding:4px">11111111.11111111.11111111.00000000</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:4px">/27</td><td style="border:1px solid #ccc;padding:4px">255.255.255.224</td><td style="border:1px solid #ccc;padding:4px">11111111.11111111.11111111.11100000</td></tr>'
        + '</table>'
        + '<h3>Dotted-Binary-Notation:</h3>'
        + '<p>Jedes Oktett einzeln in 8-Bit-Bin\u00e4r umrechnen, durch Punkte trennen.</p>'
        + '<p>224 in Bin\u00e4r: <code>11100000</code> (128+64+32 = 224)</p>'
        + '<p><strong>Analogie:</strong> Die Subnetzmaske ist wie eine Schablone: Einsen markieren den Netz-Teil (Postleitzahl), Nullen den Host-Teil (Hausnummer).</p>'
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
        + '<p>Die <strong>Netz-ID</strong> (Netzwerkadresse) erh\u00e4lt man durch bitweises AND von IP-Adresse und Subnetzmaske.</p>'
        + '<h3>Vorgehen:</h3>'
        + '<ol>'
        + '<li><strong>IP und Maske bin\u00e4r schreiben</strong></li>'
        + '<li><strong>Bitweises AND</strong>: 1\u22071=1, 1\u22070=0, 0\u22070=0</li>'
        + '<li><strong>Ergebnis zur\u00fcckrechnen</strong> \u2192 das ist die Netz-ID</li>'
        + '</ol>'
        + '<p><strong>Kurzweg bei einfachen Masken:</strong><br>Bei /24 (255.255.255.0): letztes Oktett auf 0 setzen \u2192 Netz-ID<br>Bei /16 (255.255.0.0): letzten 2 Oktette auf 0 setzen \u2192 Netz-ID</p>'
        + '<p><strong>Analogie:</strong> Die Subnetzmaske ist eine Schablone. Sie blendet den Host-Teil aus und l\u00e4sst nur den Netz-Teil \u00fcbrig.</p>'
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
        + '<p>Ein Subnetz mit der Maske /27 hat <strong>32 Adressen</strong> (2\u2075 = 32 Host-Bits):</p>'
        + '<ul>'
        + '<li><strong>Erste Adresse</strong> = Netzwerkadresse (nicht nutzbar)</li>'
        + '<li><strong>Letzte Adresse</strong> = Broadcast-Adresse (nicht nutzbar)</li>'
        + '<li><strong>Dazwischen</strong> = 30 nutzbare Host-Adressen</li>'
        + '</ul>'
        + '<h3>Klausur-Berechnung f\u00fcr zwei aufeinanderfolgende /27-Subnetze:</h3>'
        + '<p>Ausgangsnetz: <code>192.168.10.96/27</code></p>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:4px"></th><th style="border:1px solid #ccc;padding:4px">Subnetz 1</th><th style="border:1px solid #ccc;padding:4px">Subnetz 2</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:4px">Netz-ID</td><td style="border:1px solid #ccc;padding:4px">192.168.10.96</td><td style="border:1px solid #ccc;padding:4px">192.168.10.128</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:4px">Erste Host-IP</td><td style="border:1px solid #ccc;padding:4px">192.168.10.97</td><td style="border:1px solid #ccc;padding:4px">192.168.10.129</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:4px">Letzte Host-IP</td><td style="border:1px solid #ccc;padding:4px">192.168.10.126</td><td style="border:1px solid #ccc;padding:4px">192.168.10.158</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:4px">Broadcast</td><td style="border:1px solid #ccc;padding:4px">192.168.10.127</td><td style="border:1px solid #ccc;padding:4px">192.168.10.159</td></tr>'
        + '</table>'
        + '<p><strong>Broadcast bin\u00e4r:</strong> 127\u2081\u2080 = 01111111\u2082, 159\u2081\u2080 = 10011111\u2082</p>'
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
