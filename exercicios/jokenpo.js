/**
 * @author Camila
 * 
 */

// biblioteca
const input = require(`readline-sync`)
console.clear()
console.log("jogo do jokenpo")

// variáveis
let jogador, computador
console.log("jogador escolheu: Pedra, Papel ou Tesoura?")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
Resposta = Number(input.question(""))
// lógica do computador
computador = Math.floor(Math.random() * 3 +1)

switch (jogador) {
case 1:
    console.log("o jogador escolheu pedra")
    break
case 2:
    console.log("o jogador escolheu papel")
    break
case 3:
    console.log("o jogador escolheu tesoura")
    break
default:
    console.log("o jogador nao escolheu nenhuma opcao")
    break
}
switch (computador) {
case 1:
    console.log("O computador escolheu Pedra")
    break
case 2:
    console.log("O computador escplheu papel")
    break
}