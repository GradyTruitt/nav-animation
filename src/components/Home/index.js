import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInUp, slideInRight, slideInLeft } from 'react-animations'

import Img1 from '../../assets/header1.jpg'
import LogoImg from '../../assets/SVG/mainLogo.svg'
import LogoImg2 from '../../assets/SVG/secondaryLogo.svg'

export default () => (
  <Fragment>
    <Container>
      <Overlay>
        <Logo src={LogoImg} />
        <Title>
          Pioneers of Innovation.
        </Title>
        <Subtitle>
          Enabling the full productive potential of individuals by breaking down barriers that inhibit innovation
        </Subtitle>
      </Overlay>
    </Container>
    <Section1>
      <ESTTxt>
        EST
      </ESTTxt>
      <Circle>
        <Logo2 src={LogoImg2} />
      </Circle>
      <ESTTxt>
        2018
      </ESTTxt>
    </Section1>
  </Fragment>
)

const FadeInUpAnimaiton = keyframes`${fadeInUp}`
const SlideRight = keyframes`${slideInRight}`
const SlideLeft = keyframes`${slideInLeft}`

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  background-image: url(${Img1});
  text-align: center;
`
const Overlay = styled.div`
  padding: 250px 150px 80px;
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, rgba(240, 240, 247, 1) 20%, rgba(240, 240, 247, 0.2));
`
const Title = styled.h1`
  margin: 120px 0 30px;
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-style: italic;
  ${'' /* text-transform: uppercase; */}
  font-size: 40pt;
  color: #438CFB;
  animation: 0.6s ${FadeInUpAnimaiton};
`
const Subtitle = styled.h2`
  margin: 0 auto;
  font-family: ${props => props.theme.bodyFont};
  font-size: 22pt;
  line-height: 30pt;
  font-weight: 200;
  color: #576579;
  width: 60%;
  animation: 0.6s ${FadeInUpAnimaiton};
`
const Logo = styled.img`
  width: 600px;
  animation: 0.6s ${FadeInUpAnimaiton};
`
const Section1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`
const ESTTxt = styled.h5`
  font-family: ${props => props.theme.navFont};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 10pt;
  color: #576579;
  line-height: 0;
  padding: 15px 15px;
  border-top: 1px solid #438CFB;
  border-bottom: 1px solid #438CFB;
  width: 10%;
  animation: 1s ${SlideRight};

  &:first-of-type {
    text-align: right;
    animation: 1s ${SlideLeft};
  }
`
const Circle = styled.div`
  margin: 20px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 1px solid #438CFB;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 1s ${FadeInUpAnimaiton};
`
const Logo2 = styled.img`
  margin: 0 6px 2px 0;
  width: 40px;
`
/* Carousel Info Below */

// import Img1 from '../../assets/header1.jpg'
// import Img2 from '../../assets/header2.jpg'
//
// import Carousel from './HomeCarousel'
//
// const slides = [
//   {
//     heading: 'Need Some Awesome Sh*t?',
//     subtitle: 'We are experts. We\'ll take it from here!',
//     image: Img1
//   },
//   {
//     heading: 'We know what we\'re doing',
//     subtitle: 'Let us make your sh*t look awesome!',
//     image: Img2
//   },
// ]
