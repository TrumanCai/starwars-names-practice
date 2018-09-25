const expect = require('chai').expect;
const starWars = require('./index');

describe("starwars-names", function () {
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
    it('should return an array of random items if pass a number', function () {
      const randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function (item) {
        console.log(item);
        expect(starWars.all).to.contains(item);
        expect(starWars.all).to.contain(item);
        expect(starWars.all).to.includes(item);
        expect(starWars.all).to.include(item);
      });
    });
  });
  describe('containsInsensitive', function () {
    it('should return all items contain M/m from all', function () {
      const allItems = starWars.containsInsensitive('m');
      allItems.forEach(function( item ) {
        expect(starWars.all).to.contains(item);
      });
    });
    it('should return null when search nothing', function () {
      const allItems = starWars.containsInsensitive();
      expect(void 0).to.be.equal(allItems);
    });
  });
});