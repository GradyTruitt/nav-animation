import React, { Component } from 'react'

import NavTray from './NavTray'
import NavItem from './NavItem'

const nav = [
  {
    path: '/services',
    text: 'Services',
    tagline: 'Take a look at what we offer.'
  },
  {
    path: '/company',
    text: 'Company',
    tagline: 'Let us tell you about our company.'
  },
  {
    path: '/contact',
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
      <NavTray>
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
      </NavTray>
    )
  }
}
