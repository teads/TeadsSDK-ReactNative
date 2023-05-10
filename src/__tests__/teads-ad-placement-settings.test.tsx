import TeadsAdPlacementSettings from '../../src/teads-ad-placement-settings';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

test('disableCrashMonitoring() returns a Map in TeadsAdPlacementSettings', async () => {
  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  await testAdPlacementSetting.disableCrashMonitoring();
  expect(testAdPlacementSetting.mapValue).toBeInstanceOf(Map);
});

test('disableTeadsAudioSessionManagement() returns a Map in TeadsAdPlacementSettings', async () => {
  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  await testAdPlacementSetting.disableTeadsAudioSessionManagement();
  expect(testAdPlacementSetting.mapValue).toBeInstanceOf(Map);
});

test('enableDebug() returns a Map in TeadsAdPlacementSettings', async () => {
  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  await testAdPlacementSetting.enableDebug();
  expect(testAdPlacementSetting.mapValue).toBeInstanceOf(Map);
});

test('userConsent() returns a Map in TeadsAdPlacementSettings', async () => {
  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  await testAdPlacementSetting.userConsent('1', '1', 2, 1);
  expect(testAdPlacementSetting.mapValue).toBeInstanceOf(Map);
});

test('setUsPrivacy() returns a Map in TeadsAdPlacementSettings', async () => {
  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  await testAdPlacementSetting.setUsPrivacy('test');
  expect(testAdPlacementSetting.mapValue).toBeInstanceOf(Map);
});

test('disableBatteryMonitoring() returns a Map in TeadsAdPlacementSettings', async () => {
  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  await testAdPlacementSetting.disableBatteryMonitoring();
  expect(testAdPlacementSetting.mapValue).toBeInstanceOf(Map);
});

test('addExtras() returns a Map in TeadsAdPlacementSettings', async () => {
  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  await testAdPlacementSetting.addExtras('testing', 'test');
  expect(testAdPlacementSetting.mapValue).toBeInstanceOf(Map);
});

test('hideBrowserUrl() returns a Map in TeadsAdPlacementSettings', async () => {
  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  await testAdPlacementSetting.hideBrowserUrl();
  expect(testAdPlacementSetting.mapValue).toBeInstanceOf(Map);
});

test('toolBarBackgroundColor() returns a Map in TeadsAdPlacementSettings', async () => {
  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  await testAdPlacementSetting.toolBarBackgroundColor(0);
  expect(testAdPlacementSetting.mapValue).toBeInstanceOf(Map);
});
