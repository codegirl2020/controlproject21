import { NavLink } from 'react-router-dom';
import { FaHome, FaUserFriends, FaHandHoldingHeart, FaAddressCard } from 'react-icons/fa';
import './Navigation.scss';

function Navigation() {
  return (
    <nav className="toolbar-nav">
      <NavLink to="/" exact className="toolbar-nav__link"><FaHome /><span>Home</span></NavLink>
      <NavLink to="/aboutus" className="toolbar-nav__link"><FaUserFriends /><span>About Us</span></NavLink>
      <NavLink to="/menu" className="toolbar-nav__link"><FaHandHoldingHeart /><span>Packages</span></NavLink>
      <NavLink to="/contact" className="toolbar-nav__link"><FaAddressCard /><span>Contact</span></NavLink>

    </nav>
  )
}

export default Navigation
