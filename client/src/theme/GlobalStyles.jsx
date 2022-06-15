import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: ${colors.darkGrayishBlue};
    }

    button, input {
        font-family: 'Roboto', sans-serif;
        border: none;
        font-size: 1rem;
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle;
