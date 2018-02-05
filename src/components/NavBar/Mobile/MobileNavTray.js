import React, { Component } from 'react'
import styled from 'styled-components'

import leftArrow from '../../../assets/rightArrow3.svg'
import hamburger from '../../../assets/hamburger3.svg'
import LogoIMG from '../../../assets/SVG/LogoWhite.svg'
import Mountains from '../../../assets/mountain.png'

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
        <Logo open={open} src={LogoIMG}/>
        <MenuBox open={open} onClick={this.handleClick} />
        <Menu open={open} src={hamburger} />
        <CloseBtn open={open} onClick={this.handleClick}>
          <Arrow open={open} src={leftArrow} />
        </CloseBtn>
        <BottomBorder open={open}/>
        <MenuItems open={open}>
          {children}
        </MenuItems>
      </Container>
    )
  }
}

const Container = styled.div`
  position: fixed;
  height: ${props => props.open ? 520 : 70}px;
  background-image: url(${Mountains});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #1C295F;
  transition: 0.3s;
  width: 100%;
  box-shadow: ${props => props.open ? '0 0 60px 30px rgba(0, 0, 0, .4)' : 'none'};
  z-index: 1000;
  transition-delay: ${props => props.open ? 'none' : '0.2s'};
`
const BottomBorder = styled.div`
  margin-top: ${props => props.open ? 520 : 70}px;
  height: 3px;
  width: 100%;
  transition-duration: 0.3s;
  background-color: #48D7B5;
  transition-delay: ${props => props.open ? 'none' : '0.2s'};
`
const CloseBtn = styled.div`
  position: absolute;
  margin: ${props => props.open ? 'calc(520px - 55px) calc(50% - 40px) 0' : '15px calc(50% - 40px) 0'};
  outline: none;
  width: 80px;
  height: 55px;
  border-radius: 40px 40px 0 0;
  background-color: #48D7B5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  opacity: ${props => props.open ? 1 : 0};
  transition-delay: ${props => props.open ? 'none' : '0.2s'};
`
const Arrow = styled.img`
  margin-top: 10px;
  width: 15px;
  cursor: pointer;
  transition: 0.2s;
  transform-origin: 50%;
  transform: rotate(90deg);
  visibility: ${props => props.open ? 'auto' : 'hidden'};
`
const MenuBox = styled.div`
  position: absolute;
  right: 0;
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
  right: 0;
  margin: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  pointer-events: none;
`
const MenuItems = styled.div`
  position: absolute;
  top: 80px;
  left: ${props => props.open ? 0 : '-100%'};
  transition: .3s;
  width: 100%;
  height: auto;
`
const Logo = styled.img`
  position: absolute;
  left: 15px;
  top: 25px;
  width: 150px;
`
