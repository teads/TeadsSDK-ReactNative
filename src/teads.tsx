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
   * comments todo
   *
   */
  static createInReadPlacement = async (
    pid: number,
    settings: TeadsAdPlacementSettings
  ) => {
    try {
      await this.bridgeTeads.createInReadPlacement(pid, settings.mapValue);
      console.log(TeadsAdPlacementSettings);
      var placement = new TeadsInReadAdPlacement();
      return placement;
    } catch (e) {
      console.error(e);
      return;
    }
  };
}
