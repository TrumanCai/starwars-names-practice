const expect = require('chai').expect;
const starWars = require('./index');
const pool = require('./starwars-names');

describe("starwars-names", function() {
    describe('all', function () {
        it('should be array of strings', function () {
            expect(starWars.all).to.satisfy(isArrayOfStrings);
        });
        function isArrayOfStrings(array) {
            return array.every(function (item) {
                return typeof item === "string";
            });
        }

        it('should be 4-LOM', function () {
            expect(starWars.all).to.include("4-LOM");
        });
    });
    describe('random', function () {
        it('should return a random item from the random all', function () {
            const randomItem = starWars.random();
            expect(starWars.all).to.contain(randomItem);
        });
    });
});