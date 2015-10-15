var EmployerProfile = require('./../../domain/employer/profile.js');
// need dependency injection to test this w/o accessing database:
// bueller, bueller...
var EmployerProfileRepository = require('./../../data/employer/profile.js').Repository;

function EmployerProfileController() {
}; // is this a good idea? is it immutable?

EmployerProfileController.prototype.defineRoutes = function(router) {
    router.route('/employer/profile')
        .post(function (request, response) {
            var employerProfileRepository = new EmployerProfileRepository();
            // validation!??
            var employerProfile = new EmployerProfile(request.body);
            employerProfileRepository.add(employerProfile)
                .then(function (returnedValue) {
                    if (returnedValue) {
                        employerProfile.id = parseInt(returnedValue);
                        response.json(employerProfile);
                    } else {
                        response.status(500).end();
                    }
                });
        })
        .put(function (request, response) {
            var employerProfileRepository = new EmployerProfileRepository();
            var employerProfile = new EmployerProfile(request.body);
            employerProfileRepository.update(employerProfile)
                .then(function (returnedValue) {
                    if (returnedValue.length > 0) {
                        response.status(200).end();
                    } else {
                        response.status(404).end();
                    }
                });
        });
        
    router.route('/employer/profile/:profile_id')
    .get(function(request, response) {
        var employerProfileRepository = new EmployerProfileRepository();
        var employerProfile = employerProfileRepository.getById(request.params.profile_id).then(function (profile) {
            if(profile){
                var employerProfile = new EmployerProfile(profile);
                response.json(employerProfile);
            } else {
                response.status(404).end()
            }
        });
    })
    .delete(function (request, response) {
        var employerProfileRepository = new EmployerProfileRepository();
        employerProfileRepository.getById(request.params.profile_id)
            .then(function (result) {
                if (result) {
                    var employerProfile = new EmployerProfile(result);
                    employerProfile.active = false;
                    employerProfileRepository.update(employerProfile)
                        .then(function (returnedValue) {
                            if (returnedValue.length > 0) {
                                response.status(200).end();
                            } else {
                                response.status(500).end();
                            }
                        });
                } else {
                    response.status(404).end();
                }
            });
    });

}

module.exports = EmployerProfileController;
