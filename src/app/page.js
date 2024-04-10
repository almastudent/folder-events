'use client'

import { useState } from "react"
import Link from 'next/link';



export default function Home() {

    
  const[count,setCount]=useState(0)
  const handlebuttonclick=()=>{
    const updatedvolume=count + 1
    setCount(updatedvolume)
  }

 return(
  <>
   <div className=" bg-slate-800 text-cyan-200 flex justify-between items-center p-4">
    <h1>Logo Here</h1>
    <ul className=" flex gap-28 items-center">
      <li>Homes</li>
      <li>Service</li>
      <li><Link href='/about'>About</Link></li>
      <li>Sign Up</li>
    </ul>
    </div>
   
    <div className="flex justify-center items-center flex-col">
    <h1 className="  font-extrabold text-blue-400">volume{count}</h1>
    <button className="font-extrabold text-green-400 bg-orange-950 p-3 rounded-xl" onClick={handlebuttonclick}>level up</button>
    </div>
  </>
 )
}




