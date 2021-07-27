import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: FontAwesome;
        font-style: normal;
        font-weight: 400;
        src: url("/fonts/FontAwesome.ttf") format("truetype");
    }

    :root {
        /*main colors*/
        --yellow: #f4cf0a;
        --purple: #5c0d78;


        --white: #FFFFFF;

        --black: #110e0e;
        --dark-purple: #490861;
        --white-gray: #e3e3e3;
        --light-gray: #c1c1c1 ;
        --pale-gray: #333333;
        --dark-gray: #242020;
        --green: #adff2f;

        --nephritis: #27ae60;
        --pumpkin: #d35400;
        --pomegranate: #c0392b;

        --blue: #47ADE1;
        --red: #E63450;
        --light-purple: #D427D8;

        --primary: #0e0f10;
        --secondary: #191b1d;
        --tertiary: #1A1C1F;

        --quaternary: rgba(84, 84, 84, 0.75);
        --quinary: #858585;
        --senary: #828386;

        --dark-hover: #23272C;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body, #__next {
        height: 100%;
        min-height: 100%;

        margin: 0 auto 0 auto;
    }

    body {
        background-color: var(--primary);

        ::-webkit-scrollbar-track {
            background-color: var(--dark-hover);
        }
        ::-webkit-scrollbar {
            width: 6px;
            background: none;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--tertiary);
            border-radius: 3px;
        }
    }

    a {
      text-decoration: none;
    }

    button,
    input,
    textarea {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;

        border: none;
    }

    textarea {
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export const Container = styled.main`
  min-height: calc(100vh - 100px);
`;

export default GlobalStyles;
