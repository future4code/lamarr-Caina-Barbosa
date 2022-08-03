import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Profile } from './components/profile';
import './App.css';

function App() {
  const [control, setControl] = useState(0)
  const [profileObject, setProfileObject] = useState([])

  useEffect(() => {profileCall()}, [control])
  

  const gptc_url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caina-perotti-lamarr/person"

  const gptc_get = axios.get(gptc_url)

  function profileCall () { 
    gptc_get.then((response) => {
    setProfileObject([response.data])
    console.log(profileObject)
  }).catch((error) => {
    alert("Algo deu errado... Erro:", error.data)
  })
  }

  const curProfile = profileObject.map(callbackProfile)

  function callbackProfile (object, index) {
    return <Profile key = {index} profile = {object.profile} setControl = {setControl} control = {control}/>

  }
  

  return (
    <div className="App">
      {curProfile}
  
    </div>
    
  );
}

export default App;
