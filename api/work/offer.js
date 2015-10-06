var NavajaRepository = require('./../repository.js').Repository;

var WorkOfferRepository = function() {
    return new NavajaRepository('work', 'offer');
}

exports.Repository = WorkOfferRepository;

