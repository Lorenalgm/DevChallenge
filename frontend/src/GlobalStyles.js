import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: FontAwesome;
        font-style: normal;
        font-weight: 400;
        src: url("/fonts/FontAwesome.ttf") format("truetype");
    }

    :root {
        --color-yellow: #f4cf0a;
        --color-black: #110e0e;
        --color-purple: #5c0d78;
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

        background-color: var(--color-black);

        ::-webkit-scrollbar-track {
            background-color: #2c2929;
        }
        ::-webkit-scrollbar {
            width: 6px;
            background: none;
        }
        ::-webkit-scrollbar-thumb {
            background: #242020;
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
`;
