
import React, { useEffect, useState } from "react";
import {ItemList} from "./ItemList"
import {getFirestore} from '../firebase/index'

export default function ItemListContainer() {
  const [items, setItems] = useState([])
    
    useEffect(() => {
  const db = getFirestore ()
  const itemsCollection= db.collection('items')
  const prom = itemsCollection.get()
        prom.then((snapshot) => {
           if (snapshot.size>0) {
             console.log('Consulta de datos')
             console.log(snapshot.docs.map(doc => doc.data()))
             
             setItems(snapshot.docs.map(doc => doc.data()))
          
           }
        })
    },[])
  return (
    <div className="container ">

      <ItemList items={items}/>
    
    </div>
  );
 

}


