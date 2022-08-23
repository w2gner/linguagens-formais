let gramatica1 = "aSb|ab"

// console.log(getDerivacao(cadeia1));
console.log(getDerivacao(gramatica1.split('|')));


// function getDerivacao(cadeia) {
//     let producoes = cadeia.split('|');
//     let derivacoes = [];
//     let selecao = producoes[0]
//     let index = 0;
//     while (producoes.size > 0) {
//         selecao.forEach(char => {
//             if (char != char.toUpperCase()) {
//                 derivacoes.push(char);
//                 // terminal
//             } else {

//                 // não terminal
//             }
//         });
//     }
//     return derivacoes;
// }

function getDerivacao(gramatica) {
    let pilha = [gramatica[0]];
    let saida = [];
    while (pilha.length > 0) {
        let cadeia = pilha.shift();
        cadeia = cadeia.split('')
        cadeia.forEach(char => {
            saida.push(char);
            if (char != char.toUpperCase()) {
                // terminal
                // saida.push(char);
            } else {
                // não terminal
                gramatica.forEach(cadeia => {
                    if (cadeia.includes(char)) {
                        pilha.push(cadeia);
                    }
                });
            }
        });

        let random = Math.random(0, gramatica.length - 1)
        pilha.push(gramatica[random])
    }
    return saida;
}
