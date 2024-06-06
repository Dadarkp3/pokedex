import Header from '../header';
import { render, screen } from '@testing-library/react';

describe('Header component', () => {
  it('should have hello world', () => {
    render(<Header />);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
