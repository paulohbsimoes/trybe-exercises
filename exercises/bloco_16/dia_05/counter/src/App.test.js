import { cleanup } from '@testing-library/react';
import App from './App';
import renderWithRedux from './helpers/renderWithRedux';
import userEvent from '@testing-library/user-event';

describe('testing clicks', () => {
  beforeEach(cleanup);

  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });

  test('Crie um teste com o valor padrão do reducer e teste se um clique funciona', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');
    expect(queryByText('0')).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    expect(queryByText('1')).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    expect(queryByText('2')).toBeInTheDocument();
  })

  test('Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonAdicionar = queryByText('Clique aqui');
    expect(queryByText('10')).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    expect(queryByText('11')).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    expect(queryByText('12')).toBeInTheDocument();
  })
});
