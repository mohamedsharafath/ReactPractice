import React,{useState} from 'react'

export default function Box(props) {
    const [on,ison]=useState(props.on)
    const style = 
    {
        backgroundColor : props.on ? "red" : "transparent",
    }
   
  return (
    <div>
            <div style={style}  className='b' onClick={() => props.toggle(props.id)} >
                <center style={{marginTop:"35px"}}>Box {props.id}</center>
            </div>
    </div>
  )
}
