import React, {useState} from "react"
import './App.css';
import { Register } from "./components/register";
import axios from 'axios'



function App() {
  
  const [inputEmail, setInputEmail] = useState("")
  const [inputName, setInputName] = useState("")
  
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
      }).catch((error) => {
        alert(`Algo deu errado... ${inputName} não foi cadastrado`)
      })

  }

  
  
  return (
    <div className="App">
      <Register email = {inputEmail} name = {inputName} handleName = {handleInputName} handleEmail = {handleInputEmail} submitData = {submitData}/>
    </div>
  );
}

export default App;
