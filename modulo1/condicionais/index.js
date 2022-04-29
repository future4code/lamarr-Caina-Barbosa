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

if (movieGender === "fantasia" && ticketPrice < 15) {
    console.log("Bom filme!")
} 
else {
    console.log("Escolha outro filme :(")
}




