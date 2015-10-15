var NavajaRepository = require('./../repository.js').Repository;

var WorkOrderRepository = function() {
    return new NavajaRepository('work', 'order');
}

exports.Repository = WorkOrderRepository;

