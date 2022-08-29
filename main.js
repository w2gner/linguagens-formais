let gramatica1 = "aSb|ab"
let derivacao = getDerivacao(gramatica1.split('|'));

console.log(derivacao);

function getDerivacao(gramatica) {
    let pilha = [gramatica[0]];
    let saida = [];
    let cadeia = pilha.split('');
    while (pilha.length > 0) {
        // let cadeia = cadeias.shift();
        // cadeia = cadeia.split('')
        cadeia.forEach(char => {
            saida.push(char);
            if (char != char.toUpperCase()) {
                // terminal
                saida.push(char);
            } else {
                // não terminal
                gramatica.forEach(cadeia => {
                    if (cadeia.includes(char)) {
                        // pilha.push(cadeia);
                    }
                });
            }
        });

        let random = getRandomInt(0, gramatica.length - 1);
        pilha.push(gramatica[random])
    }
    return saida;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
