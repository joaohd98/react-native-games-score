import styled from 'styled-components/native';
import {Colors} from '../../../../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export const GamesTrailerModalComponentStyles = {
  ModalContainer: styled.TouchableOpacity`
    height: 100%;
    width: 100%;
    background-color: ${Colors.backgroundModal};
  `,
  ModalView: styled.TouchableOpacity`
    width: 100%;
    background-color: ${Colors.white};
    margin: auto;
    padding: 30px 20px;
  `,
  CloseIconContainer: styled.TouchableOpacity`
    position: absolute;
    right: 5;
    top: 5;
  `,
  CloseIcon: styled(Icon)`
    font-size: 30px;
    color: ${Colors.red}

  `
};
