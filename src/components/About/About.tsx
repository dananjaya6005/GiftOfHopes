import React from "react";
import { useState } from "react";
import CreatePost from "../Timeline/CreatePost";
import ShowPost from "../Timeline/ShowPost";

export default function About() {
const [test,setTest]=useState("");



  return (
   <div>
    <div>
      <h1>About</h1>
      <h3>{test}</h3>
      <input type="text" onChange={(event)=>{setTest(event.target.value)}} />
    <button onClick={()=>setTest("test")}>Click</button>
    <CreatePost/>
    <br />
    <ShowPost/>
    </div>
    
    </div>
  )
}
