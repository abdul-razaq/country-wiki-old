import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

  html {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
  }

  body {
    background-color: #f4f4f4;
    line-height: 3rem;
    font-size: 2rem;
    font-family: 'Fira Sans', sans-serif;
    color: #444;

    &::selection {
      color: #2980b9; 
    }
  }
    
`;

export default GlobalStyle;
