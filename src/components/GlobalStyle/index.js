import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-size: 12px;
    color: #fff;
    outline: none!important;
  }

  html, body {
    margin: 0;
    height: 100%;
  }

  #root {
      background-color: #2A272D;
  }
`;
