/**
 * Calculadora
 * @author Camila
 */

const input = require('readline-sync')
let resposta

console.clear()

let numero1, numero2, operacao, novoCalculo
do {
// entrada
numero1 = Number(input.question("Digite o primeiro numero: "))
numero2 = Number(input.question("Digite o segundo numero: "))

    console.log("")
    console.log("1. Somar")
    console.log("2. Subtrair")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Calcular a %")
    operacao = Number(input.question("Digite a opcao desejada: "))


switch (operacao) {
    case 1:
        Somar()
        break

    case 2:
      Subtrair()

    case 3:
        Multiplicar()
        break

    case 4:
        Dividir()
        break
    case 5:
        porcentagem()
        break
        default: 
        console.log("opcao invalida")
        break
}

 resposta = input.question("quer calcular novamente? (s/n)")
} while (resposta !== "n");
function Somar() {
    console.log(`a soma dos numeros : ${numero1 + numero2}`)
}
function Subtrair() {
    console.log(`a subtracao dos numeros : ${numero1 - numero2}`)
}
function Multiplicar() {
    console.log(`a multiplicação dos numeros : ${numero1 * numero2}`)

}
function Dividir() {
    console.log(`a divisao dos numeros : ${numero1 / numero2}`)
}

function porcentagem() {
    console.log(`${numero1}% de ${numero2} ´igual a: ${(numero1 * numero2) / 100}`)

}



