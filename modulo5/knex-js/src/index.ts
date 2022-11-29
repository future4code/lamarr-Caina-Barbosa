import express from "express"

import cors from 'cors'

import knex from "knex"

import dotenv from "dotenv";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}
});

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

import { Request, Response } from "express"

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
    }



// app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id

//         console.log(await getActorById(id))

//         res.end()
//     } catch (error:any) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })

//Exercício 1.b

const getActorByName = async (name: string): Promise<any> => {
    const response = await connection.raw(`
        SELECT * FROM Actor WHERE name LIKE '%${name}%'
    `)
    return response[0][0]
}


app.get("/users/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name

        console.log(await getActorByName(name))

        res.end()
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

//Exercício 1.c

const countByGender = async (gender:any): Promise<any> => {
    const response = await connection.raw(`
        SELECT COUNT(*) as contagem  FROM Actor WHERE gender = '${gender}'
    `)
    return response[0][0].contagem
}

// Exercício 3.b

app.get("/users", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender

        console.log(await countByGender(gender))

        res.end()
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

//Exercício 2.a

const updateSalary = async (
    salary: number,
    id : number
    ): Promise<void> => {
        await connection("Actor")
        .update({salary: salary})
        .where ("id", id)
    }


// Exercício 3.a 

app.patch("/salary", async (req: Request, res: Response) => {
    try {
        const salary = req.body.salary
        const id = req.body.id
    
        await updateSalary(salary, id)
    
        res.end()
    } catch (error:any) {
            console.log(error.message)
            res.status(500).send("Unexpected error")
        }
})

// Exercício 2.b

const deleteActor = async (id : number): Promise<void> => {
        await connection("Actor")
        .where("id", id)
        .del()
    }


//Exercício 3.b

app.delete("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
    
        await deleteActor(id)
    
        res.end()
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
        }
    })

// Exercício 2.c 

const genderAverage = async (gender : string): Promise<void> => {
    const result = await connection("Actor")
    .avg('salary as average')
    .where("gender", gender)

    return result[0].average
}

app.get("/avgsalary/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender

        console.log(await genderAverage(gender))

        res.end()
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})