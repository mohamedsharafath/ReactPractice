import React from 'react'
import ItemList from './ItemList';

export default function Item() {
    const myitems = ["momo","jera","kera"];
  return (
    <div>
        <h1>MY LIST ITEMS</h1>
        <ItemList items={myitems}/>
    </div>
  )
}
