// should we implement it on ios ? just usefull for android i think
export default class TeadsAdRatio {
  adRequestIdentifier: String;

  constructor(adRequestIdentifier: String) {
    this.adRequestIdentifier = adRequestIdentifier;
  }

  /**
   * comments todo
   *
   */
  public calculateHeight = async () => {
    try {
      this.adRequestIdentifier = 'not implemented';
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * comments todo
   *
   */
  public value = async () => {
    try {
      this.adRequestIdentifier = 'not implemented';
    } catch (e) {
      console.error(e);
    }
  };
}
