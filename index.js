const { badgen } = require('badgen');
const colors = require('./colors');

const addGradient = (svgString, gradient, id) => {
    let svgGradient = '  <linearGradient id="' + id + '" x1="0%" y1="0%" x2="100%" y2="0%">';
    for (let i = 0; i < gradient.length; i++) {
        const offset = Math.round((100 * i) / (gradient.length - 1));
        const color = colors[gradient[i]] || gradient[i];
        svgGradient += `\n    <stop offset="${offset}%" style="stop-color:#${color}" />`;
    }

    svgGradient += '\n  </linearGradient>\n</svg>';

    return svgString
        .replace('</svg>', svgGradient)
        .replace(/(<g.+\n\s+<rect.+\n\s+<rect.+fill=")([^"]+)(")/g, '$1url(#x)$3');
};

const useColor = (svgString, color) => {
    return svgString.replace(/(<g.+\n\s+<rect.+\n\s+<rect.+fill=")([^"]+)(")/g, `$1${color}$3`);
};

module.exports = (options) => {
    if (!Array.isArray(options.gradient) || options.gradient.length === 0) {
        return badgen(options);
    }

    if (options.gradient.length === 1) {
        options.color = options.gradient[0];
        return badgen(options);
    }
    return useColor(addGradient(badgen(options), options.gradient, 'x'), 'url(#x)');
};

module.exports.applyGradient = (svgString, gradient) => {
    if (!Array.isArray(gradient) || gradient.length === 0) {
        return svgString;
    }
    if (gradient.length === 1) {
        const color = colors[gradient[0]] || gradient[0];
        return useColor(svgString, '#' + color);
    }
    return useColor(addGradient(svgString, gradient, 'x'), 'url(#x)');
};
