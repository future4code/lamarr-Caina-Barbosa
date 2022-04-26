//Exercícios de Interpretação de Código

/*
1.a
Matheus Nachtergaele
Virgina Cavendish
canal: "Globo", horario: "14h"

2.a 
nome: "Juca", idade: 3, raca: "SRD"
nome: "Juba", idade: 3, raca: "SRD"
nome: "Jubo", idade: 3, raca: "SRD"

2.b 
Cria uma cópia daquele objeto, tbm chamado de espelhamento ou spread.

3.a
false
Algum erro, pois não existe a propriedade altura que está tentando ser acessada. 

*/


//Exercícios de escrita de código.

//1

const pessoa = {
    nome: "Gustavo",
    apelidos: ["Gu", "Gustavinho", "inakuzaa"]

}

const print = (objeto) => console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos} `)

const outrapessoa = {
    ...pessoa,
    apelidos: ["Guga", "Gustavão", "Gustavera"]

}

print(outrapessoa)

//2

const user = {
    nome : "Ronaldinho Gaúcho",
    idade : 42,
    profissão : "Bruxo"

}

const user2 = {
    nome : "Adriano",
    idade : 40,
    profissão : "Imperador"

}

const arrayUsers = (user) => array = [user.nome, user.nome.length, user.idade, user.profissão, user.profissão.length]

//Exercício 3
//3.a
const carrinho = [] 

//3.b
const fruta1 = {
    nome: "Mamão",
    disponibilidade: true

}

const fruta2 = {
    ...fruta1,
    nome: "Banana"
}

const fruta3 = {
    ...fruta1,
    nome: "Morango"
}

//3.c 
const addCart = (fruta) =>  carrinho.push(fruta.nome) 

addCart(fruta1)
addCart(fruta2)
addCart(fruta3)

console.log(carrinho)

//Desafio 3 

const stock = (fruta) => fruta.disponibilidade = !fruta.disponibilidade

stock(fruta1)
console.log(`Tem ${fruta1.nome}?`, fruta1.disponibilidade)

//Desafios

//Desafio1

/*
function printobject () {
    
    const name = prompt("Seu nome:")
    const age = prompt("Sua idade:")
    const job = prompt("Seu trampo")
    
    const objeto = { 
        name : name, 
        age : age ,
        job : job
    }

    return console.log(objeto), console.log(typeof(objeto))

}

printobject()
*/ //DESCOMENTAR DPS

//Desafio2

const filme1 = {
    date : 1973,
    name : "Poeira em Alto-Mar"
}

const filme2 = {
    date : 1985,
    name : "A Volta Dos Que Não Foram"
}

function yearCheck (f1, f2) {
    const mensagem = console.log("O primeiro filme foi lançado antes do segundo?", f1.date < f2.date, "\n", "O primeiro filme foi lançado no mesmo ano do segundo?", f1.date === f2.date)
    return mensagem    
}

yearCheck(filme1, filme2)

//Desafio 3 - VER LINHA 92