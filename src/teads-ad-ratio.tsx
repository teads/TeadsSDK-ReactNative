import {} from 'react-native-teads-sdk-module';

// pas encore implémentée pb de private on un des params
export default class TeadsAdRatio {
  adRequestIdentifier: String;

  constructor(adRequestIdentifier: String) {
    this.adRequestIdentifier = adRequestIdentifier;
  }

  public RNcalculateHeight = async () => {
    try {
      this.adRequestIdentifier = 'not implemented';
    } catch (e) {
      console.error(e);
    }
  };

  public RNvalue = async () => {
    try {
      this.adRequestIdentifier = 'not implemented';
    } catch (e) {
      console.error(e);
    }
  };
}
