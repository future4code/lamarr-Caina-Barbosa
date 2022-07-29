import React, {useState, useEffect} from "react"
import './App.css';
import { Register } from "./components/register";
import { Userlist } from "./components/userlist.js";
import axios from 'axios'
import { render } from "@testing-library/react";



function App() {
  
  const [inputEmail, setInputEmail] = useState("")
  const [inputName, setInputName] = useState("")
  const [userArray, setUserArray] = useState([])
  const [atualizador, setAtualizador] = useState("")
  

  useEffect(() => {axios.get(g_url, {
    headers: {
      Authorization: 'caina-perotti-lamarr'
    }
  }).then((response) => {
    setUserArray(response.data)
    console.log(userArray)
  }).catch((error) => {
    console.log(error.message)
  })}, [atualizador])

  function handleInputEmail (e) {
    setInputEmail(e.target.value)
  }
  
  function handleInputName (e) {
    setInputName(e.target.value)
  }

  function submitData () {
    
    const s_url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    
    const s_body = {
      name: inputName,
      email: inputEmail
    }

    axios.post(s_url, s_body, {
      headers: {
        Authorization: 'caina-perotti-lamarr'
      }
      }).then((response) => {
        alert(`Deu certo! Um  usuário com o nome ${inputName} e o email ${inputEmail} foi cadastrado`)
        setAtualizador(atualizador+1)
        setInputName("")
        setInputEmail("")
      }).catch((error) => {
        alert(`Algo deu errado... ${inputName} não foi cadastrado`)
      })

  }


  const handler = function (e) {
    const deleteId = e.target.getAttribute("id")
    console.log(deleteId)
    const d_url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${deleteId}`
    axios.delete(d_url, {
      headers: {
        Authorization: 'caina-perotti-lamarr'
      }
      }).then((response) => {
        alert(`O usuário foi deletado`)
        setAtualizador(atualizador+1)
      }).catch((error) => {
        alert(`Algo deu errado... o usuário não foi deletado`)
      })
  }







  const renderizaLista = userArray.map(callback)

  function callback (objeto, index) {
    return <Userlist name = {objeto.name} id = {objeto.id} key = {index} handler = {handler}></Userlist>

  }

  const g_url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  

  return (
    <div className="App">
      <Register email = {inputEmail} name = {inputName} handleName = {handleInputName} handleEmail = {handleInputEmail} submitData = {submitData}/>
      <h1>Lista de Usuários</h1>
      {renderizaLista}
    </div>
  );
}

export default App;
