'use strict';
import React from 'react'
import Link from 'next/link'
import Button from '../Common/Button'

const Placeholder = (props) => (
  <section className="placeholder">
    <h1 className="placeholder__title">{props.title}</h1>
    <Button {...props.button} />
  </section>
)

export default Placeholder
