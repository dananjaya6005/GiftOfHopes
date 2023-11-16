import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Gifts of Hope</h1>
        <h2 className='conatct'>Contact us</h2>
        <address>
        +94 71-8843104 / +94 719021938<br />
        
        </address>
      </div>
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">About Us</h2>
          <ul className="nav__ul">
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Our Impact</a></li>
          </ul>
        </li>
        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Get Involved</h2>
          <ul className="nav__ul nav__ul--extra">
            <li><a href="#">Create a Donation Event</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Volunteer</a></li>
            <li><a href="#">Partnerships</a></li>
          </ul>
        </li>
        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>
          <ul className="nav__ul">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </li>
      </ul>
      <div className="legal">
        <p>© 2023 Gifts Of hope Donation Platform, All rights reserved.</p>
        <div className="legal__links">
          <span>Made with <span className="heart">♥</span> for a better world</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
