var assert = require('chai').assert;
var EmployerProfileRepository = require (__dirname + '/../../../../data/employer/profile.js').Repository;
var WorkerProfileRepository = require(__dirname + '/../../../../data/worker/profile.js').Repository;
var WorkerSkillRepository = require(__dirname + '/../../../../data/worker/skill.js').Repository;
var WorkOrderRepository = require(__dirname + '/../../../../data/work/order.js').Repository;
var WorkOfferRepository = require(__dirname + '/../../../../data/work/offer.js').Repository;

describe('When we want to keep track of a work offer', function () {
    var workOfferRepository = new WorkOfferRepository();
    var employerProfileRepository = new EmployerProfileRepository();
    var workOrderRepository = new WorkOrderRepository();
    
    var employerProfile = {
        returnCustomer: true,
        receiveUpdates: true, 
        name: 'Barack Obama', 
        email: 'obama@spam.org', 
        password: 'change_me', 
        active: true
    };

    var workOrder = {
        employerProfileId: null,
        englishMasteryRequired: 5,
        workerSkillId: null,
        masteryRequired: 5,
        timeNeeded: new Date(),
        proposedWage: 10.80,
        active: true
    };
    
    var workOffer = {
        orderId: null,
        workerProfileId: null,
        meetsSponsorshipRequirements: true,
        location: "(45.516666667, 122.683333333)",
        transportationMethodId: 1, // US English
        timePromised: new Date(),
        counterOffer: 11.00,
        active: true
    }
    
    before(function (done) {    
        var workerProfileRepository = new WorkerProfileRepository();
        var workerSkillRepository = new WorkerSkillRepository();
        
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
        
        var skill = {
            name: "Find Loose Firewood",
            active: true
        };

        workerProfileRepository.add(workerProfile).then(function (returnedValue) {
            workOffer.workerProfileId = parseInt(returnedValue);
            complete();
        });
        
        employerProfileRepository.add(employerProfile).then(function (returnedValue) {
            var iValue = parseInt(returnedValue);
            employerProfile.id = iValue;
            workOrder.employerProfileId = iValue;
            complete();
        });
        
        workerSkillRepository.add(skill).then(function (returnedValue) {
            workOrder.workerSkillId = parseInt(returnedValue);
            complete();
        });

        function complete() {
            if (workOffer.workerProfileId !== null 
            && workOrder.employerProfileId !== null 
            && workOrder.workerSkillId !== null) {
                workOrderRepository.add(workOrder).then(function (returnedValue) {
                    //console.log("I'm here");
                    var iValue = parseInt(returnedValue);
                    workOrder.id = iValue;
                    
                    
                    workOffer.orderId = iValue;
                    done();
                });
            }
        }
    });
    
    describe("Repository: WorkerOfferRepository", function () {
        it('Can add work offers', function (done) {
            workOfferRepository.add(workOffer).then(function (returnedValue) {
                assert.ok(returnedValue);
                var iValue = parseInt(returnedValue);
                workOffer.id = iValue;
                done();
            });
        });
    
        it('Can get work offers by id', function (done) {
            workOfferRepository.getById(workOffer.id).then(function (result) {
                assert.equal(result.id, workOffer.id);
                assert.equal(result.orderId, workOffer.orderId);
                assert.equal(result.meetsSponsorshipRequirements, workOffer.meetsSponsorshipRequirements);
                var locationInPostgres = workOffer.location.split('(')[1].split(')')[0].split(',');
                assert.equal(result.location.x, locationInPostgres[0]);
                assert.equal(result.location.y, locationInPostgres[1]);
                assert.equal(result.transportationMethodId, workOffer.transportationMethodId);
                // this seems to be a bug in 'assert' because these are EXACTLY THE SAME
                assert.equal(Object(result.timePromised).valueOf(), Object(workOffer.timePromised).valueOf());
                assert.equal(result.counterOffer, workOffer.counterOffer);
                assert.equal(result.active, workOffer.active);
                done();
            });
        });
        
        it('Can update work offers', function (done) {
            workOffer.active = false;
            workOfferRepository.update(workOffer).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            workOfferRepository.remove(workOffer.id)
                .then(function(rowsAffected) {
                    assert.isAbove(rowsAffected, 0);
                    done();
                });
        });
    });
    
    after(function (done) {
        workOrderRepository.remove(workOrder.id)
            .then(function (rowsAffected) {
                assert.equal(rowsAffected, 1);
                complete(true);
            });
            
        function complete(condition) {
            if (condition) {
              employerProfileRepository.remove(employerProfile.id)
                .then(function(rowsAffected) {
                    assert.equal(rowsAffected, 1);
                    done();
                });
            }
        }
    });
});

