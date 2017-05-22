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
import Analyse from '../data/Analyse'

export default () => (
  <div>
    <Head {...Analyse.Head} />
    <Menu {...Analyse.Menu} />
    <Placeholder {...Analyse.Placeholder} />
  </div>
)
