
import React, {useState} from 'react'


export function Contador({stock, initial, onAdd}) {
  const [count, setCount] = useState (initial);
  const decrementar = () => {
    return setCount(count -1)
    
  }
  const incrementar = () => {
    setCount(count +1)

  }

  const agregar = () => {
    onAdd(count)
  }
  return <div>
    <button disabled={count<=0} onClick={decrementar}>-</button>
    <div>{count}</div>
    <button disabled={count>=stock} onClick={incrementar}>+</button>
    <button disabled={count>=stock || count<=0} onClick= {agregar}>Agregar producto</button>
   
  </div>
}