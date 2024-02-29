import logo from './logo.svg';
import './App.css';
import {Container} from './Components/Container'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <h1>Exemplo de Estilização de componentes</h1>
          <Container/>
        </div>
      </header>
      
    </div>
  );
}

export default App;
