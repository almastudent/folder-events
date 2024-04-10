'use client'

import { useState } from "react"


export default function Home() {
  const[count,setCount]=useState(0)
  const handlebuttonclick=()=>{
    const updatedvolume=count + 1
    setCount(updatedvolume)
  }
 return(
  <>
   
   
    <h1 className=" flex justify-center items-center font-extrabold text-blue-400">volume{count}</h1>
    <button className="flex justify-center items-center font-extrabold text-green-400" onClick={handlebuttonclick}>level up</button>
  </>
 )
}




