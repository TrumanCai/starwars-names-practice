const expect = require('chai').expect;
const starWars = require('./index');
const pool = require('./starwars-names');

describe("starwars-names", function() {
    it('should be true', function() {
        let name = starWars.random();
        let source = Array.from(pool);
        expect(source.indexOf(name)> -1).to.be.true;
    });
});