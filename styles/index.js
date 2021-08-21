import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    *:focus{
        outline: 0;
    }

   
    html,
    body
     body > div:first-child,
    div#__next,
     div#__next > div,
    #root
    {
        height: 100%;
    }



    body {
        -moz-font-smoothing: antialiased !important;
        -webkit-font-smoothing: antialiased !important;
        color: #fbfdfd;
        /* text-rendering: optimizeLegibility; */
    }

    textarea, input[type="text"] {
      -webkit-appearance: none;
    }

   

    body, input, button {
      border:0;
      outline: 0;
      font: 14px Arial, sans-serif;
    }

    body{
      background-color: #333;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button, label {
        cursor: pointer;
    }
`;
