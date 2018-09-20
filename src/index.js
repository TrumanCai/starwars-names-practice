const uniqueRandomArray = require("unique-random-array");
const starWarsNames = require("./starwars-names.json");
const getRandomItem = uniqueRandomArray(starWarsNames);
module.exports = {
  all: starWarsNames,
  random: random
};

function random(n) {
  if(undefined === n) {
      return getRandomItem();
  } else {
    let randomItems = [];
    for(let i = 0; i < n; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
