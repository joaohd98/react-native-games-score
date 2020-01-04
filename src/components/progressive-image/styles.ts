import styled from 'styled-components/native';
import {Colors} from '../../theme/colors';
import {Animated} from 'react-native';

export const ProgressiveImageComponentStyles = {
  Image: styled(Animated.Image)`
    background-color: ${ Colors.skeleton[0] }
  `,
};
