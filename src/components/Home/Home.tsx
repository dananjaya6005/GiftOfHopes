import React from "react";
import { useClerk, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 10,
  width: "438px",
  height: "438px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
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

const DisplayUserInfo = () => {
  const { user } = useUser();

  return (
    <div>
      {user?.firstName} {user?.lastName}
    </div>
  );
};

export default function Home() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div className="headContainer">
        <div className="slideShow">
          <Carousel
            className="carousel"
            dots={false}
            autoplay
            afterChange={onChange}
            fade={true}
          >
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
      </div>

      <DisplayUserInfo />
      <div>Hello you are signed in</div>
      <SignOutButton />
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/showpost">Donate now ! </Link>
      <br />
      <Link to="/createpost">Create An event</Link>
    </>
  );
}
