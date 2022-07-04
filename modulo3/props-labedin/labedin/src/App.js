import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.imgur.com/R6OE8s6.jpg" 
          nome="Cainã" 
          descricao="Oi, eu sou o Cainã. Atualmente, trabalho como Agente de Suporte L1 na Trilogy/ESW Capital. Meus interesses profissionais vão de programação full-stack a SysAdmin/DevOps."
        />
        
        <CardPequeno
          icon = "https://cdn-icons-png.flaticon.com/512/1782/1782765.png"
          addressType = "Email"
          address = "caina.perotti@gmail.com"        
        />

        <CardPequeno
          icon = "https://i.pinimg.com/originals/88/bc/00/88bc005a6b728cafbf76668607205b25.jpg"
          addressType = "Endereço"
          address = "R. Mal. Deodoro, 630 - Centro, Curitiba - PR, 80010-912 "        
        />

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Curso Web Full-Stack" 
        />
        
        <CardGrande 
          imagem="https://media.glassdoor.com/sqll/5988/trilogy-enterprises-squarelogo-1424350063657.png" 
          nome="Trilogy/ESW Capital" 
          descricao="Suporte ao cliente com um variado leque de enterprise softwares, manipulação de APIs, manutenção de sistemas e Web Hosting." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
