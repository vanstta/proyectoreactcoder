
import './App.css';
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
    <NavBar/>
      </header>
     <div>
       <Home/>
     <ItemListContainer/>
     </div>
     <div>
   <ItemDetailContainer/>
  
     </div>
    
    </div>
  );

}

export default App;

