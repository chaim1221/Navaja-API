var assert = require('chai').assert;
var EmployerProfileRepository = require(__dirname + '/../../../../data/employer/profile.js').Repository;

describe('When we want to keep track of employer profiles', function () {
    var employerProfileRepository = new EmployerProfileRepository();
    var profile = {
        returnCustomer: true,
        receiveUpdates: true, 
        name: 'Chaim Eliyah', 
        email: 'ce@spam.org', 
        password: 'change_me', 
        active: true
    };
    
    describe('Repository: EmployerProfileRepository', function () {
        it('Can add employer profiles', function (done) {
            employerProfileRepository.add(profile).then(function (returnedValue) {
                assert.ok(returnedValue);
                profile.id = parseInt(returnedValue);
                done();
            });
        });
        
        it('Can get employer profiles by id', function (done) {
            employerProfileRepository.getById(profile.id).then(function (result) {
                assert.equal(result.id, profile.id);
                assert.equal(result.returncustomer, profile.returncustomer);
                assert.equal(result.receiveupdates, profile.receiveupdates);
                assert.equal(result.name, profile.name);
                assert.equal(result.email, profile.email);
                assert.equal(result.password, profile.password);
                assert.equal(result.active, profile.active);
                done();
            });
        });
        
        it('Can update employer profiles', function (done) {
            profile.email = "spam@ce.org";
            employerProfileRepository.update(profile).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            employerProfileRepository.remove(profile.id)
                .then(function(rowsAffected) {
                    assert.isAbove(rowsAffected, 0);
                    done();
                });
        });
    });
});

