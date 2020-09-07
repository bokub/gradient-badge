# gradient-badge

[![npm][version]](https://www.npmjs.com/package/gradient-badge)
[![Build][build]](https://travis-ci.org/bokub/gradient-badge)
[![Coverage][coverage]](https://codecov.io/gh/bokub/gradient-badge)
[![Demo][demo-src]][demo]
[![code style][prettier]](https://github.com/prettier/prettier)

> Badge generator with gradient support 🍭

#### Check out the [demo][demo] to make your own badge

## Install

```
$ npm i gradient-badge
```

## Usage

**gradient-badge** works exactly like [badgen](https://github.com/badgen/badgen), with the **`gradient`** parameter in addition.

**Node.js**

```javascript
const gradientBadge = require('gradient-badge');

const svgString = gradientBadge({
    subject: 'version', // <text>
    status: 'v1.2.3', // <text>
    style: 'flat', // 'flat' or undefined, optional
    // And any other parameter supported by badgen (icon, scale...)
    gradient: ['pink', 'F78642'], // array of colors (Hexadecimal or name)
});
```

**Browser**

```html
<script src="https://cdn.jsdelivr.net/npm/gradient-badge"></script>
<script>
    var svgString = gradientBadge({
        /* same as above */
    });
</script>
```

Result: ![Result][usage]

### Adding a gradient to a badge

You can apply a color gradient to any badge already generated with badgen:

```javascript
const { badgen } = require('badgen');
const { applyGradient } = require('gradient-badge');

const originalBadge = badgen({
    /* ... */
});
const svgString = applyGradient(originalBadge, ['B65CFF', 'cyan']);
```

## Examples

Here are a few more examples of what you can do.

#### Check out the [demo][demo] to make your own

![Stars][stars] ![Standard][standard] ![Patreon][patreon] ![Instagram][instagram] ![Vue.js][vue] ![Rainbow][rainbow]

## Dependencies

-   [badgen](https://github.com/badgen/badgen) - Fast handcraft svg badge generator.

## See also

-   [badge-action](https://github.com/emibcn/badge-action) - Create a badge using GitHub Actions.

[version]: https://runkit.io/bokub/npm-version/branches/master/gradient-badge
[demo-src]: https://runkit.io/bokub/badge/branches/master/demo/available/ffb836-fc6d60
[prettier]: https://runkit.io/bokub/badge/branches/master/code%20style/prettier/ff94c8-cacfda-61eddb
[build]: https://runkit.io/bokub/build/branches/master/bokub/gradient-badge
[coverage]: https://runkit.io/bokub/codecov/branches/master/bokub/gradient-badge
[usage]: https://runkit.io/bokub/badge/branches/master/version/v1.2.3/pink-F78642?style=flat
[demo]: https://git.io/gradientbadge
[stars]: https://runkit.io/bokub/badge/branches/master/stars/★★★★☆/00a65e-abf269
[standard]: https://runkit.io/bokub/badge/branches/master/code%20style/standard/ff22aa-bf00ff?style=flat
[patreon]: https://runkit.io/bokub/badge/branches/master/become/a%20patron/f96854-f9be75
[instagram]: https://runkit.io/bokub/badge/branches/master/follow%20me/instagram/833ab4-fd1d1d-fcb045
[vue]: https://runkit.io/bokub/badge/branches/master/built%20with/Vue.js/42b883-35495e?style=flat
[rainbow]: https://runkit.io/bokub/badge/branches/master/rainbow/compatible/ff4564-ffa82e-ffff00-21ed28-19ffa7-2edcff-5490ff-a787ff-ea8fff-ff5e84
