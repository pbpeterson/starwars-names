import { describe, it } from "node:test";
import assert from "node:assert";
import lib from "./index.js";

describe("starwars-names", function () {
  it("should work", function () {
    assert.strictEqual(true, true);
  });

  it("should be an array of strings", function () {
    function arrayOfStrings(array) {
      return array.every((item) => typeof item === "string");
    }

    assert.strictEqual(arrayOfStrings(lib.all), true);
  });

  it("should contain Luke Skywalker", function () {
    assert.ok(lib.all.includes("Luke Skywalker"));
  });

  it("should return a random item from lib.all", function () {
    assert.ok(lib.all.includes(lib.random()));
  });

  it("should return an array of random items if passed a number", function () {
    const quantityOfItems = 3;
    const randomItems = lib.random(quantityOfItems);

    assert.equal(randomItems.length, quantityOfItems);
  });
});
