import {
  enableValidationMode,
  pageUrl,
  addExtraSetting,
} from 'react-native-teads-sdk-module';

export default class TeadsAdRequestSettings {
  mapValue: Map<String, any>;

  constructor() {
    this.mapValue = new Map<String, any>();
  }

  public RNenableValidationMode = async () => {
    try {
      this.mapValue = await enableValidationMode();
    } catch (e) {
      console.error(e);
    }
  };

  public RNpageUrl = async (urlString: String) => {
    try {
      this.mapValue = await pageUrl(urlString);
    } catch (e) {
      console.error(e);
    }
  };

  public RNaddExtras = async (key: String, value: String) => {
    try {
      this.mapValue = await addExtraSetting(key, value);
    } catch (e) {
      console.error(e);
    }
  };
}
