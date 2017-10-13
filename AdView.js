import React, { Component, PropTypes } from 'react';
import { requireNativeComponent, Dimensions, View } from 'react-native';

export class AdView extends Component {
  constructor() {
    debugger;
    super();

    const { width } = Dimensions.get('window');
    this.state = {
      width,
      height: 1
    };
  }

  onTeadsLayout = ({ nativeEvent }) => {
    const { width, height } = nativeEvent.layout
    this.setState({ width, height })
  }

  render() {
    return (
      <TeadsAdView
        style={{
          width: this.state.width,
          height: this.state.height,
          marginVertical: 5,
        }}
        onTeadsLayout={this.onTeadsLayout}
      />
    );
  }
}

const propTypes = {
  onTeadsLayout: PropTypes.func
}

const defaultProps = {
  onTeadsLayout: () => {}
}

const iface = {
  name: 'AdView',
  propTypes: {
    ...propTypes,
    ...View.propTypes,
  },
  defaultProps,
}

const TeadsAdView = requireNativeComponent(
  'TeadsAdView',
  iface,
)

AdView.propTypes = propTypes
AdView.defaultProps = defaultProps

export default AdView

