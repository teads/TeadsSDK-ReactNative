import TeadsAdRequestSettings from '../teads-ad-request-settings';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

test('enableValidationMode() returns a Map in TeadsAdRequestSettings', async () => {
  var testAdRequestSettings = new TeadsAdRequestSettings();
  await testAdRequestSettings.enableValidationMode();
  expect(testAdRequestSettings.mapValue).toBeInstanceOf(Map);
});

test('pageUrl() returns a Map in TeadsAdRequestSettings', async () => {
  var testAdRequestSettings = new TeadsAdRequestSettings();
  await testAdRequestSettings.enableValidationMode();
  expect(testAdRequestSettings.mapValue).toBeInstanceOf(Map);
});

test('addExtras() returns a Map in TeadsAdRequestSettings', async () => {
  var testAdRequestSettings = new TeadsAdRequestSettings();
  await testAdRequestSettings.enableValidationMode();
  expect(testAdRequestSettings.mapValue).toBeInstanceOf(Map);
});
