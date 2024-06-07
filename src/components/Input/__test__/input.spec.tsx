import { render, screen } from '@testing-library/react';

import Input from '@components/Input/input';

describe('<Input />', () => {
  it('should render the heading', () => {
    render(<Input />);

    expect(screen.getByRole('heading', { name: /Input/i })).toBeInTheDocument();
  });
});
