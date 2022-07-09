
import React from 'react';
import './App.css';
import {SidebarStyle, BodyStyle, CenterBox, MessageBox, Footer} from './components/style.js'
import { Header } from './components/header.js'
import  icon from './img/icon.png'


function App() {
  return (
    <div className="App">
      <Header icon = {icon}/>      
      <BodyStyle>
        <SidebarStyle/>
        <CenterBox>
          <MessageBox>
            <label>Remetente: </label>
            <input style = {{width:"15vw"}}></input>
            <label>Msg: </label>
            <input style = {{width:"35vw"}}></input>
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
