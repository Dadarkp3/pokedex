import { render } from '@testing-library/react';

import Loading from 'components/PokedexApp/Loading/loading';

import styles from '../loading.module.scss';

describe('Loading', () => {
  it('renders the div with the correct class', () => {
    const { container } = render(<Loading />);
    const div = container.firstChild;
    expect(div).toHaveClass(styles.pokeball);
  });
});
