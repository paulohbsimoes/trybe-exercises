const axios = require('axios');

/* Faz uma requisição do tipo GET */
// axios
//   .get('http://localhost:3000/ping/')
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// axios
//   .get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// Você pode usar métodos async também
// const getUser = async () => {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// const body = {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// };

// axios.post('/user', body)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
