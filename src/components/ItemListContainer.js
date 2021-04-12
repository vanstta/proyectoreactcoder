
import React, { useEffect, useState } from "react";
import {ItemList} from "./ItemList"
import {useParams} from "react-router-dom"
import data from "./data"
export default function ItemListContainer() {
  const [items, setItems] = useState([])
    
    const {categoryId} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                    if (categoryId) {
                        const filter = data.filter((item) => {
                            return item.category.toString() === categoryId;
                        });
                        resolve(filter);
                    } else resolve(data);
            }, 2000);
        });

        promesa.then((resultado) => {
            setItems(resultado)
        })
    })
  return (
    <div className="container ">

      <ItemList items={items}/>
    
    </div>
  );
 

}


