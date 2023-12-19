let vidaDoMonstro = 100
let danoDoAtaque = 20

function calculoDeDano() {
  vidaDoMonstro = vidaDoMonstro - danoDoAtaque
}

class criandoHeroi {
  constructor(nomeDoHeroi, idadeDoHeroi, classeDoHeroi) {
    this.nomeDoHeroi = nomeDoHeroi
    this.idadeDoHeroi = idadeDoHeroi
    this.classeDoHeroi = classeDoHeroi
  }
  atacar(){
    this.tipoDoAtaque = " "
    if(this.classeDoHeroi === "mago"){
      this.tipoDoAtaque = "com magia"
    } else if (this.classeDoHeroi === "guerreiro") {
      this.tipoDoAtaque = "com espada"
    } else if (this.classeDoHeroi === "monge") {
      this.tipoDoAtaque = "com artes marciais"
    } else if (this.classeDoHeroi === "ninja") {
      this.tipoDoAtaque = "com shuriken"
    }
    this.escrever()
  }
  escrever(){
    console.log(`O ${this.classeDoHeroi} atacou ${this.tipoDoAtaque} e totalizou ${danoDoAtaque} de dano no monstro.`)
  }
}

let heroi = new criandoHeroi("Duffie", "26", "ninja")

while (danoDoAtaque < vidaDoMonstro) {
  heroi.atacar()
  danoDoAtaque = danoDoAtaque + 20
  if (danoDoAtaque === 100) {
    console.log("O herói atacou mais uma vez e derrotou o monstro.")
  }
}



