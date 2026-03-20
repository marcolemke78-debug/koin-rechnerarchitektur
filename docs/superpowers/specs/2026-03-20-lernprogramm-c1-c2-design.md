# Design: KOIN Lernprogramm C1 & C2

## Zusammenfassung

Interaktives Lernprogramm als lokale Web-App (HTML/CSS/JS) fuer die Lerneinheiten C1 (Schaltalgebra) und C2 (Binaerarithmetik & sequenzielle Logik) des Kontaktstudiums Informatik an der Uni Konstanz.

## Zielgruppe

Lehrer im Kontaktstudium, fortgeschrittener Anfaenger in Programmierung. Braucht verstaendliche Erklaerungen mit Alltagsanalogien, Schritt-fuer-Schritt-Aufbau.

## Architektur

- Reine Client-Side Web-App, kein Server, kein Framework
- Einstiegspunkt: `app/index.html` – einfach im Browser oeffnen
- Fortschritt via `localStorage` persistent gespeichert
- `app/` ist ein neuer Ordner auf gleicher Ebene wie `LE_C1/` und `LE_C2/`
- Die App greift NICHT auf die LE-Ordner zu – alle Inhalte sind in `app/` eigenstaendig

### Dateistruktur

```
app/
  index.html
  css/style.css
  js/app.js           -- Navigation, Fortschritt-Tracking, Routing
  js/lessons.js       -- Lektionsinhalte als strukturierte Daten
  js/exercises.js     -- Uebungslogik (Wahrheitstabellen, Quiz, Eingabe-Pruefung)
  js/renderer.js      -- DOM-Rendering fuer Lektionen und Uebungen
  assets/             -- SVG-Bilder fuer Gatterschaltungen, Schaltkreise (neu erstellt)
```

## Lernablauf

Kurs-Stil: Lektion fuer Lektion durcharbeiten. Jede Lektion hat drei Phasen:

1. **Erklaerung** – Text + Bilder/Diagramme, kurz und verstaendlich, Alltagsanalogien
2. **Beispiel** – Durchgerechnetes Beispiel, Schritt fuer Schritt aufklappbar
3. **Uebung** – Interaktive Aufgaben, orientiert an den Moodle-Uebungsblaettern

## Lektionsstruktur

### Modul C1 – Schaltalgebra (10 Lektionen)

1. Einstieg: Was ist Rechnerarchitektur?
2. Schaltkreise: Serien- & Parallelschaltung
3. Logische Operatoren: AND, OR, NOT
4. Weitere Operatoren: XOR, NAND, NOR, XNOR
5. Wahrheitstabellen erstellen
6. Logische Ausdruecke & Operatorrangfolge
7. Gleichung → Wahrheitstabelle (Schritt fuer Schritt)
8. Wahrheitstabelle → Gleichung (Disjunktive Normalform)
9. Aequivalenz mit Wahrheitstabellen zeigen
10. Gatterschaltungen & Axiomensystem

### Modul C2 – Binaerarithmetik & Sequenzielle Logik (7 Lektionen)

11. Binaersystem als Schalter
12. ALU und Binaeraddition
13. Halbaddierer
14. Volladdierer
15. Addierwerk fuer mehrstellige Binaerzahlen
16. Sequenzielle vs. kombinatorische Logik, Flipflops
17. SR-Riegel

## Uebungstypen

| Typ | Beschreibung | Lektionen |
|-----|-------------|-----------|
| Wahrheitstabelle | Leere Tabelle, Nutzer klickt 0/1 in Zellen | 3-10 |
| Multiple Choice | Verstaendnisfragen mit Erklaerung bei falscher Antwort | Alle |
| Ausdruck eingeben | Nutzer tippt logischen Ausdruck, wird geprueft | 6-10 |
| Zuordnung | Gatterbild dem Operator per Klick zuordnen (kein Drag & Drop) | 3-4, 10 |
| Binaerrechnung | Nutzer traegt Binaerzahlen/Uebertraege ein | 12-15 |
| Zustandstabelle | Ein-/Ausgaenge von Halb-/Volladdierer ausfuellen | 13-15 |
| Timing-Zuordnung | Q/Q-quer Verlauf fuer SR-Riegel bestimmen (Multiple Choice) | 17 |

## Aufgaben-Orientierung

Uebungen orientieren sich direkt an den Moodle-Uebungsblaettern:

