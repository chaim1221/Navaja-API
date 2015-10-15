var NavajaRepository = require('./../repository.js').Repository;

var EmployerBusinessRepository = function() {
    return new NavajaRepository('employer', 'business');
}

exports.Repository = EmployerBusinessRepository;

