import { createInReadPlacement } from 'react-native-teads-sdk-module';
import type TeadsAdPlacementSettings from './teads-ad-placement-settings';
import TeadsInReadAdPlacement from './teads-inread-ad-placement';

export default class Teads {
  public static async createInReadPlacement(
    pid: number,
    settings: TeadsAdPlacementSettings
  ): Promise<TeadsInReadAdPlacement | undefined> {
    await createInReadPlacement(pid, settings.mapValue);

    var placement = new TeadsInReadAdPlacement();
    return placement;
  }
}
