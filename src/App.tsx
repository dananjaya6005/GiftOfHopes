import React, { useEffect } from "react";
import "./App.css";
import { useClerk } from "@clerk/clerk-react";
import { useLocation,useNavigate,Navigate} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import SignUp from "./components/SignUp/SignUp";
import Login from './components/LogIn/LogIn'
import MainRouter from "./MainRouter";
import Home from "./components/Home/Home";

const clerkPubKey = 'pk_test_YW11c2luZy1raW5nZmlzaC0zNC5jbGVyay5hY2NvdW50cy5kZXYk';


function App() {



  return (
  
    <BrowserRouter>
    <ClerkProvider publishableKey={clerkPubKey} >
      <MainRouter/>
      <SignedIn>
      </SignedIn>
      <SignedOut>
     
      <SignUpORLogin/>
       {/* <Navigate to="/login" /> */}
      </SignedOut>
    </ClerkProvider>
    </BrowserRouter>
   
  );
}


const SignUpORLogin = () : any=>{
  const location = useLocation();
  const CurruntPath = location.pathname;
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isSignedIn && CurruntPath === '/') {
    return <Navigate to="/login" />;
  }
  else if (CurruntPath === '/signup'){
    return <Navigate to="/signup" />;
  }
  return null;
  
}



export default App;
