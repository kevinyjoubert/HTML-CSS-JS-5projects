var output = document.querySelector('#output');
var mensagem = ''

function MostrarTabuada() {
    var n = prompt('digite um numero: ');
    n = parseInt(n);

    var i = 1;
    

    while (i <= 1000) {
        mensagem += `${n} x ${i} = ${n*i}<br>`;
        i++;
    };

    output.innerHTML = mensagem;
};

function limparTabuada() {
    mensagem = '';
    output.innerHTML = mensagem;
};