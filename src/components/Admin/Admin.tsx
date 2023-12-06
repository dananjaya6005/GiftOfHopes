//@ts-nocheck
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import adminLogo from "../../Images/Collab-bro.png";
import "./admin.css";
import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import { Alert } from "antd";

const supabase = createClient(
  "https://pjqbnzerwqygskkretxd.supabase.co",

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcWJuemVyd3F5Z3Nra3JldHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NzQzNzYsImV4cCI6MjAxNTI1MDM3Nn0.tCOsaglHK0BVL689wrFKvQIVat88jhKow-yMsURlJSE"
);

const Admin = () => {
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [formated_amount, setFormated_amount] = useState(0);
  const [post, setPost] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [showDeleteMsg, setShowDeleteMsg] = useState(false);
 const [filteredInfo, setFilteredInfo] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    GetPaymentInfo();
    GetPost();
  }, [refreshFlag]);

  
{/* use this to get the dates to show on the payments table */}
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

  {/* this function is used on the event table to delete events from that red button */}
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

  {/* use this function to do the filtering on the table by event id value*/}
 function filterByEvent(text:any){
  const formattedSearchTerm = text.toString().toLowerCase();
  const filteredData = paymentInfo.filter((item) =>
    item.donation_id.toString().includes(formattedSearchTerm)
  );

  {/* use
  const formattedSearchTerm = text.toLowerCase();
  const filteredData = paymentInfo.filter((item) => item.email.includes(formattedSearchTerm));
  for text*/}
   
    setPaymentInfo(filteredData);

    if(text.length === 0){
      GetPaymentInfo();
    }
 }


  return (
    <div>
      <div className="adminLogoandrest">
        <img src={adminLogo} className="adminLogo" alt="adminLogo" />
        <div className="adminTitle">
          <h1 className="adminTitleText">
            You Logged in with Admin Privileges!
          </h1>
          <p className="adminTitleTextDescription">
            You can view the complete payment history from the table below. Each
            row represents a transaction with details such as ID, Event ID,
            Full Name, Email, Amount, and date.
          </p>

          <p className="adminTitleTextDescription">
            If new payments are made while you’re on this page, click the browser
            ‘Refresh’ button to update the table with the latest transactions.
          </p>

          <p className="adminTitleTextDescription">
            To delete a Donation event, from the Donation table, Click the ‘Delete’ button next to
            the event you want to delete.
          </p>
        </div>
      </div>
      <div style={{textAlign:'center',justifySelf:'center'}}>Payment History Table </div>


{/* the text field to filter the below table by event id */}
      <div >
        <input onChange={(e)=>{filterByEvent(e.target.value)}}
        style={{
         width : '300px',
         color:'black',
          padding:'10px',
          backgroundColor:'white',
          borderRadius:'5px',
          marginTop:'10px',
          marginBottom:'10px'

         }}
        type="text" placeholder="search by event id"/>
      </div>

{/* table which shows payment information */}
      <div className="tableView">
        <table className="tablePaymentInfo">
          <thead className="headatable">
            <tr className="hadingAlltitle">
              <th className="headingTitleIndividual">P_ID</th>
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
                    <td>{(item.amount / 100).toFixed(2)}</td> {/* supabase saves in cents. divide to convert from cents to proper values */}
                    <td>{Localdate(item.timestamp)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>


{/* this table shows donation events */}
      <div className="tableView">
        <table className="tablePaymentInfo">
        <caption className="tableCaption"> Donation Event Table </caption>
          <thead className="headatable">
            <tr className="hadingAlltitle">
              <th className="headingTitleIndividual">ID</th>
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
            message="Successful Deletion of the Event"
            description="To view available events go to the Explore events section."
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
