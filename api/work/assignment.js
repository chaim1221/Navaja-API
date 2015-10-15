var NavajaRepository = require('./../repository.js').Repository;

var WorkAssignmentRepository = function() {
    return new NavajaRepository('work', 'assignment');
}

exports.Repository = WorkAssignmentRepository;

