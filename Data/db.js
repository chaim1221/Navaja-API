pg = require("pg");
config = require("./../config.js");

module.exports = { 
    query: function(text, values, cb) {
        pg.connect(config.connectionString, function(err, client, done) {
            if (err) return console.error("error connecting to postgres: ", err);
            client.query(text, values, function(err, result) {
                done();
                cb(err, result);
            })
        });
    }
}

/*
leave this for now, since there aren't any tests....

node
var db = require ("./db.js");
db.query("", {}, function (err, result) {
                if (err) { console.error ("db errored out man"); }
                console.log("no error...");
                console.log(result);
            });
*/

