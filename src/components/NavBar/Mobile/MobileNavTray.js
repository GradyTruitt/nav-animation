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
        <Logo open={open} src={LogoIMG}/>
        <Hamburger open={open} click={this.handleClick}/>
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
  height: ${props => props.open ? 460 : 70}px;
  background-image: url(${Mountains});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.primaryColor};
  transition: 0.3s;
  width: 100%;
  box-shadow: ${props => props.open ? '0 0 60px 30px rgba(0, 0, 0, .4)' : 'none'};
  z-index: 1000;
  transition-delay: ${props => props.open ? 'none' : '0.2s'};
`
const BottomBorder = styled.div`
  margin-top: ${props => props.open ? 460 : 70}px;
  height: 3px;
  width: 100%;
  transition-duration: 0.3s;
  background-color: ${props => props.theme.secondaryColor};
  transition-delay: ${props => props.open ? 'none' : '0.2s'};
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
