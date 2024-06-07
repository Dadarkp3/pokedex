import { render, screen } from '@testing-library/react';

import Header from 'components/Header/header';

describe('Header component', () => {
  it('should have hello world', () => {
    render(<Header />);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
