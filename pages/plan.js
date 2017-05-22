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
import Plan from '../data/Plan'

export default () => (
  <div>
    <Head {...Plan.Head} />
    <Menu {...Plan.Menu} />
    <Placeholder {...Plan.Placeholder} />
  </div>
)
