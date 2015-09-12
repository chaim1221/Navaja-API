var assert = require("assert")
  , should = require("should")
  , expect = require("expect")
  , db = require("./../../../Data/db.js");

// These tests assume you have run the scripts in the -SQL repo
describe("module: db", function() {
    it("should not be null", function () {
        var client = db.client();
        client.should.be.ok; // truthy
        //console.log(client);
    });
});
