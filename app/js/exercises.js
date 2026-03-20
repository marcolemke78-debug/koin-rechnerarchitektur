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
  }
};
