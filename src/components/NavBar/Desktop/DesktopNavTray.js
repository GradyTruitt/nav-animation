import React, { Component } from 'react'
import styled from 'styled-components'

import LogoIMG from '../../../assets/SVG/LogoWhite.svg'
import Mountains from '../../../assets/mountain.png'
import Hamburger from '../HamburgerIcon'

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
        <Hamburger open={open} click={this.handleClick}/>
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
  background-color: ${props => props.theme.primaryColor};
  transition: 0.3s;
  width:${props => props.open ? 550 : 70}px;
  box-shadow: ${props => props.open ? '0 0 60px 30px rgba(0, 0, 0, .4)' : 'none'};
  z-index: 1000;
`
const RightBorder = styled.div`
  margin-left: 100%;
  height: 100vh;
  width: 3px;
  background-color: ${props => props.theme.secondaryColor};
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
