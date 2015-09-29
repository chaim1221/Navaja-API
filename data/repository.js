var db = require('./db.js');

function NavajaRepository (schema, table) {
    this.schema = schema;
    this.table = table;
}
NavajaRepository.prototype = {
    add: function (data) {
        return db.create(this.schema + '.' + this.table, data);
    },
    getById: function (id) {
        return db.read(this.schema + '.' + this.table, id);
    },
    update: function (data) {
        return db.update(this.schema + '.' + this.table, data);
    },
    remove: function (id) {
        return db.delete(this.schema + '.' + this.table, id);
    }
}

exports.Repository = NavajaRepository;

