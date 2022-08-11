import { requireNativeComponent, ViewStyle } from 'react-native';

type CustomViewViewProps = {
  style: ViewStyle;
};

export default requireNativeComponent<CustomViewViewProps>('CustomView');
