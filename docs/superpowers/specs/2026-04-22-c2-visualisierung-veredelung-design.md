# C2 Visualisierung & Erklärungs-Veredelung — Design

**Datum:** 2026-04-22
**Scope:** Modul C2 (Binärarithmetik & Sequenzielle Logik), Lektionen 7–11
**Nachfolge-Scope:** Muster-Übertragung auf C1, C5, C6 (separater Durchlauf)

## Problem

Das Lernprogramm besitzt eine umfangreiche Visualisierungs-Infrastruktur in `app/js/visuals.js` (1883 Zeilen, 14 Renderer) — sie wird in den Erklärungen aber praktisch nicht genutzt:

- `lessons-c1.js`: 1 Visual-Einbindung
- `lessons-c2.js`: 0 Einbindungen
- `lessons-c5.js`: 0 Einbindungen
- `lessons-c6.js`: 0 Einbindungen

Folge: Die Erklärungs-Phasen bestehen aus reinem HTML-Text und Tabellen, obwohl interaktive Gatter-, Schaltungs-, Binär-, Adder-, Timing- und Netzwerk-Visualisierungen bereits gebaut sind. Außerdem fehlen Alltagsanalogien und Warum-Kontext, die den Stoff für den Nutzer (Lehrer, fortgeschrittener Anfänger) greifbarer machen würden.

## Ziel

Modul C2 so veredeln, dass es als Referenz-Qualität für die anderen Module dient:

1. Jede Lektion bindet mindestens ein passendes Visual in die Erklärungsphase ein.
2. Jede Lektion enthält mindestens eine Alltagsanalogie und einen Warum-Kontext.
3. Jede Lektion hat feinere `example.steps`, wo didaktisch sinnvoll mit begleitenden Mini-Visuals.

Erst wenn C2 durch den Nutzer abgenommen ist, wird dasselbe Muster auf C1, C5, C6 übertragen.

## Nicht im Scope

- Keine neuen Übungstypen
- Keine Architektur-Umbauten (kein Framework, kein Build-Tool)
- Keine kompletten Redesigns bestehender Visuals
- Keine Überarbeitung der Übungen in C2 (sind bereits akzeptabel)

## Architektur — was bleibt, was ändert sich

**Bleibt unverändert:**

- 3-Phasen-Struktur (Erklärung, Beispiel, Übung)
- `renderer.js`-Dispatching über `explanation.visuals` / `example.visuals`
- Datenformat in `lessons-*.js`
- Alle bestehenden Renderer in `visuals.js`

**Erweiterungen:**

- `lessons-c2.js`: erweiterte `explanation.html`, neu befüllte `explanation.visuals`, feinere `example.steps` mit optionalen Step-Visuals
- `circuits.js`: zwei neue Schaltungs-Definitionen:
  - `half-subtractor` (XOR für Differenz, AND+NOT für Borgen-Ausgang)
  - `full-subtractor` (zwei Halbsubtrahierer verkettet + OR für B_out)
- `visuals.js`: nur bei Bedarf kleine Erweiterungen — wird pro Lektion beim Implementieren geprüft (z.B. Schritt-Modus für `renderBinaryAnimation`, falls nicht vorhanden)

## Pro-Lektion-Plan

Interaktivitäts-Stufen nach abgestimmter Klassifikation: **A** statisch, **B** geführt-animiert, **C** frei-interaktiv.

### L7 — Binärsystem & Subtraktion

- **Haupt-Visual:** `renderBinaryAnimation` für die Borgen-Animation
- **Interaktivität:** B (geführt-animiert, "Weiter"-Button)
- **Alltagsanalogie:** Geld-Wechsel-Bild ("3 € − 7 Cent: Münze muss zerlegt werden")
- **Warum-Kontext:** Computer kennen nur Strom-an/Strom-aus → deshalb muss alles binär darstellbar sein; Subtraktion ist fundamental für jede Rechenoperation
- **Example-Schritte:** pro Stelle ein Schritt mit Animation, Borgen wird visuell hervorgehoben

### L8 — Halbsubtrahierer *(Pilot-Lektion)*

- **Haupt-Visual:** `renderCircuit('half-subtractor')` + `renderTruthTableLinked` daneben/darunter
- **Interaktivität:** C (frei-interaktiv: A und B klickbar, Signale propagieren, WTT-Zeile wird synchron markiert)
- **Alltagsanalogie:** "Mini-Maschine mit 2 Knöpfen (A, B) und 2 Lämpchen (D = Differenz, B_out = musste ich mir was leihen?)"
- **Warum-Kontext:** kleinster Baustein der Subtraktions-Hardware; daraus wird später alles Größere zusammengesetzt
- **Example-Schritte:** 4 Eingangskombinationen als separate Schritte, jeweils zugehörige WTT-Zeile markiert

