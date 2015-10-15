var NavajaRepository = require('./../repository.js').Repository;

var WorkerSponsorshipRepository = function() {
    return new NavajaRepository('worker', 'sponsorship');
}

exports.Repository = WorkerSponsorshipRepository;

