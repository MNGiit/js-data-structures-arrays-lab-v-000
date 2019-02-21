// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  
}

appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged ‣
ReferenceError: appendDriver is not defined
    at Context.<anonymous> (test/indexTest.js:55:9)expect(appendDriver("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
