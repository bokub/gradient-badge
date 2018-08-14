# gradient-badges

[![npm][version]](https://www.npmjs.com/package/gradient-badges)
[![XO code style][xo]](https://github.com/sindresorhus/xo)

> Badge generator with gradient support

## Install

```
$ npm i gradient-badges
```

## Usage

**gradient-badges** works exactly like [badgen](https://github.com/amio/badgen), with the **`gradient`** parameter in addition.

```javascript
const badges = require('gradient-badges')

const svgString = badges({
  subject: 'version',   // <Text>
  status: 'v1.2.3', // <Text>
  style: 'flat',    // 'flat' or undefined, optional
  gradient: ['pink', 'F78642'] // Array of colors (Hexadecimal or name)
})
```

Result: ![Result][version-example]

## Dependencies

- [badgen](https://github.com/amio/badgen) - Fast handcraft svg badge generator.

[version]: https://rawgit.com/bokub/gradient-badges/master/examples/version.svg
[xo]: https://rawgit.com/bokub/gradient-badges/master/examples/xo.svg
[version-example]: https://rawgit.com/bokub/gradient-badges/master/examples/version-example.svg