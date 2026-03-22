const LessonsC5 = [

  // ===== LEKTION 18: Das Internet und Adressierung =====
  {
    id: 18,
    title: 'Das Internet und Adressierung',
    explanation: {
      html:
        '<h2>Rechnernetze und die Post -- ein Vergleich</h2>'
        + '<p>Stell dir vor, du willst einen Brief an einen Freund schicken. Du brauchst dazu drei Dinge:</p>'
        + '<ul>'
        + '<li><strong>Eine eindeutige Adresse</strong> des Empfaengers (Name, Strasse, PLZ, Ort)</li>'
        + '<li><strong>Eine Absenderadresse</strong>, damit eine Antwort zurueckkommen kann</li>'
        + '<li><strong>Infrastruktur</strong> -- Briefkasten, Postbote, Verteilzentren, die den Brief transportieren</li>'
        + '</ul>'
        + '<p>Genau so funktioniert auch die Kommunikation in <strong>Rechnernetzen</strong>! '
        + 'Statt einer Postanschrift verwenden Computer sogenannte <strong>IP-Adressen</strong> '
        + '(IP steht fuer <em>Internet Protocol</em>). Und statt Briefkaesten und Postboten '
        + 'gibt es <strong>Router, Switches und Kabel</strong>, die Datenpakete transportieren.</p>'

        + '<h3>Die Briefpost-Analogie im Detail</h3>'
        + '<table style="width:100%; border-collapse:collapse; margin:1rem 0;">'
        + '<tr style="background:var(--sidebar-bg);"><th style="padding:8px; text-align:left; border:1px solid var(--border);">Aspekt</th>'
        + '<th style="padding:8px; text-align:left; border:1px solid var(--border);">Briefpost</th>'
        + '<th style="padding:8px; text-align:left; border:1px solid var(--border);">Rechnernetz</th></tr>'
        + '<tr><td style="padding:8px; border:1px solid var(--border);"><strong>Adressierung</strong></td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Anschrift (Name, Strasse, PLZ, Ort)</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">IP-Adresse (z.B. 192.168.1.1)</td></tr>'
        + '<tr><td style="padding:8px; border:1px solid var(--border);"><strong>Infrastruktur</strong></td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Postfilialen, Verteilzentren, Postboten</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Router, Switches, Modems, Kabel</td></tr>'
        + '<tr><td style="padding:8px; border:1px solid var(--border);"><strong>Uebertragung</strong></td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Standardbriefe in normierten Umschlaegen</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Datenpakete definierter Groesse</td></tr>'
        + '</table>'
        + '<p><strong>Wichtiger Unterschied:</strong> Grosse Datenmengen werden nicht als ein riesiges Paket verschickt, '
        + 'sondern in <strong>viele kleine Datenpakete unterteilt</strong> und einzeln versendet. '
        + 'Das ist, als wuerdest du ein dickes Buch seitenweise in einzelnen Briefen verschicken.</p>'

        + '<h3>Was ist ein Rechnernetz?</h3>'
        + '<p>Ein Rechnernetz ist ein Zusammenschluss von Rechnern (oder allgemeiner: Teilnehmern), '
        + 'die untereinander verbunden sind. Diese Verbindung kann ueber <strong>Kabel</strong> '
        + 'oder <strong>kabellos</strong> (WLAN, Bluetooth) erfolgen.</p>'
        + '<p>Ein "Rechner" kann dabei alles Moegliche sein: ein Laptop, ein Smartphone, '
        + 'ein Drucker oder sogar eine intelligente Steckdose (Smart Home). '
        + 'Bekannte Beispiele fuer Rechnernetze sind <strong>Heimnetzwerke</strong> oder eben das <strong>Internet</strong>.</p>'

        + '<h3>Das Internet -- ein "Netz der Netze"</h3>'
        + '<p>Das Internet ist das groesste und bekannteste Rechnernetz. Milliarden von Rechnern '
        + 'sind darin miteinander verbunden.</p>'
        + '<p>Die Urspruenge liegen im amerikanischen <strong>ARPANET</strong> (Advanced Research Projects Agency Net), '
        + 'einem militaerischen Netzwerk aus dem Jahr 1969. Anfangs waren nur 4 Universitaeten verbunden '
        + '(UCLA, Stanford, UCSB, Utah). Ab 1972 stand es auch fuer Forschungseinrichtungen zur Verfuegung.</p>'
        + '<p><strong>Wichtig:</strong> Das Internet ist ein <strong>dezentral organisiertes, globales Rechnernetz</strong> -- '
        + 'nicht ein einziges Netz, wie es umgangssprachlich oft gesagt wird. '
        + 'Es gibt keinen einen zentralen Rechner, der alles verwaltet. '
        + 'Stattdessen arbeiten viele Rechner mehr oder weniger intelligent zusammen. '
        + 'Man nennt es daher auch das <strong>"Netz der Netze"</strong>.</p>',
      visuals: [
        { type: 'network-diagram', mode: 'static', preset: 'internet-overview' }
      ]
    },
    example: {
      title: 'Wie kommt eine Nachricht von A nach B?',
      steps: [
        {
          label: 'Schritt 1: Absender hat Daten',
          html:
            '<p>Du moechtest von deinem Laptop eine E-Mail an einen Kollegen schicken. '
            + 'Dein Laptop kennt die <strong>IP-Adresse</strong> des Zielservers (z.B. des E-Mail-Servers).</p>'
        },
        {
          label: 'Schritt 2: Daten werden in Pakete aufgeteilt',
          html:
            '<p>Die E-Mail wird in kleine <strong>Datenpakete</strong> zerlegt. '
            + 'Jedes Paket bekommt einen "Umschlag" mit <strong>Absender-IP</strong> und <strong>Empfaenger-IP</strong>.</p>'
        },
        {
          label: 'Schritt 3: Router leiten weiter',
          html:
            '<p>Dein <strong>Router</strong> prueft: Ist das Ziel im eigenen Netz? Wenn nicht, '
            + 'schickt er das Paket weiter an den naechsten Router -- und so weiter, '
            + 'bis das Paket beim Empfaenger ankommt.</p>'
            + '<p>Das ist wie bei der Post: Dein Brief geht erst zum lokalen Verteilzentrum, '
            + 'dann zum regionalen, dann zum Zielort.</p>'
        },
        {
          label: 'Schritt 4: Empfaenger setzt zusammen',
          html:
            '<p>Der Empfaenger-Server sammelt alle Pakete ein und setzt die E-Mail wieder zusammen. '
            + 'Fertig -- die Nachricht ist angekommen!</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist das Internet?',
        options: [
          'Ein einzelner, zentraler Supercomputer',
          'Ein dezentral organisiertes Netz aus vielen verbundenen Rechnernetzen',
          'Ein spezielles Kabel, das alle Computer verbindet',
          'Ein Programm, das auf jedem Computer laeuft'
        ],
        correct: 1,
        explanation: 'Das Internet ist ein dezentral organisiertes, globales Rechnernetz -- ein "Netz der Netze". Es gibt keinen zentralen Rechner, der alles steuert.'
      },
      {
        type: 'multiple-choice',
        question: 'Was entspricht in der Briefpost-Analogie der IP-Adresse?',
        options: [
          'Der Briefkasten',
          'Die Briefmarke',
          'Die Postanschrift (Name, Strasse, PLZ, Ort)',
          'Der Briefumschlag'
        ],
        correct: 2,
        explanation: 'Die IP-Adresse ist die eindeutige "Anschrift" eines Rechners im Netzwerk -- genau wie die Postanschrift bei einem Brief.'
      }
    ]
  },

  // ===== LEKTION 19: Netztypen & Geraete =====
  {
    id: 19,
    title: 'Netztypen & Geraete',
    explanation: {
      html:
        '<h2>Netztypen: LAN und WAN</h2>'
        + '<p>Rechnernetze lassen sich grob in zwei Kategorien einteilen:</p>'

        + '<h3>LAN -- Local Area Network (Lokales Netz)</h3>'
        + '<p>Ein LAN ist ein <strong>lokales Netzwerk</strong>, das einen begrenzten Bereich abdeckt -- '
        + 'z.B. dein Zuhause, eine Schule oder ein Buero.</p>'
        + '<ul>'
        + '<li>Haeufig auch <strong>Intranet</strong> genannt</li>'
        + '<li>Verwendet spezielle IP-Adressbereiche, die nicht im Internet gelten (z.B. 192.168.x.x)</li>'
        + '<li><strong>Ziel:</strong> Dienste fuer alle Mitglieder des Netzes bereitstellen (z.B. Netzwerkdrucker, gemeinsame Dateien, Notensoftware)</li>'
        + '</ul>'
        + '<p><strong>Analogie:</strong> Ein LAN ist wie die interne Hauspost in einer Firma -- '
        + 'Briefe werden nur innerhalb des Gebaeudes verteilt.</p>'

        + '<h3>WAN -- Wide Area Network (Weitverkehrsnetz)</h3>'
        + '<p>Ein WAN verbindet LANs ueber grosse Distanzen. Die Netze der Telekom, 1&amp;1 oder Vodafone sind WANs.</p>'
        + '<ul>'
        + '<li><strong>Ziel:</strong> Datenpakete ueber grosse Strecken austauschen</li>'
        + '<li>Ganz stark vereinfacht: Alle WANs zusammen bilden das Internet</li>'
        + '</ul>'

        + '<h2>Netzwerkgeraete im Ueberblick</h2>'

        + '<h3>Host (Endgeraet)</h3>'
        + '<p>Unter dem Begriff <strong>Host</strong> fasst man alle Rechner eines Netzwerks zusammen: '
        + 'Desktop-PCs, Laptops, Tablets, Smartphones oder intelligente Steckdosen. '
        + 'Dabei ist es egal, ob sie per WLAN, LAN-Kabel oder Mobilfunknetz verbunden sind.</p>'

        + '<h3>Router</h3>'
        + '<p>Router sind dafuer zustaendig, <strong>Pakete zwischen verschiedenen Netzen</strong> zu verteilen. '
        + 'Man sagt: Pakete werden <em>geroutet</em>. Alle Daten von deinem Heimnetz gehen ueber den Router ins Internet.</p>'
        + '<p><strong>Analogie:</strong> Der Router ist wie das Postverteilzentrum -- er entscheidet, '
        + 'in welche Richtung ein Paket weitergeschickt wird.</p>'

        + '<h3>Switch</h3>'
        + '<p>Ein Switch verteilt Pakete <strong>nur innerhalb des eigenen Netzes</strong>. '
        + 'Er sendet Daten gezielt nur an den richtigen Empfaenger. '
        + 'Switches sind schneller als Router, haben aber weniger Faehigkeiten.</p>'
        + '<p><strong>Analogie:</strong> Der Switch ist wie der Postbote innerhalb eines Gebaeudes -- '
        + 'er bringt die Post direkt zum richtigen Buero.</p>'

        + '<h3>Hub (veraltet)</h3>'
        + '<p>Ein Hub verteilt Daten im Netzwerk, sendet sie aber <strong>an alle angeschlossenen Geraete</strong> -- '
        + 'nicht nur an den gewuenschten Empfaenger. Das fuehrt zu Problemen:</p>'
        + '<ul>'
        + '<li>Die Bandbreite wird geteilt</li>'
        + '<li>Es kann zu Datenkollisionen kommen</li>'
        + '<li>Daten koennen leichter mitgelesen werden</li>'
        + '</ul>'
        + '<p>Deshalb werden heute fast immer <strong>Switches statt Hubs</strong> eingesetzt.</p>'

        + '<h3>Modem</h3>'
        + '<p>Das Modem <strong>baut die Verbindung zum Internet auf</strong>. '
        + 'Ein DSL-Modem ist heute in jedem "WLAN-Router" (z.B. Fritz!Box, Speedport) eingebaut. '
        + 'Das Modem allein kann die Internetverbindung aber nur fuer <strong>ein einziges Geraet</strong> aufbauen. '
        + 'Deshalb gibt es in der Regel Kombinationsgeraete aus Modem, Router und Switch.</p>'

        + '<h3>Access Point (AP)</h3>'
        + '<p>Ein <strong>Wireless Access Point</strong> verbindet kabellose Geraete (Laptop, Smartphone) '
        + 'mit dem kabelgebundenen Netzwerk. Er ist die Schnittstelle zwischen WLAN und LAN.</p>'
        + '<p><strong>Wichtig:</strong> Ein Access Point ist <em>kein</em> Router -- er leitet keine Daten ins Internet weiter '
        + 'und vergibt keine IP-Adressen.</p>',
      visuals: [
        { type: 'network-diagram', mode: 'static', preset: 'school-network' }
      ]
    },
    example: {
      title: 'Beispiel: Das Schulnetzwerk',
      steps: [
        {
          label: 'Internet-Anbindung',
          html:
            '<p>Die Schule ist ueber eine <strong>Glasfaserleitung</strong> mit dem Internet verbunden. '
            + 'Am Eingang steht ein <strong>Modem</strong>, das die Verbindung zum Internetanbieter herstellt.</p>'
        },
        {
          label: 'Router verteilt',
          html:
            '<p>Hinter dem Modem sitzt der <strong>Router</strong>. Er entscheidet: '
            + 'Geht ein Paket ins Internet oder bleibt es im Schulnetz?</p>'
        },
        {
          label: 'Switch fuer kabelgebundene PCs',
          html:
            '<p>Im Computerraum und Lehrerzimmer stehen PCs, die per <strong>LAN-Kabel</strong> '
            + 'an einen <strong>Switch</strong> angeschlossen sind. Der Switch leitet die Pakete gezielt weiter.</p>'
        },
        {
          label: 'Access Point fuer WLAN',
          html:
            '<p>Schueler und Lehrkraefte nutzen Tablets und Smartphones ueber WLAN. '
            + 'Dafuer sorgt ein <strong>Access Point</strong>, der die kabellosen Geraete mit dem LAN verbindet.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'network-labeling',
        question: 'Ordne die Geraete im Schulnetzwerk richtig zu.',
        preset: 'school-network',
        labels: {
          'internet': 'Internet',
          'modem': 'Modem',
          'router': 'Router',
          'switch1': 'Switch',
          'ap': 'Access Point',
          'pc1': 'Host',
          'pc2': 'Host',
          'pc3': 'Host',
          'phone': 'Host',
          'tablet': 'Host'
        },
        explanation: 'Das Internet (Cloud) kommt ueber das Modem rein. Der Router verbindet das Schulnetz mit dem Internet. Der Switch verteilt im kabelgebundenen LAN, der Access Point ermoeglicht WLAN. Alle Endgeraete (PCs, Handys, Tablets) sind Hosts.'
      },
      {
        type: 'matching',
        question: 'Ordne jedem Geraet seine Hauptfunktion zu.',
        pairs: [
          { left: 'Router', right: 'Verbindet verschiedene Netze und leitet Pakete weiter' },
          { left: 'Switch', right: 'Verteilt Pakete gezielt innerhalb eines Netzes' },
          { left: 'Modem', right: 'Baut die Verbindung zum Internet auf' },
          { left: 'Access Point', right: 'Verbindet kabellose Geraete mit dem LAN' },
          { left: 'Hub', right: 'Sendet Daten an alle angeschlossenen Geraete (veraltet)' }
        ]
      },
      {
        type: 'multiple-choice',
        question: 'Was ist der Hauptunterschied zwischen einem Switch und einem Hub?',
        options: [
          'Ein Switch ist teurer',
          'Ein Switch sendet Daten gezielt an den Empfaenger, ein Hub an alle Geraete',
          'Ein Hub ist schneller',
          'Ein Switch braucht WLAN, ein Hub nicht'
        ],
        correct: 1,
        explanation: 'Der Switch sendet Daten gezielt nur an den richtigen Empfaenger. Ein Hub sendet an alle angeschlossenen Geraete -- das fuehrt zu geteilter Bandbreite und moeglichen Kollisionen.'
      }
    ]
  },

  // ===== LEKTION 20: Technische Grundlagen =====
  {
    id: 20,
    title: 'Technische Grundlagen',
    explanation: {
      html:
        '<h2>Wichtige Begriffe und technische Grundlagen</h2>'
        + '<p>Bevor wir tiefer in die Adressierung einsteigen, brauchen wir einen Ueberblick ueber '
        + 'die verschiedenen <strong>Uebertragungstechnologien</strong>. Wie kommen die 0en und 1en '
        + 'eigentlich von einem Rechner zum anderen?</p>'

        + '<h3>Kabelgebundene Verbindungen</h3>'

        + '<h4>Kupferkabel (Twisted Pair)</h4>'
        + '<p>Das klassische <strong>LAN-Kabel</strong> (auch Ethernet-Kabel genannt). '
        + 'Die Adern sind paarweise verdrillt ("twisted pair"), um Stoerungen zu reduzieren. '
        + 'Es gibt verschiedene Kategorien (Cat5, Cat6, Cat7) mit unterschiedlichen Geschwindigkeiten.</p>'
        + '<p><strong>Analogie:</strong> Wie eine gut isolierte Wasserleitung -- je dicker das Rohr (hoehere Kategorie), '
        + 'desto mehr Wasser (Daten) fliesst durch.</p>'

        + '<h4>Glasfaser</h4>'
        + '<p>Daten werden als <strong>Lichtsignale</strong> durch duenne Glasfasern uebertragen. '
        + 'Glasfaser ist deutlich schneller als Kupfer und unempfindlich gegen elektromagnetische Stoerungen.</p>'

        + '<h3>DSL und ISDN</h3>'
        + '<p><strong>DSL</strong> (Digital Subscriber Line) nutzt die bestehende Telefonleitung fuer Internetzugang. '
        + 'Verschiedene Varianten existieren:</p>'
        + '<ul>'
        + '<li><strong>ADSL</strong> -- asymmetrisch: Download schneller als Upload (typisch fuer Privatnutzer)</li>'
        + '<li><strong>VDSL</strong> -- deutlich hoehere Geschwindigkeiten</li>'
        + '</ul>'
        + '<p><strong>ISDN</strong> (Integrated Services Digital Network) war der Vorgaenger von DSL und ist heute kaum noch im Einsatz.</p>'

        + '<h3>Kabellose Verbindungen</h3>'

        + '<h4>WLAN (WiFi)</h4>'
        + '<p>Wireless Local Area Network -- kabelloses lokales Netz. '
        + 'Verschiedene Standards (802.11a/b/g/n/ac/ax) bieten unterschiedliche Geschwindigkeiten und Reichweiten. '
        + 'WLAN-faehige Geraete erkennen das Netzwerk ueber den <strong>Netzwerknamen (SSID)</strong> '
        + 'und die Verbindung wird verschluesselt (WPA2, WPA3).</p>'

        + '<h4>Bluetooth</h4>'
        + '<p>Fuer <strong>kurze Distanzen</strong> (ca. 10 Meter). Typische Anwendungen: '
        + 'Kopfhoerer, Maus, Tastatur, Datenuebertragung zwischen Handys. '
        + 'Bluetooth ist nicht fuer die Vernetzung von Computern gedacht.</p>'

        + '<h4>Mobilfunk (GSM/UMTS/LTE/5G)</h4>'
        + '<p>Daten werden ueber <strong>Funkmasten</strong> uebertragen. Die Generationen:</p>'
        + '<ul>'
        + '<li><strong>2G (GSM)</strong> -- Telefonie und SMS, sehr langsames Internet</li>'
        + '<li><strong>3G (UMTS)</strong> -- erstes mobiles Internet (abgeschaltet in Deutschland)</li>'
        + '<li><strong>4G (LTE)</strong> -- schnelles mobiles Internet, heute Standard</li>'
        + '<li><strong>5G</strong> -- sehr schnell, niedrige Latenz, fuer IoT und Industrie</li>'
        + '</ul>'

        + '<h3>Zusammenfassung</h3>'
        + '<table style="width:100%; border-collapse:collapse; margin:1rem 0;">'
        + '<tr style="background:var(--sidebar-bg);">'
        + '<th style="padding:8px; text-align:left; border:1px solid var(--border);">Technologie</th>'
        + '<th style="padding:8px; text-align:left; border:1px solid var(--border);">Typ</th>'
        + '<th style="padding:8px; text-align:left; border:1px solid var(--border);">Typische Nutzung</th></tr>'
        + '<tr><td style="padding:8px; border:1px solid var(--border);">Kupferkabel (LAN)</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Kabel</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Buero, Schule, Heimnetz</td></tr>'
        + '<tr><td style="padding:8px; border:1px solid var(--border);">Glasfaser</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Kabel</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Internet-Backbone, schneller Hausanschluss</td></tr>'
        + '<tr><td style="padding:8px; border:1px solid var(--border);">DSL</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Kabel (Telefonleitung)</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Internetzugang zu Hause</td></tr>'
        + '<tr><td style="padding:8px; border:1px solid var(--border);">WLAN</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Kabellos</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Laptops, Smartphones im LAN</td></tr>'
        + '<tr><td style="padding:8px; border:1px solid var(--border);">Bluetooth</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Kabellos</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Peripheriegeraete, kurze Distanzen</td></tr>'
        + '<tr><td style="padding:8px; border:1px solid var(--border);">LTE / 5G</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Kabellos (Mobilfunk)</td>'
        + '<td style="padding:8px; border:1px solid var(--border);">Mobiles Internet unterwegs</td></tr>'
        + '</table>'
    },
    example: {
      title: 'Beispiel: Wie kommt das Internet in die Schule?',
      steps: [
        {
          label: 'Glasfaseranschluss',
          html:
            '<p>Ein <strong>Glasfaserkabel</strong> fuehrt von der Strasse in den Keller der Schule. '
            + 'Hier kommt das schnelle Internet an.</p>'
        },
        {
          label: 'Modem/Router',
          html:
            '<p>Das Glasfasersignal wird vom <strong>Modem</strong> umgewandelt. '
            + 'Der Router verteilt die Verbindung im Schulnetz.</p>'
        },
        {
          label: 'LAN-Kabel zu den Raeumen',
          html:
            '<p>Von dort gehen <strong>Kupferkabel (Cat6)</strong> durch die Waende '
            + 'in die einzelnen Klassenraeume, das Lehrerzimmer und den Computerraum.</p>'
        },
        {
          label: 'WLAN fuer mobile Geraete',
          html:
            '<p><strong>Access Points</strong> in den Raeumen stellen WLAN bereit, '
            + 'damit Tablets und Smartphones kabellos ins Netz koennen.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Technologie uebertraegt Daten als Lichtsignale?',
        options: [
          'Kupferkabel (Twisted Pair)',
          'Glasfaser',
          'DSL',
          'Bluetooth'
        ],
        correct: 1,
        explanation: 'Glasfaserkabel uebertragen Daten als Lichtsignale durch duenne Glasfasern. Das ist deutlich schneller als Kupferkabel und unempfindlich gegen elektromagnetische Stoerungen.'
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Mobilfunkstandard ist heute in Deutschland der Standard fuer mobiles Internet?',
        options: [
          '2G (GSM)',
          '3G (UMTS)',
          '4G (LTE)',
          '1G'
        ],
        correct: 2,
        explanation: '4G (LTE) ist der aktuelle Standard. 3G (UMTS) wurde in Deutschland bereits abgeschaltet, 5G wird ausgebaut.'
      }
    ]
  },

  // ===== LEKTION 21: IP-Adressen (IPv4, IPv6, MAC) =====
  {
    id: 21,
    title: 'IP-Adressen: IPv4, IPv6, MAC',
    explanation: {
      html:
        '<h2>Adressierung mit dem Internet Protocol (IP)</h2>'
        + '<p>Damit Rechner im Netz miteinander kommunizieren koennen, braucht jeder eine '
        + '<strong>eindeutige Adresse</strong>. Diese Adressen muessen nicht nur einen Host identifizieren, '
        + 'sondern auch erkennen lassen, <strong>in welchem Netz</strong> sich der Host befindet.</p>'
        + '<p><strong>Analogie:</strong> Bei der Post braucht man nicht nur den Namen (= Host), '
        + 'sondern auch PLZ und Ort (= Netz), damit der Brief richtig zugestellt wird.</p>'

        + '<h3>IPv4 -- Internet Protocol Version 4</h3>'
        + '<p>Die gebraeuchlichste Form. Eine IPv4-Adresse besteht aus <strong>4 Zahlen von 0 bis 255</strong>, '
        + 'getrennt durch Punkte. Das nennt man <strong>Dotted Decimal Notation</strong>.</p>'
        + '<p><code>192.168.1.1</code> oder <code>134.34.247.9</code></p>'
        + '<p>Intern wird jede Zahl als <strong>8 Bit</strong> (ein Oktett) gespeichert. '
        + 'Eine IPv4-Adresse ist also insgesamt <strong>32 Bit</strong> lang.</p>'
        + '<p>Beispiel: Die Adresse <code>134.34.247.9</code> sieht in Binaer so aus:</p>'
        + '<p><code>10000110.00100010.11110111.00001001</code></p>'
        + '<p>IPv4 unterstuetzt 2<sup>32</sup> = ca. <strong>4,3 Milliarden</strong> verschiedene Adressen. '
        + 'Das klingt viel, reicht aber laengst nicht mehr fuer alle Geraete weltweit.</p>'

        + '<h3>IPv6 -- Internet Protocol Version 6</h3>'
        + '<p>Wegen der Adressknappheit bei IPv4 wurde IPv6 entwickelt. '
        + 'Eine IPv6-Adresse ist <strong>128 Bit</strong> lang und wird in <strong>acht Bloecken zu je 4 Hexadezimalziffern</strong> notiert, '
        + 'getrennt durch Doppelpunkte.</p>'
        + '<p><code>2001:07c0:2880:2001:0000:0000:0000:2009</code></p>'
        + '<p>IPv6 unterstuetzt 2<sup>128</sup> verschiedene Adressen -- eine unvorstellbar grosse Zahl. '
        + '<strong>IPv4 und IPv6 sind nicht direkt kompatibel!</strong> '
        + 'Internetanbieter vergeben daher heute oft sowohl eine IPv4- als auch eine IPv6-Adresse.</p>'

        + '<h3>MAC-Adresse -- Media Access Control</h3>'
        + '<p>Neben IP-Adressen gibt es noch <strong>MAC-Adressen</strong>, auch <strong>physische Adressen</strong> genannt. '
        + 'Jede Netzwerkkarte bekommt vom Hersteller ab Werk eine weltweit eindeutige MAC-Adresse.</p>'
        + '<p>Eine MAC-Adresse besteht aus <strong>6 Bytes in Hexadezimal</strong>, z.B.: <code>18:1D:EA:97:38:37</code></p>'
        + '<ul>'
        + '<li>Die ersten 3 Bytes = <strong>Herstellerkennung</strong> (z.B. Intel, Apple)</li>'
        + '<li>Die letzten 3 Bytes = <strong>Geraetekennung</strong> (eindeutig pro Geraet)</li>'
        + '</ul>'
        + '<p><strong>Wichtig:</strong> MAC-Adressen sind fest an die Hardware gebunden und aendern sich nicht. '
        + 'Sie werden fuer die Zustellung innerhalb eines lokalen Netzes benoetigt. '
        + 'Als eindeutige Empfaengeradresse im Internet eignen sie sich jedoch nicht -- '
        + 'dazu braucht man IP-Adressen.</p>',
      visuals: [
        { type: 'ip-converter' }
      ]
    },
    example: {
      title: 'Schritt fuer Schritt: 192.168.1.1 in Binaer umrechnen',
      steps: [
        {
          label: 'Oktett 1: 192',
          html:
            '<p>192 in Binaer: <code>128 + 64 = 192</code></p>'
            + '<p><code>192 = <strong>11000000</strong></code></p>'
            + '<p>Stellenwerte: 128(1) + 64(1) + 32(0) + 16(0) + 8(0) + 4(0) + 2(0) + 1(0)</p>'
        },
        {
          label: 'Oktett 2: 168',
          html:
            '<p>168 in Binaer: <code>128 + 32 + 8 = 168</code></p>'
            + '<p><code>168 = <strong>10101000</strong></code></p>'
        },
        {
          label: 'Oktett 3: 1',
          html:
            '<p>1 in Binaer: <code>1 = 1</code></p>'
            + '<p><code>1 = <strong>00000001</strong></code></p>'
            + '<p>Wichtig: Fuehrende Nullen auffuellen -- jedes Oktett hat immer 8 Bits!</p>'
        },
        {
          label: 'Oktett 4: 1',
          html:
            '<p>Genau wie Oktett 3: <code>1 = <strong>00000001</strong></code></p>'
            + '<p><strong>Ergebnis:</strong> <code>192.168.1.1 = 11000000.10101000.00000001.00000001</code></p>'
        }
      ]
    },
    exercises: [
      {
        type: 'binary-decimal',
        question: 'Rechne die folgenden Oktette um.',
        rounds: [
          { given: '11000000', direction: 'bin2dec', answer: 192 },
          { given: '168', direction: 'dec2bin', answer: '10101000' },
          { given: '11111111', direction: 'bin2dec', answer: 255 },
          { given: '0', direction: 'dec2bin', answer: '00000000' },
          { given: '10110010', direction: 'bin2dec', answer: 178 },
          { given: '15', direction: 'dec2bin', answer: '00001111' }
        ]
      },
      {
        type: 'multiple-choice',
        question: 'Wie lang ist eine IPv4-Adresse?',
        options: [
          '8 Bit',
          '16 Bit',
          '32 Bit',
          '128 Bit'
        ],
        correct: 2,
        explanation: 'Eine IPv4-Adresse besteht aus 4 Oktetten zu je 8 Bit = 32 Bit insgesamt. Eine IPv6-Adresse ist dagegen 128 Bit lang.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Adresse ist fest an die Hardware gebunden und aendert sich nicht?',
        options: [
          'Die IPv4-Adresse',
          'Die IPv6-Adresse',
          'Die MAC-Adresse',
          'Die Subnetzmaske'
        ],
        correct: 2,
        explanation: 'Die MAC-Adresse wird vom Hersteller vergeben und ist fest an die Netzwerkkarte gebunden. IP-Adressen koennen sich aendern (z.B. durch DHCP).'
      }
    ]
  },

  // ===== LEKTION 22: Subnetzmaske & Net-ID =====
  {
    id: 22,
    title: 'Subnetzmaske & Net-ID',
    explanation: {
      html:
        '<h2>Die IP-Adresse: Netzteil und Hostteil</h2>'
        + '<p>Jede IP-Adresse kodiert <strong>zwei Informationen gleichzeitig</strong>:</p>'
        + '<ul>'
        + '<li><strong>Netzteil</strong> (Net-ID): Identifiziert das Netzwerk, zu dem der Host gehoert</li>'
        + '<li><strong>Hostteil</strong> (Host-ID): Identifiziert den einzelnen Rechner innerhalb dieses Netzes</li>'
        + '</ul>'
        + '<p><strong>Analogie:</strong> Bei einer Postanschrift ist die PLZ der "Netzteil" (welche Stadt?) '
        + 'und die Strasse+Hausnummer der "Hostteil" (welches Haus in der Stadt?).</p>'
        + '<p>Alle IP-Adressen, die im <strong>Netzteil identisch</strong> sind, gehoeren zum gleichen Netz.</p>'

        + '<h3>Die Subnetzmaske</h3>'
        + '<p>Aber wo genau liegt die Grenze zwischen Netz- und Hostteil? '
        + 'Das verraet die <strong>Subnetzmaske</strong> (auch Subnet Mask).</p>'
        + '<p>Die Subnetzmaske ist ebenfalls 32 Bit lang. In Binaer besteht sie aus:</p>'
        + '<ul>'
        + '<li>Erst lauter <strong>Einsen</strong> (= Netzteil)</li>'
        + '<li>Dann lauter <strong>Nullen</strong> (= Hostteil)</li>'
        + '</ul>'
        + '<p>Beispiel: <code>255.255.255.0</code> in Binaer:</p>'
        + '<p><code>11111111.11111111.11111111.00000000</code></p>'
        + '<p>Hier sind die ersten 24 Bits der Netzteil und die letzten 8 Bits der Hostteil.</p>'

        + '<h3>CIDR-Notation</h3>'
        + '<p>Statt die volle Subnetzmaske zu schreiben, kann man die <strong>Anzahl der Netz-Bits</strong> '
        + 'direkt angeben. Das nennt man <strong>CIDR</strong> (Classless Inter-Domain Routing).</p>'
        + '<p><code>255.255.255.0</code> = <code>/24</code> (24 Einsen, 8 Nullen)</p>'
        + '<p><code>255.255.0.0</code> = <code>/16</code> (16 Einsen, 16 Nullen)</p>'
        + '<p><code>255.224.0.0</code> = <code>/11</code> (11 Einsen, 21 Nullen)</p>'

        + '<h3>Net-ID berechnen (AND-Verknuepfung)</h3>'
        + '<p>Die <strong>Net-ID</strong> ist der "Name" eines Netzes. Man berechnet sie, indem man '
        + 'die IP-Adresse mit der Subnetzmaske <strong>bitweise UND-verknuepft</strong> (AND).</p>'
        + '<p>Die Idee: Ueberall wo in der Maske eine 1 steht, wird das Bit der IP-Adresse uebernommen. '
        + 'Wo eine 0 steht, wird das Bit auf 0 gesetzt.</p>'

        + '<h3>Gueltige Subnetzmasken</h3>'
        + '<p>Eine Subnetzmaske muss <strong>von links nach rechts</strong> erst mit Einsen und dann mit Nullen gefuellt sein. '
        + 'Nach der ersten 0 darf keine weitere 1 mehr folgen!</p>'
        + '<ul>'
        + '<li><code>11111111.11111111.00000000.00000000</code> (255.255.0.0) -- <strong>korrekt</strong></li>'
        + '<li><code>11111111.11111111.00000010.00000000</code> (255.255.2.0) -- <strong>ungueltig!</strong></li>'
        + '</ul>',
      visuals: [
        { type: 'subnet-calculator' },
        { type: 'ip-converter' }
      ]
    },
    example: {
      title: 'Net-ID berechnen: 192.168.178.15 mit Maske /24',
      steps: [
        {
          label: 'Schritt 1: IP und Maske in Binaer',
          html:
            '<p><strong>IP-Adresse:</strong> 192.168.178.15</p>'
            + '<p><code>11000000.10101000.10110010.00001111</code></p>'
            + '<p><strong>Subnetzmaske:</strong> 255.255.255.0 (/24)</p>'
            + '<p><code>11111111.11111111.11111111.00000000</code></p>'
        },
        {
          label: 'Schritt 2: Bitweises AND',
          html:
            '<p>Wo die Maske eine 1 hat, wird das IP-Bit uebernommen. Wo die Maske eine 0 hat, wird das Ergebnis 0.</p>'
            + '<table style="width:100%; border-collapse:collapse; font-family:monospace; text-align:center;">'
            + '<tr><td style="padding:4px; border:1px solid var(--border); color:var(--accent);">11000000</td>'
            + '<td style="padding:4px; border:1px solid var(--border); color:var(--accent);">10101000</td>'
            + '<td style="padding:4px; border:1px solid var(--border); color:var(--accent);">10110010</td>'
            + '<td style="padding:4px; border:1px solid var(--border); color:var(--accent);">00001111</td></tr>'
            + '<tr style="background:#f0c040;"><td style="padding:4px; border:1px solid var(--border);">11111111</td>'
            + '<td style="padding:4px; border:1px solid var(--border);">11111111</td>'
            + '<td style="padding:4px; border:1px solid var(--border);">11111111</td>'
            + '<td style="padding:4px; border:1px solid var(--border);">00000000</td></tr>'
            + '<tr><td style="padding:4px; border:1px solid var(--border);"><strong>11000000</strong></td>'
            + '<td style="padding:4px; border:1px solid var(--border);"><strong>10101000</strong></td>'
            + '<td style="padding:4px; border:1px solid var(--border);"><strong>10110010</strong></td>'
            + '<td style="padding:4px; border:1px solid var(--border);"><strong>00000000</strong></td></tr>'
            + '</table>'
        },
        {
          label: 'Schritt 3: Ergebnis',
          html:
            '<p><strong>Net-ID:</strong> <code>192.168.178.0</code></p>'
            + '<p>Alle Geraete mit IP-Adressen von 192.168.178.1 bis 192.168.178.254 gehoeren zu diesem Netz.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'subnet-exercise',
        question: 'Berechne die Netzwerk-Kenngroessen fuer 192.168.20.45/24.',
        ip: '192.168.20.45',
        cidr: 24,
        fields: ['netId', 'broadcast', 'firstHost', 'lastHost', 'hostCount'],
        answers: {
          netId: '192.168.20.0',
          broadcast: '192.168.20.255',
          firstHost: '192.168.20.1',
          lastHost: '192.168.20.254',
          hostCount: 254
        },
        explanation: 'Bei /24 sind die ersten 3 Oktette der Netzanteil. Das 4. Oktett ist der Hostanteil. Net-ID: Hostbits auf 0. Broadcast: Hostbits auf 1. Nutzbare Hosts: 2^8 - 2 = 254 (ohne Net-ID und Broadcast).'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Subnetzmaske ist gueltig?',
        options: [
          '255.255.4.0',
          '255.255.248.0',
          '255.0.255.0',
          '255.255.255.3'
        ],
        correct: 1,
        explanation: '255.255.248.0 in Binaer = 11111111.11111111.11111000.00000000 -- erst Einsen, dann Nullen. Die anderen Masken haben Nullen zwischen Einsen und sind daher ungueltig.'
      }
    ]
  },

  // ===== LEKTION 23: Subnetze berechnen =====
  {
    id: 23,
    title: 'Subnetze berechnen',
    explanation: {
      html:
        '<h2>Ein Netz in Subnetze aufteilen</h2>'
        + '<p>Wir haben bereits gelernt, dass ein Netz durch seine Net-ID eindeutig identifiziert wird '
        + 'und die Subnetzmaske den Netz- vom Hostteil trennt.</p>'
        + '<p>In der Praxis moechte man ein gegebenes Netz oft in <strong>mehrere Subnetze</strong> aufteilen. '
        + 'Zum Beispiel kann eine Schule ihr Netz in ein <strong>Verwaltungsnetz</strong>, '
        + 'ein <strong>paedagogisches Netz</strong> und ein <strong>Gaestenetz</strong> unterteilen -- '
        + 'jedes mit eigenen Berechtigungen.</p>'

        + '<h3>Das Grundprinzip</h3>'
        + '<p>Um Subnetze zu erstellen, brauchen wir eine <strong>neue (groessere) Subnetzmaske</strong>. '
        + 'Wir "borgen" uns Bits vom Hostteil und machen sie zum Netzteil:</p>'
        + '<ul>'
        + '<li>Mehr Netz-Bits = mehr moegliche Subnetze</li>'
        + '<li>Weniger Host-Bits = weniger Hosts pro Subnetz</li>'
        + '</ul>'
        + '<p><strong>Formel:</strong> Mit <em>n</em> zusaetzlichen Bits kann man <strong>2<sup>n</sup></strong> Subnetze bilden.</p>'

        + '<h3>Fuer jedes Subnetz berechnen wir</h3>'
        + '<ul>'
        + '<li><strong>Net-ID</strong> -- die Netzwerk-Adresse (Hostbits alle 0)</li>'
        + '<li><strong>Broadcast-Adresse</strong> -- Hostbits alle 1</li>'
        + '<li><strong>Erster nutzbarer Host</strong> -- Net-ID + 1</li>'
        + '<li><strong>Letzter nutzbarer Host</strong> -- Broadcast - 1</li>'
        + '<li><strong>Anzahl nutzbarer Hosts</strong> -- 2<sup>Hostbits</sup> - 2</li>'
        + '</ul>'

        + '<h3>Vorgehensweise</h3>'
        + '<ol>'
        + '<li>Wie viele Subnetze werden benoetigt?</li>'
        + '<li>Wie viele zusaetzliche Bits brauchen wir? (Naechste 2er-Potenz >= Anzahl Subnetze)</li>'
        + '<li>Neue Subnetzmaske berechnen (alte Maske + zusaetzliche Bits)</li>'
        + '<li>Net-IDs der einzelnen Subnetze bestimmen</li>'
        + '<li>Broadcast und Hostbereich fuer jedes Subnetz berechnen</li>'
        + '</ol>',
      visuals: [
        { type: 'subnetting-viz', network: '192.168.10.0', cidr: 24 }
      ]
    },
    example: {
      title: 'Beispiel: 192.168.10.0/24 in 4 Subnetze aufteilen',
      steps: [
        {
          label: 'Schritt 1: Wie viele Bits?',
          html:
            '<p>Wir brauchen 4 Subnetze. 2<sup>2</sup> = 4, also brauchen wir <strong>2 zusaetzliche Bits</strong>.</p>'
        },
        {
          label: 'Schritt 2: Neue Subnetzmaske',
          html:
            '<p>Alte Maske: /24 (24 Netz-Bits)</p>'
            + '<p>Neue Maske: /24 + 2 = <strong>/26</strong></p>'
            + '<p>Dezimal: 255.255.255.192</p>'
            + '<p>Pro Subnetz: 2<sup>6</sup> - 2 = <strong>62 nutzbare Hosts</strong></p>'
        },
        {
          label: 'Schritt 3: Die 4 Subnetze',
          html:
            '<table style="width:100%; border-collapse:collapse; font-size:0.9rem;">'
            + '<tr style="background:var(--sidebar-bg);"><th style="padding:6px; border:1px solid var(--border);">Subnetz</th>'
            + '<th style="padding:6px; border:1px solid var(--border);">Net-ID</th>'
            + '<th style="padding:6px; border:1px solid var(--border);">Hostbereich</th>'
            + '<th style="padding:6px; border:1px solid var(--border);">Broadcast</th></tr>'
            + '<tr><td style="padding:6px; border:1px solid var(--border);">#1</td>'
            + '<td style="padding:6px; border:1px solid var(--border);"><code>192.168.10.0/26</code></td>'
            + '<td style="padding:6px; border:1px solid var(--border);">.1 -- .62</td>'
            + '<td style="padding:6px; border:1px solid var(--border);">.63</td></tr>'
            + '<tr><td style="padding:6px; border:1px solid var(--border);">#2</td>'
            + '<td style="padding:6px; border:1px solid var(--border);"><code>192.168.10.64/26</code></td>'
            + '<td style="padding:6px; border:1px solid var(--border);">.65 -- .126</td>'
            + '<td style="padding:6px; border:1px solid var(--border);">.127</td></tr>'
            + '<tr><td style="padding:6px; border:1px solid var(--border);">#3</td>'
            + '<td style="padding:6px; border:1px solid var(--border);"><code>192.168.10.128/26</code></td>'
            + '<td style="padding:6px; border:1px solid var(--border);">.129 -- .190</td>'
            + '<td style="padding:6px; border:1px solid var(--border);">.191</td></tr>'
            + '<tr><td style="padding:6px; border:1px solid var(--border);">#4</td>'
            + '<td style="padding:6px; border:1px solid var(--border);"><code>192.168.10.192/26</code></td>'
            + '<td style="padding:6px; border:1px solid var(--border);">.193 -- .254</td>'
            + '<td style="padding:6px; border:1px solid var(--border);">.255</td></tr>'
            + '</table>'
        }
      ]
    },
    exercises: [
      {
        type: 'subnet-exercise',
        question: 'Berechne die Kenngroessen fuer das erste Subnetz, wenn 10.16.8.128/25 gegeben ist.',
        ip: '10.16.8.128',
        cidr: 25,
        fields: ['netId', 'broadcast', 'firstHost', 'lastHost', 'hostCount'],
        answers: {
          netId: '10.16.8.128',
          broadcast: '10.16.8.255',
          firstHost: '10.16.8.129',
          lastHost: '10.16.8.254',
          hostCount: 126
        },
        explanation: 'Bei /25 ist das letzte Oktett geteilt: das hoechstwertige Bit gehoert zum Netz. 10.16.8.128 hat im letzten Oktett 10000000 -- das ist die Net-ID. Broadcast: 10.16.8.255 (10111111). Nutzbare Hosts: 2^7 - 2 = 126.'
      },
      {
        type: 'multiple-choice',
        question: 'Du moechtest ein /24-Netz in mindestens 5 gleichgrosse Subnetze aufteilen. Welche neue Subnetzmaske brauchst du?',
        options: [
          '/25 (2 Subnetze)',
          '/26 (4 Subnetze)',
          '/27 (8 Subnetze)',
          '/28 (16 Subnetze)'
        ],
        correct: 2,
        explanation: '/25 ergibt nur 2 Subnetze, /26 nur 4 -- beides zu wenig. /27 ergibt 2^3 = 8 Subnetze, das ist die kleinste Maske, die mindestens 5 Subnetze ermoeglicht.'
      }
    ]
  },

  // ===== LEKTION 24: Hands-on: ping =====
  {
    id: 24,
    title: 'Hands-on: ping',
    explanation: {
      html:
        '<h2>Erreichbarkeit pruefen mit dem Befehl "ping"</h2>'
        + '<p>Manchmal muessen wir ueberpruefen, ob wir von unserem Computer einen bestimmten anderen Host '
        + 'erreichen koennen -- oder ob eine Verbindung aus irgendeinem Grund nicht moeglich ist.</p>'
        + '<p><strong>Beispiel:</strong> Du moechtest einen Netzwerkdrucker einrichten. '
        + 'Es klappt aber nicht und du bekommst eine Fehlermeldung. '
        + 'Dann moechtest du zuerst pruefen: Liegt es ueberhaupt am Netzwerk?</p>'

        + '<h3>Der Befehl "ping"</h3>'
        + '<p>Mit <code>ping</code> sendest du ein kleines Datenpaket an eine IP-Adresse '
        + 'und wartest auf eine Antwort. Dazu oeffnest du ein <strong>Terminal</strong> (Mac/Linux) '
        + 'oder die <strong>Eingabeaufforderung</strong> (Windows) und tippst:</p>'
        + '<p><code>ping 134.34.247.9</code></p>'
        + '<p>Das pingt den Webserver der Universitaet Konstanz an.</p>'

        + '<h3>Was passiert genau?</h3>'
        + '<ol>'
        + '<li>Dein Computer schickt ein kleines Paket an die Ziel-IP</li>'
        + '<li>Der Zielrechner antwortet (wenn er erreichbar ist)</li>'
        + '<li>Du siehst die <strong>Antwortzeit</strong> in Millisekunden (ms)</li>'
        + '</ol>'

        + '<h3>Die Ausgabe verstehen</h3>'
        + '<p>Eine typische ping-Ausgabe sieht so aus:</p>'
        + '<pre style="background:var(--sidebar-bg); padding:12px; border-radius:6px; font-size:0.85rem; overflow-x:auto;">'
        + '64 bytes from 134.34.247.9: icmp_seq=0 ttl=57 time=59.058 ms\n'
        + '64 bytes from 134.34.247.9: icmp_seq=1 ttl=57 time=30.406 ms\n'
        + '64 bytes from 134.34.247.9: icmp_seq=2 ttl=57 time=32.998 ms\n'
        + '--- 134.34.247.9 ping statistics ---\n'
        + '3 packets transmitted, 3 received, 0.0% packet loss\n'
        + 'round-trip min/avg/max = 30.406/40.820/59.058 ms</pre>'
        + '<ul>'
        + '<li><strong>time=59.058 ms</strong> -- die Antwortzeit (je kleiner, desto besser)</li>'
        + '<li><strong>0.0% packet loss</strong> -- kein Paket ging verloren (gut!)</li>'
        + '<li><strong>ttl=57</strong> -- "Time to Live", wie viele Router das Paket noch passieren darf</li>'
        + '</ul>'

        + '<h3>Unterschied Mac vs. Windows</h3>'
        + '<p>Unter <strong>Windows</strong> sendet ping automatisch nur 4 Pakete und stoppt dann. '
        + 'Unter <strong>macOS/Linux</strong> laeuft ping endlos weiter, '
        + 'bis du es mit <code>Ctrl+C</code> abbrichst.</p>'

        + '<h3>Was kann ping noch?</h3>'
        + '<ul>'
        + '<li><code>ping 192.168.178.1</code> -- Ist mein Router erreichbar?</li>'
        + '<li><code>ping google.de</code> -- Funktioniert mein Internet? (Domainnamen gehen auch!)</li>'
        + '<li>Wenn keine Antwort kommt: Netzwerkproblem, Firewall blockiert, oder Ziel offline</li>'
        + '</ul>'

        + '<h3>MAC/IP im Router auslesen</h3>'
        + '<p>In der Oberflaeche deines Routers (z.B. <code>fritz.box</code> oder <code>192.168.178.1</code>) '
        + 'kannst du alle verbundenen Geraete mit ihrer IP- und MAC-Adresse sehen. '
        + 'Das ist nuetzlich zur Fehlersuche und Netzwerk-Dokumentation.</p>'
    },
    example: {
      title: 'Praxis: ping ausprobieren',
      steps: [
        {
          label: 'Terminal oeffnen',
          html:
            '<p>Oeffne das <strong>Terminal</strong> (Mac: Spotlight -> "Terminal") '
            + 'oder die <strong>Eingabeaufforderung</strong> (Windows: Windows-Taste -> "cmd").</p>'
        },
        {
          label: 'Eigenen Router anpingen',
          html:
            '<p>Tippe <code>ping 192.168.178.1</code> (oder die IP deines Routers). '
            + 'Die Antwortzeit sollte sehr kurz sein (unter 5 ms), da der Router im selben Netz steht.</p>'
        },
        {
          label: 'Externe Adresse anpingen',
          html:
            '<p>Tippe <code>ping google.de</code>. Die Antwortzeit ist laenger (20-50 ms), '
            + 'da das Paket durch viele Router im Internet muss.</p>'
        },
        {
          label: 'Ergebnis interpretieren',
          html:
            '<p>Wenn du Antworten bekommst: Die Verbindung funktioniert! '
            + 'Wenn "Request timeout" oder "Host unreachable" erscheint: '
            + 'Kein Netzwerkzugang oder Ziel nicht erreichbar.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was macht der Befehl "ping"?',
        options: [
          'Er laedt eine Webseite herunter',
          'Er prueft, ob ein anderer Rechner im Netz erreichbar ist',
          'Er zeigt die IP-Adresse des eigenen Rechners an',
          'Er verbindet zwei Netzwerke miteinander'
        ],
        correct: 1,
        explanation: 'ping sendet ein kleines Testpaket an eine IP-Adresse und wartet auf eine Antwort. So kann man pruefen, ob der Zielrechner erreichbar ist und wie schnell die Verbindung ist.'
      },
      {
        type: 'multiple-choice',
        question: 'Was bedeutet "0% packet loss" in der ping-Statistik?',
        options: [
          'Es wurden keine Pakete gesendet',
          'Alle gesendeten Pakete kamen zurueck -- die Verbindung funktioniert',
          'Die Internetverbindung ist unterbrochen',
          'Der Zielrechner ist ausgeschaltet'
        ],
        correct: 1,
        explanation: '0% packet loss bedeutet, dass alle gesendeten Pakete beantwortet wurden. Die Verbindung zum Ziel funktioniert einwandfrei.'
      }
    ]
  },

  // ===== LEKTION 25: Lokale vs. globale IPs =====
  {
    id: 25,
    title: 'Lokale vs. globale IPs',
    explanation: {
      html:
        '<h2>Lokale vs. globale IP-Adressen</h2>'
        + '<p>Nicht jedes Endgeraet bekommt eine weltweit eindeutige IP-Adresse. '
        + 'Die vorhandenen IPv4-Adressen reichen dafuer schlichtweg nicht aus. '
        + 'Deshalb wird zwischen <strong>lokalen</strong> und <strong>globalen</strong> IP-Adressen unterschieden.</p>'

        + '<h3>Das Heimnetz -- ein Subnetz</h3>'
        + '<p>Jedes Heimnetz hat typischerweise ein <strong>Modem</strong> (oft umgangssprachlich "Router" genannt), '
        + 'das mit dem Internet verbunden ist.</p>'
        + '<ul>'
        + '<li>Das Modem bekommt vom Internetanbieter (ISP) eine <strong>globale IP-Adresse</strong>. '
        + 'Diese ist weltweit eindeutig.</li>'
        + '<li>Alle Geraete im Heimnetz bekommen vom Router eine <strong>lokale IP-Adresse</strong>. '
        + 'Diese ist nur innerhalb des Heimnetzes eindeutig.</li>'
        + '</ul>'

        + '<h3>Private IP-Adressbereiche</h3>'
        + '<p>Fuer lokale Netze sind bestimmte IP-Bereiche reserviert, die nicht im Internet verwendet werden:</p>'
        + '<ul>'
        + '<li><code>10.0.0.0/8</code> -- grosse Netze (z.B. Unternehmen)</li>'
        + '<li><code>172.16.0.0/12</code> -- mittlere Netze</li>'
        + '<li><code>192.168.0.0/16</code> -- kleine Netze (typisch fuer Heimnetze)</li>'
        + '</ul>'
        + '<p>Die <strong>Fritz!Box</strong> (in ca. 60% der deutschen Haushalte) verwendet standardmaessig '
        + '<code>192.168.178.0/24</code>. Sehr verbreitet sind auch <code>192.168.0.0/24</code> und <code>192.168.1.0/24</code>.</p>'
        + '<p><strong>Wichtig:</strong> In vielen verschiedenen Heimnetzen existieren die <em>gleichen</em> lokalen IP-Adressen. '
        + 'Das ist kein Problem, da sie nur innerhalb des jeweiligen Netzes gelten.</p>'

        + '<h3>Wie funktioniert die Kommunikation nach aussen?</h3>'
        + '<ol>'
        + '<li>Dein Laptop (192.168.178.20) will eine Webseite laden</li>'
        + '<li>Der Router erkennt: Das Ziel liegt <strong>ausserhalb</strong> des Heimnetzes</li>'
        + '<li>Der Router schickt das Paket ins Internet, aber ersetzt die lokale IP '
        + 'durch seine <strong>eigene globale IP</strong> als Absender</li>'
        + '<li>Die Antwort kommt an der globalen IP an, der Router leitet sie an die '
        + '<strong>richtige lokale IP</strong> weiter</li>'
        + '</ol>'
        + '<p>Diesen Vorgang nennt man <strong>NAT</strong> (Network Address Translation).</p>'

        + '<h3>DHCP -- automatische IP-Vergabe</h3>'
        + '<p>Wie bekommt ein Geraet seine IP-Adresse? Manuell waere das viel zu aufwendig. '
        + 'Stattdessen gibt es <strong>DHCP</strong> (Dynamic Host Configuration Protocol):</p>'
        + '<ul>'
        + '<li>Das Geraet fragt beim Router: "Ich brauche eine IP-Adresse!"</li>'
        + '<li>Der Router vergibt automatisch eine freie Adresse aus dem Subnetz</li>'
        + '<li>Die Adresse ist nicht fest -- beim naechsten Mal kann das Geraet eine andere bekommen</li>'
        + '</ul>'
        + '<p>Fuer Geraete, die immer die gleiche Adresse haben sollen (z.B. Netzwerkdrucker), '
        + 'kann man im Router eine <strong>feste IP-Zuordnung</strong> konfigurieren.</p>',
      visuals: [
        { type: 'network-diagram', mode: 'static', preset: 'home-network' }
      ]
    },
    example: {
      title: 'Beispiel: Heimnetz mit Fritz!Box',
      steps: [
        {
          label: 'ISP vergibt globale IP',
          html:
            '<p>Dein Internetanbieter (z.B. Telekom) gibt deiner Fritz!Box eine <strong>globale IP-Adresse</strong>, '
            + 'z.B. <code>84.152.47.123</code>. Diese Adresse ist weltweit eindeutig.</p>'
        },
        {
          label: 'Fritz!Box vergibt lokale IPs',
          html:
            '<p>Die Fritz!Box vergibt per <strong>DHCP</strong> lokale Adressen an alle Geraete:</p>'
            + '<ul>'
            + '<li>Laptop: <code>192.168.178.20</code></li>'
            + '<li>Smartphone: <code>192.168.178.21</code></li>'
            + '<li>Drucker: <code>192.168.178.5</code> (fest konfiguriert)</li>'
            + '</ul>'
        },
        {
          label: 'Druckauftrag im LAN',
          html:
            '<p>Der Laptop schickt einen Druckauftrag an <code>192.168.178.5</code>. '
            + 'Der Router erkennt: Ziel ist <strong>im eigenen Netz</strong>. '
            + 'Der Auftrag bleibt im LAN und geht nicht ins Internet.</p>'
        },
        {
          label: 'Webseite laden (Internet)',
          html:
            '<p>Der Laptop ruft <code>google.de</code> auf. Der Router erkennt: '
            + 'Ziel ist <strong>ausserhalb</strong> des Heimnetzes. '
            + 'Er ersetzt die lokale Absender-IP durch seine globale IP und schickt das Paket raus.</p>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welcher IP-Adressbereich ist fuer private/lokale Netze reserviert?',
        options: [
          '134.34.0.0/16',
          '8.8.8.0/24',
          '192.168.0.0/16',
          '200.100.50.0/24'
        ],
        correct: 2,
        explanation: '192.168.0.0/16 ist einer der reservierten privaten Adressbereiche. Adressen wie 192.168.x.x werden nicht im Internet geroutet und koennen in jedem Heimnetz verwendet werden.'
      },
      {
        type: 'multiple-choice',
        question: 'Was macht DHCP?',
        options: [
          'Es verschluesselt die Internetverbindung',
          'Es vergibt automatisch IP-Adressen an Geraete im Netzwerk',
          'Es verbindet zwei verschiedene Netze',
          'Es prueft, ob ein Host erreichbar ist'
        ],
        correct: 1,
        explanation: 'DHCP (Dynamic Host Configuration Protocol) vergibt automatisch freie IP-Adressen an Geraete, die sich im Netz anmelden. Das erspart die manuelle Konfiguration.'
      }
    ]
  }

];
