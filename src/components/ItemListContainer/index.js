import React, { useEffect, useState } from "react";
import {ItemList} from "../ItemList"
import {getFirestore} from '../../firebase'
import { useParams } from "react-router-dom";

export default function ItemListContainer() {

  const [items, setItems] = useState([])
  const {categoryId} = useParams()

    useEffect(() => {
  const db = getFirestore ()



  const itemsCollection= db.collection('items')
  const fltrado = categoryId? itemsCollection.where('category', '==', categoryId) : itemsCollection

  const prom = fltrado.get()
        prom.then((snapshot) => {
           if (snapshot.size>0) {
             console.log('Consulta de datos')
             console.log(snapshot.docs.map(doc => doc.data()))
             console.log(snapshot.docs.map(doc => doc.id))
             setItems(snapshot.docs.map(doc => {
              return {id:doc.id,  ...doc.data()}
            }
             ))
        }
      })
    },[categoryId])
  return ( 
    <div className="container ">

      <ItemList items={items}/>
    
    </div>
  );
 

}
