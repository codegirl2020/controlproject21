import Button from '../../components/UI/Button/Button';
import './News.scss';

function NewsItem(props) {
  const { title, date, text, img, address, btn } = props;
  return (
    <li className="news__item">
      <div className="news__img">
        <img src={img} style={{ width: "250px" }} />
      </div>
      <div className="news__header">
        <h3 className="news__title"><strong>{title}</strong></h3>
        <p className="news__date"> <strong className="new-date__strong">{date}</strong></p>
      </div>
      <p className="news__address">{address}</p>
      <p className="news__text">{text}</p>
      <Button modif="btn-orange"> Подробнее </Button>
    </li>
  )
}

export default NewsItem
