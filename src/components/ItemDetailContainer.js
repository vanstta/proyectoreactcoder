
import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import {getFirestore} from '../firebase/index'

const getItems = (id) => {  
    const db = getFirestore();
    const itemsCollection = db.collection('items')
    
    const item = itemsCollection.doc(id) 
    return item.get();
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const {itemId, otroId} = useParams()

    useEffect(() => {
        getItems(itemId)
        .then((res)=> {
            console.log('existe?', res.exists);
            if (res.exists){
                setItem({id:res.id, ...res.data()})
            }
        })
        return;
    }, [itemId])


    return <> 
        <div>

            <ItemDetail item={item} />
        </div>
    </>;
    
}