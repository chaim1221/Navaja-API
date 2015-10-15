var NavajaRepository = require('./../repository.js').Repository;

var WorkerBusinessRepository = function() {
    return new NavajaRepository('worker', 'business');
}

exports.Repository = WorkerBusinessRepository;

