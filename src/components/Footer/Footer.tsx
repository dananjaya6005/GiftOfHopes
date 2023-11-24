import {Link} from 'react-router-dom';
import './Footer.css';
import { FacebookFilled,YoutubeFilled,LinkedinFilled } from '@ant-design/icons';



const Footer = () => {
  
  return (
  <div className="footerConatiner">

    <footer className="footer">
    <div className="footer__top">
    <a className="iconSocailMedia" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FacebookFilled />
  </a>
  <a className="iconSocailMedia" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <LinkedinFilled />
  </a>
  <a className="iconSocailMedia" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <YoutubeFilled />
  </a>
  
    
    </div>
    
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    
    <ul className="menu">
      <li className="menu__item"><Link className="menu__link" to="/">Home</Link></li>
      <li className="menu__item"><Link className="menu__link" to="/about">About</Link></li>
      <li className="menu__item"><Link className="menu__link" to="/mission">Services</Link></li>
      <li className="menu__item"><Link className="menu__link" to="/team">Team</Link></li>
    </ul>
    <p>&copy;2023 Gifts Of Hope | All Rights Reserved</p>
  </footer>
  </div>
  );
};

export default Footer;
