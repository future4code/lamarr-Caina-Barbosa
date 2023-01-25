import { format } from "path";
import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private userTable ='User_Arq'

    public insertUser = async (user: user) => {
        try{
            UserDatabase.connection.initialize()
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
        .into(this.userTable)
        } catch (error:any){
            console.log(error.message)
            throw new Error(error.message)
        } finally{
            console.log('Conexão finalizada')
            UserDatabase.connection.destroy()
        }
    }
    public getUsers = async () : Promise<user[]> => {
        UserDatabase.connection.initialize()
        try{
            const users: user[] = []

            const result = await UserDatabase.connection(this.userTable)
            .select();

            for(let user of result){
                users.push(user);
            }

            return users
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    public deleteUsers = async (id:string) : Promise<void> => {
        UserDatabase.connection.initialize()
        try{
            await UserDatabase.connection(this.userTable)
            .where({id})
            .delete()
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}