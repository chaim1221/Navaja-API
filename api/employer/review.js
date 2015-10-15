var NavajaRepository = require('./../repository.js').Repository;

var EmployerReviewRepository = function() {
    return new NavajaRepository('employer', 'review');
}

exports.Repository = EmployerReviewRepository;

