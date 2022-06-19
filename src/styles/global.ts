import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: black;
    color: white;
    text-align: center;
    font-family: sans-serif;
  }
  #container{
    width: 80%;
    max-width: 400px;
    margin-inline: auto;
  }
`