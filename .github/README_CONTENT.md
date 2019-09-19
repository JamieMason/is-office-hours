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
