// build your `Resource` model here
const db = require('../../data/dbConfig');

function find() {
    return db('resources')
}

function add(resource) {
    return db('resources').insert(resource)
    .then(([id]) => {
        return db('resources').where('resource_id', id).first()
    })
} 

module.exports = {
    find,
    add
}