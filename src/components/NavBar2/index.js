import React from 'react'
import Media from 'react-media'

import DesktopNav from './Desktop'
import MobileNav from './Mobile'

const navItems = {
  links: [
    {
      text: 'Hello',
      path: '/'
    },
    {
      text: 'Company',
      path: '/company',
    },
    {
      text: 'Services',
      path: '/services',
    }
  ]
}

const button = {
    text: 'Contact',
    path: '/contact',
  }

export default () => (
  <Media query="(max-width: 950px)">
    {matches =>
      matches
      ?
      <MobileNav {...navItems} button={button} />
      :
      <DesktopNav {...navItems} button={button} />
    }
  </Media>
)
