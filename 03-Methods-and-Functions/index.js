/**********************************
 * #1: helloWorld
 *
 * Define the function helloWorld.
 * helloWorld takes no inputs and returns the phrase "Hello World!"
 *
 * EXAMPLE FUNCTION CALL:
 * helloWorld() => "Hello World!"
 */

function helloWorld() {
  return "Hello World!";
}

/**********************************
 * #2: helloWorldRedux
 *
 * Define the function helloWorldRedux.
 * helloWorldRedux takes in an optional input, name.
 * If a name value is passed, return a personalized greeting using the name.
 * Otherwise, return the phrase "Hello World!"
 *
 * EXAMPLE FUNCTION CALLS:
 * helloWorldRedux() => "Hello World!"
 * helloWorldRedux("Bob") => "Hello Bob!"
 *
 * CHALLENGE:
 * Can you write this function as a one-liner?
 *
 * CHALLENGE NOTE:
 * Comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 */

function helloWorldRedux(name) {
  if (name) {
    return `Hello ${name}!`;
  }
  return "Hello World!";
}

// One-line function
// const helloWorldRedux = (name) => (name ? `Hello ${name}!` : `Hello World!`);

/**********************************
 * #3: uppercaseThis
 *
 * Define the function uppercaseThis.
 * uppercaseThis takes in one input, phrase, a String of any length.
 * uppercaseThis returns phrase fully capitalized.
 *
 * READ:
 * .toUpperCase() | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *
 * CHALLENGE:
 * Can you write this function as a one-liner?
 *
 * CHALLENGE NOTE:
 * Comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 */

function uppercaseThis(phrase) {
  return phrase.toUpperCase();
}

// One-line function
// const uppercaseThis = phrase => phrase.toUpperCase()

/**********************************
 * #: arrayToString
 *
 * arrayToString(["cat", "dog", "moo"], "") => "catdogmoo"
 * arrayToString(["cat", "dog", "moo"], " ") => "cat dog moo"
 * arrayToString(["cat", "dog", "moo"], "+-%") => "cat+-%dog+-%moo"
 *
 * CHALLENGE:
 * Can you write this function as a one-liner?
 *
 * CHALLENGE NOTE:
 * Comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 */

function arrayToString(array, separator) {
  return array.join(separator);
}

// One-line answer
// const arrayToString = (string, separator) => array.join(separator)

/**********************************
 * #: doesItAddUp
 *
 * doesItAddUp(10, 5, 15) => true
 * doesItAddUp(10, 5, 20) => false
 *
 * CHALLENGE:
 * Can you write this function as a one-liner?
 *
 * CHALLENGE NOTE:
 * Comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 */

function doesItAddUp(numA, numB, numC) {
  if (numA + numB === numC) {
    return true;
  }
  return false;
}

// One-line answer
// const doesItAddUp = (numA, numB, numC) => numA + numB === numC;

/**********************************
 * #: smallTogetherNow
 *
 * Define the function smallTogetherNow.
 * smallTogetherNow accepts two strings of any length.
 * smallTogetherNow returns a string that is the combination of both input strings converted to all lowercase.
 *
 * READ:
 * .toLowerCase() | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 *
 * CHALLENGE:
 * Can you write this function as a one-liner?
 *
 * CHALLENGE HINT:
 * .concat() | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
 *
 * CHALLENGE NOTE:
 * Comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 */

function smallTogetherNow(str1, str2) {
  const lowerOne = str1.toLowerCase();
  const lowerTwo = str2.toLowerCase();

  return lowerOne + lowerTwo;
}

// One-line answer
// const smallTogetherNow = (str1, str2) =>
//   str1.toLowerCase().concat(str2.toLowerCase());

/**********************************
 * #: Dog owners and their dogs
 *
 * Define the function dogAndOwnerInfo.
 * dogAndOwnerInfo takes in four inputs:
 * - the dog owner's name
 * - the dog owner's age
 * - the dog's name
 * - the dog's age
 *
 * dogAndOwnerInfo converts the dog's age into human years by multiplying it by 7.
 *
 * dogAndOwnerInfo returns one of three phrases with the corresponding values:
 * - if the dog is older than their owner:
 *    "[dog's name] is older than their owner, [owner's name], by [difference in human years]."
 * - if the owner is older than their owner:
 *    "[owner's name] is older than their dog, [dog's name], by [difference in human years]."
 * - if the owner and their dog are the same age:
 *    "[owner's name] and [dog's name] are both [their age in human years] old."
 */

function dogAndOwnerInfo(dogName, dogAge, ownerName, ownerAge) {
  let dogAgeInHumanYears = dogAge * 7;

  if (dogAgeInHumanYears > ownerAge) {
    return `${dogName} is older than their owner, ${ownerName}, by ${
      dogAgeInHumanYears - ownerAge
    } years.`;
  } else if (dogAgeInHumanYears < ownerAge) {
    return `${ownerName} is older than their dog, ${dogName}, by ${
      ownerAge - dogAgeInHumanYears
    } years.`;
  } else {
    return `${ownerName} and ${dogName} are both ${ownerAge} years old.`;
  }
}

