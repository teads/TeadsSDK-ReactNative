import { requireNativeComponent, ViewStyle } from 'react-native';

type CustomViewViewProps = {
  style: ViewStyle;
  adId: String | undefined;
};

export default requireNativeComponent<CustomViewViewProps>('CustomView');
