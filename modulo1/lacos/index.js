//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1. Ele está adicionando os valores de i a uma variável chamada valor, sendo que o valor de i inicia como 0 e vai até 5, quando chega em 5, não é adicionado. Ou seja, no final, o valor impresso será 10 

//2 a. 19, 21, 23, 25 , 27, 30.
//2 b. Sim, o for of é suficiente, é preciso usar o indexOf. 

//3. Eu acho que seria impresso isso:
/*

*
**
***
****
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
/*
//1

petsName = []
const petAmount = Number(prompt("Quantos pets vc tem?"))
if(petAmount != 0) {
    while (petsName.length < petAmount) {
        petsName.push(prompt(`Insira o nome do pet número ${petsName.length + 1}`))
    }
    console.log(petsName)
}

else {
    console.log( "Que pena! Você pode adotar um pet!")
}

*/
//2

//2.a

let arrayOriginal = [-20, 10, 35, 78, 100, 420]

function printArray(array) {
    for(let numero of array){
        console.log(numero)
    }
}

//2.b

function divArrayBy10(array) {
    for(let numero of array){
        console.log(numero/10)
    }
}

//2.c

function parArray(array) {
    let arrayPar = []
    for(let numero of array){
        if(numero % 2 === 0){
            arrayPar.push(numero)
        }
        console.log(arrayPar)
    }
}

//2.d

function listArray(array) {
    let list = []
    for(let index = 0;  index < array.length; index++) {
        list.push(`O elemento do índex ${index} é: ${array[index]} `)
    }
    console.log(list)
}

//2.e

function maxMin(array) {
    let max = array[0]
    let min = array[0]
    for(let numero of array) {
        if(numero > max){
            max = numero
        }
        if (numero < min){
            min = numero
        }
    }
    console.log(`O maior número é ${max} e o menor é ${min}`)
}

//DESAFIOS

//DESAFIO 1 - Comentado pois tem o mesmo código do DESAFIO 2
/*
console.log("Vamos jogar!")
const p1Number = Number(prompt("Jogador nº1 - Entre o número que você está pensando:"))
let p2Guess = null
let tries = 0  
while(p2Guess != p1Number){
    p2Guess = Number(prompt("Jogador nº2 - Vamos ver se você é bom de chute"))
    tries++
    console.log(`O número chutado foi: ${p2Guess}`)
    if(p2Guess > p1Number){
        console.log(`Errou! O número escolhido é maior`)
    }
    else if (p2Guess < p1Number){
        console.log(`Errou! O número escolhido é menor`)
    }
}
console.log("Acerto, mizeravi!")
console.log(`O número de tentativas foi ${tries}`)
*/
//DESAFIO 2

console.log("Vamos jogar!")
const p1Number = Math.floor(Math.random() * 100) +1;
console.log(`random é ${p1Number}`)
let p2Guess = null
let tries = 0  
while(p2Guess != p1Number){
    p2Guess = Number(prompt("Vamos ver se você é bom de chute"))
    tries++
    console.log(`O número chutado foi: ${p2Guess}`)
    if(p2Guess > p1Number){
        console.log(`Errou! O número escolhido é maior`)
    }
    else if (p2Guess < p1Number){
        console.log(`Errou! O número escolhido é menor`)
    }
}
console.log("Acerto, mizeravi!")
console.log(`O número de tentativas foi ${tries}`)

//Não foi difícil fazer essa alteração afinal só mudei o valor de uma variável, o resto é exatamente o mesmo código. Apesar que eu demorei um pouco para entender o que exatamente a expressão que usei (Math.floor(Math.random() * 100) +1) faz. 
