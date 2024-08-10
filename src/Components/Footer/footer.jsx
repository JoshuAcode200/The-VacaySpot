import { Link } from 'react-router-dom';
import './footer.css';
import image1 from '../../assets/facebook-logo.jpg';
import image2 from '../../assets/Instagram-Logo-2011.jpg';
import image3 from '../../assets/images.jpg';

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="section-footer">
        <ul className="socials">
          <li><a href="https://www.instagram.com/"><img src={image3} className="twit-icon" alt=''/></a></li>
          <li><a href="https://www.facebook.com/"><img src={image1} className="fb-icon" alt=''/></a></li>
          <li><a href="https://www.instagram.com/"><img src={image2} className="ig-icon" alt=''/></a></li>
        </ul>
        <ul className="links">
          <li><Link  to='/home'>Home</Link></li>
          <li><Link to='/discover'>Discover</Link></li>
          <li><Link to='/bookings'>Bookings</Link></li>
        </ul>
        <p className="legals">2024 All rights reserved</p>
      </section>
    </div>
  );
}
 
export default Footer;