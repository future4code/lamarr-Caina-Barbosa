console.log("Boas vindas ao jogo de Blackjack!")

//Esta primeira função é o core mais básico do jogo - determina se você vai jogar ou não, e se vai querer continuar jogando.
//Utilizei uma recursão (invocando a função dentro dela mesma) pra poder testar mais rápido, sem ter que dar F5. 
//Nesse caso, no final de cada rodada, após imprimir os vencedores, você será convidado a jogar novamente, podendo responder sim ou não.

function startGame() { 
   if(confirm("Quer iniciar uma nova rodada?")){
      startRound()
      startGame()
   } else {
      alert("O jogo acabou 😞")
   }
}

//Essa função é a mais complexa, e carrega todo o funcionamento do jogo. 

function startRound() {
   let cards = drawCards()
   let playerPoints = cards[0][0].valor + cards[0][1].valor
   let cpuPoints = cards[1][0].valor + cards [1][1].valor      //Temos aqui o sorteio inicial de duas cartas pros jogadores, e a pontuação é calculada
   if(playerPoints === 22 || cpuPoints === 22){
      cards = drawCards()
      playerPoints = cards[0][0].valor + cards[0][1].valor     
      cpuPoints = cards[1][0].valor + cards [1][1].valor
   }                                                           //uma checagem pra ver se não foram tirado dois ases. Caso positivo, uma nova mão é sorteada, e o calculo da pontuação é atualizado.
   let playerCards = [cards[0][0].texto, cards[0][1].texto]
   let cpuCards = [cards[1][0].texto, cards[1][1].texto]       //Criam-se arrays de strings, importantes para todas as impressões realizadas pelo jogo.
   while(playerPoints < 21){
      if(confirm("Suas cartas são " + playerCards + "\n" + "A carta revelada do computador é " + cpuCards[0] + "\n" + "Deseja comprar mais uma carta?")){
         let extraCard = comprarCarta()
         playerPoints += extraCard.valor
         playerCards.push(extraCard.texto)
      } else {
         break;
      }
   }                                                           //Esse loop é responsável por oferecer ao jogador a possibilidade de comprar cartas enquanto sua pontuação não atinge/ultrapassa o máximo
   if(playerPoints <= 21){
      while(cpuPoints < playerPoints){
         let extraCard = comprarCarta()
         cpuPoints += extraCard.valor
         cpuCards.push(extraCard.texto)
      }                                                        //Enquanto esse loop vai regular as jogadas da CPU.   
   }
   showWinner(playerCards, cpuCards, defineResult(playerPoints, cpuPoints), playerPoints, cpuPoints) //Por fim, temos a invocação de duas funções, responsáveis por definir o vencedor e imprimir a mensagem de finalização de uma rodada.
}



function drawCards () {
   let playerCards = [comprarCarta(), comprarCarta()]
   let cpuCards = [comprarCarta(), comprarCarta()]
   return [playerCards, cpuCards]
}                                                              //Função extremamente simples, retorna um array de arrays de objetos, contendo as cartas iniciais dos jogadores.

function defineResult (playerPoints, cpuPoints) {
   let result
   if (playerPoints > cpuPoints && playerPoints < 22 || cpuPoints > 21) {
      result = "usuário"
   }
   else if(cpuPoints > playerPoints || playerPoints > 21) {
      result = "computador"
   }
   else {
      result = "Empate!"
   }
   return result                                               //Define o ganhador, ou se empatou. Não tem muito sgredo. É importante o resultado ser passado em string pois será reutilizado na função abaixo pra simplificar o código usando template strings.   
}

function showWinner (playerCards, cpuCards, result, playerPoints, cpuPoints) {
   let resultMessage = ""
   resultMessage += (`Usuário - cartas: ${playerCards} - pontuação ${playerPoints}`)
   resultMessage += "\n"
   resultMessage += (`Computador - cartas: ${cpuCards} - pontuação ${cpuPoints}`)
   resultMessage += "\n"
   if(result === "usuário" || result === "computador"){
      resultMessage += (`O ${result} ganhou!`)
   } else {
      resultMessage += ("Empate!")
   }
   alert(resultMessage)  
}                                                              //Como a mensagem final é passada em alert, essa função tem como objetivo a construção de uma string. A última linha da string sempre será uma das 3 possibilidades = Vitória player, vitória CPU ou empate.

startGame();                                                   //Finalmente, invocamos a função que dá início ao jogo! 