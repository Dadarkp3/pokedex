import { render } from '@testing-library/react';

import Lights from 'components/PokedexApp/Lights/lights';

import styles from '../lights.module.scss';

describe('Lights', () => {
  it('renders the div with the correct class', () => {
    const { container } = render(<Lights />);
    const div = container.firstChild;
    expect(div).toHaveClass(styles.lightsContainer);
  });
});
