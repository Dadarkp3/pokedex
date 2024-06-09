import { render } from '@testing-library/react';

import InfoDisplay from 'components/PokedexApp/InfoDisplay/infoDisplay';
import { pokemonMock } from 'lib/mocks/PokemonMock';

import styles from '../infoDisplay.module.scss';

describe('InfoDisplay', () => {
  it('renders the container div with the correct class', () => {
    const { container } = render(
      <InfoDisplay pokemon={null} loading={false} error={false} />,
    );
    const div = container.firstChild;
    expect(div).toHaveClass(styles.infoDisplay);
  });

  it('renders the ErrorMessage component when there is an error', () => {
    const { getByText } = render(
      <InfoDisplay pokemon={null} loading={false} error={true} />,
    );
    expect(getByText(/Pokemon não encontrado.../i)).toBeInTheDocument();
  });

  it('renders the pokemon name when pokemon is provided and not loading or error', () => {
    const { getByText } = render(
      <InfoDisplay pokemon={pokemonMock} loading={false} error={false} />,
    );
    expect(getByText(/ditto/i)).toBeInTheDocument();
  });

  it('does not render pokemon name when loading is true', () => {
    const { queryByText } = render(
      <InfoDisplay pokemon={pokemonMock} loading={true} error={false} />,
    );
    expect(queryByText(/Pikachu/i)).toBeNull();
  });

  it('does not render pokemon name when there is an error', () => {
    const { queryByText } = render(
      <InfoDisplay pokemon={pokemonMock} loading={false} error={true} />,
    );
    expect(queryByText(/Pikachu/i)).toBeNull();
  });

  it('does not render pokemon name when pokemon is null', () => {
    const { queryByText } = render(
      <InfoDisplay pokemon={null} loading={false} error={false} />,
    );
    expect(queryByText(/Pikachu/i)).toBeNull();
  });
});
