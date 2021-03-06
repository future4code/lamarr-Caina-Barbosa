import React, { useState } from 'react';
import Post from './components/Post/Post';
import './style.css'



function App() {
  
  const [arrayPost, setArrayPost] = useState([
    {
    nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150"
    },
    {
    nomeUsuario: "Tony",
    fotoUsuario: "https://i1.sndcdn.com/artworks-000650391184-3o209u-t500x500.jpg",
    fotoPost: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5502557042001/26f66d10-88fd-4e76-a8de-5988f872bc90/288cfe99-0b96-42ca-9177-6b39fe55ad1d/1280x720/match/image.jpg"
    },
    {
    nomeUsuario:'Luiz Inácio',
    fotoUsuario:'https://pbs.twimg.com/profile_images/1518543225933512705/T4r0T3SE_400x400.jpg',
    fotoPost:'https://i1.sndcdn.com/artworks-000232693634-bambr5-t500x500.jpg'
    }
])
  const [inputNome, setInputNome] = useState("");
  const [inputFotoUser, setFotoUser] = useState("");
  const [inputFoto, setFoto] = useState("");


  const handleInputNome = (e) => {
    setInputNome(e.target.value)  
  }

  const handleInputFotoUser = (e) => {
    setFotoUser(e.target.value)  
  }

  const handleInputFoto = (e) => {
    setFoto(e.target.value)  
  }

  const aoEnviarFoto = () => {
    setArrayPost([...arrayPost, {nomeUsuario: inputNome, fotoUsuario: inputFotoUser, fotoPost: inputFoto}])
    setFoto("")
    setFotoUser("")
    setInputNome("")
  }

  const dadosPostMapeados = arrayPost.map((valor, index) => { 
    return <Post 
    nomeUsuario = {valor.nomeUsuario}
    fotoUsuario = {valor.fotoUsuario}
    fotoPost = {valor.fotoPost}
    key = {index}
    />
    })
  
  return (
    <div className='MainContainer'>
      <label>Nome do Usuário</label>
      <input value = {inputNome} onChange = {handleInputNome}></input>
      <label>Foto do Usuário</label>
      <input value = {inputFotoUser} onChange = {handleInputFotoUser}></input>
      <label>Foto</label>
      <input value = {inputFoto} onChange = {handleInputFoto}></input>
      <button onClick = {aoEnviarFoto} >Enviar Post</button>
      {dadosPostMapeados}
      {console.log(arrayPost)}
    </div>
  )

}


export default App;
