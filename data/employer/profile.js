var NavajaRepository = require('./../repository.js').Repository;
var db = require('./../db.js'); // because we're extending it. this feels wrong.

function EmployerProfileRepository() {
    var navajaRepository = new NavajaRepository('employer', 'profile');
    
    navajaRepository.getByEmail = function (email) {
        return db.read(navajaRepository.schema + '.' + navajaRepository.table, 'email', email);
    }
    
    return navajaRepository;
}

exports.Repository = EmployerProfileRepository;

