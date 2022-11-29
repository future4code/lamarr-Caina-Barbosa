import express from "express"

import cors from 'cors'

import { afazeres } from "./variables"
import { Afazer } from "./types"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Servidor tá servindo http://localhost:3003");
});

//Exercício 1

app.get("/ping", (req, res) => {
    res.send("PONG!")
})

//Exercício 4

app.get("/afazeres/status", (req, res) => {
    let completed = req.query.completed === "yes" ? 1 : 0
    if (completed) {
        let arrayAfazeres = afazeres.filter((afazer) => afazer.completed)
        res.send(arrayAfazeres)
    } else {
        let arrayAfazeres = afazeres.filter((afazer) => !afazer.completed)
        res.send(arrayAfazeres)
    }
})

//Exercício 5

app.post("/afazeres", (req, res) => {
    let newToDo : Afazer = req.body.toDo
    afazeres.push(newToDo)
    res.send(afazeres)
})

//Exercício 6

app.post("/afazeres/:id", (req, res) => {
    let toDoId = Number(req.params.id) - 1
    afazeres[toDoId].completed = !afazeres[toDoId].completed
    res.send(afazeres[toDoId])
})

//Exercício 7

app.delete("/afazeres/:id", (req, res) => {
    let toDoId = Number(req.params.id)
    for (let i = 0; i < afazeres.length; i++) {
        if(afazeres[i].id === toDoId){
            afazeres.splice(i,1)
        }
    }
    res.send(afazeres)
})

//Exercício 8

app.get("/afazeres", (req, res) => {
    let userId = Number(req.query.userId)
    res.send(afazeres.filter((afazer) => afazer.userId === userId))
})
