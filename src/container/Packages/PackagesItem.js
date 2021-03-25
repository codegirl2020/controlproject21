import React from 'react'
import './Packages.scss';

function PackagesItem({ title, descs, subtitle, price }) {

  return (
    <ul className="packages-item">
      <h1 className="packages-item__title">{title}</h1>
      <h3> {subtitle}</h3>
      <ul className="packages-item">
        {descs.map(desc => {
          return <li>{desc}</li>
        })}
        <h4>{price}</h4>
      </ul>
    </ul>
  )
}

export default PackagesItem
