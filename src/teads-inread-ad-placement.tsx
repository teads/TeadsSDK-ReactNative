import TeadsAdRatio from './teads-ad-ratio';
import TeadsAdRequestSettings from './teads-ad-request-settings';
import TeadsInReadAd from './teads-inread-ad';
import { NativeModules } from 'react-native';
import { LINKING_ERROR } from './constants';

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
   * comments TODO
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
