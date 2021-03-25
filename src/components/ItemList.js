
import React from 'react'
import { Item } from './Item'

export const ItemList = ({items=[]}) => {


    return (
        <div className="row row-cols-1 row-cols-md-3">
            {items.map(item => <Item item={item}/> )}
        </div>
    )
}