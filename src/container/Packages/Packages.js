import { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import './Packages.scss';
import PackageItem from './PackagesItem';

function Packages() {

  return (
    <>
      <h1 className="packages-title">Тарифы</h1>
      <div className="packages">
        <ul className="packages__list">
          <PackageItem
            title='CASUAL'
            descs={['Доступ в тренажерный зал',
              'Посещение групповых занятий по расписанию',
              'Сейф для ценных вещей', 'Доступ к закрытым душевым кабинам',
              'Ежедневная аренда шкафчиков']}
            price='1000 Р/мес.' />
          <Button modif="btn-white">Приобрести CASUAL</Button>
        </ul>
        <ul className="packages__list">
          <PackageItem
            title='VIP'
            subtitle='Оптимальный выбор'
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
            price='1800 Р/мес.' />
          <Button modif="btn-yellow">Приобрести VIP</Button>
        </ul>
        <ul className="packages__list">
          <PackageItem
            title='PRO'
            descs={['Доступ в тренажерный зал',
              'Посещение групповых занятий по расписанию',
              'Сейф для ценных вещей',
              'Доступ к закрытым душевым кабинам',
              'Ежедневная аренда шкафчиков',
              'Составление правильного рациона питания',
              'Бесплатные тренировки с тренером',
              'Гостевые визиты']}
            price='1400 Р/мес.' />
          <Button modif="btn-gray">Приобрести PRO</Button>

        </ul>
      </div>
    </>
  )
}


export default Packages
