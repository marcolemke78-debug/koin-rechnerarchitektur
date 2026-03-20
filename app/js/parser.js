const Parser = {};

/**
 * Tokenizer: Wandelt einen booleschen Ausdruck-String in ein Array von Token-Objekten.
 * Erkennt Variablen (a-z), Operatoren (∧∨⊕⊼⊽⊙), Negation (¬) und Klammern.
 * Leerzeichen werden ignoriert.
 */
Parser.tokenize = function (expression) {
    const tokens = [];
    // Alle Operator-Symbole die wir erkennen
    const operators = new Set(['∧', '∨', '⊕', '⊼', '⊽', '⊙']);

    for (let i = 0; i < expression.length; i++) {
        const ch = expression[i];

        // Leerzeichen ueberspringen
        if (ch === ' ' || ch === '\t' || ch === '\n') {
            continue;
        }

        // Variablen: einzelne Kleinbuchstaben a-z
        if (ch >= 'a' && ch <= 'z') {
            tokens.push({ type: 'var', value: ch });
        }
        // Negation (unaerer Operator)
        else if (ch === '¬') {
            tokens.push({ type: 'not', value: '¬' });
        }
        // Binaere Operatoren
        else if (operators.has(ch)) {
            tokens.push({ type: 'op', value: ch });
        }
        // Klammern
        else if (ch === '(') {
            tokens.push({ type: 'lparen' });
        } else if (ch === ')') {
            tokens.push({ type: 'rparen' });
        }
        // Unbekanntes Zeichen
        else {
            throw new Error(`Unbekanntes Zeichen: '${ch}' an Position ${i}`);
        }
    }

    return tokens;
};

/**
 * Recursive-Descent-Parser: Wandelt einen Ausdruck-String in einen AST (Abstract Syntax Tree).
 *
 * Grammatik (Operatorrangfolge von schwach nach stark):
 *   expr     → orExpr
 *   orExpr   → andExpr (('∨' | '⊕' | '⊽' | '⊙') andExpr)*
 *   andExpr  → notExpr (('∧' | '⊼') notExpr)*
 *   notExpr  → '¬' notExpr | atom
 *   atom     → variable | '(' expr ')'
 *
 * NOT bindet am staerksten, dann AND/NAND, dann OR/XOR/NOR/XNOR.
 */
Parser.parse = function (expression) {
    const tokens = Parser.tokenize(expression);
    let pos = 0; // Aktuelle Position im Token-Array

    // Hilfsfunktion: aktuelles Token lesen (ohne vorzuruecken)
    function peek() {
        return pos < tokens.length ? tokens[pos] : null;
    }

    // Hilfsfunktion: aktuelles Token konsumieren und Position vorschieben
    function consume() {
        return tokens[pos++];
    }

    // OR-Ebene: schwächste Bindung (∨, ⊕, ⊽, ⊙)
    // Verarbeitet Ketten wie: a ∨ b ⊕ c → linksassoziativ
    function parseOrExpr() {
        let left = parseAndExpr();
        const orOps = new Set(['∨', '⊕', '⊽', '⊙']);

        while (peek() && peek().type === 'op' && orOps.has(peek().value)) {
            const opToken = consume();
            const right = parseAndExpr();
            left = { op: opToken.value, left: left, right: right };
        }

        return left;
    }

    // AND-Ebene: staerkere Bindung als OR (∧, ⊼)
    function parseAndExpr() {
        let left = parseNotExpr();
        const andOps = new Set(['∧', '⊼']);

        while (peek() && peek().type === 'op' && andOps.has(peek().value)) {
            const opToken = consume();
            const right = parseNotExpr();
            left = { op: opToken.value, left: left, right: right };
        }

        return left;
    }

    // NOT-Ebene: staerkste Bindung (¬)
    // Rekursiv, da ¬¬a erlaubt ist
    function parseNotExpr() {
        if (peek() && peek().type === 'not') {
            consume(); // '¬' verbrauchen
            const operand = parseNotExpr(); // Rekursion fuer ¬¬a
            return { op: '¬', operand: operand };
        }
        return parseAtom();
    }

    // Atom: Variable oder geklammerter Ausdruck
    function parseAtom() {
        const token = peek();

        if (!token) {
            throw new Error('Unerwartetes Ende des Ausdrucks – es fehlt ein Wert oder eine Klammer.');
        }

        // Variable (a-z)
        if (token.type === 'var') {
            consume();
            return { variable: token.value };
        }

        // Geklammerter Ausdruck: ( expr )
        if (token.type === 'lparen') {
            consume(); // '(' verbrauchen
            const inner = parseOrExpr(); // Innerhalb der Klammer wieder bei niedrigster Prioritaet starten

            const closing = peek();
            if (!closing || closing.type !== 'rparen') {
                throw new Error('Schließende Klammer ) fehlt.');
            }
            consume(); // ')' verbrauchen
            return inner;
        }

        throw new Error(`Unerwartetes Token: ${JSON.stringify(token)}`);
    }

    // Parsing starten
    const ast = parseOrExpr();

    // Pruefen, ob alle Token verbraucht wurden
    if (pos < tokens.length) {
        throw new Error(`Unerwartetes Token nach dem Ausdruck: ${JSON.stringify(tokens[pos])}`);
    }

    return ast;
};

