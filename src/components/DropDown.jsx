import { useState } from "react"
import React from 'react'

export default function DropDown() {
    const[message,setmessage]=useState("");
    const[opt,setopt]=useState('')
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const HandleOptChange = (e) =>{
        const val=e.target.value;
        setopt(val);
        setmessage(val);
    }

  return (
    <div>
        <form action="">
            <label htmlFor="">
                Select an Option:
                <select value={opt} onChange={HandleOptChange} >
                    <option value="">Select an option</option>
                    {options.map((option,index) =>(
                        <option key={index}>{option}</option>
                    ))}
                </select>
            </label>
        </form>
        <p>{message}</p>
    </div>
  )
}
