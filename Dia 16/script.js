//Arrays para armazenar os nomes e senhas

let nomes = [];
let senhas = [];

// Função para solicitar a opção ao usuario

function solicitarOpcao(){
    let opcao = prompt("Escolha uma opção:\n1. Cadastar\n2. Fazer Login " +
        "\n3. Excluir cadastro\n4. Encerrar Programa")
    return opcao
}

//Função para solicitar nome e senha ao usuario

function cadastrarUsuario(){
    nomes.push(prompt("Digite o seu nome:"))
    senhas.push(prompt("Digite a sua senha:"))
}

//Função para fazer login

function fazerLogin(nome, senha){
    let indice = nomes.indexOf(nome)
    if (indice != -1 && senhas[indice] == senha){
        return true;
    } else {
        return false;
    }
}

//Função para excluir cadastro

function excluirCadastro(nome){
    let indice = nomes.indexOf(nome);
    if (indice !== -1){
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log("Cadastro excluido com sucesso!")
    } else {
        console.log("Usuario não encontrado")
    }
}

//Fluxo de funcionamento do programa

let continuar = true;
while(continuar) {
    let opcao = solicitarOpcao();
    let nome;
    let senha
    switch(opcao) {
        case "1":
            cadastrarUsuario();
            break;
        case "2":
            nome = prompt("Digite seu nome")
            senha = prompt("Digite sua senha")
            let login = fazerLogin(nome,senha);
            if (login) {
                console.log("login feito com sucesso")
            } else {
                console.log("Nome ou senha incorretos!")
            }
            break;
        case "3":
            nome = prompt("Digite seu nome")
            excluirCadastro(nome);
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Opcao invalida. tente novamente.")
            break;
    }
}