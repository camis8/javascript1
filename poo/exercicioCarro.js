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
    acelerar () {
        console.log(`Carro ${this.ano} acelerado`)
    }

    desligar() {
        console.log(`Carro ${this.ano} desligado`)
    }
    

}
// Herança
class Aviao extends Carro {
    constructor(ano, cor, motor) {
        super(ano, cor) // herança
        this.motor = motor

}


criarAviao() {
    const aviao1 = new Aviao ("Boeing 747", "Eletric GEnx 66.500Hp")
    console.log("-_")
    console.log("/")
    console.log(`Aviao de ${this.ano}`)
    console.log(`cor ${this.cor}`)
}
voar() {
    console.log("._._._.")
    if (this.voar === true) {
        console.log("O avião está voando")
    }
}
Aterrizar() {
    console.log("o aviao está aterrizando")
}
}



// instalando 
const carro1 = new Carro("Impala 1967", "preto")
carro1.criarCarro()

const carro2 = new Carro ("Maverick 1970", "azul")
carro2.criarCarro()

const aviao1 = new Aviao("Boeing 747", "Eletric GEnx 66.500Hp")
    aviao1.criarAviao()