import TeadsAdRatio from './teads-ad-ratio';
import TeadsAdRequestSettings from './teads-ad-request-settings';
import TeadsInReadAd from './teads-inread-ad';
import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-teads-sdk-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

export default class TeadsInReadAdPlacement {
  inReadAdAdRatioMap: Map<TeadsInReadAd, TeadsAdRatio>;

  private bridgeInReadAdPlacement = NativeModules.RNInReadAdPlacement
    ? NativeModules.RNInReadAdPlacement
    : new Proxy(
        {},
        {
          get() {
            throw new Error(LINKING_ERROR);
          },
        }
      );

  constructor() {
    this.inReadAdAdRatioMap = new Map<TeadsInReadAd, TeadsAdRatio>();
  }

  /**
   * comments todo
   *
   */
  public requestAd = async (
    requestSettings: TeadsAdRequestSettings
  ): Promise<String> => {
    try {
      TeadsAdRequestSettings.toString;
      var id = this.bridgeInReadAdPlacement.requestAd(requestSettings.mapValue);
      this.inReadAdAdRatioMap.set(
        new TeadsInReadAd(await id),
        new TeadsAdRatio(await id)
      );

      return await id;
    } catch (e) {
      console.error(e);
      return 'error:' + e;
    }
  };
}
