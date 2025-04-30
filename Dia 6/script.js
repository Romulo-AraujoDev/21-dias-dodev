// caso 1 for

let numero = parseInt(prompt("Digite um numero inteiro e positivo"))

if(numero >= 0) {
    for(let i = 0; i <= numero; i++){
        console.log(i)
    }
} else {
    console.log("Por favor, digite um numero inteiro e positivo")
}


//caso 2  e 3 for

for( i=50; i >= 0; i-=5){
    console.log(i)
}

// mensagem final apos a contagem

console.log("Fim!")

//caso 4 resolução
// Solicita um número inteiro ao usuário
const numeroBase = parseInt(prompt("Digite um número inteiro:"));

// Exibe o título das tabuadas
console.log(`Tabuada do ${numeroBase}:\tTabuada do ${numeroBase + 1}:\tTabuada do ${numeroBase + 2}:\n`);

// Gera as tabuadas do número informado e dos dois seguintes
for (let i = 1; i <= 10; i++) {
  const resultado1 = `${numeroBase} x ${i} = ${numeroBase * i}`;
  const resultado2 = `${numeroBase + 1} x ${i} = ${(numeroBase + 1) * i}`;
  const resultado3 = `${numeroBase + 2} x ${i} = ${(numeroBase + 2) * i}`;

  // Exibe os três resultados lado a lado
  console.log(`${resultado1}\t${resultado2}\t${resultado3}`);
}
