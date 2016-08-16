"use strict"

var uniqueNames = {}

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

class Robot {
  constructor() {
    this.name = this.generateName()
  }

  randomLetters() {
    let letters = ""
    for (var i = 0; i < 2; i++) {
      letters += allLetters[Math.floor(Math.random() * 26)]
    }
    return letters
  }

  randomNumbers() {
    let numbers = ""
    for (var i = 0; i < 3; i++) {
      numbers += [0,1,2,3,4,5,6,7,8,9][Math.floor(Math.random() * 10)].toString()
    }
    return numbers
  }

  generateName() {
    let name = this.randomLetters() + this.randomNumbers()
    if (this.includesName(name)) {
      return this.generateName()
    } else {
      uniqueNames[name] = true
      return name
    }
  }

  includesName(name) {
    if (uniqueNames[name]) {
      return true
    } else {
      return false
    }
  }
}

module.exports = Robot
