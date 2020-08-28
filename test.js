const test = require('ava');
const isSvg = require('is-svg');
const { badgen } = require('badgen');
const colors = require('./colors');
const gradientBadge = require('.');
const { applyGradient } = require('.');
const fs = require('fs');

if (!fs.existsSync('test-results')) {
    fs.mkdirSync('test-results');
}

for (const style of ['classic', 'flat']) {
    const prefix = style === 'classic' ? '[classic] ' : '   [flat] ';
    const parameters = { subject: 'version', status: 'v1.2.3', style, gradient: ['pink', 'F78642'] };
    const original = badgen(parameters);
    const badge = gradientBadge(parameters);

    fs.writeFileSync('test-results/' + style + '.svg', badge);

    test(prefix + 'is svg', (t) => {
        t.true(isSvg(badge));
    });

    test(prefix + 'has the good colors', (t) => {
        t.true(badge.includes('F78642'));
        t.true(badge.includes(colors.pink));
    });

    test(prefix + 'uses the linear gradient', (t) => {
        t.true(badge.includes('url(#x)'));
        t.true(badge.includes('id="x"'));
    });

    test(prefix + 'original badge can be transformed', (t) => {
        t.is(applyGradient(original, parameters.gradient), badge);
    });

    test(prefix + 'one color gradient is interpreted as color parameter', (t) => {
        const regularBadge = gradientBadge({ subject: 'version', status: 'v1.2.3', style, gradient: ['608B86'] });
        t.is(regularBadge, badgen({ subject: 'version', status: 'v1.2.3', style, color: '608B86' }));
        t.is(
            regularBadge,
            applyGradient(badgen({ subject: 'version', status: 'v1.2.3', style, color: 'red' }), ['608B86'])
        );
    });

    test(prefix + 'returns original badgen if no gradient', (t) => {
        const params = { subject: 'version', status: 'v1.2.3' };
        t.is(gradientBadge(params), badgen(params));
        t.is(applyGradient(badgen(params)), badgen(params));
        params.color = 'green';
        t.is(gradientBadge(params), badgen(params));
        t.is(applyGradient(badgen(params)), badgen(params));
        params.gradient = 'ff0';
        t.is(gradientBadge(params), badgen(params));
        t.is(applyGradient(badgen(params)), badgen(params));
        params.gradient = [];
        t.is(gradientBadge(params), badgen(params));
        t.is(applyGradient(badgen(params)), badgen(params));
        params.gradient = ['ff0'];
        t.is(gradientBadge(params), badgen(params));
        t.is(applyGradient(badgen(params)), badgen(params));
    });
}
