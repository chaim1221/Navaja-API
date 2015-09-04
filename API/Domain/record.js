var Record = function () { }

Record.prototype.create = function (table, callback) {
    var self = this;
    
    db.create(table, this.data).run(function () {
        if (err) return callback(err);
        callback(null, self);
    }); //?
}

Record.prototype.getById = function (id, table, callback) {
    var self = this;

    db.get(table, { id: id }).run(function (err, data) { 
        if (err) return callback(err);
        callback(null, self);
    }
}

Record.prototype.save = function (table, callback) {
    var self = this;
    db.get(table, {id: this.data.id})
      .update(JSON.stringify(this.data))
      .run(function (err, result) {
        if (err) return callback(err);
        callback(null, self);
    }
}

Record.prototype.remove = function (id, table, callback {
    var self = this;
    db.get(table, { id: id })
      .update('active', 'false') // todo: figure this out  
      .run(function (err, result) {
        if (err) return callback(err);
        callback(null, self);
    }
}
