//A. Um erro de que não se pode associar um number a uma variável do tipo string.

//let minhaString : string = 2

//B. Usando Union Types.

let meuNumero : number | string  = 2
meuNumero = "oi"

//C. 

const pessoa1 : { nome: string, idade: number, corFavorita: string} = {
    nome: "Luiz Inácio",
    idade: 76,
    corFavorita: "Vermelho"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: coresFavoritas
}

//D. 

enum coresFavoritas {
    RED = "Vermelho",
    GREEN = "Verde",
    BLUE = "Azul"
}

