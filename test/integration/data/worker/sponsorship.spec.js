var assert = require('chai').assert;
var WorkerProfileRepository = require(__dirname + '/../../../../data/worker/profile.js').Repository;
var EmployerProfileRepository = require(__dirname + '/../../../../data/employer/profile.js').Repository;
var WorkerSkillRepository = require(__dirname + '/../../../../data/worker/skill.js').Repository;
var WorkerSponsorshipRepository = require(__dirname + '/../../../../data/worker/sponsorship.js').Repository;

describe('When we want to keep track of an worker sponsorship', function () {
    var workerSponsorshipRepository = new WorkerSponsorshipRepository();
    
    var sponsorship = {
        profileId: null,
        employerProfileId: null,
        workerSkillId: null,
        mastery: 5,
        culture: "en-US", // US English
        title: "This worker rocks",
        message: "Hire this guy, he can spot loose firewood",
        active: true
    }
    
    before(function (done) {    
        var workerProfileRepository = new WorkerProfileRepository();
        var employerProfileRepository = new EmployerProfileRepository();
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

        workerProfileRepository.add(workerProfile).then(function (returnedValue) {
            sponsorship.profileId = parseInt(returnedValue);
            complete();
        });
        
        employerProfileRepository.add(employerProfile).then(function (returnedValue) {
            sponsorship.employerProfileId = parseInt(returnedValue);
            complete();
        });
        
        workerSkillRepository.add(skill).then(function (returnedValue) {
            sponsorship.workerSkillId = parseInt(returnedValue);
            complete();
        });

        function complete() {
            if (sponsorship.profileId !== null 
            && sponsorship.employerProfileId !== null 
            && sponsorship.workerSkillId !== null) {
                done();
            }
        }
    });
    
    describe("Repository: WorkerSponsorshipRepository", function () {
        it('Can add worker sponsorshipes', function (done) {
            workerSponsorshipRepository.add(sponsorship).then(function (returnedValue) {
                assert.ok(returnedValue);
                sponsorship.id = parseInt(returnedValue);
                done();
            });
        });
        
        // TODO: Test multiple sponsorshipes for a single worker
        // TODO: Add functionality to return all active sponsorshipes for a single worker
    
        it('Can get worker sponsorshipes by id', function (done) {
            workerSponsorshipRepository.getById(sponsorship.id).then(function (result) {
                assert.equal(result.id, sponsorship.id);
                assert.equal(result.profileId, sponsorship.profileId);
                assert.equal(result.employerProfileId, sponsorship.employerProfileId);
                assert.equal(result.mastery, sponsorship.mastery);
                assert.equal(result.title, sponsorship.title);
                assert.equal(result.message, sponsorship.message);
                assert.equal(result.active, sponsorship.active);
                done();
            });
        });
        
        it('Can update worker sponsorshipes', function (done) {
            sponsorship.active = false;
            workerSponsorshipRepository.update(sponsorship).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            workerSponsorshipRepository.remove(sponsorship.id)
                .then(function(rowsAffected) {
                    assert.isAbove(rowsAffected, 0);
                    done();
                });
        });
    });
});

