import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { slideInLeft } from 'react-animations'

export default () => (
  <Fragment>
    <Container>
      <Heading>
        Innovation Engineering
      </Heading>
      <Divider />
      <Subtitle>
        Enable the full productive potential of individuals by breaking down barriers that inhibit innovation
      </Subtitle>
      <Button to='/contact'>
      Contact us
    </Button>
  </Container>
  </Fragment>
)
const SlideIn = keyframes`${slideInLeft}`

const Container = styled.div`
  margin: 0 0 0 60px;
  width: 40%;
  animation: 0.4s ${SlideIn};

  @media (max-width: 950px){
    width: 60%;
    margin: 0;
  }

  @media (max-width: 570px){
    width: 100%;
    margin: 0;
  }
`
const Heading = styled.h1`
  margin: 0;
  font-family: ${props => props.theme.navFont};
  font-weight: 700;
  font-size: 35pt;
  line-height: 40pt;
  color: #2B3867;
  animation: 0.7s ${SlideIn};
`
const Divider = styled.div`
  margin: 25px 0 20px;
  width: 80px;
  height: 5px;
  background-color: #48D7B5;
`
const Subtitle = styled.p`
  margin: 0 0 40px;
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-size: 18pt;
  line-height: 30pt;
  color: #576579;
  animation: 0.5s ${SlideIn};
`
const Button = styled(Link)`
  color: white;
  font-size: 12pt;
  line-height: 0;
  font-weight: 700;
  font-family: ${props => props.theme.navFont};
  width: 250px;
  background-color: #48D7B5;
  padding: 15px 50px;
  border-radius: 30px;
`
