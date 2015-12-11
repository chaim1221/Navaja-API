var assert = require('chai').assert;
var EmployerProfileRepository = require(__dirname + '/../../../../data/employer/profile.js').Repository;
var EmployerBusinessRepository = require(__dirname + '/../../../../data/employer/business.js').Repository;

describe('When we want to keep track of an employer business', function () {
    var employerBusinessRepository = new EmployerBusinessRepository();
    var employerProfileRepository = new EmployerProfileRepository();

    var profile = {
        returnCustomer: true,
        receiveUpdates: true, 
        name: 'Barack Obama', 
        email: 'obama@spam.org', 
        password: 'change_me', 
        active: true
    };
    
    var business = {
        profileId: null,
        name: "Barry's Mules",
        federalTaxId: "01-234-5678",
        active: true
    }
    
    before(function (done) {    
        employerProfileRepository.add(profile).then(function (returnedValue) {
            var iValue = parseInt(returnedValue);
            profile.id = iValue;
            business.profileId = iValue;
            done();
        });
    });
    
    describe("Repository: EmployerBusinessRepository", function () {
        it('Can add employer businesses', function (done) {
            employerBusinessRepository.add(business).then(function (returnedValue) {
                assert.ok(returnedValue);
                business.id = parseInt(returnedValue);
                done();
            });
        });
        
        // TODO: Test multiple businesses for a single employer
        // TODO: Add functionality to return all active businesses for a single employer
    
        it('Can get employer businesses by id', function (done) {
            employerBusinessRepository.getById(business.id).then(function (result) {
                assert.equal(result.id, business.id);
                assert.equal(result.profileId, business.profileId);
                assert.equal(result.name, business.name);
                assert.equal(result.federalTaxId, business.federalTaxId);
                assert.equal(result.active, business.active);
                done();
            });
        });
        
        it('Can update employer businesses', function (done) {
            business.active = false;
            employerBusinessRepository.update(business).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            employerBusinessRepository.remove(business.id)
                .then(function(rowsAffected) {
                    assert.isAbove(rowsAffected, 0);
                    done();
                });
        });
    });
    
    after(function (done) {
        employerProfileRepository.remove(profile.id)
            .then(function(rowsAffected) {
                assert.equal(rowsAffected, 1);
                done();
            });
    });
});

