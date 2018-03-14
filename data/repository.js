var db = require('./db.js');

// TODO: This is an abstraction of db access but not a true repository.
// A true repository will hold the cache in memory and perform the
// necessary db access behind the scenes, presumedly when it is safe
// to do so. http://martinfowler.com/eaaCatalog/repository.html
// It would be a good idea to implement here, and this is a start.
// One possible pattern would be for each derived class to hold repository
// data for its own domain object, and then the pattern requirements are fulfilled.
function NavajaRepository (schema, table) {
    this.schema = schema;
    this.table = table;
}
NavajaRepository.prototype = {
    add: function (data) {
        return db.create(this.schema + '.' + this.table, data);
    },
    getById: function (id) {
        return db.readById(this.schema + '.' + this.table, id);
    },
    update: function (data) {
        return db.update(this.schema + '.' + this.table, data);
    },
    remove: function (id) {
        return db.delete(this.schema + '.' + this.table, id);
    }
}

exports.Repository = NavajaRepository;

