const isWorkingDay = (day: number) => day >= 1 && day <= 5;

/** @member hour @member minute @member second */
export type Time = [number, number, number];

export const stintStart: Time = [9, 0, 0];
export const stintEnd: Time = [16, 59, 59];

/**
 * Returns `true` if the provided `Date` falls within Monday to Friday 9:00am to
 * 4:59pm.
 */
export const isOfficeHours = (date: Date): boolean =>
  isWorkingDay(date.getDay()) &&
  date.getHours() >= stintStart[0] &&
  date.getHours() <= stintEnd[0];
