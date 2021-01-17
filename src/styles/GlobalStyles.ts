import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, input, button {
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary-color: #DE5C5E;
    --primary-color-hover: #CE5C5E;
    --dark-color: #263238;
    --secondary-color: #939E9E;
    --light-color: #F5F5F5;
  }

  a {
    text-decoration: none;
  }
  
  html, body, #root {
    height: 100vh;
  }
  @media (min-width: 700px){
    :root {
      font-size: 62.5%;
    }
  }
  @media (max-width: 600px){
    :root {
      font-size: 55%;
    }
  }
  @media (max-width: 400px){
    :root {
      font-size: 35%;
    }
  }
`;