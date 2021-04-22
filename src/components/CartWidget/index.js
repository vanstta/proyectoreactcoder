
import React, { useContext } from "react";
import {CartContext} from "../CartContext"
import cart from "./cart.png"


export default function CartWidget() {
  const {totalItems} = useContext(CartContext)
 
  return <>
   <i className="fas fa-shopping-cart"> <img let  src={cart}></img></i>
  
          {totalItems? <i> {totalItems}</i>: null } 
  </>
  
}