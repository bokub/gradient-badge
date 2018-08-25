/**
 * Run the following to update examples folder:
 * npm run example
 */

const badges = require('..');
const fs = require('fs');

const examples = [
	['version', {subject: 'npm', status: '1.0.0', gradient: ['11998e', '38ef7d']}],
	['xo', {subject: 'style', status: 'XO', gradient: ['ff94c8', 'cacfda', '61eddb']}],

	['usage', {subject: 'version', status: 'v1.2.3', style: 'flat', gradient: ['pink', 'F78642']}],

	['stars', {subject: 'stars', status: '★★★★☆', gradient: ['00a65e', 'abf269']}],
	['standard', {subject: 'code style', status: 'standard', style: 'flat', gradient: ['ff22aa', 'bf00ff']}],
	['patreon', {subject: 'become', status: 'a patron', gradient: ['f96854', 'f9be75']}],
	['instagram', {subject: 'follow me', status: 'instagram', gradient: ['833ab4', 'fd1d1d', 'fcb045']}],
	['vue', {subject: 'build with', status: 'Vue.js', style: 'flat', gradient: ['42b883', '35495e']}],
	['rainbow', {subject: 'rainbow', status: 'compatible', gradient: ['00a3e2', '1ba548', 'fdc800', 'f1860e', 'e41b13']}]
];

for (const e of examples) {
	fs.writeFile(`./examples/${e[0]}.svg`, badges(e[1]), err => console.log(err ? err : `✓ ${e[0]}.svg`));
}
