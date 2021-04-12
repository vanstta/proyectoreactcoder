
import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import data from './data'


export default function ItemDetailContainer() {
    const [item, setItem] = useState([])
    
    const {itemId} = useParams()

    useEffect(() => {
    const promesa = new Promise((resolve) =>
    
    setTimeout(() => {

        resolve (data.find((item) => item.id === parseInt(itemId)));
    }, 2000)
    );
    promesa.then((item) => {
    setItem(item);
    });
    },);

    return (
        <div>

            <ItemDetail item={item} />
        </div>
    );
    
}