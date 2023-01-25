import {app} from "./app"
import { UserController } from './controller/userController'



app.get("/", async function(){
   console.log("endpoint teste")
})

const userController= new UserController();

app.post('/user/create', userController.createUser)
app.get('/users', userController.getUsers)
app.delete('/users/:id', userController.deleteUser)


