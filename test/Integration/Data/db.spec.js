var db = require("./../../../Data/db.js");

// These tests assume you have run the scripts in the -SQL repo
describe("module: db", function() {
    describe("provides a wrapper for the execution of queries", function () {
    
        it("can insert rows", function(done) {
            db.query("insert into employer.profile \
                (id, returncustomer, receiveupdates, name, email, password, active) \
                values (30, true, true, 'Chaim Eliyah', 'ce@spam.org', 'change_me', true)", 
                function (err, result) { 
                    done();
                    if (err) {  
                        throw new Error(err);
                    }
                    console.log(result);
                }
            );
        });
    });
}); 

