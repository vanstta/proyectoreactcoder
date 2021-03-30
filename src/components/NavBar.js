// import logo from '.././logo.JPG';
import logofb from './images/logofb.png'
import logoig from './images/logoig.png'
import logopt from './images/logopt.png'
import CartWidget from "./CartWidget";
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
                <NavLink to={`/category/:id`}>productos</NavLink>
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
                <Link to="/category/:categoryId" > <CartWidget/></Link>
               
            </div>
            </nav>
       
</div>


}
