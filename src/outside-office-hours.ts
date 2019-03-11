import { isOfficeHours, stintEnd, stintStart, Time } from './is-office-hours';

const getPercentOfPart = (part: number, whole: number) => (part / whole) * 100;

const getPartFromPercent = (percent: number, whole: number) =>
  whole * (percent / 100);

const getMsSinceMidnight = ([hours, minutes, seconds]: Time) => {
  const date = new Date(0);
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  return date.getTime();
};

const getTimeFromDate = (date: Date): Time => [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds()
];

const getDateWithTime = (date: Date, [hours, minutes, seconds]: Time) => {
  const nextDate = new Date(date.getTime());
  nextDate.setHours(hours);
  nextDate.setMinutes(minutes);
  nextDate.setSeconds(seconds);
  return nextDate;
};

const getMsBetween = (start: Time, end: Time) =>
  getMsSinceMidnight(end) - getMsSinceMidnight(start);

const eveningStart: Time = [18, 0, 0];
const eveningEnd: Time = [22, 59, 59];
const eveningLength = getMsBetween(eveningStart, eveningEnd);
const stintLength = getMsBetween(stintStart, stintEnd);
const eveningStartMs = getMsSinceMidnight(eveningStart);
const stintStartMs = getMsSinceMidnight(stintStart);

/**
 * If the provided `Date` falls within Office Hours, a new `Date` is returned
 * with the time adjusted to fall outside Office Hours. If the provided `Date`
 * falls outside Office Hours, it is returned unchanged.
 *
 * The provided `Date` is never mutated.
 */
export const outsideOfficeHours = (date: Date): Date => {
  if (isOfficeHours(date)) {
    const eventTime = getTimeFromDate(date);
    const eventStartMs = getMsSinceMidnight(eventTime);
    const eventDistance = eventStartMs - stintStartMs;
    if (eventDistance === 0) {
      return getDateWithTime(date, eveningStart);
    }
    const eventPercent = getPercentOfPart(eventDistance, stintLength);
    const eveningDistance = getPartFromPercent(eventPercent, eveningLength);
    const nextDate = new Date(eveningDistance + eveningStartMs);
    return getDateWithTime(date, getTimeFromDate(nextDate));
  }
  return date;
};
