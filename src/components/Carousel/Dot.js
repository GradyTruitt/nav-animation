import styled from 'styled-components'

export const Dot = styled.li`
  display: inline-block;
  width: 8px;
  height: 8px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${props => (props.isActive ? '#3dabf1' : '#e0e4fb')};

  &:not(:last-child) {
    margin-right: 10px;
  }
`
