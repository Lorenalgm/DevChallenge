import React from 'react';
import { ToastContainer } from 'react-toastify';
import { render } from '@testing-library/react';

import GlobalStyles from '../styles/global';

const customRender = (component, { ...renderOptions } = {}) =>
  render(
    <>
      <GlobalStyles />
      {component}
      <ToastContainer />
    </>,
    { ...renderOptions }
  );

export * from '@testing-library/react';
export { customRender as render };
