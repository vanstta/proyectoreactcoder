import React from 'react'


export default function ItemDetail({ item }) {
    
    return <>
    <div 
    className="containerDetail">
        
            <img className="imgDetail" src={item?.imgURL} alt=""/>
            <h2 className="titDetail">{item?.titulo}</h2>
            <p>{item?.descripcion}</p>
            <p className="precio_producto">${item?.precio}</p>
            <p> Stock: {item?.stock} </p>
            <p>Disponibilidad: {item?.disponibilidad}</p>
            
            <button className="agregar">Agregar al carrito</button>
    
            </div>
            
        
  </>;
   
 
  }