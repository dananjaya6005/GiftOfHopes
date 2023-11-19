import React from 'react';
import './Team.css';
import founders1 from '../../Images/team/1.jpg';
import founders2 from '../../Images/team/2.jpg';
import founders3 from '../../Images/team/3.jpg';
import founders4 from '../../Images/team/4.jpg';
import founders5 from '../../Images/team/jump.jpg';
import AppFooter from "../Footer/Footer";

const TeamMember = ({ image, name }: { image: string; name: string }) => {

  // define a common style for all images
  const imageStyle = {
    width: '90%', 
    height: 'auto', // maintain the aspect ratio
  };

  const textStyle = {
    padding: '20px', // padding to the names
    backgroundColor: '#fff', // background color for better visibility
    borderRadius: '5px', // add rounded corners
    boxShadow: '0 5px 30px rgba(0, 0, 0, 0.2)', // add a shadow
  };

  return (
    <div className="team-member">
      <img src={image} alt={name} style={imageStyle} />
      <p style={textStyle}>{name}</p>
    </div>
  );
};

const About: React.FC = () => {


  return (
    <>
    <div className="about-container">
      <div className="header">
        <h1>Our team at Gifts of Hope</h1>
      </div>
      <div className="intro">
        <p>
          Gifts of Hope is a heartfelt initiative founded by four dedicated students pursuing their undergraduate degrees at the Open University of Sri Lanka. Our journey began as a group project, driven by a shared vision to make a positive impact on the lives of children and students facing adversity amidst the economic crisis in Sri Lanka.
        </p>
      </div>
      <div className="team-members">
        <TeamMember image={founders1} name="Dananjaya" />
        <TeamMember image={founders2} name="Megha" />
        <TeamMember image={founders3} name="Duvindu" />
        <TeamMember image={founders4} name="Chulani" />
       
      </div>
      <div className="mission">
        <h2>Why we try</h2>
        <p>
          Our team of enthusiastic undergraduates believe in the greater good of humanity. We belive that humans are inheritly good but their circumstances drive them to stray from getting a proper education and becoming productive members of society. We tried to create a way for those that need that helping hand in their lives to find it here.
        </p>
        {<img src={founders5} alt="Classroom 1" style={{ width: '100%', height: 'auto' }} />}
      </div>
      <div className="call-to-action">
        <p>
          We hope you join us in making a better tomorrow for the children of Sri Lanka and around the world.
        </p>
        {/* Add a donation button or link here */}
      </div>
    </div>
    <AppFooter />
    </>
  );
}

export default About;
