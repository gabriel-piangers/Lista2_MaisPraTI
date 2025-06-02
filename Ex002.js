// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();

const rng = Math.floor(Math.random()*100 + 1);
let tries = 0;
let guessing = true;
while (guessing) {
    const guess = Number.parseInt(prompt('Adivinhe um número: '));
    if (!guess) console.log('Por favor selecione um número inteiro de 1 a 100!')
    else if (guess === rng) guessing = false;
    else if(guess > rng) console.log("Mais baixo");
    else console.log('Mais alto');
    tries++;
}

console.log(`Parabens! Você acertou em ${tries} tentativas.`);
console.log(`O número era: ${rng}`);