### L9 — Vollsubtrahierer

- **Haupt-Visual:** `renderCircuit('full-subtractor')` (zwei Halbsubtrahierer + OR)
- **Interaktivität:** C (A, B, B_in klickbar, Signalpropagation sichtbar)
- **Alltagsanalogie:** "Halbsubtrahierer mit Gedächtnis — merkt sich, ob von der Stelle rechts geborgt wurde"
- **Warum-Kontext:** Sprung zur Mehrstelligkeit — erst jetzt funktioniert Subtraktion auf echten Binärzahlen und nicht nur auf einzelnen Bits
- **Example-Schritte:** 8 Eingangskombinationen; visuelle Hervorhebung, wie B_in "von rechts kommt"

### L10 — Addierwerk 4-Bit

- **Haupt-Visual:** `renderAdderSim` (bestehend)
- **Interaktivität:** B + C (klickbare Eingänge, animierte Carry-Propagation)
- **Alltagsanalogie:** "Staffellauf: Carry wandert wie ein Stab von rechts nach links durch die Stellen"
- **Warum-Kontext:** Aus vielen Vollsubtrahierern/-addierern entsteht ein komplettes Rechenwerk — der Kern jeder CPU
- **Example-Schritte:** Schritt-für-Schritt durch die Carry-Propagation einer konkreten Rechnung

### L11 — SR-Riegel & Timing

- **Haupt-Visual:** `renderCircuit` (SR-Riegel mit rückgekoppelten NOR-Gattern, bereits in `circuits.js`) + `renderTimingDiagram`
- **Interaktivität:** A + B (Schaltung eher statisch-erklärend, Timing-Diagramm geführt durchlaufend)
- **Alltagsanalogie:** "Lichtschalter-Prinzip: einmal drücken und das Licht bleibt an, bis man Reset drückt"
- **Warum-Kontext:** Erster Schritt von reiner Logik Richtung **Speicher** — das ist die Basis für RAM und Register
- **Example-Schritte:** Timing-Diagramm phasenweise durchlaufen (S/R/Q-Zustände nacheinander)

## Arbeitsablauf

**Reihenfolge:** L8 (Pilot) → L7 → L9 → L10 → L11

**Pro Lektion ein Mini-Zyklus:**

1. Ich erweitere `explanation.html` (mehr Text, Alltagsanalogie, Warum-Kontext)
2. Ich befülle `explanation.visuals: [...]` gemäß Pro-Lektion-Plan
3. Ich zerlege `example.steps` feiner, füge wo sinnvoll Step-Visuals hinzu
4. Ggf. ergänze ich `circuits.js` (nur bei L8 und L9 für Subtrahierer)
5. Nutzer öffnet `app/index.html` im Browser, testet die Lektion
6. Feedback → Nachjustieren → nächste Lektion

**Analogie-Workflow (festgelegt):** Ich entwerfe Analogien und Warum-Kontext, der Nutzer (Lehrer, Fachperspektive) kritisiert und justiert nach. Keine Vorab-Diktate durch den Nutzer.

## Test-Strategie

- Kein Unit-Test-Framework in diesem Projekt
- Verifikation erfolgt manuell durch Browser-Test nach jeder Lektion
- Abnahme-Kriterien pro Lektion:
  - Visuals werden korrekt gerendert und sind wie in der Stufen-Klassifikation interaktiv
  - Text liest sich für fortgeschrittenen Anfänger verständlich (Urteil des Nutzers)
  - Beispiel-Schritte sind logisch nachvollziehbar und visuell begleitet
  - Keine Regressionen in bestehenden Lektionen

## Entscheidungen (festgehalten)

- **Scope:** Zuerst nur C2, erst nach Abnahme auf C1/C5/C6 übertragen
- **Interaktivitäts-Strategie:** D (Mix) — Stufe pro Lektion gemäß Pro-Lektion-Plan
- **Erklärungs-Dimensionen:** A (Alltagsanalogien) + C (Warum-Kontext) + D (feinere Example-Schritte) — nicht B (kein kompletter Neu-Aufbau von Grundlagen)
- **Analogie-Arbeitsteilung:** Claude entwirft, Nutzer justiert

## Offene Punkte / beim Implementieren zu klären

- Ob `renderBinaryAnimation` bereits einen Schritt-Modus ("Weiter"-Button) unterstützt oder ob eine kleine Erweiterung nötig ist (wird beim Bau von L7 geprüft)
- Ob die SR-Latch-Circuit-Definition in `circuits.js` bereits für `renderCircuit` brauchbar visuell ausreicht oder noch Layout-Anpassung braucht
- Layout-Integration: ob `renderCircuit` und `renderTruthTableLinked` nebeneinander (Desktop) oder untereinander (Tablet) gerendert werden sollen — Empfehlung: CSS-Flex-Layout, das responsive umbricht
