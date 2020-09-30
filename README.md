# short-number [![Build Status](https://travis-ci.org/Pogix3m/short-number.svg?branch=master)](https://travis-ci.org/Pogix3m/short-number) [![GitHub license](https://img.shields.io/github/license/Pogix3m/short-number)](https://github.com/Pogix3m/short-number/blob/master/LICENSE) ![GitHub package.json version](https://img.shields.io/github/package-json/v/Pogix3m/short-number)

Convert long number to short number for readability.
By default up to Unvigintillion(10^66)

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

// provide the suffix
const suffix = [
    "Thousand",
    "Million",
    "Billion",
    "Trillion",
    "Quadrillion"
];

shortNumber(28728, suffix);
// => 28.72Thousand

shortNumber(756159852, suffix);
// => 756.15Million
```
