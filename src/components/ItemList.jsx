import React from 'react'

export default function itemList(props) {
    const {items} = props
  return (
    <div>
        <ul>
            {items.map((item,index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}
