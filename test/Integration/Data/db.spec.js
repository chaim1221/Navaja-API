var assert = require("assert")
  , should = require("should")
  , expect = require("expect")
  , db = require("./../../../Data/db.js");

// These tests assume you have run the scripts in the -SQL repo
describe("module: db", function() {
    describe("method: read", function() {
        it("returns a record when read from the database", function () {
            db.read();
        });
    });
}); 
