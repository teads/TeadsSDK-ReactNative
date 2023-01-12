import { requireNativeComponent, ViewStyle } from 'react-native';

type inReadAdViewProps = {
  style: ViewStyle;
  adId: String | undefined;
};

export default requireNativeComponent<inReadAdViewProps>('RNInReadAdView');
