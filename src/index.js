function getDerivacao() {
    let gramatica = document.getElementById('gramatica').textContent
    let pilha = gramatica.split('|');
    let cadeia = pilha[0];
    let saida = [];

    while (pilha.length > 0) {
        pilha.shift()
        cadeia = cadeia.split('')
        cadeia.forEach(char => {
            if (char != char.toUpperCase()) {
                // terminal
                saida.push(char);
            } else {
                // não terminal
                let random = getRandomInt(0, pilha.length);
                pilha.push(gramatica[random])
            }
        });
    }
    document.getElementById('resultado').value = saida
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
