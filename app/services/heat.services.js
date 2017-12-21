const mongo = require('../mongodb')
const conn = mongo.connection
const ObjectId = mongo.ObjectId

module.exports = {
    readAll,
    post
}

function readAll() {
    return conn.db().collection('heaters').find().toArray()
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                data[i]._id.toString()
            }
            return data
        })
}

function post(model) {
    return conn.db().collection('heaters').insert(model)
        .then(result => result.insertedIds[0].toString())
}
