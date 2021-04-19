import React, { useEffect, useState } from "react";
import {ItemList} from "./ItemList"
import {getFirestore} from '../firebase/index'
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [items, setItems] = useState([])
  const {categoryId} = useParams()
    useEffect(() => {
  const db = getFirestore ()

  const itemsCollection= db.collection('items')

  const prom = itemsCollection.get()
        prom.then((snaptshot) => {
           if (snaptshot.size>0) {
             console.log('Consulta de datos')
             console.log(snaptshot.docs.map(doc => doc.data()))
             console.log(snaptshot.docs.map(doc => doc.id))
             setItems(snaptshot.docs.map(doc => {
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
