import React, { useContext, useState} from 'react'
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import firebase from 'firebase/app'
import {getFirestore} from '../firebase'


export const Cart = () => {

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

  
    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    const generarOrden = (e)=>{
        const db = getFirestore();

        const ordersCol = db.collection('orders');
        const batch = db.batch();
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = { name, phone, email}
        orden.total = totalPrecio;
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const titulo = cartItem.item.titulo;
            const precio = cartItem.item.precio * cartItem.quantity;

            return {id, titulo, precio}   
        })
      

        ordersCol.add(orden)
        .then((IdDocumento)=>{
            console.log(IdDocumento.id)
        })
        .catch( err => {
            console.log(err);
        })
        .finally(()=>{
            console.log('termino la promesa')
        })

        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cart.map(i=> i.item.id)
        )

        

        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref,{
                    stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).quantity
                })
            })

            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })

        console.log(orden)
    }

    const noItemComp = <h2>No agregaste ningún producto Caleón <Link to='/productos'>Elegí tu preferido! </Link> </h2>;

    if(totalItems === 0) return noItemComp

    return (
        <div>
             
           <ul style={{listStyle:'none', padding:0}}>
           {cart.map(cartItem => (
                <div key={cartItem.item.id} >
                    <div> titulo:  {cartItem.item.titulo}  </div>
                    <div> cantidad: {cartItem.quantity} </div>
                    <button onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
                </div>)
                )}

           </ul>
            <div>Total: {totalPrecio}</div> 
            <button onClick={clear}>Borrar todo</button>  

<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
<input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={generarOrden}>Finalizar Compra</button>       


        </div>
    );
}