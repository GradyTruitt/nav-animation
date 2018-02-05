import React from 'react'
import styled from 'styled-components'

export default ({ heading, subtitle, image }) => (
  <Container image={image}>
    <Overlay>
      <Heading>
        {heading}
      </Heading>
      <Subtitle>
        {subtitle}
      </Subtitle>
      <Divider />
    </Overlay>
  </Container>
)
const Container = styled.div`
  height: 500px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
`
const Overlay = styled.div `
  height: 100%;
  width: 100%;
  ${'' /* background-color: rgba(72, 215, 181, 0.6); */}
  background: linear-gradient(45deg, rgba(91, 126, 255, 0.8), rgba(72, 215, 181, 0.9));
  padding: 150px;
  text-align: center;
`
const Heading = styled.h1`
  font-family: ${props => props.theme.bodyFont};
  font-weight: 700;
  color: white;
  font-size: 55pt;
  z-index: 500;
`
const Subtitle = styled.h2`
  margin: 20px 0;
  font-family: ${props => props.theme.bodyFont};
  font-weight: 600;
  color: #1C295F;
  font-size: 28pt;
  z-index: 500;
`
const Divider = styled.div`
width: 100px;
height: 2px;
margin: 30px auto;
background-color: #1C295F;
`
