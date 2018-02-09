import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { slideInLeft, slideInRight, fadeInDown } from 'react-animations'

import homeBG1 from '../../assets/homeBG1.jpg'
import headerAccent from '../../assets/SVG/headerAccent.svg'
import HashBox from '../HashBackground/HashBox'
import Hash from '../HashBackground/HashLine'

export default () => (
  <Fragment>
    <Container>
      <HeaderBar src={headerAccent}/>
      <HashBox1>
        <Hash />
      </HashBox1>
      <HashBox2>
        <Hash />
      </HashBox2>
      <HeadingContaier>
        <SubText>
          SOFTWARE
        </SubText>
        <HeadingText>
          INNOVATION
        </HeadingText>
        <SubText>
          FOR THE MODERN WEB.
        </SubText>
      </HeadingContaier>
    </Container>
    <BlueBar />
  </Fragment>
)

const slideLeft = keyframes`${slideInLeft}`
const slideRight = keyframes`${slideInRight}`
const fadeAnimation = keyframes`${fadeInDown}`

const Container = styled.div`
  padding: 0 0 0 73px;
  width: 100%;
  height: 700px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 83%);
  background-image:url(${homeBG1});
  background-position: center bottom;
  background-attachment: fixed;
  background-size: cover;
`
const HeaderBar = styled.img`
`
const HeadingContaier = styled.div`
  margin: 80px auto;
  width: 58%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const HeadingText = styled.h1`
  animation: ${fadeAnimation} 1.3s;
  font-family: ${props => props.theme.navFont};
  font-weight: 800;
  color: ${props => props.theme.secondaryColor};
  font-size: 85pt;
  z-index: 100;
  width: 100%;
  text-align: center;
`
const SubText = styled.h1`
  animation: ${fadeAnimation} 1s;
  padding: 8px 30px;
  font-family: ${props => props.theme.navFont};
  font-weight: 600;
  color: ${props => props.theme.almondColor};
  font-size: 35pt;
  line-height: 15pt;
  width: 100%;
  z-index: 100;

  &:last-of-type {
    text-align: right;
  }
`
const BlueBar = styled.div`
  margin: -50px 0 1000px;
  margin-left: calc(100vw - 60%);
  width: 60%;
  height: 30px;
  background-color: ${props => props.theme.secondaryColor};
  transform-origin: center;
  transform:skewX(20deg) rotate(5.5deg);
`
const HashBox1 = HashBox.extend`
  animation: ${slideLeft} 1.2s;
  position:absolute;
  top: 360px;
  width: 600px;
  height: 120px;
`
const HashBox2 = HashBox.extend`
  animation: ${slideRight} 1.2s;
  position:absolute;
  top: 250px;
  right: 0;
  width: 750px;
  height: 140px;
`
