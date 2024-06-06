import { render, screen } from '@testing-library/react';

import Main from '@components/Main/main';

describe('Main component', () => {
  it('should have a main tag', () => {
    render(<Main />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
