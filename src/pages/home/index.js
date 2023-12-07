import {Header} from '../../components/Header';
import background from '../../assets/background.png';
import "./styles.css";

function App() {
  return (
    <div className="App">
    <Header/>
    <div classname="conteudo">
      <img src={background} className="background" alt="background app"></img>
      
    </div>
    </div>
  );
}

export default App;
