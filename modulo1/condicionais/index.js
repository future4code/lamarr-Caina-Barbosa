//Exercícios de interpretação de código
/*
1.a Testa se o número entrado pelo usuário é par.
1.b Números pares.
1.c Números ímpares.

2.a Imprime/retorna o preço de uma certa fruta entrada pelo usuário.
2.b O preço da fruta Maçã é R$ 2,25
2.c Eu acho que seria 5 pois o código continuaria, mas não sei ao certo sem executar.

3.a Armazenando na variavel numero o valor entrado pelo usuário, convertendo o tipo do valor entrado de string para number.
3.b Número 10 imprimirá Esse número passou no teste, seguido de um erro.
Agora, para o número -10, teríamos apenas o erro pois não entraria no if.
3.c mensagem é declarado no escopo da condicional if, não pode ser usado globalmente.
*/


//Exercícios de escrita de código

//1.a e 1.b

const age = Number(prompt("Sua idade:"))

//1.c

if (age >= 18) {
    console.log("Você pode dirigir")
}

else {
    console.log("Você não pode dirigir")    
}

//2

const shift = prompt("Entre seu turno no seguinte formato - M (Matutino), V (Vespertino) ou N(Noturno):")

if (shift === "M") {
    console.log("Bom Dia!")
}
else if (shift === "V") {
    console.log("Boa Tarde!")
}
else if (shift === "N") {
    console.log("Boa Noite!")
}
else {
    console.log("Formato inválido, atualize a página e tente novamente.")
}

//3

switch (shift) {
    case "M": 
        console.log("Bom Dia!")
        break;
    case "V" :
        console.log("Boa Tarde!")
        break;
    case "N":
        console.log("Boa Noite!")
        break;
    default:
        console.log("Formato inválido, atualize a página e tente novamente.")        
}



//4 

let movieGender = (prompt("Qual é o gênero do filme?")).toLowerCase()
let ticketPrice = Number(prompt("Qual é o preço do ingresso filme?"))
let snack = (prompt("Qual lanchinho você vai comer?"))


if (movieGender === "fantasia" && ticketPrice < 15) {
    console.log("Bom filme!")
    console.log(`Aproveite o seu ${snack}`)

} 
else {
    console.log("Escolha outro filme :(")
}



//DESAFIO 1 - Adicionado ao exercício anterior. 

//DESAFIO 2 

let fullName = prompt("Nome Completo:")
let matchType = prompt ("Entre IN se o jogo for internacional, ou DO se o jogo for doméstico:")
let matchStage = prompt("Entre a etapa do campeonato - SF (Semi-Final), DT (decisão terceiro lugar), ou FI (final)")
let category = Number(prompt ("Entre a categoria do jogo - 1,2,3 ou 4:"))
let ticketAmount = Number (prompt ("Quantidade de ingressos:"))
let ticketType = null
let price = null
let totalPrice = null
let currency = null

//Essa parte do código define o preço de uma unidade de ingresso dependendo da etapa do jogo e categoria escolhidas anteriormente. 

if (matchStage === "SF" && category === 1) {
    price = 1320
    console.log(price)
}
else if(matchStage === "DT" && category === 1) {
    price = 660
}
else if(matchStage === "FI" && category === 1) {
    price = 1980
}
else if (matchStage === "SF" && category === 2) {
    price = 880
}
else if(matchStage === "DT" && category === 2) {
    price = 440
}
else if(matchStage === "FI" && category === 2) {
    price = 1320
}
else if (matchStage === "SF" && category === 3) {
    price = 550
}
else if(matchStage === "DT" && category === 3) {
    price = 330
}
else if(matchStage === "FI" && category === 3) {
    price = 880
}
else if (matchStage === "SF" && category === 4) {
    price = 2200
}
else if(matchStage === "DT" && category === 4) {
    price = 170
}
else if(matchStage === "FI" && category === 4) {
    price = 330
}

// Essa parte calcula o valor total a ser pago

totalPrice = price*ticketAmount

// Essa parte decide como será impresso o valor do ingresso, em reais ou dólares.

let matchTypeMessage = null

if (matchType === "DO") {
    currency = "R$"
    matchTypeMessage = "Nacional"
} 
else {
    currency = "U$"
    price = price / 4,1
    matchTypeMessage = "Internacional"
}

// Essa parte define a mensagem impressa referente a etapa do jogo

let matchStageMessage = null

switch (matchStage) {
    case "SF" :
        matchStageMessage = "Semifinais"
        break;
    case "DT":
        matchStageMessage = "Decisão do 3º lugar"
        break;
    case "FI":        
        matchStageMessage = "Final"
        break;
    default : 
    matchStageMessage = "Dados inválidos, atualize a página e tente novamente."   
}



// Essa parte do código imprime cada linha da saída

console.log("---Dados da compra---")
console.log(`Nome do cliente: ${fullName}`)
console.log(`Tipo do jogo: ${matchTypeMessage}`)
console.log(`Etapa do jogo: ${matchStageMessage}`)
console.log(`Categoria: ${category}`)
console.log(`Quantidade de Ingressos: ${ticketAmount}`)
console.log(`---Valores---`)
console.log(`Valor do Ingresso: ${currency} ${price}`)
console.log(`Valor total: ${currency} ${totalPrice}`)






