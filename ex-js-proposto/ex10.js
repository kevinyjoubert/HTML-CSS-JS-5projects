var numero = prompt('Digite um numero: ');
numero = parseFloat(numero)
resultado();

function resultado() {
    var result = document.querySelector('.result');
    result.innerHTML = numero;
};

function calcular(param) {
    var n = prompt('Digite outro numero: ');
    n = parseFloat(n);
    
    switch(param) {
        case '+':
            numero += n;
            break;

        case '-':
            numero -= n;
            break;

        case '*':
            numero *= n;
            break;

        case '/':
            numero /= n;
            break;
    };

    resultado();
};