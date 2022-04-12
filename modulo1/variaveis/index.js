/*
Exercícios de Interpreteção de Código

1. O console imprimirá:

10
10 5

2. Como não executei o código e não sei como funcionam os códigos de erro do Javascript, não consigo dar uma resposta exata, mas creio que o que será impresso vai ser um erro,
dado que a variável C não foi declarada em nenhuma parte do código.

3. Os nomes que eu usaria para as variáveis seriam os seguintes:

Variável p: horasTrabalhoDia
Variável t: salarioDia
*/


// Exercícios de escrita de código


//Exercício 1. 

let nome = null //1.A
let idade = null //1.B

console.log(typeof nome, typeof idade) //1.C


//1.D - Foi impresso object object, pois até essa parte do código, não foi atribuído um valor que possa ser classificado pela função typeof.


nome = prompt("Qual é o seu nome?") //1.E
idade = prompt("Qual é a sua idade?") //1.E
console.log(typeof nome, typeof idade) //1.F - Apesar de ser um número, idade tem como type - string, pois é assim que o comando prompt armazena dados - como strings.
console.log("Olá", nome, ", você tem", idade, "anos") //1.G

// FIM DO EXERCÍCIO 1

//Exercício 2

let pergunta1 = "Você está de bom humor hoje?"
let pergunta2 = "Você já respirou fundo hoje?"
let pergunta3 = "Você está bem?"

let resposta1 = prompt(pergunta1)
let resposta2 = prompt(pergunta2)
let resposta3 = prompt(pergunta3)

console.log(pergunta1, resposta1)
console.log(pergunta2, resposta2)
console.log(pergunta3, resposta3)

// FIM DO EXERCÍCIO 2

//Exercício 3

let a = 10
let b = 25

// Aqui começa a lógica para trocar os valores

let valorDeA = a 
let valorDeB = b

a = valorDeB
b = valorDeA

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// Ao ler as dicas, me toquei que minha lógica usa um "copo" a mais do que o necessário. Porém, resolvi mantê-la pela autenticidade da minha resposta inicial. 

// FIM DO EXERCÍCIO 3

//DESAFIO

let no1 = Number(prompt("Ei, você que tá revisando esse código! Vc é f*da! Agora, me diz um número, por favor?"))
let no2 = Number(prompt("Boa escolha, esse é o meu número favorito. Agora, me diz outro número?"))

console.log("1. O primeiro número somado ao segundo número resulta em:", (no1+no2))
console.log("2. O primeiro número multiplicado pelo segundo número resulta em:", (no1*no2))

//FIM DO DESAFIO