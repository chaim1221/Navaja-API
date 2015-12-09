var NavajaRepository = require('./../repository.js').Repository;

function EmployerProfileRepository() {
    var navajaRepository = new NavajaRepository('employer', 'profile');
    
    return navajaRepository;
}

exports.Repository = EmployerProfileRepository;

