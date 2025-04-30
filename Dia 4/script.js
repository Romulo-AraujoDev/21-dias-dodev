//Caso 1 resolução

let fome = prompt("Voce está com fome? (sim/nao)")
let dinheiro = prompt("Voce tem dinheiro? (sim/nao)")
let horario = prompt("O restaurante está aberto? (sim/nao)")

if(fome === "nao" || dinheiro === "nao"){
    console.log("Hoje a janta sera em casa")
}else if(dinheiro === "sim" && horario === "sim"){
    console.log("Hoje o jantar sera no seu restaurante preferido!!")
} else {
    console.log("Peça um delivery")
}




//Caso 2 Resolução
//Declarando Variaveis
let nome 
let idade 
let temCarta = false
let temCarro = false

//Pedindo Informações ao usuario
nome = (prompt("Digite seu nome"))
idade = parseInt(prompt("Digite sua idade"))
let opcaoCarta = prompt("Você tem carta de motorista? (s/n)")
if(opcaoCarta == "s"){
    temCarta = true
}
let opcaoCarro = prompt("Voce tem carro? (s/n)")
if(opcaoCarro == "s"){
    temCarro = true
}

//Exibindo mensagem no console
if(idade < 18 || !temCarta){
    console.log(nome + ", voce nao pode dirigir")
}else if(idade >= 18 && temCarta && !temCarro){
    console.log(nome + ", você pode dirigir mas não tem um carro!")
}else{
    console.log(nome + ", voce sera o motorista!")
}