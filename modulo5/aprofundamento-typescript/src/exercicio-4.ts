//B. Rodar no bash o comando tsc exercicio-4.ts
//C. Criar um tsconfig.json com tsc --init e dps rodar o TSC pra transpilar tudo.
//D. Usar no tsconfig.json um parametro chamado "files" e listar num array os arquivos .ts a serem transpilados. Dps rodar tsc -p seguido do caminho para a pasta contendo o arquivo tsconfig.json. Ou apenas o tsc se vc já estiver na pasta com o tsconfig.json. 


type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}