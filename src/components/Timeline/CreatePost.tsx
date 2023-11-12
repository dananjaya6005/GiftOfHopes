import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
  'https://pjqbnzerwqygskkretxd.supabase.co',

  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcWJuemVyd3F5Z3Nra3JldHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NzQzNzYsImV4cCI6MjAxNTI1MDM3Nn0.tCOsaglHK0BVL689wrFKvQIVat88jhKow-yMsURlJSE'
  );

export default function CreatePost() {

const [title, setTitle] = useState('');
const [writter_name, setWritter_name] = useState('');
const [discription, setDiscription] = useState('');
const [reacts, setReacts] = useState(0);
const [createDate, setCreateDate] = useState('');
const [type,setType] = useState('');



useEffect(() => { 
  const nowdate = new Date().toISOString().slice(0,10); 
  setCreateDate(nowdate);
},[]);

const handleSubmit = async () => {
  const { data, error } = await supabase
    .from('Timeline')
    .insert([{ title, writter_name, discription, reacts, createDate,type }])
  console.log(data, error)

};


  return (
    <div>
      <h1>Timeline</h1>
      <div>
        <input type="text" placeholder="Title" onChange={(event)=>{setTitle(event.target.value)}} />
        <input type="text" placeholder="Writter Name" onChange={(event)=>{setWritter_name(event.target.value)}} />
        <input type="text" placeholder="Discription" onChange={(event)=>{setDiscription(event.target.value)}} />
        <input type="text" placeholder="Reacts" onChange={(event)=>{setReacts(parseInt(event.target.value))}} />
        <input type="date" value={createDate} placeholder="Create Date" onChange={(event)=>{setCreateDate(event.target.value)}}/>
        
        <select  onChange={(event)=>{setType(event.target.value)}}>
          <option value="Scholarships and Financial Aid">Scholarships and Financial Aid</option>
          <option value="Technology and Equipment">Technology and Equipment</option>
          <option value="Infrastructure Development">Infrastructure Development</option>
          <option value="Specialized Programs">Specialized Programs</option>
          <option value="Educational Materials">Educational Materials</option>
          <option value="Undefined">Undefined</option>
        </select>
        
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
  }