/**********************************
 * BONUS
 * #1: Many inputs, if-else, direct usage and return
 *  animal years
 */

/**********************************
 * #1: One input, multiple ifs, local variable, final if-return
 * isCompatible (dating)
 */

/**********************************
 * #1: three inputs, multiple checks
 *
 */

function doesTheMathWork(numA, numB, numC) {
  if (numA + numB === numC) {
    return "addition";
  } else if (numA - numB === numC) {
    return "subtraction";
  } else if (numA * numB === numC) {
    return "multiplication";
  } else if (numA / numB === numC) {
    return "division";
  } else {
    return "no operation";
  }
}

/**********************************
 * BONUS
 *
 * allWordsLength
 *
 */

function allWordsLength(array) {
  return array.join("").length;
}

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Hit the Run button in REPL or enter `npm test` in your terminal
 */
import { expect } from "chai";

describe("03 - Methods and Functions", () => {
  describe("#1: helloWorld", () => {
    it("returns the phrase 'Hello World!'", () => {
      expect(helloWorld()).to.equal("Hello World!");
    });
  });

  describe("#2: helloWorldRedux", () => {
    it("returns a personalized greeting if a name is passed in", () => {
      expect(helloWorldRedux("Markus")).to.equal("Hello Markus!");
      expect(helloWorldRedux("Jon")).to.equal("Hello Jon!");
      expect(helloWorldRedux("Sally")).to.equal("Hello Sally!");
    });

    it('returns the phrase "Hello World!" if name is undefined', () => {
      expect(helloWorldRedux()).to.equal("Hello World!");
    });
  });

  describe("#3: uppercaseThis", () => {
    it("returns the phrase completely capitalized", () => {
      expect(uppercaseThis("aaaa")).to.equal("AAAA");
      expect(uppercaseThis("BBBB")).to.equal("BBBB");
      expect(uppercaseThis("cCcC")).to.equal("CCCC");
      expect(uppercaseThis("d1D2d3")).to.equal("D1D2D3");
    });
  });

  describe("#: arrayToString", () => {
    const array = ["cat", "dog", "moo"];
    describe("returns the correct string", () => {
      it("when the separator is an empty string ('')", () => {
        expect(arrayToString(array, "")).to.equal("catdogmoo");
      });

      it("when the separator is a single space (' ')", () => {
        expect(arrayToString(array, " ")).to.equal("cat dog moo");
      });

      it("when the separator is any other character sequence", () => {
        expect(arrayToString(array, "+-%")).to.equal("cat+-%dog+-%moo");
      });
    });
  });

  describe("#: doesItAddUp", () => {
    it("returns true -> first two inputs equal the third", () => {
      expect(doesItAddUp(1, 2, 3)).to.be.true;
      expect(doesItAddUp(2, 1, 3)).to.be.true;
      expect(doesItAddUp(4, 4, 8)).to.be.true;
      expect(doesItAddUp(10, 20, 30)).to.be.true;
    });

    it("returns false -> first two inputs don't equal the third", () => {
      expect(doesItAddUp(1, 5, 3)).to.be.false;
      expect(doesItAddUp(22, 64, 33)).to.be.false;
      expect(doesItAddUp(1, 1, 1)).to.be.false;
      expect(doesItAddUp(1, 9, 2)).to.be.false;
    });
  });

  describe("#: smallTogetherNow", () => {
    describe("returns a unified, lowercase string", () => {
      it("when two uppercase input strings are passed in", () => {
        expect(smallTogetherNow("HELLO", "WORLD")).to.equal("helloworld");
      });

      it("when two lowercase input strings are passed in", () => {
        expect(smallTogetherNow("hello", "world")).to.equal("helloworld");
      });

      it("when input strings of mixed cases are passed in", () => {
        expect(smallTogetherNow("HeLLo", "WorLD")).to.equal("helloworld");
      });
    });
  });

  describe("#: Dog owners and their dogs", () => {
    describe("returns the correct phrase", () => {
      it("when dog is older than their owner", () => {
        expect(dogAndOwnerInfo("Turbo", 10, "Richard", 55)).to.equal(
          "Turbo is older than their owner, Richard, by 15 years."
        );
      });

      it("when owner is older than their dog", () => {
        expect(dogAndOwnerInfo("Fido", 1, "Michael", 15)).to.equal(
          "Michael is older than their dog, Fido, by 8 years."
        );
      });

      it("owner and dog are the same age", () => {
        expect(dogAndOwnerInfo("Star", 2, "John", 14)).to.equal(
          "John and Star are both 14 years old."
        );
      });
    });
  });

  describe("#: doesTheMathWork", () => {
    describe("returns the correct operation", () => {
      it("when ", () => {});
      it("", () => {});
    });
  });
});
