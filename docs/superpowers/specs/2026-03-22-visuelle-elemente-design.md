# Design-Spec: Visuelle & Interaktive Elemente für KOIN Lernprogramm

**Datum:** 2026-03-22
**Status:** Genehmigt

## Zusammenfassung

Erweiterung des bestehenden Lernprogramms (17 Lektionen, C1/C2) um grafische Elemente und interaktive Simulationen. Ziel: visuelles Einprägen der Konzepte durch statische Diagramme (Erklärungen), Animationen (Beispiele) und interaktive Simulationen (Übungen). Zusätzlich eine freie Sandbox-Seite ("Labor") zum Experimentieren.

## Anforderungen

- **Alle Themenbereiche** abdecken: Gatterschaltungen, Binärarithmetik, sequenzielle Logik
- **3 Darstellungsformen:** Statische SVG-Grafiken, Animationen, interaktive Simulationen
- **Stil:** Verständnis first, aber auf IEC 60617-12 aufbauend – ergänzt durch Farben, Animationen, Hervorhebungen
- **Integration:** Sowohl in bestehende Lektionen als auch als freie Sandbox
- **Technik:** Vanilla JS/CSS/SVG, kein Framework (wie restliches Projekt)

## Architektur: Hybrid-Ansatz

Schlankes Komponenten-System mit wiederverwendbaren Bausteinen. Konkrete Schaltungen werden in den Lektionsdaten konfiguriert. Analog zu `exercises.js` → `visuals.js`.

### Neue Dateien

```
app/js/visuals.js      – Kern-Komponenten (GateSimulator, CircuitView, etc.)
app/js/circuits.js     – Schaltungs-Definitionen (Halbaddierer, Volladdierer, SR-Latch)
app/js/sandbox.js      – Labor-Seite Logik
```

### Erweiterte Dateien

- `renderer.js` – neues `renderVisuals()` für das `visuals`-Feld in Lektionsdaten
- `lessons-c1.js` – visuals-Felder für Lektionen 3-10
- `lessons-c2.js` – visuals-Felder für Lektionen 11-17
- `index.html` – neue Script-Tags, Labor-Eintrag in Sidebar
- `style.css` – CSS für Visualisierungen
- `app.js` – Navigation zum Labor

### Lektionsdaten-Erweiterung

Bestehendes Lektionsobjekt bekommt optionales `visuals`-Feld pro Phase:

```javascript
{
  id: 13,
  title: 'Halbaddierer',
  explanation: {
    html: '...',
    visuals: [
      { type: 'gate-sim', gate: 'xor', label: 'XOR als Summenbit' },
      { type: 'gate-sim', gate: 'and', label: 'AND als Carry' }
    ]
  },
  example: {
    steps: [...],
    visuals: [
      { type: 'circuit', circuit: 'half-adder', interactive: true }
    ]
  },
  exercises: [...]
}
```

## Farbschema für Signale

| Signal | Farbe | CSS-Variable |
|--------|-------|-------------|
| 1 / HIGH | `#16A34A` (grün) | `--success` |
| 0 / LOW | `#9CA3AF` (grau) | – |
| Carry / Übertrag | `#F59E0B` (orange) | – |
| Aktiver Pfad | `#2563EB` (blau) | `--accent` |

## Die 8 Visualisierungs-Komponenten

### 1. GateSimulator

Einzelnes Gatter (IEC 60617-12) als interaktives SVG. Eingänge klickbar (toggle 0/1), Signalfarbe ändert sich sofort, animierte Signal-Pulse auf Leitungen.

- **Unterstützte Gatter:** AND, OR, NOT, XOR, NAND, NOR, XNOR
- **Konfiguration:** `{ type: 'gate-sim', gate: 'and'|'or'|..., label?: string }`
- **Einsatz:** Lektionen 3-4, 10, Sandbox

### 2. CircuitView

Zusammengesetzte Schaltung aus mehreren Gattern. SVG-basiert, Eingänge klickbar, Signale fließen animiert durch die Gatter.

- **Vordefinierte Schaltungen:** half-adder, full-adder, sr-latch (in `circuits.js`)
- **Konfiguration:** `{ type: 'circuit', circuit: 'half-adder', interactive: true|false }`
- **Einsatz:** Lektionen 10, 13-15, 17, Sandbox

### 3. TruthTableLinked

Wahrheitstabelle synchronisiert mit einer CircuitView. Klick auf eine Tabellenzeile → Schaltung zeigt diese Eingabe-Kombination mit farbigen Leitungen.

- **Konfiguration:** `{ type: 'truth-table-linked', gate: 'and'|..., circuit?: string }`
- **Einsatz:** Lektionen 5, 7, 8, Sandbox

### 4. BinaryAnimation

Schritt-für-Schritt-Animation der schriftlichen Binäraddition. Play/Pause/Step-Buttons. Aktuelle Stelle hervorgehoben, Carry-Bits in Orange.

- **Konfiguration:** `{ type: 'binary-animation', operandA: '1011', operandB: '0110' }`
- **Einsatz:** Lektionen 12, 15, Sandbox

