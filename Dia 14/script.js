var nome;
var salario;

function perguntarColaborador(){
    nome = prompt("Digite o nome do colaborador:");
    salario = parseFloat(prompt("Digite o salario do colaborador:"));
    calcularAumentoSalario(nome, salario);
}

// Função para calcular aumento de salario
function calcularAumentoSalario(nome, salario){
    var aumento = 0;

    if (salario <= 1500){
        aumento = 0.2; // 20%
    } else if (salario <= 2000){
        aumento = 0.15; // 15%
    } else if (salario <= 3000){
        aumento = 0.1; // 10%
    } else {
        aumento = 0.05; // 5%
    }

    var novoSalario = salario + (salario * aumento);

    // Exibindo resultados
    console.log("Nome do colaborador: " + nome);
    console.log("Salario: R$" + salario);
    console.log("Aumento: " + (aumento * 100) + "%");
    console.log("Salario reajustado: R$" + novoSalario);

    perguntarNovamente(); // Pergunta se deseja calcular novamente
}

// Função para perguntar se o usuario deseja calcular novamente
function perguntarNovamente(){
    var resposta = prompt("Deseja calcular novamente? (s/n)");
    if (resposta == "s"){
        perguntarColaborador(); // Reiniciar processo
    }
}

// 🔔 Chamada inicial para rodar o código
perguntarColaborador();
