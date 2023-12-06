//@ts-nocheck
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import adminLogo from "../../Images/Collab-bro.png";
import "./admin.css";
import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import { Alert } from "antd";
import { time } from "console";

const supabase = createClient(
  "https://pjqbnzerwqygskkretxd.supabase.co",

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcWJuemVyd3F5Z3Nra3JldHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NzQzNzYsImV4cCI6MjAxNTI1MDM3Nn0.tCOsaglHK0BVL689wrFKvQIVat88jhKow-yMsURlJSE"
);

const Admin = () => {
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [post, setPost] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [showDeleteMsg, setShowDeleteMsg] = useState(false);


  useEffect(() => {
    GetPaymentInfo();
    GetPost();
  }, [refreshFlag]);

  

  function Localdate(timestamp: any) {
    const timestampNew = timestamp; 
    const date = new Date(timestampNew * 1000); 
  
    const localDateStr = date.toLocaleDateString();

    return localDateStr;
  }

  async function GetPost(){
    const { data } = await supabase.from("Timeline").select();
    setPost(data);
    console.log(data);
  }

  async function GetPaymentInfo() {
    const { data } = await supabase.from("Payment_info").select();
    setPaymentInfo(data);
    console.log(data);
  }

  async function DeletePost(id: any) {
    const { error } = await supabase
    .from('Timeline')
    .delete()
    .eq('id', id);

    setShowDeleteMsg(true);

    setTimeout(()=>{
      setShowDeleteMsg(false);
    },3000)

  setRefreshFlag(!refreshFlag);
    console.log(error);
  
  }

 function filterByEmail(text:any){
    const formattedSearchTerm = text.toLowerCase();
    const filteredData = paymentInfo.filter((item) => item.email.includes(formattedSearchTerm));
   
    setPaymentInfo(filteredData);

    if(text.length === 0){
      GetPaymentInfo();
    }
 }

 
 function filterByDonationID(number: string){

  const filteredData = paymentInfo.filter((item) => item.donation_id.toString().includes(number));
 
  setPaymentInfo(filteredData);

  if(number.length === 0){
    GetPaymentInfo();
  }
}




  return (
    <div>
      <div className="adminLogoandrest">
        <img src={adminLogo} className="adminLogo" alt="adminLogo" />
        <div className="adminTitle">
          <h1 className="adminTitleText">
            You Logged in with Admin Privileges !
          </h1>
          <p className="adminTitleTextDescription">
            You can view the complete payment history in the table below. Each
            row represents a transaction with details such as ID, Donation ID,
            Full Name, Email, Amount, and date.
          </p>

          <p className="adminTitleTextDescription">
            If new payments are made while you’re on this page, click the
            ‘Refresh’ button to update the table with the latest transactions.
          </p>

          <p className="adminTitleTextDescription">
            To delete a Donation event, click the <a href="">Database</a> and
            naviagte to the Donation table. Click the ‘Delete’ button next to
            the event you want to delete.
          </p>
        </div>
      </div>
      <div style={{textAlign:'center',justifySelf:'center'}}>Payment History Table </div>


      <div >
        <input onChange={(e)=>{filterByEmail(e.target.value)}}
        style={{
         width : '300px',
         color:'black',
          padding:'10px',
          backgroundColor:'white',
          borderRadius:'5px',
          marginTop:'10px',
          marginRight:'10px',
          marginBottom:'10px'

         }}
        type="text" placeholder="search by email"/>



<input onChange={(e)=>{filterByDonationID(e.target.value)}}
        style={{
         width : '300px',
         color:'black',
          padding:'10px',
          backgroundColor:'white',
          borderRadius:'5px',
          marginTop:'10px',
          marginBottom:'10px'

         }}
        type="text" placeholder="search by Donation ID"/>
      </div>


      <div className="tableView">
        
        <table className="tablePaymentInfo">
          
          <thead className="headatable">
            <tr className="hadingAlltitle">
              <th className="headingTitleIndividual">Payment ID</th>
              <th className="headingTitleIndividual">Event ID</th>
              <th className="headingTitleIndividual">Full Name</th>
              <th className="headingTitleIndividual">Email</th>
              <th className="headingTitleIndividual">Amount</th>
              <th className="headingTitleIndividual">Date</th>
            </tr>
          </thead>
          <tbody className="databody">
            {paymentInfo &&
              Array.isArray(paymentInfo) &&
              paymentInfo.map((item, index) => {
                return (
                  <tr key={index} className="dataRow">
                    <td>{item.id}</td>
                    <td>{item.donation_id}</td>
                    <td>{item.full_name}</td>
                    <td>{item.email}</td>
                    <td>{(item.amount / 100).toFixed(2)}</td>
                    <td>{Localdate(item.timestamp)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>


      <div className="tableView">
        <table className="tablePaymentInfo">
        <caption className="tableCaption"> Donation Event Table </caption>
          <thead className="headatable">
            <tr className="hadingAlltitle">
              <th className="headingTitleIndividual">Event ID</th>
              <th className="headingTitleIndividual">Title</th>
              <th className="headingTitleIndividual">Create Date</th>
              <th className="headingTitleIndividual"></th>
            </tr>
          </thead>
          <tbody className="databody">
            {post &&
              Array.isArray(post) &&
              post.map((item, index) => {
                return (
                  <tr key={index} className="dataRow">
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.createDate}</td>
                    <td>{

                      <><Button color="red" style={{
                        backgroundColor: "red",
                      }}   onClick={() => {
                        DeletePost(item.id);
                      } } type="primary" icon={<DeleteFilled />}  />

                    
                      </>

                      }</td>
                   
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

        {
          showDeleteMsg &&
          (

          <div style={{
            display: "flex",
            position: "fixed",
            bottom: "10px",
            left: "10px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px"
          }}>
        
          <Alert
            message="Success Delete the Event"
            description="To view your event go to the Explore event section.Leatest event will be shown first."
            type="warning"
            showIcon
          />
          </div>
          )
        }





    </div>
  );
};
export default Admin;
