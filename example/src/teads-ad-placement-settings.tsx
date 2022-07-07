import { disableCrashMonitoring } from 'react-native-teads-sdk-module';

export default class TeadsAdPlacementSettings {
  mapValue: Map<String, any>;

  constructor() {
    this.mapValue = new Map<String, any>();
  }

  public RNdisableCrashMonitoring = async () => {
    try {
      this.mapValue = await disableCrashMonitoring();
      console.log(this.mapValue);
    } catch (e) {
      console.error(e);
    }
  };
}
