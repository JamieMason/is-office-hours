import 'expect-more-jest';
import { outsideOfficeHours } from './';
import { pad } from './lib/pad';
import { range } from './lib/range';

describe('Dates during office hours', () => {
  range(9, 16).forEach((hour) => {
    range(0, 59).forEach((minute) => {
      const eveStart = new Date('2019-03-04T18:00:00.000Z');
      const eveEnd = new Date('2019-03-04T22:59:59.000Z');
      const iso8601 = `2019-03-04T${pad(hour)}:${pad(minute)}:00.000Z`;
      const date = new Date(iso8601);
      const epoch = date.getTime();
      const nextDate = outsideOfficeHours(date);

      it(`Moves ${iso8601}`, () => {
        expect(nextDate.getTime()).toBeLessThanOrEqual(eveEnd.getTime());
        expect(nextDate.getTime()).toBeGreaterThanOrEqual(eveStart.getTime());
      });

      it('Does not mutate the original Date', () => {
        expect(date.getTime()).toEqual(epoch);
      });
    });
  });
});

describe('Dates outside office hours', () => {
  range(0, 8)
    .concat(range(17, 23))
    .forEach((hour) => {
      range(0, 59).forEach((minute) => {
        const iso8601 = `2019-03-04T${pad(hour)}:${pad(minute)}:00.000Z`;
        const date = new Date(iso8601);

        it(`Leaves ${iso8601} untouched`, () => {
          expect(outsideOfficeHours(date)).toBe(date);
        });
      });
    });
});
