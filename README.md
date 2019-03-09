# is-office-hours

> Determine whether a given date is within office hours

[![NPM version](http://img.shields.io/npm/v/is-office-hours.svg?style=flat-square)](https://www.npmjs.com/package/is-office-hours)
[![NPM downloads](http://img.shields.io/npm/dm/is-office-hours.svg?style=flat-square)](https://www.npmjs.com/package/is-office-hours)
[![Build Status](http://img.shields.io/travis/JamieMason/is-office-hours/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/is-office-hours)
[![Maintainability](https://api.codeclimate.com/v1/badges/bced12a42a2c6d08219c/maintainability)](https://codeclimate.com/github/JamieMason/is-office-hours/maintainability)
[![Gitter Chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/JamieMason/is-office-hours)
[![Donate via PayPal](https://img.shields.io/badge/donate-paypal-blue.svg)](https://www.paypal.me/foldleft)
[![Backers](https://opencollective.com/fold_left/backers/badge.svg)](https://opencollective.com/fold_left#backer)
[![Sponsors](https://opencollective.com/fold_left/sponsors/badge.svg)](https://opencollective.com/fold_left#sponsors)
[![Analytics](https://ga-beacon.appspot.com/UA-45466560-5/is-office-hours?flat&useReferer)](https://github.com/igrigorik/ga-beacon)
[![Follow JamieMason on GitHub](https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow)](https://github.com/JamieMason)
[![Follow fold_left on Twitter](https://img.shields.io/twitter/follow/fold_left.svg?style=social&label=Follow)](https://twitter.com/fold_left)

## :cloud: Installation

```
npm install --save is-office-hours
```

## :memo: Usage

Always `false` on Saturday and Sunday, `true` from 9:00am until 4:59pm weekdays.
Does not take into account public holidays.

```js
isOfficeHours(new Date('2019-03-04T08:59:59.000Z'));
// false
isOfficeHours(new Date('2019-03-04T09:00:00.000Z'));
// true
isOfficeHours(new Date('2019-03-04T09:01:00.000Z'));
// true
isOfficeHours(new Date('2019-03-04T16:59:59.000Z'));
// true
isOfficeHours(new Date('2019-03-04T17:00:00.000Z'));
// false
isOfficeHours(new Date('2019-03-04T17:01:00.000Z'));
// false
```
