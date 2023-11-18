import React, { useEffect, useState } from "react";
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
import psedit from "../../images/psedit.png";
import psedit2 from "../../images/psedit2.png";
import AppFooter from "../Footer/Footer";
import feedbacklogo from '../../Images/Feedback-pana.png';

const supabase = createClient(
  "https://pjqbnzerwqygskkretxd.supabase.co",

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcWJuemVyd3F5Z3Nra3JldHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NzQzNzYsImV4cCI6MjAxNTI1MDM3Nn0.tCOsaglHK0BVL689wrFKvQIVat88jhKow-yMsURlJSE"
);

const contentStyle: React.CSSProperties = {
  width: "90%",
  height: "90%",
  color: "#fff",

  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  border: "2px solid #fff",
  borderRadius: "24% 76% 69% 31% / 38% 43% 57% 62% ",
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
      <video className="bgVideo" src={videeChild} autoPlay loop muted></video>
      <div className="headContainer">
        <div className="TopTextContaniner">
          <h2 className="headTextWrap">
            Help the children get a better Education!{" "}
          </h2>
          <h2 className="secondHeadText">
            Your small act can make a big difference.
          </h2>
          <p className="homeDescription">
            Welcome to our platform, where we strive to change lives through
            education. We support underprivileged students and educational
            institutes by providing essential educational resources. Our mission
            is to ensure every child has access to quality education, regardless
            of their background. Your donation can help us provide textbooks,
            school supplies, and cover tuition fees for those who need it most.
            Together, we can break the cycle of poverty and empower our
            children. If you yourself a student in need of financial aid, Please
            feel free to create a donation event yourself to attract potential
            donars.
          </p>
          <div className="btnContanier">
            <button
              onClick={() => {
                navigate("/showpost");
              }}
              className="btnTwo"
            >
              Donate now
            </button>
            <button
              onClick={() => {
                navigate("/createpost");
              }}
              className="btnTwo"
            >
              Organize Event
            </button>
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
        <h4 className="secondContexttext1">
          Empower children through{" "}
          <span style={{ color: "green" }}>Education</span>
        </h4>
      </div>

      <div className="HomemakeRowStyle">
        {post &&
          Array.isArray(post) &&
          [...post]
            .reverse()
            .slice(0, 3)
            .map((item: Post, index: number) => {
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
      <button
        onClick={() => {
          navigate("/showpost");
        }}
        className="discoverMoreBtn"
      >
        Discover More{" "}
      </button>

      <div className="whyChosesUSWhole">
        <img src={psedit} alt="psedit" className="psedit" />
        <div className="whychosesus">
          <h1 className="whyChooseusH1">Why Choose Us</h1>
          <div className="whyChosesUSContent">
            <div className="whyChosesUSContent1">
              <h2>Our Mission</h2>
              <p className="smallDiscription">
                Our mission is to ensure every child has access to quality
                education, regardless of their background. Your donation can
                help us provide textbooks, school supplies, and cover tuition
                fees for those who need it the most.
              </p>
            </div>
            <div className="whyChosesUSContent2">
              <h2>Our Vision</h2>
              <p className="smallDiscription">
                Our vision is to create a world where every child has the
                opportunity to learn and grow. We believe that education is the
                key to a brighter future, and we want to give children the
                chance to pursue that goal without having to worry about their
                monetary statues.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutOurHistory">
        <div className="aboutOurHistoryContent1">
          <h1 className="aboutOurHistoryHead">About Our History</h1>
          <p className="aboutOurHistoryDescription">
            Founded in 2023, our platform was born out of a vision to empower
            individuals to drive positive change in the world. We’ve since grown
            into a global community, facilitating numerous donation events that
            have impacted countless lives. From scholarships for students to
            infrastructure development for schools, our history is a testament
            to the power of collective action. As we look ahead, we’re excited
            to continue this journey of making a difference.
          </p>
        </div>

        <img src={psedit2} alt="psedi2" className="psedit2" />
      </div>

      <div className="FeedbackContainer">
        <div className="FeedbackContainer1">
          <h3 className="FeedbackContainer1Head">We Value Your Feedback!</h3>
          <p className="FeedbackContainer1Description">
            At our company, we believe that your feedback is crucial for our
            growth and improvement. We are committed to providing the best
            experience for our users and your insights help us do just that. We
            have created a simple and user-friendly feedback form for you to
            share your thoughts and suggestions. By clicking the button below,
            you will be navigated to a Google Form where you can provide us with
            your valuable feedback.
          </p>

            <button>
            <a className="feedbackColor" href="https://docs.google.com/forms/d/e/1FAIpQLSfqtyPD0v_o-B6EI34GagyDlflYNK-HqxVvx0oBgMDvj-bfTg/viewform">Add your feedback</a>
            </button>
           
        </div>
        <img src={feedbacklogo} className="feedbacklogo" alt="" />
      </div>

      <AppFooter />
    </>
  );
}
