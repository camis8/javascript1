/**
 * exercicio POO
 * @author Camila
 */

console.clear()

class Carro {
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }
    criarCarro() {
        const carro1 = new Carro("Impala 1967", "preto")
        const carro2 = new Carro("Maverick 1970, azul", 2)
        console.log("Voce criou um carro com:")
        console.log(`Carro ${this.ano}`)
        console.log(`Cor: ${this.cor}`)
    }
    ligar() {
        console.log("Ligar Carro: ")
        console.log(`Carro  ${this.ano} ligado`)
    }
    acelerar() {
        console.log(`Carro ${this.ano} acelerado`)
    }

    desligar() {
        console.log(`Carro ${this.ano} desligado`)
    }


}
// Herança
class Aviao extends Carro {
    constructor(ano, cor, motor) {
        super(ano, cor)
        this.motor = motor


    }


    criarAviao() {
        console.log("Você criou um avião com:")
        console.log(`Aviao de ${this.ano}`)
        console.log(`cor: ${this.cor}`)
        console.log(`motor: ${this.motor}`)
    }

    //polimorfismo
    acelerar() {
        console.log("O avião está voando")
    }
    aterrizar() {
        console.log("o aviao está aterrizando")
    }
}



// instalando 
const carro1 = new Carro("Impala 1967", "preto")
carro1.criarCarro()
carro1.ligar()
carro1.acelerar()
carro1.desligar()

const carro2 = new Carro("Maverick 1970", "azul")
carro2.criarCarro()
carro2.ligar()
carro2.acelerar()
carro2.desligar()


const aviao1 = new Aviao(1970, "azul", "Eletric GEnx 66.500Hp")
aviao1.criarAviao()
aviao1.acelerar()
aviao1.aterrizar()