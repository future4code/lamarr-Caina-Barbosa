import { Product } from "../models/Product";
import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    
    protected static TABLE_PRODUCTS = "Labe_Products"

    public static async getProducts() {
        return ProductDatabase.connection(ProductDatabase.TABLE_PRODUCTS).select()

    }

    public static async CreateProducts(newProduct:Product) {
        return ProductDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert(newProduct)
    }

    public static async getProductById(user:User) {
        return ProductDatabase.connection(ProductDatabase.TABLE_PRODUCTS).where({ id: `${user}`})
    }

}

