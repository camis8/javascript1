/**
 * exercicio para casa
 * @author Camila
 */

const input = require ('readline-sync')

console.clear()
console.log("programa para calcular o desconto do preço")

//entrada
let preço, desconto, final

preço = Number(input.question("qual o preco do seu carrinho? "))
desconto = Number(input.question("quanto de desconto voce tera? "))

//processamento
final = (preço * desconto) / 100
final = preço - final

//saida
console.log(`o preço final do seu carrinho sera de ${final.toFixed(1)}R$`)
