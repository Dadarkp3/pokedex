import { render, screen } from '@testing-library/react';

import ErrorMessage from 'components/PokedexApp/ErrorMessage/errorMessage';

describe('<ErrorMessage />', () => {
  it('should render the heading', () => {
    render(<ErrorMessage />);

    expect(
      screen.getByRole('heading', { name: /Pokemon não encontrado.../i }),
    ).toBeInTheDocument();
  });
});
