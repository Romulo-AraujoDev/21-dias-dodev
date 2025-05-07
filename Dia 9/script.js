//Criando variaveis
let nome = (prompt("Digite seu nome:"))
let idade = parseInt(prompt("Digite sua idade:"))
let peso = prompt("Digite seu peso em Kg")
let altura = prompt("Digite sua altura em metros")
let profissao = prompt("Digite sua profissão")

console.log("Olá "+ nome + ", você tem " + idade + " anos, é "
    + profissao + ", tem " + altura + "m de altura e pesa " + peso + "Kg"
)

//Verificando a idade
if(idade >= 18){
    console.log("Está liberado para tomar umas geladas")
} else(
    console.log("Sem gelada para você")
)

//Descobrindo a idade fracionada

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log("Sua idade em meses é: " + meses)
console.log("Sua idade em semanas é: " + semanas)
console.log("Sua idade em dias é: " + dias)

//Calculando o IMC do usuario e informado a faixa dele.

let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log("Magreza")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("Que bom que você está com o peso normal!")
}else if(imc >= 25 && imc <= 30){
    console.log("Sobrepeso")
}else {
    console.log("Obesidade")
}

//Descobrindo o ano de nascimento

let anoAtual = 2025
let anoNascimento = anoAtual - idade
console.log("Você nasceu no ano de " + anoNascimento)

//Exibindo anos e idades

let anoVivido = anoNascimento
let idadeAtual = 0

for(let anoVivido = anoNascimento; anoVivido <= anoAtual; anoVivido++){
    console.log(anoVivido + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}


//Loop do while
let continuar;
do {
   continuar = prompt("Deseja continuar o programa? (s/n)");
} while (continuar != "s");


//Criando variaveis/loop


let confirmar = "n";
let nome2, idade2, salarioAtual;

while (confirmar != "s") {
    nome2 = prompt("Digite seu nome"); // apenas atribuição, sem let
    idade2 = parseInt(prompt("Digite sua idade"));
    salarioAtual = parseFloat(prompt("Digite seu salario atual"));

    console.log("nome: " + nome + ", idade: " + idade + ", salario atual: " + salarioAtual);
    confirmar = prompt("As informações estão corretas ? (s/n)");
}

//Fazendo a previsão do salario

let aumento = 0.015
console.log("Previsão salarial para os proximos 10 anos:")

//Fazendo aumento salarial

for(let ano = 1; ano<=10 ; ano++){
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log((2025 + ano) + " = R$ " + salarioAtual)
}