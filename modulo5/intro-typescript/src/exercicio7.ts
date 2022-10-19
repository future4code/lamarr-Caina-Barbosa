function callback (value:string):string {
    if(value === "A"){
        return "U"
    }
    if(value === "T" ){    
        return "A"  
    }
    if(value === "C"){
        return "G"
    }
    if(value === "G"){
        return "C"
    }
}

function dnaToRna (dna:string):string{
    let arr: Array<string> = dna.split("");
    return arr.map(callback).join("");
}

console.log(dnaToRna("ATTGCTGCGCATTAACGACGCGTA"))