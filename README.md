# gradient-badges

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

Result: ![Result](https://cdn.rawgit.com/bokub/gradient-badges/master/examples/version.svg)

## Dependencies

- [badgen](https://github.com/amio/badgen) - Fast handcraft svg badge generator.