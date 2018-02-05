import React, { Component } from 'react'
import styled from 'styled-components'

import leftArrow from '../../assets/rightArrow3.svg'
import hamburger from '../../assets/hamburger3.svg'
import LogoIMG from '../../assets/SVG/LogoWhite.svg'
import Mountains from '../../assets/mountain.png'

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
    const { children } = this.props;

    return (
      <Container open={open}>
        <MenuBox open={open} onClick={this.handleClick} />
        <Menu open={open} src={hamburger} />
        <CloseBtn open={open} onClick={this.handleClick}>
          <Arrow open={open} src={leftArrow} />
        </CloseBtn>
        <RightBorder />
        <MenuItems open={open}>
          {children}
        </MenuItems>
        <Logo open={open} src={LogoIMG}/>
      </Container>
    )
  }
}

const Container = styled.div`
  position: fixed;
  height: 100vh;
  background-image: url(${Mountains});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #1C295F;
  transition: 0.3s;
  width:${props => props.open ? 550 : 70}px;
  box-shadow: ${props => props.open ? '0 0 60px 30px rgba(0, 0, 0, .4)' : 'none'};
  z-index: 1000;
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
  display: ${props => props.open ? 'none' : 'block'};

  &:hover {
    border-bottom: none;
    border-left: 70px solid #48D7B5;
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
const MenuItems = styled.div`
  position: absolute;
  top: 100px;
  left: ${props => props.open ? 0 : '-460px'};
  transition: .3s;
  width: 460px;
  height: auto;
`
const Logo = styled.img`
  margin: 0 auto;
  position: absolute;
  bottom: ${props => props.open ? '30px' : '80px'};
  left: ${props => props.open ? '200px' : '-40px'};
  transition: 0.3s;
  transform: ${props => props.open ? 'none' : 'rotate(-90deg)'};
  width: 150px;
`
