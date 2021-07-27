import { render, screen } from '@testing-library/react';

import Main from './index';

describe('<Main />', () => {
  it('should render heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /devChallenge/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({
      'background-color': '#0e0f10',
    });
  });
});
