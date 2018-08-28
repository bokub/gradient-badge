const badgen = require('badgen');
const colorPresets = require('badgen/lib/color-presets.js');

const addGradient = (str, grad) => {
	let svgGradient = '  <linearGradient id="x" x1="0%" y1="0%" x2="100%" y2="0%">';
	for (let i = 0; i < grad.length; i++) {
		const offset = Math.round((100 * i) / (grad.length - 1));
		const color = colorPresets[grad[i]] || grad[i];
		svgGradient += `\n    <stop offset="${offset}%" style="stop-color:#${color}" />`;
	}
	svgGradient += `\n  </linearGradient>\n</svg>`;

	const index = str.length - 6;

	return str[index] === '<' ?
		str.substr(0, index) + svgGradient : // Most efficient way
		str.replace('</svg>', svgGradient); // Fallback in case of breaking changes
};

module.exports = function (options) {
	if (!Array.isArray(options.gradient)) {
		return badgen(options);
	}
	options.color = 'url(#x)';
	const svg = badgen(options).replace('#url', 'url');
	return addGradient(svg, options.gradient);
};

