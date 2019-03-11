import 'expect-more-jest';
import { isOfficeHours } from '.';

const checkDate = (isoDate: string, isoTime: string) =>
  isOfficeHours(new Date(`${isoDate}T${isoTime}.000Z`));

[
  ['Monday', '2019-03-04'],
  ['Tuesday', '2019-03-05'],
  ['Wednesday', '2019-03-06'],
  ['Thursday', '2019-03-07'],
  ['Friday', '2019-03-08']
].forEach(([workingDay, isoDate]) => {
  it(`Returns false until 9:00am  ${workingDay}`, () => {
    expect(checkDate(isoDate, '08:59:59')).toBeFalse();
  });

  it(`Returns true between 9:00am and 4:59pm ${workingDay}`, () => {
    expect(checkDate(isoDate, '09:00:00')).toBeTrue();
    expect(checkDate(isoDate, '09:01:00')).toBeTrue();
    expect(checkDate(isoDate, '16:59:59')).toBeTrue();
  });

  it(`Returns false from 5:00pm  ${workingDay}`, () => {
    expect(checkDate(isoDate, '17:00:00')).toBeFalse();
    expect(checkDate(isoDate, '17:01:00')).toBeFalse();
  });
});

[['Saturday', '2019-03-09'], ['Sunday', '2019-03-10']].forEach(
  ([restDay, isoDate]) => {
    it(`Returns false on ${restDay}`, () => {
      expect(checkDate(isoDate, '08:59:59')).toBeFalse();
      expect(checkDate(isoDate, '09:00:00')).toBeFalse();
      expect(checkDate(isoDate, '09:01:00')).toBeFalse();
      expect(checkDate(isoDate, '16:59:59')).toBeFalse();
      expect(checkDate(isoDate, '17:00:00')).toBeFalse();
      expect(checkDate(isoDate, '17:01:00')).toBeFalse();
    });
  }
);
