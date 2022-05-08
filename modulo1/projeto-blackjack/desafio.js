console.log("Boas vindas ao jogo de Blackjack!")

function startGame() { 
   if(confirm("Quer iniciar uma nova rodada?")){
      startRound()
      startGame()
   } else {
      endGame()
   }
}

function endGame() {
   return alert("O jogo acabou 😞")
} 

function startRound() {
   let cards = drawCards()
   let playerPoints = cards[0][0].valor + cards[0][1].valor
   let cpuPoints = cards[1][0].valor + cards [1][1].valor
   if(playerPoints === 22 || cpuPoints === 22){
      cards = drawCards()
   }
   let playerCards = [cards[0][0].texto, cards[0][1].texto]
   let cpuCards = [cards[1][0].texto, cards[1][1].texto]
   while(playerPoints < 21){
      if(confirm("Suas cartas são " + playerCards + "\n" + "A carta revelada do computador é " + cpuCards[0] + "\n" + "Deseja comprar mais uma carta?")){
         let extraCard = comprarCarta()
         playerPoints += extraCard.valor
         playerCards.push(extraCard.texto)
      } else {
         break;
      }
   }
   if(playerPoints <= 21){
      while(cpuPoints < playerPoints){
         let extraCard = comprarCarta()
         cpuPoints += extraCard.valor
         cpuCards.push(extraCard.texto)
      }
   }
   showWinner(playerCards, cpuCards, defineResult(playerPoints, cpuPoints), playerPoints, cpuPoints)
}



function drawCards () {
   let playerCards = [comprarCarta(), comprarCarta()]
   let cpuCards = [comprarCarta(), comprarCarta()]
   return [playerCards, cpuCards]
}

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
   return result
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
}

startGame();