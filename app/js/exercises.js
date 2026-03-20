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
  }
};
