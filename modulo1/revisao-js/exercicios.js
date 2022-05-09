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
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

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