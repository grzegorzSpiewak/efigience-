'use strict';
import React from 'react'
import Link from 'next/link'
import Button from '../Common/Button'
import cx from 'classnames'

const renderItems = (items) => {
  return items.map((item) =>
    <Link href={ item.href } key={ item.title }>
      <li role="menuitem" className="menu__item">
        <a title="menu__link" className={`menu__link ${item.currentPage ? 'menu__link--active' : ''}`}>
          <div className="menu__link__icon">{ item.icon }</div>
          <div className="menu__link__anchor">{ item.anchor}</div>
        </a>
      </li>
    </Link>
  )
}

const Menu = (props) => (
  <header className="menu">
    <div className="wrap">
      <div className="menu__container">
        <div className="menu__avatar">
          <div className="menu__avatar__logo"></div>
          <div className="menu__avatar__user"></div>
        </div>
        <div className="menu__user">
          <h1 className="menu__user__name"> { props.name }</h1>
          <div className="menu__user__icons">
            <i className="fa fa-envelope-o menu__user__icons__email" aria-hidden="true">
               { props.notification ? <div className="notification-recived">{ props.numberOfMessages }</div> : '' }
            </i>
            <i className="fa fa-cog menu__user__icons__cog" aria-hidden="true"></i>
          </div>
        </div>
        <button className="menu__toggle"><span className="menu__toggle__line">menu</span></button>
        <nav className="menu__menubar">
          <ul role="menubar" className="menu__list">
            { renderItems(props.MenuLinks) }
          </ul>
        </nav>
        <div className="menu__search">
          <i className="fa fa-search menu__search__icon" aria-hidden="true"></i>
          <i className="fa fa-power-off menu__search__power" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </header>
)

export default Menu
