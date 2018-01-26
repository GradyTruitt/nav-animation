import React, { Component } from 'react'
import styled from 'styled-components'

import leftArrow from '../../assets/rightArrow3.svg'
import hamburger from '../../assets/hamburger3.svg'

export default class NavBar extends Component {

  state = {
    open: false
  }

  handleClick = () => {
    const { open } = this.state

    open ? this.setState({ open: false }) : this.setState({ open: true });
  }

  render() {
    const { open } = this.state;

    return (
      <Container open={open}>
        <MenuBox open={open} onClick={this.handleClick} />
        <Menu open={open} src={hamburger} />
        <CloseBtn open={open} onClick={this.handleClick}>
          <Arrow open={open} src={leftArrow} />
        </CloseBtn>
        <RightBorder />
      </Container>
    )
  }
}

const Container = styled.div`
  height: 100vh;
  background-color: #5638EF;
  transition: 0.3s;
  width:${props => props.open ? 550 : 70}px;
  box-shadow: ${props => props.open ? 'none' : '0 0 0 50px rgba(25, 25, 84, 1)'}
`
const RightBorder = styled.div`
  margin-left: 100%;
  height: 100vh;
  width: 3px;
  background-color: #48D7B5;
`
const CloseBtn = styled.div`
  position: absolute;
  top: 50%;
  margin: ${props => props.open ? '-40px 0 0 505px' : '-40px 0 0 25px'};
  width: 45px;
  height: 60px;
  border-radius: 30px 0 0 30px;
  background-color: #48D7B5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  opacity: ${props => props.open ? 1 : 0};

  &:hover {
    width: 55px;
    height: 70px;
    border-radius: 35px 0 0 35px;
    margin: ${props => props.open ? '-45px 0 0 495px' : '-45px 0 0 25px'};
    transition: 0.3s;
  }
`
const Arrow = styled.img`
  margin: 0 0 0 5px;
  width: 15px;
  cursor: pointer;
  transition: 0.2s;
  visibility: ${props => props.open ? 'auto' : 'hidden'};
`
const MenuBox = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  transition: .3s;
  cursor: pointer;
  border-bottom: 0.5px solid #5B7EFF;
  opacity: ${props => props.open ? 0 : 1};

  &:hover {
    border-bottom: none;
    border-left: 70px solid #5B7EFF;
  }
`
const Menu = styled.img`
  opacity: ${props => props.open ? 0 : 1};
  position: absolute;
  margin: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  pointer-events: none;
`
