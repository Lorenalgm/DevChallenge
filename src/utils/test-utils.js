import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { render } from '@testing-library/react';

import { GlobalStyles } from '../styles/GlobalStyles';

const customRender = (component, { ...renderOptions } = {}) =>
    render(
        <>
            <GlobalStyles />
            {component}
            <ToastContainer />
        </>,
        { wrapper: MemoryRouter, ...renderOptions }
    );

export * from '@testing-library/react';
export { customRender as render };
