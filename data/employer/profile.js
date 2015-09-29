var NavajaRepository = require('./../repository.js').Repository;

var EmployerProfileRepository = function() {
    return new NavajaRepository('employer', 'profile');
}

exports.Repository = EmployerProfileRepository;

