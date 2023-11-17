

import {useState,useEffect } from "react";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
    "https://pjqbnzerwqygskkretxd.supabase.co",
  
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcWJuemVyd3F5Z3Nra3JldHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NzQzNzYsImV4cCI6MjAxNTI1MDM3Nn0.tCOsaglHK0BVL689wrFKvQIVat88jhKow-yMsURlJSE"
  );


const Admin =()=>{

    const [paymentInfo , setPaymentInfo] = useState([]);
    const [formated_amount,setFormated_amount] = useState(0);

    useEffect(()=>{
        GetPaymentInfo();
    }
    ,[]);

    function Localdate(timestamp : any ){
        const timestampNew = 1700160772; // replace with your timestamp
        const date = new Date(timestampNew * 1000); // JavaScript uses milliseconds
        console.log(date);
        const localDateStr = date.toLocaleString();

        return localDateStr;

    }

    async function GetPaymentInfo() {
        const { data } = await supabase.from("Payment_info").select();
        setPaymentInfo(data);
        console.log(data);
      }
    return(
        <div>
           {
             paymentInfo && Array.isArray(paymentInfo) && 
             paymentInfo.map((item,index)=>{
                return(
                    <>
                    <div>{item.id}</div>
                    <div>{item.donation_id}</div>
                    <div>{item.full_name}</div>
                    <div>{item.email}</div>
                    <div>{(item.amount/100).toFixed(2)}</div>
                    <div>{Localdate(item.timestamp)}</div>
                    
                    </>
                )
             })
            }
            
        </div>
    )
}
export default Admin;