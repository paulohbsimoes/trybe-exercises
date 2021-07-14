const { expect } = require('chai');

const { approvedStudents } = require('../../index-s2');

const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};

describe('Testando a função "approvedStudents"', function () {
  describe('quando todas as notas são maior que 0.7', function () {
    it('retorna "true"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];

      const result = approvedStudents({ disciplines });

      expect(result).to.be.equal(true);
    });
  });

  describe('quando todas as notas são menor que 0.7', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.1 },
        { name: disciplinesDict.history, grade: 0.2 },
      ];

      const result = approvedStudents({ disciplines });

      expect(result).to.be.equal(false);
    });
  });

  describe('quando parte das notas são menor que 0.7', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];

      const result = approvedStudents({ disciplines });

      expect(result).to.be.equal(false);
    });
  });
});
