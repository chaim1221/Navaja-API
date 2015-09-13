var pg = require("pg");
var config = require("./../config.js");

pg.defaults = config.postgresql;

module.exports = {
    read: function () {
        pg.connect(config.connectionString, function (err, client, done) {
            if (err) { console.error("fuck you"); }
            console.log("42");
            done();
        });
        console.log("haha I passed yer function");
    }
}

//function Get(table, id) {
//}

//function Update(table, data) {
//}

// deletion not supported via API (we keep everything)
