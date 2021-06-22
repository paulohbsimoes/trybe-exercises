const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

if (!process.argv[2]) {
  console.log('Você deve passar o caminho de um arquivo como argumento. (node index.js /caminho/para/arquivo)');
  process.exit(1);
}

/* Criamos um stream de um arquivo */
const stream = fs.createReadStream(process.argv[2]);

/* Aqui, criamos um formulário com um campo chamado 'file' que carregará */
/* o stream do nosso arquivo */
const form = new FormData();
form.append('file', stream);

/* Esse arquivo não será enviado no body da requisição como de costume. */
/* Em ambientes NodeJS, é preciso setar o valor de boundary no header */
/* 'Content-Type' chamando o método `getHeaders` */
const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3000/uploads', form, {
    headers: {
      ...formHeaders,
    },
  })
  .then((response) => {
    console.log(response.status);
  })
  .catch((error) => {
    console.error(error);
  });
