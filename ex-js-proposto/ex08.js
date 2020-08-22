var numero = prompt('Digite um numero: ');
numero = parseFloat(numero)
resultado();

function resultado() {
    var result = document.querySelector('.result');
    result.innerHTML = numero;
}

function somar() {
    var n = prompt('Digite um numero para fazer a soma: ');
    n = parseFloat(n);

    numero += n;

    resultado();
};

function subtracao() {
    var n = prompt('Digite um numero para fazer a soma: ');
    n = parseFloat(n);

    numero -= n;

    resultado();
};

function multiplicacao() {
    var n = prompt('Digite um numero para fazer a soma: ');
    n = parseFloat(n);

    numero *= n;

    resultado();
};

function divisao() {
    var n = prompt('Digite um numero para fazer a soma: ');
    n = parseFloat(n);

    numero /= n;

    resultado();
};