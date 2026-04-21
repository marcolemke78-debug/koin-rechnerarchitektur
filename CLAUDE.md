# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projektbeschreibung

Dieses Repository enthält ein **interaktives Lernprogramm** für das Kontaktstudium Informatik (KOIN) an der Universität Konstanz. Es deckt die Lerneinheiten **C1 (Schaltalgebra)**, **C2 (Binärarithmetik & sequenzielle Logik)**, **C5 (Rechnernetze I)** und **C6 (Rechnernetze II)** ab – fokussiert auf klausurrelevante Aufgaben ("Mögliche Klausuraufgabe").

Der Nutzer ist Lehrer und fortgeschrittener Anfänger in der Programmierung. Das Programm soll ihn Schritt für Schritt durch die Themen führen.

## Lernmaterialien (Quelldaten)

- `LE_C1/LE_C1_.pdf` – Skript Schaltalgebra (Operatoren, Wahrheitstabellen, Gatterschaltungen, DNF, Axiomensystem)
- `LE_C1/Uebungen_C1_Aufgaben.pdf` – Übungsblatt C1 (Schaltkreise, Wahrheitstafeln, Gatterschaltungen)
- `LE_C1/content/` – Interaktive HTML-Version des C1-Skripts (Rise360-Export)
- `LE_C2/Folien Le_C2 Informatik 11.pdf` – Folien Binärarithmetik & sequenzielle Logik
- `LE_C2/Uebungen_C2_Aufgaben.pdf` – Übungsblatt C2 (Halb-/Vollsubtrahierer, Addierwerk, SR-Riegel)
- `LE_C5/lerneinheit-c-5-rechnernetze-i-grundlagen-der-kommunikation-und-adressierung-9q-18Cxd.pdf` – Skript Rechnernetze I
- `LE_C5/Uebungen_C5_Aufgaben.pdf` – Übungsblatt C5 (IP-Grundlagen, Validierung, Subnetting)
- `LE_C6/lerneinheit-c-6-rechnernetze-ii-routing-ports-und-wichtige-modelle-HUGxG7E1.pdf` – Skript Rechnernetze II
- `LE_C6/Uebungen_C6_Aufgaben.pdf` – Übungsblatt C6 (DNS, Routing-Tabellen, Topologien)

## Themenstruktur

### C1 – Schaltalgebra
1. Schaltkreise lesen & umwandeln (Serien/Parallel → AND/OR → WTT → Gatter)
2. Logische Operatoren: AND, OR, NOT, XOR, NAND, NOR, XNOR + Rangfolge
3. Wahrheitstabelle aus Ausdruck erstellen (Hilfsspalten, binär aufsteigend)
4. Disjunktive Normalform (DNF) ableiten (WTT → Minterme → Gleichung)
5. Äquivalenz mit Wahrheitstabellen beweisen
6. Gatterschaltungen zeichnen & lesen (IEC 60617-12, XOR aus AND/OR/NOT)

### C2 – Binärarithmetik & Sequenzielle Logik
1. Binärsystem & Subtraktion
2. Halbsubtrahierer (WTT + Gatterschaltung)
3. Vollsubtrahierer (aus zwei Halbsubtrahierern)
4. Addierwerk 4-Bit (Rechenschritte, Carry-Propagation)
5. SR-Riegel & Timing-Diagramme

### C5 – Rechnernetze I
1. IP-Grundlagen & Multiple Choice (Hostanteil, Maskenbits, IPv4/IPv6)
2. IP-Adressen validieren (gültig/ungültig begründen)
3. Subnetzmasken & binäre Schreibweise (Dotted-Binary-Notation)
4. Netzwerk-IDs berechnen (IP AND Maske)
5. Subnetting Praxis (/27, Broadcast berechnen)

### C6 – Rechnernetze II
1. DNS & IP im Internet finden (Dotted-Binary, DNS-Ablauf)
2. Netzwerkstruktur & Wahr/Falsch-Aussagen (Switch/Router/Hub)
3. IP-Adressen im Netz prüfen (IP AND Maske = Netz-ID?)
4. Routing-Tabellen ausfüllen (ND, Gateway, Interface)
5. Netzwerktopologien (Stern, Ring, Baum, Linie/Bus)

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
