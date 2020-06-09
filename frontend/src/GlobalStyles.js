import styled, { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: FontAwesome;
        font-style: normal;
        font-weight: 400;
        src: url("/fonts/FontAwesome.ttf") format("truetype");
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }
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

`;

export const Container = styled.div`
    margin: 0 140px;

    ${media.lessThan('medium')`
        margin: 0 40px;
    `}
`;
