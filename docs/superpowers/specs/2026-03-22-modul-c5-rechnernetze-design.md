# Design-Spec: Modul C5 – Rechnernetze I

**Datum:** 2026-03-22
**Status:** Genehmigt

## Zusammenfassung

Erweiterung des KOIN Lernprogramms um Modul C5 "Rechnernetze I – Grundlagen der Kommunikation und Adressierung". 8 neue Lektionen (IDs 18-25), 4 neue Visualisierungs-Komponenten, 2 neue Übungstypen und Sandbox-Erweiterung. Folgt exakt der bestehenden Architektur (3-Phasen, visuals-Feld, exercises-Array).

## Anforderungen

- **8 Lektionen** basierend auf dem Skript `LE_C5/lerneinheit-c-5-rechnernetze-i-grundlagen-der-kommunikation-und-adressierung-9q-18Cxd.pdf`
- **Übungen** aus `LE_C5/Uebungen_C5_Aufgaben.pdf` (nur Netzwerk-Aufgaben, keine Java)
- **Interaktive Visualisierungen** wo pädagogisch sinnvoll
- **Sandbox** um Netzwerk-Tools erweitern
- **Technik:** Vanilla JS/CSS/SVG, kein Framework (wie restliches Projekt)

## Quellmaterialien

- `LE_C5/lerneinheit-c-5-rechnernetze-i-grundlagen-der-kommunikation-und-adressierung-9q-18Cxd.pdf` – Hauptskript (67 Seiten, 8 Lessons)
- `LE_C5/Uebungen_C5_Aufgaben.pdf` – Übungsblatt (Aufgaben 1-3 relevant, Aufgabe 4 Java = nicht relevant)
- `LE_C5/content/` – Rise360-Export (interaktiver HTML-Kurs)

## Architektur

Identisch zu C1/C2: Neue Lektionsdatei, bestehende Komponenten erweitern. Lektions-IDs 18-25 schließen an die bestehenden 17 an.

### Neue Dateien

```
app/js/lessons-c5.js   – 8 Lektionen (Erklärung, Beispiel, Übungen, Visuals)
```

### Erweiterte Dateien

- `app/js/visuals.js` – 4 neue Komponenten (IPConverter, SubnetCalculator, SubnettingVisualizer, NetworkDiagram)
- `app/js/exercises.js` – 2 neue Übungstypen (binary-decimal, subnet-exercise)
- `app/js/sandbox.js` – 3 neue Lab-Bereiche (IP-Rechner, Subnetz-Kalkulator, Subnetting-Tool)
- `app/js/renderer.js` – renderVisuals() um neue Typen erweitern
- `app/js/app.js` – LESSONS-Array um 8 Einträge erweitern (module: 'c5')
- `app/index.html` – Sidebar C5-Modul + Script-Tag für lessons-c5.js
- `app/css/style.css` – Styles für Netzwerk-Visualisierungen

## Die 8 Lektionen

### Lektion 18: Das Internet und Adressierung

**Inhalt:** Briefpost-Analogie für Netzwerkkommunikation, IP-Adressen als "Postanschrift", Geschichte (ARPANET), dezentrale Struktur.

**Erklärung:** HTML mit Analogie-Darstellung, Grundkonzepte.
**Beispiel:** Schritt-für-Schritt: Wie kommt eine Nachricht von A nach B?
**Visuals:** `{ type: 'network-diagram', mode: 'static', preset: 'internet-overview' }` – Einfaches Diagramm: Absender → Router → Internet → Router → Empfänger
**Übungen:** 2x Multiple-Choice (Grundverständnis)

### Lektion 19: Netztypen & Geräte

**Inhalt:** LAN vs. WAN, Netzwerkkomponenten (Router, Switch, Hub, Modem, Access Point, Host), Unterschiede.

**Erklärung:** HTML mit Geräte-Beschreibungen.
**Visuals:** `{ type: 'network-diagram', mode: 'interactive', preset: 'school-network' }` – Schulnetzwerk-Skizze, Geräte per Klick identifizieren
**Übungen:** 1x Matching (Gerät ↔ Funktion), 1x MC

### Lektion 20: Technische Grundlagen

**Inhalt:** Kabeltypen, DSL, ISDN, Bluetooth, WLAN, Mobilfunk (GSM/UMTS/LTE).

**Erklärung:** HTML mit Übersichtstabelle der Technologien.
**Visuals:** Keine (primär textuelles Thema).
**Übungen:** 2x MC (Technologie-Zuordnung)

### Lektion 21: IP-Adressen (IPv4, IPv6, MAC)

**Inhalt:** IPv4 Dotted Decimal, Binärdarstellung eines Oktetts, IPv6 Hex-Schreibweise, MAC-Adressen, Unterschiede.

