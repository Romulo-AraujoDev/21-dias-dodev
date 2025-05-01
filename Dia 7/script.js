//Exemplo caso While
/*let idade = 18;
while(idade >= 18){
    idade = Number(prompt("Digite sua idade"))    
    console.log(idade)
}
console.log("Voce é menor de idade")*/

//Exemplo caso do While

/*let idade = 17;

do {
    idade = Number(prompt("Digite sua idade"))    
    console.log(idade)
} while (idade >= 18);

console.log("Voce é menor de idade")*/

//Atividade 1 While
let continuar1 = true;

// Variáveis para os cálculos finais
let somaNotas = 0; // Soma total das notas para calcular a média
let totalAlunos = 0; // Quantidade total de alunos cadastrados
let qtdHomens = 0; // Contador de homens
let qtdMulheresAcima7 = 0; // Contador de mulheres com nota > 7
let maiorNotaHomem = -1; // Maior nota entre os homens (iniciamos com -1 pois a menor nota possível é 0)

while (continuar1) {
  // Recebe a nota e valida
  let nota = parseFloat(prompt("Digite a nota do aluno:"));
  while (isNaN(nota) || nota < 0 || nota > 10) {
    nota = parseFloat(prompt("Nota inválida. Digite uma nota entre 0 e 10:"));
  }

  // Recebe o sexo e valida
  let sexo = prompt("Digite o sexo do aluno (M para masculino, F para feminino):").toUpperCase();
  while (sexo !== "M" && sexo !== "F") {
    sexo = prompt("Sexo inválido. Digite 'M' para masculino ou 'F' para feminino:").toUpperCase();
  }

  // Soma a nota para cálculo da média geral
  somaNotas += nota;

  // Incrementa o total de alunos
  totalAlunos++;

  // Verificações específicas por sexo
  if (sexo === "M") {
    qtdHomens++; // Conta mais um homem

    // Verifica se esta é a maior nota entre os homens
    if (nota > maiorNotaHomem) {
      maiorNotaHomem = nota;
    }

  } else if (sexo === "F") {
    // Se for mulher e tiver nota acima de 7, conta
    if (nota > 7) {
      qtdMulheresAcima7++;
    }
  }

  // Mensagem de confirmação
  alert("Nota cadastrada com sucesso!\nNota: " + nota + "\nSexo: " + (sexo === "M" ? "Masculino" : "Feminino"));

  // Pergunta se deseja continuar
  let resposta = prompt("Deseja cadastrar outra nota? (S/N)").toUpperCase();
  if (resposta !== "S") {
    continuar1 = false;
  }
}

// Cálculo da média geral
let mediaGeral = somaNotas / totalAlunos;

// Exibição no console
console.log("----- RESULTADOS FINAIS -----");
console.log("Média geral dos alunos:", mediaGeral.toFixed(2));
console.log("Quantidade de homens que enviaram nota:", qtdHomens);
console.log("Quantidade de mulheres com nota acima de 7:", qtdMulheresAcima7);

// Verifica se houve homens cadastrados para mostrar a maior nota
if (qtdHomens > 0) {
  console.log("Maior nota entre os homens:", maiorNotaHomem);
} else {
  console.log("Nenhum homem cadastrou nota.");
}

//Caso 2 Do WHILE atividade

// Solicita nome e CPF do cliente
let nome = prompt("Digite o nome do cliente:");
let cpf = prompt("Digite o CPF do cliente:");

// Inicializa o saldo com um valor inicial
let saldo = 1000.00; // exemplo: saldo inicial de R$1000

// Variáveis auxiliares
let continuar2;
let maiorValor = 0;
let somaValores = 0;
let quantidadeOperacoes = 0;

do {
  // Solicita o valor da operação
  let valor = parseFloat(prompt("Digite o valor para saque ou depósito:"));

  // Valida se o valor é positivo
  while (isNaN(valor) || valor <= 0) {
    valor = parseFloat(prompt("Valor inválido. Digite um valor POSITIVO:"));
  }

  // Atualiza maior valor se necessário
  if (valor > maiorValor) {
    maiorValor = valor;
  }

  // Soma para média depois
  somaValores += valor;
  quantidadeOperacoes++;

  // Pergunta se é saque ou depósito
  let operacao = prompt("Digite 'S' para saque ou 'D' para depósito:").toUpperCase();

  // Verifica operação válida
  while (operacao !== "S" && operacao !== "D") {
    operacao = prompt("Operação inválida. Digite 'S' para saque ou 'D' para depósito:").toUpperCase();
  }

  if (operacao === "S") {
    // Se for saque, verifica se há saldo suficiente
    if (valor > saldo) {
      alert("Erro: Saldo insuficiente para saque.");
    } else {
      saldo -= valor;
      alert("Saque realizado com sucesso.");
    }
  } else if (operacao === "D") {
    // Depósito
    saldo += valor;
    alert("Depósito realizado com sucesso.");
  }

  // Pergunta se deseja continuar
  continuar2 = prompt("Deseja realizar outra operação? Digite 1 para SIM ou 2 para NÃO:");

} while (continuar === "1");

// Exibe informações finais
console.log("===== RESUMO FINAL =====");
console.log("Cliente:", nome);
console.log("CPF:", cpf);
console.log("Saldo final: R$" + saldo.toFixed(2));
console.log("Maior valor inserido: R$" + maiorValor.toFixed(2));
console.log("Média dos valores inseridos: R$" + (somaValores / quantidadeOperacoes).toFixed(2));

