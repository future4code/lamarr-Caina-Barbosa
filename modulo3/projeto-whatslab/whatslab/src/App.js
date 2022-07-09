
import React, { useState } from 'react';
import './App.css';
import {SidebarStyle, BodyStyle, CenterBox, MessageBox, Footer, MessagesBody, MessageDisplay, Message, Sender, UserMessageDisplay} from './components/style.js'
import { Header } from './components/header.js'
import  icon from './img/icon.png'


export function App() {
  const [dataArray, setDataArray] = useState([])
  const [inputMensagem, setInputMensagem] = useState ("")
  const [inputRemetente, setInputRemetente] = useState ("")
  const [indexClicado, setIndexClicado] = useState()
  const [clickCount, setClickCount] = useState(0)
  

  const handleInputRemetente = (e) =>  {
      setInputRemetente(e.target.value)
  }

  const handleInputMensagem = (e) =>  {
    setInputMensagem(e.target.value)
}

  const enviarMensagemv2 = () => {
    setDataArray([...dataArray, { sender : inputRemetente, message : inputMensagem}])
    setInputMensagem("")
    setInputRemetente("")
  }
  

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      enviarMensagemv2();
    }
  }

  const handleDivClick = (event) => {
    if (clickCount === 0) {
      setClickCount(clickCount + 1)
    }
    if (clickCount === 1 && indexClicado === event.target.getAttribute("data-key")){
      const arrayModificado = [...dataArray];
      arrayModificado.splice(indexClicado, 1)
      setDataArray(arrayModificado) 
    }
    setIndexClicado(event.target.getAttribute("data-key"));
}

  const callback = (valor,index) => {
    if(valor.sender === "eu" || valor.sender === "Eu" || valor.sender === "EU") {
      return <UserMessageDisplay key = {index} data-key = {index} onClick={handleDivClick} >
      <Message data-key = {index} onClick={handleDivClick} >{valor.message}</Message>
    </UserMessageDisplay>   
    }
    else {
    return <MessageDisplay key = {index} data-key = {index} onClick={handleDivClick} >
    <Sender data-key = {index} onClick={handleDivClick}>{valor.sender}:</Sender>
    <Message data-key = {index} onClick={handleDivClick} >{valor.message}</Message>
  </MessageDisplay>
    }  
  }

  const listaDeMensagens = dataArray.map(callback)    

  

  

  return (
    <div className="App">
      <Header icon = {icon}/>      
      <BodyStyle>
        <SidebarStyle/>
        <CenterBox>
          <MessagesBody>
            {listaDeMensagens}
          </MessagesBody>
          <MessageBox>
            <label>Remetente: </label>
            <input  onChange = {handleInputRemetente} value = {inputRemetente} style = {{width:"15vw"}} ></input>
            <label>Msg: </label>
            <input onKeyDown={handleEnter} onChange = {handleInputMensagem} value = {inputMensagem} style = {{width:"35vw"}}></input>
            <button onClick = {enviarMensagemv2} >Enviar Mensagem</button>
          </MessageBox>
        </CenterBox>
        <SidebarStyle/>
      </BodyStyle>
      <Footer>Copyright © 2022 Cainã Perotti Barbosa All rights reserved.</Footer>
    </div>
  );
}

export default App;
