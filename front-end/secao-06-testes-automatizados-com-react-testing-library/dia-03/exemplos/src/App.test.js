import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('teste da aplicação toda', () => {

it('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início',
  });
  expect(homeTitle).toBeInTheDocument();
});

it('deve renderizar o componente Sobre', () => {
  const { history } = renderWithRouter(<App />);

  const AboutLink = screen.getByRole('link', { name: 'Sobre' });
  expect(AboutLink).toBeInTheDocument();

  userEvent.click(AboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');

  const aboutTitle = screen.getByRole('heading', { name: /Você está na página Sobre/i });
  expect(aboutTitle).toBeInTheDocument();
});

it('deve testar um caminho não existente e a renderização do Not Found', () => {
  const{ history } = renderWithRouter(<App />);

  act(() => {
    history.push('/pagina/nãoexiste/');
  })
  const notFound = screen.getByRole('heading', { name: 'Página não encontrada' });
  expect(notFound).toBeInTheDocument();
});

it('deve renderizar o componente About (apenas componente)', () => {
  renderWithRouter(<About />);

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});

});
