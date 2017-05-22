'use strict';
import React from 'react'
import Products from '../Products/Products'
import AccountHistory from '../History/History'

const Consumer = (props) => (
  <section className="consumer">
    <div className="wrap">
      <div className="consumer__wrap">
        <Products {...props.Products } />
        <AccountHistory {...props.AccountHistory } />
      </div>
    </div>
  </section>
)

export default Consumer
