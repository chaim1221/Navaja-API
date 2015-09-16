pg = require("pg");
config = require("./../config.js");

module.exports = { 
    query: function(text, values, cb) {
        console.log("I get to this in Mocha");
        pg.connect(config.connectionString, function(err, client, done) {
            console.log("I never get here");
            if (err) return console.error("error connecting to postgres: ", err);
            client.query(text, values, function(err, result) {
                console.log("I most certainly never get here");
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
db.query("insert into sometable(id, value) values(1, \"blah\")", {}, function (err, result) {
                if (err) { console.error ("db errored out man"); }
                console.log("no error...");
                console.log(result);
            });
*/

