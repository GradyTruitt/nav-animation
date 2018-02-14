import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import HashBox from '../../styled/HashBackground/HashBox'
import Hash from '../../styled/HashBackground/HashLine'

export default ({ title, subTitle, buttonText, path }) => (
  <Container >
    <Content>
      <Title>
        {title}
      </Title>
      <Divider>
        <Hash />
      </Divider>
      <SubTitle>
        {subTitle}
      </SubTitle>
      {
        buttonText
        ?
        (<Button to={path}>
          {buttonText}
        </Button>)
        :
        null
      }
    </Content>
    <Graphics>

    </Graphics>
  </Container>
)
const Container = styled.div`
  margin: 0 auto 25px;
  height: 500px;
  width: 95%;
  display: flex;
  justify-content: center;
`
const Content = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`
const Graphics = styled.div`
  margin-left: 40px;
  width: 35%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 58pt;
  width: 100%;
  font-weight: 700;
  font-family: ${props => props.theme.navFont};
  color: ${props => props.theme.secondaryColor};
  text-shadow:  0px 0px 10px rgba(0, 0, 0, 0.3);
  text-align: left;
  letter-spacing: -3px;
  line-height: 55pt;
  ${'' /* text-transform: uppercase; */}
`
const Divider = HashBox.extend`
  margin: 10px 0;
  width: 200px;
  height: 10px;
`
const SubTitle = styled.h1`
  font-size: 30pt;
  width: 100%;
  color: white;
  text-align: left;
  font-weight: 500;
  font-style: italic;
  font-family: ${props => props.theme.bodyFont};
`
const Button = styled(Link)`
  margin: 20px 0;
  font-family: ${props => props.theme.navFont};
  font-size: 14pt;
  font-weight: 700;
  line-height: 0;
  padding: 25px 35px;
  color: white;
  background-color: ${props => props.theme.secondaryColor};
  border-radius: 5px;
  transition: 0.5s;

  &:hover {
    color: ${props => props.theme.secondaryColor};
    background: white;
    box-shadow: 0 0 10px 5px rgba(28, 27, 71, 0.3);
  }
`
