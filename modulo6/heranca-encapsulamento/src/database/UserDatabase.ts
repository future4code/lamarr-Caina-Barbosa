import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    
    protected static TABLE_USERS = "Labe_Users"

    public static async getAllUsers() {
        return UserDatabase.connection(UserDatabase.TABLE_USERS).select()

    }

    public static async CreateUsers(newUser:User) {
        return UserDatabase.connection(UserDatabase.TABLE_USERS).insert(newUser)
    }

    public static async getUserById(user:User) {
        return UserDatabase.connection(UserDatabase.TABLE_USERS).where({ id: `${user}`})
    }

}

