// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  const newDrivers = drivers.push("Ralph")

}

function destructivelyPrependDriver(name) {
  const newDrivers = drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
  const newDrivers = drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  const newDrivers = drivers.shift();
}

function appendDriver(name) {
  
}

function prependDriver(name) {
  const newDrivers = drivers.slice(-2);
}

function removeLastDriver() {
  const newDrivers = drivers.slice(0)
}

function removeFirstDriver() {
  const newDrivers = drivers.slice(-2);
}
