'use strict'
import React from 'react'
/**
 * Components
 */
import Head from "../components/Head/Head"
import Menu from "../components/Menu/Menu"
import Placeholder from "../components/Placeholder/Placeholder"

/**
 * Content
 */
import Earn from '../data/Earn'

export default () => (
  <div>
    <Head {...Earn.Head} />
    <Menu {...Earn.Menu} />
    <Placeholder {...Earn.Placeholder} />
  </div>
)
