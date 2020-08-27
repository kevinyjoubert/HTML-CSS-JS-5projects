function mostrarAreaAlert() {
    var largura = prompt('Digite a largura: ');
    var altura = prompt('Digite a altura: ');

    largura = parseFloat(largura);
    altura = parseFloat(altura);

    var area = calcularArea(largura, altura);

    alert(`A área total é: ${area}`);
};

function mostrarAreaOutput() {
    var largura = prompt('Digite a largura: ');
    var altura = prompt('Digite a altura: ');

    largura = parseFloat(largura);
    altura = parseFloat(altura);
    
    var area = calcularArea(largura, altura);

    document.querySelector('.output').innerHTML = `A área total é ${area}`;
};

function calcularArea(largura, altura) {
    return largura * altura;
};