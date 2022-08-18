import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokedex.js', () => {
  test('Se há um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const encounteredPokemonTitle = screen.getByRole('heading',
      { name: /encountered/i, level: 2 });
    expect(encounteredPokemonTitle).toBeInTheDocument();
  });

  test('Se é exibido o próximo pokémon ao clicar no botão "Próximo pokémon"', () => {
    renderWithRouter(<App />);

    const buttonNextPokemon = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(buttonNextPokemon).toHaveTextContent('Próximo pokémon');

    userEvent.click(buttonNextPokemon);
    const nextPokemon = screen.getByText(/Charmander/i);
    expect(nextPokemon).toBeInTheDocument();
  });

  test('Se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);

    const pokemonOnDisplay = screen.getAllByTestId('pokemon-name');
    expect(pokemonOnDisplay.length).toEqual(1);
  });

  test('Se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const typesOfPokemon = 7;
    const filterPokemon = screen.getAllByTestId('pokemon-type-button');
    expect(filterPokemon).toHaveLength(typesOfPokemon);

    const buttonEletric = screen.getByRole('button', { name: /electric/i });

    userEvent.click(buttonEletric);

    const bugPokemons = screen.getAllByText(/bug/i);
    expect(bugPokemons).toHaveLength(1);
    console.log(bugPokemons.length);
  });

  test('Se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: 'All' });
    expect(buttonAll).toBeInTheDocument();

    userEvent.click(buttonAll);
    const firstPokemon = screen.getByText(/Pikachu/i);
    expect(firstPokemon).toBeInTheDocument();
  });
});
