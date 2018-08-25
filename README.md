# gradient-badges

[![npm][version]](https://www.npmjs.com/package/gradient-badges)
[![XO code style][xo]](https://github.com/sindresorhus/xo)

> Badge generator with gradient support

Check out the [demo][demo] 🍭

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

Here are a few examples of what you can do. Check out the [demo][demo] to make your own

![Stars][stars]

![Standard][standard]

![Patreon][patreon]

![Instagram][instagram]

![Vue.js][vue]

![Rainbow][rainbow]


## Dependencies

- [badgen](https://github.com/amio/badgen) - Fast handcraft svg badge generator.

[version]: https://bokub.github.io/gradient-badges/examples/version.svg
[xo]: https://bokub.github.io/gradient-badges/examples/xo.svg

[usage]: https://bokub.github.io/gradient-badges/examples/usage.svg

[demo]: https://git.io/gradient-badges

[stars]: https://bokub.github.io/gradient-badges/examples/stars.svg
[standard]: https://bokub.github.io/gradient-badges/examples/standard.svg
[patreon]: https://bokub.github.io/gradient-badges/examples/patreon.svg
[instagram]: https://bokub.github.io/gradient-badges/examples/instagram.svg
[vue]: https://bokub.github.io/gradient-badges/examples/vue.svg
[rainbow]: https://bokub.github.io/gradient-badges/examples/rainbow.svg
