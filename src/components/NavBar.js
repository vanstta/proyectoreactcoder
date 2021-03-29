// import logo from '.././logo.JPG';
import logofb from './images/logofb.png'
import logoig from './images/logoig.png'
import logopt from './images/logopt.png'
import {CartWidget} from "./CartWidget";
import {link, NavLink} from 'react-router-dom';


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
                <a href="#">  <img src={logofb} className="icon" alt="logo facebook" />
                </a>
                <a href="#">  <img src={logoig} className="icon" alt="logo instagram" />
                </a>
                <a href="#">  <img src={logopt} className="icon" alt="logo pinterest" />
                </a>
               
            </div>
            </nav>
       
</div>


}
