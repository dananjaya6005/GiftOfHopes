// MainRouter.js (or wherever you define your routes)
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/LogIn/LogIn";
import Home from "./components/Home/Home";
import ShowPost from "./components/Timeline/ShowPost";
import CreatePost from "./components/Timeline/CreatePost";
import Navbar from "./components/Nav/Navbar";
import Payment from "./components/Payment/Payemnt";
import { useUser } from "@clerk/clerk-react";
import Admin from "./components/Admin/Admin";
import CheckAdminAuth from "./components/Admin/CheckAdminAuth";

import About from "./components/AboutUs/About";
import Team from "./components/AboutUs/Team/Team";
import Mission from "./components/AboutUs/Mission/Mission";

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
        <Route path="/team" element={<Team />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/showpost" element={<ShowPost />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkadminauth" element={<CheckAdminAuth />} />
      </Routes>
      {
      
      }
    </>
  );
}

export default MainRouter;
