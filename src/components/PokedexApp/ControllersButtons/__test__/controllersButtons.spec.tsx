import { render } from '@testing-library/react';

import ControllersButtons from 'components/PokedexApp/ControllersButtons/controllersButtons';

import styles from '../controllersButtons.module.scss';

describe('ControllersButtons', () => {
  it('renders the container div with the correct class', () => {
    const { container } = render(<ControllersButtons />);
    const div = container.firstChild;
    expect(div).toHaveClass(styles.controllers);
  });

  it('renders the first button with the correct class', () => {
    const { container } = render(<ControllersButtons />);
    const div = container.firstChild;
    expect(div).not.toBeNull();
    expect(div).toHaveClass(styles.controllers);
  });

  it('renders the second button with the correct class and style', () => {
    const { container } = render(<ControllersButtons />);
    const div = container.firstChild?.firstChild;
    expect(div).not.toBeNull();
    expect(div).toHaveClass(styles.controlsButton);
  });
});
