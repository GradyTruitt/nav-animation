import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
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
      <Button target='_blank' to='/'>
        Learn More
      </Button>
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
  height: 800px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 83%);
  background-image:url(${homeBG1});
  background-position: center bottom;
  background-attachment: fixed;
  background-size: cover;

  @media (max-width: 950px) {
    padding: 0;
  }
`
const HeaderBar = styled.img`
  @media (max-width: 950px) {
    display: none;
  }
`
const HeadingContaier = styled.div`
  margin: 80px auto;
  width: 78%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1050px) {
    margin: 150px auto;
  }

  @media (max-width: 950px) {
    margin: 250px auto;
  }
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

  @media (max-width: 1050px) {
    font-size: 55pt;
  }

  @media (max-width: 950px) {
    font-size: 40pt;
  }
`
const SubText = styled.h1`
  animation: ${fadeAnimation} 1s;
  padding: 8px 11%;
  font-family: ${props => props.theme.navFont};
  font-weight: 600;
  color: ${props => props.theme.almondColor};
  font-size: 35pt;
  line-height: 13pt;
  width: 100%;
  z-index: 100;

  &:last-of-type {
    text-align: right;
  }

  @media (max-width: 1050px) {
    font-size: 24pt;
    padding: 8px 15%;
  }

  @media (max-width: 950px) {
    font-size: 20pt;
    padding: 10px 0;
    text-align: center;

    &:last-of-type {
      text-align: center;
    }
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

  @media (max-width: 950px) {
    display: none;
  }
`
const HashBox1 = HashBox.extend`
  animation: ${slideLeft} 1.2s;
  position:absolute;
  top: 360px;
  width: 41%;
  height: 100px;

  @media (max-width: 1050px) {
    top: 330px;
  }

  @media (max-width: 950px) {
    width: 45%
    height: 150px;
    top: 280px;
  }
`
const HashBox2 = HashBox.extend`
  animation: ${slideRight} 1.2s;
  position:absolute;
  top: 250px;
  right: 0;
  width: 50%;
  height: 140px;

  @media (max-width: 1050px) {
    top: 270px;
  }

  @media (max-width: 950px) {
    width: 50%
    height: 150px;
    top: 190px;
  }
`
const Button = styled(Link)`
  display: block;
  margin: 0 auto;
  padding: 25px 35px;
  text-align: center;
  width: 220px;
  line-height: 0;
  font-size: 14pt;
  font-weight: 600;
  color: ${props => props.theme.almondColor};
  background-color: ${props => props.theme.secondaryColor};
  border-radius: 25px;
  transition-duration: 0.5s;
  box-shadow: 0 5px 20px 5px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: ${props => props.theme.almondColor};
    color: ${props => props.theme.secondaryColor};
    box-shadow: none;
  }
`
