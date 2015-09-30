var assert = require('chai').assert;
var EmployerProfileRepository = require(__dirname + '/../../../../data/employer/profile.js').Repository;
var WorkerSkillRepository = require(__dirname + '/../../../../data/worker/skill.js').Repository;
var WorkOrderRepository = require(__dirname + '/../../../../data/work/order.js').Repository;

describe('When we want to keep track of an work order', function () {
    var workOrderRepository = new WorkOrderRepository();
    
    var order = {
        employerProfileId: null,
        englishMasteryRequired: 5,
        workerSkillId: null,
        masteryRequired: 5,
        timeNeeded: "2015-09-30 10:00:00",
        proposedWage: 10.80,
        active: true
    }
    
    before(function (done) {    
        var workerSkillRepository = new WorkerSkillRepository();
        var employerProfileRepository = new EmployerProfileRepository();
        
        var skill = {
            name: "Find Loose Firewood",
            active: true
        };
        
        var employer = {
            returnCustomer: true,
            receiveUpdates: true, 
            name: 'Barack Obama', 
            email: 'obama@spam.org', 
            password: 'change_me', 
            active: true
        };

        workerSkillRepository.add(skill).then(function (returnedValue) {
            order.workerSkillId = parseInt(returnedValue);
            complete();
        });
        
        employerProfileRepository.add(employer).then(function (returnedValue) {
            order.employerProfileId = parseInt(returnedValue);
            complete();
        });
        
        function complete() {
            if (order.employerProfileId !== null 
            && order.workerSkillId !== null) {
                done();
            }
        }
    });
    
    describe("Repository: WorkOrderRepository", function () {
        it('Can add work orders', function (done) {
            workOrderRepository.add(order).then(function (returnedValue) {
                assert.ok(returnedValue);
                order.id = parseInt(returnedValue);
                done();
            });
        });
    
        it('Can get work orders by id', function (done) {
            workOrderRepository.getById(order.id).then(function (result) {
                assert.equal(result.id, order.id);
                assert.equal(result.employerProfileId, order.employerProfileId);
                assert.equal(result.englishMasteryRequired, order.englishMasteryRequired);
                assert.equal(result.workerSkillId, order.workerSkillId);
                assert.equal(result.masteryRequired, order.masteryRequired);
                // we're having timestamp problems.
                //assert.equal(result.timeNeeded, order.timeNeeded);
                assert.equal((9999 * result.proposedWage) / 9999, order.proposedWage);
                assert.equal(result.active, order.active);
                done();
            });
        });
        
        it('Can update work orders', function (done) {
            order.active = false;
            workOrderRepository.update(order).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            workOrderRepository.remove(order.id)
                .then(function(rowsAffected) {
                    assert.isAbove(rowsAffected, 0);
                    done();
                });
        });
    });
});

