//@ts-nocheck
import "./Payment.css";
import { Button } from "antd";
import payImg from "../../Images/Payment Information-bro.png";
import {  useUser } from "@clerk/clerk-react";
import { useState,useEffect} from "react";
import AppFooter from "../Footer/Footer";



export default function Payment() {

const [ClientName,setClientName] = useState('')
const { user } = useUser();

useEffect(()=>{
  FetchuserInfo();
  
  },[]);

const FetchuserInfo = () => {

  setClientName(user?.firstName);
  console.log(ClientName);


};



  return (
    <>
      <div className="paymentRoot">
        <h1 className="paymentHeader">
          Empower with a Click: Your Guide to Seamless Donations
        </h1>

        <div className="imagehead">
          <img className="payimg" src={payImg} alt="" />
          <p className="payimgDescription">
            Welcome to our Payment Gateway! We believe in the power of giving
            and aim to make your donation process as simple as possible. With
            just a few clicks, you can contribute to a cause you care about. Our
            platform accepts Google Pay, MasterCard, Visa Card, and American
            Express Card. Just follow our easy guide, ‘Empower with a Click:
            Your Guide to Seamless Donations’, and make a difference today.
            Remember, every donation counts!
          </p>
        </div>

        <div className="instrcutionContainer">
          <ol className="listInstruction">
            <li className="stepTitle">Check Your Payment Method 💳 </li>
            <ul className="description">
              Ensure you have a valid Google Pay, MasterCard, Visa Card, or
              American Express Card. These are the accepted payment methods on
              our platform.
            </ul>

            <li className="stepTitle">Don't Know the Event ID? 🙄</li>
            <ul className="description">
              If you're unsure about the Donation Event ID, please navigate back
              to the <a href="/showpost">Event Explore page</a>. You can find the ID associated with
              each event there.
            </ul>
            <li className="stepTitle">Enter the Donation Event ID 😏</li>
            <ul className="description">
              Once you're on the payment page, enter the Donation Event ID in
              the designated field.
            </ul>

            <li className="stepTitle">Enter Your Payment Details 🥰 </li>
            <ul className="description">
              Fill in your card details. Make sure to double-check all the
              information to avoid any errors.
            </ul>

            <li className="stepTitle">Confirm Your Donation ✅ </li>
            <ul className="description">
              Review all the information, and if everything looks correct,
              confirm your donation.
            </ul>
          </ol>
        </div>

        <Button
          className="readyforPayment"
          type="primary"
          shape="round"
          size="large"
          onClick={() => {
            window.location.href = `https://donate.stripe.com/test_14k7vS6HE8NZb2E289?client_reference_id=${ClientName}`;
          }}
        >
          Ready for Payment
        </Button>
      </div>
      <br /><br /><br /><br />
      <AppFooter />
    </>
  );
}
