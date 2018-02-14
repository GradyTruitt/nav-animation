import React, { Fragment } from 'react'
import styled from 'styled-components'

import homeBG1 from '../../../assets/homeBG1.jpg'
import headerAccent from '../../../assets/SVG/headerAccent.svg'

export default ({children}) => (
  <Fragment>
    <Container>
      <HeaderBar src={headerAccent}/>
      {children}
    </Container>
    <BlueBar />
  </Fragment>
)

const Container = styled.div`
  padding: 0 0 150px 73px;
  width: 100%;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 83%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 83%);
  background-image:url(${homeBG1});
  background-position: center bottom;
  background-attachment: fixed;
  background-size: cover;

  @media (max-width: 950px) {
    padding: 80px 0 120px;
  }

  @media (max-width: 550px) {
    padding: 80px 0 60px;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
  }
`
const HeaderBar = styled.img`
  @media (max-width: 950px) {
    display: none;
  }
`
const BlueBar = styled.div`
  margin: -50px 0 1000px;
  margin-left: calc(100vw - 60%);
  width: 60%;
  height: 30px;
  background-color: ${props => props.theme.secondaryColor};
  transform-origin: center;
  transform:skewX(20deg) rotate(5deg);

  @media (max-width: 950px) {
    display: none;
  }
`
