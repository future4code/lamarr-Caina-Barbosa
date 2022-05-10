// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length    
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = []
    for(let i = 0; i < array.length; i++){
        arrayInvertido.push(array[array.length -1 -i])
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let arrayOrdenado = []
    let minValue = array[0]
    let minValueIndex = null
    let tamanhoArray = array.length
    while(arrayOrdenado.length < tamanhoArray){ 
        for (let i = 0; i < array.length;  i++){
            if(array[i] <= minValue){
                minValue = array[i]
                minValueIndex = i
            }
        }
        arrayOrdenado.push(minValue)
        array.splice(minValueIndex, 1)
        minValue = array[0]    
    }
    return arrayOrdenado    
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    arrayPares = []
    for(let numeros of array)
        if(numeros % 2 === 0){
            arrayPares.push(numeros)
        }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayParesElevados = array.filter((numero) => numero % 2 === 0).map((numero) => numero * numero)
    return  arrayParesElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maxValue = array[0]
        for (numeros of array){
            if(numeros > maxValue){
                maxValue = numeros    
            }
        }
    return maxValue
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let array = []
    if(num1 > num2){
        array[0] = num1
        array[1] = num2    
    } else {
        array[0] = num2
        array[1] = num1  
    }
    let objeto = {
        maiorNumero : array[0],
        maiorDivisivelPorMenor : array[0] % array[1] === 0,
        diferenca : array[0] - array[1] 
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    primeirosPares = []
    for(let i = 0; i < n; i++){
        primeirosPares.push(i*2)
    }
    return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    classificacao = ""
    if(ladoA === ladoB && ladoB === ladoC){
        classificacao = "Equilátero"
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC && classificacao != "Equilátero"){
        classificacao = "Isósceles"   
    }
    else {
        classificacao = "Escaleno"
    }
    return classificacao
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    console.log("Antes do sort", array)
    array.sort((a,b) => a-b)
    let retorno = []
    retorno.push(array[array.length - 2])
    retorno.push(array[1])
    return retorno
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let elenco = ""
    for(atores of filme.atores){
        elenco += atores
        elenco += ", "
    }
    elenco = elenco.slice(0, elenco.length - 2)
    elenco += "."
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${elenco}`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        ...pessoa,
        nome : "ANÔNIMO"
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}