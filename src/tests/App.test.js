import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa se o topo contém um conjunto fixo de links de navegação', () => {
  test('Testa se é exibido na tela um link com o texto Home', () => {
    // acessar
    renderWithRouter(<App />);

    // aferir
    const homeTitle = screen.getByRole('link', { name: /home/i });
    expect(homeTitle).toBeInTheDocument();
  });

  test('Testa se é exibido na tela um link com o texto About', () => {
    // acessar
    renderWithRouter(<App />);

    // aferir
    const homeTitle = screen.getByRole('link', { name: /about/i });
    expect(homeTitle).toBeInTheDocument();
  });

  test('Testa se é exibido na tela um link com o texto Favorite Pokémons', () => {
    // acessar
    renderWithRouter(<App />);

    // aferir
    const homeTitle = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(homeTitle).toBeInTheDocument();
  });
});
