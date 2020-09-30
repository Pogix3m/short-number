# short-number
Convert long number to short number for readability

## Installation

```sh
$ npm install --save @pogix3m/short-number
```

## Usage

```js
var shortNumber = require('@pogix3m/short-number');

shortNumber(1000);
// => 1K

shortNumber(756_159_852);
// => 756.15M

shortNumber(-6248645.13);
// => -6.24M

shortNumber("6248645.13");
// => 6.24M

```
