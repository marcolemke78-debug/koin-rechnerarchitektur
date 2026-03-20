# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projektbeschreibung

Dieses Repository enthält ein **interaktives Lernprogramm** für das Kontaktstudium Informatik (KOIN) an der Universität Konstanz. Es deckt die Lerneinheiten **C1 (Schaltalgebra)** und **C2 (Binärarithmetik & sequenzielle Logik)** ab.

Der Nutzer ist Lehrer und fortgeschrittener Anfänger in der Programmierung. Das Programm soll ihn Schritt für Schritt durch die Themen führen.

## Lernmaterialien (Quelldaten)

- `LE_C1/LE_C1_.pdf` – Skript Schaltalgebra (Operatoren, Wahrheitstabellen, Gatterschaltungen, DNF, Axiomensystem)
- `LE_C1/Uebungen_C1_Aufgaben.pdf` – Übungsblatt C1 (Schaltkreise, Wahrheitstafeln, Gatterschaltungen, ggT-Java)
- `LE_C1/content/` – Interaktive HTML-Version des C1-Skripts (Rise360-Export)
- `LE_C2/Folien Le_C2 Informatik 11.pdf` – Folien Binärarithmetik & sequenzielle Logik
- `LE_C2/Uebungen_C2_Aufgaben.pdf` – Übungsblatt C2 (Halb-/Vollsubtrahierer, Addierwerk, SR-Riegel, Java)

## Themenstruktur

### C1 – Schaltalgebra
1. Schaltkreise (Serien-/Parallelschaltung)
2. Logische Operatoren: AND, OR, NOT, XOR, NAND, NOR, XNOR
3. Wahrheitstabellen erstellen und auswerten
4. Logische Ausdrücke & Operatorrangfolge (NOT > AND > OR)
5. Umwandlung: Gleichung → Wahrheitstabelle
6. Umwandlung: Wahrheitstabelle → Gleichung (Disjunktive Normalform)
7. Äquivalenz zeigen mit Wahrheitstabellen
8. Gatterschaltungen (IEC 60617-12 Norm)
9. Axiomensystem nach Peano (Rechenregeln)

### C2 – Binärarithmetik & Sequenzielle Logik
1. Binärsystem als Schalter
2. ALU und Binäraddition
3. Halbaddierer (XOR + AND)
4. Volladdierer (zwei Halbaddierer)
5. Addierwerk für mehrstellige Binärzahlen
6. Sequenzielle vs. kombinatorische Logik
7. Flipflops / bistabile Kippstufen
8. SR-Riegel (NOR-basiert)

## Notation (Prüfungsrelevant!)

- **Operatoren:** AND = ∧, OR = ∨, NOT = ¬, XOR = ⊕
- **Gatterzeichen:** IEC 60617-12 Norm (wird in der Prüfung erwartet!)
- **Wahrheitswerte:** 0 und 1 (nicht true/false)
- Binär aufsteigend zählen in Wahrheitstabellen

## Kommunikation

- Deutsch als Sprache für Erklärungen und UI
- Verständliche, erklärende Sprache – wie für Schüler:innen
- Bei Nachfragen: noch einfacher erklären
- Analogien aus dem Alltag nutzen
- Code-Kommentare Deutsch, Variablennamen Englisch
