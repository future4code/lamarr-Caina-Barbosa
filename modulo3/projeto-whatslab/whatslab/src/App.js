
import React, { useState } from 'react';
import './App.css';
import {SidebarStyle, BodyStyle, CenterBox, MessageBox, Footer, MessagesBody} from './components/style.js'
import { Header } from './components/header.js'
import { Mensagem } from './components/mensagem.js'
import  icon from './img/icon.png'

function App() {

  const [arrayMensagens, setArrayMensagens] = useState([<Mensagem remetente = "João" texto = "Vamo dar um rolê?" />]);
  const [inputMensagem, setInputMensagem] = useState ("")
  const [inputRemetente, setInputRemetente] = useState ("")


  const handleInputRemetente = (e) =>  {
      setInputRemetente(e.target.value)
      return console.log(inputRemetente)

  }

  

  return (
    <div className="App">
      <Header icon = {icon}/>      
      <BodyStyle>
        <SidebarStyle/>
        <CenterBox>
          <MessagesBody>
          {arrayMensagens}
          </MessagesBody>
          <MessageBox>
            <label>Remetente: </label>
            <input   value = {inputRemetente} style = {{width:"15vw"}} ></input>
            <label>Msg: </label>
            <input value = {inputMensagem} style = {{width:"35vw"}}></input>
            <button>Enviar Mensagem</button>
          </MessageBox>
        </CenterBox>
        <SidebarStyle/>
      </BodyStyle>
      <Footer>Copyright © 2022 Cainã Perotti Barbosa All rights reserved.</Footer>
    </div>
  );
}

export default App;
