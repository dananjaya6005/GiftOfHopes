import React, { useEffect, useState } from "react";
import { useClerk, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import "./Home.css";
import { Carousel } from "antd";
import img1 from "../../cropedImages/img1.jpg";
import img2 from "../../cropedImages/img2.png";
import img3 from "../../cropedImages/img3.jpg";
import img4 from "../../cropedImages/img4.png";
import img5 from "../../cropedImages/img5.jpg";
import videeChild from "../../video/New project.mp4";
import PostCard from "../PostCard/MiniCard/PostCard";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://pjqbnzerwqygskkretxd.supabase.co",

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcWJuemVyd3F5Z3Nra3JldHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NzQzNzYsImV4cCI6MjAxNTI1MDM3Nn0.tCOsaglHK0BVL689wrFKvQIVat88jhKow-yMsURlJSE"
);

const contentStyle: React.CSSProperties = {
  margin: 10,
  width: "438px",
  height: "438px",
  color: "#fff",
  boxShadow: "0 4px 8px 0 rgb(255, 255, 255,0.6)",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  border: "2px solid #fff",
  borderRadius: "24% 76% 69% 31% / 38% 43% 57% 62% ",
};

const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    <React.Fragment>
      <button onClick={() => signOut()}>Sign out</button>
    </React.Fragment>
  );
};

type Post = {
  title: string;
  writter_name: string;
  discription: string;
  reacts: number;
  createDate: string;
  type: string;
  location: string;
};
export default function Home() {
  const navigate = useNavigate();
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
    <>
      <video src={videeChild} autoPlay loop muted></video>
      <div className="headContainer">
        <div className="TopTextContaniner">
          <h2 className="headTextWrap">Help the children when they need ! </h2>
          <h2 className="secondHeadText">
            Your small act can make a big difference
          </h2>
          <p
            className="homeDescription"
            style={{ fontSize: "17px", padding: 20 }}
          >
            Welcome to our platform, where we strive to change lives through
            education. We support underprivileged students by providing
            essential educational resources. Our mission is to ensure every
            child has access to quality education, regardless of their
            background. Your donation can help us provide textbooks, school
            supplies, and cover tuition fees for those who need it most.
            Together, we can break the cycle of poverty and empower our children
            to reach their full potential. Every child deserves a chance to
            shine, and your contribution can light their way. Thank you for your
            support.
          </p>
          <div className="btnContanier">
          <button onClick={()=>{navigate('/showpost')}} className="btnTwo">Donate now</button>
          <button onClick={()=>{navigate('/createpost')}} className="btnTwo">Organzie Event</button>
        </div>
        </div>

        <div className="slideShow">
          <Carousel
            className="carousel"
            speed={1500}
            dots={false}
            autoplay
            fade={true}
          >
            <div>
              <img style={contentStyle} src={img1} alt="img1" />
            </div>
            <div>
              <img style={contentStyle} src={img2} alt="img2" />
            </div>
            <div>
              <img style={contentStyle} src={img3} alt="img3" />
            </div>
            <div>
              <img style={contentStyle} src={img4} alt="img4" />
            </div>
            <div>
              <img style={contentStyle} src={img5} alt="img5" />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="secondContext">
        <h4 className="secondContexttext1">Empower children through <span style={{color:'red'}}>Education</span></h4>
      </div>

      <div className="HomemakeRowStyle">
  {post &&
    Array.isArray(post) &&
    [...post].reverse().slice(0, 3).map((item: Post, index: number) => {
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
<button onClick={()=>{navigate('/showpost')}} className="discoverMoreBtn">Discover More </button>


    
    </>
  );
}
