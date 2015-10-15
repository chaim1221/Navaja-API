var NavajaRepository = require('./../repository.js').Repository;

var WorkerSkillRepository = function() {
    return new NavajaRepository('worker', 'skill');
}

exports.Repository = WorkerSkillRepository;

