const fs = require("fs-extra");

fs.readFile("input/day-02.txt", "utf8").then(function(data) {
  let lines = data.split("\n");
  lines.forEach(function(line, i) {
    let otherLines = lines;
    otherLines.splice(i, 1);
    
  });
});