'use strict'
import React from 'react'
/**
 * Components
 */
import Head from '../components/Head/Head'
import Menu from '../components/Menu/Menu'
import Finance from '../components/Finance/Finance'
import Consumer from '../components/Consumer/Consumer'
import Graph from '../components/Graph/Graph'

/**
 * Content
 */
import Homepage from '../data/Homepage'

export default () => (
  <div>
    <Head { ...Homepage.Head } />
    <Menu { ...Homepage.Menu } />
    <Finance { ...Homepage.Finance }/>
    <Graph />
    <Consumer { ...Homepage } />
  </div>
)
