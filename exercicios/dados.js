/**
 * Exemplo de uso do metodo para gerar números aleatorios
 * Jogo do dado
 * @author Camila
 */

const input = require(`readline-sync`)

let face

console.clear()

console.log("jogo do dado")
input.question("Pressione a tecla [Enter] para jogar o dado")

// Sorteio da face de um dado
// math classe matematica
// floor() conversão para números inteiros
// random() * (gerador de números aleatorios)

face = Math.floor(Math.random() * 6 + 1) // 0 1 2 3 4 5
console.log(`Face do dado: ${face}`)
