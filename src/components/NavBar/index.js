
import CartWidget from "../CartWidget";
import {Link, link, NavLink} from 'react-router-dom';


import React from "react";
export const NavBar = () => {
    return <div>
         <nav className="nav">
         <NavLink to={`/`}><h2 className="logo">CALEÓN</h2></NavLink>
            <ul>
                <li>
                   <NavLink to={`/`}>inicio</NavLink>
                </li>
                <li>
                <NavLink to={`#`}>
                <div className="dropdown">
  <Link to={`#`} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    productos
  </Link>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <Link to={`/category/home-deco`} className="dropdown-item "> home-deco</Link>
    <Link to={`/category/desk`} className="dropdown-item" >desk</Link>
    <Link to={`/category/tech`} className="dropdown-item" >tech</Link>
    <Link to={`/productos`} className="dropdown-item" >ver todo</Link>
  </div>
</div></NavLink>
                </li>
                <li>
                <NavLink to={`/`}>nosotros</NavLink>
                </li>
                <li>
                <NavLink to={`/`}>galería</NavLink>
                </li>
                <li>
                <NavLink to={`/`}>contacto</NavLink>
                </li>
            </ul>
            <div className="redes">
                <Link to="/cart" > <CartWidget/></Link>
               
            </div>
            </nav>
       
</div>
}
