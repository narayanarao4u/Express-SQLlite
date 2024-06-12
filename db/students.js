const knex = require('./knex');

function insert(student) {
    return knex('students').insert(student);
}

function getAll() {
    return knex('students').select('*');
}

function getbyId(id) {
    return knex('students').select('*').where('id', id).first();
}

function update(id, student) {
    return knex('students').where('id', id).update(student);
}   

function remove(id) {
    return knex('students').where('id', id).del();
}


module.exports = {
    insert,
    getAll,
    getbyId,
    update,
    remove
}