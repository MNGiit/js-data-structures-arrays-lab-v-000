// Write your solution here!





drivers
is assigned an initial value of ["Milo", "Otis", "Garfield"] ‣
ReferenceError: drivers is not defined
    at Context.<anonymous> (test/indexTest.js:6:14)expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
is declared with const ‣
AssertionError: expected [Function] to throw TypeError
    at Context.<anonymous> (test/indexTest.js:10:53)expect(function () { drivers = []; }).to.throw(TypeError);
Array functions
destructivelyAppendDriver(name)
appends a driver to the end of the drivers array ‣
ReferenceError: destructivelyAppendDriver is not defined
    at Context.<anonymous> (test/indexTest.js:23:9)destructivelyAppendDriver('Ralph');
expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
destructivelyPrependDriver(name)
prepends a driver to the beginning of the drivers array ‣
ReferenceError: destructivelyPrependDriver is not defined
    at Context.<anonymous> (test/indexTest.js:31:9)destructivelyPrependDriver("Bob");
expect(drivers).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
destructivelyRemoveLastDriver()
removes the last driver from the drivers array ‣
ReferenceError: destructivelyRemoveLastDriver is not defined
    at Context.<anonymous> (test/indexTest.js:39:9)destructivelyRemoveLastDriver();
expect(drivers).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
destructivelyRemoveFirstDriver()
removes the First driver from the drivers array ‣
ReferenceError: destructivelyRemoveFirstDriver is not defined
    at Context.<anonymous> (test/indexTest.js:47:9)destructivelyRemoveFirstDriver();
expect(drivers).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
appendDriver(name)
appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged ‣
ReferenceError: appendDriver is not defined
    at Context.<anonymous> (test/indexTest.js:55:9)expect(appendDriver("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
prependDriver(name)
prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged ‣
ReferenceError: prependDriver is not defined
    at Context.<anonymous> (test/indexTest.js:63:9)expect(prependDriver("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
removeLastDriver()
removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged ‣
ReferenceError: removeLastDriver is not defined
    at Context.<anonymous> (test/indexTest.js:71:9)expect(removeLastDriver()).to.have.ordered.members(["Milo", "Otis"]);
expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
removeFirstDriver()
removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged ‣
ReferenceError: removeFirstDriver is not defined
    at Context.<anonymous> (test/indexTest.js:79:9)expect(removeFirstDriver()).to.have.ordered.members(["Otis", "Garfield"]);
expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);