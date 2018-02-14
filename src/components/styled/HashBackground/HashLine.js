
import React, { Fragment } from 'react'
import styled from 'styled-components'

let n = window.innerWidth;

export default ({ color }) => (
  <Fragment>
    {
      [...Array(n)].map((e, i) => <Hash key={i} color={color}/> )
    }
  </Fragment>
)
const Hash = styled.div`
  pointer-events: none;
  position: relative;
  left: -100px;
  top: -50px;
  width: 2px;
  height: 200%;
  min-height: 200px;
  background-color: ${props => props.theme[props.color || 'secondaryColor']};
  margin-right: 5px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  display: inline-block;
  opacity: 0.7;
  z-index: 1;
  transition-duration: 0.6s;
`
