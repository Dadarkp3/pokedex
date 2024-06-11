import { render } from '@testing-library/react';

import Header from 'components/Header/header';

describe('Header component', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Header />);
    const header = getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
