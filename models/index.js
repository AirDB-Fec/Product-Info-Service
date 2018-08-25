const { Pool } = require('pg');
const { POSTGRES } = require('../keys.js'); //array

const pool = new Pool({
  user: 'sam', //0
  host: 'localhost', //1
  database: 'sdc',
  password: null, //2
  port: 5432,
});

pool.connect();

module.exports = {
  pool: pool
};

