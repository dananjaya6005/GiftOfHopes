// MainRouter.js (or wherever you define your routes)
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/LogIn/LogIn";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ShowPost from "./components/Timeline/ShowPost";
import CreatePost from "./components/Timeline/CreatePost";
import Navbar from "./components/Nav/Navbar";
import Payment from "./components/Payment/Payemnt";
import { useUser } from "@clerk/clerk-react";
import Admin from "./components/Admin/admin";


function MainRouter() {
  const {  isSignedIn } = useUser();

  function decideNavBarShowOrNot() {
    if (isSignedIn) {
      return <Navbar />;
    } else {
      return null;
    }
  }

  return (
    <>
      {decideNavBarShowOrNot()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/showpost" element={<ShowPost />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {
      
      }
    </>
  );
}

export default MainRouter;
