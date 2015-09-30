var assert = require('chai').assert;
var WorkerSkillRepository = require(__dirname + '/../../../../data/worker/skill.js').Repository;

describe('When we want to keep track of worker skills', function () {
    var workerSkillRepository = new WorkerSkillRepository();
    
    var skill = {
        name: "Find Loose Firewood",
        active: true
    }
    
    describe("Repository: WorkerSkillRepository", function () {
        it('Can add worker skilles', function (done) {
            workerSkillRepository.add(skill).then(function (returnedValue) {
                assert.ok(returnedValue);
                skill.id = parseInt(returnedValue);
                done();
            });
        });
    
        it('Can get worker skilles by id', function (done) {
            workerSkillRepository.getById(skill.id).then(function (result) {
                assert.equal(result.id, skill.id);
                assert.equal(result.name, skill.name);
                assert.equal(result.active, skill.active);
                done();
            });
        });
        
        it('Can update worker skilles', function (done) {
            skill.active = false;
            workerSkillRepository.update(skill).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            workerSkillRepository.remove(skill.id)
                .then(function(rowsAffected) {
                    assert.isAbove(rowsAffected, 0);
                    done();
                });
        });
    });
});

