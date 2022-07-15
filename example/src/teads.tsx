import { createInReadPlacement } from 'react-native-teads-sdk-module';
import type TeadsAdPlacementSettings from './teads-ad-placement-settings';

export default class Teads {
  
  public async RNcreateInReadPlacement(
    pid: number,
    settings: TeadsAdPlacementSettings
  ): Promise<void> {
    try {
      var placement = await createInReadPlacement(pid, settings.mapValue);
      console.log('placement from inside', placement);
      return placement;
    } catch (e) {
      console.log(e);
    }
  }
  
}
