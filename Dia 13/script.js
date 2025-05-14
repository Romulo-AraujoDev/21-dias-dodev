//Estudando Objeto e aplicando em array

class Aluno{
    nome
    idade
    areaAtuacao
    constructor(nome, idade){   
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log("Olá, meu nome é: " + this.nome + " minha idade: " + this.idade + " e minha area de atuação é: " + this.areaAtuacao)
    }
}

console.log(" ====== Cadastro de alunos ======")
let alunos = [];
let continuar = true;
let indexDeAluno = 0;

while(continuar){
    let nome = prompt("Digite o nome do aluno")
    let idade = Number(prompt("Digite a idade do aluno"))
    let aluno = new Aluno(nome, idade)

    let areaAtuacao = prompt("Digite a area de atuação do aluno")
    aluno.areaAtuacao = areaAtuacao;

    alunos[indexDeAluno] = aluno
    let desejaContinuar = prompt("Insira 1 caso deseja cadastrar um novo aluno")
    if(desejaContinuar != "1")
    {
        continuar = false;
    }else {
        indexDeAluno++
    }    
}

//Exemplo 01 atividade
class Computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd
    constructor(tipo,processador,video,armazenamento,memoriaRam,ssd){
        this.Tipo = tipo
        this.Processador = processador
        this.Video = video
        this.Armazenamento = armazenamento
        this.MemoriaRam = memoriaRam
        this.Ssd = ssd
    }

    ExibirInformacoes() {
    console.log("Inforamções do Computador:");
    console.log(`Tipo: ${this.Tipo}`)
    console.log(`Processador: ${this.Processador}`)
    console.log(`Video: ${this.Video}`)
    console.log(`Armazenamento: ${this.Armazenamento} GB`)
    console.log(`Mermoria RAM: ${this.MemoriaRam} GB`)
    console.log(`SSD: ${this.Ssd}`)
  }
}

//Exemplo de uso
const meuComputador = new Computador("notebook", "ryzen 7", "Dedicado", 1000, 16, true);
meuComputador.ExibirInformacoes();

//Exemplo 02 Atividade

class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.Nome = nome;
        this.Potencia = potencia;
        this.VelocidadeMaxima = velocidadeMaxima;
        this.Aceleracao = aceleracao;
    }

    CalcularTempoMedio(distancia){
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

class Corrida{
    Nome
    Tipo
    Distancia
    Vencedor
    Participantes

    constructor(nome, tipo, distancia){
        this.Nome = nome;
        this.Tipo = tipo;
        this.Distancia = distancia;
        this.Vencedor = ""
        this.Participantes = []
    }

    DefinirVencedor(){
        let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)
        let vencedor = this.Participantes[0]

        for (let index = 1; index < this.Participantes.length; index++){
            let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia)
            if (tempo < menorTempo) { 
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }

        return this.Vencedor = vencedor
    }

    ExibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.nome)
    }
}

let corrida = new Corrida("Monza", "Formula 1", 60000)

corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.Participantes[1] = new Carro("Marea", 210, 200, 9)
corrida.Participantes[2] = new Carro("Peugeot 206", 300, 220, 10)

corrida.DefinirVencedor()
corrida.ExibirVencedor()