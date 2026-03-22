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
      case 'circuit-exercise':
        return Exercises.renderCircuitExercise(exercise, container, onComplete);
      case 'circuit-matching':
        return Exercises.renderCircuitMatching(exercise, container, onComplete);
      case 'expression-tree-exercise':
        return Exercises.renderExpressionTreeExercise(exercise, container, onComplete);
      case 'binary-decimal':
        return Exercises.renderBinaryDecimal(exercise, container, onComplete);
      case 'subnet-exercise':
        return Exercises.renderSubnetExercise(exercise, container, onComplete);
      case 'network-labeling':
        return Exercises.renderNetworkLabeling(exercise, container, onComplete);
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
   * Rendert eine Binaeradditions-Uebung (schriftliche Addition im Binaersystem).
   * Zeigt zwei Operanden und Eingabefelder fuer Uebertraege und Ergebnis.
   * Tab-Reihenfolge laeuft von rechts nach links (wie beim schriftlichen Rechnen).
   *
   * @param {Object} exercise - { type, question, operand1, operand2, correctResult, correctCarries }
   * @param {HTMLElement} container - DOM-Element in das gerendert wird
   * @param {Function} onComplete - Callback wenn alles korrekt
   */
  renderBinaryCalculation(exercise, container, onComplete) {
    var wrapper = document.createElement('div');
    wrapper.className = 'exercise-binary-calc';

    // Frage anzeigen
    var questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.textContent = exercise.question;
    wrapper.appendChild(questionEl);

    var calc = document.createElement('div');
    calc.className = 'binary-calc';

    var op1 = exercise.operand1;
    var op2 = exercise.operand2;
    var resultLen = exercise.correctResult.length;
    var carryLen = exercise.correctCarries.length;

    // Maximale Breite = Ergebnis-Laenge (laengste Zeile)
    var maxLen = resultLen;

    // Arrays zum Speichern der Input-Referenzen
    var carryInputs = [];
    var resultInputs = [];

    // tabIndex-Zaehler: von rechts nach links, Ergebnis zuerst, dann Uebertraege
    var tabCounter = 1;

    // --- Zeile 1: Uebertraege ---
    var carryRow = document.createElement('div');
    carryRow.className = 'binary-row';

    // Label "Uebertraege:"
    var carryLabel = document.createElement('span');
    carryLabel.className = 'binary-label';
    carryLabel.textContent = 'Überträge:';
    carryRow.appendChild(carryLabel);

    // Leere Zellen links auffuellen (Ergebnis ist laenger als Uebertraege)
    var carryOffset = maxLen - carryLen;
    for (var i = 0; i < carryOffset; i++) {
      var emptyCell = document.createElement('span');
      emptyCell.className = 'binary-cell';
      carryRow.appendChild(emptyCell);
    }

    // Eingabefelder fuer Uebertraege
    for (var ci = 0; ci < carryLen; ci++) {
      var carryInput = document.createElement('input');
      carryInput.type = 'text';
      carryInput.className = 'binary-input';
      carryInput.maxLength = 1;
      carryInput.setAttribute('pattern', '[01]');
      carryInput.setAttribute('inputmode', 'numeric');
      carryInputs.push(carryInput);
      carryRow.appendChild(carryInput);
    }

    calc.appendChild(carryRow);

    // --- Zeile 2: Operand 1 ---
    var op1Row = document.createElement('div');
    op1Row.className = 'binary-row';

    // Leere Zelle fuer Operator-Platz
    var opSpacer = document.createElement('span');
    opSpacer.className = 'binary-cell';
    op1Row.appendChild(opSpacer);

    // Leere Zellen links auffuellen
    var op1Offset = maxLen - op1.length;
    for (var j = 0; j < op1Offset; j++) {
      var empty1 = document.createElement('span');
      empty1.className = 'binary-cell';
      op1Row.appendChild(empty1);
    }

    for (var k = 0; k < op1.length; k++) {
      var cell1 = document.createElement('span');
      cell1.className = 'binary-cell';
      cell1.textContent = op1[k];
      op1Row.appendChild(cell1);
    }

    calc.appendChild(op1Row);

    // --- Zeile 3: Operator + Operand 2 ---
    var op2Row = document.createElement('div');
    op2Row.className = 'binary-row';

    // Plus-Zeichen
    var plusCell = document.createElement('span');
    plusCell.className = 'binary-cell binary-operator';
    plusCell.textContent = '+';
    op2Row.appendChild(plusCell);

    // Leere Zellen links auffuellen
    var op2Offset = maxLen - op2.length;
    for (var m = 0; m < op2Offset; m++) {
      var empty2 = document.createElement('span');
      empty2.className = 'binary-cell';
      op2Row.appendChild(empty2);
    }

    for (var n = 0; n < op2.length; n++) {
      var cell2 = document.createElement('span');
      cell2.className = 'binary-cell';
      cell2.textContent = op2[n];
      op2Row.appendChild(cell2);
    }

    calc.appendChild(op2Row);

    // --- Trennlinie ---
    var divider = document.createElement('div');
    divider.className = 'binary-divider';
    calc.appendChild(divider);

    // --- Zeile 4: Ergebnis ---
    var resultRow = document.createElement('div');
    resultRow.className = 'binary-row';

    // Leere Zelle fuer Operator-Platz
    var resSpacer = document.createElement('span');
    resSpacer.className = 'binary-cell';
    resultRow.appendChild(resSpacer);

    for (var ri = 0; ri < resultLen; ri++) {
      var resInput = document.createElement('input');
      resInput.type = 'text';
      resInput.className = 'binary-input';
      resInput.maxLength = 1;
      resInput.setAttribute('pattern', '[01]');
      resInput.setAttribute('inputmode', 'numeric');
      resultInputs.push(resInput);
      resultRow.appendChild(resInput);
    }

    calc.appendChild(resultRow);

    // Tab-Reihenfolge: Ergebnis von rechts nach links, dann Uebertraege von rechts nach links
    for (var ti = resultInputs.length - 1; ti >= 0; ti--) {
      resultInputs[ti].tabIndex = tabCounter++;
    }
    for (var tci = carryInputs.length - 1; tci >= 0; tci--) {
      carryInputs[tci].tabIndex = tabCounter++;
    }

    wrapper.appendChild(calc);

    // Feedback-Bereich
    var feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    // "Pruefen"-Button
    var checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    checkBtn.addEventListener('click', function() {
      var allCorrect = true;

      // Ergebnis pruefen
      for (var ei = 0; ei < resultLen; ei++) {
        var val = resultInputs[ei].value.trim();
        resultInputs[ei].classList.remove('correct', 'incorrect');

        if (val === String(exercise.correctResult[ei])) {
          resultInputs[ei].classList.add('correct');
        } else {
          resultInputs[ei].classList.add('incorrect');
          allCorrect = false;
        }
      }

      // Uebertraege pruefen
      for (var eci = 0; eci < carryLen; eci++) {
        var cVal = carryInputs[eci].value.trim();
        carryInputs[eci].classList.remove('correct', 'incorrect');

        if (cVal === String(exercise.correctCarries[eci])) {
          carryInputs[eci].classList.add('correct');
        } else {
          carryInputs[eci].classList.add('incorrect');
          allCorrect = false;
        }
      }

      if (allCorrect) {
        feedbackEl.textContent = 'Alles richtig – gut gemacht!';
        feedbackEl.className = 'exercise-feedback correct';
        feedbackEl.style.display = 'block';
        checkBtn.disabled = true;
        onComplete();
      } else {
        feedbackEl.textContent = 'Einige Felder sind noch falsch. Überprüfe deine Eingaben.';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
      }
    });

    wrapper.appendChild(checkBtn);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  },

  /**
   * Rendert eine Zustandstabellen-Uebung (aehnlich Wahrheitstabelle).
   * Eingangsspalten kommen aus exercise.inputs (nicht automatisch generiert).
   * Ausgangsspalten sind klickbar und toggeln ? → 0 → 1 → ?.
   *
   * @param {Object} exercise - { type, question, inputColumns, outputColumns, inputs, correctOutputs }
   * @param {HTMLElement} container - DOM-Element in das gerendert wird
   * @param {Function} onComplete - Callback wenn alle Zellen korrekt
   */
  renderStateTable(exercise, container, onComplete) {
    var wrapper = document.createElement('div');
    wrapper.className = 'exercise-state-table';

    // Frage anzeigen
    var questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.textContent = exercise.question;
    wrapper.appendChild(questionEl);

    var numRows = exercise.inputs.length;
    var numInputCols = exercise.inputColumns.length;
    var numOutputCols = exercise.outputColumns.length;

    // HTML-Tabelle erstellen (gleiche CSS-Klasse wie Wahrheitstabelle)
    var table = document.createElement('table');
    table.className = 'truth-table';

    // Tabellenkopf
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');

    // Header fuer Eingangsspalten
    exercise.inputColumns.forEach(function(colName) {
      var th = document.createElement('th');
      th.textContent = colName;
      headerRow.appendChild(th);
    });

    // Header fuer Ausgangsspalten
    exercise.outputColumns.forEach(function(colName) {
      var th = document.createElement('th');
      th.textContent = colName;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Tabellenkoerper
    var tbody = document.createElement('tbody');

    // Array zum Speichern der aktuellen Benutzerwerte (null = "?", 0, 1)
    var userValues = [];

    for (var r = 0; r < numRows; r++) {
      var tr = document.createElement('tr');
      userValues[r] = [];

      // Eingangsspalten: fest, grau, nicht klickbar
      for (var c = 0; c < numInputCols; c++) {
        var td = document.createElement('td');
        td.className = 'input-col';
        td.textContent = exercise.inputs[r][c];
        tr.appendChild(td);
      }

      // Ausgangsspalten: klickbar, initial "?"
      for (var oc = 0; oc < numOutputCols; oc++) {
        var resultTd = document.createElement('td');
        resultTd.className = 'result-col';
        resultTd.textContent = '?';
        resultTd.setAttribute('data-row', r);
        resultTd.setAttribute('data-col', oc);

        userValues[r][oc] = null;

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
        })(r, oc, resultTd);

        tr.appendChild(resultTd);
      }

      tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    wrapper.appendChild(table);

    // Feedback-Bereich
    var feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    // "Pruefen"-Button
    var checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    checkBtn.addEventListener('click', function() {
      var wrongCount = 0;
      var totalCells = numRows * numOutputCols;

      var resultCells = table.querySelectorAll('.result-col');

      resultCells.forEach(function(cell) {
        var row = parseInt(cell.getAttribute('data-row'));
        var col = parseInt(cell.getAttribute('data-col'));
        var expected = exercise.correctOutputs[row][col];
        var actual = userValues[row][col];

        cell.classList.remove('correct', 'incorrect');

        if (actual === expected) {
          cell.classList.add('correct');
        } else {
          cell.classList.add('incorrect');
          wrongCount++;
        }
      });

      if (wrongCount === 0) {
        feedbackEl.textContent = 'Alle Zellen korrekt – super!';
        feedbackEl.className = 'exercise-feedback correct';
        feedbackEl.style.display = 'block';
        checkBtn.disabled = true;
        onComplete();
      } else {
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

/**
 * Rendert eine Schaltungs-Uebung: Eingaenge setzen, um gewuenschten Ausgang zu erreichen.
 *
 * @param {Object} exercise - { type, question, circuit, targetOutputs, explanation }
 */
Exercises.renderCircuitExercise = function(exercise, container, onComplete) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-circuit';

  const questionEl = document.createElement('p');
  questionEl.className = 'exercise-question';
  questionEl.textContent = exercise.question;
  wrapper.appendChild(questionEl);

  // Schaltung rendern
  const circuitDiv = document.createElement('div');
  const circuitInstance = Visuals.renderCircuit(
    { circuit: exercise.circuit, interactive: true },
    circuitDiv,
    { onUpdate: checkAnswer }
  );
  wrapper.appendChild(circuitDiv);

  // Check-Button
  const checkBtn = document.createElement('button');
  checkBtn.className = 'exercise-check-btn';
  checkBtn.textContent = 'Prüfen';
  wrapper.appendChild(checkBtn);

  const feedbackEl = document.createElement('div');
  feedbackEl.className = 'exercise-feedback';
  feedbackEl.style.display = 'none';
  wrapper.appendChild(feedbackEl);

  container.appendChild(wrapper);

  let solved = false;

  checkBtn.addEventListener('click', () => {
    const outputs = circuitInstance.getOutputs();
    const correct = Object.keys(exercise.targetOutputs).every(
      key => outputs[key] === exercise.targetOutputs[key]
    );

    if (correct && !solved) {
      solved = true;
      feedbackEl.className = 'exercise-feedback correct';
      feedbackEl.innerHTML = exercise.explanation
        ? `Richtig! ${exercise.explanation}`
        : 'Richtig – gut gemacht!';
      feedbackEl.style.display = 'block';
      checkBtn.disabled = true;
      onComplete();
    } else if (!correct) {
      feedbackEl.className = 'exercise-feedback incorrect';
      feedbackEl.textContent = 'Noch nicht richtig – versuche andere Eingangswerte.';
      feedbackEl.style.display = 'block';
    }
  });

  function checkAnswer(outputs) {
    // Auto-Check bei jedem Toggle (optionales sofortiges Feedback)
  }
};

/**
 * Rendert eine Schaltungs-Zuordnung: Schaltbild ↔ Ausdruck zuordnen.
 *
 * @param {Object} exercise - { type, question, pairs: [{ circuit, expression }] }
 */
Exercises.renderCircuitMatching = function(exercise, container, onComplete) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-circuit-matching';

  const questionEl = document.createElement('p');
  questionEl.className = 'exercise-question';
  questionEl.textContent = exercise.question;
  wrapper.appendChild(questionEl);

  const matchArea = document.createElement('div');
  matchArea.className = 'matching-area';

  // Linke Spalte: Gatter-Symbole
  const leftCol = document.createElement('div');
  // Rechte Spalte: Ausdrücke (gemischt)
  const rightCol = document.createElement('div');

  const shuffled = [...exercise.pairs].sort(() => Math.random() - 0.5);
  const matchColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

  let selectedLeft = null;
  let selectedRight = null;
  let matchCount = 0;
  const matches = new Map(); // leftIndex → rightIndex

  // Linke Items: Mini-Gatter
  exercise.pairs.forEach((pair, idx) => {
    const item = document.createElement('div');
    item.className = 'match-item';
    item.dataset.matchIndex = idx;
    item.dataset.side = 'left';
    item.dataset.circuit = pair.circuit;

    // Mini-Gatter-SVG
    const gateSvg = Renderer.renderGate(pair.circuit, 60, 40);
    item.appendChild(gateSvg);
    leftCol.appendChild(item);
  });

  // Rechte Items: Ausdrücke
  shuffled.forEach((pair, idx) => {
    const item = document.createElement('div');
    item.className = 'match-item';
    item.dataset.side = 'right';
    item.dataset.expression = pair.expression;
    item.dataset.circuit = pair.circuit;
    item.textContent = pair.expression;
    item.style.fontFamily = "'Courier New', monospace";
    item.style.fontSize = '1.1rem';
    rightCol.appendChild(item);
  });

  matchArea.appendChild(leftCol);
  matchArea.appendChild(rightCol);
  wrapper.appendChild(matchArea);

  const feedbackEl = document.createElement('div');
  feedbackEl.className = 'exercise-feedback';
  feedbackEl.style.display = 'none';
  wrapper.appendChild(feedbackEl);

  container.appendChild(wrapper);

  // Matching-Logik
  matchArea.addEventListener('click', (e) => {
    const item = e.target.closest('.match-item');
    if (!item || item.classList.contains('matched')) return;

    if (item.dataset.side === 'left') {
      if (selectedLeft) selectedLeft.classList.remove('selected');
      selectedLeft = item;
      item.classList.add('selected');
    } else {
      if (selectedRight) selectedRight.classList.remove('selected');
      selectedRight = item;
      item.classList.add('selected');
    }

    // Wenn beide ausgewaehlt: pruefen
    if (selectedLeft && selectedRight) {
      const leftCircuit = selectedLeft.dataset.circuit;
      const rightCircuit = selectedRight.dataset.circuit;

      if (leftCircuit === rightCircuit) {
        // Match!
        const color = matchColors[matchCount % matchColors.length];
        selectedLeft.classList.add('matched');
        selectedLeft.classList.remove('selected');
        selectedLeft.style.background = color;
        selectedLeft.style.borderColor = color;

        selectedRight.classList.add('matched');
        selectedRight.classList.remove('selected');
        selectedRight.style.background = color;
        selectedRight.style.borderColor = color;
        selectedRight.style.color = 'white';

        matchCount++;
        selectedLeft = null;
        selectedRight = null;

        if (matchCount === exercise.pairs.length) {
          feedbackEl.className = 'exercise-feedback correct';
          feedbackEl.textContent = 'Alle Zuordnungen richtig – super!';
          feedbackEl.style.display = 'block';
          onComplete();
        }
      } else {
        // Kein Match
        selectedLeft.classList.remove('selected');
        selectedRight.classList.remove('selected');
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.textContent = 'Diese Zuordnung passt nicht. Versuch es nochmal.';
        feedbackEl.style.display = 'block';
        selectedLeft = null;
        selectedRight = null;
      }
    }
  });
};

/**
 * Rendert eine Ausdrucksbaum-Uebung: fehlende Operatoren einsetzen.
 *
 * @param {Object} exercise - { type, question, expression, hiddenNodes, explanation }
 */
Exercises.renderExpressionTreeExercise = function(exercise, container, onComplete) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-expression-tree';

  const questionEl = document.createElement('p');
  questionEl.className = 'exercise-question';
  questionEl.textContent = exercise.question;
  wrapper.appendChild(questionEl);

  // Baum anzeigen MIT versteckten Knoten (als "?" dargestellt)
  Visuals.renderExpressionTree({
    expression: exercise.expression,
    hiddenNodes: exercise.hiddenNodes
  }, wrapper);

  // Dropdown-Auswahl fuer versteckte Operatoren
  const formDiv = document.createElement('div');
  formDiv.style.cssText = 'margin:1rem 0;';

  const operatorOptions = ['∧', '∨', '¬', '⊕', '⊼', '⊽', '⊙'];
  const selects = [];

  exercise.hiddenNodes.forEach((nodeType, idx) => {
    const label = document.createElement('label');
    label.style.cssText = 'margin-right:1rem;font-size:0.95rem;';
    label.textContent = `Operator ${idx + 1}: `;

    const select = document.createElement('select');
    select.style.cssText = 'padding:4px 8px;font-size:1rem;font-family:monospace;';
    const defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = '?';
    select.appendChild(defaultOpt);

    operatorOptions.forEach(op => {
      const opt = document.createElement('option');
      opt.value = op;
      opt.textContent = op;
      select.appendChild(opt);
    });

    selects.push({ select, correctOp: nodeType });
    label.appendChild(select);
    formDiv.appendChild(label);
  });

  wrapper.appendChild(formDiv);

  // Check-Button
  const checkBtn = document.createElement('button');
  checkBtn.className = 'exercise-check-btn';
  checkBtn.textContent = 'Prüfen';
  wrapper.appendChild(checkBtn);

  const feedbackEl = document.createElement('div');
  feedbackEl.className = 'exercise-feedback';
  feedbackEl.style.display = 'none';
  wrapper.appendChild(feedbackEl);

  container.appendChild(wrapper);

  // Mapping: nodeType → korrekte Operatoren
  const correctOps = {
    'and': '∧', 'or': '∨', 'not': '¬',
    'xor': '⊕', 'nand': '⊼', 'nor': '⊽', 'xnor': '⊙'
  };

  checkBtn.addEventListener('click', () => {
    const allCorrect = selects.every(s => {
      const expected = correctOps[s.correctOp] || s.correctOp;
      return s.select.value === expected;
    });

    if (allCorrect) {
      feedbackEl.className = 'exercise-feedback correct';
      feedbackEl.innerHTML = exercise.explanation
        ? `Richtig! ${exercise.explanation}`
        : 'Richtig – gut gemacht!';
      feedbackEl.style.display = 'block';
      checkBtn.disabled = true;
      selects.forEach(s => s.select.disabled = true);
      onComplete();
    } else {
      feedbackEl.className = 'exercise-feedback incorrect';
      feedbackEl.textContent = 'Nicht ganz richtig – überprüfe die Operatorrangfolge.';
      feedbackEl.style.display = 'block';
    }
  });
};

/**
 * Oktett-Trainer: Binär ↔ Dezimal Umrechnung in mehreren Runden.
 * Bei dec2bin: 8 Bits erforderlich (z.B. '00000000'), bei bin2dec: numerischer Vergleich.
 *
 * @param {Object} exercise - { type, question, rounds: [{ given, direction, answer }] }
 * @param {HTMLElement} container
 * @param {Function} onComplete
 */
Exercises.renderBinaryDecimal = function(exercise, container, onComplete) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-block binary-decimal-exercise';

  const title = document.createElement('h3');
  title.textContent = exercise.question;
  wrapper.appendChild(title);

  const rounds = exercise.rounds;
  let currentRound = 0;
  let completed = false;

  const roundDisplay = document.createElement('div');
  roundDisplay.className = 'round-display';
  wrapper.appendChild(roundDisplay);

  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = 'exercise-feedback';
  wrapper.appendChild(feedbackDiv);

  container.appendChild(wrapper);

  function showRound() {
    if (currentRound >= rounds.length) {
      // Alle Runden geschafft
      roundDisplay.innerHTML = '<p style="color:var(--success);font-weight:bold;">Alle Runden bestanden!</p>';
      if (!completed) {
        completed = true;
        if (onComplete) onComplete();
      }
      return;
    }

    const round = rounds[currentRound];
    feedbackDiv.innerHTML = '';

    const counter = document.createElement('div');
    counter.className = 'round-counter';
    counter.textContent = `Runde ${currentRound + 1} von ${rounds.length}`;

    const dirHint = document.createElement('div');
    dirHint.className = 'direction-hint';
    dirHint.textContent = round.direction === 'bin2dec'
      ? 'Binär → Dezimal: Gib den Dezimalwert ein.'
      : 'Dezimal → Binär: Gib 8 Bits ein (z.B. 11001010).';

    const givenDiv = document.createElement('div');
    givenDiv.className = 'given-value';
    givenDiv.textContent = round.given;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = round.direction === 'bin2dec' ? 'Dezimalwert' : '8 Bits (z.B. 01010101)';
    if (round.direction === 'dec2bin') {
      input.maxLength = 8;
      input.pattern = '[01]{8}';
    }

    const checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    roundDisplay.innerHTML = '';
    roundDisplay.appendChild(counter);
    roundDisplay.appendChild(dirHint);
    roundDisplay.appendChild(givenDiv);
    roundDisplay.appendChild(input);
    roundDisplay.appendChild(checkBtn);

    checkBtn.addEventListener('click', () => {
      const userValue = input.value.trim();
      let correct = false;

      if (round.direction === 'bin2dec') {
        correct = parseInt(userValue, 10) === round.answer;
      } else {
        // dec2bin: exakter 8-Bit-String-Vergleich
        correct = userValue === round.answer;
      }

      feedbackDiv.innerHTML = '';
      if (correct) {
        feedbackDiv.innerHTML = '<p class="feedback correct">Richtig!</p>';
        currentRound++;
        setTimeout(showRound, 800);
      } else {
        let hint = `<p class="feedback wrong">Falsch.`;
        if (round.direction === 'dec2bin' && userValue.length !== 8) {
          hint += ' Bitte genau 8 Bits eingeben.';
        }
        hint += `</p>`;
        feedbackDiv.innerHTML = hint;
      }
    });

    // Enter-Taste
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') checkBtn.click();
    });

    input.focus();
  }

  showRound();
};

