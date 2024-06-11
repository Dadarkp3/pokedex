import { render } from '@testing-library/react';

import Footer from 'components/Footer/footer';

describe('<Footer />', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Footer />);
    const footer = getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
