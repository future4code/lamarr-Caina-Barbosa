import { UserDatabase } from "../data/UserDatabase"

export class userBusiness {
    public createUser = async (input:any) => {
        const userDatabase = new UserDatabase()

        try{
            const {name, email, password} = input
            if (!name || !email || !password){
                throw new Error("Os campos de email, password e name não foram preenchidos corretamente")
            }

            const id: string = Date.now().toString()

            await userDatabase.insertUser({
                id, 
                name,
                email,
                password
            })
        }
        catch(error: any){
            console.log(error.message)
            throw new Error(error.message)
        }
    }
    public getUsers = async () => {
        return await new UserDatabase().getUsers()
    }
    public deleteUsers = async (input:{id:string}) => {
        const userDatabase = new UserDatabase()
        try{
            if(!input.id){
                throw new Error("O parametro ID não está presente na sua requisição")
            }

            return await new UserDatabase().deleteUsers(input.id)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}