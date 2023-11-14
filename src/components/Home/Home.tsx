import React from 'react'
import { useClerk, useUser } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from '../Nav/NavBar';

const SignOutButton = () => {
  const { signOut } = useClerk();
  
  return (
    <React.Fragment>
      <button onClick={() => signOut()}>
        Sign out
      </button>
    </React.Fragment>
  );
};

const DisplayUserInfo = () => {
  const {  user } = useUser();
 
  return (
    <div>
     {user?.firstName}{" "}{user?.lastName}
    </div>
  );
}
 
export default function Home() {
  return (
    <>
    <Navbar/>
    <DisplayUserInfo/>
     <div>Hello you are signed in</div>
      <SignOutButton/>  
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/showpost">Donate now ! </Link>
      <br />
      <Link to="/createpost">Create An event</Link>
    </>

  )
};



