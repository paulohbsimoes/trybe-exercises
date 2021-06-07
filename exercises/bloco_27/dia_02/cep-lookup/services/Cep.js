const CepModel = require('../model/Cep');

const getCep = async (cep) => {
  if (!/^\d{5}-?\d{3}$/.test(cep)) return {
    error: {
      code: 'invalidData',
      message: 'CEP inválido'
    }
  }

  const result = await CepModel.getCep(cep.replace('-', ''));

  if (!result) return {
    error: {
      code: 'notFound',
      message: 'CEP não encontrado'
    }
  }

  return result;
}

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const cepResult = await CepModel.getCep(cep.replace('-', ''));

  if (cepResult) return {
    error: {
      code: 'alreadyExists',
      message: 'CEP já existente'
    }
  }

  const result = await CepModel.create({ cep, logradouro, bairro, localidade, uf });

  if (!result) return {
    error: {
      code: 'invalidData',
      message: 'Dados inválidos'
    }
  }

  return result;
}

const getAll = async () => CepModel.getAll();

module.exports = {
  getCep,
  create,
  getAll
}
