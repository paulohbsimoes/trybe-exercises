export const nome = (value) => {
  if (value.length > 40) return 'Limite maximo de 40 caracteres';
  return null;
}

export const email = (value) => {
  if (value.trim().length === 0) return 'O email é obrigatório';
  if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) return 'Email inválido';
  return null;
}

export const cpf = (value) => {
  if (value.length > 11) return 'Limite maximo de 11 caracteres';
  return null;
}

export const endereco = (value) => {
  if (value.length > 200) return 'Limite maximo de 200 caracteres';
  return null;
}

export const cidade = (value) => {
  if (value.length > 28) return 'Limite maximo de 28 caracteres';
  return null;
}

export const curriculo = (value) => {
  if (value.length > 1000) return 'Limite maximo de 1000 caracteres';
  return null;
}

export const cargo = (value) => {
  if (value.length > 40) return 'Limite maximo de 40 caracteres';
  return null;
}

export const descricao = (value) => {
  if (value.length > 500) return 'Limite maximo de 500 caracteres';
  return null;
}
