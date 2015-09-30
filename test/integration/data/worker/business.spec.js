var assert = require('chai').assert;
var WorkerProfileRepository = require(__dirname + '/../../../../data/worker/profile.js').Repository;
var WorkerBusinessRepository = require(__dirname + '/../../../../data/worker/business.js').Repository;

describe('When we want to keep track of an worker business', function () {
    var workerBusinessRepository = new WorkerBusinessRepository();
    
    var business = {
        profileId: null,
        name: "Kaisar's Mules",
        federalTaxId: "01-234-5678",
        active: true
    }
    
    before(function (done) {    
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

        workerProfileRepository.add(profile).then(function (returnedValue) {
            business.profileId = parseInt(returnedValue);
            done();
        });
    });
    
    describe("Repository: WorkerBusinessRepository", function () {
        it('Can add worker businesses', function (done) {
            workerBusinessRepository.add(business).then(function (returnedValue) {
                assert.ok(returnedValue);
                business.id = parseInt(returnedValue);
                done();
            });
        });
    
        it('Can get worker businesses by id', function (done) {
            workerBusinessRepository.getById(business.id).then(function (result) {
                assert.equal(result.id, business.id);
                assert.equal(result.profileId, business.profileId);
                assert.equal(result.name, business.name);
                assert.equal(result.federalTaxId, business.federalTaxId);
                assert.equal(result.active, business.active);
                done();
            });
        });
        
        it('Can update worker businesses', function (done) {
            business.active = false;
            workerBusinessRepository.update(business).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            workerBusinessRepository.remove(business.id)
                .then(function(rowsAffected) {
                    assert.isAbove(rowsAffected, 0);
                    done();
                });
        });
    });
});

