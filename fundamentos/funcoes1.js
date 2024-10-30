/**
 * Estudo das funções simples
 * @author Camila Menezes
 */

hello() // função literal
function hello() {

    console.log ("Hello function")
}
console.log(typeof(hello))

// função atribuida
// funções atribuidas precisam ser criadas no inicio do código (antes da chamada da função)
const hello2 = function() {
    console.log("Hello2 function")
}
hello2()
console.log(typeof(hello2))

// Arrow function (forma simplificada de criar uma função atribuida)

const hello3 = () => {
    console.log("Hello3 function")
}
hello3()
console.log(typeof(hello3))
// Arrow function masi simplificada  (neste caso só é possível executar uma linha de código elimina parenteses e chaves)
const hello4 =  _ => console.log("Hello4 function")
hello4()
console.log(typeof(hello4))