/**********************************
 * 1. myArray
 *
 * An array is denoted by square brackets, [], and its items are separated by commas.
 * Create the variable myArray.
 * Make sure myArray contains a number, a string, and a boolean, in that order.
 * myArray should be three items long.
 */

// Replace this comment with your code.

import { expect } from "chai";

describe("04 - Arrays and Array Methods", () => {
  describe("1. The variable myArray", () => {
    it("should be an array", () => {
      expect(myArray).to.be.an("array");
    });

    it("should be three items long", () => {
      expect(myArray).to.have.lengthOf(3);
    });

    it("should be made up of a number, a string, and a boolean, in that order", () => {
      let myArrayTypes = [];
      myArray.forEach((item) => {
        let type = typeof item;
        myArrayTypes.push(type);
      });

      expect(myArrayTypes).to.include.ordered.members([
        "number",
        "string",
        "boolean",
      ]);
    });
  });
});
