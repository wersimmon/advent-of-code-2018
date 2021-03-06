const fs = require("fs");
let polymer = fs.readFileSync("input/day-05", {encoding: "utf8"});
process.stdout.write(`Got a polymer ${polymer.length} units long\n`);

const types = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let typedPolymerLengths = {};
types.forEach(function(type) {
	let typedPolymer = polymer;
	
	process.stdout.write(`TypedPolymer ${type}`);
	typedPolymer = typedPolymer.replace(new RegExp(type, "gi"), "");
	process.stdout.write(` pre-reacted to ${typedPolymer.length}`);
	
	let spliced = false;
	while(true) {
		spliced = false;
		for(let i = 0; i < typedPolymer.length; i++) {
			let thisUnit = typedPolymer[i];
			let nextUnit = typedPolymer[i + 1];
			if(
				thisUnit == thisUnit.toUpperCase() && nextUnit == thisUnit.toLowerCase() ||
				thisUnit == thisUnit.toLowerCase() && nextUnit == thisUnit.toUpperCase()
			) {
				typedPolymer = typedPolymer.substring(0, i) + typedPolymer.substring(i + 2);
				spliced = true;
				break;
			}
		}
		
		if(spliced == true) {
			continue;
		} else {
			break;
		}
	}
	process.stdout.write(` and reacted to ${typedPolymer.length}.\n`);
	
	typedPolymerLengths[type] = typedPolymer.length - 1;
});

process.stdout.write(`The shortest typedPolymer wass ${Object.values(typedPolymerLengths).sort()[0]}`)