import {} from 'react-native-teads-sdk-module';

// should we implement it ? I d'ont really know what it should do
export default class TeadsAdRatio {
  adRequestIdentifier: String;

  constructor(adRequestIdentifier: String) {
    this.adRequestIdentifier = adRequestIdentifier;
  }

  public calculateHeight = async () => {
    try {
      this.adRequestIdentifier = 'not implemented';
    } catch (e) {
      console.error(e);
    }
  };

  public value = async () => {
    try {
      this.adRequestIdentifier = 'not implemented';
    } catch (e) {
      console.error(e);
    }
  };
}
