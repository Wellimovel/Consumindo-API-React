import {Header} from '../../components/Header';
import background from '../../assets/background.png';
import "./styles.css";

function App() {
  return (
    <div className="App">
    <Header/>
    <div classname="conteudo">
      <img src={background} className="background" alt="background app"></img>
      <div className="info">




      <div>
      <input name="usuario" placeholder="@username"/>
        <button>
          Buscas
        </button>
        </div>



        <div className="perfil" >
          <img src = "https://avatars.githubusercontent.com/u/121137348?s=400&u=307bd8a783772c47f85ba688d640452759d6ce67&v=4" className="profile"></img>
        



        <div>
          <h3>Wellingtron</h3>
          <span>@wellimovel</span>
          <p>descrição</p>
        </div>
        </div>



<hr/>

      </div>
        
      </div>
      </div>
   
  );
}

export default App;
