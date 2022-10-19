function ex6 (n1:number, n2:number):void {
    console.log(n1+n2)
    console.log(n1-n2)
    console.log(n1*n2)
    const maiorNum = (n1>n2) ?  "O primeiro número" : "O segundo número"
    console.log(`${maiorNum} é o maior número`)
}
ex6(12,15)