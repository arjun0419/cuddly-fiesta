const { Client } = require('pg');

const connectionString = process.env.DB_UL || 'postgres://localhost:5432/ochex';

const client = new Client(connectionString);

client.connect((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('connected to ochex DB');
  }
});

module.exports = client;
