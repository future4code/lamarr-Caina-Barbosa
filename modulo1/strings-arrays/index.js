// Exercícios de interpretação de código 

//Exercício 1

/*
a. undefined
b. null
c. 11
d. 3
e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
f. 7

*/

// Exercício 2 

// SUBI NUM ÔNIBUS EM MIRROCOS 27

//Exercícios de escrita de código

//EXERCÍCIO 1


const nome = prompt("Diga seu nome:")
const email = prompt("Diga o seu e-mail:")
const mensagem =  `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o) ${nome}`
console.log(mensagem)


//EXERCÍCIO 2



let prefComidas = ["lamen", "yakisoba", "pudim", "donburi", "churrasco"]
console.log(prefComidas) //2.a

console.log("Essas são as minhas comidas preferidas: ")
console.log(prefComidas[0])
console.log(prefComidas[1])
console.log(prefComidas[2])
console.log(prefComidas[3])
console.log(prefComidas[4]) //2.b


prefComidas[1] = prompt("Qual é a sua comida preferida?")
console.log(prefComidas) //2.c



// EXERCÍCIO 3

let listaDeTarefas = []
listaDeTarefas.push(prompt("Diga uma tarefa que você precisa realizar:"))  
listaDeTarefas.push(prompt("Diga uma tarefa que você precisa realizar:"))  
listaDeTarefas.push(prompt("Diga uma tarefa que você precisa realizar:")) 
console.log(listaDeTarefas) 
listaDeTarefas.splice(prompt("Diga o índice de uma tarefa que você já concluiu - 0, 1 ou 2"),1)
console.log(listaDeTarefas)



//DESAFIOS

//DESAFIO 1

//Eu sei que não podemos usar métodos ou sintaxes não passadas durante a aula, mas esses desafios me parecem impossíveis com os métodos que conhecemos!
//Olhando os materiais de apoio (ws3schools - strings methods), eu achei o método SPLIT, que faz o que é pedido

const frase = prompt("Entre uma frase:")
const array = frase.split(" ")
console.log(array)

//DESAFIO 2 

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indiceAbacaxi = frutas.indexOf("Abacaxi")
console.log(indiceAbacaxi, frutas.length)

//Estou muito curioso para saber a lógica necessária para implementar essa funcionalidade apenas com as sintaxes ensinadas durante a aula. 