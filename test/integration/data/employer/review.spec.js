var assert = require('chai').assert;
var EmployerProfileRepository = require(__dirname + '/../../../../data/employer/profile.js').Repository;
var EmployerReviewRepository = require(__dirname + '/../../../../data/employer/review.js').Repository;

describe('When we want to keep track of an employer review', function () {
    var employerReviewRepository = new EmployerReviewRepository();
    
    var review = {
        profileId: null,
        rating: 5,
        culture: "es-MX", // Mexican Spanish
        title: "This employer rocks",
        message: "Work for this guy, he pays great",
        active: true
    }
    
    before(function (done) {    
        var employerProfileRepository = new EmployerProfileRepository();

        var profile = {
            returnCustomer: true,
            receiveUpdates: true, 
            name: 'Barack Obama', 
            email: 'obama@spam.org', 
            password: 'change_me', 
            active: true
        };

        employerProfileRepository.add(profile).then(function (returnedValue) {
            review.profileId = parseInt(returnedValue);
            done();
        });
    });
    
    describe("Repository: EmployerReviewRepository", function () {
        it('Can add employer reviewes', function (done) {
            employerReviewRepository.add(review).then(function (returnedValue) {
                assert.ok(returnedValue);
                review.id = parseInt(returnedValue);
                done();
            });
        });
        
        // TODO: Test multiple reviewes for a single employer
        // TODO: Add functionality to return all active reviewes for a single employer
    
        it('Can get employer reviewes by id', function (done) {
            employerReviewRepository.getById(review.id).then(function (result) {
                assert.equal(result.id, review.id);
                assert.equal(result.profileId, review.profileId);
                assert.equal(result.name, review.name);
                assert.equal(result.federalTaxId, review.federalTaxId);
                assert.equal(result.active, review.active);
                done();
            });
        });
        
        it('Can update employer reviewes', function (done) {
            review.active = false;
            employerReviewRepository.update(review).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            employerReviewRepository.remove(review.id)
                .then(function(rowsAffected) {
                    assert.isAbove(rowsAffected, 0);
                    done();
                });
        });
    });
});

