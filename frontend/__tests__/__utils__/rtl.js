import React from 'react';
import * as Rtl from '@testing-library/react';

export const render = (Component, props, wrapper) => {
    const rendered = Rtl.render(<Component {...props} />, { wrapper });

    return {
        showOutput: rendered.debug,
        element: {
            withText: rendered.getByText,
            withTestId: rendered.getByTestId,
        },
        allElements: {
            withTestId: rendered.getAllByTestId,
        },
    };
};
