'use strict';
import React from 'react'
import Button from '../Common/Button'

const renderItems = (items) => {
  return items.map((item) =>
    <div className="finance__state__founds__item" key={ item.title }>
      <h1 className="finance__state__founds__item__title">{ item.title }</h1>
      <p className="finance__state__founds__item__value">{ item.value } { item.currency} </p>
    </div>
  )
}

const renderButtons = (buttons) => {
  return buttons.map((button) =>
    <Button {...button} key={button.title}/>
  )
}

const Finance = (props) => (
  <section className="finance">
    <div className="wrap">
      <div className="finance__wrapper">
        <div className="finance__state">
          <h1 className="finance__state__title">{ props.title }</h1>
          <div className="finance__state__founds">
            { renderItems(props.funds) }
          </div>
        </div>
        <div className="finance__options">
          <div className="finance__options__add">
            <h1 className="finance__options__add__label">{ props.fundsLabel }</h1>
              { renderButtons(props.buttons) }
          </div>
          <div className="finance__options__account">
            <h1 className="finance__options__account__label">{ props.analysisLabel }</h1>
            <label className="switch">
              <input type="checkbox" />
              <div className="slider"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Finance
