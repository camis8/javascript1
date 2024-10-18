/**
 * APP Etanol x Gasolina
 * @author Professor José de Assis
 */

const input = require('readline-sync')

let etanol, Gasolina

console.clear()
console.log("Etanol x Gasolina")

// entrada
etanol = Number(input.question("Digite o valor do Etanol: "))
gasolina = Number(input.question("Digite o valor da Gasolina: "))

// processamento e saída
if (etanol < 0.7 * gasolina) {
    console.log("Abastecer com etanol")
} else {
    console.log("Abastecer com gasolina")
}