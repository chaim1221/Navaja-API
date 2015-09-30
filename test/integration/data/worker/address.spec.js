var assert = require('chai').assert;
var WorkerProfileRepository = require(__dirname + '/../../../../data/worker/profile.js').Repository;
var WorkerAddressRepository = require(__dirname + '/../../../../data/worker/address.js').Repository;

describe('When we want to keep track of worker addresses', function () {
    var workerAddressRepository = new WorkerAddressRepository();
    
    var address = {
        profileId: null,
        businessId: null,
        address1: "1600 Pennsylvania Ave.",
        address2: "Ste. 100",
        city: "Portland",
        state: "OR",
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
            address.profileId = parseInt(returnedValue);
            done();
        });
    });
    
    describe("Repository: WorkerAddressRepository", function () {
        it('Can add worker addresses', function (done) {
            workerAddressRepository.add(address).then(function (returnedValue) {
                assert.ok(returnedValue);
                address.id = parseInt(returnedValue);
                done();
            });
        });
        
        it('Can get worker addresses by id', function (done) {
            workerAddressRepository.getById(address.id).then(function (result) {
                assert.equal(result.id, address.id);
                assert.equal(result.profileId, address.profileId);
                assert.equal(result.businessId, address.businessId);
                assert.equal(result.address1, address.address1);
                assert.equal(result.address2, address.address2);
                assert.equal(result.city, address.city);
                assert.equal(result.state, address.state);
                assert.equal(result.active, address.active);
                done();
            });
        });
        
        it('Can update worker addresses', function (done) {
            address.active = false;
            workerAddressRepository.update(address).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            workerAddressRepository.remove(address.id)
                .then(function(rowsAffected) {
                    assert.isAbove(rowsAffected, 0);
                    done();
                });
        });
    });
});

