
import React, { useEffect, useState } from "react";
import { Contador } from "./Contador";
import {ItemList} from "./ItemList"

export default function ItemListContainer() {
  const [items, setItems] = useState([])
 
  useEffect(()=>{

    const prom = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
          { id:1, titulo:"Cuadro", precio:999.99, imgURL:"https://github.com/vanstta/Caleon/blob/master/images/cuadro.jpg?raw=true" },
          { id:2, titulo:"Cuaderno", precio:799.99, imgURL:"https://github.com/vanstta/Caleon/blob/master/images/cuaderno.JPG?raw=true"},
          { id:3, titulo:"Mesa", precio:3999.99, imgURL:"https://github.com/vanstta/Caleon/blob/master/images/mesa.JPG?raw=true" },
          {id: 4, titulo: "Espejo", precio: 2199.99, imgURL:"https://github.com/vanstta/Caleon/blob/master/images/espejo.JPG?raw=true"},
          {id: 5, titulo: "Lámpara", precio: 2599.99, imgURL: "https://github.com/vanstta/Caleon/blob/master/images/lampara.JPG?raw=true"},
          {id: 6, titulo: "Silla", precio: 3799.99, imgURL: "https://github.com/vanstta/Caleon/blob/master/images/silla.jpg?raw=true"}
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


