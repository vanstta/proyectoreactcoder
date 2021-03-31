
import './App.css';
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";
import {Item}from "./components/Item"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Cart} from "./components/Cart"


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
      <Route  path="/category/:categoryId"> 
        <ItemListContainer/>
      </Route>
      
      <Route  path="/item/:itemId/">
      <ItemDetailContainer/>
      </Route>
      <Route  path="/Item/:id">
      <Item/>
      </Route>
      <Route  path="/Cart">
      <Cart/>
      </Route>
    </Switch>

     </BrowserRouter>
   
  );

}

export default App;

