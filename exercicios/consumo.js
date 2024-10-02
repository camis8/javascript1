/**
 * calculo do consumo de combustivel
 * @author Camila
 */

const input = require ('readline-sync')

//variaveis
let distancia, litros, consumo

console.clear()
console.log("calculo do consumo de combustivel")

//entrada
distancia = Number(input.question("Distancia percorrida: "))
litros = Number(input.question("Quantidade de litros de combustivel: "))

// processamento
consumo = distancia / litros
 // saida
 console.log(`Consumo do veiculo: ${consumo.toFixed(1)} km/1`)
 