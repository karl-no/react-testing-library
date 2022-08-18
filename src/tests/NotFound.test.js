import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente NotFound.js', () => {
  test('É exibido na tela um h2 com o texto "Page requested not found"', () => {
    renderWithRouter(<NotFound />);
    const titleNotFound = screen.getByRole('heading', { name: /not found/i });
    expect(titleNotFound).toBeInTheDocument();
  });

  test('Testa se a imagem do Pikachu chorando é exibida', () => {
    renderWithRouter(<NotFound />);
    const imgNotFound = screen.getByRole('img', { name: /not found/i });
    const srcImage = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    expect(imgNotFound).toBeInTheDocument();
    expect(imgNotFound).toHaveAttribute('src', srcImage);
  });
});
