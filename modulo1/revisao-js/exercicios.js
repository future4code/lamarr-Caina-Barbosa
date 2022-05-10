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
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
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