import React from 'react';
import { render, screen } from '../../utils/test-utils';

import Logo from '.';

describe('<Logo />', () => {
    it('should render as link to home', () => {
        const { container } = render(<Logo />);

        expect(
            screen.getByRole('link', { name: /dev challenge/i })
        ).toHaveAttribute('href', '/');

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render "challenge" in yellow', () => {
        render(<Logo />);

        expect(screen.getByText('Challenge')).toHaveStyle({
            color: 'var(--yellow)',
        });
    });
});
