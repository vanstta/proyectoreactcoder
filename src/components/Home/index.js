import a from '../images/a.JPG'
import b from '../images/b.JPG'
import c from '../images/c.JPG'
import d from '../images/d.JPG'
import e from '../images/e.JPG'
import f from '../images/f.JPG'
import g from '../images/g.JPG'
import h from '../images/h.JPG'
import i from '../images/i.JPG'

import React from "react";

export const Home = () => {
   return <div>
            <div className="portada">
            <h1 className="titulo_index">Caleón</h1>
        <p className="p-index">estudio creativo</p>
            </div>
            <div id="nosotros" className="nos">
       <p className="p-nos"> Somos un <strong>estudio cretivo </strong>impulsado por nuestro amor al diseño, en cada una de sus ramas. Nos mueve la <strong>materialidad, el color, el contraste y el impacto visual</strong>. Buscamos representar tu escencia a través de nuestros productos, resignificando tus espacios, aportándoles esa dósis justa de color que lo cambia todo. Dejanos ser tu esquina amarilla, tu pared magenta tu terraza roja o tu columna cyan. Dejanos ser tu <strong>espacio Caleón</strong>. </p>
    </div>
    <div className="tit_galeria">
    
    <h2>galeria</h2>
    </div>
    <div className="galeria" id="galeria">
<div className="foto">
    <div className="contenedor-modal">
    <img src={a}/>
    <div className="overlay">

        <h3> Creative Studio </h3>
    </div>
    </div>

</div>

<div className="foto">
    <div className="contenedor-modal">
        <img src={b}/>
    <div className="overlay">

        <h3> Imagination </h3>
    </div>
    </div>

</div>
<div className="foto">
    <div className="contenedor-modal">
        <img src={c}/>
    <div className="overlay">

        <h3>New Project </h3>
    </div>
    </div>

</div>
<div className="foto">
    <div className="contenedor-modal">
        <img src={d}/>
    <div className="overlay">

        <h3> Brainstorming </h3>
    </div>
    </div>

</div>
<div className="foto">
    <div className="contenedor-modal">
        <img src={e}/>
    <div className="overlay">

        <h3> Expressive </h3>
    </div>
    </div>

</div>
<div className="foto">
    <div className="contenedor-modal">
        <img src={f}/>
    <div className="overlay">

        <h3> Workaholic </h3>
    </div>
    </div>

</div>
<div className="foto">
    <div className="contenedor-modal">
        <img src={g}/>
    <div className="overlay">

        <h3> Instrospection </h3>
    </div>
    </div>

</div>
<div className="foto">
    <div className="contenedor-modal">
        <img src={h}/>
    <div className="overlay">

        <h3> Precision </h3>
    </div>
    </div>

</div>
<div className="foto">
    <div className="contenedor-modal">
        <img src={i}/>
    <div className="overlay">

        <h3> Obsession </h3>
    </div>
    </div>

</div>

    </div>
   </div>
}

export default Home