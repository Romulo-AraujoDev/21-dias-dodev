//Declarando arrays que vamos utilizar

let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

//Declarando função com os parametros pedidos

function AcharNumeroEmComum(arrayUm,arrayDois){
    let resultado = []; // Declarando array de numeros em comum
    let ContadorResultado = 0 // Contador desse array

    // O primeiro FOR pecorre o arrayUm 
    for (let i = 0; i < arrayUm.length; i++){
        // O segundo FOR percorre o arrayDois, para cada numero de arrayUm ele
        // compara com todos os numeros de arrayDois
        for (let j = 0; j < arrayDois.length; j++){
            // Se a comparação for bem sucedida ele adiciona esse numero no array de 
            // numeros em comum e atribui o valor maximo ao contadro j  assim encerrando
            // a verficação para esse numero e evitando numeros duplicados
            if(arrayUm[i] == arrayDois[j]){
                resultado[ContadorResultado] = arrayUm[i]
                ContadorResultado++
                j = arrayDois.length
            }
        }
    }

    return resultado
}

console.log(AcharNumeroEmComum(arrayA,arrayB))