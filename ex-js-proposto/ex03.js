var j1 = prompt('j1 digite um valor: ');
var j2 = prompt('j2 digite um valor: ');

if (j1 === j2) {
    alert(`Ambos escolheram o numero ${j1} e empataram`);
} else {
    alert(`Escolherem numeros diferentes j1 ${j1} e j2 ${j2}`);
};

var random = Math.floor(Math.random() * 2);
alert(`numero sorteado ${random}`);

if (random === 0 && j1 < j2) {
   alert('Jogador um escolheu o MENOR numero e ganhou');
};
if (random === 0 && j2 < j1) {
    alert('Jogador dois escolher o MENOR numero e ganhou');
};
if (random === 1 && j1 > j2) {
    alert('Jogador um escolheu o MAIOR numero e ganhou');
};
if (random === 1 && j2 > j1) {
    alert('Jogador dois escolher o MAIOR numero e ganhou');
};