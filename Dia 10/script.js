//praticando arrays

let nomes = []
let continuar = true;
let posicaoDoArray = 0;

while(continuar === true){
    let nomeInserido = prompt("Insira um nome")
    nomes[posicaoDoArray] = nomeInserido

    let desejaContinuar = prompt("Insira 1 caso deseja adicionar um novo nome")
    if(desejaContinuar != '1'){
        continuar = false;
        continue;
    }
    
    posicaoDoArray++
}

//Atividade01 de arrays

const array1 = [];
const indices = [];
let contadorIndice = 0;

const numeroProcurado= parseInt(prompt("Digite o numero a ser procurado:"))

for (let i = 0; i < 10; i++){ // Supomos que o array tem até 10 elementos
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}:`));
    array1[i] = elemento 
}

for (let i = 0; i < 10; i++){ // Supomos que o array tem até 10 elementos
    if (array1[i] === numeroProcurado){
        indices[contadorIndice] = i
        contadorIndice++
    }
}
    
console.log(`O numero ${numeroProcurado} foi encontrado nos indices: ${indices}`);

//Atividae 02 array

//Criando variaveis
let array2 = []
let arrayInvertido1 = []

//POPULANDO O ARRAY

for (let i = 0; i < 5 ; i++){
    let numero = parseInt(prompt("Digite o " + (i + 1) + " º numero"))
    array2[i] = numero
}

console.log("Array original: " + array2)

//INVERTENDO ARRAY

let contador1 = 4
for (let i = 0; i < 5; i++) {
    arrayInvertido1[i] = array2[contador1]
    contador1--
}

console.log("Array invertido: " + arrayInvertido1)

//Atividade 03 array
let array = []
let arrayInvertido = []
let quantidade = parseInt(prompt("Digite a quantidade de numeros para inserir no array"))

//POPULANDO O ARRAY

for (let i = 0; i < quantidade ; i++){
    let numero = parseInt(prompt("Digite o " + (i + 1) + " º numero"))
    array[i] = numero
}

console.log("Array original: " + array)

//INVERTENDO ARRAY

let contador = quantidade - 1
for (let i = 0; i < quantidade; i++) {
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Array invertido: " + arrayInvertido)

//Atividae 04 array

let numero = parseInt(prompt("Digite um numero inteiro e positivo"))
let fibonacci = []

fibonacci[0] = numero - 1
fibonacci[1] = numero

//criando loop

for (let i = 2; i < 10; i++ ) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log("Fibonacci: " + fibonacci)