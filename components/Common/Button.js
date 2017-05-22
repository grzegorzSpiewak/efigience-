'use strict';
import React from 'react'
import Link from 'next/link'

const Button = (props) => {

  return (
    <Link href={ `${props.href}` } key={ props.title }>
      <a href={ props.href } title={ props.title } target="_blank" className="btn">{ props.anchor }</a>
    </Link>
  )
}

export default Button
