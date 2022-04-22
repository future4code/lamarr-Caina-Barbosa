/*
Exercícios de Interpreteção de Código

1.a 

10
50

1.b 

Nada apareceria no console.

2. a

Essa função retorna um booleano que nos diz se a frase inserida pelo usuário contem ou não contem a palavra  cenoura, e graças ao metodo toLowerCase, ela não é case sensitive (em outras palavras, ela retorna TRUE mesmo se escrever CENOURA)

2.b

true
true
true

*/


// Exercícios de escrita de código


//Exercício 1.a 

function imprimir () {
    console.log("Eu sou Cainã, tenho 23 anos, moro em Curitiba e sou estudante na Labenu")
}

imprimir()

//Exercício 1.b

function printcustom(nome, idade, cidade, profissao) {
    return `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao} `
}

//Não entendi como funciona pra forçar que o parametro passado pra function (nome, idade etc) seja de um tipo específico - por exemplo, number ou string. Tentei usar o : string  e : numberdps do valor mas deu erro e n consegui achar uma explicação na internet :/ 


// FIM DO EXERCÍCIO 1

//Exercício 2

//2.a


const somar = (n1,n2) => n1+n2

console.log(somar(13, 13))

//2.b

const compare = (n1,n2) => n1 >= n2

//2.c

const ehpar = (n) => n % 2 === 0

//2.d

const tamupsize = (mensagem) =>  console.log(mensagem.length, mensagem.toUpperCase())

// FIM DO EXERCÍCIO 2

//Exercício 3

const sum = (n1,n2) => n1 + n2 
const sub = (n1,n2) => n1 - n2
const mtp = (n1,n2) => n1 * n2
const div = (n1,n2) => n1 / n2

let n1 = Number(prompt("Entre um número"))
let n2 = Number(prompt("Entre mais um número"))

console.log("Números inseridos:", n1, "e", n2)
console.log("Soma", sum(n1,n2))
console.log("Diferença", sub(n1,n2))
console.log("Multiplicação", mtp(n1,n2))
console.log("Divisão", div(n1,n2))

// FIM DO EXERCÍCIO 3

//DESAFIO 1

const print = param => console.log(param)
const noreturn = (p1,p2) => {
    print((p1+p2))
}
//FIM DO DESAFIO 1

//DESAFIO 2

const ptg = (c1, c2) => Math.sqrt((c1*c1) + (c2*c2))

console.log(ptg(3,4))