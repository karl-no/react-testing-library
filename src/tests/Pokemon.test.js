import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokemon.js', () => {
  test('Se o tipo correto do pokémon aparece na tela', () => {
    renderWithRouter(<App />);

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent(/electric/i);
  });

  test('Se a imagem do pokémon é exibida', () => {
    renderWithRouter(<App />);

    const srcImg = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';

    const pokemonImg = screen.getByAltText('Pikachu sprite');
    expect(pokemonImg).toBeInTheDocument();
    expect(pokemonImg).toHaveAttribute('src', srcImg);
  });

  test('Se o card do pokémon contém um link para exibir mais detalhes', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText(/more details/i);

    expect(moreDetails).toBeInTheDocument();
    expect(moreDetails).toHaveAttribute('href', '/pokemons/25');
  });

  test('Se é redirecionado para os detalhes ao clicar no link de navegação', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByText(/more details/i);

    userEvent.click(moreDetails);
    const { pathname } = history.location;
    expect(pathname).toEqual('/pokemons/25');
  });

  test('Se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText(/more details/i);

    userEvent.click(moreDetails);

    const favoritePokemonsIcon = screen.getByLabelText(/favoritado/i);
    expect(favoritePokemonsIcon).toBeInTheDocument();
    userEvent.click(favoritePokemonsIcon);

    const favoritePokemonsSrc = '/star-icon.svg';
    const favoritePokemonsAlt = /is marked as favorite/i;
    const favoritePokemon = screen.getByAltText(favoritePokemonsAlt);

    expect(favoritePokemonsIcon).toBeInTheDocument();
    expect(favoritePokemon).toHaveAttribute('src', favoritePokemonsSrc);
  });
});
