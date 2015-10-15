var NavajaRepository = require('./../repository.js').Repository;

var WorkerProfileRepository = function() {
    return new NavajaRepository('worker', 'profile');
}

exports.Repository = WorkerProfileRepository;

