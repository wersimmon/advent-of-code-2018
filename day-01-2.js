const fs = require("fs-extra");

fs.readFile("input/day-01.txt", "utf8").then(function(data) {
  let frequency = 0;
  let previousFrequencies = [];
  
  let lines = data.split("\n");
  let i = 0;
  while(previousFrequencies.includes(frequency) == false) {
    previousFrequencies.push(frequency);
    
    frequency += Number.parseInt(lines[i]);
    
    i = (i + 1) % lines.length;
  }
  
  console.log(`First frequency hit twice: ${frequency}Hz`);
});