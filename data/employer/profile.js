var NavajaRepository = require('./../repository.js').Repository;

var EmployerProfileRepository = function() {
    var navajaRepository = new NavajaRepository('employer', 'profile');
    return navajaRepository;
}

exports.Repository = EmployerProfileRepository;