/**
 * Subnetz-Berechnung: IP + CIDR gegeben, Felder berechnen.
 *
 * @param {Object} exercise - { type, question, ip, cidr, fields, answers, explanation }
 * @param {HTMLElement} container
 * @param {Function} onComplete
 */
Exercises.renderSubnetExercise = function(exercise, container, onComplete) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-block subnet-exercise';

  const title = document.createElement('h3');
  title.textContent = exercise.question;
  wrapper.appendChild(title);

  const info = document.createElement('p');
  info.innerHTML = `<strong>IP:</strong> <code>${exercise.ip}</code> &nbsp; <strong>CIDR:</strong> <code>/${exercise.cidr}</code>`;
  wrapper.appendChild(info);

  const FIELD_LABELS = {
    netId: 'Net-ID',
    broadcast: 'Broadcast',
    firstHost: 'Erster Host',
    lastHost: 'Letzter Host',
    hostCount: 'Anzahl Hosts'
  };

  const inputs = {};
  const feedbackEls = {};

  exercise.fields.forEach(field => {
    const row = document.createElement('div');
    row.className = 'field-row';

    const label = document.createElement('label');
    label.textContent = FIELD_LABELS[field] || field;
    row.appendChild(label);

    const inp = document.createElement('input');
    inp.type = 'text';
    inp.placeholder = field === 'hostCount' ? 'Zahl' : 'z.B. 192.168.1.0';
    inputs[field] = inp;
    row.appendChild(inp);

    const fb = document.createElement('span');
    fb.className = 'field-feedback';
    feedbackEls[field] = fb;
    row.appendChild(fb);

    wrapper.appendChild(row);
  });

  const checkBtn = document.createElement('button');
  checkBtn.className = 'exercise-check-btn';
  checkBtn.textContent = 'Prüfen';
  wrapper.appendChild(checkBtn);

  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = 'exercise-feedback';
  wrapper.appendChild(feedbackDiv);

  container.appendChild(wrapper);

  let completed = false;

  checkBtn.addEventListener('click', () => {
    let allCorrect = true;

    exercise.fields.forEach(field => {
      const userVal = inputs[field].value.trim();
      const expected = String(exercise.answers[field]);
      const correct = userVal === expected;

      feedbackEls[field].textContent = correct ? '✓' : '✗';
      feedbackEls[field].className = 'field-feedback ' + (correct ? 'correct' : 'wrong');

      if (!correct) allCorrect = false;
    });

    feedbackDiv.innerHTML = '';
    if (allCorrect) {
      feedbackDiv.innerHTML = '<p class="feedback correct">Alle Felder richtig!</p>';
      if (exercise.explanation) {
        feedbackDiv.innerHTML += `<p class="feedback-explanation">${exercise.explanation}</p>`;
      }
      if (!completed) {
        completed = true;
        if (onComplete) onComplete();
      }
    } else {
      feedbackDiv.innerHTML = '<p class="feedback wrong">Nicht alle Felder sind korrekt. Versuche es nochmal.</p>';
    }
  });
};

