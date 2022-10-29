import { User, Post } from "./types"


// Exercício 3

export let users : User[] = [
    {id : 1, name: "Luiz Inácio", phone: "1313", email : "lula@pt.com", website: "lula.com.br"},
    {id : 2, name: "Dilma Rouseff", phone: "132014", email : "dilma@pt.com", website: "dilma.com.br/"},
    {id: 3, name: "Sofia Manzano", phone: "2121", email : "sofia@pcb.com", website: "pcb.org.br"}
]

// Exercício 5

// Acho melhor criar fora do array de usuários. Não apenas por seguir o exemplo do JSONPlaceholder, mas as relações com os usuários podem ser feitas através da propriedade userId.
// A tipagem fica mais fácil também.

export let posts : Post[] = [
    {id : 1, title : "Amanhã é 13", body : "Para que a tolerância volte a ser a norma, e não a exceção", userId: 1},
    {id : 2, title : "Dilmaravilha", body : "Nós gostamos de você", userId: 2},
    {id : 3, title : "Trabalhores do Brasil, uni-vos", body : "Союз нерушимый республик свободны", userId: 3},
    {id : 4, title : "Discurso de Posse", body : "Esse post só será liberado no dia primeiro de Janeiro de 2023", userId: 1},
]



