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

  constructor(private pid: number) {
    this.inReadAdAdRatioMap = new Map<TeadsInReadAd, TeadsAdRatio>();
  }

  /**
   * Request an InRead ad on this placement
   * listen for events by implementing ``TeadsInReadAdPlacementDelegate``
   * - parameters:
   *     - requestSettings: settings ``TeadsInReadAdRequestSettings`` to tweak your needs
   * - returns: a unique request identifier, this identifier will be the same value of `TeadsInReadAd.requestIdentifier` property
   * - requires: ``TeadsInReadAdPlacement/delegate`` property must be set to perform ad request, otherwise didReceiveAd will not be triggered
   *
   */
  public requestAd = async (
    requestSettings: TeadsAdRequestSettings
  ): Promise<String> => {
    try {
      TeadsAdRequestSettings.toString;
      var id = this.bridgeInReadAdPlacement.requestAd(
        this.pid,
        requestSettings.mapValue
      );
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
