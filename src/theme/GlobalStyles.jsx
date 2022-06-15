import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button, input {
        border: none;
        font-size: 1rem;
    }
`;

export default GlobalStyle;
