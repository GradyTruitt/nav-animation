import React, { Component } from 'react'
import Media from 'react-media'

import DesktopNavTray from './Desktop/DesktopNavTray'
import MobileNavTray from './Mobile/MobileNavTray'
import NavItem from './NavItem'

const nav = [
  {
    path: '/',
    text: 'Services',
    tagline: 'Take a look at what we offer.'
  },
  {
    path: '/',
    text: 'Company',
    tagline: 'Let us tell you about our company.'
  },
  {
    path: '/',
    text: 'Contact',
    tagline: 'Have a question? Drop us a line.'
  }
]

export default class NavBar extends Component {

  state = {
    active: true
  }

  onOpen = () => {
    this.state.active ? this.setState({ active: false }) : this.setState({ active: true })
  }

  render() {
    const { active } = this.state
    return (
      <Media query='(max-width: 950px)'>
        {
          matches => matches
          ?
          <MobileNavTray>
            {nav.map((item, i) => {
              return (
                <NavItem
                  key={i}
                  onOpen={this.onOpen.bind(this)}
                  index={i.toString()}
                  path={item.path}
                  text={item.text}
                  tagline={item.tagline}
                  active={active}
                />
              )
            })}
          </MobileNavTray>
          :
          <DesktopNavTray>
            {nav.map((item, i) => {
              return (
                <NavItem
                  key={i}
                  onOpen={this.onOpen.bind(this)}
                  index={i.toString()}
                  path={item.path}
                  text={item.text}
                  tagline={item.tagline}
                  active={active}
                />
              )
            })}
          </DesktopNavTray>
        }
      </Media>
    )
  }
}
