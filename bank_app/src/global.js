import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,body {
        font-family: "Poppins", sans-serif;  
        width:100%;      
        box-sizing: border-box;
    }
    a{
        text-decoration:none;
    }
    #root{
        height:100vh;
    }
    * {
        margin: 0;
        padding: 0;
    }

`;
