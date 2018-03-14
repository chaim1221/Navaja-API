var assert = require('chai').assert;
var EmployerProfileRepository = require(__dirname + '/../../../../data/employer/profile.js').Repository;
var EmployerAddressRepository = require(__dirname + '/../../../../data/employer/address.js').Repository;

describe('When we want to keep track of employer addresses', function () {
    var employerAddressRepository = new EmployerAddressRepository();
    var employerProfileRepository = new EmployerProfileRepository();
    
    var address = {
        profileId: null,
        businessId: null,
        address1: "1234 Any St.",
        address2: "Ste. 100",
        city: "Portland",
        state: "OR",
        phonePrimary: "503-867-5309",
        phoneSecondary: "800-555-1212",
        active: true
    }
    
    var profile = {
        returnCustomer: true,
        receiveUpdates: true, 
        name: 'Barack Obama', 
        email: 'obama@spam.org', 
        password: 'change_me', 
        active: true
    };

    before(function (done) {
        employerProfileRepository.add(profile).then(function (returnedValue) {
            var iValue = parseInt(returnedValue);
            profile.id = iValue;
            address.profileId = iValue;
            done();
        });
    });
    
    describe("Repository: EmployerAddressRepository", function () {
        it('Can add employer addresses', function (done) {
            employerAddressRepository.add(address).then(function (returnedValue) {
                assert.ok(returnedValue);
                address.id = parseInt(returnedValue);
                done();
            });
        });
        
        // TODO: Test multiple addresses for a single employer
        // TODO: Add functionality to return all active addresses for a single employer
    
        it('Can get employer addresses by id', function (done) {
            employerAddressRepository.getById(address.id).then(function (result) {
                assert.equal(result.id, address.id);
                assert.equal(result.profileId, address.profileId);
                assert.equal(result.businessId, address.businessId);
                assert.equal(result.address1, address.address1);
                assert.equal(result.address2, address.address2);
                assert.equal(result.city, address.city);
                assert.equal(result.state, address.state);
                assert.equal(result.phonePrimary, address.phonePrimary);
                assert.equal(result.phoneSecondary, address.phoneSecondary);
                assert.equal(result.active, address.active);
                done();
            });
        });
        
        it('Can update employer addresses', function (done) {
            address.active = false;
            employerAddressRepository.update(address).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            employerAddressRepository.remove(address.id)
                .then(function(rowsAffected) {
                    assert.equal(rowsAffected, 1); 
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

