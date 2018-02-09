import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInUp, slideInRight, slideInLeft } from 'react-animations'

import LogoImg2 from '../../../assets/SVG/secondaryLogo.svg'

export default () => (
  <Container>
    <Text>
      EST
    </Text>
    <Circle>
      <Logo2 src={LogoImg2} />
    </Circle>
    <Text>
      2018
    </Text>
  </Container>
)

const FadeInUpAnimaiton = keyframes`${fadeInUp}`
const SlideRight = keyframes`${slideInRight}`
const SlideLeft = keyframes`${slideInLeft}`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`
const Text = styled.h5`
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
