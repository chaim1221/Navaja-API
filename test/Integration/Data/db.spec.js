var db = require("./../../../Data/db.js");

// These tests assume you have run the scripts in the -SQL repo
describe("module: db", function() {
    it("provides a wrapper for the execution of queries", function (done) {
        db.query("insert into employer.profile \
            (id, returncustomer, receiveupdates, name, email, password, active) \
            values (4, true, true, 'Chaim Eliyah', 'ce@spam.org', 'change_me', true)", {}, 
            function (err, stdout, stderr) { 
                console.log(err || ""); 
                console.log(stdout || ""); 
                console.log(stderr || "");
                done();
            }
        );
    });
}); 

