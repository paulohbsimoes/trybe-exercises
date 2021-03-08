import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {

    --blue-jeans: #5aa9e6;

    --light-sky-blue: #7fc8f8;

    --cultured: #f9f9f9;

    --minion-yellow: #ffe45e;

    --french-pink: #ff6392;

    --custom-red: #a00;
  }

  body {
    background-color: var(--cultured);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
