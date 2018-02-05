import React from 'react'

import { Carousel, Dot } from '../Carousel'
import Slide from './Slide'

export default ({ slides }) => (
  <Carousel
    slides={slides}
    interval={5000}
    dotComponent={Dot}
    slideRenderer={slideProps => <Slide {...slideProps} />}
  />
)
