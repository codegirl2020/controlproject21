import { NavLink } from 'react-router-dom';
import { FaHome, FaUserFriends, FaHandHoldingHeart, FaAddressCard, FaNewspaper } from 'react-icons/fa';
import './Navigation.scss';

function Navigation() {
  return (
    <nav className="toolbar-nav">
      <NavLink to="/" exact className="toolbar-nav__link"><FaHome /><span>Главная</span></NavLink>
      <NavLink to="/aboutus" className="toolbar-nav__link"><FaUserFriends /><span>О Нас</span></NavLink>
      <NavLink to="/packages" className="toolbar-nav__link"><FaHandHoldingHeart /><span>Тарифы</span></NavLink>
      <NavLink to="/contact" className="toolbar-nav__link"><FaAddressCard /><span>Контакты</span></NavLink>
      <NavLink to="/news" className="toolbar-nav__link"><FaNewspaper /><span>Новости</span></NavLink>

    </nav>
  )
}

export default Navigation
