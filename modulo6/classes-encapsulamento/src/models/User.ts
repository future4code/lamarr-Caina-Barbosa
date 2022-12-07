export class User {
    
    constructor (private id: string, private email: string, private password: string){
        this.id = id;
        this.email = email;
        this.password = password;
    
    }

    public getUserId():string {
        return this.id
    }

    public getEmail():string{
        return this.email
    }

    public getPassword():string{
        return this.password
    }
}