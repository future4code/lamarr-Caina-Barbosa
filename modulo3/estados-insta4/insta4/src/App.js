import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
const arrayPost = [
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
]
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
    {dadosPostMapeados}
    {console.log(arrayPost)}
  </div>
)

}


export default App;
