
import './Packages.scss';
import PackageItem from './PackagesItem';




function Packages() {

  return (
    <>
      <h1 className="packages-title">Тарифы</h1>
      <div className="packages">
        <ul className="packages__list">
          <PackageItem
            key="card1"
            className="package__item"
            title='CASUAL'
            titletype='title-dark'
            button='ПРИОБРЕСТИ CASUAL'
            btntype="btn-white"
            bgtype="bg-white"
            icontype="icon-gray"
            desctype="desc-dark"
            descs={['Доступ в тренажерный зал',
              'Посещение групповых занятий по расписанию',
              'Сейф для ценных вещей', 'Доступ к закрытым душевым кабинам',
              'Ежедневная аренда шкафчиков']}
            pricetype="price-dark"
            price='1000 Р/мес.' />

        </ul>
        <ul className="packages__list">
          <PackageItem
            key="card2"
            className="package__item package-orange"
            title='VIP'
            titletype='title-yellow'
            bgtype="bg-dark"
            icontype="icon-yellow"
            subtitle='Оптимальный выбор'
            subtitletype='subtitle-yellow'
            button='ПРИОБРЕСТИ  VIP'
            btntype="btn-yellow"
            desctype="desc-light"
            descs={['Доступ в тренажерный зал',
              'Бесплатные тренировки с тренером',
              'Посещение групповых занятий по расписанию',
              'Сейф для ценных вещей',
              'Доступ к закрытым душевым кабинам',
              'Ежедневная аренда шкафчиков',
              'Составление правильного рациона питания',
              'Доступ в SPA-зону',
              'Гостевые визиты',
              'Массаж'
            ]}
            pricetype="price-light"
            price='1800 Р/мес.' />
        </ul>
        <ul className="packages__list">
          <PackageItem
            key="card3"
            className="package__item"
            title='PRO'
            titletype='title-white'
            bgtype="bg-yellow"
            icontype="icon-gray"
            button='ПРИОБРЕСТИ  PRO'
            btntype="btn-gray"
            desctype="desc-light"
            descs={['Доступ в тренажерный зал',
              'Посещение групповых занятий по расписанию',
              'Сейф для ценных вещей',
              'Доступ к закрытым душевым кабинам',
              'Ежедневная аренда шкафчиков',
              'Составление правильного рациона питания',
              'Бесплатные тренировки с тренером',
              'Гостевые визиты']}
            pricetype="price-light"
            price='1400 Р/мес.' />
        </ul>
      </div>
    </>
  )
}


export default Packages
