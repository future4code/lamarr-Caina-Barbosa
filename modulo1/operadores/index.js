/* Exercícios de interpretação de código
1.
a. false
b. false
c. true
d. boolean 

2. O problema é que ele não converteu as strings em numbers. 
A soma ocorrerá, mas será uma soma de strings, então o que será impresso vai ser primeiroNumero segundoNumero, por exemplo:

Se primeiroNumero = 5
E segundoNumero = 8

O console imprimirá 58.

3. 


let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

*/ //APAGAR LINHA DEPOIS 

//Exercícios de escrita de código

//Exercício 1

const idadeUser = prompt("Qual é a sua idade?") //1.A
const idadeAmigx = prompt("Qual é a idade do seu melhor amigue?") //1.B

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUser > idadeAmigx) //1.C
console.log("A diferença de idade entre você e o seu amigo é:", idadeUser - idadeAmigx) //1.D 




//Exercício 2

let numeroPar = Number(prompt("Insira um número par:")) //2.a
console.log(numeroPar % 2) //2.b

// 2.c O resto de uma divisão de um número par por 2 sempre será 0. 
//2.d O resto de uma divisão de um número impar por 2 sempre será 1.



//Exercício 3

const idadeAnos = Number(prompt("Qual é a sua idade em anos?"))

console.log("Sua idade em meses é", idadeAnos * 12) //3.a
console.log("Sua idade em dias é", idadeAnos * 365) //3.b
console.log("Sua idade em horas é", idadeAnos * 365 * 24) //3.c

// Exercício 4

const no1 = Number(prompt("Diga um número:"))
const no2 = Number(prompt("Diga outro número:"))

console.log("O primeiro numero é maior que segundo?", (no1 > no2))
console.log("O primeiro numero é igual ao segundo?", (no1 === no2))
console.log("O primeiro numero é divisível pelo segundo?", ((no1 % no2) === 0))
console.log("O segundo numero é divisível pelo primeiro?", ((no2 % no1) === 0))



//DESAFIO

//DESAFIO 1

console.log("77°F em K é ", (77 - 32)*(5/9) + 273.15, "°F" )
console.log("80°C em °F é ", ((80*9)/5) + 32, "°F")
console.log("30°C em °F é ", ((30*9)/5) + 32, "°F, e em K é", 380 + 273.15, "K" )

const celsius = Number(prompt("Diga a temperatura em celsius:"))

const fahrenheit = ((celsius*9)/5) + 32
const  kelvin = celsius + 273.15

console.log("Essa temperatura em Fahrenheit é", fahrenheit, "°F")
console.log("Essa temperatura em Kelvin é", kelvin, "K")

//FIM DO DESAFIO 1



//DESAFIO 2

const kwh = Number(prompt("Entre a quantia de KWH consumida pela sua residência:"))
const desconto = Number(prompt("Entre a porcentagem de desconto:"))
console.log("O valor médio gasto pela sua residência, sem desconto, é R$", kwh * 0.05)
console.log("O valor médio gasto pela sua residência, com desconto, é R$", (kwh * 0.05) * ((100 - desconto)/100))
console.log("Uma residência que gasta 280 KWH, paga, em média", 280 * 0.05)
console.log("Agora, com 15% de desconto, essa mesma residência pagaria, em média", (280 * 0.05) * 0.85)

//FIM DO DESAFIO 2 

//DESAFIO 3

console.log("20lb equivalem a", 20/2.205 , "kg")
console.log("10.5oz equivalem a", 10.5/35.274 , "kg")
console.log("100mi equivalem a", 100*1609 , "m")
console.log("50ft equivalem a", 50/3.281 , "m")
console.log("103.56gal equivalem a", 103.56*3.78541 , "l")
console.log("450xic equivalem a", 450*0.24 , "l")

const xic = prompt("Entre a quantidade de xícaras:")
console.log( xic, "xic equivalem a", xic*0.24 , "l")

//FIM DO DESAFIO 3