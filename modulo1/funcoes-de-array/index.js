//Exercícios de Interpretação de Código

//1.a Vai imprimir cada objeto, seguido de seu índice e do array inteiro, 3 vezes.

//2.a Imprimirá um array com 3 objetos, cada objeto contendo apenas os nomes do array usuarios.

//3.a Imprimirá um array com 2 objetos, Amanda Rangel e Laís Petra. 

//Exercícios de escrita de código

//1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

//1.a

const petNames = pets.map((pet) => pet.nome )
console.log(petNames)

//1.b 

const salsichinhas = pets.filter((pet) => pet.raca === "Salsicha")

console.log(salsichinhas)

//1.c 

const poodlePromo = (pets.filter((pet) => pet.raca === "Poodle")).map((poodle) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}`)

console.log(poodlePromo)

//2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//2.a

const productNames = produtos.map((produto) => produto.nome )
console.log(productNames)

//2.b


const discounted5 = produtos.map((produto) => {
    let produtoComDesconto = {
    nome : produto.nome, preco : produto.preco * 0.95 } 
    return produtoComDesconto }) 

console.log(discounted5)


//2.c

const bebidas = produtos.filter((produto) => produto.categoria === "Bebidas")

//2.d 

const ype = produtos.filter((produto) => produto.nome.includes("Ypê"))
console.log(ype)

//2.e

const compreYpe = produtos.filter((produto) => produto.nome.includes("Ypê")).map((produto) => `Compre ${produto.nome} por ${produto.preco}`)
console.log(compreYpe)


//DESAFIOS

//1

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]


//1.a 

const sortedPokemons = pokemons.map((pokemon) => pokemon.nome).sort()
console.log(sortedPokemons)

//1.b

let typeNoRepeat = []
for (let pokemon of pokemons) {
    let tem = typeNoRepeat.includes(pokemon.tipo)   
    if(!tem) {
        typeNoRepeat.push(pokemon.tipo)
    }
}
console.log(typeNoRepeat)

