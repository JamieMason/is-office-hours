import 'expect-more-jest';
import { isOfficeHours } from '.';

it('is a function', () => {
  expect(isOfficeHours).not.toThrowError();
});
