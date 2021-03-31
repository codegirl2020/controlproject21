
import './News.scss';

function NewsItem(props) {
  const { title, date, text, img, address } = props;
  return (
    <li className="news__item">
      <div className="news__img">
        <img src={img} style={{ width: "250px" }} />
      </div>
      <div className="news__header">
        <h3 className="news__title">Title <strong>{title}</strong></h3>
        <p className="news__date">Date: <strong>{date}</strong></p>
      </div>
      <p className="news__address">{address}</p>
      <p className="news__text">{text}</p>
    </li>
  )
}

export default NewsItem
