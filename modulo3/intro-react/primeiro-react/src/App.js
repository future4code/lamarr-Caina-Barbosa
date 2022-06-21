import fotoPerfil from './imagens/perfil.jpeg'
import './App.css';

function App() {
  function mensagem(){
    alert("Já que você apertou do mesmo jeito, boa noite!");
  }
  return (
    <div className="App">
        <h1>Bem vindo, meu nome é Cainã!</h1>
        <img className="img-logo" src={fotoPerfil} alt="Foto Perfil" />
        <p>Este é o meu primeiro site React.</p>
        <button onClick={mensagem}>Não aperte este botão!</button>
    </div>
  );
}

export default App;
