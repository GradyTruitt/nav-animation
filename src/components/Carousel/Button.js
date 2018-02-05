import styled from 'styled-components'

export const Button = styled.div`
  width: 52px;
  height: 52px;
  color: white;
  border-radius: 50%;
  border: 2px solid white;
  background-color: #6252d3;
  display: inline-block;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.9em;
  text-align: center;
  transition: 0.3s ease;
  left: ${props => (props.left ? 0 : 'initial')};
  right: ${props => (props.right ? 0 : 'initial')};

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }

  &::after {
    content: ${props => (props.left ? `'\\02039'` : `'\\0203A'`)};
  }

  &:hover {
    color: white;
    border: 2px solid white;
    background-color: #3dabf1;
  }
`
