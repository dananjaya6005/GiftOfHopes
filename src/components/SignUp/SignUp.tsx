import { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../LogIn/LogIn';
import { Link } from "react-router-dom";

export default function SignUp() {

  const navigate = useNavigate();
  
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [username,setUseName] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // start the sign up process.
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
 
    try {
      await signUp.create({
        emailAddress,
        password,
        username
      });
 
      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
 
      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
 
  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e:any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
 
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
       setIsVerified(true);
        
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };






 
  return (
    <div>

      {!pendingVerification && (
      <>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmailAddress(e.target.value)} id="email" name="email" type="email" />
          </div>
          <div>
            <label htmlFor="username">username</label>
            <input onChange={(e) => setUseName(e.target.value)} id="username" name="username" type="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" />
          </div>
          <button onClick={handleSubmit}>Sign up</button>
        </form>
        
      <button>
      <Link to="/login">Already have an account? Sign in</Link>
      </button>

        </>



      )}
      {pendingVerification && !isVerified && (
        <div>
          <form>
            <input
              value={code}
              placeholder="Code..."
              onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={onPressVerify}>
              Verify Email
            </button>
          </form>
        </div>
      )}

      {
        isVerified && (
          <div>
            <h1>Thank you for verifying your email</h1>
            <button onClick={() => navigate('/')}>Go to Home</button>
          </div>
        )
      }

      


    </div>
  );

  
}