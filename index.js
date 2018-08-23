const badgen = require('badgen');
const colorPresets = require('badgen/lib/color-presets.js');

const addGradient = (str, grad) => {
	let replacement = '  <linearGradient id="x" x1="0%" y1="0%" x2="100%" y2="0%">';
	for (let i = 0; i < grad.length; i++) {
		const offset = Math.round((100 * i) / (grad.length - 1));
		const color = colorPresets[grad[i]] || grad[i];
		replacement += `\n          <stop offset="${offset}%" style="stop-color:#${color}" />`;
	}
	replacement += `\n        </linearGradient>\n      </svg>`;
	return str.replace('</svg>', replacement);
};

module.exports = function (options) {
	if (!Array.isArray(options.gradient)) {
		return badgen(options);
	}
	options.color = 'url(#x)';
	const svg = badgen(options).replace('#url', 'url');
	return addGradient(svg, options.gradient);
};

