# is-office-hours

> Determine whether a given date is within office hours

[![NPM version](http://img.shields.io/npm/v/is-office-hours.svg?style=flat-square)](https://www.npmjs.com/package/is-office-hours)
[![NPM downloads](http://img.shields.io/npm/dm/is-office-hours.svg?style=flat-square)](https://www.npmjs.com/package/is-office-hours)
[![Build Status](http://img.shields.io/travis/JamieMason/is-office-hours/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/is-office-hours)
[![Maintainability](https://api.codeclimate.com/v1/badges/bced12a42a2c6d08219c/maintainability)](https://codeclimate.com/github/JamieMason/is-office-hours/maintainability)
[![Follow JamieMason on GitHub](https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow)](https://github.com/JamieMason)
[![Follow fold_left on Twitter](https://img.shields.io/twitter/follow/fold_left.svg?style=social&label=Follow)](https://twitter.com/fold_left)

## 🌩 Installation

```
npm install --save is-office-hours
```

## 🕹 Usage

### isOfficeHours

Returns `true` if the provided `Date` falls within Monday to Friday 9:00am to
4:59pm.

```js
import { isOfficeHours } from 'is-office-hours';

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

### outsideOfficeHours

If the provided date falls within Office Hours, a new date is returned with the
time adjusted to fall outside Office Hours. If the provided date falls outside
Office Hours, it is returned unchanged.

The provided date is never mutated.

```js
import { outsideOfficeHours } from 'is-office-hours';

outsideOfficeHours(new Date('2019-03-04T09:00:00.000Z'));
// Date(2019-03-04T18:00:00.000Z)
outsideOfficeHours(new Date('2019-03-04T10:00:00.000Z'));
// Date(2019-03-04T18:37:29.000Z)
outsideOfficeHours(new Date('2019-03-04T11:00:00.000Z'));
// Date(2019-03-04T19:14:59.000Z)
outsideOfficeHours(new Date('2019-03-04T12:00:00.000Z'));
// Date(2019-03-04T19:52:29.000Z)
outsideOfficeHours(new Date('2019-03-04T13:00:00.000Z'));
// Date(2019-03-04T20:29:59.000Z)
outsideOfficeHours(new Date('2019-03-04T14:00:00.000Z'));
// Date(2019-03-04T21:07:29.000Z)
outsideOfficeHours(new Date('2019-03-04T15:00:00.000Z'));
// Date(2019-03-04T21:44:59.000Z)
outsideOfficeHours(new Date('2019-03-04T16:00:00.000Z'));
// Date(2019-03-04T22:22:29.000Z)
```

## 🙋🏾‍♀️ Getting Help

- Get help with issues by creating a
  [Bug Report](https://github.com/JamieMason/is-office-hours/issues/new?template=bug_report.md).
- Discuss ideas by opening a
  [Feature Request](https://github.com/JamieMason/is-office-hours/issues/new?template=feature_request.md).
