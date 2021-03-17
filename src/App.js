
import './App.css';
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";
import {Contador} from "./components/Contador";
import {MostrarContador} from "./components/MostrarContador"
function App() {
  return (
    <div className="App">
      <header className="App-header">
    <NavBar/>
      </header>
     <div>
       <Home/>
     
     </div>
     <div>
  <Contador/>
  <MostrarContador/>
     </div>
    
    </div>
  );

}

export default App;

