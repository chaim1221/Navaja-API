var assert = require('chai').assert;
var WorkerProfileRepository = require(__dirname + '/../../../../data/worker/profile.js').Repository;

describe('When we want to keep track of worker profiles', function () {
    var workerProfileRepository = new WorkerProfileRepository();
    var profile = {
        returnCustomer: true,
        receiveUpdates: true, 
        name: 'Kaisar Sose', 
        email: 'ks@spam.org', 
        password: 'change_me', 
        phonePrimary: '503-867-5309',
        phoneSecondary: '800-555-1212',
        active: true
    };
    
    describe('Repository: WorkerProfileRepository', function () {
        it('Can add worker profiles', function (done) {
            workerProfileRepository.add(profile).then(function (returnedValue) {
                assert.ok(returnedValue);
                profile.id = parseInt(returnedValue);
                done();
            });
        });
        
        it('Can get worker profiles by id', function (done) {
            workerProfileRepository.getById(profile.id).then(function (result) {
                assert.equal(result.id, profile.id);
                assert.equal(result.returncustomer, profile.returncustomer);
                assert.equal(result.receiveupdates, profile.receiveupdates);
                assert.equal(result.name, profile.name);
                assert.equal(result.email, profile.email);
                assert.equal(result.password, profile.password);
                assert.equal(result.phonePrimary, profile.phonePrimary);
                assert.equal(result.phoneSecondary, profile.phoneSecondary);
                assert.equal(result.active, profile.active);
                done();
            });
        });
        
        it('Can update worker profiles', function (done) {
            profile.email = "spam@ce.org";
            workerProfileRepository.update(profile).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            workerProfileRepository.remove(profile.id)
                .then(function(rowsAffected) {
                    assert.isAbove(rowsAffected, 0);
                    done();
                });
        });
    });
});

