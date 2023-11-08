import React from 'react'
import { useClerk } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';


const SignOutButton = () => {
  const { signOut } = useClerk();
  
  return (
    <button onClick={() => signOut()}>
      Sign out
    </button>
  );
};
 
export default function Home() {
  return (
    <>
     <div>Hello you are signed in</div>
      <SignOutButton/>  
      <a href="./about">Go to Clerk Dashboard</a>
      <Link to="/about">Go to About</Link>
    </>

  )
};



