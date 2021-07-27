import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';

import Header from '.';

describe('<Header />', () => {
    beforeEach(() => {
        render(<Header />);
    });

    it('should render with Logo as link to home', () => {
        expect(
            screen.getByRole('link', { name: /dev challenge/i })
        ).toHaveAttribute('href', '/');
    });

    it('should handle the open/close mobile menu', () => {
        expect(screen.getByLabelText(/menu closed/i)).toBeInTheDocument();
        expect(screen.queryByLabelText(/menu opened/i)).not.toBeInTheDocument();

        // click to open menu
        fireEvent.click(screen.getByLabelText(/menu closed/i));
        expect(screen.queryByLabelText(/menu closed/i)).not.toBeInTheDocument();
        expect(screen.getByLabelText(/menu opened/i)).toBeInTheDocument();

        // click to close menu
        fireEvent.click(screen.getByLabelText(/menu opened/i));
        expect(screen.getByLabelText(/menu closed/i)).toBeInTheDocument();
        expect(screen.queryByLabelText(/menu opened/i)).not.toBeInTheDocument();
    });

    it('should render with correct nav links', () => {
        expect(screen.getByRole('link', { name: /Início/i })).toHaveAttribute(
            'href',
            '/'
        );
        expect(screen.getByRole('link', { name: /Desafios/i })).toHaveAttribute(
            'href',
            '/challenges'
        );
        expect(
            screen.getByRole('link', { name: /Comunidade/i })
        ).toHaveAttribute('href', '/devs');
        expect(screen.getByRole('link', { name: /Entrar/i })).toHaveAttribute(
            'href',
            '/login'
        );
    });
});
