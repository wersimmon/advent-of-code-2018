const fs = require("fs-extra");

// Establish the grid, and make it really big
// because the instructsions say "at least 1000"
let grid = [];
for(let y = 0; y < 2000; y++) {
  for(let x = 0; x < 2000; x++) {
    grid[y] = grid[y] || [];
    grid[y][x] = 0;
  }
}

// For each claim, increase the "value" of its squares by 1
let data = fs.readFileSync("input/day-03.txt", "utf8");
data.split("\n").forEach(function(line) {
  let match = line.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);
  
  let cx = Number.parseInt(match[2]);
  let cy = Number.parseInt(match[3]);
  let cw = Number.parseInt(match[4]);
  let ch = Number.parseInt(match[5]);
  
  for(let y = cy; y < cy + ch; y++) {
    for(let x = cx; x < cx + cw; x++) {
      grid[y][x] += 1;
    }
  }
});

// Now count the number of squares that are above 1
let count = 0;
for(let y = 0; y < 2000; y++) {
  for(let x = 0; x < 2000; x++) {
    if(grid[y][x] > 1) count++;
  }
}

console.log(`I found ${count} squares with at least one overlap`);