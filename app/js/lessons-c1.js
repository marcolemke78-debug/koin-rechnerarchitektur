const LessonsC1 = [
  {
    id: 1,
    title: 'Was ist Rechnerarchitektur?',
    explanation: {
      html: '<p>Jeder Computer kennt nur zwei Zustände: <strong>0</strong> oder <strong>1</strong>. Stell dir das wie einen Lichtschalter vor – entweder an oder aus.</p><p>In dieser Lerneinheit schauen wir uns an, wie man mit diesen zwei Zuständen rechnen und komplexe Schaltungen bauen kann.</p><p>Es gibt drei Darstellungsformen, die wir kennenlernen werden:</p><ul><li><strong>Wahrheitstabellen</strong> – zeigen alle möglichen Kombinationen</li><li><strong>Logische Ausdrücke</strong> – mathematische Formeln</li><li><strong>Gatterschaltungen</strong> – Schaltpläne für Hardware</li></ul>'
    },
    example: {
      title: 'Beispiel: Ein einfacher Schaltkreis',
      steps: [
        { label: 'Der Schaltkreis', html: '<p>Stell dir einen Stromkreis vor mit einer Batterie, einem Schalter und einer Lampe.</p>' },
        { label: 'Schalter offen (S=0)', html: '<p>Wenn der Schalter offen ist, fliesst kein Strom. Die Lampe ist aus (L=0).</p>' },
        { label: 'Schalter geschlossen (S=1)', html: '<p>Wenn der Schalter geschlossen ist, fliesst Strom. Die Lampe leuchtet (L=1).</p>' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie viele Zustände kennt ein Computer?',
        options: ['1', '2', '3', '10'],
        correct: 1,
        explanation: 'Ein Computer kennt genau zwei Zustände: 0 und 1 (Strom aus/an).'
      }
    ]
  }
];
