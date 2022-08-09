import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Profile } from './components/profile';
import { Matches } from './components/matches';
import './App.css';
import { BackButton, FooterMatches, Header, Warning } from './components/style';
import GlobalStyle from './components/style';

function App() {
  const [control, setControl] = useState(0)
  const [profileObject, setProfileObject] = useState([])
  const [curScreen, setCurScreen] = useState(0)
  
  


  useEffect(() => {profileCall()}, [control])
  

  const gptc_url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caina-perotti-lamarr/person"

  const gptc_get = axios.get(gptc_url)

  function profileCall () { 
    gptc_get.then((response) => {
      setProfileObject([response.data])
    }).catch((error) => {
      alert("Algo deu errado... Erro:", error.data)
    })
  }

  const curProfile = profileObject.map(callbackProfile)

  function callbackProfile (object, index) {
    return <Profile key = {index} profile = {object.profile} setControl = {setControl} control = {control} />

  }

  function switchScreen () {
    setCurScreen(!curScreen)
  }
  
  if(curScreen) {
    return (
      <div>
      <Warning>ESTE SITE NÃO FOI OTIMIZADO PARA DESKTOP. POR FAVOR ACESSAR DE UM MOBILE OU USAR O DEVTOOLS PARA SIMULAR UM APARELHO DE RESOLUÇÃO HORIZONTAL MENOR QUE 500px - RECOMENDADO  IPHONE 12 OU GALAXY S20</Warning>
      <Header>Matches</Header>
      <Matches/>
      <BackButton onClick = {switchScreen} > Me mostre mais perfis! 
      </BackButton>
      </div>
    )
  }else {
    return (
      <div className="App">
        <Warning>ESTE SITE NÃO FOI OTIMIZADO PARA DESKTOP. POR FAVOR ACESSAR DE UM MOBILE OU USAR O DEVTOOLS PARA SIMULAR UM APARELHO DE RESOLUÇÃO HORIZONTAL MENOR QUE 500px - RECOMENDADO  IPHONE 12 OU GALAXY S20</Warning>
        <Header>astroMatch</Header>
        {curProfile}
        <FooterMatches onClick = {switchScreen}>Clique Aqui Pra Ver Seus Matches</FooterMatches>    
      </div>
      
    );
  }
}

export default App;
