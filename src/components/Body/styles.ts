import styled from 'styled-components'

export const BodyMainStyles = styled.main`
  input, button{
    display: block;
    width: 100%;

    padding: 20px;
    font-size: 20px;

    border-radius: 4px;
  }

  input{
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }

  button{
    border: none;
    background-color: blueviolet;
    color: white;
    transition: filter .2s;
  }

  button:hover{
    filter: brightness(1.2);
    cursor: pointer;
  }

  #showAnswerAndQuestion{
    margin-top: 20px;

    transition: opacity 1s;
  }

  #showAnswerAndQuestion div{
    font-size: 16;
    font-weight: normal;
    opacity: 0.9;
    margin-bottom: 10px;
  }
`