/**
 * Netzwerk-Beschriftungs-Übung: Geräte im Diagramm per Klick zuordnen.
 * Verwendet NetworkDiagram-Preset, Labels sind leer und werden per Dropdown zugewiesen.
 *
 * @param {Object} exercise - { type, question, preset, labels: { nodeId: 'Label' }, explanation }
 * @param {HTMLElement} container
 * @param {Function} onComplete
 */
Exercises.renderNetworkLabeling = function(exercise, container, onComplete) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-block network-labeling';

  const title = document.createElement('h3');
  title.textContent = exercise.question;
  wrapper.appendChild(title);

  // Preset laden
  const preset = Visuals.NETWORK_PRESETS[exercise.preset];
  if (!preset) {
    wrapper.innerHTML += '<p>Preset nicht gefunden.</p>';
    container.appendChild(wrapper);
    return;
  }

  // Diagramm-Container (relative Positionierung fuer Dropdown)
  const diagramDiv = document.createElement('div');
  diagramDiv.style.position = 'relative';
  diagramDiv.style.display = 'inline-block';

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${preset.width} ${preset.height}`);
  svg.setAttribute('width', '100%');

  // Lookup
  const nodeMap = {};
  preset.nodes.forEach(n => { nodeMap[n.id] = n; });

  // State: zugewiesene Labels
  const assignments = {};
  const labelPool = Object.values(exercise.labels);
  const targetNodeIds = Object.keys(exercise.labels);

  // Verbindungen
  preset.edges.forEach(([fromId, toId]) => {
    const from = nodeMap[fromId];
    const to = nodeMap[toId];
    if (!from || !to) return;
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', from.x); line.setAttribute('y1', from.y);
    line.setAttribute('x2', to.x); line.setAttribute('y2', to.y);
    line.setAttribute('class', 'connection-line');
    svg.appendChild(line);
  });

  // Icons und klickbare Label-Slots
  const slotElements = {};

  preset.nodes.forEach(node => {
    const iconFn = Visuals.NETWORK_ICONS[node.type];
    if (iconFn) {
      const g = document.createElementNS(svgNS, 'g');
      g.innerHTML = iconFn(node.x, node.y);
      svg.appendChild(g);
    }

    // Ist dieser Node ein Ziel-Node?
    if (targetNodeIds.includes(node.id)) {
      // Klickbarer Label-Slot unter dem Icon
      const rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('x', node.x - 35);
      rect.setAttribute('y', node.y + 18);
      rect.setAttribute('width', 70);
      rect.setAttribute('height', 20);
      rect.setAttribute('class', 'label-slot');
      rect.dataset.nodeId = node.id;

      const text = document.createElementNS(svgNS, 'text');
      text.setAttribute('x', node.x);
      text.setAttribute('y', node.y + 32);
      text.setAttribute('class', 'label-text');
      text.textContent = '?';

      slotElements[node.id] = { rect, text };

      // Klick-Handler
      rect.addEventListener('click', (e) => {
        e.stopPropagation();
        showDropdown(node.id, node.x, node.y + 40);
      });
      text.addEventListener('click', (e) => {
        e.stopPropagation();
        showDropdown(node.id, node.x, node.y + 40);
      });

      svg.appendChild(rect);
      svg.appendChild(text);
    } else {
      // Nicht-Ziel-Nodes: normales Label
      if (node.label) {
        const text = document.createElementNS(svgNS, 'text');
        text.setAttribute('x', node.x);
        text.setAttribute('y', node.y + 28);
        text.setAttribute('class', 'device-label');
        text.textContent = node.label;
        svg.appendChild(text);
      }
    }
  });

  diagramDiv.appendChild(svg);
  wrapper.appendChild(diagramDiv);

  // Dropdown
  let activeDropdown = null;

  function showDropdown(nodeId, svgX, svgY) {
    closeDropdown();

    const dd = document.createElement('div');
    dd.className = 'label-dropdown';

    // Verfügbare Labels (noch nicht zugewiesen oder diesem Node zugewiesen)
    const available = labelPool.filter(l =>
      !Object.values(assignments).includes(l) || assignments[nodeId] === l
    );

    // Leere Option (zurücksetzen)
    const emptyOpt = document.createElement('div');
    emptyOpt.textContent = '– auswählen –';
    emptyOpt.addEventListener('click', () => {
      delete assignments[nodeId];
      updateSlot(nodeId);
      closeDropdown();
    });
    dd.appendChild(emptyOpt);

    available.forEach(label => {
      const opt = document.createElement('div');
      opt.textContent = label;
      opt.addEventListener('click', () => {
        assignments[nodeId] = label;
        updateSlot(nodeId);
        closeDropdown();
      });
      dd.appendChild(opt);
    });

    // Positionierung relativ zum SVG
    const svgRect = svg.getBoundingClientRect();
    const scaleX = svgRect.width / preset.width;
    const scaleY = svgRect.height / preset.height;

    dd.style.left = (svgX * scaleX - 40) + 'px';
    dd.style.top = (svgY * scaleY) + 'px';

    diagramDiv.appendChild(dd);
    activeDropdown = dd;
  }

  function closeDropdown() {
    if (activeDropdown) {
      activeDropdown.remove();
      activeDropdown = null;
    }
  }

  function updateSlot(nodeId) {
    const el = slotElements[nodeId];
    if (!el) return;
    if (assignments[nodeId]) {
      el.text.textContent = assignments[nodeId];
      el.rect.classList.add('assigned');
      el.text.classList.add('assigned');
    } else {
      el.text.textContent = '?';
      el.rect.classList.remove('assigned');
      el.text.classList.remove('assigned');
    }
  }

  // Klick außerhalb schließt Dropdown
  document.addEventListener('click', closeDropdown);

  // Prüfen-Button
  const checkBtn = document.createElement('button');
  checkBtn.className = 'exercise-check-btn';
  checkBtn.textContent = 'Prüfen';
  wrapper.appendChild(checkBtn);

  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = 'exercise-feedback';
  wrapper.appendChild(feedbackDiv);

  container.appendChild(wrapper);

  let completed = false;

  checkBtn.addEventListener('click', () => {
    let allCorrect = true;
    targetNodeIds.forEach(nodeId => {
      const correct = assignments[nodeId] === exercise.labels[nodeId];
      const el = slotElements[nodeId];
      if (correct) {
        el.rect.style.fill = 'var(--success)';
        el.rect.style.stroke = 'var(--success)';
      } else {
        el.rect.style.fill = 'var(--error)';
        el.rect.style.stroke = 'var(--error)';
        allCorrect = false;
      }
    });

    feedbackDiv.innerHTML = '';
    if (allCorrect) {
      feedbackDiv.innerHTML = '<p class="feedback correct">Alle richtig zugeordnet!</p>';
      if (exercise.explanation) {
        feedbackDiv.innerHTML += `<p class="feedback-explanation">${exercise.explanation}</p>`;
      }
      if (!completed) {
        completed = true;
        if (onComplete) onComplete();
      }
    } else {
      feedbackDiv.innerHTML = '<p class="feedback wrong">Noch nicht alle richtig. Klicke auf die roten Felder und weise neu zu.</p>';
      // Falsche Zuweisungen nach kurzer Zeit zuruecksetzen (nur Farbe)
      setTimeout(() => {
        targetNodeIds.forEach(nodeId => {
          const el = slotElements[nodeId];
          if (assignments[nodeId] !== exercise.labels[nodeId]) {
            el.rect.style.fill = '';
            el.rect.style.stroke = '';
          }
        });
      }, 1500);
    }
  });
};
