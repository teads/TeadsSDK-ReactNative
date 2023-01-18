import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-teads-sdk-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

export default class TeadsAdRequestSettings {
  mapValue: Map<String, any>;
  private bridgeAdRequestSettings = NativeModules.RNAdRequestSettings
    ? NativeModules.RNAdRequestSettings
    : new Proxy(
        {},
        {
          get() {
            throw new Error(LINKING_ERROR);
          },
        }
      );

  constructor() {
    this.mapValue = new Map<String, any>();
  }

  /**
   * comments todo
   *
   */ public enableValidationMode = async () => {
    try {
      this.mapValue = await this.bridgeAdRequestSettings.enableValidationMode();
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * comments todo
   *
   */
  public pageUrl = async (urlString: String) => {
    try {
      this.mapValue = await this.bridgeAdRequestSettings.pageUrl(urlString);
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * comments todo
   *
   */
  public addExtras = async (key: String, value: String) => {
    try {
      this.mapValue = await this.bridgeAdRequestSettings.addExtraSetting(
        key,
        value
      );
    } catch (e) {
      console.error(e);
    }
  };
}
