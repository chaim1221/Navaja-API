var assert = require("assert")
  , should = require("should")
  , expect = require("expect")
  , db = require("./../../../Data/db.js");

// These tests assume you have run the scripts in the -SQL repo
describe("module: db", function() {
    it("should not be null", function () {
        db().should.be.ok; // truthy
    });
    
    describe("method: create", function() {
        it("returns the integer value of the created record", function () {
            var success = db();
            success.should.be.a.Number;
        });
    });
});