**Erklärung:** HTML mit Adressformat-Erklärungen.
**Visuals:**
- `{ type: 'ip-converter' }` – Interaktiver Dezimal ↔ Binär Konverter
**Beispiel:** Step-by-Step: 192.168.1.1 in Binär umrechnen
**Übungen:** 1x binary-decimal (Oktett-Trainer), 2x MC (IPv4 vs IPv6, gültige Adressen)

### Lektion 22: Subnetzmaske & Net-ID

**Inhalt:** Netz- vs. Hostanteil, Subnetzmaske (Dezimal + CIDR), Net-ID berechnen (AND-Verknüpfung), Broadcast-Adresse, gültige Subnetzmasken.

**Erklärung:** HTML mit Erklärung der AND-Verknüpfung.
**Visuals:**
- `{ type: 'subnet-calculator' }` – IP + Maske eingeben → Net-ID, Broadcast, Hostbereich
- `{ type: 'ip-converter' }` – zum Nachvollziehen der Binärdarstellung
**Beispiel:** Step-by-Step: Net-ID aus 192.168.20.45/24 berechnen
**Übungen:** 1x subnet-exercise, 1x MC (gültige Subnetzmasken)

### Lektion 23: Subnetze berechnen

**Inhalt:** Netz in mehrere Subnetze aufteilen, Net-ID/Broadcast/Hostbereich pro Subnetz, CIDR-Notation.

**Erklärung:** HTML mit Schritt-für-Schritt Anleitung.
**Visuals:**
- `{ type: 'subnetting-viz', network: '192.168.10.0', cidr: 24 }` – Netz visuell in Subnetze aufteilen
**Beispiel:** Step-by-Step: 192.168.10.0/24 in 4 Subnetze aufteilen
**Übungen:** 1x subnet-exercise (komplexer: Netz aufteilen), 1x MC

### Lektion 24: Hands-on: ping

**Inhalt:** ping-Befehl, Netzwerk-Diagnose, FRITZBox-Oberfläche, MAC/IP im Router auslesen.

**Erklärung:** HTML mit Befehlsbeispielen und Screenshots-Beschreibung.
**Visuals:** Keine (Praxis-Anleitung, kein interaktives Element nötig).
**Übungen:** 2x MC (Was macht ping? Ausgabe interpretieren)

### Lektion 25: Lokale vs. globale IPs

**Inhalt:** Heimnetz als Subnetz, 192.168.x.x, DHCP, ISP-Verbindung, Router als Gateway.

**Erklärung:** HTML mit Heimnetz-Erklärung.
**Visuals:**
- `{ type: 'network-diagram', mode: 'static', preset: 'home-network' }` – Heimnetz mit lokalem Subnetz + ISP
**Übungen:** 2x MC (lokale vs. globale IPs, DHCP)

## 4 neue Visualisierungs-Komponenten

### 1. IPConverter

Interaktiver Dezimal ↔ Binär Konverter für IPv4-Adressen. 4 Oktette à 8 Bits.

**Darstellung:** 4 Gruppen von je 8 klickbaren Bit-Buttons (0/1). Darüber/darunter der Dezimalwert des Oktetts als editierbares Eingabefeld. Klick auf Bit → Dezimalwert aktualisiert. Dezimalwert ändern → Bits aktualisieren.

**Farbschema:**
- Bit=1: `--signal-high` (grün)
- Bit=0: `--signal-low` (grau)
- Oktett-Trenner: visuell deutlich (Punkt + Abstand)
- Stellenwerte (128, 64, 32, 16, 8, 4, 2, 1) über den Bits anzeigen

**Konfiguration:** `{ type: 'ip-converter' }`
**Einsatz:** Lektionen 21, 22, Sandbox

### 2. SubnetCalculator

IP-Adresse + Subnetzmaske eingeben → Ergebnisse werden berechnet und farbig dargestellt.

**Eingabe:** IP-Adresse (4 Felder) + Subnetzmaske (4 Felder oder CIDR /XX)
**Ausgabe:**
- Binärdarstellung beider Adressen (Netzanteil grün, Hostanteil blau markiert)
- Net-ID (berechnet via AND)
- Broadcast-Adresse (Hostbits auf 1)
- Erster/Letzter nutzbarer Host
- Anzahl nutzbarer Hosts (2^Hostbits - 2)

**Konfiguration:** `{ type: 'subnet-calculator' }`
**Einsatz:** Lektion 22, Sandbox

### 3. SubnettingVisualizer

Adressbereich als farbiger Balken, der in Subnetze aufgeteilt wird.

**Darstellung:** Horizontaler Balken = gesamter Adressbereich. Buttons oder Dropdown für Subnetz-Größe (/25, /26, /27, /28). Bei Auswahl: Balken teilt sich in farbige Segmente. Jedes Segment zeigt Net-ID und Broadcast.

**Konfiguration:** `{ type: 'subnetting-viz', network: '192.168.10.0', cidr: 24 }`
**Einsatz:** Lektion 23, Sandbox

### 4. NetworkDiagram

