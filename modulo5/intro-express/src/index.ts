import express from "express"

import cors from 'cors'

import { users, posts } from "./variables"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Roda roda, servidor, roda roda corocondô! http://localhost:3003");
});

//Exercício 1

app.get("/", (req, res) => {          
    res.send("Alô alô marciano, aqui quem fala é do Express")
})

//Exercício 2 e 3
// Ver arquivos types.ts e variables.ts

//Exercício 4

app.get("/users", (req, res) => {          
    res.send(users)
})

//Exercício 8 - Ordem trocada com o exercício 7 por motivos de rotas e etc

app.get("/posts", (req, res) => {          
    let userId = Number(req.query.userId)
    let arrayPosts = posts.filter((post) => post.userId === userId)
    res.send(arrayPosts)
})

//Exercício 7

app.get("/posts", (req, res) => {          
    res.send(posts)
})

//Exercício 9

app.delete("/posts/:id", (req, res) => {          
    let postId = Number(req.params.id)
    let deletedPost = posts[postId-1]
    console.log(deletedPost)
    posts.splice(postId-1, 1)
    res.send(posts)
})

//Exercício 10

app.delete("/users/:id", (req, res) => {          
    let userId = Number(req.params.id)
    let deletedUser = users[userId-1]
    console.log(deletedUser)
    users.splice(userId-1, 1)
    res.send(users)
})


