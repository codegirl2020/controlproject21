import React from 'react'
import Button from '../../components/UI/Button/Button';
import './Packages.scss';
import { FaCheck } from 'react-icons/fa';

function PackagesItem({ title, descs, subtitle, price, button, btntype, subtitletype, titletype, bgtype, icontype, desctype, pricetype }) {

  return (
    <ul className={bgtype}>
      <h1 className={titletype}>{title}</h1>
      <h3 className="packages-item__subtitle" className={subtitletype}> {subtitle}</h3>
      <ul>
        {descs.map(desc => {
          return <li className={desctype}><FaCheck className={icontype} />{desc}</li>
        })}
        <h4 className={pricetype}>{price}</h4>
        <Button modif={btntype}>{button}</Button>
      </ul>
    </ul>
  )
}

export default PackagesItem
