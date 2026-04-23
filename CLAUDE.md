# CLAUDE.md

Guidance für Claude Code beim Arbeiten in diesem Repo.

## Projektbeschreibung

Interaktives Lernprogramm für Marcos Kontaktstudium Informatik (KOIN) an der
Universität Konstanz. Deckt die Lerneinheiten **A1–A4** (Themenbereich A:
Stellenwertsysteme, Binärarithmetik, Datenstrukturen, Algorithmen) und
**C1/C2/C5/C6** (Themenbereich C: Schaltalgebra, Binärarithmetik mit
Sequenzieller Logik, Rechnernetze I+II) ab.

Fokus: **klausurrelevante Aufgaben** („Mögliche Klausuraufgabe").

Nutzer: Marco, Lehrer an einer Gemeinschaftsschule BW, fortgeschrittener
Anfänger in der Programmierung. Er lernt damit selbst – das Programm muss
eigenständig verständlich sein.

## Aktueller Stand (Stand: siehe Git-Log)

- **20 A-Lektionen** (IDs 22–41) + Zusatz: **L42 Binäre Suche** (A3),
  **L43 Hamming-Code** (A4)
- **21 C-Lektionen** (IDs 1–21) verteilt auf C1/C2/C5/C6
- **Gesamt: 43 Lektionen**, alle klausurmarkierten Aufgabentypen aus den
  KOIN-Übungsblättern abgedeckt

## Projektpfad

```
/Users/marcolemke/Desktop/Kontaktstudium/LE_C_Komplett/Claude_Code_Lernprogramm/
```

**Repo:** `github.com/marcolemke78-debug/koin-rechnerarchitektur`
(Ordner wurde 2026-04-23 von `Claude_Code_Lernprogramm_C1-C6` umbenannt.)

## Architektur

Vanilla HTML/CSS/JS – kein Framework, kein Build, kein Server. Öffnen per
`app/index.html` oder über GitHub Pages.

```
app/
├── index.html                  Einstieg, Script-Tags in fester Reihenfolge
├── css/style.css               Box-Klassen, Badges, Sidebar-Styling
├── js/
│   ├── progress.js             localStorage-Fortschritt
│   ├── parser.js               Boolesche Ausdrücke
│   ├── visuals.js              Alle Visual-Renderer (große Datei!)
│   ├── circuits.js             Circuit-Definitionen
│   ├── exercises.js            Exercise-Typen (MC, truth-table, matching, ...)
│   ├── renderer.js             DOM-Rendering, Phasen-Tabs, EXAM_ICON_SVG
│   ├── sandbox.js              Labor-Modus
│   ├── lessons-a1.js … a4.js   Lektions-Daten A-Modul
│   ├── lessons-c1.js … c6.js   Lektions-Daten C-Modul
│   └── app.js                  LESSONS-Array, Navigation, Init
```

## Lernmaterialien (Quelldaten, nicht im Git)

Die Ordner `LE_A1–A4` und `LE_C1/C2/C5/C6` enthalten Uni-PDFs, sind per
`.gitignore` ausgeschlossen (Urheberrecht).

| Modul | PDF-Quellen |
|-------|-------------|
| A1 Stellenwertsysteme | `LE_A1/LE_01_KOIN_Uebungen_A1.pdf`, Trainingsaufgaben |
| A2 Binärrechnung+IEEE | `LE_A2/A2_Uebung_A2_Aufgaben.pdf`, Trainings |
| A3 BST+Hashing+BSuche | `LE_A3/A3_Übung_A3_Aufgaben.pdf`, Trainings |
| A4 Algorithmik | `LE_A4/A4_Übung_A4_Aufgaben.pdf`, Trainings |
| C1 Schaltalgebra | `LE_C1/Uebungen_C1_Aufgaben.pdf` |
| C2 Binärarithm+SR | `LE_C2/Uebungen_C2_Aufgaben.pdf` |
| C5 Rechnernetze I | `LE_C5/Uebungen_C5_Aufgaben.pdf` |
| C6 Rechnernetze II | `LE_C6/Uebungen_C6_Aufgaben.pdf` |

## Das „Mögliche Klausuraufgabe"-Symbol

In den KOIN-Übungs-PDFs markiert ein **Klemmbrett+Stift-Symbol** einzelne
Aufgaben als prüfungsrelevant. Das Symbol erscheint zusätzlich zum
Aufgabentyp-Symbol (Anwendung/Transfer/Programmier).

**Jeder neuen Lektion vorweg:**
1. PDF lesen und **alle** Klausur-Aufgaben identifizieren
2. Prüfen, ob Aufgabentyp als Example oder Exercise im Programm ist
3. Lektion bekommt `examRelevant: true` im `LESSONS`-Array, wenn mindestens
   eine Klausuraufgabe ins Thema fällt
4. Einzelne Exercises, die **1:1** einer klausurmarkierten PDF-Aufgabe
   entsprechen, bekommen zusätzlich `examRelevant: true`

Das Badge (gelbes Klemmbrett-Pill) wird automatisch gerendert:
- Sidebar: kleines Icon vor Lektionstitel
- Lektionsseite: großes Pill unter H1
- Exercise: kompaktes Pill über der Fragestellung

**Nicht markierte Lektionen** (bewusst kein examRelevant):
- A-Modul: keine (alle markiert)
- C1: L2 (Operatoren = Grundlage, PDF hat kein Symbol)
- C2: L7 (Binärsystem), L10 (Addierwerk – PDF hat nur Transfer-Symbol)
- C5: L12 (IP-Grundlagen = Grundlage)
- C6: L21 (Topologien – PDF hat nur Transfer-Symbol)

## Didaktisches Muster (Pflicht pro Lektion)

Jede Lektion folgt diesem Aufbau in `explanation.html`:

1. **`<h2>` + Einstiegsabsatz** (1–2 Sätze)
2. **`analogy-box`** (blau) – Alltagsanalogie
3. Fachliche Erklärung mit `<h3>`-Abschnitten
4. **`tip-box`** (gelb, satter als why-context) – Klausur-Tipp
5. **`warning-box`** (rot) – Typischer Klausurfehler / Fallstrick
6. **`reading-guide`** (grau) – „So liest du das Visual unten" wenn Visual da
7. **`why-context`** (amber) – „Warum ist das wichtig?"
8. **Mindestens ein Visual** in `explanation.visuals[]`

Plus `example.steps[]` mit aufklappbaren Schritten und **3–5 `exercises[]`**.

### Box-Farbschema (CSS-Klassen in style.css)

| Klasse | Farbe | Zweck |
|--------|-------|-------|
| `analogy-box` | Blau #eff6ff / #2563EB | Alltagsanalogie |
| `tip-box` | Gelb #fef9c3 / #ca8a04 | Klausur-Tipp (satter als why-context) |
| `warning-box` | Rot #fee2e2 / #dc2626 | Typischer Klausurfehler |
| `why-context` | Amber #fffbeb / #f59e0b | Warum-Motivation |
| `reading-guide` | Grau #f3f4f6 / #6b7280 | Lese-Hilfe für Visuals |

## Verfügbare Visual-Typen (visuals.js)

**Generisch:**
- `bit-layout` – statische Bit-Darstellung mit farbigen Gruppen und Labels
  (aber bei `length: 1` dürfen Labels max. 3 Zeichen lang sein, sonst Überlauf)
- `stellenwert-viz`, `binary-animation`, `binary-interactive`

**Schaltungen (C1/C2):**
- `gate-sim`, `circuit`, `truth-table-linked`, `expression-tree`,
  `dnf-highlighter`, `timing-diagram`, `adder-sim`

**Netzwerke (C5/C6):**
- `ip-converter`, `subnet-calculator`, `subnetting-viz`, `network-diagram`
  (Presets: `topology-star/ring/bus/tree/line/mesh`)

**Datenstrukturen (A3):**
- `bst-viz`, `bst-interactive`, `hashtable-viz`, `hashtable-interactive`

**A4:**
- `struktogramm`, `flussdiagramm`

**Inline-SVG direkt in question/explanation-html funktioniert** (der
Exercise-Renderer nutzt `innerHTML`). Für einmalige Diagramme ist inline-SVG
einfacher als ein neuer Visual-Typ.

## Themenstruktur

### A1 – Stellenwertsysteme & Codierung (IDs 22–26)
Stellenwerte, Binär↔Dezimal, Oktal↔Binär, Hex↔Binär/RGB, BCD

### A2 – Binärrechnung & Codierung II (IDs 27–31)
Binäre Addition, Einerkomplement, Zweierkomplement, IEEE 754, ASCII

### A3 – Datenstrukturen I & Binäre Suche (IDs 32–36, 42)
BST Grundlagen/Einfügen/Löschen, Hashing, Kollisionen, Binäre Suche

### A4 – Algorithmik & Hamming (IDs 37–41, 43)
Algorithmus-Charakteristika, Pseudocode/Struktogramm/Flussdiagramm, Listen,
Sieb des Eratosthenes, ISBN-13, Hamming-Code

### C1 – Schaltalgebra (IDs 1–6)
Schaltkreise, Operatoren, WTT, DNF, Äquivalenz, Gatterschaltungen

### C2 – Binärarithmetik & Sequenzielle Logik (IDs 7–11)
Binärsystem/Subtraktion, Halbsubtrahierer, Vollsubtrahierer, Addierwerk,
SR-Riegel mit Timing

### C5 – Rechnernetze I (IDs 12–16)
IP-Grundlagen, IP-Validierung, Subnetzmasken, Netzwerk-IDs, Subnetting

### C6 – Rechnernetze II (IDs 17–21)
DNS, Netzwerkstruktur, IP-im-Netz-Prüfung, Routing-Tabellen, Topologien

## Notation (Prüfungsrelevant!)

- **Operatoren:** AND = ∧, OR = ∨, NOT = ¬, XOR = ⊕
- **Gatterzeichen:** IEC 60617-12 (rechteckige Boxen mit `&`, `≥1`, `=1`, `1`
  + Kringel für Negation). US-Symbole sind **falsch**.
- **Wahrheitswerte:** 0 und 1 (nicht true/false)
- Binär aufsteigend zählen in Wahrheitstabellen

## Lessons-Datei-Konventionen

Die `lessons-*.js`-Dateien verwenden **escape-codierten Unicode**
(`ä` statt `ä`) in den JS-Strings:

```javascript
+ '<p>Häuserblock-Analogie: ...</p>'
```

Das **muss beim Editieren beibehalten** werden:
- Deutsche Umlaute als `ä` (ä), `ö` (ö), `ü` (ü), `ß` (ß)
- Mathe: `∧` (∧), `∨` (∨), `¬` (¬), `⊕` (⊕)
- Pfeile: `→` (→), `←` (←), `↔` (↔)

**Keine typografischen Quotes im JS-Code:** `„"` und `""` werden per Hook
geblockt. In strings gerade `'` und `"` verwenden. Auch *innerhalb* der
HTML-Strings keine typografischen Quotes.

Bei größeren Batch-Ersetzungen ist **Python mit `\\u00E4` matching**
effizienter als Edit-Tool, weil Edit die UTF-8-Form sucht, die Datei aber
Escape-Form hat.

## Exercise-Typen & Flags

```javascript
{
  type: 'multiple-choice',
  examRelevant: true,        // optional – zeigt Klausur-Badge
  question: 'Was ist ...?',   // HTML erlaubt (innerHTML-Rendering)
  options: ['A', 'B', 'C'],   // HTML erlaubt
  correct: 1,                 // Index
  explanation: 'Weil ...'     // HTML erlaubt
}
```

**Verfügbare types:** `multiple-choice`, `truth-table`, `expression-input`,
`binary-calculation`, `state-table`, `matching`, `circuit-exercise`,
`circuit-matching`, `expression-tree-exercise`, `binary-decimal`,
`subnet-exercise`, `network-labeling`.

`examRelevant: true` funktioniert auf allen types (zentral in `render()`
gerendert).

## Kommunikationsstil für Marco

- Deutsch, schülernahe Erklärungen
- Analogien aus dem Alltag (Parkhaus für Array, Schnitzeljagd für Liste,
  Chef-Abteilung für BST-Löschen …)
- Fachbegriffe beim ersten Auftreten erklären
- Keine Informatiker-Floskeln
- Klausur-Orientierung: bei jeder Lektion explizit sagen „In der Klausur
  zählt das X Punkte" oder „Typischer Klausurfehler ist …"

## Review-Workflow bei neuen Modulen/größeren Änderungen

Bewährtes Muster (genutzt für A- und C-Review):

1. **4 parallele Review-Agenten** starten (einer pro Modul/Lerneinheit),
   Sub-Agent-Typ `superpowers:code-reviewer`
2. Jeder Agent bekommt im Prompt:
   - Projektpfad und Lessons-Datei
   - PDF-Pfad für Klausursymbol-Analyse
   - Konkrete Prüfkriterien (PDF-Abdeckung, Boxen, Visuals, Interaktives,
     Übungen, Sprache, examRelevant)
   - Fachliche Korrektheit (Rechnungen stichprobenartig)
   - Report-Format in Markdown (max 500–700 Wörter)
3. Berichte aggregieren in priorisierte To-Do-Liste:
   🔴 KRITISCH (fachliche Fehler, fehlende Klausur-Aufgabentypen)
   🟠 WICHTIG (zusätzliche Interaktivität, fehlende Boxen)
   🟢 NICE-TO-HAVE
4. Phase 1 (Quickfixes), Phase 2 (Klausur-Lücken), Phase 3 (Qualitätspolitur)
5. **Abschluss-Review** mit denselben 4 Agenten, um Regression auszuschließen

## Git-Konventionen

- Commit-Prefixes: `feat:`, `fix:`, `chore:`, `style:`
- Co-Author-Zeile am Ende: `Co-Authored-By: Claude Opus …`
- Deutsche Umlaute in Commit-Messages sind OK
- **Nach jeder Änderung committen & pushen** (GitHub Pages deployed live!)
- Quellmaterial (LE_*/) bleibt außerhalb vom Git via `.gitignore`

## Bekannte Fallstricke (erlernt, nicht wiederholen)

1. **Unicode-Escapes** wie oben beschrieben – Edit-Tool findet die Strings
   sonst nicht (Python-Fallback).
2. **`bit-layout` Label-Länge**: bei `length: 1` max. 3 Zeichen pro Label,
   sonst Überlappung. Für längere Labels eigene HTML-Tabelle im `html:`-Feld.
3. **SVG viewBox**: Text-Anchors mit `text-anchor="middle"` können außerhalb
   der viewBox abgeschnitten werden. Lieber viewBox großzügig oder
   Beschriftungen innerhalb Kreisen/Gruppen platzieren (siehe Venn-Diagramm
   in L43).
4. **Typografische Quotes in JS** sind per Hook blockiert. Auch in
   HTML-Strings gerade Quotes verwenden.
5. **Pre-Ausrichtung** bei Binärrechnungen: alle Zeilen rechtsbündig am LSB,
   Kommentare/Bezeichner in separater Spalte mit konstanten Abstand.
6. **Progress-Counter in renderer.js** (`Progress.getCompletionPercent(1, N)`)
   muss bei neuen Lektionen hochgezählt werden.
7. **localStorage-Kompatibilität**: IDs nicht ändern, sonst verliert Marco
   seinen Fortschritt. Neue Lektionen bekommen neue IDs am Ende (42, 43, …).

## Erweitern (nächste Module ergänzen)

Wenn weitere KOIN-Module (A5+, B, D, E …) dazukommen:

1. **PDF-Analyse zuerst**: Klausursymbol identifizieren, Aufgabentypen
   katalogisieren, Klausur-Punkte notieren
2. **Neue `lessons-XN.js` anlegen** mit dem didaktischen Muster (oben)
3. **LESSONS-Array in app.js** erweitern, `examRelevant` passend setzen
4. **`index.html`** um `<script>`-Tag erweitern
5. **Sidebar-HTML** erweitern (`<div id="module-xn">` mit `<ul>`)
6. **renderer.js `renderSidebar`** um neues `moduleTargets`-Mapping und
   Progress-Counter-Range anpassen
7. **Syntax-Check** (`node -c`) vor jedem Commit
8. **4-Parallel-Review-Agenten** nach Abschluss starten

Visuals.js, exercises.js, style.css werden **nicht** neu geschrieben – die
Infrastruktur steht. Nur bei echt neuen Aufgabentypen oder Visualisierungen
erweitern.
