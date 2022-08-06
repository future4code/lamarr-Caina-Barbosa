import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Profile } from './components/profile';
import { Matches } from './components/matches';
import './App.css';
import { FooterMatches, Header } from './components/style';

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
      <Matches/>
      <button onClick = {switchScreen} > Me mostre mais perfis! </button>
      </div>
    )
  }else {
    return (
      <div className="App">
        <Header>astroMatch</Header>
        {curProfile}
        <FooterMatches onClick = {switchScreen}>Clique Aqui Pra Ver Seus Matches</FooterMatches>    
      </div>
      
    );
  }
}

export default App;
