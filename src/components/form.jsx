import React from 'react'
import { useState } from 'react'

export default function Form() {
    const[formdata,setformdata]=useState({
        name:"",
        email:"",
        isfriendly:false,
        employment:""
    })
    function handlechange (event) {
        const{name,type,value,checked} = event.target;
        setformdata(prevformdata => {
            return {
                ...prevformdata,
                [name] : type==="checkbox"? checked :  value
            }
        })
    }
    console.log(formdata.employment);
  return (
    <div>
        <form>
            <input 
            type="text"
            value={formdata.name}
            onChange={handlechange}
            placeholder='Name'
            name='name'
            />
             <input 
             type="email"
             value={formdata.email}
             onChange={handlechange}
             name='email'
             placeholder='Email'
            />
            <input
            type="checkbox"
            id="isfriendly"
           
            checked={formdata.isfriendly} 
            onChange={handlechange}
            name="isfriendly"
            />
            <label htmlFor="isfriendly">check out me</label>
            <input 
            type="radio"
            id='umemployed'
            name="employment"
            value="unemployed"
            checked={formdata.employment === "unemployed"}
            onChange={handlechange}
            />
             <label htmlFor="unemployed">Unemployed</label>
            <input 
            type="radio"
            id='parttime'
            name="employment"
            value="parttime"
            checked={formdata.employment === "parttime"}
            onChange={handlechange}
            />
             <label htmlFor="parttime">Part-Time</label>
            <input 
            type="radio"
            id='fulltime'
            name="employment"
            value="fulltime"
            checked={formdata.employment === "fulltime"}
            onChange={handlechange}
             />
             <label htmlFor="fulltime">Full-Time</label>
        </form>
    </div>
  )
}
