import { NativeModules } from 'react-native';
import { LINKING_ERROR } from './constants';

export default class TeadsAdRatio {
  width: number;
  height: number;

  private bridgeAdRatio = NativeModules.RNAdRatio
    ? NativeModules.RNAdRatio
    : new Proxy(
        {},
        {
          get() {
            throw new Error(LINKING_ERROR);
          },
        }
      );

  constructor(width: number) {
    this.width = width;
    this.height = 100;
  }

  /**
   * iOS only
   * Compute the best height for your TeadsInReadAdView with the given width.
   *  - parameters:
   *     - width: the width of your TeadsInReadAdView.
   *     - requestidentifier : the id of your TeadsAd
   *  - returns: The calculated height that fit the creative aspect ratio.
   */
  public calculateHeight = async (
    height: number,
    requestIdentifier: String
  ) => {
    try {
      this.height = await this.bridgeAdRatio.calculateHeight(
        height,
        requestIdentifier
      );
      return this.height;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  /**
   * iOS only
   * Get a CGFloat ratio for a given width.
   *  You can use returned value to specify autolayout multiplier constraint.
   *  - parameters:
   *      - width: the width of your TeadsInReadAdView.
   *  - returns: The ratio corresponding to the given width.
   */
  public value = async () => {
    try {
      this.width = 1;
    } catch (e) {
      console.error(e);
    }
  };
}
