import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    min-width: 1020px;
  }

  img {
    max-width: 100%;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #11151C;
  }

  button {
    cursor: pointer;
  }
`;
