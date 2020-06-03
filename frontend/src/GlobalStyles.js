import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    header,
    body,
    input,
    button {
        font-family: "Roboto", Arial, Helvetica, sans-serif;
    }

    :root {
        --color-yellow: #f4cf0a;
        --color-black: #110e0e;
        --color-purple: #5c0d78;
    }

    body {
        background-color: var(--color-black);
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }
`;
