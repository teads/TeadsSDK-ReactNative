import { LINKING_ERROR } from '../constants';

test('constant renders correctly', () => {
  var constantError = LINKING_ERROR;
  expect(constantError).toMatch(LINKING_ERROR);
});
