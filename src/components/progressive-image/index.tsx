import React, {Component} from 'react';
import {
  Animated, Easing, ImageProps,
} from 'react-native';
import {Colors} from '../../theme/colors';
import {ProgressiveImageComponentStyles} from './styles';

interface State {
  skeletonAnimation: Animated.Value;
  opacityAnimation: Animated.Value;
}

export class ProgressiveImageComponent extends Component<ImageProps, State> {

  state = {
    skeletonAnimation: new Animated.Value(0),
    opacityAnimation: new Animated.Value(1),
  };

  componentDidMount = () => {

    Animated.loop(
      Animated.timing(this.state.skeletonAnimation, {
        toValue: 300,
        duration: 3000
      })
    ).start();

  };

  onLoadEnd = () => {

    this.state.opacityAnimation.setValue(0.1);

    Animated.timing(this.state.opacityAnimation, {
      toValue: 1,
    }).start();

  };

  render = () => {

    const { Image } = ProgressiveImageComponentStyles;
    const { style } = this.props;

    const {
      skeletonAnimation,
      opacityAnimation,
    } = this.state;

    const background = {
      backgroundColor: skeletonAnimation.interpolate({
        inputRange: [0, 50, 100, 150, 200, 250, 300],
        outputRange: Colors.skeleton,
      }),
    };

    const opacity = {
      opacity: opacityAnimation
    };

    return <Image
      {...this.props}
      onLoad={this.onLoadEnd}
      style={[style, { ...background }, { ...opacity }]}
    />;

  }

}
