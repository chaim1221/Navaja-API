config = require("./../config.js");
pg = require("knex")({
    client: "pg",
    connection: config.connectionString,
    pool: {
        min: 2,
        max: 10
    } // this is the default
});

module.exports = { 
    query: function(text, callback) {
        pg.connect(config.connectionString, function(err, client) {
            if (err) throw new Error(err);

            client.query(text, function(error, result) {
                callback(error, result);
            });
        });
    }
}

