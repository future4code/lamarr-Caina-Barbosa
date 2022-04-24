// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const h = prompt("Entre a altura do retângulo:")
  const l = prompt("Entre a largura do retângulo:")  
  console.log(h*l)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const curYear = prompt("Em que ano nós estamos?")
  const birthYear = prompt("Em que ano você nasceu?")  
  console.log(curYear-birthYear)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Nome:")
  const idade = prompt("Idade:")  
  const email = prompt("Email:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cores = [prompt("Sua cor favorita:"), prompt("Sua segunda cor favorita:"), prompt("Sua terceira cor favorita:") ]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return (string1.length  === string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const placeholder = array[0]
  array[0]= array[array.length - 1]
  array[array.length - 1] = placeholder
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const curYear = prompt("Ano atual:")
  const birthYear = prompt("Ano de nascimento:")
  const emiDate = prompt("Ano de emissão da carteira:")
  const age = curYear - birthYear
  const licenseAge = curYear - emiDate
  const a20 = (age) <= 20 && (licenseAge) >= 5
  const a50 = (age) > 20 && (age) <= 50 && (licenseAge) >= 10
  const over50 = (age) > 50 && (licenseAge) >= 15
  const checaRenovacao =  a20 || a50 || over50
  console.log (checaRenovacao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiplo400 =  ano % 400 === 0 
  const multiplo100e4 = (ano % 100 === 0) === multiplo400 === (ano % 4 === 0) 
  const multiplo4 = (ano % 4 === 0)  && (ano % 100 ) != 0
  return multiplo400 || multiplo100e4 || multiplo4

}

//Achei este exercício (14) incrível, fritou o cérebro pra chegar na lógica mas foi muito satisfatório quando os testes deram certo. Um desafio e tanto! 

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maior18 = prompt("Você tem mais de 18 anos?") === "sim"
  const emCompleto = prompt("Você possui ensino médio completo?") === "sim"
  const dispoExclusiva = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") === "sim"
  console.log(maior18 && emCompleto && dispoExclusiva)

}