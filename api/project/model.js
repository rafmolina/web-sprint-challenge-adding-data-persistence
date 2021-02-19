// build your `Project` model here
const db = require('../../data/dbConfig');

function find() {
    return db('projects')
}

function add(project) {
    return db('projects').insert(project)
    .then(([id]) => {
        return db('projects').where('project_id', id).first()
    })
}


module.exports = {
    find,
    add
}