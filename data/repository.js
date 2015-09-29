var db = require('./db.js');

var NavajaRepository = function(schema, table) {
    this.add = function (data) {
        return db.create(schema + '.' + table, data);
    };
    
    this.getById = function (id) {
        return db.read(schema + '.' + table, id);
    };
    
    this.update = function (data) {
        return db.update(schema + '.' + table, data);
    }
    
    this.remove = function (id) {
        return db.delete(schema + '.' + table, id);
    }
}

exports.Repository = NavajaRepository;

