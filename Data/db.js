var pg = require("pg").native;
var config = require("./../config.js");
var connectionString = config.database.connectionString;

module.exports = function() {
    var client = new pg.Client(connectionString);
    client.connect(function (err) { 
        if (err) {
            return console.error('no can connect', err);
        }
        client.query('SELECT 42', function (err, result) {
            if (err) {
                return console.error('error running query', err);
            }
            console.log(result.rows[0]); // we never get HERE
            client.end();
        });
    });
    return 42;
}


//function Get(table, id) {
//}

//function Update(table, data) {
//}

// deletion not supported via API (we keep everything)
