import React from 'react'
import { useClerk, useUser } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';


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
      <p>{user?.firstName}{" "}{user?.lastName}</p>
    </div>
  );
}
 
export default function Home() {
  return (
    <>
    <DisplayUserInfo/>
     <div>Hello you are signed in</div>
      <SignOutButton/>  
      <Link to="/about">Go to About</Link>
    </>

  )
};



