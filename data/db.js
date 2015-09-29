config = require("./../config.js");
knex = require("knex")({
    client: "pg",
    connection: config.connectionString,
    pool: {
        min: 2,
        max: 10
    } // this is the default, just making it explicit
});

module.exports = { 
    create: function(table, data) {
        return knex(table)
            .returning('id')
            .insert(data);
    },
    read: function(table, id) {
        return knex(table)
            .where({ id: parseInt(id) })
            .select('*')
            .then(function(value) {
                return value[0];
            })
            .catch(function(error) {
                throw new Error(error);
            })
    },
    update: function(table, data) {
        return knex(table)
            .where({ id: parseInt(data.id) })
            .returning('id')
            .update(data);
    },
    delete: function(table, id) {
        return knex(table)
            .where({ id: parseInt(id) })
            .del()
    }
}

