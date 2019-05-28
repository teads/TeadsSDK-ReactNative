import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent, Dimensions, View } from 'react-native';

export class AdView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: Dimensions.get('window').width,
            height: 2,
            adHeight: Dimensions.get('window').width / 1.77
        };
    }

    onTeadsAdLoaded = ({nativeEvent}) => {
        this.setState({
            height: this.state.width / nativeEvent.adRatio
        })
    }

    render() {
        return (
            <TeadsNativeAdView
                enableDebud={true}
                style={{
                    width: Math.round(this.state.width),
                    height: 300
                }}
                pid={84242}
                load={true}
                onTeadsAdLoaded={this.onTeadsAdLoaded}
            />
        )
    }
}

AdView.propTypes = {
    onTeadsLayout: PropTypes.func
}

const TeadsNativeAdView = requireNativeComponent(
    'TFACustomAdView',
    AdView,
)

export default AdView

