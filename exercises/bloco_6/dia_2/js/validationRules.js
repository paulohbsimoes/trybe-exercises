function maxLength(length) {
  return {
    messagePart: `menor ou igual a ${length}`,
    func: function(el) {
      return el.value.length <= length;
    }
  }
}

function exactLength(length) {
  return {
    messagePart: `igual a ${length}`,
    func: function(el) {
      return el.value.length === length;
    }
  }
}

function createRule(field, criteria, size) {
  const { messagePart, func } = criteria(size);
  return {
    message: `${field} deverá ter o tamanho ${messagePart} caracteres`,
    method: func
  }
}

function validateDate(el) {
  const date = el.value;
  if (!/^(\d{2}\/){2}\d{4}$/.test(date)) return false;
  const day = parseInt(date.slice(0, 2))
  const month = parseInt(date.slice(3, 5));
  const year = parseInt(date.slice(6, 11));
  if (day <= 0 || day > 31 ||
    month <= 0 || month > 12 ||
    year <= 0) return false;
  return true;
}

validation.rules['name'] = createRule('O nome', maxLength, 40);
validation.rules['cpf'] = createRule('O CPF', exactLength, 11);
validation.rules['address'] = createRule('O endereço', maxLength, 200);
validation.rules['city'] = createRule('A cidade', maxLength, 28);
validation.rules['summary'] = createRule('O resumo', maxLength, 1000);
validation.rules['office'] = createRule('O cargo', maxLength, 40);

validation.rules['date'] = {
  message: 'Data inválida',
  method: validateDate
}

validation.rules['office-description'] = createRule('A descrição do cargo', maxLength, 1000);
