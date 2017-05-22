'use strict';
import React from 'react'

const renderItems = (items) => {
  return items.map((item) =>
    <div className="history__transaction" key={ item.name }>
      <div className="history__transaction__date">{ item.date }</div>
      <div className="history__transaction__info">
        <h1 className="history__transaction__info__name">{ item.name }</h1>
        <h2 className="history__transaction__info__genre">{ item.genre }
          <i className="history__transaction__info__genre__angle fa fa-angle-down" aria-hidden="true"></i>
        </h2>
      </div>
      <div className={`history__transaction__value ${item.income ? 'history__transaction__value--income': ''}`}>{ item.value } { item.currency}</div>
    </div>
  )
}

const History = (props) => (
  <section className="history">
    <div className="history__container">
      <h1 className="history__title">{ props.title }</h1>
      <div className="history__window">
        { renderItems(props.transactions)}
      </div>
    </div>
  </section>
)

export default History
