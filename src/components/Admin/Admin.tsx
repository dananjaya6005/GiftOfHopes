//@ts-nocheck
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import adminLogo from "../../Images/Collab-bro.png";
import "./admin.css";

const supabase = createClient(
  "https://pjqbnzerwqygskkretxd.supabase.co",

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcWJuemVyd3F5Z3Nra3JldHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NzQzNzYsImV4cCI6MjAxNTI1MDM3Nn0.tCOsaglHK0BVL689wrFKvQIVat88jhKow-yMsURlJSE"
);

const Admin = () => {
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [formated_amount, setFormated_amount] = useState(0);

  useEffect(() => {
    GetPaymentInfo();
  }, []);

  function Localdate(timestamp: any) {
    const timestampNew = 1700160772; // replace with your timestamp
    const date = new Date(timestampNew * 1000); // JavaScript uses milliseconds
    console.log(date);
    const localDateStr = date.toLocaleDateString();

    return localDateStr;
  }

  async function GetPaymentInfo() {
    const { data } = await supabase.from("Payment_info").select();
    setPaymentInfo(data);
    console.log(data);
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
      <div className="tableView">
        <table className="tablePaymentInfo">
          <thead className="headatable">
            <tr className="hadingAlltitle">
              <th className="headingTitleIndividual">ID</th>
              <th className="headingTitleIndividual">Donation ID</th>
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
    </div>
  );
};
export default Admin;
