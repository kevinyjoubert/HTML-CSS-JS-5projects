var n2 = prompt('Digite um numero: ');
n2 = parseFloat(n2);
resultado(n2);

function resultado(mensagem) {
    var result = document.querySelector('.result');
    result.innerHTML = mensagem;
};

function iniciarCalculo(param) {
    var n1 = document.querySelector('.result').textContent;

    var n2 = prompt('Digite outro numero: ');
    n2 = parseFloat(n2);

    var msg = calcular(param, n1, n2);
    resultado(msg);
};

function calcular(param, n1, n2) {

    var numeroCalculado = null;
    
    switch(param) {
        case '+':
            numeroCalculado = n1 + n2;
            break;

        case '-':
            numeroCalculado = n1 - n2;
            break;

        case '*':
            numeroCalculado = n1 * n2;
            break;

        case '/':
            numeroCalculado = n1 / n2;
            break;
    };

    return numeroCalculado;
};