- C1: Schaltkreise ablesen, Wahrheitstafeln ausfuellen, DNF ableiten, Aequivalenz zeigen, Gatterschaltungen lesen
- C2: Binaeraddition durchfuehren, Halb-/Vollsubtrahierer analysieren, Addierwerk mit konkreten Werten durchrechnen, SR-Riegel Zustandsverlaeufe

## Notation (pruefungsrelevant)

Konkrete Unicode-Symbole, die im Programm und bei der Ausdruck-Eingabe verwendet werden:

| Operator | Symbol | Unicode |
|----------|--------|---------|
| AND | ∧ | U+2227 |
| OR | ∨ | U+2228 |
| NOT | ¬ | U+00AC |
| XOR | ⊕ | U+2295 |
| NAND | ⊼ | U+22BC |
| NOR | ⊽ | U+22BD |
| XNOR | ⊙ | U+2299 |

- Gatterzeichen: IEC 60617-12 Norm (als SVG in assets/)
- Wahrheitswerte: 0 und 1
- Binaer aufsteigend zaehlen in Wahrheitstabellen

## Parser-Strategie fuer Ausdruck-Eingabe

- Pruefung erfolgt ueber **Wahrheitstabellen-Aequivalenz** (semantisch, nicht syntaktisch)
- Der eingegebene Ausdruck wird geparst, eine Wahrheitstabelle generiert und mit der Musterloesung verglichen
- Toleranz: Leerzeichen werden ignoriert, ueberfluessige Klammern sind erlaubt
- Sonderzeichen-Buttons unter dem Textfeld fuer ∧ ∨ ¬ ⊕ (da diese nicht auf der Tastatur liegen)
- Variablennamen muessen exakt uebereinstimmen (a, b, c – nicht x, y, z wenn a, b, c gefragt)

## UI-Design

### Layout

- **Sidebar links:** Moduluebersicht mit Lektionsliste, Haekchen bei erledigten Lektionen
- **Hauptbereich:** Lektionsinhalt mit den 3 Phasen (Erklaerung, Beispiel, Uebung)
- **Fortschrittsbalken** oben pro Modul
- **Reset-Button** in der Sidebar zum Zuruecksetzen des Fortschritts

### Stil

- Clean & minimal mit Weissraum
- Ein Akzentfarbe (Blau) fuer interaktive Elemente
- Farbakzente fuer Operatoren in Tabellen und Diagrammen
- Responsive: Laptop und Tablet (kein Smartphone – Wahrheitstabellen sind auf kleinen Screens nicht bedienbar)

### Interaktionsmuster

- Wahrheitstabellen: Klick auf Zelle toggled zwischen 0 und 1
- Multiple Choice: Klick auf Antwort, sofortiges Feedback (richtig/falsch + Erklaerung)
- Ausdruck-Eingabe: Textfeld mit Sonderzeichen-Buttons, Pruefen-Button
- Zuordnung: Klick-basiert (Klick auf Gatter, dann Klick auf passenden Operator)
- Beispiele: Aufklappbare Schritte, einer nach dem anderen
- Binaerrechnung: Eingabefelder fuer jede Binaerstelle

## Fortschritt

Gespeichert in `localStorage` unter dem Key `koin_lernprogramm_progress`.

```json
{
  "version": 1,
  "lessons": {
    "1": { "status": "completed" },
    "2": { "status": "in_progress" },
    "3": { "status": "not_started" }
  },
  "lastLesson": 2
}
```

- Status pro Lektion: `not_started`, `in_progress`, `completed`
- Uebungen muessen bestanden werden um Lektion als `completed` zu markieren
- Beim naechsten Besuch: automatisch zur `lastLesson` navigieren
- Bei Schema-Aenderungen: `version` hochzaehlen, alte Daten migrieren oder zuruecksetzen

## Fehlerbehandlung

- Bei falschen Antworten: Hinweis was falsch war + Tipp, kein Abstrafen
- Bei Ausdruck-Eingabe: Toleranz fuer Leerzeichen und Klammervarianten
- Kein Timeout, kein Punktesystem – Ziel ist Verstehen, nicht Bestehen

## Abgrenzung (was NICHT gebaut wird)

- Kein Drag & Drop (weder fuer Gatterschaltungen noch fuer Zuordnungen)
- Kein Backend/Server
- Kein Login/Accounts
- Kein Punktesystem oder Gamification
- Keine Java-Programmieraufgaben (die aus den Uebungsblaettern bleiben extern)
- Kein Smartphone-Support
