// About.tsx

import React from 'react';
import './About.css';
import founders1 from '../../Images/about/stu-group.jpg';
import founders2 from '../../Images/about/classroom.jpg';
import founders3 from '../../Images/about/kids.jpg';
import AppFooter from "../Footer/Footer";

const About: React.FC = () => {

  // define a common style for all images
  const imageStyle = {
    width: '100%', 
    height: 'auto', // maintain the aspect ratio
  };

  return (
    <>
    <div className="about-container">
      <div className="header">
        <h1 className='AboutHeading'>About Gifts of Hope</h1>
      </div>
      <div className="intro">
        <p className='AboutHeadingDes'>
          Welcome to Gifts of Hope, a heartfelt initiative founded by four dedicated students pursuing their undergraduate degrees at the Open University of Sri Lanka. Our journey began as a group project, driven by a shared vision to make a positive impact on the lives of children and students facing adversity amidst the economic crisis in Sri Lanka.
        </p>
      </div>
      <div className="mission">
        <h2 className='aboutUSmissonDes'>Our Mission</h2>
        <p>
          At Gifts of Hope, our mission is to bring light to the lives of children and students affected by the economic challenges in Sri Lanka. We believe in the power of education and aim to provide essential support to ensure that every child has the opportunity to learn and grow, regardless of the obstacles they face.
        </p>
        {<img src={founders2} alt="Classroom 1" style={imageStyle}/>}
      </div>
      <div className="founders">
        <h2>Meet the Founders</h2>
        <p className='MeetOurFoundersDes'>
          Our team of founders comprises passionate individuals committed to making a difference. Through collaboration and determination, we strive to create a positive impact on the future of those in need. Get to know us and our stories below.
        </p>
        {<img src={founders1} alt="Founder 1" style={imageStyle}/>}
      </div>
      <div className="impact">
        <h2>Impact So Far</h2>
        <p className='resetParaInAboutus'>
          Since our inception, Gifts of Hope has been able to reach numerous children and students, providing them with essential resources, educational support, and a glimmer of hope for a brighter future. Our journey is just beginning, and we are excited to continue making a meaningful impact in the lives of those who need it the most.
        </p>
        {<img src={founders3} alt="Kids smiling" style={imageStyle}/>}
      </div>
      <div className="call-to-action">
        <p>
          Join us in spreading hope and making a difference. Your support can change lives and contribute to a better future for the children and students of Sri Lanka.
        </p>
        {/* Add a donation button or link here */}
      </div>
    </div>
    <AppFooter />
    </>
  );
}

export default About;
