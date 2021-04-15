import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

 const Cart = () => {

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)


    return (
        <div>
            {
            !cart.length ?   
            <h2>Todavía no agregaste ningún producto Caleón <Link to='/productos'>Elegí tu preferido! </Link> </h2>
            : (<>
                {cart.map(cartItem => (
                <div key={cartItem.item.id} >
                    <div> titulo:  {cartItem.item.titulo}  </div>
                    <div> cantidad: {cartItem.quantity} </div>
                    <button onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
                </div>)
                )}
                <div>Total:{totalPrecio}</div> 
                <button onClick={clear}>borrar todo</button>         
                </>
            )
            }

        </div>
    )
}
export default Cart