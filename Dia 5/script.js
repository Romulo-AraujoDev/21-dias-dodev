//Caso switch 1 (calculadora)
/*let num1 = parseInt(prompt('Digite seu primeiro numero'))
let num2 = parseInt(prompt('Digite seu segundo numero'))

let opcao = parseInt(prompt('Escolha a operacao que deseja realizar:' + "\n1 = + ; \n2 = - ; \n3 = * ; \n4 = / ;"))

switch(opcao){
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break
    default:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break
}*/

//Caso switch 2
let valor
let quantidade
let opcao = prompt("Bem vindo ao DoDev-Thru, voce deseja: " 
    + "\n1 - abastecer com gasolina: \n2 - abastecer com alcool: \n3 - calibrar os pneus")

switch(opcao){
    case '1':
        valor = parseInt(prompt("Dgite o valor desejado para abastecer"))
        quantidade = valor / 5
        console.log("Foram abastecidos: " + quantidade + "L de gasolina")
        break;
    case '2':
        valor = parseInt(prompt("Dgite o valor desejado para abastecer"))
        quantidade = valor / 3
        console.log("Foram abastecidos: " + quantidade + "L de alcool")
        break;
    default :
        console.log("Pneus calibrados com sucesso")
        break;
        
}
