import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ children, modif, clicked, type }) => {
  return <Link className={`btn ${modif ? modif : ''}`}>{children}</Link>
}

export default Button;