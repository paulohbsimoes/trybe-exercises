const searchEmployee = require('../src/searchEmployee.js');

describe('searchEmployee', () => {
  it('Deve ser uma funcao', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('A função deve retornar a informação referente ao id consultado', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
    expect(searchEmployee('9852-2-2', 'firstName')).toBe('Jeff');
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
  });
  it('Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada"', () => {
    expect(searchEmployee(null, 'firstName')).toBe('ID não identificada');
  });
});
