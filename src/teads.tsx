import TeadsInReadAdPlacement from './teads-inread-ad-placement';
import { NativeModules, Platform } from 'react-native';
import type TeadsAdPlacementSettings from './teads-ad-placement-settings';

const LINKING_ERROR =
  `The package 'react-native-teads-sdk-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

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
      var placement = new TeadsInReadAdPlacement();
      return placement;
    } catch (e) {
      console.error(e);
      return;
    }
  };
}
