'use strict';
import React from 'react'
import Head from 'next/head'

const HeadElement = (props) => (
  <Head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

    <title>{props.pageTitle}</title>
    <link rel='stylesheet' href='/static/css/main.css' />

    <meta name="description" content={`${props.metaDescription}`}/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:800,800i%7CRaleway:700%7CSource+Sans+Pro:300,400,700" media="all" />
  </Head>
)

export default HeadElement
