import styled from 'styled-components/native';
import {Colors} from '../../theme/colors';

export const ModalTransparentComponentStyles = {
  ModalContainer: styled.TouchableOpacity`
    height: 100%;
    width: 100%;
    background-color: ${Colors.backgroundModal};
  `
};
