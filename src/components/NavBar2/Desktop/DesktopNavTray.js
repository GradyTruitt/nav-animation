import React, { Component } from 'react'
import styled from 'styled-components'
import gsap from '../../../utils/Animations'

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
    this.openTray();
  }

  openTray = () => {
    gsap.toggleDesktopNav(this.state.open);
  }

  render() {
    const { open } = this.state;
    const { children } = this.props;

    return (
      <Container id='nav-tray'>
        <Hamburger open={open} click={this.handleClick}/>
        <RightBorder />
        <MenuItems id='nav-items'>
          {children}
        </MenuItems>
        <Logo id='nav-logo' src={LogoIMG}/>
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
  width:70px;  box-shadow: none;
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
  left: -460px;
  width: 460px;
  height: auto;
`
const Logo = styled.img`
  margin: 0 auto;
  position: absolute;
  bottom: 80px;
  left: -40px;
  transform: rotate(-90deg);
  width: 150px;
`
