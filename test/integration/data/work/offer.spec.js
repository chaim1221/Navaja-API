var assert = require('chai').assert;
var EmployerProfileRepository = require (__dirname + '/../../../../data/employer/profile.js').Repository;
var WorkerProfileRepository = require(__dirname + '/../../../../data/worker/profile.js').Repository;
var WorkerSkillRepository = require(__dirname + '/../../../../data/worker/skill.js').Repository;
var WorkOrderRepository = require(__dirname + '/../../../../data/work/order.js').Repository;
var WorkOfferRepository = require(__dirname + '/../../../../data/work/offer.js').Repository;

describe('When we want to keep track of an worker offer', function () {
    var workOfferRepository = new WorkOfferRepository();
    
    var offer = {
        orderId: null,
        workerProfileId: null,
        meetsSponsorshipRequirements: true,
        location: "(45.516666667, 122.683333333)",
        transportationMethodId: 1, // US English
        timePromised: "2015-09-30 12:00:00",
        counterOffer: 11.00,
        active: true
    }
    
    before(function (done) {    
        var employerProfileRepository = new EmployerProfileRepository();
        var workerProfileRepository = new WorkerProfileRepository();
        var workerSkillRepository = new WorkerSkillRepository();
        var workOrderRepository = new WorkOrderRepository();
        
        var workerProfile = {
            returnCustomer: true,
            receiveUpdates: true, 
            name: 'Kaisar Sose', 
            email: 'ks@spam.org', 
            password: 'change_me', 
            phonePrimary: '503-867-5309',
            phoneSecondary: '800-555-1212',
            active: true
        };
        
        var employerProfile = {
            returnCustomer: true,
            receiveUpdates: true, 
            name: 'Barack Obama', 
            email: 'obama@spam.org', 
            password: 'change_me', 
            active: true
        };
        
        var skill = {
            name: "Find Loose Firewood",
            active: true
        };

        var order = {
            employerProfileId: null,
            englishMasteryRequired: 5,
            workerSkillId: null,
            masteryRequired: 5,
            timeNeeded: "2015-09-30 10:00:00",
            proposedWage: 10.80,
            active: true
        };

        workerProfileRepository.add(workerProfile).then(function (returnedValue) {
            offer.workerProfileId = parseInt(returnedValue);
            complete();
        });
        
        employerProfileRepository.add(employerProfile).then(function (returnedValue) {
            order.employerProfileId = parseInt(returnedValue);
            complete();
        });
        
        workerSkillRepository.add(skill).then(function (returnedValue) {
            order.workerSkillId = parseInt(returnedValue);
            complete();
        });

        function complete() {
            if (offer.workerProfileId !== null 
            && order.employerProfileId !== null 
            && order.workerSkillId !== null) {
                workOrderRepository.add(order).then(function (returnedValue) {
                    offer.orderId = parseInt(returnedValue);
                    done();
                });
            }
        }
    });
    
    describe("Repository: WorkerOfferRepository", function () {
        it('Can add worker offeres', function (done) {
            workOfferRepository.add(offer).then(function (returnedValue) {
                assert.ok(returnedValue);
                offer.id = parseInt(returnedValue);
                done();
            });
        });
    
        it('Can get work offers by id', function (done) {
            workOfferRepository.getById(offer.id).then(function (result) {
                assert.equal(result.id, offer.id);
                assert.equal(result.profileId, offer.profileId);
                assert.equal(result.employerProfileId, offer.employerProfileId);
                assert.equal(result.mastery, offer.mastery);
                assert.equal(result.title, offer.title);
                assert.equal(result.message, offer.message);
                assert.equal(result.active, offer.active);
                done();
            });
        });
        
        it('Can update work offers', function (done) {
            offer.active = false;
            workOfferRepository.update(offer).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            workOfferRepository.remove(offer.id)
                .then(function(rowsAffected) {
                    assert.isAbove(rowsAffected, 0);
                    done();
                });
        });
    });
});

