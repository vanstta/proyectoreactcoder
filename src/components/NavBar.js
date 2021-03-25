// import logo from '.././logo.JPG';
import logofb from './images/logofb.png'
import logoig from './images/logoig.png'
import logopt from './images/logopt.png'


import React from "react";
export const NavBar = () => {
    return <div>
         <nav className="nav">
         <a className="logo" href="index.html">Caleón</a>
            <ul>
                <li>
                    <a href="">inicio</a>
                </li>
                <li>
                    <a href="">productos</a>
                </li>
                <li>
                    <a href="">nosotros</a>
                </li>
                <li>
                    <a href="">galeria</a>
                </li>
                <li>
                    <a href="">contacto</a>
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
