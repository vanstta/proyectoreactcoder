
import './App.css';
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";
import {ItemListContainer} from "./components/ItemListContainer";


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
  
  <ItemListContainer/>
  
     </div>
    
    </div>
  );

}

export default App;

