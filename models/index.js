const { Pool } = require('pg');
const { POSTGRES } = require('../keys.js');

const pool = new Pool({
  user: POSTGRES[0],
  host: POSTGRES[1],
  database: POSTGRES[2],
  password: POSTGRES[3],
  port: POSTGRES[4],
});

pool.connect();

module.exports = {
  pool: pool
};