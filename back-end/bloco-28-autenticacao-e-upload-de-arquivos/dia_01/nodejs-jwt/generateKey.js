const crypto = require('crypto');

console.log(crypto.randomBytes(100).toString('base64'));
