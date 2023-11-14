import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./showPost.css";
import TopBgLogo from "../../Images/TopBg.png";

import PostCard from "../PostCard/postCard";
import Navbar from "../Nav/NavBar";
import books from "../../Animation/book.gif";
import donation from "../../Animation/donation.gif";
import settings from "../../Animation/settings.gif";
import spagaetti from "../../Animation/spaghetti.gif";
import student from "../../Animation/student.gif";

const supabase = createClient(
  "https://pjqbnzerwqygskkretxd.supabase.co",

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcWJuemVyd3F5Z3Nra3JldHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NzQzNzYsImV4cCI6MjAxNTI1MDM3Nn0.tCOsaglHK0BVL689wrFKvQIVat88jhKow-yMsURlJSE"
);

type Post = {
  title: string;
  writter_name: string;
  discription: string;
  reacts: number;
  createDate: string;
  type: string;
  location: string;
};

export default function ShowPost() {
  const [post, setPost] = useState<Post[]>([]);

  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    const { data, error } = await supabase.from("Timeline").select();
    console.log(data, error);

    if (data) {
      setPost(data);
    }
  }

  return (
    <React.Fragment >
      
      
      <div className="headContaner">
        <div className="headText">
          <h3 className="HeadTopTitle" style={{ marginTop: "30px", padding: "0px",color:"#ffab10"}}>
            Explore Donation Events
          </h3>{" "}
          <br />
          <h3 style={{ margin: "0px", padding: "0px", fontSize: "23px", color:'#ffeaab' }}>
            Be the Change You Wish to See
          </h3>
          <div  style={{marginTop:40}} className="subtextStynle">

          <p style={{fontWeight:800 ,  color:'#ffab10'}}>Make a Donation</p>
          <p style={{paddingTop:10,  color:'white' }}>
            Once you’ve found an event you’d like to support, you can make a
            donation. Every contribution, no matter how small, can have a big
            impact.
          </p>



          </div>
         
          <p style={{  color:'white',marginTop: "1px", fontSize: "1rem",textAlign:'left',fontStyle:"italic" }}>
            Welcome to our donation events page, a platform where you can
            explore various initiatives aimed at making a positive impact. Each
            event represents a cause, be it education, healthcare, or disaster
            relief, and offers you an opportunity to contribute. Browse through
            these events, discover causes you feel passionate about, and see how
            your donations can make a difference. Remember, every contribution
            counts and has the potential to bring about significant change. So,
            explore, donate, and be the change you wish to see in the world.
          </p>
          <div className="animationSet">
            <img className="animatinLogo" src={books} alt="" />
            <img className="animatinLogo" src={donation} alt="" />
            <img className="animatinLogo" src={settings} alt="" />
            <img className="animatinLogo" src={spagaetti} alt="" />
            <img className="animatinLogo" src={student} alt="" />
          </div>
        </div>

        <div className="overlay-image">
          <div className="overlay">
            <img src={TopBgLogo} alt="" />
          </div>
        </div>
      </div>

      <div className="makeRowStyle">
        {post &&
          Array.isArray(post) &&
          [...post].reverse().map((item: Post, index: number) => {
            return (
              <PostCard
                key={index}
                title={item.title}
                writter_name={item.writter_name}
                discription={item.discription}
                reacts={item.reacts}
                createDate={item.createDate}
                type={item.type}
                location={item.location}
              />
            );
          })}
      </div>
    </React.Fragment>
  );
}
