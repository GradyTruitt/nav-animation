import React from 'react'

import NavTray from './NavTray'
import NavItem from './NavItem'

const nav = [
  {
    path: '/services',
    text: 'Services',
    tagline: 'Take a look at what we offer!'
  },
  {
    path: '/company',
    text: 'Company',
    tagline: 'Let us tell you about our company!'
  },
  {
    path: '/contact',
    text: 'Contact',
    tagline: 'Have a question? Drop us a line!'
  }
]

export default () => (
  <NavTray>
    {nav.map((item, i) => {
      return (
        <NavItem
          key={i}
          index={i.toString()}
          path={item.path}
          text={item.text}
          tagline={item.tagline}
        />
      )
    })}
  </NavTray>
)
