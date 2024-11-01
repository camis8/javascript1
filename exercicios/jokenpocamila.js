/**
 * @author Camila
 * 
 */

// biblioteca
const input = require(`readline-sync`)
console.clear()
console.log("jogo do jokenpo")

// variáveis
let jogador, computador, opcao
    console.log("jogador escolheu: Pedra, Papel ou Tesoura?")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
// lógica do computador
jogador = Number(input.question("Digite a opcao desejada: "))
console.log("")
switch (jogador) {
    case 1:
        console.log("Jogador escolheu: PEDRA")
        break
    case 2:
        console.log("Jogador escolheu: PAPEL")
        break
    case 3:
        console.log("Jogador escolheu: TESOURA")
        break
    default:
        console.log("Opção inválida")
        break
}

// Lógica do computador
computador = Math.floor(Math.random() * 3 )

switch (computador) {
    case 1:
        console.log("Computador escolheu: PEDRA")
        break
    case 2:
        console.log("Computador escolheu: PAPEL")
        break
    case 3:
        console.log("Computador escolheu: TESOURA")
        break 
}

// Lógica para determinar o vencedor ou declara empate
if (jogador === computador) {
    console.log("EMPATE")
} else if (jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2) {
    console.log("Jogador VENCEU")
} else {
    console.log("Computador VENCEU")
}
