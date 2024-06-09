import { render } from '@testing-library/react';

import PokedexApp from 'components/PokedexApp/pokedexApp';

describe('<PokedexApp />', () => {
  it('should render the heading', () => {
    render(<PokedexApp />);

    //expect(screen.getByRole('heading', { name: /PokedexApp/i })).toBeInTheDocument();
  });
});
