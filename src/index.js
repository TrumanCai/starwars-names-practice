import uniqueRandomArray from 'unique-random-array'
import starWarsNames from './starwars-names.json'
const getRandomItem = uniqueRandomArray(starWarsNames)
module.exports = {
  all: starWarsNames,
  random: random,
  containsInsensitive: getItems
}

function random (n) {
  if (undefined === n) {
    return getRandomItem()
  } else {
    let randomItems = []
    for (let i = 0; i < n; i++) {
      randomItems.push(getRandomItem())
    }
    return randomItems
  }
}

function getItems (seed) {
  if (void 0 === seed) {
    return void 0
  } else {
    let items = []
    starWarsNames.forEach(function (item) {
      if (item.includes(seed)) {
        items.push(item)
      }
    })
    return items
  }
}
