type Consulta = {
    nome:string,
    idade:number,
    dataDaConsulta:string
}

let consultas : Consulta[] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

function sortAppointment (arr : Consulta[]) : Consulta[] {
    arr.sort((a,b) => (a.nome > b.nome) ? 1 : -1)
    return arr
}

console.log(sortAppointment(consultas))