import { Global } from '@emotion/react'

const GlobalFonts = () => (
  <Global
    styles={`
    /* roboto-300 - latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: local(''),
           url('/fonts/roboto-v27-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }
    /* roboto-regular - latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: local(''),
           url('/fonts/roboto-v27-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }
    /* roboto-500 - latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      src: local(''),
           url('/fonts/roboto-v27-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }
    /* roboto-700 - latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      src: local(''),
           url('/fonts/roboto-v27-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }
      `}
  />
)
export default GlobalFonts
