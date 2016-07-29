var config = process.env.NODE_ENV || 'development';
var knex = require('../knexfile')[config];
module.exports = knex;
