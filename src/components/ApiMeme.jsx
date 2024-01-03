import React,{useEffect,useState} from 'react'


export default function ApiMeme() {
    const[allmeme,setallmeme]=useState([])
    const[memeurl,setmemeurl]=useState("")

    useEffect(() => {
        // const res =await fetch("https://api.imgflip.com/get_memes")
        // const data=await res.json()
        // setallmeme(data.data.memes)
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallmeme(data.data.memes))
    },[])

    const getimg = () =>{
        const randomnumber=Math.floor(Math.random() * allmeme.length)
        const url=allmeme[randomnumber].url
        setmemeurl(url);
    }

  return (
    <div>
        <button onClick={getimg}>Click me</button>
        {/* <p>{memeurl}</p> */}
        <img src={memeurl} alt="" style={{width:400,height:400}} />
    </div>
  )
}
