import {Header} from '../../components/Header';
import background from '../../assets/background.png';

function App() {
  return (
    <div className="App">
    <Header/>
    <div classname="conteudo">
      <img src={background} classname="background" alt="background app"></img>
    </div>
    </div>
  );
}

export default App;
