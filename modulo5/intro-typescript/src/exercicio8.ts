function reverse (s :string):string{
    let reversedString:string = ""
    for(let i:number = 0; i < s.length; i++){
        reversedString += s[s.length - i - 1] 
    }
    return reversedString
}
console.log(reverse("abcd"))