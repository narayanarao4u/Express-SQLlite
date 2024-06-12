const knex = require('knex');

const conn = knex({
    client: 'sqlite3',
    connection: {
        filename: './db.sqlite3'
    },
    useNullAsDefault: true
}); 

module.exports = conn