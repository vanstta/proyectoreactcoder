import React from "react";
import mesa from '../img/mesa.JPG';
import cuadro from '../img/cuadro.jpg';
import cuaderno from '../img/cuaderno.JPG'
import {Contador} from './Contador'



export const ItemListContainer = () => {
    return <div>
        <div>
    <Contador initial={1} stock = {5} onAdd = {() => {console.log('se agregó un item')}}/>
  </div>


  <div className ="stock row row-cols-1 row-cols-md-3">
        <div className="col mb-4">
      <div className="card-group">
  <div className="card producto">
    <img src={mesa} className="card-img-top" alt="mesa"/>
    <div className="card-body">
      <h5 className="card-title">Mesa</h5>
      <p className="card-text">Mesa ratona circular con superficie de acrílico con estructura metálica - Protección contra rayos UV - Formato 60x45cm. -  Disponible en rojo, amarillo, cyan y megenta.</p>
      <h4 className="precio_producto"><strong>$2500</strong></h4>
      <button className="agregar"data-id="">Agregar al carrito</button>
    </div>
  </div>
  </div>
  </div>
  <div className="col mb-4">
  <div className="card producto">
    <img src={cuaderno} className="card-img-top" alt="cuaderno"/>
    <div className="card-body">
      <h5 className="card-title">Cuaderno</h5>
      <p className="card-text">Tapa dura - Formato A6 (10,5x14,8cm) - Tapa dura con laminado mate - 80 hojas booclel lisas de 80 gr + una hoja lisa de color + un sobre - Disponible en rojo, amarillo, cyan y magenta.</p>
      <h4 className="precio_producto"><strong>$1200</strong></h4>
      <button className="agregar"data-id="">Agregar al carrito</button>
    </div>
  </div>
  </div>
  <div className="col mb-4">
  <div className="card producto">
    <img src={cuadro} className="card-img-top" alt="cuadro"/>
    <div className="card-body">
      <h5 className="card-title">Cuadro</h5>
      <p className="card-text">Ilustración en vinilo ploteada sobre fibrofácil de 5mm, laminado mate y marco de acrílico importado - Formato 21x29,7cm / 60x90 cm - Disponible en rojo, amarillo, cyan y magenta.</p>
      <h4 className="precio_producto"><strong>$1000</strong></h4>
      <button className="agregar"data-id="">Agregar al carrito</button>
    </div>
  </div>
  </div>

</div>
</div>


}


