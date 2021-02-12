/**********************************
 * 5. Tell me more.
 *
 * Collections of data: Objects
 *
 * An object is denoted by curly braces, {}, and its items are arranged in key-value pairs, connected by a colon, :.
 *
 * Each key-value pair is separated by commas, just like arrays.
 *
 * e.g. { "key" : value }
 *
 * You separate different key-value pairs in an object but putting a comma after a value.
 *
 * Create the variable myFriend.
 * Create a key "age" and assign it the age of your friend.
 * Create a key called 'traits' and assign it as an array of some of the traits that your friend has.
 * Create a key "name" and assign it to be your friend's name.
 */

import { expect } from "chai";

describe("06 - Objects & Object Methods", () => {
  describe("The variable myFriend", () => {
    it("should be an object", () => {
      expect(myFriend).to.be.an("object");
    });

    it('should have the keys, "age", "traits", and "name"', () => {
      expect(myFriend).to.have.all.keys("age", "traits", "name");
    });

    it("should have the values of its keys correctly assigned", () => {
      expect(myFriend.age).to.be.a("number");
      expect(myFriend.traits).to.be.an("array");
      expect(myFriend.name).to.be.a("string");
    });
  });
});
