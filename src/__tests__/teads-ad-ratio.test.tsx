import { Dimensions } from 'react-native';
import TeadsAdRatio from '../teads-ad-ratio';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

test('TeadsAdRatio should be createdwith default height', async () => {
  var testAdRatio = new TeadsAdRatio(Dimensions.get('window').width);
  expect(testAdRatio.height).toBe(100);
});

test('calculateHeight returns a number ', async () => {
  var testAdRatio = new TeadsAdRatio(Dimensions.get('window').width);
  expect(testAdRatio.height).toBeGreaterThan(99);
});
