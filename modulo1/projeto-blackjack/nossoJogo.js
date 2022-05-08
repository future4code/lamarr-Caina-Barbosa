//Esse bloco de código foi reutilizado e adaptado para a realização do desafio. 
//Para comentários específicos sobre cada função e o seu funcionamento, olhar desafio.js
console.log("Boas vindas ao jogo de Blackjack!") 

function startGame() { 
   if(confirm("Quer iniciar uma nova rodada?")){
      startRound()
   } else {
      endGame()
   }
}

function endGame() {
   return console.log("O jogo acabou")
} 

function startRound() {
   const cards = drawCards()
   let playerPoints = cards[0][0].valor + cards[0][1].valor
   let cpuPoints = cards[1][0].valor + cards [1][1].valor
   showWinner(cards, defineResult(playerPoints, cpuPoints), playerPoints, cpuPoints)
   startGame()
}

function drawCards() {
   let playerCards = [comprarCarta(), comprarCarta()]
   let cpuCards = [comprarCarta(), comprarCarta()]
   return [playerCards, cpuCards]
}


function defineResult (playerPoints, cpuPoints) {
   let result
   if (playerPoints > cpuPoints) {
      result = "usuário"
   }
   else if(cpuPoints > playerPoints) {
      result = "computador"
   }
   else {
      result = "Empate!"
   }
   return result
}

function showWinner (cards, result,playerPoints, cpuPoints) {
   console.log(`Usuário - cartas: ${cards[0][0].texto} ${cards[0][1].texto} - pontuação ${playerPoints}`)
   console.log(`Computador - cartas: ${cards[1][0].texto} ${cards[1][1].texto} - pontuação ${cpuPoints}`)
   if(result === "usuário" || result === "computador"){
      console.log(`O ${result} ganhou!`)
   } else {
      console.log("Empate!")
   }  
}

startGame();