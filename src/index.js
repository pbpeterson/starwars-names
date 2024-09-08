import uniqueRandomArray from "unique-random-array";
import starWarsNames from "./starwars-names.json" assert { type: "json" };

const getRandomItem = uniqueRandomArray(starWarsNames);

function random(number) {
  if (number === undefined || number <= 0) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}

export default {
  all: starWarsNames,
  random,
};
