"use strict"

var uniqueNames = {}

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const allNumbers = "0123456789"

class Robot {
  constructor() {
    this.name = this.generateName()
  }

  randomChars(count, characterPool) {
    let characters = ""
    for (var i = 0; i < count; i++) {
      characters += characterPool[Math.floor(Math.random() * characterPool.length)]
    }
    return characters
  }

  generateName() {
    let name = this.randomChars(2, allLetters) + this.randomChars(3, allNumbers)
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

  reset() {
    this.name = this.generateName()
  }
}

module.exports = Robot
