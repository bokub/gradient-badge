# gradient-badges

[![npm][version]](https://www.npmjs.com/package/gradient-badges)
[![XO code style][xo]](https://github.com/sindresorhus/xo)

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

[version]: https://runkit.io/bokub/badge/branches/master/npm/1.0.1/11998e-38ef7d
[xo]: https://runkit.io/bokub/badge/branches/master/style/XO/ff94c8-cacfda-61eddb

[usage]: https://runkit.io/bokub/badge/branches/master/version/v1.2.3/pink-F78642?style=flat

[demo]: https://git.io/gradient-badges

[stars]: https://runkit.io/bokub/badge/branches/master/stars/★★★★☆/00a65e-abf269
[standard]: https://runkit.io/bokub/badge/branches/master/code%20style/standard/ff22aa-bf00ff?style=flat
[patreon]: https://runkit.io/bokub/badge/branches/master/become/a%20patron/f96854-f9be75
[instagram]: https://runkit.io/bokub/badge/branches/master/follow%20me/instagram/833ab4-fd1d1d-fcb045'
[vue]: https://runkit.io/bokub/badge/branches/master/built%20with/Vue.js/42b883-35495e?style=flat
[rainbow]: https://runkit.io/bokub/badge/branches/master/rainbow/compatible/00a3e2-1ba548-fdc800-f1860e-e41b13