
import './App.css';
import {NavBar} from "./components/NavBar/index";
import {Home} from "./components/Home/index";
import {Item}from "./components/Item/index"
import ItemListContainer from './components/ItemListContainer/index';
import ItemDetailContainer from './components/ItemDetailContainer/index';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Cart} from "./components/Cart/index"
import {CartProvider} from "./components/CartContext/index"



function App() {
  return (
    
   <BrowserRouter  className="App">
     <CartProvider>
          <header className="App-header">
    <NavBar/>
      </header>
    <Switch>
      <Route exact path="/">
      <Home/>
    
      </Route>
      <Route  path="/productos"> 
        <ItemListContainer/>
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
    </CartProvider>
     </BrowserRouter>

  );

}

export default App;

