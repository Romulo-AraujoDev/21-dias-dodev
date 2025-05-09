//PASSO 1 CRIAR DOIS ARRYAS PARA NOMES E SENHAS

let nomes = []
let senhas = []

let contador = 0
let continuar = true

//PASSO 2 E 3 : SOLICITANDO QUAL OPERAÇÃO O USUARIO DESEJA FAZER E ORGANIZANDO A EXECUÇÃO DO CODIGO COM UM
//              SWITCH CASE DENTRO DE UM WHILE
                
while(continuar){
    let opcao = prompt("O que deseja fazer? 1 - Cadastro  / 2 - Login / 3 - Excluir / 4 - Encerrar")

    switch(opcao){
        case "1":
            //Passo 4 : Criando um cadastro de usuario
            nomes[contador] = prompt("Qual o nome")
            senhas[contador] = prompt("Qual a senha")
            contador++

            break;
        case "2":
            // PASSO 5 : CRIANDO LOGIN
            let nome = prompt("Qual o nome")
            let senha = prompt("Qual a senha")
            let loginValido = false

            for(let i = 0; i < nomes.length; i++){
                if( nome === nomes[i] && senha === senhas[i]){
                    loginValido = true
                }
            }

            if(loginValido){
                alert("Login efetuado com Sucesso. Bem-vindo!")
            }else {
                alert("Login ou senha incorretos")
            }

            break;
        
        case "3":
            // PASSO 6 CRIANDO EXCLUIR
            let nomeExcluir = prompt("Qual o nome deseja excluir?")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0

            for (let i = 0; i < contador; i++){
                if(nomeExcluir == nomes[i]){
                    alert("Cadastro excluido com sucesso")
                }else {
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }

            nomes = nomesAux
            senhas = senhasAux
            contador--

            break;

        case "4":
            continuar = false
            break;
        default:
            console.log("Opção invalida, escolha outra")
            break;
    }
}