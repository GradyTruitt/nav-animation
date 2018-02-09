import React, { Fragment } from 'react'
import styled from 'styled-components'

import Img1 from '../../assets/header1.jpg'
import code from '../../assets/code.jpg'

import Title from './Header/Title'
import Section1 from './Section1'

let n = window.innerWidth;

export default () => (
  <Fragment>
    <Container>
      <Overlay>
        <Title/>
      </Overlay>
    </Container>
    <HashContainer>
      <Text>
        HEY THERE
      </Text>
      {
        [...Array(n)].map((e, i) =>
        <Hash key={i}/>
      )
    }
  </HashContainer>
    <Section1 />
    <Section2>
    </Section2>
  </Fragment>
)

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
  padding: 250px 150px 120px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content:space-between;
  background: linear-gradient(0deg, rgba(240, 240, 247, 1) 20%, rgba(240, 240, 247, 0.2));

  @media (max-width: 950px){
    padding: 120px 5% 80px;
  }
`
const Section2 = styled.div`
  padding: 60px 30px;
  background-image: url(${code});
  background-size: cover;
`
const HashContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 100px;
  background-color: #F0F0F7;
  overflow: hidden;
  white-space: nowrap;
  color: white;
  cursor: default;
`
const Hash = styled.div`
  pointer-events: none;
  position: relative;
  left: -100px;
  top: -50px;
  width: 1px;
  height: 200%;
  min-height: 200px;
  background: #48D7B5;
  margin-right: 5px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  display: inline-block;
  opacity: 0.7;
  z-index: 1;
  transition-duration: 0.6s;

  ${HashContainer}:hover & {
    background: red;
  }
`
const Text = styled.h1`
  position: relative;
  margin: 0 15px -90px;
  width: 60%;
  color: white;
  font-size: 90px;
  font-weight: 700;
  z-index: 900;
`
