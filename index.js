// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppenDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}
