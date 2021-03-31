
import React, { useEffect, useState } from "react";
import {ItemList} from "./ItemList"

export default function ItemListContainer() {
  const [items, setItems] = useState([])
 
  useEffect(()=>{

    const prom = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
          { id:1, titulo:"Cuadro", precio:999.99, imgURL:"https://github.com/vanstta/Caleon/blob/master/images/cuadro.jpg?raw=true"},
          { id:2, titulo:"Cuaderno", precio:799.99, imgURL:"https://github.com/vanstta/Caleon/blob/master/images/cuaderno.JPG?raw=true"},
          {id: 3, titulo:"Lapicero", precio: 479.99,imgURL: "https://github.com/vanstta/Caleon/blob/master/images/silla.jpg?raw=true"},
          {id: 4, titulo: "Agenda Pantone", precio: 979.99, imgURL: "https://github.com/vanstta/proyectoreactcoder/blob/master/src/components/images/agpantam.jpg?raw=true"},
          { id:5, titulo:"Mesa", precio:3999.99, imgURL:"https://github.com/vanstta/Caleon/blob/master/images/mesa.JPG?raw=true",  },
          {id: 6, titulo: "Espejo", precio: 2199.99, imgURL:"https://github.com/vanstta/Caleon/blob/master/images/espejo.JPG?raw=true", },
          {id: 7, titulo: "Lámpara", precio: 2599.99, imgURL: "https://github.com/vanstta/Caleon/blob/master/images/lampara.JPG?raw=true", },
          {id: 8, titulo: "Silla", precio: 3799.99, imgURL: "https://github.com/vanstta/Caleon/blob/master/images/silla.jpg?raw=true" },
          {id: 9, titulo: "Teclado mecánico", precio: 14299.99, imgURL: "https://github.com/vanstta/proyectoreactcoder/blob/master/src/components/images/tecladomec.jpg?raw=true"},
          {id: 10, titulo: "Usb hub", precio: 569.99, imgURL: "https://github.com/vanstta/proyectoreactcoder/blob/master/src/components/images/usb.jpg?raw=true"},
          {id: 11, titulo: "Mouse pad", precio: 389.99, imgURL: "https://github.com/vanstta/proyectoreactcoder/blob/master/src/components/images/touch%20pad.jpg?raw=true"},
          {id: 12, titulo: "Soporte para laptop", precio: 1979.99, imgURL: "https://github.com/vanstta/proyectoreactcoder/blob/master/src/components/images/lapstop.jpg?raw=true"}
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
    
    </div>
  );
 

}


