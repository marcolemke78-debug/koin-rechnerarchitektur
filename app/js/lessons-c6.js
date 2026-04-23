const LessonsC6 = [

  // ===== LEKTION 17: DNS & IP im Internet finden =====
  {
    id: 17,
    title: 'DNS & IP im Internet finden',
    explanation: {
      html:
        '<h2>DNS & IP im Internet finden</h2>'
        + '<p>Das <strong>Domain Name System (DNS)</strong> ist eine Art Telefonbuch des Internets: Es \u00FCbersetzt menschenlesbare Adressen (wie <em>www.uni-konstanz.de</em>) in IP-Adressen (wie <em>134.34.3.1</em>), die der Computer zum Routen braucht.</p>'
        + '<div class="analogy-box">'
        + '<strong>Telefonbuch-Analogie:</strong> Du merkst dir Namen leichter als Nummern. Wenn du jemanden anrufen willst, schl\u00E4gst du seinen Namen im Telefonbuch nach und bekommst die Nummer. Genauso bei DNS: Du tippst einen Namen (Domain) ein, und hinter den Kulissen fragt dein Computer bei verschiedenen DNS-Servern nach der zugeh\u00F6rigen IP-Adresse.'
        + '</div>'
        + '<h3>DNS-Ablauf (Schritt f\u00FCr Schritt):</h3>'
        + '<ol>'
        + '<li><strong>Browser</strong> fragt den lokalen DNS-Resolver (meist im Router des Heimnetzwerks).</li>'
        + '<li><strong>Lokaler Resolver</strong> fragt einen <em>Root-Nameserver</em> (\u201Ewer ist f\u00FCr .de zust\u00E4ndig?\u201C).</li>'
        + '<li><strong>Root-NS</strong> verweist an den <em>TLD-Nameserver</em> (f\u00FCr .de).</li>'
        + '<li><strong>TLD-NS</strong> verweist an den <em>Authoritative Nameserver</em> der konkreten Domain (z.B. uni-konstanz.de).</li>'
        + '<li><strong>Authoritative NS</strong> antwortet endlich mit der IP-Adresse.</li>'
        + '</ol>'
        + '<div class="why-context">'
        + '<strong>Warum so kompliziert?</strong> Kein einzelner Server k\u00F6nnte die Milliarden Domain-Namen speichern. Die Aufteilung in Root/TLD/Authoritative verteilt die Arbeit und macht das System <em>skalierbar</em> und <em>ausfallsicher</em>. F\u00E4llt ein .de-Server aus, springt ein anderer ein. Zus\u00E4tzlich gibt es <em>Caching</em>: oft gefragte Namen merkt sich der Router, damit nicht bei jedem Aufruf die ganze Kette durchlaufen wird.</p><p style="margin:6px 0 0 0">Unten siehst du den grunds\u00E4tzlichen Weg, den ein Datenpaket durchs Internet nimmt (Sender \u2192 Router \u2192 Internet \u2192 Router \u2192 Empf\u00E4nger). DNS ist eine Vorabfrage, damit der Router \u00FCberhaupt wei\u00DF, wohin das Paket soll.'
        + '</div>'
        + '<h3>IP-Adresse in Dotted-Binary-Notation:</h3>'
        + '<p>Wenn du eine IP-Adresse von Dezimal in Bin\u00E4r umrechnest, schreibst du jedes der 4 Oktette einzeln als 8-Bit-Bin\u00E4rzahl, getrennt durch Punkte:</p>'
        + '<p><code>192.168.1.1</code> \u2192 <code>11000000.10101000.00000001.00000001</code></p>'
        + '<p>Umrechnung 192\u2081\u2080 \u2192 Bin\u00E4r: 128+64 = 192, also <code>11000000</code>.</p>'
        + '<p>Der IP-Konverter unten macht genau das f\u00FCr dich \u2013 interaktiv.</p>',
      visuals: [
        { type: 'network-diagram', preset: 'internet-overview', label: 'Paket-Weg durchs Internet: Sender \u2192 Router \u2192 Internet \u2192 Router \u2192 Empf\u00E4nger' },
        { type: 'ip-converter', label: 'IP-Konverter \u2013 Dezimal \u2194 Dotted-Binary live' }
      ]
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
        examRelevant: true,
        question: 'In welcher Reihenfolge l\u00e4uft eine DNS-Anfrage ab?',
        options: [
          'Browser \u2192 lokaler Resolver \u2192 Root-NS \u2192 TLD-NS \u2192 Authoritative NS',
          'Browser \u2192 Authoritative NS direkt',
          'Browser \u2192 Root-NS \u2192 lokaler Resolver \u2192 TLD-NS',
          'Browser \u2192 TLD-NS \u2192 Root-NS \u2192 Authoritative NS'
        ],
        correct: 0,
        explanation: 'DNS-Hierarchie: lokaler Resolver kennt nichts \u2192 Root-NS kennt alle TLDs \u2192 TLD-NS kennt alle Domains der TLD \u2192 Authoritative NS kennt die spezifische Domain.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: '<strong>Reflexionsfrage:</strong> Ein Angreifer hat einen DNS-Server \u00FCbernommen. Was ist die gef\u00E4hrlichste Folge?',
        options: [
          'Websites laden etwas langsamer',
          'Er kann Nutzer auf gef\u00E4lschte Seiten umleiten (DNS-Spoofing)',
          'Er kann die eigentliche IP-Adresse des Servers \u00E4ndern',
          'Gar nichts, DNS ist nur ein Verzeichnis'
        ],
        correct: 1,
        explanation: 'DNS \u00FCbersetzt Namen in IPs. Wer den DNS-Server kontrolliert, kann Anfragen f\u00FCr z.\u202FB. <code>bank.de</code> auf eine gef\u00E4lschte Server-IP lenken (DNS-Spoofing). Der echte Server wird nicht ver\u00E4ndert \u2013 aber die Nutzer landen woanders.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Ein Webdienst zieht auf einen neuen Server mit neuer IP um. Der Betreiber \u00E4ndert den DNS-Eintrag. Warum sehen nicht <em>alle</em> Nutzer sofort den neuen Server?',
        options: [
          'DNS-Antworten werden gecacht \u2013 erst nach Ablauf der TTL wird die neue IP geholt',
          'Die alte IP wird automatisch gesperrt',
          'Der Router muss neu gestartet werden',
          'DNS-Updates funktionieren nur stundenweise'
        ],
        correct: 0,
        explanation: 'DNS-Antworten werden lokal und bei Zwischen-Resolvern <em>gecacht</em>, mit einer Time-to-Live (TTL). Erst wenn die TTL abgelaufen ist, fragt ein Resolver erneut an und holt sich die neue IP. Bei Umz\u00FCgen setzen Betreiber deshalb oft die TTL vorab niedrig.'
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
        + '<p>In der Klausur musst du oft Aussagen \u00FCber Netzwerkkomponenten (Hub, Switch, Router, Access Point) als wahr oder falsch bewerten. Daf\u00FCr musst du ihre <strong>Funktionen</strong> und die <strong>Schicht</strong>, auf der sie arbeiten, kennen.</p>'
        + '<div class="analogy-box">'
        + '<strong>Postamt-Analogie:</strong>'
        + '<ul style="margin:6px 0 0 0;padding-left:22px">'
        + '<li><strong>Hub</strong> = wie der <em>Gemeinde-Aushang</em>: jede Nachricht h\u00E4ngt f\u00FCr alle sichtbar aus, alle sehen alles.</li>'
        + '<li><strong>Switch</strong> = wie der <em>Briefkasten pro Haushalt</em>: jede Nachricht landet nur beim richtigen Empf\u00E4nger.</li>'
        + '<li><strong>Router</strong> = wie das <em>Hauptpostamt</em>: vermittelt Briefe zwischen verschiedenen St\u00E4dten (= verschiedenen Netzen).</li>'
        + '</ul>'
        + '</div>'
        + '<h3>Die wichtigsten Ger\u00E4te:</h3>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0">'
        + '<th style="border:1px solid #ccc;padding:6px 10px">Ger\u00E4t</th>'
        + '<th style="border:1px solid #ccc;padding:6px 10px">Funktion</th>'
        + '<th style="border:1px solid #ccc;padding:6px 10px">Arbeitet auf Basis</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Hub</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Verteilt Pakete an ALLE Ports</td><td style="border:1px solid #ccc;padding:6px 10px">keine Intelligenz</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Switch</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Leitet Pakete gezielt weiter</td><td style="border:1px solid #ccc;padding:6px 10px">MAC-Adresse (Schicht 2)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Router</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Verbindet verschiedene Netze</td><td style="border:1px solid #ccc;padding:6px 10px">IP-Adresse (Schicht 3)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Access Point</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Br\u00FCcke WLAN \u2194 Kabel</td><td style="border:1px solid #ccc;padding:6px 10px">MAC-Adresse (Schicht 2)</td></tr>'
        + '</table>'
        + '<div class="tip-box">'
        + '<strong>Merke \u2013 Switch vs. Router:</strong> Switch arbeitet <em>innerhalb</em> eines Netzes (Layer 2, MAC-Adressen). Router verbindet <em>verschiedene</em> Netze (Layer 3, IP-Adressen). Hub ist wie ein Switch, nur dumm \u2013 schickt jedes Paket an alle. Wahr/Falsch-Aufgaben drehen sich oft um genau diese Abgrenzung.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum lernen wir das Ger\u00E4te-Inventar?</strong> Eine Klausur-Aufgabe kann sein: \u201ESkizziere ein Schulnetz mit Internet-Zugang\u201C. Ohne die Funktionen zu kennen, zeichnest du entweder das falsche Ger\u00E4t oder vergisst die Router-Ebene. In der Realit\u00E4t bestimmt die richtige Ger\u00E4tewahl, ob dein Netzwerk funktioniert \u2013 und in der Klausur entscheidet sie dar\u00FCber, ob du die Aufgabe richtig l\u00F6st.'
        + '</div>'
        + '<h3>Wichtige Fakten (klausurrelevant):</h3>'
        + '<ul>'
        + '<li>Ein <strong>Switch</strong> leitet Pakete nur an den Empf\u00E4nger weiter (<em>nicht</em> broadcast wie ein Hub).</li>'
        + '<li>Ein <strong>Router</strong> trennt Broadcast-Dom\u00E4nen.</li>'
        + '<li>Im selben Subnetz k\u00F6nnen Ger\u00E4te direkt kommunizieren (ohne Router).</li>'
        + '<li>Ger\u00E4te in verschiedenen Subnetzen brauchen einen Router zur Vermittlung.</li>'
        + '<li>Eine <strong>MAC-Adresse</strong> ist 48 Bit lang und identifiziert eine Netzwerkkarte weltweit eindeutig.</li>'
        + '</ul>'
        + '<p><strong>Beispiel-Netzwerk:</strong> Unten siehst du eine typische Schul-Netzwerk-Struktur mit Internet, Modem, Router, Switch und Access Point. Beobachte, welche Ger\u00E4te auf welcher Ebene sitzen.</p>',
      visuals: [
        { type: 'network-diagram', preset: 'school-network', label: 'Typische Schul-Netzwerk-Struktur' }
      ]
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
        examRelevant: true,
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
        examRelevant: true,
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
        '<h2>IP-Adressen im Netz pr\u00FCfen</h2>'
        + '<p>Um zu pr\u00FCfen, ob eine IP-Adresse zu einem bestimmten Netz geh\u00F6rt, rechnest du:</p>'
        + '<p style="text-align:center;font-size:1.1em;padding:10px;background:#f3f4f6;border-radius:4px;margin:12px 0"><strong>Netz-ID = IP \u2227 Maske</strong></p>'
        + '<p>Ist das Ergebnis gleich der Soll-Netz-ID \u2192 IP geh\u00F6rt ins Netz. Sonst \u2192 IP geh\u00F6rt in ein anderes Netz.</p>'
        + '<div class="analogy-box">'
        + '<strong>T\u00FCrsteher-Analogie:</strong> Stell dir den Router als T\u00FCrsteher vor. Jede ankommende IP-Adresse wird \u201Edurch die Schablone\u201C (Subnetzmaske) angeschaut. Wenn die Netz-ID passt, darf das Paket ins Netz. Wenn nicht, wird es an einen anderen Router weitergereicht. Die Maskenanwendung ist der <em>Zugangstest</em>.'
        + '</div>'
        + '<h3>Direkte Kommunikation pr\u00FCfen:</h3>'
        + '<p>Zwei Ger\u00E4te A und B k\u00F6nnen direkt (ohne Router) kommunizieren, wenn sie im <strong>gleichen Subnetz</strong> liegen:</p>'
        + '<ol>'
        + '<li>Berechne Netz-ID von A (IP_A AND Maske).</li>'
        + '<li>Berechne Netz-ID von B (IP_B AND Maske).</li>'
        + '<li>Gleich? \u2192 direkte Kommunikation m\u00F6glich. Unterschiedlich? \u2192 Router n\u00F6tig.</li>'
        + '</ol>'
        + '<div class="warning-box">'
        + '<strong>Merksatz:</strong> Zwei Hosts k\u00f6nnen nur dann <em>direkt</em> miteinander sprechen, wenn sie in <strong>derselben</strong> Netz-ID liegen. Sonst muss ein Router (Gateway) dazwischen. Pr\u00fcfregel: beide Host-IPs mit der Maske ANDen \u2013 gleiches Ergebnis = selbes Netz.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum ist das wichtig?</strong> In der Praxis (und in der Klausur) musst du oft entscheiden: \u201EK\u00F6nnen diese zwei Ger\u00E4te direkt miteinander sprechen, oder muss ein Router dazwischen?\u201C Falsche Antwort bedeutet: das Netzwerk funktioniert nicht \u2013 oder du baust unn\u00F6tig Router ein, die die Performance drosseln. Die Subnetz-Rechnung ist das diagnostische Werkzeug daf\u00FCr.'
        + '</div>'
        + '<p>Der <strong>Subnet-Rechner</strong> unten liefert dir IP AND Maske direkt \u2013 ideal, um Aufgaben aus dem \u00DCbungsblatt zu pr\u00FCfen.</p>',
      visuals: [
        { type: 'subnet-calculator', label: 'Subnet-Rechner \u2013 pr\u00FCfe IP AND Maske = Netz-ID' }
      ]
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
        examRelevant: true,
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
        examRelevant: true,
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
        '<h2>Routing-Tabellen ausf\u00FCllen</h2>'
        + '<p>Ein Router hat eine <strong>Routing-Tabelle</strong>: eine Liste, die f\u00FCr jedes Ziel-Netz angibt, wohin er das Paket weiterleiten soll. Ohne Routing-Tabelle w\u00E4re ein Router blind \u2013 er w\u00FCsste nicht, welcher Nachbar n\u00E4her am Ziel ist.</p>'
        + '<div class="analogy-box">'
        + '<strong>Wegweiser-Analogie:</strong> Stell dir eine Autobahn-Kreuzung vor. Der Router steht als gro\u00DFer Wegweiser: \u201Ef\u00FCr K\u00F6ln \u2192 rechts abbiegen, f\u00FCr M\u00FCnchen \u2192 geradeaus, f\u00FCr Berlin \u2192 links\u201C. Die Routing-Tabelle ist genau dieser Wegweiser: Pro Ziel-Netz eine Zeile mit der Richtung (Gateway) und dem Ausgang (Interface).'
        + '</div>'
        + '<h3>Die 4 Spalten einer Routing-Tabelle:</h3>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:6px 10px">Spalte</th><th style="border:1px solid #ccc;padding:6px 10px">Bedeutung</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Ziel-Netz (ND)</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Welches Netzwerk soll erreicht werden? (berechnet via IP \u2227 Maske)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Subnetzmaske</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Maske des Ziel-Netzes (z.B. /24 = 255.255.255.0)</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Gateway</strong></td><td style="border:1px solid #ccc;padding:6px 10px">IP des n\u00E4chsten Routers (der \u201En\u00E4chste Hop\u201C). \u201E-\u201C oder \u201Edirekt\u201C wenn Netz lokal.</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Interface</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Welches Interface am Router (z.B. eth0, eth1)?</td></tr>'
        + '</table>'
        + '<h3>Wichtige Berechnungen (die du f\u00FCr jede Zeile beherrschen musst):</h3>'
        + '<ul>'
        + '<li><strong>Netzwerkziel (ND):</strong> Ziel-IP AND Subnetzmaske \u2192 Netzwerkziel</li>'
        + '<li><strong>Subnetzmaske aus CIDR:</strong> /24 = 255.255.255.0, /27 = 255.255.255.224, /30 = 255.255.255.252</li>'
        + '<li><strong>Router-Interface-IP:</strong> meist die <em>erste nutzbare Adresse</em> des Netzes (Netz-ID + 1)</li>'
        + '</ul>'
        + '<h3>Default-Route: der Joker</h3>'
        + '<p>Eine spezielle Zeile in jeder Routing-Tabelle ist die <strong>Default-Route</strong> (Standardroute). Sie hat <code>ND = 0.0.0.0</code> und <code>Maske = 0.0.0.0</code> (/0). Sie wird genommen, wenn keine andere Zeile passt \u2013 quasi die Ausfahrt "Rest der Welt".</p>'
        + '<div class="tip-box">'
        + '<strong>Klausur-Merke:</strong> Bei einer Routing-Entscheidung pr\u00FCfst du <em>jede Zeile</em> (IP AND Maske = ND der Zeile?). Passen mehrere, gewinnt die mit der <em>l\u00E4ngsten Maske</em> (engste Passung = longest prefix match). Die Default-Route passt immer \u2013 aber sie ist die k\u00FCrzeste, also nur letzte Wahl.'
        + '</div>'
        + '<div class="why-context">'
        + '<strong>Warum steht oft \u201Edirekt\u201C beim Gateway?</strong> Wenn der Router das Ziel-Netz <em>selbst direkt angeschlossen</em> hat (\u00FCber eines seiner Interfaces), muss er nicht an einen anderen Router weiterreichen. Er kann das Paket direkt ins lokale Netz legen. Deshalb steht dort \u201Edirekt\u201C oder \u201E-\u201C statt einer Gateway-IP.'
        + '</div>'
        + '<p>Weil Routing-Tabellen <em>reine Rechenaufgaben</em> sind (IP AND Maske, Netz-ID+1), lohnt sich f\u00FCr die Berechnung der Subnet-Rechner unten. Damit pr\u00FCfst du jede Zeile schnell selbst.</p>',
      visuals: [
        { type: 'subnet-calculator', label: 'Subnet-Rechner \u2013 ND und Interface-IP berechnen' }
      ]
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
        examRelevant: true,
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
        examRelevant: true,
        question: 'Ziel-IP: 10.0.0.50, Maske: 255.255.255.0. Was ist das Netzwerkziel (ND)?',
        options: ['10.0.0.0', '10.0.0.50', '10.0.0.255', '255.255.255.0'],
        correct: 0,
        explanation: '10.0.0.50 AND 255.255.255.0: letztes Oktett 50 AND 0 = 0. ND = 10.0.0.0'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Was ist die erste nutzbare Host-IP im Netz 172.16.0.0/24?',
        options: ['172.16.0.1', '172.16.0.0', '172.16.0.254', '172.16.1.0'],
        correct: 0,
        explanation: 'Netz-ID 172.16.0.0 ist reserviert. Erste nutzbare Host-IP = Netz-ID + 1 = 172.16.0.1.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: '<strong>Routing-Klausur:</strong> Ein Router hat folgende Tabelle:<br><table style="border-collapse:collapse;margin:8px 0;font-size:0.9em;"><tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:4px 8px">ND</th><th style="border:1px solid #ccc;padding:4px 8px">Maske</th><th style="border:1px solid #ccc;padding:4px 8px">Gateway</th><th style="border:1px solid #ccc;padding:4px 8px">IF</th></tr><tr><td style="border:1px solid #ccc;padding:4px 8px">192.168.1.0</td><td style="border:1px solid #ccc;padding:4px 8px">/24</td><td style="border:1px solid #ccc;padding:4px 8px">direkt</td><td style="border:1px solid #ccc;padding:4px 8px">eth1</td></tr><tr><td style="border:1px solid #ccc;padding:4px 8px">192.168.2.0</td><td style="border:1px solid #ccc;padding:4px 8px">/24</td><td style="border:1px solid #ccc;padding:4px 8px">10.0.0.2</td><td style="border:1px solid #ccc;padding:4px 8px">eth0</td></tr><tr><td style="border:1px solid #ccc;padding:4px 8px">10.0.0.0</td><td style="border:1px solid #ccc;padding:4px 8px">/24</td><td style="border:1px solid #ccc;padding:4px 8px">direkt</td><td style="border:1px solid #ccc;padding:4px 8px">eth0</td></tr><tr><td style="border:1px solid #ccc;padding:4px 8px">0.0.0.0</td><td style="border:1px solid #ccc;padding:4px 8px">/0</td><td style="border:1px solid #ccc;padding:4px 8px">10.0.0.1</td><td style="border:1px solid #ccc;padding:4px 8px">eth0</td></tr></table>Ein Paket soll an <code>192.168.1.50</code>. \u00DCber welches Interface geht es?',
        options: ['eth0', 'eth1', 'direkt \u2013 keine Weiterleitung n\u00F6tig', 'Default-Route \u00FCber 10.0.0.1'],
        correct: 1,
        explanation: '192.168.1.50 AND 255.255.255.0 = 192.168.1.0 \u2192 Zeile 1 passt. Interface eth1, direkt im angeschlossenen Netz.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Gleiche Routing-Tabelle wie oben. Ein Paket soll an <code>8.8.8.8</code>. Welcher Gateway wird gew\u00E4hlt?',
        options: ['direkt', '10.0.0.2', '10.0.0.1 (Default-Route)', 'Paket wird verworfen'],
        correct: 2,
        explanation: '8.8.8.8 passt zu keiner der ersten drei Zeilen (keine der Netze 192.168.1.0/24, 192.168.2.0/24, 10.0.0.0/24 umschlie\u00DFt 8.8.8.8). Also greift die Default-Route: Gateway 10.0.0.1, Interface eth0.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Gleiche Tabelle. Ziel <code>192.168.2.77</code> \u2013 welche Route?',
        options: ['Direkt \u00FCber eth1', 'Gateway 10.0.0.2 \u00FCber eth0', 'Default-Route 10.0.0.1', 'Paket verworfen'],
        correct: 1,
        explanation: '192.168.2.77 AND 255.255.255.0 = 192.168.2.0 \u2192 Zeile 2 passt. Gateway 10.0.0.2, Interface eth0.'
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
        + '<p>Die <strong>Topologie</strong> beschreibt die physische oder logische Anordnung der Ger\u00E4te und Kabel in einem Netzwerk. In der Klausur solltest du die 6 wichtigsten Topologien erkennen, zeichnen und ihre Vor-/Nachteile kennen.</p>'
        + '<div class="analogy-box">'
        + '<strong>Verkehrs-Analogie:</strong> Topologien sind wie unterschiedliche Stra\u00DFennetze. Ein <em>Stern</em> ist wie eine Kreuzung, wo alle Stra\u00DFen auf einem Kreisverkehr zusammenlaufen \u2013 robust, aber ohne Kreisverkehr l\u00E4uft nichts. Ein <em>Ring</em> ist wie eine Ringstra\u00DFe \u2013 Umwege m\u00F6glich, aber ein einzelner Bruch kann viel blockieren. Ein <em>Baum</em> ist wie eine Hauptstra\u00DFe mit Seitenstra\u00DFen und Sackgassen. Ein <em>Bus</em> ist wie eine Landstra\u00DFe, an der alle H\u00F6fe angeschlossen sind. Eine <em>Linie</em> ist wie eine Kette von D\u00F6rfern.'
        + '</div>'
        + '<h3>Die 6 wichtigsten Topologien im \u00DCberblick:</h3>'
        + '<table style="border-collapse:collapse;width:100%;margin:8px 0">'
        + '<tr style="background:#f0f0f0"><th style="border:1px solid #ccc;padding:6px 10px">Topologie</th><th style="border:1px solid #ccc;padding:6px 10px">Aufbau</th><th style="border:1px solid #ccc;padding:6px 10px">Kabelausfall</th><th style="border:1px solid #ccc;padding:6px 10px">Typisch f\u00FCr</th></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Stern</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Alle Ger\u00E4te an zentralem Switch/Hub</td><td style="border:1px solid #ccc;padding:6px 10px">Nur das eine Ger\u00E4t betroffen</td><td style="border:1px solid #ccc;padding:6px 10px">B\u00FCro, Heimnetz</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Ring</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Ger\u00E4te kreisf\u00F6rmig verbunden</td><td style="border:1px solid #ccc;padding:6px 10px">Ring unterbrochen \u2192 Ausfall m\u00F6glich</td><td style="border:1px solid #ccc;padding:6px 10px">Alte Token-Ring-Netze</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Bus</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Alle an gemeinsamem Kabel</td><td style="border:1px solid #ccc;padding:6px 10px">Ein Bruch trennt alles</td><td style="border:1px solid #ccc;padding:6px 10px">Alte Ethernet-Netze</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Baum</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Hierarchisch (Switches in Ebenen)</td><td style="border:1px solid #ccc;padding:6px 10px">Ausfall eines Knotens \u2192 alle darunter betroffen</td><td style="border:1px solid #ccc;padding:6px 10px">Schulnetz, Firmennetz</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Linie</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Ger\u00E4te in Reihe, jeweils benachbart verbunden</td><td style="border:1px solid #ccc;padding:6px 10px">Ein Bruch trennt die Kette</td><td style="border:1px solid #ccc;padding:6px 10px">Selten, f\u00FCr spezielle Zwecke</td></tr>'
        + '<tr><td style="border:1px solid #ccc;padding:6px 10px"><strong>Vermascht (Mesh)</strong></td><td style="border:1px solid #ccc;padding:6px 10px">Viele (oder alle) Knoten direkt miteinander verbunden</td><td style="border:1px solid #ccc;padding:6px 10px">Ein Bruch f\u00E4llt nicht auf \u2013 Ausweichwege da</td><td style="border:1px solid #ccc;padding:6px 10px">Internet-Backbone, WLAN-Mesh</td></tr>'
        + '</table>'
        + '<div class="why-context">'
        + '<strong>Warum sind manche Topologien \u201Everaltet\u201C?</strong> Bus und Ring waren in den 80ern/90ern Standard, weil Switches teuer waren. Heute sind Switches billig und beherrschen <em>Stern</em>-Topologien m\u00FChelos. Deshalb bestehen moderne Netzwerke fast immer aus Stern- oder Baum-Strukturen. Du solltest die alten Topologien trotzdem kennen, weil sie klausurrelevant sind und manchmal in speziellen Industriesteuerungen noch vorkommen.'
        + '</div>'
        + '<h3>Die 6 Topologien als Diagramme:</h3>'
        + '<p>Unten siehst du jede Topologie einzeln. <em>Unter jedem Diagramm steht die wichtigste Aussage nochmal konkret</em> \u2013 die ausf\u00FChrlichen Vor- und Nachteile findest du in der Tabelle oben. Vergleiche beim Scrollen: Wo ist der Ausfall-kritische Punkt jeder Topologie?</p>',
      visuals: [
        { type: 'network-diagram', preset: 'topology-star', label: 'STERN \u2013 alle Ger\u00E4te am zentralen Switch. Vorteil: Ausfall eines Kabels trifft nur EIN Ger\u00E4t. Nachteil: F\u00E4llt der Switch aus, ist alles weg.' },
        { type: 'network-diagram', preset: 'topology-ring', label: 'RING \u2013 jedes Ger\u00E4t hat genau zwei Nachbarn, Signal wandert im Kreis. Nachteil: Ein Kabelbruch kann den Ring unterbrechen.' },
        { type: 'network-diagram', preset: 'topology-bus', label: 'BUS \u2013 alle Ger\u00E4te h\u00E4ngen an einer gemeinsamen Hauptleitung (dem \u201EBus\u201C). Nachteil: Ein Bruch der Hauptleitung trennt das ganze Netz.' },
        { type: 'network-diagram', preset: 'topology-tree', label: 'BAUM \u2013 Hierarchisch: Haupt-Switch \u00FCber Ebenen-Switches zu den Endger\u00E4ten. Typisch f\u00FCr Schul- und Firmennetze.' },
        { type: 'network-diagram', preset: 'topology-line', label: 'LINIE \u2013 Ger\u00E4te in Reihe hintereinander verkettet. Unterschied zum Bus: keine gemeinsame Backbone-Leitung, jede Verbindung einzeln. Selten in Netzwerken, eher im Industrie-Bussystem.' },
        { type: 'network-diagram', preset: 'topology-mesh', label: 'VERMASCHT (Mesh) \u2013 jeder Knoten hat mehrere Verbindungen zu anderen. Vorteil: extrem ausfallsicher, mehrere Wege zum Ziel. Nachteil: aufw\u00E4ndig und teuer. Typisch fu\u0308r: Internet-Backbone, WLAN-Mesh.' }
      ]
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
    ,
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Welche Topologie beschreibt am besten das <strong>weltweite Internet</strong>?',
        options: ['Stern', 'Ring', 'Bus', 'Vermascht (Mesh)'],
        correct: 3,
        explanation: 'Das Internet ist eine riesige vermaschte Struktur: Router haben Verbindungen zu vielen anderen Routern, Daten k\u00F6nnen auf vielen Wegen laufen. Ein Ausfall einer Verbindung \u00E4ndert meist nichts am Gesamt-Betrieb.'
      },
      {
        type: 'multiple-choice',
        examRelevant: true,
        question: 'Vorteil der <strong>vermaschten Topologie</strong> gegen\u00FCber Stern und Bus?',
        options: [
          'Weniger Kabel n\u00F6tig',
          'Mehrere Wege zum Ziel \u2013 Ausfallsicherheit',
          'Keine Switches n\u00F6tig',
          'H\u00F6here Datenrate'
        ],
        correct: 1,
        explanation: 'Weil jeder Knoten mehrere Verbindungen hat, gibt es immer Ausweichwege. F\u00E4llt ein Kabel oder Router aus, finden die Pakete einen anderen Weg. Nachteil: viele Kabel/Interfaces n\u00F6tig.'
      }]
  }

];
