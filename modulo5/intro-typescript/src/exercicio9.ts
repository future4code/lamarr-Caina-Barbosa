const userInput = require("readline-sync")

function validateLabenu ():boolean{
    let age:number = userInput.question("Qual e a sua idade?")
    let highschool:string = userInput.question("Vc completou o ensino medio? y/n")
    let availableHours:number = userInput.question("Quantas horas vc tem disponivel por semana para o curso?")
    let courseType:string = userInput.question("O seu curso sera integral ou noturno?")

    if(courseType === "integral"){
        return age > 18 && highschool === "y" && availableHours >= 40
    }
    if(courseType === "noturno"){
        return age > 18 && highschool === "y" && availableHours >= 20
    }  
}

console.log(validateLabenu())