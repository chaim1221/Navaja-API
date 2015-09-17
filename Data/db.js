pg = require("pg");
config = require("./../config.js");

module.exports = { 
    query: function(text, callback) {
        pg.connect(config.connectionString, function(err, client, done) {
            if (err) return console.error("error connecting to postgres: ", err);

            client.query(text, function(error, result) {
                done();
                callback(error, result);
            });
        });
    }
}

