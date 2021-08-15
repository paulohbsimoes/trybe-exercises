require('dotenv/config');

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}-dev`,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    define: {
      underscored: true,
    },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}-test`,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    define: {
      underscored: true,
    },
    logging: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
