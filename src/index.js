function getDerivacao() {
    let gramatica = document.getElementById('gramatica').textContent
    let producao = gramatica.split('|');
    let cadeia = producao[0];
    let saida = [];

    while (producao.length > 0) {
        cadeia = producao.shift()
        cadeia = cadeia.split('')
        cadeia.forEach(char => {
            if (char != char.toUpperCase()) {
                // terminal
                saida.push(char);
            } else {
                // não terminal
                let random = getRandomInt(0, producao.length);
                cadeia.push(producao[random])
            }
        });
    }
    document.getElementById('resultado').value = saida.join('')
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
