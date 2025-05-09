//Desafio do dia 11 / AVALIAÇÃO DA TURMA

//Atribuindo um array que vai receber nomes e notas.

let alunos = []
let notas = []
let continuar = true;
let contador = 0;

//Criando LOOP
while(continuar){
    let nome = prompt("Digite o nome do " + (contador + 1) + "º aluno")
    let nota = parseInt(prompt("Digite a nota do aluno"))
    alunos[contador] = nome
    notas[contador] = nota
    contador++
    let resposta = prompt("Deseja inserir informações sobre outro aluno? (s/n)")
    if (resposta == 'n')
        continuar = false;
}

//Exibindo infomrmaões;
console.log("Notas dos alunos: ")
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i] + " - " + notas[i])
}

let somaNotas = 0
for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}

let media = somaNotas / alunos.length
console.log("A soma das notas foi: " + somaNotas)
console.log("A media geral da turma foi: " + media)

//Concessionaria desafio
//Criando variaveis 
let modelos = []
let anos = []
let valores = []
let continuar1 = true
let contador2 = 0

//Criando Loop
while(continuar1){
    let modelo = prompt("Digite o modelo do carro")
    modelos[contador2] = modelo
    let ano = prompt("Digite o ano do carro")
    anos[contador2] = ano
    let valor = parseFloat(prompt("Digite o valor do carro"))
    valores[contador2] = valor
    contador2++

    let resposta = prompt("Deseja inserir outro carro? (s/n)")
    if (resposta == "n")
        continuar1 = false
}

//Exibindo informações
console.log("Carros Cadastrados")
for (let i = 0; i <modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}

//Ordenar por preço

for (let i = 0; i < valores.length - 1; i++){
    for (let j = 0; j < valores.length - i - 1; j++){
        if (valores[j] > valores[j + 1]){

            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos [j + 1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos [j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        }
    }
}

console.log("Carros ordenados pelo preço")
for( let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}
