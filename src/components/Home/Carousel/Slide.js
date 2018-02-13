import React from 'react'
import styled from 'styled-components'

export default ({ title, subTitle }) => (
  <Container >
    <Title>
      {title}
    </Title>
    <SubTitle>
      {subTitle}
    </SubTitle>
  </Container>
)
const Container = styled.div`
  margin: 0 auto;
  height: 500px;
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 55pt;
  color: white;
  text-align: center;
`
const SubTitle = styled.h1`
  font-size: 25pt;
  color: white;
  text-align: center;
`
