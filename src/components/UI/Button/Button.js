import './Button.scss';

const Button = ({ children, modif, clicked, type }) => {
  return <button className={`btn ${modif ? modif : ''}`} onClick={clicked}>{children}</button>
}

export default Button;