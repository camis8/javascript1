/**
 * Calcular o troco de uma compra
 * @author Professor José de Assis
 */

const input = require('readline-sync')

let total, valorPago, troco

console.clear()
console.log("Calcular o troco de uma compra")

//entrada
total = Number(input.question("Qual o valor da compra? "))
valorPago = Number(input.question("Qual o valor pago? "))

//processamento
troco = valorPago - total

//saida
console.log(`Valor do troco: R$ ${troco.toFixed(2)}`)





