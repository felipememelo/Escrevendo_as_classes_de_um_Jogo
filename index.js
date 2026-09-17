class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let mago = new Heroi("Marvin", 100, "mago");
let guerreiro = new Heroi("Chronos", 35, "guerreiro");
let monge = new Heroi("Dalsin", 25, "monge");
let ninja = new Heroi("Sasuke", 18, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
