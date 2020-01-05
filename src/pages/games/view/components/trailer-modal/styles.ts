import styled from 'styled-components/native';
import {Colors} from '../../../../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ModalTransparentComponent} from '../../../../../components/modal-transparent';

export const GamesTrailerModalComponentStyles = {
  Modal: styled(ModalTransparentComponent)`
    position: absolute;
    width: 100%;
    bottom: 50%;
    background-color: ${Colors.white};
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
