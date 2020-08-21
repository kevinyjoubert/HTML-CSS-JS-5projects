var ano = 1000;

while (ano <= 2020) {
    if (ano % 4 == 0 || ano % 400 == 0 || !(ano % 100 == 0)) {
        document.write(`O ano ${ano} é bissexto<br>`);
    };

    ano += 1;
};

document.write('todos os anos bisextos até 2020');