import React ,{useState}from 'react'
import Box from './Box';
export default function Boxcolor() {
    const boxarr =[
        {
            id:1,
            on: true
        },
        {
            id:2,
            on: false
        },
        {
            id:3,
            on: true
        },
        {
            id:4,
            on: false
        },
        {
            id:5,
            on: true
        },
        {
            id:6,
            on: false
        },
    ]
    const [isdark,setisdark]=useState(true);
    const[boxes,setboxes] = useState(boxarr);
    // const styled = {
    //     backgroundColor : isdark ? "black" : "grey",
    //     height: "100px",
    //     width: "100px",
    //     margin: "5px",
    //     display: "inline-block",
    //     borderRadius: "5px",
    //     border : "2px solid ",
    //     color: isdark ? "white" : "black",
        
    // }
    const toggle = (id) =>{
        setboxes( 
            boxes.map(box =>(
                box.id===id  ? {...box, on : !box.on} : box
            ))
            
         ) 
    }
  return (
    <div style={{display:'inline-flex',flexDirection:"column"}}>
        <button onClick={() => setisdark(!isdark)}>{isdark ? "Light mode" : "Dark mode"}</button>
        {boxes.map((box) => (
            <Box  id={box.id} on={box.on} toggle={toggle}/>
        ))}

    </div>
  )
}
