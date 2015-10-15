var NavajaRepository = require('./../repository.js').Repository;

var EmployerAddressRepository = function() {
    return new NavajaRepository('employer', 'address');
}

exports.Repository = EmployerAddressRepository;

