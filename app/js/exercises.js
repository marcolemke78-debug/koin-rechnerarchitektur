const Exercises = {
  /**
   * Rendert eine einzelne Uebung in den Container.
   * Erstmal nur ein Platzhalter – wird spaeter je nach exercise.type
   * (multiple-choice, lueckentext, etc.) unterschiedliche UIs bauen.
   *
   * @param {Object} exercise - Uebungsobjekt mit type, question, etc.
   * @param {HTMLElement} container - DOM-Element in das gerendert wird
   * @param {Function} onComplete - Callback wenn Uebung bestanden
   */
  render(exercise, container, onComplete) {
    const div = document.createElement('div');
    div.textContent = 'Übung wird geladen... (Typ: ' + exercise.type + ')';
    container.appendChild(div);
  }
};
