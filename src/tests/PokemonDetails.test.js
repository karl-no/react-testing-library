import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente PokemonDetails.js', () => {
  test('Se os detalhes do pokémon são mostradas na tela:', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText(/more details/i);
    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    const pokemonDetails = screen.getByRole('heading', { name: /details/i, level: 2 });
    const pokemonSummary = screen.getByRole('heading', { name: /summary/i, level: 2 });
    const detailsParagraph = screen.getByText(/This intelligent/i);

    expect(pokemonDetails).toBeInTheDocument();
    expect(pokemonSummary).toBeInTheDocument();
    expect(detailsParagraph).toBeInTheDocument();
  });

  test('Se existe uma seção com os mapas de localização do pokémon', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByText(/more details/i);
    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');

    const locationsTitle = screen.getByRole('heading', { name: /game locations/i });
    expect(locationsTitle).toBeInTheDocument();

    const pokemonLocations = screen.getAllByRole('img');
    const firstLocationUrl = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const secondLocationUrl = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';

    expect(pokemonLocations[1]).toHaveAttribute('src', firstLocationUrl);
    expect(pokemonLocations[1]).toHaveAttribute('alt', 'Pikachu location');
    expect(pokemonLocations[2]).toHaveAttribute('src', secondLocationUrl);
    expect(pokemonLocations[2]).toHaveAttribute('alt', 'Pikachu location');
  });

  test('se o usuário pode favoritar um pokémon na página de detalhes', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByText(/more details/i);
    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');

    const checkboxPokemonFavoritado = screen.getByLabelText('Pokémon favoritado?');

    expect(checkboxPokemonFavoritado).toBeInTheDocument();
  });
});
