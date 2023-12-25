import React,{useState} from 'react'
import Imgg1 from './logo192.png'
import Img2 from './logo512.png'
export default function ImageToggle() {
const [Img1,SetImg1]=useState(true);
const HandleClick = () =>{
    SetImg1(!Img1);
};

  return (
    <div onClick={HandleClick} style={{cursor:'pointer'}}>
        {Img1 ?(
            // <img src='D:\COMPUTER SCIENCE\REACT\tutorial\public\logo192.png' alt='IMAGE1'></img>
            <img src={Imgg1} alt='IMAGE1'></img>
        ):
        (
            // <img src='D:\COMPUTER SCIENCE\REACT\tutorial\public\logo512.png' alt='IMAGE2'></img>
            <img src={Img2} alt='IMAGE2'></img>
        )
            
        }
    </div>
  )
}
