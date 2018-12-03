const fs = require("fs-extra");

fs.readFile("input/day-01.txt", "utf8").then(function(data) {
  let frequency = 0;
  data.split("\n").forEach(function(line) {
    let change = Number.parseInt(line);
    frequency += change;
  });
  
  console.log(`Final frequency: ${frequency}Hz`);
});