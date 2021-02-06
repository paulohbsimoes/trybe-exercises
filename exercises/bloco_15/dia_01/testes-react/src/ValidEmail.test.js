import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Caso o email não tenha sido enviado não há nenhuma mensagem.', () => {
  render(<ValidEmail />);
  const isInvalid = screen.queryByText('Email Inválido');
  expect(isInvalid).not.toBeInTheDocument();
});

test('Caso o email tenha sido enviado e esteja correto haverá a mensagem Email Válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.queryByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Caso o email enviado e esteja correto a mensagem terá a cor green.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.queryByTestId('id-email-message');
  expect(isValid).toBeInTheDocument();
  expect(isValid.style.color).toBe('green');
});

test('Caso o email enviado e esteja incorreto a mensagem terá a cor red.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={EMAIL_USER} />);
  const isInvalid = screen.queryByTestId('id-email-message');
  expect(isInvalid).toBeInTheDocument();
  expect(isInvalid.style.color).toBe('red');
});
