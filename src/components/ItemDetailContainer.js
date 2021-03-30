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
        <fragment>

            <ItemDetail item={item} />
        </fragment>
    );
}

// const getItems = () => { 
//     return new Promise((resolve)=>{
//         setTimeout(()=>{resolve({
//             titulo: {item?.titulo},id: 2,
//             precio: 800,
//            descripcion:"Tapa dura - Formato A6 (10,5x14,8cm) - Tapa dura con laminado mate - 80 hojas booclel lisas de 80 gr + una hoja lisa de color + un sobre - Disponible en rojo, amarillo, cyan y magenta.",
//             imgURL:"https://github.com/vanstta/Caleon/blob/master/images/cuaderno.JPG?raw=true", stock: 5,
//             disponibilidad: "Inmediata"
//         })},2000)
        
//     })


// }

// export default function ItemDetailContainer() {
//     const [item, setItem] = useState(null)
//     const {itemId} = useParams([])

//     useEffect(() => {
//         getItems(itemId).then((res)=> setItem(res))
//         return;
//     }, [itemId])

    
//      return <> {itemId}
//      <ItemDetail item={item} /></>
//     }

