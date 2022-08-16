import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Testa a página About da Pokedex', () => {
  test('Testa se é exibido na tela um h2 com texto About Pokédex', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', { name: /about pokédex/i, level: 2 });
    expect(aboutTitle).toBeInTheDocument();
  });

  test('Testa se a imagem da Pokédex é exibida na tela', () => {
    renderWithRouter(<About />);

    const pokedexURL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const pokedexImage = screen.getByRole('img', { name: /Pokédex/i });
    expect(pokedexImage).toBeInTheDocument();
    expect(pokedexImage).toHaveAttribute('src', pokedexURL);
  });
});
