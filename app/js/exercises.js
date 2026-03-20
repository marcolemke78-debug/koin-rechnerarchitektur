const Exercises = {
  /**
   * Rendert eine einzelne Uebung in den Container.
   * Dispatcht je nach exercise.type an die passende Render-Funktion.
   *
   * @param {Object} exercise - Uebungsobjekt mit type, question, etc.
   * @param {HTMLElement} container - DOM-Element in das gerendert wird
   * @param {Function} onComplete - Callback wenn Uebung bestanden
   */
  render(exercise, container, onComplete) {
    switch (exercise.type) {
      case 'multiple-choice':
        return Exercises.renderMultipleChoice(exercise, container, onComplete);
      case 'truth-table':
        return Exercises.renderTruthTable(exercise, container, onComplete);
      case 'expression-input':
        return Exercises.renderExpressionInput(exercise, container, onComplete);
      case 'binary-calculation':
        return Exercises.renderBinaryCalculation(exercise, container, onComplete);
      case 'state-table':
        return Exercises.renderStateTable(exercise, container, onComplete);
      case 'matching':
        return Exercises.renderMatching(exercise, container, onComplete);
      default:
        const div = document.createElement('div');
        div.textContent = 'Übungstyp "' + exercise.type + '" wird noch implementiert.';
        container.appendChild(div);
    }
  },

  /**
   * Rendert eine Multiple-Choice-Uebung.
   * Zeigt Frage + Antwort-Buttons an. Bei Klick:
   * - Richtig: Button gruen, Erklaerung anzeigen, alle Buttons sperren, onComplete()
   * - Falsch: Button rot + gesperrt, Fehlermeldung anzeigen, weiter probieren
   *
   * @param {Object} exercise - { type, question, options, correct, explanation }
   * @param {HTMLElement} container - DOM-Element in das gerendert wird
   * @param {Function} onComplete - Callback wenn richtige Antwort gewaehlt
   */
  renderMultipleChoice(exercise, container, onComplete) {
    // Wrapper-Div fuer die gesamte MC-Uebung
    const wrapper = document.createElement('div');
    wrapper.className = 'exercise-mc';

    // Frage anzeigen
    const questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.textContent = exercise.question;
    wrapper.appendChild(questionEl);

    // Container fuer die Antwort-Buttons
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'mc-options';

    // Feedback-Bereich (anfangs versteckt)
    const feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    // Fuer jeden Antwort-Button einen Event-Listener anlegen
    exercise.options.forEach(function(optionText, index) {
      const button = document.createElement('button');
      button.className = 'mc-option';
      button.setAttribute('data-index', index);
      button.textContent = optionText;

      button.addEventListener('click', function() {
        if (index === exercise.correct) {
          // Richtige Antwort: Button gruen markieren
          button.classList.add('correct');

          // Feedback mit Erklaerung anzeigen
          feedbackEl.textContent = exercise.explanation;
          feedbackEl.className = 'exercise-feedback correct';
          feedbackEl.style.display = 'block';

          // Alle Buttons deaktivieren
          const allButtons = optionsContainer.querySelectorAll('.mc-option');
          allButtons.forEach(function(btn) {
            btn.disabled = true;
          });

          // Uebung als abgeschlossen melden
          onComplete();
        } else {
          // Falsche Antwort: Button rot markieren und sperren
          button.classList.add('incorrect');
          button.disabled = true;

          // Fehlermeldung anzeigen
          feedbackEl.textContent = 'Leider falsch. Versuch es nochmal!';
          feedbackEl.className = 'exercise-feedback incorrect';
          feedbackEl.style.display = 'block';
        }
      });

      optionsContainer.appendChild(button);
    });

    wrapper.appendChild(optionsContainer);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  },

  /**
   * Rendert eine Wahrheitstabellen-Uebung.
   * Eingangsspalten werden automatisch binaer aufsteigend generiert.
   * Ergebniszellen sind klickbar und toggeln ? → 0 → 1 → ?.
   * Beim Pruefen werden Zellen gruen/rot markiert.
   *
   * @param {Object} exercise - { type, question, variables, resultColumns, correctResults }
   * @param {HTMLElement} container - DOM-Element in das gerendert wird
   * @param {Function} onComplete - Callback wenn alle Zellen korrekt
   */
  renderTruthTable(exercise, container, onComplete) {
    // Wrapper-Div fuer die gesamte Wahrheitstabellen-Uebung
    var wrapper = document.createElement('div');
    wrapper.className = 'exercise-truth-table';

    // Frage anzeigen
    var questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.textContent = exercise.question;
    wrapper.appendChild(questionEl);

    // Anzahl Variablen und Zeilen berechnen
    var numVars = exercise.variables.length;
    var numRows = Math.pow(2, numVars); // 2 Variablen = 4 Zeilen, 3 = 8 usw.
    var numResultCols = exercise.resultColumns.length;

    // Eingangswerte binaer aufsteigend generieren
    // z.B. fuer 2 Variablen: [[0,0], [0,1], [1,0], [1,1]]
    var inputRows = [];
    for (var i = 0; i < numRows; i++) {
      var row = [];
      for (var v = numVars - 1; v >= 0; v--) {
        // Bit an Position v extrahieren (von links nach rechts)
        row.push((i >> v) & 1);
      }
      inputRows.push(row);
    }

    // HTML-Tabelle erstellen
    var table = document.createElement('table');
    table.className = 'truth-table';

    // Tabellenkopf (Header)
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');

    // Header fuer Eingangsvariablen
    exercise.variables.forEach(function(varName) {
      var th = document.createElement('th');
      th.textContent = varName;
      headerRow.appendChild(th);
    });

    // Header fuer Ergebnisspalten
    exercise.resultColumns.forEach(function(colName) {
      var th = document.createElement('th');
      th.textContent = colName;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Tabellenkoerper – jede Zeile bekommt feste Eingangswerte + klickbare Ergebniszellen
    var tbody = document.createElement('tbody');

    // Array zum Speichern der aktuellen Benutzerwerte (null = "?", 0, 1)
    var userValues = [];

    for (var r = 0; r < numRows; r++) {
      var tr = document.createElement('tr');
      userValues[r] = [];

      // Eingangsspalten: fest, grau, nicht klickbar
      for (var c = 0; c < numVars; c++) {
        var td = document.createElement('td');
        td.className = 'input-col';
        td.textContent = inputRows[r][c];
        tr.appendChild(td);
      }

      // Ergebnisspalten: klickbar, initial "?"
      for (var rc = 0; rc < numResultCols; rc++) {
        var resultTd = document.createElement('td');
        resultTd.className = 'result-col';
        resultTd.textContent = '?';
        // Zeilen- und Spaltenindex als data-Attribute speichern
        resultTd.setAttribute('data-row', r);
        resultTd.setAttribute('data-col', rc);

        userValues[r][rc] = null; // null bedeutet "?"

        // Klick-Handler: toggled ? → 0 → 1 → ? (zyklisch)
        (function(row, col, cell) {
          cell.addEventListener('click', function() {
            if (userValues[row][col] === null) {
              userValues[row][col] = 0;
              cell.textContent = '0';
            } else if (userValues[row][col] === 0) {
              userValues[row][col] = 1;
              cell.textContent = '1';
            } else {
              userValues[row][col] = null;
              cell.textContent = '?';
            }
            // Vorherige Markierungen entfernen beim erneuten Klicken
            cell.classList.remove('correct', 'incorrect');
          });
        })(r, rc, resultTd);

        tr.appendChild(resultTd);
      }

      tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    wrapper.appendChild(table);

    // Feedback-Bereich (anfangs versteckt)
    var feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    // "Pruefen"-Button
    var checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    checkBtn.addEventListener('click', function() {
      var wrongCount = 0;
      var totalCells = numRows * numResultCols;

      // Alle Ergebniszellen durchgehen und mit correctResults vergleichen
      var resultCells = table.querySelectorAll('.result-col');

      resultCells.forEach(function(cell) {
        var row = parseInt(cell.getAttribute('data-row'));
        var col = parseInt(cell.getAttribute('data-col'));
        var expected = exercise.correctResults[row][col];
        var actual = userValues[row][col];

        // Vorherige Markierungen entfernen
        cell.classList.remove('correct', 'incorrect');

        if (actual === expected) {
          cell.classList.add('correct');
        } else {
          // "?" (null) oder falscher Wert → rot
          cell.classList.add('incorrect');
          wrongCount++;
        }
      });

      if (wrongCount === 0) {
        // Alle richtig – Erfolgsmeldung
        feedbackEl.textContent = 'Alle Zellen korrekt – super!';
        feedbackEl.className = 'exercise-feedback correct';
        feedbackEl.style.display = 'block';
        checkBtn.disabled = true;
        onComplete();
      } else {
        // Hinweis mit Anzahl falscher Zellen
        feedbackEl.textContent = wrongCount + ' von ' + totalCells + ' Zellen sind noch falsch.';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
      }
    });

    wrapper.appendChild(checkBtn);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  },

  /**
   * Rendert eine Ausdrucks-Eingabe-Uebung.
   * Der Benutzer gibt einen logischen Ausdruck ein (z.B. DNF/KNF).
   * Symbol-Buttons fuegen Sonderzeichen an der Cursorposition ein.
   * Geprueft wird semantische Aequivalenz via Parser.areEquivalent().
   *
   * @param {Object} exercise - { type, question, variables, correctExpression, hint }
   * @param {HTMLElement} container - DOM-Element in das gerendert wird
   * @param {Function} onComplete - Callback wenn Ausdruck korrekt
   */
  renderExpressionInput(exercise, container, onComplete) {
    // Wrapper-Div fuer die gesamte Ausdrucks-Eingabe-Uebung
    var wrapper = document.createElement('div');
    wrapper.className = 'exercise-expression';

    // Frage anzeigen
    var questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.textContent = exercise.question;
    wrapper.appendChild(questionEl);

    // Eingabebereich: Textfeld + Symbol-Buttons
    var inputArea = document.createElement('div');
    inputArea.className = 'expression-input-area';

    // Textfeld fuer den logischen Ausdruck
    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'expression-field';
    inputField.placeholder = 'z.B. a∧¬b∨c';
    inputArea.appendChild(inputField);

    // Symbol-Buttons (zum Einfuegen von Sonderzeichen)
    var symbolContainer = document.createElement('div');
    symbolContainer.className = 'symbol-buttons';

    var symbols = ['∧', '∨', '¬', '⊕', '(', ')'];
    symbols.forEach(function(sym) {
      var btn = document.createElement('button');
      btn.className = 'symbol-btn';
      btn.setAttribute('data-symbol', sym);
      btn.textContent = sym;

      // Klick fuegt Symbol an der aktuellen Cursorposition im Textfeld ein
      btn.addEventListener('click', function() {
        var start = inputField.selectionStart;
        var end = inputField.selectionEnd;
        var text = inputField.value;

        // Text vor Cursor + Symbol + Text nach Cursor
        inputField.value = text.substring(0, start) + sym + text.substring(end);

        // Cursor hinter das eingefuegte Symbol setzen
        inputField.selectionStart = start + sym.length;
        inputField.selectionEnd = start + sym.length;
        inputField.focus();
      });

      symbolContainer.appendChild(btn);
    });

    inputArea.appendChild(symbolContainer);
    wrapper.appendChild(inputArea);

    // Feedback-Bereich (anfangs versteckt)
    var feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    // "Pruefen"-Button
    var checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    checkBtn.addEventListener('click', function() {
      var userInput = inputField.value.trim();

      if (!userInput) {
        feedbackEl.textContent = 'Bitte gib einen Ausdruck ein.';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
        return;
      }

      // Schritt 1: Versuche den Ausdruck zu parsen
      try {
        Parser.parse(userInput);
      } catch (e) {
        // Syntaxfehler – Benutzer informieren
        feedbackEl.textContent = 'Der Ausdruck konnte nicht gelesen werden. Überprüfe Klammern und Operatoren.';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
        return;
      }

      // Schritt 2: Semantische Aequivalenz pruefen
      var isEquiv = Parser.areEquivalent(userInput, exercise.correctExpression, exercise.variables);

      if (isEquiv) {
        // Richtig – Erfolgsmeldung
        feedbackEl.textContent = 'Richtig – der Ausdruck ist äquivalent!';
        feedbackEl.className = 'exercise-feedback correct';
        feedbackEl.style.display = 'block';
        checkBtn.disabled = true;
        inputField.disabled = true;
        onComplete();
      } else {
        // Falsch – Hint anzeigen
        feedbackEl.textContent = exercise.hint;
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
      }
    });

    wrapper.appendChild(checkBtn);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  },

  /**
   * Rendert eine Zuordnungs-Uebung.
   * Links stehen feste Items, rechts gemischte Items.
   * Per Klick werden Paare verbunden (gleiche Farbe).
   * Erneuter Klick auf verbundenes Item loest die Verbindung.
   *
   * @param {Object} exercise - { type, question, pairs: [{ left, leftLabel, right }] }
   * @param {HTMLElement} container - DOM-Element in das gerendert wird
   * @param {Function} onComplete - Callback wenn alle Paare korrekt zugeordnet
   */
  renderMatching(exercise, container, onComplete) {
    // Farben fuer die Paar-Verbindungen
    var pairColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

    // Wrapper-Div fuer die gesamte Zuordnungs-Uebung
    var wrapper = document.createElement('div');
    wrapper.className = 'exercise-matching';

    // Frage anzeigen
    var questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.textContent = exercise.question;
    wrapper.appendChild(questionEl);

    // Zuordnungsbereich (Grid: links | rechts)
    var matchingArea = document.createElement('div');
    matchingArea.className = 'matching-area';

    // Linke Spalte: Items in Originalreihenfolge
    var leftCol = document.createElement('div');
    leftCol.className = 'matching-left';

    // Rechte Spalte: Items in zufaelliger Reihenfolge
    var rightCol = document.createElement('div');
    rightCol.className = 'matching-right';

    // Rechte Items mischen (Fisher-Yates Shuffle)
    // Wir brauchen die Original-Indizes, um spaeter pruefen zu koennen
    var rightIndices = [];
    for (var i = 0; i < exercise.pairs.length; i++) {
      rightIndices.push(i);
    }
    for (var j = rightIndices.length - 1; j > 0; j--) {
      var rand = Math.floor(Math.random() * (j + 1));
      var temp = rightIndices[j];
      rightIndices[j] = rightIndices[rand];
      rightIndices[rand] = temp;
    }

    // State: welches linke Item ist gerade ausgewaehlt?
    var selectedLeft = null;

    // State: Verbindungen speichern – connections[leftIndex] = rightOriginalIndex
    var connections = {};
    // Umgekehrt: reverseConnections[rightOriginalIndex] = leftIndex
    var reverseConnections = {};
    // Naechste Farbnummer fuer neue Verbindung
    var nextColorIndex = 0;
    // Farbe pro Verbindung: connectionColors[leftIndex] = Farbe
    var connectionColors = {};

    // DOM-Referenzen speichern
    var leftItems = [];
    var rightItems = {}; // rightItems[originalIndex] = DOM-Element

    // Linke Items erstellen
    exercise.pairs.forEach(function(pair, idx) {
      var item = document.createElement('div');
      item.className = 'match-item match-left';
      item.setAttribute('data-index', idx);
      item.textContent = pair.left;

      item.addEventListener('click', function() {
        // Fall 1: Item ist bereits verbunden → Verbindung loesen
        if (connections[idx] !== undefined) {
          var connectedRight = connections[idx];
          // Farben/Styling zuruecksetzen
          item.classList.remove('matched');
          item.style.backgroundColor = '';
          item.style.borderColor = '';
          item.style.color = '';

          var rightEl = rightItems[connectedRight];
          rightEl.classList.remove('matched');
          rightEl.style.backgroundColor = '';
          rightEl.style.borderColor = '';
          rightEl.style.color = '';

          // Verbindung aus State entfernen
          delete reverseConnections[connectedRight];
          delete connectionColors[idx];
          delete connections[idx];

          // Selection zuruecksetzen
          if (selectedLeft !== null) {
            leftItems[selectedLeft].classList.remove('selected');
          }
          selectedLeft = null;
          return;
        }

        // Fall 2: Bereits ein anderes linkes Item ausgewaehlt → Auswahl wechseln
        if (selectedLeft !== null) {
          leftItems[selectedLeft].classList.remove('selected');
        }

        // Fall 3: Dieses linke Item auswaehlen
        selectedLeft = idx;
        item.classList.add('selected');
      });

      leftItems.push(item);
      leftCol.appendChild(item);
    });

    // Rechte Items erstellen (in gemischter Reihenfolge)
    rightIndices.forEach(function(originalIdx) {
      var pair = exercise.pairs[originalIdx];
      var item = document.createElement('div');
      item.className = 'match-item match-right';
      item.setAttribute('data-index', originalIdx);
      item.textContent = pair.right;

      item.addEventListener('click', function() {
        // Fall 1: Item ist bereits verbunden → Verbindung loesen
        if (reverseConnections[originalIdx] !== undefined) {
          var connectedLeft = reverseConnections[originalIdx];
          // Farben/Styling zuruecksetzen
          item.classList.remove('matched');
          item.style.backgroundColor = '';
          item.style.borderColor = '';
          item.style.color = '';

          var leftEl = leftItems[connectedLeft];
          leftEl.classList.remove('matched');
          leftEl.style.backgroundColor = '';
          leftEl.style.borderColor = '';
          leftEl.style.color = '';

          // Verbindung aus State entfernen
          delete connections[connectedLeft];
          delete connectionColors[connectedLeft];
          delete reverseConnections[originalIdx];

          // Selection zuruecksetzen
          if (selectedLeft !== null) {
            leftItems[selectedLeft].classList.remove('selected');
            selectedLeft = null;
          }
          return;
        }

        // Fall 2: Kein linkes Item ausgewaehlt → ignorieren
        if (selectedLeft === null) {
          return;
        }

        // Fall 3: Verbindung herstellen
        var leftIdx = selectedLeft;
        var color = pairColors[nextColorIndex % pairColors.length];
        nextColorIndex++;

        // Verbindung speichern
        connections[leftIdx] = originalIdx;
        reverseConnections[originalIdx] = leftIdx;
        connectionColors[leftIdx] = color;

        // Linkes Item stylen
        leftItems[leftIdx].classList.remove('selected');
        leftItems[leftIdx].classList.add('matched');
        leftItems[leftIdx].style.backgroundColor = color;
        leftItems[leftIdx].style.borderColor = color;
        leftItems[leftIdx].style.color = 'white';

        // Rechtes Item stylen
        item.classList.add('matched');
        item.style.backgroundColor = color;
        item.style.borderColor = color;
        item.style.color = 'white';

        // Selection zuruecksetzen
        selectedLeft = null;
      });

      rightItems[originalIdx] = item;
      rightCol.appendChild(item);
    });

    matchingArea.appendChild(leftCol);
    matchingArea.appendChild(rightCol);
    wrapper.appendChild(matchingArea);

    // Feedback-Bereich (anfangs versteckt)
    var feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    // "Pruefen"-Button
    var checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    checkBtn.addEventListener('click', function() {
      // Pruefen ob alle Paare zugeordnet sind
      var totalPairs = exercise.pairs.length;
      var connectedCount = Object.keys(connections).length;

      if (connectedCount < totalPairs) {
        feedbackEl.textContent = 'Bitte ordne zuerst alle Begriffe zu.';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
        return;
      }

      // Pruefen ob alle Zuordnungen korrekt sind
      // Korrekt bedeutet: connections[i] === i (links[i] gehoert zu rechts[i])
      var allCorrect = true;
      for (var k = 0; k < totalPairs; k++) {
        if (connections[k] !== k) {
          allCorrect = false;
          break;
        }
      }

      if (allCorrect) {
        feedbackEl.textContent = 'Alle Zuordnungen sind korrekt – super!';
        feedbackEl.className = 'exercise-feedback correct';
        feedbackEl.style.display = 'block';
        checkBtn.disabled = true;
        onComplete();
      } else {
        feedbackEl.textContent = 'Nicht alle Zuordnungen stimmen. Versuch es nochmal!';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
      }
    });

    wrapper.appendChild(checkBtn);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  }
};
