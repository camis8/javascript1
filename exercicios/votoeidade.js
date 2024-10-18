/**
 * exercicio 18
 * @author Camila
 */

// importação de biblioteca(pacote)
const input = require ('readline-sync')

console.clear()
console.log("Programa para verificar idade e voto")

// variaveis
let idade 
console.clear()
console.log("Programa para verificar idade e voto")

//entrada de dados
idade = Number(input.question("Digite a sua idade?"))

//processamento  e saida
if (idade <16) {
     console.log("proibido votar")
} else if (idade>17 && idade < 71) {
    console.log("Voto obrigatório")
} else {
    console.log("Voto facultativo")
}





