import { requireNativeComponent, ViewStyle } from 'react-native';

// InReadAdView updated through React Native
type inReadAdViewProps = {
  style: ViewStyle;
  adId: String | undefined;
};

export default requireNativeComponent<inReadAdViewProps>('RNInReadAdView');
