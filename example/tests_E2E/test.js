const { remote } = require('webdriverio');

const capabilities = {
  'platformName': 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'com.example.reactnativeteadssdkmodule',
  'appium:appActivity': 'com.example.reactnativeteadssdkmodule.MainActivity',
};

const wdOpts = {
  host: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const buttonClaimAd = await driver.$(
      '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button[1]'
    );
    await buttonClaimAd.click();
    await driver.pause(10000);
    const adId = await driver.$(
      '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]'
    );
    let adIdString = adId.getText();
    adIdString = (await adIdString).slice(5);
    console.log(adIdString);
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
