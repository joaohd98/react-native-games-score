import styled from 'styled-components/native';
import {Colors} from '../../../../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ModalTransparentComponent} from '../../../../../components/modal-transparent';
import Video from 'react-native-video';

export const GamesTrailerModalComponentStyles = {
  Modal: styled(ModalTransparentComponent)`
    width: 100%;
    height: 50%;
    margin: auto;
    background-color: ${Colors.white};
    padding: 30px 20px;
  `,
  VideoContainer: styled.View`
    margin-top: 10px;
    height: 100%;
    width: 100%; 
  `,
  Video: styled(Video)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%; 
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
