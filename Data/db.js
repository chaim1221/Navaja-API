pg = require("pg");
config = require("./../config.js");

// this works in node, screw the test
module.exports = { 
    query: function(text, values, cb) {
        pg.connect(config.connectionString, function(err, client, done) {
            if (err) return console.error("error connecting to postgres: ", err);
            console.log("in connect");
            console.log(err);
            client.query(text, values, function(err, result) {
                console.log("in query");
                done();
                cb(err, result);
            })
        });
    }
}

/*
node
var db = require ("./db.js");
db.query("", {}, function (err, result) {
                if (err) { console.error ("db errored out man"); }
                console.log("no error...");
                console.log(result);
            });
*/
