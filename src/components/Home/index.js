import React, { Fragment } from 'react'

import Header from './Header'
import Carousel from './Carousel'

const slides = [
  {
    title: 'Software Engineering',
    subTitle: 'for the modern web.',
    buttonText: 'LEARN MORE',
    path: '/'
  },
  {
    title: 'Technical Expertise',
    subTitle: 'Fueled by innovation.',
    buttonText: 'WORK WITH US',
    path: '/'
  },
  {
    title: 'Web App Development',
    subTitle: 'Built on modern frameworks.',
    buttonText: 'OUR DEV PROCESS',
    path: '/'
  }
]

export default () => (
  <Fragment>
    <Header>
      <Carousel slides={slides}/>
    </Header>
  </Fragment>
)
