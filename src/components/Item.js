
import React from 'react';
import {Link} from 'react-router-dom';
export const Item = ({ item }) => {
  return (<div >

    <div className="col mb-4">
    <div className="card producto">
    <img src={item.imgURL} alt="" style={{width: "100%"}} />
    <div className="card-body">
    <h5 className="card-title">{item.titulo}</h5>
    <p className="card-text"></p>
    <h4 className="precio_producto"><strong>${item.precio}</strong></h4>
    <p>{item.descripcion}</p>
    <Link to={`/detalle`}>  <button>Ver detalle</button></Link>
    <button className="agregar"data-id="">Agregar al carrito</button>
    </div>
    </div>
    </div>
    </div>
    
  );
};
