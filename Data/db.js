var pg = require("pg").native; // a pool
var config = require("./../config.js");
var connectionString = config.database.connectionString;

module.exports = function() {
    var client = new pg.Client(connectionString);
    
    return {
        create: function (table, data) {
            return "success";
        }
    }
}

//function Get(table, id) {
//}

//function Update(table, data) {
//}

// deletion not supported via API (we keep everything)
