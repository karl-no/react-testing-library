import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testa o componente FavoritePokemons', () => {
  renderWithRouter(<FavoritePokemons />);

  const noPokemon = screen.getByText('No favorite pokemon found');
  test('Testa se é exibida a mensagem "No favorite pokemon found"', () => {
    expect(noPokemon).toBeInTheDocument();
  });
});
