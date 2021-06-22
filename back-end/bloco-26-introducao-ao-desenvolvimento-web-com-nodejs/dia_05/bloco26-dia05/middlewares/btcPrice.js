const rescue = require('express-rescue');
const fetch = require('node-fetch');

module.exports = rescue(async (_req, res) => {
  const result = await (await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')).json();

  res.status(200).json(result);
});
