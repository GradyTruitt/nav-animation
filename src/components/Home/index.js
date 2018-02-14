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
    title: 'Slide 2',
    subTitle: 'SubTitle'
  },
  {
    title: 'Slide 3',
    subTitle: 'SubTitle'
  }
]

export default () => (
  <Fragment>
    <Header>
      <Carousel slides={slides}/>
    </Header>
  </Fragment>
)
