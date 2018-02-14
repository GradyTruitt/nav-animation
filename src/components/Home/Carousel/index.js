import React from 'react'

import { Carousel, Dot, Button } from '../../Carousel'
import Slide from './Slide'

export default ({slides}) => (
  <Carousel
    slides={slides}
    interval={8000}
    buttonComponent={Button}
    dotComponent={Dot}
    slideRenderer={slideProps => <Slide {...slideProps} />}
  />
)
