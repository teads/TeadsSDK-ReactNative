import TeadsAdPlacementSettings from './teads-ad-placement-settings';
import TeadsInReadAdPlacement from './teads-inread-ad-placement';
import { NativeModules } from 'react-native';
import { LINKING_ERROR } from './constants';

export default class Teads {
  private static bridgeTeads = NativeModules.RNTeads
    ? NativeModules.RNTeads
    : new Proxy(
        {},
        {
          get() {
            throw new Error(LINKING_ERROR);
          },
        }
      );

  /**
   * Create a native ad placement to request native ads.
   * Pass your Teads [pid] and the placement's related [settings] you want to apply.
   * Returns a instance of placement .s
   *
   */
  static createInReadPlacement = async (
    pid: number,
    settings: TeadsAdPlacementSettings
  ) => {
    try {
      await this.bridgeTeads.createInReadPlacement(pid, settings.mapValue);
      var placement = new TeadsInReadAdPlacement(pid);
      return placement;
    } catch (e) {
      console.error(e);
      return;
    }
  };
}
