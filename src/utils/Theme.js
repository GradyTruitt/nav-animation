import { injectGlobal } from 'styled-components'

export default {
  // colors
  primaryColor: '#2E3948',
  secondaryColor: '#95989A',
  lightBlue: '#35AAF4',
  purple: '#624DD6',
  pink: '#E91E63',
  green: '#36C97A',
  boxShadow: '1px 3px 30px -2px rgba(0, 0, 200, .25)',
  // fonts
  bodyFont: "'Source Sans Pro'",
  navFont: 'Montserrat',
  // screen sizes
  xl: 1250,
  desktop: 950,
  tablet: 768,
  phone: 414
}

// Inject reset.css into main style sheet;
export const inject = injectGlobal`
  /* stylelint-disable */
  html, body, div, span, applet, object, iframe, h1, h2, h3,
  h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address,
  big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var, b, u, i, center,
  dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table,
  caption, tbody, tfoot, thead, tr, th, td, article, aside,
  canvas, details, embed, figure, figcaption, footer, header,
  hgroup, menu, nav, output, ruby, section, summary, time, mark,
  audio, video, input {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    font-family: roboto, sans-serif;
    vertical-align: baseline;
    box-sizing: border-box;
    font-weight: 300;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header,
  hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after, q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    outline: none;
  }

  #root > div {
    display: flex;
    flex-direction: column;
  }
  /* stylelint-enable */
`
