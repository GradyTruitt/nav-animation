import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import mainLogo from '../../../assets/nav2/mainLogoWhite.svg'
import mainLogo2 from '../../../assets/nav2/mainLogo.svg'

export default class Desktop extends Component {

  state = {
    transparent: true
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
       window.pageYOffset === 0
       ? this.setState({ transparent: true })
       : this.setState({ transparent: false })
    });
  }

  render() {
    const { transparent } = this.state
    const { links, button } = this.props

    return (
      <NavBar transparent={transparent}>
        <Logo to='/' transparent={transparent}/>
        <NavLinks>
          {links.map((item, i) => {
            return(
              <NavLink key={i} to={item.path} transparent={transparent}>
                {item.text}
              </NavLink>
            )
          })}
          <Button to={button.path}>
            {button.text}
          </Button>
        </NavLinks>
      </NavBar>
    )
  }
}

const NavBar = styled.div`
  padding: ${props => props.transparent ? '25px 60px 25px 30px' : '15px 60px 15px 30px'};
  width: 100%;
  color: ${props => props.transparent ? 'white' : 'gray'};
  background-color: ${props => props.transparent ? 'transparent' : 'white'};
  box-shadow: ${props => props.transparent ? 'none' : '0 3px 10px 0 rgba(0, 0, 0, 0.15)'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  transition: 0.5s;
  z-index: 1000;
`
const Logo = styled(Link)`
  background-image: url(${props => props.transparent ? mainLogo : mainLogo2});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 120px;
  height: 21px;
`
const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavLink = styled(Link)`
  margin: 0 10px;
  padding: 0 5px 5px;
  font-size: 15pt;
  letter-spacing: -1px;
  font-family: ${props => props.theme.bodyFont};
  font-weight: ${props => props.theme[props.transparent ? 'semiBold' : 'regular']};
  transition: 0.5s;

  &:hover {
    color: #40DDDF;
  }
`
const Button = styled(Link)`
  margin: 0 0 0 15px;
  padding: 18px 30px;
  color: white;
  background-color: #40DDDF;
  border-radius: 5px;
  font-size: 15pt;
  letter-spacing: -1px;
  font-family: ${props => props.theme.bodyFont};
  font-weight: ${props => props.theme.semiBold};
  line-height: 0;
  transition: 0.3s;

  &:hover {
    background-color: #1C164E;
  }
`
