import {Request, Response} from "express";
import {userBusiness}  from '../business/userBusiness'

export class UserController {
    public createUser  = async (
        req: Request, 
        res: Response
    ) => {
        try {
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
    
            }
            await new userBusiness().createUser(input)
            res.status(201).send({message: "Usuário criado com sucesso"})
        }
        catch (error:any){
            console.log(error.message)
            res.status(400).send({error: error.message})
        }
    }
    public getUsers = async (
        req: Request,
        res: Response
    ) => {
        try {
            const users = await new userBusiness().getUsers()
            res.status(200).send({users: users})
        }catch (error:any){
            res.status(400).send({error: error.message})
        }
    }
    public deleteUser = async (
        req: Request, 
        res: Response
    )  => {
        try {
            const input = {
                id: req.params.id
            }
            await new userBusiness().deleteUsers(input)
            res.status(200).send(`Usuário com ID: ${input.id} foi deletado`)
        } catch (error:any){
            res.status(400).send({error: error.message})
        }
    } 
}