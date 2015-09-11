var db = require("./db.js");
var schemas = require("../Domain/schemas.js");

var Record = function () { }
Record.prototype.Create = function (table, callback) {
    var self = this;
    db.create(table, this.data).run(function () {
        if (err) return callback(err);
        callback(null, self);
    });
}

Record.prototype.GetById = function (id, table, callback) {
    var self = this;

    db.get(table, { id: id }).run(function (err, data) { 
        if (err) return callback(err);
        callback(null, self);
    }
}

Record.prototype.Save = function (table, callback) {
    var self = this;
    db.get(table, {id: this.data.id})
      .update(JSON.stringify(this.data))
      .run(function (err, result) {
        if (err) return callback(err);
        callback(null, self);
    }
}

Record.prototype.Remove = function (id, table, callback {
    var self = this;
    db.get(table, { id: id })
      .update('active', 'false') // todo: figure this out  
      .run(function (err, result) {
        if (err) return callback(err);
        callback(null, self);
    }
}
