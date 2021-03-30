
import './App.css';
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetailContainer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (

   <BrowserRouter  className="App">
          <header className="App-header">
    <NavBar/>
      </header>
    <Switch>
      <Route exact path="/">
      <Home/>
    
      </Route>
      <Route exact path="/category/:categoryId"> 
        <ItemListContainer/>
      </Route>
      
      <Route exact path="/item/:itemId/">
      <ItemDetailContainer/>
      </Route>

    
     
    </Switch>
    
     </BrowserRouter>
   
  );

}

export default App;

