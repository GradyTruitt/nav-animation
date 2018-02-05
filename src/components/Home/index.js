import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInUp, slideInRight, slideInLeft } from 'react-animations'

import Img1 from '../../assets/header1.jpg'
import LogoImg from '../../assets/SVG/mainLogo.svg'
import LogoImg2 from '../../assets/SVG/secondaryLogo.svg'
import code from '../../assets/code.jpg'

import Title from './Title'

export default () => (
  <Fragment>
    <Container>
      <Overlay>
        <Title/>
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
    <Section2>

    </Section2>
  </Fragment>
)

const FadeInUpAnimaiton = keyframes`${fadeInUp}`
const SlideRight = keyframes`${slideInRight}`
const SlideLeft = keyframes`${slideInLeft}`

const Container = styled.div`
  width: 100%;
  ${'' /* height: calc(100vh - 160px); */}
  background-image: url(${Img1});
  background-position: center center;

  @media (max-width: 950px){
    background-size: 160%;
    background-repeat: no-repeat;
  }
`
const Overlay = styled.div`
  padding: 250px 150px 80px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content:space-between;
  background: linear-gradient(0deg, rgba(240, 240, 247, 1) 20%, rgba(240, 240, 247, 0.2));

  @media (max-width: 950px){
    padding: 120px 5% 80px;
  }
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

  @media (max-width: 950px){
    width: 30%;
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
const Section2 = styled.div`
  padding: 60px 30px;
  background-image: url(${code});
  background-size: cover;
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
