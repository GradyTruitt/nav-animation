import React from 'react';
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'

export default () => (
  <Container>
    <NavBar />
    <Switch>
      <Route path='/' comonent={Home} />
    </Switch>
  </Container>
)
const Container = styled.div`
  background-color: #F0F0F7;
  overflow: hidden;
`
