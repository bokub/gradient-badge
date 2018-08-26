const badges = require('gradient-badges');
const queryString = require('query-string');

module.exports = function (request, response) {
    const params = request.url.substring(1).split('?')[0].split('/');
    const query = request.url.split('?')[1] ? queryString.parse(request.url.split('?')[1]) : {};
    const svgStr = badges(Object.assign({
        subject: decodeURI(params[0] || ''),
        status: decodeURI(params[1] || ''),
        gradient: params[2] ? params[2].split('-') : undefined,
    }, query));

    response.setHeader('Content-Type', 'image/svg+xml');
    response.setHeader('Cache-Control', 'public, max-age=86400'); // one day
    response.end(svgStr);
};