### 5. TimingDiagram

Zeitverlaufsdiagramm das sich live aufbaut. Zeigt S, R, Q, Q̄ als Signalverläufe. Gekoppelt mit SR-Latch CircuitView.

- **Konfiguration:** `{ type: 'timing-diagram', signals: ['S', 'R', 'Q', 'Q̄'] }`
- **Einsatz:** Lektionen 16-17, Sandbox

### 6. ExpressionTree

Baumdarstellung eines logischen Ausdrucks. Farbcodierung nach Operatorstärke (rot=NOT, grün=AND, blau=OR). Animation: Werte fließen von Blättern zur Wurzel.

- **Konfiguration:** `{ type: 'expression-tree', expression: '¬a ∧ b ∨ c' }`
- **Einsatz:** Lektionen 6-7, Sandbox

### 7. DNFHighlighter

Wahrheitstabelle mit farbig markierten 1-Zeilen. Darunter entsteht die DNF-Formel – jeder Minterm in der Farbe seiner Zeile. Schrittweise aufbaubar.

- **Konfiguration:** `{ type: 'dnf-highlighter', variables: ['a','b','c'], results: [0,1,0,0,1,0,1,0] }`
- **Einsatz:** Lektion 8, Sandbox

### 8. AdderSimulation

4 verkettete Volladdierer als interaktive Schaltung. Binärzahlen über Buttons eingeben, Carry wandert animiert von rechts nach links, Ergebnis erscheint Bit für Bit.

- **Konfiguration:** `{ type: 'adder-sim', bits: 4 }`
- **Einsatz:** Lektion 15, Sandbox

## Neue Übungstypen

Ergänzend zu den bestehenden 6 Übungstypen:

| Typ | `type`-Wert | Beschreibung |
|-----|-------------|--------------|
| Schaltungs-Aufgabe | `'circuit-exercise'` | Eingänge setzen, um gewünschten Ausgang zu erreichen |
| Schaltung zuordnen | `'circuit-matching'` | Schaltbild ↔ Ausdruck ↔ Wahrheitstabelle zuordnen |
| Expression-Tree | `'expression-tree-exercise'` | Ausdruck gegeben → Baum vervollständigen |

## Sandbox ("Labor")

Neuer Sidebar-Eintrag unterhalb der Module. Enthält alle Komponenten im freien Experimentiermodus:

| Bereich | Inhalt |
|---------|--------|
| Gatter-Labor | Alle 7 Gattertypen nebeneinander, klickbar |
| Schaltungs-Labor | Halbaddierer, Volladdierer, Addierwerk frei ausprobieren |
| Wahrheitstabelle ↔ Schaltung | Gatter per Dropdown wählen, Tabelle + Schaltung synchron |
| Binärrechner | Eigene Zahlen eingeben, Addition Schritt für Schritt |
| SR-Latch | Frei klicken, Timing-Diagramm beobachten |
| Ausdrucksbaum | Ausdruck eintippen → Baum wird live generiert |
| DNF-Generator | Wahrheitstabelle ausfüllen → DNF wird farbig generiert |

Kein Fortschritt, keine Bewertung – reines Experimentieren.

## Lektions-Zuordnung

### C1 – Schaltalgebra

| Lektion | Neue Visualisierungen |
|---------|----------------------|
| 3: AND, OR, NOT | GateSimulator (3 Gatter), TruthTableLinked |
| 4: XOR, NAND, NOR, XNOR | GateSimulator (4 Gatter), TruthTableLinked |
| 5: Wahrheitstabellen | TruthTableLinked (verschiedene Gatter) |
| 6: Operatorrangfolge | ExpressionTree |
| 7: Gleichung → Wahrheitstabelle | ExpressionTree + TruthTableLinked |
| 8: DNF | DNFHighlighter |
| 9: Äquivalenz | ExpressionTree (2 Bäume nebeneinander) |
| 10: Gatterschaltungen | CircuitView (einfache Gatterkombinationen) |

### C2 – Binärarithmetik & Sequenzielle Logik

| Lektion | Neue Visualisierungen |
|---------|----------------------|
| 12: Binäraddition | BinaryAnimation |
| 13: Halbaddierer | GateSimulator (XOR, AND), CircuitView (half-adder) |
| 14: Volladdierer | CircuitView (full-adder) |
| 15: Addierwerk | AdderSimulation, BinaryAnimation |
| 16: Sequenzielle Logik | CircuitView (Rückkopplung visualisiert) |
| 17: SR-Riegel | CircuitView (sr-latch), TimingDiagram |

## Phasen-Verteilung

| Phase | Visualisierungs-Typ | Interaktivität |
|-------|--------------------|----|
| Erklärung | Statische SVG-Grafiken + einfache Animationen | Keine – zum Anschauen |
| Beispiel | Animierte Step-by-Step-Durchläufe | Play/Pause/Step-Buttons |
| Übung | Interaktive Simulationen | Volle Interaktion, Aufgabe + Feedback |