/**
 * Evaluiert einen AST mit einer gegebenen Variablenbelegung.
 * assignment ist ein Objekt wie { a: 0, b: 1, c: 0 }.
 * Gibt 0 oder 1 zurueck.
 */
Parser.evaluate = function (ast, assignment) {
    // Blattknoten: Variable
    if (ast.variable !== undefined) {
        const val = assignment[ast.variable];
        if (val === undefined) {
            throw new Error(`Variable '${ast.variable}' hat keine Belegung.`);
        }
        return val ? 1 : 0;
    }

    // Unaerer Operator: NOT
    if (ast.op === '¬') {
        return Parser.evaluate(ast.operand, assignment) === 1 ? 0 : 1;
    }

    // Binaere Operatoren
    const left = Parser.evaluate(ast.left, assignment);
    const right = Parser.evaluate(ast.right, assignment);

    switch (ast.op) {
        case '∧': return (left & right) ? 1 : 0;           // AND
        case '∨': return (left | right) ? 1 : 0;           // OR
        case '⊕': return (left !== right) ? 1 : 0;         // XOR
        case '⊼': return (left & right) ? 0 : 1;           // NAND
        case '⊽': return (left | right) ? 0 : 1;           // NOR
        case '⊙': return (left === right) ? 1 : 0;         // XNOR
        default:
            throw new Error(`Unbekannter Operator: '${ast.op}'`);
    }
};

/**
 * Extrahiert alle Variablen aus einem AST und gibt sie sortiert zurueck.
 * Beispiel: AST von "b ∧ a" → ['a', 'b']
 */
Parser.extractVariables = function (ast) {
    const vars = new Set();

    function collect(node) {
        if (node.variable !== undefined) {
            vars.add(node.variable);
            return;
        }
        // NOT hat nur operand
        if (node.operand) {
            collect(node.operand);
        }
        // Binaere Operatoren haben left und right
        if (node.left) collect(node.left);
        if (node.right) collect(node.right);
    }

    collect(ast);
    return Array.from(vars).sort();
};

/**
 * Generiert die vollstaendige Wahrheitstabelle fuer einen Ausdruck.
 * Gibt zurueck: { variables: ['a','b'], results: [0, 0, 0, 1] }
 *
 * Die Belegungen werden in aufsteigender binaerer Reihenfolge durchlaufen:
 * Fuer ['a','b']: (0,0), (0,1), (1,0), (1,1)
 */
Parser.generateTruthTable = function (expression) {
    const ast = Parser.parse(expression);
    const variables = Parser.extractVariables(ast);
    const n = variables.length;
    const totalRows = 1 << n; // 2^n Belegungen
    const results = [];

    for (let i = 0; i < totalRows; i++) {
        // Belegung aus der Zeilennummer ableiten
        // Bit-Reihenfolge: erstes Variable = hoechstwertiges Bit
        const assignment = {};
        for (let v = 0; v < n; v++) {
            // Bit fuer Variable v: von links nach rechts (MSB = erste Variable)
            assignment[variables[v]] = (i >> (n - 1 - v)) & 1;
        }
        results.push(Parser.evaluate(ast, assignment));
    }

    return { variables: variables, results: results };
};

/**
 * Prueft ob zwei boolesche Ausdruecke logisch aequivalent sind.
 * Vergleicht die Ergebnisse fuer alle moeglichen Variablenbelegungen.
 *
 * Wenn variables nicht angegeben: Variablen aus beiden Ausdruecken extrahieren und vereinigen.
 * Gibt true zurueck, wenn fuer ALLE Belegungen dasselbe Ergebnis rauskommt.
 */
Parser.areEquivalent = function (expr1, expr2, variables) {
    const ast1 = Parser.parse(expr1);
    const ast2 = Parser.parse(expr2);

    // Variablen bestimmen: entweder uebergeben oder aus beiden ASTs zusammensammeln
    if (!variables) {
        const vars1 = Parser.extractVariables(ast1);
        const vars2 = Parser.extractVariables(ast2);
        const varSet = new Set([...vars1, ...vars2]);
        variables = Array.from(varSet).sort();
    }

    const n = variables.length;
    const totalRows = 1 << n;

    for (let i = 0; i < totalRows; i++) {
        const assignment = {};
        for (let v = 0; v < n; v++) {
            assignment[variables[v]] = (i >> (n - 1 - v)) & 1;
        }

        const result1 = Parser.evaluate(ast1, assignment);
        const result2 = Parser.evaluate(ast2, assignment);

        if (result1 !== result2) {
            return false;
        }
    }

    return true;
};
