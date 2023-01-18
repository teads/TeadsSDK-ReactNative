// should we implement it on ios ? just usefull for android i think
export default class TeadsAdRatio {
  adRequestIdentifier: String;

  constructor(adRequestIdentifier: String) {
    this.adRequestIdentifier = adRequestIdentifier;
  }

  /**
   * Not yet Implemented
   * iOS only
   * Compute the best height for your TeadsInReadAdView with the given width.
   *  - parameters:
   *     - width: the width of your TeadsInReadAdView.
   *  - returns: The calculated height that fit the creative aspect ratio.
   */
  public calculateHeight = async () => {
    try {
      this.adRequestIdentifier = 'not implemented';
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * Not yet Implemented
   * iOS only
   * Get a CGFloat ratio for a given width.
   *  You can use returned value to specify autolayout multiplier constraint.
   *  - parameters:
   *      - width: the width of your TeadsInReadAdView.
   *  - returns: The ratio corresponding to the given width.
   */
  public value = async () => {
    try {
      this.adRequestIdentifier = 'not implemented';
    } catch (e) {
      console.error(e);
    }
  };
}
