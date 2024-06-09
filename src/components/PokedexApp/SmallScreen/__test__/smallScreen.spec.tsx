import { render } from '@testing-library/react';

import SmallScreen from 'components/PokedexApp/SmallScreen/smallScreen';
import { pokemonMock } from 'lib/mocks/PokemonMock';

import styles from '../smallScreen.module.scss';

describe('SmallScreen', () => {
  it('renders the container div with the correct class', () => {
    const { container } = render(
      <SmallScreen pokemon={null} loading={false} />,
    );
    const div = container.firstChild;
    expect(div).toHaveClass(styles.pokedexScreen);
  });

  it('renders the screen top lights', () => {
    const { container } = render(
      <SmallScreen pokemon={null} loading={false} />,
    );
    const screenLights = container.querySelectorAll(`.${styles.screenLights}`);
    expect(screenLights.length).toBe(2);
  });

  it('renders the screen bottom button and vents', () => {
    const { container } = render(
      <SmallScreen pokemon={null} loading={false} />,
    );
    const screenButton = container.querySelector(`.${styles.screenButton}`);
    const screenVents = container.querySelectorAll(`.${styles.vents}`);
    expect(screenButton).toBeInTheDocument();
    expect(screenVents.length).toBe(4);
  });

  it('renders the Image component when pokemon is provided', () => {
    const { getByAltText } = render(
      <SmallScreen pokemon={pokemonMock} loading={false} />,
    );
    const img = getByAltText('Picture of the author');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2Fother%2Fofficial-artwork%2F132.png&w=3840&q=75',
    );
  });

  it('renders the Loading component when loading is true', () => {
    const { getByTestId } = render(
      <SmallScreen pokemon={null} loading={true} />,
    );
    const loading = getByTestId('loading');
    expect(loading).toBeInTheDocument();
  });

  it('does not render the Image component when pokemon is null', () => {
    const { queryByAltText } = render(
      <SmallScreen pokemon={null} loading={false} />,
    );
    const img = queryByAltText('Picture of the author');
    expect(img).toBeNull();
  });

  it('does not render the Loading component when loading is false', () => {
    const { queryByTestId } = render(
      <SmallScreen pokemon={null} loading={false} />,
    );
    const loading = queryByTestId('loading-component'); // Assuming Loading component has data-testid="loading-component"
    expect(loading).toBeNull();
  });
});
