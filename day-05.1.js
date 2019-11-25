const fs = require("fs");
let polymer = fs.readFileSync("input/day-05", {encoding: "utf8"});
process.stdout.write(`Got a polymer ${polymer.length} units long\n`);

let spliced = false;
while(true) {
	spliced = false;
	for(let i = 0; i < polymer.length; i++) {
		let thisUnit = polymer[i];
		let nextUnit = polymer[i + 1];
		if(
			thisUnit == thisUnit.toUpperCase() && nextUnit == thisUnit.toLowerCase() ||
			thisUnit == thisUnit.toLowerCase() && nextUnit == thisUnit.toUpperCase()
		) {
			process.stdout.write(`Splicing ${i}:${thisUnit}${nextUnit}`);
			polymer = polymer.substring(0, i) + polymer.substring(i + 2);
			spliced = true;
			break;
		}
	}
	
	if(spliced == true) {
		process.stdout.write(", continuing...\n");
		continue;
	} else {
		process.stdout.write("Didn't find any matching units...\n");
		break;
	}
}

process.stdout.write(`\n\nFinal polymer is ${polymer.length} units long\n`);