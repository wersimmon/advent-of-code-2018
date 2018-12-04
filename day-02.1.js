const fs = require("fs-extra");

fs.readFile("input/day-02.txt", "utf8").then(function(data) {
  let twices = 0;
  let thrices = 0;
  
  data.split("\n").forEach(function(line) {
    let map = line.split("").reduce(function(map, char) {
      map[char] = (map[char] || 0) + 1;
      return map;
    }, {});
    
    if(Object.values(map).includes(2)) twices += 1;
    if(Object.values(map).includes(3)) thrices += 1;
  });
  
  console.log(`I found ${twices} twices and ${thrices} thrices, for a checksum of ${twices * thrices}`);
});