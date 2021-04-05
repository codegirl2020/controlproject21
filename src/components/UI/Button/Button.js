import './Button.scss';

const Button = ({ children, modif, clicked, type }) => {
  switch (type) {
    case 'link':
      return (
        <a href="test" onClick={clicked} className={modif ? ['btn', modif].join(' ') : 'btn'}>{children}</a>
      );

    default: return (
      <button className={modif ? ['btn', modif].join(' ') : 'btn'} onClick={clicked}>{children}</button>
    )
  }
};

export default Button;