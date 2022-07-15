import { requestAd } from 'react-native-teads-sdk-module';
import TeadsAdRatio from './teads-ad-ratio';
import type TeadsAdRequestSettings from './teads-ad-request-settings';
import TeadsInReadAd from './teads-inread-ad';

export default class TeadsInReadAdPlacement {
  //map de pair de InReadAd et AdRatio ?
  inReadAdAdRatioMap: Map<TeadsInReadAd, TeadsAdRatio>;

  constructor() {
    this.inReadAdAdRatioMap = new Map<TeadsInReadAd, TeadsAdRatio>();
  }

  public RNrequestAd = async (requestSettings: TeadsAdRequestSettings) => {
    try {
      var id = requestAd(requestSettings.mapValue);
      this.inReadAdAdRatioMap.set(
        new TeadsInReadAd(await id),
        new TeadsAdRatio(await id)
      );
      console.log('inreadadadrationmap', this.inReadAdAdRatioMap);
      return id;
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  //ajouter les délégate
}
