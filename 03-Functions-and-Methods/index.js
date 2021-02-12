/**********************************
 * 1. Seriously, how do you spell this?
 *
 * Create the variable someLongWord and assign it the string: supercalifragilisticexpialidocious.
 * Create another variable called longWordLength.
 * Assign it the value of someLongWord.
 * Call the built-in String property .length on someLongWord.
 */

const someLongWord = "supercalifragilisticexpialidocious";
const longWordLength = someLongWord.length;

/**********************************
 * 2. LOUDER I CAN'T HEAR YOU!
 *
 * Create the variable thingsToSay and assign it the value of three words you want to yell.
 * Then, create a new variable yellingThis.
 * Assign it the value of thingsToSay.
 * Call the built-in String .toUpperCase() method on yellingThis to MAKE IT LOUDER.
 */
const thingsToSay = "this is fun";
const yellingThis = thingsToSay.toUpperCase();

// yellingThis = "THIS IS FUN"

/**********************************
 * 3. ow man my ears work no need to yell
 *
 * Create the variable stopYelling by assigning it the value of yellingThis.
 * Call the built-in String .toLowerCase() method on it.
 */
const stopYelling = yellingThis.toLowerCase();

// stopYelling = "this is fun"

/**********************************
 * 4. Yes, we really do need that many for the camping trip.
 *
 * Create the variable myCommand.
 * Give it the value: "Pack my box with five dozen liquor jugs."
 * Pass myCommand into console.log() to print it to the console, above the Runner object.
 */

const myCommand = "Pack my box with five dozen liquor jugs.";

console.log(myCommand);

/**********************************
 * 5. Hello World!
 *
 * Create a function called helloWorld that takes no parameters and returns the phrase 'Hello World!'.
 */

// function myFunction ( {helloWorld that takes no parameters and returns the phrase 'Hello World!'})

function helloWorld() {
  return "Hello World!";
}

/**********************************
 * 6. Simple Sum
 *
 * Create a function called simpleSum that takes in three numbers and returns their sum.
 */

// function simpleSum () { add 34, 5, and 1 }

// We need this function to accept three numbers -> three parameters
function simpleSum(x, y, z) {
  // These are the instructions for the simpleSum function
  return x + y + z;
}

/**********************************
 * CODE THAT TESTS YOUR ANSWERS
 *
 * To change a test from pending to active,
 * remove the 'x' in the xit statements
 */
const expect = require("chai").expect;

describe("02 - Methods, and Functions", () => {
  describe("The variable someLongWord", () => {
    it("is a string", () => {
      expect(someLongWord).to.be.a("string");
    });
    it("should be the right long word", () => {
      expect(someLongWord).to.equal("supercalifragilisticexpialidocious");
    });
  });

  describe("The variable longWordLength", () => {
    it("is a number", () => {
      expect(longWordLength).to.be.a("number");
    });
    it("should be the number of letters in someLongWord", () => {
      expect(longWordLength).to.equal(34);
    });
  });

  describe("The variable thingsToSay", () => {
    it("is a string", () => {
      expect(thingsToSay).to.be.a("string");
    });

    it("should not be an empty string", () => {
      expect(thingsToSay).to.not.be.empty;
    });

    it("should be three words long", () => {
      let wordSplit = thingsToSay.split(" ");
      expect(wordSplit).to.have.lengthOf(3);
    });
  });

  describe("The variable yellingThis", () => {
    it("is a string", () => {
      expect(yellingThis).to.be.a("string");
    });

    it("is an ALL CAPS version of thingsToSay", () => {
      expect(yellingThis).to.equal(thingsToSay.toUpperCase());
    });
  });

  describe("The variable stopYelling", () => {
    it("is a string", () => {
      expect(stopYelling).to.be.a("string");
    });

    it("is a lowercase version of yellingThis", () => {
      expect(stopYelling).to.equal(yellingThis.toLowerCase());
    });
  });

  describe("The variable myCommand", () => {
    it("is a string", () => {
      expect(myCommand).to.be.a("string");
    });

    it("has the correct value", () => {
      expect(myCommand).to.equal("Pack my box with five dozen liquor jugs.");
    });
  });

  describe("The function helloWorld", () => {
    it("is a function", () => {
      expect(helloWorld).to.be.a("function");
    });

    it("should be named helloWorld", () => {
      expect(helloWorld.name).to.equal("helloWorld");
    });

    it("returns the greeting, 'Hello World!'", () => {
      expect(helloWorld()).to.equal("Hello World!");
    });
  });

  describe("The function simpleSum", () => {
    it("is a function", () => {
      expect(simpleSum).to.be.a("function");
    });

    it("is named simpleSum", () => {
      expect(simpleSum.name).to.equal("simpleSum");
    });

    it("doesn't return a sum if only one numbers are passed in", () => {
      let num1 = 10;
      expect(simpleSum(num1)).to.be.NaN;
    });

    it("doesn't return a sum if only two numbers are passed in", () => {
      let num1 = 10;
      let num2 = 20;
      expect(simpleSum(num1, num2)).to.be.NaN;
    });

    it("returns the sum of three numbers", () => {
      let num1 = 855;
      let num2 = 386;
      let num3 = 779;
      expect(simpleSum(num1, num2, num3)).to.equal(2020);
    });

    it("returns the sum of the first three numbers passed into simpleSum", () => {
      let num1 = 10;
      let num2 = 20;
      let num3 = 30;
      let num4 = 40;
      expect(simpleSum(num1, num2, num3, num4)).to.equal(60);
    });
  });
});
