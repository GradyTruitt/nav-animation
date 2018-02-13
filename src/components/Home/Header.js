import React, { Fragment } from 'react'
import styled from 'styled-components'

import homeBG1 from '../../assets/homeBG1.jpg'
import headerAccent from '../../assets/SVG/headerAccent.svg'

export default () => (
  <Fragment>
    <Container>
      <HeaderBar src={headerAccent}/>
    </Container>
    <BlueBar />
  </Fragment>
)

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
