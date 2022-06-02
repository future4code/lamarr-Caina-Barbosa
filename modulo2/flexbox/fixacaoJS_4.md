`ˋˋ
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  function ehIgual (numero) {
   return numero === numeroEscolhido;
  }
  numOcorrencias = (arrayDeNumeros.filter(ehIgual)).length;
  mensagem = "";
  if (numOcorrencias > 0) {
    mensagem = `O número ${numeroEscolhido} aparece ${numOcorrencias}x`;
  }
  else {
    mensagem = "Número não encontrado"
  }
  return mensagem
  
}
`ˋˋ