const LessonsC6 = [

  // ===== LEKTION 17: DNS & IP im Internet finden =====
  {
    id: 17,
    title: 'DNS & IP im Internet finden',
    explanation: {
      html:
        '<h2>DNS & IP im Internet finden</h2>'
        + '<p>Das <strong>Domain Name System (DNS)</strong> ist das Telefonbuch des Internets: '
        + 'Es \u00fcbersetzt menschenlesbare Adressen (wie <em>www.uni-konstanz.de</em>) in IP-Adressen.</p>'
        + '<h3>DNS-Ablauf (Schritt f\u00fcr Schritt):</h3>'
        + '<ol>'
        + '<li><strong>Browser</strong> fragt den lokalen DNS-Resolver (meist vom Router)</li>'
        + '<li><strong>Lokaler Resolver</strong> fragt einen Root-Nameserver</li>'
        + '<li><strong>Root-Nameserver</strong> verweist an TLD-Nameserver (z.B. f\u00fcr .de)</li>'
        + '<li><strong>TLD-Nameserver</strong> verweist an Authoritative Nameserver der Domain</li>'
        + '<li><strong>Authoritative Nameserver</strong> antwortet mit der IP-Adresse</li>'
        + '</ol>'
        + '<h3>IP-Adresse in Dotted-Binary-Notation:</h3>'
        + '<p>Jedes der 4 Oktette wird einzeln in 8-Bit-Bin\u00e4r umgerechnet:</p>'
        + '<p><code>192.168.1.1</code> \u2192 <code>11000000.10101000.00000001.00000001</code></p>'
        + '<p><strong>Umrechnung 192\u2081\u2080 \u2192 11000000\u2082:</strong> 128+64 = 192 \u2192 11000000</p>'
    },
    example: {
      title: 'Beispiel: IP-Adresse in bin\u00e4re Punktnotation',
      steps: [
        {
          label: 'Oktett f\u00fcr Oktett: 10.20.30.40',
          html:
            '<p>10\u2081\u2080 = 00001010\u2082 (8+2=10)<br>'
            + '20\u2081\u2080 = 00010100\u2082 (16+4=20)<br>'
            + '30\u2081\u2080 = 00011110\u2082 (16+8+4+2=30)<br>'
            + '40\u2081\u2080 = 00101000\u2082 (32+8=40)<br>'
            + 'Ergebnis: <strong>00001010.00010100.00011110.00101000</strong></p>'
        },
        {
          label: 'DNS-Ablauf Beispiel',
          html:
            '<p>Du tippst www.uni-konstanz.de \u2192 Browser fragt Router \u2192 '
            + 'Router fragt Root-NS \u2192 Root-NS: frag den .de-Server \u2192 '
            + '.de-Server: frag den NS der uni-konstanz.de \u2192 '
            + 'Uni-NS antwortet: 134.34.3.1</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wof\u00fcr steht DNS?',
        options: [
          'Domain Name System \u2013 \u00fcbersetzt Domainnamen in IP-Adressen',
          'Dynamic Network Switch',
          'Data Network Service',
          'Distributed Node System'
        ],
        correct: 0,
        explanation: 'DNS = Domain Name System. Es \u00fcbersetzt www.example.com in eine IP-Adresse. Ohne DNS m\u00fcsste man jede IP-Adresse auswendig kennen.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist 192.168.1.1 in Dotted-Binary-Notation?',
        options: [
          '11000000.10101000.00000001.00000001',
          '11000000.10101000.00000001.00000000',
          '10000000.10101000.00000001.00000001',
          '11000000.11001000.00000001.00000001'
        ],
        correct: 0,
        explanation: '192=11000000, 168=10101000, 1=00000001, 1=00000001 \u2192 11000000.10101000.00000001.00000001'
      },
      {
        type: 'multiple-choice',
        question: 'In welcher Reihenfolge l\u00e4uft eine DNS-Anfrage ab?',
        options: [
          'Browser \u2192 lokaler Resolver \u2192 Root-NS \u2192 TLD-NS \u2192 Authoritative NS',
          'Browser \u2192 Authoritative NS direkt',
          'Browser \u2192 Root-NS \u2192 lokaler Resolver \u2192 TLD-NS',
          'Browser \u2192 TLD-NS \u2192 Root-NS \u2192 Authoritative NS'
        ],
        correct: 0,
        explanation: 'DNS-Hierarchie: lokaler Resolver kennt nichts \u2192 Root-NS kennt alle TLDs \u2192 TLD-NS kennt alle Domains der TLD \u2192 Authoritative NS kennt die spezifische Domain.'
      }
    ]
  },

  // ===== LEKTION 18: Netzwerkstruktur & Wahr/Falsch =====
  {
    id: 18,
    title: 'Netzwerkstruktur & Wahr/Falsch',
    explanation: {
      html:
        '<h2>Netzwerkstruktur & Wahr/Falsch-Aussagen</h2>'
        + '<p>In der Klausur musst du Aussagen \u00fcber Netzwerkkomponenten als wahr oder falsch bewerten:</p>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0">'
        + '<th style="border:1px solid #ccc;padding:6px">Ger\u00e4t</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Funktion</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Arbeitet auf Basis</th>'
        + '</tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><strong>Hub</strong></td>'
        + '<td style="border:1px solid #ccc;padding:6px">Verteilt Pakete an ALLE Ports</td>'
        + '<td style="border:1px solid #ccc;padding:6px">keine Intelligenz</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><strong>Switch</strong></td>'
        + '<td style="border:1px solid #ccc;padding:6px">Leitet Pakete gezielt weiter</td>'
        + '<td style="border:1px solid #ccc;padding:6px">MAC-Adresse (Schicht 2)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><strong>Router</strong></td>'
        + '<td style="border:1px solid #ccc;padding:6px">Verbindet verschiedene Netze</td>'
        + '<td style="border:1px solid #ccc;padding:6px">IP-Adresse (Schicht 3)</td></tr>'
        + '</table>'
        + '<h3>Wichtige Fakten:</h3>'
        + '<ul>'
        + '<li>Ein Switch leitet Pakete nur an den Empf\u00e4nger weiter (nicht broadcast wie ein Hub)</li>'
        + '<li>Ein Router trennt Broadcast-Dom\u00e4nen</li>'
        + '<li>Im selben Subnetz k\u00f6nnen Ger\u00e4te direkt kommunizieren (ohne Router)</li>'
        + '<li>Ger\u00e4te in verschiedenen Subnetzen brauchen einen Router</li>'
        + '<li>Eine MAC-Adresse identifiziert eine Netzwerkkarte weltweit eindeutig (48 Bit)</li>'
        + '</ul>'
    },
    example: {
      title: 'Beispiel: Typische Klausur-Aussagen bewerten',
      steps: [
        {
          label: 'Wahr: Switch arbeitet auf MAC-Ebene',
          html:
            '<p>Ein Switch liest die Ziel-MAC-Adresse und leitet das Paket nur an den entsprechenden Port. \u2192 <strong>WAHR</strong></p>'
        },
        {
          label: 'Falsch: Ein Hub ist intelligenter als ein Switch',
          html:
            '<p>Ein Hub sendet alles an ALLE Ports (Broadcast), er kennt keine Adressen. '
            + 'Ein Switch ist deutlich intelligenter. \u2192 <strong>FALSCH</strong></p>'
        },
        {
          label: 'Wahr: Ger\u00e4te im selben Subnetz kommunizieren ohne Router',
          html:
            '<p>Innerhalb eines Subnetzes kommunizieren Ger\u00e4te direkt \u00fcber MAC-Adressen. '
            + 'Erst f\u00fcr andere Subnetze wird ein Router ben\u00f6tigt. \u2192 <strong>WAHR</strong></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wahr oder falsch: "Ein Switch sendet jedes Paket an alle angeschlossenen Ger\u00e4te."',
        options: [
          'Falsch \u2013 ein Switch leitet gezielt anhand der MAC-Adresse des Empf\u00e4ngers weiter',
          'Wahr \u2013 das ist die Aufgabe eines Switches',
          'Wahr, aber nur im selben VLAN',
          'Falsch \u2013 das macht nur ein Router'
        ],
        correct: 0,
        explanation: 'Falsch: Das ist die Funktion eines Hubs (Broadcast). Ein Switch lernt MAC-Adressen und leitet Pakete nur an den richtigen Port.'
      },
      {
        type: 'multiple-choice',
        question: 'Auf welcher Basis arbeitet ein Router?',
        options: [
          'IP-Adresse (Schicht 3)',
          'MAC-Adresse (Schicht 2)',
          'Port-Nummer (Schicht 4)',
          'Domain-Namen (DNS)'
        ],
        correct: 0,
        explanation: 'Router arbeiten auf Schicht 3 und leiten Pakete anhand von IP-Adressen und Routing-Tabellen weiter.'
      },
      {
        type: 'multiple-choice',
        question: 'Zwei Computer in verschiedenen Subnetzen: Was ist n\u00f6tig damit sie kommunizieren k\u00f6nnen?',
        options: [
          'Ein Router, der die Subnetze verbindet',
          'Ein Switch reicht aus',
          'Ein Hub',
          'DNS alleine reicht'
        ],
        correct: 0,
        explanation: 'Verschiedene Subnetze = verschiedene Netzwerkadressen. Nur ein Router kann zwischen diesen Netzen weiterleiten.'
      },
      {
        type: 'multiple-choice',
        question: 'Wahr oder falsch: "MAC-Adressen sind 48 Bit lang und weltweit eindeutig."',
        options: [
          'Wahr',
          'Falsch \u2013 MAC-Adressen sind 32 Bit lang',
          'Falsch \u2013 MAC-Adressen sind nur im lokalen Netz eindeutig',
          'Falsch \u2013 MAC-Adressen sind 128 Bit lang'
        ],
        correct: 0,
        explanation: 'Wahr: MAC-Adressen sind 48 Bit lang (6 Byte) und pro Netzwerkkarte weltweit eindeutig.'
      }
    ]
  },

  // ===== LEKTION 19: IP-Adressen im Netz pr\u00fcfen =====
  {
    id: 19,
    title: 'IP-Adressen im Netz pr\u00fcfen',
    explanation: {
      html:
        '<h2>IP-Adressen im Netz pr\u00fcfen</h2>'
        + '<p>Um zu pr\u00fcfen ob eine IP-Adresse zu einem bestimmten Netz geh\u00f6rt:</p>'
        + '<p><strong>IP AND Maske = Netz-ID?</strong></p>'
        + '<p>Wenn ja \u2192 IP liegt im Netz. Wenn nein \u2192 IP liegt in einem anderen Netz.</p>'
        + '<h3>Direkte Kommunikation pr\u00fcfen:</h3>'
        + '<p>Zwei Hosts k\u00f6nnen <strong>direkt kommunizieren</strong> (ohne Router), '
        + 'wenn sie dieselbe Netz-ID haben (bei gleicher Subnetzmaske):</p>'
        + '<p><code>IP_A AND Maske = IP_B AND Maske?</code> \u2192 Falls ja: direkte Kommunikation m\u00f6glich</p>'
        + '<h3>Vorgehen:</h3>'
        + '<ol>'
        + '<li>IP-Adresse bin\u00e4r schreiben (nur relevantes Oktett)</li>'
        + '<li>Bitweises AND mit Subnetzmaske</li>'
        + '<li>Ergebnis mit bekannter Netz-ID vergleichen</li>'
        + '</ol>'
    },
    example: {
      title: 'Beispiel: Liegt 192.168.10.130 im Netz 192.168.10.128/27?',
      steps: [
        {
          label: 'IP und Netz-ID des Netzes',
          html:
            '<p>Netz: 192.168.10.128/27<br>IP zu pr\u00fcfen: 192.168.10.130</p>'
        },
        {
          label: 'Berechnung im letzten Oktett',
          html:
            '<p>130\u2081\u2080 = 10000010\u2082<br>'
            + 'Maske /27 letztes Oktett = 11100000\u2082<br>'
            + 'AND: 10000010 \u2227 11100000 = 10000000 = 128\u2081\u2080<br>'
            + 'Netz-ID der IP = 192.168.10.128 \u2713 \u2192 IP liegt im Netz!</p>'
        },
        {
          label: 'Gegenbeweis: 192.168.10.96 nicht in .128/27',
          html:
            '<p>96\u2081\u2080 = 01100000\u2082<br>'
            + '01100000 \u2227 11100000 = 01100000 = 96\u2081\u2080<br>'
            + 'Netz-ID = 192.168.10.96 \u2260 192.168.10.128 \u2192 nicht im Netz!</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Mit welcher Operation pr\u00fcft man ob eine IP zu einem Subnetz geh\u00f6rt?',
        options: [
          'IP AND Subnetzmaske = Netz-ID des Subnetzes',
          'IP OR Subnetzmaske = Netz-ID',
          'IP XOR Subnetzmaske',
          'IP - Subnetzmaske = 0'
        ],
        correct: 0,
        explanation: 'IP AND Maske liefert die Netz-ID der IP. Stimmt diese mit der bekannten Netz-ID \u00fcberein, liegt die IP im Netz.'
      },
      {
        type: 'multiple-choice',
        question: 'Liegt 192.168.1.50 im Netz 192.168.1.0/24?',
        options: [
          'Ja \u2013 192.168.1.50 AND 255.255.255.0 = 192.168.1.0 \u2713',
          'Nein \u2013 50 ist zu gro\u00df',
          'Nein \u2013 die Netz-IDs stimmen nicht \u00fcberein',
          'Ja \u2013 aber nur als Broadcast'
        ],
        correct: 0,
        explanation: '192.168.1.50 AND 255.255.255.0: letztes Oktett 50 AND 0 = 0. Ergebnis: 192.168.1.0 = Netz-ID \u2713. IP liegt im Netz.'
      },
      {
        type: 'multiple-choice',
        question: 'Host A: 192.168.5.10/24. Host B: 192.168.5.200/24. K\u00f6nnen sie direkt kommunizieren?',
        options: [
          'Ja \u2013 beide haben Netz-ID 192.168.5.0, kein Router n\u00f6tig',
          'Nein \u2013 unterschiedliche letzte Oktette',
          'Ja \u2013 aber nur mit NAT',
          'Nein \u2013 /24 erlaubt keine direkte Kommunikation'
        ],
        correct: 0,
        explanation: '10 AND 255=10 \u2192 Netz 192.168.5.0. 200 AND 255=200 \u2192 Netz 192.168.5.0. Gleiche Netz-ID \u2192 direkte Kommunikation m\u00f6glich.'
      }
    ]
  },

  // ===== LEKTION 20: Routing-Tabellen ausf\u00fcllen =====
  {
    id: 20,
    title: 'Routing-Tabellen ausf\u00fcllen',
    explanation: {
      html:
        '<h2>Routing-Tabellen ausf\u00fcllen</h2>'
        + '<p>Ein Router hat eine <strong>Routing-Tabelle</strong>: Sie gibt an, wohin er Pakete f\u00fcr bestimmte Zielnetze weiterleiten soll.</p>'
        + '<h3>Wichtige Berechnungen:</h3>'
        + '<ul>'
        + '<li><strong>Netzwerkziel (ND):</strong> Ziel-IP AND Subnetzmaske = Netzwerkziel</li>'
        + '<li><strong>Subnetzmaske aus CIDR:</strong> /24 = 255.255.255.0, /27 = 255.255.255.224</li>'
        + '<li><strong>IP geh\u00f6rt zum Netz wenn:</strong> IP AND Maske = Netz-ID</li>'
        + '<li><strong>Router-Interface-IP:</strong> Erste nutzbare Adresse = Netz-ID + 1</li>'
        + '</ul>'
        + '<h3>Routing-Tabellen-Spalten:</h3>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0">'
        + '<th style="border:1px solid #ccc;padding:4px">Spalte</th>'
        + '<th style="border:1px solid #ccc;padding:4px">Bedeutung</th>'
        + '</tr>'
        + '<tr><td style="border:1px solid #ccc;padding:4px">Ziel-Netz</td>'
        + '<td style="border:1px solid #ccc;padding:4px">Welches Netz ist das Ziel?</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:4px">Subnetzmaske</td>'
        + '<td style="border:1px solid #ccc;padding:4px">Maske des Zielnetzes</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:4px">Gateway</td>'
        + '<td style="border:1px solid #ccc;padding:4px">IP des n\u00e4chsten Routers (n\u00e4chster Hop)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:4px">Interface</td>'
        + '<td style="border:1px solid #ccc;padding:4px">Welches Netzwerk-Interface des Routers?</td></tr>'
        + '</table>'
    },
    example: {
      title: 'Klausur-Beispiel: Routing-Tabelle ausf\u00fcllen',
      steps: [
        {
          label: 'Gegeben: Ziel-IP 192.168.10.130, Maske /27',
          html:
            '<p>Subnetzmaske /27 = 255.255.255.224<br>'
            + 'Netzwerkziel (ND): 192.168.10.130 AND 255.255.255.224<br>'
            + '130\u2081\u2080 = 10000010\u2082, 224\u2081\u2080 = 11100000\u2082<br>'
            + '10000010 \u2227 11100000 = 10000000 = 128\u2081\u2080<br>'
            + 'ND = 192.168.10.128</p>'
        },
        {
          label: 'Router-Interface-IP',
          html:
            '<p>Router-Interface liegt im Zielnetz 192.168.10.128/27.<br>'
            + 'Interface-IP = erste nutzbare Adresse = Netz-ID + 1 = 192.168.10.129</p>'
        },
        {
          label: 'Routing-Tabelleneintrag',
          html:
            '<p>Ziel-Netz: 192.168.10.128<br>'
            + 'Subnetzmaske: 255.255.255.224<br>'
            + 'Gateway: direkt (Netz ist direkt angeschlossen)<br>'
            + 'Interface: eth1</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was bedeutet der "Gateway"-Eintrag in einer Routing-Tabelle?',
        options: [
          'Die IP des n\u00e4chsten Routers, an den das Paket weitergeleitet wird',
          'Die IP des Zielhosts',
          'Die eigene IP-Adresse des Routers',
          'Die Broadcast-Adresse des Zielnetzes'
        ],
        correct: 0,
        explanation: 'Gateway = n\u00e4chster Hop. Der Router schickt das Paket an diesen n\u00e4chsten Router, wenn das Ziel nicht direkt erreichbar ist.'
      },
      {
        type: 'multiple-choice',
        question: 'Ziel-IP: 10.0.0.50, Maske: 255.255.255.0. Was ist das Netzwerkziel (ND)?',
        options: ['10.0.0.0', '10.0.0.50', '10.0.0.255', '255.255.255.0'],
        correct: 0,
        explanation: '10.0.0.50 AND 255.255.255.0: letztes Oktett 50 AND 0 = 0. ND = 10.0.0.0'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist die erste nutzbare Host-IP im Netz 172.16.0.0/24?',
        options: ['172.16.0.1', '172.16.0.0', '172.16.0.254', '172.16.1.0'],
        correct: 0,
        explanation: 'Netz-ID 172.16.0.0 ist reserviert. Erste nutzbare Host-IP = Netz-ID + 1 = 172.16.0.1.'
      }
    ]
  },

  // ===== LEKTION 21: Netzwerktopologien =====
  {
    id: 21,
    title: 'Netzwerktopologien',
    explanation: {
      html:
        '<h2>Netzwerktopologien</h2>'
        + '<p>Die Topologie beschreibt die <strong>physische oder logische Anordnung</strong> der Netzwerkkomponenten.</p>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0">'
        + '<th style="border:1px solid #ccc;padding:6px">Topologie</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Aufbau</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Kabelausfall</th>'
        + '<th style="border:1px solid #ccc;padding:6px">Typisch f\u00fcr</th>'
        + '</tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><strong>Stern</strong></td>'
        + '<td style="border:1px solid #ccc;padding:6px">Alle Ger\u00e4te am zentralen Switch/Hub</td>'
        + '<td style="border:1px solid #ccc;padding:6px">Nur dieses Ger\u00e4t betroffen</td>'
        + '<td style="border:1px solid #ccc;padding:6px">B\u00fcro, Heimnetz</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><strong>Ring</strong></td>'
        + '<td style="border:1px solid #ccc;padding:6px">Ger\u00e4te kreisf\u00f6rmig verbunden</td>'
        + '<td style="border:1px solid #ccc;padding:6px">Ring unterbrochen \u2192 Ausfall m\u00f6glich</td>'
        + '<td style="border:1px solid #ccc;padding:6px">\u00c4ltere Token-Ring-Netze</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><strong>Baum</strong></td>'
        + '<td style="border:1px solid #ccc;padding:6px">Hierarchisch (Switches in Ebenen)</td>'
        + '<td style="border:1px solid #ccc;padding:6px">Ausfall eines Knotens \u2192 alle darunter betroffen</td>'
        + '<td style="border:1px solid #ccc;padding:6px">Schulnetz, Firmennetz</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><strong>Linie/Bus</strong></td>'
        + '<td style="border:1px solid #ccc;padding:6px">Alle an einem Kabel</td>'
        + '<td style="border:1px solid #ccc;padding:6px">Ein Bruch trennt alles</td>'
        + '<td style="border:1px solid #ccc;padding:6px">\u00c4ltere Ethernet-Netze</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px"><strong>Gemischt</strong></td>'
        + '<td style="border:1px solid #ccc;padding:6px">Kombination der obigen</td>'
        + '<td style="border:1px solid #ccc;padding:6px">Je nach Bereich</td>'
        + '<td style="border:1px solid #ccc;padding:6px">Gro\u00dfe Unternehmensnetze</td></tr>'
        + '</table>'
        + '<p><strong>Stern ist am ausfall-sichersten</strong> bei einzelnem Kabelbruch: '
        + 'F\u00e4llt ein Kabel aus, ist nur das betreffende Ger\u00e4t offline.</p>'
    },
    example: {
      title: 'Beispiel: Topologie nach Anforderung w\u00e4hlen',
      steps: [
        {
          label: 'Schulnetz mit vielen R\u00e4umen \u2192 Baum',
          html:
            '<p>Zentraler Router \u2192 Verteiler-Switches pro Etage \u2192 Switches pro Raum \u2192 PCs. '
            + 'Das ist eine hierarchische Baumstruktur.</p>'
        },
        {
          label: 'Kleines B\u00fcro mit einem Switch \u2192 Stern',
          html:
            '<p>Alle 10 PCs per Kabel an einen zentralen Switch. Einfach, g\u00fcnstig, '
            + 'ausfall-sicher bei Einzel-Kabelbruch.</p>'
        },
        {
          label: 'Robustheit bei Kabelbruch',
          html:
            '<p><strong>Stern:</strong> Kabel von PC3 bricht \u2192 nur PC3 offline, alle anderen laufen weiter \u2713<br>'
            + '<strong>Linie/Bus:</strong> Kabel in der Mitte bricht \u2192 Netz getrennt \u2717<br>'
            + '<strong>Ring:</strong> Ein Bruch \u2192 je nach Protokoll Ausfall m\u00f6glich \u2717</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Topologie ist bei einem einzelnen Kabelbruch am ausfall-sichersten?',
        options: ['Stern', 'Ring', 'Linie/Bus', 'Baum'],
        correct: 0,
        explanation: 'Beim Stern ist nur das Ger\u00e4t betroffen, dessen Kabel bricht. Der zentrale Switch l\u00e4uft weiter, alle anderen Ger\u00e4te sind unbeeintr\u00e4chtigt.'
      },
      {
        type: 'multiple-choice',
        question: 'Eine Schule hat: Zentralen Router \u2192 Etagen-Switches \u2192 Raum-Switches \u2192 PCs. Welche Topologie ist das?',
        options: ['Baum (hierarchisch)', 'Stern', 'Ring', 'Linie/Bus'],
        correct: 0,
        explanation: 'Hierarchisch gestaffelte Switches bilden eine Baumstruktur: Wurzel (Router) \u2192 \u00c4ste (Etagen-Switches) \u2192 Bl\u00e4tter (Raum-Switches/PCs).'
      },
      {
        type: 'multiple-choice',
        question: 'Was passiert beim Linie/Bus-Netz wenn das Kabel in der Mitte bricht?',
        options: [
          'Das Netz wird in zwei unverbundene H\u00e4lften getrennt',
          'Nur das n\u00e4chste Ger\u00e4t f\u00e4llt aus',
          'Alle Ger\u00e4te fallen aus au\u00dfer dem zentralen Switch',
          'Nichts \u2013 Bus-Netze sind redundant'
        ],
        correct: 0,
        explanation: 'Beim Bus/Linie-Netz h\u00e4ngen alle Ger\u00e4te an einem einzigen Kabel. Ein Bruch trennt das Netz in zwei H\u00e4lften.'
      },
      {
        type: 'multiple-choice',
        question: 'Wof\u00fcr steht die Topologie "Stern" typischerweise?',
        options: [
          'Alle Ger\u00e4te sind mit einem zentralen Switch/Hub verbunden',
          'Alle Ger\u00e4te sind kreisf\u00f6rmig verbunden',
          'Alle Ger\u00e4te an einem einzigen Kabel',
          'Hierarchisch gestaffelte Switches'
        ],
        correct: 0,
        explanation: 'Stern: alle Ger\u00e4te strahlen von einem zentralen Punkt (Switch) aus. Wie die Arme eines Sterns von der Mitte.'
      }
    ]
  }

];
