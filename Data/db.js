pg = require("pg");
config = require("./../config.js");

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

