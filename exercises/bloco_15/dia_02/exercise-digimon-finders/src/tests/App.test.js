import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event'

// global.fetch = jest.fn().mockResolvedValue({
//   json: async () => ([
//     {
//       name: 'Hawkmon',
//       img: 'https://digimon.shadowsmith.com/img/hawkmon.jpg',
//       level: 'Rookie',
//     }
//   ])
// });

global.fetch = jest.fn().mockImplementation((url) => new Promise((resolve) => {
  setTimeout(() => {
    if (url.includes('Hawkmon')) {
      resolve({
        json: async () => ([
          {
            name: 'Hawkmon',
            img: 'https://digimon.shadowsmith.com/img/hawkmon.jpg',
            level: 'Rookie',
          }
        ])
      });
    }
    resolve({
      json: async () => ({ ErrorMsg: `Biancamon is not a Digimon in our database.` })
    })
  }, 1000)
}));
  

afterEach(() => {
  global.fetch.mockClear();
});

describe('Teste da aplicação toda', () => {

  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Deverá haver um input para digitar o nome do pokemon', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('input')).toBeInTheDocument();
  })

  it('Deverá haver um botão para enviar a pesquisa', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('buttonSearch')).toBeInTheDocument();
  })

  it('Caso seja digitado um pokemon e clicado no botão aparecerá as informações', async () => {
    const { getByTestId, findByTestId } = render(<App />);
    const input = getByTestId('input');
    userEvent.type(input, 'Hawkmon');
    const button = getByTestId('buttonSearch');
    userEvent.click(button);
    expect(global.fetch).toHaveBeenCalledWith('https://digimon-api.vercel.app/api/digimon/name/Hawkmon')
    const digimon = await findByTestId('digimon');
    expect(digimon).toBeInTheDocument();
  })

  it('Caso não haja nenhum nome, nenhum fetch é realizado', async () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('buttonSearch');
    userEvent.click(button);
    expect(global.fetch).toBeCalledTimes(0);
  })

  it('Caso o pokemon não exista é retornada uma mensagem de erro', async () => {
    const { getByTestId, findByText } = render(<App />);
    const input = getByTestId('input');
    userEvent.type(input, 'Biancamon');
    const button = getByTestId('buttonSearch');
    userEvent.click(button);
    expect(global.fetch).toHaveBeenCalledWith('https://digimon-api.vercel.app/api/digimon/name/Biancamon')
    expect(await findByText('Biancamon is not a Digimon in our database.')).toBeInTheDocument();
  })
});
