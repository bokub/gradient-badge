# gradient-badges

[![npm][version]](https://www.npmjs.com/package/gradient-badges)
[![Demo][demo-src]][demo]
[![XO code style][xo]](https://github.com/sindresorhus/xo)
[![License][license]](https://github.com/bokub/gradient-badges/blob/master/LICENSE)

> 🍭 Badge generator with gradient support

#### Check out the [demo][demo] to make your own badge

## Install

```
$ npm i gradient-badges
```

## Usage

**gradient-badges** works exactly like [badgen](https://github.com/amio/badgen), with the **`gradient`** parameter in addition.

```javascript
const badges = require('gradient-badges')

const svgString = badges({
  subject: 'version',   // <text>
  status: 'v1.2.3', // <text>
  style: 'flat',    // 'flat' or undefined, optional
  gradient: ['pink', 'F78642'] // array of colors (Hexadecimal or name)
})
```

Result: ![Result][usage]

## Examples

Here are a few examples of what you can do. 

#### Check out the [demo][demo] to make your own

![Stars][stars]

![Standard][standard]

![Patreon][patreon]

![Instagram][instagram]

![Vue.js][vue]

![Rainbow][rainbow]


## Dependencies

- [badgen](https://github.com/amio/badgen) - Fast handcraft svg badge generator.

[version]: https://runkit.io/bokub/gb-v/branches/master
[demo-src]: https://gradient-badges.now.sh/demo/available/11998e-38ef7d
[xo]: https://gradient-badges.now.sh/style/XO/ff94c8-cacfda-61eddb
[license]: https://gradient-badges.now.sh/license/MIT/ff426b-ffbc36

[usage]: https://gradient-badges.now.sh/version/v1.2.3/pink-F78642?style=flat

[demo]: https://git.io/gradient-badges

[stars]: https://gradient-badges.now.sh/stars/★★★★☆/00a65e-abf269
[standard]: https://gradient-badges.now.sh/code%20style/standard/ff22aa-bf00ff?style=flat
[patreon]: https://gradient-badges.now.sh/become/a%20patron/f96854-f9be75
[instagram]: https://gradient-badges.now.sh/follow%20me/instagram/833ab4-fd1d1d-fcb045
[vue]: https://gradient-badges.now.sh/built%20with/Vue.js/42b883-35495e?style=flat
[rainbow]: https://gradient-badges.now.sh/rainbow/compatible/00a3e2-1ba548-fdc800-f1860e-e41b13