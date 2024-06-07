import { render, screen } from '@testing-library/react';

import Loading from 'components/Loading/loading';

describe('<Loading />', () => {
  it('should render the heading', () => {
    render(<Loading />);

    expect(
      screen.getByRole('heading', { name: /Loading/i }),
    ).toBeInTheDocument();
  });
});
