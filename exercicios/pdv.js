/**
 * PDV
 * @author Camila
 */

const input = require('readline-sync')

let total, desconto, totalDesconto, valorDesconto, valorPago, troco

//variaveis

console.clear()


      
console.log(" _ __   __| |_   __")
console.log("| '_ \\ / _` \\ \\ / /")
console.log("| |_) | (_| |\\ V / ")
console.log("| .__/ \\__,_| \\_/  ")
console.log("|_|                ")
console.log("")

// entrada 1
total = Number(input.question("Digite o valor total da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

// processamento
valorDesconto = (desconto * total) / 100

// processamento 2
totalDesconto = total - valorDesconto

// saida 1
console.log("")
console.log("--------------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)

// entrada 2
valorPago = Number(input.question("valor em dinheiro pago pelo cliente:"))

// processamento 3
troco = valorPago - totalDesconto

// saida

console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`)
console.log(`troco: R$ ${troco.toFixed(2)}`)
console.log("----------------------------------")


