/**
 * Exemplo de uso do metodo para gerar números aleatorios e uso da estrutura do While
 * Jogo do dado
 * @author Camila
 */

const input = require(`readline-sync`)

let face, opcao
do {
    console.clear()

console.log("jogo do dado")
input.question("Pressione a tecla [Enter] para jogar o dado")

// Sorteio da face de um dado
// math classe matematica
// floor() conversão para números inteiros
// random() * (gerador de números aleatorios)

face = Math.floor(Math.random() * 6 + 1) // 0 1 2 3 4 5
console.log(`Face do dado: ${face}`)

    opcao = input.question("Deseja jogar novamente(s/n)")
} while (opcao === 's');

