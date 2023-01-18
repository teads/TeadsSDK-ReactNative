import { NativeModules } from 'react-native';
import { LINKING_ERROR } from './constants';

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
   *The Teads inApp Validation tool is the best way to ensure all basic features and prerequisites are correctly implemented.
   * It is also useful during integration iterations.
   * - Warning: Remember to remove this setting when you are going in production.
   * - Note: Follow [validate your integration documentation](https://support.teads.tv/support/solutions/articles/36000314783-validation-tool)
   */
  public enableValidationMode = async () => {
    try {
      this.mapValue = await this.bridgeAdRequestSettings.enableValidationMode();
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * Set the publisher http page url that matches the content where Teads Ad will be loaded.
   *  - parameters:
   *      - urlString: The content related page URL.
   *  - requires: urlsString value should be a valid reachable URL mathing slot neighbor content
   */
  public pageUrl = async (urlString: String) => {
    try {
      this.mapValue = await this.bridgeAdRequestSettings.pageUrl(urlString);
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * Add extra informations to settings.
   *  - parameters:
   *      - value: Extra value.
   *      - key: Extra key.
   *  - note: for Adapater scope mainly
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
