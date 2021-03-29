
import React, { useEffect, useState } from "react";
import { Contador } from "./Contador";
import {ItemList} from "./ItemList"

export default function ItemListContainer() {
  const [items, setItems] = useState([])
 
  useEffect(()=>{

    const prom = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
          { id:1, titulo:"Cuadro", precio:1000, imgURL:"https://github.com/vanstta/Caleon/blob/master/images/cuadro.jpg?raw=true" },
          { id:2, titulo:"Cuaderno", precio:800, imgURL:"https://github.com/vanstta/Caleon/blob/master/images/cuaderno.JPG?raw=true"},
          { id:3, titulo:"Mesa", precio:4000, imgURL:"https://github.com/vanstta/Caleon/blob/master/images/mesa.JPG?raw=true" }
        ])
      },2000)
    })

    prom.then((resultado)=>{
      setItems(resultado)
    })

  })

  return (
    <div className="container ">

      <ItemList items={items}/>
      <Contador initial={1} stock = {7} onAdd = {() => {console.log('se agregó un item')}}/>
    </div>
  );
 

}

// DESCRIPCIONES PARA USAR EN DETAIL
// , descripcion:"Ilustración en vinilo ploteada sobre fibrofácil de 5mm, laminado mate y marco de acrílico importado - Formato 21x29,7cm / 60x90 cm - Disponible en rojo, amarillo, cyan y magenta."

// , descripcion:"Mesa ratona circular con superficie de acrílico con estructura metálica - Protección contra rayos UV - Formato 60x45cm. -  Disponible en rojo, amarillo, cyan y megenta."