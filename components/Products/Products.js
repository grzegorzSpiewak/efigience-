'use strict';
import React from 'react'
import Link from 'next/link'
import Button from '../Common/Button'

const renderItems = (items) => {
  return items.map((item) =>
    <div className={`products__item ${item.active ? 'products__item--active' : ''}`} key={ item.label }>
      <div className="products__item__icon">
        <i className={`${item.icon} products__item__icon__style` } aria-hidden="true">
          { item.notification ? <div className="notification-recived">{ item.numberOfMessages }</div> : '' }
        </i>
      </div>
      <div className="products__item__info">
        <h1 className="products__item__info__label">{ item.label }</h1>
        <p className="products__item__info__value">{ item.value } { item.currency }</p>
      </div>
    </div>
  )
}

const Products = (props) => (
  <section className="products">
    <div className="products__container">
      <h1 className="products__title">{ props.title }</h1>
      <div className="products__list">
        { renderItems(props.items) }
      </div>
    </div>
  </section>
)

export default Products
