/**
 * Run the following to update examples folder:
 * npm run demo
 */

const badges = require('..');
const fs = require('fs');

const examples = [
	['xo', {subject: 'style', status: 'XO', gradient: ['7ee8d8', 'cacfda', 'ffa4cd']}],
	['usage', {subject: 'version', status: 'v1.2.3', style: 'flat', gradient: ['pink', 'F78642']}],
	['version', {subject: 'npm', status: 'v0.1.2', gradient: ['11998e', '38ef7d']}],
	['standard', {subject: 'code style', status: 'standard', gradient: ['f953c6', 'fc807d']}],
];
for (const e of examples) {
	fs.writeFile(`./examples/${e[0]}.svg`, badges(e[1]), err => console.log(err ? err : `✓ ${e[0]}.svg`));
}

