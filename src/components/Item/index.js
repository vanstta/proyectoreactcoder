
import React from 'react';
import {Link} from 'react-router-dom';
export const Item = ({ item }) => {
  return (<div >

    <div className="col mb-4">
    <div className="card producto">
    <img className="imgItem" src={item.imgURL} alt=""  />
    <div className="card-body">
    <h5 className="card-title">{item.titulo}</h5>
    <p className="card-text"></p>
    <h4 className="precio_producto"><strong>${item.precio}</strong></h4>
    
    <Link to={`/item/${item.id}`}>  <button className="detalle">Ver detalle</button></Link>
    
    </div>
    </div>
    </div>
    </div>
    
  );
};


