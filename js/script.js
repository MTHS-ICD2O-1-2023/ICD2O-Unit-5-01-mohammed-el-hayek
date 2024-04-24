// Copyright (c) 2024 Mohammed All rights reserved
//
// Created by: Mohammed
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function uses a selection component from https://github.com/CreativeIT/getmdl-select
 */

var randomNumber = 0


function randomnumbergenerator() {
  randomNumber = Math.floor(Math.random() * 6) + 1
}


function myButtonClicked() {
  // input
  const numberGuessed = parseInt(
    document.getElementById("guessed-number").value
  )


  // process
  if (numberGuessed == randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was, " + randomNumber + "!" + "you go it! Good job."
  }


  //block of code to be execued if condition is true
  if (numberGuessed !== randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was, " + randomNumber + "!" + " Nice guess, but try again"
  }
}
