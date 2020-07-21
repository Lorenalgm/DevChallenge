import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: FontAwesome;
        font-style: normal;
        font-weight: 400;
        src: url("/fonts/FontAwesome.ttf") format("truetype");
    }

    :root {
        --yellow: #f4cf0a;
        --black: #110e0e;
        --white: #ffffff;
        --purple: #5c0d78;
        --dark-purple: #490861;
        --gray: #2c2929;
        --pale-gray: #333333;
        --dark-gray: #242020;
        --green: #adff2f;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: var(--black);

        ::-webkit-scrollbar-track {
            background-color: var(--gray);
        }
        ::-webkit-scrollbar {
            width: 6px;
            background: none;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--dark-gray);
            border-radius: 3px;
        }
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

    header,
    body,
    input,
    button {
        font-family: "Roboto", Arial, Helvetica, sans-serif;
    }

    button,
    input {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        border: none;
    }
`;
