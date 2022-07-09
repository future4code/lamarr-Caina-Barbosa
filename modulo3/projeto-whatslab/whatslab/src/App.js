
import React, { useState } from 'react';
import './App.css';
import {SidebarStyle, BodyStyle, CenterBox, MessageBox, Footer, MessagesBody} from './components/style.js'
import { Header } from './components/header.js'
import { Mensagem } from './components/mensagem.js'
import  icon from './img/icon.png'

function App() {

  const [arrayMensagens, setArrayMensagens] = useState([]);
  const [inputMensagem, setInputMensagem] = useState ("")
  const [inputRemetente, setInputRemetente] = useState ("")


  const handleInputRemetente = (e) =>  {
      setInputRemetente(e.target.value)
  }

  const handleInputMensagem = (e) =>  {
    setInputMensagem(e.target.value)
}

  const enviarMensagem = () => {
    setArrayMensagens([...arrayMensagens, <Mensagem remetente = {inputRemetente} texto = {inputMensagem}/>])
    setInputMensagem("")
    setInputRemetente("")
  }

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      enviarMensagem();
    }
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
            <input  onChange = {handleInputRemetente} value = {inputRemetente} style = {{width:"15vw"}} ></input>
            <label>Msg: </label>
            <input onKeyDown={handleEnter} onChange = {handleInputMensagem} value = {inputMensagem} style = {{width:"35vw"}}></input>
            <button onClick = {enviarMensagem} >Enviar Mensagem</button>
          </MessageBox>
        </CenterBox>
        <SidebarStyle/>
      </BodyStyle>
      <Footer>Copyright © 2022 Cainã Perotti Barbosa All rights reserved.</Footer>
    </div>
  );
}

export default App;
