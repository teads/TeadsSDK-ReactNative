import { createInReadPlacement } from 'react-native-teads-sdk-module';
import TeadsAdPlacementSettings from './teads-ad-placement-settings';
import TeadsInReadAdPlacement from './teads-inread-ad-placement';

export default class Teads {
  public static async RNcreateInReadPlacement(
    pid: number,
    settings: TeadsAdPlacementSettings
  ): Promise<TeadsInReadAdPlacement | undefined> {
    console.log('log', TeadsAdPlacementSettings);
    await createInReadPlacement(pid, settings.mapValue);

    var placement = new TeadsInReadAdPlacement();
    return placement;
  }
}
