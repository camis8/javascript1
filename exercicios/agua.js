/**
 * cálculo do consumo de água
 * @author Camila
 */

const input = require ('readline-sync')

// variaveis
let consumo, peso

// limpar a tela antes de uma nov aentrada 
console.clear()

// entrada
peso = Number(input.question("Digite o seu peso: (em kg )"))

// PROCESSAMENTO 
consumo = peso * 0.035 // (35 ml de agua por cada kg)

// saida
console.log(`consumo diário de agua deve ser: ${consumo.toFixed(3)} litros`) // toFixed nodeara eixar limitado a 3 caracteres de ml



                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
