var NavajaRepository = require('./../repository.js').Repository;

var WorkerAddressRepository = function() {
    return new NavajaRepository('worker', 'address');
}

exports.Repository = WorkerAddressRepository;

