import React,{useState} from 'react'

export default function AddList() {
    const [things,setthings]=useState(["things1","things2"])
    const HandleClick = () => {
        const newthing= `things${things.length +1}`;
        // alert(newthing)
        // setthings(prevstate => [...prevstate,newthing])
        setthings([...things,newthing]);
    };
  return (
    <div>
        <button onClick={HandleClick}>Add Item</button>
        {things.map((thing,key) => {
           return <p>{thing}</p>
        })}
    </div>

  )
}
