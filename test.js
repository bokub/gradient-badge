import test from 'ava';
import isSvg from 'is-svg';
import colorPresets from 'badgen/lib/color-presets';
import badgen from 'badgen';
import b from '.';

for (const style of ['classic', 'flat']) {
	const prefix = style === 'classic' ? '[classic] ' : '   [flat] ';
	const params = {subject: 'version', status: 'v1.2.3', style, gradient: ['pink', 'F78642']};
	const original = badgen(params);
	const badge = b(params);

	test(prefix + 'is svg', t => {
		t.true(isSvg(badge));
	});

	test(prefix + 'has the good colors', t => {
		t.true(badge.indexOf('F78642') > -1);
		t.true(badge.indexOf(colorPresets.pink) > -1);
	});

	test(prefix + 'uses the linear gradient', t => {
		t.true(badge.indexOf('url(#x)') > -1);
		t.true(badge.indexOf('id="x"') > -1);
	});

	test(prefix + 'badgen has no breaking changes', t => {
		t.is(original.indexOf('</svg>'), original.length - 6);
	});
}

test('returns original badgen if no gradient', t => {
	const params = {subject: 'version', status: 'v1.2.3'};
	t.is(b(params), badgen(params));
	params.color = 'green';
	t.is(b(params), badgen(params));
	params.gradient = 'ff0';
	t.is(b(params), badgen(params));
});
