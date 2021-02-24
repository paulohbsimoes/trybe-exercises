import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --blue-jeans: #5aa9e6;
    --light-sky-blue: #7fc8f8;
    --cultured: #f9f9f9;
    --minion-yellow: #ffe45e;
    --french-pink: #ff6392;
  }

  body {
    background-color: var(--cultured);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyles;
