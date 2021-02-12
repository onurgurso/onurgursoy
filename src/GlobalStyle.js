import { createGlobalStyle } from "styled-components";
import spacebg from "./components/main/img/space8bit.jpg";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    background: linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.3)), url(${spacebg}) no-repeat center center fixed;
    background-size: cover; 
    background-attachment: fixed;
    min-height: 100vh;
    position: relative;
  }

  h1{
    font-family: 'Press Start 2P';
    font-size: 50px;
    color: white;
    filter: drop-shadow(10px 10px 10px #2efddf);
  }
  
  h2{
    font-family: 'Press Start 2P';
    font-size: 20px;
    color: white;
  }

  p{
    font-family: 'Quicksand', sans-serif;
    color: white;
    font-weight: bold;
  }
  a{
    font-size: 22px;
    font-family: 'Press Start 2P';
    color: white;
    text-transform: uppercase;
    text-decoration: none;

    &:hover{
      color: #FF217C;
    }
    &:active{
      color: #FF217C;
    }
  }

  @media (max-width: 850px) {

    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 16px;
    }
    p{
      font-size: 14px;
    }
  }
  @media (max-width: 600px) {

    h1 {
      font-size: 25px;
    }
    h2 {
      font-size: 14px;
    }
    p{
      font-size: 14px;
    }
  }
  
`;

export default GlobalStyle;
