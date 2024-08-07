import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">The VacaySpot</div>
      <ul className="nav-menu">
        <li><Link  to='/home'>Home</Link></li>
        <li><Link to='/discover'>Discover</Link></li>
        <li><Link to='/bookings'>Bookings</Link></li>
      </ul>
      <ul className='nav-contact'>
        <li><Link to='/login' className='navi'>Login</Link></li>
        <li><Link to='/signup' className='nava'>Sign In</Link></li>
      </ul>
    </div>
  );
}
 
export default Navbar;