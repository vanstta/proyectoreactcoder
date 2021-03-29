import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";

const getItems = () => { 
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            titulo:"cuaderno",id: 2,
            precio: 800,
           descripcion:"Tapa dura - Formato A6 (10,5x14,8cm) - Tapa dura con laminado mate - 80 hojas booclel lisas de 80 gr + una hoja lisa de color + un sobre - Disponible en rojo, amarillo, cyan y magenta.",
            imgURL:"https://github.com/vanstta/Caleon/blob/master/images/cuaderno.JPG?raw=true", stock: 5,
            disponibilidad: "Inmediata"
        })},2000)
        
    })


}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const {itemId, otroId} = useParams()

    useEffect(() => {
        getItems(itemId).then((res)=> setItem(res))
        return;
    }, [itemId])

    
     return <> {itemId} - {otroId}
     <ItemDetail item={item} /></>
    }

