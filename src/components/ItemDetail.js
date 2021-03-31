import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Contador} from './Contador'

export default function ItemDetail({ item }) {
    const [count, SetCount] = useState (0)

const addHandler = (contador) => {
    console.log('se agregó un item', contador)
    SetCount(contador)
}


    return <>
    <div 
    className="containerDetail">
             {count} 
            <img className="imgDetail" src={item?.imgURL} alt=""/>
            <h2 className="titDetail">{item?.titulo}</h2>
            <p>{item?.descripcion}</p>
            <p className="precio_producto">${item?.precio}</p>
            <p> Stock: {item?.stock} </p>
            <p>Disponibilidad: {item?.disponibilidad}</p>
             {
               count ==0 ?
                <Contador initial={1} stock = {item?.stock} onAdd = {addHandler}/>
                       :
                      <Link to="/cart"><button className="agregar">Finalizar compra</button>
                      </Link> 
             }

            </div>
            
        
  </>;
   
 
  }