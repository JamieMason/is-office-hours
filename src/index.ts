const isWorkingDay = (date: Date) => date.getDay() >= 1 && date.getDay() <= 5;

export const isOfficeHours = (date: Date): boolean =>
  isWorkingDay(date) && date.getHours() >= 9 && date.getHours() < 17;
