var assert = require('chai').assert;
var NavajaRepository = require(__dirname + '/../../../data/repository.js').Repository;

describe('When we want to keep track of employer profiles', function () {
    var navajaRepository = new NavajaRepository('employer', 'profile');
    var profile = {
        returncustomer: true,
        receiveupdates: true, 
        name: 'Chaim Eliyah', 
        email: 'ce@spam.org', 
        password: 'change_me', 
        active: true
    };
    
    describe('Then the repository', function () {
        it('Can add employer profiles', function (done) {
            navajaRepository.add(profile).then(function (returnedValue) {
                assert.ok(returnedValue);
                profile.id = parseInt(returnedValue);
                done();
            });
        });
        
        it('Can get employer profiles by id', function (done) {
            navajaRepository.getById(profile.id).then(function (result) {
                assert.equal(result.id, profile.id);
                assert.equal(result.returncustomer, profile.returncustomer);
                assert.equal(result.receiveupdates, profile.receiveupdates);
                assert.equal(result.name, profile.name);
                assert.equal(result.email, profile.email);
                assert.equal(result.password, profile.password);
                assert.equal(result.active, profile.active);
                done();
            });
        });
        
        it('Can update employer profiles', function (done) {
            profile.email = "spam@ce.org";
            navajaRepository.update(profile).then(function (returnedValue) {
                assert.ok(returnedValue);
                done();
            });
        });
        
        it("can delete rows", function(done) {
            navajaRepository.remove(profile.id)
                .then(function(rowsAffected) {
                    assert.isAbove(rowsAffected, 0);
                    done();
                });
        });
    });
});

