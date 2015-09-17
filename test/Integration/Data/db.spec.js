var db = require("./../../../Data/db.js");
var attempt = "31";

describe("module: db", function() {
    describe("provides a wrapper for the execution of queries", function () {
    
        it("can insert rows", function(done) {
            db.query("insert into employer.profile \
                (id, returncustomer, receiveupdates, name, email, password, active) \
                values (" + attempt + ", true, true, 'Chaim Eliyah', 'ce@spam.org', 'change_me', true)", 
                function (err, result) { 
                    done();
                    if (err) {  
                        throw new Error(err);
                    }
                    console.log(result);
                }
            );
        });
        
        it("can update rows", function(done) {
            db.query("update employer.profile\
                set active = false where id = " + attempt,
                function (err, result) {
                    done();
                    if (err) throw new Error(err);
                    console.log(result);
                }
            );
        });
    });
}); 

