/**
 * Run the following to update examples folder:
 * npm run demo
 */

const badges = require('..');
const fs = require('fs');

const examples = [
	['xo', {subject: 'style', status: 'XO', gradient: ['64D8C7', 'E271A5']}],
	['version', {subject: 'version', status: 'v1.2.3', style: 'flat', gradient: ['pink', 'F78642']}]
];
for (const e of examples) {
	fs.writeFile(`./examples/${e[0]}.svg`, badges(e[1]), err => console.log(err ? err : `✓ ${e[0]}.svg`));
}

