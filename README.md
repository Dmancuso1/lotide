# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@dmancuso/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * `head` : Finds the first value in an array. (includes testing with mocha)
  * `tail` : Finds the last value in an array. (includes testing with mocha)
  * `middle` : finds the middle element of an array with an odd length and both middles with an even array. (includes testing with mocha)
  * `assertArraysEqual` : Asserts that two arrays are the same. (includes testing with mocha)
  * `assertEqual` : Checks that two values are the same. (includes testing with mocha)
  * `eqArrays` : Checks that two arrays are the same. (includes testing with mocha)
  * `flatten` : Returns a two-dimensional array and outputs it into one. (includes testing with mocha)
  * `countOnly` : Returns how many times a name is in an array. (includes testing with mocha)
  * `eqArrays` : checks that two arrays are the same. (includes testing with mocha)
  * `eqObjects` : chackes that two objects are the same.
  * `findKey` : finds the key of an Object.
  * `findKeyByValue` : Finds the key of an object by a given value.
  * `letterPositions` : counts how many times each letter appears in a word.
  * `countLetter` : Counters letters in an array.
  * `map` : returns the first letter of each word in a sentence. 
  * `assertObjectsEqual` : Asserts that two objects are the same
