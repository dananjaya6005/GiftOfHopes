import React from 'react';
import './Mission.css';
import founders1 from '../../../Images/people/p1-transformed.jpeg';
import founders2 from '../../../Images/people/p2.jpg';
import founders3 from '../../../Images/people/p3.jpg';
import AppFooter from "../../Footer/Footer";

const About: React.FC = () => {

  // define a common style for all images
  const imageStyle = {
    width: '70%', 
    height: 'auto',
   // maintain the aspect ratio
  };

  return (
    <>
    <div className="about-container">
      <div className="header">
        <h1 className='MisssionHeadingText'>Our Mission at Gifts of Hope</h1>
      </div>
      <div className="intro">
        <p className='MisssionHeadingTextDes'>
          Gifts of hope organization's mission is to help build the future of Sri Lanka by helping children today. We believe in equality and fair opportunity for all in finding better education regardless of their economical situation. Join our efforts in shaping the future of Sri Lankan and in turn the world.
        </p>
      </div>
      <div className="mission">
        <h2>Meet Arjun</h2>
        
        {<img className="missionImgPeople" src={founders1} alt="Classroom 1" style={imageStyle}/>}
      </div>

      <div className="person-story">
        <h2 className='arjuans-stroy'>Arjun's Story</h2>
        <p className='instance-stroy-des'>
          Arjun's journey is a testament to the transformative power of education. Born in a challenging environment, he overcame obstacles with the help of Gifts of Hope. Today, Arjun is a symbol of hope and resilience, inspiring others to dream beyond their circumstances.
        </p>
      </div>

      <div className="mission">
        <h2>Meet Janani</h2>
        
        {<img className='missionImgPeople' src={founders2} alt="Classroom 1" style={imageStyle}/>}
      </div>

      <div className="person-story">
        <h2>Janani's Story</h2>
        <p className='instance-stroy-des'>
        Born with a spark for learning, Janani faced numerous obstacles on her path to education. Lacking resources and opportunities, she struggled against the odds. It was at this critical juncture that Gifts of Hope stepped in, providing not only financial support but also a network of mentors and a community of encouragement.
        </p>
      </div>

      <div className="mission">
        <h2>Meet the People of Eppawala</h2>
        
        {<img className="missionImgPeople" src={founders3} alt="Classroom 1" style={imageStyle}/>}
      </div>

      <div className="person-story">
        <h2>Their Story</h2>
        <p className='instance-stroy-des'>
        Determined to illuminate the path of knowledge, we partnered with this school, bringing not just textbooks and stationery but also a renewed spirit of learning. Through collaborative efforts, we transformed dusty classrooms into vibrant hubs of education by showing them a youtube video on our laptop.
        </p>
      </div>

      <div className="call-to-action">
        <p className='instance-stroy-des'>
          Join us in spreading hope and making a difference. Your support can change lives and contribute to a better future for the children and students of Sri Lanka!
        </p>
        {/* left to add a donate button */}
      </div>
    </div>
    <AppFooter />
    </>
  );
}

export default About;