SVG-basiertes Netzwerkdiagramm mit Geräte-Icons.

**Modi:**
- `static` – Nur Anzeige, beschriftet
- `interactive` – Labels sind leer, per Klick aus einer Liste zuordnen

**Presets:**
- `internet-overview` – Einfach: Sender → Router → Cloud → Router → Empfänger
- `school-network` – Komplexer: Klassenzimmer, Lehrerzimmer, Computerraum, Router, Switch, AP, Internet
- `home-network` – Heimnetz: Modem → Router → Geräte (PC, Handy, Tablet), mit lokalen IPs

**Geräte-Icons (SVG):** Router (2 Pfeile), Switch (4 Ports), Host/PC (Monitor), Modem (Wellen), Access Point (Antenne), Cloud (Internet)

**Konfiguration:** `{ type: 'network-diagram', mode: 'static'|'interactive', preset: 'internet-overview'|'school-network'|'home-network' }`
**Einsatz:** Lektionen 18, 19, 25, Sandbox

## 2 neue Übungstypen

### binary-decimal

Oktett-Trainer: Ein Wert wird angezeigt (binär oder dezimal), der andere muss eingegeben werden. Mehrere Runden.

```javascript
{
  type: 'binary-decimal',
  question: 'Rechne die folgenden Oktette um.',
  rounds: [
    { given: '11000000', direction: 'bin2dec', answer: 192 },
    { given: '168', direction: 'dec2bin', answer: '10101000' },
    { given: '11111111', direction: 'bin2dec', answer: 255 },
    { given: '0', direction: 'dec2bin', answer: '00000000' }
  ]
}
```

### subnet-exercise

Subnetz-Berechnung: IP + Maske gegeben, verschiedene Felder berechnen.

```javascript
{
  type: 'subnet-exercise',
  question: 'Berechne die Netzwerk-Kenngrößen für 192.168.20.45/24.',
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
  explanation: 'Bei /24 sind die ersten 3 Oktette der Netzanteil. Der Hostanteil ist das 4. Oktett.'
}
```

## Sandbox-Erweiterung

3 neue Bereiche im Labor (nach den bestehenden 7):

| Bereich | Inhalt |
|---------|--------|
| IP-Rechner | IPConverter im Freitext-Modus |
| Subnetz-Kalkulator | SubnetCalculator zum freien Berechnen |
| Subnetting-Tool | SubnettingVisualizer mit eingebbarem Netz |

## Integration in bestehende App

### app.js – LESSONS-Array erweitern

8 neue Einträge mit `module: 'c5'`:
```javascript
{ id: 18, title: 'Das Internet und Adressierung', module: 'c5' },
{ id: 19, title: 'Netztypen & Geräte', module: 'c5' },
{ id: 20, title: 'Technische Grundlagen', module: 'c5' },
{ id: 21, title: 'IP-Adressen: IPv4, IPv6, MAC', module: 'c5' },
{ id: 22, title: 'Subnetzmaske & Net-ID', module: 'c5' },
{ id: 23, title: 'Subnetze berechnen', module: 'c5' },
{ id: 24, title: 'Hands-on: ping', module: 'c5' },
{ id: 25, title: 'Lokale vs. globale IPs', module: 'c5' },
```

### index.html – Sidebar C5-Modul

```html
<div id="module-c5">
  <h3>C5 – Rechnernetze I</h3>
  <ul id="lesson-list-c5"></ul>
</div>
```

### renderer.js – Sidebar-Rendering

`renderSidebar()` muss `lesson-list-c5` unterstützen (analog zu c1/c2).

### progress.js

`getCompletionPercent()` muss den erweiterten Bereich 1-25 abdecken.

### Script-Ladereihenfolge

```
progress.js → parser.js → visuals.js → circuits.js → exercises.js → renderer.js → sandbox.js → lessons-c1.js → lessons-c2.js → lessons-c5.js → app.js
```

## Lektions-Zuordnung der Visualisierungen

| Lektion | Visuals in Erklärung | Visuals in Beispiel |
|---------|---------------------|---------------------|
| 18 | NetworkDiagram (static, internet-overview) | – |
| 19 | NetworkDiagram (interactive, school-network) | – |
| 20 | – | – |
| 21 | IPConverter | – |
| 22 | SubnetCalculator, IPConverter | – |
| 23 | SubnettingVisualizer | – |
| 24 | – | – |
| 25 | NetworkDiagram (static, home-network) | – |

## Notation (aus dem Skript)

- **IPv4:** Dotted Decimal Notation (z.B. 192.168.1.1)
- **Binär:** Dotted Binary Notation (z.B. 11000000.10101000.00000001.00000001)
- **CIDR:** Slash-Notation (z.B. /24)
- **Subnetzmaske:** Dezimal (255.255.255.0) oder CIDR (/24)
- **Net-ID:** IP AND Subnetzmaske
- **Broadcast:** Net-ID mit allen Hostbits auf 1
