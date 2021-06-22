import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: min(max(18px, 2vw), 24px);
    /* transform-box: border-box; */
  }
`

export default GlobalStyles;
